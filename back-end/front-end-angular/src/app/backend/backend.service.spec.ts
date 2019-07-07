import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BackendService } from './backend.service';

describe('BackendService', () => {
  let backendService: BackendService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    backendService = TestBed.get(BackendService);
  });
  it('should create the backend service', () => {
    expect(backendService).toBeTruthy();
  });
});

const mockMalariaData = {
  "cases": [{
    "LOC_NOTIF_0": "Brazil",
    "LOC_NOTIF_1": "Acre",
    "LOC_NOTIF_2": "Acrelândia",
    "LOC_NOTIF_3": "Acrelândia",
    "LOC_INFE_0": "Brazil",
    "LOC_INFE_1": "Acre",
    "LOC_INFE_2": "Acrelândia",
    "LOC_INFE_3": "Acrelândia",
    "DT_EXAME": "15/11/18",
    "DT_NOTIF": "15/11/18",
  },{
    "LOC_NOTIF_0": "Brazil",
    "LOC_NOTIF_1": "Acre",
    "LOC_NOTIF_2": "Acrelândia",
    "LOC_NOTIF_3": "Acrelândia",
    "LOC_INFE_0": "Brazil",
    "LOC_INFE_1": "Amazonas",
    "LOC_INFE_2": "Apuí",
    "LOC_INFE_3": "Apuí",
    "DT_EXAME": "15/14/18",
    "DT_NOTIF": "15/14/18",
  }]
};

const mockGeoJsonData = [{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -67.10585784912104,
              -9.688110351562443
            ],
            [
              -67.0598373413086,
              -9.706650733947754
            ],
            [
              -66.80647277832031,
              -9.814519882202092
            ]
          ]
        ]
      },
      "properties": {
        "ID_0": 33,
        "ISO": "BRA",
        "NAME_0": "Brazil",
        "ID_1": 1,
        "NAME_1": "Acre",
        "ID_2": 1,
        "NAME_2": "Acrelândia",
        "ID_3": 1,
        "NAME_3": "Acrelândia",
        "CCN_3": 0,
        "CCA_3": "",
        "TYPE_3": "Distrito",
        "ENGTYPE_3": "District",
        "NL_NAME_3": "",
        "VARNAME_3": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -70.62722778320307,
              -10.71923923492426
            ],
            [
              -70.61453247070307,
              -10.705829620361328
            ],
            [
              -70.59915161132812,
              -10.699858665466309
            ]
          ]
        ]
      }
    }
  ]
}];
