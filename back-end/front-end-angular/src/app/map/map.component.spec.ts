import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MapComponent } from './map.component';
import { BackendService } from '../backend/backend.service';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { FormsModule } from "@angular/forms";

describe('MapComponent', () => {

  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;
  let mockBackendService;

  beforeEach(async(() => {
    mockBackendService = jasmine.createSpyObj('service',
         ['getGeoJson','getMalariaJson']
    );
    TestBed.configureTestingModule({
      declarations: [ MapComponent ],
      imports: [ FormsModule ]
    });
    TestBed.overrideProvider(BackendService, {
      useValue: mockBackendService
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(MapComponent);
      component = fixture.componentInstance;
      mockBackendService.getGeoJson.and.returnValue(of(mockGeoJsonData)); // added this line
      mockBackendService.getMalariaJson.and.returnValue(of(mockMalariaData)); // added this line
      fixture.detectChanges();
    })
  }));

  it('should be created', async (done) => {
    expect(component).toBeTruthy();
    done();
  });

  it('should have created a map object', async (done) => {
    expect(component.getMap().isEmpty).toBeFalsy();
    done();
  });

  it('should have a map object with a zoom level', async (done) => {
    expect(component.getMap().getZoom()).toEqual(5);
    done();
  });

  it('should have a minimum zoom level', async (done) => {
    expect(component.getMap().getMinZoom()).toEqual(4);
    done();
  });

  it('should have a title', () => {
    const de = fixture.debugElement.query(By.css('h2'));
    const el = de.nativeElement;
    expect(el.textContent).toContain("Brazil By Municipality");
  });

  it('should have an information section', () => {
    const de = fixture.debugElement.query(By.css('.info-section'));
    expect(de.nativeElement).toBeTruthy();
  });

  it('should have a month UI element', () => {
    const de = fixture.debugElement.query(By.css('#month-filter'));
    expect(de.nativeElement).toBeTruthy();
  });

  it('should have a year UI element', () => {
    const de = fixture.debugElement.query(By.css('#year-filter'));
    expect(de.nativeElement).toBeTruthy();
  });

  it('should have a cases type UI element', () => {
    const de = fixture.debugElement.query(By.css('#case-filter'));
    expect(de.nativeElement).toBeTruthy();
  });

  it('should have a map UI element', () => {
    const de = fixture.debugElement.query(By.css('#map'));
    expect(de.nativeElement).toBeTruthy();
  });

  it('should show total cases found', () => {
    const de = fixture.debugElement.query(By.css('#cases-total-found'));
    expect(de.nativeElement).toBeTruthy();
  });

});

const mockMalariaData = [
  {
    "Country": "BRASIL",
    "State": "AMAZONAS",
    "Municipality": "ALVARÃES",
    "count": 43
  },
  {
    "Country": "BRASIL",
    "State": "AMAZONAS",
    "Municipality": "AMATURÁ",
    "count": 71
  },
  {
    "Country": "BRASIL",
    "State": "AMAZONAS",
    "Municipality": "ANAMÃ",
    "count": 8
  }];

const mockGeoJsonData = [
  {
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
      }
    ]
  }
];
