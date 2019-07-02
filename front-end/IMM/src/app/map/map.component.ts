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
    var map = leaflet.map('map').setView([-10.00, -53.00], 6);

    // option to limit view for faster rendering
    const selectedStates = [] // i.e. ["São Paulo", "Bahai"];

    // filter county selectio by selected state
    function stateFilter(feature) {
      if (!selectedStates || selectedStates.length  === 0) return true;
      selectedStates.forEach((state) => {
        if (state === feature.properties.NAME_1) return true;
      });
    }

    // Add the goemap and test adding data to the item
    leaflet.geoJSON(geoJson, {
      filter: stateFilter,
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