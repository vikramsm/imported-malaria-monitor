import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BackendService } from './backend.service';

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

  it('should call the getGeoJson service at \"localhost:8080/geojson/brazil\"', async () => {
    backendService.getGeoJson().subscribe(data => {});
    const call: TestRequest =
      httpController.expectOne(`localhost:8080/geojson/brazil`);
     httpController.verify();
     // the empty expect used to acknowledge the verify text above
     expect().nothing();
  });

  it('should call getBackupGeoJson service at \"static/BRA_adm3_NorthWest\"', async () => {
    backendService.getBackupGeoJson().subscribe(data => {});
    const call: TestRequest =
      httpController.expectOne(`static/BRA_adm3_NorthWest.json`);
    httpController.verify();
    // the empty expect used to acknowledge the verify text above
    expect().nothing();
  });

  it('should return a resonse type of json', async () => {
    backendService.getBackupGeoJson().subscribe();
    const req = httpController.expectOne(req => req.url.includes('static'));
    expect(req.request.responseType == 'json').toBeTruthy();
    req.flush({});
  });

});
