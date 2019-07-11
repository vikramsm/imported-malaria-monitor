import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BackendService } from './backend.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


const malariaJsonTestData = {
  "Country": "Brazil",
  "State": "Acre",
  "Municipality": "Acrelândia",
  "count": 90
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

  it('should call the getMalariaJson service at \"sameMuni\"', async () => {
    backendService.getMalariaJson('sameMuni').subscribe(data => {});
    const req = httpController.expectOne(req => req.url.includes('sameMuni'));
    httpController.verify();
    expect(req.request.method).toEqual('GET');
  });

  it('should call getGeoJson service at \"static/BRA_adm3_NorthWest\"', async () => {
    backendService.getGeoJson().subscribe(data => {});
    const req = httpController.expectOne(`static/BRA_adm3_NorthWest.json`);
    httpController.verify();
    expect(req.request.method).toEqual('GET');
  });

  it('should return a resonse type of json', async () => {
    backendService.getGeoJson().subscribe();
    const req = httpController.expectOne(req => req.url.includes('static'));
    expect(req.request.responseType == 'json').toBeTruthy();
    req.flush({});
  });

});
