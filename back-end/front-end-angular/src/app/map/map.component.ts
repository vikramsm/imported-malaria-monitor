declare var require: any
import * as leaflet from 'leaflet';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http'
import { BackendService } from '../backend/backend.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  number_cases = 0;
  trimmedJson = '';
  months = ["January", "Feburary", "March", "April", "May",
           "June", "July", "August", "September",
           "October", "November", "December"];

  cases = ["Total",
           "from same municipality",
           "imported from other municipality",
           "imported from other state",
           "imported from other country"];

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

  getBackupGeoJson(){
      this.service.getBackupGeoJson()
      .toPromise()
      .then(response => {this.makeMap(response)})
  };

  makeMap(geoJson) {

    // start with a view in the middle of Brazil, zoom level 6
    var map = leaflet.map('map').setView([-5.00, -59.00], 6);

    // Add the goemap and test adding data to the item
    leaflet.geoJSON(geoJson, {
      onEachFeature: function (feature, layer) {
        let p = feature.properties;
        let name = p.NAME_3;
        let fullName = `${p.NAME_2},${p.NAME_1},${p.NAME_0}`;
        layer.bindPopup('<h1>' + name + '</h1><p>' + fullName + '</p>');
      }
    }).addTo(map);
  }

  handleError(err) {
    //this.errormessage = "Cound not retrieve map data";
  }
}
