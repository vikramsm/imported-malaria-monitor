/**
** API:
Example call: api/getmap?municipality=Acrel%C3%A2ndia&country=Brazil&caseType=sameMuni&yearMonth=2019-01

*** Case type keys:
AllCases
SameMuni
MuniToMuni
StateToMuni
CountryToMuni

*** yearMonth:
Format <yyyy-mm>

** 5 query Parameters:
yearMonth = <yyyy-mm>
caseType = [ AllCases, SameMuni, MuniToMuni, StateToMuni, CountryToMuni]
muni = <target municipality> // can be empty, return data for all muni in the target state or country
state = <target state,  always Amazonas>
country = <target country, always Brazil>

i.e. if the REST endpoint could make a query on the database data with a filter of yyyy-mm and/or a filter of caseType. And return a JSON object {“results”: [{}, {}, {}]} where the {} contain that county json the endpoint current returns.
*/


declare var require: any
import * as leaflet from 'leaflet';
import { Component, OnInit } from '@angular/core';
import {forkJoin} from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BackendService } from '../backend/backend.service';

export interface CaseType {
  key: string;
  value: string;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [BackendService]
})

export class MapComponent implements OnInit {
  map = null;
  location;
  malariaCountMap;
  malariaDefaultCaseType="sameMuni";
  selectedCase = this.malariaDefaultCaseType;
  brasilNormalizedName = "Brasil"
  number_cases = 0;
  trimmedJson = '';
  errormessage = '';
  mapboxRegisteredDns = "imported-malaria-monitor.herokuapp.com";
  months = ["January", "Feburary", "March", "April", "May",
           "June", "July", "August", "September",
           "October", "November", "December"];

  years = [2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000];

  caseTypes: CaseType[] = [
           {key: 'test', value: 'All Cases'},
           {key: 'sameMuni', value: 'Same municipality'},
           {key: 'otherMuni', value: 'From other municipality'},
           {key: 'otherState', value: 'From other state'},
           {key: 'otherCountry', value: 'From other country'}];

  legendrows = [{"0 cases": "cases-0"},
            {"10 > cases": "cases-to-10"},
            {"50 > cases": "cases-to-50"},
            {"100 > cases": "cases-to-100"},
            {"500 > cases": "cases-to-100"},
            {"1000 > cases": "cases-to-100"}];

  constructor(private service: BackendService) {}

  ngOnInit(){
    this.location =  window.location.hostname;
    this.getDataAndStartMap(this.malariaDefaultCaseType);
  }

  getDataAndStartMap = async(caseType) => {
    console.log("about to path " + caseType);
    forkJoin(
      this.service.getMalariaJson(caseType),
      this.service.getGeoJson()
    ).subscribe(([malariajson, geojson]) => {
        this.makeMalariaCountLookup(malariajson);
        this.makeMap(geojson);
    });
   }

   //ref: https://leafletjs.com/examples/choropleth/
   getColor = (d) => {
      if (d == null) d = 0 // Math.floor(Math.random() * 4);
      return (0 <= d && d < 25) ? '#fef0d9' :
             (25 <= d && d < 50) ? '#fdcc8a' :
             (50 <= d && d < 75)  ? '#fc8d59' :
                        '#d7301f' ; //d ===4
  }

  selectChange(event) {
      this.selectedCase = event;
      console.log(`Getting data for case type ${this.selectedCase}`);
      this.getDataAndStartMap(this.selectedCase);
   }

  getDensity(props) {
    let key = `${props.NAME_2}, ${props.NAME_1}, ${this.brasilNormalizedName}`.toUpperCase();
    let count = this.malariaCountMap[key] | 0;
    console.log(`returning  density ${count} for ${key}`)
    return count;
  }

  style = (feature) => {
      let density = this.getDensity(feature.properties);
      let color = this.getColor(density);
      console.log(`Fill color is ${color} for density ${density}`)
      return {
          fillColor: color,
          weight: 2,
          opacity: 1,
          fillOpacity: 0.7
      };
  };

  getMap = () => {
    return this.map;
  };

  makeMalariaCountLookup = (malJson) => {
    const mapString = JSON.stringify(malJson);
    console.log("MAL: " + mapString);

    this.malariaCountMap = {};
    malJson.forEach(item => {
      let key = `${item.Municipality}, ${item.State}, ${this.brasilNormalizedName}`.toUpperCase();
      this.number_cases += item.count;
      console.log(`${key} has ${item.count}, total ${this.number_cases}`);
      this.malariaCountMap[`${item.Municipality}, ${item.State}, ${this.brasilNormalizedName}`.toUpperCase()] = `${item.count}`;
    });
  }

  makeMap = (geoJson) => {
    // if refreshing map, remove the old one
    if (this.map && this.map.off) {
      this.map.off();
      this.map.remove();
    }

    // start with a view in the middle of Brazil and set zoom and min zoom
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
                '<i style="background:' + self.getColor(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }
        return div;
    };
    legend.addTo(this.map);

    // Add the goemap and test adding data to the item
    leaflet.geoJSON(geoJson, {
      style: this.style,
      onEachFeature: function (feature, layer) {
        let p = feature.properties;
        let name = p.NAME_3;
        let fullName = `${p.NAME_2}, ${p.NAME_1}, ${this.brasilNormalizedName}`;
        let density = self.getDensity(fullName.toUpperCase());
        console.log(`feature props key ${fullName}  density ${density}`);
        layer.bindPopup(`<h1>${name}</h1><div class="popup">${fullName}</div><div <div class="popup">Count ${density}</div>`);
      }
    }).addTo(this.map);

    // this only works on the heroku DNS, so ignore it if hot on heroku
    if (this.location.url && this.location.url.includes(this.mapboxRegisteredDns)) {
      console.log("getting tiles");
      leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.outdoors',
        accessToken: 'pk.eyJ1Ijoia2RvbGFuIiwiYSI6ImNqeHYzZnRmZjAwdHAzY283azFkdTFzYmsifQ.K-2XaOWsVjN5uIzKAUfLBg'
      }).addTo(this.map);
    }
  } // end getMap

  handleError = (err) => {
    this.errormessage = "Cound not retrieve map data";
  }
}
