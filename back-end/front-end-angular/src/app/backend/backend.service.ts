import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class BackendService {
  mockEndpointToMakeAngualrZoneAsynch = 'http://localhost:8080/nonexistentendpoint';
  malariaApiUrl = '/api/getmap/?caseType=';
  staticGeoJsonUrl = 'static/BRA_adm3_NorthWest.json';
  malariaStaticJson = 'static/BRA_sameMuni_Amazonas.json';
  homeKey = 'imported-malaria-monitor';
  immDnsApi = 'https://imported-malaria-monitor.herokuapp.com/api/getmap/?caseType=';
  isAtHomeKey = true;

  constructor(private http: HttpClient) {
    let location =  window.location.hostname;
    if (location && !location.includes(this.homeKey)) {
      this.isAtHomeKey = false;
    }
  }

  getGeoJson() {
     return this.http.get(this.staticGeoJsonUrl);
  };

  getMalariaJson(type: string) {
    if (this.isAtHomeKey) {
      return this.http.get(this.malariaApiUrl + type);
    } else {
      // local
      let path = this.malariaStaticJson.replace('sameMuni', type);
      console.log(path);
      return this.http.get(path);
    }
  };
}
