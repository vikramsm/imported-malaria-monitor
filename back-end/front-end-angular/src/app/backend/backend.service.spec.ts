import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BackendService } from './backend.service';

const malariaJsonTestData = {
  "Country": "Brazil",
  "State": "Acre",
  "Municipality": "Acrelândia",
  "count": 23
};

describe('BackendService', () => {
  let backendService: BackendService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [BackendService]
    });
    backendService = TestBed.get(BackendService);
    httpController = TestBed.get(HttpTestingController);
  });

  it('should create the backend service', () => {
    expect(backendService).toBeTruthy();
  });

  it('should call the getMalariaJson service at \"api/getmap/\"', async () => {
    backendService.getMalariaJson().subscribe(data => {});
    const req = httpController.expectOne(`api/getmap/`);
     httpController.verify();
     expect(req.request.method).toEqual('GET');
  });

  it('should call getGeoJson service at \"static/BRA_adm3_NorthWest\"', async () => {
    backendService.getGeoJson().subscribe(data => {});
    const req = httpController.expectOne(`static/BRA_adm3_NorthWest.json`);
    httpController.verify();
    expect(req.request.method).toEqual('GET');
  });

  it('should get data from getBackupMalariaJson service', async () => {
    backendService.getBackupMalariaJson().subscribe(data => {});
    const req = httpController.expectOne(req => req.url.includes('static'));
    expect(req.request.method).toEqual('GET');
  });

  it('should return a resonse type of json', async () => {
    backendService.getGeoJson().subscribe();
    const req = httpController.expectOne(req => req.url.includes('static'));
    expect(req.request.responseType == 'json').toBeTruthy();
    req.flush({});
  });

});
