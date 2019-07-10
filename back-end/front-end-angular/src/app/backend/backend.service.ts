import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const testExample = {
  "Country": "Brazil",
  "State": "Acre",
  "Municipality": "Acrelândia",
  "count": 23
};

@Injectable()
export class BackendService {
  mockEndpointToMakeAngualrZoneAsynch = 'http://localhost:8080/nonexistentendpoint';
  malariaApiUrl = 'api/getmap/';
  staticGeoJsonUrl = 'static/BRA_adm3_NorthWest.json';
  malariaJsonTestData = 'static/BRA_testMuniMalaria.json';

  constructor(private http: HttpClient) {}

  getAnguarlInOkStateToPUllInJson(){
    return this.http.get(this.mockEndpointToMakeAngualrZoneAsynch)
  }

  getGeoJson() {
     return this.http.get(this.staticGeoJsonUrl);
  }
  getMalariaJson() {
    return this.http.get(this.malariaApiUrl);
  }
  getBackupMalariaJson() {
    return this.http.get(this.malariaJsonTestData);
  }
}
