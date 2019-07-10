declare var require: any
import * as leaflet from 'leaflet';
import { Component, OnInit } from '@angular/core';
//import { HttpClientModule } from  '@angular/common/http'
import { BackendService } from '../backend/backend.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [BackendService]
})
export class MapComponent implements OnInit {
  map;
  //model;
  number_cases = 0;
  trimmedJson = '';
  errormessage = '';
  months = ["January", "Feburary", "March", "April", "May",
           "June", "July", "August", "September",
           "October", "November", "December"];

  
  //days: int[] = [];
  //days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, //28, 29, 30, 31];


  years = [2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000];

  cases = ["All Cases",
           "From same municipality",
           "Imported from other municipality",
           "Imported from other state",
           "Imported from other country"];

  legendrows = [{"0 cases": "cases-0"},
            {"10 > cases": "cases-to-10"},
            {"50 > cases": "cases-to-50"},
            {"100 > cases": "cases-to-100"},
            {"500 > cases": "cases-to-100"},
            {"1000 > cases": "cases-to-100"}];

  constructor(private service: BackendService) {

  }

  ngOnInit() {

    this.service.getGeoJson()
          .toPromise()
          .then(response => {this.makeMap(response)})
          .catch((error:any) => {this.getBackupGeoJson()});
   
          
  }
  //rehttps://leafletjs.com/examples/choropleth/
   getColor = (d) => {
     // TODO: temp random
      if (d == null) d =  Math.floor(Math.random() * 4);
      return d === 1 ? '#fef0d9' :
             d === 2 ? '#fdcc8a' :
             d === 3  ? '#fc8d59' :
                        '#d7301f' ; //d ===4
  }

  style = (feature) => {
      return {
          fillColor: this.getColor(feature.properties.density),
          weight: 2,
          opacity: 1,
          fillOpacity: 0.7
      };
  };

  getBackupGeoJson = () => {
      this.service.getBackupGeoJson()
      .toPromise()
      .then(response => {this.makeMap(response)})
  };

  getMap = () => {
    return this.map;
  };


  makeMap(geoJson) {
    // if refreshing map, remove the old one
    if (this.map && this.map.off) {
      this.map.off();
      this.map.remove();

    }
    

    // start with a view in the middle of Brazil, zoom level 6
    this.map = leaflet.map('map', {minZoom: 4}).setView([-7.50, -59.00], 5);

    let legend = leaflet.control({position: 'bottomright'});
    let self = this;
    this.map.attributionControl.addAttribution('Imported Malaria');
    legend.onAdd = (map) => {
        var div = leaflet.DomUtil.create('div', 'info legend'),
            grades = [0, 25, 50, 75, 100],
            labels = [];
        for (var i = 0; i < grades.length - 1; i++) {
            div.innerHTML +=
                '<i style="background:' + self.getColor(i + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }
        return div;
    };
    legend.addTo(this.map);

    // Add the goemap and test adding data to the item
    this.map = leaflet.geoJSON(geoJson, {
      style: this.style,
      onEachFeature: function (feature, layer) {
        let p = feature.properties;
        let name = p.NAME_3;
        let density = Math.floor(Math.random() * 4); //TODO: just random number fo now
        let fullName = `${p.NAME_2},${p.NAME_1},${p.NAME_0}`;
        layer.bindPopup(`<h1>${name}</h1><div class="popup">${fullName}</div><div <div class="popup">Cases (TODO) ${density}</div>`);
      }
    }).addTo(this.map);

    this.map = leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.outdoors',
      accessToken: 'pk.eyJ1Ijoia2RvbGFuIiwiYSI6ImNqeHYzZnRmZjAwdHAzY283azFkdTFzYmsifQ.K-2XaOWsVjN5uIzKAUfLBg'
    }).addTo(this.map);

  } // end getMap

  handleError = (err) => {
    this.errormessage = "Cound not retrieve map data";
  }
}
