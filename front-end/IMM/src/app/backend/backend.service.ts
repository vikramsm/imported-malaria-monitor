import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(private http: HttpClient) {}
  backendUrl = 'localhost:8080/geojson/brazil';
  geoJsonJUrl = '../../assets/BRA_adm3.json';
  getGeoJson() {
     return this.http.get(this.backendUrl);
  }
  getBackupGeoJson() {
     return this.http.get(this.geoJsonJUrl);
  }
}
