(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n\n<mat-tab-group>\n\n  \t\t<mat-tab label=\"Map\">\n  \t\t\t<app-map>\n\t\t\t\t<div\n\t\t\t\t\tleaflet\n\t\t\t\t\t(leafletMapReady) = \"onMapReady($event)\">\n\t\t\t\t</div>\n\t\t\t</app-map>\n\t\t</mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/map/map.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/map/map.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Brazil By Municipality</h2>\n<div class=\"info-section\">\n<div class=\"h3 info-item\" id=\"cases-total-found\">Total Cases Shown: {{number_cases}}</div>\n\n  <div class=\"case-filter-option\" class=\"info-item\">\n  <label for=\"case-filter\">Imported Cases: </label>\n   <select id=\"case-filter\" name=\"case-filter\" (ngModelChange)=\"selectChange($event)\" [(ngModel)]=\"selectedCase\" >\n      <option *ngFor=\"let type of caseTypes\"\n              [value]=\"type.key\" [innerHtml]=\"type.value\"></option>\n    </select>\n  </div>\n\n  <div class=\"info-item\">\n  <div class=\"year-filter-option\" >\n  <label for=\"year-filter\">Year: </label>\n   <select id=\"year-filter\" type=\"year\" name=\"year-filter\">\n     <option *ngFor = \"let i of years\">{{i}}</option>\n   </select>\n  </div>\n\n  <div class=\"month-filter-option\" >\n  <label for=\"month-filter\">Month: </label>\n   <select id=\"month-filter\" type=\"month\" name=\"month-filter\">\n     <option *ngFor = \"let i of months\">{{i}}</option>\n   </select>\n  </div>\n  </div>\n</div>\n<div id=\"map\"></div>\n\n<div>{{trimmedJson}}</div>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Imported Malaria Monitor';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);

/*
onMapReady(map: Map): void {
    setTimeout(() => {
      map.invalidateSize();
    });
}*/


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _backend_backend_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./backend/backend.service */ "./src/app/backend/backend.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _map_map_component__WEBPACK_IMPORTED_MODULE_7__["MapComponent"]
        ],
        providers: [_backend_backend_service__WEBPACK_IMPORTED_MODULE_8__["BackendService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/backend/backend.service.ts":
/*!********************************************!*\
  !*** ./src/app/backend/backend.service.ts ***!
  \********************************************/
/*! exports provided: BackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendService", function() { return BackendService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let BackendService = class BackendService {
    constructor(http) {
        this.http = http;
        this.mockEndpointToMakeAngualrZoneAsynch = 'http://localhost:8080/nonexistentendpoint';
        this.malariaApiUrl = '/api/getmap/?caseType=';
        this.staticGeoJsonUrl = 'static/BRA_adm3_NorthWest.json';
        this.malariaStaticJson = 'static/BRA_sameMuni_Amazonas.json';
        this.homeKey = 'imported-malaria-monitor';
        this.immDnsApi = 'https://imported-malaria-monitor.herokuapp.com/api/getmap/?caseType=';
        this.isAtHomeKey = true;
        let location = window.location.hostname;
        if (location && !location.includes(this.homeKey)) {
            this.isAtHomeKey = false;
        }
    }
    getGeoJson() {
        return this.http.get(this.staticGeoJsonUrl);
    }
    ;
    getMalariaJson(type) {
        if (this.isAtHomeKey) {
            return this.http.get(this.malariaApiUrl + type);
        }
        else {
            // local
            let path = this.malariaStaticJson.replace('sameMuni', type);
            console.log(path);
            return this.http.get(path);
        }
    }
    ;
};
BackendService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BackendService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], BackendService);



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Don't put map style here, put style in styles.css */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNEQUFzRCIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERvbid0IHB1dCBtYXAgc3R5bGUgaGVyZSwgcHV0IHN0eWxlIGluIHN0eWxlcy5jc3MgKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _backend_backend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../backend/backend.service */ "./src/app/backend/backend.service.ts");
/**
** API:
Example call: api/getmap?municipality=Acrel%C3%A2ndia&country=Brazil&caseType=sameMuni&yearMonth=2019-01

*** Case type keys:
AllCases
SameMuni
MuniToMuni
StateToMuni
CountryToMuni

*** yearMonth:
Format <yyyy-mm>

** 5 query Parameters:
yearMonth = <yyyy-mm>
caseType = [ AllCases, SameMuni, MuniToMuni, StateToMuni, CountryToMuni]
muni = <target municipality> // can be empty, return data for all muni in the target state or country
state = <target state,  always Amazonas>
country = <target country, always Brazil>

i.e. if the REST endpoint could make a query on the database data with a filter of yyyy-mm and/or a filter of caseType. And return a JSON object {“results”: [{}, {}, {}]} where the {} contain that county json the endpoint current returns.
*/





let MapComponent = class MapComponent {
    constructor(service) {
        this.service = service;
        this.map = null;
        this.malariaDefaultCaseType = "sameMuni";
        this.selectedCase = this.malariaDefaultCaseType;
        this.brasilNormalizedName = "Brasil";
        this.number_cases = 0;
        this.trimmedJson = '';
        this.errormessage = '';
        this.mapboxRegisteredDns = "imported-malaria-monitor.herokuapp.com";
        this.months = ["January", "Feburary", "March", "April", "May",
            "June", "July", "August", "September",
            "October", "November", "December"];
        this.years = [2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000];
        this.caseTypes = [
            { key: 'test', value: 'All Cases' },
            { key: 'sameMuni', value: 'Same municipality' },
            { key: 'otherMuni', value: 'From other municipality' },
            { key: 'otherState', value: 'From other state' },
            { key: 'otherCountry', value: 'From other country' }
        ];
        this.legendrows = [{ "0 cases": "cases-0" },
            { "10 > cases": "cases-to-10" },
            { "50 > cases": "cases-to-50" },
            { "100 > cases": "cases-to-100" },
            { "500 > cases": "cases-to-100" },
            { "1000 > cases": "cases-to-100" }];
        this.getDataAndStartMap = (caseType) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("about to path " + caseType);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(this.service.getMalariaJson(caseType), this.service.getGeoJson()).subscribe(([malariajson, geojson]) => {
                this.makeMalariaCountLookup(malariajson);
                this.makeMap(geojson);
            });
        });
        //ref: https://leafletjs.com/examples/choropleth/
        this.getColor = (d) => {
            if (d == null)
                d = 0; // Math.floor(Math.random() * 4);
            return (0 <= d && d < 25) ? '#fef0d9' :
                (25 <= d && d < 50) ? '#fdcc8a' :
                    (50 <= d && d < 75) ? '#fc8d59' :
                        '#d7301f'; //d ===4
        };
        this.style = (feature) => {
            let density = this.getDensity(feature.properties);
            let color = this.getColor(density);
            console.log(`Fill color is ${color} for density ${density}`);
            return {
                fillColor: color,
                weight: 2,
                opacity: 1,
                fillOpacity: 0.7
            };
        };
        this.getMap = () => {
            return this.map;
        };
        this.makeMalariaCountLookup = (malJson) => {
            const mapString = JSON.stringify(malJson);
            console.log("MAL: " + mapString);
            this.malariaCountMap = {};
            malJson.forEach(item => {
                let key = `${item.Municipality}, ${item.State}, ${this.brasilNormalizedName}`.toUpperCase();
                this.number_cases += item.count;
                console.log(`${key} has ${item.count}, total ${this.number_cases}`);
                this.malariaCountMap[`${item.Municipality}, ${item.State}, ${this.brasilNormalizedName}`.toUpperCase()] = `${item.count}`;
            });
        };
        this.makeMap = (geoJson) => {
            // if refreshing map, remove the old one
            if (this.map && this.map.off) {
                this.map.off();
                this.map.remove();
            }
            // start with a view in the middle of Brazil and set zoom and min zoom
            this.map = leaflet__WEBPACK_IMPORTED_MODULE_1__["map"]('map', { minZoom: 4 }).setView([-7.50, -59.00], 5);
            let legend = leaflet__WEBPACK_IMPORTED_MODULE_1__["control"]({ position: 'bottomright' });
            let self = this;
            this.map.attributionControl.addAttribution('Imported Malaria');
            legend.onAdd = (map) => {
                var div = leaflet__WEBPACK_IMPORTED_MODULE_1__["DomUtil"].create('div', 'info legend'), grades = [0, 25, 50, 75, 100], labels = [];
                for (var i = 0; i < grades.length - 1; i++) {
                    div.innerHTML +=
                        '<i style="background:' + self.getColor(grades[i] + 1) + '"></i> ' +
                            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
                }
                return div;
            };
            legend.addTo(this.map);
            // Add the goemap and test adding data to the item
            leaflet__WEBPACK_IMPORTED_MODULE_1__["geoJSON"](geoJson, {
                style: this.style,
                onEachFeature: function (feature, layer) {
                    let p = feature.properties;
                    let name = p.NAME_3;
                    let fullName = `${p.NAME_2}, ${p.NAME_1}, ${self.brasilNormalizedName}`;
                    let density = self.getDensity(fullName.toUpperCase());
                    console.log(`feature props key ${fullName}  density ${density}`);
                    layer.bindPopup(`<h1>${name}</h1><div class="popup">${fullName}</div><div <div class="popup">Count ${density}</div>`);
                }
            }).addTo(this.map);
            // this only works on the heroku DNS, so ignore it if hot on heroku
            if (this.location && this.location.includes(this.mapboxRegisteredDns)) {
                console.log("getting tiles");
                leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                    maxZoom: 18,
                    id: 'mapbox.outdoors',
                    accessToken: 'pk.eyJ1Ijoia2RvbGFuIiwiYSI6ImNqeHYzZnRmZjAwdHAzY283azFkdTFzYmsifQ.K-2XaOWsVjN5uIzKAUfLBg'
                }).addTo(this.map);
            }
        }; // end getMap
        this.handleError = (err) => {
            this.errormessage = "Cound not retrieve map data";
        };
    }
    ngOnInit() {
        this.location = window.location.hostname;
        this.getDataAndStartMap(this.malariaDefaultCaseType);
    }
    selectChange(event) {
        this.selectedCase = event;
        console.log(`Getting data for case type ${this.selectedCase}`);
        this.getDataAndStartMap(this.selectedCase);
    }
    getDensity(props) {
        let key = `${props.NAME_2}, ${props.NAME_1}, ${this.brasilNormalizedName}`.toUpperCase();
        let count = this.malariaCountMap[key] | 0;
        console.log(`returning  density ${count} for ${key}`);
        return count;
    }
};
MapComponent.ctorParameters = () => [
    { type: _backend_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"] }
];
MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-map',
        template: __webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/index.js!./src/app/map/map.component.html"),
        providers: [_backend_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"]],
        styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
    })
], MapComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kdolan/Projects/CSCIS-71-Agile/merge-IMM-repos/imported-malaria-monitor/back-end/front-end-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.chunk.js.map