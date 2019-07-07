import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from  '@angular/common/http'
import { BackendService } from '../backend/backend.service';
import { MapComponent } from './map.component';
import { Observable, of } from 'rxjs';
//import { of } from 'rxjs/add/observable/of';


describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;
  let backendSpy: jasmine.SpyObj<BackendService>;

  beforeEach(async(() => {
    backendSpy = jasmine.createSpyObj('BackendService', ['getGeoJson', 'getBackupGeoJson']);

    //spyOn(backendSpy, 'getGeoJson').and.callFake(() => of(new Object("abc")));
    //spyOn(backendSpy, 'getBackupGeoJson').and.callFake(() => of(new Object("abc")));
    TestBed.configureTestingModule({
      declarations: [ MapComponent ],
      providers: [
        { provide: BackendService,
          useValue: backendSpy }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', async () => {
    expect(component).toBeTruthy();
  });
});
