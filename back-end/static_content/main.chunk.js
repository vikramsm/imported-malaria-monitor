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

module.exports = "<h1>{{title}}</h1>\n\n<mat-tab-group>\n  \t\t\n  \t\t<mat-tab label=\"Map\">\n  \t\t\t<app-map>\n\t\t\t\t<div \n\t\t\t\t\tleaflet \n\t\t\t\t\t(leafletMapReady) = \"onMapReady($event)\"> \n\t\t\t\t</div>\n\t\t\t</app-map>\n\t\t</mat-tab>\n\t\t<mat-tab label=\"One\">\n    \t\t<h1>Some tab content</h1>\n    \t\t<p>...</p>\n  \t\t</mat-tab>\n  \t\t<mat-tab label=\"Two\">\n    \t\t<h1>Some more tab content</h1>\n    \t\t<p>...</p>\n  \t\t</mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/map/map.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/map/map.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Brazil By County</h2>\n<div class=\"info-section\">\n<div class=\"h3 info-item\" id=\"cases-total-found\">Total Cases Shown: {{number_cases}}</div>\n  <div class=\"month-filter-option\" class=\"info-item\">\n  <label for=\"month-filter\">Month: </label>\n   <select id=\"month-filter\" type=\"month\" name=\"month-filter\">\n     <option *ngFor = \"let i of months\">{{i}}</option>\n   </select>\n  </div>\n  <div class=\"case-filter-option\" class=\"info-item\">\n  <label for=\"case-filter\">Imported Cases: </label>\n   <select id=\"case-filter\" name=\"case-filter\">\n     <option *ngFor = \"let i of cases\">{{i}}</option>\n   </select>\n  </div>\n</div>\n<div id=\"map\"></div>\n\n<div>{{trimmedJson}}</div>\n"

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


//import { HttpClientModule } from '@angular/common/http';
let AppComponent = class AppComponent {
    //import { HttpClientModule } from '@angular/common/http';
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _backend_backend_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./backend/backend.service */ "./src/app/backend/backend.service.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"]
        ],
        providers: [_backend_backend_service__WEBPACK_IMPORTED_MODULE_6__["BackendService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]]
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
        this.backendUrl = 'localhost:8080/geojson/brazil';
        this.geoJsonJUrl = 'static/BRA_adm3_NorthWest.json';
    }
    getGeoJson() {
        return this.http.get(this.backendUrl);
    }
    getBackupGeoJson() {
        return this.http.get(this.geoJsonJUrl);
    }
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

module.exports = "/* Done use this, put style in styles.css */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQyIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERvbmUgdXNlIHRoaXMsIHB1dCBzdHlsZSBpbiBzdHlsZXMuY3NzICovXG4iXX0= */"

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
/* harmony import */ var _backend_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../backend/backend.service */ "./src/app/backend/backend.service.ts");



//import { HttpClientModule } from  '@angular/common/http'

let MapComponent = class MapComponent {
    constructor(service) {
        this.service = service;
        this.number_cases = 0;
        this.trimmedJson = '';
        this.errormessage = '';
        this.months = ["January", "Feburary", "March", "April", "May",
            "June", "July", "August", "September",
            "October", "November", "December"];
        this.cases = ["All Cases",
            "From same municipality",
            "Imported from other municipality",
            "Imported from other state",
            "Imported from other country"];
        this.legendrows = [{ "0 cases": "cases-0" },
            { "10 > cases": "cases-to-10" },
            { "50 > cases": "cases-to-50" },
            { "100 > cases": "cases-to-100" },
            { "500 > cases": "cases-to-100" },
            { "1000 > cases": "cases-to-100" }];
        //rehttps://leafletjs.com/examples/choropleth/
        this.getColor = (d) => {
            // TODO: temp random
            if (d == null)
                d = Math.floor(Math.random() * 4);
            return d === 1 ? '#fef0d9' :
                d === 2 ? '#fdcc8a' :
                    d === 3 ? '#fc8d59' :
                        '#d7301f'; //d ===4
        };
        this.style = (feature) => {
            return {
                fillColor: this.getColor(feature.properties.density),
                weight: 2,
                opacity: 1,
                fillOpacity: 0.7
            };
        };
        this.getBackupGeoJson = () => {
            this.service.getBackupGeoJson()
                .toPromise()
                .then(response => { this.makeMap(response); });
        };
        this.getMap = () => {
            return this.map;
        };
        this.handleError = (err) => {
            this.errormessage = "Cound not retrieve map data";
        };
    }
    ngOnInit() {
        this.service.getGeoJson()
            .toPromise()
            .then(response => { this.makeMap(response); })
            .catch((error) => { this.getBackupGeoJson(); });
    }
    makeMap(geoJson) {
        // if refreshing map, remove the old one
        if (this.map && this.map.off) {
            this.map.off();
            this.map.remove();
        }
        // start with a view in the middle of Brazil, zoom level 6
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_1__["map"]('map', { minZoom: 4 }).setView([-7.50, -59.00], 5);
        let legend = leaflet__WEBPACK_IMPORTED_MODULE_1__["control"]({ position: 'bottomright' });
        let self = this;
        this.map.attributionControl.addAttribution('Imported Malaria');
        legend.onAdd = (map) => {
            var div = leaflet__WEBPACK_IMPORTED_MODULE_1__["DomUtil"].create('div', 'info legend'), grades = [0, 25, 50, 75, 100], labels = [];
            for (var i = 0; i < grades.length - 1; i++) {
                div.innerHTML +=
                    '<i style="background:' + self.getColor(i + 1) + '"></i> ' +
                        grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
            }
            return div;
        };
        legend.addTo(this.map);
        // Add the goemap and test adding data to the item
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_1__["geoJSON"](geoJson, {
            style: this.style,
            onEachFeature: function (feature, layer) {
                let p = feature.properties;
                let name = p.NAME_3;
                let density = Math.floor(Math.random() * 4); //TODO: just random number fo now
                let fullName = `${p.NAME_2},${p.NAME_1},${p.NAME_0}`;
                layer.bindPopup(`<h1>${name}</h1><div class="popup">${fullName}</div><div <div class="popup">Cases (TODO) ${density}</div>`);
            }
        }).addTo(this.map);
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.outdoors',
            accessToken: 'pk.eyJ1Ijoia2RvbGFuIiwiYSI6ImNqeHYzZnRmZjAwdHAzY283azFkdTFzYmsifQ.K-2XaOWsVjN5uIzKAUfLBg'
        }).addTo(this.map);
    } // end getMap
};
MapComponent.ctorParameters = () => [
    { type: _backend_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"] }
];
MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-map',
        template: __webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/index.js!./src/app/map/map.component.html"),
        providers: [_backend_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"]],
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

module.exports = __webpack_require__(/*! /Users/fekim/Desktop/imported-malaria-monitor/back-end/front-end-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.chunk.js.map