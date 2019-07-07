import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BackendService {
  constructor(private http: HttpClient) {}
  backendUrl = 'localhost:8080/geojson/brazil';
  geoJsonJUrl = 'static/BRA_adm3_NorthWest.json';
  getGeoJson() {
     return this.http.get(this.backendUrl);
  }
  getBackupGeoJson() {
     return this.http.get(this.geoJsonJUrl);
  }
}
