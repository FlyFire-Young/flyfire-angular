webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/components/appHome/appHome.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-outer-layer-div\">\r\n  <div nz-row nzGutter=\"24\">\r\n    <div nz-col nzSpan=\"6\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"注册人数\" [nzExtra]=\"extraTemplate\">\r\n        <div class=\"cus-home-r-top\">\r\n          2018\r\n          <small>(人)</small>\r\n        </div>\r\n      </nz-card>\r\n      <ng-template #extraTemplate>\r\n        <nz-tag [nzColor]=\"'magenta'\">今日新增</nz-tag>\r\n      </ng-template>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"6\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"未读通知\" [nzExtra]=\"emExtraTemplate\">\r\n        <div class=\"cus-home-r-top\">\r\n          20\r\n          <small>(条)</small>\r\n        </div>\r\n      </nz-card>\r\n      <ng-template #emExtraTemplate>\r\n        <nz-tag [nzColor]=\"'lime'\">至今</nz-tag>\r\n      </ng-template>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"6\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"访问人数\" [nzExtra]=\"todayExtraTemplate\">\r\n        <div class=\"cus-home-r-top\">\r\n          20188\r\n          <small>(人)</small>\r\n        </div>\r\n      </nz-card>\r\n      <ng-template #todayExtraTemplate>\r\n        <nz-tag [nzColor]=\"'blue'\">今日访问</nz-tag>\r\n      </ng-template>\r\n    </div>\r\n\r\n\r\n    <div nz-col nzSpan=\"6\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"流量统计\" [nzExtra]=\"sysExtraTemplate\">\r\n        <div class=\"cus-home-r-top\">\r\n          8810232\r\n          <small></small>\r\n        </div>\r\n      </nz-card>\r\n      <ng-template #sysExtraTemplate>\r\n        <nz-tag [nzColor]=\"'purple'\">至今</nz-tag>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n\r\n  <div nz-row nzGutter=\"24\">\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"地图\" [nzExtra]=\"mmExtraTemplate\">\r\n        <div class=\"cus-home-r-top-chart\">\r\n          <app-home-cf-baidu-map></app-home-cf-baidu-map>\r\n        </div>\r\n      </nz-card>\r\n      <ng-template #mmExtraTemplate>\r\n        <nz-tag [nzColor]=\"'#2db7f5'\"><a>今日新增</a></nz-tag>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n\r\n  <div nz-row nzGutter=\"24\">\r\n    <div nz-col nzSpan=\"12\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\">\r\n        <div class=\"cus-home-r-top-chart\">\r\n          <app-home-cf-chart></app-home-cf-chart>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"12\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\">\r\n        <div class=\"cus-home-r-top-chart\">\r\n          <app-home-cf-s-map></app-home-cf-s-map>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/components/appHome/appHome.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppHomeComponent = class AppHomeComponent {
};
AppHomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/components/appHome/appHome.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")]
    })
], AppHomeComponent);



/***/ }),

/***/ "./src/components/appHome/contrastiveFunnelCharts.html":
/***/ (function(module, exports) {

module.exports = "<v-chart [forceFit]=\"forceFit\" [height]=\"height\" [data]=\"expectData\">\r\n  <v-tooltip [showTitle]=\"false\" [itemTpl]=\"tooltipOpts.itemTpl\"></v-tooltip>\r\n  <v-coord type=\"rect\" direction=\"LT\"></v-coord>\r\n  <v-pyramid [position]=\"pyramidOpts.position\" [color]=\"pyramidOpts.color\"\r\n             [label]=\"pyramidOpts.label\" [tooltip]=\"pyramidOpts.tooltip\" [opacity]=\"pyramidOpts.opacity\"></v-pyramid>\r\n  <v-view [data]=\"actualData\">\r\n    <v-tooltip></v-tooltip>\r\n    <v-coord type=\"rect\" direction=\"LT\"></v-coord>\r\n    <v-pyramid [position]=\"pyramidOpts1.position\" [color]=\"pyramidOpts1.color\"\r\n               [style]=\"pyramidOpts1.style\" [tooltip]=\"pyramidOpts1.tooltip\"\r\n               [opacity]=\"pyramidOpts1.opacity\"></v-pyramid>\r\n  </v-view>\r\n</v-chart>\r\n"

/***/ }),

/***/ "./src/components/appHome/contrastiveFunnelCharts.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContrastiveFunnelChartsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contrastiveFunnelChartsJsonData__ = __webpack_require__("./src/components/appHome/contrastiveFunnelChartsJsonData.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let ContrastiveFunnelChartsComponent = class ContrastiveFunnelChartsComponent {
    constructor() {
        this.forceFit = true;
        this.height = 400;
        this.showTitle = false;
        this.expectData = __WEBPACK_IMPORTED_MODULE_1__contrastiveFunnelChartsJsonData__["b" /* expectData */];
        this.actualData = __WEBPACK_IMPORTED_MODULE_1__contrastiveFunnelChartsJsonData__["a" /* actualData */];
        this.tooltipOpts = __WEBPACK_IMPORTED_MODULE_1__contrastiveFunnelChartsJsonData__["e" /* tooltipOpts */];
        this.pyramidOpts = __WEBPACK_IMPORTED_MODULE_1__contrastiveFunnelChartsJsonData__["c" /* pyramidOpts */];
        this.pyramidOpts1 = __WEBPACK_IMPORTED_MODULE_1__contrastiveFunnelChartsJsonData__["d" /* pyramidOpts1 */];
    }
};
ContrastiveFunnelChartsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home-cf-chart',
        template: __webpack_require__("./src/components/appHome/contrastiveFunnelCharts.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")]
    })
], ContrastiveFunnelChartsComponent);



/***/ }),

/***/ "./src/components/appHome/contrastiveFunnelChartsJsonData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reflect_metadata__ = __webpack_require__("./node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reflect_metadata__);

const expectData = [
    { value: 100, name: '展现' },
    { value: 80, name: '点击' },
    { value: 60, name: '访问' },
    { value: 40, name: '咨询' },
    { value: 30, name: '订单' },
];
/* harmony export (immutable) */ __webpack_exports__["b"] = expectData;

const actualData = [
    { value: 80, name: '展现' },
    { value: 50, name: '点击' },
    { value: 30, name: '访问' },
    { value: 10, name: '咨询' },
    { value: 5, name: '订单' },
];
/* harmony export (immutable) */ __webpack_exports__["a"] = actualData;

const tooltipOpts = {
    showTitle: false,
    itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>',
};
/* harmony export (immutable) */ __webpack_exports__["e"] = tooltipOpts;

const pyramidOpts = {
    position: 'name*value',
    color: ['name', ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF']],
    label: ['name', {
            offset: 35,
            labelLine: {
                lineWidth: 1,
                stroke: 'rgba(0, 0, 0, 0.15)',
            }
        }],
    tooltip: ['name*value', (name, value) => {
            return {
                name: '预期' + name,
                value,
            };
        }],
    opacity: 0.65,
};
/* harmony export (immutable) */ __webpack_exports__["c"] = pyramidOpts;

const pyramidOpts1 = {
    quickType: 'pyramid',
    position: 'name*value',
    color: ['name', ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF']],
    tooltip: ['name*value', (name, value) => {
            return {
                name: '实际' + name,
                value,
            };
        }],
    style: {
        lineWidth: 1,
        stroke: '#fff',
    },
    opacity: 1,
};
/* harmony export (immutable) */ __webpack_exports__["d"] = pyramidOpts1;



/***/ }),

/***/ "./src/components/appHome/homeBaiduMap.html":
/***/ (function(module, exports) {

module.exports = "<baidu-map [options]=\"options\" style=\"display: block; width: 100%; height: 400px;\">\r\n  <marker [point]=\"point\"></marker>\r\n  <control type=\"navigation\" [options]=\"navOptions\"></control>\r\n</baidu-map>\r\n"

/***/ }),

/***/ "./src/components/appHome/homeBaiduMap.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeBaiduMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_baidu_map__ = __webpack_require__("./node_modules/angular2-baidu-map/esm2015/angular2-baidu-map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let HomeBaiduMapComponent = class HomeBaiduMapComponent {
    constructor() {
        this.options = {
            centerAndZoom: {
                lat: 39.920116,
                lng: 116.403703,
                zoom: 16
            },
            enableKeyboard: true
        };
        this.point = {
            lat: 39.920109,
            lng: 116.403705
        };
        this.navOptions = {
            anchor: __WEBPACK_IMPORTED_MODULE_1_angular2_baidu_map__["b" /* ControlAnchor */].BMAP_ANCHOR_TOP_RIGHT,
            type: __WEBPACK_IMPORTED_MODULE_1_angular2_baidu_map__["c" /* NavigationControlType */].BMAP_NAVIGATION_CONTROL_PAN
        };
    }
};
HomeBaiduMapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home-cf-baidu-map',
        template: __webpack_require__("./src/components/appHome/homeBaiduMap.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeBaiduMapComponent);



/***/ }),

/***/ "./src/components/appHome/homeStatisticMap.html":
/***/ (function(module, exports) {

module.exports = "<v-chart [forceFit]=\"forceFit\" [height]=\"400\" [data]=\"data\" [scale]=\"scale\">\r\n  <v-tooltip></v-tooltip>\r\n  <v-legend></v-legend>\r\n  <v-axis></v-axis>\r\n  <v-facet type=\"mirror\" [fields]=\"fields\" [transpose]=\"true\">\r\n    <v-facet-view>\r\n      <v-bar position=\"age*total_percentage\" [color]=\"color\"></v-bar>\r\n    </v-facet-view>\r\n  </v-facet>\r\n</v-chart>\r\n"

/***/ }),

/***/ "./src/components/appHome/homeStatisticMap.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeStatisticMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reflect_metadata__ = __webpack_require__("./node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reflect_metadata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homeStatisticMapJsonData__ = __webpack_require__("./src/components/appHome/homeStatisticMapJsonData.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



const DataSet = __webpack_require__("./node_modules/@antv/data-set/build/data-set.js");
let HomeStatisticMapComponent = class HomeStatisticMapComponent {
    constructor() {
        this.forceFit = true;
        this.height = 400;
        this.data = [];
        this.scale = __WEBPACK_IMPORTED_MODULE_2__homeStatisticMapJsonData__["b" /* scale */];
        this.fields = ['gender'];
        this.color = ['gender', ['#1890ff', '#f04864']];
        const sourceData = __WEBPACK_IMPORTED_MODULE_2__homeStatisticMapJsonData__["a" /* population */];
        const tmp = [];
        const dates = [];
        sourceData.male.values.forEach((obj) => {
            if (dates.indexOf(obj.date) === -1) {
                dates.push(obj.date);
            }
            obj.age_groups.forEach((subObject) => {
                subObject.gender = 'male';
                subObject.date = obj.date;
                tmp.push(subObject);
            });
        });
        sourceData.female.values.forEach((obj) => {
            obj.age_groups.forEach((subObject) => {
                subObject.gender = 'female';
                subObject.date = obj.date;
                tmp.push(subObject);
            });
        });
        const dv = new DataSet.View().source(tmp);
        dv.transform({
            type: 'filter',
            callback(row) {
                return new Date(row.date * 1000).getFullYear() === new Date(dates[0] * 1000).getFullYear();
            }
        });
        this.data = dv.rows;
    }
};
HomeStatisticMapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-home-cf-s-map',
        template: __webpack_require__("./src/components/appHome/homeStatisticMap.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeStatisticMapComponent);



/***/ }),

/***/ "./src/components/appHome/homeStatisticMapJsonData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const scale = [
    {
        dataKey: 'age',
        sync: true,
        tickCount: 11,
    }, {
        dataKey: 'total_percentage',
        sync: true,
        formatter(v) {
            return v + '%';
        }
    }, {
        dataKey: 'gender',
        sync: true,
    }
];
/* harmony export (immutable) */ __webpack_exports__["b"] = scale;

const population = {
    "male": {
        "values": [{
                "date": 1404172800,
                "max_gender_percentage": 1.52920653,
                "max_total_percentage": 0.752651684,
                "max_actual_value": 2399883,
                "age_groups": [{
                        "age": "00",
                        "gender_percentage": 1.28577939,
                        "total_percentage": 0.632840629,
                        "actual_value": 2017857
                    }, {
                        "age": "01",
                        "gender_percentage": 1.28921772,
                        "total_percentage": 0.634532924,
                        "actual_value": 2023253
                    }, {
                        "age": "02",
                        "gender_percentage": 1.28873918,
                        "total_percentage": 0.634297395,
                        "actual_value": 2022502
                    }, {
                        "age": "03",
                        "gender_percentage": 1.30538031,
                        "total_percentage": 0.642487899,
                        "actual_value": 2048618
                    }, {
                        "age": "04",
                        "gender_percentage": 1.30211784,
                        "total_percentage": 0.640882164,
                        "actual_value": 2043498
                    }, {
                        "age": "05",
                        "gender_percentage": 1.30209809,
                        "total_percentage": 0.640872442,
                        "actual_value": 2043467
                    }, {
                        "age": "06",
                        "gender_percentage": 1.34470195,
                        "total_percentage": 0.661841399,
                        "actual_value": 2110328
                    }, {
                        "age": "07",
                        "gender_percentage": 1.35229228,
                        "total_percentage": 0.665577242,
                        "actual_value": 2122240
                    }, {
                        "age": "08",
                        "gender_percentage": 1.34138468,
                        "total_percentage": 0.660208692,
                        "actual_value": 2105122
                    }, {
                        "age": "09",
                        "gender_percentage": 1.33638266,
                        "total_percentage": 0.657746774,
                        "actual_value": 2097272
                    }, {
                        "age": "10",
                        "gender_percentage": 1.33804066,
                        "total_percentage": 0.658562814,
                        "actual_value": 2099874
                    }, {
                        "age": "11",
                        "gender_percentage": 1.32772629,
                        "total_percentage": 0.653486244,
                        "actual_value": 2083687
                    }, {
                        "age": "12",
                        "gender_percentage": 1.32234577,
                        "total_percentage": 0.650838036,
                        "actual_value": 2075243
                    }, {
                        "age": "13",
                        "gender_percentage": 1.35608171,
                        "total_percentage": 0.667442341,
                        "actual_value": 2128187
                    }, {
                        "age": "14",
                        "gender_percentage": 1.37904705,
                        "total_percentage": 0.678745525,
                        "actual_value": 2164228
                    }, {
                        "age": "15",
                        "gender_percentage": 1.35623273,
                        "total_percentage": 0.667516669,
                        "actual_value": 2128424
                    }, {
                        "age": "16",
                        "gender_percentage": 1.35783465,
                        "total_percentage": 0.66830511,
                        "actual_value": 2130938
                    }, {
                        "age": "17",
                        "gender_percentage": 1.36285006,
                        "total_percentage": 0.670773615,
                        "actual_value": 2138809
                    }, {
                        "age": "18",
                        "gender_percentage": 1.37957848,
                        "total_percentage": 0.679007085,
                        "actual_value": 2165062
                    }, {
                        "age": "19",
                        "gender_percentage": 1.41508839,
                        "total_percentage": 0.696484509,
                        "actual_value": 2220790
                    }, {
                        "age": "20",
                        "gender_percentage": 1.44617102,
                        "total_percentage": 0.7117829,
                        "actual_value": 2269570
                    }, {
                        "age": "21",
                        "gender_percentage": 1.47240074,
                        "total_percentage": 0.72469276,
                        "actual_value": 2310734
                    }, {
                        "age": "22",
                        "gender_percentage": 1.50878999,
                        "total_percentage": 0.74260298,
                        "actual_value": 2367842
                    }, {
                        "age": "23",
                        "gender_percentage": 1.52920653,
                        "total_percentage": 0.752651684,
                        "actual_value": 2399883
                    }, {
                        "age": "24",
                        "gender_percentage": 1.52379988,
                        "total_percentage": 0.749990616,
                        "actual_value": 2391398
                    }, {
                        "age": "25",
                        "gender_percentage": 1.46290773,
                        "total_percentage": 0.720020447,
                        "actual_value": 2295836
                    }, {
                        "age": "26",
                        "gender_percentage": 1.42734557,
                        "total_percentage": 0.702517306,
                        "actual_value": 2240026
                    }, {
                        "age": "27",
                        "gender_percentage": 1.40211435,
                        "total_percentage": 0.690098889,
                        "actual_value": 2200429
                    }, {
                        "age": "28",
                        "gender_percentage": 1.40641927,
                        "total_percentage": 0.692217706,
                        "actual_value": 2207185
                    }, {
                        "age": "29",
                        "gender_percentage": 1.41325516,
                        "total_percentage": 0.695582224,
                        "actual_value": 2217913
                    }, {
                        "age": "30",
                        "gender_percentage": 1.36367778,
                        "total_percentage": 0.671181007,
                        "actual_value": 2140108
                    }, {
                        "age": "31",
                        "gender_percentage": 1.38254974,
                        "total_percentage": 0.680469495,
                        "actual_value": 2169725
                    }, {
                        "age": "32",
                        "gender_percentage": 1.38007422,
                        "total_percentage": 0.679251081,
                        "actual_value": 2165840
                    }, {
                        "age": "33",
                        "gender_percentage": 1.36405309,
                        "total_percentage": 0.671365729,
                        "actual_value": 2140697
                    }, {
                        "age": "34",
                        "gender_percentage": 1.39703331,
                        "total_percentage": 0.687598082,
                        "actual_value": 2192455
                    }, {
                        "age": "35",
                        "gender_percentage": 1.30455705,
                        "total_percentage": 0.642082702,
                        "actual_value": 2047326
                    }, {
                        "age": "36",
                        "gender_percentage": 1.27758053,
                        "total_percentage": 0.628805279,
                        "actual_value": 2004990
                    }, {
                        "age": "37",
                        "gender_percentage": 1.26104199,
                        "total_percentage": 0.620665268,
                        "actual_value": 1979035
                    }, {
                        "age": "38",
                        "gender_percentage": 1.2250631,
                        "total_percentage": 0.602957019,
                        "actual_value": 1922571
                    }, {
                        "age": "39",
                        "gender_percentage": 1.26542529,
                        "total_percentage": 0.622822661,
                        "actual_value": 1985914
                    }, {
                        "age": "40",
                        "gender_percentage": 1.22104237,
                        "total_percentage": 0.600978076,
                        "actual_value": 1916261
                    }, {
                        "age": "41",
                        "gender_percentage": 1.23611535,
                        "total_percentage": 0.608396761,
                        "actual_value": 1939916
                    }, {
                        "age": "42",
                        "gender_percentage": 1.2943612,
                        "total_percentage": 0.637064466,
                        "actual_value": 2031325
                    }, {
                        "age": "43",
                        "gender_percentage": 1.36848737,
                        "total_percentage": 0.673548212,
                        "actual_value": 2147656
                    }, {
                        "age": "44",
                        "gender_percentage": 1.39179552,
                        "total_percentage": 0.685020124,
                        "actual_value": 2184235
                    }, {
                        "age": "45",
                        "gender_percentage": 1.31723542,
                        "total_percentage": 0.648322802,
                        "actual_value": 2067223
                    }, {
                        "age": "46",
                        "gender_percentage": 1.28886407,
                        "total_percentage": 0.634358865,
                        "actual_value": 2022698
                    }, {
                        "age": "47",
                        "gender_percentage": 1.28670269,
                        "total_percentage": 0.633295065,
                        "actual_value": 2019306
                    }, {
                        "age": "48",
                        "gender_percentage": 1.31151336,
                        "total_percentage": 0.645506493,
                        "actual_value": 2058243
                    }, {
                        "age": "49",
                        "gender_percentage": 1.38909252,
                        "total_percentage": 0.683689747,
                        "actual_value": 2179993
                    }, {
                        "age": "50",
                        "gender_percentage": 1.40923697,
                        "total_percentage": 0.693604535,
                        "actual_value": 2211607
                    }, {
                        "age": "51",
                        "gender_percentage": 1.40528506,
                        "total_percentage": 0.691659463,
                        "actual_value": 2205405
                    }, {
                        "age": "52",
                        "gender_percentage": 1.4006456,
                        "total_percentage": 0.689375994,
                        "actual_value": 2198124
                    }, {
                        "age": "53",
                        "gender_percentage": 1.41434095,
                        "total_percentage": 0.696116632,
                        "actual_value": 2219617
                    }, {
                        "age": "54",
                        "gender_percentage": 1.42913101,
                        "total_percentage": 0.70339607,
                        "actual_value": 2242828
                    }, {
                        "age": "55",
                        "gender_percentage": 1.37524297,
                        "total_percentage": 0.676873213,
                        "actual_value": 2158258
                    }, {
                        "age": "56",
                        "gender_percentage": 1.36406902,
                        "total_percentage": 0.67137357,
                        "actual_value": 2140722
                    }, {
                        "age": "57",
                        "gender_percentage": 1.34458789,
                        "total_percentage": 0.661785261,
                        "actual_value": 2110149
                    }, {
                        "age": "58",
                        "gender_percentage": 1.29221639,
                        "total_percentage": 0.63600882,
                        "actual_value": 2027959
                    }, {
                        "age": "59",
                        "gender_percentage": 1.27879758,
                        "total_percentage": 0.629404293,
                        "actual_value": 2006900
                    }, {
                        "age": "60",
                        "gender_percentage": 1.21960739,
                        "total_percentage": 0.600271803,
                        "actual_value": 1914009
                    }, {
                        "age": "61",
                        "gender_percentage": 1.1705882,
                        "total_percentage": 0.576145318,
                        "actual_value": 1837080
                    }, {
                        "age": "62",
                        "gender_percentage": 1.12370554,
                        "total_percentage": 0.553070402,
                        "actual_value": 1763504
                    }, {
                        "age": "63",
                        "gender_percentage": 1.08440493,
                        "total_percentage": 0.533727251,
                        "actual_value": 1701827
                    }, {
                        "age": "64",
                        "gender_percentage": 1.05869198,
                        "total_percentage": 0.521071737,
                        "actual_value": 1661474
                    }, {
                        "age": "65",
                        "gender_percentage": 1.02441952,
                        "total_percentage": 0.504203363,
                        "actual_value": 1607688
                    }, {
                        "age": "66",
                        "gender_percentage": 1.01259244,
                        "total_percentage": 0.498382259,
                        "actual_value": 1589127
                    }, {
                        "age": "67",
                        "gender_percentage": 1.0534561,
                        "total_percentage": 0.51849472,
                        "actual_value": 1653257
                    }, {
                        "age": "68",
                        "gender_percentage": 0.7719556,
                        "total_percentage": 0.379944548,
                        "actual_value": 1211480
                    }, {
                        "age": "69",
                        "gender_percentage": 0.756709942,
                        "total_percentage": 0.372440872,
                        "actual_value": 1187554
                    }, {
                        "age": "70",
                        "gender_percentage": 0.732300705,
                        "total_percentage": 0.360427025,
                        "actual_value": 1149247
                    }, {
                        "age": "71",
                        "gender_percentage": 0.745114168,
                        "total_percentage": 0.366733612,
                        "actual_value": 1169356
                    }, {
                        "age": "72",
                        "gender_percentage": 0.644143385,
                        "total_percentage": 0.317037362,
                        "actual_value": 1010896
                    }, {
                        "age": "73",
                        "gender_percentage": 0.581769108,
                        "total_percentage": 0.286337712,
                        "actual_value": 913008
                    }, {
                        "age": "74",
                        "gender_percentage": 0.546356055,
                        "total_percentage": 0.268907959,
                        "actual_value": 857432
                    }, {
                        "age": "75",
                        "gender_percentage": 0.511948506,
                        "total_percentage": 0.251973097,
                        "actual_value": 803434
                    }, {
                        "age": "76",
                        "gender_percentage": 0.483238802,
                        "total_percentage": 0.237842628,
                        "actual_value": 758378
                    }, {
                        "age": "77",
                        "gender_percentage": 0.439554888,
                        "total_percentage": 0.216342084,
                        "actual_value": 689822
                    }, {
                        "age": "78",
                        "gender_percentage": 0.413676266,
                        "total_percentage": 0.203605029,
                        "actual_value": 649209
                    }, {
                        "age": "79",
                        "gender_percentage": 0.38915297,
                        "total_percentage": 0.191535043,
                        "actual_value": 610723
                    }, {
                        "age": "80",
                        "gender_percentage": 0.344108633,
                        "total_percentage": 0.169364921,
                        "actual_value": 540032
                    }, {
                        "age": "81",
                        "gender_percentage": 0.325666778,
                        "total_percentage": 0.160288126,
                        "actual_value": 511090
                    }, {
                        "age": "82",
                        "gender_percentage": 0.303929321,
                        "total_percentage": 0.149589288,
                        "actual_value": 476976
                    }, {
                        "age": "83",
                        "gender_percentage": 0.281928702,
                        "total_percentage": 0.138760925,
                        "actual_value": 442449
                    }, {
                        "age": "84",
                        "gender_percentage": 0.262058243,
                        "total_percentage": 0.128980994,
                        "actual_value": 411265
                    }, {
                        "age": "85",
                        "gender_percentage": 0.228923182,
                        "total_percentage": 0.112672432,
                        "actual_value": 359264
                    }, {
                        "age": "86",
                        "gender_percentage": 0.20577369,
                        "total_percentage": 0.101278612,
                        "actual_value": 322934
                    }, {
                        "age": "87",
                        "gender_percentage": 0.180522073,
                        "total_percentage": 0.0888501586,
                        "actual_value": 283305
                    }, {
                        "age": "88",
                        "gender_percentage": 0.153129463,
                        "total_percentage": 0.0753679417,
                        "actual_value": 240316
                    }, {
                        "age": "89",
                        "gender_percentage": 0.131061937,
                        "total_percentage": 0.0645066484,
                        "actual_value": 205684
                    }, {
                        "age": "90",
                        "gender_percentage": 0.108547097,
                        "total_percentage": 0.0534251938,
                        "actual_value": 170350
                    }, {
                        "age": "91",
                        "gender_percentage": 0.087984638,
                        "total_percentage": 0.0433046713,
                        "actual_value": 138080
                    }, {
                        "age": "92",
                        "gender_percentage": 0.0700111249,
                        "total_percentage": 0.0344583875,
                        "actual_value": 109873
                    }, {
                        "age": "93",
                        "gender_percentage": 0.0547864946,
                        "total_percentage": 0.0269650611,
                        "actual_value": 85980
                    }, {
                        "age": "94",
                        "gender_percentage": 0.0395892639,
                        "total_percentage": 0.0194852204,
                        "actual_value": 62130
                    }, {
                        "age": "95",
                        "gender_percentage": 0.027287472,
                        "total_percentage": 0.0134304696,
                        "actual_value": 42824
                    }, {
                        "age": "96",
                        "gender_percentage": 0.019902956,
                        "total_percentage": 0.00979592561,
                        "actual_value": 31235
                    }, {
                        "age": "97",
                        "gender_percentage": 0.013049228,
                        "total_percentage": 0.0064226272,
                        "actual_value": 20479
                    }, {
                        "age": "98",
                        "gender_percentage": 0.00869714893,
                        "total_percentage": 0.00428060152,
                        "actual_value": 13649
                    }, {
                        "age": "99",
                        "gender_percentage": 0.00575838046,
                        "total_percentage": 0.00283418536,
                        "actual_value": 9037
                    }, { "age": "100", "gender_percentage": 0.00874812497, "total_percentage": 0.00430569114, "actual_value": 13729 }]
            }, {
                "date": 1372636800,
                "max_gender_percentage": 1.53005492,
                "max_total_percentage": 0.753349491,
                "max_actual_value": 2381555,
                "age_groups": [{
                        "age": "00",
                        "gender_percentage": 1.29566736,
                        "total_percentage": 0.637944645,
                        "actual_value": 2016727
                    }, {
                        "age": "01",
                        "gender_percentage": 1.2990634,
                        "total_percentage": 0.639616748,
                        "actual_value": 2022013
                    }, {
                        "age": "02",
                        "gender_percentage": 1.31091166,
                        "total_percentage": 0.645450446,
                        "actual_value": 2040455
                    }, {
                        "age": "03",
                        "gender_percentage": 1.30831805,
                        "total_percentage": 0.644173435,
                        "actual_value": 2036418
                    }, {
                        "age": "04",
                        "gender_percentage": 1.30856668,
                        "total_percentage": 0.644295853,
                        "actual_value": 2036805
                    }, {
                        "age": "05",
                        "gender_percentage": 1.35188907,
                        "total_percentage": 0.665626397,
                        "actual_value": 2104237
                    }, {
                        "age": "06",
                        "gender_percentage": 1.36001234,
                        "total_percentage": 0.669626032,
                        "actual_value": 2116881
                    }, {
                        "age": "07",
                        "gender_percentage": 1.34924406,
                        "total_percentage": 0.66432408,
                        "actual_value": 2100120
                    }, {
                        "age": "08",
                        "gender_percentage": 1.3443196,
                        "total_percentage": 0.661899435,
                        "actual_value": 2092455
                    }, {
                        "age": "09",
                        "gender_percentage": 1.3461352,
                        "total_percentage": 0.662793375,
                        "actual_value": 2095281
                    }, {
                        "age": "10",
                        "gender_percentage": 1.33565795,
                        "total_percentage": 0.657634718,
                        "actual_value": 2078973
                    }, {
                        "age": "11",
                        "gender_percentage": 1.33009489,
                        "total_percentage": 0.654895645,
                        "actual_value": 2070314
                    }, {
                        "age": "12",
                        "gender_percentage": 1.36393392,
                        "total_percentage": 0.67155689,
                        "actual_value": 2122985
                    }, {
                        "age": "13",
                        "gender_percentage": 1.38674384,
                        "total_percentage": 0.682787754,
                        "actual_value": 2158489
                    }, {
                        "age": "14",
                        "gender_percentage": 1.36314819,
                        "total_percentage": 0.671170023,
                        "actual_value": 2121762
                    }, {
                        "age": "15",
                        "gender_percentage": 1.36325163,
                        "total_percentage": 0.671220951,
                        "actual_value": 2121923
                    }, {
                        "age": "16",
                        "gender_percentage": 1.36582147,
                        "total_percentage": 0.672486258,
                        "actual_value": 2125923
                    }, {
                        "age": "17",
                        "gender_percentage": 1.3801644,
                        "total_percentage": 0.679548252,
                        "actual_value": 2148248
                    }, {
                        "age": "18",
                        "gender_percentage": 1.41386466,
                        "total_percentage": 0.69614117,
                        "actual_value": 2200703
                    }, {
                        "age": "19",
                        "gender_percentage": 1.44514606,
                        "total_percentage": 0.711543119,
                        "actual_value": 2249393
                    }, {
                        "age": "20",
                        "gender_percentage": 1.47098197,
                        "total_percentage": 0.724263882,
                        "actual_value": 2289607
                    }, {
                        "age": "21",
                        "gender_percentage": 1.50841878,
                        "total_percentage": 0.742696556,
                        "actual_value": 2347878
                    }, {
                        "age": "22",
                        "gender_percentage": 1.53005492,
                        "total_percentage": 0.753349491,
                        "actual_value": 2381555
                    }, {
                        "age": "23",
                        "gender_percentage": 1.52674754,
                        "total_percentage": 0.751721041,
                        "actual_value": 2376407
                    }, {
                        "age": "24",
                        "gender_percentage": 1.46707003,
                        "total_percentage": 0.722337768,
                        "actual_value": 2283518
                    }, {
                        "age": "25",
                        "gender_percentage": 1.43210412,
                        "total_percentage": 0.705121686,
                        "actual_value": 2229093
                    }, {
                        "age": "26",
                        "gender_percentage": 1.40732185,
                        "total_percentage": 0.692919699,
                        "actual_value": 2190519
                    }, {
                        "age": "27",
                        "gender_percentage": 1.41230541,
                        "total_percentage": 0.695373446,
                        "actual_value": 2198276
                    }, {
                        "age": "28",
                        "gender_percentage": 1.4197374,
                        "total_percentage": 0.699032713,
                        "actual_value": 2209844
                    }, {
                        "age": "29",
                        "gender_percentage": 1.36982014,
                        "total_percentage": 0.674455076,
                        "actual_value": 2132147
                    }, {
                        "age": "30",
                        "gender_percentage": 1.38926678,
                        "total_percentage": 0.684029969,
                        "actual_value": 2162416
                    }, {
                        "age": "31",
                        "gender_percentage": 1.3868325,
                        "total_percentage": 0.682831407,
                        "actual_value": 2158627
                    }, {
                        "age": "32",
                        "gender_percentage": 1.3706033,
                        "total_percentage": 0.674840678,
                        "actual_value": 2133366
                    }, {
                        "age": "33",
                        "gender_percentage": 1.40430164,
                        "total_percentage": 0.691432647,
                        "actual_value": 2185818
                    }, {
                        "age": "34",
                        "gender_percentage": 1.31150915,
                        "total_percentage": 0.645744629,
                        "actual_value": 2041385
                    }, {
                        "age": "35",
                        "gender_percentage": 1.28473911,
                        "total_percentage": 0.632563928,
                        "actual_value": 1999717
                    }, {
                        "age": "36",
                        "gender_percentage": 1.26849899,
                        "total_percentage": 0.624567821,
                        "actual_value": 1974439
                    }, {
                        "age": "37",
                        "gender_percentage": 1.23213444,
                        "total_percentage": 0.606663095,
                        "actual_value": 1917837
                    }, {
                        "age": "38",
                        "gender_percentage": 1.27291012,
                        "total_percentage": 0.62673972,
                        "actual_value": 1981305
                    }, {
                        "age": "39",
                        "gender_percentage": 1.22836577,
                        "total_percentage": 0.604807523,
                        "actual_value": 1911971
                    }, {
                        "age": "40",
                        "gender_percentage": 1.24412982,
                        "total_percentage": 0.612569232,
                        "actual_value": 1936508
                    }, {
                        "age": "41",
                        "gender_percentage": 1.30325417,
                        "total_percentage": 0.641680147,
                        "actual_value": 2028536
                    }, {
                        "age": "42",
                        "gender_percentage": 1.37862892,
                        "total_percentage": 0.678792231,
                        "actual_value": 2145858
                    }, {
                        "age": "43",
                        "gender_percentage": 1.40246099,
                        "total_percentage": 0.690526371,
                        "actual_value": 2182953
                    }, {
                        "age": "44",
                        "gender_percentage": 1.32741133,
                        "total_percentage": 0.653574349,
                        "actual_value": 2066137
                    }, {
                        "age": "45",
                        "gender_percentage": 1.29902743,
                        "total_percentage": 0.639599034,
                        "actual_value": 2021957
                    }, {
                        "age": "46",
                        "gender_percentage": 1.29684049,
                        "total_percentage": 0.638522258,
                        "actual_value": 2018553
                    }, {
                        "age": "47",
                        "gender_percentage": 1.32288263,
                        "total_percentage": 0.651344561,
                        "actual_value": 2059088
                    }, {
                        "age": "48",
                        "gender_percentage": 1.40225283,
                        "total_percentage": 0.690423881,
                        "actual_value": 2182629
                    }, {
                        "age": "49",
                        "gender_percentage": 1.42362235,
                        "total_percentage": 0.700945541,
                        "actual_value": 2215891
                    }, {
                        "age": "50",
                        "gender_percentage": 1.42054818,
                        "total_percentage": 0.699431917,
                        "actual_value": 2211106
                    }, {
                        "age": "51",
                        "gender_percentage": 1.41715535,
                        "total_percentage": 0.697761396,
                        "actual_value": 2205825
                    }, {
                        "age": "52",
                        "gender_percentage": 1.43229172,
                        "total_percentage": 0.705214054,
                        "actual_value": 2229385
                    }, {
                        "age": "53",
                        "gender_percentage": 1.44809367,
                        "total_percentage": 0.712994426,
                        "actual_value": 2253981
                    }, {
                        "age": "54",
                        "gender_percentage": 1.39456901,
                        "total_percentage": 0.686640614,
                        "actual_value": 2170669
                    }, {
                        "age": "55",
                        "gender_percentage": 1.38448109,
                        "total_percentage": 0.681673651,
                        "actual_value": 2154967
                    }, {
                        "age": "56",
                        "gender_percentage": 1.36575915,
                        "total_percentage": 0.672455574,
                        "actual_value": 2125826
                    }, {
                        "age": "57",
                        "gender_percentage": 1.31344295,
                        "total_percentage": 0.646696773,
                        "actual_value": 2044395
                    }, {
                        "age": "58",
                        "gender_percentage": 1.30082824,
                        "total_percentage": 0.640485698,
                        "actual_value": 2024760
                    }, {
                        "age": "59",
                        "gender_percentage": 1.24151244,
                        "total_percentage": 0.611280517,
                        "actual_value": 1932434
                    }, {
                        "age": "60",
                        "gender_percentage": 1.19243938,
                        "total_percentage": 0.587118532,
                        "actual_value": 1856051
                    }, {
                        "age": "61",
                        "gender_percentage": 1.14583851,
                        "total_percentage": 0.564173773,
                        "actual_value": 1783516
                    }, {
                        "age": "62",
                        "gender_percentage": 1.10660988,
                        "total_percentage": 0.544858864,
                        "actual_value": 1722456
                    }, {
                        "age": "63",
                        "gender_percentage": 1.08054012,
                        "total_percentage": 0.532022958,
                        "actual_value": 1681878
                    }, {
                        "age": "64",
                        "gender_percentage": 1.04751379,
                        "total_percentage": 0.515761866,
                        "actual_value": 1630472
                    }, {
                        "age": "65",
                        "gender_percentage": 1.03821932,
                        "total_percentage": 0.511185568,
                        "actual_value": 1616005
                    }, {
                        "age": "66",
                        "gender_percentage": 1.08141129,
                        "total_percentage": 0.532451897,
                        "actual_value": 1683234
                    }, {
                        "age": "67",
                        "gender_percentage": 0.791086622,
                        "total_percentage": 0.389505432,
                        "actual_value": 1231339
                    }, {
                        "age": "68",
                        "gender_percentage": 0.776511121,
                        "total_percentage": 0.382328928,
                        "actual_value": 1208652
                    }, {
                        "age": "69",
                        "gender_percentage": 0.754222883,
                        "total_percentage": 0.371354921,
                        "actual_value": 1173960
                    }, {
                        "age": "70",
                        "gender_percentage": 0.769852019,
                        "total_percentage": 0.379050201,
                        "actual_value": 1198287
                    }, {
                        "age": "71",
                        "gender_percentage": 0.665825463,
                        "total_percentage": 0.327830894,
                        "actual_value": 1036368
                    }, {
                        "age": "72",
                        "gender_percentage": 0.602346515,
                        "total_percentage": 0.296575916,
                        "actual_value": 937562
                    }, {
                        "age": "73",
                        "gender_percentage": 0.567116553,
                        "total_percentage": 0.279229824,
                        "actual_value": 882726
                    }, {
                        "age": "74",
                        "gender_percentage": 0.532926735,
                        "total_percentage": 0.262395864,
                        "actual_value": 829509
                    }, {
                        "age": "75",
                        "gender_percentage": 0.504693167,
                        "total_percentage": 0.24849457,
                        "actual_value": 785563
                    }, {
                        "age": "76",
                        "gender_percentage": 0.460728313,
                        "total_percentage": 0.2268477,
                        "actual_value": 717131
                    }, {
                        "age": "77",
                        "gender_percentage": 0.435388387,
                        "total_percentage": 0.214371141,
                        "actual_value": 677689
                    }, {
                        "age": "78",
                        "gender_percentage": 0.411510059,
                        "total_percentage": 0.202614226,
                        "actual_value": 640522
                    }, {
                        "age": "79",
                        "gender_percentage": 0.36584397,
                        "total_percentage": 0.180129722,
                        "actual_value": 569442
                    }, {
                        "age": "80",
                        "gender_percentage": 0.348340135,
                        "total_percentage": 0.171511401,
                        "actual_value": 542197
                    }, {
                        "age": "81",
                        "gender_percentage": 0.327460812,
                        "total_percentage": 0.161231099,
                        "actual_value": 509698
                    }, {
                        "age": "82",
                        "gender_percentage": 0.306215287,
                        "total_percentage": 0.15077049,
                        "actual_value": 476629
                    }, {
                        "age": "83",
                        "gender_percentage": 0.287247927,
                        "total_percentage": 0.141431576,
                        "actual_value": 447106
                    }, {
                        "age": "84",
                        "gender_percentage": 0.25347635,
                        "total_percentage": 0.124803546,
                        "actual_value": 394540
                    }, {
                        "age": "85",
                        "gender_percentage": 0.230297019,
                        "total_percentage": 0.113390794,
                        "actual_value": 358461
                    }, {
                        "age": "86",
                        "gender_percentage": 0.204305639,
                        "total_percentage": 0.10059348,
                        "actual_value": 318005
                    }, {
                        "age": "87",
                        "gender_percentage": 0.17548422,
                        "total_percentage": 0.0864027467,
                        "actual_value": 273144
                    }, {
                        "age": "88",
                        "gender_percentage": 0.152206593,
                        "total_percentage": 0.0749415968,
                        "actual_value": 236912
                    }, {
                        "age": "89",
                        "gender_percentage": 0.127963347,
                        "total_percentage": 0.0630050079,
                        "actual_value": 199177
                    }, {
                        "age": "90",
                        "gender_percentage": 0.105344884,
                        "total_percentage": 0.0518684093,
                        "actual_value": 163971
                    }, {
                        "age": "91",
                        "gender_percentage": 0.0854517386,
                        "total_percentage": 0.0420736686,
                        "actual_value": 133007
                    }, {
                        "age": "92",
                        "gender_percentage": 0.0679948029,
                        "total_percentage": 0.0334784388,
                        "actual_value": 105835
                    }, {
                        "age": "93",
                        "gender_percentage": 0.0502204918,
                        "total_percentage": 0.0247269437,
                        "actual_value": 78169
                    }, {
                        "age": "94",
                        "gender_percentage": 0.0351714979,
                        "total_percentage": 0.0173173065,
                        "actual_value": 54745
                    }, {
                        "age": "95",
                        "gender_percentage": 0.0262901245,
                        "total_percentage": 0.0129444059,
                        "actual_value": 40921
                    }, {
                        "age": "96",
                        "gender_percentage": 0.0176747297,
                        "total_percentage": 0.0087024645,
                        "actual_value": 27511
                    }, {
                        "age": "97",
                        "gender_percentage": 0.0120493459,
                        "total_percentage": 0.00593270771,
                        "actual_value": 18755
                    }, {
                        "age": "98",
                        "gender_percentage": 0.00815282325,
                        "total_percentage": 0.00401418613,
                        "actual_value": 12690
                    }, {
                        "age": "99",
                        "gender_percentage": 0.00524376228,
                        "total_percentage": 0.00258185872,
                        "actual_value": 8162
                    }, { "age": "100", "gender_percentage": 0.0079131855, "total_percentage": 0.00389619626, "actual_value": 12317 }]
            }, {
                "date": 1341100800,
                "max_gender_percentage": 1.53133947,
                "max_total_percentage": 0.75364517,
                "max_actual_value": 2365798,
                "age_groups": [{
                        "age": "00",
                        "gender_percentage": 1.30457961,
                        "total_percentage": 0.642045829,
                        "actual_value": 2015472
                    }, {
                        "age": "01",
                        "gender_percentage": 1.31681778,
                        "total_percentage": 0.648068815,
                        "actual_value": 2034379
                    }, {
                        "age": "02",
                        "gender_percentage": 1.31465456,
                        "total_percentage": 0.647004193,
                        "actual_value": 2031037
                    }, {
                        "age": "03",
                        "gender_percentage": 1.3151329,
                        "total_percentage": 0.647239607,
                        "actual_value": 2031776
                    }, {
                        "age": "04",
                        "gender_percentage": 1.35866005,
                        "total_percentage": 0.668661395,
                        "actual_value": 2099022
                    }, {
                        "age": "05",
                        "gender_percentage": 1.36670966,
                        "total_percentage": 0.672622989,
                        "actual_value": 2111458
                    }, {
                        "age": "06",
                        "gender_percentage": 1.35597836,
                        "total_percentage": 0.667341607,
                        "actual_value": 2094879
                    }, {
                        "age": "07",
                        "gender_percentage": 1.35096581,
                        "total_percentage": 0.66487469,
                        "actual_value": 2087135
                    }, {
                        "age": "08",
                        "gender_percentage": 1.35270635,
                        "total_percentage": 0.665731294,
                        "actual_value": 2089824
                    }, {
                        "age": "09",
                        "gender_percentage": 1.3422618,
                        "total_percentage": 0.660591033,
                        "actual_value": 2073688
                    }, {
                        "age": "10",
                        "gender_percentage": 1.33658578,
                        "total_percentage": 0.657797593,
                        "actual_value": 2064919
                    }, {
                        "age": "11",
                        "gender_percentage": 1.37057329,
                        "total_percentage": 0.674524465,
                        "actual_value": 2117427
                    }, {
                        "age": "12",
                        "gender_percentage": 1.39346313,
                        "total_percentage": 0.685789651,
                        "actual_value": 2152790
                    }, {
                        "age": "13",
                        "gender_percentage": 1.36945802,
                        "total_percentage": 0.673975589,
                        "actual_value": 2115704
                    }, {
                        "age": "14",
                        "gender_percentage": 1.36906641,
                        "total_percentage": 0.673782861,
                        "actual_value": 2115099
                    }, {
                        "age": "15",
                        "gender_percentage": 1.37066326,
                        "total_percentage": 0.674568745,
                        "actual_value": 2117566
                    }, {
                        "age": "16",
                        "gender_percentage": 1.38377267,
                        "total_percentage": 0.681020511,
                        "actual_value": 2137819
                    }, {
                        "age": "17",
                        "gender_percentage": 1.41688117,
                        "total_percentage": 0.697314781,
                        "actual_value": 2188969
                    }, {
                        "age": "18",
                        "gender_percentage": 1.44789117,
                        "total_percentage": 0.712576284,
                        "actual_value": 2236877
                    }, {
                        "age": "19",
                        "gender_percentage": 1.47408734,
                        "total_percentage": 0.725468667,
                        "actual_value": 2277348
                    }, {
                        "age": "20",
                        "gender_percentage": 1.51083356,
                        "total_percentage": 0.743553235,
                        "actual_value": 2334118
                    }, {
                        "age": "21",
                        "gender_percentage": 1.53133947,
                        "total_percentage": 0.75364517,
                        "actual_value": 2365798
                    }, {
                        "age": "22",
                        "gender_percentage": 1.52862218,
                        "total_percentage": 0.752307861,
                        "actual_value": 2361600
                    }, {
                        "age": "23",
                        "gender_percentage": 1.46902947,
                        "total_percentage": 0.72297945,
                        "actual_value": 2269534
                    }, {
                        "age": "24",
                        "gender_percentage": 1.43433773,
                        "total_percentage": 0.705905986,
                        "actual_value": 2215938
                    }, {
                        "age": "25",
                        "gender_percentage": 1.40984067,
                        "total_percentage": 0.69384982,
                        "actual_value": 2178092
                    }, {
                        "age": "26",
                        "gender_percentage": 1.41530115,
                        "total_percentage": 0.696537179,
                        "actual_value": 2186528
                    }, {
                        "age": "27",
                        "gender_percentage": 1.42371647,
                        "total_percentage": 0.700678759,
                        "actual_value": 2199529
                    }, {
                        "age": "28",
                        "gender_percentage": 1.37405308,
                        "total_percentage": 0.676237036,
                        "actual_value": 2122803
                    }, {
                        "age": "29",
                        "gender_percentage": 1.39426641,
                        "total_percentage": 0.686184982,
                        "actual_value": 2154031
                    }, {
                        "age": "30",
                        "gender_percentage": 1.39261002,
                        "total_percentage": 0.685369791,
                        "actual_value": 2151472
                    }, {
                        "age": "31",
                        "gender_percentage": 1.37673024,
                        "total_percentage": 0.677554594,
                        "actual_value": 2126939
                    }, {
                        "age": "32",
                        "gender_percentage": 1.41132295,
                        "total_percentage": 0.694579319,
                        "actual_value": 2180382
                    }, {
                        "age": "33",
                        "gender_percentage": 1.31843016,
                        "total_percentage": 0.648862345,
                        "actual_value": 2036870
                    }, {
                        "age": "34",
                        "gender_percentage": 1.29176277,
                        "total_percentage": 0.635738051,
                        "actual_value": 1995671
                    }, {
                        "age": "35",
                        "gender_percentage": 1.27617556,
                        "total_percentage": 0.628066843,
                        "actual_value": 1971590
                    }, {
                        "age": "36",
                        "gender_percentage": 1.23982936,
                        "total_percentage": 0.610179143,
                        "actual_value": 1915438
                    }, {
                        "age": "37",
                        "gender_percentage": 1.28152211,
                        "total_percentage": 0.630698136,
                        "actual_value": 1979850
                    }, {
                        "age": "38",
                        "gender_percentage": 1.23702145,
                        "total_percentage": 0.608797236,
                        "actual_value": 1911100
                    }, {
                        "age": "39",
                        "gender_percentage": 1.2533252,
                        "total_percentage": 0.616821089,
                        "actual_value": 1936288
                    }, {
                        "age": "40",
                        "gender_percentage": 1.31329656,
                        "total_percentage": 0.646335857,
                        "actual_value": 2028939
                    }, {
                        "age": "41",
                        "gender_percentage": 1.3899814,
                        "total_percentage": 0.684076125,
                        "actual_value": 2147411
                    }, {
                        "age": "42",
                        "gender_percentage": 1.41483058,
                        "total_percentage": 0.696305587,
                        "actual_value": 2185801
                    }, {
                        "age": "43",
                        "gender_percentage": 1.33942088,
                        "total_percentage": 0.65919288,
                        "actual_value": 2069299
                    }, {
                        "age": "44",
                        "gender_percentage": 1.31152171,
                        "total_percentage": 0.645462369,
                        "actual_value": 2026197
                    }, {
                        "age": "45",
                        "gender_percentage": 1.30976304,
                        "total_percentage": 0.644596846,
                        "actual_value": 2023480
                    }, {
                        "age": "46",
                        "gender_percentage": 1.33645827,
                        "total_percentage": 0.657734837,
                        "actual_value": 2064722
                    }, {
                        "age": "47",
                        "gender_percentage": 1.41745854,
                        "total_percentage": 0.697598935,
                        "actual_value": 2189861
                    }, {
                        "age": "48",
                        "gender_percentage": 1.43993607,
                        "total_percentage": 0.708661199,
                        "actual_value": 2224587
                    }, {
                        "age": "49",
                        "gender_percentage": 1.43746475,
                        "total_percentage": 0.707444943,
                        "actual_value": 2220769
                    }, {
                        "age": "50",
                        "gender_percentage": 1.43444906,
                        "total_percentage": 0.705960778,
                        "actual_value": 2216110
                    }, {
                        "age": "51",
                        "gender_percentage": 1.45066219,
                        "total_percentage": 0.713940033,
                        "actual_value": 2241158
                    }, {
                        "age": "52",
                        "gender_percentage": 1.46760222,
                        "total_percentage": 0.722277028,
                        "actual_value": 2267329
                    }, {
                        "age": "53",
                        "gender_percentage": 1.4139205,
                        "total_percentage": 0.695857694,
                        "actual_value": 2184395
                    }, {
                        "age": "54",
                        "gender_percentage": 1.40439703,
                        "total_percentage": 0.691170742,
                        "actual_value": 2169682
                    }, {
                        "age": "55",
                        "gender_percentage": 1.3862194,
                        "total_percentage": 0.682224663,
                        "actual_value": 2141599
                    }, {
                        "age": "56",
                        "gender_percentage": 1.33398371,
                        "total_percentage": 0.656516988,
                        "actual_value": 2060899
                    }, {
                        "age": "57",
                        "gender_percentage": 1.32207371,
                        "total_percentage": 0.650655511,
                        "actual_value": 2042499
                    }, {
                        "age": "58",
                        "gender_percentage": 1.26261046,
                        "total_percentage": 0.621390811,
                        "actual_value": 1950633
                    }, {
                        "age": "59",
                        "gender_percentage": 1.21346295,
                        "total_percentage": 0.59720298,
                        "actual_value": 1874704
                    }, {
                        "age": "60",
                        "gender_percentage": 1.1667078,
                        "total_percentage": 0.57419254,
                        "actual_value": 1802471
                    }, {
                        "age": "61",
                        "gender_percentage": 1.127777,
                        "total_percentage": 0.555032836,
                        "actual_value": 1742326
                    }, {
                        "age": "62",
                        "gender_percentage": 1.10247603,
                        "total_percentage": 0.54258102,
                        "actual_value": 1703238
                    }, {
                        "age": "63",
                        "gender_percentage": 1.06800824,
                        "total_percentage": 0.525617777,
                        "actual_value": 1649988
                    }, {
                        "age": "64",
                        "gender_percentage": 1.05980264,
                        "total_percentage": 0.521579411,
                        "actual_value": 1637311
                    }, {
                        "age": "65",
                        "gender_percentage": 1.10687366,
                        "total_percentage": 0.544745307,
                        "actual_value": 1710032
                    }, {
                        "age": "66",
                        "gender_percentage": 0.811092779,
                        "total_percentage": 0.399177431,
                        "actual_value": 1253074
                    }, {
                        "age": "67",
                        "gender_percentage": 0.796354806,
                        "total_percentage": 0.391924171,
                        "actual_value": 1230305
                    }, {
                        "age": "68",
                        "gender_percentage": 0.774165964,
                        "total_percentage": 0.381003984,
                        "actual_value": 1196025
                    }, {
                        "age": "69",
                        "gender_percentage": 0.792164947,
                        "total_percentage": 0.389862142,
                        "actual_value": 1223832
                    }, {
                        "age": "70",
                        "gender_percentage": 0.686662442,
                        "total_percentage": 0.337939329,
                        "actual_value": 1060839
                    }, {
                        "age": "71",
                        "gender_percentage": 0.622472091,
                        "total_percentage": 0.306348196,
                        "actual_value": 961670
                    }, {
                        "age": "72",
                        "gender_percentage": 0.587505894,
                        "total_percentage": 0.289139664,
                        "actual_value": 907650
                    }, {
                        "age": "73",
                        "gender_percentage": 0.553603183,
                        "total_percentage": 0.272454523,
                        "actual_value": 855273
                    }, {
                        "age": "74",
                        "gender_percentage": 0.52583153,
                        "total_percentage": 0.258786769,
                        "actual_value": 812368
                    }, {
                        "age": "75",
                        "gender_percentage": 0.481618257,
                        "total_percentage": 0.237027308,
                        "actual_value": 744062
                    }, {
                        "age": "76",
                        "gender_percentage": 0.456938672,
                        "total_percentage": 0.224881308,
                        "actual_value": 705934
                    }, {
                        "age": "77",
                        "gender_percentage": 0.433684404,
                        "total_percentage": 0.213436774,
                        "actual_value": 670008
                    }, {
                        "age": "78",
                        "gender_percentage": 0.387355164,
                        "total_percentage": 0.190635946,
                        "actual_value": 598433
                    }, {
                        "age": "79",
                        "gender_percentage": 0.370697998,
                        "total_percentage": 0.18243816,
                        "actual_value": 572699
                    }, {
                        "age": "80",
                        "gender_percentage": 0.350540329,
                        "total_percentage": 0.17251761,
                        "actual_value": 541557
                    }, {
                        "age": "81",
                        "gender_percentage": 0.329981345,
                        "total_percentage": 0.162399554,
                        "actual_value": 509795
                    }, {
                        "age": "82",
                        "gender_percentage": 0.311860673,
                        "total_percentage": 0.153481507,
                        "actual_value": 481800
                    }, {
                        "age": "83",
                        "gender_percentage": 0.277581243,
                        "total_percentage": 0.136610965,
                        "actual_value": 428841
                    }, {
                        "age": "84",
                        "gender_percentage": 0.254723111,
                        "total_percentage": 0.125361389,
                        "actual_value": 393527
                    }, {
                        "age": "85",
                        "gender_percentage": 0.228438914,
                        "total_percentage": 0.112425682,
                        "actual_value": 352920
                    }, {
                        "age": "86",
                        "gender_percentage": 0.198572656,
                        "total_percentage": 0.097727072,
                        "actual_value": 306779
                    }, {
                        "age": "87",
                        "gender_percentage": 0.174412839,
                        "total_percentage": 0.0858368743,
                        "actual_value": 269454
                    }, {
                        "age": "88",
                        "gender_percentage": 0.148771393,
                        "total_percentage": 0.0732174961,
                        "actual_value": 229840
                    }, {
                        "age": "89",
                        "gender_percentage": 0.124302823,
                        "total_percentage": 0.061175346,
                        "actual_value": 192038
                    }, {
                        "age": "90",
                        "gender_percentage": 0.102629218,
                        "total_percentage": 0.0505087316,
                        "actual_value": 158554
                    }, {
                        "age": "91",
                        "gender_percentage": 0.0830489244,
                        "total_percentage": 0.0408723356,
                        "actual_value": 128304
                    }, {
                        "age": "92",
                        "gender_percentage": 0.0626368731,
                        "total_percentage": 0.0308265919,
                        "actual_value": 96769
                    }, {
                        "age": "93",
                        "gender_percentage": 0.0446586037,
                        "total_percentage": 0.0219786283,
                        "actual_value": 68994
                    }, {
                        "age": "94",
                        "gender_percentage": 0.0342075817,
                        "total_percentage": 0.016835182,
                        "actual_value": 52848
                    }, {
                        "age": "95",
                        "gender_percentage": 0.0235507238,
                        "total_percentage": 0.0115904341,
                        "actual_value": 36384
                    }, {
                        "age": "96",
                        "gender_percentage": 0.0164222024,
                        "total_percentage": 0.00808214886,
                        "actual_value": 25371
                    }, {
                        "age": "97",
                        "gender_percentage": 0.0113636903,
                        "total_percentage": 0.00559261383,
                        "actual_value": 17556
                    }, {
                        "age": "98",
                        "gender_percentage": 0.00751041799,
                        "total_percentage": 0.0036962348,
                        "actual_value": 11603
                    }, {
                        "age": "99",
                        "gender_percentage": 0.00479636278,
                        "total_percentage": 0.00236051882,
                        "actual_value": 7410
                    }, { "age": "100", "gender_percentage": 0.00719001319, "total_percentage": 0.00353854832, "actual_value": 11108 }]
            }, {
                "date": 1309478400,
                "max_gender_percentage": 1.53176036,
                "max_total_percentage": 0.753565119,
                "max_actual_value": 2348048,
                "age_groups": [{
                        "age": "00",
                        "gender_percentage": 1.32293181,
                        "total_percentage": 0.650829784,
                        "actual_value": 2027933
                    }, {
                        "age": "01",
                        "gender_percentage": 1.32102693,
                        "total_percentage": 0.649892661,
                        "actual_value": 2025013
                    }, {
                        "age": "02",
                        "gender_percentage": 1.32196958,
                        "total_percentage": 0.650356408,
                        "actual_value": 2026458
                    }, {
                        "age": "03",
                        "gender_percentage": 1.36607268,
                        "total_percentage": 0.672053377,
                        "actual_value": 2094064
                    }, {
                        "age": "04",
                        "gender_percentage": 1.37406011,
                        "total_percentage": 0.675982875,
                        "actual_value": 2106308
                    }, {
                        "age": "05",
                        "gender_percentage": 1.3631149,
                        "total_percentage": 0.670598268,
                        "actual_value": 2089530
                    }, {
                        "age": "06",
                        "gender_percentage": 1.3581968,
                        "total_percentage": 0.668178758,
                        "actual_value": 2081991
                    }, {
                        "age": "07",
                        "gender_percentage": 1.35990401,
                        "total_percentage": 0.669018638,
                        "actual_value": 2084608
                    }, {
                        "age": "08",
                        "gender_percentage": 1.34931499,
                        "total_percentage": 0.66380926,
                        "actual_value": 2068376
                    }, {
                        "age": "09",
                        "gender_percentage": 1.34371583,
                        "total_percentage": 0.661054696,
                        "actual_value": 2059793
                    }, {
                        "age": "10",
                        "gender_percentage": 1.37790901,
                        "total_percentage": 0.677876378,
                        "actual_value": 2112208
                    }, {
                        "age": "11",
                        "gender_percentage": 1.40087385,
                        "total_percentage": 0.689174168,
                        "actual_value": 2147411
                    }, {
                        "age": "12",
                        "gender_percentage": 1.37658538,
                        "total_percentage": 0.677225205,
                        "actual_value": 2110179
                    }, {
                        "age": "13",
                        "gender_percentage": 1.37593107,
                        "total_percentage": 0.67690331,
                        "actual_value": 2109176
                    }, {
                        "age": "14",
                        "gender_percentage": 1.37706421,
                        "total_percentage": 0.67746077,
                        "actual_value": 2110913
                    }, {
                        "age": "15",
                        "gender_percentage": 1.3892926,
                        "total_percentage": 0.683476651,
                        "actual_value": 2129658
                    }, {
                        "age": "16",
                        "gender_percentage": 1.42134083,
                        "total_percentage": 0.699243106,
                        "actual_value": 2178785
                    }, {
                        "age": "17",
                        "gender_percentage": 1.45174056,
                        "total_percentage": 0.714198565,
                        "actual_value": 2225385
                    }, {
                        "age": "18",
                        "gender_percentage": 1.47711912,
                        "total_percentage": 0.726683805,
                        "actual_value": 2264288
                    }, {
                        "age": "19",
                        "gender_percentage": 1.51294123,
                        "total_percentage": 0.744306856,
                        "actual_value": 2319200
                    }, {
                        "age": "20",
                        "gender_percentage": 1.53176036,
                        "total_percentage": 0.753565119,
                        "actual_value": 2348048
                    }, {
                        "age": "21",
                        "gender_percentage": 1.52931468,
                        "total_percentage": 0.752361943,
                        "actual_value": 2344299
                    }, {
                        "age": "22",
                        "gender_percentage": 1.46978926,
                        "total_percentage": 0.723077807,
                        "actual_value": 2253052
                    }, {
                        "age": "23",
                        "gender_percentage": 1.43525295,
                        "total_percentage": 0.706087315,
                        "actual_value": 2200111
                    }, {
                        "age": "24",
                        "gender_percentage": 1.41078377,
                        "total_percentage": 0.694049454,
                        "actual_value": 2162602
                    }, {
                        "age": "25",
                        "gender_percentage": 1.41699484,
                        "total_percentage": 0.697105054,
                        "actual_value": 2172123
                    }, {
                        "age": "26",
                        "gender_percentage": 1.42659359,
                        "total_percentage": 0.701827256,
                        "actual_value": 2186837
                    }, {
                        "age": "27",
                        "gender_percentage": 1.37727753,
                        "total_percentage": 0.677565715,
                        "actual_value": 2111240
                    }, {
                        "age": "28",
                        "gender_percentage": 1.39831727,
                        "total_percentage": 0.687916433,
                        "actual_value": 2143492
                    }, {
                        "age": "29",
                        "gender_percentage": 1.39748487,
                        "total_percentage": 0.687506923,
                        "actual_value": 2142216
                    }, {
                        "age": "30",
                        "gender_percentage": 1.3822152,
                        "total_percentage": 0.679994854,
                        "actual_value": 2118809
                    }, {
                        "age": "31",
                        "gender_percentage": 1.41772157,
                        "total_percentage": 0.697462572,
                        "actual_value": 2173237
                    }, {
                        "age": "32",
                        "gender_percentage": 1.32482298,
                        "total_percentage": 0.651760167,
                        "actual_value": 2030832
                    }, {
                        "age": "33",
                        "gender_percentage": 1.29836021,
                        "total_percentage": 0.638741537,
                        "actual_value": 1990267
                    }, {
                        "age": "34",
                        "gender_percentage": 1.28314012,
                        "total_percentage": 0.631253859,
                        "actual_value": 1966936
                    }, {
                        "age": "35",
                        "gender_percentage": 1.24709426,
                        "total_percentage": 0.613520729,
                        "actual_value": 1911681
                    }, {
                        "age": "36",
                        "gender_percentage": 1.28956516,
                        "total_percentage": 0.634414724,
                        "actual_value": 1976785
                    }, {
                        "age": "37",
                        "gender_percentage": 1.24528071,
                        "total_percentage": 0.612628536,
                        "actual_value": 1908901
                    }, {
                        "age": "38",
                        "gender_percentage": 1.26236458,
                        "total_percentage": 0.621033119,
                        "actual_value": 1935089
                    }, {
                        "age": "39",
                        "gender_percentage": 1.32316992,
                        "total_percentage": 0.650946924,
                        "actual_value": 2028298
                    }, {
                        "age": "40",
                        "gender_percentage": 1.40108848,
                        "total_percentage": 0.689279754,
                        "actual_value": 2147740
                    }, {
                        "age": "41",
                        "gender_percentage": 1.42690998,
                        "total_percentage": 0.701982908,
                        "actual_value": 2187322
                    }, {
                        "age": "42",
                        "gender_percentage": 1.35121791,
                        "total_percentage": 0.664745421,
                        "actual_value": 2071293
                    }, {
                        "age": "43",
                        "gender_percentage": 1.32360177,
                        "total_percentage": 0.651159382,
                        "actual_value": 2028960
                    }, {
                        "age": "44",
                        "gender_percentage": 1.32264542,
                        "total_percentage": 0.650688894,
                        "actual_value": 2027494
                    }, {
                        "age": "45",
                        "gender_percentage": 1.35018719,
                        "total_percentage": 0.664238347,
                        "actual_value": 2069713
                    }, {
                        "age": "46",
                        "gender_percentage": 1.43254046,
                        "total_percentage": 0.704752877,
                        "actual_value": 2195953
                    }, {
                        "age": "47",
                        "gender_percentage": 1.45603175,
                        "total_percentage": 0.71630966,
                        "actual_value": 2231963
                    }, {
                        "age": "48",
                        "gender_percentage": 1.45460701,
                        "total_percentage": 0.715608743,
                        "actual_value": 2229779
                    }, {
                        "age": "49",
                        "gender_percentage": 1.45212937,
                        "total_percentage": 0.714389841,
                        "actual_value": 2225981
                    }, {
                        "age": "50",
                        "gender_percentage": 1.46911147,
                        "total_percentage": 0.722744358,
                        "actual_value": 2252013
                    }, {
                        "age": "51",
                        "gender_percentage": 1.48708841,
                        "total_percentage": 0.731588297,
                        "actual_value": 2279570
                    }, {
                        "age": "52",
                        "gender_percentage": 1.43360641,
                        "total_percentage": 0.705277281,
                        "actual_value": 2197587
                    }, {
                        "age": "53",
                        "gender_percentage": 1.42464436,
                        "total_percentage": 0.700868309,
                        "actual_value": 2183849
                    }, {
                        "age": "54",
                        "gender_percentage": 1.40697206,
                        "total_percentage": 0.692174245,
                        "actual_value": 2156759
                    }, {
                        "age": "55",
                        "gender_percentage": 1.35473475,
                        "total_percentage": 0.666475568,
                        "actual_value": 2076684
                    }, {
                        "age": "56",
                        "gender_percentage": 1.343404,
                        "total_percentage": 0.66090129,
                        "actual_value": 2059315
                    }, {
                        "age": "57",
                        "gender_percentage": 1.28388381,
                        "total_percentage": 0.631619722,
                        "actual_value": 1968076
                    }, {
                        "age": "58",
                        "gender_percentage": 1.23474649,
                        "total_percentage": 0.607446117,
                        "actual_value": 1892753
                    }, {
                        "age": "59",
                        "gender_percentage": 1.18792307,
                        "total_percentage": 0.584410859,
                        "actual_value": 1820977
                    }, {
                        "age": "60",
                        "gender_percentage": 1.14889203,
                        "total_percentage": 0.565209142,
                        "actual_value": 1761146
                    }, { "age": "61", "gender_percentage": 1.12431, "total_percentage": 0.55311576, "actual_value": 1723464 }, {
                        "age": "62",
                        "gender_percentage": 1.09040842,
                        "total_percentage": 0.536437535,
                        "actual_value": 1671496
                    }, {
                        "age": "63",
                        "gender_percentage": 1.08155792,
                        "total_percentage": 0.532083443,
                        "actual_value": 1657929
                    }, {
                        "age": "64",
                        "gender_percentage": 1.13019293,
                        "total_percentage": 0.55600993,
                        "actual_value": 1732482
                    }, {
                        "age": "65",
                        "gender_percentage": 0.830493312,
                        "total_percentage": 0.408569648,
                        "actual_value": 1273070
                    }, {
                        "age": "66",
                        "gender_percentage": 0.816892367,
                        "total_percentage": 0.401878525,
                        "actual_value": 1252221
                    }, {
                        "age": "67",
                        "gender_percentage": 0.79475536,
                        "total_percentage": 0.390987999,
                        "actual_value": 1218287
                    }, {
                        "age": "68",
                        "gender_percentage": 0.813724532,
                        "total_percentage": 0.400320076,
                        "actual_value": 1247365
                    }, {
                        "age": "69",
                        "gender_percentage": 0.707027992,
                        "total_percentage": 0.347829626,
                        "actual_value": 1083809
                    }, {
                        "age": "70",
                        "gender_percentage": 0.642384199,
                        "total_percentage": 0.316027453,
                        "actual_value": 984716
                    }, {
                        "age": "71",
                        "gender_percentage": 0.607592161,
                        "total_percentage": 0.298911156,
                        "actual_value": 931383
                    }, {
                        "age": "72",
                        "gender_percentage": 0.573977624,
                        "total_percentage": 0.282374141,
                        "actual_value": 879855
                    }, {
                        "age": "73",
                        "gender_percentage": 0.546698103,
                        "total_percentage": 0.268953703,
                        "actual_value": 838038
                    }, {
                        "age": "74",
                        "gender_percentage": 0.502249257,
                        "total_percentage": 0.247086641,
                        "actual_value": 769902
                    }, {
                        "age": "75",
                        "gender_percentage": 0.478131701,
                        "total_percentage": 0.235221763,
                        "actual_value": 732932
                    }, {
                        "age": "76",
                        "gender_percentage": 0.45562807,
                        "total_percentage": 0.224150872,
                        "actual_value": 698436
                    }, {
                        "age": "77",
                        "gender_percentage": 0.408697014,
                        "total_percentage": 0.201062661,
                        "actual_value": 626495
                    }, {
                        "age": "78",
                        "gender_percentage": 0.392881977,
                        "total_percentage": 0.193282292,
                        "actual_value": 602252
                    }, {
                        "age": "79",
                        "gender_percentage": 0.373558576,
                        "total_percentage": 0.183775948,
                        "actual_value": 572631
                    }, {
                        "age": "80",
                        "gender_percentage": 0.353723076,
                        "total_percentage": 0.174017672,
                        "actual_value": 542225
                    }, {
                        "age": "81",
                        "gender_percentage": 0.336530918,
                        "total_percentage": 0.165559815,
                        "actual_value": 515871
                    }, {
                        "age": "82",
                        "gender_percentage": 0.301870003,
                        "total_percentage": 0.148508024,
                        "actual_value": 462739
                    }, {
                        "age": "83",
                        "gender_percentage": 0.279453135,
                        "total_percentage": 0.137479818,
                        "actual_value": 428376
                    }, {
                        "age": "84",
                        "gender_percentage": 0.253152147,
                        "total_percentage": 0.124540779,
                        "actual_value": 388059
                    }, {
                        "age": "85",
                        "gender_percentage": 0.222526699,
                        "total_percentage": 0.109474278,
                        "actual_value": 341113
                    }, {
                        "age": "86",
                        "gender_percentage": 0.197793972,
                        "total_percentage": 0.0973067604,
                        "actual_value": 303200
                    }, {
                        "age": "87",
                        "gender_percentage": 0.17092674,
                        "total_percentage": 0.0840891518,
                        "actual_value": 262015
                    }, {
                        "age": "88",
                        "gender_percentage": 0.144863209,
                        "total_percentage": 0.0712669321,
                        "actual_value": 222062
                    }, {
                        "age": "89",
                        "gender_percentage": 0.121595671,
                        "total_percentage": 0.0598202295,
                        "actual_value": 186395
                    }, {
                        "age": "90",
                        "gender_percentage": 0.099968805,
                        "total_percentage": 0.0491806724,
                        "actual_value": 153243
                    }, {
                        "age": "91",
                        "gender_percentage": 0.0769048015,
                        "total_percentage": 0.0378341008,
                        "actual_value": 117888
                    }, {
                        "age": "92",
                        "gender_percentage": 0.055771768,
                        "total_percentage": 0.0274374897,
                        "actual_value": 85493
                    }, {
                        "age": "93",
                        "gender_percentage": 0.043709728,
                        "total_percentage": 0.0215034461,
                        "actual_value": 67003
                    }, {
                        "age": "94",
                        "gender_percentage": 0.0308159356,
                        "total_percentage": 0.0151602135,
                        "actual_value": 47238
                    }, {
                        "age": "95",
                        "gender_percentage": 0.021961524,
                        "total_percentage": 0.0108041955,
                        "actual_value": 33665
                    }, {
                        "age": "96",
                        "gender_percentage": 0.0155482241,
                        "total_percentage": 0.00764910728,
                        "actual_value": 23834
                    }, {
                        "age": "97",
                        "gender_percentage": 0.0105290063,
                        "total_percentage": 0.00517985195,
                        "actual_value": 16140
                    }, {
                        "age": "98",
                        "gender_percentage": 0.0068986519,
                        "total_percentage": 0.00339386211,
                        "actual_value": 10575
                    }, {
                        "age": "99",
                        "gender_percentage": 0.004317284,
                        "total_percentage": 0.00212393186,
                        "actual_value": 6618
                    }, { "age": "100", "gender_percentage": 0.00664097176, "total_percentage": 0.00326709374, "actual_value": 10180 }]
            }, {
                "date": 1277942400,
                "max_gender_percentage": 1.53488176,
                "max_total_percentage": 0.754694775,
                "max_actual_value": 2334499,
                "age_groups": [{
                        "age": "00",
                        "gender_percentage": 1.32703521,
                        "total_percentage": 0.652497518,
                        "actual_value": 2018372
                    }, {
                        "age": "01",
                        "gender_percentage": 1.32830283,
                        "total_percentage": 0.6531208,
                        "actual_value": 2020300
                    }, {
                        "age": "02",
                        "gender_percentage": 1.37324605,
                        "total_percentage": 0.67521919,
                        "actual_value": 2088657
                    }, {
                        "age": "03",
                        "gender_percentage": 1.38154671,
                        "total_percentage": 0.679300589,
                        "actual_value": 2101282
                    }, {
                        "age": "04",
                        "gender_percentage": 1.37040641,
                        "total_percentage": 0.673822948,
                        "actual_value": 2084338
                    }, {
                        "age": "05",
                        "gender_percentage": 1.36531884,
                        "total_percentage": 0.671321414,
                        "actual_value": 2076600
                    }, {
                        "age": "06",
                        "gender_percentage": 1.36720909,
                        "total_percentage": 0.672250841,
                        "actual_value": 2079475
                    }, {
                        "age": "07",
                        "gender_percentage": 1.35651521,
                        "total_percentage": 0.666992707,
                        "actual_value": 2063210
                    }, {
                        "age": "08",
                        "gender_percentage": 1.35082671,
                        "total_percentage": 0.664195696,
                        "actual_value": 2054558
                    }, {
                        "age": "09",
                        "gender_percentage": 1.38543504,
                        "total_percentage": 0.681212462,
                        "actual_value": 2107196
                    }, {
                        "age": "10",
                        "gender_percentage": 1.40853027,
                        "total_percentage": 0.692568287,
                        "actual_value": 2142323
                    }, {
                        "age": "11",
                        "gender_percentage": 1.3839327,
                        "total_percentage": 0.680473769,
                        "actual_value": 2104911
                    }, {
                        "age": "12",
                        "gender_percentage": 1.38317068,
                        "total_percentage": 0.680099089,
                        "actual_value": 2103752
                    }, {
                        "age": "13",
                        "gender_percentage": 1.38399187,
                        "total_percentage": 0.680502864,
                        "actual_value": 2105001
                    }, {
                        "age": "14",
                        "gender_percentage": 1.39575613,
                        "total_percentage": 0.686287297,
                        "actual_value": 2122894
                    }, {
                        "age": "15",
                        "gender_percentage": 1.42695675,
                        "total_percentage": 0.701628508,
                        "actual_value": 2170349
                    }, {
                        "age": "16",
                        "gender_percentage": 1.45619282,
                        "total_percentage": 0.71600376,
                        "actual_value": 2214816
                    }, {
                        "age": "17",
                        "gender_percentage": 1.4808706,
                        "total_percentage": 0.728137719,
                        "actual_value": 2252350
                    }, {
                        "age": "18",
                        "gender_percentage": 1.51571168,
                        "total_percentage": 0.745268926,
                        "actual_value": 2305342
                    }, {
                        "age": "19",
                        "gender_percentage": 1.53488176,
                        "total_percentage": 0.754694775,
                        "actual_value": 2334499
                    }, {
                        "age": "20",
                        "gender_percentage": 1.53300598,
                        "total_percentage": 0.75377246,
                        "actual_value": 2331646
                    }, {
                        "age": "21",
                        "gender_percentage": 1.47341875,
                        "total_percentage": 0.724473673,
                        "actual_value": 2241016
                    }, {
                        "age": "22",
                        "gender_percentage": 1.43875322,
                        "total_percentage": 0.707428782,
                        "actual_value": 2188291
                    }, {
                        "age": "23",
                        "gender_percentage": 1.41430621,
                        "total_percentage": 0.695408294,
                        "actual_value": 2151108
                    }, {
                        "age": "24",
                        "gender_percentage": 1.42116371,
                        "total_percentage": 0.698780096,
                        "actual_value": 2161538
                    }, {
                        "age": "25",
                        "gender_percentage": 1.43168336,
                        "total_percentage": 0.703952561,
                        "actual_value": 2177538
                    }, {
                        "age": "26",
                        "gender_percentage": 1.38240143,
                        "total_percentage": 0.679720852,
                        "actual_value": 2102582
                    }, {
                        "age": "27",
                        "gender_percentage": 1.40402194,
                        "total_percentage": 0.690351562,
                        "actual_value": 2135466
                    }, {
                        "age": "28",
                        "gender_percentage": 1.40383127,
                        "total_percentage": 0.690257812,
                        "actual_value": 2135176
                    }, {
                        "age": "29",
                        "gender_percentage": 1.38889337,
                        "total_percentage": 0.68291291,
                        "actual_value": 2112456
                    }, {
                        "age": "30",
                        "gender_percentage": 1.42524665,
                        "total_percentage": 0.700787659,
                        "actual_value": 2167748
                    }, {
                        "age": "31",
                        "gender_percentage": 1.33241864,
                        "total_percentage": 0.655144527,
                        "actual_value": 2026560
                    }, {
                        "age": "32",
                        "gender_percentage": 1.30589861,
                        "total_percentage": 0.642104741,
                        "actual_value": 1986224
                    }, {
                        "age": "33",
                        "gender_percentage": 1.29107708,
                        "total_percentage": 0.634817059,
                        "actual_value": 1963681
                    }, {
                        "age": "34",
                        "gender_percentage": 1.25500981,
                        "total_percentage": 0.617082937,
                        "actual_value": 1908824
                    }, {
                        "age": "35",
                        "gender_percentage": 1.29832972,
                        "total_percentage": 0.638383151,
                        "actual_value": 1974712
                    }, {
                        "age": "36",
                        "gender_percentage": 1.25413471,
                        "total_percentage": 0.616652652,
                        "actual_value": 1907493
                    }, {
                        "age": "37",
                        "gender_percentage": 1.27191423,
                        "total_percentage": 0.625394766,
                        "actual_value": 1934535
                    }, {
                        "age": "38",
                        "gender_percentage": 1.33337593,
                        "total_percentage": 0.655615221,
                        "actual_value": 2028016
                    }, {
                        "age": "39",
                        "gender_percentage": 1.41269671,
                        "total_percentage": 0.694616907,
                        "actual_value": 2148660
                    }, {
                        "age": "40",
                        "gender_percentage": 1.43954285,
                        "total_percentage": 0.70781704,
                        "actual_value": 2189492
                    }, {
                        "age": "41",
                        "gender_percentage": 1.36349894,
                        "total_percentage": 0.670426577,
                        "actual_value": 2073832
                    }, {
                        "age": "42",
                        "gender_percentage": 1.33585528,
                        "total_percentage": 0.656834307,
                        "actual_value": 2031787
                    }, {
                        "age": "43",
                        "gender_percentage": 1.33529511,
                        "total_percentage": 0.656558873,
                        "actual_value": 2030935
                    }, {
                        "age": "44",
                        "gender_percentage": 1.36392696,
                        "total_percentage": 0.670637032,
                        "actual_value": 2074483
                    }, {
                        "age": "45",
                        "gender_percentage": 1.44761734,
                        "total_percentage": 0.711787231,
                        "actual_value": 2201773
                    }, {
                        "age": "46",
                        "gender_percentage": 1.47188025,
                        "total_percentage": 0.7237172,
                        "actual_value": 2238676
                    }, {
                        "age": "47",
                        "gender_percentage": 1.47134112,
                        "total_percentage": 0.723452111,
                        "actual_value": 2237856
                    }, {
                        "age": "48",
                        "gender_percentage": 1.46959025,
                        "total_percentage": 0.722591219,
                        "actual_value": 2235193
                    }, {
                        "age": "49",
                        "gender_percentage": 1.48745327,
                        "total_percentage": 0.731374389,
                        "actual_value": 2262362
                    }, {
                        "age": "50",
                        "gender_percentage": 1.50613222,
                        "total_percentage": 0.740558749,
                        "actual_value": 2290772
                    }, {
                        "age": "51",
                        "gender_percentage": 1.45287322,
                        "total_percentage": 0.714371524,
                        "actual_value": 2209767
                    }, {
                        "age": "52",
                        "gender_percentage": 1.44459031,
                        "total_percentage": 0.710298854,
                        "actual_value": 2197169
                    }, {
                        "age": "53",
                        "gender_percentage": 1.4273177,
                        "total_percentage": 0.701805988,
                        "actual_value": 2170898
                    }, {
                        "age": "54",
                        "gender_percentage": 1.37518233,
                        "total_percentage": 0.676171247,
                        "actual_value": 2091602
                    }, {
                        "age": "55",
                        "gender_percentage": 1.36438325,
                        "total_percentage": 0.670861388,
                        "actual_value": 2075177
                    }, {
                        "age": "56",
                        "gender_percentage": 1.30472698,
                        "total_percentage": 0.641528657,
                        "actual_value": 1984442
                    }, {
                        "age": "57",
                        "gender_percentage": 1.255783,
                        "total_percentage": 0.617463113,
                        "actual_value": 1910000
                    }, {
                        "age": "58",
                        "gender_percentage": 1.20889101,
                        "total_percentage": 0.594406523,
                        "actual_value": 1838679
                    }, {
                        "age": "59",
                        "gender_percentage": 1.16996766,
                        "total_percentage": 0.575268076,
                        "actual_value": 1779478
                    }, {
                        "age": "60",
                        "gender_percentage": 1.14547003,
                        "total_percentage": 0.563222696,
                        "actual_value": 1742218
                    }, {
                        "age": "61",
                        "gender_percentage": 1.11205634,
                        "total_percentage": 0.546793328,
                        "actual_value": 1691397
                    }, {
                        "age": "62",
                        "gender_percentage": 1.10393846,
                        "total_percentage": 0.542801801,
                        "actual_value": 1679050
                    }, {
                        "age": "63",
                        "gender_percentage": 1.153152,
                        "total_percentage": 0.56699989,
                        "actual_value": 1753902
                    }, {
                        "age": "64",
                        "gender_percentage": 0.849354423,
                        "total_percentage": 0.417623924,
                        "actual_value": 1291837
                    }, {
                        "age": "65",
                        "gender_percentage": 0.836759117,
                        "total_percentage": 0.411430866,
                        "actual_value": 1272680
                    }, {
                        "age": "66",
                        "gender_percentage": 0.815142555,
                        "total_percentage": 0.400802096,
                        "actual_value": 1239802
                    }, {
                        "age": "67",
                        "gender_percentage": 0.83509767,
                        "total_percentage": 0.41061394,
                        "actual_value": 1270153
                    }, {
                        "age": "68",
                        "gender_percentage": 0.726967521,
                        "total_percentage": 0.35744681,
                        "actual_value": 1105691
                    }, {
                        "age": "69",
                        "gender_percentage": 0.661934399,
                        "total_percentage": 0.325470303,
                        "actual_value": 1006778
                    }, {
                        "age": "70",
                        "gender_percentage": 0.627264268,
                        "total_percentage": 0.308423148,
                        "actual_value": 954046
                    }, {
                        "age": "71",
                        "gender_percentage": 0.593855838,
                        "total_percentage": 0.291996367,
                        "actual_value": 903233
                    }, {
                        "age": "72",
                        "gender_percentage": 0.567085963,
                        "total_percentage": 0.278833734,
                        "actual_value": 862517
                    }, {
                        "age": "73",
                        "gender_percentage": 0.522453726,
                        "total_percentage": 0.256888254,
                        "actual_value": 794633
                    }, {
                        "age": "74",
                        "gender_percentage": 0.498895631,
                        "total_percentage": 0.24530484,
                        "actual_value": 758802
                    }, {
                        "age": "75",
                        "gender_percentage": 0.477092345,
                        "total_percentage": 0.234584258,
                        "actual_value": 725640
                    }, {
                        "age": "76",
                        "gender_percentage": 0.429682921,
                        "total_percentage": 0.211273248,
                        "actual_value": 653532
                    }, {
                        "age": "77",
                        "gender_percentage": 0.414762772,
                        "total_percentage": 0.203937075,
                        "actual_value": 630839
                    }, {
                        "age": "78",
                        "gender_percentage": 0.396294215,
                        "total_percentage": 0.194856164,
                        "actual_value": 602749
                    }, {
                        "age": "79",
                        "gender_percentage": 0.377281923,
                        "total_percentage": 0.185507902,
                        "actual_value": 573832
                    }, {
                        "age": "80",
                        "gender_percentage": 0.36108561,
                        "total_percentage": 0.177544244,
                        "actual_value": 549198
                    }, {
                        "age": "81",
                        "gender_percentage": 0.326140653,
                        "total_percentage": 0.160361959,
                        "actual_value": 496048
                    }, {
                        "age": "82",
                        "gender_percentage": 0.304282797,
                        "total_percentage": 0.149614545,
                        "actual_value": 462803
                    }, {
                        "age": "83",
                        "gender_percentage": 0.278115172,
                        "total_percentage": 0.136748036,
                        "actual_value": 423003
                    }, {
                        "age": "84",
                        "gender_percentage": 0.247005285,
                        "total_percentage": 0.121451438,
                        "actual_value": 375686
                    }, {
                        "age": "85",
                        "gender_percentage": 0.222007971,
                        "total_percentage": 0.109160366,
                        "actual_value": 337666
                    }, {
                        "age": "86",
                        "gender_percentage": 0.19421769,
                        "total_percentage": 0.0954960045,
                        "actual_value": 295398
                    }, {
                        "age": "87",
                        "gender_percentage": 0.166748259,
                        "total_percentage": 0.081989403,
                        "actual_value": 253618
                    }, {
                        "age": "88",
                        "gender_percentage": 0.142155951,
                        "total_percentage": 0.069897471,
                        "actual_value": 216214
                    }, {
                        "age": "89",
                        "gender_percentage": 0.118642565,
                        "total_percentage": 0.0583360399,
                        "actual_value": 180451
                    }, {
                        "age": "90",
                        "gender_percentage": 0.0929476666,
                        "total_percentage": 0.0457019687,
                        "actual_value": 141370
                    }, {
                        "age": "91",
                        "gender_percentage": 0.0685644371,
                        "total_percentage": 0.0337128394,
                        "actual_value": 104284
                    }, {
                        "age": "92",
                        "gender_percentage": 0.0548619378,
                        "total_percentage": 0.0269753793,
                        "actual_value": 83443
                    }, {
                        "age": "93",
                        "gender_percentage": 0.0395591371,
                        "total_percentage": 0.0194510579,
                        "actual_value": 60168
                    }, {
                        "age": "94",
                        "gender_percentage": 0.0288139739,
                        "total_percentage": 0.0141677073,
                        "actual_value": 43825
                    }, {
                        "age": "95",
                        "gender_percentage": 0.0208611199,
                        "total_percentage": 0.0102573231,
                        "actual_value": 31729
                    }, {
                        "age": "96",
                        "gender_percentage": 0.0144730635,
                        "total_percentage": 0.0071163432,
                        "actual_value": 22013
                    }, {
                        "age": "97",
                        "gender_percentage": 0.00971160772,
                        "total_percentage": 0.00477515583,
                        "actual_value": 14771
                    }, {
                        "age": "98",
                        "gender_percentage": 0.00624735608,
                        "total_percentage": 0.00307179817,
                        "actual_value": 9502
                    }, {
                        "age": "99",
                        "gender_percentage": 0.00401456074,
                        "total_percentage": 0.00197394229,
                        "actual_value": 6106
                    }, { "age": "100", "gender_percentage": 0.00614873437, "total_percentage": 0.0030233063, "actual_value": 9352 }]
            }, {
                "date": 1246406400,
                "max_gender_percentage": 1.56460171,
                "max_total_percentage": 0.769150908,
                "max_actual_value": 2359536,
                "age_groups": [{
                        "age": "00",
                        "gender_percentage": 1.35564784,
                        "total_percentage": 0.666430163,
                        "actual_value": 2044418
                    }, {
                        "age": "01",
                        "gender_percentage": 1.37982437,
                        "total_percentage": 0.678315229,
                        "actual_value": 2080878
                    }, {
                        "age": "02",
                        "gender_percentage": 1.39100021,
                        "total_percentage": 0.68380922,
                        "actual_value": 2097732
                    }, {
                        "age": "03",
                        "gender_percentage": 1.36351483,
                        "total_percentage": 0.670297536,
                        "actual_value": 2056282
                    }, {
                        "age": "04",
                        "gender_percentage": 1.36782297,
                        "total_percentage": 0.672415399,
                        "actual_value": 2062779
                    }, {
                        "age": "05",
                        "gender_percentage": 1.37838611,
                        "total_percentage": 0.677608188,
                        "actual_value": 2078709
                    }, {
                        "age": "06",
                        "gender_percentage": 1.36038236,
                        "total_percentage": 0.668757628,
                        "actual_value": 2051558
                    }, {
                        "age": "07",
                        "gender_percentage": 1.3583692,
                        "total_percentage": 0.667767966,
                        "actual_value": 2048522
                    }, {
                        "age": "08",
                        "gender_percentage": 1.38444218,
                        "total_percentage": 0.680585323,
                        "actual_value": 2087842
                    }, {
                        "age": "09",
                        "gender_percentage": 1.3534636,
                        "total_percentage": 0.665356399,
                        "actual_value": 2041124
                    }, {
                        "age": "10",
                        "gender_percentage": 1.40146786,
                        "total_percentage": 0.688955069,
                        "actual_value": 2113518
                    }, {
                        "age": "11",
                        "gender_percentage": 1.37955051,
                        "total_percentage": 0.678180601,
                        "actual_value": 2080465
                    }, {
                        "age": "12",
                        "gender_percentage": 1.39279057,
                        "total_percentage": 0.684689354,
                        "actual_value": 2100432
                    }, {
                        "age": "13",
                        "gender_percentage": 1.41316821,
                        "total_percentage": 0.694706907,
                        "actual_value": 2131163
                    }, {
                        "age": "14",
                        "gender_percentage": 1.42317501,
                        "total_percentage": 0.699626203,
                        "actual_value": 2146254
                    }, {
                        "age": "15",
                        "gender_percentage": 1.44899403,
                        "total_percentage": 0.712318711,
                        "actual_value": 2185191
                    }, {
                        "age": "16",
                        "gender_percentage": 1.48786279,
                        "total_percentage": 0.731426416,
                        "actual_value": 2243808
                    }, {
                        "age": "17",
                        "gender_percentage": 1.50760651,
                        "total_percentage": 0.741132336,
                        "actual_value": 2273583
                    }, {
                        "age": "18",
                        "gender_percentage": 1.54244431,
                        "total_percentage": 0.758258437,
                        "actual_value": 2326121
                    }, {
                        "age": "19",
                        "gender_percentage": 1.56460171,
                        "total_percentage": 0.769150908,
                        "actual_value": 2359536
                    }, {
                        "age": "20",
                        "gender_percentage": 1.48669177,
                        "total_percentage": 0.730850743,
                        "actual_value": 2242042
                    }, {
                        "age": "21",
                        "gender_percentage": 1.45949152,
                        "total_percentage": 0.717479229,
                        "actual_value": 2201022
                    }, {
                        "age": "22",
                        "gender_percentage": 1.43016207,
                        "total_percentage": 0.703061007,
                        "actual_value": 2156791
                    }, {
                        "age": "23",
                        "gender_percentage": 1.43336549,
                        "total_percentage": 0.704635794,
                        "actual_value": 2161622
                    }, {
                        "age": "24",
                        "gender_percentage": 1.43443308,
                        "total_percentage": 0.705160615,
                        "actual_value": 2163232
                    }, {
                        "age": "25",
                        "gender_percentage": 1.41641208,
                        "total_percentage": 0.696301579,
                        "actual_value": 2136055
                    }, {
                        "age": "26",
                        "gender_percentage": 1.40804777,
                        "total_percentage": 0.692189724,
                        "actual_value": 2123441
                    }, {
                        "age": "27",
                        "gender_percentage": 1.41356673,
                        "total_percentage": 0.694902818,
                        "actual_value": 2131764
                    }, {
                        "age": "28",
                        "gender_percentage": 1.40995948,
                        "total_percentage": 0.693129511,
                        "actual_value": 2126324
                    }, {
                        "age": "29",
                        "gender_percentage": 1.38837501,
                        "total_percentage": 0.682518683,
                        "actual_value": 2093773
                    }, {
                        "age": "30",
                        "gender_percentage": 1.37331673,
                        "total_percentage": 0.675116106,
                        "actual_value": 2071064
                    }, {
                        "age": "31",
                        "gender_percentage": 1.29311181,
                        "total_percentage": 0.63568774,
                        "actual_value": 1950109
                    }, {
                        "age": "32",
                        "gender_percentage": 1.30036941,
                        "total_percentage": 0.639255542,
                        "actual_value": 1961054
                    }, {
                        "age": "33",
                        "gender_percentage": 1.26333477,
                        "total_percentage": 0.621049485,
                        "actual_value": 1905203
                    }, {
                        "age": "34",
                        "gender_percentage": 1.2977641,
                        "total_percentage": 0.637974784,
                        "actual_value": 1957125
                    }, {
                        "age": "35",
                        "gender_percentage": 1.26895916,
                        "total_percentage": 0.623814409,
                        "actual_value": 1913685
                    }, {
                        "age": "36",
                        "gender_percentage": 1.28843698,
                        "total_percentage": 0.633389613,
                        "actual_value": 1943059
                    }, {
                        "age": "37",
                        "gender_percentage": 1.34260804,
                        "total_percentage": 0.660019855,
                        "actual_value": 2024753
                    }, {
                        "age": "38",
                        "gender_percentage": 1.41649829,
                        "total_percentage": 0.696343956,
                        "actual_value": 2136185
                    }, {
                        "age": "39",
                        "gender_percentage": 1.45745117,
                        "total_percentage": 0.716476202,
                        "actual_value": 2197945
                    }, {
                        "age": "40",
                        "gender_percentage": 1.36854641,
                        "total_percentage": 0.672771038,
                        "actual_value": 2063870
                    }, {
                        "age": "41",
                        "gender_percentage": 1.34784186,
                        "total_percentage": 0.662592779,
                        "actual_value": 2032646
                    }, {
                        "age": "42",
                        "gender_percentage": 1.34558733,
                        "total_percentage": 0.661484463,
                        "actual_value": 2029246
                    }, {
                        "age": "43",
                        "gender_percentage": 1.38698383,
                        "total_percentage": 0.681834787,
                        "actual_value": 2091675
                    }, {
                        "age": "44",
                        "gender_percentage": 1.46752494,
                        "total_percentage": 0.721428422,
                        "actual_value": 2213137
                    }, {
                        "age": "45",
                        "gender_percentage": 1.47676454,
                        "total_percentage": 0.725970564,
                        "actual_value": 2227071
                    }, {
                        "age": "46",
                        "gender_percentage": 1.48061448,
                        "total_percentage": 0.727863178,
                        "actual_value": 2232877
                    }, {
                        "age": "47",
                        "gender_percentage": 1.49304623,
                        "total_percentage": 0.733974566,
                        "actual_value": 2251625
                    }, {
                        "age": "48",
                        "gender_percentage": 1.49514891,
                        "total_percentage": 0.735008235,
                        "actual_value": 2254796
                    }, {
                        "age": "49",
                        "gender_percentage": 1.53792265,
                        "total_percentage": 0.75603561,
                        "actual_value": 2319302
                    }, {
                        "age": "50",
                        "gender_percentage": 1.45240367,
                        "total_percentage": 0.713994877,
                        "actual_value": 2190333
                    }, {
                        "age": "51",
                        "gender_percentage": 1.47229327,
                        "total_percentage": 0.723772511,
                        "actual_value": 2220328
                    }, {
                        "age": "52",
                        "gender_percentage": 1.43647674,
                        "total_percentage": 0.706165271,
                        "actual_value": 2166314
                    }, {
                        "age": "53",
                        "gender_percentage": 1.38772915,
                        "total_percentage": 0.682201183,
                        "actual_value": 2092799
                    }, {
                        "age": "54",
                        "gender_percentage": 1.40164756,
                        "total_percentage": 0.689043409,
                        "actual_value": 2113789
                    }, {
                        "age": "55",
                        "gender_percentage": 1.30947307,
                        "total_percentage": 0.643730859,
                        "actual_value": 1974783
                    }, {
                        "age": "56",
                        "gender_percentage": 1.27826507,
                        "total_percentage": 0.628389149,
                        "actual_value": 1927719
                    }, {
                        "age": "57",
                        "gender_percentage": 1.22756532,
                        "total_percentage": 0.603465389,
                        "actual_value": 1851260
                    }, {
                        "age": "58",
                        "gender_percentage": 1.19166391,
                        "total_percentage": 0.585816424,
                        "actual_value": 1797118
                    }, {
                        "age": "59",
                        "gender_percentage": 1.18263783,
                        "total_percentage": 0.581379245,
                        "actual_value": 1783506
                    }, {
                        "age": "60",
                        "gender_percentage": 1.11250336,
                        "total_percentage": 0.546901469,
                        "actual_value": 1677738
                    }, {
                        "age": "61",
                        "gender_percentage": 1.12360759,
                        "total_percentage": 0.552360255,
                        "actual_value": 1694484
                    }, {
                        "age": "62",
                        "gender_percentage": 1.17197257,
                        "total_percentage": 0.576136255,
                        "actual_value": 1767422
                    }, {
                        "age": "63",
                        "gender_percentage": 0.870911858,
                        "total_percentage": 0.428136211,
                        "actual_value": 1313400
                    }, {
                        "age": "64",
                        "gender_percentage": 0.854486278,
                        "total_percentage": 0.420061472,
                        "actual_value": 1288629
                    }, {
                        "age": "65",
                        "gender_percentage": 0.833738629,
                        "total_percentage": 0.409862025,
                        "actual_value": 1257340
                    }, {
                        "age": "66",
                        "gender_percentage": 0.852632921,
                        "total_percentage": 0.41915037,
                        "actual_value": 1285834
                    }, {
                        "age": "67",
                        "gender_percentage": 0.746433926,
                        "total_percentage": 0.36694344,
                        "actual_value": 1125678
                    }, {
                        "age": "68",
                        "gender_percentage": 0.682681109,
                        "total_percentage": 0.335602852,
                        "actual_value": 1029534
                    }, {
                        "age": "69",
                        "gender_percentage": 0.653888766,
                        "total_percentage": 0.32144867,
                        "actual_value": 986113
                    }, {
                        "age": "70",
                        "gender_percentage": 0.606535006,
                        "total_percentage": 0.298169782,
                        "actual_value": 914700
                    }, {
                        "age": "71",
                        "gender_percentage": 0.591514528,
                        "total_percentage": 0.290785785,
                        "actual_value": 892048
                    }, {
                        "age": "72",
                        "gender_percentage": 0.541546176,
                        "total_percentage": 0.266221576,
                        "actual_value": 816692
                    }, {
                        "age": "73",
                        "gender_percentage": 0.521523956,
                        "total_percentage": 0.256378746,
                        "actual_value": 786497
                    }, {
                        "age": "74",
                        "gender_percentage": 0.506278688,
                        "total_percentage": 0.248884244,
                        "actual_value": 763506
                    }, {
                        "age": "75",
                        "gender_percentage": 0.4445702,
                        "total_percentage": 0.218548639,
                        "actual_value": 670445
                    }, {
                        "age": "76",
                        "gender_percentage": 0.439586362,
                        "total_percentage": 0.216098607,
                        "actual_value": 662929
                    }, {
                        "age": "77",
                        "gender_percentage": 0.418673602,
                        "total_percentage": 0.205817992,
                        "actual_value": 631391
                    }, {
                        "age": "78",
                        "gender_percentage": 0.402244706,
                        "total_percentage": 0.197741623,
                        "actual_value": 606615
                    }, {
                        "age": "79",
                        "gender_percentage": 0.389837494,
                        "total_percentage": 0.191642295,
                        "actual_value": 587904
                    }, {
                        "age": "80",
                        "gender_percentage": 0.348905831,
                        "total_percentage": 0.17152048,
                        "actual_value": 526176
                    }, {
                        "age": "81",
                        "gender_percentage": 0.332585682,
                        "total_percentage": 0.163497572,
                        "actual_value": 501564
                    }, {
                        "age": "82",
                        "gender_percentage": 0.302693261,
                        "total_percentage": 0.148802596,
                        "actual_value": 456484
                    }, {
                        "age": "83",
                        "gender_percentage": 0.27380079,
                        "total_percentage": 0.134599192,
                        "actual_value": 412912
                    }, {
                        "age": "84",
                        "gender_percentage": 0.249135563,
                        "total_percentage": 0.122473882,
                        "actual_value": 375715
                    }, {
                        "age": "85",
                        "gender_percentage": 0.217549591,
                        "total_percentage": 0.106946365,
                        "actual_value": 328081
                    }, {
                        "age": "86",
                        "gender_percentage": 0.190131849,
                        "total_percentage": 0.0934679307,
                        "actual_value": 286733
                    }, {
                        "age": "87",
                        "gender_percentage": 0.16616619,
                        "total_percentage": 0.0816865244,
                        "actual_value": 250591
                    }, {
                        "age": "88",
                        "gender_percentage": 0.138727228,
                        "total_percentage": 0.0681976586,
                        "actual_value": 209211
                    }, {
                        "age": "89",
                        "gender_percentage": 0.112570696,
                        "total_percentage": 0.0553392293,
                        "actual_value": 169765
                    }, {
                        "age": "90",
                        "gender_percentage": 0.08365369,
                        "total_percentage": 0.0411237641,
                        "actual_value": 126156
                    }, {
                        "age": "91",
                        "gender_percentage": 0.0686524421,
                        "total_percentage": 0.0337492206,
                        "actual_value": 103533
                    }, {
                        "age": "92",
                        "gender_percentage": 0.0506188507,
                        "total_percentage": 0.0248839911,
                        "actual_value": 76337
                    }, {
                        "age": "93",
                        "gender_percentage": 0.0374862107,
                        "total_percentage": 0.0184280465,
                        "actual_value": 56532
                    }, {
                        "age": "94",
                        "gender_percentage": 0.0278938467,
                        "total_percentage": 0.013712485,
                        "actual_value": 42066
                    }, {
                        "age": "95",
                        "gender_percentage": 0.0195441268,
                        "total_percentage": 0.00960780164,
                        "actual_value": 29474
                    }, {
                        "age": "96",
                        "gender_percentage": 0.0136485296,
                        "total_percentage": 0.00670955355,
                        "actual_value": 20583
                    }, {
                        "age": "97",
                        "gender_percentage": 0.00901546949,
                        "total_percentage": 0.00443196278,
                        "actual_value": 13596
                    }, {
                        "age": "98",
                        "gender_percentage": 0.00577491349,
                        "total_percentage": 0.00283892056,
                        "actual_value": 8709
                    }, {
                        "age": "99",
                        "gender_percentage": 0.00374119438,
                        "total_percentage": 0.00183915372,
                        "actual_value": 5642
                    }, { "age": "100", "gender_percentage": 0.00552890443, "total_percentage": 0.00271798365, "actual_value": 8338 }]
            }, {
                "date": 1214870400,
                "max_gender_percentage": 1.57720969,
                "max_total_percentage": 0.775342579,
                "max_actual_value": 2357770,
                "age_groups": [{
                        "age": "00",
                        "gender_percentage": 1.4113631,
                        "total_percentage": 0.693813833,
                        "actual_value": 2109846
                    }, {
                        "age": "01",
                        "gender_percentage": 1.40153501,
                        "total_percentage": 0.688982431,
                        "actual_value": 2095154
                    }, {
                        "age": "02",
                        "gender_percentage": 1.36883315,
                        "total_percentage": 0.672906479,
                        "actual_value": 2046268
                    }, {
                        "age": "03",
                        "gender_percentage": 1.36459808,
                        "total_percentage": 0.670824557,
                        "actual_value": 2039937
                    }, {
                        "age": "04",
                        "gender_percentage": 1.3818581,
                        "total_percentage": 0.679309434,
                        "actual_value": 2065739
                    }, {
                        "age": "05",
                        "gender_percentage": 1.37545299,
                        "total_percentage": 0.676160736,
                        "actual_value": 2056164
                    }, {
                        "age": "06",
                        "gender_percentage": 1.36096038,
                        "total_percentage": 0.669036294,
                        "actual_value": 2034499
                    }, {
                        "age": "07",
                        "gender_percentage": 1.3897001,
                        "total_percentage": 0.683164493,
                        "actual_value": 2077462
                    }, {
                        "age": "08",
                        "gender_percentage": 1.34518607,
                        "total_percentage": 0.661281783,
                        "actual_value": 2010918
                    }, {
                        "age": "09",
                        "gender_percentage": 1.33926795,
                        "total_percentage": 0.658372485,
                        "actual_value": 2002071
                    }, {
                        "age": "10",
                        "gender_percentage": 1.40092293,
                        "total_percentage": 0.688681537,
                        "actual_value": 2094239
                    }, {
                        "age": "11",
                        "gender_percentage": 1.38638015,
                        "total_percentage": 0.681532431,
                        "actual_value": 2072499
                    }, {
                        "age": "12",
                        "gender_percentage": 1.42362278,
                        "total_percentage": 0.699840588,
                        "actual_value": 2128173
                    }, {
                        "age": "13",
                        "gender_percentage": 1.43926196,
                        "total_percentage": 0.707528672,
                        "actual_value": 2151552
                    }, {
                        "age": "14",
                        "gender_percentage": 1.43937301,
                        "total_percentage": 0.707583261,
                        "actual_value": 2151718
                    }, {
                        "age": "15",
                        "gender_percentage": 1.4835539,
                        "total_percentage": 0.729302205,
                        "actual_value": 2217764
                    }, {
                        "age": "16",
                        "gender_percentage": 1.51404692,
                        "total_percentage": 0.744292309,
                        "actual_value": 2263348
                    }, {
                        "age": "17",
                        "gender_percentage": 1.53823851,
                        "total_percentage": 0.756184685,
                        "actual_value": 2299512
                    }, {
                        "age": "18",
                        "gender_percentage": 1.57720969,
                        "total_percentage": 0.775342579,
                        "actual_value": 2357770
                    }, {
                        "age": "19",
                        "gender_percentage": 1.516716,
                        "total_percentage": 0.745604403,
                        "actual_value": 2267338
                    }, {
                        "age": "20",
                        "gender_percentage": 1.4737004,
                        "total_percentage": 0.724458308,
                        "actual_value": 2203034
                    }, {
                        "age": "21",
                        "gender_percentage": 1.45598683,
                        "total_percentage": 0.715750473,
                        "actual_value": 2176554
                    }, {
                        "age": "22",
                        "gender_percentage": 1.45179056,
                        "total_percentage": 0.713687624,
                        "actual_value": 2170281
                    }, {
                        "age": "23",
                        "gender_percentage": 1.45095706,
                        "total_percentage": 0.713277882,
                        "actual_value": 2169035
                    }, {
                        "age": "24",
                        "gender_percentage": 1.4195884,
                        "total_percentage": 0.69785732,
                        "actual_value": 2122142
                    }, {
                        "age": "25",
                        "gender_percentage": 1.44576206,
                        "total_percentage": 0.710724066,
                        "actual_value": 2161269
                    }, {
                        "age": "26",
                        "gender_percentage": 1.41729125,
                        "total_percentage": 0.696728063,
                        "actual_value": 2118708
                    }, {
                        "age": "27",
                        "gender_percentage": 1.420941,
                        "total_percentage": 0.698522246,
                        "actual_value": 2124164
                    }, {
                        "age": "28",
                        "gender_percentage": 1.41098782,
                        "total_percentage": 0.69362935,
                        "actual_value": 2109285
                    }, {
                        "age": "29",
                        "gender_percentage": 1.33501281,
                        "total_percentage": 0.656280697,
                        "actual_value": 1995710
                    }, {
                        "age": "30",
                        "gender_percentage": 1.34143064,
                        "total_percentage": 0.659435643,
                        "actual_value": 2005304
                    }, {
                        "age": "31",
                        "gender_percentage": 1.28339797,
                        "total_percentage": 0.63090729,
                        "actual_value": 1918551
                    }, {
                        "age": "32",
                        "gender_percentage": 1.27553925,
                        "total_percentage": 0.62704401,
                        "actual_value": 1906803
                    }, {
                        "age": "33",
                        "gender_percentage": 1.3075327,
                        "total_percentage": 0.642771715,
                        "actual_value": 1954630
                    }, {
                        "age": "34",
                        "gender_percentage": 1.26673264,
                        "total_percentage": 0.622714757,
                        "actual_value": 1893638
                    }, {
                        "age": "35",
                        "gender_percentage": 1.30540748,
                        "total_percentage": 0.641726972,
                        "actual_value": 1951453
                    }, {
                        "age": "36",
                        "gender_percentage": 1.36212099,
                        "total_percentage": 0.669606841,
                        "actual_value": 2036234
                    }, {
                        "age": "37",
                        "gender_percentage": 1.42603097,
                        "total_percentage": 0.701024433,
                        "actual_value": 2131773
                    }, {
                        "age": "38",
                        "gender_percentage": 1.46466969,
                        "total_percentage": 0.72001889,
                        "actual_value": 2189534
                    }, {
                        "age": "39",
                        "gender_percentage": 1.38514996,
                        "total_percentage": 0.680927684,
                        "actual_value": 2070660
                    }, {
                        "age": "40",
                        "gender_percentage": 1.35250228,
                        "total_percentage": 0.664878369,
                        "actual_value": 2021855
                    }, {
                        "age": "41",
                        "gender_percentage": 1.35873882,
                        "total_percentage": 0.667944197,
                        "actual_value": 2031178
                    }, {
                        "age": "42",
                        "gender_percentage": 1.39780299,
                        "total_percentage": 0.687147801,
                        "actual_value": 2089575
                    }, {
                        "age": "43",
                        "gender_percentage": 1.49580556,
                        "total_percentage": 0.735325015,
                        "actual_value": 2236079
                    }, {
                        "age": "44",
                        "gender_percentage": 1.4973662,
                        "total_percentage": 0.736092212,
                        "actual_value": 2238412
                    }, {
                        "age": "45",
                        "gender_percentage": 1.48401012,
                        "total_percentage": 0.729526478,
                        "actual_value": 2218446
                    }, {
                        "age": "46",
                        "gender_percentage": 1.50244079,
                        "total_percentage": 0.738586835,
                        "actual_value": 2245998
                    }, {
                        "age": "47",
                        "gender_percentage": 1.51927938,
                        "total_percentage": 0.74686454,
                        "actual_value": 2271170
                    }, {
                        "age": "48",
                        "gender_percentage": 1.54660563,
                        "total_percentage": 0.760297888,
                        "actual_value": 2312020
                    }, {
                        "age": "49",
                        "gender_percentage": 1.48261203,
                        "total_percentage": 0.72883919,
                        "actual_value": 2216356
                    }, {
                        "age": "50",
                        "gender_percentage": 1.46981385,
                        "total_percentage": 0.722547714,
                        "actual_value": 2197224
                    }, {
                        "age": "51",
                        "gender_percentage": 1.46473993,
                        "total_percentage": 0.720053419,
                        "actual_value": 2189639
                    }, {
                        "age": "52",
                        "gender_percentage": 1.3945419,
                        "total_percentage": 0.685544678,
                        "actual_value": 2084700
                    }, {
                        "age": "53",
                        "gender_percentage": 1.4140208,
                        "total_percentage": 0.695120337,
                        "actual_value": 2113819
                    }, {
                        "age": "54",
                        "gender_percentage": 1.34693937,
                        "total_percentage": 0.662143688,
                        "actual_value": 2013539
                    }, {
                        "age": "55",
                        "gender_percentage": 1.28008069,
                        "total_percentage": 0.629276544,
                        "actual_value": 1913592
                    }, {
                        "age": "56",
                        "gender_percentage": 1.25102456,
                        "total_percentage": 0.614992801,
                        "actual_value": 1870156
                    }, {
                        "age": "57",
                        "gender_percentage": 1.20882975,
                        "total_percentage": 0.5942502,
                        "actual_value": 1807079
                    }, {
                        "age": "58",
                        "gender_percentage": 1.20690521,
                        "total_percentage": 0.59330411,
                        "actual_value": 1804202
                    }, {
                        "age": "59",
                        "gender_percentage": 1.14877354,
                        "total_percentage": 0.564727088,
                        "actual_value": 1717301
                    }, {
                        "age": "60",
                        "gender_percentage": 1.11999502,
                        "total_percentage": 0.550579817,
                        "actual_value": 1674280
                    }, {
                        "age": "61",
                        "gender_percentage": 1.19285811,
                        "total_percentage": 0.586398679,
                        "actual_value": 1783203
                    }, {
                        "age": "62",
                        "gender_percentage": 0.883950387,
                        "total_percentage": 0.434542328,
                        "actual_value": 1321417
                    }, {
                        "age": "63",
                        "gender_percentage": 0.878482461,
                        "total_percentage": 0.431854343,
                        "actual_value": 1313243
                    }, {
                        "age": "64",
                        "gender_percentage": 0.850108647,
                        "total_percentage": 0.417906023,
                        "actual_value": 1270827
                    }, {
                        "age": "65",
                        "gender_percentage": 0.872003095,
                        "total_percentage": 0.428669144,
                        "actual_value": 1303557
                    }, {
                        "age": "66",
                        "gender_percentage": 0.761678623,
                        "total_percentage": 0.374434592,
                        "actual_value": 1138633
                    }, {
                        "age": "67",
                        "gender_percentage": 0.701584951,
                        "total_percentage": 0.344893065,
                        "actual_value": 1048799
                    }, {
                        "age": "68",
                        "gender_percentage": 0.675376501,
                        "total_percentage": 0.332009218,
                        "actual_value": 1009620
                    }, {
                        "age": "69",
                        "gender_percentage": 0.632704736,
                        "total_percentage": 0.31103215,
                        "actual_value": 945830
                    }, {
                        "age": "70",
                        "gender_percentage": 0.603233859,
                        "total_percentage": 0.296544523,
                        "actual_value": 901774
                    }, {
                        "age": "71",
                        "gender_percentage": 0.565828669,
                        "total_percentage": 0.278156456,
                        "actual_value": 845857
                    }, {
                        "age": "72",
                        "gender_percentage": 0.540268422,
                        "total_percentage": 0.265591261,
                        "actual_value": 807647
                    }, {
                        "age": "73",
                        "gender_percentage": 0.530468433,
                        "total_percentage": 0.260773672,
                        "actual_value": 792997
                    }, {
                        "age": "74",
                        "gender_percentage": 0.472754854,
                        "total_percentage": 0.232402178,
                        "actual_value": 706721
                    }, {
                        "age": "75",
                        "gender_percentage": 0.454670696,
                        "total_percentage": 0.223512163,
                        "actual_value": 679687
                    }, {
                        "age": "76",
                        "gender_percentage": 0.444366993,
                        "total_percentage": 0.218446952,
                        "actual_value": 664284
                    }, {
                        "age": "77",
                        "gender_percentage": 0.42516704,
                        "total_percentage": 0.209008422,
                        "actual_value": 635582
                    }, {
                        "age": "78",
                        "gender_percentage": 0.415982476,
                        "total_percentage": 0.20449337,
                        "actual_value": 621852
                    }, {
                        "age": "79",
                        "gender_percentage": 0.378514406,
                        "total_percentage": 0.186074393,
                        "actual_value": 565841
                    }, {
                        "age": "80",
                        "gender_percentage": 0.355675413,
                        "total_percentage": 0.174846942,
                        "actual_value": 531699
                    }, {
                        "age": "81",
                        "gender_percentage": 0.331872475,
                        "total_percentage": 0.163145625,
                        "actual_value": 496116
                    }, {
                        "age": "82",
                        "gender_percentage": 0.29747819,
                        "total_percentage": 0.146237693,
                        "actual_value": 444700
                    }, {
                        "age": "83",
                        "gender_percentage": 0.277614647,
                        "total_percentage": 0.136472948,
                        "actual_value": 415006
                    }, {
                        "age": "84",
                        "gender_percentage": 0.244091324,
                        "total_percentage": 0.119993173,
                        "actual_value": 364892
                    }, {
                        "age": "85",
                        "gender_percentage": 0.213220352,
                        "total_percentage": 0.104817272,
                        "actual_value": 318743
                    }, {
                        "age": "86",
                        "gender_percentage": 0.188856842,
                        "total_percentage": 0.0928403821,
                        "actual_value": 282322
                    }, {
                        "age": "87",
                        "gender_percentage": 0.162875162,
                        "total_percentage": 0.0800680142,
                        "actual_value": 243482
                    }, {
                        "age": "88",
                        "gender_percentage": 0.131950006,
                        "total_percentage": 0.0648654765,
                        "actual_value": 197252
                    }, {
                        "age": "89",
                        "gender_percentage": 0.103683892,
                        "total_percentage": 0.0509701005,
                        "actual_value": 154997
                    }, {
                        "age": "90",
                        "gender_percentage": 0.0829547399,
                        "total_percentage": 0.0407798292,
                        "actual_value": 124009
                    }, {
                        "age": "91",
                        "gender_percentage": 0.0629145968,
                        "total_percentage": 0.0309282691,
                        "actual_value": 94051
                    }, {
                        "age": "92",
                        "gender_percentage": 0.0491491231,
                        "total_percentage": 0.0241612818,
                        "actual_value": 73473
                    }, {
                        "age": "93",
                        "gender_percentage": 0.0365121532,
                        "total_percentage": 0.0179490572,
                        "actual_value": 54582
                    }, {
                        "age": "94",
                        "gender_percentage": 0.0263475904,
                        "total_percentage": 0.0129522465,
                        "actual_value": 39387
                    }, {
                        "age": "95",
                        "gender_percentage": 0.0183691277,
                        "total_percentage": 0.00903010354,
                        "actual_value": 27460
                    }, {
                        "age": "96",
                        "gender_percentage": 0.0127393178,
                        "total_percentage": 0.00626253794,
                        "actual_value": 19044
                    }, {
                        "age": "97",
                        "gender_percentage": 0.00846745879,
                        "total_percentage": 0.00416252916,
                        "actual_value": 12658
                    }, {
                        "age": "98",
                        "gender_percentage": 0.00541039712,
                        "total_percentage": 0.0026597042,
                        "actual_value": 8088
                    }, {
                        "age": "99",
                        "gender_percentage": 0.0034885288,
                        "total_percentage": 0.00171493044,
                        "actual_value": 5215
                    }, { "age": "100", "gender_percentage": 0.00538564629, "total_percentage": 0.00264753691, "actual_value": 8051 }]
            }, {
                "date": 1183248000,
                "max_gender_percentage": 1.57361382,
                "max_total_percentage": 0.773481945,
                "max_actual_value": 2329969,
                "age_groups": [{
                        "age": "00",
                        "gender_percentage": 1.43235612,
                        "total_percentage": 0.704049232,
                        "actual_value": 2120816
                    }, {
                        "age": "01",
                        "gender_percentage": 1.38055652,
                        "total_percentage": 0.678588059,
                        "actual_value": 2044119
                    }, {
                        "age": "02",
                        "gender_percentage": 1.37181103,
                        "total_percentage": 0.674289367,
                        "actual_value": 2031170
                    }, {
                        "age": "03",
                        "gender_percentage": 1.38124879,
                        "total_percentage": 0.678928329,
                        "actual_value": 2045144
                    }, {
                        "age": "04",
                        "gender_percentage": 1.38077602,
                        "total_percentage": 0.678695949,
                        "actual_value": 2044444
                    }, {
                        "age": "05",
                        "gender_percentage": 1.37674941,
                        "total_percentage": 0.676716739,
                        "actual_value": 2038482
                    }, {
                        "age": "06",
                        "gender_percentage": 1.39426808,
                        "total_percentage": 0.685327732,
                        "actual_value": 2064421
                    }, {
                        "age": "07",
                        "gender_percentage": 1.35160772,
                        "total_percentage": 0.664358789,
                        "actual_value": 2001256
                    }, {
                        "age": "08",
                        "gender_percentage": 1.33402286,
                        "total_percentage": 0.655715263,
                        "actual_value": 1975219
                    }, {
                        "age": "09",
                        "gender_percentage": 1.34707863,
                        "total_percentage": 0.662132592,
                        "actual_value": 1994550
                    }, {
                        "age": "10",
                        "gender_percentage": 1.40666198,
                        "total_percentage": 0.691419731,
                        "actual_value": 2082772
                    }, {
                        "age": "11",
                        "gender_percentage": 1.4192031,
                        "total_percentage": 0.697584099,
                        "actual_value": 2101341
                    }, {
                        "age": "12",
                        "gender_percentage": 1.45004499,
                        "total_percentage": 0.712743882,
                        "actual_value": 2147007
                    }, {
                        "age": "13",
                        "gender_percentage": 1.45518598,
                        "total_percentage": 0.715270845,
                        "actual_value": 2154619
                    }, {
                        "age": "14",
                        "gender_percentage": 1.47585395,
                        "total_percentage": 0.725429819,
                        "actual_value": 2185221
                    }, {
                        "age": "15",
                        "gender_percentage": 1.5106198,
                        "total_percentage": 0.742518354,
                        "actual_value": 2236697
                    }, {
                        "age": "16",
                        "gender_percentage": 1.54434421,
                        "total_percentage": 0.75909499,
                        "actual_value": 2286631
                    }, {
                        "age": "17",
                        "gender_percentage": 1.57361382,
                        "total_percentage": 0.773481945,
                        "actual_value": 2329969
                    }, {
                        "age": "18",
                        "gender_percentage": 1.52601913,
                        "total_percentage": 0.750087623,
                        "actual_value": 2259498
                    }, {
                        "age": "19",
                        "gender_percentage": 1.50183851,
                        "total_percentage": 0.738202068,
                        "actual_value": 2223695
                    }, {
                        "age": "20",
                        "gender_percentage": 1.4690826,
                        "total_percentage": 0.722101479,
                        "actual_value": 2175195
                    }, {
                        "age": "21",
                        "gender_percentage": 1.47555003,
                        "total_percentage": 0.725280432,
                        "actual_value": 2184771
                    }, {
                        "age": "22",
                        "gender_percentage": 1.46920349,
                        "total_percentage": 0.722160901,
                        "actual_value": 2175374
                    }, {
                        "age": "23",
                        "gender_percentage": 1.43540343,
                        "total_percentage": 0.705547085,
                        "actual_value": 2125328
                    }, {
                        "age": "24",
                        "gender_percentage": 1.45015373,
                        "total_percentage": 0.71279733,
                        "actual_value": 2147168
                    }, {
                        "age": "25",
                        "gender_percentage": 1.45245745,
                        "total_percentage": 0.713929683,
                        "actual_value": 2150579
                    }, {
                        "age": "26",
                        "gender_percentage": 1.42585897,
                        "total_percentage": 0.700855672,
                        "actual_value": 2111196
                    }, {
                        "age": "27",
                        "gender_percentage": 1.42234227,
                        "total_percentage": 0.699127099,
                        "actual_value": 2105989
                    }, {
                        "age": "28",
                        "gender_percentage": 1.35568296,
                        "total_percentage": 0.666361902,
                        "actual_value": 2007290
                    }, {
                        "age": "29",
                        "gender_percentage": 1.30914592,
                        "total_percentage": 0.643487446,
                        "actual_value": 1938385
                    }, {
                        "age": "30",
                        "gender_percentage": 1.32723867,
                        "total_percentage": 0.652380615,
                        "actual_value": 1965174
                    }, {
                        "age": "31",
                        "gender_percentage": 1.26235764,
                        "total_percentage": 0.620489497,
                        "actual_value": 1869108
                    }, {
                        "age": "32",
                        "gender_percentage": 1.32012084,
                        "total_percentage": 0.648881973,
                        "actual_value": 1954635
                    }, {
                        "age": "33",
                        "gender_percentage": 1.27671081,
                        "total_percentage": 0.627544543,
                        "actual_value": 1890360
                    }, {
                        "age": "34",
                        "gender_percentage": 1.30493763,
                        "total_percentage": 0.641418935,
                        "actual_value": 1932154
                    }, {
                        "age": "35",
                        "gender_percentage": 1.37969609,
                        "total_percentage": 0.678165128,
                        "actual_value": 2042845
                    }, {
                        "age": "36",
                        "gender_percentage": 1.44684302,
                        "total_percentage": 0.711170008,
                        "actual_value": 2142266
                    }, {
                        "age": "37",
                        "gender_percentage": 1.47617813,
                        "total_percentage": 0.725589165,
                        "actual_value": 2185701
                    }, {
                        "age": "38",
                        "gender_percentage": 1.39326717,
                        "total_percentage": 0.684835751,
                        "actual_value": 2062939
                    }, {
                        "age": "39",
                        "gender_percentage": 1.36919799,
                        "total_percentage": 0.673004972,
                        "actual_value": 2027301
                    }, {
                        "age": "40",
                        "gender_percentage": 1.36499307,
                        "total_percentage": 0.670938121,
                        "actual_value": 2021075
                    }, {
                        "age": "41",
                        "gender_percentage": 1.41218793,
                        "total_percentage": 0.694135917,
                        "actual_value": 2090954
                    }, {
                        "age": "42",
                        "gender_percentage": 1.50873887,
                        "total_percentage": 0.741593815,
                        "actual_value": 2233912
                    }, {
                        "age": "43",
                        "gender_percentage": 1.52551125,
                        "total_percentage": 0.749837981,
                        "actual_value": 2258746
                    }, {
                        "age": "44",
                        "gender_percentage": 1.50507628,
                        "total_percentage": 0.739793537,
                        "actual_value": 2228489
                    }, {
                        "age": "45",
                        "gender_percentage": 1.5081398,
                        "total_percentage": 0.741299357,
                        "actual_value": 2233025
                    }, {
                        "age": "46",
                        "gender_percentage": 1.53051784,
                        "total_percentage": 0.752298881,
                        "actual_value": 2266159
                    }, {
                        "age": "47",
                        "gender_percentage": 1.57159241,
                        "total_percentage": 0.772488356,
                        "actual_value": 2326976
                    }, {
                        "age": "48",
                        "gender_percentage": 1.49296672,
                        "total_percentage": 0.733841298,
                        "actual_value": 2210559
                    }, {
                        "age": "49",
                        "gender_percentage": 1.49990287,
                        "total_percentage": 0.73725064,
                        "actual_value": 2220829
                    }, {
                        "age": "50",
                        "gender_percentage": 1.46563208,
                        "total_percentage": 0.720405439,
                        "actual_value": 2170086
                    }, {
                        "age": "51",
                        "gender_percentage": 1.4216885,
                        "total_percentage": 0.698805752,
                        "actual_value": 2105021
                    }, {
                        "age": "52",
                        "gender_percentage": 1.42317704,
                        "total_percentage": 0.699537415,
                        "actual_value": 2107225
                    }, {
                        "age": "53",
                        "gender_percentage": 1.36041737,
                        "total_percentage": 0.668689018,
                        "actual_value": 2014300
                    }, {
                        "age": "54",
                        "gender_percentage": 1.3155026,
                        "total_percentage": 0.646611956,
                        "actual_value": 1947797
                    }, {
                        "age": "55",
                        "gender_percentage": 1.25572069,
                        "total_percentage": 0.617227218,
                        "actual_value": 1859281
                    }, {
                        "age": "56",
                        "gender_percentage": 1.23225124,
                        "total_percentage": 0.605691229,
                        "actual_value": 1824531
                    }, {
                        "age": "57",
                        "gender_percentage": 1.22537115,
                        "total_percentage": 0.602309441,
                        "actual_value": 1814344
                    }, {
                        "age": "58",
                        "gender_percentage": 1.17275839,
                        "total_percentage": 0.576448575,
                        "actual_value": 1736443
                    }, {
                        "age": "59",
                        "gender_percentage": 1.15537209,
                        "total_percentage": 0.567902648,
                        "actual_value": 1710700
                    }, {
                        "age": "60",
                        "gender_percentage": 1.19274963,
                        "total_percentage": 0.586274914,
                        "actual_value": 1766043
                    }, {
                        "age": "61",
                        "gender_percentage": 0.901305046,
                        "total_percentage": 0.4430205,
                        "actual_value": 1334516
                    }, {
                        "age": "62",
                        "gender_percentage": 0.892925609,
                        "total_percentage": 0.438901737,
                        "actual_value": 1322109
                    }, {
                        "age": "63",
                        "gender_percentage": 0.873952167,
                        "total_percentage": 0.429575678,
                        "actual_value": 1294016
                    }, {
                        "age": "64",
                        "gender_percentage": 0.890001891,
                        "total_percentage": 0.437464635,
                        "actual_value": 1317780
                    }, {
                        "age": "65",
                        "gender_percentage": 0.78014395,
                        "total_percentage": 0.383465914,
                        "actual_value": 1155119
                    }, {
                        "age": "66",
                        "gender_percentage": 0.717232328,
                        "total_percentage": 0.352542823,
                        "actual_value": 1061969
                    }, {
                        "age": "67",
                        "gender_percentage": 0.694711792,
                        "total_percentage": 0.341473252,
                        "actual_value": 1028624
                    }, {
                        "age": "68",
                        "gender_percentage": 0.653893867,
                        "total_percentage": 0.321409926,
                        "actual_value": 968187
                    }, {
                        "age": "69",
                        "gender_percentage": 0.629137148,
                        "total_percentage": 0.3092412,
                        "actual_value": 931531
                    }, {
                        "age": "70",
                        "gender_percentage": 0.578617394,
                        "total_percentage": 0.284409112,
                        "actual_value": 856729
                    }, {
                        "age": "71",
                        "gender_percentage": 0.564670803,
                        "total_percentage": 0.277553912,
                        "actual_value": 836079
                    }, {
                        "age": "72",
                        "gender_percentage": 0.550478373,
                        "total_percentage": 0.270577875,
                        "actual_value": 815065
                    }, {
                        "age": "73",
                        "gender_percentage": 0.4958334,
                        "total_percentage": 0.243718109,
                        "actual_value": 734155
                    }, {
                        "age": "74",
                        "gender_percentage": 0.483211904,
                        "total_percentage": 0.237514236,
                        "actual_value": 715467
                    }, {
                        "age": "75",
                        "gender_percentage": 0.46131069,
                        "total_percentage": 0.226749083,
                        "actual_value": 683039
                    }, {
                        "age": "76",
                        "gender_percentage": 0.451681802,
                        "total_percentage": 0.222016174,
                        "actual_value": 668782
                    }, {
                        "age": "77",
                        "gender_percentage": 0.440680541,
                        "total_percentage": 0.2166087,
                        "actual_value": 652493
                    }, {
                        "age": "78",
                        "gender_percentage": 0.404601081,
                        "total_percentage": 0.198874481,
                        "actual_value": 599072
                    }, {
                        "age": "79",
                        "gender_percentage": 0.386150382,
                        "total_percentage": 0.189805368,
                        "actual_value": 571753
                    }, {
                        "age": "80",
                        "gender_percentage": 0.356091933,
                        "total_percentage": 0.17503067,
                        "actual_value": 527247
                    }, {
                        "age": "81",
                        "gender_percentage": 0.326705485,
                        "total_percentage": 0.160586283,
                        "actual_value": 483736
                    }, {
                        "age": "82",
                        "gender_percentage": 0.30267615,
                        "total_percentage": 0.14877509,
                        "actual_value": 448157
                    }, {
                        "age": "83",
                        "gender_percentage": 0.272567047,
                        "total_percentage": 0.133975495,
                        "actual_value": 403576
                    }, {
                        "age": "84",
                        "gender_percentage": 0.239822612,
                        "total_percentage": 0.117880549,
                        "actual_value": 355093
                    }, {
                        "age": "85",
                        "gender_percentage": 0.21287361,
                        "total_percentage": 0.104634245,
                        "actual_value": 315191
                    }, {
                        "age": "86",
                        "gender_percentage": 0.18580304,
                        "total_percentage": 0.091328187,
                        "actual_value": 275109
                    }, {
                        "age": "87",
                        "gender_percentage": 0.155551432,
                        "total_percentage": 0.0764585457,
                        "actual_value": 230317
                    }, {
                        "age": "88",
                        "gender_percentage": 0.121885103,
                        "total_percentage": 0.0599104594,
                        "actual_value": 180469
                    }, {
                        "age": "89",
                        "gender_percentage": 0.103106845,
                        "total_percentage": 0.05068034,
                        "actual_value": 152665
                    }, {
                        "age": "90",
                        "gender_percentage": 0.0767609577,
                        "total_percentage": 0.0377304865,
                        "actual_value": 113656
                    }, {
                        "age": "91",
                        "gender_percentage": 0.0613258296,
                        "total_percentage": 0.0301436232,
                        "actual_value": 90802
                    }, {
                        "age": "92",
                        "gender_percentage": 0.0480667748,
                        "total_percentage": 0.0236263702,
                        "actual_value": 71170
                    }, {
                        "age": "93",
                        "gender_percentage": 0.034732753,
                        "total_percentage": 0.0170722683,
                        "actual_value": 51427
                    }, {
                        "age": "94",
                        "gender_percentage": 0.0249849975,
                        "total_percentage": 0.0122809321,
                        "actual_value": 36994
                    }, {
                        "age": "95",
                        "gender_percentage": 0.017213403,
                        "total_percentage": 0.00846094276,
                        "actual_value": 25487
                    }, {
                        "age": "96",
                        "gender_percentage": 0.0120217591,
                        "total_percentage": 0.00590908232,
                        "actual_value": 17800
                    }, {
                        "age": "97",
                        "gender_percentage": 0.00800527585,
                        "total_percentage": 0.00393485128,
                        "actual_value": 11853
                    }, {
                        "age": "98",
                        "gender_percentage": 0.00505791874,
                        "total_percentage": 0.0024861302,
                        "actual_value": 7489
                    }, {
                        "age": "99",
                        "gender_percentage": 0.0034538919,
                        "total_percentage": 0.00169769927,
                        "actual_value": 5114
                    }, { "age": "100", "gender_percentage": 0.0051956962, "total_percentage": 0.00255385226, "actual_value": 7693 }]
            }, {
                "date": 1151712000,
                "max_gender_percentage": 1.58404727,
                "max_total_percentage": 0.77852493,
                "max_actual_value": 2322962,
                "age_groups": [{
                        "age": "00",
                        "gender_percentage": 1.4086993,
                        "total_percentage": 0.692345201,
                        "actual_value": 2065819
                    }, {
                        "age": "01",
                        "gender_percentage": 1.38398967,
                        "total_percentage": 0.680200951,
                        "actual_value": 2029583
                    }, {
                        "age": "02",
                        "gender_percentage": 1.38952404,
                        "total_percentage": 0.682920974,
                        "actual_value": 2037699
                    }, {
                        "age": "03",
                        "gender_percentage": 1.38193849,
                        "total_percentage": 0.679192841,
                        "actual_value": 2026575
                    }, {
                        "age": "04",
                        "gender_percentage": 1.38304386,
                        "total_percentage": 0.679736108,
                        "actual_value": 2028196
                    }, {
                        "age": "05",
                        "gender_percentage": 1.4099281,
                        "total_percentage": 0.692949129,
                        "actual_value": 2067621
                    }, {
                        "age": "06",
                        "gender_percentage": 1.3569145,
                        "total_percentage": 0.66689409,
                        "actual_value": 1989878
                    }, {
                        "age": "07",
                        "gender_percentage": 1.34096739,
                        "total_percentage": 0.659056431,
                        "actual_value": 1966492
                    }, {
                        "age": "08",
                        "gender_percentage": 1.34381504,
                        "total_percentage": 0.660455989,
                        "actual_value": 1970668
                    }, {
                        "age": "09",
                        "gender_percentage": 1.36030904,
                        "total_percentage": 0.668562433,
                        "actual_value": 1994856
                    }, {
                        "age": "10",
                        "gender_percentage": 1.43793544,
                        "total_percentage": 0.70671413,
                        "actual_value": 2108693
                    }, {
                        "age": "11",
                        "gender_percentage": 1.44668501,
                        "total_percentage": 0.711014353,
                        "actual_value": 2121524
                    }, {
                        "age": "12",
                        "gender_percentage": 1.46533861,
                        "total_percentage": 0.720182195,
                        "actual_value": 2148879
                    }, {
                        "age": "13",
                        "gender_percentage": 1.49079289,
                        "total_percentage": 0.732692421,
                        "actual_value": 2186207
                    }, {
                        "age": "14",
                        "gender_percentage": 1.50421557,
                        "total_percentage": 0.73928938,
                        "actual_value": 2205891
                    }, {
                        "age": "15",
                        "gender_percentage": 1.54124388,
                        "total_percentage": 0.757487991,
                        "actual_value": 2260192
                    }, {
                        "age": "16",
                        "gender_percentage": 1.57889818,
                        "total_percentage": 0.775994263,
                        "actual_value": 2315411
                    }, {
                        "age": "17",
                        "gender_percentage": 1.52152786,
                        "total_percentage": 0.747797995,
                        "actual_value": 2231279
                    }, {
                        "age": "18",
                        "gender_percentage": 1.50876118,
                        "total_percentage": 0.741523444,
                        "actual_value": 2212557
                    }, {
                        "age": "19",
                        "gender_percentage": 1.49404559,
                        "total_percentage": 0.734291054,
                        "actual_value": 2190977
                    }, {
                        "age": "20",
                        "gender_percentage": 1.48994869,
                        "total_percentage": 0.732277513,
                        "actual_value": 2184969
                    }, {
                        "age": "21",
                        "gender_percentage": 1.49433813,
                        "total_percentage": 0.73443483,
                        "actual_value": 2191406
                    }, {
                        "age": "22",
                        "gender_percentage": 1.45385187,
                        "total_percentage": 0.714536708,
                        "actual_value": 2132034
                    }, {
                        "age": "23",
                        "gender_percentage": 1.46635329,
                        "total_percentage": 0.720680888,
                        "actual_value": 2150367
                    }, {
                        "age": "24",
                        "gender_percentage": 1.45831223,
                        "total_percentage": 0.71672888,
                        "actual_value": 2138575
                    }, {
                        "age": "25",
                        "gender_percentage": 1.45860954,
                        "total_percentage": 0.716875002,
                        "actual_value": 2139011
                    }, {
                        "age": "26",
                        "gender_percentage": 1.42893698,
                        "total_percentage": 0.702291581,
                        "actual_value": 2095497
                    }, {
                        "age": "27",
                        "gender_percentage": 1.3671063,
                        "total_percentage": 0.671903141,
                        "actual_value": 2004824
                    }, {
                        "age": "28",
                        "gender_percentage": 1.3284646,
                        "total_percentage": 0.652911581,
                        "actual_value": 1948157
                    }, {
                        "age": "29",
                        "gender_percentage": 1.30114939,
                        "total_percentage": 0.639486749,
                        "actual_value": 1908100
                    }, {
                        "age": "30",
                        "gender_percentage": 1.30122236,
                        "total_percentage": 0.63952261,
                        "actual_value": 1908207
                    }, {
                        "age": "31",
                        "gender_percentage": 1.30992351,
                        "total_percentage": 0.643799037,
                        "actual_value": 1920967
                    }, {
                        "age": "32",
                        "gender_percentage": 1.28889209,
                        "total_percentage": 0.63346255,
                        "actual_value": 1890125
                    }, {
                        "age": "33",
                        "gender_percentage": 1.31534195,
                        "total_percentage": 0.646462085,
                        "actual_value": 1928913
                    }, {
                        "age": "34",
                        "gender_percentage": 1.3808904,
                        "total_percentage": 0.678677725,
                        "actual_value": 2025038
                    }, {
                        "age": "35",
                        "gender_percentage": 1.46541226,
                        "total_percentage": 0.720218391,
                        "actual_value": 2148987
                    }, {
                        "age": "36",
                        "gender_percentage": 1.49748241,
                        "total_percentage": 0.735980176,
                        "actual_value": 2196017
                    }, {
                        "age": "37",
                        "gender_percentage": 1.40472855,
                        "total_percentage": 0.690393662,
                        "actual_value": 2059996
                    }, {
                        "age": "38",
                        "gender_percentage": 1.37797524,
                        "total_percentage": 0.677244988,
                        "actual_value": 2020763
                    }, {
                        "age": "39",
                        "gender_percentage": 1.38156139,
                        "total_percentage": 0.679007506,
                        "actual_value": 2026022
                    }, {
                        "age": "40",
                        "gender_percentage": 1.41957915,
                        "total_percentage": 0.69769241,
                        "actual_value": 2081774
                    }, {
                        "age": "41",
                        "gender_percentage": 1.52444166,
                        "total_percentage": 0.749230062,
                        "actual_value": 2235552
                    }, {
                        "age": "42",
                        "gender_percentage": 1.53943819,
                        "total_percentage": 0.756600531,
                        "actual_value": 2257544
                    }, {
                        "age": "43",
                        "gender_percentage": 1.53217041,
                        "total_percentage": 0.753028575,
                        "actual_value": 2246886
                    }, {
                        "age": "44",
                        "gender_percentage": 1.52928116,
                        "total_percentage": 0.751608573,
                        "actual_value": 2242649
                    }, {
                        "age": "45",
                        "gender_percentage": 1.53785752,
                        "total_percentage": 0.75582367,
                        "actual_value": 2255226
                    }, {
                        "age": "46",
                        "gender_percentage": 1.58404727,
                        "total_percentage": 0.77852493,
                        "actual_value": 2322962
                    }, {
                        "age": "47",
                        "gender_percentage": 1.51633445,
                        "total_percentage": 0.745245545,
                        "actual_value": 2223663
                    }, {
                        "age": "48",
                        "gender_percentage": 1.51147313,
                        "total_percentage": 0.742856309,
                        "actual_value": 2216534
                    }, {
                        "age": "49",
                        "gender_percentage": 1.49436541,
                        "total_percentage": 0.734448236,
                        "actual_value": 2191446
                    }, {
                        "age": "50",
                        "gender_percentage": 1.42511557,
                        "total_percentage": 0.700413438,
                        "actual_value": 2089893
                    }, {
                        "age": "51",
                        "gender_percentage": 1.44966222,
                        "total_percentage": 0.712477588,
                        "actual_value": 2125890
                    }, {
                        "age": "52",
                        "gender_percentage": 1.37069996,
                        "total_percentage": 0.673669345,
                        "actual_value": 2010094
                    }, {
                        "age": "53",
                        "gender_percentage": 1.329407,
                        "total_percentage": 0.653374749,
                        "actual_value": 1949539
                    }, {
                        "age": "54",
                        "gender_percentage": 1.28835475,
                        "total_percentage": 0.633198457,
                        "actual_value": 1889337
                    }, {
                        "age": "55",
                        "gender_percentage": 1.23862453,
                        "total_percentage": 0.608757134,
                        "actual_value": 1816409
                    }, {
                        "age": "56",
                        "gender_percentage": 1.24827695,
                        "total_percentage": 0.613501086,
                        "actual_value": 1830564
                    }, {
                        "age": "57",
                        "gender_percentage": 1.19102324,
                        "total_percentage": 0.585362127,
                        "actual_value": 1746603
                    }, {
                        "age": "58",
                        "gender_percentage": 1.17901415,
                        "total_percentage": 0.57945992,
                        "actual_value": 1728992
                    }, {
                        "age": "59",
                        "gender_percentage": 1.2282718,
                        "total_percentage": 0.60366899,
                        "actual_value": 1801227
                    }, {
                        "age": "60",
                        "gender_percentage": 0.904439643,
                        "total_percentage": 0.444512498,
                        "actual_value": 1326336
                    }, {
                        "age": "61",
                        "gender_percentage": 0.91053795,
                        "total_percentage": 0.447509684,
                        "actual_value": 1335279
                    }, {
                        "age": "62",
                        "gender_percentage": 0.888912589,
                        "total_percentage": 0.436881287,
                        "actual_value": 1303566
                    }, {
                        "age": "63",
                        "gender_percentage": 0.913969995,
                        "total_percentage": 0.449196459,
                        "actual_value": 1340312
                    }, {
                        "age": "64",
                        "gender_percentage": 0.796994748,
                        "total_percentage": 0.391705659,
                        "actual_value": 1168771
                    }, {
                        "age": "65",
                        "gender_percentage": 0.734969043,
                        "total_percentage": 0.361221368,
                        "actual_value": 1077812
                    }, {
                        "age": "66",
                        "gender_percentage": 0.710578544,
                        "total_percentage": 0.349233966,
                        "actual_value": 1042044
                    }, {
                        "age": "67",
                        "gender_percentage": 0.672759905,
                        "total_percentage": 0.330646924,
                        "actual_value": 986584
                    }, {
                        "age": "68",
                        "gender_percentage": 0.6501185,
                        "total_percentage": 0.319519164,
                        "actual_value": 953381
                    }, {
                        "age": "69",
                        "gender_percentage": 0.602928394,
                        "total_percentage": 0.296326249,
                        "actual_value": 884178
                    }, {
                        "age": "70",
                        "gender_percentage": 0.578541986,
                        "total_percentage": 0.284340857,
                        "actual_value": 848416
                    }, {
                        "age": "71",
                        "gender_percentage": 0.575083347,
                        "total_percentage": 0.282641011,
                        "actual_value": 843344
                    }, {
                        "age": "72",
                        "gender_percentage": 0.515084274,
                        "total_percentage": 0.253152766,
                        "actual_value": 755357
                    }, {
                        "age": "73",
                        "gender_percentage": 0.506731578,
                        "total_percentage": 0.249047597,
                        "actual_value": 743108
                    }, {
                        "age": "74",
                        "gender_percentage": 0.489722737,
                        "total_percentage": 0.24068812,
                        "actual_value": 718165
                    }, {
                        "age": "75",
                        "gender_percentage": 0.470097414,
                        "total_percentage": 0.231042698,
                        "actual_value": 689385
                    }, {
                        "age": "76",
                        "gender_percentage": 0.468211937,
                        "total_percentage": 0.230116027,
                        "actual_value": 686620
                    }, {
                        "age": "77",
                        "gender_percentage": 0.42918291,
                        "total_percentage": 0.210934106,
                        "actual_value": 629385
                    }, {
                        "age": "78",
                        "gender_percentage": 0.413077598,
                        "total_percentage": 0.203018694,
                        "actual_value": 605767
                    }, {
                        "age": "79",
                        "gender_percentage": 0.386465441,
                        "total_percentage": 0.189939395,
                        "actual_value": 566741
                    }, {
                        "age": "80",
                        "gender_percentage": 0.35140444,
                        "total_percentage": 0.172707672,
                        "actual_value": 515325
                    }, {
                        "age": "81",
                        "gender_percentage": 0.332448068,
                        "total_percentage": 0.163391026,
                        "actual_value": 487526
                    }, {
                        "age": "82",
                        "gender_percentage": 0.297950323,
                        "total_percentage": 0.146436131,
                        "actual_value": 436936
                    }, {
                        "age": "83",
                        "gender_percentage": 0.26791635,
                        "total_percentage": 0.131675084,
                        "actual_value": 392892
                    }, {
                        "age": "84",
                        "gender_percentage": 0.239956061,
                        "total_percentage": 0.117933207,
                        "actual_value": 351889
                    }, {
                        "age": "85",
                        "gender_percentage": 0.209875718,
                        "total_percentage": 0.10314937,
                        "actual_value": 307777
                    }, {
                        "age": "86",
                        "gender_percentage": 0.178299268,
                        "total_percentage": 0.0876302289,
                        "actual_value": 261471
                    }, {
                        "age": "87",
                        "gender_percentage": 0.143376694,
                        "total_percentage": 0.07046654,
                        "actual_value": 210258
                    }, {
                        "age": "88",
                        "gender_percentage": 0.121754061,
                        "total_percentage": 0.0598394841,
                        "actual_value": 178549
                    }, {
                        "age": "89",
                        "gender_percentage": 0.0955680967,
                        "total_percentage": 0.0469696499,
                        "actual_value": 140148
                    }, {
                        "age": "90",
                        "gender_percentage": 0.0750808411,
                        "total_percentage": 0.0369006074,
                        "actual_value": 110104
                    }, {
                        "age": "91",
                        "gender_percentage": 0.0602902482,
                        "total_percentage": 0.0296313513,
                        "actual_value": 88414
                    }, {
                        "age": "92",
                        "gender_percentage": 0.045769691,
                        "total_percentage": 0.0224948119,
                        "actual_value": 67120
                    }, {
                        "age": "93",
                        "gender_percentage": 0.0331271095,
                        "total_percentage": 0.0162812569,
                        "actual_value": 48580
                    }, {
                        "age": "94",
                        "gender_percentage": 0.0235592529,
                        "total_percentage": 0.0115788626,
                        "actual_value": 34549
                    }, {
                        "age": "95",
                        "gender_percentage": 0.016360346,
                        "total_percentage": 0.00804075577,
                        "actual_value": 23992
                    }, {
                        "age": "96",
                        "gender_percentage": 0.0114560609,
                        "total_percentage": 0.00563040584,
                        "actual_value": 16800
                    }, {
                        "age": "97",
                        "gender_percentage": 0.0075044018,
                        "total_percentage": 0.00368825097,
                        "actual_value": 11005
                    }, {
                        "age": "98",
                        "gender_percentage": 0.00502839245,
                        "total_percentage": 0.00247134599,
                        "actual_value": 7374
                    }, {
                        "age": "99",
                        "gender_percentage": 0.00323701912,
                        "total_percentage": 0.00159092479,
                        "actual_value": 4747
                    }, { "age": "100", "gender_percentage": 0.00511567672, "total_percentage": 0.00251424432, "actual_value": 7502 }]
            }, {
                "date": 1120176000,
                "max_gender_percentage": 1.59373524,
                "max_total_percentage": 0.783054829,
                "max_actual_value": 2314057,
                "age_groups": [{
                        "age": "00",
                        "gender_percentage": 1.41029766,
                        "total_percentage": 0.692925882,
                        "actual_value": 2047711
                    }, {
                        "age": "01",
                        "gender_percentage": 1.40260261,
                        "total_percentage": 0.689145045,
                        "actual_value": 2036538
                    }, {
                        "age": "02",
                        "gender_percentage": 1.39141574,
                        "total_percentage": 0.683648569,
                        "actual_value": 2020295
                    }, {
                        "age": "03",
                        "gender_percentage": 1.38626757,
                        "total_percentage": 0.6811191,
                        "actual_value": 2012820
                    }, {
                        "age": "04",
                        "gender_percentage": 1.41754299,
                        "total_percentage": 0.69648575,
                        "actual_value": 2058231
                    }, {
                        "age": "05",
                        "gender_percentage": 1.37168394,
                        "total_percentage": 0.673953682,
                        "actual_value": 1991645
                    }, {
                        "age": "06",
                        "gender_percentage": 1.3474486,
                        "total_percentage": 0.66204606,
                        "actual_value": 1956456
                    }, {
                        "age": "07",
                        "gender_percentage": 1.35172211,
                        "total_percentage": 0.664145773,
                        "actual_value": 1962661
                    }, {
                        "age": "08",
                        "gender_percentage": 1.35920228,
                        "total_percentage": 0.667821032,
                        "actual_value": 1973522
                    }, {
                        "age": "09",
                        "gender_percentage": 1.3987079,
                        "total_percentage": 0.687231447,
                        "actual_value": 2030883
                    }, {
                        "age": "10",
                        "gender_percentage": 1.46394406,
                        "total_percentage": 0.719284131,
                        "actual_value": 2125604
                    }, {
                        "age": "11",
                        "gender_percentage": 1.46319542,
                        "total_percentage": 0.7189163,
                        "actual_value": 2124517
                    }, {
                        "age": "12",
                        "gender_percentage": 1.50064797,
                        "total_percentage": 0.737317974,
                        "actual_value": 2178897
                    }, {
                        "age": "13",
                        "gender_percentage": 1.51833909,
                        "total_percentage": 0.74601021,
                        "actual_value": 2204584
                    }, {
                        "age": "14",
                        "gender_percentage": 1.53625337,
                        "total_percentage": 0.754812084,
                        "actual_value": 2230595
                    }, {
                        "age": "15",
                        "gender_percentage": 1.57609783,
                        "total_percentage": 0.774388988,
                        "actual_value": 2288448
                    }, {
                        "age": "16",
                        "gender_percentage": 1.52479033,
                        "total_percentage": 0.749179913,
                        "actual_value": 2213951
                    }, {
                        "age": "17",
                        "gender_percentage": 1.50392971,
                        "total_percentage": 0.738930404,
                        "actual_value": 2183662
                    }, {
                        "age": "18",
                        "gender_percentage": 1.49755906,
                        "total_percentage": 0.735800293,
                        "actual_value": 2174412
                    }, {
                        "age": "19",
                        "gender_percentage": 1.50895048,
                        "total_percentage": 0.741397271,
                        "actual_value": 2190952
                    }, {
                        "age": "20",
                        "gender_percentage": 1.50531679,
                        "total_percentage": 0.739611923,
                        "actual_value": 2185676
                    }, {
                        "age": "21",
                        "gender_percentage": 1.47350761,
                        "total_percentage": 0.723983021,
                        "actual_value": 2139490
                    }, {
                        "age": "22",
                        "gender_percentage": 1.48155116,
                        "total_percentage": 0.727935083,
                        "actual_value": 2151169
                    }, {
                        "age": "23",
                        "gender_percentage": 1.47164532,
                        "total_percentage": 0.723068013,
                        "actual_value": 2136786
                    }, {
                        "age": "24",
                        "gender_percentage": 1.46285864,
                        "total_percentage": 0.718750827,
                        "actual_value": 2124028
                    }, {
                        "age": "25",
                        "gender_percentage": 1.45699833,
                        "total_percentage": 0.715871463,
                        "actual_value": 2115519
                    }, {
                        "age": "26",
                        "gender_percentage": 1.37266743,
                        "total_percentage": 0.674436904,
                        "actual_value": 1993073
                    }, {
                        "age": "27",
                        "gender_percentage": 1.33778519,
                        "total_percentage": 0.657298103,
                        "actual_value": 1942425
                    }, {
                        "age": "28",
                        "gender_percentage": 1.31817322,
                        "total_percentage": 0.647662096,
                        "actual_value": 1913949
                    }, {
                        "age": "29",
                        "gender_percentage": 1.2790891,
                        "total_percentage": 0.628458776,
                        "actual_value": 1857200
                    }, {
                        "age": "30",
                        "gender_percentage": 1.34439689,
                        "total_percentage": 0.660546652,
                        "actual_value": 1952025
                    }, {
                        "age": "31",
                        "gender_percentage": 1.28091421,
                        "total_percentage": 0.62935551,
                        "actual_value": 1859850
                    }, {
                        "age": "32",
                        "gender_percentage": 1.32654942,
                        "total_percentage": 0.651777601,
                        "actual_value": 1926111
                    }, {
                        "age": "33",
                        "gender_percentage": 1.3908386,
                        "total_percentage": 0.683364998,
                        "actual_value": 2019457
                    }, {
                        "age": "34",
                        "gender_percentage": 1.46789455,
                        "total_percentage": 0.721225138,
                        "actual_value": 2131340
                    }, {
                        "age": "35",
                        "gender_percentage": 1.51532113,
                        "total_percentage": 0.744527383,
                        "actual_value": 2200202
                    }, {
                        "age": "36",
                        "gender_percentage": 1.42296114,
                        "total_percentage": 0.699147867,
                        "actual_value": 2066098
                    }, {
                        "age": "37",
                        "gender_percentage": 1.38901624,
                        "total_percentage": 0.682469617,
                        "actual_value": 2016811
                    }, {
                        "age": "38",
                        "gender_percentage": 1.39043914,
                        "total_percentage": 0.683168731,
                        "actual_value": 2018877
                    }, {
                        "age": "39",
                        "gender_percentage": 1.4360103,
                        "total_percentage": 0.705559352,
                        "actual_value": 2085045
                    }, {
                        "age": "40",
                        "gender_percentage": 1.53326364,
                        "total_percentage": 0.753343131,
                        "actual_value": 2226254
                    }, {
                        "age": "41",
                        "gender_percentage": 1.55553888,
                        "total_percentage": 0.764287694,
                        "actual_value": 2258597
                    }, {
                        "age": "42",
                        "gender_percentage": 1.54668953,
                        "total_percentage": 0.759939715,
                        "actual_value": 2245748
                    }, {
                        "age": "43",
                        "gender_percentage": 1.5553908,
                        "total_percentage": 0.76421494,
                        "actual_value": 2258382
                    }, {
                        "age": "44",
                        "gender_percentage": 1.55938469,
                        "total_percentage": 0.766177266,
                        "actual_value": 2264181
                    }, {
                        "age": "45",
                        "gender_percentage": 1.59373524,
                        "total_percentage": 0.783054829,
                        "actual_value": 2314057
                    }, {
                        "age": "46",
                        "gender_percentage": 1.52950185,
                        "total_percentage": 0.751494842,
                        "actual_value": 2220792
                    }, {
                        "age": "47",
                        "gender_percentage": 1.53470168,
                        "total_percentage": 0.75404969,
                        "actual_value": 2228342
                    }, {
                        "age": "48",
                        "gender_percentage": 1.50730788,
                        "total_percentage": 0.74059021,
                        "actual_value": 2188567
                    }, {
                        "age": "49",
                        "gender_percentage": 1.45204368,
                        "total_percentage": 0.713437082,
                        "actual_value": 2108325
                    }, {
                        "age": "50",
                        "gender_percentage": 1.45564706,
                        "total_percentage": 0.715207541,
                        "actual_value": 2113557
                    }, {
                        "age": "51",
                        "gender_percentage": 1.39548469,
                        "total_percentage": 0.68564778,
                        "actual_value": 2026203
                    }, {
                        "age": "52",
                        "gender_percentage": 1.34111514,
                        "total_percentage": 0.658934221,
                        "actual_value": 1947260
                    }, {
                        "age": "53",
                        "gender_percentage": 1.30291189,
                        "total_percentage": 0.640163702,
                        "actual_value": 1891790
                    }, {
                        "age": "54",
                        "gender_percentage": 1.26895253,
                        "total_percentage": 0.623478345,
                        "actual_value": 1842482
                    }, {
                        "age": "55",
                        "gender_percentage": 1.25664375,
                        "total_percentage": 0.61743063,
                        "actual_value": 1824610
                    }, {
                        "age": "56",
                        "gender_percentage": 1.21303887,
                        "total_percentage": 0.596006115,
                        "actual_value": 1761297
                    }, {
                        "age": "57",
                        "gender_percentage": 1.1978354,
                        "total_percentage": 0.588536145,
                        "actual_value": 1739222
                    }, {
                        "age": "58",
                        "gender_percentage": 1.25298389,
                        "total_percentage": 0.615632423,
                        "actual_value": 1819296
                    }, {
                        "age": "59",
                        "gender_percentage": 0.930415418,
                        "total_percentage": 0.457143864,
                        "actual_value": 1350936
                    }, {
                        "age": "60",
                        "gender_percentage": 0.916116232,
                        "total_percentage": 0.450118201,
                        "actual_value": 1330174
                    }, {
                        "age": "61",
                        "gender_percentage": 0.906990015,
                        "total_percentage": 0.445634189,
                        "actual_value": 1316923
                    }, {
                        "age": "62",
                        "gender_percentage": 0.930648205,
                        "total_percentage": 0.45725824,
                        "actual_value": 1351274
                    }, {
                        "age": "63",
                        "gender_percentage": 0.818537822,
                        "total_percentage": 0.402174702,
                        "actual_value": 1188493
                    }, {
                        "age": "64",
                        "gender_percentage": 0.751297488,
                        "total_percentage": 0.369137302,
                        "actual_value": 1090862
                    }, {
                        "age": "65",
                        "gender_percentage": 0.728311488,
                        "total_percentage": 0.35784352,
                        "actual_value": 1057487
                    }, {
                        "age": "66",
                        "gender_percentage": 0.68902764,
                        "total_percentage": 0.338542066,
                        "actual_value": 1000448
                    }, {
                        "age": "67",
                        "gender_percentage": 0.669222145,
                        "total_percentage": 0.328810971,
                        "actual_value": 971691
                    }, {
                        "age": "68",
                        "gender_percentage": 0.623146149,
                        "total_percentage": 0.306172311,
                        "actual_value": 904790
                    }, {
                        "age": "69",
                        "gender_percentage": 0.602430167,
                        "total_percentage": 0.295993864,
                        "actual_value": 874711
                    }, {
                        "age": "70",
                        "gender_percentage": 0.590544942,
                        "total_percentage": 0.29015426,
                        "actual_value": 857454
                    }, {
                        "age": "71",
                        "gender_percentage": 0.53810036,
                        "total_percentage": 0.264386502,
                        "actual_value": 781306
                    }, {
                        "age": "72",
                        "gender_percentage": 0.526985123,
                        "total_percentage": 0.258925219,
                        "actual_value": 765167
                    }, {
                        "age": "73",
                        "gender_percentage": 0.513785133,
                        "total_percentage": 0.252439627,
                        "actual_value": 746001
                    }, {
                        "age": "74",
                        "gender_percentage": 0.4986829,
                        "total_percentage": 0.245019401,
                        "actual_value": 724073
                    }, {
                        "age": "75",
                        "gender_percentage": 0.488728155,
                        "total_percentage": 0.240128305,
                        "actual_value": 709619
                    }, {
                        "age": "76",
                        "gender_percentage": 0.45623301,
                        "total_percentage": 0.224162366,
                        "actual_value": 662437
                    }, {
                        "age": "77",
                        "gender_percentage": 0.438928254,
                        "total_percentage": 0.215659967,
                        "actual_value": 637311
                    }, {
                        "age": "78",
                        "gender_percentage": 0.413911222,
                        "total_percentage": 0.203368272,
                        "actual_value": 600987
                    }, {
                        "age": "79",
                        "gender_percentage": 0.381549689,
                        "total_percentage": 0.18746798,
                        "actual_value": 553999
                    }, {
                        "age": "80",
                        "gender_percentage": 0.358505148,
                        "total_percentage": 0.176145435,
                        "actual_value": 520539
                    }, {
                        "age": "81",
                        "gender_percentage": 0.327591303,
                        "total_percentage": 0.160956441,
                        "actual_value": 475653
                    }, {
                        "age": "82",
                        "gender_percentage": 0.29368153,
                        "total_percentage": 0.144295448,
                        "actual_value": 426417
                    }, {
                        "age": "83",
                        "gender_percentage": 0.268627995,
                        "total_percentage": 0.131985818,
                        "actual_value": 390040
                    }, {
                        "age": "84",
                        "gender_percentage": 0.236895263,
                        "total_percentage": 0.116394477,
                        "actual_value": 343965
                    }, {
                        "age": "85",
                        "gender_percentage": 0.202385616,
                        "total_percentage": 0.0994387459,
                        "actual_value": 293858
                    }, {
                        "age": "86",
                        "gender_percentage": 0.164703039,
                        "total_percentage": 0.0809240499,
                        "actual_value": 239144
                    }, {
                        "age": "87",
                        "gender_percentage": 0.143576581,
                        "total_percentage": 0.0705439223,
                        "actual_value": 208469
                    }, {
                        "age": "88",
                        "gender_percentage": 0.113631075,
                        "total_percentage": 0.0558307048,
                        "actual_value": 164989
                    }, {
                        "age": "89",
                        "gender_percentage": 0.0933152388,
                        "total_percentage": 0.0458488628,
                        "actual_value": 135491
                    }, {
                        "age": "90",
                        "gender_percentage": 0.0742700897,
                        "total_percentage": 0.0364913512,
                        "actual_value": 107838
                    }, {
                        "age": "91",
                        "gender_percentage": 0.0577773335,
                        "total_percentage": 0.0283879147,
                        "actual_value": 83891
                    }, {
                        "age": "92",
                        "gender_percentage": 0.0437860051,
                        "total_percentage": 0.0215135123,
                        "actual_value": 63576
                    }, {
                        "age": "93",
                        "gender_percentage": 0.0314648205,
                        "total_percentage": 0.0154597069,
                        "actual_value": 45686
                    }, {
                        "age": "94",
                        "gender_percentage": 0.0225066513,
                        "total_percentage": 0.0110582621,
                        "actual_value": 32679
                    }, {
                        "age": "95",
                        "gender_percentage": 0.0157034841,
                        "total_percentage": 0.00771564104,
                        "actual_value": 22801
                    }, {
                        "age": "96",
                        "gender_percentage": 0.010797738,
                        "total_percentage": 0.00530528574,
                        "actual_value": 15678
                    }, {
                        "age": "97",
                        "gender_percentage": 0.00749119758,
                        "total_percentage": 0.00368067311,
                        "actual_value": 10877
                    }, {
                        "age": "98",
                        "gender_percentage": 0.00474251968,
                        "total_percentage": 0.00233015676,
                        "actual_value": 6886
                    }, {
                        "age": "99",
                        "gender_percentage": 0.00309441489,
                        "total_percentage": 0.00152038837,
                        "actual_value": 4493
                    }, { "age": "100", "gender_percentage": 0.00515712858, "total_percentage": 0.00253386782, "actual_value": 7488 }]
            }, {
                "date": 1088640000,
                "max_gender_percentage": 1.61550728,
                "max_total_percentage": 0.793548483,
                "max_actual_value": 2323552,
                "age_groups": [{
                        "age": "00",
                        "gender_percentage": 1.4267332,
                        "total_percentage": 0.700821336,
                        "actual_value": 2052042
                    }, {
                        "age": "01",
                        "gender_percentage": 1.40457271,
                        "total_percentage": 0.689935945,
                        "actual_value": 2020169
                    }, {
                        "age": "02",
                        "gender_percentage": 1.39639766,
                        "total_percentage": 0.685920307,
                        "actual_value": 2008411
                    }, {
                        "age": "03",
                        "gender_percentage": 1.42248577,
                        "total_percentage": 0.698734966,
                        "actual_value": 2045933
                    }, {
                        "age": "04",
                        "gender_percentage": 1.3793829,
                        "total_percentage": 0.677562535,
                        "actual_value": 1983939
                    }, {
                        "age": "05",
                        "gender_percentage": 1.36123692,
                        "total_percentage": 0.668649103,
                        "actual_value": 1957840
                    }, {
                        "age": "06",
                        "gender_percentage": 1.35895364,
                        "total_percentage": 0.667527539,
                        "actual_value": 1954556
                    }, {
                        "age": "07",
                        "gender_percentage": 1.36745059,
                        "total_percentage": 0.671701302,
                        "actual_value": 1966777
                    }, {
                        "age": "08",
                        "gender_percentage": 1.39939291,
                        "total_percentage": 0.687391592,
                        "actual_value": 2012719
                    }, {
                        "age": "09",
                        "gender_percentage": 1.43165019,
                        "total_percentage": 0.703236592,
                        "actual_value": 2059114
                    }, {
                        "age": "10",
                        "gender_percentage": 1.47805144,
                        "total_percentage": 0.726029213,
                        "actual_value": 2125852
                    }, {
                        "age": "11",
                        "gender_percentage": 1.49961539,
                        "total_percentage": 0.736621576,
                        "actual_value": 2156867
                    }, {
                        "age": "12",
                        "gender_percentage": 1.52714619,
                        "total_percentage": 0.750144897,
                        "actual_value": 2196464
                    }, {
                        "age": "13",
                        "gender_percentage": 1.54887213,
                        "total_percentage": 0.760816835,
                        "actual_value": 2227712
                    }, {
                        "age": "14",
                        "gender_percentage": 1.57207137,
                        "total_percentage": 0.772212462,
                        "actual_value": 2261079
                    }, {
                        "age": "15",
                        "gender_percentage": 1.52133299,
                        "total_percentage": 0.747289416,
                        "actual_value": 2188103
                    }, {
                        "age": "16",
                        "gender_percentage": 1.50541885,
                        "total_percentage": 0.739472276,
                        "actual_value": 2165214
                    }, {
                        "age": "17",
                        "gender_percentage": 1.49216969,
                        "total_percentage": 0.732964197,
                        "actual_value": 2146158
                    }, {
                        "age": "18",
                        "gender_percentage": 1.5103546,
                        "total_percentage": 0.741896754,
                        "actual_value": 2172313
                    }, {
                        "age": "19",
                        "gender_percentage": 1.52124122,
                        "total_percentage": 0.747244334,
                        "actual_value": 2187971
                    }, {
                        "age": "20",
                        "gender_percentage": 1.48292531,
                        "total_percentage": 0.728423295,
                        "actual_value": 2132862
                    }, {
                        "age": "21",
                        "gender_percentage": 1.49902858,
                        "total_percentage": 0.73633333,
                        "actual_value": 2156023
                    }, {
                        "age": "22",
                        "gender_percentage": 1.48610967,
                        "total_percentage": 0.729987474,
                        "actual_value": 2137442
                    }, {
                        "age": "23",
                        "gender_percentage": 1.47637722,
                        "total_percentage": 0.725206823,
                        "actual_value": 2123444
                    }, {
                        "age": "24",
                        "gender_percentage": 1.46365647,
                        "total_percentage": 0.718958302,
                        "actual_value": 2105148
                    }, {
                        "age": "25",
                        "gender_percentage": 1.3981734,
                        "total_percentage": 0.686792559,
                        "actual_value": 2010965
                    }, {
                        "age": "26",
                        "gender_percentage": 1.34462611,
                        "total_percentage": 0.660489757,
                        "actual_value": 1933949
                    }, {
                        "age": "27",
                        "gender_percentage": 1.32852215,
                        "total_percentage": 0.652579381,
                        "actual_value": 1910787
                    }, {
                        "age": "28",
                        "gender_percentage": 1.29493481,
                        "total_percentage": 0.636081045,
                        "actual_value": 1862479
                    }, {
                        "age": "29",
                        "gender_percentage": 1.32783244,
                        "total_percentage": 0.652240589,
                        "actual_value": 1909795
                    }, {
                        "age": "30",
                        "gender_percentage": 1.31039842,
                        "total_percentage": 0.643676878,
                        "actual_value": 1884720
                    }, {
                        "age": "31",
                        "gender_percentage": 1.32178355,
                        "total_percentage": 0.649269331,
                        "actual_value": 1901095
                    }, {
                        "age": "32",
                        "gender_percentage": 1.40258909,
                        "total_percentage": 0.688961577,
                        "actual_value": 2017316
                    }, {
                        "age": "33",
                        "gender_percentage": 1.47974235,
                        "total_percentage": 0.726859799,
                        "actual_value": 2128284
                    }, {
                        "age": "34",
                        "gender_percentage": 1.52052508,
                        "total_percentage": 0.746892565,
                        "actual_value": 2186941
                    }, {
                        "age": "35",
                        "gender_percentage": 1.43917236,
                        "total_percentage": 0.706931539,
                        "actual_value": 2069933
                    }, {
                        "age": "36",
                        "gender_percentage": 1.40664671,
                        "total_percentage": 0.690954711,
                        "actual_value": 2023152
                    }, {
                        "age": "37",
                        "gender_percentage": 1.40241457,
                        "total_percentage": 0.688875855,
                        "actual_value": 2017065
                    }, {
                        "age": "38",
                        "gender_percentage": 1.44626695,
                        "total_percentage": 0.710416449,
                        "actual_value": 2080137
                    }, {
                        "age": "39",
                        "gender_percentage": 1.5511874,
                        "total_percentage": 0.761954109,
                        "actual_value": 2231042
                    }, {
                        "age": "40",
                        "gender_percentage": 1.5664459,
                        "total_percentage": 0.769449192,
                        "actual_value": 2252988
                    }, {
                        "age": "41",
                        "gender_percentage": 1.56339921,
                        "total_percentage": 0.767952635,
                        "actual_value": 2248606
                    }, {
                        "age": "42",
                        "gender_percentage": 1.57059322,
                        "total_percentage": 0.771486382,
                        "actual_value": 2258953
                    }, {
                        "age": "43",
                        "gender_percentage": 1.58460996,
                        "total_percentage": 0.778371503,
                        "actual_value": 2279113
                    }, {
                        "age": "44",
                        "gender_percentage": 1.61550728,
                        "total_percentage": 0.793548483,
                        "actual_value": 2323552
                    }, {
                        "age": "45",
                        "gender_percentage": 1.54022292,
                        "total_percentage": 0.756568278,
                        "actual_value": 2215272
                    }, {
                        "age": "46",
                        "gender_percentage": 1.54882764,
                        "total_percentage": 0.760794977,
                        "actual_value": 2227648
                    }, {
                        "age": "47",
                        "gender_percentage": 1.5293961,
                        "total_percentage": 0.751250068,
                        "actual_value": 2199700
                    }, {
                        "age": "48",
                        "gender_percentage": 1.46544263,
                        "total_percentage": 0.719835677,
                        "actual_value": 2107717
                    }, {
                        "age": "49",
                        "gender_percentage": 1.48122676,
                        "total_percentage": 0.727588952,
                        "actual_value": 2130419
                    }, {
                        "age": "50",
                        "gender_percentage": 1.40316616,
                        "total_percentage": 0.689245042,
                        "actual_value": 2018146
                    }, {
                        "age": "51",
                        "gender_percentage": 1.3639471,
                        "total_percentage": 0.669980364,
                        "actual_value": 1961738
                    }, {
                        "age": "52",
                        "gender_percentage": 1.31511517,
                        "total_percentage": 0.645993776,
                        "actual_value": 1891504
                    }, {
                        "age": "53",
                        "gender_percentage": 1.28331051,
                        "total_percentage": 0.630371108,
                        "actual_value": 1845760
                    }, {
                        "age": "54",
                        "gender_percentage": 1.28479632,
                        "total_percentage": 0.631100944,
                        "actual_value": 1847897
                    }, {
                        "age": "55",
                        "gender_percentage": 1.22270062,
                        "total_percentage": 0.600599105,
                        "actual_value": 1758586
                    }, {
                        "age": "56",
                        "gender_percentage": 1.21890929,
                        "total_percentage": 0.598736776,
                        "actual_value": 1753133
                    }, {
                        "age": "57",
                        "gender_percentage": 1.27259563,
                        "total_percentage": 0.625107883,
                        "actual_value": 1830349
                    }, {
                        "age": "58",
                        "gender_percentage": 0.948632315,
                        "total_percentage": 0.465974834,
                        "actual_value": 1364399
                    }, {
                        "age": "59",
                        "gender_percentage": 0.940540011,
                        "total_percentage": 0.461999837,
                        "actual_value": 1352760
                    }, {
                        "age": "60",
                        "gender_percentage": 0.91481067,
                        "total_percentage": 0.449361405,
                        "actual_value": 1315754
                    }, {
                        "age": "61",
                        "gender_percentage": 0.949533391,
                        "total_percentage": 0.466417448,
                        "actual_value": 1365695
                    }, {
                        "age": "62",
                        "gender_percentage": 0.833734669,
                        "total_percentage": 0.409536306,
                        "actual_value": 1199144
                    }, {
                        "age": "63",
                        "gender_percentage": 0.771004886,
                        "total_percentage": 0.378722997,
                        "actual_value": 1108921
                    }, {
                        "age": "64",
                        "gender_percentage": 0.744511438,
                        "total_percentage": 0.36570923,
                        "actual_value": 1070816
                    }, {
                        "age": "65",
                        "gender_percentage": 0.706271321,
                        "total_percentage": 0.346925417,
                        "actual_value": 1015816
                    }, {
                        "age": "66",
                        "gender_percentage": 0.685547263,
                        "total_percentage": 0.336745614,
                        "actual_value": 986009
                    }, {
                        "age": "67",
                        "gender_percentage": 0.641477962,
                        "total_percentage": 0.315098465,
                        "actual_value": 922625
                    }, {
                        "age": "68",
                        "gender_percentage": 0.622396839,
                        "total_percentage": 0.305725684,
                        "actual_value": 895181
                    }, {
                        "age": "69",
                        "gender_percentage": 0.6141919,
                        "total_percentage": 0.301695361,
                        "actual_value": 883380
                    }, {
                        "age": "70",
                        "gender_percentage": 0.553659881,
                        "total_percentage": 0.271961609,
                        "actual_value": 796318
                    }, {
                        "age": "71",
                        "gender_percentage": 0.55011676,
                        "total_percentage": 0.270221203,
                        "actual_value": 791222
                    }, {
                        "age": "72",
                        "gender_percentage": 0.534808894,
                        "total_percentage": 0.262701872,
                        "actual_value": 769205
                    }, {
                        "age": "73",
                        "gender_percentage": 0.523185289,
                        "total_percentage": 0.256992276,
                        "actual_value": 752487
                    }, {
                        "age": "74",
                        "gender_percentage": 0.517929011,
                        "total_percentage": 0.254410356,
                        "actual_value": 744927
                    }, {
                        "age": "75",
                        "gender_percentage": 0.47756622,
                        "total_percentage": 0.23458387,
                        "actual_value": 686874
                    }, {
                        "age": "76",
                        "gender_percentage": 0.466728971,
                        "total_percentage": 0.229260537,
                        "actual_value": 671287
                    }, {
                        "age": "77",
                        "gender_percentage": 0.440453839,
                        "total_percentage": 0.216354009,
                        "actual_value": 633496
                    }, {
                        "age": "78",
                        "gender_percentage": 0.409206796,
                        "total_percentage": 0.201005243,
                        "actual_value": 588554
                    }, {
                        "age": "79",
                        "gender_percentage": 0.389262837,
                        "total_percentage": 0.19120863,
                        "actual_value": 559869
                    }, {
                        "age": "80",
                        "gender_percentage": 0.354305113,
                        "total_percentage": 0.174037151,
                        "actual_value": 509590
                    }, {
                        "age": "81",
                        "gender_percentage": 0.323133855,
                        "total_percentage": 0.158725612,
                        "actual_value": 464757
                    }, {
                        "age": "82",
                        "gender_percentage": 0.295609314,
                        "total_percentage": 0.145205364,
                        "actual_value": 425169
                    }, {
                        "age": "83",
                        "gender_percentage": 0.265473321,
                        "total_percentage": 0.130402354,
                        "actual_value": 381825
                    }, {
                        "age": "84",
                        "gender_percentage": 0.22925993,
                        "total_percentage": 0.112614083,
                        "actual_value": 329740
                    }, {
                        "age": "85",
                        "gender_percentage": 0.187463482,
                        "total_percentage": 0.0920833748,
                        "actual_value": 269625
                    }, {
                        "age": "86",
                        "gender_percentage": 0.165718761,
                        "total_percentage": 0.0814022156,
                        "actual_value": 238350
                    }, {
                        "age": "87",
                        "gender_percentage": 0.134607993,
                        "total_percentage": 0.0661203883,
                        "actual_value": 193604
                    }, {
                        "age": "88",
                        "gender_percentage": 0.11145395,
                        "total_percentage": 0.0547469602,
                        "actual_value": 160302
                    }, {
                        "age": "89",
                        "gender_percentage": 0.0925000618,
                        "total_percentage": 0.0454366779,
                        "actual_value": 133041
                    }, {
                        "age": "90",
                        "gender_percentage": 0.0717391547,
                        "total_percentage": 0.0352387749,
                        "actual_value": 103181
                    }, {
                        "age": "91",
                        "gender_percentage": 0.0557255842,
                        "total_percentage": 0.0273727971,
                        "actual_value": 80149
                    }, {
                        "age": "92",
                        "gender_percentage": 0.0418193919,
                        "total_percentage": 0.020541978,
                        "actual_value": 60148
                    }, {
                        "age": "93",
                        "gender_percentage": 0.0303153742,
                        "total_percentage": 0.014891124,
                        "actual_value": 43602
                    }, {
                        "age": "94",
                        "gender_percentage": 0.0218490123,
                        "total_percentage": 0.0107323878,
                        "actual_value": 31425
                    }, {
                        "age": "95",
                        "gender_percentage": 0.0148030969,
                        "total_percentage": 0.00727138482,
                        "actual_value": 21291
                    }, {
                        "age": "96",
                        "gender_percentage": 0.0108678412,
                        "total_percentage": 0.00533835969,
                        "actual_value": 15631
                    }, {
                        "age": "97",
                        "gender_percentage": 0.00714255857,
                        "total_percentage": 0.00350847477,
                        "actual_value": 10273
                    }, {
                        "age": "98",
                        "gender_percentage": 0.00459646206,
                        "total_percentage": 0.00225781434,
                        "actual_value": 6611
                    }, {
                        "age": "99",
                        "gender_percentage": 0.00316141476,
                        "total_percentage": 0.00155290906,
                        "actual_value": 4547
                    }, { "age": "100", "gender_percentage": 0.00522777162, "total_percentage": 0.00256791802, "actual_value": 7519 }]
            }, {
                "date": 1057017600,
                "max_gender_percentage": 1.64002815,
                "max_total_percentage": 0.805174121,
                "max_actual_value": 2335874,
                "age_groups": [{
                        "age": "00",
                        "gender_percentage": 1.42754528,
                        "total_percentage": 0.700855361,
                        "actual_value": 2033237
                    }, {
                        "age": "01",
                        "gender_percentage": 1.41082325,
                        "total_percentage": 0.692645658,
                        "actual_value": 2009420
                    }, {
                        "age": "02",
                        "gender_percentage": 1.43476854,
                        "total_percentage": 0.704401627,
                        "actual_value": 2043525
                    }, {
                        "age": "03",
                        "gender_percentage": 1.38664768,
                        "total_percentage": 0.680776627,
                        "actual_value": 1974987
                    }, {
                        "age": "04",
                        "gender_percentage": 1.3704733,
                        "total_percentage": 0.672835789,
                        "actual_value": 1951950
                    }, {
                        "age": "05",
                        "gender_percentage": 1.37323608,
                        "total_percentage": 0.674192181,
                        "actual_value": 1955885
                    }, {
                        "age": "06",
                        "gender_percentage": 1.37658371,
                        "total_percentage": 0.675835707,
                        "actual_value": 1960653
                    }, {
                        "age": "07",
                        "gender_percentage": 1.40937692,
                        "total_percentage": 0.691935577,
                        "actual_value": 2007360
                    }, {
                        "age": "08",
                        "gender_percentage": 1.4353246,
                        "total_percentage": 0.704674629,
                        "actual_value": 2044317
                    }, {
                        "age": "09",
                        "gender_percentage": 1.45433198,
                        "total_percentage": 0.714006328,
                        "actual_value": 2071389
                    }, {
                        "age": "10",
                        "gender_percentage": 1.51331159,
                        "total_percentage": 0.742962448,
                        "actual_value": 2155393
                    }, {
                        "age": "11",
                        "gender_percentage": 1.52809229,
                        "total_percentage": 0.750219057,
                        "actual_value": 2176445
                    }, {
                        "age": "12",
                        "gender_percentage": 1.55769584,
                        "total_percentage": 0.764752958,
                        "actual_value": 2218609
                    }, {
                        "age": "13",
                        "gender_percentage": 1.58422486,
                        "total_percentage": 0.777777421,
                        "actual_value": 2256394
                    }, {
                        "age": "14",
                        "gender_percentage": 1.51909974,
                        "total_percentage": 0.745804149,
                        "actual_value": 2163637
                    }, {
                        "age": "15",
                        "gender_percentage": 1.50271683,
                        "total_percentage": 0.737760935,
                        "actual_value": 2140303
                    }, {
                        "age": "16",
                        "gender_percentage": 1.4930678,
                        "total_percentage": 0.733023733,
                        "actual_value": 2126560
                    }, {
                        "age": "17",
                        "gender_percentage": 1.50585032,
                        "total_percentage": 0.739299328,
                        "actual_value": 2144766
                    }, {
                        "age": "18",
                        "gender_percentage": 1.52327094,
                        "total_percentage": 0.747852007,
                        "actual_value": 2169578
                    }, {
                        "age": "19",
                        "gender_percentage": 1.49505616,
                        "total_percentage": 0.733999921,
                        "actual_value": 2129392
                    }, {
                        "age": "20",
                        "gender_percentage": 1.50687469,
                        "total_percentage": 0.739802245,
                        "actual_value": 2146225
                    }, {
                        "age": "21",
                        "gender_percentage": 1.49956087,
                        "total_percentage": 0.736211512,
                        "actual_value": 2135808
                    }, {
                        "age": "22",
                        "gender_percentage": 1.48701145,
                        "total_percentage": 0.730050357,
                        "actual_value": 2117934
                    }, {
                        "age": "23",
                        "gender_percentage": 1.47415591,
                        "total_percentage": 0.723738913,
                        "actual_value": 2099624
                    }, {
                        "age": "24",
                        "gender_percentage": 1.40306781,
                        "total_percentage": 0.688838109,
                        "actual_value": 1998374
                    }, {
                        "age": "25",
                        "gender_percentage": 1.36479678,
                        "total_percentage": 0.670048895,
                        "actual_value": 1943865
                    }, {
                        "age": "26",
                        "gender_percentage": 1.33506475,
                        "total_percentage": 0.655451914,
                        "actual_value": 1901518
                    }, {
                        "age": "27",
                        "gender_percentage": 1.30374105,
                        "total_percentage": 0.6400735,
                        "actual_value": 1856904
                    }, {
                        "age": "28",
                        "gender_percentage": 1.34269663,
                        "total_percentage": 0.659198796,
                        "actual_value": 1912388
                    }, {
                        "age": "29",
                        "gender_percentage": 1.29875751,
                        "total_percentage": 0.637626824,
                        "actual_value": 1849806
                    }, {
                        "age": "30",
                        "gender_percentage": 1.34713112,
                        "total_percentage": 0.661375916,
                        "actual_value": 1918704
                    }, {
                        "age": "31",
                        "gender_percentage": 1.40032819,
                        "total_percentage": 0.687493092,
                        "actual_value": 1994472
                    }, {
                        "age": "32",
                        "gender_percentage": 1.49174293,
                        "total_percentage": 0.732373285,
                        "actual_value": 2124673
                    }, {
                        "age": "33",
                        "gender_percentage": 1.532465,
                        "total_percentage": 0.752365844,
                        "actual_value": 2182673
                    }, {
                        "age": "34",
                        "gender_percentage": 1.44484023,
                        "total_percentage": 0.709346338,
                        "actual_value": 2057870
                    }, {
                        "age": "35",
                        "gender_percentage": 1.42119545,
                        "total_percentage": 0.6977379,
                        "actual_value": 2024193
                    }, {
                        "age": "36",
                        "gender_percentage": 1.41834631,
                        "total_percentage": 0.69633911,
                        "actual_value": 2020135
                    }, {
                        "age": "37",
                        "gender_percentage": 1.45857059,
                        "total_percentage": 0.716087278,
                        "actual_value": 2077426
                    }, {
                        "age": "38",
                        "gender_percentage": 1.56280365,
                        "total_percentage": 0.767260646,
                        "actual_value": 2225884
                    }, {
                        "age": "39",
                        "gender_percentage": 1.58424312,
                        "total_percentage": 0.777786383,
                        "actual_value": 2256420
                    }, {
                        "age": "40",
                        "gender_percentage": 1.5753313,
                        "total_percentage": 0.773411115,
                        "actual_value": 2243727
                    }, {
                        "age": "41",
                        "gender_percentage": 1.58718775,
                        "total_percentage": 0.779232052,
                        "actual_value": 2260614
                    }, {
                        "age": "42",
                        "gender_percentage": 1.60051018,
                        "total_percentage": 0.785772721,
                        "actual_value": 2279589
                    }, {
                        "age": "43",
                        "gender_percentage": 1.64002815,
                        "total_percentage": 0.805174121,
                        "actual_value": 2335874
                    }, {
                        "age": "44",
                        "gender_percentage": 1.56122883,
                        "total_percentage": 0.766487485,
                        "actual_value": 2223641
                    }, {
                        "age": "45",
                        "gender_percentage": 1.56177156,
                        "total_percentage": 0.766753938,
                        "actual_value": 2224414
                    }, {
                        "age": "46",
                        "gender_percentage": 1.54483398,
                        "total_percentage": 0.758438412,
                        "actual_value": 2200290
                    }, {
                        "age": "47",
                        "gender_percentage": 1.48654946,
                        "total_percentage": 0.729823545,
                        "actual_value": 2117276
                    }, {
                        "age": "48",
                        "gender_percentage": 1.49622236,
                        "total_percentage": 0.734572467,
                        "actual_value": 2131053
                    }, {
                        "age": "49",
                        "gender_percentage": 1.42694217,
                        "total_percentage": 0.700559264,
                        "actual_value": 2032378
                    }, {
                        "age": "50",
                        "gender_percentage": 1.37406526,
                        "total_percentage": 0.674599271,
                        "actual_value": 1957066
                    }, {
                        "age": "51",
                        "gender_percentage": 1.33672663,
                        "total_percentage": 0.656267817,
                        "actual_value": 1903885
                    }, {
                        "age": "52",
                        "gender_percentage": 1.29669964,
                        "total_percentage": 0.636616511,
                        "actual_value": 1846875
                    }, {
                        "age": "53",
                        "gender_percentage": 1.30000656,
                        "total_percentage": 0.638240044,
                        "actual_value": 1851585
                    }, {
                        "age": "54",
                        "gender_percentage": 1.24849173,
                        "total_percentage": 0.612948768,
                        "actual_value": 1778213
                    }, {
                        "age": "55",
                        "gender_percentage": 1.23102898,
                        "total_percentage": 0.604375407,
                        "actual_value": 1753341
                    }, {
                        "age": "56",
                        "gender_percentage": 1.29505251,
                        "total_percentage": 0.635807846,
                        "actual_value": 1844529
                    }, {
                        "age": "57",
                        "gender_percentage": 0.963868308,
                        "total_percentage": 0.473212499,
                        "actual_value": 1372827
                    }, {
                        "age": "58",
                        "gender_percentage": 0.958722583,
                        "total_percentage": 0.470686198,
                        "actual_value": 1365498
                    }, {
                        "age": "59",
                        "gender_percentage": 0.938296952,
                        "total_percentage": 0.460658206,
                        "actual_value": 1336406
                    }, {
                        "age": "60",
                        "gender_percentage": 0.960615457,
                        "total_percentage": 0.471615507,
                        "actual_value": 1368194
                    }, {
                        "age": "61",
                        "gender_percentage": 0.851021826,
                        "total_percentage": 0.41781036,
                        "actual_value": 1212101
                    }, {
                        "age": "62",
                        "gender_percentage": 0.786022376,
                        "total_percentage": 0.385898789,
                        "actual_value": 1119523
                    }, {
                        "age": "63",
                        "gender_percentage": 0.76361681,
                        "total_percentage": 0.374898745,
                        "actual_value": 1087611
                    }, {
                        "age": "64",
                        "gender_percentage": 0.722813995,
                        "total_percentage": 0.354866545,
                        "actual_value": 1029496
                    }, {
                        "age": "65",
                        "gender_percentage": 0.703440819,
                        "total_percentage": 0.345355258,
                        "actual_value": 1001903
                    }, {
                        "age": "66",
                        "gender_percentage": 0.6580666,
                        "total_percentage": 0.323078721,
                        "actual_value": 937277
                    }, {
                        "age": "67",
                        "gender_percentage": 0.641124111,
                        "total_percentage": 0.314760782,
                        "actual_value": 913146
                    }, {
                        "age": "68",
                        "gender_percentage": 0.634996843,
                        "total_percentage": 0.311752592,
                        "actual_value": 904419
                    }, {
                        "age": "69",
                        "gender_percentage": 0.575968092,
                        "total_percentage": 0.282772343,
                        "actual_value": 820345
                    }, {
                        "age": "70",
                        "gender_percentage": 0.567419967,
                        "total_percentage": 0.278575629,
                        "actual_value": 808170
                    }, {
                        "age": "71",
                        "gender_percentage": 0.558407751,
                        "total_percentage": 0.274151069,
                        "actual_value": 795334
                    }, {
                        "age": "72",
                        "gender_percentage": 0.545474982,
                        "total_percentage": 0.267801708,
                        "actual_value": 776914
                    }, {
                        "age": "73",
                        "gender_percentage": 0.543818015,
                        "total_percentage": 0.266988218,
                        "actual_value": 774554
                    }, {
                        "age": "74",
                        "gender_percentage": 0.505972464,
                        "total_percentage": 0.248407892,
                        "actual_value": 720651
                    }, {
                        "age": "75",
                        "gender_percentage": 0.490222851,
                        "total_percentage": 0.240675597,
                        "actual_value": 698219
                    }, {
                        "age": "76",
                        "gender_percentage": 0.468856401,
                        "total_percentage": 0.230185708,
                        "actual_value": 667787
                    }, {
                        "age": "77",
                        "gender_percentage": 0.436499203,
                        "total_percentage": 0.214299896,
                        "actual_value": 621701
                    }, {
                        "age": "78",
                        "gender_percentage": 0.418220609,
                        "total_percentage": 0.205325995,
                        "actual_value": 595667
                    }, {
                        "age": "79",
                        "gender_percentage": 0.385094606,
                        "total_percentage": 0.189062738,
                        "actual_value": 548486
                    }, {
                        "age": "80",
                        "gender_percentage": 0.350634605,
                        "total_percentage": 0.172144551,
                        "actual_value": 499405
                    }, {
                        "age": "81",
                        "gender_percentage": 0.325964751,
                        "total_percentage": 0.160032852,
                        "actual_value": 464268
                    }, {
                        "age": "82",
                        "gender_percentage": 0.293144164,
                        "total_percentage": 0.143919539,
                        "actual_value": 417522
                    }, {
                        "age": "83",
                        "gender_percentage": 0.257777044,
                        "total_percentage": 0.126556001,
                        "actual_value": 367149
                    }, {
                        "age": "84",
                        "gender_percentage": 0.21279179,
                        "total_percentage": 0.104470428,
                        "actual_value": 303077
                    }, {
                        "age": "85",
                        "gender_percentage": 0.189591442,
                        "total_percentage": 0.0930801847,
                        "actual_value": 270033
                    }, {
                        "age": "86",
                        "gender_percentage": 0.156442972,
                        "total_percentage": 0.0768058969,
                        "actual_value": 222820
                    }, {
                        "age": "87",
                        "gender_percentage": 0.132374121,
                        "total_percentage": 0.0649892604,
                        "actual_value": 188539
                    }, {
                        "age": "88",
                        "gender_percentage": 0.111162835,
                        "total_percentage": 0.05457555,
                        "actual_value": 158328
                    }, {
                        "age": "89",
                        "gender_percentage": 0.0895597752,
                        "total_percentage": 0.0439694974,
                        "actual_value": 127559
                    }, {
                        "age": "90",
                        "gender_percentage": 0.0697765707,
                        "total_percentage": 0.0342569053,
                        "actual_value": 99382
                    }, {
                        "age": "91",
                        "gender_percentage": 0.0536941601,
                        "total_percentage": 0.0263612233,
                        "actual_value": 76476
                    }, {
                        "age": "92",
                        "gender_percentage": 0.0404868683,
                        "total_percentage": 0.0198770849,
                        "actual_value": 57665
                    }, {
                        "age": "93",
                        "gender_percentage": 0.0297439641,
                        "total_percentage": 0.0146028409,
                        "actual_value": 42364
                    }, {
                        "age": "94",
                        "gender_percentage": 0.0208012564,
                        "total_percentage": 0.010212406,
                        "actual_value": 29627
                    }, {
                        "age": "95",
                        "gender_percentage": 0.0151837165,
                        "total_percentage": 0.00745446696,
                        "actual_value": 21626
                    }, {
                        "age": "96",
                        "gender_percentage": 0.0104501266,
                        "total_percentage": 0.00513050431,
                        "actual_value": 14884
                    }, {
                        "age": "97",
                        "gender_percentage": 0.00700349452,
                        "total_percentage": 0.00343837547,
                        "actual_value": 9975
                    }, {
                        "age": "98",
                        "gender_percentage": 0.00469988896,
                        "total_percentage": 0.00230741708,
                        "actual_value": 6694
                    }, {
                        "age": "99",
                        "gender_percentage": 0.00312296177,
                        "total_percentage": 0.00153322246,
                        "actual_value": 4448
                    }, { "age": "100", "gender_percentage": 0.00546307678, "total_percentage": 0.00268210521, "actual_value": 7781 }]
            }, {
                "date": 1025481600,
                "max_gender_percentage": 1.65628814,
                "max_total_percentage": 0.813275421,
                "max_actual_value": 2339185,
                "age_groups": [{
                        "age": "00",
                        "gender_percentage": 1.42923884,
                        "total_percentage": 0.701789012,
                        "actual_value": 2018522
                    }, {
                        "age": "01",
                        "gender_percentage": 1.447618,
                        "total_percentage": 0.710813604,
                        "actual_value": 2044479
                    }, {
                        "age": "02",
                        "gender_percentage": 1.39695262,
                        "total_percentage": 0.685935741,
                        "actual_value": 1972924
                    }, {
                        "age": "03",
                        "gender_percentage": 1.37710777,
                        "total_percentage": 0.676191463,
                        "actual_value": 1944897
                    }, {
                        "age": "04",
                        "gender_percentage": 1.38123081,
                        "total_percentage": 0.678215973,
                        "actual_value": 1950720
                    }, {
                        "age": "05",
                        "gender_percentage": 1.38835817,
                        "total_percentage": 0.681715666,
                        "actual_value": 1960786
                    }, {
                        "age": "06",
                        "gender_percentage": 1.41755865,
                        "total_percentage": 0.69605377,
                        "actual_value": 2002026
                    }, {
                        "age": "07",
                        "gender_percentage": 1.44395945,
                        "total_percentage": 0.709017169,
                        "actual_value": 2039312
                    }, {
                        "age": "08",
                        "gender_percentage": 1.4578672,
                        "total_percentage": 0.715846195,
                        "actual_value": 2058954
                    }, {
                        "age": "09",
                        "gender_percentage": 1.49514667,
                        "total_percentage": 0.734151267,
                        "actual_value": 2111604
                    }, {
                        "age": "10",
                        "gender_percentage": 1.53731885,
                        "total_percentage": 0.754858772,
                        "actual_value": 2171164
                    }, {
                        "age": "11",
                        "gender_percentage": 1.557585,
                        "total_percentage": 0.764809917,
                        "actual_value": 2199786
                    }, {
                        "age": "12",
                        "gender_percentage": 1.58991228,
                        "total_percentage": 0.780683353,
                        "actual_value": 2245442
                    }, {
                        "age": "13",
                        "gender_percentage": 1.52668446,
                        "total_percentage": 0.749637046,
                        "actual_value": 2156145
                    }, {
                        "age": "14",
                        "gender_percentage": 1.4992945,
                        "total_percentage": 0.736187946,
                        "actual_value": 2117462
                    }, {
                        "age": "15",
                        "gender_percentage": 1.48807525,
                        "total_percentage": 0.73067904,
                        "actual_value": 2101617
                    }, {
                        "age": "16",
                        "gender_percentage": 1.50296013,
                        "total_percentage": 0.737987858,
                        "actual_value": 2122639
                    }, {
                        "age": "17",
                        "gender_percentage": 1.51621364,
                        "total_percentage": 0.744495633,
                        "actual_value": 2141357
                    }, {
                        "age": "18",
                        "gender_percentage": 1.49605157,
                        "total_percentage": 0.734595596,
                        "actual_value": 2112882
                    }, {
                        "age": "19",
                        "gender_percentage": 1.52233059,
                        "total_percentage": 0.747499194,
                        "actual_value": 2149996
                    }, {
                        "age": "20",
                        "gender_percentage": 1.51545743,
                        "total_percentage": 0.744124316,
                        "actual_value": 2140289
                    }, {
                        "age": "21",
                        "gender_percentage": 1.50869331,
                        "total_percentage": 0.74080298,
                        "actual_value": 2130736
                    }, {
                        "age": "22",
                        "gender_percentage": 1.49319596,
                        "total_percentage": 0.733193424,
                        "actual_value": 2108849
                    }, {
                        "age": "23",
                        "gender_percentage": 1.41962406,
                        "total_percentage": 0.697067937,
                        "actual_value": 2004943
                    }, {
                        "age": "24",
                        "gender_percentage": 1.37555428,
                        "total_percentage": 0.675428665,
                        "actual_value": 1942703
                    }, {
                        "age": "25",
                        "gender_percentage": 1.3571737,
                        "total_percentage": 0.666403377,
                        "actual_value": 1916744
                    }, {
                        "age": "26",
                        "gender_percentage": 1.31472255,
                        "total_percentage": 0.645558889,
                        "actual_value": 1856790
                    }, {
                        "age": "27",
                        "gender_percentage": 1.35576395,
                        "total_percentage": 0.665711157,
                        "actual_value": 1914753
                    }, {
                        "age": "28",
                        "gender_percentage": 1.31498807,
                        "total_percentage": 0.645689267,
                        "actual_value": 1857165
                    }, {
                        "age": "29",
                        "gender_percentage": 1.34340756,
                        "total_percentage": 0.659643886,
                        "actual_value": 1897302
                    }, {
                        "age": "30",
                        "gender_percentage": 1.42495011,
                        "total_percentage": 0.699683146,
                        "actual_value": 2012465
                    }, {
                        "age": "31",
                        "gender_percentage": 1.49600413,
                        "total_percentage": 0.734572302,
                        "actual_value": 2112815
                    }, {
                        "age": "32",
                        "gender_percentage": 1.54706674,
                        "total_percentage": 0.75964521,
                        "actual_value": 2184931
                    }, {
                        "age": "33",
                        "gender_percentage": 1.45762859,
                        "total_percentage": 0.715729029,
                        "actual_value": 2058617
                    }, {
                        "age": "34",
                        "gender_percentage": 1.42977909,
                        "total_percentage": 0.702054288,
                        "actual_value": 2019285
                    }, {
                        "age": "35",
                        "gender_percentage": 1.43404021,
                        "total_percentage": 0.704146594,
                        "actual_value": 2025303
                    }, {
                        "age": "36",
                        "gender_percentage": 1.47594828,
                        "total_percentage": 0.724724416,
                        "actual_value": 2084490
                    }, {
                        "age": "37",
                        "gender_percentage": 1.57828944,
                        "total_percentage": 0.774976273,
                        "actual_value": 2229027
                    }, {
                        "age": "38",
                        "gender_percentage": 1.59886077,
                        "total_percentage": 0.785077265,
                        "actual_value": 2258080
                    }, {
                        "age": "39",
                        "gender_percentage": 1.59375706,
                        "total_percentage": 0.782571226,
                        "actual_value": 2250872
                    }, {
                        "age": "40",
                        "gender_percentage": 1.60070102,
                        "total_percentage": 0.785980872,
                        "actual_value": 2260679
                    }, {
                        "age": "41",
                        "gender_percentage": 1.61742686,
                        "total_percentage": 0.794193644,
                        "actual_value": 2284301
                    }, {
                        "age": "42",
                        "gender_percentage": 1.65628814,
                        "total_percentage": 0.813275421,
                        "actual_value": 2339185
                    }, {
                        "age": "43",
                        "gender_percentage": 1.58292866,
                        "total_percentage": 0.777254237,
                        "actual_value": 2235579
                    }, {
                        "age": "44",
                        "gender_percentage": 1.58158264,
                        "total_percentage": 0.776593308,
                        "actual_value": 2233678
                    }, {
                        "age": "45",
                        "gender_percentage": 1.55842193,
                        "total_percentage": 0.765220869,
                        "actual_value": 2200968
                    }, {
                        "age": "46",
                        "gender_percentage": 1.50122467,
                        "total_percentage": 0.737135707,
                        "actual_value": 2120188
                    }, {
                        "age": "47",
                        "gender_percentage": 1.51561179,
                        "total_percentage": 0.744200109,
                        "actual_value": 2140507
                    }, {
                        "age": "48",
                        "gender_percentage": 1.44115977,
                        "total_percentage": 0.707642463,
                        "actual_value": 2035358
                    }, {
                        "age": "49",
                        "gender_percentage": 1.39451123,
                        "total_percentage": 0.684736959,
                        "actual_value": 1969476
                    }, {
                        "age": "50",
                        "gender_percentage": 1.34736067,
                        "total_percentage": 0.661584954,
                        "actual_value": 1902885
                    }, {
                        "age": "51",
                        "gender_percentage": 1.31538529,
                        "total_percentage": 0.645884312,
                        "actual_value": 1857726
                    }, {
                        "age": "52",
                        "gender_percentage": 1.31294814,
                        "total_percentage": 0.644687616,
                        "actual_value": 1854284
                    }, {
                        "age": "53",
                        "gender_percentage": 1.26245907,
                        "total_percentage": 0.619896325,
                        "actual_value": 1782978
                    }, {
                        "age": "54",
                        "gender_percentage": 1.25342632,
                        "total_percentage": 0.615461039,
                        "actual_value": 1770221
                    }, {
                        "age": "55",
                        "gender_percentage": 1.30832874,
                        "total_percentage": 0.642419386,
                        "actual_value": 1847760
                    }, {
                        "age": "56",
                        "gender_percentage": 0.979159192,
                        "total_percentage": 0.480789595,
                        "actual_value": 1382872
                    }, {
                        "age": "57",
                        "gender_percentage": 0.972909128,
                        "total_percentage": 0.47772067,
                        "actual_value": 1374045
                    }, {
                        "age": "58",
                        "gender_percentage": 0.95495409,
                        "total_percentage": 0.468904336,
                        "actual_value": 1348687
                    }, {
                        "age": "59",
                        "gender_percentage": 0.98258692,
                        "total_percentage": 0.482472688,
                        "actual_value": 1387713
                    }, {
                        "age": "60",
                        "gender_percentage": 0.861948723,
                        "total_percentage": 0.42323657,
                        "actual_value": 1217335
                    }, {
                        "age": "61",
                        "gender_percentage": 0.801269929,
                        "total_percentage": 0.393441892,
                        "actual_value": 1131638
                    }, {
                        "age": "62",
                        "gender_percentage": 0.777874143,
                        "total_percentage": 0.381954024,
                        "actual_value": 1098596
                    }, {
                        "age": "63",
                        "gender_percentage": 0.740135143,
                        "total_percentage": 0.363423311,
                        "actual_value": 1045297
                    }, {
                        "age": "64",
                        "gender_percentage": 0.71920058,
                        "total_percentage": 0.353143961,
                        "actual_value": 1015731
                    }, {
                        "age": "65",
                        "gender_percentage": 0.674274751,
                        "total_percentage": 0.33108435,
                        "actual_value": 952282
                    }, {
                        "age": "66",
                        "gender_percentage": 0.657328702,
                        "total_percentage": 0.322763451,
                        "actual_value": 928349
                    }, {
                        "age": "67",
                        "gender_percentage": 0.653157508,
                        "total_percentage": 0.3207153,
                        "actual_value": 922458
                    }, {
                        "age": "68",
                        "gender_percentage": 0.594797617,
                        "total_percentage": 0.292059256,
                        "actual_value": 840036
                    }, {
                        "age": "69",
                        "gender_percentage": 0.588783338,
                        "total_percentage": 0.289106108,
                        "actual_value": 831542
                    }, {
                        "age": "70",
                        "gender_percentage": 0.576196119,
                        "total_percentage": 0.282925495,
                        "actual_value": 813765
                    }, {
                        "age": "71",
                        "gender_percentage": 0.56832955,
                        "total_percentage": 0.279062829,
                        "actual_value": 802655
                    }, {
                        "age": "72",
                        "gender_percentage": 0.566542401,
                        "total_percentage": 0.278185298,
                        "actual_value": 800131
                    }, {
                        "age": "73",
                        "gender_percentage": 0.530417783,
                        "total_percentage": 0.260447283,
                        "actual_value": 749112
                    }, {
                        "age": "74",
                        "gender_percentage": 0.517980673,
                        "total_percentage": 0.254340377,
                        "actual_value": 731547
                    }, {
                        "age": "75",
                        "gender_percentage": 0.492865004,
                        "total_percentage": 0.242008008,
                        "actual_value": 696076
                    }, {
                        "age": "76",
                        "gender_percentage": 0.464004394,
                        "total_percentage": 0.227836788,
                        "actual_value": 655316
                    }, {
                        "age": "77",
                        "gender_percentage": 0.445796579,
                        "total_percentage": 0.218896333,
                        "actual_value": 629601
                    }, {
                        "age": "78",
                        "gender_percentage": 0.413346803,
                        "total_percentage": 0.20296275,
                        "actual_value": 583772
                    }, {
                        "age": "79",
                        "gender_percentage": 0.380232156,
                        "total_percentage": 0.1867027,
                        "actual_value": 537004
                    }, {
                        "age": "80",
                        "gender_percentage": 0.353997749,
                        "total_percentage": 0.173821005,
                        "actual_value": 499953
                    }, {
                        "age": "81",
                        "gender_percentage": 0.322611482,
                        "total_percentage": 0.158409629,
                        "actual_value": 455626
                    }, {
                        "age": "82",
                        "gender_percentage": 0.284992853,
                        "total_percentage": 0.13993802,
                        "actual_value": 402497
                    }, {
                        "age": "83",
                        "gender_percentage": 0.238745072,
                        "total_percentage": 0.1172293,
                        "actual_value": 337181
                    }, {
                        "age": "84",
                        "gender_percentage": 0.215062521,
                        "total_percentage": 0.105600624,
                        "actual_value": 303734
                    }, {
                        "age": "85",
                        "gender_percentage": 0.179326629,
                        "total_percentage": 0.0880534829,
                        "actual_value": 253264
                    }, {
                        "age": "86",
                        "gender_percentage": 0.153847724,
                        "total_percentage": 0.0755427568,
                        "actual_value": 217280
                    }, {
                        "age": "87",
                        "gender_percentage": 0.13192683,
                        "total_percentage": 0.064779096,
                        "actual_value": 186321
                    }, {
                        "age": "88",
                        "gender_percentage": 0.107757132,
                        "total_percentage": 0.0529112205,
                        "actual_value": 152186
                    }, {
                        "age": "89",
                        "gender_percentage": 0.0868409789,
                        "total_percentage": 0.0426409101,
                        "actual_value": 122646
                    }, {
                        "age": "90",
                        "gender_percentage": 0.0674188367,
                        "total_percentage": 0.0331041933,
                        "actual_value": 95216
                    }, {
                        "age": "91",
                        "gender_percentage": 0.0520722997,
                        "total_percentage": 0.0255686921,
                        "actual_value": 73542
                    }, {
                        "age": "92",
                        "gender_percentage": 0.0397031637,
                        "total_percentage": 0.0194951629,
                        "actual_value": 56073
                    }, {
                        "age": "93",
                        "gender_percentage": 0.0283932885,
                        "total_percentage": 0.0139417551,
                        "actual_value": 40100
                    }, {
                        "age": "94",
                        "gender_percentage": 0.0213494871,
                        "total_percentage": 0.0104830873,
                        "actual_value": 30152
                    }, {
                        "age": "95",
                        "gender_percentage": 0.0146717539,
                        "total_percentage": 0.00720416727,
                        "actual_value": 20721
                    }, {
                        "age": "96",
                        "gender_percentage": 0.010280353,
                        "total_percentage": 0.00504788883,
                        "actual_value": 14519
                    }, {
                        "age": "97",
                        "gender_percentage": 0.0071209801,
                        "total_percentage": 0.00349656436,
                        "actual_value": 10057
                    }, {
                        "age": "98",
                        "gender_percentage": 0.00467320957,
                        "total_percentage": 0.00229465296,
                        "actual_value": 6600
                    }, {
                        "age": "99",
                        "gender_percentage": 0.00317919863,
                        "total_percentage": 0.00156105936,
                        "actual_value": 4490
                    }, { "age": "100", "gender_percentage": 0.00580256855, "total_percentage": 0.00284919409, "actual_value": 8195 }]
            }, {
                "date": 993945600,
                "max_gender_percentage": 1.67416829,
                "max_total_percentage": 0.821850577,
                "max_actual_value": 2342019,
                "age_groups": [{
                        "age": "00",
                        "gender_percentage": 1.46524493,
                        "total_percentage": 0.719289931,
                        "actual_value": 2049753
                    }, {
                        "age": "01",
                        "gender_percentage": 1.41024016,
                        "total_percentage": 0.692288042,
                        "actual_value": 1972806
                    }, {
                        "age": "02",
                        "gender_percentage": 1.38887288,
                        "total_percentage": 0.68179883,
                        "actual_value": 1942915
                    }, {
                        "age": "03",
                        "gender_percentage": 1.39055419,
                        "total_percentage": 0.682624183,
                        "actual_value": 1945267
                    }, {
                        "age": "04",
                        "gender_percentage": 1.39825158,
                        "total_percentage": 0.68640284,
                        "actual_value": 1956035
                    }, {
                        "age": "05",
                        "gender_percentage": 1.4302664,
                        "total_percentage": 0.702118938,
                        "actual_value": 2000821
                    }, {
                        "age": "06",
                        "gender_percentage": 1.45439009,
                        "total_percentage": 0.71396128,
                        "actual_value": 2034568
                    }, {
                        "age": "07",
                        "gender_percentage": 1.46831446,
                        "total_percentage": 0.720796762,
                        "actual_value": 2054047
                    }, {
                        "age": "08",
                        "gender_percentage": 1.50213424,
                        "total_percentage": 0.737398921,
                        "actual_value": 2101358
                    }, {
                        "age": "09",
                        "gender_percentage": 1.5285204,
                        "total_percentage": 0.750351911,
                        "actual_value": 2138270
                    }, {
                        "age": "10",
                        "gender_percentage": 1.5656692,
                        "total_percentage": 0.768588284,
                        "actual_value": 2190238
                    }, {
                        "age": "11",
                        "gender_percentage": 1.59237347,
                        "total_percentage": 0.781697431,
                        "actual_value": 2227595
                    }, {
                        "age": "12",
                        "gender_percentage": 1.53198309,
                        "total_percentage": 0.752051745,
                        "actual_value": 2143114
                    }, {
                        "age": "13",
                        "gender_percentage": 1.50600152,
                        "total_percentage": 0.739297374,
                        "actual_value": 2106768
                    }, {
                        "age": "14",
                        "gender_percentage": 1.48650498,
                        "total_percentage": 0.729726507,
                        "actual_value": 2079494
                    }, {
                        "age": "15",
                        "gender_percentage": 1.49862152,
                        "total_percentage": 0.735674523,
                        "actual_value": 2096444
                    }, {
                        "age": "16",
                        "gender_percentage": 1.51220848,
                        "total_percentage": 0.742344372,
                        "actual_value": 2115451
                    }, {
                        "age": "17",
                        "gender_percentage": 1.48786604,
                        "total_percentage": 0.730394649,
                        "actual_value": 2081398
                    }, {
                        "age": "18",
                        "gender_percentage": 1.51893083,
                        "total_percentage": 0.745644381,
                        "actual_value": 2124855
                    }, {
                        "age": "19",
                        "gender_percentage": 1.52206469,
                        "total_percentage": 0.747182794,
                        "actual_value": 2129239
                    }, {
                        "age": "20",
                        "gender_percentage": 1.51712157,
                        "total_percentage": 0.744756214,
                        "actual_value": 2122324
                    }, {
                        "age": "21",
                        "gender_percentage": 1.5067857,
                        "total_percentage": 0.739682328,
                        "actual_value": 2107865
                    }, {
                        "age": "22",
                        "gender_percentage": 1.43152737,
                        "total_percentage": 0.702737953,
                        "actual_value": 2002585
                    }, {
                        "age": "23",
                        "gender_percentage": 1.38571115,
                        "total_percentage": 0.680246731,
                        "actual_value": 1938492
                    }, {
                        "age": "24",
                        "gender_percentage": 1.36467913,
                        "total_percentage": 0.669922097,
                        "actual_value": 1909070
                    }, {
                        "age": "25",
                        "gender_percentage": 1.32929028,
                        "total_percentage": 0.652549679,
                        "actual_value": 1859564
                    }, {
                        "age": "26",
                        "gender_percentage": 1.3653325,
                        "total_percentage": 0.670242834,
                        "actual_value": 1909984
                    }, {
                        "age": "27",
                        "gender_percentage": 1.32517709,
                        "total_percentage": 0.650530511,
                        "actual_value": 1853810
                    }, {
                        "age": "28",
                        "gender_percentage": 1.35718547,
                        "total_percentage": 0.666243451,
                        "actual_value": 1898587
                    }, {
                        "age": "29",
                        "gender_percentage": 1.42559706,
                        "total_percentage": 0.699826758,
                        "actual_value": 1994289
                    }, {
                        "age": "30",
                        "gender_percentage": 1.51673484,
                        "total_percentage": 0.744566369,
                        "actual_value": 2121783
                    }, {
                        "age": "31",
                        "gender_percentage": 1.55444979,
                        "total_percentage": 0.763080666,
                        "actual_value": 2174543
                    }, {
                        "age": "32",
                        "gender_percentage": 1.46966407,
                        "total_percentage": 0.72145929,
                        "actual_value": 2055935
                    }, {
                        "age": "33",
                        "gender_percentage": 1.44158731,
                        "total_percentage": 0.707676385,
                        "actual_value": 2016658
                    }, {
                        "age": "34",
                        "gender_percentage": 1.44349451,
                        "total_percentage": 0.708612628,
                        "actual_value": 2019326
                    }, {
                        "age": "35",
                        "gender_percentage": 1.49071753,
                        "total_percentage": 0.731794451,
                        "actual_value": 2085387
                    }, {
                        "age": "36",
                        "gender_percentage": 1.59587404,
                        "total_percentage": 0.783415864,
                        "actual_value": 2232492
                    }, {
                        "age": "37",
                        "gender_percentage": 1.61561005,
                        "total_percentage": 0.793104287,
                        "actual_value": 2260101
                    }, {
                        "age": "38",
                        "gender_percentage": 1.6093695,
                        "total_percentage": 0.790040796,
                        "actual_value": 2251371
                    }, {
                        "age": "39",
                        "gender_percentage": 1.61915279,
                        "total_percentage": 0.794843424,
                        "actual_value": 2265057
                    }, {
                        "age": "40",
                        "gender_percentage": 1.63305357,
                        "total_percentage": 0.801667325,
                        "actual_value": 2284503
                    }, {
                        "age": "41",
                        "gender_percentage": 1.67416829,
                        "total_percentage": 0.821850577,
                        "actual_value": 2342019
                    }, {
                        "age": "42",
                        "gender_percentage": 1.59962552,
                        "total_percentage": 0.785257468,
                        "actual_value": 2237740
                    }, {
                        "age": "43",
                        "gender_percentage": 1.60273006,
                        "total_percentage": 0.786781493,
                        "actual_value": 2242083
                    }, {
                        "age": "44",
                        "gender_percentage": 1.57877364,
                        "total_percentage": 0.775021265,
                        "actual_value": 2208570
                    }, {
                        "age": "45",
                        "gender_percentage": 1.51684993,
                        "total_percentage": 0.744622866,
                        "actual_value": 2121944
                    }, {
                        "age": "46",
                        "gender_percentage": 1.53212391,
                        "total_percentage": 0.752120876,
                        "actual_value": 2143311
                    }, {
                        "age": "47",
                        "gender_percentage": 1.46007235,
                        "total_percentage": 0.716750707,
                        "actual_value": 2042517
                    }, {
                        "age": "48",
                        "gender_percentage": 1.41026947,
                        "total_percentage": 0.69230243,
                        "actual_value": 1972847
                    }, {
                        "age": "49",
                        "gender_percentage": 1.36707027,
                        "total_percentage": 0.671095909,
                        "actual_value": 1912415
                    }, {
                        "age": "50",
                        "gender_percentage": 1.32886066,
                        "total_percentage": 0.652338778,
                        "actual_value": 1858963
                    }, {
                        "age": "51",
                        "gender_percentage": 1.3317386,
                        "total_percentage": 0.653751564,
                        "actual_value": 1862989
                    }, {
                        "age": "52",
                        "gender_percentage": 1.2773107,
                        "total_percentage": 0.627032864,
                        "actual_value": 1786849
                    }, {
                        "age": "53",
                        "gender_percentage": 1.26903786,
                        "total_percentage": 0.62297172,
                        "actual_value": 1775276
                    }, {
                        "age": "54",
                        "gender_percentage": 1.33108595,
                        "total_percentage": 0.653431178,
                        "actual_value": 1862076
                    }, {
                        "age": "55",
                        "gender_percentage": 0.991378375,
                        "total_percentage": 0.486668451,
                        "actual_value": 1386854
                    }, {
                        "age": "56",
                        "gender_percentage": 0.988629816,
                        "total_percentage": 0.485319182,
                        "actual_value": 1383009
                    }, {
                        "age": "57",
                        "gender_percentage": 0.970384246,
                        "total_percentage": 0.476362416,
                        "actual_value": 1357485
                    }, {
                        "age": "58",
                        "gender_percentage": 1.00059266,
                        "total_percentage": 0.491191751,
                        "actual_value": 1399744
                    }, {
                        "age": "59",
                        "gender_percentage": 0.881030706,
                        "total_percentage": 0.432498691,
                        "actual_value": 1232487
                    }, {
                        "age": "60",
                        "gender_percentage": 0.814119561,
                        "total_percentage": 0.399651955,
                        "actual_value": 1138884
                    }, {
                        "age": "61",
                        "gender_percentage": 0.79358007,
                        "total_percentage": 0.389569102,
                        "actual_value": 1110151
                    }, {
                        "age": "62",
                        "gender_percentage": 0.755229632,
                        "total_percentage": 0.370742841,
                        "actual_value": 1056502
                    }, {
                        "age": "63",
                        "gender_percentage": 0.736578033,
                        "total_percentage": 0.361586756,
                        "actual_value": 1030410
                    }, {
                        "age": "64",
                        "gender_percentage": 0.690680317,
                        "total_percentage": 0.33905553,
                        "actual_value": 966203
                    }, {
                        "age": "65",
                        "gender_percentage": 0.67454138,
                        "total_percentage": 0.331132912,
                        "actual_value": 943626
                    }, {
                        "age": "66",
                        "gender_percentage": 0.670804912,
                        "total_percentage": 0.329298677,
                        "actual_value": 938399
                    }, {
                        "age": "67",
                        "gender_percentage": 0.612917904,
                        "total_percentage": 0.300881898,
                        "actual_value": 857420
                    }, {
                        "age": "68",
                        "gender_percentage": 0.608602416,
                        "total_percentage": 0.298763421,
                        "actual_value": 851383
                    }, {
                        "age": "69",
                        "gender_percentage": 0.598168615,
                        "total_percentage": 0.29364146,
                        "actual_value": 836787
                    }, {
                        "age": "70",
                        "gender_percentage": 0.588300252,
                        "total_percentage": 0.288797073,
                        "actual_value": 822982
                    }, {
                        "age": "71",
                        "gender_percentage": 0.590721414,
                        "total_percentage": 0.289985623,
                        "actual_value": 826369
                    }, {
                        "age": "72",
                        "gender_percentage": 0.5538028,
                        "total_percentage": 0.271862245,
                        "actual_value": 774723
                    }, {
                        "age": "73",
                        "gender_percentage": 0.543730708,
                        "total_percentage": 0.266917847,
                        "actual_value": 760633
                    }, {
                        "age": "74",
                        "gender_percentage": 0.52092589,
                        "total_percentage": 0.255722944,
                        "actual_value": 728731
                    }, {
                        "age": "75",
                        "gender_percentage": 0.489738861,
                        "total_percentage": 0.240413206,
                        "actual_value": 685103
                    }, {
                        "age": "76",
                        "gender_percentage": 0.47457568,
                        "total_percentage": 0.232969588,
                        "actual_value": 663891
                    }, {
                        "age": "77",
                        "gender_percentage": 0.441828156,
                        "total_percentage": 0.216893802,
                        "actual_value": 618080
                    }, {
                        "age": "78",
                        "gender_percentage": 0.409052754,
                        "total_percentage": 0.20080433,
                        "actual_value": 572230
                    }, {
                        "age": "79",
                        "gender_percentage": 0.384548047,
                        "total_percentage": 0.188774949,
                        "actual_value": 537950
                    }, {
                        "age": "80",
                        "gender_percentage": 0.351586786,
                        "total_percentage": 0.172594239,
                        "actual_value": 491840
                    }, {
                        "age": "81",
                        "gender_percentage": 0.314485887,
                        "total_percentage": 0.154381378,
                        "actual_value": 439939
                    }, {
                        "age": "82",
                        "gender_percentage": 0.264905317,
                        "total_percentage": 0.130042236,
                        "actual_value": 370580
                    }, {
                        "age": "83",
                        "gender_percentage": 0.241913211,
                        "total_percentage": 0.118755392,
                        "actual_value": 338416
                    }, {
                        "age": "84",
                        "gender_percentage": 0.204341233,
                        "total_percentage": 0.100311278,
                        "actual_value": 285856
                    }, {
                        "age": "85",
                        "gender_percentage": 0.177115846,
                        "total_percentage": 0.0869463132,
                        "actual_value": 247770
                    }, {
                        "age": "86",
                        "gender_percentage": 0.154120166,
                        "total_percentage": 0.0756577151,
                        "actual_value": 215601
                    }, {
                        "age": "87",
                        "gender_percentage": 0.128405236,
                        "total_percentage": 0.0630342347,
                        "actual_value": 179628
                    }, {
                        "age": "88",
                        "gender_percentage": 0.105146495,
                        "total_percentage": 0.0516164998,
                        "actual_value": 147091
                    }, {
                        "age": "89",
                        "gender_percentage": 0.0841044715,
                        "total_percentage": 0.0412869535,
                        "actual_value": 117655
                    }, {
                        "age": "90",
                        "gender_percentage": 0.0658953584,
                        "total_percentage": 0.0323480851,
                        "actual_value": 92182
                    }, {
                        "age": "91",
                        "gender_percentage": 0.0515163567,
                        "total_percentage": 0.0252894214,
                        "actual_value": 72067
                    }, {
                        "age": "92",
                        "gender_percentage": 0.0381238339,
                        "total_percentage": 0.0187150211,
                        "actual_value": 53332
                    }, {
                        "age": "93",
                        "gender_percentage": 0.0293548946,
                        "total_percentage": 0.0144103416,
                        "actual_value": 41065
                    }, {
                        "age": "94",
                        "gender_percentage": 0.0208354344,
                        "total_percentage": 0.0102281317,
                        "actual_value": 29147
                    }, {
                        "age": "95",
                        "gender_percentage": 0.0147414254,
                        "total_percentage": 0.00723657775,
                        "actual_value": 20622
                    }, {
                        "age": "96",
                        "gender_percentage": 0.0105138631,
                        "total_percentage": 0.00516126397,
                        "actual_value": 14708
                    }, {
                        "age": "97",
                        "gender_percentage": 0.00717341695,
                        "total_percentage": 0.00352143622,
                        "actual_value": 10035
                    }, {
                        "age": "98",
                        "gender_percentage": 0.00477512957,
                        "total_percentage": 0.00234411499,
                        "actual_value": 6680
                    }, {
                        "age": "99",
                        "gender_percentage": 0.00325466541,
                        "total_percentage": 0.0015977179,
                        "actual_value": 4553
                    }, { "age": "100", "gender_percentage": 0.00638208934, "total_percentage": 0.00313297285, "actual_value": 8928 }]
            }, {
                "date": 962409600,
                "max_gender_percentage": 1.69179743,
                "max_total_percentage": 0.830082927,
                "max_actual_value": 2342182,
                "age_groups": [{
                        "age": "00",
                        "gender_percentage": 1.42595017,
                        "total_percentage": 0.699644575,
                        "actual_value": 1974134
                    }, {
                        "age": "01",
                        "gender_percentage": 1.40317769,
                        "total_percentage": 0.688471222,
                        "actual_value": 1942607
                    }, {
                        "age": "02",
                        "gender_percentage": 1.40426767,
                        "total_percentage": 0.689006021,
                        "actual_value": 1944116
                    }, {
                        "age": "03",
                        "gender_percentage": 1.41047309,
                        "total_percentage": 0.692050721,
                        "actual_value": 1952707
                    }, {
                        "age": "04",
                        "gender_percentage": 1.4425064,
                        "total_percentage": 0.70776791,
                        "actual_value": 1997055
                    }, {
                        "age": "05",
                        "gender_percentage": 1.46806558,
                        "total_percentage": 0.72030856,
                        "actual_value": 2032440
                    }, {
                        "age": "06",
                        "gender_percentage": 1.48099866,
                        "total_percentage": 0.726654196,
                        "actual_value": 2050345
                    }, {
                        "age": "07",
                        "gender_percentage": 1.5147648,
                        "total_percentage": 0.743221605,
                        "actual_value": 2097092
                    }, {
                        "age": "08",
                        "gender_percentage": 1.53904043,
                        "total_percentage": 0.755132476,
                        "actual_value": 2130700
                    }, {
                        "age": "09",
                        "gender_percentage": 1.56654625,
                        "total_percentage": 0.768628249,
                        "actual_value": 2168780
                    }, {
                        "age": "10",
                        "gender_percentage": 1.59916174,
                        "total_percentage": 0.78463109,
                        "actual_value": 2213934
                    }, {
                        "age": "11",
                        "gender_percentage": 1.53635702,
                        "total_percentage": 0.753815858,
                        "actual_value": 2126985
                    }, {
                        "age": "12",
                        "gender_percentage": 1.51112721,
                        "total_percentage": 0.741436817,
                        "actual_value": 2092056
                    }, {
                        "age": "13",
                        "gender_percentage": 1.49239537,
                        "total_percentage": 0.732246011,
                        "actual_value": 2066123
                    }, {
                        "age": "14",
                        "gender_percentage": 1.49920032,
                        "total_percentage": 0.735584869,
                        "actual_value": 2075544
                    }, {
                        "age": "15",
                        "gender_percentage": 1.50872696,
                        "total_percentage": 0.740259127,
                        "actual_value": 2088733
                    }, {
                        "age": "16",
                        "gender_percentage": 1.48273944,
                        "total_percentage": 0.727508314,
                        "actual_value": 2052755
                    }, {
                        "age": "17",
                        "gender_percentage": 1.51187698,
                        "total_percentage": 0.741804691,
                        "actual_value": 2093094
                    }, {
                        "age": "18",
                        "gender_percentage": 1.51764323,
                        "total_percentage": 0.744633912,
                        "actual_value": 2101077
                    }, {
                        "age": "19",
                        "gender_percentage": 1.52001749,
                        "total_percentage": 0.745798844,
                        "actual_value": 2104364
                    }, {
                        "age": "20",
                        "gender_percentage": 1.51373767,
                        "total_percentage": 0.74271764,
                        "actual_value": 2095670
                    }, {
                        "age": "21",
                        "gender_percentage": 1.43995301,
                        "total_percentage": 0.706515086,
                        "actual_value": 1993520
                    }, {
                        "age": "22",
                        "gender_percentage": 1.39318444,
                        "total_percentage": 0.683568018,
                        "actual_value": 1928772
                    }, {
                        "age": "23",
                        "gender_percentage": 1.37256735,
                        "total_percentage": 0.673452213,
                        "actual_value": 1900229
                    }, {
                        "age": "24",
                        "gender_percentage": 1.33531964,
                        "total_percentage": 0.655176568,
                        "actual_value": 1848662
                    }, {
                        "age": "25",
                        "gender_percentage": 1.37657476,
                        "total_percentage": 0.675418456,
                        "actual_value": 1905777
                    }, {
                        "age": "26",
                        "gender_percentage": 1.33406714,
                        "total_percentage": 0.654562028,
                        "actual_value": 1846928
                    }, {
                        "age": "27",
                        "gender_percentage": 1.36724821,
                        "total_percentage": 0.670842368,
                        "actual_value": 1892865
                    }, {
                        "age": "28",
                        "gender_percentage": 1.43881247,
                        "total_percentage": 0.705955479,
                        "actual_value": 1991941
                    }, {
                        "age": "29",
                        "gender_percentage": 1.52436223,
                        "total_percentage": 0.747930595,
                        "actual_value": 2110379
                    }, {
                        "age": "30",
                        "gender_percentage": 1.57109179,
                        "total_percentage": 0.770858525,
                        "actual_value": 2175073
                    }, {
                        "age": "31",
                        "gender_percentage": 1.47951141,
                        "total_percentage": 0.725924475,
                        "actual_value": 2048286
                    }, {
                        "age": "32",
                        "gender_percentage": 1.45287598,
                        "total_percentage": 0.71285576,
                        "actual_value": 2011411
                    }, {
                        "age": "33",
                        "gender_percentage": 1.45522784,
                        "total_percentage": 0.714009706,
                        "actual_value": 2014667
                    }, {
                        "age": "34",
                        "gender_percentage": 1.50213293,
                        "total_percentage": 0.737023756,
                        "actual_value": 2079604
                    }, {
                        "age": "35",
                        "gender_percentage": 1.61073542,
                        "total_percentage": 0.790309734,
                        "actual_value": 2229957
                    }, {
                        "age": "36",
                        "gender_percentage": 1.63286649,
                        "total_percentage": 0.801168374,
                        "actual_value": 2260596
                    }, {
                        "age": "37",
                        "gender_percentage": 1.62646965,
                        "total_percentage": 0.798029756,
                        "actual_value": 2251740
                    }, {
                        "age": "38",
                        "gender_percentage": 1.63574709,
                        "total_percentage": 0.802581744,
                        "actual_value": 2264584
                    }, {
                        "age": "39",
                        "gender_percentage": 1.65137802,
                        "total_percentage": 0.810251086,
                        "actual_value": 2286224
                    }, {
                        "age": "40",
                        "gender_percentage": 1.69179743,
                        "total_percentage": 0.830082927,
                        "actual_value": 2342182
                    }, {
                        "age": "41",
                        "gender_percentage": 1.6172565,
                        "total_percentage": 0.79350931,
                        "actual_value": 2238985
                    }, {
                        "age": "42",
                        "gender_percentage": 1.62069473,
                        "total_percentage": 0.795196281,
                        "actual_value": 2243745
                    }, {
                        "age": "43",
                        "gender_percentage": 1.59899994,
                        "total_percentage": 0.784551703,
                        "actual_value": 2213710
                    }, {
                        "age": "44",
                        "gender_percentage": 1.5369551,
                        "total_percentage": 0.754109306,
                        "actual_value": 2127813
                    }, {
                        "age": "45",
                        "gender_percentage": 1.55070656,
                        "total_percentage": 0.760856484,
                        "actual_value": 2146851
                    }, {
                        "age": "46",
                        "gender_percentage": 1.47771284,
                        "total_percentage": 0.725042004,
                        "actual_value": 2045796
                    }, {
                        "age": "47",
                        "gender_percentage": 1.42895501,
                        "total_percentage": 0.701118903,
                        "actual_value": 1978294
                    }, {
                        "age": "48",
                        "gender_percentage": 1.38437434,
                        "total_percentage": 0.67924533,
                        "actual_value": 1916575
                    }, {
                        "age": "49",
                        "gender_percentage": 1.34775432,
                        "total_percentage": 0.661277664,
                        "actual_value": 1865877
                    }, {
                        "age": "50",
                        "gender_percentage": 1.3480772,
                        "total_percentage": 0.661436083,
                        "actual_value": 1866324
                    }, {
                        "age": "51",
                        "gender_percentage": 1.29551709,
                        "total_percentage": 0.63564739,
                        "actual_value": 1793558
                    }, {
                        "age": "52",
                        "gender_percentage": 1.28611686,
                        "total_percentage": 0.631035152,
                        "actual_value": 1780544
                    }, {
                        "age": "53",
                        "gender_percentage": 1.34947488,
                        "total_percentage": 0.662121859,
                        "actual_value": 1868259
                    }, {
                        "age": "54",
                        "gender_percentage": 1.00741525,
                        "total_percentage": 0.494289794,
                        "actual_value": 1394700
                    }, {
                        "age": "55",
                        "gender_percentage": 1.00316225,
                        "total_percentage": 0.492203053,
                        "actual_value": 1388812
                    }, {
                        "age": "56",
                        "gender_percentage": 0.986447841,
                        "total_percentage": 0.484002102,
                        "actual_value": 1365672
                    }, {
                        "age": "57",
                        "gender_percentage": 1.01778772,
                        "total_percentage": 0.499379062,
                        "actual_value": 1409060
                    }, {
                        "age": "58",
                        "gender_percentage": 0.8974613,
                        "total_percentage": 0.440340723,
                        "actual_value": 1242476
                    }, {
                        "age": "59",
                        "gender_percentage": 0.831609121,
                        "total_percentage": 0.408030253,
                        "actual_value": 1151308
                    }, {
                        "age": "60",
                        "gender_percentage": 0.808682785,
                        "total_percentage": 0.396781413,
                        "actual_value": 1119568
                    }, {
                        "age": "61",
                        "gender_percentage": 0.77101902,
                        "total_percentage": 0.37830163,
                        "actual_value": 1067425
                    }, {
                        "age": "62",
                        "gender_percentage": 0.752729236,
                        "total_percentage": 0.36932772,
                        "actual_value": 1042104
                    }, {
                        "age": "63",
                        "gender_percentage": 0.70777585,
                        "total_percentage": 0.347271274,
                        "actual_value": 979869
                    }, {
                        "age": "64",
                        "gender_percentage": 0.691948444,
                        "total_percentage": 0.339505534,
                        "actual_value": 957957
                    }, {
                        "age": "65",
                        "gender_percentage": 0.689112628,
                        "total_percentage": 0.338114137,
                        "actual_value": 954031
                    }, {
                        "age": "66",
                        "gender_percentage": 0.630604966,
                        "total_percentage": 0.309407265,
                        "actual_value": 873031
                    }, {
                        "age": "67",
                        "gender_percentage": 0.627711365,
                        "total_percentage": 0.307987516,
                        "actual_value": 869025
                    }, {
                        "age": "68",
                        "gender_percentage": 0.619027672,
                        "total_percentage": 0.303726849,
                        "actual_value": 857003
                    }, {
                        "age": "69",
                        "gender_percentage": 0.61063724,
                        "total_percentage": 0.299610071,
                        "actual_value": 845387
                    }, {
                        "age": "70",
                        "gender_percentage": 0.613141513,
                        "total_percentage": 0.300838796,
                        "actual_value": 848854
                    }, {
                        "age": "71",
                        "gender_percentage": 0.577638919,
                        "total_percentage": 0.283419396,
                        "actual_value": 799703
                    }, {
                        "age": "72",
                        "gender_percentage": 0.568697359,
                        "total_percentage": 0.279032206,
                        "actual_value": 787324
                    }, {
                        "age": "73",
                        "gender_percentage": 0.547264053,
                        "total_percentage": 0.268515922,
                        "actual_value": 757651
                    }, {
                        "age": "74",
                        "gender_percentage": 0.51761367,
                        "total_percentage": 0.253967918,
                        "actual_value": 716602
                    }, {
                        "age": "75",
                        "gender_percentage": 0.50253314,
                        "total_percentage": 0.246568633,
                        "actual_value": 695724
                    }, {
                        "age": "76",
                        "gender_percentage": 0.470870382,
                        "total_percentage": 0.231033254,
                        "actual_value": 651889
                    }, {
                        "age": "77",
                        "gender_percentage": 0.438065642,
                        "total_percentage": 0.214937559,
                        "actual_value": 606473
                    }, {
                        "age": "78",
                        "gender_percentage": 0.414521726,
                        "total_percentage": 0.203385702,
                        "actual_value": 573878
                    }, {
                        "age": "79",
                        "gender_percentage": 0.382046362,
                        "total_percentage": 0.187451616,
                        "actual_value": 528918
                    }, {
                        "age": "80",
                        "gender_percentage": 0.343976655,
                        "total_percentage": 0.168772658,
                        "actual_value": 476213
                    }, {
                        "age": "81",
                        "gender_percentage": 0.292536141,
                        "total_percentage": 0.143533293,
                        "actual_value": 404997
                    }, {
                        "age": "82",
                        "gender_percentage": 0.269317267,
                        "total_percentage": 0.132140918,
                        "actual_value": 372852
                    }, {
                        "age": "83",
                        "gender_percentage": 0.23046529,
                        "total_percentage": 0.113078138,
                        "actual_value": 319064
                    }, {
                        "age": "84",
                        "gender_percentage": 0.202167085,
                        "total_percentage": 0.0991935811,
                        "actual_value": 279887
                    }, {
                        "age": "85",
                        "gender_percentage": 0.178121881,
                        "total_percentage": 0.0873957658,
                        "actual_value": 246598
                    }, {
                        "age": "86",
                        "gender_percentage": 0.150614612,
                        "total_percentage": 0.0738992835,
                        "actual_value": 208516
                    }, {
                        "age": "87",
                        "gender_percentage": 0.125623895,
                        "total_percentage": 0.061637551,
                        "actual_value": 173918
                    }, {
                        "age": "88",
                        "gender_percentage": 0.102311842,
                        "total_percentage": 0.0501994576,
                        "actual_value": 141644
                    }, {
                        "age": "89",
                        "gender_percentage": 0.0822393803,
                        "total_percentage": 0.0403508744,
                        "actual_value": 113855
                    }, {
                        "age": "90",
                        "gender_percentage": 0.0656080358,
                        "total_percentage": 0.0321906804,
                        "actual_value": 90830
                    }, {
                        "age": "91",
                        "gender_percentage": 0.0497777406,
                        "total_percentage": 0.0244235225,
                        "actual_value": 68914
                    }, {
                        "age": "92",
                        "gender_percentage": 0.0394998947,
                        "total_percentage": 0.0193806821,
                        "actual_value": 54685
                    }, {
                        "age": "93",
                        "gender_percentage": 0.0288587235,
                        "total_percentage": 0.0141595756,
                        "actual_value": 39953
                    }, {
                        "age": "94",
                        "gender_percentage": 0.0210793714,
                        "total_percentage": 0.010342625,
                        "actual_value": 29183
                    }, {
                        "age": "95",
                        "gender_percentage": 0.0152965031,
                        "total_percentage": 0.007505252,
                        "actual_value": 21177
                    }, {
                        "age": "96",
                        "gender_percentage": 0.0106780094,
                        "total_percentage": 0.0052391812,
                        "actual_value": 14783
                    }, {
                        "age": "97",
                        "gender_percentage": 0.00737413231,
                        "total_percentage": 0.00361812899,
                        "actual_value": 10209
                    }, {
                        "age": "98",
                        "gender_percentage": 0.00493270149,
                        "total_percentage": 0.00242023733,
                        "actual_value": 6829
                    }, {
                        "age": "99",
                        "gender_percentage": 0.00359858234,
                        "total_percentage": 0.00176564978,
                        "actual_value": 4982
                    }, { "age": "100", "gender_percentage": 0.00710398582, "total_percentage": 0.00348558122, "actual_value": 9835 }]
            }]
    },
    "female": {
        "values": [{
                "date": 1404172800,
                "max_gender_percentage": 1.44018824,
                "max_total_percentage": 0.731349975,
                "max_actual_value": 2331961,
                "age_groups": [{
                        "age": "00",
                        "gender_percentage": 1.19224692,
                        "total_percentage": 0.605441518,
                        "actual_value": 1930493
                    }, {
                        "age": "01",
                        "gender_percentage": 1.19742045,
                        "total_percentage": 0.608068714,
                        "actual_value": 1938870
                    }, {
                        "age": "02",
                        "gender_percentage": 1.19519713,
                        "total_percentage": 0.606939681,
                        "actual_value": 1935270
                    }, {
                        "age": "03",
                        "gender_percentage": 1.20835297,
                        "total_percentage": 0.613620418,
                        "actual_value": 1956572
                    }, {
                        "age": "04",
                        "gender_percentage": 1.21043918,
                        "total_percentage": 0.614679827,
                        "actual_value": 1959950
                    }, {
                        "age": "05",
                        "gender_percentage": 1.21132912,
                        "total_percentage": 0.615131754,
                        "actual_value": 1961391
                    }, {
                        "age": "06",
                        "gender_percentage": 1.25001043,
                        "total_percentage": 0.634774725,
                        "actual_value": 2024024
                    }, {
                        "age": "07",
                        "gender_percentage": 1.25478808,
                        "total_percentage": 0.63720089,
                        "actual_value": 2031760
                    }, {
                        "age": "08",
                        "gender_percentage": 1.24406801,
                        "total_percentage": 0.631757072,
                        "actual_value": 2014402
                    }, {
                        "age": "09",
                        "gender_percentage": 1.24107765,
                        "total_percentage": 0.630238523,
                        "actual_value": 2009560
                    }, {
                        "age": "10",
                        "gender_percentage": 1.24467201,
                        "total_percentage": 0.632063792,
                        "actual_value": 2015380
                    }, {
                        "age": "11",
                        "gender_percentage": 1.2363772,
                        "total_percentage": 0.62785156,
                        "actual_value": 2001949
                    }, {
                        "age": "12",
                        "gender_percentage": 1.23118824,
                        "total_percentage": 0.625216523,
                        "actual_value": 1993547
                    }, {
                        "age": "13",
                        "gender_percentage": 1.26059278,
                        "total_percentage": 0.640148606,
                        "actual_value": 2041159
                    }, {
                        "age": "14",
                        "gender_percentage": 1.27732506,
                        "total_percentage": 0.648645517,
                        "actual_value": 2068252
                    }, {
                        "age": "15",
                        "gender_percentage": 1.25697372,
                        "total_percentage": 0.638310792,
                        "actual_value": 2035299
                    }, {
                        "age": "16",
                        "gender_percentage": 1.25758945,
                        "total_percentage": 0.638623471,
                        "actual_value": 2036296
                    }, {
                        "age": "17",
                        "gender_percentage": 1.2635189,
                        "total_percentage": 0.641634539,
                        "actual_value": 2045897
                    }, {
                        "age": "18",
                        "gender_percentage": 1.27255482,
                        "total_percentage": 0.646223115,
                        "actual_value": 2060528
                    }, {
                        "age": "19",
                        "gender_percentage": 1.30039316,
                        "total_percentage": 0.660359857,
                        "actual_value": 2105604
                    }, {
                        "age": "20",
                        "gender_percentage": 1.32738973,
                        "total_percentage": 0.674069135,
                        "actual_value": 2149317
                    }, {
                        "age": "21",
                        "gender_percentage": 1.34572897,
                        "total_percentage": 0.683382086,
                        "actual_value": 2179012
                    }, {
                        "age": "22",
                        "gender_percentage": 1.38616114,
                        "total_percentage": 0.70391417,
                        "actual_value": 2244480
                    }, {
                        "age": "23",
                        "gender_percentage": 1.41964731,
                        "total_percentage": 0.720918969,
                        "actual_value": 2298701
                    }, {
                        "age": "24",
                        "gender_percentage": 1.42121351,
                        "total_percentage": 0.721714309,
                        "actual_value": 2301237
                    }, {
                        "age": "25",
                        "gender_percentage": 1.36718764,
                        "total_percentage": 0.694279132,
                        "actual_value": 2213758
                    }, {
                        "age": "26",
                        "gender_percentage": 1.33796837,
                        "total_percentage": 0.679441135,
                        "actual_value": 2166446
                    }, {
                        "age": "27",
                        "gender_percentage": 1.31676662,
                        "total_percentage": 0.668674555,
                        "actual_value": 2132116
                    }, {
                        "age": "28",
                        "gender_percentage": 1.32451733,
                        "total_percentage": 0.672610488,
                        "actual_value": 2144666
                    }, {
                        "age": "29",
                        "gender_percentage": 1.33989339,
                        "total_percentage": 0.680418689,
                        "actual_value": 2169563
                    }, {
                        "age": "30",
                        "gender_percentage": 1.30352309,
                        "total_percentage": 0.661949284,
                        "actual_value": 2110672
                    }, {
                        "age": "31",
                        "gender_percentage": 1.32718222,
                        "total_percentage": 0.673963759,
                        "actual_value": 2148981
                    }, {
                        "age": "32",
                        "gender_percentage": 1.33042517,
                        "total_percentage": 0.675610578,
                        "actual_value": 2154232
                    }, {
                        "age": "33",
                        "gender_percentage": 1.31880465,
                        "total_percentage": 0.669709501,
                        "actual_value": 2135416
                    }, {
                        "age": "34",
                        "gender_percentage": 1.34043501,
                        "total_percentage": 0.680693734,
                        "actual_value": 2170440
                    }, {
                        "age": "35",
                        "gender_percentage": 1.26402286,
                        "total_percentage": 0.641890453,
                        "actual_value": 2046713
                    }, {
                        "age": "36",
                        "gender_percentage": 1.24099305,
                        "total_percentage": 0.630195557,
                        "actual_value": 2009423
                    }, {
                        "age": "37",
                        "gender_percentage": 1.23218132,
                        "total_percentage": 0.625720825,
                        "actual_value": 1995155
                    }, {
                        "age": "38",
                        "gender_percentage": 1.1960247,
                        "total_percentage": 0.607359932,
                        "actual_value": 1936610
                    }, {
                        "age": "39",
                        "gender_percentage": 1.23141427,
                        "total_percentage": 0.625331308,
                        "actual_value": 1993913
                    }, {
                        "age": "40",
                        "gender_percentage": 1.19850555,
                        "total_percentage": 0.608619745,
                        "actual_value": 1940627
                    }, {
                        "age": "41",
                        "gender_percentage": 1.22127597,
                        "total_percentage": 0.62018292,
                        "actual_value": 1977497
                    }, {
                        "age": "42",
                        "gender_percentage": 1.2750721,
                        "total_percentage": 0.647501431,
                        "actual_value": 2064604
                    }, {
                        "age": "43",
                        "gender_percentage": 1.34932517,
                        "total_percentage": 0.685208296,
                        "actual_value": 2184835
                    }, {
                        "age": "44",
                        "gender_percentage": 1.36148669,
                        "total_percentage": 0.691384104,
                        "actual_value": 2204527
                    }, {
                        "age": "45",
                        "gender_percentage": 1.29336687,
                        "total_percentage": 0.656791801,
                        "actual_value": 2094227
                    }, {
                        "age": "46",
                        "gender_percentage": 1.2682385,
                        "total_percentage": 0.644031224,
                        "actual_value": 2053539
                    }, {
                        "age": "47",
                        "gender_percentage": 1.27398515,
                        "total_percentage": 0.646949459,
                        "actual_value": 2062844
                    }, {
                        "age": "48",
                        "gender_percentage": 1.29739724,
                        "total_percentage": 0.658838486,
                        "actual_value": 2100753
                    }, {
                        "age": "49",
                        "gender_percentage": 1.37673429,
                        "total_percentage": 0.699127072,
                        "actual_value": 2229216
                    }, {
                        "age": "50",
                        "gender_percentage": 1.40798912,
                        "total_percentage": 0.714998761,
                        "actual_value": 2279824
                    }, {
                        "age": "51",
                        "gender_percentage": 1.41011177,
                        "total_percentage": 0.716076674,
                        "actual_value": 2283261
                    }, {
                        "age": "52",
                        "gender_percentage": 1.40936449,
                        "total_percentage": 0.715697193,
                        "actual_value": 2282051
                    }, {
                        "age": "53",
                        "gender_percentage": 1.43041185,
                        "total_percentage": 0.726385368,
                        "actual_value": 2316131
                    }, {
                        "age": "54",
                        "gender_percentage": 1.44018824,
                        "total_percentage": 0.731349975,
                        "actual_value": 2331961
                    }, {
                        "age": "55",
                        "gender_percentage": 1.3978255,
                        "total_percentage": 0.709837514,
                        "actual_value": 2263367
                    }, {
                        "age": "56",
                        "gender_percentage": 1.39250314,
                        "total_percentage": 0.707134736,
                        "actual_value": 2254749
                    }, {
                        "age": "57",
                        "gender_percentage": 1.38156012,
                        "total_percentage": 0.7015777,
                        "actual_value": 2237030
                    }, {
                        "age": "58",
                        "gender_percentage": 1.336333,
                        "total_percentage": 0.678610669,
                        "actual_value": 2163798
                    }, {
                        "age": "59",
                        "gender_percentage": 1.32689566,
                        "total_percentage": 0.673818239,
                        "actual_value": 2148517
                    }, {
                        "age": "60",
                        "gender_percentage": 1.27924328,
                        "total_percentage": 0.649619621,
                        "actual_value": 2071358
                    }, {
                        "age": "61",
                        "gender_percentage": 1.23353569,
                        "total_percentage": 0.626408594,
                        "actual_value": 1997348
                    }, {
                        "age": "62",
                        "gender_percentage": 1.18719815,
                        "total_percentage": 0.602877673,
                        "actual_value": 1922318
                    }, {
                        "age": "63",
                        "gender_percentage": 1.15522815,
                        "total_percentage": 0.586642812,
                        "actual_value": 1870552
                    }, {
                        "age": "64",
                        "gender_percentage": 1.12812227,
                        "total_percentage": 0.572878023,
                        "actual_value": 1826662
                    }, {
                        "age": "65",
                        "gender_percentage": 1.09730407,
                        "total_percentage": 0.557228064,
                        "actual_value": 1776761
                    }, {
                        "age": "66",
                        "gender_percentage": 1.08611834,
                        "total_percentage": 0.551547776,
                        "actual_value": 1758649
                    }, {
                        "age": "67",
                        "gender_percentage": 1.13157026,
                        "total_percentage": 0.574628965,
                        "actual_value": 1832245
                    }, {
                        "age": "68",
                        "gender_percentage": 0.84056461,
                        "total_percentage": 0.426851774,
                        "actual_value": 1361047
                    }, {
                        "age": "69",
                        "gender_percentage": 0.832172224,
                        "total_percentage": 0.42258999,
                        "actual_value": 1347458
                    }, {
                        "age": "70",
                        "gender_percentage": 0.813508752,
                        "total_percentage": 0.413112389,
                        "actual_value": 1317238
                    }, {
                        "age": "71",
                        "gender_percentage": 0.833984223,
                        "total_percentage": 0.423510151,
                        "actual_value": 1350392
                    }, {
                        "age": "72",
                        "gender_percentage": 0.730813884,
                        "total_percentage": 0.371118649,
                        "actual_value": 1183338
                    }, {
                        "age": "73",
                        "gender_percentage": 0.672665003,
                        "total_percentage": 0.341589744,
                        "actual_value": 1089183
                    }, {
                        "age": "74",
                        "gender_percentage": 0.637926365,
                        "total_percentage": 0.323948923,
                        "actual_value": 1032934
                    }, {
                        "age": "75",
                        "gender_percentage": 0.599839172,
                        "total_percentage": 0.304607655,
                        "actual_value": 971263
                    }, {
                        "age": "76",
                        "gender_percentage": 0.578227958,
                        "total_percentage": 0.293633145,
                        "actual_value": 936270
                    }, {
                        "age": "77",
                        "gender_percentage": 0.535705257,
                        "total_percentage": 0.272039456,
                        "actual_value": 867417
                    }, {
                        "age": "78",
                        "gender_percentage": 0.514014992,
                        "total_percentage": 0.261024802,
                        "actual_value": 832296
                    }, {
                        "age": "79",
                        "gender_percentage": 0.496238375,
                        "total_percentage": 0.25199756,
                        "actual_value": 803512
                    }, {
                        "age": "80",
                        "gender_percentage": 0.44715752,
                        "total_percentage": 0.227073539,
                        "actual_value": 724040
                    }, {
                        "age": "81",
                        "gender_percentage": 0.435348643,
                        "total_percentage": 0.221076808,
                        "actual_value": 704919
                    }, {
                        "age": "82",
                        "gender_percentage": 0.417895024,
                        "total_percentage": 0.212213588,
                        "actual_value": 676658
                    }, {
                        "age": "83",
                        "gender_percentage": 0.400206104,
                        "total_percentage": 0.20323088,
                        "actual_value": 648016
                    }, {
                        "age": "84",
                        "gender_percentage": 0.385942937,
                        "total_percentage": 0.195987822,
                        "actual_value": 624921
                    }, {
                        "age": "85",
                        "gender_percentage": 0.34937192,
                        "total_percentage": 0.177416491,
                        "actual_value": 565705
                    }, {
                        "age": "86",
                        "gender_percentage": 0.329026759,
                        "total_percentage": 0.167084902,
                        "actual_value": 532762
                    }, {
                        "age": "87",
                        "gender_percentage": 0.300999436,
                        "total_percentage": 0.152852192,
                        "actual_value": 487380
                    }, {
                        "age": "88",
                        "gender_percentage": 0.268755849,
                        "total_percentage": 0.136478397,
                        "actual_value": 435171
                    }, {
                        "age": "89",
                        "gender_percentage": 0.243421822,
                        "total_percentage": 0.123613385,
                        "actual_value": 394150
                    }, {
                        "age": "90",
                        "gender_percentage": 0.211520378,
                        "total_percentage": 0.107413336,
                        "actual_value": 342495
                    }, {
                        "age": "91",
                        "gender_percentage": 0.178399818,
                        "total_percentage": 0.0905942003,
                        "actual_value": 288866
                    }, {
                        "age": "92",
                        "gender_percentage": 0.15109816,
                        "total_percentage": 0.076729994,
                        "actual_value": 244659
                    }, {
                        "age": "93",
                        "gender_percentage": 0.123735361,
                        "total_percentage": 0.0628347393,
                        "actual_value": 200353
                    }, {
                        "age": "94",
                        "gender_percentage": 0.096667768,
                        "total_percentage": 0.0490893951,
                        "actual_value": 156525
                    }, {
                        "age": "95",
                        "gender_percentage": 0.070590167,
                        "total_percentage": 0.035846784,
                        "actual_value": 114300
                    }, {
                        "age": "96",
                        "gender_percentage": 0.0555513117,
                        "total_percentage": 0.0282098195,
                        "actual_value": 89949
                    }, {
                        "age": "97",
                        "gender_percentage": 0.0390635979,
                        "total_percentage": 0.0198371022,
                        "actual_value": 63252
                    }, {
                        "age": "98",
                        "gender_percentage": 0.0287400176,
                        "total_percentage": 0.0145946276,
                        "actual_value": 46536
                    }, {
                        "age": "99",
                        "gender_percentage": 0.0202512875,
                        "total_percentage": 0.0102839186,
                        "actual_value": 32791
                    }, { "age": "100", "gender_percentage": 0.0361090628, "total_percentage": 0.0183367433, "actual_value": 58468 }]
            }, {
                "date": 1372636800,
                "max_gender_percentage": 1.4552095,
                "max_total_percentage": 0.738711472,
                "max_actual_value": 2335280,
                "age_groups": [{
                        "age": "00",
                        "gender_percentage": 1.19958197,
                        "total_percentage": 0.608946658,
                        "actual_value": 1925056
                    }, {
                        "age": "01",
                        "gender_percentage": 1.2051111,
                        "total_percentage": 0.611753425,
                        "actual_value": 1933929
                    }, {
                        "age": "02",
                        "gender_percentage": 1.21430306,
                        "total_percentage": 0.616419561,
                        "actual_value": 1948680
                    }, {
                        "age": "03",
                        "gender_percentage": 1.21706981,
                        "total_percentage": 0.617824051,
                        "actual_value": 1953120
                    }, {
                        "age": "04",
                        "gender_percentage": 1.21816965,
                        "total_percentage": 0.618382368,
                        "actual_value": 1954885
                    }, {
                        "age": "05",
                        "gender_percentage": 1.25722504,
                        "total_percentage": 0.638208145,
                        "actual_value": 2017560
                    }, {
                        "age": "06",
                        "gender_percentage": 1.26205438,
                        "total_percentage": 0.640659677,
                        "actual_value": 2025310
                    }, {
                        "age": "07",
                        "gender_percentage": 1.25122605,
                        "total_percentage": 0.635162868,
                        "actual_value": 2007933
                    }, {
                        "age": "08",
                        "gender_percentage": 1.24799631,
                        "total_percentage": 0.633523346,
                        "actual_value": 2002750
                    }, {
                        "age": "09",
                        "gender_percentage": 1.25130145,
                        "total_percentage": 0.635201143,
                        "actual_value": 2008054
                    }, {
                        "age": "10",
                        "gender_percentage": 1.24272142,
                        "total_percentage": 0.630845641,
                        "actual_value": 1994285
                    }, {
                        "age": "11",
                        "gender_percentage": 1.23731193,
                        "total_percentage": 0.628099608,
                        "actual_value": 1985604
                    }, {
                        "age": "12",
                        "gender_percentage": 1.26677779,
                        "total_percentage": 0.643057434,
                        "actual_value": 2032890
                    }, {
                        "age": "13",
                        "gender_percentage": 1.283344,
                        "total_percentage": 0.65146698,
                        "actual_value": 2059475
                    }, {
                        "age": "14",
                        "gender_percentage": 1.26228307,
                        "total_percentage": 0.640775769,
                        "actual_value": 2025677
                    }, {
                        "age": "15",
                        "gender_percentage": 1.26218649,
                        "total_percentage": 0.640726739,
                        "actual_value": 2025522
                    }, {
                        "age": "16",
                        "gender_percentage": 1.26634346,
                        "total_percentage": 0.642836954,
                        "actual_value": 2032193
                    }, {
                        "age": "17",
                        "gender_percentage": 1.27304036,
                        "total_percentage": 0.646236518,
                        "actual_value": 2042940
                    }, {
                        "age": "18",
                        "gender_percentage": 1.29919111,
                        "total_percentage": 0.659511485,
                        "actual_value": 2084906
                    }, {
                        "age": "19",
                        "gender_percentage": 1.32555435,
                        "total_percentage": 0.67289432,
                        "actual_value": 2127213
                    }, {
                        "age": "20",
                        "gender_percentage": 1.34356376,
                        "total_percentage": 0.682036478,
                        "actual_value": 2156114
                    }, {
                        "age": "21",
                        "gender_percentage": 1.38386293,
                        "total_percentage": 0.702493644,
                        "actual_value": 2220785
                    }, {
                        "age": "22",
                        "gender_percentage": 1.41713307,
                        "total_percentage": 0.719382644,
                        "actual_value": 2274176
                    }, {
                        "age": "23",
                        "gender_percentage": 1.41851832,
                        "total_percentage": 0.720085838,
                        "actual_value": 2276399
                    }, {
                        "age": "24",
                        "gender_percentage": 1.36405576,
                        "total_percentage": 0.692438882,
                        "actual_value": 2188999
                    }, {
                        "age": "25",
                        "gender_percentage": 1.33545918,
                        "total_percentage": 0.677922333,
                        "actual_value": 2143108
                    }, {
                        "age": "26",
                        "gender_percentage": 1.31482884,
                        "total_percentage": 0.667449704,
                        "actual_value": 2110001
                    }, {
                        "age": "27",
                        "gender_percentage": 1.32353413,
                        "total_percentage": 0.671868788,
                        "actual_value": 2123971
                    }, {
                        "age": "28",
                        "gender_percentage": 1.34000375,
                        "total_percentage": 0.680229304,
                        "actual_value": 2150401
                    }, {
                        "age": "29",
                        "gender_percentage": 1.30413387,
                        "total_percentage": 0.662020588,
                        "actual_value": 2092838
                    }, {
                        "age": "30",
                        "gender_percentage": 1.32879593,
                        "total_percentage": 0.674539851,
                        "actual_value": 2132415
                    }, {
                        "age": "31",
                        "gender_percentage": 1.33271425,
                        "total_percentage": 0.676528914,
                        "actual_value": 2138703
                    }, {
                        "age": "32",
                        "gender_percentage": 1.32166097,
                        "total_percentage": 0.67091791,
                        "actual_value": 2120965
                    }, {
                        "age": "33",
                        "gender_percentage": 1.34406601,
                        "total_percentage": 0.682291438,
                        "actual_value": 2156920
                    }, {
                        "age": "34",
                        "gender_percentage": 1.26732865,
                        "total_percentage": 0.643337067,
                        "actual_value": 2033774
                    }, {
                        "age": "35",
                        "gender_percentage": 1.24441699,
                        "total_percentage": 0.631706366,
                        "actual_value": 1997006
                    }, {
                        "age": "36",
                        "gender_percentage": 1.23581577,
                        "total_percentage": 0.627340108,
                        "actual_value": 1983203
                    }, {
                        "age": "37",
                        "gender_percentage": 1.19944862,
                        "total_percentage": 0.608878964,
                        "actual_value": 1924842
                    }, {
                        "age": "38",
                        "gender_percentage": 1.23568678,
                        "total_percentage": 0.627274628,
                        "actual_value": 1982996
                    }, {
                        "age": "39",
                        "gender_percentage": 1.20294569,
                        "total_percentage": 0.61065419,
                        "actual_value": 1930454
                    }, {
                        "age": "40",
                        "gender_percentage": 1.22650354,
                        "total_percentage": 0.622612921,
                        "actual_value": 1968259
                    }, {
                        "age": "41",
                        "gender_percentage": 1.28142224,
                        "total_percentage": 0.650491428,
                        "actual_value": 2056391
                    }, {
                        "age": "42",
                        "gender_percentage": 1.35702424,
                        "total_percentage": 0.688869452,
                        "actual_value": 2177715
                    }, {
                        "age": "43",
                        "gender_percentage": 1.36964783,
                        "total_percentage": 0.695277599,
                        "actual_value": 2197973
                    }, {
                        "age": "44",
                        "gender_percentage": 1.30148676,
                        "total_percentage": 0.660676832,
                        "actual_value": 2088590
                    }, {
                        "age": "45",
                        "gender_percentage": 1.27647449,
                        "total_percentage": 0.647979794,
                        "actual_value": 2048451
                    }, {
                        "age": "46",
                        "gender_percentage": 1.28264297,
                        "total_percentage": 0.651111112,
                        "actual_value": 2058350
                    }, {
                        "age": "47",
                        "gender_percentage": 1.30684266,
                        "total_percentage": 0.663395661,
                        "actual_value": 2097185
                    }, {
                        "age": "48",
                        "gender_percentage": 1.38784231,
                        "total_percentage": 0.704513706,
                        "actual_value": 2227171
                    }, {
                        "age": "49",
                        "gender_percentage": 1.42015842,
                        "total_percentage": 0.72091841,
                        "actual_value": 2279031
                    }, {
                        "age": "50",
                        "gender_percentage": 1.42286597,
                        "total_percentage": 0.72229285,
                        "actual_value": 2283376
                    }, {
                        "age": "51",
                        "gender_percentage": 1.42288778,
                        "total_percentage": 0.722303921,
                        "actual_value": 2283411
                    }, {
                        "age": "52",
                        "gender_percentage": 1.4447669,
                        "total_percentage": 0.733410469,
                        "actual_value": 2318522
                    }, {
                        "age": "53",
                        "gender_percentage": 1.4552095,
                        "total_percentage": 0.738711472,
                        "actual_value": 2335280
                    }, {
                        "age": "54",
                        "gender_percentage": 1.41307954,
                        "total_percentage": 0.717324939,
                        "actual_value": 2267671
                    }, {
                        "age": "55",
                        "gender_percentage": 1.40842093,
                        "total_percentage": 0.71496008,
                        "actual_value": 2260195
                    }, {
                        "age": "56",
                        "gender_percentage": 1.39815281,
                        "total_percentage": 0.709747648,
                        "actual_value": 2243717
                    }, {
                        "age": "57",
                        "gender_percentage": 1.35295325,
                        "total_percentage": 0.686802889,
                        "actual_value": 2171182
                    }, {
                        "age": "58",
                        "gender_percentage": 1.34389652,
                        "total_percentage": 0.682205397,
                        "actual_value": 2156648
                    }, {
                        "age": "59",
                        "gender_percentage": 1.29632466,
                        "total_percentage": 0.658056382,
                        "actual_value": 2080306
                    }, {
                        "age": "60",
                        "gender_percentage": 1.25048576,
                        "total_percentage": 0.634787072,
                        "actual_value": 2006745
                    }, {
                        "age": "61",
                        "gender_percentage": 1.2042063,
                        "total_percentage": 0.611294119,
                        "actual_value": 1932477
                    }, {
                        "age": "62",
                        "gender_percentage": 1.17216874,
                        "total_percentage": 0.595030813,
                        "actual_value": 1881064
                    }, {
                        "age": "63",
                        "gender_percentage": 1.1449306,
                        "total_percentage": 0.581203855,
                        "actual_value": 1837353
                    }, {
                        "age": "64",
                        "gender_percentage": 1.11541614,
                        "total_percentage": 0.566221356,
                        "actual_value": 1789989
                    }, {
                        "age": "65",
                        "gender_percentage": 1.10611451,
                        "total_percentage": 0.561499547,
                        "actual_value": 1775062
                    }, {
                        "age": "66",
                        "gender_percentage": 1.15356298,
                        "total_percentage": 0.585585929,
                        "actual_value": 1851206
                    }, {
                        "age": "67",
                        "gender_percentage": 0.855741927,
                        "total_percentage": 0.434402317,
                        "actual_value": 1373271
                    }, {
                        "age": "68",
                        "gender_percentage": 0.848256753,
                        "total_percentage": 0.4306026,
                        "actual_value": 1361259
                    }, {
                        "age": "69",
                        "gender_percentage": 0.831724813,
                        "total_percentage": 0.422210452,
                        "actual_value": 1334729
                    }, {
                        "age": "70",
                        "gender_percentage": 0.854460748,
                        "total_percentage": 0.433751949,
                        "actual_value": 1371215
                    }, {
                        "age": "71",
                        "gender_percentage": 0.749097518,
                        "total_percentage": 0.380266161,
                        "actual_value": 1202131
                    }, {
                        "age": "72",
                        "gender_percentage": 0.689994432,
                        "total_percentage": 0.35026352,
                        "actual_value": 1107284
                    }, {
                        "age": "73",
                        "gender_percentage": 0.655447476,
                        "total_percentage": 0.332726367,
                        "actual_value": 1051844
                    }, {
                        "age": "74",
                        "gender_percentage": 0.617609711,
                        "total_percentage": 0.313518692,
                        "actual_value": 991123
                    }, {
                        "age": "75",
                        "gender_percentage": 0.596877176,
                        "total_percentage": 0.302994185,
                        "actual_value": 957852
                    }, {
                        "age": "76",
                        "gender_percentage": 0.554719172,
                        "total_percentage": 0.281593417,
                        "actual_value": 890198
                    }, {
                        "age": "77",
                        "gender_percentage": 0.534087585,
                        "total_percentage": 0.271120156,
                        "actual_value": 857089
                    }, {
                        "age": "78",
                        "gender_percentage": 0.51760612,
                        "total_percentage": 0.26275363,
                        "actual_value": 830640
                    }, {
                        "age": "79",
                        "gender_percentage": 0.468449616,
                        "total_percentage": 0.237800196,
                        "actual_value": 751755
                    }, {
                        "age": "80",
                        "gender_percentage": 0.458121048,
                        "total_percentage": 0.232557081,
                        "actual_value": 735180
                    }, {
                        "age": "81",
                        "gender_percentage": 0.442095099,
                        "total_percentage": 0.22442179,
                        "actual_value": 709462
                    }, {
                        "age": "82",
                        "gender_percentage": 0.426036747,
                        "total_percentage": 0.216270051,
                        "actual_value": 683692
                    }, {
                        "age": "83",
                        "gender_percentage": 0.413774572,
                        "total_percentage": 0.210045373,
                        "actual_value": 664014
                    }, {
                        "age": "84",
                        "gender_percentage": 0.377698427,
                        "total_percentage": 0.191731954,
                        "actual_value": 606120
                    }, {
                        "age": "85",
                        "gender_percentage": 0.358955582,
                        "total_percentage": 0.182217479,
                        "actual_value": 576042
                    }, {
                        "age": "86",
                        "gender_percentage": 0.331719944,
                        "total_percentage": 0.168391787,
                        "actual_value": 532335
                    }, {
                        "age": "87",
                        "gender_percentage": 0.299625049,
                        "total_percentage": 0.152099379,
                        "actual_value": 480830
                    }, {
                        "age": "88",
                        "gender_percentage": 0.274714351,
                        "total_percentage": 0.139453902,
                        "actual_value": 440854
                    }, {
                        "age": "89",
                        "gender_percentage": 0.242048036,
                        "total_percentage": 0.122871422,
                        "actual_value": 388432
                    }, {
                        "age": "90",
                        "gender_percentage": 0.207248708,
                        "total_percentage": 0.105206156,
                        "actual_value": 332587
                    }, {
                        "age": "91",
                        "gender_percentage": 0.178615987,
                        "total_percentage": 0.0906712595,
                        "actual_value": 286638
                    }, {
                        "age": "92",
                        "gender_percentage": 0.148797427,
                        "total_percentage": 0.0755343931,
                        "actual_value": 238786
                    }, {
                        "age": "93",
                        "gender_percentage": 0.118664182,
                        "total_percentage": 0.0602377817,
                        "actual_value": 190429
                    }, {
                        "age": "94",
                        "gender_percentage": 0.0882723324,
                        "total_percentage": 0.0448098947,
                        "actual_value": 141657
                    }, {
                        "age": "95",
                        "gender_percentage": 0.0711259753,
                        "total_percentage": 0.0361058486,
                        "actual_value": 114141
                    }, {
                        "age": "96",
                        "gender_percentage": 0.0514097834,
                        "total_percentage": 0.0260972711,
                        "actual_value": 82501
                    }, {
                        "age": "97",
                        "gender_percentage": 0.0386765134,
                        "total_percentage": 0.0196334508,
                        "actual_value": 62067
                    }, {
                        "age": "98",
                        "gender_percentage": 0.0280725172,
                        "total_percentage": 0.0142505189,
                        "actual_value": 45050
                    }, {
                        "age": "99",
                        "gender_percentage": 0.0197087142,
                        "total_percentage": 0.0100047816,
                        "actual_value": 31628
                    }, { "age": "100", "gender_percentage": 0.0342914678, "total_percentage": 0.0174074596, "actual_value": 55030 }]
            }, {
                "date": 1341100800,
                "max_gender_percentage": 1.46930248,
                "max_total_percentage": 0.74618867,
                "max_actual_value": 2342391,
                "age_groups": [{
                        "age": "00",
                        "gender_percentage": 1.20820484,
                        "total_percentage": 0.613589631,
                        "actual_value": 1926144
                    }, {
                        "age": "01",
                        "gender_percentage": 1.21804728,
                        "total_percentage": 0.618588133,
                        "actual_value": 1941835
                    }, {
                        "age": "02",
                        "gender_percentage": 1.22157628,
                        "total_percentage": 0.620380344,
                        "actual_value": 1947461
                    }, {
                        "age": "03",
                        "gender_percentage": 1.22311684,
                        "total_percentage": 0.621162723,
                        "actual_value": 1949917
                    }, {
                        "age": "04",
                        "gender_percentage": 1.26246901,
                        "total_percentage": 0.641147812,
                        "actual_value": 2012653
                    }, {
                        "age": "05",
                        "gender_percentage": 1.26728641,
                        "total_percentage": 0.643594342,
                        "actual_value": 2020333
                    }, {
                        "age": "06",
                        "gender_percentage": 1.25636383,
                        "total_percentage": 0.638047282,
                        "actual_value": 2002920
                    }, {
                        "age": "07",
                        "gender_percentage": 1.25318986,
                        "total_percentage": 0.636435376,
                        "actual_value": 1997860
                    }, {
                        "age": "08",
                        "gender_percentage": 1.25652692,
                        "total_percentage": 0.638130107,
                        "actual_value": 2003180
                    }, {
                        "age": "09",
                        "gender_percentage": 1.24778534,
                        "total_percentage": 0.633690675,
                        "actual_value": 1989244
                    }, {
                        "age": "10",
                        "gender_percentage": 1.24233816,
                        "total_percentage": 0.630924313,
                        "actual_value": 1980560
                    }, {
                        "age": "11",
                        "gender_percentage": 1.27199404,
                        "total_percentage": 0.645985124,
                        "actual_value": 2027838
                    }, {
                        "age": "12",
                        "gender_percentage": 1.28862977,
                        "total_percentage": 0.654433615,
                        "actual_value": 2054359
                    }, {
                        "age": "13",
                        "gender_percentage": 1.26725505,
                        "total_percentage": 0.643578414,
                        "actual_value": 2020283
                    }, {
                        "age": "14",
                        "gender_percentage": 1.26683039,
                        "total_percentage": 0.64336275,
                        "actual_value": 2019606
                    }, {
                        "age": "15",
                        "gender_percentage": 1.27047041,
                        "total_percentage": 0.645211345,
                        "actual_value": 2025409
                    }, {
                        "age": "16",
                        "gender_percentage": 1.2763203,
                        "total_percentage": 0.648182222,
                        "actual_value": 2034735
                    }, {
                        "age": "17",
                        "gender_percentage": 1.30150127,
                        "total_percentage": 0.660970436,
                        "actual_value": 2074879
                    }, {
                        "age": "18",
                        "gender_percentage": 1.32715457,
                        "total_percentage": 0.673998525,
                        "actual_value": 2115776
                    }, {
                        "age": "19",
                        "gender_percentage": 1.34505173,
                        "total_percentage": 0.683087638,
                        "actual_value": 2144308
                    }, {
                        "age": "20",
                        "gender_percentage": 1.38527328,
                        "total_percentage": 0.703514249,
                        "actual_value": 2208430
                    }, {
                        "age": "21",
                        "gender_percentage": 1.41793001,
                        "total_percentage": 0.720099044,
                        "actual_value": 2260492
                    }, {
                        "age": "22",
                        "gender_percentage": 1.4186175,
                        "total_percentage": 0.720448184,
                        "actual_value": 2261588
                    }, {
                        "age": "23",
                        "gender_percentage": 1.36356799,
                        "total_percentage": 0.692491167,
                        "actual_value": 2173827
                    }, {
                        "age": "24",
                        "gender_percentage": 1.33467925,
                        "total_percentage": 0.677819954,
                        "actual_value": 2127772
                    }, {
                        "age": "25",
                        "gender_percentage": 1.31446999,
                        "total_percentage": 0.667556634,
                        "actual_value": 2095554
                    }, {
                        "age": "26",
                        "gender_percentage": 1.32401573,
                        "total_percentage": 0.672404458,
                        "actual_value": 2110772
                    }, {
                        "age": "27",
                        "gender_percentage": 1.34134709,
                        "total_percentage": 0.681206231,
                        "actual_value": 2138402
                    }, {
                        "age": "28",
                        "gender_percentage": 1.30606965,
                        "total_percentage": 0.663290498,
                        "actual_value": 2082162
                    }, {
                        "age": "29",
                        "gender_percentage": 1.33174239,
                        "total_percentage": 0.676328462,
                        "actual_value": 2123090
                    }, {
                        "age": "30",
                        "gender_percentage": 1.33647951,
                        "total_percentage": 0.678734217,
                        "actual_value": 2130642
                    }, {
                        "age": "31",
                        "gender_percentage": 1.32581159,
                        "total_percentage": 0.673316491,
                        "actual_value": 2113635
                    }, {
                        "age": "32",
                        "gender_percentage": 1.34896148,
                        "total_percentage": 0.685073213,
                        "actual_value": 2150541
                    }, {
                        "age": "33",
                        "gender_percentage": 1.27216403,
                        "total_percentage": 0.646071453,
                        "actual_value": 2028109
                    }, {
                        "age": "34",
                        "gender_percentage": 1.24955862,
                        "total_percentage": 0.63459124,
                        "actual_value": 1992071
                    }, {
                        "age": "35",
                        "gender_percentage": 1.24145183,
                        "total_percentage": 0.63047419,
                        "actual_value": 1979147
                    }, {
                        "age": "36",
                        "gender_percentage": 1.20518268,
                        "total_percentage": 0.612054816,
                        "actual_value": 1921326
                    }, {
                        "age": "37",
                        "gender_percentage": 1.24200947,
                        "total_percentage": 0.630757388,
                        "actual_value": 1980036
                    }, {
                        "age": "38",
                        "gender_percentage": 1.20939539,
                        "total_percentage": 0.614194255,
                        "actual_value": 1928042
                    }, {
                        "age": "39",
                        "gender_percentage": 1.23348241,
                        "total_percentage": 0.626426903,
                        "actual_value": 1966442
                    }, {
                        "age": "40",
                        "gender_percentage": 1.28914601,
                        "total_percentage": 0.654695789,
                        "actual_value": 2055182
                    }, {
                        "age": "41",
                        "gender_percentage": 1.36574461,
                        "total_percentage": 0.693596565,
                        "actual_value": 2177297
                    }, {
                        "age": "42",
                        "gender_percentage": 1.37884945,
                        "total_percentage": 0.700251891,
                        "actual_value": 2198189
                    }, {
                        "age": "43",
                        "gender_percentage": 1.31037771,
                        "total_percentage": 0.665478358,
                        "actual_value": 2089030
                    }, {
                        "age": "44",
                        "gender_percentage": 1.28563645,
                        "total_percentage": 0.652913454,
                        "actual_value": 2049587
                    }, {
                        "age": "45",
                        "gender_percentage": 1.29236388,
                        "total_percentage": 0.656329994,
                        "actual_value": 2060312
                    }, {
                        "age": "46",
                        "gender_percentage": 1.31706876,
                        "total_percentage": 0.668876422,
                        "actual_value": 2099697
                    }, {
                        "age": "47",
                        "gender_percentage": 1.3991942,
                        "total_percentage": 0.710584018,
                        "actual_value": 2230623
                    }, {
                        "age": "48",
                        "gender_percentage": 1.43232451,
                        "total_percentage": 0.727409325,
                        "actual_value": 2283440
                    }, {
                        "age": "49",
                        "gender_percentage": 1.43548217,
                        "total_percentage": 0.729012949,
                        "actual_value": 2288474
                    }, {
                        "age": "50",
                        "gender_percentage": 1.43573559,
                        "total_percentage": 0.729141647,
                        "actual_value": 2288878
                    }, {
                        "age": "51",
                        "gender_percentage": 1.45830149,
                        "total_percentage": 0.74060179,
                        "actual_value": 2324853
                    }, {
                        "age": "52",
                        "gender_percentage": 1.46930248,
                        "total_percentage": 0.74618867,
                        "actual_value": 2342391
                    }, {
                        "age": "53",
                        "gender_percentage": 1.42709186,
                        "total_percentage": 0.72475191,
                        "actual_value": 2275098
                    }, {
                        "age": "54",
                        "gender_percentage": 1.42278505,
                        "total_percentage": 0.722564687,
                        "actual_value": 2268232
                    }, {
                        "age": "55",
                        "gender_percentage": 1.41267415,
                        "total_percentage": 0.717429842,
                        "actual_value": 2252113
                    }, {
                        "age": "56",
                        "gender_percentage": 1.36734602,
                        "total_percentage": 0.694409845,
                        "actual_value": 2179850
                    }, {
                        "age": "57",
                        "gender_percentage": 1.35872425,
                        "total_percentage": 0.690031258,
                        "actual_value": 2166105
                    }, {
                        "age": "58",
                        "gender_percentage": 1.3111574,
                        "total_percentage": 0.665874327,
                        "actual_value": 2090273
                    }, {
                        "age": "59",
                        "gender_percentage": 1.2652779,
                        "total_percentage": 0.642574317,
                        "actual_value": 2017131
                    }, {
                        "age": "60",
                        "gender_percentage": 1.2191337,
                        "total_percentage": 0.619139877,
                        "actual_value": 1943567
                    }, {
                        "age": "61",
                        "gender_percentage": 1.1876186,
                        "total_percentage": 0.603134858,
                        "actual_value": 1893325
                    }, {
                        "age": "62",
                        "gender_percentage": 1.16106391,
                        "total_percentage": 0.589649001,
                        "actual_value": 1850991
                    }, {
                        "age": "63",
                        "gender_percentage": 1.1307425,
                        "total_percentage": 0.574250199,
                        "actual_value": 1802652
                    }, {
                        "age": "64",
                        "gender_percentage": 1.12224367,
                        "total_percentage": 0.569934049,
                        "actual_value": 1789103
                    }, {
                        "age": "65",
                        "gender_percentage": 1.17262317,
                        "total_percentage": 0.595519398,
                        "actual_value": 1869419
                    }, {
                        "age": "66",
                        "gender_percentage": 0.870826633,
                        "total_percentage": 0.442251325,
                        "actual_value": 1388289
                    }, {
                        "age": "67",
                        "gender_percentage": 0.86346002,
                        "total_percentage": 0.438510173,
                        "actual_value": 1376545
                    }, {
                        "age": "68",
                        "gender_percentage": 0.847235155,
                        "total_percentage": 0.430270338,
                        "actual_value": 1350679
                    }, {
                        "age": "69",
                        "gender_percentage": 0.872051057,
                        "total_percentage": 0.442873151,
                        "actual_value": 1390241
                    }, {
                        "age": "70",
                        "gender_percentage": 0.765910104,
                        "total_percentage": 0.388969222,
                        "actual_value": 1221029
                    }, {
                        "age": "71",
                        "gender_percentage": 0.706582649,
                        "total_percentage": 0.358839636,
                        "actual_value": 1126448
                    }, {
                        "age": "72",
                        "gender_percentage": 0.672383474,
                        "total_percentage": 0.341471506,
                        "actual_value": 1071927
                    }, {
                        "age": "73",
                        "gender_percentage": 0.634893033,
                        "total_percentage": 0.322431899,
                        "actual_value": 1012159
                    }, {
                        "age": "74",
                        "gender_percentage": 0.614915235,
                        "total_percentage": 0.312286128,
                        "actual_value": 980310
                    }, {
                        "age": "75",
                        "gender_percentage": 0.572873979,
                        "total_percentage": 0.290935378,
                        "actual_value": 913287
                    }, {
                        "age": "76",
                        "gender_percentage": 0.553161514,
                        "total_percentage": 0.280924358,
                        "actual_value": 881861
                    }, {
                        "age": "77",
                        "gender_percentage": 0.537734532,
                        "total_percentage": 0.273089729,
                        "actual_value": 857267
                    }, {
                        "age": "78",
                        "gender_percentage": 0.488388762,
                        "total_percentage": 0.248029365,
                        "actual_value": 778599
                    }, {
                        "age": "79",
                        "gender_percentage": 0.47947531,
                        "total_percentage": 0.243502648,
                        "actual_value": 764389
                    }, {
                        "age": "80",
                        "gender_percentage": 0.464763411,
                        "total_percentage": 0.236031176,
                        "actual_value": 740935
                    }, {
                        "age": "81",
                        "gender_percentage": 0.450191392,
                        "total_percentage": 0.228630742,
                        "actual_value": 717704
                    }, {
                        "age": "82",
                        "gender_percentage": 0.439852792,
                        "total_percentage": 0.22338026,
                        "actual_value": 701222
                    }, {
                        "age": "83",
                        "gender_percentage": 0.404325068,
                        "total_percentage": 0.205337423,
                        "actual_value": 644583
                    }, {
                        "age": "84",
                        "gender_percentage": 0.38734372,
                        "total_percentage": 0.196713406,
                        "actual_value": 617511
                    }, {
                        "age": "85",
                        "gender_percentage": 0.361132151,
                        "total_percentage": 0.1834018,
                        "actual_value": 575724
                    }, {
                        "age": "86",
                        "gender_percentage": 0.329457722,
                        "total_percentage": 0.167315868,
                        "actual_value": 525228
                    }, {
                        "age": "87",
                        "gender_percentage": 0.305321776,
                        "total_percentage": 0.155058372,
                        "actual_value": 486750
                    }, {
                        "age": "88",
                        "gender_percentage": 0.272365843,
                        "total_percentage": 0.138321625,
                        "actual_value": 434211
                    }, {
                        "age": "89",
                        "gender_percentage": 0.236383977,
                        "total_percentage": 0.120048151,
                        "actual_value": 376848
                    }, {
                        "age": "90",
                        "gender_percentage": 0.206846643,
                        "total_percentage": 0.105047547,
                        "actual_value": 329759
                    }, {
                        "age": "91",
                        "gender_percentage": 0.175019789,
                        "total_percentage": 0.0888842054,
                        "actual_value": 279020
                    }, {
                        "age": "92",
                        "gender_percentage": 0.142141636,
                        "total_percentage": 0.0721869592,
                        "actual_value": 226605
                    }, {
                        "age": "93",
                        "gender_percentage": 0.1076696,
                        "total_percentage": 0.0546802558,
                        "actual_value": 171649
                    }, {
                        "age": "94",
                        "gender_percentage": 0.0886069827,
                        "total_percentage": 0.0449992616,
                        "actual_value": 141259
                    }, {
                        "age": "95",
                        "gender_percentage": 0.0656038801,
                        "total_percentage": 0.0333170826,
                        "actual_value": 104587
                    }, {
                        "age": "96",
                        "gender_percentage": 0.0503951861,
                        "total_percentage": 0.0255933121,
                        "actual_value": 80341
                    }, {
                        "age": "97",
                        "gender_percentage": 0.037555049,
                        "total_percentage": 0.0190724187,
                        "actual_value": 59871
                    }, {
                        "age": "98",
                        "gender_percentage": 0.0270690415,
                        "total_percentage": 0.0137470755,
                        "actual_value": 43154
                    }, {
                        "age": "99",
                        "gender_percentage": 0.018530068,
                        "total_percentage": 0.00941053799,
                        "actual_value": 29541
                    }, { "age": "100", "gender_percentage": 0.0320771341, "total_percentage": 0.0162904469, "actual_value": 51138 }]
            }, {
                "date": 1309478400,
                "max_gender_percentage": 1.48399981,
                "max_total_percentage": 0.753930982,
                "max_actual_value": 2349188,
                "age_groups": [{
                        "age": "00",
                        "gender_percentage": 1.22182223,
                        "total_percentage": 0.620734331,
                        "actual_value": 1934158
                    }, {
                        "age": "01",
                        "gender_percentage": 1.22593843,
                        "total_percentage": 0.622825527,
                        "actual_value": 1940674
                    }, {
                        "age": "02",
                        "gender_percentage": 1.22823722,
                        "total_percentage": 0.623993401,
                        "actual_value": 1944313
                    }, {
                        "age": "03",
                        "gender_percentage": 1.26832096,
                        "total_percentage": 0.644357536,
                        "actual_value": 2007766
                    }, {
                        "age": "04",
                        "gender_percentage": 1.27321353,
                        "total_percentage": 0.646843159,
                        "actual_value": 2015511
                    }, {
                        "age": "05",
                        "gender_percentage": 1.26215802,
                        "total_percentage": 0.641226518,
                        "actual_value": 1998010
                    }, {
                        "age": "06",
                        "gender_percentage": 1.25895463,
                        "total_percentage": 0.639599069,
                        "actual_value": 1992939
                    }, {
                        "age": "07",
                        "gender_percentage": 1.26240059,
                        "total_percentage": 0.641349756,
                        "actual_value": 1998394
                    }, {
                        "age": "08",
                        "gender_percentage": 1.25362112,
                        "total_percentage": 0.636889435,
                        "actual_value": 1984496
                    }, {
                        "age": "09",
                        "gender_percentage": 1.24804441,
                        "total_percentage": 0.634056242,
                        "actual_value": 1975668
                    }, {
                        "age": "10",
                        "gender_percentage": 1.27792354,
                        "total_percentage": 0.649236033,
                        "actual_value": 2022967
                    }, {
                        "age": "11",
                        "gender_percentage": 1.29465748,
                        "total_percentage": 0.657737537,
                        "actual_value": 2049457
                    }, {
                        "age": "12",
                        "gender_percentage": 1.27307013,
                        "total_percentage": 0.646770308,
                        "actual_value": 2015284
                    }, {
                        "age": "13",
                        "gender_percentage": 1.27247507,
                        "total_percentage": 0.646467989,
                        "actual_value": 2014342
                    }, {
                        "age": "14",
                        "gender_percentage": 1.27581238,
                        "total_percentage": 0.648163476,
                        "actual_value": 2019625
                    }, {
                        "age": "15",
                        "gender_percentage": 1.28116862,
                        "total_percentage": 0.650884663,
                        "actual_value": 2028104
                    }, {
                        "age": "16",
                        "gender_percentage": 1.30563592,
                        "total_percentage": 0.663315024,
                        "actual_value": 2066836
                    }, {
                        "age": "17",
                        "gender_percentage": 1.330306,
                        "total_percentage": 0.675848405,
                        "actual_value": 2105889
                    }, {
                        "age": "18",
                        "gender_percentage": 1.34735389,
                        "total_percentage": 0.684509412,
                        "actual_value": 2132876
                    }, {
                        "age": "19",
                        "gender_percentage": 1.38742373,
                        "total_percentage": 0.704866487,
                        "actual_value": 2196307
                    }, {
                        "age": "20",
                        "gender_percentage": 1.41990234,
                        "total_percentage": 0.721366915,
                        "actual_value": 2247721
                    }, {
                        "age": "21",
                        "gender_percentage": 1.41997815,
                        "total_percentage": 0.721405427,
                        "actual_value": 2247841
                    }, {
                        "age": "22",
                        "gender_percentage": 1.36393558,
                        "total_percentage": 0.692933572,
                        "actual_value": 2159125
                    }, {
                        "age": "23",
                        "gender_percentage": 1.33445695,
                        "total_percentage": 0.677957253,
                        "actual_value": 2112460
                    }, {
                        "age": "24",
                        "gender_percentage": 1.314013,
                        "total_percentage": 0.667570911,
                        "actual_value": 2080097
                    }, {
                        "age": "25",
                        "gender_percentage": 1.32431109,
                        "total_percentage": 0.672802754,
                        "actual_value": 2096399
                    }, {
                        "age": "26",
                        "gender_percentage": 1.34253838,
                        "total_percentage": 0.682062943,
                        "actual_value": 2125253
                    }, {
                        "age": "27",
                        "gender_percentage": 1.30780394,
                        "total_percentage": 0.664416465,
                        "actual_value": 2070268
                    }, {
                        "age": "28",
                        "gender_percentage": 1.33451885,
                        "total_percentage": 0.677988704,
                        "actual_value": 2112558
                    }, {
                        "age": "29",
                        "gender_percentage": 1.34030151,
                        "total_percentage": 0.680926521,
                        "actual_value": 2121712
                    }, {
                        "age": "30",
                        "gender_percentage": 1.3302005,
                        "total_percentage": 0.675794809,
                        "actual_value": 2105722
                    }, {
                        "age": "31",
                        "gender_percentage": 1.35402156,
                        "total_percentage": 0.687896856,
                        "actual_value": 2143431
                    }, {
                        "age": "32",
                        "gender_percentage": 1.27726215,
                        "total_percentage": 0.648900016,
                        "actual_value": 2021920
                    }, {
                        "age": "33",
                        "gender_percentage": 1.25492181,
                        "total_percentage": 0.637550235,
                        "actual_value": 1986555
                    }, {
                        "age": "34",
                        "gender_percentage": 1.24726551,
                        "total_percentage": 0.633660532,
                        "actual_value": 1974435
                    }, {
                        "age": "35",
                        "gender_percentage": 1.21117606,
                        "total_percentage": 0.615325654,
                        "actual_value": 1917305
                    }, {
                        "age": "36",
                        "gender_percentage": 1.2487317,
                        "total_percentage": 0.634405417,
                        "actual_value": 1976756
                    }, {
                        "age": "37",
                        "gender_percentage": 1.21620003,
                        "total_percentage": 0.617878031,
                        "actual_value": 1925258
                    }, {
                        "age": "38",
                        "gender_percentage": 1.24080314,
                        "total_percentage": 0.630377392,
                        "actual_value": 1964205
                    }, {
                        "age": "39",
                        "gender_percentage": 1.29725948,
                        "total_percentage": 0.659059458,
                        "actual_value": 2053576
                    }, {
                        "age": "40",
                        "gender_percentage": 1.37491908,
                        "total_percentage": 0.698513627,
                        "actual_value": 2176512
                    }, {
                        "age": "41",
                        "gender_percentage": 1.38851279,
                        "total_percentage": 0.705419775,
                        "actual_value": 2198031
                    }, {
                        "age": "42",
                        "gender_percentage": 1.31977606,
                        "total_percentage": 0.670498779,
                        "actual_value": 2089220
                    }, {
                        "age": "43",
                        "gender_percentage": 1.29511041,
                        "total_percentage": 0.657967646,
                        "actual_value": 2050174
                    }, {
                        "age": "44",
                        "gender_percentage": 1.30239905,
                        "total_percentage": 0.661670566,
                        "actual_value": 2061712
                    }, {
                        "age": "45",
                        "gender_percentage": 1.32785181,
                        "total_percentage": 0.674601582,
                        "actual_value": 2102004
                    }, {
                        "age": "46",
                        "gender_percentage": 1.41110329,
                        "total_percentage": 0.716896645,
                        "actual_value": 2233792
                    }, {
                        "age": "47",
                        "gender_percentage": 1.44490154,
                        "total_percentage": 0.734067502,
                        "actual_value": 2287295
                    }, {
                        "age": "48",
                        "gender_percentage": 1.44863746,
                        "total_percentage": 0.735965497,
                        "actual_value": 2293209
                    }, {
                        "age": "49",
                        "gender_percentage": 1.44938729,
                        "total_percentage": 0.736346444,
                        "actual_value": 2294396
                    }, {
                        "age": "50",
                        "gender_percentage": 1.47235239,
                        "total_percentage": 0.748013627,
                        "actual_value": 2330750
                    }, {
                        "age": "51",
                        "gender_percentage": 1.48399981,
                        "total_percentage": 0.753930982,
                        "actual_value": 2349188
                    }, {
                        "age": "52",
                        "gender_percentage": 1.44173984,
                        "total_percentage": 0.732461234,
                        "actual_value": 2282290
                    }, {
                        "age": "53",
                        "gender_percentage": 1.43780683,
                        "total_percentage": 0.730463108,
                        "actual_value": 2276064
                    }, {
                        "age": "54",
                        "gender_percentage": 1.42798567,
                        "total_percentage": 0.725473569,
                        "actual_value": 2260517
                    }, {
                        "age": "55",
                        "gender_percentage": 1.38243261,
                        "total_percentage": 0.702330799,
                        "actual_value": 2188406
                    }, {
                        "age": "56",
                        "gender_percentage": 1.37405933,
                        "total_percentage": 0.698076837,
                        "actual_value": 2175151
                    }, {
                        "age": "57",
                        "gender_percentage": 1.32641089,
                        "total_percentage": 0.673869534,
                        "actual_value": 2099723
                    }, {
                        "age": "58",
                        "gender_percentage": 1.2805565,
                        "total_percentage": 0.65057368,
                        "actual_value": 2027135
                    }, {
                        "age": "59",
                        "gender_percentage": 1.23433698,
                        "total_percentage": 0.627092326,
                        "actual_value": 1953969
                    }, {
                        "age": "60",
                        "gender_percentage": 1.20301503,
                        "total_percentage": 0.611179526,
                        "actual_value": 1904386
                    }, {
                        "age": "61",
                        "gender_percentage": 1.17714408,
                        "total_percentage": 0.598036052,
                        "actual_value": 1863432
                    }, {
                        "age": "62",
                        "gender_percentage": 1.1473717,
                        "total_percentage": 0.5829105,
                        "actual_value": 1816302
                    }, {
                        "age": "63",
                        "gender_percentage": 1.13863834,
                        "total_percentage": 0.578473607,
                        "actual_value": 1802477
                    }, {
                        "age": "64",
                        "gender_percentage": 1.19030949,
                        "total_percentage": 0.604724608,
                        "actual_value": 1884273
                    }, {
                        "age": "65",
                        "gender_percentage": 0.885586403,
                        "total_percentage": 0.449913147,
                        "actual_value": 1401893
                    }, {
                        "age": "66",
                        "gender_percentage": 0.879257325,
                        "total_percentage": 0.446697724,
                        "actual_value": 1391874
                    }, {
                        "age": "67",
                        "gender_percentage": 0.863191739,
                        "total_percentage": 0.438535766,
                        "actual_value": 1366442
                    }, {
                        "age": "68",
                        "gender_percentage": 0.888999519,
                        "total_percentage": 0.451647146,
                        "actual_value": 1407296
                    }, {
                        "age": "69",
                        "gender_percentage": 0.782196091,
                        "total_percentage": 0.397386752,
                        "actual_value": 1238225
                    }, {
                        "age": "70",
                        "gender_percentage": 0.722953924,
                        "total_percentage": 0.367289374,
                        "actual_value": 1144444
                    }, {
                        "age": "71",
                        "gender_percentage": 0.689078606,
                        "total_percentage": 0.350079364,
                        "actual_value": 1090819
                    }, {
                        "age": "72",
                        "gender_percentage": 0.651840078,
                        "total_percentage": 0.331160709,
                        "actual_value": 1031870
                    }, {
                        "age": "73",
                        "gender_percentage": 0.632647539,
                        "total_percentage": 0.321410135,
                        "actual_value": 1001488
                    }, {
                        "age": "74",
                        "gender_percentage": 0.59072932,
                        "total_percentage": 0.300114011,
                        "actual_value": 935131
                    }, {
                        "age": "75",
                        "gender_percentage": 0.571814732,
                        "total_percentage": 0.290504647,
                        "actual_value": 905189
                    }, {
                        "age": "76",
                        "gender_percentage": 0.557474339,
                        "total_percentage": 0.283219157,
                        "actual_value": 882488
                    }, {
                        "age": "77",
                        "gender_percentage": 0.507940254,
                        "total_percentage": 0.25805387,
                        "actual_value": 804075
                    }, {
                        "age": "78",
                        "gender_percentage": 0.500378715,
                        "total_percentage": 0.254212307,
                        "actual_value": 792105
                    }, {
                        "age": "79",
                        "gender_percentage": 0.487032629,
                        "total_percentage": 0.247431964,
                        "actual_value": 770978
                    }, {
                        "age": "80",
                        "gender_percentage": 0.473887427,
                        "total_percentage": 0.240753678,
                        "actual_value": 750169
                    }, {
                        "age": "81",
                        "gender_percentage": 0.465389065,
                        "total_percentage": 0.236436172,
                        "actual_value": 736716
                    }, {
                        "age": "82",
                        "gender_percentage": 0.430485327,
                        "total_percentage": 0.218703684,
                        "actual_value": 681463
                    }, {
                        "age": "83",
                        "gender_percentage": 0.415302868,
                        "total_percentage": 0.21099039,
                        "actual_value": 657429
                    }, {
                        "age": "84",
                        "gender_percentage": 0.390357368,
                        "total_percentage": 0.198317083,
                        "actual_value": 617940
                    }, {
                        "age": "85",
                        "gender_percentage": 0.359422017,
                        "total_percentage": 0.182600693,
                        "actual_value": 568969
                    }, {
                        "age": "86",
                        "gender_percentage": 0.336379221,
                        "total_percentage": 0.170894035,
                        "actual_value": 532492
                    }, {
                        "age": "87",
                        "gender_percentage": 0.303451464,
                        "total_percentage": 0.154165424,
                        "actual_value": 480367
                    }, {
                        "age": "88",
                        "gender_percentage": 0.266657658,
                        "total_percentage": 0.135472705,
                        "actual_value": 422122
                    }, {
                        "age": "89",
                        "gender_percentage": 0.236695768,
                        "total_percentage": 0.120250873,
                        "actual_value": 374692
                    }, {
                        "age": "90",
                        "gender_percentage": 0.203168521,
                        "total_percentage": 0.103217697,
                        "actual_value": 321618
                    }, {
                        "age": "91",
                        "gender_percentage": 0.167864281,
                        "total_percentage": 0.0852817373,
                        "actual_value": 265731
                    }, {
                        "age": "92",
                        "gender_percentage": 0.129263159,
                        "total_percentage": 0.0656708306,
                        "actual_value": 204625
                    }, {
                        "age": "93",
                        "gender_percentage": 0.108571578,
                        "total_percentage": 0.0551586837,
                        "actual_value": 171870
                    }, {
                        "age": "94",
                        "gender_percentage": 0.0822205289,
                        "total_percentage": 0.0417713018,
                        "actual_value": 130156
                    }, {
                        "age": "95",
                        "gender_percentage": 0.0644493319,
                        "total_percentage": 0.0327428263,
                        "actual_value": 102024
                    }, {
                        "age": "96",
                        "gender_percentage": 0.04925487,
                        "total_percentage": 0.0250234347,
                        "actual_value": 77971
                    }, {
                        "age": "97",
                        "gender_percentage": 0.0363850919,
                        "total_percentage": 0.0184850751,
                        "actual_value": 57598
                    }, {
                        "age": "98",
                        "gender_percentage": 0.0255746805,
                        "total_percentage": 0.0129929558,
                        "actual_value": 40485
                    }, {
                        "age": "99",
                        "gender_percentage": 0.0172494066,
                        "total_percentage": 0.00876338522,
                        "actual_value": 27306
                    }, { "age": "100", "gender_percentage": 0.030403453, "total_percentage": 0.0154461645, "actual_value": 48129 }]
            }, {
                "date": 1277942400,
                "max_gender_percentage": 1.49787249,
                "max_total_percentage": 0.761375015,
                "max_actual_value": 2355163,
                "age_groups": [{
                        "age": "00",
                        "gender_percentage": 1.22926689,
                        "total_percentage": 0.624841636,
                        "actual_value": 1932824
                    }, {
                        "age": "01",
                        "gender_percentage": 1.23222299,
                        "total_percentage": 0.626344237,
                        "actual_value": 1937472
                    }, {
                        "age": "02",
                        "gender_percentage": 1.273328,
                        "total_percentage": 0.64723809,
                        "actual_value": 2002103
                    }, {
                        "age": "03",
                        "gender_percentage": 1.27870852,
                        "total_percentage": 0.649973031,
                        "actual_value": 2010563
                    }, {
                        "age": "04",
                        "gender_percentage": 1.26764284,
                        "total_percentage": 0.644348298,
                        "actual_value": 1993164
                    }, {
                        "age": "05",
                        "gender_percentage": 1.26437637,
                        "total_percentage": 0.642687936,
                        "actual_value": 1988028
                    }, {
                        "age": "06",
                        "gender_percentage": 1.26786099,
                        "total_percentage": 0.644459182,
                        "actual_value": 1993507
                    }, {
                        "age": "07",
                        "gender_percentage": 1.25912623,
                        "total_percentage": 0.640019267,
                        "actual_value": 1979773
                    }, {
                        "age": "08",
                        "gender_percentage": 1.25354664,
                        "total_percentage": 0.637183139,
                        "actual_value": 1971000
                    }, {
                        "age": "09",
                        "gender_percentage": 1.28355799,
                        "total_percentage": 0.652438034,
                        "actual_value": 2018188
                    }, {
                        "age": "10",
                        "gender_percentage": 1.30042903,
                        "total_percentage": 0.661013659,
                        "actual_value": 2044715
                    }, {
                        "age": "11",
                        "gender_percentage": 1.27868881,
                        "total_percentage": 0.649963009,
                        "actual_value": 2010532
                    }, {
                        "age": "12",
                        "gender_percentage": 1.27800193,
                        "total_percentage": 0.649613868,
                        "actual_value": 2009452
                    }, {
                        "age": "13",
                        "gender_percentage": 1.28119081,
                        "total_percentage": 0.651234789,
                        "actual_value": 2014466
                    }, {
                        "age": "14",
                        "gender_percentage": 1.2862457,
                        "total_percentage": 0.653804212,
                        "actual_value": 2022414
                    }, {
                        "age": "15",
                        "gender_percentage": 1.31030032,
                        "total_percentage": 0.666031274,
                        "actual_value": 2060236
                    }, {
                        "age": "16",
                        "gender_percentage": 1.33419529,
                        "total_percentage": 0.678177194,
                        "actual_value": 2097807
                    }, {
                        "age": "17",
                        "gender_percentage": 1.35017213,
                        "total_percentage": 0.686298289,
                        "actual_value": 2122928
                    }, {
                        "age": "18",
                        "gender_percentage": 1.38950844,
                        "total_percentage": 0.706293102,
                        "actual_value": 2184778
                    }, {
                        "age": "19",
                        "gender_percentage": 1.4220485,
                        "total_percentage": 0.722833355,
                        "actual_value": 2235942
                    }, {
                        "age": "20",
                        "gender_percentage": 1.42209683,
                        "total_percentage": 0.722857924,
                        "actual_value": 2236018
                    }, {
                        "age": "21",
                        "gender_percentage": 1.364994,
                        "total_percentage": 0.693832309,
                        "actual_value": 2146233
                    }, {
                        "age": "22",
                        "gender_percentage": 1.3344904,
                        "total_percentage": 0.678327196,
                        "actual_value": 2098271
                    }, {
                        "age": "23",
                        "gender_percentage": 1.31372133,
                        "total_percentage": 0.667770193,
                        "actual_value": 2065615
                    }, {
                        "age": "24",
                        "gender_percentage": 1.32400983,
                        "total_percentage": 0.672999879,
                        "actual_value": 2081792
                    }, {
                        "age": "25",
                        "gender_percentage": 1.34307315,
                        "total_percentage": 0.682689847,
                        "actual_value": 2111766
                    }, {
                        "age": "26",
                        "gender_percentage": 1.30884516,
                        "total_percentage": 0.665291612,
                        "actual_value": 2057948
                    }, {
                        "age": "27",
                        "gender_percentage": 1.33641746,
                        "total_percentage": 0.679306731,
                        "actual_value": 2101301
                    }, {
                        "age": "28",
                        "gender_percentage": 1.34321879,
                        "total_percentage": 0.682763878,
                        "actual_value": 2111995
                    }, {
                        "age": "29",
                        "gender_percentage": 1.3340064,
                        "total_percentage": 0.67808118,
                        "actual_value": 2097510
                    }, {
                        "age": "30",
                        "gender_percentage": 1.35863341,
                        "total_percentage": 0.690599194,
                        "actual_value": 2136232
                    }, {
                        "age": "31",
                        "gender_percentage": 1.28190885,
                        "total_percentage": 0.651599771,
                        "actual_value": 2015595
                    }, {
                        "age": "32",
                        "gender_percentage": 1.25988561,
                        "total_percentage": 0.640405262,
                        "actual_value": 1980967
                    }, {
                        "age": "33",
                        "gender_percentage": 1.25258565,
                        "total_percentage": 0.636694664,
                        "actual_value": 1969489
                    }, {
                        "age": "34",
                        "gender_percentage": 1.2166939,
                        "total_percentage": 0.618450731,
                        "actual_value": 1913055
                    }, {
                        "age": "35",
                        "gender_percentage": 1.25497318,
                        "total_percentage": 0.637908254,
                        "actual_value": 1973243
                    }, {
                        "age": "36",
                        "gender_percentage": 1.22262901,
                        "total_percentage": 0.621467572,
                        "actual_value": 1922387
                    }, {
                        "age": "37",
                        "gender_percentage": 1.24771965,
                        "total_percentage": 0.634221256,
                        "actual_value": 1961838
                    }, {
                        "age": "38",
                        "gender_percentage": 1.3049039,
                        "total_percentage": 0.663288251,
                        "actual_value": 2051751
                    }, {
                        "age": "39",
                        "gender_percentage": 1.38352945,
                        "total_percentage": 0.703253955,
                        "actual_value": 2175377
                    }, {
                        "age": "40",
                        "gender_percentage": 1.39765935,
                        "total_percentage": 0.710436247,
                        "actual_value": 2197594
                    }, {
                        "age": "41",
                        "gender_percentage": 1.3287499,
                        "total_percentage": 0.675409278,
                        "actual_value": 2089245
                    }, {
                        "age": "42",
                        "gender_percentage": 1.3042043,
                        "total_percentage": 0.662932644,
                        "actual_value": 2050651
                    }, {
                        "age": "43",
                        "gender_percentage": 1.3117701,
                        "total_percentage": 0.666778373,
                        "actual_value": 2062547
                    }, {
                        "age": "44",
                        "gender_percentage": 1.33790823,
                        "total_percentage": 0.680064498,
                        "actual_value": 2103645
                    }, {
                        "age": "45",
                        "gender_percentage": 1.42234042,
                        "total_percentage": 0.72298174,
                        "actual_value": 2236401
                    }, {
                        "age": "46",
                        "gender_percentage": 1.45684698,
                        "total_percentage": 0.740521572,
                        "actual_value": 2290657
                    }, {
                        "age": "47",
                        "gender_percentage": 1.46106935,
                        "total_percentage": 0.742667822,
                        "actual_value": 2297296
                    }, {
                        "age": "48",
                        "gender_percentage": 1.46227393,
                        "total_percentage": 0.743280113,
                        "actual_value": 2299190
                    }, {
                        "age": "49",
                        "gender_percentage": 1.48598446,
                        "total_percentage": 0.755332281,
                        "actual_value": 2336471
                    }, {
                        "age": "50",
                        "gender_percentage": 1.49787249,
                        "total_percentage": 0.761375015,
                        "actual_value": 2355163
                    }, {
                        "age": "51",
                        "gender_percentage": 1.4558084,
                        "total_percentage": 0.739993657,
                        "actual_value": 2289024
                    }, {
                        "age": "52",
                        "gender_percentage": 1.4521457,
                        "total_percentage": 0.738131893,
                        "actual_value": 2283265
                    }, {
                        "age": "53",
                        "gender_percentage": 1.44265856,
                        "total_percentage": 0.733309538,
                        "actual_value": 2268348
                    }, {
                        "age": "54",
                        "gender_percentage": 1.39705961,
                        "total_percentage": 0.710131395,
                        "actual_value": 2196651
                    }, {
                        "age": "55",
                        "gender_percentage": 1.38876941,
                        "total_percentage": 0.705917452,
                        "actual_value": 2183616
                    }, {
                        "age": "56",
                        "gender_percentage": 1.34102843,
                        "total_percentage": 0.681650505,
                        "actual_value": 2108551
                    }, {
                        "age": "57",
                        "gender_percentage": 1.29514518,
                        "total_percentage": 0.658327856,
                        "actual_value": 2036407
                    }, {
                        "age": "58",
                        "gender_percentage": 1.24888798,
                        "total_percentage": 0.63481512,
                        "actual_value": 1963675
                    }, {
                        "age": "59",
                        "gender_percentage": 1.21774202,
                        "total_percentage": 0.618983495,
                        "actual_value": 1914703
                    }, {
                        "age": "60",
                        "gender_percentage": 1.19213176,
                        "total_percentage": 0.605965691,
                        "actual_value": 1874435
                    }, {
                        "age": "61",
                        "gender_percentage": 1.16301972,
                        "total_percentage": 0.591167913,
                        "actual_value": 1828661
                    }, {
                        "age": "62",
                        "gender_percentage": 1.1549254,
                        "total_percentage": 0.58705354,
                        "actual_value": 1815934
                    }, {
                        "age": "63",
                        "gender_percentage": 1.20727099,
                        "total_percentage": 0.613661027,
                        "actual_value": 1898239
                    }, {
                        "age": "64",
                        "gender_percentage": 0.899403499,
                        "total_percentage": 0.457170659,
                        "actual_value": 1414167
                    }, {
                        "age": "65",
                        "gender_percentage": 0.894085306,
                        "total_percentage": 0.454467399,
                        "actual_value": 1405805
                    }, {
                        "age": "66",
                        "gender_percentage": 0.878633166,
                        "total_percentage": 0.446613009,
                        "actual_value": 1381509
                    }, {
                        "age": "67",
                        "gender_percentage": 0.905358322,
                        "total_percentage": 0.460197521,
                        "actual_value": 1423530
                    }, {
                        "age": "68",
                        "gender_percentage": 0.797605463,
                        "total_percentage": 0.40542628,
                        "actual_value": 1254106
                    }, {
                        "age": "69",
                        "gender_percentage": 0.73841402,
                        "total_percentage": 0.375339016,
                        "actual_value": 1161037
                    }, {
                        "age": "70",
                        "gender_percentage": 0.704966394,
                        "total_percentage": 0.358337444,
                        "actual_value": 1108446
                    }, {
                        "age": "71",
                        "gender_percentage": 0.667971186,
                        "total_percentage": 0.339532621,
                        "actual_value": 1050277
                    }, {
                        "age": "72",
                        "gender_percentage": 0.649484076,
                        "total_percentage": 0.330135544,
                        "actual_value": 1021209
                    }, {
                        "age": "73",
                        "gender_percentage": 0.607749432,
                        "total_percentage": 0.308921645,
                        "actual_value": 955588
                    }, {
                        "age": "74",
                        "gender_percentage": 0.589623567,
                        "total_percentage": 0.29970819,
                        "actual_value": 927088
                    }, {
                        "age": "75",
                        "gender_percentage": 0.576284203,
                        "total_percentage": 0.292927734,
                        "actual_value": 906114
                    }, {
                        "age": "76",
                        "gender_percentage": 0.526632689,
                        "total_percentage": 0.267689656,
                        "actual_value": 828045
                    }, {
                        "age": "77",
                        "gender_percentage": 0.52037704,
                        "total_percentage": 0.264509883,
                        "actual_value": 818209
                    }, {
                        "age": "78",
                        "gender_percentage": 0.508354186,
                        "total_percentage": 0.258398614,
                        "actual_value": 799305
                    }, {
                        "age": "79",
                        "gender_percentage": 0.496672225,
                        "total_percentage": 0.252460624,
                        "actual_value": 780937
                    }, {
                        "age": "80",
                        "gender_percentage": 0.489968199,
                        "total_percentage": 0.249052938,
                        "actual_value": 770396
                    }, {
                        "age": "81",
                        "gender_percentage": 0.455642263,
                        "total_percentage": 0.231604918,
                        "actual_value": 716424
                    }, {
                        "age": "82",
                        "gender_percentage": 0.442290179,
                        "total_percentage": 0.224817996,
                        "actual_value": 695430
                    }, {
                        "age": "83",
                        "gender_percentage": 0.418698571,
                        "total_percentage": 0.212826281,
                        "actual_value": 658336
                    }, {
                        "age": "84",
                        "gender_percentage": 0.388755914,
                        "total_percentage": 0.1976063,
                        "actual_value": 611256
                    }, {
                        "age": "85",
                        "gender_percentage": 0.367130804,
                        "total_percentage": 0.186614163,
                        "actual_value": 577254
                    }, {
                        "age": "86",
                        "gender_percentage": 0.334585019,
                        "total_percentage": 0.170071001,
                        "actual_value": 526081
                    }, {
                        "age": "87",
                        "gender_percentage": 0.297337957,
                        "total_percentage": 0.15113816,
                        "actual_value": 467516
                    }, {
                        "age": "88",
                        "gender_percentage": 0.267365408,
                        "total_percentage": 0.135902985,
                        "actual_value": 420389
                    }, {
                        "age": "89",
                        "gender_percentage": 0.232586644,
                        "total_percentage": 0.118224789,
                        "actual_value": 365705
                    }, {
                        "age": "90",
                        "gender_percentage": 0.195189487,
                        "total_percentage": 0.0992156541,
                        "actual_value": 306904
                    }, {
                        "age": "91",
                        "gender_percentage": 0.152719632,
                        "total_percentage": 0.0776280445,
                        "actual_value": 240127
                    }, {
                        "age": "92",
                        "gender_percentage": 0.130618161,
                        "total_percentage": 0.0663937719,
                        "actual_value": 205376
                    }, {
                        "age": "93",
                        "gender_percentage": 0.10104311,
                        "total_percentage": 0.0513606464,
                        "actual_value": 158874
                    }, {
                        "age": "94",
                        "gender_percentage": 0.0807548612,
                        "total_percentage": 0.0410480426,
                        "actual_value": 126974
                    }, {
                        "age": "95",
                        "gender_percentage": 0.0631905803,
                        "total_percentage": 0.0321200432,
                        "actual_value": 99357
                    }, {
                        "age": "96",
                        "gender_percentage": 0.0477969512,
                        "total_percentage": 0.0242953955,
                        "actual_value": 75153
                    }, {
                        "age": "97",
                        "gender_percentage": 0.0344429589,
                        "total_percentage": 0.0175075038,
                        "actual_value": 54156
                    }, {
                        "age": "98",
                        "gender_percentage": 0.0238828937,
                        "total_percentage": 0.0121397774,
                        "actual_value": 37552
                    }, {
                        "age": "99",
                        "gender_percentage": 0.0165912082,
                        "total_percentage": 0.00843338232,
                        "actual_value": 26087
                    }, { "age": "100", "gender_percentage": 0.028673846, "total_percentage": 0.014575039, "actual_value": 45085 }]
            }, {
                "date": 1246406400,
                "max_gender_percentage": 1.51963906,
                "max_total_percentage": 0.772591579,
                "max_actual_value": 2370091,
                "age_groups": [{
                        "age": "00",
                        "gender_percentage": 1.25616684,
                        "total_percentage": 0.638641078,
                        "actual_value": 1959169
                    }, {
                        "age": "01",
                        "gender_percentage": 1.28101231,
                        "total_percentage": 0.651272628,
                        "actual_value": 1997919
                    }, {
                        "age": "02",
                        "gender_percentage": 1.28572557,
                        "total_percentage": 0.653668874,
                        "actual_value": 2005270
                    }, {
                        "age": "03",
                        "gender_percentage": 1.2627222,
                        "total_percentage": 0.641973851,
                        "actual_value": 1969393
                    }, {
                        "age": "04",
                        "gender_percentage": 1.26354611,
                        "total_percentage": 0.64239273,
                        "actual_value": 1970678
                    }, {
                        "age": "05",
                        "gender_percentage": 1.27693252,
                        "total_percentage": 0.649198446,
                        "actual_value": 1991556
                    }, {
                        "age": "06",
                        "gender_percentage": 1.26095833,
                        "total_percentage": 0.641077093,
                        "actual_value": 1966642
                    }, {
                        "age": "07",
                        "gender_percentage": 1.26215092,
                        "total_percentage": 0.641683407,
                        "actual_value": 1968502
                    }, {
                        "age": "08",
                        "gender_percentage": 1.28369562,
                        "total_percentage": 0.652636836,
                        "actual_value": 2002104
                    }, {
                        "age": "09",
                        "gender_percentage": 1.24768476,
                        "total_percentage": 0.634328748,
                        "actual_value": 1945940
                    }, {
                        "age": "10",
                        "gender_percentage": 1.29489564,
                        "total_percentage": 0.658330976,
                        "actual_value": 2019572
                    }, {
                        "age": "11",
                        "gender_percentage": 1.27345993,
                        "total_percentage": 0.647432963,
                        "actual_value": 1986140
                    }, {
                        "age": "12",
                        "gender_percentage": 1.28885065,
                        "total_percentage": 0.655257679,
                        "actual_value": 2010144
                    }, {
                        "age": "13",
                        "gender_percentage": 1.3036656,
                        "total_percentage": 0.662789668,
                        "actual_value": 2033250
                    }, {
                        "age": "14",
                        "gender_percentage": 1.30775372,
                        "total_percentage": 0.664868088,
                        "actual_value": 2039626
                    }, {
                        "age": "15",
                        "gender_percentage": 1.3302525,
                        "total_percentage": 0.676306568,
                        "actual_value": 2074716
                    }, {
                        "age": "16",
                        "gender_percentage": 1.36026838,
                        "total_percentage": 0.691566785,
                        "actual_value": 2121530
                    }, {
                        "age": "17",
                        "gender_percentage": 1.37708508,
                        "total_percentage": 0.70011647,
                        "actual_value": 2147758
                    }, {
                        "age": "18",
                        "gender_percentage": 1.41603956,
                        "total_percentage": 0.719921111,
                        "actual_value": 2208513
                    }, {
                        "age": "19",
                        "gender_percentage": 1.44395689,
                        "total_percentage": 0.73411441,
                        "actual_value": 2252054
                    }, {
                        "age": "20",
                        "gender_percentage": 1.37312775,
                        "total_percentage": 0.698104549,
                        "actual_value": 2141586
                    }, {
                        "age": "21",
                        "gender_percentage": 1.3505623,
                        "total_percentage": 0.686632168,
                        "actual_value": 2106392
                    }, {
                        "age": "22",
                        "gender_percentage": 1.32137866,
                        "total_percentage": 0.671795067,
                        "actual_value": 2060876
                    }, {
                        "age": "23",
                        "gender_percentage": 1.32626247,
                        "total_percentage": 0.674278023,
                        "actual_value": 2068493
                    }, {
                        "age": "24",
                        "gender_percentage": 1.33496512,
                        "total_percentage": 0.678702488,
                        "actual_value": 2082066
                    }, {
                        "age": "25",
                        "gender_percentage": 1.3262971,
                        "total_percentage": 0.674295625,
                        "actual_value": 2068547
                    }, {
                        "age": "26",
                        "gender_percentage": 1.33010182,
                        "total_percentage": 0.676229964,
                        "actual_value": 2074481
                    }, {
                        "age": "27",
                        "gender_percentage": 1.35816533,
                        "total_percentage": 0.690497585,
                        "actual_value": 2118250
                    }, {
                        "age": "28",
                        "gender_percentage": 1.36203738,
                        "total_percentage": 0.692466151,
                        "actual_value": 2124289
                    }, {
                        "age": "29",
                        "gender_percentage": 1.33447655,
                        "total_percentage": 0.678454095,
                        "actual_value": 2081304
                    }, {
                        "age": "30",
                        "gender_percentage": 1.30354955,
                        "total_percentage": 0.662730667,
                        "actual_value": 2033069
                    }, {
                        "age": "31",
                        "gender_percentage": 1.24393454,
                        "total_percentage": 0.632422118,
                        "actual_value": 1940091
                    }, {
                        "age": "32",
                        "gender_percentage": 1.25684521,
                        "total_percentage": 0.63898596,
                        "actual_value": 1960227
                    }, {
                        "age": "33",
                        "gender_percentage": 1.22322913,
                        "total_percentage": 0.621895391,
                        "actual_value": 1907798
                    }, {
                        "age": "34",
                        "gender_percentage": 1.25629829,
                        "total_percentage": 0.638707903,
                        "actual_value": 1959374
                    }, {
                        "age": "35",
                        "gender_percentage": 1.22832582,
                        "total_percentage": 0.62448657,
                        "actual_value": 1915747
                    }, {
                        "age": "36",
                        "gender_percentage": 1.2583385,
                        "total_percentage": 0.639745157,
                        "actual_value": 1962556
                    }, {
                        "age": "37",
                        "gender_percentage": 1.31211499,
                        "total_percentage": 0.667085373,
                        "actual_value": 2046428
                    }, {
                        "age": "38",
                        "gender_percentage": 1.38994894,
                        "total_percentage": 0.706656516,
                        "actual_value": 2167821
                    }, {
                        "age": "39",
                        "gender_percentage": 1.41033568,
                        "total_percentage": 0.717021233,
                        "actual_value": 2199617
                    }, {
                        "age": "40",
                        "gender_percentage": 1.33448232,
                        "total_percentage": 0.678457029,
                        "actual_value": 2081313
                    }, {
                        "age": "41",
                        "gender_percentage": 1.31608449,
                        "total_percentage": 0.669103488,
                        "actual_value": 2052619
                    }, {
                        "age": "42",
                        "gender_percentage": 1.31863892,
                        "total_percentage": 0.670402174,
                        "actual_value": 2056603
                    }, {
                        "age": "43",
                        "gender_percentage": 1.35772164,
                        "total_percentage": 0.69027201,
                        "actual_value": 2117558
                    }, {
                        "age": "44",
                        "gender_percentage": 1.43709248,
                        "total_percentage": 0.730624516,
                        "actual_value": 2241348
                    }, {
                        "age": "45",
                        "gender_percentage": 1.46328185,
                        "total_percentage": 0.743939311,
                        "actual_value": 2282194
                    }, {
                        "age": "46",
                        "gender_percentage": 1.46874785,
                        "total_percentage": 0.746718252,
                        "actual_value": 2290719
                    }, {
                        "age": "47",
                        "gender_percentage": 1.47836032,
                        "total_percentage": 0.751605277,
                        "actual_value": 2305711
                    }, {
                        "age": "48",
                        "gender_percentage": 1.49256103,
                        "total_percentage": 0.758824982,
                        "actual_value": 2327859
                    }, {
                        "age": "49",
                        "gender_percentage": 1.51963906,
                        "total_percentage": 0.772591579,
                        "actual_value": 2370091
                    }, {
                        "age": "50",
                        "gender_percentage": 1.45665532,
                        "total_percentage": 0.740570355,
                        "actual_value": 2271859
                    }, {
                        "age": "51",
                        "gender_percentage": 1.47117533,
                        "total_percentage": 0.747952396,
                        "actual_value": 2294505
                    }, {
                        "age": "52",
                        "gender_percentage": 1.45092003,
                        "total_percentage": 0.737654504,
                        "actual_value": 2262914
                    }, {
                        "age": "53",
                        "gender_percentage": 1.40331419,
                        "total_percentage": 0.713451475,
                        "actual_value": 2188666
                    }, {
                        "age": "54",
                        "gender_percentage": 1.4127202,
                        "total_percentage": 0.718233536,
                        "actual_value": 2203336
                    }, {
                        "age": "55",
                        "gender_percentage": 1.34597406,
                        "total_percentage": 0.684299487,
                        "actual_value": 2099236
                    }, {
                        "age": "56",
                        "gender_percentage": 1.31321524,
                        "total_percentage": 0.667644747,
                        "actual_value": 2048144
                    }, {
                        "age": "57",
                        "gender_percentage": 1.26221054,
                        "total_percentage": 0.641713723,
                        "actual_value": 1968595
                    }, {
                        "age": "58",
                        "gender_percentage": 1.23368218,
                        "total_percentage": 0.62720977,
                        "actual_value": 1924101
                    }, {
                        "age": "59",
                        "gender_percentage": 1.22216671,
                        "total_percentage": 0.62135525,
                        "actual_value": 1906141
                    }, {
                        "age": "60",
                        "gender_percentage": 1.16152646,
                        "total_percentage": 0.590525466,
                        "actual_value": 1811564
                    }, {
                        "age": "61",
                        "gender_percentage": 1.1689256,
                        "total_percentage": 0.594287223,
                        "actual_value": 1823104
                    }, {
                        "age": "62",
                        "gender_percentage": 1.22189164,
                        "total_percentage": 0.621215406,
                        "actual_value": 1905712
                    }, {
                        "age": "63",
                        "gender_percentage": 0.91836277,
                        "total_percentage": 0.466899912,
                        "actual_value": 1432316
                    }, {
                        "age": "64",
                        "gender_percentage": 0.904457004,
                        "total_percentage": 0.459830156,
                        "actual_value": 1410628
                    }, {
                        "age": "65",
                        "gender_percentage": 0.895081127,
                        "total_percentage": 0.455063416,
                        "actual_value": 1396005
                    }, {
                        "age": "66",
                        "gender_percentage": 0.91919886,
                        "total_percentage": 0.467324984,
                        "actual_value": 1433620
                    }, {
                        "age": "67",
                        "gender_percentage": 0.813455278,
                        "total_percentage": 0.413564454,
                        "actual_value": 1268698
                    }, {
                        "age": "68",
                        "gender_percentage": 0.753183065,
                        "total_percentage": 0.38292178,
                        "actual_value": 1174695
                    }, {
                        "age": "69",
                        "gender_percentage": 0.727641927,
                        "total_percentage": 0.369936546,
                        "actual_value": 1134860
                    }, {
                        "age": "70",
                        "gender_percentage": 0.679243601,
                        "total_percentage": 0.345330612,
                        "actual_value": 1059376
                    }, {
                        "age": "71",
                        "gender_percentage": 0.669551626,
                        "total_percentage": 0.340403167,
                        "actual_value": 1044260
                    }, {
                        "age": "72",
                        "gender_percentage": 0.624146298,
                        "total_percentage": 0.317318887,
                        "actual_value": 973444
                    }, {
                        "age": "73",
                        "gender_percentage": 0.610012274,
                        "total_percentage": 0.310133083,
                        "actual_value": 951400
                    }, {
                        "age": "74",
                        "gender_percentage": 0.601932849,
                        "total_percentage": 0.306025466,
                        "actual_value": 938799
                    }, {
                        "age": "75",
                        "gender_percentage": 0.540416759,
                        "total_percentage": 0.274750399,
                        "actual_value": 842856
                    }, {
                        "age": "76",
                        "gender_percentage": 0.543119305,
                        "total_percentage": 0.276124386,
                        "actual_value": 847071
                    }, {
                        "age": "77",
                        "gender_percentage": 0.52855313,
                        "total_percentage": 0.268718874,
                        "actual_value": 824353
                    }, {
                        "age": "78",
                        "gender_percentage": 0.519942814,
                        "total_percentage": 0.26434135,
                        "actual_value": 810924
                    }, {
                        "age": "79",
                        "gender_percentage": 0.519719685,
                        "total_percentage": 0.26422791,
                        "actual_value": 810576
                    }, {
                        "age": "80",
                        "gender_percentage": 0.477204767,
                        "total_percentage": 0.242613127,
                        "actual_value": 744268
                    }, {
                        "age": "81",
                        "gender_percentage": 0.471393813,
                        "total_percentage": 0.239658811,
                        "actual_value": 735205
                    }, {
                        "age": "82",
                        "gender_percentage": 0.446105297,
                        "total_percentage": 0.226802012,
                        "actual_value": 695764
                    }, {
                        "age": "83",
                        "gender_percentage": 0.419792827,
                        "total_percentage": 0.21342463,
                        "actual_value": 654726
                    }, {
                        "age": "84",
                        "gender_percentage": 0.400667269,
                        "total_percentage": 0.203701107,
                        "actual_value": 624897
                    }, {
                        "age": "85",
                        "gender_percentage": 0.364926346,
                        "total_percentage": 0.185530255,
                        "actual_value": 569154
                    }, {
                        "age": "86",
                        "gender_percentage": 0.32754979,
                        "total_percentage": 0.16652784,
                        "actual_value": 510860
                    }, {
                        "age": "87",
                        "gender_percentage": 0.30072887,
                        "total_percentage": 0.152891959,
                        "actual_value": 469029
                    }, {
                        "age": "88",
                        "gender_percentage": 0.264068504,
                        "total_percentage": 0.134253658,
                        "actual_value": 411852
                    }, {
                        "age": "89",
                        "gender_percentage": 0.228189729,
                        "total_percentage": 0.116012722,
                        "actual_value": 355894
                    }, {
                        "age": "90",
                        "gender_percentage": 0.177392133,
                        "total_percentage": 0.0901869873,
                        "actual_value": 276668
                    }, {
                        "age": "91",
                        "gender_percentage": 0.155142779,
                        "total_percentage": 0.0788753118,
                        "actual_value": 241967
                    }, {
                        "age": "92",
                        "gender_percentage": 0.124029845,
                        "total_percentage": 0.0630573511,
                        "actual_value": 193442
                    }, {
                        "age": "93",
                        "gender_percentage": 0.0993895549,
                        "total_percentage": 0.0505301129,
                        "actual_value": 155012
                    }, {
                        "age": "94",
                        "gender_percentage": 0.0806634477,
                        "total_percentage": 0.0410096727,
                        "actual_value": 125806
                    }, {
                        "age": "95",
                        "gender_percentage": 0.0613115552,
                        "total_percentage": 0.0311710804,
                        "actual_value": 95624
                    }, {
                        "age": "96",
                        "gender_percentage": 0.0462811708,
                        "total_percentage": 0.0235295629,
                        "actual_value": 72182
                    }, {
                        "age": "97",
                        "gender_percentage": 0.0327966553,
                        "total_percentage": 0.0166739724,
                        "actual_value": 51151
                    }, {
                        "age": "98",
                        "gender_percentage": 0.023005939,
                        "total_percentage": 0.0116963266,
                        "actual_value": 35881
                    }, {
                        "age": "99",
                        "gender_percentage": 0.0160729322,
                        "total_percentage": 0.00817155363,
                        "actual_value": 25068
                    }, { "age": "100", "gender_percentage": 0.0271626655, "total_percentage": 0.0138096257, "actual_value": 42364 }]
            }, {
                "date": 1214870400,
                "max_gender_percentage": 1.52708518,
                "max_total_percentage": 0.776383376,
                "max_actual_value": 2360935,
                "age_groups": [{
                        "age": "00",
                        "gender_percentage": 1.30843238,
                        "total_percentage": 0.665218395,
                        "actual_value": 2022889
                    }, {
                        "age": "01",
                        "gender_percentage": 1.29725092,
                        "total_percentage": 0.659533639,
                        "actual_value": 2005602
                    }, {
                        "age": "02",
                        "gender_percentage": 1.26638238,
                        "total_percentage": 0.643839806,
                        "actual_value": 1957878
                    }, {
                        "age": "03",
                        "gender_percentage": 1.26282814,
                        "total_percentage": 0.642032799,
                        "actual_value": 1952383
                    }, {
                        "age": "04",
                        "gender_percentage": 1.2777359,
                        "total_percentage": 0.649612035,
                        "actual_value": 1975431
                    }, {
                        "age": "05",
                        "gender_percentage": 1.27301545,
                        "total_percentage": 0.647212119,
                        "actual_value": 1968133
                    }, {
                        "age": "06",
                        "gender_percentage": 1.26362695,
                        "total_percentage": 0.642438923,
                        "actual_value": 1953618
                    }, {
                        "age": "07",
                        "gender_percentage": 1.2909296,
                        "total_percentage": 0.65631983,
                        "actual_value": 1995829
                    }, {
                        "age": "08",
                        "gender_percentage": 1.24164046,
                        "total_percentage": 0.631260799,
                        "actual_value": 1919626
                    }, {
                        "age": "09",
                        "gender_percentage": 1.23624344,
                        "total_percentage": 0.62851691,
                        "actual_value": 1911282
                    }, {
                        "age": "10",
                        "gender_percentage": 1.2932659,
                        "total_percentage": 0.657507621,
                        "actual_value": 1999441
                    }, {
                        "age": "11",
                        "gender_percentage": 1.28255984,
                        "total_percentage": 0.652064566,
                        "actual_value": 1982889
                    }, {
                        "age": "12",
                        "gender_percentage": 1.31387532,
                        "total_percentage": 0.667985632,
                        "actual_value": 2031304
                    }, {
                        "age": "13",
                        "gender_percentage": 1.32497465,
                        "total_percentage": 0.673628624,
                        "actual_value": 2048464
                    }, {
                        "age": "14",
                        "gender_percentage": 1.3236241,
                        "total_percentage": 0.672941995,
                        "actual_value": 2046376
                    }, {
                        "age": "15",
                        "gender_percentage": 1.35909666,
                        "total_percentage": 0.690976552,
                        "actual_value": 2101218
                    }, {
                        "age": "16",
                        "gender_percentage": 1.38924465,
                        "total_percentage": 0.706304051,
                        "actual_value": 2147828
                    }, {
                        "age": "17",
                        "gender_percentage": 1.40199981,
                        "total_percentage": 0.712788888,
                        "actual_value": 2167548
                    }, {
                        "age": "18",
                        "gender_percentage": 1.44262295,
                        "total_percentage": 0.733442044,
                        "actual_value": 2230353
                    }, {
                        "age": "19",
                        "gender_percentage": 1.39595404,
                        "total_percentage": 0.709715167,
                        "actual_value": 2158201
                    }, {
                        "age": "20",
                        "gender_percentage": 1.35827908,
                        "total_percentage": 0.690560891,
                        "actual_value": 2099954
                    }, {
                        "age": "21",
                        "gender_percentage": 1.34239463,
                        "total_percentage": 0.682485097,
                        "actual_value": 2075396
                    }, {
                        "age": "22",
                        "gender_percentage": 1.33406044,
                        "total_percentage": 0.67824792,
                        "actual_value": 2062511
                    }, {
                        "age": "23",
                        "gender_percentage": 1.33786758,
                        "total_percentage": 0.680183506,
                        "actual_value": 2068397
                    }, {
                        "age": "24",
                        "gender_percentage": 1.31517154,
                        "total_percentage": 0.668644639,
                        "actual_value": 2033308
                    }, {
                        "age": "25",
                        "gender_percentage": 1.34856847,
                        "total_percentage": 0.68562393,
                        "actual_value": 2084941
                    }, {
                        "age": "26",
                        "gender_percentage": 1.35046622,
                        "total_percentage": 0.686588763,
                        "actual_value": 2087875
                    }, {
                        "age": "27",
                        "gender_percentage": 1.38482885,
                        "total_percentage": 0.704059021,
                        "actual_value": 2141001
                    }, {
                        "age": "28",
                        "gender_percentage": 1.3624064,
                        "total_percentage": 0.692659255,
                        "actual_value": 2106335
                    }, {
                        "age": "29",
                        "gender_percentage": 1.27640928,
                        "total_percentage": 0.648937572,
                        "actual_value": 1973380
                    }, {
                        "age": "30",
                        "gender_percentage": 1.27091589,
                        "total_percentage": 0.646144685,
                        "actual_value": 1964887
                    }, {
                        "age": "31",
                        "gender_percentage": 1.23511864,
                        "total_percentage": 0.627945048,
                        "actual_value": 1909543
                    }, {
                        "age": "32",
                        "gender_percentage": 1.22956574,
                        "total_percentage": 0.625121907,
                        "actual_value": 1900958
                    }, {
                        "age": "33",
                        "gender_percentage": 1.26298337,
                        "total_percentage": 0.642111721,
                        "actual_value": 1952623
                    }, {
                        "age": "34",
                        "gender_percentage": 1.22756708,
                        "total_percentage": 0.624105774,
                        "actual_value": 1897868
                    }, {
                        "age": "35",
                        "gender_percentage": 1.26554799,
                        "total_percentage": 0.643415595,
                        "actual_value": 1956588
                    }, {
                        "age": "36",
                        "gender_percentage": 1.3244061,
                        "total_percentage": 0.673339569,
                        "actual_value": 2047585
                    }, {
                        "age": "37",
                        "gender_percentage": 1.39705298,
                        "total_percentage": 0.710273876,
                        "actual_value": 2159900
                    }, {
                        "age": "38",
                        "gender_percentage": 1.41821867,
                        "total_percentage": 0.721034695,
                        "actual_value": 2192623
                    }, {
                        "age": "39",
                        "gender_percentage": 1.34609247,
                        "total_percentage": 0.684365108,
                        "actual_value": 2081113
                    }, {
                        "age": "40",
                        "gender_percentage": 1.32199348,
                        "total_percentage": 0.672112974,
                        "actual_value": 2043855
                    }, {
                        "age": "41",
                        "gender_percentage": 1.3317332,
                        "total_percentage": 0.677064733,
                        "actual_value": 2058913
                    }, {
                        "age": "42",
                        "gender_percentage": 1.36470453,
                        "total_percentage": 0.693827644,
                        "actual_value": 2109888
                    }, {
                        "age": "43",
                        "gender_percentage": 1.46124213,
                        "total_percentage": 0.742908197,
                        "actual_value": 2259139
                    }, {
                        "age": "44",
                        "gender_percentage": 1.47869963,
                        "total_percentage": 0.751783743,
                        "actual_value": 2286129
                    }, {
                        "age": "45",
                        "gender_percentage": 1.475256,
                        "total_percentage": 0.750032968,
                        "actual_value": 2280805
                    }, {
                        "age": "46",
                        "gender_percentage": 1.48475187,
                        "total_percentage": 0.754860752,
                        "actual_value": 2295486
                    }, {
                        "age": "47",
                        "gender_percentage": 1.51027967,
                        "total_percentage": 0.767839307,
                        "actual_value": 2334953
                    }, {
                        "age": "48",
                        "gender_percentage": 1.52708518,
                        "total_percentage": 0.776383376,
                        "actual_value": 2360935
                    }, {
                        "age": "49",
                        "gender_percentage": 1.4778426,
                        "total_percentage": 0.751348022,
                        "actual_value": 2284804
                    }, {
                        "age": "50",
                        "gender_percentage": 1.47079233,
                        "total_percentage": 0.747763604,
                        "actual_value": 2273904
                    }, {
                        "age": "51",
                        "gender_percentage": 1.47109181,
                        "total_percentage": 0.74791586,
                        "actual_value": 2274367
                    }, {
                        "age": "52",
                        "gender_percentage": 1.40998861,
                        "total_percentage": 0.716850462,
                        "actual_value": 2179899
                    }, {
                        "age": "53",
                        "gender_percentage": 1.41845605,
                        "total_percentage": 0.721155381,
                        "actual_value": 2192990
                    }, {
                        "age": "54",
                        "gender_percentage": 1.3708525,
                        "total_percentage": 0.696953323,
                        "actual_value": 2119393
                    }, {
                        "age": "55",
                        "gender_percentage": 1.31686878,
                        "total_percentage": 0.66950753,
                        "actual_value": 2035932
                    }, {
                        "age": "56",
                        "gender_percentage": 1.28104564,
                        "total_percentage": 0.651294738,
                        "actual_value": 1980548
                    }, {
                        "age": "57",
                        "gender_percentage": 1.24584216,
                        "total_percentage": 0.633396981,
                        "actual_value": 1926122
                    }, {
                        "age": "58",
                        "gender_percentage": 1.24073427,
                        "total_percentage": 0.630800086,
                        "actual_value": 1918225
                    }, {
                        "age": "59",
                        "gender_percentage": 1.19104992,
                        "total_percentage": 0.605540131,
                        "actual_value": 1841411
                    }, {
                        "age": "60",
                        "gender_percentage": 1.16572975,
                        "total_percentage": 0.592667136,
                        "actual_value": 1802265
                    }, {
                        "age": "61",
                        "gender_percentage": 1.23656814,
                        "total_percentage": 0.628681991,
                        "actual_value": 1911784
                    }, {
                        "age": "62",
                        "gender_percentage": 0.928765013,
                        "total_percentage": 0.472192204,
                        "actual_value": 1435908
                    }, {
                        "age": "63",
                        "gender_percentage": 0.925991476,
                        "total_percentage": 0.470782113,
                        "actual_value": 1431620
                    }, {
                        "age": "64",
                        "gender_percentage": 0.904211964,
                        "total_percentage": 0.45970922,
                        "actual_value": 1397948
                    }, {
                        "age": "65",
                        "gender_percentage": 0.93681655,
                        "total_percentage": 0.476285675,
                        "actual_value": 1448356
                    }, {
                        "age": "66",
                        "gender_percentage": 0.826223045,
                        "total_percentage": 0.420058976,
                        "actual_value": 1277374
                    }, {
                        "age": "67",
                        "gender_percentage": 0.767683815,
                        "total_percentage": 0.390297123,
                        "actual_value": 1186870
                    }, {
                        "age": "68",
                        "gender_percentage": 0.744097105,
                        "total_percentage": 0.378305435,
                        "actual_value": 1150404
                    }, {
                        "age": "69",
                        "gender_percentage": 0.701730806,
                        "total_percentage": 0.35676604,
                        "actual_value": 1084904
                    }, {
                        "age": "70",
                        "gender_percentage": 0.680159568,
                        "total_percentage": 0.345799035,
                        "actual_value": 1051554
                    }, {
                        "age": "71",
                        "gender_percentage": 0.644034374,
                        "total_percentage": 0.327432673,
                        "actual_value": 995703
                    }, {
                        "age": "72",
                        "gender_percentage": 0.626643493,
                        "total_percentage": 0.318590998,
                        "actual_value": 968816
                    }, {
                        "age": "73",
                        "gender_percentage": 0.624597621,
                        "total_percentage": 0.317550859,
                        "actual_value": 965653
                    }, {
                        "age": "74",
                        "gender_percentage": 0.565709759,
                        "total_percentage": 0.287611757,
                        "actual_value": 874610
                    }, {
                        "age": "75",
                        "gender_percentage": 0.55712654,
                        "total_percentage": 0.283247975,
                        "actual_value": 861340
                    }, {
                        "age": "76",
                        "gender_percentage": 0.552406741,
                        "total_percentage": 0.280848388,
                        "actual_value": 854043
                    }, {
                        "age": "77",
                        "gender_percentage": 0.541010529,
                        "total_percentage": 0.275054455,
                        "actual_value": 836424
                    }, {
                        "age": "78",
                        "gender_percentage": 0.544767224,
                        "total_percentage": 0.276964391,
                        "actual_value": 842232
                    }, {
                        "age": "79",
                        "gender_percentage": 0.507398207,
                        "total_percentage": 0.257965658,
                        "actual_value": 784458
                    }, {
                        "age": "80",
                        "gender_percentage": 0.49345549,
                        "total_percentage": 0.250877059,
                        "actual_value": 762902
                    }, {
                        "age": "81",
                        "gender_percentage": 0.476178449,
                        "total_percentage": 0.242093261,
                        "actual_value": 736191
                    }, {
                        "age": "82",
                        "gender_percentage": 0.447692772,
                        "total_percentage": 0.227610896,
                        "actual_value": 692151
                    }, {
                        "age": "83",
                        "gender_percentage": 0.434269446,
                        "total_percentage": 0.22078636,
                        "actual_value": 671398
                    }, {
                        "age": "84",
                        "gender_percentage": 0.397987077,
                        "total_percentage": 0.202340089,
                        "actual_value": 615304
                    }, {
                        "age": "85",
                        "gender_percentage": 0.357623313,
                        "total_percentage": 0.1818188,
                        "actual_value": 552900
                    }, {
                        "age": "86",
                        "gender_percentage": 0.331446114,
                        "total_percentage": 0.168510085,
                        "actual_value": 512429
                    }, {
                        "age": "87",
                        "gender_percentage": 0.298496129,
                        "total_percentage": 0.151758026,
                        "actual_value": 461487
                    }, {
                        "age": "88",
                        "gender_percentage": 0.258662105,
                        "total_percentage": 0.131506062,
                        "actual_value": 399902
                    }, {
                        "age": "89",
                        "gender_percentage": 0.211032036,
                        "total_percentage": 0.107290521,
                        "actual_value": 326264
                    }, {
                        "age": "90",
                        "gender_percentage": 0.179287064,
                        "total_percentage": 0.0911511016,
                        "actual_value": 277185
                    }, {
                        "age": "91",
                        "gender_percentage": 0.146273045,
                        "total_percentage": 0.0743664871,
                        "actual_value": 226144
                    }, {
                        "age": "92",
                        "gender_percentage": 0.124023946,
                        "total_percentage": 0.0630548519,
                        "actual_value": 191746
                    }, {
                        "age": "93",
                        "gender_percentage": 0.0995672719,
                        "total_percentage": 0.0506208663,
                        "actual_value": 153935
                    }, {
                        "age": "94",
                        "gender_percentage": 0.0783162067,
                        "total_percentage": 0.0398166401,
                        "actual_value": 121080
                    }, {
                        "age": "95",
                        "gender_percentage": 0.060043072,
                        "total_percentage": 0.0305264196,
                        "actual_value": 92829
                    }, {
                        "age": "96",
                        "gender_percentage": 0.0437925238,
                        "total_percentage": 0.0222644997,
                        "actual_value": 67705
                    }, {
                        "age": "97",
                        "gender_percentage": 0.0321919195,
                        "total_percentage": 0.0163666516,
                        "actual_value": 49770
                    }, {
                        "age": "98",
                        "gender_percentage": 0.0221042125,
                        "total_percentage": 0.0112379737,
                        "actual_value": 34174
                    }, {
                        "age": "99",
                        "gender_percentage": 0.0155306445,
                        "total_percentage": 0.00789591465,
                        "actual_value": 24011
                    }, { "age": "100", "gender_percentage": 0.0268201314, "total_percentage": 0.0136355879, "actual_value": 41465 }]
            }, {
                "date": 1183248000,
                "max_gender_percentage": 1.54552221,
                "max_total_percentage": 0.785848194,
                "max_actual_value": 2367220,
                "age_groups": [{
                        "age": "00",
                        "gender_percentage": 1.32351588,
                        "total_percentage": 0.672965135,
                        "actual_value": 2027181
                    }, {
                        "age": "01",
                        "gender_percentage": 1.27841132,
                        "total_percentage": 0.650030925,
                        "actual_value": 1958096
                    }, {
                        "age": "02",
                        "gender_percentage": 1.26810423,
                        "total_percentage": 0.6447901,
                        "actual_value": 1942309
                    }, {
                        "age": "03",
                        "gender_percentage": 1.2789147,
                        "total_percentage": 0.650286874,
                        "actual_value": 1958867
                    }, {
                        "age": "04",
                        "gender_percentage": 1.27561698,
                        "total_percentage": 0.648610089,
                        "actual_value": 1953816
                    }, {
                        "age": "05",
                        "gender_percentage": 1.27639456,
                        "total_percentage": 0.649005466,
                        "actual_value": 1955007
                    }, {
                        "age": "06",
                        "gender_percentage": 1.29400548,
                        "total_percentage": 0.65796005,
                        "actual_value": 1981981
                    }, {
                        "age": "07",
                        "gender_percentage": 1.24928678,
                        "total_percentage": 0.635222034,
                        "actual_value": 1913487
                    }, {
                        "age": "08",
                        "gender_percentage": 1.23256183,
                        "total_percentage": 0.626717935,
                        "actual_value": 1887870
                    }, {
                        "age": "09",
                        "gender_percentage": 1.24200777,
                        "total_percentage": 0.63152089,
                        "actual_value": 1902338
                    }, {
                        "age": "10",
                        "gender_percentage": 1.30116436,
                        "total_percentage": 0.661600111,
                        "actual_value": 1992946
                    }, {
                        "age": "11",
                        "gender_percentage": 1.30913282,
                        "total_percentage": 0.665651816,
                        "actual_value": 2005151
                    }, {
                        "age": "12",
                        "gender_percentage": 1.33514637,
                        "total_percentage": 0.678878865,
                        "actual_value": 2044995
                    }, {
                        "age": "13",
                        "gender_percentage": 1.34018142,
                        "total_percentage": 0.681439025,
                        "actual_value": 2052707
                    }, {
                        "age": "14",
                        "gender_percentage": 1.35426806,
                        "total_percentage": 0.68860163,
                        "actual_value": 2074283
                    }, {
                        "age": "15",
                        "gender_percentage": 1.3892072,
                        "total_percentage": 0.706367053,
                        "actual_value": 2127798
                    }, {
                        "age": "16",
                        "gender_percentage": 1.41389996,
                        "total_percentage": 0.718922525,
                        "actual_value": 2165619
                    }, {
                        "age": "17",
                        "gender_percentage": 1.43052045,
                        "total_percentage": 0.727373509,
                        "actual_value": 2191076
                    }, {
                        "age": "18",
                        "gender_percentage": 1.39400068,
                        "total_percentage": 0.708804384,
                        "actual_value": 2135140
                    }, {
                        "age": "19",
                        "gender_percentage": 1.37869249,
                        "total_percentage": 0.701020662,
                        "actual_value": 2111693
                    }, {
                        "age": "20",
                        "gender_percentage": 1.34964955,
                        "total_percentage": 0.686253267,
                        "actual_value": 2067209
                    }, {
                        "age": "21",
                        "gender_percentage": 1.35316926,
                        "total_percentage": 0.688042922,
                        "actual_value": 2072600
                    }, {
                        "age": "22",
                        "gender_percentage": 1.34537969,
                        "total_percentage": 0.684082177,
                        "actual_value": 2060669
                    }, {
                        "age": "23",
                        "gender_percentage": 1.31792131,
                        "total_percentage": 0.670120477,
                        "actual_value": 2018612
                    }, {
                        "age": "24",
                        "gender_percentage": 1.3391146,
                        "total_percentage": 0.680896585,
                        "actual_value": 2051073
                    }, {
                        "age": "25",
                        "gender_percentage": 1.36778931,
                        "total_percentage": 0.695476747,
                        "actual_value": 2094993
                    }, {
                        "age": "26",
                        "gender_percentage": 1.37866702,
                        "total_percentage": 0.701007715,
                        "actual_value": 2111654
                    }, {
                        "age": "27",
                        "gender_percentage": 1.3830753,
                        "total_percentage": 0.703249182,
                        "actual_value": 2118406
                    }, {
                        "age": "28",
                        "gender_percentage": 1.30087905,
                        "total_percentage": 0.66145504,
                        "actual_value": 1992509
                    }, {
                        "age": "29",
                        "gender_percentage": 1.24811812,
                        "total_percentage": 0.634627806,
                        "actual_value": 1911697
                    }, {
                        "age": "30",
                        "gender_percentage": 1.25964545,
                        "total_percentage": 0.640489085,
                        "actual_value": 1929353
                    }, {
                        "age": "31",
                        "gender_percentage": 1.21143055,
                        "total_percentage": 0.615973364,
                        "actual_value": 1855504
                    }, {
                        "age": "32",
                        "gender_percentage": 1.26974885,
                        "total_percentage": 0.645626334,
                        "actual_value": 1944828
                    }, {
                        "age": "33",
                        "gender_percentage": 1.23432266,
                        "total_percentage": 0.627613261,
                        "actual_value": 1890567
                    }, {
                        "age": "34",
                        "gender_percentage": 1.26599737,
                        "total_percentage": 0.64371883,
                        "actual_value": 1939082
                    }, {
                        "age": "35",
                        "gender_percentage": 1.33246497,
                        "total_percentage": 0.677515461,
                        "actual_value": 2040888
                    }, {
                        "age": "36",
                        "gender_percentage": 1.4104351,
                        "total_percentage": 0.717160756,
                        "actual_value": 2160312
                    }, {
                        "age": "37",
                        "gender_percentage": 1.42644384,
                        "total_percentage": 0.725300682,
                        "actual_value": 2184832
                    }, {
                        "age": "38",
                        "gender_percentage": 1.35411725,
                        "total_percentage": 0.688524944,
                        "actual_value": 2074052
                    }, {
                        "age": "39",
                        "gender_percentage": 1.33368391,
                        "total_percentage": 0.67813525,
                        "actual_value": 2042755
                    }, {
                        "age": "40",
                        "gender_percentage": 1.33858772,
                        "total_percentage": 0.680628684,
                        "actual_value": 2050266
                    }, {
                        "age": "41",
                        "gender_percentage": 1.37843982,
                        "total_percentage": 0.700892189,
                        "actual_value": 2111306
                    }, {
                        "age": "42",
                        "gender_percentage": 1.46998342,
                        "total_percentage": 0.747439159,
                        "actual_value": 2251520
                    }, {
                        "age": "43",
                        "gender_percentage": 1.50278371,
                        "total_percentage": 0.764117046,
                        "actual_value": 2301759
                    }, {
                        "age": "44",
                        "gender_percentage": 1.49139283,
                        "total_percentage": 0.758325149,
                        "actual_value": 2284312
                    }, {
                        "age": "45",
                        "gender_percentage": 1.49299566,
                        "total_percentage": 0.759140138,
                        "actual_value": 2286767
                    }, {
                        "age": "46",
                        "gender_percentage": 1.51846209,
                        "total_percentage": 0.772088995,
                        "actual_value": 2325773
                    }, {
                        "age": "47",
                        "gender_percentage": 1.54552221,
                        "total_percentage": 0.785848194,
                        "actual_value": 2367220
                    }, {
                        "age": "48",
                        "gender_percentage": 1.4866803,
                        "total_percentage": 0.755928983,
                        "actual_value": 2277094
                    }, {
                        "age": "49",
                        "gender_percentage": 1.4920764,
                        "total_percentage": 0.758672723,
                        "actual_value": 2285359
                    }, {
                        "age": "50",
                        "gender_percentage": 1.47316493,
                        "total_percentage": 0.749056853,
                        "actual_value": 2256393
                    }, {
                        "age": "51",
                        "gender_percentage": 1.42976049,
                        "total_percentage": 0.726987095,
                        "actual_value": 2189912
                    }, {
                        "age": "52",
                        "gender_percentage": 1.42681141,
                        "total_percentage": 0.725487582,
                        "actual_value": 2185395
                    }, {
                        "age": "53",
                        "gender_percentage": 1.37802981,
                        "total_percentage": 0.700683711,
                        "actual_value": 2110678
                    }, {
                        "age": "54",
                        "gender_percentage": 1.34061493,
                        "total_percentage": 0.681659454,
                        "actual_value": 2053371
                    }, {
                        "age": "55",
                        "gender_percentage": 1.28645748,
                        "total_percentage": 0.654122134,
                        "actual_value": 1970420
                    }, {
                        "age": "56",
                        "gender_percentage": 1.26454209,
                        "total_percentage": 0.642978866,
                        "actual_value": 1936853
                    }, {
                        "age": "57",
                        "gender_percentage": 1.25389092,
                        "total_percentage": 0.637563093,
                        "actual_value": 1920539
                    }, {
                        "age": "58",
                        "gender_percentage": 1.20947582,
                        "total_percentage": 0.614979443,
                        "actual_value": 1852510
                    }, {
                        "age": "59",
                        "gender_percentage": 1.19422508,
                        "total_percentage": 0.607224935,
                        "actual_value": 1829151
                    }, {
                        "age": "60",
                        "gender_percentage": 1.23617946,
                        "total_percentage": 0.628557386,
                        "actual_value": 1893411
                    }, {
                        "age": "61",
                        "gender_percentage": 0.940993875,
                        "total_percentage": 0.478465035,
                        "actual_value": 1441286
                    }, {
                        "age": "62",
                        "gender_percentage": 0.937418024,
                        "total_percentage": 0.47664683,
                        "actual_value": 1435809
                    }, {
                        "age": "63",
                        "gender_percentage": 0.925339653,
                        "total_percentage": 0.470505368,
                        "actual_value": 1417309
                    }, {
                        "age": "64",
                        "gender_percentage": 0.947586054,
                        "total_percentage": 0.481816945,
                        "actual_value": 1451383
                    }, {
                        "age": "65",
                        "gender_percentage": 0.842637417,
                        "total_percentage": 0.428453948,
                        "actual_value": 1290637
                    }, {
                        "age": "66",
                        "gender_percentage": 0.780655788,
                        "total_percentage": 0.396938289,
                        "actual_value": 1195702
                    }, {
                        "age": "67",
                        "gender_percentage": 0.759111239,
                        "total_percentage": 0.385983581,
                        "actual_value": 1162703
                    }, {
                        "age": "68",
                        "gender_percentage": 0.718113331,
                        "total_percentage": 0.365137467,
                        "actual_value": 1099908
                    }, {
                        "age": "69",
                        "gender_percentage": 0.702409491,
                        "total_percentage": 0.357152571,
                        "actual_value": 1075855
                    }, {
                        "age": "70",
                        "gender_percentage": 0.655487958,
                        "total_percentage": 0.333294485,
                        "actual_value": 1003987
                    }, {
                        "age": "71",
                        "gender_percentage": 0.646816341,
                        "total_percentage": 0.328885247,
                        "actual_value": 990705
                    }, {
                        "age": "72",
                        "gender_percentage": 0.64236693,
                        "total_percentage": 0.326622865,
                        "actual_value": 983890
                    }, {
                        "age": "73",
                        "gender_percentage": 0.587313716,
                        "total_percentage": 0.298630082,
                        "actual_value": 899567
                    }, {
                        "age": "74",
                        "gender_percentage": 0.582926983,
                        "total_percentage": 0.296399569,
                        "actual_value": 892848
                    }, {
                        "age": "75",
                        "gender_percentage": 0.568047736,
                        "total_percentage": 0.288833952,
                        "actual_value": 870058
                    }, {
                        "age": "76",
                        "gender_percentage": 0.565686904,
                        "total_percentage": 0.287633545,
                        "actual_value": 866442
                    }, {
                        "age": "77",
                        "gender_percentage": 0.567624666,
                        "total_percentage": 0.288618835,
                        "actual_value": 869410
                    }, {
                        "age": "78",
                        "gender_percentage": 0.532585639,
                        "total_percentage": 0.27080262,
                        "actual_value": 815742
                    }, {
                        "age": "79",
                        "gender_percentage": 0.52464003,
                        "total_percentage": 0.266762534,
                        "actual_value": 803572
                    }, {
                        "age": "80",
                        "gender_percentage": 0.499801676,
                        "total_percentage": 0.254133032,
                        "actual_value": 765528
                    }, {
                        "age": "81",
                        "gender_percentage": 0.478471274,
                        "total_percentage": 0.24328721,
                        "actual_value": 732857
                    }, {
                        "age": "82",
                        "gender_percentage": 0.463982452,
                        "total_percentage": 0.235920112,
                        "actual_value": 710665
                    }, {
                        "age": "83",
                        "gender_percentage": 0.431977381,
                        "total_percentage": 0.219646565,
                        "actual_value": 661644
                    }, {
                        "age": "84",
                        "gender_percentage": 0.390799277,
                        "total_percentage": 0.198708828,
                        "actual_value": 598573
                    }, {
                        "age": "85",
                        "gender_percentage": 0.363008578,
                        "total_percentage": 0.184578154,
                        "actual_value": 556007
                    }, {
                        "age": "86",
                        "gender_percentage": 0.32989752,
                        "total_percentage": 0.167742249,
                        "actual_value": 505292
                    }, {
                        "age": "87",
                        "gender_percentage": 0.293209958,
                        "total_percentage": 0.149087807,
                        "actual_value": 449099
                    }, {
                        "age": "88",
                        "gender_percentage": 0.239997227,
                        "total_percentage": 0.122030849,
                        "actual_value": 367595
                    }, {
                        "age": "89",
                        "gender_percentage": 0.213311862,
                        "total_percentage": 0.108462202,
                        "actual_value": 326722
                    }, {
                        "age": "90",
                        "gender_percentage": 0.170513298,
                        "total_percentage": 0.0867005124,
                        "actual_value": 261169
                    }, {
                        "age": "91",
                        "gender_percentage": 0.146855361,
                        "total_percentage": 0.0746712143,
                        "actual_value": 224933
                    }, {
                        "age": "92",
                        "gender_percentage": 0.124519515,
                        "total_percentage": 0.0633141572,
                        "actual_value": 190722
                    }, {
                        "age": "93",
                        "gender_percentage": 0.0973040078,
                        "total_percentage": 0.0494759495,
                        "actual_value": 149037
                    }, {
                        "age": "94",
                        "gender_percentage": 0.0769568497,
                        "total_percentage": 0.0391300759,
                        "actual_value": 117872
                    }, {
                        "age": "95",
                        "gender_percentage": 0.0573089313,
                        "total_percentage": 0.0291397431,
                        "actual_value": 87778
                    }, {
                        "age": "96",
                        "gender_percentage": 0.0431667913,
                        "total_percentage": 0.0219489211,
                        "actual_value": 66117
                    }, {
                        "age": "97",
                        "gender_percentage": 0.0310531648,
                        "total_percentage": 0.0157895327,
                        "actual_value": 47563
                    }, {
                        "age": "98",
                        "gender_percentage": 0.0210914469,
                        "total_percentage": 0.0107243205,
                        "actual_value": 32305
                    }, {
                        "age": "99",
                        "gender_percentage": 0.0156261473,
                        "total_percentage": 0.00794539193,
                        "actual_value": 23934
                    }, { "age": "100", "gender_percentage": 0.0262224694, "total_percentage": 0.0133332799, "actual_value": 40164 }]
            }, {
                "date": 1151712000,
                "max_gender_percentage": 1.55482821,
                "max_total_percentage": 0.790663817,
                "max_actual_value": 2359182,
                "age_groups": [{
                        "age": "00",
                        "gender_percentage": 1.30223722,
                        "total_percentage": 0.662215826,
                        "actual_value": 1975919
                    }, {
                        "age": "01",
                        "gender_percentage": 1.28023931,
                        "total_percentage": 0.651029416,
                        "actual_value": 1942541
                    }, {
                        "age": "02",
                        "gender_percentage": 1.285432,
                        "total_percentage": 0.65367001,
                        "actual_value": 1950420
                    }, {
                        "age": "03",
                        "gender_percentage": 1.2782002,
                        "total_percentage": 0.649992483,
                        "actual_value": 1939447
                    }, {
                        "age": "04",
                        "gender_percentage": 1.28033356,
                        "total_percentage": 0.651077342,
                        "actual_value": 1942684
                    }, {
                        "age": "05",
                        "gender_percentage": 1.30687828,
                        "total_percentage": 0.664575905,
                        "actual_value": 1982961
                    }, {
                        "age": "06",
                        "gender_percentage": 1.25315879,
                        "total_percentage": 0.637258382,
                        "actual_value": 1901451
                    }, {
                        "age": "07",
                        "gender_percentage": 1.24051484,
                        "total_percentage": 0.63082866,
                        "actual_value": 1882266
                    }, {
                        "age": "08",
                        "gender_percentage": 1.24007393,
                        "total_percentage": 0.630604449,
                        "actual_value": 1881597
                    }, {
                        "age": "09",
                        "gender_percentage": 1.25674865,
                        "total_percentage": 0.639083907,
                        "actual_value": 1906898
                    }, {
                        "age": "10",
                        "gender_percentage": 1.32628807,
                        "total_percentage": 0.674446207,
                        "actual_value": 2012412
                    }, {
                        "age": "11",
                        "gender_percentage": 1.33158291,
                        "total_percentage": 0.677138748,
                        "actual_value": 2020446
                    }, {
                        "age": "12",
                        "gender_percentage": 1.34974314,
                        "total_percentage": 0.686373619,
                        "actual_value": 2048001
                    }, {
                        "age": "13",
                        "gender_percentage": 1.36986077,
                        "total_percentage": 0.696603865,
                        "actual_value": 2078526
                    }, {
                        "age": "14",
                        "gender_percentage": 1.38569981,
                        "total_percentage": 0.704658362,
                        "actual_value": 2102559
                    }, {
                        "age": "15",
                        "gender_percentage": 1.41454265,
                        "total_percentage": 0.719325569,
                        "actual_value": 2146323
                    }, {
                        "age": "16",
                        "gender_percentage": 1.44173719,
                        "total_percentage": 0.733154583,
                        "actual_value": 2187586
                    }, {
                        "age": "17",
                        "gender_percentage": 1.38415433,
                        "total_percentage": 0.703872451,
                        "actual_value": 2100214
                    }, {
                        "age": "18",
                        "gender_percentage": 1.37642956,
                        "total_percentage": 0.699944238,
                        "actual_value": 2088493
                    }, {
                        "age": "19",
                        "gender_percentage": 1.36732407,
                        "total_percentage": 0.695313899,
                        "actual_value": 2074677
                    }, {
                        "age": "20",
                        "gender_percentage": 1.35971133,
                        "total_percentage": 0.69144266,
                        "actual_value": 2063126
                    }, {
                        "age": "21",
                        "gender_percentage": 1.36251759,
                        "total_percentage": 0.6928697,
                        "actual_value": 2067384
                    }, {
                        "age": "22",
                        "gender_percentage": 1.32436759,
                        "total_percentage": 0.6734696,
                        "actual_value": 2009498
                    }, {
                        "age": "23",
                        "gender_percentage": 1.34187338,
                        "total_percentage": 0.682371674,
                        "actual_value": 2036060
                    }, {
                        "age": "24",
                        "gender_percentage": 1.35944112,
                        "total_percentage": 0.691305251,
                        "actual_value": 2062716
                    }, {
                        "age": "25",
                        "gender_percentage": 1.39431562,
                        "total_percentage": 0.709039689,
                        "actual_value": 2115632
                    }, {
                        "age": "26",
                        "gender_percentage": 1.37796845,
                        "total_percentage": 0.700726797,
                        "actual_value": 2090828
                    }, {
                        "age": "27",
                        "gender_percentage": 1.31789304,
                        "total_percentage": 0.670177153,
                        "actual_value": 1999674
                    }, {
                        "age": "28",
                        "gender_percentage": 1.26933593,
                        "total_percentage": 0.645484807,
                        "actual_value": 1925997
                    }, {
                        "age": "29",
                        "gender_percentage": 1.24053131,
                        "total_percentage": 0.630837038,
                        "actual_value": 1882291
                    }, {
                        "age": "30",
                        "gender_percentage": 1.23298712,
                        "total_percentage": 0.627000654,
                        "actual_value": 1870844
                    }, {
                        "age": "31",
                        "gender_percentage": 1.25437606,
                        "total_percentage": 0.637877392,
                        "actual_value": 1903298
                    }, {
                        "age": "32",
                        "gender_percentage": 1.24061172,
                        "total_percentage": 0.630877926,
                        "actual_value": 1882413
                    }, {
                        "age": "33",
                        "gender_percentage": 1.27279925,
                        "total_percentage": 0.647245985,
                        "actual_value": 1931252
                    }, {
                        "age": "34",
                        "gender_percentage": 1.33399835,
                        "total_percentage": 0.678367048,
                        "actual_value": 2024111
                    }, {
                        "age": "35",
                        "gender_percentage": 1.41934979,
                        "total_percentage": 0.721770104,
                        "actual_value": 2153617
                    }, {
                        "age": "36",
                        "gender_percentage": 1.43969346,
                        "total_percentage": 0.732115304,
                        "actual_value": 2184485
                    }, {
                        "age": "37",
                        "gender_percentage": 1.36198573,
                        "total_percentage": 0.692599239,
                        "actual_value": 2066577
                    }, {
                        "age": "38",
                        "gender_percentage": 1.34178309,
                        "total_percentage": 0.682325759,
                        "actual_value": 2035923
                    }, {
                        "age": "39",
                        "gender_percentage": 1.35030004,
                        "total_percentage": 0.686656815,
                        "actual_value": 2048846
                    }, {
                        "age": "40",
                        "gender_percentage": 1.38587182,
                        "total_percentage": 0.704745834,
                        "actual_value": 2102820
                    }, {
                        "age": "41",
                        "gender_percentage": 1.48460931,
                        "total_percentage": 0.754955984,
                        "actual_value": 2252637
                    }, {
                        "age": "42",
                        "gender_percentage": 1.51235482,
                        "total_percentage": 0.769065178,
                        "actual_value": 2294736
                    }, {
                        "age": "43",
                        "gender_percentage": 1.51441107,
                        "total_percentage": 0.770110824,
                        "actual_value": 2297856
                    }, {
                        "age": "44",
                        "gender_percentage": 1.50930867,
                        "total_percentage": 0.767516146,
                        "actual_value": 2290114
                    }, {
                        "age": "45",
                        "gender_percentage": 1.52789795,
                        "total_percentage": 0.776969195,
                        "actual_value": 2318320
                    }, {
                        "age": "46",
                        "gender_percentage": 1.55482821,
                        "total_percentage": 0.790663817,
                        "actual_value": 2359182
                    }, {
                        "age": "47",
                        "gender_percentage": 1.5042768,
                        "total_percentage": 0.764957327,
                        "actual_value": 2282479
                    }, {
                        "age": "48",
                        "gender_percentage": 1.50185741,
                        "total_percentage": 0.763727017,
                        "actual_value": 2278808
                    }, {
                        "age": "49",
                        "gender_percentage": 1.49385518,
                        "total_percentage": 0.759657708,
                        "actual_value": 2266666
                    }, {
                        "age": "50",
                        "gender_percentage": 1.43344959,
                        "total_percentage": 0.728940157,
                        "actual_value": 2175011
                    }, {
                        "age": "51",
                        "gender_percentage": 1.4461634,
                        "total_percentage": 0.735405405,
                        "actual_value": 2194302
                    }, {
                        "age": "52",
                        "gender_percentage": 1.38715171,
                        "total_percentage": 0.705396682,
                        "actual_value": 2104762
                    }, {
                        "age": "53",
                        "gender_percentage": 1.34879081,
                        "total_percentage": 0.685889337,
                        "actual_value": 2046556
                    }, {
                        "age": "54",
                        "gender_percentage": 1.30854436,
                        "total_percentage": 0.665423147,
                        "actual_value": 1985489
                    }, {
                        "age": "55",
                        "gender_percentage": 1.27105342,
                        "total_percentage": 0.64635819,
                        "actual_value": 1928603
                    }, {
                        "age": "56",
                        "gender_percentage": 1.2721949,
                        "total_percentage": 0.646938659,
                        "actual_value": 1930335
                    }, {
                        "age": "57",
                        "gender_percentage": 1.22278892,
                        "total_percentage": 0.621814648,
                        "actual_value": 1855370
                    }, {
                        "age": "58",
                        "gender_percentage": 1.2124398,
                        "total_percentage": 0.616551894,
                        "actual_value": 1839667
                    }, {
                        "age": "59",
                        "gender_percentage": 1.26478384,
                        "total_percentage": 0.643169973,
                        "actual_value": 1919090
                    }, {
                        "age": "60",
                        "gender_percentage": 0.94294539,
                        "total_percentage": 0.479508151,
                        "actual_value": 1430756
                    }, {
                        "age": "61",
                        "gender_percentage": 0.95008558,
                        "total_percentage": 0.483139093,
                        "actual_value": 1441590
                    }, {
                        "age": "62",
                        "gender_percentage": 0.937230733,
                        "total_percentage": 0.476602125,
                        "actual_value": 1422085
                    }, {
                        "age": "63",
                        "gender_percentage": 0.968736807,
                        "total_percentage": 0.492623646,
                        "actual_value": 1469890
                    }, {
                        "age": "64",
                        "gender_percentage": 0.853256056,
                        "total_percentage": 0.433899183,
                        "actual_value": 1294668
                    }, {
                        "age": "65",
                        "gender_percentage": 0.796266343,
                        "total_percentage": 0.40491868,
                        "actual_value": 1208196
                    }, {
                        "age": "66",
                        "gender_percentage": 0.772218124,
                        "total_percentage": 0.392689639,
                        "actual_value": 1171707
                    }, {
                        "age": "67",
                        "gender_percentage": 0.73293785,
                        "total_percentage": 0.372714769,
                        "actual_value": 1112106
                    }, {
                        "age": "68",
                        "gender_percentage": 0.718938226,
                        "total_percentage": 0.365595657,
                        "actual_value": 1090864
                    }, {
                        "age": "69",
                        "gender_percentage": 0.676406179,
                        "total_percentage": 0.34396719,
                        "actual_value": 1026329
                    }, {
                        "age": "70",
                        "gender_percentage": 0.659146215,
                        "total_percentage": 0.335190125,
                        "actual_value": 1000140
                    }, {
                        "age": "71",
                        "gender_percentage": 0.662746627,
                        "total_percentage": 0.337021012,
                        "actual_value": 1005603
                    }, {
                        "age": "72",
                        "gender_percentage": 0.604409149,
                        "total_percentage": 0.307355141,
                        "actual_value": 917086
                    }, {
                        "age": "73",
                        "gender_percentage": 0.604836216,
                        "total_percentage": 0.307572314,
                        "actual_value": 917734
                    }, {
                        "age": "74",
                        "gender_percentage": 0.593723907,
                        "total_percentage": 0.301921464,
                        "actual_value": 900873
                    }, {
                        "age": "75",
                        "gender_percentage": 0.582683435,
                        "total_percentage": 0.296307146,
                        "actual_value": 884121
                    }, {
                        "age": "76",
                        "gender_percentage": 0.593416788,
                        "total_percentage": 0.301765288,
                        "actual_value": 900407
                    }, {
                        "age": "77",
                        "gender_percentage": 0.555544912,
                        "total_percentage": 0.282506619,
                        "actual_value": 842943
                    }, {
                        "age": "78",
                        "gender_percentage": 0.550886059,
                        "total_percentage": 0.280137491,
                        "actual_value": 835874
                    }, {
                        "age": "79",
                        "gender_percentage": 0.53105974,
                        "total_percentage": 0.270055378,
                        "actual_value": 805791
                    }, {
                        "age": "80",
                        "gender_percentage": 0.503230528,
                        "total_percentage": 0.255903621,
                        "actual_value": 763565
                    }, {
                        "age": "81",
                        "gender_percentage": 0.495872849,
                        "total_percentage": 0.252162083,
                        "actual_value": 752401
                    }, {
                        "age": "82",
                        "gender_percentage": 0.462127969,
                        "total_percentage": 0.23500208,
                        "actual_value": 701199
                    }, {
                        "age": "83",
                        "gender_percentage": 0.424359564,
                        "total_percentage": 0.215796029,
                        "actual_value": 643892
                    }, {
                        "age": "84",
                        "gender_percentage": 0.397074731,
                        "total_percentage": 0.2019211,
                        "actual_value": 602492
                    }, {
                        "age": "85",
                        "gender_percentage": 0.361826549,
                        "total_percentage": 0.183996636,
                        "actual_value": 549009
                    }, {
                        "age": "86",
                        "gender_percentage": 0.325104722,
                        "total_percentage": 0.165322792,
                        "actual_value": 493290
                    }, {
                        "age": "87",
                        "gender_percentage": 0.271865026,
                        "total_percentage": 0.138249253,
                        "actual_value": 412508
                    }, {
                        "age": "88",
                        "gender_percentage": 0.24312566,
                        "total_percentage": 0.123634663,
                        "actual_value": 368901
                    }, {
                        "age": "89",
                        "gender_percentage": 0.202963572,
                        "total_percentage": 0.103211372,
                        "actual_value": 307962
                    }, {
                        "age": "90",
                        "gender_percentage": 0.171607103,
                        "total_percentage": 0.0872659283,
                        "actual_value": 260384
                    }, {
                        "age": "91",
                        "gender_percentage": 0.148090081,
                        "total_percentage": 0.0753070133,
                        "actual_value": 224701
                    }, {
                        "age": "92",
                        "gender_percentage": 0.121727923,
                        "total_percentage": 0.0619012851,
                        "actual_value": 184701
                    }, {
                        "age": "93",
                        "gender_percentage": 0.0958528062,
                        "total_percentage": 0.0487432277,
                        "actual_value": 145440
                    }, {
                        "age": "94",
                        "gender_percentage": 0.0738021792,
                        "total_percentage": 0.0375300064,
                        "actual_value": 111982
                    }, {
                        "age": "95",
                        "gender_percentage": 0.0566272333,
                        "total_percentage": 0.0287961745,
                        "actual_value": 85922
                    }, {
                        "age": "96",
                        "gender_percentage": 0.0418571753,
                        "total_percentage": 0.0212852801,
                        "actual_value": 63511
                    }, {
                        "age": "97",
                        "gender_percentage": 0.0296356789,
                        "total_percentage": 0.0150703845,
                        "actual_value": 44967
                    }, {
                        "age": "98",
                        "gender_percentage": 0.0213012826,
                        "total_percentage": 0.0108321635,
                        "actual_value": 32321
                    }, {
                        "age": "99",
                        "gender_percentage": 0.0147957611,
                        "total_percentage": 0.00752396495,
                        "actual_value": 22450
                    }, { "age": "100", "gender_percentage": 0.0260260404, "total_percentage": 0.0132348052, "actual_value": 39490 }]
            }, {
                "date": 1120176000,
                "max_gender_percentage": 1.56511741,
                "max_total_percentage": 0.796123469,
                "max_actual_value": 2352677,
                "age_groups": [{
                        "age": "00",
                        "gender_percentage": 1.3016819,
                        "total_percentage": 0.662122536,
                        "actual_value": 1956682
                    }, {
                        "age": "01",
                        "gender_percentage": 1.29756534,
                        "total_percentage": 0.660028576,
                        "actual_value": 1950494
                    }, {
                        "age": "02",
                        "gender_percentage": 1.2854864,
                        "total_percentage": 0.65388442,
                        "actual_value": 1932337
                    }, {
                        "age": "03",
                        "gender_percentage": 1.28419449,
                        "total_percentage": 0.653227266,
                        "actual_value": 1930395
                    }, {
                        "age": "04",
                        "gender_percentage": 1.31180367,
                        "total_percentage": 0.667271147,
                        "actual_value": 1971897
                    }, {
                        "age": "05",
                        "gender_percentage": 1.26496079,
                        "total_percentage": 0.643443721,
                        "actual_value": 1901483
                    }, {
                        "age": "06",
                        "gender_percentage": 1.24514567,
                        "total_percentage": 0.633364422,
                        "actual_value": 1871697
                    }, {
                        "age": "07",
                        "gender_percentage": 1.24812731,
                        "total_percentage": 0.634881088,
                        "actual_value": 1876179
                    }, {
                        "age": "08",
                        "gender_percentage": 1.25622739,
                        "total_percentage": 0.639001331,
                        "actual_value": 1888355
                    }, {
                        "age": "09",
                        "gender_percentage": 1.28804695,
                        "total_percentage": 0.655186885,
                        "actual_value": 1936186
                    }, {
                        "age": "10",
                        "gender_percentage": 1.34680977,
                        "total_percentage": 0.685077592,
                        "actual_value": 2024518
                    }, {
                        "age": "11",
                        "gender_percentage": 1.34693817,
                        "total_percentage": 0.685142901,
                        "actual_value": 2024711
                    }, {
                        "age": "12",
                        "gender_percentage": 1.37857345,
                        "total_percentage": 0.701234722,
                        "actual_value": 2072265
                    }, {
                        "age": "13",
                        "gender_percentage": 1.39986276,
                        "total_percentage": 0.712063893,
                        "actual_value": 2104267
                    }, {
                        "age": "14",
                        "gender_percentage": 1.41207275,
                        "total_percentage": 0.718274712,
                        "actual_value": 2122621
                    }, {
                        "age": "15",
                        "gender_percentage": 1.44260771,
                        "total_percentage": 0.733806834,
                        "actual_value": 2168521
                    }, {
                        "age": "16",
                        "gender_percentage": 1.3931617,
                        "total_percentage": 0.708655286,
                        "actual_value": 2094194
                    }, {
                        "age": "17",
                        "gender_percentage": 1.36765138,
                        "total_percentage": 0.695679027,
                        "actual_value": 2055847
                    }, {
                        "age": "18",
                        "gender_percentage": 1.36423665,
                        "total_percentage": 0.693942069,
                        "actual_value": 2050714
                    }, {
                        "age": "19",
                        "gender_percentage": 1.37408168,
                        "total_percentage": 0.698949909,
                        "actual_value": 2065513
                    }, {
                        "age": "20",
                        "gender_percentage": 1.36743451,
                        "total_percentage": 0.695568712,
                        "actual_value": 2055521
                    }, {
                        "age": "21",
                        "gender_percentage": 1.33792869,
                        "total_percentage": 0.680560079,
                        "actual_value": 2011168
                    }, {
                        "age": "22",
                        "gender_percentage": 1.34708186,
                        "total_percentage": 0.685215994,
                        "actual_value": 2024927
                    }, {
                        "age": "23",
                        "gender_percentage": 1.36167943,
                        "total_percentage": 0.692641296,
                        "actual_value": 2046870
                    }, {
                        "age": "24",
                        "gender_percentage": 1.38659303,
                        "total_percentage": 0.705314019,
                        "actual_value": 2084320
                    }, {
                        "age": "25",
                        "gender_percentage": 1.3907555,
                        "total_percentage": 0.707431328,
                        "actual_value": 2090577
                    }, {
                        "age": "26",
                        "gender_percentage": 1.31296919,
                        "total_percentage": 0.667864007,
                        "actual_value": 1973649
                    }, {
                        "age": "27",
                        "gender_percentage": 1.28234509,
                        "total_percentage": 0.65228654,
                        "actual_value": 1927615
                    }, {
                        "age": "28",
                        "gender_percentage": 1.25837083,
                        "total_percentage": 0.640091625,
                        "actual_value": 1891577
                    }, {
                        "age": "29",
                        "gender_percentage": 1.21682533,
                        "total_percentage": 0.618958802,
                        "actual_value": 1829126
                    }, {
                        "age": "30",
                        "gender_percentage": 1.2736576,
                        "total_percentage": 0.647867499,
                        "actual_value": 1914556
                    }, {
                        "age": "31",
                        "gender_percentage": 1.22788044,
                        "total_percentage": 0.624582174,
                        "actual_value": 1845744
                    }, {
                        "age": "32",
                        "gender_percentage": 1.27856115,
                        "total_percentage": 0.650361775,
                        "actual_value": 1921927
                    }, {
                        "age": "33",
                        "gender_percentage": 1.34086909,
                        "total_percentage": 0.682055765,
                        "actual_value": 2015588
                    }, {
                        "age": "34",
                        "gender_percentage": 1.4218639,
                        "total_percentage": 0.723255143,
                        "actual_value": 2137339
                    }, {
                        "age": "35",
                        "gender_percentage": 1.4481519,
                        "total_percentage": 0.73662698,
                        "actual_value": 2176855
                    }, {
                        "age": "36",
                        "gender_percentage": 1.37334325,
                        "total_percentage": 0.698574296,
                        "actual_value": 2064403
                    }, {
                        "age": "37",
                        "gender_percentage": 1.34920733,
                        "total_percentage": 0.686297151,
                        "actual_value": 2028122
                    }, {
                        "age": "38",
                        "gender_percentage": 1.35826071,
                        "total_percentage": 0.690902307,
                        "actual_value": 2041731
                    }, {
                        "age": "39",
                        "gender_percentage": 1.39736276,
                        "total_percentage": 0.710792222,
                        "actual_value": 2100509
                    }, {
                        "age": "40",
                        "gender_percentage": 1.4929059,
                        "total_percentage": 0.759391861,
                        "actual_value": 2244129
                    }, {
                        "age": "41",
                        "gender_percentage": 1.52699462,
                        "total_percentage": 0.776731665,
                        "actual_value": 2295371
                    }, {
                        "age": "42",
                        "gender_percentage": 1.5244394,
                        "total_percentage": 0.775431907,
                        "actual_value": 2291530
                    }, {
                        "age": "43",
                        "gender_percentage": 1.53096949,
                        "total_percentage": 0.778753548,
                        "actual_value": 2301346
                    }, {
                        "age": "44",
                        "gender_percentage": 1.54427514,
                        "total_percentage": 0.785521696,
                        "actual_value": 2321347
                    }, {
                        "age": "45",
                        "gender_percentage": 1.56511741,
                        "total_percentage": 0.796123469,
                        "actual_value": 2352677
                    }, {
                        "age": "46",
                        "gender_percentage": 1.51411672,
                        "total_percentage": 0.770181102,
                        "actual_value": 2276013
                    }, {
                        "age": "47",
                        "gender_percentage": 1.51899965,
                        "total_percentage": 0.772664888,
                        "actual_value": 2283353
                    }, {
                        "age": "48",
                        "gender_percentage": 1.50432425,
                        "total_percentage": 0.765199995,
                        "actual_value": 2261293
                    }, {
                        "age": "49",
                        "gender_percentage": 1.45274013,
                        "total_percentage": 0.73896086,
                        "actual_value": 2183752
                    }, {
                        "age": "50",
                        "gender_percentage": 1.45143557,
                        "total_percentage": 0.738297276,
                        "actual_value": 2181791
                    }, {
                        "age": "51",
                        "gender_percentage": 1.40526725,
                        "total_percentage": 0.714812977,
                        "actual_value": 2112391
                    }, {
                        "age": "52",
                        "gender_percentage": 1.35830994,
                        "total_percentage": 0.690927348,
                        "actual_value": 2041805
                    }, {
                        "age": "53",
                        "gender_percentage": 1.31727136,
                        "total_percentage": 0.670052378,
                        "actual_value": 1980116
                    }, {
                        "age": "54",
                        "gender_percentage": 1.29147431,
                        "total_percentage": 0.656930273,
                        "actual_value": 1941338
                    }, {
                        "age": "55",
                        "gender_percentage": 1.27969873,
                        "total_percentage": 0.650940423,
                        "actual_value": 1923637
                    }, {
                        "age": "56",
                        "gender_percentage": 1.23998732,
                        "total_percentage": 0.630740543,
                        "actual_value": 1863943
                    }, {
                        "age": "57",
                        "gender_percentage": 1.22591263,
                        "total_percentage": 0.623581215,
                        "actual_value": 1842786
                    }, {
                        "age": "58",
                        "gender_percentage": 1.28350928,
                        "total_percentage": 0.652878724,
                        "actual_value": 1929365
                    }, {
                        "age": "59",
                        "gender_percentage": 0.963366561,
                        "total_percentage": 0.49003271,
                        "actual_value": 1448128
                    }, {
                        "age": "60",
                        "gender_percentage": 0.953592049,
                        "total_percentage": 0.485060739,
                        "actual_value": 1433435
                    }, {
                        "age": "61",
                        "gender_percentage": 0.950120111,
                        "total_percentage": 0.483294679,
                        "actual_value": 1428216
                    }, {
                        "age": "62",
                        "gender_percentage": 0.981768695,
                        "total_percentage": 0.499393268,
                        "actual_value": 1475790
                    }, {
                        "age": "63",
                        "gender_percentage": 0.87168918,
                        "total_percentage": 0.443399459,
                        "actual_value": 1310319
                    }, {
                        "age": "64",
                        "gender_percentage": 0.806808718,
                        "total_percentage": 0.410396913,
                        "actual_value": 1212791
                    }, {
                        "age": "65",
                        "gender_percentage": 0.787237075,
                        "total_percentage": 0.400441466,
                        "actual_value": 1183371
                    }, {
                        "age": "66",
                        "gender_percentage": 0.745939045,
                        "total_percentage": 0.379434524,
                        "actual_value": 1121292
                    }, {
                        "age": "67",
                        "gender_percentage": 0.733733046,
                        "total_percentage": 0.373225735,
                        "actual_value": 1102944
                    }, {
                        "age": "68",
                        "gender_percentage": 0.692184883,
                        "total_percentage": 0.352091559,
                        "actual_value": 1040489
                    }, {
                        "age": "69",
                        "gender_percentage": 0.679488594,
                        "total_percentage": 0.345633377,
                        "actual_value": 1021404
                    }, {
                        "age": "70",
                        "gender_percentage": 0.676074533,
                        "total_percentage": 0.343896757,
                        "actual_value": 1016272
                    }, {
                        "age": "71",
                        "gender_percentage": 0.623379448,
                        "total_percentage": 0.31709251,
                        "actual_value": 937061
                    }, {
                        "age": "72",
                        "gender_percentage": 0.622535911,
                        "total_percentage": 0.31666343,
                        "actual_value": 935793
                    }, {
                        "age": "73",
                        "gender_percentage": 0.615695815,
                        "total_percentage": 0.3131841,
                        "actual_value": 925511
                    }, {
                        "age": "74",
                        "gender_percentage": 0.608325515,
                        "total_percentage": 0.309435072,
                        "actual_value": 914432
                    }, {
                        "age": "75",
                        "gender_percentage": 0.61212542,
                        "total_percentage": 0.311367958,
                        "actual_value": 920144
                    }, {
                        "age": "76",
                        "gender_percentage": 0.580711004,
                        "total_percentage": 0.295388483,
                        "actual_value": 872922
                    }, {
                        "age": "77",
                        "gender_percentage": 0.57499651,
                        "total_percentage": 0.292481709,
                        "actual_value": 864332
                    }, {
                        "age": "78",
                        "gender_percentage": 0.5578038,
                        "total_percentage": 0.283736346,
                        "actual_value": 838488
                    }, {
                        "age": "79",
                        "gender_percentage": 0.534441565,
                        "total_percentage": 0.27185275,
                        "actual_value": 803370
                    }, {
                        "age": "80",
                        "gender_percentage": 0.52230209,
                        "total_percentage": 0.2656778,
                        "actual_value": 785122
                    }, {
                        "age": "81",
                        "gender_percentage": 0.494034304,
                        "total_percentage": 0.251298913,
                        "actual_value": 742630
                    }, {
                        "age": "82",
                        "gender_percentage": 0.454590991,
                        "total_percentage": 0.231235403,
                        "actual_value": 683339
                    }, {
                        "age": "83",
                        "gender_percentage": 0.431341848,
                        "total_percentage": 0.219409333,
                        "actual_value": 648391
                    }, {
                        "age": "84",
                        "gender_percentage": 0.395888036,
                        "total_percentage": 0.201375152,
                        "actual_value": 595097
                    }, {
                        "age": "85",
                        "gender_percentage": 0.357495817,
                        "total_percentage": 0.1818463,
                        "actual_value": 537386
                    }, {
                        "age": "86",
                        "gender_percentage": 0.302027971,
                        "total_percentage": 0.153631641,
                        "actual_value": 454007
                    }, {
                        "age": "87",
                        "gender_percentage": 0.275570995,
                        "total_percentage": 0.140173852,
                        "actual_value": 414237
                    }, {
                        "age": "88",
                        "gender_percentage": 0.232319128,
                        "total_percentage": 0.118173057,
                        "actual_value": 349221
                    }, {
                        "age": "89",
                        "gender_percentage": 0.20364554,
                        "total_percentage": 0.103587751,
                        "actual_value": 306119
                    }, {
                        "age": "90",
                        "gender_percentage": 0.173796456,
                        "total_percentage": 0.0884045096,
                        "actual_value": 261250
                    }, {
                        "age": "91",
                        "gender_percentage": 0.145505386,
                        "total_percentage": 0.0740137782,
                        "actual_value": 218723
                    }, {
                        "age": "92",
                        "gender_percentage": 0.119805464,
                        "total_percentage": 0.0609410776,
                        "actual_value": 180091
                    }, {
                        "age": "93",
                        "gender_percentage": 0.0924696933,
                        "total_percentage": 0.0470362749,
                        "actual_value": 139000
                    }, {
                        "age": "94",
                        "gender_percentage": 0.0730796634,
                        "total_percentage": 0.037173208,
                        "actual_value": 109853
                    }, {
                        "age": "95",
                        "gender_percentage": 0.0551904366,
                        "total_percentage": 0.0280735499,
                        "actual_value": 82962
                    }, {
                        "age": "96",
                        "gender_percentage": 0.0401125546,
                        "total_percentage": 0.02040393,
                        "actual_value": 60297
                    }, {
                        "age": "97",
                        "gender_percentage": 0.0299708246,
                        "total_percentage": 0.0152451673,
                        "actual_value": 45052
                    }, {
                        "age": "98",
                        "gender_percentage": 0.0202654983,
                        "total_percentage": 0.0103083888,
                        "actual_value": 30463
                    }, {
                        "age": "99",
                        "gender_percentage": 0.0145416908,
                        "total_percentage": 0.00739687722,
                        "actual_value": 21859
                    }, { "age": "100", "gender_percentage": 0.0259014929, "total_percentage": 0.0131752328, "actual_value": 38935 }]
            }, {
                "date": 1088640000,
                "max_gender_percentage": 1.58120077,
                "max_total_percentage": 0.804503886,
                "max_actual_value": 2355630,
                "age_groups": [{
                        "age": "00",
                        "gender_percentage": 1.31712428,
                        "total_percentage": 0.670143612,
                        "actual_value": 1962216
                    }, {
                        "age": "01",
                        "gender_percentage": 1.29744208,
                        "total_percentage": 0.660129449,
                        "actual_value": 1932894
                    }, {
                        "age": "02",
                        "gender_percentage": 1.29236077,
                        "total_percentage": 0.657544113,
                        "actual_value": 1925324
                    }, {
                        "age": "03",
                        "gender_percentage": 1.31717193,
                        "total_percentage": 0.67016786,
                        "actual_value": 1962287
                    }, {
                        "age": "04",
                        "gender_percentage": 1.27044199,
                        "total_percentage": 0.646391993,
                        "actual_value": 1892670
                    }, {
                        "age": "05",
                        "gender_percentage": 1.25641099,
                        "total_percentage": 0.639253119,
                        "actual_value": 1871767
                    }, {
                        "age": "06",
                        "gender_percentage": 1.25356895,
                        "total_percentage": 0.637807107,
                        "actual_value": 1867533
                    }, {
                        "age": "07",
                        "gender_percentage": 1.26453438,
                        "total_percentage": 0.643386241,
                        "actual_value": 1883869
                    }, {
                        "age": "08",
                        "gender_percentage": 1.28908376,
                        "total_percentage": 0.655876794,
                        "actual_value": 1920442
                    }, {
                        "age": "09",
                        "gender_percentage": 1.31538173,
                        "total_percentage": 0.669257016,
                        "actual_value": 1959620
                    }, {
                        "age": "10",
                        "gender_percentage": 1.36000531,
                        "total_percentage": 0.691961182,
                        "actual_value": 2026099
                    }, {
                        "age": "11",
                        "gender_percentage": 1.37662194,
                        "total_percentage": 0.700415605,
                        "actual_value": 2050854
                    }, {
                        "age": "12",
                        "gender_percentage": 1.40765486,
                        "total_percentage": 0.716204937,
                        "actual_value": 2097086
                    }, {
                        "age": "13",
                        "gender_percentage": 1.42470511,
                        "total_percentage": 0.724879985,
                        "actual_value": 2122487
                    }, {
                        "age": "14",
                        "gender_percentage": 1.44128012,
                        "total_percentage": 0.733313234,
                        "actual_value": 2147180
                    }, {
                        "age": "15",
                        "gender_percentage": 1.39401116,
                        "total_percentage": 0.709263123,
                        "actual_value": 2076760
                    }, {
                        "age": "16",
                        "gender_percentage": 1.37507405,
                        "total_percentage": 0.699628051,
                        "actual_value": 2048548
                    }, {
                        "age": "17",
                        "gender_percentage": 1.35668333,
                        "total_percentage": 0.69027098,
                        "actual_value": 2021150
                    }, {
                        "age": "18",
                        "gender_percentage": 1.3705096,
                        "total_percentage": 0.697305689,
                        "actual_value": 2041748
                    }, {
                        "age": "19",
                        "gender_percentage": 1.37912769,
                        "total_percentage": 0.701690514,
                        "actual_value": 2054587
                    }, {
                        "age": "20",
                        "gender_percentage": 1.34175421,
                        "total_percentage": 0.682675147,
                        "actual_value": 1998909
                    }, {
                        "age": "21",
                        "gender_percentage": 1.35870914,
                        "total_percentage": 0.691301699,
                        "actual_value": 2024168
                    }, {
                        "age": "22",
                        "gender_percentage": 1.36640629,
                        "total_percentage": 0.695217953,
                        "actual_value": 2035635
                    }, {
                        "age": "23",
                        "gender_percentage": 1.3889567,
                        "total_percentage": 0.706691448,
                        "actual_value": 2069230
                    }, {
                        "age": "24",
                        "gender_percentage": 1.38457281,
                        "total_percentage": 0.704460955,
                        "actual_value": 2062699
                    }, {
                        "age": "25",
                        "gender_percentage": 1.3227211,
                        "total_percentage": 0.672991238,
                        "actual_value": 1970554
                    }, {
                        "age": "26",
                        "gender_percentage": 1.27823244,
                        "total_percentage": 0.650355719,
                        "actual_value": 1904276
                    }, {
                        "age": "27",
                        "gender_percentage": 1.26924651,
                        "total_percentage": 0.645783739,
                        "actual_value": 1890889
                    }, {
                        "age": "28",
                        "gender_percentage": 1.23174213,
                        "total_percentage": 0.626701775,
                        "actual_value": 1835016
                    }, {
                        "age": "29",
                        "gender_percentage": 1.26082643,
                        "total_percentage": 0.641499663,
                        "actual_value": 1878345
                    }, {
                        "age": "30",
                        "gender_percentage": 1.24396145,
                        "total_percentage": 0.632918876,
                        "actual_value": 1853220
                    }, {
                        "age": "31",
                        "gender_percentage": 1.26857526,
                        "total_percentage": 0.645442215,
                        "actual_value": 1889889
                    }, {
                        "age": "32",
                        "gender_percentage": 1.34683082,
                        "total_percentage": 0.685258093,
                        "actual_value": 2006472
                    }, {
                        "age": "33",
                        "gender_percentage": 1.42915075,
                        "total_percentage": 0.727141898,
                        "actual_value": 2129110
                    }, {
                        "age": "34",
                        "gender_percentage": 1.45153269,
                        "total_percentage": 0.73852967,
                        "actual_value": 2162454
                    }, {
                        "age": "35",
                        "gender_percentage": 1.38082996,
                        "total_percentage": 0.702556618,
                        "actual_value": 2057123
                    }, {
                        "age": "36",
                        "gender_percentage": 1.35955491,
                        "total_percentage": 0.691732019,
                        "actual_value": 2025428
                    }, {
                        "age": "37",
                        "gender_percentage": 1.36586258,
                        "total_percentage": 0.694941319,
                        "actual_value": 2034825
                    }, {
                        "age": "38",
                        "gender_percentage": 1.40550956,
                        "total_percentage": 0.715113427,
                        "actual_value": 2093890
                    }, {
                        "age": "39",
                        "gender_percentage": 1.50496365,
                        "total_percentage": 0.76571497,
                        "actual_value": 2242054
                    }, {
                        "age": "40",
                        "gender_percentage": 1.53576499,
                        "total_percentage": 0.781386476,
                        "actual_value": 2287941
                    }, {
                        "age": "41",
                        "gender_percentage": 1.53833518,
                        "total_percentage": 0.782694171,
                        "actual_value": 2291770
                    }, {
                        "age": "42",
                        "gender_percentage": 1.54121884,
                        "total_percentage": 0.784161358,
                        "actual_value": 2296066
                    }, {
                        "age": "43",
                        "gender_percentage": 1.56467275,
                        "total_percentage": 0.796094543,
                        "actual_value": 2331007
                    }, {
                        "age": "44",
                        "gender_percentage": 1.58120077,
                        "total_percentage": 0.804503886,
                        "actual_value": 2355630
                    }, {
                        "age": "45",
                        "gender_percentage": 1.5245908,
                        "total_percentage": 0.775701128,
                        "actual_value": 2271294
                    }, {
                        "age": "46",
                        "gender_percentage": 1.52937341,
                        "total_percentage": 0.778134486,
                        "actual_value": 2278419
                    }, {
                        "age": "47",
                        "gender_percentage": 1.52069893,
                        "total_percentage": 0.773720973,
                        "actual_value": 2265496
                    }, {
                        "age": "48",
                        "gender_percentage": 1.46315526,
                        "total_percentage": 0.744443156,
                        "actual_value": 2179769
                    }, {
                        "age": "49",
                        "gender_percentage": 1.46970593,
                        "total_percentage": 0.747776087,
                        "actual_value": 2189528
                    }, {
                        "age": "50",
                        "gender_percentage": 1.4115964,
                        "total_percentage": 0.718210365,
                        "actual_value": 2102958
                    }, {
                        "age": "51",
                        "gender_percentage": 1.37492369,
                        "total_percentage": 0.69955155,
                        "actual_value": 2048324
                    }, {
                        "age": "52",
                        "gender_percentage": 1.32683582,
                        "total_percentage": 0.675084779,
                        "actual_value": 1976684
                    }, {
                        "age": "53",
                        "gender_percentage": 1.30027339,
                        "total_percentage": 0.661569997,
                        "actual_value": 1937112
                    }, {
                        "age": "54",
                        "gender_percentage": 1.2985503,
                        "total_percentage": 0.660693305,
                        "actual_value": 1934545
                    }, {
                        "age": "55",
                        "gender_percentage": 1.2481198,
                        "total_percentage": 0.635034616,
                        "actual_value": 1859415
                    }, {
                        "age": "56",
                        "gender_percentage": 1.24228535,
                        "total_percentage": 0.632066091,
                        "actual_value": 1850723
                    }, {
                        "age": "57",
                        "gender_percentage": 1.29775018,
                        "total_percentage": 0.660286208,
                        "actual_value": 1933353
                    }, {
                        "age": "58",
                        "gender_percentage": 0.976897243,
                        "total_percentage": 0.497038479,
                        "actual_value": 1455355
                    }, {
                        "age": "59",
                        "gender_percentage": 0.97270063,
                        "total_percentage": 0.494903272,
                        "actual_value": 1449103
                    }, {
                        "age": "60",
                        "gender_percentage": 0.955383897,
                        "total_percentage": 0.486092639,
                        "actual_value": 1423305
                    }, {
                        "age": "61",
                        "gender_percentage": 0.995391338,
                        "total_percentage": 0.506448145,
                        "actual_value": 1482907
                    }, {
                        "age": "62",
                        "gender_percentage": 0.883499113,
                        "total_percentage": 0.449518164,
                        "actual_value": 1316213
                    }, {
                        "age": "63",
                        "gender_percentage": 0.82336847,
                        "total_percentage": 0.418924114,
                        "actual_value": 1226632
                    }, {
                        "age": "64",
                        "gender_percentage": 0.797934391,
                        "total_percentage": 0.405983433,
                        "actual_value": 1188741
                    }, {
                        "age": "65",
                        "gender_percentage": 0.760260192,
                        "total_percentage": 0.386815064,
                        "actual_value": 1132615
                    }, {
                        "age": "66",
                        "gender_percentage": 0.746852779,
                        "total_percentage": 0.379993466,
                        "actual_value": 1112641
                    }, {
                        "age": "67",
                        "gender_percentage": 0.70645803,
                        "total_percentage": 0.359440901,
                        "actual_value": 1052462
                    }, {
                        "age": "68",
                        "gender_percentage": 0.695183828,
                        "total_percentage": 0.353704666,
                        "actual_value": 1035666
                    }, {
                        "age": "69",
                        "gender_percentage": 0.696102089,
                        "total_percentage": 0.35417187,
                        "actual_value": 1037034
                    }, {
                        "age": "70",
                        "gender_percentage": 0.636731293,
                        "total_percentage": 0.323964425,
                        "actual_value": 948585
                    }, {
                        "age": "71",
                        "gender_percentage": 0.641792468,
                        "total_percentage": 0.326539515,
                        "actual_value": 956125
                    }, {
                        "age": "72",
                        "gender_percentage": 0.634048334,
                        "total_percentage": 0.322599354,
                        "actual_value": 944588
                    }, {
                        "age": "73",
                        "gender_percentage": 0.630595459,
                        "total_percentage": 0.320842555,
                        "actual_value": 939444
                    }, {
                        "age": "74",
                        "gender_percentage": 0.638488608,
                        "total_percentage": 0.324858534,
                        "actual_value": 951203
                    }, {
                        "age": "75",
                        "gender_percentage": 0.600257277,
                        "total_percentage": 0.305406701,
                        "actual_value": 894247
                    }, {
                        "age": "76",
                        "gender_percentage": 0.601075522,
                        "total_percentage": 0.305823018,
                        "actual_value": 895466
                    }, {
                        "age": "77",
                        "gender_percentage": 0.582887515,
                        "total_percentage": 0.296569087,
                        "actual_value": 868370
                    }, {
                        "age": "78",
                        "gender_percentage": 0.561916533,
                        "total_percentage": 0.285899198,
                        "actual_value": 837128
                    }, {
                        "age": "79",
                        "gender_percentage": 0.554519432,
                        "total_percentage": 0.282135605,
                        "actual_value": 826108
                    }, {
                        "age": "80",
                        "gender_percentage": 0.521652005,
                        "total_percentage": 0.265412889,
                        "actual_value": 777143
                    }, {
                        "age": "81",
                        "gender_percentage": 0.486501681,
                        "total_percentage": 0.24752865,
                        "actual_value": 724777
                    }, {
                        "age": "82",
                        "gender_percentage": 0.463115565,
                        "total_percentage": 0.235629958,
                        "actual_value": 689937
                    }, {
                        "age": "83",
                        "gender_percentage": 0.430485759,
                        "total_percentage": 0.219028141,
                        "actual_value": 641326
                    }, {
                        "age": "84",
                        "gender_percentage": 0.392167166,
                        "total_percentage": 0.199531909,
                        "actual_value": 584240
                    }, {
                        "age": "85",
                        "gender_percentage": 0.33316354,
                        "total_percentage": 0.169511277,
                        "actual_value": 496338
                    }, {
                        "age": "86",
                        "gender_percentage": 0.307216632,
                        "total_percentage": 0.156309672,
                        "actual_value": 457683
                    }, {
                        "age": "87",
                        "gender_percentage": 0.26438527,
                        "total_percentage": 0.134517375,
                        "actual_value": 393874
                    }, {
                        "age": "88",
                        "gender_percentage": 0.233858469,
                        "total_percentage": 0.118985552,
                        "actual_value": 348396
                    }, {
                        "age": "89",
                        "gender_percentage": 0.20654558,
                        "total_percentage": 0.105088945,
                        "actual_value": 307706
                    }, {
                        "age": "90",
                        "gender_percentage": 0.17207791,
                        "total_percentage": 0.087552036,
                        "actual_value": 256357
                    }, {
                        "age": "91",
                        "gender_percentage": 0.144193793,
                        "total_percentage": 0.0733647927,
                        "actual_value": 214816
                    }, {
                        "age": "92",
                        "gender_percentage": 0.11616536,
                        "total_percentage": 0.0591041218,
                        "actual_value": 173060
                    }, {
                        "age": "93",
                        "gender_percentage": 0.0922845379,
                        "total_percentage": 0.0469537269,
                        "actual_value": 137483
                    }, {
                        "age": "94",
                        "gender_percentage": 0.0718666603,
                        "total_percentage": 0.0365652537,
                        "actual_value": 107065
                    }, {
                        "age": "95",
                        "gender_percentage": 0.0533920319,
                        "total_percentage": 0.0271654921,
                        "actual_value": 79542
                    }, {
                        "age": "96",
                        "gender_percentage": 0.0409518804,
                        "total_percentage": 0.0208360301,
                        "actual_value": 61009
                    }, {
                        "age": "97",
                        "gender_percentage": 0.0287970074,
                        "total_percentage": 0.0146517158,
                        "actual_value": 42901
                    }, {
                        "age": "98",
                        "gender_percentage": 0.0201151469,
                        "total_percentage": 0.010234446,
                        "actual_value": 29967
                    }, {
                        "age": "99",
                        "gender_percentage": 0.0145894724,
                        "total_percentage": 0.00742302142,
                        "actual_value": 21735
                    }, { "age": "100", "gender_percentage": 0.0259448947, "total_percentage": 0.0132005808, "actual_value": 38652 }]
            }, {
                "date": 1057017600,
                "max_gender_percentage": 1.60043975,
                "max_total_percentage": 0.81470161,
                "max_actual_value": 2363514,
                "age_groups": [{
                        "age": "00",
                        "gender_percentage": 1.31544331,
                        "total_percentage": 0.66962457,
                        "actual_value": 1942634
                    }, {
                        "age": "01",
                        "gender_percentage": 1.30466656,
                        "total_percentage": 0.664138681,
                        "actual_value": 1926719
                    }, {
                        "age": "02",
                        "gender_percentage": 1.32673604,
                        "total_percentage": 0.675373121,
                        "actual_value": 1959311
                    }, {
                        "age": "03",
                        "gender_percentage": 1.27691787,
                        "total_percentage": 0.650013249,
                        "actual_value": 1885740
                    }, {
                        "age": "04",
                        "gender_percentage": 1.26282176,
                        "total_percentage": 0.642837643,
                        "actual_value": 1864923
                    }, {
                        "age": "05",
                        "gender_percentage": 1.26469068,
                        "total_percentage": 0.643789014,
                        "actual_value": 1867683
                    }, {
                        "age": "06",
                        "gender_percentage": 1.27107276,
                        "total_percentage": 0.647037804,
                        "actual_value": 1877108
                    }, {
                        "age": "07",
                        "gender_percentage": 1.29796486,
                        "total_percentage": 0.660727192,
                        "actual_value": 1916822
                    }, {
                        "age": "08",
                        "gender_percentage": 1.31823585,
                        "total_percentage": 0.67104611,
                        "actual_value": 1946758
                    }, {
                        "age": "09",
                        "gender_percentage": 1.3359215,
                        "total_percentage": 0.680048966,
                        "actual_value": 1972876
                    }, {
                        "age": "10",
                        "gender_percentage": 1.3879079,
                        "total_percentage": 0.706512565,
                        "actual_value": 2049649
                    }, {
                        "age": "11",
                        "gender_percentage": 1.40683611,
                        "total_percentage": 0.716147945,
                        "actual_value": 2077602
                    }, {
                        "age": "12",
                        "gender_percentage": 1.43173876,
                        "total_percentage": 0.728824606,
                        "actual_value": 2114378
                    }, {
                        "age": "13",
                        "gender_percentage": 1.45247359,
                        "total_percentage": 0.739379643,
                        "actual_value": 2144999
                    }, {
                        "age": "14",
                        "gender_percentage": 1.39372998,
                        "total_percentage": 0.70947629,
                        "actual_value": 2058247
                    }, {
                        "age": "15",
                        "gender_percentage": 1.37619466,
                        "total_percentage": 0.700549957,
                        "actual_value": 2032351
                    }, {
                        "age": "16",
                        "gender_percentage": 1.36280751,
                        "total_percentage": 0.693735252,
                        "actual_value": 2012581
                    }, {
                        "age": "17",
                        "gender_percentage": 1.36481592,
                        "total_percentage": 0.69475763,
                        "actual_value": 2015547
                    }, {
                        "age": "18",
                        "gender_percentage": 1.376131,
                        "total_percentage": 0.700517555,
                        "actual_value": 2032257
                    }, {
                        "age": "19",
                        "gender_percentage": 1.35011106,
                        "total_percentage": 0.68727214,
                        "actual_value": 1993831
                    }, {
                        "age": "20",
                        "gender_percentage": 1.3615013,
                        "total_percentage": 0.693070327,
                        "actual_value": 2010652
                    }, {
                        "age": "21",
                        "gender_percentage": 1.37578498,
                        "total_percentage": 0.700341414,
                        "actual_value": 2031746
                    }, {
                        "age": "22",
                        "gender_percentage": 1.39312935,
                        "total_percentage": 0.709170542,
                        "actual_value": 2057360
                    }, {
                        "age": "23",
                        "gender_percentage": 1.38689489,
                        "total_percentage": 0.705996895,
                        "actual_value": 2048153
                    }, {
                        "age": "24",
                        "gender_percentage": 1.31759527,
                        "total_percentage": 0.670720025,
                        "actual_value": 1945812
                    }, {
                        "age": "25",
                        "gender_percentage": 1.28562797,
                        "total_percentage": 0.654447116,
                        "actual_value": 1898603
                    }, {
                        "age": "26",
                        "gender_percentage": 1.26638963,
                        "total_percentage": 0.644653864,
                        "actual_value": 1870192
                    }, {
                        "age": "27",
                        "gender_percentage": 1.24035344,
                        "total_percentage": 0.631400176,
                        "actual_value": 1831742
                    }, {
                        "age": "28",
                        "gender_percentage": 1.27469007,
                        "total_percentage": 0.648879188,
                        "actual_value": 1882450
                    }, {
                        "age": "29",
                        "gender_percentage": 1.23519021,
                        "total_percentage": 0.628771844,
                        "actual_value": 1824117
                    }, {
                        "age": "30",
                        "gender_percentage": 1.28307446,
                        "total_percentage": 0.653147255,
                        "actual_value": 1894832
                    }, {
                        "age": "31",
                        "gender_percentage": 1.34024033,
                        "total_percentage": 0.682247459,
                        "actual_value": 1979254
                    }, {
                        "age": "32",
                        "gender_percentage": 1.43581246,
                        "total_percentage": 0.730898317,
                        "actual_value": 2120394
                    }, {
                        "age": "33",
                        "gender_percentage": 1.45899246,
                        "total_percentage": 0.742698063,
                        "actual_value": 2154626
                    }, {
                        "age": "34",
                        "gender_percentage": 1.38456483,
                        "total_percentage": 0.704810785,
                        "actual_value": 2044712
                    }, {
                        "age": "35",
                        "gender_percentage": 1.36678641,
                        "total_percentage": 0.695760705,
                        "actual_value": 2018457
                    }, {
                        "age": "36",
                        "gender_percentage": 1.37583983,
                        "total_percentage": 0.700369335,
                        "actual_value": 2031827
                    }, {
                        "age": "37",
                        "gender_percentage": 1.41359333,
                        "total_percentage": 0.719587699,
                        "actual_value": 2087581
                    }, {
                        "age": "38",
                        "gender_percentage": 1.51420747,
                        "total_percentage": 0.770805189,
                        "actual_value": 2236167
                    }, {
                        "age": "39",
                        "gender_percentage": 1.54799832,
                        "total_percentage": 0.788006373,
                        "actual_value": 2286069
                    }, {
                        "age": "40",
                        "gender_percentage": 1.54772272,
                        "total_percentage": 0.78786608,
                        "actual_value": 2285662
                    }, {
                        "age": "41",
                        "gender_percentage": 1.55487878,
                        "total_percentage": 0.791508862,
                        "actual_value": 2296230
                    }, {
                        "age": "42",
                        "gender_percentage": 1.57563055,
                        "total_percentage": 0.802072517,
                        "actual_value": 2326876
                    }, {
                        "age": "43",
                        "gender_percentage": 1.60043975,
                        "total_percentage": 0.81470161,
                        "actual_value": 2363514
                    }, {
                        "age": "44",
                        "gender_percentage": 1.54004256,
                        "total_percentage": 0.783956501,
                        "actual_value": 2274320
                    }, {
                        "age": "45",
                        "gender_percentage": 1.54088018,
                        "total_percentage": 0.784382894,
                        "actual_value": 2275557
                    }, {
                        "age": "46",
                        "gender_percentage": 1.53179291,
                        "total_percentage": 0.779757029,
                        "actual_value": 2262137
                    }, {
                        "age": "47",
                        "gender_percentage": 1.47834592,
                        "total_percentage": 0.752549914,
                        "actual_value": 2183207
                    }, {
                        "age": "48",
                        "gender_percentage": 1.48083713,
                        "total_percentage": 0.753818063,
                        "actual_value": 2186886
                    }, {
                        "age": "49",
                        "gender_percentage": 1.42842075,
                        "total_percentage": 0.72713558,
                        "actual_value": 2109478
                    }, {
                        "age": "50",
                        "gender_percentage": 1.38255642,
                        "total_percentage": 0.703788407,
                        "actual_value": 2041746
                    }, {
                        "age": "51",
                        "gender_percentage": 1.34227515,
                        "total_percentage": 0.68328328,
                        "actual_value": 1982259
                    }, {
                        "age": "52",
                        "gender_percentage": 1.31036473,
                        "total_percentage": 0.667039326,
                        "actual_value": 1935134
                    }, {
                        "age": "53",
                        "gender_percentage": 1.30811052,
                        "total_percentage": 0.665891822,
                        "actual_value": 1931805
                    }, {
                        "age": "54",
                        "gender_percentage": 1.2653861,
                        "total_percentage": 0.64414302,
                        "actual_value": 1868710
                    }, {
                        "age": "55",
                        "gender_percentage": 1.25159945,
                        "total_percentage": 0.637124942,
                        "actual_value": 1848350
                    }, {
                        "age": "56",
                        "gender_percentage": 1.31443098,
                        "total_percentage": 0.669109245,
                        "actual_value": 1941139
                    }, {
                        "age": "57",
                        "gender_percentage": 0.987796941,
                        "total_percentage": 0.502836646,
                        "actual_value": 1458769
                    }, {
                        "age": "58",
                        "gender_percentage": 0.985996415,
                        "total_percentage": 0.501920091,
                        "actual_value": 1456110
                    }, {
                        "age": "59",
                        "gender_percentage": 0.97345435,
                        "total_percentage": 0.49553557,
                        "actual_value": 1437588
                    }, {
                        "age": "60",
                        "gender_percentage": 1.00299544,
                        "total_percentage": 0.510573422,
                        "actual_value": 1481214
                    }, {
                        "age": "61",
                        "gender_percentage": 0.895765598,
                        "total_percentage": 0.45598822,
                        "actual_value": 1322858
                    }, {
                        "age": "62",
                        "gender_percentage": 0.834653336,
                        "total_percentage": 0.424879109,
                        "actual_value": 1232608
                    }, {
                        "age": "63",
                        "gender_percentage": 0.813610403,
                        "total_percentage": 0.414167233,
                        "actual_value": 1201532
                    }, {
                        "age": "64",
                        "gender_percentage": 0.771437186,
                        "total_percentage": 0.392699017,
                        "actual_value": 1139251
                    }, {
                        "age": "65",
                        "gender_percentage": 0.761150012,
                        "total_percentage": 0.387462345,
                        "actual_value": 1124059
                    }, {
                        "age": "66",
                        "gender_percentage": 0.719559816,
                        "total_percentage": 0.366290914,
                        "actual_value": 1062639
                    }, {
                        "age": "67",
                        "gender_percentage": 0.709650488,
                        "total_percentage": 0.361246585,
                        "actual_value": 1048005
                    }, {
                        "age": "68",
                        "gender_percentage": 0.712065184,
                        "total_percentage": 0.362475782,
                        "actual_value": 1051571
                    }, {
                        "age": "69",
                        "gender_percentage": 0.65509095,
                        "total_percentage": 0.333473128,
                        "actual_value": 967432
                    }, {
                        "age": "70",
                        "gender_percentage": 0.656265118,
                        "total_percentage": 0.334070837,
                        "actual_value": 969166
                    }, {
                        "age": "71",
                        "gender_percentage": 0.653415695,
                        "total_percentage": 0.332620342,
                        "actual_value": 964958
                    }, {
                        "age": "72",
                        "gender_percentage": 0.649677182,
                        "total_percentage": 0.330717258,
                        "actual_value": 959437
                    }, {
                        "age": "73",
                        "gender_percentage": 0.661593566,
                        "total_percentage": 0.336783276,
                        "actual_value": 977035
                    }, {
                        "age": "74",
                        "gender_percentage": 0.62561351,
                        "total_percentage": 0.318467679,
                        "actual_value": 923900
                    }, {
                        "age": "75",
                        "gender_percentage": 0.622355769,
                        "total_percentage": 0.31680933,
                        "actual_value": 919089
                    }, {
                        "age": "76",
                        "gender_percentage": 0.609322775,
                        "total_percentage": 0.310174903,
                        "actual_value": 899842
                    }, {
                        "age": "77",
                        "gender_percentage": 0.587821416,
                        "total_percentage": 0.299229666,
                        "actual_value": 868089
                    }, {
                        "age": "78",
                        "gender_percentage": 0.583243244,
                        "total_percentage": 0.296899154,
                        "actual_value": 861328
                    }, {
                        "age": "79",
                        "gender_percentage": 0.553656106,
                        "total_percentage": 0.281837863,
                        "actual_value": 817634
                    }, {
                        "age": "80",
                        "gender_percentage": 0.514845587,
                        "total_percentage": 0.262081423,
                        "actual_value": 760319
                    }, {
                        "age": "81",
                        "gender_percentage": 0.496002696,
                        "total_percentage": 0.252489476,
                        "actual_value": 732492
                    }, {
                        "age": "82",
                        "gender_percentage": 0.46279216,
                        "total_percentage": 0.235583699,
                        "actual_value": 683447
                    }, {
                        "age": "83",
                        "gender_percentage": 0.426992224,
                        "total_percentage": 0.217359792,
                        "actual_value": 630578
                    }, {
                        "age": "84",
                        "gender_percentage": 0.36588741,
                        "total_percentage": 0.186254472,
                        "actual_value": 540339
                    }, {
                        "age": "85",
                        "gender_percentage": 0.33962505,
                        "total_percentage": 0.172885655,
                        "actual_value": 501555
                    }, {
                        "age": "86",
                        "gender_percentage": 0.295981076,
                        "total_percentage": 0.150668751,
                        "actual_value": 437102
                    }, {
                        "age": "87",
                        "gender_percentage": 0.266295075,
                        "total_percentage": 0.135557134,
                        "actual_value": 393262
                    }, {
                        "age": "88",
                        "gender_percentage": 0.237907837,
                        "total_percentage": 0.12110665,
                        "actual_value": 351340
                    }, {
                        "age": "89",
                        "gender_percentage": 0.20451718,
                        "total_percentage": 0.104109183,
                        "actual_value": 302029
                    }, {
                        "age": "90",
                        "gender_percentage": 0.171356075,
                        "total_percentage": 0.0872285695,
                        "actual_value": 253057
                    }, {
                        "age": "91",
                        "gender_percentage": 0.140749835,
                        "total_percentage": 0.0716485061,
                        "actual_value": 207858
                    }, {
                        "age": "92",
                        "gender_percentage": 0.116056418,
                        "total_percentage": 0.0590783569,
                        "actual_value": 171391
                    }, {
                        "age": "93",
                        "gender_percentage": 0.091346073,
                        "total_percentage": 0.0464995902,
                        "actual_value": 134899
                    }, {
                        "age": "94",
                        "gender_percentage": 0.0698751853,
                        "total_percentage": 0.035569865,
                        "actual_value": 103191
                    }, {
                        "age": "95",
                        "gender_percentage": 0.0548391987,
                        "total_percentage": 0.0279158171,
                        "actual_value": 80986
                    }, {
                        "age": "96",
                        "gender_percentage": 0.0396765862,
                        "total_percentage": 0.0201973105,
                        "actual_value": 58594
                    }, {
                        "age": "97",
                        "gender_percentage": 0.0286865361,
                        "total_percentage": 0.0146028409,
                        "actual_value": 42364
                    }, {
                        "age": "98",
                        "gender_percentage": 0.0203996456,
                        "total_percentage": 0.010384411,
                        "actual_value": 30126
                    }, {
                        "age": "99",
                        "gender_percentage": 0.0144888541,
                        "total_percentage": 0.00737553082,
                        "actual_value": 21397
                    }, { "age": "100", "gender_percentage": 0.0262894457, "total_percentage": 0.0133826054, "actual_value": 38824 }]
            }, {
                "date": 1025481600,
                "max_gender_percentage": 1.61208846,
                "max_total_percentage": 0.820516094,
                "max_actual_value": 2360011,
                "age_groups": [{
                        "age": "00",
                        "gender_percentage": 1.32036192,
                        "total_percentage": 0.672033969,
                        "actual_value": 1932939
                    }, {
                        "age": "01",
                        "gender_percentage": 1.33898009,
                        "total_percentage": 0.68151019,
                        "actual_value": 1960195
                    }, {
                        "age": "02",
                        "gender_percentage": 1.28637912,
                        "total_percentage": 0.654737501,
                        "actual_value": 1883190
                    }, {
                        "age": "03",
                        "gender_percentage": 1.27015516,
                        "total_percentage": 0.646479879,
                        "actual_value": 1859439
                    }, {
                        "age": "04",
                        "gender_percentage": 1.27182735,
                        "total_percentage": 0.647330987,
                        "actual_value": 1861887
                    }, {
                        "age": "05",
                        "gender_percentage": 1.28174165,
                        "total_percentage": 0.652377137,
                        "actual_value": 1876401
                    }, {
                        "age": "06",
                        "gender_percentage": 1.30539484,
                        "total_percentage": 0.664416069,
                        "actual_value": 1911028
                    }, {
                        "age": "07",
                        "gender_percentage": 1.32726723,
                        "total_percentage": 0.675548612,
                        "actual_value": 1943048
                    }, {
                        "age": "08",
                        "gender_percentage": 1.34022399,
                        "total_percentage": 0.682143306,
                        "actual_value": 1962016
                    }, {
                        "age": "09",
                        "gender_percentage": 1.3711172,
                        "total_percentage": 0.697867241,
                        "actual_value": 2007242
                    }, {
                        "age": "10",
                        "gender_percentage": 1.41579779,
                        "total_percentage": 0.720608643,
                        "actual_value": 2072652
                    }, {
                        "age": "11",
                        "gender_percentage": 1.43170138,
                        "total_percentage": 0.728703205,
                        "actual_value": 2095934
                    }, {
                        "age": "12",
                        "gender_percentage": 1.45832463,
                        "total_percentage": 0.742253826,
                        "actual_value": 2134909
                    }, {
                        "age": "13",
                        "gender_percentage": 1.40229184,
                        "total_percentage": 0.713734419,
                        "actual_value": 2052880
                    }, {
                        "age": "14",
                        "gender_percentage": 1.37644868,
                        "total_percentage": 0.700580842,
                        "actual_value": 2015047
                    }, {
                        "age": "15",
                        "gender_percentage": 1.36361487,
                        "total_percentage": 0.69404873,
                        "actual_value": 1996259
                    }, {
                        "age": "16",
                        "gender_percentage": 1.36912259,
                        "total_percentage": 0.696852031,
                        "actual_value": 2004322
                    }, {
                        "age": "17",
                        "gender_percentage": 1.37111105,
                        "total_percentage": 0.697864112,
                        "actual_value": 2007233
                    }, {
                        "age": "18",
                        "gender_percentage": 1.34665728,
                        "total_percentage": 0.685417706,
                        "actual_value": 1971434
                    }, {
                        "age": "19",
                        "gender_percentage": 1.36796749,
                        "total_percentage": 0.696264113,
                        "actual_value": 2002631
                    }, {
                        "age": "20",
                        "gender_percentage": 1.37888046,
                        "total_percentage": 0.701818564,
                        "actual_value": 2018607
                    }, {
                        "age": "21",
                        "gender_percentage": 1.4016511,
                        "total_percentage": 0.7134083,
                        "actual_value": 2051942
                    }, {
                        "age": "22",
                        "gender_percentage": 1.39136725,
                        "total_percentage": 0.708174058,
                        "actual_value": 2036887
                    }, {
                        "age": "23",
                        "gender_percentage": 1.31970957,
                        "total_percentage": 0.67170194,
                        "actual_value": 1931984
                    }, {
                        "age": "24",
                        "gender_percentage": 1.28203128,
                        "total_percentage": 0.652524551,
                        "actual_value": 1876825
                    }, {
                        "age": "25",
                        "gender_percentage": 1.27219485,
                        "total_percentage": 0.647518036,
                        "actual_value": 1862425
                    }, {
                        "age": "26",
                        "gender_percentage": 1.23851876,
                        "total_percentage": 0.630377673,
                        "actual_value": 1813125
                    }, {
                        "age": "27",
                        "gender_percentage": 1.2821235,
                        "total_percentage": 0.652571487,
                        "actual_value": 1876960
                    }, {
                        "age": "28",
                        "gender_percentage": 1.24651837,
                        "total_percentage": 0.634449292,
                        "actual_value": 1824836
                    }, {
                        "age": "29",
                        "gender_percentage": 1.27821625,
                        "total_percentage": 0.650582788,
                        "actual_value": 1871240
                    }, {
                        "age": "30",
                        "gender_percentage": 1.35366915,
                        "total_percentage": 0.688986587,
                        "actual_value": 1981699
                    }, {
                        "age": "31",
                        "gender_percentage": 1.43317958,
                        "total_percentage": 0.729455573,
                        "actual_value": 2098098
                    }, {
                        "age": "32",
                        "gender_percentage": 1.46593215,
                        "total_percentage": 0.746125879,
                        "actual_value": 2146046
                    }, {
                        "age": "33",
                        "gender_percentage": 1.3913857,
                        "total_percentage": 0.708183445,
                        "actual_value": 2036914
                    }, {
                        "age": "34",
                        "gender_percentage": 1.37124971,
                        "total_percentage": 0.69793469,
                        "actual_value": 2007436
                    }, {
                        "age": "35",
                        "gender_percentage": 1.38317023,
                        "total_percentage": 0.704001961,
                        "actual_value": 2024887
                    }, {
                        "age": "36",
                        "gender_percentage": 1.4234866,
                        "total_percentage": 0.724522069,
                        "actual_value": 2083908
                    }, {
                        "age": "37",
                        "gender_percentage": 1.52352715,
                        "total_percentage": 0.775440418,
                        "actual_value": 2230362
                    }, {
                        "age": "38",
                        "gender_percentage": 1.55795874,
                        "total_percentage": 0.792965309,
                        "actual_value": 2280768
                    }, {
                        "age": "39",
                        "gender_percentage": 1.55983928,
                        "total_percentage": 0.793922457,
                        "actual_value": 2283521
                    }, {
                        "age": "40",
                        "gender_percentage": 1.56510723,
                        "total_percentage": 0.796603724,
                        "actual_value": 2291233
                    }, {
                        "age": "41",
                        "gender_percentage": 1.58922833,
                        "total_percentage": 0.808880813,
                        "actual_value": 2326545
                    }, {
                        "age": "42",
                        "gender_percentage": 1.61208846,
                        "total_percentage": 0.820516094,
                        "actual_value": 2360011
                    }, {
                        "age": "43",
                        "gender_percentage": 1.5573952,
                        "total_percentage": 0.792678477,
                        "actual_value": 2279943
                    }, {
                        "age": "44",
                        "gender_percentage": 1.55625718,
                        "total_percentage": 0.792099251,
                        "actual_value": 2278277
                    }, {
                        "age": "45",
                        "gender_percentage": 1.54405318,
                        "total_percentage": 0.785887695,
                        "actual_value": 2260411
                    }, {
                        "age": "46",
                        "gender_percentage": 1.48974928,
                        "total_percentage": 0.758248253,
                        "actual_value": 2180913
                    }, {
                        "age": "47",
                        "gender_percentage": 1.49568529,
                        "total_percentage": 0.761269546,
                        "actual_value": 2189603
                    }, {
                        "age": "48",
                        "gender_percentage": 1.43992436,
                        "total_percentage": 0.732888513,
                        "actual_value": 2107972
                    }, {
                        "age": "49",
                        "gender_percentage": 1.39820152,
                        "total_percentage": 0.711652543,
                        "actual_value": 2046892
                    }, {
                        "age": "50",
                        "gender_percentage": 1.35122712,
                        "total_percentage": 0.68774365,
                        "actual_value": 1978124
                    }, {
                        "age": "51",
                        "gender_percentage": 1.3248252,
                        "total_percentage": 0.674305675,
                        "actual_value": 1939473
                    }, {
                        "age": "52",
                        "gender_percentage": 1.31897184,
                        "total_percentage": 0.671326451,
                        "actual_value": 1930904
                    }, {
                        "age": "53",
                        "gender_percentage": 1.27561438,
                        "total_percentage": 0.649258495,
                        "actual_value": 1867431
                    }, {
                        "age": "54",
                        "gender_percentage": 1.26772406,
                        "total_percentage": 0.645242505,
                        "actual_value": 1855880
                    }, {
                        "age": "55",
                        "gender_percentage": 1.32542495,
                        "total_percentage": 0.674610934,
                        "actual_value": 1940351
                    }, {
                        "age": "56",
                        "gender_percentage": 0.999927361,
                        "total_percentage": 0.508940119,
                        "actual_value": 1463840
                    }, {
                        "age": "57",
                        "gender_percentage": 0.997019467,
                        "total_percentage": 0.507460068,
                        "actual_value": 1459583
                    }, {
                        "age": "58",
                        "gender_percentage": 0.986473999,
                        "total_percentage": 0.502092666,
                        "actual_value": 1444145
                    }, {
                        "age": "59",
                        "gender_percentage": 1.02057771,
                        "total_percentage": 0.519450673,
                        "actual_value": 1494071
                    }, {
                        "age": "60",
                        "gender_percentage": 0.903994883,
                        "total_percentage": 0.460112686,
                        "actual_value": 1323400
                    }, {
                        "age": "61",
                        "gender_percentage": 0.846151233,
                        "total_percentage": 0.430671593,
                        "actual_value": 1238720
                    }, {
                        "age": "62",
                        "gender_percentage": 0.824866299,
                        "total_percentage": 0.419838049,
                        "actual_value": 1207560
                    }, {
                        "age": "63",
                        "gender_percentage": 0.785925664,
                        "total_percentage": 0.400018158,
                        "actual_value": 1150553
                    }, {
                        "age": "64",
                        "gender_percentage": 0.772866443,
                        "total_percentage": 0.393371314,
                        "actual_value": 1131435
                    }, {
                        "age": "65",
                        "gender_percentage": 0.733016621,
                        "total_percentage": 0.373088668,
                        "actual_value": 1073097
                    }, {
                        "age": "66",
                        "gender_percentage": 0.722835237,
                        "total_percentage": 0.367906576,
                        "actual_value": 1058192
                    }, {
                        "age": "67",
                        "gender_percentage": 0.726849046,
                        "total_percentage": 0.369949513,
                        "actual_value": 1064068
                    }, {
                        "age": "68",
                        "gender_percentage": 0.670178936,
                        "total_percentage": 0.341105725,
                        "actual_value": 981106
                    }, {
                        "age": "69",
                        "gender_percentage": 0.674444802,
                        "total_percentage": 0.343276953,
                        "actual_value": 987351
                    }, {
                        "age": "70",
                        "gender_percentage": 0.668736943,
                        "total_percentage": 0.340371784,
                        "actual_value": 978995
                    }, {
                        "age": "71",
                        "gender_percentage": 0.669049113,
                        "total_percentage": 0.340530671,
                        "actual_value": 979452
                    }, {
                        "age": "72",
                        "gender_percentage": 0.681592605,
                        "total_percentage": 0.346915021,
                        "actual_value": 997815
                    }, {
                        "age": "73",
                        "gender_percentage": 0.647795602,
                        "total_percentage": 0.329713121,
                        "actual_value": 948338
                    }, {
                        "age": "74",
                        "gender_percentage": 0.647731392,
                        "total_percentage": 0.329680439,
                        "actual_value": 948244
                    }, {
                        "age": "75",
                        "gender_percentage": 0.631673426,
                        "total_percentage": 0.321507303,
                        "actual_value": 924736
                    }, {
                        "age": "76",
                        "gender_percentage": 0.614202157,
                        "total_percentage": 0.312614827,
                        "actual_value": 899159
                    }, {
                        "age": "77",
                        "gender_percentage": 0.610192447,
                        "total_percentage": 0.310573977,
                        "actual_value": 893289
                    }, {
                        "age": "78",
                        "gender_percentage": 0.582270659,
                        "total_percentage": 0.296362426,
                        "actual_value": 852413
                    }, {
                        "age": "79",
                        "gender_percentage": 0.545849925,
                        "total_percentage": 0.277825107,
                        "actual_value": 799095
                    }, {
                        "age": "80",
                        "gender_percentage": 0.525536339,
                        "total_percentage": 0.267485957,
                        "actual_value": 769357
                    }, {
                        "age": "81",
                        "gender_percentage": 0.495285913,
                        "total_percentage": 0.252089183,
                        "actual_value": 725072
                    }, {
                        "age": "82",
                        "gender_percentage": 0.459413014,
                        "total_percentage": 0.233830699,
                        "actual_value": 672556
                    }, {
                        "age": "83",
                        "gender_percentage": 0.398077432,
                        "total_percentage": 0.202612293,
                        "actual_value": 582764
                    }, {
                        "age": "84",
                        "gender_percentage": 0.37273429,
                        "total_percentage": 0.189713215,
                        "actual_value": 545663
                    }, {
                        "age": "85",
                        "gender_percentage": 0.327759964,
                        "total_percentage": 0.166822313,
                        "actual_value": 479823
                    }, {
                        "age": "86",
                        "gender_percentage": 0.298060105,
                        "total_percentage": 0.151705765,
                        "actual_value": 436344
                    }, {
                        "age": "87",
                        "gender_percentage": 0.270748995,
                        "total_percentage": 0.137805036,
                        "actual_value": 396362
                    }, {
                        "age": "88",
                        "gender_percentage": 0.235720388,
                        "total_percentage": 0.119976278,
                        "actual_value": 345082
                    }, {
                        "age": "89",
                        "gender_percentage": 0.202921372,
                        "total_percentage": 0.10328233,
                        "actual_value": 297066
                    }, {
                        "age": "90",
                        "gender_percentage": 0.167713114,
                        "total_percentage": 0.0853621331,
                        "actual_value": 245523
                    }, {
                        "age": "91",
                        "gender_percentage": 0.140786581,
                        "total_percentage": 0.0716571444,
                        "actual_value": 206104
                    }, {
                        "age": "92",
                        "gender_percentage": 0.114633983,
                        "total_percentage": 0.0583460712,
                        "actual_value": 167818
                    }, {
                        "age": "93",
                        "gender_percentage": 0.0889492985,
                        "total_percentage": 0.0452731552,
                        "actual_value": 130217
                    }, {
                        "age": "94",
                        "gender_percentage": 0.0717041309,
                        "total_percentage": 0.03649576,
                        "actual_value": 104971
                    }, {
                        "age": "95",
                        "gender_percentage": 0.0532191638,
                        "total_percentage": 0.0270873351,
                        "actual_value": 77910
                    }, {
                        "age": "96",
                        "gender_percentage": 0.0394918847,
                        "total_percentage": 0.0201004646,
                        "actual_value": 57814
                    }, {
                        "age": "97",
                        "gender_percentage": 0.028961444,
                        "total_percentage": 0.0147407115,
                        "actual_value": 42398
                    }, {
                        "age": "98",
                        "gender_percentage": 0.0203224662,
                        "total_percentage": 0.0103436697,
                        "actual_value": 29751
                    }, {
                        "age": "99",
                        "gender_percentage": 0.0146965769,
                        "total_percentage": 0.00748022097,
                        "actual_value": 21515
                    }, { "age": "100", "gender_percentage": 0.0264681833, "total_percentage": 0.0134716989, "actual_value": 38748 }]
            }, {
                "date": 993945600,
                "max_gender_percentage": 1.62565015,
                "max_total_percentage": 0.82761717,
                "max_actual_value": 2358452,
                "age_groups": [{
                        "age": "00",
                        "gender_percentage": 1.35300477,
                        "total_percentage": 0.688813629,
                        "actual_value": 1962905
                    }, {
                        "age": "01",
                        "gender_percentage": 1.29765228,
                        "total_percentage": 0.660633717,
                        "actual_value": 1882601
                    }, {
                        "age": "02",
                        "gender_percentage": 1.2801306,
                        "total_percentage": 0.651713447,
                        "actual_value": 1857181
                    }, {
                        "age": "03",
                        "gender_percentage": 1.28031119,
                        "total_percentage": 0.651805387,
                        "actual_value": 1857443
                    }, {
                        "age": "04",
                        "gender_percentage": 1.28987023,
                        "total_percentage": 0.656671882,
                        "actual_value": 1871311
                    }, {
                        "age": "05",
                        "gender_percentage": 1.31599489,
                        "total_percentage": 0.669971927,
                        "actual_value": 1909212
                    }, {
                        "age": "06",
                        "gender_percentage": 1.33579673,
                        "total_percentage": 0.680053025,
                        "actual_value": 1937940
                    }, {
                        "age": "07",
                        "gender_percentage": 1.3496252,
                        "total_percentage": 0.687093091,
                        "actual_value": 1958002
                    }, {
                        "age": "08",
                        "gender_percentage": 1.37732213,
                        "total_percentage": 0.701193574,
                        "actual_value": 1998184
                    }, {
                        "age": "09",
                        "gender_percentage": 1.40680707,
                        "total_percentage": 0.716204332,
                        "actual_value": 2040960
                    }, {
                        "age": "10",
                        "gender_percentage": 1.43854942,
                        "total_percentage": 0.732364338,
                        "actual_value": 2087011
                    }, {
                        "age": "11",
                        "gender_percentage": 1.45943964,
                        "total_percentage": 0.742999531,
                        "actual_value": 2117318
                    }, {
                        "age": "12",
                        "gender_percentage": 1.40672504,
                        "total_percentage": 0.716162573,
                        "actual_value": 2040841
                    }, {
                        "age": "13",
                        "gender_percentage": 1.38300116,
                        "total_percentage": 0.704084766,
                        "actual_value": 2006423
                    }, {
                        "age": "14",
                        "gender_percentage": 1.36470266,
                        "total_percentage": 0.694769014,
                        "actual_value": 1979876
                    }, {
                        "age": "15",
                        "gender_percentage": 1.36991229,
                        "total_percentage": 0.697421233,
                        "actual_value": 1987434
                    }, {
                        "age": "16",
                        "gender_percentage": 1.37364754,
                        "total_percentage": 0.699322844,
                        "actual_value": 1992853
                    }, {
                        "age": "17",
                        "gender_percentage": 1.34227464,
                        "total_percentage": 0.683350929,
                        "actual_value": 1947338
                    }, {
                        "age": "18",
                        "gender_percentage": 1.3634068,
                        "total_percentage": 0.694109293,
                        "actual_value": 1977996
                    }, {
                        "age": "19",
                        "gender_percentage": 1.38083198,
                        "total_percentage": 0.702980435,
                        "actual_value": 2003276
                    }, {
                        "age": "20",
                        "gender_percentage": 1.40228603,
                        "total_percentage": 0.713902678,
                        "actual_value": 2034401
                    }, {
                        "age": "21",
                        "gender_percentage": 1.39611347,
                        "total_percentage": 0.71076023,
                        "actual_value": 2025446
                    }, {
                        "age": "22",
                        "gender_percentage": 1.32117764,
                        "total_percentage": 0.67261046,
                        "actual_value": 1916731
                    }, {
                        "age": "23",
                        "gender_percentage": 1.28211644,
                        "total_percentage": 0.652724434,
                        "actual_value": 1860062
                    }, {
                        "age": "24",
                        "gender_percentage": 1.26850164,
                        "total_percentage": 0.645793153,
                        "actual_value": 1840310
                    }, {
                        "age": "25",
                        "gender_percentage": 1.24082332,
                        "total_percentage": 0.631702145,
                        "actual_value": 1800155
                    }, {
                        "age": "26",
                        "gender_percentage": 1.28081093,
                        "total_percentage": 0.652059801,
                        "actual_value": 1858168
                    }, {
                        "age": "27",
                        "gender_percentage": 1.25097997,
                        "total_percentage": 0.636872883,
                        "actual_value": 1814890
                    }, {
                        "age": "28",
                        "gender_percentage": 1.2872723,
                        "total_percentage": 0.655349282,
                        "actual_value": 1867542
                    }, {
                        "age": "29",
                        "gender_percentage": 1.35262773,
                        "total_percentage": 0.688621678,
                        "actual_value": 1962358
                    }, {
                        "age": "30",
                        "gender_percentage": 1.44507421,
                        "total_percentage": 0.735686103,
                        "actual_value": 2096477
                    }, {
                        "age": "31",
                        "gender_percentage": 1.46690324,
                        "total_percentage": 0.746799243,
                        "actual_value": 2128146
                    }, {
                        "age": "32",
                        "gender_percentage": 1.39716187,
                        "total_percentage": 0.711293972,
                        "actual_value": 2026967
                    }, {
                        "age": "33",
                        "gender_percentage": 1.37737038,
                        "total_percentage": 0.701218138,
                        "actual_value": 1998254
                    }, {
                        "age": "34",
                        "gender_percentage": 1.38828317,
                        "total_percentage": 0.706773831,
                        "actual_value": 2014086
                    }, {
                        "age": "35",
                        "gender_percentage": 1.43078943,
                        "total_percentage": 0.728413732,
                        "actual_value": 2075753
                    }, {
                        "age": "36",
                        "gender_percentage": 1.53379164,
                        "total_percentage": 0.780852076,
                        "actual_value": 2225186
                    }, {
                        "age": "37",
                        "gender_percentage": 1.56781553,
                        "total_percentage": 0.798173612,
                        "actual_value": 2274547
                    }, {
                        "age": "38",
                        "gender_percentage": 1.57016669,
                        "total_percentage": 0.799370584,
                        "actual_value": 2277958
                    }, {
                        "age": "39",
                        "gender_percentage": 1.577134,
                        "total_percentage": 0.802917637,
                        "actual_value": 2288066
                    }, {
                        "age": "40",
                        "gender_percentage": 1.60059182,
                        "total_percentage": 0.814859991,
                        "actual_value": 2322098
                    }, {
                        "age": "41",
                        "gender_percentage": 1.62565015,
                        "total_percentage": 0.82761717,
                        "actual_value": 2358452
                    }, {
                        "age": "42",
                        "gender_percentage": 1.56929612,
                        "total_percentage": 0.798927378,
                        "actual_value": 2276695
                    }, {
                        "age": "43",
                        "gender_percentage": 1.57250475,
                        "total_percentage": 0.800560889,
                        "actual_value": 2281350
                    }, {
                        "age": "44",
                        "gender_percentage": 1.55939038,
                        "total_percentage": 0.793884372,
                        "actual_value": 2262324
                    }, {
                        "age": "45",
                        "gender_percentage": 1.5026531,
                        "total_percentage": 0.764999472,
                        "actual_value": 2180011
                    }, {
                        "age": "46",
                        "gender_percentage": 1.50834661,
                        "total_percentage": 0.767898033,
                        "actual_value": 2188271
                    }, {
                        "age": "47",
                        "gender_percentage": 1.45427826,
                        "total_percentage": 0.740371877,
                        "actual_value": 2109830
                    }, {
                        "age": "48",
                        "gender_percentage": 1.41033208,
                        "total_percentage": 0.717998913,
                        "actual_value": 2046074
                    }, {
                        "age": "49",
                        "gender_percentage": 1.36600335,
                        "total_percentage": 0.695431192,
                        "actual_value": 1981763
                    }, {
                        "age": "50",
                        "gender_percentage": 1.33527494,
                        "total_percentage": 0.679787382,
                        "actual_value": 1937183
                    }, {
                        "age": "51",
                        "gender_percentage": 1.33307473,
                        "total_percentage": 0.67866726,
                        "actual_value": 1933991
                    }, {
                        "age": "52",
                        "gender_percentage": 1.28728195,
                        "total_percentage": 0.655354195,
                        "actual_value": 1867556
                    }, {
                        "age": "53",
                        "gender_percentage": 1.27913596,
                        "total_percentage": 0.651207076,
                        "actual_value": 1855738
                    }, {
                        "age": "54",
                        "gender_percentage": 1.34181006,
                        "total_percentage": 0.683114412,
                        "actual_value": 1946664
                    }, {
                        "age": "55",
                        "gender_percentage": 1.00928013,
                        "total_percentage": 0.51382369,
                        "actual_value": 1464238
                    }, {
                        "age": "56",
                        "gender_percentage": 1.00899821,
                        "total_percentage": 0.513680166,
                        "actual_value": 1463829
                    }, {
                        "age": "57",
                        "gender_percentage": 0.998033719,
                        "total_percentage": 0.508098154,
                        "actual_value": 1447922
                    }, {
                        "age": "58",
                        "gender_percentage": 1.03419785,
                        "total_percentage": 0.526509282,
                        "actual_value": 1500388
                    }, {
                        "age": "59",
                        "gender_percentage": 0.918832583,
                        "total_percentage": 0.46777692,
                        "actual_value": 1333019
                    }, {
                        "age": "60",
                        "gender_percentage": 0.855691831,
                        "total_percentage": 0.435632015,
                        "actual_value": 1241416
                    }, {
                        "age": "61",
                        "gender_percentage": 0.836488297,
                        "total_percentage": 0.425855511,
                        "actual_value": 1213556
                    }, {
                        "age": "62",
                        "gender_percentage": 0.797345071,
                        "total_percentage": 0.405927726,
                        "actual_value": 1156768
                    }, {
                        "age": "63",
                        "gender_percentage": 0.786899617,
                        "total_percentage": 0.400609954,
                        "actual_value": 1141614
                    }, {
                        "age": "64",
                        "gender_percentage": 0.744992349,
                        "total_percentage": 0.379274999,
                        "actual_value": 1080816
                    }, {
                        "age": "65",
                        "gender_percentage": 0.736602349,
                        "total_percentage": 0.375003656,
                        "actual_value": 1068644
                    }, {
                        "age": "66",
                        "gender_percentage": 0.741012407,
                        "total_percentage": 0.377248813,
                        "actual_value": 1075042
                    }, {
                        "age": "67",
                        "gender_percentage": 0.684506731,
                        "total_percentage": 0.34848182,
                        "actual_value": 993065
                    }, {
                        "age": "68",
                        "gender_percentage": 0.690258142,
                        "total_percentage": 0.351409858,
                        "actual_value": 1001409
                    }, {
                        "age": "69",
                        "gender_percentage": 0.686845482,
                        "total_percentage": 0.349672476,
                        "actual_value": 996458
                    }, {
                        "age": "70",
                        "gender_percentage": 0.685755719,
                        "total_percentage": 0.349117678,
                        "actual_value": 994877
                    }, {
                        "age": "71",
                        "gender_percentage": 0.701905712,
                        "total_percentage": 0.357339627,
                        "actual_value": 1018307
                    }, {
                        "age": "72",
                        "gender_percentage": 0.66794937,
                        "total_percentage": 0.34005248,
                        "actual_value": 969044
                    }, {
                        "age": "73",
                        "gender_percentage": 0.670674121,
                        "total_percentage": 0.341439649,
                        "actual_value": 972997
                    }, {
                        "age": "74",
                        "gender_percentage": 0.657085519,
                        "total_percentage": 0.334521703,
                        "actual_value": 953283
                    }, {
                        "age": "75",
                        "gender_percentage": 0.638134263,
                        "total_percentage": 0.324873634,
                        "actual_value": 925789
                    }, {
                        "age": "76",
                        "gender_percentage": 0.637736545,
                        "total_percentage": 0.324671156,
                        "actual_value": 925212
                    }, {
                        "age": "77",
                        "gender_percentage": 0.610030657,
                        "total_percentage": 0.310566111,
                        "actual_value": 885017
                    }, {
                        "age": "78",
                        "gender_percentage": 0.574660587,
                        "total_percentage": 0.292559237,
                        "actual_value": 833703
                    }, {
                        "age": "79",
                        "gender_percentage": 0.557245752,
                        "total_percentage": 0.283693359,
                        "actual_value": 808438
                    }, {
                        "age": "80",
                        "gender_percentage": 0.525920418,
                        "total_percentage": 0.267745657,
                        "actual_value": 762992
                    }, {
                        "age": "81",
                        "gender_percentage": 0.492288041,
                        "total_percentage": 0.250623441,
                        "actual_value": 714199
                    }, {
                        "age": "82",
                        "gender_percentage": 0.429074914,
                        "total_percentage": 0.21844169,
                        "actual_value": 622491
                    }, {
                        "age": "83",
                        "gender_percentage": 0.405835605,
                        "total_percentage": 0.206610576,
                        "actual_value": 588776
                    }, {
                        "age": "84",
                        "gender_percentage": 0.360577025,
                        "total_percentage": 0.18356947,
                        "actual_value": 523116
                    }, {
                        "age": "85",
                        "gender_percentage": 0.330660593,
                        "total_percentage": 0.168339039,
                        "actual_value": 479714
                    }, {
                        "age": "86",
                        "gender_percentage": 0.303864564,
                        "total_percentage": 0.154697202,
                        "actual_value": 440839
                    }, {
                        "age": "87",
                        "gender_percentage": 0.268776412,
                        "total_percentage": 0.136833853,
                        "actual_value": 389934
                    }, {
                        "age": "88",
                        "gender_percentage": 0.234511269,
                        "total_percentage": 0.119389496,
                        "actual_value": 340223
                    }, {
                        "age": "89",
                        "gender_percentage": 0.198660077,
                        "total_percentage": 0.101137684,
                        "actual_value": 288211
                    }, {
                        "age": "90",
                        "gender_percentage": 0.168532035,
                        "total_percentage": 0.0857995216,
                        "actual_value": 244502
                    }, {
                        "age": "91",
                        "gender_percentage": 0.139865969,
                        "total_percentage": 0.0712056512,
                        "actual_value": 202914
                    }, {
                        "age": "92",
                        "gender_percentage": 0.111816816,
                        "total_percentage": 0.05692585,
                        "actual_value": 162221
                    }, {
                        "age": "93",
                        "gender_percentage": 0.0917316841,
                        "total_percentage": 0.0467005257,
                        "actual_value": 133082
                    }, {
                        "age": "94",
                        "gender_percentage": 0.0700356885,
                        "total_percentage": 0.035655112,
                        "actual_value": 101606
                    }, {
                        "age": "95",
                        "gender_percentage": 0.053264648,
                        "total_percentage": 0.0271169889,
                        "actual_value": 77275
                    }, {
                        "age": "96",
                        "gender_percentage": 0.0400517067,
                        "total_percentage": 0.0203902913,
                        "actual_value": 58106
                    }, {
                        "age": "97",
                        "gender_percentage": 0.0290231157,
                        "total_percentage": 0.0147756446,
                        "actual_value": 42106
                    }, {
                        "age": "98",
                        "gender_percentage": 0.0208619584,
                        "total_percentage": 0.010620806,
                        "actual_value": 30266
                    }, {
                        "age": "99",
                        "gender_percentage": 0.0144095434,
                        "total_percentage": 0.00733588682,
                        "actual_value": 20905
                    }, { "age": "100", "gender_percentage": 0.0272447554, "total_percentage": 0.0138702828, "actual_value": 39526 }]
            }, {
                "date": 962409600,
                "max_gender_percentage": 1.63800398,
                "max_total_percentage": 0.834314887,
                "max_actual_value": 2354123,
                "age_groups": [{
                        "age": "00",
                        "gender_percentage": 1.3093759,
                        "total_percentage": 0.666928665,
                        "actual_value": 1881822
                    }, {
                        "age": "01",
                        "gender_percentage": 1.29146734,
                        "total_percentage": 0.657806968,
                        "actual_value": 1856084
                    }, {
                        "age": "02",
                        "gender_percentage": 1.29142838,
                        "total_percentage": 0.657787121,
                        "actual_value": 1856028
                    }, {
                        "age": "03",
                        "gender_percentage": 1.3000445,
                        "total_percentage": 0.662175728,
                        "actual_value": 1868411
                    }, {
                        "age": "04",
                        "gender_percentage": 1.32573212,
                        "total_percentage": 0.675259682,
                        "actual_value": 1905329
                    }, {
                        "age": "05",
                        "gender_percentage": 1.34665141,
                        "total_percentage": 0.685914893,
                        "actual_value": 1935394
                    }, {
                        "age": "06",
                        "gender_percentage": 1.35959055,
                        "total_percentage": 0.692505424,
                        "actual_value": 1953990
                    }, {
                        "age": "07",
                        "gender_percentage": 1.38769052,
                        "total_percentage": 0.706818103,
                        "actual_value": 1994375
                    }, {
                        "age": "08",
                        "gender_percentage": 1.41538067,
                        "total_percentage": 0.720922037,
                        "actual_value": 2034171
                    }, {
                        "age": "09",
                        "gender_percentage": 1.43792049,
                        "total_percentage": 0.732402659,
                        "actual_value": 2066565
                    }, {
                        "age": "10",
                        "gender_percentage": 1.4643895,
                        "total_percentage": 0.74588461,
                        "actual_value": 2104606
                    }, {
                        "age": "11",
                        "gender_percentage": 1.4089772,
                        "total_percentage": 0.71766044,
                        "actual_value": 2024968
                    }, {
                        "age": "12",
                        "gender_percentage": 1.38650836,
                        "total_percentage": 0.706215967,
                        "actual_value": 1992676
                    }, {
                        "age": "13",
                        "gender_percentage": 1.36968316,
                        "total_percentage": 0.69764608,
                        "actual_value": 1968495
                    }, {
                        "age": "14",
                        "gender_percentage": 1.37233695,
                        "total_percentage": 0.698997784,
                        "actual_value": 1972309
                    }, {
                        "age": "15",
                        "gender_percentage": 1.37486689,
                        "total_percentage": 0.700286403,
                        "actual_value": 1975945
                    }, {
                        "age": "16",
                        "gender_percentage": 1.34327121,
                        "total_percentage": 0.68419319,
                        "actual_value": 1930536
                    }, {
                        "age": "17",
                        "gender_percentage": 1.36049162,
                        "total_percentage": 0.692964379,
                        "actual_value": 1955285
                    }, {
                        "age": "18",
                        "gender_percentage": 1.37666484,
                        "total_percentage": 0.701202188,
                        "actual_value": 1978529
                    }, {
                        "age": "19",
                        "gender_percentage": 1.40178887,
                        "total_percentage": 0.713999073,
                        "actual_value": 2014637
                    }, {
                        "age": "20",
                        "gender_percentage": 1.39551204,
                        "total_percentage": 0.710801979,
                        "actual_value": 2005616
                    }, {
                        "age": "21",
                        "gender_percentage": 1.32225589,
                        "total_percentage": 0.673489071,
                        "actual_value": 1900333
                    }, {
                        "age": "22",
                        "gender_percentage": 1.28195851,
                        "total_percentage": 0.652963658,
                        "actual_value": 1842418
                    }, {
                        "age": "23",
                        "gender_percentage": 1.26790678,
                        "total_percentage": 0.645806432,
                        "actual_value": 1822223
                    }, {
                        "age": "24",
                        "gender_percentage": 1.23798798,
                        "total_percentage": 0.630567337,
                        "actual_value": 1779224
                    }, {
                        "age": "25",
                        "gender_percentage": 1.28164053,
                        "total_percentage": 0.652801694,
                        "actual_value": 1841961
                    }, {
                        "age": "26",
                        "gender_percentage": 1.25043241,
                        "total_percentage": 0.636905885,
                        "actual_value": 1797109
                    }, {
                        "age": "27",
                        "gender_percentage": 1.29055167,
                        "total_percentage": 0.65734057,
                        "actual_value": 1854768
                    }, {
                        "age": "28",
                        "gender_percentage": 1.36057302,
                        "total_percentage": 0.693005845,
                        "actual_value": 1955402
                    }, {
                        "age": "29",
                        "gender_percentage": 1.44944854,
                        "total_percentage": 0.738274454,
                        "actual_value": 2083133
                    }, {
                        "age": "30",
                        "gender_percentage": 1.47695777,
                        "total_percentage": 0.752286243,
                        "actual_value": 2122669
                    }, {
                        "age": "31",
                        "gender_percentage": 1.40167337,
                        "total_percentage": 0.713940242,
                        "actual_value": 2014471
                    }, {
                        "age": "32",
                        "gender_percentage": 1.38315529,
                        "total_percentage": 0.704508086,
                        "actual_value": 1987857
                    }, {
                        "age": "33",
                        "gender_percentage": 1.39470073,
                        "total_percentage": 0.710388741,
                        "actual_value": 2004450
                    }, {
                        "age": "34",
                        "gender_percentage": 1.43735062,
                        "total_percentage": 0.7321124,
                        "actual_value": 2065746
                    }, {
                        "age": "35",
                        "gender_percentage": 1.54231517,
                        "total_percentage": 0.785575936,
                        "actual_value": 2216600
                    }, {
                        "age": "36",
                        "gender_percentage": 1.57834937,
                        "total_percentage": 0.803929904,
                        "actual_value": 2268388
                    }, {
                        "age": "37",
                        "gender_percentage": 1.58077285,
                        "total_percentage": 0.8051643,
                        "actual_value": 2271871
                    }, {
                        "age": "38",
                        "gender_percentage": 1.5882736,
                        "total_percentage": 0.808984794,
                        "actual_value": 2282651
                    }, {
                        "age": "39",
                        "gender_percentage": 1.6130372,
                        "total_percentage": 0.821598097,
                        "actual_value": 2318241
                    }, {
                        "age": "40",
                        "gender_percentage": 1.63800398,
                        "total_percentage": 0.834314887,
                        "actual_value": 2354123
                    }, {
                        "age": "41",
                        "gender_percentage": 1.582472,
                        "total_percentage": 0.806029759,
                        "actual_value": 2274313
                    }, {
                        "age": "42",
                        "gender_percentage": 1.58553144,
                        "total_percentage": 0.807588081,
                        "actual_value": 2278710
                    }, {
                        "age": "43",
                        "gender_percentage": 1.57470198,
                        "total_percentage": 0.802072109,
                        "actual_value": 2263146
                    }, {
                        "age": "44",
                        "gender_percentage": 1.5177283,
                        "total_percentage": 0.773052652,
                        "actual_value": 2181264
                    }, {
                        "age": "45",
                        "gender_percentage": 1.52270746,
                        "total_percentage": 0.77558878,
                        "actual_value": 2188420
                    }, {
                        "age": "46",
                        "gender_percentage": 1.46771126,
                        "total_percentage": 0.747576544,
                        "actual_value": 2109380
                    }, {
                        "age": "47",
                        "gender_percentage": 1.42433286,
                        "total_percentage": 0.725481822,
                        "actual_value": 2047037
                    }, {
                        "age": "48",
                        "gender_percentage": 1.37895473,
                        "total_percentage": 0.702368538,
                        "actual_value": 1981820
                    }, {
                        "age": "49",
                        "gender_percentage": 1.34949237,
                        "total_percentage": 0.687361932,
                        "actual_value": 1939477
                    }, {
                        "age": "50",
                        "gender_percentage": 1.34549708,
                        "total_percentage": 0.685326934,
                        "actual_value": 1933735
                    }, {
                        "age": "51",
                        "gender_percentage": 1.30107846,
                        "total_percentage": 0.662702375,
                        "actual_value": 1869897
                    }, {
                        "age": "52",
                        "gender_percentage": 1.29236562,
                        "total_percentage": 0.658264506,
                        "actual_value": 1857375
                    }, {
                        "age": "53",
                        "gender_percentage": 1.35533711,
                        "total_percentage": 0.690338941,
                        "actual_value": 1947877
                    }, {
                        "age": "54",
                        "gender_percentage": 1.02086569,
                        "total_percentage": 0.519976419,
                        "actual_value": 1467178
                    }, {
                        "age": "55",
                        "gender_percentage": 1.01975449,
                        "total_percentage": 0.519410433,
                        "actual_value": 1465581
                    }, {
                        "age": "56",
                        "gender_percentage": 1.01006684,
                        "total_percentage": 0.514476041,
                        "actual_value": 1451658
                    }, {
                        "age": "57",
                        "gender_percentage": 1.04692487,
                        "total_percentage": 0.533249626,
                        "actual_value": 1504630
                    }, {
                        "age": "58",
                        "gender_percentage": 0.930988222,
                        "total_percentage": 0.474197465,
                        "actual_value": 1338007
                    }, {
                        "age": "59",
                        "gender_percentage": 0.868871176,
                        "total_percentage": 0.44255824,
                        "actual_value": 1248733
                    }, {
                        "age": "60",
                        "gender_percentage": 0.847719485,
                        "total_percentage": 0.431784658,
                        "actual_value": 1218334
                    }, {
                        "age": "61",
                        "gender_percentage": 0.809073934,
                        "total_percentage": 0.412100604,
                        "actual_value": 1162793
                    }, {
                        "age": "62",
                        "gender_percentage": 0.798958362,
                        "total_percentage": 0.406948252,
                        "actual_value": 1148255
                    }, {
                        "age": "63",
                        "gender_percentage": 0.758132167,
                        "total_percentage": 0.386153491,
                        "actual_value": 1089580
                    }, {
                        "age": "64",
                        "gender_percentage": 0.749548751,
                        "total_percentage": 0.381781541,
                        "actual_value": 1077244
                    }, {
                        "age": "65",
                        "gender_percentage": 0.755158309,
                        "total_percentage": 0.38463876,
                        "actual_value": 1085306
                    }, {
                        "age": "66",
                        "gender_percentage": 0.698413551,
                        "total_percentage": 0.355735903,
                        "actual_value": 1003753
                    }, {
                        "age": "67",
                        "gender_percentage": 0.705450895,
                        "total_percentage": 0.359320363,
                        "actual_value": 1013867
                    }, {
                        "age": "68",
                        "gender_percentage": 0.703289733,
                        "total_percentage": 0.358219579,
                        "actual_value": 1010761
                    }, {
                        "age": "69",
                        "gender_percentage": 0.703974403,
                        "total_percentage": 0.358568314,
                        "actual_value": 1011745
                    }, {
                        "age": "70",
                        "gender_percentage": 0.720464219,
                        "total_percentage": 0.366967378,
                        "actual_value": 1035444
                    }, {
                        "age": "71",
                        "gender_percentage": 0.687879802,
                        "total_percentage": 0.350370553,
                        "actual_value": 988614
                    }, {
                        "age": "72",
                        "gender_percentage": 0.692052528,
                        "total_percentage": 0.352495925,
                        "actual_value": 994611
                    }, {
                        "age": "73",
                        "gender_percentage": 0.680304603,
                        "total_percentage": 0.346512137,
                        "actual_value": 977727
                    }, {
                        "age": "74",
                        "gender_percentage": 0.663446012,
                        "total_percentage": 0.337925238,
                        "actual_value": 953498
                    }, {
                        "age": "75",
                        "gender_percentage": 0.663783476,
                        "total_percentage": 0.338097125,
                        "actual_value": 953983
                    }, {
                        "age": "76",
                        "gender_percentage": 0.637750036,
                        "total_percentage": 0.324837032,
                        "actual_value": 916568
                    }, {
                        "age": "77",
                        "gender_percentage": 0.602747706,
                        "total_percentage": 0.307008647,
                        "actual_value": 866263
                    }, {
                        "age": "78",
                        "gender_percentage": 0.587112335,
                        "total_percentage": 0.299044794,
                        "actual_value": 843792
                    }, {
                        "age": "79",
                        "gender_percentage": 0.557428717,
                        "total_percentage": 0.283925487,
                        "actual_value": 801131
                    }, {
                        "age": "80",
                        "gender_percentage": 0.523966893,
                        "total_percentage": 0.266881757,
                        "actual_value": 753040
                    }, {
                        "age": "81",
                        "gender_percentage": 0.460025454,
                        "total_percentage": 0.23431328,
                        "actual_value": 661144
                    }, {
                        "age": "82",
                        "gender_percentage": 0.43797409,
                        "total_percentage": 0.223081451,
                        "actual_value": 629452
                    }, {
                        "age": "83",
                        "gender_percentage": 0.393085107,
                        "total_percentage": 0.200217314,
                        "actual_value": 564938
                    }, {
                        "age": "84",
                        "gender_percentage": 0.363871851,
                        "total_percentage": 0.185337586,
                        "actual_value": 522953
                    }, {
                        "age": "85",
                        "gender_percentage": 0.337766744,
                        "total_percentage": 0.172040988,
                        "actual_value": 485435
                    }, {
                        "age": "86",
                        "gender_percentage": 0.302336495,
                        "total_percentage": 0.153994644,
                        "actual_value": 434515
                    }, {
                        "age": "87",
                        "gender_percentage": 0.267604833,
                        "total_percentage": 0.136304123,
                        "actual_value": 384599
                    }, {
                        "age": "88",
                        "gender_percentage": 0.230181807,
                        "total_percentage": 0.117242761,
                        "actual_value": 330815
                    }, {
                        "age": "89",
                        "gender_percentage": 0.19935429,
                        "total_percentage": 0.101540811,
                        "actual_value": 286510
                    }, {
                        "age": "90",
                        "gender_percentage": 0.1681246,
                        "total_percentage": 0.0856340145,
                        "actual_value": 241627
                    }, {
                        "age": "91",
                        "gender_percentage": 0.137008325,
                        "total_percentage": 0.0697849863,
                        "actual_value": 196907
                    }, {
                        "age": "92",
                        "gender_percentage": 0.115258244,
                        "total_percentage": 0.0587066149,
                        "actual_value": 165648
                    }, {
                        "age": "93",
                        "gender_percentage": 0.0900555921,
                        "total_percentage": 0.0458696818,
                        "actual_value": 129427
                    }, {
                        "age": "94",
                        "gender_percentage": 0.0702878514,
                        "total_percentage": 0.0358010125,
                        "actual_value": 101017
                    }, {
                        "age": "95",
                        "gender_percentage": 0.0541695933,
                        "total_percentage": 0.0275912017,
                        "actual_value": 77852
                    }, {
                        "age": "96",
                        "gender_percentage": 0.0403446993,
                        "total_percentage": 0.0205495125,
                        "actual_value": 57983
                    }, {
                        "age": "97",
                        "gender_percentage": 0.0297984253,
                        "total_percentage": 0.0151777835,
                        "actual_value": 42826
                    }, {
                        "age": "98",
                        "gender_percentage": 0.0206173152,
                        "total_percentage": 0.0105013988,
                        "actual_value": 29631
                    }, {
                        "age": "99",
                        "gender_percentage": 0.0148365904,
                        "total_percentage": 0.00755699525,
                        "actual_value": 21323
                    }, { "age": "100", "gender_percentage": 0.028142416, "total_percentage": 0.0143342977, "actual_value": 40446 }]
            }]
    },
    "max_value": 2399883,
    "max_percent": 1.69179743
};
/* harmony export (immutable) */ __webpack_exports__["a"] = population;



/***/ }),

/***/ "./src/components/breadcrumbs/breadcrumb.html":
/***/ (function(module, exports) {

module.exports = "<nz-breadcrumb *ngIf=\"breadcrumbSecond.length>0\" class=\"breadcrumb-real-content-n\">\n  <nz-breadcrumb-item>{{breadcrumbOne}}</nz-breadcrumb-item>\n  <nz-breadcrumb-item>{{breadcrumbSecond}}</nz-breadcrumb-item>\n</nz-breadcrumb>\n"

/***/ }),

/***/ "./src/components/breadcrumbs/breadcrumb.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let BreadcrumbComponent = class BreadcrumbComponent {
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], BreadcrumbComponent.prototype, "breadcrumbOne", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], BreadcrumbComponent.prototype, "breadcrumbSecond", void 0);
BreadcrumbComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-custom-breadcrumb',
        template: __webpack_require__("./src/components/breadcrumbs/breadcrumb.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")]
    })
], BreadcrumbComponent);



/***/ }),

/***/ "./src/components/charts/data/blockColumnarData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__antv_data_set__ = __webpack_require__("./node_modules/@antv/data-set/build/data-set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__antv_data_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__antv_data_set__);

const sourceData = [
    { name: 'London', 'Jan.': 18.9, 'Feb.': 28.8, 'Mar.': 39.3, 'Apr.': 81.4, 'May': 47, 'Jun.': 20.3, 'Jul.': 24, 'Aug.': 35.6 },
    { name: 'Berlin', 'Jan.': 12.4, 'Feb.': 23.2, 'Mar.': 34.5, 'Apr.': 99.7, 'May': 52.6, 'Jun.': 35.5, 'Jul.': 37.4, 'Aug.': 42.4 },
];
const dv = new __WEBPACK_IMPORTED_MODULE_0__antv_data_set__["DataSet"].View().source(sourceData);
dv.transform({
    type: 'fold',
    fields: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.'],
    key: '月份',
    value: '月均降雨量',
});
const blockData = dv.rows;
/* harmony export (immutable) */ __webpack_exports__["a"] = blockData;



/***/ }),

/***/ "./src/components/charts/data/bubbleGraphData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_viser_ng__ = __webpack_require__("./node_modules/viser-ng/es/index.js");

const bubbleData = [
    {
        'continent': 'Americas',
        'Country': 'Argentina',
        'LifeExpectancy': 75.32,
        'GDP': 12779.37964,
        'Population': 40301927
    },
    {
        'continent': 'Americas',
        'Country': 'Brazil',
        'LifeExpectancy': 72.39,
        'GDP': 9065.800825,
        'Population': 190010647
    },
    {
        'continent': 'Americas',
        'Country': 'Canada',
        'LifeExpectancy': 80.653,
        'GDP': 36319.23501,
        'Population': 33390141
    },
    {
        'continent': 'Americas',
        'Country': 'Chile',
        'LifeExpectancy': 78.553,
        'GDP': 13171.63885,
        'Population': 16284741
    },
    {
        'continent': 'Americas',
        'Country': 'Colombia',
        'LifeExpectancy': 72.889,
        'GDP': 7006.580419,
        'Population': 44227550
    },
    {
        'continent': 'Americas',
        'Country': 'Costa Rica',
        'LifeExpectancy': 78.782,
        'GDP': 9645.06142,
        'Population': 4133884
    },
    {
        'continent': 'Americas',
        'Country': 'Cuba',
        'LifeExpectancy': 78.273,
        'GDP': 8948.102923,
        'Population': 11416987
    },
    {
        'continent': 'Americas',
        'Country': 'Dominican Republic',
        'LifeExpectancy': 72.235,
        'GDP': 6025.374752,
        'Population': 9319622
    },
    {
        'continent': 'Americas',
        'Country': 'Ecuador',
        'LifeExpectancy': 74.994,
        'GDP': 6873.262326,
        'Population': 13755680
    },
    {
        'continent': 'Americas',
        'Country': 'El Salvador',
        'LifeExpectancy': 71.878,
        'GDP': 5728.353514,
        'Population': 6939688
    },
    {
        'continent': 'Americas',
        'Country': 'Guatemala',
        'LifeExpectancy': 70.259,
        'GDP': 5186.050003,
        'Population': 12572928
    },
    {
        'continent': 'Americas',
        'Country': 'Honduras',
        'LifeExpectancy': 70.198,
        'GDP': 3548.330846,
        'Population': 7483763
    },
    {
        'continent': 'Americas',
        'Country': 'Jamaica',
        'LifeExpectancy': 72.567,
        'GDP': 7320.880262,
        'Population': 2780132
    },
    {
        'continent': 'Americas',
        'Country': 'Mexico',
        'LifeExpectancy': 76.195,
        'GDP': 11977.57496,
        'Population': 108700891
    },
    {
        'continent': 'Americas',
        'Country': 'Nicaragua',
        'LifeExpectancy': 72.899,
        'GDP': 2749.320965,
        'Population': 5675356
    },
    {
        'continent': 'Americas',
        'Country': 'Panama',
        'LifeExpectancy': 75.537,
        'GDP': 9809.185636,
        'Population': 3242173
    },
    {
        'continent': 'Americas',
        'Country': 'Paraguay',
        'LifeExpectancy': 71.752,
        'GDP': 4172.838464,
        'Population': 6667147
    },
    {
        'continent': 'Americas',
        'Country': 'Peru',
        'LifeExpectancy': 71.421,
        'GDP': 7408.905561,
        'Population': 28674757
    },
    {
        'continent': 'Americas',
        'Country': 'Puerto Rico',
        'LifeExpectancy': 78.746,
        'GDP': 19328.70901,
        'Population': 3942491
    },
    {
        'continent': 'Americas',
        'Country': 'Trinidad and Tobago',
        'LifeExpectancy': 69.819,
        'GDP': 18008.50924,
        'Population': 1056608
    },
    {
        'continent': 'Americas',
        'Country': 'United States',
        'LifeExpectancy': 78.242,
        'GDP': 42951.65309,
        'Population': 301139947
    },
    {
        'continent': 'Americas',
        'Country': 'Uruguay',
        'LifeExpectancy': 76.384,
        'GDP': 10611.46299,
        'Population': 3447496
    },
    {
        'continent': 'Americas',
        'Country': 'Venezuela',
        'LifeExpectancy': 73.747,
        'GDP': 11415.80569,
        'Population': 26084662
    },
    {
        'continent': 'Asia',
        'Country': 'China',
        'LifeExpectancy': 72.961,
        'GDP': 4959.114854,
        'Population': 1318683096
    },
    {
        'continent': 'Asia',
        'Country': 'Hong Kong, China',
        'LifeExpectancy': 82.208,
        'GDP': 39724.97867,
        'Population': 6980412
    },
    {
        'continent': 'Asia',
        'Country': 'Japan',
        'LifeExpectancy': 82.603,
        'GDP': 31656.06806,
        'Population': 127467972
    },
    {
        'continent': 'Asia',
        'Country': 'Korea, Dem. Rep.',
        'LifeExpectancy': 67.297,
        'GDP': 1593.06548,
        'Population': 23301725
    },
    {
        'continent': 'Asia',
        'Country': 'Korea, Rep.',
        'LifeExpectancy': 78.623,
        'GDP': 23348.13973,
        'Population': 49044790
    },
    {
        'continent': 'Europe',
        'Country': 'Albania',
        'LifeExpectancy': 76.423,
        'GDP': 5937.029526,
        'Population': 3600523
    },
    {
        'continent': 'Europe',
        'Country': 'Austria',
        'LifeExpectancy': 79.829,
        'GDP': 36126.4927,
        'Population': 8199783
    },
    {
        'continent': 'Europe',
        'Country': 'Belgium',
        'LifeExpectancy': 79.441,
        'GDP': 33692.60508,
        'Population': 10392226
    },
    {
        'continent': 'Europe',
        'Country': 'Bosnia and Herzegovina',
        'LifeExpectancy': 74.852,
        'GDP': 7446.298803,
        'Population': 4552198
    },
    {
        'continent': 'Europe',
        'Country': 'Bulgaria',
        'LifeExpectancy': 73.005,
        'GDP': 10680.79282,
        'Population': 7322858
    },
    {
        'continent': 'Europe',
        'Country': 'Croatia',
        'LifeExpectancy': 75.748,
        'GDP': 14619.22272,
        'Population': 4493312
    },
    {
        'continent': 'Europe',
        'Country': 'Czech Republic',
        'LifeExpectancy': 76.486,
        'GDP': 22833.30851,
        'Population': 10228744
    },
    {
        'continent': 'Europe',
        'Country': 'Denmark',
        'LifeExpectancy': 78.332,
        'GDP': 35278.41874,
        'Population': 5468120
    },
    {
        'continent': 'Europe',
        'Country': 'Finland',
        'LifeExpectancy': 79.313,
        'GDP': 33207.0844,
        'Population': 5238460
    },
    {
        'continent': 'Europe',
        'Country': 'France',
        'LifeExpectancy': 80.657,
        'GDP': 30470.0167,
        'Population': 61083916
    },
    {
        'continent': 'Europe',
        'Country': 'Germany',
        'LifeExpectancy': 79.406,
        'GDP': 32170.37442,
        'Population': 82400996
    },
    {
        'continent': 'Europe',
        'Country': 'Greece',
        'LifeExpectancy': 79.483,
        'GDP': 27538.41188,
        'Population': 10706290
    },
    {
        'continent': 'Europe',
        'Country': 'Hungary',
        'LifeExpectancy': 73.338,
        'GDP': 18008.94444,
        'Population': 9956108
    },
    {
        'continent': 'Europe',
        'Country': 'Iceland',
        'LifeExpectancy': 81.757,
        'GDP': 36180.78919,
        'Population': 301931
    },
    {
        'continent': 'Europe',
        'Country': 'Ireland',
        'LifeExpectancy': 78.885,
        'GDP': 40675.99635,
        'Population': 4109086
    },
    {
        'continent': 'Europe',
        'Country': 'Italy',
        'LifeExpectancy': 80.546,
        'GDP': 28569.7197,
        'Population': 58147733
    },
    {
        'continent': 'Europe',
        'Country': 'Montenegro',
        'LifeExpectancy': 74.543,
        'GDP': 9253.896111,
        'Population': 684736
    },
    {
        'continent': 'Europe',
        'Country': 'Netherlands',
        'LifeExpectancy': 79.762,
        'GDP': 36797.93332,
        'Population': 16570613
    },
    {
        'continent': 'Europe',
        'Country': 'Norway',
        'LifeExpectancy': 80.196,
        'GDP': 49357.19017,
        'Population': 4627926
    },
    {
        'continent': 'Europe',
        'Country': 'Poland',
        'LifeExpectancy': 75.563,
        'GDP': 15389.92468,
        'Population': 38518241
    },
    {
        'continent': 'Europe',
        'Country': 'Portugal',
        'LifeExpectancy': 78.098,
        'GDP': 20509.64777,
        'Population': 10642836
    },
    {
        'continent': 'Europe',
        'Country': 'Romania',
        'LifeExpectancy': 72.476,
        'GDP': 10808.47561,
        'Population': 22276056
    },
    {
        'continent': 'Europe',
        'Country': 'Serbia',
        'LifeExpectancy': 74.002,
        'GDP': 9786.534714,
        'Population': 10150265
    },
    {
        'continent': 'Europe',
        'Country': 'Slovak Republic',
        'LifeExpectancy': 74.663,
        'GDP': 18678.31435,
        'Population': 5447502
    },
    {
        'continent': 'Europe',
        'Country': 'Slovenia',
        'LifeExpectancy': 77.926,
        'GDP': 25768.25759,
        'Population': 2009245
    },
    {
        'continent': 'Europe',
        'Country': 'Spain',
        'LifeExpectancy': 80.941,
        'GDP': 28821.0637,
        'Population': 40448191
    },
    {
        'continent': 'Europe',
        'Country': 'Sweden',
        'LifeExpectancy': 80.884,
        'GDP': 33859.74835,
        'Population': 9031088
    },
    {
        'continent': 'Europe',
        'Country': 'Switzerland',
        'LifeExpectancy': 81.701,
        'GDP': 37506.41907,
        'Population': 7554661
    },
    {
        'continent': 'Europe',
        'Country': 'Turkey',
        'LifeExpectancy': 71.777,
        'GDP': 8458.276384,
        'Population': 71158647
    },
    {
        'continent': 'Europe',
        'Country': 'United Kingdom',
        'LifeExpectancy': 79.425,
        'GDP': 33203.26128,
        'Population': 60776238
    },
    {
        'continent': 'Oceania',
        'Country': 'Australia',
        'LifeExpectancy': 81.235,
        'GDP': 34435.36744,
        'Population': 20434176
    },
    {
        'continent': 'Oceania',
        'Country': 'New Zealand',
        'LifeExpectancy': 80.204,
        'GDP': 25185.00911,
        'Population': 4115771
    }
];
/* harmony export (immutable) */ __webpack_exports__["a"] = bubbleData;

const scaleBubble = [{
        dataKey: 'LifeExpectancy',
        alias: '人均寿命（年）'
    }, {
        dataKey: 'Population',
        type: 'pow',
        alias: '人口总数'
    }, {
        dataKey: 'GDP',
        alias: '人均国内生产总值($)'
    }, {
        dataKey: 'Country',
        alias: '国家/地区'
    }];
/* harmony export (immutable) */ __webpack_exports__["d"] = scaleBubble;

const colorMap = {
    'Asia': __WEBPACK_IMPORTED_MODULE_0_viser_ng__["a" /* Global */].colors[0],
    'Americas': __WEBPACK_IMPORTED_MODULE_0_viser_ng__["a" /* Global */].colors[1],
    'Europe': __WEBPACK_IMPORTED_MODULE_0_viser_ng__["a" /* Global */].colors[2],
    'Oceania': __WEBPACK_IMPORTED_MODULE_0_viser_ng__["a" /* Global */].colors[3]
};
/* harmony export (immutable) */ __webpack_exports__["b"] = colorMap;

const laeblFormatter = (value) => {
    return (value / 1000).toFixed(0) + 'k';
};
/* harmony export (immutable) */ __webpack_exports__["c"] = laeblFormatter;



/***/ }),

/***/ "./src/components/charts/data/foldLineDiagramData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__antv_data_set__ = __webpack_require__("./node_modules/@antv/data-set/build/data-set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__antv_data_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__antv_data_set__);

const sourceData = [
    { month: 'Jan', Tokyo: 7.0, London: 3.9 },
    { month: 'Feb', Tokyo: 6.9, London: 4.2 },
    { month: 'Mar', Tokyo: 9.5, London: 5.7 },
    { month: 'Apr', Tokyo: 14.5, London: 8.5 },
    { month: 'May', Tokyo: 18.4, London: 11.9 },
    { month: 'Jun', Tokyo: 21.5, London: 15.2 },
    { month: 'Jul', Tokyo: 25.2, London: 17.0 },
    { month: 'Aug', Tokyo: 26.5, London: 16.6 },
    { month: 'Sep', Tokyo: 23.3, London: 14.2 },
    { month: 'Oct', Tokyo: 18.3, London: 10.3 },
    { month: 'Nov', Tokyo: 13.9, London: 6.6 },
    { month: 'Dec', Tokyo: 9.6, London: 4.8 },
];
const dv = new __WEBPACK_IMPORTED_MODULE_0__antv_data_set__["DataSet"].View().source(sourceData);
dv.transform({
    type: 'fold',
    fields: ['Tokyo', 'London'],
    key: 'city',
    value: 'temperature',
});
const data = dv.rows;
/* harmony export (immutable) */ __webpack_exports__["a"] = data;

const scale = [{
        dataKey: 'month',
        min: 0,
        max: 1,
    }];
/* harmony export (immutable) */ __webpack_exports__["b"] = scale;



/***/ }),

/***/ "./src/components/charts/data/intervalAreaData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const IAData = [
    { 'time': 1246406400000, 'temperature': [14.3, 27.7] },
    { 'time': 1246492800000, 'temperature': [14.5, 27.8] },
    { 'time': 1246579200000, 'temperature': [15.5, 29.6] },
    { 'time': 1246665600000, 'temperature': [16.7, 30.7] },
    { 'time': 1246752000000, 'temperature': [16.5, 25.0] },
    { 'time': 1246838400000, 'temperature': [17.8, 25.7] },
    { 'time': 1246924800000, 'temperature': [13.5, 24.8] },
    { 'time': 1247011200000, 'temperature': [10.5, 21.4] },
    { 'time': 1247097600000, 'temperature': [9.2, 23.8] },
    { 'time': 1247184000000, 'temperature': [11.6, 21.8] },
    { 'time': 1247270400000, 'temperature': [10.7, 23.7] },
    { 'time': 1247356800000, 'temperature': [11.0, 23.3] },
    { 'time': 1247443200000, 'temperature': [11.6, 23.7] },
    { 'time': 1247529600000, 'temperature': [11.8, 20.7] },
    { 'time': 1247616000000, 'temperature': [12.6, 22.4] },
    { 'time': 1247702400000, 'temperature': [13.6, 19.6] },
    { 'time': 1247788800000, 'temperature': [11.4, 22.6] },
    { 'time': 1247875200000, 'temperature': [13.2, 25.0] },
    { 'time': 1247961600000, 'temperature': [14.2, 21.6] },
    { 'time': 1248048000000, 'temperature': [13.1, 17.1] },
    { 'time': 1248134400000, 'temperature': [12.2, 15.5] },
    { 'time': 1248220800000, 'temperature': [12.0, 20.8] },
    { 'time': 1248307200000, 'temperature': [12.0, 17.1] },
    { 'time': 1248393600000, 'temperature': [12.7, 18.3] },
    { 'time': 1248480000000, 'temperature': [12.4, 19.4] },
    { 'time': 1248566400000, 'temperature': [12.6, 19.9] },
    { 'time': 1248652800000, 'temperature': [11.9, 20.2] },
    { 'time': 1248739200000, 'temperature': [11.0, 19.3] },
    { 'time': 1248825600000, 'temperature': [10.8, 17.8] },
    { 'time': 1248912000000, 'temperature': [11.8, 18.5] },
    { 'time': 1248998400000, 'temperature': [10.8, 16.1] },
];
/* harmony export (immutable) */ __webpack_exports__["b"] = IAData;

const IAAverages = [
    { 'time': 1246406400000, 'temperature': 21.5 },
    { 'time': 1246492800000, 'temperature': 22.1 },
    { 'time': 1246579200000, 'temperature': 23 },
    { 'time': 1246665600000, 'temperature': 23.8 },
    { 'time': 1246752000000, 'temperature': 21.4 },
    { 'time': 1246838400000, 'temperature': 21.3 },
    { 'time': 1246924800000, 'temperature': 18.3 },
    { 'time': 1247011200000, 'temperature': 15.4 },
    { 'time': 1247097600000, 'temperature': 16.4 },
    { 'time': 1247184000000, 'temperature': 17.7 },
    { 'time': 1247270400000, 'temperature': 17.5 },
    { 'time': 1247356800000, 'temperature': 17.6 },
    { 'time': 1247443200000, 'temperature': 17.7 },
    { 'time': 1247529600000, 'temperature': 16.8 },
    { 'time': 1247616000000, 'temperature': 17.7 },
    { 'time': 1247702400000, 'temperature': 16.3 },
    { 'time': 1247788800000, 'temperature': 17.8 },
    { 'time': 1247875200000, 'temperature': 18.1 },
    { 'time': 1247961600000, 'temperature': 17.2 },
    { 'time': 1248048000000, 'temperature': 14.4 },
    { 'time': 1248134400000, 'temperature': 13.7 },
    { 'time': 1248220800000, 'temperature': 15.7 },
    { 'time': 1248307200000, 'temperature': 14.6 },
    { 'time': 1248393600000, 'temperature': 15.3 },
    { 'time': 1248480000000, 'temperature': 15.3 },
    { 'time': 1248566400000, 'temperature': 15.8 },
    { 'time': 1248652800000, 'temperature': 15.2 },
    { 'time': 1248739200000, 'temperature': 14.8 },
    { 'time': 1248825600000, 'temperature': 14.4 },
    { 'time': 1248912000000, 'temperature': 15 },
    { 'time': 1248998400000, 'temperature': 13.6 },
];
/* harmony export (immutable) */ __webpack_exports__["a"] = IAAverages;

const IAScale = [{
        dataKey: 'temperature',
        sync: true,
    }, {
        dataKey: 'time',
        type: 'time',
        mask: 'MM-DD',
        tickInterval: 24 * 3600 * 1000 * 2,
    }];
/* harmony export (immutable) */ __webpack_exports__["d"] = IAScale;

const IAPointStyle = {
    stroke: '#fff',
    lineWidth: 1,
    fillOpacity: 1,
};
/* harmony export (immutable) */ __webpack_exports__["c"] = IAPointStyle;

const IATooltipOpts = {
    crosshairs: {
        type: 'line'
    }
};
/* harmony export (immutable) */ __webpack_exports__["e"] = IATooltipOpts;



/***/ }),

/***/ "./src/components/charts/data/roseRingDiagramData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const roseData = [
    { year: '2001', population: 41.8 },
    { year: '2002', population: 38 },
    { year: '2003', population: 33.7 },
    { year: '2004', population: 30.7 },
    { year: '2005', population: 25.8 },
    { year: '2006', population: 31.7 },
    { year: '2007', population: 33 },
    { year: '2008', population: 46 },
    { year: '2009', population: 38.3 },
    { year: '2010', population: 28 },
    { year: '2011', population: 42.5 },
    { year: '2012', population: 30.3 },
];
/* harmony export (immutable) */ __webpack_exports__["a"] = roseData;



/***/ }),

/***/ "./src/components/charts/data/wordCloudJsonData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_viser_ng__ = __webpack_require__("./node_modules/viser-ng/es/index.js");

const jsonData = [
    {
        'x': 'China',
        'value': 1383220000,
        'category': 'asia'
    },
    {
        'x': 'India',
        'value': 1316000000,
        'category': 'asia'
    },
    {
        'x': 'United States',
        'value': 324982000,
        'category': 'america'
    },
    {
        'x': 'Indonesia',
        'value': 263510000,
        'category': 'asia'
    },
    {
        'x': 'Brazil',
        'value': 207505000,
        'category': 'america'
    },
    {
        'x': 'Pakistan',
        'value': 196459000,
        'category': 'asia'
    },
    {
        'x': 'Nigeria',
        'value': 191836000,
        'category': 'africa'
    },
    {
        'x': 'Bangladesh',
        'value': 162459000,
        'category': 'asia'
    },
    {
        'x': 'Russia',
        'value': 146804372,
        'category': 'europe'
    },
    {
        'x': 'Japan',
        'value': 126790000,
        'category': 'asia'
    },
    {
        'x': 'Mexico',
        'value': 123518000,
        'category': 'america'
    },
    {
        'x': 'Ethiopia',
        'value': 104345000,
        'category': 'africa'
    },
    {
        'x': 'Philippines',
        'value': 104037000,
        'category': 'asia'
    },
    {
        'x': 'Egypt',
        'value': 93013300,
        'category': 'africa'
    },
    {
        'x': 'Vietnam',
        'value': 92700000,
        'category': 'asia'
    },
    {
        'x': 'Germany',
        'value': 82800000,
        'category': 'europe'
    },
    {
        'x': 'Democratic Republic of the Congo',
        'value': 82243000,
        'category': 'africa'
    },
    {
        'x': 'Iran',
        'value': 80135400,
        'category': 'asia'
    },
    {
        'x': 'Turkey',
        'value': 79814871,
        'category': 'asia'
    },
    {
        'x': 'Thailand',
        'value': 68298000,
        'category': 'asia'
    },
    {
        'x': 'France',
        'value': 67013000,
        'category': 'europe'
    },
    {
        'x': 'United Kingdom',
        'value': 65110000,
        'category': 'europe'
    },
    {
        'x': 'Italy',
        'value': 60599936,
        'category': 'europe'
    },
    {
        'x': 'Tanzania',
        'value': 56878000,
        'category': 'africa'
    },
    {
        'x': 'South Africa',
        'value': 55908000,
        'category': 'africa'
    },
    {
        'x': 'Myanmar',
        'value': 54836000,
        'category': 'asia'
    },
    {
        'x': 'South Korea',
        'value': 51446201,
        'category': 'asia'
    },
    {
        'x': 'Colombia',
        'value': 49224700,
        'category': 'america'
    },
    {
        'x': 'Kenya',
        'value': 48467000,
        'category': 'africa'
    },
    {
        'x': 'Spain',
        'value': 46812000,
        'category': 'europe'
    },
    {
        'x': 'Argentina',
        'value': 43850000,
        'category': 'america'
    },
    {
        'x': 'Ukraine',
        'value': 42541633,
        'category': 'europe'
    },
    {
        'x': 'Sudan',
        'value': 42176000,
        'category': 'africa'
    },
    {
        'x': 'Uganda',
        'value': 41653000,
        'category': 'africa'
    },
    {
        'x': 'Algeria',
        'value': 41064000,
        'category': 'africa'
    },
    {
        'x': 'Poland',
        'value': 38424000,
        'category': 'europe'
    },
    {
        'x': 'Iraq',
        'value': 37883543,
        'category': 'asia'
    },
    {
        'x': 'Canada',
        'value': 36541000,
        'category': 'america'
    },
    {
        'x': 'Morocco',
        'value': 34317500,
        'category': 'africa'
    },
    {
        'x': 'Saudi Arabia',
        'value': 33710021,
        'category': 'asia'
    },
    {
        'x': 'Uzbekistan',
        'value': 32121000,
        'category': 'asia'
    },
    {
        'x': 'Malaysia',
        'value': 32063200,
        'category': 'asia'
    },
    {
        'x': 'Peru',
        'value': 31826018,
        'category': 'america'
    },
    {
        'x': 'Venezuela',
        'value': 31431164,
        'category': 'america'
    },
    {
        'x': 'Nepal',
        'value': 28825709,
        'category': 'asia'
    },
    {
        'x': 'Angola',
        'value': 28359634,
        'category': 'africa'
    },
    {
        'x': 'Ghana',
        'value': 28308301,
        'category': 'africa'
    },
    {
        'x': 'Yemen',
        'value': 28120000,
        'category': 'asia'
    },
    {
        'x': 'Afghanistan',
        'value': 27657145,
        'category': 'asia'
    },
    {
        'x': 'Mozambique',
        'value': 27128530,
        'category': 'africa'
    },
    {
        'x': 'Australia',
        'value': 24460900,
        'category': 'australia'
    },
    {
        'x': 'North Korea',
        'value': 24213510,
        'category': 'asia'
    },
    {
        'x': 'Taiwan',
        'value': 23545680,
        'category': 'asia'
    },
    {
        'x': 'Cameroon',
        'value': 23248044,
        'category': 'africa'
    },
    {
        'x': 'Ivory Coast',
        'value': 22671331,
        'category': 'africa'
    },
    {
        'x': 'Madagascar',
        'value': 22434363,
        'category': 'africa'
    },
    {
        'x': 'Niger',
        'value': 21564000,
        'category': 'africa'
    },
    {
        'x': 'Sri Lanka',
        'value': 21203000,
        'category': 'asia'
    },
    {
        'x': 'Romania',
        'value': 19760000,
        'category': 'europe'
    },
    {
        'x': 'Burkina Faso',
        'value': 19632147,
        'category': 'africa'
    },
    {
        'x': 'Syria',
        'value': 18907000,
        'category': 'asia'
    },
    {
        'x': 'Mali',
        'value': 18875000,
        'category': 'africa'
    },
    {
        'x': 'Malawi',
        'value': 18299000,
        'category': 'africa'
    },
    {
        'x': 'Chile',
        'value': 18191900,
        'category': 'america'
    },
    {
        'x': 'Kazakhstan',
        'value': 17975800,
        'category': 'asia'
    },
    {
        'x': 'Netherlands',
        'value': 17121900,
        'category': 'europe'
    },
    {
        'x': 'Ecuador',
        'value': 16737700,
        'category': 'america'
    },
    {
        'x': 'Guatemala',
        'value': 16176133,
        'category': 'america'
    },
    {
        'x': 'Zambia',
        'value': 15933883,
        'category': 'africa'
    },
    {
        'x': 'Cambodia',
        'value': 15626444,
        'category': 'asia'
    },
    {
        'x': 'Senegal',
        'value': 15256346,
        'category': 'africa'
    },
    {
        'x': 'Chad',
        'value': 14965000,
        'category': 'africa'
    },
    {
        'x': 'Zimbabwe',
        'value': 14542235,
        'category': 'africa'
    },
    {
        'x': 'Guinea',
        'value': 13291000,
        'category': 'africa'
    },
    {
        'x': 'South Sudan',
        'value': 12131000,
        'category': 'africa'
    },
    {
        'x': 'Rwanda',
        'value': 11553188,
        'category': 'africa'
    },
    {
        'x': 'Belgium',
        'value': 11356191,
        'category': 'europe'
    },
    {
        'x': 'Tunisia',
        'value': 11299400,
        'category': 'africa'
    },
    {
        'x': 'Cuba',
        'value': 11239004,
        'category': 'america'
    },
    {
        'x': 'Bolivia',
        'value': 11145770,
        'category': 'america'
    },
    {
        'x': 'Somalia',
        'value': 11079000,
        'category': 'africa'
    },
    {
        'x': 'Haiti',
        'value': 11078033,
        'category': 'america'
    },
    {
        'x': 'Greece',
        'value': 10783748,
        'category': 'europe'
    },
    {
        'x': 'Benin',
        'value': 10653654,
        'category': 'africa'
    },
    {
        'x': 'Czech Republic',
        'value': 10578820,
        'category': 'europe'
    },
    {
        'x': 'Portugal',
        'value': 10341330,
        'category': 'europe'
    },
    {
        'x': 'Burundi',
        'value': 10114505,
        'category': 'africa'
    },
    {
        'x': 'Dominican Republic',
        'value': 10075045,
        'category': 'america'
    },
    {
        'x': 'Sweden',
        'value': 10054100,
        'category': 'europe'
    },
    {
        'x': 'United Arab Emirates',
        'value': 10003223,
        'category': 'asia'
    },
    {
        'x': 'Jordan',
        'value': 9889270,
        'category': 'asia'
    },
    {
        'x': 'Azerbaijan',
        'value': 9823667,
        'category': 'asia'
    },
    {
        'x': 'Hungary',
        'value': 9799000,
        'category': 'europe'
    },
    {
        'x': 'Belarus',
        'value': 9498600,
        'category': 'europe'
    },
    {
        'x': 'Honduras',
        'value': 8866351,
        'category': 'america'
    },
    {
        'x': 'Austria',
        'value': 8773686,
        'category': 'europe'
    },
    {
        'x': 'Tajikistan',
        'value': 8742000,
        'category': 'asia'
    },
    {
        'x': 'Israel',
        'value': 8690220,
        'category': 'asia'
    },
    {
        'x': 'Switzerland',
        'value': 8417700,
        'category': 'europe'
    },
    {
        'x': 'Papua New Guinea',
        'value': 8151300,
        'category': 'australia'
    }
];
/* harmony export (immutable) */ __webpack_exports__["a"] = jsonData;

Object(__WEBPACK_IMPORTED_MODULE_0_viser_ng__["c" /* registerShape */])('point', 'cloud', {
    draw(cfg, container) {
        return container.addShape('text', {
            attrs: Object.assign({ fillOpacity: cfg.opacity, fontSize: cfg.origin._origin.size, rotate: cfg.origin._origin.rotate, text: cfg.origin._origin.text, textAlign: 'center', fontFamily: cfg.origin._origin.font, fill: cfg.color, textBaseline: 'Alphabetic' }, cfg.style, { x: cfg.x, y: cfg.y }),
        });
    }
});
const scale = [
    { dataKey: 'x', nice: false },
    { dataKey: 'y', nice: false },
];
/* harmony export (immutable) */ __webpack_exports__["b"] = scale;

const padding = [0];
/* unused harmony export padding */



/***/ }),

/***/ "./src/components/charts/viserCharts.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-outer-layer-div\">\r\n  <div nz-row nzGutter=\"24\">\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\"  nzTitle=\"曲线折线图\" >\r\n        <div class=\"cus-ver-charts\">\r\n          <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [data]=\"data\" [scale]=\"scale\">\r\n            <v-tooltip></v-tooltip>\r\n            <v-axis></v-axis>\r\n            <v-legend></v-legend>\r\n            <v-smooth-line position=\"month*temperature\" color=\"city\" shape=\"smooth\"></v-smooth-line>\r\n            <v-point position=\"month*temperature\" color=\"city\" shape=\"circle\"></v-point>\r\n          </v-chart>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\"  nzTitle=\"分组柱状图\" >\r\n        <div class=\"cus-ver-charts\">\r\n            <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [data]=\"blockData\">\r\n              <v-tooltip></v-tooltip>\r\n              <v-axis></v-axis>\r\n              <v-legend></v-legend>\r\n              <v-bar position=\"月份*月均降雨量\" color=\"name\" [adjust]=\"adjust\"></v-bar>\r\n            </v-chart>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\"  nzTitle=\"玫瑰环图\" >\r\n        <div class=\"cus-ver-charts\">\r\n          <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [data]=\"roseData\">\r\n            <v-tooltip></v-tooltip>\r\n            <v-coord type=\"polar\" [innerRadius]=\"0.2\"></v-coord>\r\n            <v-sector position=\"year*population\" [style]=\"sectorStyle\" color=\"year\"></v-sector>\r\n            <v-legend dataKey=\"year\" position=\"right\" [offsetX]=\"-140\"></v-legend>\r\n          </v-chart>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\"  nzTitle=\"气泡图\" >\r\n        <div class=\"cus-ver-charts\">\r\n          <v-chart [forceFit]=\"true\" [height]=\"400\" [data]=\"bubbleData\" [scale]=\"scaleBubble\">\r\n            <v-tooltip [showTitle]=\"false\"></v-tooltip>\r\n            <v-axis\r\n              dataKey=\"GDP\"\r\n              [label]=\"axisLabel\"\r\n            ></v-axis>\r\n            <v-legend dataKey=\"Population\" [show]=\"false\"></v-legend>\r\n            <v-point\r\n              position=\"GDP*LifeExpectancy\"\r\n              [color]=\"pointColor\"\r\n              [size]=\"pointSize\"\r\n              [style]=\"pointStyle\"\r\n              tooltip=\"Country*Population*GDP*LifeExpectancy\"\r\n              shape=\"circle\"\r\n            ></v-point>\r\n          </v-chart>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\"  nzTitle=\"区间面积图\" >\r\n        <div class=\"cus-ver-charts\">\r\n          <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [scale]=\"iascale\">\r\n            <v-tooltip [crosshairs]=\"iatooltipOpts.crosshairs\"></v-tooltip>\r\n            <v-axis></v-axis>\r\n            <v-view [data]=\"iadata\">\r\n              <v-area position=\"time*temperature\" [tooltip]=\"false\"></v-area>\r\n            </v-view>\r\n            <v-view [data]=\"iaaverages\">\r\n              <v-axis [show]=\"false\"></v-axis>\r\n              <v-line position=\"time*temperature\" [size]=\"2\"></v-line>\r\n              <v-point position=\"time*temperature\" [size]=\"4\" [style]=\"iapointStyle\" shape=\"circle\"></v-point>\r\n            </v-view>\r\n          </v-chart>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/charts/viserCharts.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViserChartsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_foldLineDiagramData__ = __webpack_require__("./src/components/charts/data/foldLineDiagramData.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_blockColumnarData__ = __webpack_require__("./src/components/charts/data/blockColumnarData.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_roseRingDiagramData__ = __webpack_require__("./src/components/charts/data/roseRingDiagramData.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_bubbleGraphData__ = __webpack_require__("./src/components/charts/data/bubbleGraphData.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_intervalAreaData__ = __webpack_require__("./src/components/charts/data/intervalAreaData.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let ViserChartsComponent = class ViserChartsComponent {
    constructor() {
        this.forceFit = true;
        this.height = 400;
        this.data = __WEBPACK_IMPORTED_MODULE_1__data_foldLineDiagramData__["a" /* data */];
        this.scale = __WEBPACK_IMPORTED_MODULE_1__data_foldLineDiagramData__["b" /* scale */];
        this.blockData = __WEBPACK_IMPORTED_MODULE_2__data_blockColumnarData__["a" /* blockData */];
        this.adjust = [{
                type: 'dodge',
                marginRatio: 1 / 32,
            }];
        this.roseData = __WEBPACK_IMPORTED_MODULE_3__data_roseRingDiagramData__["a" /* roseData */];
        this.sectorStyle = {
            stroke: '#fff',
            lineWidth: 1,
        };
        this.bubbleData = __WEBPACK_IMPORTED_MODULE_4__data_bubbleGraphData__["a" /* bubbleData */];
        this.scaleBubble = __WEBPACK_IMPORTED_MODULE_4__data_bubbleGraphData__["d" /* scaleBubble */];
        this.axisLabel = {
            formatter: __WEBPACK_IMPORTED_MODULE_4__data_bubbleGraphData__["c" /* laeblFormatter */],
        };
        this.pointColor = ['continent', val => __WEBPACK_IMPORTED_MODULE_4__data_bubbleGraphData__["b" /* colorMap */][val]];
        this.pointSize = ['Population', [4, 65]];
        this.pointStyle = ['continent', {
                lineWidth: 1,
                strokeOpacity: 1,
                fillOpacity: 0.3,
                opacity: 0.65,
                stroke: val => __WEBPACK_IMPORTED_MODULE_4__data_bubbleGraphData__["b" /* colorMap */][val],
            }];
        this.iadata = __WEBPACK_IMPORTED_MODULE_5__data_intervalAreaData__["b" /* IAData */];
        this.iaaverages = __WEBPACK_IMPORTED_MODULE_5__data_intervalAreaData__["a" /* IAAverages */];
        this.iascale = __WEBPACK_IMPORTED_MODULE_5__data_intervalAreaData__["d" /* IAScale */];
        this.iapointStyle = __WEBPACK_IMPORTED_MODULE_5__data_intervalAreaData__["c" /* IAPointStyle */];
        this.iatooltipOpts = __WEBPACK_IMPORTED_MODULE_5__data_intervalAreaData__["e" /* IATooltipOpts */];
    }
    ngOnInit() {
    }
};
ViserChartsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/components/charts/viserCharts.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
    })
], ViserChartsComponent);



/***/ }),

/***/ "./src/components/charts/wordCloud.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-outer-layer-div\">\r\n  <div nz-row nzGutter=\"24\">\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\"  nzTitle=\"词云\" >\r\n        <div class=\"cus-ver-charts\">\r\n          <v-chart [width]=\"640\" [height]=\"400\" [data]=\"data\" [scale]=\"scale\" [padding]=\"padding\">\r\n            <v-tooltip [showTitle]=\"false\"></v-tooltip>\r\n            <v-coord type=\"rect\" direction=\"TL\"></v-coord>\r\n            <v-point position=\"x*y\" [color]=\"'category'\" shape=\"cloud\" tooltip=\"value*category\"></v-point>\r\n          </v-chart>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/charts/wordCloud.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordCloudComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__antv_data_set__ = __webpack_require__("./node_modules/@antv/data-set/build/data-set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__antv_data_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__antv_data_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_wordCloudJsonData__ = __webpack_require__("./src/components/charts/data/wordCloudJsonData.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let WordCloudComponent = class WordCloudComponent {
    constructor() {
        this.scale = __WEBPACK_IMPORTED_MODULE_2__data_wordCloudJsonData__["b" /* scale */];
        this.data = [];
        const dv = new __WEBPACK_IMPORTED_MODULE_1__antv_data_set__["DataSet"].View().source(__WEBPACK_IMPORTED_MODULE_2__data_wordCloudJsonData__["a" /* jsonData */]);
        const range = dv.range('value');
        const min = range[0];
        const max = range[1];
        dv.transform({
            type: 'tag-cloud',
            fields: ['x', 'value'],
            size: [640, 400],
            font: 'Verdana',
            padding: 0,
            timeInterval: 5000,
            rotate() {
                let random = ~~(Math.random() * 4) % 4;
                if (random == 2) {
                    random = 0;
                }
                return random * 90; // 0, 90, 270
            },
            fontSize(d) {
                if (d.value) {
                    return ((d.value - min) / (max - min)) * (80 - 24) + 24;
                }
                return 0;
            }
        });
        this.data = dv.rows;
    }
    ngOnInit() {
    }
};
WordCloudComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/components/charts/wordCloud.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
    }),
    __metadata("design:paramtypes", [])
], WordCloudComponent);



/***/ }),

/***/ "./src/components/forms/basicForms.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/components/forms/basicForms.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicFormsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let BasicFormsComponent = class BasicFormsComponent {
    ngOnInit() {
    }
};
BasicFormsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/components/forms/basicForms.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
    })
], BasicFormsComponent);



/***/ }),

/***/ "./src/components/header/customHeader.html":
/***/ (function(module, exports) {

module.exports = "<ul nz-menu [nzTheme]=\"'light'\" [nzMode]=\"'horizontal'\" class=\"cus-real-line-height\">\n  <i class=\"anticon trigger\" [class.anticon-menu-fold]=\"!isCollapsed\" [class.anticon-menu-unfold]=\"isCollapsed\"\n     (click)=\"clickToCollapsed()\"></i>\n  <li nz-submenu class=\"cus-float-right\">\n    <span title><i class=\"anticon anticon-poweroff cus-mar-cen\"></i> {{realUserName}}</span>\n    <ul>\n      <li nz-menu-group>\n        <span title>设置</span>\n        <ul>\n          <li nz-menu-item>个人设置</li>\n          <li nz-menu-item (click)=\"layout()\">退出</li>\n        </ul>\n      </li>\n    </ul>\n  </li>\n  <li nz-menu-item nzDisabled class=\"cus-float-right\">\n    <nz-avatar [nzText]=\"realUserName\" nzSize=\"large\" [ngStyle]=\"{'background-color':'#00a2ae'}\" style=\"vertical-align: middle;\"></nz-avatar>\n  </li>\n  <!--<li nz-menu-item nzDisabled class=\"cus-float-right\"><nz-tag [nzColor]=\"'magenta'\">Admin</nz-tag></li>-->\n</ul>\n\n"

/***/ }),

/***/ "./src/components/header/customHeader.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uirouter_angular__ = __webpack_require__("./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contents_localStorage__ = __webpack_require__("./src/contents/localStorage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let CustomHeaderComponent = class CustomHeaderComponent {
    constructor(ls, uiRouter) {
        this.ls = ls;
        this.uiRouter = uiRouter;
        this.toggleEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ngOnInit() {
        // console.log(this.isCollapsed);
    }
    clickToCollapsed() {
        this.isCollapsed = !this.isCollapsed;
        this.toggleEvent.emit(this.isCollapsed);
    }
    layout() {
        this.ls.remove('username');
        this.uiRouter.urlService.url('/cus/pages/login');
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], CustomHeaderComponent.prototype, "isCollapsed", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], CustomHeaderComponent.prototype, "isMobile", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CustomHeaderComponent.prototype, "realUserName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], CustomHeaderComponent.prototype, "toggleEvent", void 0);
CustomHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-custom-header',
        template: __webpack_require__("./src/components/header/customHeader.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__contents_localStorage__["a" /* LocalStorage */], __WEBPACK_IMPORTED_MODULE_1__uirouter_angular__["UIRouter"]])
], CustomHeaderComponent);



/***/ }),

/***/ "./src/components/home.html":
/***/ (function(module, exports) {

module.exports = "<nz-layout *ngIf=\"!loginCheck\">\n  <nz-sider nzCollapsible [(nzCollapsed)]=\"isCollapsed\" [nzTrigger]=\"triggerTemplate\">\n    <app-custom-sider [isCollapsed]=\"isCollapsed\"></app-custom-sider>\n  </nz-sider>\n  <nz-layout>\n    <app-custom-header [isCollapsed]=\"isCollapsed\" [realUserName]=\"realUserName\"  (toggleEvent)=\"toggle($event)\" [isMobile]=\"isMobile\"></app-custom-header>\n    <nz-content style=\"margin:0 16px;\">\n      <app-custom-breadcrumb [breadcrumbOne]=\"breadcrumbOne\" [breadcrumbSecond]=\"breadcrumbSecond\"></app-custom-breadcrumb>\n      <ui-view></ui-view>\n    </nz-content>\n    <nz-footer style=\"text-align: center;\">Ant Design ©2017 Implement By Angular</nz-footer>\n  </nz-layout>\n</nz-layout>\n<ng-template *ngIf=\"!loginCheck\" #trigger>\n  <i class=\"anticon anticon-up\"></i>\n</ng-template>\n<ui-view *ngIf=\"loginCheck\">\n</ui-view>\n"

/***/ }),

/***/ "./src/components/home.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contents_menu__ = __webpack_require__("./src/contents/menu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_zorro_antd__ = __webpack_require__("./node_modules/ng-zorro-antd/esm2015/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__uirouter_angular__ = __webpack_require__("./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contents_localStorage__ = __webpack_require__("./src/contents/localStorage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let HomeComponent = class HomeComponent {
    constructor(message, uiRouter, ls, notification) {
        this.message = message;
        this.uiRouter = uiRouter;
        this.ls = ls;
        this.notification = notification;
        this.isCollapsed = false;
        this.isMobile = false;
        this.locationHref = document.location.href;
        this.triggerTemplate = null;
        this.loginCheck = false;
    }
    changeTrigger() {
        this.triggerTemplate = this.customTrigger;
    }
    ngAfterViewChecked() {
        let username = this.ls.get('username');
        if (this.loginCheck) {
            if (username) {
                this.checkLoginFun();
                this.mobileCheck();
                __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].fromEvent(window, 'resize')
                    .debounceTime(100) // 以免频繁处理
                    .subscribe((event) => {
                    // 这里处理页面变化时的操作
                    this.mobileCheck();
                    console.log(document.body.clientWidth);
                });
                this.setBreadcrumbOne();
                this.createMessage('success');
                this.createNotificationMessage();
            }
        }
        else {
            if (!username) {
                this.checkLoginFun();
            }
        }
        // this.checkLoginFun();
    }
    ngOnInit() {
        this.checkLoginFun();
        this.mobileCheck();
        __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].fromEvent(window, 'resize')
            .debounceTime(100) // 以免频繁处理
            .subscribe((event) => {
            // 这里处理页面变化时的操作
            this.mobileCheck();
            console.log(document.body.clientWidth);
        });
        this.setBreadcrumbOne();
        this.createMessage('success');
        this.createNotificationMessage();
    }
    createMessage(type) {
        let username = this.ls.get('username');
        if (username) {
            this.message.create(type, `欢迎使用`);
        }
    }
    createNotificationMessage() {
        let username = this.ls.get('username');
        if (username) {
            this.notification.create('success', `欢迎使用`, '这是一个基本的angular后台管理模版', {
                nzClass: 'cus-top-80'
            });
        }
    }
    onClick(btn) {
        this.setBreadcrumbOne();
        this.checkLoginFun();
    }
    checkLoginFun() {
        let username = this.ls.get('username');
        if (username) {
            this.realUserName = username;
            this.loginCheck = false;
        }
        else {
            this.loginCheck = true;
        }
    }
    toggle(isCollapsed) {
        this.isCollapsed = isCollapsed;
    }
    mobileCheck() {
        if (document.body.clientWidth < 992) {
            this.isMobile = true;
            this.isCollapsed = true;
        }
        else {
            this.isMobile = false;
            this.isCollapsed = false;
        }
    }
    setBreadcrumbOne() {
        this.locationHref = document.location.href;
        for (const m of __WEBPACK_IMPORTED_MODULE_2__contents_menu__["a" /* menusContent */]) {
            if (this.locationHref.indexOf(m.key) <= -1) {
                continue;
            }
            if (this.locationHref.indexOf(m.key) > -1) {
                this.breadcrumbOne = m.title;
            }
            if (m.sub.length > 0) {
                this.setbreadcrumbSecond(m);
            }
            else {
                this.breadcrumbSecond = '';
            }
        }
    }
    setbreadcrumbSecond(event) {
        for (const s of event.sub) {
            if (this.locationHref.indexOf(s.key) > -1) {
                this.breadcrumbSecond = s.title;
            }
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('trigger'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
], HomeComponent.prototype, "customTrigger", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event.target']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HTMLElement]),
    __metadata("design:returntype", void 0)
], HomeComponent.prototype, "onClick", null);
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("./src/components/home.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ng_zorro_antd__["d" /* NzMessageService */], __WEBPACK_IMPORTED_MODULE_4__uirouter_angular__["UIRouter"], __WEBPACK_IMPORTED_MODULE_5__contents_localStorage__["a" /* LocalStorage */], __WEBPACK_IMPORTED_MODULE_3_ng_zorro_antd__["g" /* NzNotificationService */]])
], HomeComponent);



/***/ }),

/***/ "./src/components/internationalizations/internationalizationExamples.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"application-outer-layer-div\">-->\r\n  <!--<div nz-row nzGutter=\"24\">-->\r\n    <!--<div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">-->\r\n      <!--<nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\"  nzTitle=\"示例\" >-->\r\n        <!---->\r\n      <!--</nz-card>-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "./src/components/internationalizations/internationalizationExamples.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InternationalizationExamplesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let InternationalizationExamplesComponent = class InternationalizationExamplesComponent {
    ngOnInit() {
    }
};
InternationalizationExamplesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/components/internationalizations/internationalizationExamples.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
    })
], InternationalizationExamplesComponent);



/***/ }),

/***/ "./src/components/modals/basicCusServerModal.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h2>{{ title }}</h2>\r\n  <h4>{{ subtitle }}</h4>\r\n  <p>\r\n    <span>Get Modal instance in component</span>\r\n    <button nz-button [nzType]=\"'primary'\" (click)=\"destroyModal()\">destroy modal in the component</button>\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/modals/basicCusServerModal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicCusServerModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__ = __webpack_require__("./node_modules/ng-zorro-antd/esm2015/antd.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let BasicCusServerModalComponent = class BasicCusServerModalComponent {
    constructor(modal) {
        this.modal = modal;
    }
    destroyModal() {
        this.modal.destroy({ data: 'this the result data' });
    }
    ngOnInit() {
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], BasicCusServerModalComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], BasicCusServerModalComponent.prototype, "subtitle", void 0);
BasicCusServerModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal-service-d',
        template: __webpack_require__("./src/components/modals/basicCusServerModal.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["e" /* NzModalRef */]])
], BasicCusServerModalComponent);



/***/ }),

/***/ "./src/components/modals/basicModal.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-outer-layer-div\">\r\n  <div nz-row nzGutter=\"24\">\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"基本\">\r\n        <div class=\"cus-modal-r\">\r\n          <button nz-button [nzType]=\"'primary'\" (click)=\"showModal()\"><span>Show Modal</span></button>\r\n          <nz-modal [(nzVisible)]=\"isVisible\" nzTitle=\"The first Modal\" (nzOnCancel)=\"handleCancel()\"\r\n                    (nzOnOk)=\"handleOk()\">\r\n            <p>Content one</p>\r\n            <p>Content two</p>\r\n            <p>Content three</p>\r\n          </nz-modal>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"确认对话框\">\r\n        <div class=\"cus-modal-r\">\r\n          <button nz-button nzType=\"info\" (click)=\"showConfirm()\">Confirm</button>\r\n          <button nz-button nzType=\"dashed\" (click)=\"showDeleteConfirm()\">Delete</button>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"信息提示对话框\">\r\n        <div class=\"cus-modal-r\">\r\n          <button nz-button (click)=\"info()\">Info</button>\r\n          <button nz-button (click)=\"success()\">Success</button>\r\n          <button nz-button (click)=\"error()\">Error</button>\r\n          <button nz-button (click)=\"warning()\">Warning</button>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"高级对话框\">\r\n        <div class=\"cus-modal-r\">\r\n          <app-modal-service-cus></app-modal-service-cus>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/modals/basicModal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__ = __webpack_require__("./node_modules/ng-zorro-antd/esm2015/antd.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let BasicModalComponent = class BasicModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.isVisible = false;
    }
    showModal() {
        this.isVisible = true;
    }
    handleOk() {
        console.log('Button ok clicked!');
        this.isVisible = false;
    }
    handleCancel() {
        console.log('Button cancel clicked!');
        this.isVisible = false;
    }
    showConfirm() {
        this.modalService.confirm({
            nzTitle: '<i>Do you Want to delete these items?</i>',
            nzContent: '<b>Some descriptions</b>',
            nzOnOk: () => console.log('OK')
        });
    }
    showDeleteConfirm() {
        this.modalService.confirm({
            nzTitle: 'Are you sure delete this task?',
            nzContent: '<b style="color: red;">Some descriptions</b>',
            nzOkText: 'Yes',
            nzOkType: 'danger',
            nzOnOk: () => console.log('OK'),
            nzCancelText: 'No',
            nzOnCancel: () => console.log('Cancel')
        });
    }
    info() {
        this.modalService.info({
            nzTitle: 'This is a notification message',
            nzContent: '<p>some messages...some messages...</p><p>some messages...some messages...</p>',
            nzOnOk: () => console.log('Info OK')
        });
    }
    success() {
        this.modalService.success({
            nzTitle: 'This is a success message',
            nzContent: 'some messages...some messages...'
        });
    }
    error() {
        this.modalService.error({
            nzTitle: 'This is an error message',
            nzContent: 'some messages...some messages...'
        });
    }
    warning() {
        this.modalService.warning({
            nzTitle: 'This is an warning message',
            nzContent: 'some messages...some messages...'
        });
    }
    ngOnInit() {
    }
};
BasicModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/components/modals/basicModal.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["f" /* NzModalService */]])
], BasicModalComponent);



/***/ }),

/***/ "./src/components/modals/basicServerModal.html":
/***/ (function(module, exports) {

module.exports = "<button nz-button nzType=\"primary\" (click)=\"createModal()\">\r\n  <span>String</span>\r\n</button>\r\n\r\n<button nz-button nzType=\"primary\" (click)=\"createTplModal(tplTitle, tplContent, tplFooter)\">\r\n  <span>Template</span>\r\n</button>\r\n<ng-template #tplTitle>\r\n  <span>Title Template</span>\r\n</ng-template>\r\n<ng-template #tplContent>\r\n  <p>some contents...</p>\r\n  <p>some contents...</p>\r\n  <p>some contents...</p>\r\n  <p>some contents...</p>\r\n  <p>some contents...</p>\r\n</ng-template>\r\n<ng-template #tplFooter>\r\n  <button nz-button nzType=\"primary\" (click)=\"destroyTplModal()\" [nzLoading]=\"tplModalButtonLoading\">Close after submit</button>\r\n</ng-template>\r\n\r\n<br /><br />\r\n\r\n<button nz-button nzType=\"primary\" (click)=\"createComponentModal()\">\r\n  <span>Use Component</span>\r\n</button>\r\n\r\n<button nz-button nzType=\"primary\" (click)=\"createCustomButtonModal()\">Custom Button</button>\r\n\r\n<br /><br />\r\n\r\n<button nz-button nzType=\"primary\" (click)=\"openAndCloseAll()\">Open more modals then close all after 2s</button>\r\n<nz-modal [(nzVisible)]=\"htmlModalVisible\" nzMask=\"false\" nzZIndex=\"1001\" nzTitle=\"Non-service html modal\">This is a non-service html modal</nz-modal>\r\n"

/***/ }),

/***/ "./src/components/modals/basicServerModal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicServerModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__ = __webpack_require__("./node_modules/ng-zorro-antd/esm2015/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basicCusServerModal__ = __webpack_require__("./src/components/modals/basicCusServerModal.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let BasicServerModalComponent = class BasicServerModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.tplModalButtonLoading = false;
        this.htmlModalVisible = false;
    }
    createModal() {
        this.modalService.create({
            nzTitle: 'Modal Title',
            nzContent: 'string, will close after 1 sec',
            nzClosable: false,
            nzOnOk: () => new Promise((resolve) => window.setTimeout(resolve, 1000))
        });
    }
    createTplModal(tplTitle, tplContent, tplFooter) {
        this.tplModal = this.modalService.create({
            nzTitle: tplTitle,
            nzContent: tplContent,
            nzFooter: tplFooter,
            nzMaskClosable: false,
            nzClosable: false,
            nzOnOk: () => console.log('Click ok')
        });
    }
    destroyTplModal() {
        this.tplModalButtonLoading = true;
        window.setTimeout(() => {
            this.tplModalButtonLoading = false;
            this.tplModal.destroy();
        }, 1000);
    }
    createComponentModal() {
        const modal = this.modalService.create({
            nzTitle: 'Modal Title',
            nzContent: __WEBPACK_IMPORTED_MODULE_2__basicCusServerModal__["a" /* BasicCusServerModalComponent */],
            nzComponentParams: {
                title: 'title in component',
                subtitle: 'component sub title，will be changed after 2 sec'
            },
            nzFooter: [{
                    label: 'change component tilte from outside',
                    onClick: (componentInstance) => {
                        componentInstance.title = 'title in inner component is changed';
                    }
                }]
        });
        modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
        // Return a result when closed
        modal.afterClose.subscribe((result) => console.log('[afterClose] The result is:', result));
        // delay until modal instance created
        window.setTimeout(() => {
            const instance = modal.getContentComponent();
            instance.subtitle = 'sub title is changed';
        }, 2000);
    }
    createCustomButtonModal() {
        const modal = this.modalService.create({
            nzTitle: 'custom button demo',
            nzContent: 'pass array of button config to nzFooter to create multiple buttons',
            nzFooter: [
                {
                    label: 'Close',
                    shape: 'default',
                    onClick: () => modal.destroy()
                },
                {
                    label: 'Confirm',
                    type: 'primary',
                    onClick: () => this.modalService.confirm({ nzTitle: 'Confirm Modal Title', nzContent: 'Confirm Modal Content' })
                },
                {
                    label: 'Change Button Status',
                    type: 'danger',
                    loading: false,
                    onClick() {
                        this.loading = true;
                        window.setTimeout(() => this.loading = false, 1000);
                        window.setTimeout(() => {
                            this.loading = false;
                            this.disabled = true;
                            this.label = 'can not be clicked！';
                        }, 2000);
                    }
                },
                {
                    label: 'async load',
                    type: 'dashed',
                    onClick: () => new Promise(resolve => window.setTimeout(resolve, 2000))
                }
            ]
        });
    }
    openAndCloseAll() {
        let pos = 0;
        ['create', 'info', 'success', 'error'].forEach((method) => this.modalService[method]({
            nzMask: false,
            nzTitle: `Test ${method} title`,
            nzContent: `Test content: <b>${method}</b>`,
            nzStyle: { position: 'absolute', top: `${pos * 70}px`, left: `${(pos++) * 300}px` }
        }));
        this.htmlModalVisible = true;
        this.modalService.afterAllClose.subscribe(() => console.log('afterAllClose emitted!'));
        window.setTimeout(() => this.modalService.closeAll(), 2000);
    }
    ngOnInit() {
    }
};
BasicServerModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal-service-cus',
        template: __webpack_require__("./src/components/modals/basicServerModal.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["f" /* NzModalService */]])
], BasicServerModalComponent);



/***/ }),

/***/ "./src/components/ngStore/ngstore.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-outer-layer-div\">\r\n  <div nz-row nzGutter=\"24\">\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"ng-store\">\r\n        <div class=\"cus-modal-ngstore-r\">\r\n          <button nz-button nzType=\"primary\" (click)=\"showJavaArticles()\">Java Articles</button>\r\n          <button nz-button nzType=\"default\" (click)=\"showAngularArticles()\">Angular Articles</button>\r\n          <button nz-button nzType=\"danger\"  (click)=\"showFavoriteArticles()\">Favorite Articles</button>\r\n          <nz-list [nzDataSource]=\"articles | async\" nzBordered nzSize=\"small\"\r\n                   [nzHeader]=\"''\" [nzFooter]=\"''\"\r\n                   [nzRenderItem]=\"item\">\r\n            <ng-template #item let-item><nz-list-item>{{item.id}} - {{item.title}} - {{item.category}}</nz-list-item></ng-template>\r\n          </nz-list>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/ngStore/ngstore.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgstoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrxStore_componentReducer__ = __webpack_require__("./src/ngrxStore/componentReducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrxStore_actions__ = __webpack_require__("./src/ngrxStore/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrxStore_article__ = __webpack_require__("./src/ngrxStore/article.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let NgstoreComponent = class NgstoreComponent {
    constructor(store) {
        this.store = store;
        this.articles = store.select(__WEBPACK_IMPORTED_MODULE_2__ngrxStore_componentReducer__["a" /* getArticles */]);
    }
    showJavaArticles() {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__ngrxStore_actions__["e" /* JavaArticlesAction */]());
    }
    showAngularArticles() {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__ngrxStore_actions__["b" /* AngularArticlesAction */]());
    }
    showFavoriteArticles() {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__ngrxStore_actions__["c" /* FavoriteArticlesAction */](__WEBPACK_IMPORTED_MODULE_4__ngrxStore_article__["b" /* FAVORITE_ARTICLES */]));
    }
};
NgstoreComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        template: __webpack_require__("./src/components/ngStore/ngstore.html")
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["a" /* Store */]])
], NgstoreComponent);



/***/ }),

/***/ "./src/components/pages/hero.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Hero {
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Hero;



/***/ }),

/***/ "./src/components/pages/login.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"application-outer-layer-div\">-->\r\n<!--<div nz-row nzGutter=\"24\">-->\r\n<!--<div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">-->\r\n<!--<nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\"  nzTitle=\"示例\" >-->\r\n<!---->\r\n<!--</nz-card>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<!--</div>-->\r\n<div class=\"application-outer-layer-div-login\">\r\n  <div nz-row nzGutter=\"24\">\r\n    <div nz-col nzSpan=\"6\" class=\"cus-r-login-container-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\">\r\n        <div class=\"cus-r-login-container\">\r\n          <div [hidden]=\"submitted\">\r\n            <h1 class=\"cus-r-login-h1\">后台管理系统</h1>\r\n            <form (ngSubmit)=\"onSubmit()\" #heroForm=\"ngForm\">\r\n              <div class=\"form-group cus-name-r-login\">\r\n                <nz-input-group [nzSuffix]=\"suffixTemplate\" nzPrefixIcon=\"anticon anticon-user\">\r\n                  <input type=\"text\" class=\"form-control\" id=\"name\" nz-input placeholder=\"请输入用户名(任意用户名)\"\r\n                         required [(ngModel)]=\"model.name\" name=\"name\"\r\n                         #name=\"ngModel\">\r\n                </nz-input-group>\r\n                <ng-template #suffixTemplate><i class=\"anticon anticon-close-circle\" (click)=\"model.name=null\"\r\n                                                *ngIf=\"model.name\"></i></ng-template>\r\n                <div [hidden]=\"name.valid || name.pristine\"\r\n                     class=\"alert alert-danger\">\r\n                  用户名不能为空\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group cus-name-r-psw\">\r\n                <nz-input-group [nzSuffix]=\"suffixPawTemplate\" nzPrefixIcon=\"anticon anticon-eye-o\">\r\n                  <input type=\"text\" class=\"form-control\" id=\"password\" nz-input placeholder=\"请输入密码(任意密码)\"\r\n                         required [(ngModel)]=\"model.power\" name=\"password\"\r\n                         #password=\"ngModel\">\r\n                </nz-input-group>\r\n                <ng-template #suffixPawTemplate><i class=\"anticon anticon-close-circle\" (click)=\"model.power=null\"\r\n                                                   *ngIf=\"model.power\"></i></ng-template>\r\n\r\n                <div [hidden]=\"password.valid || password.pristine\"\r\n                     class=\"alert alert-danger\">\r\n                  密码不能为空\r\n                </div>\r\n              </div>\r\n              <button type=\"submit\" class=\"cus-name-sub-margin-top\" nz-button nzType=\"primary\" [disabled]=\"!heroForm.form.valid\">登  陆</button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/pages/login.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero__ = __webpack_require__("./src/components/pages/hero.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uirouter_angular__ = __webpack_require__("./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contents_localStorage__ = __webpack_require__("./src/contents/localStorage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let LoginComponent = class LoginComponent {
    constructor(ls, uiRouter) {
        this.ls = ls;
        this.uiRouter = uiRouter;
        this.model = new __WEBPACK_IMPORTED_MODULE_1__hero__["a" /* Hero */]('', '');
        this.submitted = false;
    }
    onSubmit() {
        this.submitted = true;
        this.ls.set('username', this.model.name);
        this.uiRouter.urlService.url('/cus/home/index');
        // this.uiRouter.locationService.url('/cus/home/index');
        // document.location.load('/cus/home/index');
    }
    newHero() {
        this.model = new __WEBPACK_IMPORTED_MODULE_1__hero__["a" /* Hero */]('', '');
    }
    ngOnInit() {
        this.ls.remove('username');
    }
};
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login-cus-r',
        template: __webpack_require__("./src/components/pages/login.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__contents_localStorage__["a" /* LocalStorage */], __WEBPACK_IMPORTED_MODULE_2__uirouter_angular__["UIRouter"]])
], LoginComponent);



/***/ }),

/***/ "./src/components/richText/ckeditorIndex.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <ckeditor [(ngModel)]=\"mycontent\" #myckeditor [config]=\"ckeConfig\" debounce=\"500\" (change)=\"onChange($event)\">\r\n  </ckeditor>\r\n</div>\r\n<div [innerHTML]=\"mycontent\"></div>\r\n"

/***/ }),

/***/ "./src/components/richText/ckeditorIndex.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CkeditorIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let CkeditorIndexComponent = class CkeditorIndexComponent {
    constructor() {
        this.name = 'ng2-ckeditor';
        this.log = '';
        this.mycontent = `<p>My html content11</p>`;
    }
    ngOnInit() {
        this.ckeConfig = {
            allowedContent: true,
        };
    }
    onChange($event) {
        console.log('onChange');
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myckeditor'),
    __metadata("design:type", Object)
], CkeditorIndexComponent.prototype, "ckeditor", void 0);
CkeditorIndexComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/components/richText/ckeditorIndex.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")]
    }),
    __metadata("design:paramtypes", [])
], CkeditorIndexComponent);



/***/ }),

/***/ "./src/components/richText/quillIndex.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-outer-layer-div\">\r\n  <div nz-row nzGutter=\"24\">\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"ngx-quill editor\">\r\n        <div class=\"cus-modal-editor\">\r\n          <quill-editor [style]=\"{height: '200px'}\" (onEditorCreated)=\"setFocus($event)\"></quill-editor>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/components/richText/quillIndex.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuillIndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_quill_src_quill_editor_component__ = __webpack_require__("./node_modules/ngx-quill/src/quill-editor.component.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let QuillIndexComponent = class QuillIndexComponent {
    constructor() {
    }
    ngOnInit() {
    }
    setFocus($event) {
        $event.focus();
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('editor'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_quill_src_quill_editor_component__["a" /* QuillEditorComponent */])
], QuillIndexComponent.prototype, "editor", void 0);
QuillIndexComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/components/richText/quillIndex.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [])
], QuillIndexComponent);



/***/ }),

/***/ "./src/components/siderBar/customSider.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n</div>\n<ul nz-menu [nzTheme]=\"'light'\" [nzMode]=\"isCollapsed?'vertical':'inline'\" [nzInlineCollapsed]=\"isCollapsed\" *ngFor=\"let cus of menusCus\">\n    <li *ngIf=\"cus.sub.length <= 0\" nz-menu-item [nzSelected]=\"cus.checkOpen\">\n      <a [uiSref]=\"cus.key\" uiSrefActive=\"active\" class=\"application-cus-real-dus-color\">\n        <span>\n          <i [ngClass]=\"cus.icon\"></i>\n          <span class=\"nav-text\">{{cus.title}}</span>\n        </span>\n      </a>\n    </li>\n    <li *ngIf=\"cus.sub.length > 0\" nz-submenu [nzOpen]=\"cus.checkOpen\">\n      <span title>\n        <i [ngClass]=\"cus.icon\"></i>\n        <span class=\"nav-text\">{{cus.title}}</span>\n      </span>\n      <ul *ngFor=\"let cusSub of cus.sub\">\n        <li nz-menu-item [nzSelected]=\"cusSub.checkOpen\">\n          <a [uiSref]=\"cusSub.key\" uiSrefActive=\"active\" class=\"nav-text-cus-app\"><i [ngClass]=\"cusSub.icon\"></i>{{cusSub.title}}</a>\n        </li>\n      </ul>\n    </li>\n</ul>\n\n"

/***/ }),

/***/ "./src/components/siderBar/customSider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomSiderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contents_menu__ = __webpack_require__("./src/contents/menu.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let CustomSiderComponent = class CustomSiderComponent {
    constructor() {
        this.menusCus = __WEBPACK_IMPORTED_MODULE_1__contents_menu__["a" /* menusContent */];
        this.locationHref = document.location.href;
    }
    ngOnInit() {
        this.initSetMenuOpen();
    }
    onClick(btn) {
        this.locationHref = document.location.href;
        this.setMenuOpen();
    }
    setMenuOpen() {
        for (const m of this.menusCus) {
            if (m.sub.length <= 0 && this.locationHref.indexOf(m.key) > -1) {
                m.checkOpen = true;
            }
            if (m.sub.length <= 0 && this.locationHref.indexOf(m.key) <= -1) {
                m.checkOpen = false;
            }
            if (m.sub.length > 0) {
                this.setSubMenuSelect(m);
            }
        }
    }
    setSubMenuSelect(event) {
        for (const s of event.sub) {
            if (this.locationHref.indexOf(s.key) > -1) {
                s.checkOpen = true;
            }
            else {
                s.checkOpen = false;
            }
        }
    }
    initSetMenuOpen() {
        for (const m of this.menusCus) {
            if (this.locationHref.indexOf(m.key) > -1) {
                m.checkOpen = true;
            }
            if (m.sub.length > 0) {
                this.initSetSubMenuSelect(m);
            }
        }
    }
    initSetSubMenuSelect(event) {
        for (const s of event.sub) {
            if (this.locationHref.indexOf(s.key) > -1) {
                s.checkOpen = true;
            }
        }
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], CustomSiderComponent.prototype, "isCollapsed", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event.target']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HTMLElement]),
    __metadata("design:returntype", void 0)
], CustomSiderComponent.prototype, "onClick", null);
CustomSiderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-custom-sider',
        template: __webpack_require__("./src/components/siderBar/customSider.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")]
    })
], CustomSiderComponent);



/***/ }),

/***/ "./src/components/styles/index.css":
/***/ (function(module, exports) {

module.exports = "[nz-carousel-content] {\r\n  text-align: center;\r\n  height: 160px;\r\n  line-height: 160px;\r\n  background: #364d79;\r\n  color: #fff;\r\n  overflow: hidden;\r\n}\r\n\r\n.cus-car h3 {\r\n  color: #fff;\r\n}\r\n\r\n.cus-m-n .editable-cell {\r\n  position: relative;\r\n}\r\n\r\n.cus-m-n .editable-cell-input-wrapper,\r\n.cus-m-n .editable-cell-text-wrapper {\r\n  padding-right: 24px;\r\n}\r\n\r\n.cus-m-n .editable-cell-text-wrapper {\r\n  padding: 5px 24px 5px 5px;\r\n}\r\n\r\n.cus-m-n .editable-cell-icon,\r\n.cus-m-n .editable-cell-icon-check {\r\n  position: absolute;\r\n  right: 0;\r\n  width: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.cus-m-n .editable-cell-icon {\r\n  line-height: 18px;\r\n  display: none;\r\n}\r\n\r\n.cus-m-n .editable-cell-icon-check {\r\n  line-height: 28px;\r\n}\r\n\r\n.cus-m-n .editable-cell:hover .editable-cell-icon {\r\n  display: inline-block;\r\n}\r\n\r\n.cus-m-n .editable-cell-icon:hover,\r\n.cus-m-n .editable-cell-icon-check:hover {\r\n  color: #108ee9;\r\n}\r\n\r\n.cus-m-n .editable-add-btn {\r\n  margin-bottom: 8px;\r\n}\r\n\r\n:host ::ng-deep .ant-table-expanded-row > td:last-child {\r\n  padding: 0 48px 0 8px;\r\n}\r\n\r\n:host ::ng-deep .ant-table-expanded-row > td:last-child .ant-table-thead th {\r\n  border-bottom: 1px solid #e9e9e9;\r\n}\r\n\r\n:host ::ng-deep .ant-table-expanded-row > td:last-child .ant-table-thead th:first-child {\r\n  padding-left: 0;\r\n}\r\n\r\n:host ::ng-deep .ant-table-expanded-row > td:last-child .ant-table-row td:first-child {\r\n  padding-left: 0;\r\n}\r\n\r\n:host ::ng-deep .ant-table-expanded-row .ant-table-row:last-child td {\r\n  border: none;\r\n}\r\n\r\n:host ::ng-deep .ant-table-expanded-row .ant-table-thead > tr > th {\r\n  background: none;\r\n}\r\n\r\n:host ::ng-deep .table-operation a.operation {\r\n  margin-right: 24px;\r\n}\r\n\r\n/*!\r\n * Quill Editor v1.2.2\r\n * https://quilljs.com/\r\n * Copyright (c) 2014, Jason Chen\r\n * Copyright (c) 2013, salesforce.com\r\n */\r\n\r\n.ql-container {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  font-family: Helvetica, Arial, sans-serif;\r\n  font-size: 13px;\r\n  height: 100%;\r\n  margin: 0px;\r\n  position: relative;\r\n}\r\n\r\n.ql-container.ql-disabled .ql-tooltip {\r\n  visibility: hidden;\r\n}\r\n\r\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\r\n  pointer-events: none;\r\n}\r\n\r\n.ql-clipboard {\r\n  left: -100000px;\r\n  height: 1px;\r\n  overflow-y: hidden;\r\n  position: absolute;\r\n  top: 50%;\r\n}\r\n\r\n.ql-clipboard p {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.ql-editor {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  cursor: text;\r\n  line-height: 1.42;\r\n  height: 100%;\r\n  outline: none;\r\n  overflow-y: auto;\r\n  padding: 12px 15px;\r\n  -o-tab-size: 4;\r\n     tab-size: 4;\r\n  -moz-tab-size: 4;\r\n  text-align: left;\r\n  white-space: pre-wrap;\r\n  word-wrap: break-word;\r\n}\r\n\r\n.ql-editor p,\r\n.ql-editor ol,\r\n.ql-editor ul,\r\n.ql-editor pre,\r\n.ql-editor blockquote,\r\n.ql-editor h1,\r\n.ql-editor h2,\r\n.ql-editor h3,\r\n.ql-editor h4,\r\n.ql-editor h5,\r\n.ql-editor h6 {\r\n  margin: 0;\r\n  padding: 0;\r\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\r\n}\r\n\r\n.ql-editor ol,\r\n.ql-editor ul {\r\n  padding-left: 1.5em;\r\n}\r\n\r\n.ql-editor ol > li,\r\n.ql-editor ul > li {\r\n  list-style-type: none;\r\n}\r\n\r\n.ql-editor ul > li::before {\r\n  content: '\\2022';\r\n}\r\n\r\n.ql-editor ul[data-checked=true],\r\n.ql-editor ul[data-checked=false] {\r\n  pointer-events: none;\r\n}\r\n\r\n.ql-editor ul[data-checked=true] > li::before,\r\n.ql-editor ul[data-checked=false] > li::before {\r\n  color: #777;\r\n  cursor: pointer;\r\n  pointer-events: all;\r\n}\r\n\r\n.ql-editor ul[data-checked=true] > li::before {\r\n  content: '\\2611';\r\n}\r\n\r\n.ql-editor ul[data-checked=false] > li::before {\r\n  content: '\\2610';\r\n}\r\n\r\n.ql-editor li::before {\r\n  display: inline-block;\r\n  margin-right: 0.3em;\r\n  text-align: right;\r\n  white-space: nowrap;\r\n  width: 1.2em;\r\n}\r\n\r\n.ql-editor li:not(.ql-direction-rtl)::before {\r\n  margin-left: -1.5em;\r\n}\r\n\r\n.ql-editor ol li,\r\n.ql-editor ul li {\r\n  padding-left: 1.5em;\r\n}\r\n\r\n.ql-editor ol li {\r\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\r\n  counter-increment: list-num;\r\n}\r\n\r\n.ql-editor ol li:before {\r\n  content: counter(list-num, decimal) '. ';\r\n}\r\n\r\n.ql-editor ol li.ql-indent-1 {\r\n  counter-increment: list-1;\r\n}\r\n\r\n.ql-editor ol li.ql-indent-1:before {\r\n  content: counter(list-1, lower-alpha) '. ';\r\n}\r\n\r\n.ql-editor ol li.ql-indent-1 {\r\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\r\n}\r\n\r\n.ql-editor ol li.ql-indent-2 {\r\n  counter-increment: list-2;\r\n}\r\n\r\n.ql-editor ol li.ql-indent-2:before {\r\n  content: counter(list-2, lower-roman) '. ';\r\n}\r\n\r\n.ql-editor ol li.ql-indent-2 {\r\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\r\n}\r\n\r\n.ql-editor ol li.ql-indent-3 {\r\n  counter-increment: list-3;\r\n}\r\n\r\n.ql-editor ol li.ql-indent-3:before {\r\n  content: counter(list-3, decimal) '. ';\r\n}\r\n\r\n.ql-editor ol li.ql-indent-3 {\r\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\r\n}\r\n\r\n.ql-editor ol li.ql-indent-4 {\r\n  counter-increment: list-4;\r\n}\r\n\r\n.ql-editor ol li.ql-indent-4:before {\r\n  content: counter(list-4, lower-alpha) '. ';\r\n}\r\n\r\n.ql-editor ol li.ql-indent-4 {\r\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\r\n}\r\n\r\n.ql-editor ol li.ql-indent-5 {\r\n  counter-increment: list-5;\r\n}\r\n\r\n.ql-editor ol li.ql-indent-5:before {\r\n  content: counter(list-5, lower-roman) '. ';\r\n}\r\n\r\n.ql-editor ol li.ql-indent-5 {\r\n  counter-reset: list-6 list-7 list-8 list-9;\r\n}\r\n\r\n.ql-editor ol li.ql-indent-6 {\r\n  counter-increment: list-6;\r\n}\r\n\r\n.ql-editor ol li.ql-indent-6:before {\r\n  content: counter(list-6, decimal) '. ';\r\n}\r\n\r\n.ql-editor ol li.ql-indent-6 {\r\n  counter-reset: list-7 list-8 list-9;\r\n}\r\n\r\n.ql-editor ol li.ql-indent-7 {\r\n  counter-increment: list-7;\r\n}\r\n\r\n.ql-editor ol li.ql-indent-7:before {\r\n  content: counter(list-7, lower-alpha) '. ';\r\n}\r\n\r\n.ql-editor ol li.ql-indent-7 {\r\n  counter-reset: list-8 list-9;\r\n}\r\n\r\n.ql-editor ol li.ql-indent-8 {\r\n  counter-increment: list-8;\r\n}\r\n\r\n.ql-editor ol li.ql-indent-8:before {\r\n  content: counter(list-8, lower-roman) '. ';\r\n}\r\n\r\n.ql-editor ol li.ql-indent-8 {\r\n  counter-reset: list-9;\r\n}\r\n\r\n.ql-editor ol li.ql-indent-9 {\r\n  counter-increment: list-9;\r\n}\r\n\r\n.ql-editor ol li.ql-indent-9:before {\r\n  content: counter(list-9, decimal) '. ';\r\n}\r\n\r\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\r\n  padding-left: 3em;\r\n}\r\n\r\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\r\n  padding-left: 4.5em;\r\n}\r\n\r\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\r\n  padding-right: 3em;\r\n}\r\n\r\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\r\n  padding-right: 4.5em;\r\n}\r\n\r\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\r\n  padding-left: 6em;\r\n}\r\n\r\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\r\n  padding-left: 7.5em;\r\n}\r\n\r\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\r\n  padding-right: 6em;\r\n}\r\n\r\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\r\n  padding-right: 7.5em;\r\n}\r\n\r\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\r\n  padding-left: 9em;\r\n}\r\n\r\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\r\n  padding-left: 10.5em;\r\n}\r\n\r\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\r\n  padding-right: 9em;\r\n}\r\n\r\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\r\n  padding-right: 10.5em;\r\n}\r\n\r\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\r\n  padding-left: 12em;\r\n}\r\n\r\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\r\n  padding-left: 13.5em;\r\n}\r\n\r\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\r\n  padding-right: 12em;\r\n}\r\n\r\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\r\n  padding-right: 13.5em;\r\n}\r\n\r\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\r\n  padding-left: 15em;\r\n}\r\n\r\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\r\n  padding-left: 16.5em;\r\n}\r\n\r\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\r\n  padding-right: 15em;\r\n}\r\n\r\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\r\n  padding-right: 16.5em;\r\n}\r\n\r\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\r\n  padding-left: 18em;\r\n}\r\n\r\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\r\n  padding-left: 19.5em;\r\n}\r\n\r\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\r\n  padding-right: 18em;\r\n}\r\n\r\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\r\n  padding-right: 19.5em;\r\n}\r\n\r\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\r\n  padding-left: 21em;\r\n}\r\n\r\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\r\n  padding-left: 22.5em;\r\n}\r\n\r\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\r\n  padding-right: 21em;\r\n}\r\n\r\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\r\n  padding-right: 22.5em;\r\n}\r\n\r\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\r\n  padding-left: 24em;\r\n}\r\n\r\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\r\n  padding-left: 25.5em;\r\n}\r\n\r\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\r\n  padding-right: 24em;\r\n}\r\n\r\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\r\n  padding-right: 25.5em;\r\n}\r\n\r\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\r\n  padding-left: 27em;\r\n}\r\n\r\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\r\n  padding-left: 28.5em;\r\n}\r\n\r\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\r\n  padding-right: 27em;\r\n}\r\n\r\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\r\n  padding-right: 28.5em;\r\n}\r\n\r\n.ql-editor .ql-video {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n\r\n.ql-editor .ql-video.ql-align-center {\r\n  margin: 0 auto;\r\n}\r\n\r\n.ql-editor .ql-video.ql-align-right {\r\n  margin: 0 0 0 auto;\r\n}\r\n\r\n.ql-editor .ql-bg-black {\r\n  background-color: #000;\r\n}\r\n\r\n.ql-editor .ql-bg-red {\r\n  background-color: #e60000;\r\n}\r\n\r\n.ql-editor .ql-bg-orange {\r\n  background-color: #f90;\r\n}\r\n\r\n.ql-editor .ql-bg-yellow {\r\n  background-color: #ff0;\r\n}\r\n\r\n.ql-editor .ql-bg-green {\r\n  background-color: #008a00;\r\n}\r\n\r\n.ql-editor .ql-bg-blue {\r\n  background-color: #06c;\r\n}\r\n\r\n.ql-editor .ql-bg-purple {\r\n  background-color: #93f;\r\n}\r\n\r\n.ql-editor .ql-color-white {\r\n  color: #fff;\r\n}\r\n\r\n.ql-editor .ql-color-red {\r\n  color: #e60000;\r\n}\r\n\r\n.ql-editor .ql-color-orange {\r\n  color: #f90;\r\n}\r\n\r\n.ql-editor .ql-color-yellow {\r\n  color: #ff0;\r\n}\r\n\r\n.ql-editor .ql-color-green {\r\n  color: #008a00;\r\n}\r\n\r\n.ql-editor .ql-color-blue {\r\n  color: #06c;\r\n}\r\n\r\n.ql-editor .ql-color-purple {\r\n  color: #93f;\r\n}\r\n\r\n.ql-editor .ql-font-serif {\r\n  font-family: Georgia, Times New Roman, serif;\r\n}\r\n\r\n.ql-editor .ql-font-monospace {\r\n  font-family: Monaco, Courier New, monospace;\r\n}\r\n\r\n.ql-editor .ql-size-small {\r\n  font-size: 0.75em;\r\n}\r\n\r\n.ql-editor .ql-size-large {\r\n  font-size: 1.5em;\r\n}\r\n\r\n.ql-editor .ql-size-huge {\r\n  font-size: 2.5em;\r\n}\r\n\r\n.ql-editor .ql-direction-rtl {\r\n  direction: rtl;\r\n  text-align: inherit;\r\n}\r\n\r\n.ql-editor .ql-align-center {\r\n  text-align: center;\r\n}\r\n\r\n.ql-editor .ql-align-justify {\r\n  text-align: justify;\r\n}\r\n\r\n.ql-editor .ql-align-right {\r\n  text-align: right;\r\n}\r\n\r\n.ql-editor.ql-blank::before {\r\n  color: rgba(0,0,0,0.6);\r\n  content: attr(data-placeholder);\r\n  font-style: italic;\r\n  pointer-events: none;\r\n  position: absolute;\r\n}\r\n\r\n.ql-snow.ql-toolbar:after,\r\n.ql-snow .ql-toolbar:after {\r\n  clear: both;\r\n  content: '';\r\n  display: table;\r\n}\r\n\r\n.ql-snow.ql-toolbar button,\r\n.ql-snow .ql-toolbar button {\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  float: left;\r\n  height: 24px;\r\n  padding: 3px 5px;\r\n  width: 28px;\r\n}\r\n\r\n.ql-snow.ql-toolbar button svg,\r\n.ql-snow .ql-toolbar button svg {\r\n  float: left;\r\n  height: 100%;\r\n}\r\n\r\n.ql-snow.ql-toolbar button:active:hover,\r\n.ql-snow .ql-toolbar button:active:hover {\r\n  outline: none;\r\n}\r\n\r\n.ql-snow.ql-toolbar input.ql-image[type=file],\r\n.ql-snow .ql-toolbar input.ql-image[type=file] {\r\n  display: none;\r\n}\r\n\r\n.ql-snow.ql-toolbar button:hover,\r\n.ql-snow .ql-toolbar button:hover,\r\n.ql-snow.ql-toolbar button.ql-active,\r\n.ql-snow .ql-toolbar button.ql-active,\r\n.ql-snow.ql-toolbar .ql-picker-label:hover,\r\n.ql-snow .ql-toolbar .ql-picker-label:hover,\r\n.ql-snow.ql-toolbar .ql-picker-label.ql-active,\r\n.ql-snow .ql-toolbar .ql-picker-label.ql-active,\r\n.ql-snow.ql-toolbar .ql-picker-item:hover,\r\n.ql-snow .ql-toolbar .ql-picker-item:hover,\r\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected,\r\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected {\r\n  color: #06c;\r\n}\r\n\r\n.ql-snow.ql-toolbar button:hover .ql-fill,\r\n.ql-snow .ql-toolbar button:hover .ql-fill,\r\n.ql-snow.ql-toolbar button.ql-active .ql-fill,\r\n.ql-snow .ql-toolbar button.ql-active .ql-fill,\r\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,\r\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,\r\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\r\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,\r\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,\r\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,\r\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\r\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\r\n.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,\r\n.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,\r\n.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,\r\n.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,\r\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\r\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\r\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\r\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\r\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\r\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\r\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\r\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\r\n  fill: #06c;\r\n}\r\n\r\n.ql-snow.ql-toolbar button:hover .ql-stroke,\r\n.ql-snow .ql-toolbar button:hover .ql-stroke,\r\n.ql-snow.ql-toolbar button.ql-active .ql-stroke,\r\n.ql-snow .ql-toolbar button.ql-active .ql-stroke,\r\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,\r\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,\r\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\r\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\r\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,\r\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,\r\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\r\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\r\n.ql-snow.ql-toolbar button:hover .ql-stroke-miter,\r\n.ql-snow .ql-toolbar button:hover .ql-stroke-miter,\r\n.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,\r\n.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,\r\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\r\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\r\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\r\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\r\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\r\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\r\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\r\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\r\n  stroke: #06c;\r\n}\r\n\r\n.ql-snow {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.ql-snow * {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.ql-snow .ql-hidden {\r\n  display: none;\r\n}\r\n\r\n.ql-snow .ql-out-bottom,\r\n.ql-snow .ql-out-top {\r\n  visibility: hidden;\r\n}\r\n\r\n.ql-snow .ql-tooltip {\r\n  position: absolute;\r\n  -webkit-transform: translateY(10px);\r\n          transform: translateY(10px);\r\n}\r\n\r\n.ql-snow .ql-tooltip a {\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n}\r\n\r\n.ql-snow .ql-tooltip.ql-flip {\r\n  -webkit-transform: translateY(-10px);\r\n          transform: translateY(-10px);\r\n}\r\n\r\n.ql-snow .ql-formats {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n\r\n.ql-snow .ql-formats:after {\r\n  clear: both;\r\n  content: '';\r\n  display: table;\r\n}\r\n\r\n.ql-snow .ql-stroke {\r\n  fill: none;\r\n  stroke: #444;\r\n  stroke-linecap: round;\r\n  stroke-linejoin: round;\r\n  stroke-width: 2;\r\n}\r\n\r\n.ql-snow .ql-stroke-miter {\r\n  fill: none;\r\n  stroke: #444;\r\n  stroke-miterlimit: 10;\r\n  stroke-width: 2;\r\n}\r\n\r\n.ql-snow .ql-fill,\r\n.ql-snow .ql-stroke.ql-fill {\r\n  fill: #444;\r\n}\r\n\r\n.ql-snow .ql-empty {\r\n  fill: none;\r\n}\r\n\r\n.ql-snow .ql-even {\r\n  fill-rule: evenodd;\r\n}\r\n\r\n.ql-snow .ql-thin,\r\n.ql-snow .ql-stroke.ql-thin {\r\n  stroke-width: 1;\r\n}\r\n\r\n.ql-snow .ql-transparent {\r\n  opacity: 0.4;\r\n}\r\n\r\n.ql-snow .ql-direction svg:last-child {\r\n  display: none;\r\n}\r\n\r\n.ql-snow .ql-direction.ql-active svg:last-child {\r\n  display: inline;\r\n}\r\n\r\n.ql-snow .ql-direction.ql-active svg:first-child {\r\n  display: none;\r\n}\r\n\r\n.ql-snow .ql-editor h1 {\r\n  font-size: 2em;\r\n}\r\n\r\n.ql-snow .ql-editor h2 {\r\n  font-size: 1.5em;\r\n}\r\n\r\n.ql-snow .ql-editor h3 {\r\n  font-size: 1.17em;\r\n}\r\n\r\n.ql-snow .ql-editor h4 {\r\n  font-size: 1em;\r\n}\r\n\r\n.ql-snow .ql-editor h5 {\r\n  font-size: 0.83em;\r\n}\r\n\r\n.ql-snow .ql-editor h6 {\r\n  font-size: 0.67em;\r\n}\r\n\r\n.ql-snow .ql-editor a {\r\n  text-decoration: underline;\r\n}\r\n\r\n.ql-snow .ql-editor blockquote {\r\n  border-left: 4px solid #ccc;\r\n  margin-bottom: 5px;\r\n  margin-top: 5px;\r\n  padding-left: 16px;\r\n}\r\n\r\n.ql-snow .ql-editor code,\r\n.ql-snow .ql-editor pre {\r\n  background-color: #f0f0f0;\r\n  border-radius: 3px;\r\n}\r\n\r\n.ql-snow .ql-editor pre {\r\n  white-space: pre-wrap;\r\n  margin-bottom: 5px;\r\n  margin-top: 5px;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.ql-snow .ql-editor code {\r\n  font-size: 85%;\r\n  padding-bottom: 2px;\r\n  padding-top: 2px;\r\n}\r\n\r\n.ql-snow .ql-editor code:before,\r\n.ql-snow .ql-editor code:after {\r\n  content: \"\\A0\";\r\n  letter-spacing: -2px;\r\n}\r\n\r\n.ql-snow .ql-editor pre.ql-syntax {\r\n  background-color: #23241f;\r\n  color: #f8f8f2;\r\n  overflow: visible;\r\n}\r\n\r\n.ql-snow .ql-editor img {\r\n  max-width: 100%;\r\n}\r\n\r\n.ql-snow .ql-picker {\r\n  color: #444;\r\n  display: inline-block;\r\n  float: left;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  height: 24px;\r\n  position: relative;\r\n  vertical-align: middle;\r\n}\r\n\r\n.ql-snow .ql-picker-label {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  height: 100%;\r\n  padding-left: 8px;\r\n  padding-right: 2px;\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n\r\n.ql-snow .ql-picker-label::before {\r\n  display: inline-block;\r\n  line-height: 22px;\r\n}\r\n\r\n.ql-snow .ql-picker-options {\r\n  background-color: #fff;\r\n  display: none;\r\n  min-width: 100%;\r\n  padding: 4px 8px;\r\n  position: absolute;\r\n  white-space: nowrap;\r\n}\r\n\r\n.ql-snow .ql-picker-options .ql-picker-item {\r\n  cursor: pointer;\r\n  display: block;\r\n  padding-bottom: 5px;\r\n  padding-top: 5px;\r\n}\r\n\r\n.ql-snow .ql-picker.ql-expanded .ql-picker-label {\r\n  color: #ccc;\r\n  z-index: 2;\r\n}\r\n\r\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {\r\n  fill: #ccc;\r\n}\r\n\r\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\r\n  stroke: #ccc;\r\n}\r\n\r\n.ql-snow .ql-picker.ql-expanded .ql-picker-options {\r\n  display: block;\r\n  margin-top: -1px;\r\n  top: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.ql-snow .ql-color-picker,\r\n.ql-snow .ql-icon-picker {\r\n  width: 28px;\r\n}\r\n\r\n.ql-snow .ql-color-picker .ql-picker-label,\r\n.ql-snow .ql-icon-picker .ql-picker-label {\r\n  padding: 2px 4px;\r\n}\r\n\r\n.ql-snow .ql-color-picker .ql-picker-label svg,\r\n.ql-snow .ql-icon-picker .ql-picker-label svg {\r\n  right: 4px;\r\n}\r\n\r\n.ql-snow .ql-icon-picker .ql-picker-options {\r\n  padding: 4px 0px;\r\n}\r\n\r\n.ql-snow .ql-icon-picker .ql-picker-item {\r\n  height: 24px;\r\n  width: 24px;\r\n  padding: 2px 4px;\r\n}\r\n\r\n.ql-snow .ql-color-picker .ql-picker-options {\r\n  padding: 3px 5px;\r\n  width: 152px;\r\n}\r\n\r\n.ql-snow .ql-color-picker .ql-picker-item {\r\n  border: 1px solid transparent;\r\n  float: left;\r\n  height: 16px;\r\n  margin: 2px;\r\n  padding: 0px;\r\n  width: 16px;\r\n}\r\n\r\n.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\r\n  position: absolute;\r\n  margin-top: -9px;\r\n  right: 0;\r\n  top: 50%;\r\n  width: 18px;\r\n}\r\n\r\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,\r\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,\r\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,\r\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,\r\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,\r\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {\r\n  content: attr(data-label);\r\n}\r\n\r\n.ql-snow .ql-picker.ql-header {\r\n  width: 98px;\r\n}\r\n\r\n.ql-snow .ql-picker.ql-header .ql-picker-label::before,\r\n.ql-snow .ql-picker.ql-header .ql-picker-item::before {\r\n  content: 'Normal';\r\n}\r\n\r\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before,\r\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\r\n  content: 'Heading 1';\r\n}\r\n\r\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before,\r\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\r\n  content: 'Heading 2';\r\n}\r\n\r\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before,\r\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\r\n  content: 'Heading 3';\r\n}\r\n\r\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before,\r\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\r\n  content: 'Heading 4';\r\n}\r\n\r\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before,\r\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\r\n  content: 'Heading 5';\r\n}\r\n\r\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before,\r\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\r\n  content: 'Heading 6';\r\n}\r\n\r\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\r\n  font-size: 2em;\r\n}\r\n\r\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\r\n  font-size: 1.5em;\r\n}\r\n\r\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\r\n  font-size: 1.17em;\r\n}\r\n\r\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\r\n  font-size: 1em;\r\n}\r\n\r\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\r\n  font-size: 0.83em;\r\n}\r\n\r\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\r\n  font-size: 0.67em;\r\n}\r\n\r\n.ql-snow .ql-picker.ql-font {\r\n  width: 108px;\r\n}\r\n\r\n.ql-snow .ql-picker.ql-font .ql-picker-label::before,\r\n.ql-snow .ql-picker.ql-font .ql-picker-item::before {\r\n  content: 'Sans Serif';\r\n}\r\n\r\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,\r\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\r\n  content: 'Serif';\r\n}\r\n\r\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,\r\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\r\n  content: 'Monospace';\r\n}\r\n\r\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {\r\n  font-family: Georgia, Times New Roman, serif;\r\n}\r\n\r\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {\r\n  font-family: Monaco, Courier New, monospace;\r\n}\r\n\r\n.ql-snow .ql-picker.ql-size {\r\n  width: 98px;\r\n}\r\n\r\n.ql-snow .ql-picker.ql-size .ql-picker-label::before,\r\n.ql-snow .ql-picker.ql-size .ql-picker-item::before {\r\n  content: 'Normal';\r\n}\r\n\r\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,\r\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\r\n  content: 'Small';\r\n}\r\n\r\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,\r\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\r\n  content: 'Large';\r\n}\r\n\r\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,\r\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\r\n  content: 'Huge';\r\n}\r\n\r\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {\r\n  font-size: 10px;\r\n}\r\n\r\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {\r\n  font-size: 18px;\r\n}\r\n\r\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {\r\n  font-size: 32px;\r\n}\r\n\r\n.ql-snow .ql-color-picker.ql-background .ql-picker-item {\r\n  background-color: #fff;\r\n}\r\n\r\n.ql-snow .ql-color-picker.ql-color .ql-picker-item {\r\n  background-color: #000;\r\n}\r\n\r\n.ql-toolbar.ql-snow {\r\n  border: 1px solid #ccc;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\r\n  padding: 8px;\r\n}\r\n\r\n.ql-toolbar.ql-snow .ql-formats {\r\n  margin-right: 15px;\r\n}\r\n\r\n.ql-toolbar.ql-snow .ql-picker-label {\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.ql-toolbar.ql-snow .ql-picker-options {\r\n  border: 1px solid transparent;\r\n  -webkit-box-shadow: rgba(0,0,0,0.2) 0 2px 8px;\r\n          box-shadow: rgba(0,0,0,0.2) 0 2px 8px;\r\n}\r\n\r\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {\r\n  border-color: #ccc;\r\n}\r\n\r\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {\r\n  border-color: #ccc;\r\n}\r\n\r\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,\r\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {\r\n  border-color: #000;\r\n}\r\n\r\n.ql-toolbar.ql-snow + .ql-container.ql-snow {\r\n  border-top: 0px;\r\n}\r\n\r\n.ql-snow .ql-tooltip {\r\n  background-color: #fff;\r\n  border: 1px solid #ccc;\r\n  -webkit-box-shadow: 0px 0px 5px #ddd;\r\n          box-shadow: 0px 0px 5px #ddd;\r\n  color: #444;\r\n  padding: 5px 12px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.ql-snow .ql-tooltip::before {\r\n  content: \"Visit URL:\";\r\n  line-height: 26px;\r\n  margin-right: 8px;\r\n}\r\n\r\n.ql-snow .ql-tooltip input[type=text] {\r\n  display: none;\r\n  border: 1px solid #ccc;\r\n  font-size: 13px;\r\n  height: 26px;\r\n  margin: 0px;\r\n  padding: 3px 5px;\r\n  width: 170px;\r\n}\r\n\r\n.ql-snow .ql-tooltip a.ql-preview {\r\n  display: inline-block;\r\n  max-width: 200px;\r\n  overflow-x: hidden;\r\n  text-overflow: ellipsis;\r\n  vertical-align: top;\r\n}\r\n\r\n.ql-snow .ql-tooltip a.ql-action::after {\r\n  border-right: 1px solid #ccc;\r\n  content: 'Edit';\r\n  margin-left: 16px;\r\n  padding-right: 8px;\r\n}\r\n\r\n.ql-snow .ql-tooltip a.ql-remove::before {\r\n  content: 'Remove';\r\n  margin-left: 8px;\r\n}\r\n\r\n.ql-snow .ql-tooltip a {\r\n  line-height: 26px;\r\n}\r\n\r\n.ql-snow .ql-tooltip.ql-editing a.ql-preview,\r\n.ql-snow .ql-tooltip.ql-editing a.ql-remove {\r\n  display: none;\r\n}\r\n\r\n.ql-snow .ql-tooltip.ql-editing input[type=text] {\r\n  display: inline-block;\r\n}\r\n\r\n.ql-snow .ql-tooltip.ql-editing a.ql-action::after {\r\n  border-right: 0px;\r\n  content: 'Save';\r\n  padding-right: 0px;\r\n}\r\n\r\n.ql-snow .ql-tooltip[data-mode=link]::before {\r\n  content: \"Enter link:\";\r\n}\r\n\r\n.ql-snow .ql-tooltip[data-mode=formula]::before {\r\n  content: \"Enter formula:\";\r\n}\r\n\r\n.ql-snow .ql-tooltip[data-mode=video]::before {\r\n  content: \"Enter video:\";\r\n}\r\n\r\n.ql-snow a {\r\n  color: #06c;\r\n}\r\n\r\n.ql-container.ql-snow {\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n.cus-name-r-login {\r\n\r\n}\r\n\r\n.alert-danger {\r\n  color: red;\r\n}\r\n\r\n.cus-name-sub-margin-top {\r\n  margin-top: 15px;\r\n}\r\n\r\n.cus-r-login-h1{\r\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  color: #2f54eb;\r\n  background: #f0f5ff;\r\n  border-radius: 4px;\r\n  border: 1px solid #adc6ff;\r\n}\r\n\r\n.cus-r-login-container-top .ant-card{\r\n  border: 1px solid  #91d5ff;\r\n  border-radius: 4px;\r\n  background: #e6f7ff;\r\n}\r\n\r\n.cus-name-r-psw {\r\n  margin-top: 15px;\r\n}\r\n\r\n.cus-r-login-container {\r\n\r\n}\r\n\r\n.application-outer-layer-div-login {\r\n  text-align: center;\r\n  height: 100%;\r\n  background: url('loginback.c00158025324cf0fa12b.jpg');\r\n  background-size: 100% 100%;\r\n}\r\n\r\n.cus-r-login-container-top {\r\n  text-align: center;\r\n  margin: 13% 0 0 40%;\r\n}\r\n\r\n.ant-layout-sider {\r\n  background-color: #fff;\r\n}\r\n\r\n.layout-real-content-custom {\r\n  height: 100%;\r\n}\r\n\r\n:host ::ng-deep .trigger {\r\n  font-size: 18px;\r\n  line-height: 64px;\r\n  padding: 0 24px;\r\n  cursor: pointer;\r\n  -webkit-transition: color .3s;\r\n  transition: color .3s;\r\n}\r\n\r\n:host ::ng-deep .trigger:hover {\r\n  color: #1890ff;\r\n}\r\n\r\n:host ::ng-deep .logo {\r\n  height: 32px;\r\n  /*background: rgba(255, 255, 255, .2);*/\r\n  margin: 16px;\r\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAA6CAYAAAAHvkMpAAAHZ0lEQVR42u2dv2/bRhTHBXTqpK6d9A8UUCxvrQ39Cf4TNCR2R6HO0FF/AufCTrU0btFFa22joN0ik91qioMOCv8AO6GdFOjm6707HnUkj/eLpCyH7ws82JHEMyl+7t333pFMp4NCoVAoFAqFQqFQKFRbtXn6vvvN8c1o6/gm3D65IYqI6Xuz7ZN4iN8W6lFq67e4v3V8HZUAXgjoDNAx8JtDPZosvn1yPbUFvJDhT96N8VtErXcWp5ACrFqYj6+DrZPruT67w0iAdga1ZgIoTTYFvPjXv7/viW3Au5s6RX4bFOpBBBDyyaQGVpa9l9n55dXd+Ojq41DYnK3TdxOjnaGfWYsD/u6Pnc7+2bTz/aX7XOL5qx7bdv/PfvG98zF9b955fkaMsX8Ws3ZgX/LaPwtoWyOvY4P9en4W0naHmeOF1+Dvwf47tQfbKPYFjhXatDnW/HH7HlsVH24DKGTtFPDXH3Zevr6Njq7uCAT9ffrT1X896w6zDnZGnCCAUgWsvoPEybZBEQjHk56GdOI5qBwIL9DPJ0m7M6ljxtkOdj6xPN5hsl1Y37FK+7YK2VgO8OGigvLLP//2KdShAFwO+nr885u7ya8L0vW1QCsVwCQyr82Jh8zPsqx0ouTRgGe3ZVvQIQASXfBtZmmbor0lXKQi6GGhvSzwUSbr24LORweSdnbopKZjLRz7q+bPO4ewtB6elggFhAAvZG0V4Argo6M3H0Yuk1oYUR6kHAlgyUMvnHgGn3QS4HeexaPMyS0O7xwgEzja0SXpbE2CzjvlKAM862wl4KlATzvn+bjwfZoAt7aKu2TY2SOzzlPi1SO4tSjPtHlbAT4csrUN5Dng57J/h5HBBLu3/bokIxr+QyH31bGFt1RnQGE1qoM5WwnoqhGqbFRTg17cN+gotdoWDjpJIqDhnAklXx6X1b0BUtmH+8ftLOffw/zI4evXN/4mw8HFfUQhJ5uX92E1z858bKAEHgAHCMqyUX2ghyvvOGLiWtaZVaCL76ho7SKHOcnYBXRC/x3Tn14z2HRBSPLhAGWZD68SRf9OAT+92fEEvAcZnAMuoiLouuHXzn6QCtZllrEucnuu1YkMcMm2NiNEmZ2B122ti10FJ7DL6nnQ07iP2HueAghp9g3qBjw/YZX9u4dF6Q4uSJAFvGbQM1nR4USKEygsgG2kkFM45REjaysC+zalCXYxKxPHCbcc5ZNRt+MV1a6pJ+hpePv3fNmwAdBDqNz4+vDBJYnVkNcMuqigsLCsDnBI5l6lNtY5ciXOOttz9fx5O6MCs2p5UbV2kBFAvEvmBti9/TtkdrAZ65LJsz5cG/VdV7OsY8+dFpQYnGnWso+yOn6d7bGRw9FqcNsSli6sLReMHMPFjoEv5/68HPYK/r0+r34bCG9e3YcrYwafxbXtT1mQsXnmNmR3f//ua2d8bYrehy8Dsjxke4SgBUozGbMz1KOa7YyXfxd2htfGLernnjbF7MMp4Pz95RB8+Baz+acumIDR7DdNgX9Gdlj21sD+FbUzGxWqMwAxrJJCxpaDV2w+Dv2PxWxT4Fgh47MNfoyGnYPFvPMimiAJLQBdZLnBX2Qi2ZmJyr9/SWOTxmCPf/bBve0Piy4LDjrRVVRSmwIZ/HAxoz8JCwS9PaDLvvXJBdlJ7QxYlQTyz2j0c6An2z/MZO4wGtGMHLHMXAJ6YlNGaac4WAQp4Ah6e0HPZUA2Efxij4w+p3D3EsgVoBdtQZMSlkOAWgI63Z95uj+H0Zh+Ni5AjqC3HXQezJ5QP74pQV4GumyBGgEeLMfBYloAtTSjJwtAALIKcAS9VVUX7WKKK+iyBUotQx0+XAdrJdCZV8eqS3syOxmrynK+oMuwVcruL972mQ/XZWQf0MH6JNuh2gd7N/HZNYKe88qukJf5al/QWaeJRni2UWBn+gLgOkAXsDcCuT3oMfuZlCJRqFSizFgH6Ax2Uae3kVxVqQo6vI8+HGXM8HWBzucA5owK1sIWchvQUahVgm59KaxLNkfQUesJugE+tjzvADmCjlrTjE5qtS0IOupRgm5axUTQUY2B/pT0HiPosCaAZw/lpMEuiVWg80sI2ILQw4Au1cYbvQcU1RrQp1nQ76Mnz0h6F7bNnT31gr68RkW1oguB94GiavHpLHbvw41v+eW8DDh+5WJzoOeuUYG/p+5g6M9RngKolbBDhucZv5vYGe3d956gx/I1KrBqq7vqEm96RvlndZq58149B3ssvLvOvzuDLvlw+Toc3X2heLZQlS2MDnYb/24PutmHq57RgmcJtZLMbvLvRtCtfThmclTTfp36cbApRtgV/l3bsHSVocmHy5cAoydHNZvd+WLSzAL2jH/Xtmnhwwt3+KNQK/Pu1JsbgYeHI+lGCv4/T9jcyBGs5IkDKJQS1F0yNvl33fbmOjx7DAcuBKHWxL/nVlKrgp55sBIKtW7VGdUikwvomUfloVDrLKipy/7dFvSVPfkLharVzuyRCfh3M+jSA0FRqEdpZwzPVseJJgqFQqFQKBSqBfofiDWLiRMP1fYAAAAASUVORK5CYII=\");\r\n  background-size: 100% 100%;\r\n}\r\n\r\n.cus-index-margin-e {\r\n  margin: 2.3%;\r\n}\r\n\r\n.cus-index-margin-e .ant-btn {\r\n  margin-right: 8px;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.cus-index-margin-top {\r\n  margin-top: 0.5%;\r\n}\r\n\r\n.cus-real-line-height {\r\n  line-height: 64px;\r\n}\r\n\r\n.cus-float-right {\r\n  float: right;\r\n}\r\n\r\n.cus-mar-cen {\r\n  margin: auto;\r\n}\r\n\r\n.breadcrumb-real-content-n {\r\n  margin: 15px;\r\n}\r\n\r\n.cus-top-80 {\r\n  margin-top: 80px;\r\n}\r\n\r\n.cus-home-r-top{\r\n  text-align: center;\r\n  font-size: 15px;\r\n}\r\n"

/***/ }),

/***/ "./src/components/tables/basicTables.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-outer-layer-div\">\r\n  <div nz-row nzGutter=\"24\">\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\"  nzTitle=\"基本表格\" >\r\n        <div class=\"cus-index-margin-n\">\r\n          <nz-table #basicTable [nzData]=\"dataSet\">\r\n            <thead>\r\n            <tr>\r\n              <th>Name</th>\r\n              <th>Age</th>\r\n              <th>Address</th>\r\n              <th>Action</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let data of basicTable.data\">\r\n              <td>{{data.name}}</td>\r\n              <td>{{data.age}}</td>\r\n              <td>{{data.address}}</td>\r\n              <td>\r\n                <a>Action 一 {{data.name}}</a>\r\n                <nz-divider nzType=\"vertical\"></nz-divider>\r\n                <a>Delete</a>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </nz-table>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/tables/basicTables.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicTablesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let BasicTablesComponent = class BasicTablesComponent {
    constructor() {
        this.dataSet = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park'
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park'
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park'
            }
        ];
    }
    ngOnInit() {
    }
};
BasicTablesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/components/tables/basicTables.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
    })
], BasicTablesComponent);



/***/ }),

/***/ "./src/components/tables/nestingTables.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-outer-layer-div\">\r\n  <div nz-row nzGutter=\"24\">\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"嵌套子表格\">\r\n        <div class=\"cus-index-margin-n\">\r\n          <nz-table #nestedTable [nzData]=\"nestedTableData\" [nzPageSize]=\"10\">\r\n            <thead>\r\n            <tr>\r\n              <th nzShowExpand></th>\r\n              <th>Name</th>\r\n              <th>Platform</th>\r\n              <th>Version</th>\r\n              <th>Upgraded</th>\r\n              <th>Creator</th>\r\n              <th>Date</th>\r\n              <th>Action</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <ng-template ngFor let-data [ngForOf]=\"nestedTable.data\">\r\n              <tr>\r\n                <td nzShowExpand [(nzExpand)]=\"data.expand\"></td>\r\n                <td>{{data.name}}</td>\r\n                <td>{{data.platform}}</td>\r\n                <td>{{data.version}}</td>\r\n                <td>{{data.upgradeNum}}</td>\r\n                <td>{{data.creator}}</td>\r\n                <td>{{data.createdAt}}</td>\r\n                <td>\r\n                  <a>Publish</a>\r\n                </td>\r\n              </tr>\r\n              <tr [nzExpand]=\"data.expand\">\r\n                <td></td>\r\n                <td colspan=\"7\">\r\n                  <nz-table #innerTable [nzData]=\"innerTableData\" nzSize=\"middle\" [nzShowPagination]=\"false\">\r\n            <thead>\r\n            <tr>\r\n              <th>Date</th>\r\n              <th>Name</th>\r\n              <th>Status</th>\r\n              <th>Upgrade Status</th>\r\n              <th>Action</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let data of innerTable.data\">\r\n              <td>{{data.date}}</td>\r\n              <td>{{data.name}}</td>\r\n              <td>\r\n                <nz-badge [nzStatus]=\"'success'\" [nzText]=\"'Finished'\"></nz-badge>\r\n              </td>\r\n              <td>{{data.upgradeNum}}</td>\r\n              <td>\r\n                      <span class=\"table-operation\">\r\n                        <nz-dropdown>\r\n                          <a nz-dropdown class=\"operation\">\r\n                            Pause <i class=\"anticon anticon-down\"></i>\r\n                          </a>\r\n                          <ul nz-menu>\r\n                            <li nz-menu-item>\r\n                              <a>Action 1</a>\r\n                            </li>\r\n                            <li nz-menu-item>\r\n                              <a>Action 2</a>\r\n                            </li>\r\n                          </ul>\r\n                        </nz-dropdown>\r\n                        <a class=\"operation\">Stop</a>\r\n                        <a>More</a>\r\n                      </span>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </nz-table>\r\n          </td>\r\n          </tr>\r\n          </ng-template>\r\n          </tbody>\r\n          </nz-table>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/tables/nestingTables.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NestingTablesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let NestingTablesComponent = class NestingTablesComponent {
    constructor() {
        this.nestedTableData = [];
        this.innerTableData = [];
    }
    ngOnInit() {
        for (let i = 0; i < 3; ++i) {
            this.nestedTableData.push({
                key: i,
                name: 'Screem',
                platform: 'iOS',
                version: '10.3.4.5654',
                upgradeNum: 500,
                creator: 'Jack',
                createdAt: '2014-12-24 23:12:00',
                expand: false
            });
        }
        for (let i = 0; i < 3; ++i) {
            this.innerTableData.push({
                key: i,
                date: '2014-12-24 23:12:00',
                name: 'This is production name',
                upgradeNum: 'Upgraded: 56',
            });
        }
    }
};
NestingTablesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/components/tables/nestingTables.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
    })
], NestingTablesComponent);



/***/ }),

/***/ "./src/components/tables/selectTables.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-outer-layer-div\">\r\n  <div nz-row nzGutter=\"24\">\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\"  nzTitle=\"可选择表格\" >\r\n        <div class=\"cus-index-margin-n\">\r\n          <nz-table\r\n            #rowSelectionTable\r\n            [nzData]=\"data\"\r\n            (nzCurrentPageDataChange)=\"currentPageDataChange($event)\"\r\n            (nzPageIndexChange)=\"refreshStatus()\"\r\n            (nzPageSizeChange)=\"refreshStatus()\">\r\n            <thead>\r\n            <tr>\r\n              <th nzShowCheckbox [(nzChecked)]=\"allChecked\" [nzIndeterminate]=\"indeterminate\" (nzCheckedChange)=\"checkAll($event)\"></th>\r\n              <th>Name</th>\r\n              <th>Age</th>\r\n              <th>Address</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let data of rowSelectionTable.data\">\r\n              <td nzShowCheckbox [(nzChecked)]=\"data.checked\" [nzDisabled]=\"data.disabled\" (nzCheckedChange)=\"refreshStatus($event)\"></td>\r\n              <td>{{data.name}}</td>\r\n              <td>{{data.age}}</td>\r\n              <td>{{data.address}}</td>\r\n            </tr>\r\n            </tbody>\r\n          </nz-table>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/tables/selectTables.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectTablesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let SelectTablesComponent = class SelectTablesComponent {
    constructor() {
        this.allChecked = false;
        this.indeterminate = false;
        this.displayData = [];
        this.data = [
            {
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                checked: false,
                disabled: false
            },
            {
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
                checked: false,
                disabled: false
            },
            {
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                checked: false,
                disabled: false
            },
            {
                name: 'Disabled User',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                checked: false,
                disabled: true
            }
        ];
    }
    currentPageDataChange($event) {
        this.displayData = $event;
        this.refreshStatus();
    }
    refreshStatus() {
        const allChecked = this.displayData.filter(value => !value.disabled).every(value => value.checked === true);
        const allUnChecked = this.displayData.filter(value => !value.disabled).every(value => !value.checked);
        this.allChecked = allChecked;
        this.indeterminate = (!allChecked) && (!allUnChecked);
    }
    checkAll(value) {
        this.displayData.forEach(data => {
            if (!data.disabled) {
                data.checked = value;
            }
        });
        this.refreshStatus();
    }
    ngOnInit() {
    }
};
SelectTablesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/components/tables/selectTables.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
    })
], SelectTablesComponent);



/***/ }),

/***/ "./src/components/tables/seniorTables.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-outer-layer-div\">\r\n  <div nz-row nzGutter=\"24\">\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"高级表格\">\r\n        <div class=\"cus-index-margin-n cus-m-n\">\r\n          <button nz-button (click)=\"addRow()\" class=\"editable-add-btn\">Add</button>\r\n          <nz-table\r\n            #editRowTable\r\n            nzBordered\r\n            [nzData]=\"dataSet\">\r\n            <thead>\r\n            <tr>\r\n              <th nzWidth=\"30%\">Name</th>\r\n              <th>Age</th>\r\n              <th>Address</th>\r\n              <th>Action</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let data of editRowTable.data\">\r\n              <td>\r\n                <div class=\"editable-cell\">\r\n                  <div class=\"editable-cell-text-wrapper\">\r\n                    <ng-container *ngIf=\"!editCache[data.key].edit\">\r\n                      {{data.name}}\r\n                      <i class=\"anticon anticon-edit editable-cell-icon\" (click)=\"startEdit(data.key)\"></i>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"editCache[data.key].edit\">\r\n                      <input type=\"text\" nz-input [(ngModel)]=\"editCache[data.key].name\">\r\n                      <i class=\"anticon anticon-check editable-cell-icon-check\" (click)=\"finishEdit(data.key)\"></i>\r\n                    </ng-container>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n              <td>{{data.age}}</td>\r\n              <td>{{data.address}}</td>\r\n              <td>\r\n                <nz-popconfirm [nzTitle]=\"'Sure to delete?'\" (nzOnConfirm)=\"deleteRow(data.key)\">\r\n                  <a nz-popconfirm>Delete</a>\r\n                </nz-popconfirm>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </nz-table>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/tables/seniorTables.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeniorTablesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let SeniorTablesComponent = class SeniorTablesComponent {
    constructor() {
        this.i = 1;
        this.editCache = {};
        this.dataSet = [
            {
                key: '0',
                name: 'Edward King 0',
                age: '32',
                address: 'London, Park Lane no. 0'
            },
            {
                key: '1',
                name: 'Edward King 1',
                age: '32',
                address: 'London, Park Lane no. 1'
            }
        ];
    }
    addRow() {
        this.i++;
        this.dataSet = [...this.dataSet, {
                key: `${this.i}`,
                name: `Edward King ${this.i}`,
                age: '32',
                address: `London, Park Lane no. ${this.i}`
            }];
        this.updateEditCache();
    }
    deleteRow(i) {
        const dataSet = this.dataSet.filter(d => d.key !== i);
        this.dataSet = dataSet;
    }
    startEdit(key) {
        this.editCache[key].edit = true;
    }
    finishEdit(key) {
        this.editCache[key].edit = false;
        this.dataSet.find(item => item.key === key).name = this.editCache[key].name;
    }
    updateEditCache() {
        this.dataSet.forEach(item => {
            if (!this.editCache[item.key]) {
                this.editCache[item.key] = {
                    edit: false,
                    name: item.name
                };
            }
        });
    }
    ngOnInit() {
        this.updateEditCache();
    }
};
SeniorTablesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/components/tables/seniorTables.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
    })
], SeniorTablesComponent);



/***/ }),

/***/ "./src/components/tables/soTables.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-outer-layer-div\">\r\n  <div nz-row nzGutter=\"24\">\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"选择和操作表格\">\r\n        <div class=\"cus-index-margin-n\">\r\n          <div style=\"margin-bottom: 16px;\">\r\n            <button nz-button [disabled]=\"disabledButton\" [nzType]=\"'primary'\" [nzLoading]=\"operating\"\r\n                    (click)=\"operateData()\">\r\n              Reload\r\n            </button>\r\n            <span style=\"margin-left: 8px;\" *ngIf=\"checkedNumber\">Selected {{checkedNumber}} items</span>\r\n          </div>\r\n          <nz-table\r\n            #rowSelectionTable\r\n            [nzData]=\"dataSet\"\r\n            (nzCurrentPageDataChange)=\"currentPageDataChange($event)\"\r\n            (nzPageIndexChange)=\"refreshStatus()\"\r\n            (nzPageSizeChange)=\"refreshStatus()\">\r\n            <thead>\r\n            <tr>\r\n              <th nzShowCheckbox [(nzChecked)]=\"allChecked\" [nzIndeterminate]=\"indeterminate\"\r\n                  (nzCheckedChange)=\"checkAll($event)\"></th>\r\n              <th>Name</th>\r\n              <th>Age</th>\r\n              <th>Address</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let data of rowSelectionTable.data\">\r\n              <td nzShowCheckbox [(nzChecked)]=\"data.checked\" (nzCheckedChange)=\"refreshStatus($event)\"></td>\r\n              <td>{{data.name}}</td>\r\n              <td>{{data.age}}</td>\r\n              <td>{{data.address}}</td>\r\n            </tr>\r\n            </tbody>\r\n          </nz-table>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/tables/soTables.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoTablesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let SoTablesComponent = class SoTablesComponent {
    constructor() {
        this.allChecked = false;
        this.disabledButton = true;
        this.checkedNumber = 0;
        this.displayData = [];
        this.operating = false;
        this.dataSet = [];
        this.indeterminate = false;
    }
    currentPageDataChange($event) {
        this.displayData = $event;
    }
    refreshStatus() {
        const allChecked = this.displayData.every(value => value.checked === true);
        const allUnChecked = this.displayData.every(value => !value.checked);
        this.allChecked = allChecked;
        this.indeterminate = (!allChecked) && (!allUnChecked);
        this.disabledButton = !this.dataSet.some(value => value.checked);
        this.checkedNumber = this.dataSet.filter(value => value.checked).length;
    }
    checkAll(value) {
        this.displayData.forEach(data => data.checked = value);
        this.refreshStatus();
    }
    operateData() {
        this.operating = true;
        setTimeout(_ => {
            this.dataSet.forEach(value => value.checked = false);
            this.refreshStatus();
            this.operating = false;
        }, 1000);
    }
    ngOnInit() {
        for (let i = 0; i < 46; i++) {
            this.dataSet.push({
                name: `Edward King ${i}`,
                age: 32,
                address: `London, Park Lane no. ${i}`,
                checked: false
            });
        }
    }
};
SoTablesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/components/tables/soTables.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
    })
], SoTablesComponent);



/***/ }),

/***/ "./src/components/tables/ssTables.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-outer-layer-div\">\r\n  <div nz-row nzGutter=\"24\">\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"可控的筛选和排序表格\">\r\n        <div class=\"cus-index-margin-n\">\r\n          <div class=\"table-operations\">\r\n            <button nz-button (click)=\"sort('age','descend')\">Sort age</button>\r\n            <button nz-button (click)=\"resetFilters()\">Clear filters</button>\r\n            <button nz-button (click)=\"resetSortAndFilters()\">Clear filters and sorters</button>\r\n          </div>\r\n          <nz-table #filterTable [nzData]=\"displayData\">\r\n            <thead>\r\n            <tr>\r\n              <th nzShowSort nzShowFilter [(nzSort)]=\"sortMap.name\" (nzSortChange)=\"sort('name',$event)\"\r\n                  [nzFilters]=\"filterNameList\" (nzFilterChange)=\"search($event,searchAddressList)\">Name\r\n              </th>\r\n              <th nzShowSort [(nzSort)]=\"sortMap.age\" (nzSortChange)=\"sort('age',$event)\">Age</th>\r\n              <th nzShowSort nzShowFilter [(nzSort)]=\"sortMap.address\" (nzSortChange)=\"sort('address',$event)\"\r\n                  [nzFilters]=\"filterAddressList\" (nzFilterChange)=\"search(searchNameList,$event)\">Address\r\n              </th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let data of filterTable.data\">\r\n              <td>{{data.name}}</td>\r\n              <td>{{data.age}}</td>\r\n              <td>{{data.address}}</td>\r\n            </tr>\r\n            </tbody>\r\n          </nz-table>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/tables/ssTables.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SsTablesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let SsTablesComponent = class SsTablesComponent {
    constructor() {
        this.searchNameList = [];
        this.searchAddressList = [];
        this.filterNameList = [
            { text: 'Joe', value: 'Joe' },
            { text: 'Jim', value: 'Jim' }
        ];
        this.filterAddressList = [
            { text: 'London', value: 'London' },
            { text: 'Sidney', value: 'Sidney' }
        ];
        this.sortMap = {
            name: null,
            age: null,
            address: null
        };
        this.sortName = null;
        this.sortValue = null;
        this.data = [
            {
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park'
            },
            {
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park'
            },
            {
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park'
            },
            {
                name: 'Jim Red',
                age: 32,
                address: 'London No. 2 Lake Park'
            }
        ];
        this.displayData = [...this.data];
    }
    sort(sortName, value) {
        this.sortName = sortName;
        this.sortValue = value;
        for (const key in this.sortMap) {
            this.sortMap[key] = (key === sortName ? value : null);
        }
        this.search(this.searchNameList, this.searchAddressList);
    }
    search(searchNameList, searchAddressList) {
        this.searchNameList = searchNameList;
        this.searchAddressList = searchAddressList;
        const filterFunc = item => (this.searchAddressList.length ? this.searchAddressList.some(address => item.address.indexOf(address) !== -1) : true) && (this.searchNameList.length ? this.searchNameList.some(name => item.name.indexOf(name) !== -1) : true);
        const data = this.data.filter(item => filterFunc(item));
        if (this.sortName) {
            this.displayData = data.sort((a, b) => (this.sortValue === 'ascend') ? (a[this.sortName] > b[this.sortName] ? 1 : -1) : (b[this.sortName] > a[this.sortName] ? 1 : -1));
        }
        else {
            this.displayData = data;
        }
    }
    resetFilters() {
        this.filterNameList = [
            { text: 'Joe', value: 'Joe' },
            { text: 'Jim', value: 'Jim' }
        ];
        this.filterAddressList = [
            { text: 'London', value: 'London' },
            { text: 'Sidney', value: 'Sidney' }
        ];
        this.searchNameList = [];
        this.searchAddressList = [];
        this.search(this.searchNameList, this.searchAddressList);
    }
    resetSortAndFilters() {
        this.sortName = null;
        this.sortValue = null;
        this.sortMap = {
            name: null,
            age: null,
            address: null
        };
        this.resetFilters();
        this.search(this.searchNameList, this.searchAddressList);
    }
    ngOnInit() {
    }
};
SsTablesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/components/tables/ssTables.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
    })
], SsTablesComponent);



/***/ }),

/***/ "./src/components/ui/autocompletes.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-outer-layer-div\">\r\n  <div nz-row nzGutter=\"24\">\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"基本\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <div class=\"example-input\">\r\n            <input placeholder=\"input here\" nz-input [(ngModel)]=\"inputValue\" (input)=\"onInput($event.target?.value)\"\r\n                   [nzAutocomplete]=\"auto\">\r\n            <nz-autocomplete nzBackfill #auto>\r\n              <nz-auto-option *ngFor=\"let option of options\" [nzValue]=\"option\">\r\n                {{option}}\r\n              </nz-auto-option>\r\n            </nz-autocomplete>\r\n          </div>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"自定义\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <div class=\"example-input\">\r\n            <input placeholder=\"input here\" nz-input [(ngModel)]=\"inputValueCus\" (ngModelChange)=\"onChange($event)\"\r\n                   [nzAutocomplete]=\"autoCus\">\r\n            <nz-autocomplete #autoCus>\r\n              <nz-auto-option *ngFor=\"let option of optionsCus\" [nzValue]=\"option\">{{option}}</nz-auto-option>\r\n            </nz-autocomplete>\r\n          </div>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"查询\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-input-group nzSize=\"large\" [nzSuffix]=\"suffixIcon\">\r\n            <input placeholder=\"input here\" nz-input [(ngModel)]=\"inputValueSer\" (ngModelChange)=\"onChangeSer($event)\"\r\n                   [nzAutocomplete]=\"autoSer\"/>\r\n          </nz-input-group>\r\n          <ng-template #suffixIcon>\r\n            <i class=\"anticon anticon-search\"></i>\r\n          </ng-template>\r\n          <nz-autocomplete #autoSer>\r\n            <nz-auto-optgroup *ngFor=\"let group of optionGroups\" [nzLabel]=\"groupTitle\">\r\n              <ng-template #groupTitle>\r\n            <span>{{group.title}}\r\n              <a class=\"more-link\" href=\"https://www.google.com/search?q=ng+zorro\" target=\"_blank\">更多</a>\r\n            </span>\r\n              </ng-template>\r\n              <nz-auto-option *ngFor=\"let option of group.children\" [nzLabel]=\"option.title\" [nzValue]=\"option\">\r\n                {{option.title}}\r\n                <span class=\"certain-search-item-count\">{{option.count}} 人  关注</span>\r\n              </nz-auto-option>\r\n            </nz-auto-optgroup>\r\n          </nz-autocomplete>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/ui/autocompletes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompletesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AutocompletesComponent = class AutocompletesComponent {
    constructor() {
        this.options = [];
        this.optionsCus = [];
    }
    onChangeSer(value) {
        console.log(value);
    }
    onInput(value) {
        this.options = value ? [
            value,
            value + value,
            value + value + value
        ] : [];
    }
    onChange(value) {
        if (!value || value.indexOf('@') >= 0) {
            this.optionsCus = [];
        }
        else {
            this.optionsCus = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
        }
    }
    ngOnInit() {
        setTimeout(() => {
            this.optionGroups = [{
                    title: '话题',
                    children: [{
                            title: 'AntDesign',
                            count: 10000
                        }, {
                            title: 'AntDesign UI',
                            count: 10600
                        }]
                }, {
                    title: '问题',
                    children: [{
                            title: 'AntDesign UI 有多好',
                            count: 60100
                        }, {
                            title: 'AntDesign 是啥',
                            count: 30010
                        }]
                }, {
                    title: '文章',
                    children: [{
                            title: 'AntDesign 是一个设计语言',
                            count: 100000
                        }]
                }];
        }, 1000);
    }
};
AutocompletesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/components/ui/autocompletes.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
    })
], AutocompletesComponent);



/***/ }),

/***/ "./src/components/ui/buttons.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-outer-layer-div\">\r\n  <div nz-row nzGutter=\"24\">\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\"  nzTitle=\"基本按钮\" >\r\n        <div class=\"cus-index-margin-e\">\r\n          <button nz-button nzType=\"primary\">Primary</button>\r\n          <button nz-button nzType=\"default\">Default</button>\r\n          <button nz-button nzType=\"dashed\">Dashed</button>\r\n          <button nz-button nzType=\"danger\">Danger</button>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\"  nzTitle=\"图标按钮\" >\r\n        <div class=\"cus-index-margin-e\">\r\n          <button nz-button nzType=\"primary\" nzShape=\"circle\"><i class=\"anticon anticon-search\"></i></button>\r\n          <button nz-button nzType=\"primary\"><i class=\"anticon anticon-search\"></i>Search</button>\r\n          <button nz-button nzType=\"default\" nzShape=\"circle\"><i class=\"anticon anticon-search\"></i></button>\r\n          <button nz-button nzType=\"default\"><i class=\"anticon anticon-search\"></i>Search</button>\r\n          <br>\r\n          <button nz-button nzType=\"default\" nzShape=\"circle\"><i class=\"anticon anticon-search\"></i></button>\r\n          <button nz-button nzType=\"default\"><i class=\"anticon anticon-search\"></i>Search</button>\r\n          <button nz-button nzType=\"dashed\" nzShape=\"circle\"><i class=\"anticon anticon-search\"></i></button>\r\n          <button nz-button nzType=\"dashed\"><i class=\"anticon anticon-search\"></i>Search</button>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\"  nzTitle=\"不可用状态\" >\r\n        <div class=\"cus-index-margin-e\">\r\n          <button nz-button nzType=\"primary\">Primary</button>\r\n          <button nz-button nzType=\"primary\" disabled>Primary(disabled)</button>\r\n          <br>\r\n          <button nz-button nzType=\"default\">Default</button>\r\n          <button nz-button nzType=\"default\" disabled>Default(disabled)</button>\r\n          <br>\r\n          <button nz-button nzGhost>Ghost</button>\r\n          <button nz-button nzGhost disabled>Ghost(disabled)</button>\r\n          <br>\r\n          <button nz-button nzType=\"dashed\">Dashed</button>\r\n          <button nz-button nzType=\"dashed\" disabled>Dashed(disabled)</button>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\"  nzTitle=\"多按钮组合\" >\r\n        <div class=\"cus-index-margin-e\">\r\n          <button nz-button nzType=\"primary\">primary</button>\r\n          <button nz-button nzType=\"default\">secondary</button>\r\n          <nz-dropdown>\r\n            <button nz-button nz-dropdown>Actions<i class=\"anticon anticon-down\"></i></button>\r\n            <ul nz-menu>\r\n              <li nz-menu-item>\r\n                <a>1st item</a>\r\n              </li>\r\n              <li nz-menu-item>\r\n                <a>2nd item</a>\r\n              </li>\r\n              <li nz-menu-item>\r\n                <a>3rd item</a>\r\n              </li>\r\n            </ul>\r\n          </nz-dropdown>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\"  nzTitle=\"按钮组合\" >\r\n        <div class=\"cus-index-margin-e\">\r\n          <h4>Basic</h4>\r\n          <nz-button-group>\r\n            <button nz-button>Cancel</button>\r\n            <button nz-button nzType=\"primary\">OK</button>\r\n          </nz-button-group>\r\n          <nz-button-group>\r\n            <button nz-button nzType=\"default\" disabled>L</button>\r\n            <button nz-button nzType=\"default\" disabled>M</button>\r\n            <button nz-button nzType=\"default\" disabled>R</button>\r\n          </nz-button-group>\r\n          <nz-button-group>\r\n            <button nz-button nzType=\"primary\" disabled>L</button>\r\n            <button nz-button nzType=\"default\" disabled>M</button>\r\n            <button nz-button nzType=\"default\">M</button>\r\n            <button nz-button nzType=\"dashed\" disabled>R</button>\r\n          </nz-button-group>\r\n          <h4>With Icon</h4>\r\n          <nz-button-group>\r\n            <button nz-button nzType=\"primary\"><i class=\"anticon anticon-left\"></i> Go back</button>\r\n            <button nz-button nzType=\"primary\">Go forward<i class=\"anticon anticon-right\"></i></button>\r\n          </nz-button-group>\r\n          <nz-button-group>\r\n            <button nz-button nzType=\"primary\"><i class=\"anticon anticon-cloud\"></i></button>\r\n            <button nz-button nzType=\"primary\"><i class=\"anticon anticon-cloud-download\"></i></button>\r\n          </nz-button-group>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\"  nzTitle=\"幽灵按钮\" >\r\n        <div class=\"cus-index-margin-e\">\r\n          <div style=\"background: rgb(190, 200, 200);padding: 26px 16px 16px;\">\r\n            <button nz-button nzType=\"primary\" nzGhost>Primary</button>\r\n            <button nz-button nzType=\"default\" nzGhost>Default</button>\r\n            <button nz-button nzType=\"dashed\" nzGhost>Dashed</button>\r\n            <button nz-button nzType=\"danger\" nzGhost>Danger</button>\r\n          </div>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/ui/buttons.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let ButtonsComponent = class ButtonsComponent {
    ngOnInit() {
    }
};
ButtonsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/components/ui/buttons.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
    })
], ButtonsComponent);



/***/ }),

/***/ "./src/components/ui/calendarR.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/components/ui/calendarR.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarRComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let CalendarRComponent = class CalendarRComponent {
    ngOnInit() {
    }
};
CalendarRComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/components/ui/calendarR.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
    })
], CalendarRComponent);



/***/ }),

/***/ "./src/components/ui/carouselR.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-outer-layer-div\">\r\n  <div nz-row nzGutter=\"24\">\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"基本\">\r\n        <div class=\"cus-index-margin-e cus-car\">\r\n          <nz-carousel [nzEffect]=\"effect\">\r\n            <div nz-carousel-content *ngFor=\"let index of arrayCus\"><h3>{{index}}</h3></div>\r\n          </nz-carousel>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"垂直\">\r\n        <div class=\"cus-index-margin-e cus-car\">\r\n          <nz-carousel nzVertical>\r\n            <div nz-carousel-content *ngFor=\"let index of array\"><h3>{{index}}</h3></div>\r\n          </nz-carousel>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"渐显\">\r\n        <div class=\"cus-index-margin-e cus-car\">\r\n          <nz-carousel [nzEffect]=\"'fade'\">\r\n            <div nz-carousel-content *ngFor=\"let index of arrayTh\"><h3>{{index}}</h3></div>\r\n          </nz-carousel>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"自动切换\">\r\n        <div class=\"cus-index-margin-e cus-car\">\r\n          <nz-carousel nzAutoPlay>\r\n            <div nz-carousel-content *ngFor=\"let index of arrayRa\"><h3>{{index}}</h3></div>\r\n          </nz-carousel>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/ui/carouselR.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselRComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let CarouselRComponent = class CarouselRComponent {
    constructor() {
        this.arrayCus = [1, 2, 3, 4];
        this.effect = 'scrollx';
        this.array = [1, 2, 3];
        this.arrayTh = [1, 2, 3, 4];
        this.arrayRa = [1, 2, 3, 4];
    }
    ngOnInit() {
        setTimeout(() => {
            this.effect = 'fade';
        }, 3000);
    }
};
CarouselRComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/components/ui/carouselR.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
    })
], CarouselRComponent);



/***/ }),

/***/ "./src/components/ui/cascaders.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-outer-layer-div\">\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/ui/cascaders.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CascadersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let CascadersComponent = class CascadersComponent {
    ngOnInit() {
    }
};
CascadersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/components/ui/cascaders.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
    })
], CascadersComponent);



/***/ }),

/***/ "./src/components/ui/checkboxes.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-outer-layer-div\">\r\n  <div nz-row nzGutter=\"24\">\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"基本\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <label nz-checkbox [(ngModel)]=\"checked\">Checkbox</label>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"不可用\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <label nz-checkbox nzDisabled [ngModel]=\"false\"></label>\r\n          <br>\r\n          <label nz-checkbox nzDisabled [ngModel]=\"true\"></label>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"可控\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <p style=\"margin-bottom: 20px;\">\r\n            <label nz-checkbox [(ngModel)]=\"isCheckedButton\" [nzDisabled]=\"isDisabledButton\">\r\n              {{ isCheckedButton ? 'Checked' : 'Unchecked' }} - {{ isDisabledButton ? 'Disabled' : 'Enabled' }}\r\n            </label>\r\n          </p>\r\n          <p>\r\n            <button nz-button [nzType]=\"'primary'\" (click)=\"checkButton()\" [nzSize]=\"'small'\">\r\n              {{ !isCheckedButton ? 'Checked' : 'Unchecked' }}\r\n            </button>\r\n            <button nz-button [nzType]=\"'primary'\" (click)=\"disableButton()\" [nzSize]=\"'small'\">\r\n              {{ isDisabledButton ? 'Enabled' : 'Disabled' }}\r\n            </button>\r\n          </p>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"多选组\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-checkbox-group [(ngModel)]=\"checkOptionsOne\" (ngModelChange)=\"log(checkOptionsOne)\"></nz-checkbox-group>\r\n          <br>\r\n          <br>\r\n          <nz-checkbox-group [(ngModel)]=\"checkOptionsTwo\" (ngModelChange)=\"log(checkOptionsTwo)\"></nz-checkbox-group>\r\n          <br>\r\n          <br>\r\n          <nz-checkbox-group [(ngModel)]=\"checkOptionsThree\"\r\n                             (ngModelChange)=\"log(checkOptionsThree)\"></nz-checkbox-group>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"全选\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <div style=\"border-bottom: 1px solid rgb(233, 233, 233);\">\r\n            <label nz-checkbox [(ngModel)]=\"allChecked\" (ngModelChange)=\"updateAllChecked()\" [nzIndeterminate]=\"indeterminate\">\r\n              Check all\r\n            </label>\r\n          </div>\r\n          <br>\r\n          <nz-checkbox-group [(ngModel)]=\"checkOptionsOneCus\" (ngModelChange)=\"updateSingleChecked()\"></nz-checkbox-group>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/ui/checkboxes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let CheckboxesComponent = class CheckboxesComponent {
    constructor() {
        this.checked = true;
        this.isCheckedButton = true;
        this.isDisabledButton = false;
        this.checkOptionsOne = [
            { label: 'Apple', value: 'Apple', checked: true },
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange' }
        ];
        this.checkOptionsTwo = [
            { label: 'Apple', value: 'Apple' },
            { label: 'Pear', value: 'Pear', checked: true },
            { label: 'Orange', value: 'Orange' }
        ];
        this.checkOptionsThree = [
            { label: 'Apple', value: 'Apple', disabled: true, checked: true },
            { label: 'Pear', value: 'Pear', disabled: true },
            { label: 'Orange', value: 'Orange' }
        ];
        this.allChecked = false;
        this.indeterminate = true;
        this.checkOptionsOneCus = [
            { label: 'Apple', value: 'Apple', checked: true },
            { label: 'Pear', value: 'Pear', checked: false },
            { label: 'Orange', value: 'Orange', checked: false }
        ];
    }
    updateAllChecked() {
        this.indeterminate = false;
        if (this.allChecked) {
            this.checkOptionsOneCus.forEach(item => item.checked = true);
        }
        else {
            this.checkOptionsOneCus.forEach(item => item.checked = false);
        }
    }
    updateSingleChecked() {
        if (this.checkOptionsOneCus.every(item => item.checked === false)) {
            this.allChecked = false;
            this.indeterminate = false;
        }
        else if (this.checkOptionsOneCus.every(item => item.checked === true)) {
            this.allChecked = true;
            this.indeterminate = false;
        }
        else {
            this.indeterminate = true;
        }
    }
    ngOnInit() {
    }
    log(value) {
        console.log(value);
    }
    checkButton() {
        this.isCheckedButton = !this.isCheckedButton;
    }
    disableButton() {
        this.isDisabledButton = !this.isDisabledButton;
    }
};
CheckboxesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/components/ui/checkboxes.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
    })
], CheckboxesComponent);



/***/ }),

/***/ "./src/components/ui/datePickers.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-outer-layer-div\">\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/ui/datePickers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePickersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let DatePickersComponent = class DatePickersComponent {
    constructor() {
        this.dateFormat = 'yyyy/MM/dd';
        this.monthFormat = 'yyyy/MM';
    }
    ngOnInit() {
    }
};
DatePickersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/components/ui/datePickers.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
    })
], DatePickersComponent);



/***/ }),

/***/ "./src/components/ui/dropdown.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-outer-layer-div\">\r\n  <div nz-row nzGutter=\"24\">\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"基本\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-dropdown>\r\n            <a nz-dropdown>\r\n              Hover me <i class=\"anticon anticon-down\"></i>\r\n            </a>\r\n            <ul nz-menu nzSelectable>\r\n              <li nz-menu-item>\r\n                <a>1st menu item</a>\r\n              </li>\r\n              <li nz-menu-item>\r\n                <a>2nd menu item</a>\r\n              </li>\r\n              <li nz-menu-item>\r\n                <a>3rd menu item</a>\r\n              </li>\r\n            </ul>\r\n          </nz-dropdown>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"弹出位置\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-dropdown [nzPlacement]=\"'bottomLeft'\">\r\n            <button nz-button nz-dropdown>bottomLeft</button>\r\n            <ul nz-menu>\r\n              <li nz-menu-item>\r\n                <a>1st menu item length</a>\r\n              </li>\r\n              <li nz-menu-item>\r\n                <a>2nd menu item length</a>\r\n              </li>\r\n              <li nz-menu-item>\r\n                <a>3rd menu item length</a>\r\n              </li>\r\n            </ul>\r\n          </nz-dropdown>\r\n          <nz-dropdown [nzPlacement]=\"'bottomCenter'\">\r\n            <button nz-button nz-dropdown>bottomCenter</button>\r\n            <ul nz-menu>\r\n              <li nz-menu-item>\r\n                <a>1st menu item length</a>\r\n              </li>\r\n              <li nz-menu-item>\r\n                <a>2nd menu item length</a>\r\n              </li>\r\n              <li nz-menu-item>\r\n                <a>3rd menu item length</a>\r\n              </li>\r\n            </ul>\r\n          </nz-dropdown>\r\n          <nz-dropdown [nzPlacement]=\"'bottomRight'\">\r\n            <button nz-button nz-dropdown>bottomRight</button>\r\n            <ul nz-menu>\r\n              <li nz-menu-item>\r\n                <a>1st menu item length</a>\r\n              </li>\r\n              <li nz-menu-item>\r\n                <a>2nd menu item length</a>\r\n              </li>\r\n              <li nz-menu-item>\r\n                <a>3rd menu item length</a>\r\n              </li>\r\n            </ul>\r\n          </nz-dropdown>\r\n          <nz-dropdown [nzPlacement]=\"'topLeft'\">\r\n            <button nz-button nz-dropdown>topLeft</button>\r\n            <ul nz-menu>\r\n              <li nz-menu-item>\r\n                <a>1st menu item length</a>\r\n              </li>\r\n              <li nz-menu-item>\r\n                <a>2nd menu item length</a>\r\n              </li>\r\n              <li nz-menu-item>\r\n                <a>3rd menu item length</a>\r\n              </li>\r\n            </ul>\r\n          </nz-dropdown>\r\n          <nz-dropdown [nzPlacement]=\"'topCenter'\">\r\n            <button nz-button nz-dropdown>topCenter</button>\r\n            <ul nz-menu>\r\n              <li nz-menu-item>\r\n                <a>1st menu item length</a>\r\n              </li>\r\n              <li nz-menu-item>\r\n                <a>2nd menu item length</a>\r\n              </li>\r\n              <li nz-menu-item>\r\n                <a>3rd menu item length</a>\r\n              </li>\r\n            </ul>\r\n          </nz-dropdown>\r\n          <nz-dropdown [nzPlacement]=\"'topRight'\">\r\n            <button nz-button nz-dropdown>topRight</button>\r\n            <ul nz-menu>\r\n              <li nz-menu-item>\r\n                <a>1st menu item length</a>\r\n              </li>\r\n              <li nz-menu-item>\r\n                <a>2nd menu item length</a>\r\n              </li>\r\n              <li nz-menu-item>\r\n                <a>3rd menu item length</a>\r\n              </li>\r\n            </ul>\r\n          </nz-dropdown>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"其他元素\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-dropdown>\r\n            <a nz-dropdown>\r\n              Hover me <i class=\"anticon anticon-down\"></i>\r\n            </a>\r\n            <ul nz-menu>\r\n              <li nz-menu-item>\r\n                <a>1st menu item</a>\r\n              </li>\r\n              <li nz-menu-item>\r\n                <a>2nd menu item</a>\r\n              </li>\r\n              <li nz-menu-divider></li>\r\n              <li nz-menu-item nzDisabled>3rd menu item（disabled）</li>\r\n            </ul>\r\n          </nz-dropdown>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"触发方式\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-dropdown [nzTrigger]=\"'click'\">\r\n            <a nz-dropdown>\r\n              Click me <i class=\"anticon anticon-down\"></i>\r\n            </a>\r\n            <ul nz-menu>\r\n              <li nz-menu-item>1st menu item</li>\r\n              <li nz-menu-item>2nd menu item</li>\r\n              <li nz-menu-divider></li>\r\n              <li nz-menu-item nzDisabled>disabled menu item</li>\r\n              <li nz-submenu>\r\n                <span title>sub menu</span>\r\n                <ul>\r\n                  <li nz-menu-item>3rd menu item</li>\r\n                  <li nz-menu-item>4th menu item</li>\r\n                </ul>\r\n              </li>\r\n              <li nz-submenu nzDisabled>\r\n                <span title>disabled sub menu</span>\r\n                <ul>\r\n                  <li nz-menu-item>3rd menu item</li>\r\n                  <li nz-menu-item>4th menu item</li>\r\n                </ul>\r\n              </li>\r\n            </ul>\r\n          </nz-dropdown>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"触发事件\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-dropdown>\r\n            <a nz-dropdown>\r\n              Hover me, Click menu item <i class=\"anticon anticon-down\"></i>\r\n            </a>\r\n            <ul nz-menu>\r\n              <li nz-menu-item (click)=\"log('1st menu item')\">1st menu item</li>\r\n              <li nz-menu-item (click)=\"log('2nd menu item')\">2nd menu item</li>\r\n              <li nz-menu-item (click)=\"log('3rd menu item')\">3rd menu item</li>\r\n            </ul>\r\n          </nz-dropdown>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"带下拉框\">\r\n        <div class=\"cus-index-margin-e\">\r\n            <div style=\"height: 28px;\">\r\n              <nz-dropdown>\r\n                <button nz-button nz-dropdown><span>Button</span> <i class=\"anticon anticon-down\"></i></button>\r\n                <ul nz-menu>\r\n                  <li nz-menu-item>\r\n                    <a>1st menu item</a>\r\n                  </li>\r\n                  <li nz-menu-item>\r\n                    <a>2nd menu item</a>\r\n                  </li>\r\n                  <li nz-menu-item>\r\n                    <a>3rd menu item</a>\r\n                  </li>\r\n                </ul>\r\n              </nz-dropdown>\r\n            </div>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"右键菜单\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <div style=\"background: rgb(190, 200, 200); padding: 32px;text-align: center\" (contextmenu)=\"contextMenu($event,template)\">\r\n            <ng-template #template>\r\n              <ul nz-menu nzInDropDown (nzClick)=\"close($event)\">\r\n                <li nz-menu-item>1st menu item</li>\r\n                <li nz-menu-item>2nd menu item</li>\r\n                <li nz-menu-item nzDisabled>disabled menu item</li>\r\n                <li nz-submenu>\r\n                  <span title>sub menu</span>\r\n                  <ul>\r\n                    <li nz-menu-item>3rd menu item</li>\r\n                    <li nz-menu-item>4th menu item</li>\r\n                  </ul>\r\n                </li>\r\n                <li nz-submenu nzDisabled>\r\n                  <span title>disabled sub menu</span>\r\n                  <ul>\r\n                    <li nz-menu-item>3rd menu item</li>\r\n                    <li nz-menu-item>4th menu item</li>\r\n                  </ul>\r\n                </li>\r\n              </ul>\r\n            </ng-template>\r\n            <span style=\"color:#fff;font-size: 14px;\">Context Menu</span>\r\n          </div>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/ui/dropdown.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__ = __webpack_require__("./node_modules/ng-zorro-antd/esm2015/antd.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let DropdownComponent = class DropdownComponent {
    constructor(nzDropdownService) {
        this.nzDropdownService = nzDropdownService;
    }
    contextMenu($event, template) {
        this.dropdown = this.nzDropdownService.create($event, template);
    }
    close(e) {
        console.log(e);
        this.dropdown.close();
    }
    ngOnInit() {
    }
    log(data) {
        console.log(data);
    }
    logEvent(e) {
        console.log('click dropdown button');
    }
};
DropdownComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/components/ui/dropdown.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["c" /* NzDropdownService */]])
], DropdownComponent);



/***/ }),

/***/ "./src/components/ui/inputs.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-outer-layer-div\">\r\n  <div nz-row nzGutter=\"24\">\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"基本\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <input nz-input placeholder=\"Basic usage\" [(ngModel)]=\"value\">\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"前置后置标签\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <div style=\"margin-bottom: 16px;\">\r\n            <nz-input-group nzAddOnBefore=\"Http://\" nzAddOnAfter=\".com\">\r\n              <input type=\"text\" nz-input [(ngModel)]=\"inputValue\">\r\n            </nz-input-group>\r\n          </div>\r\n          <div style=\"margin-bottom: 16px;\">\r\n            <nz-input-group [nzAddOnBefore]=\"addOnBeforeTemplate\" [nzAddOnAfter]=\"addOnAfterTemplate\">\r\n              <input type=\"text\" nz-input [(ngModel)]=\"inputValue\">\r\n            </nz-input-group>\r\n            <ng-template #addOnBeforeTemplate>\r\n              <nz-select [ngModel]=\"'Http://'\">\r\n                <nz-option [nzLabel]=\"'Http://'\" [nzValue]=\"'Http://'\"></nz-option>\r\n                <nz-option [nzLabel]=\"'Https://'\" [nzValue]=\"'Https://'\"></nz-option>\r\n              </nz-select>\r\n            </ng-template>\r\n            <ng-template #addOnAfterTemplate>\r\n              <nz-select [ngModel]=\"'.com'\">\r\n                <nz-option [nzLabel]=\"'.com'\" [nzValue]=\"'.com'\"></nz-option>\r\n                <nz-option [nzLabel]=\"'.jp'\" [nzValue]=\"'.jp'\"></nz-option>\r\n                <nz-option [nzLabel]=\"'.cn'\" [nzValue]=\"'.cn'\"></nz-option>\r\n                <nz-option [nzLabel]=\"'.org'\" [nzValue]=\"'.org'\"></nz-option>\r\n              </nz-select>\r\n            </ng-template>\r\n          </div>\r\n          <div style=\"margin-bottom: 16px;\">\r\n            <nz-input-group nzAddOnAfterIcon=\"anticon anticon-setting\">\r\n              <input type=\"text\" nz-input [(ngModel)]=\"inputValue\">\r\n            </nz-input-group>\r\n          </div>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"输入框组合\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-input-group [nzSize]=\"'large'\">\r\n            <div nz-col nzSpan=\"4\">\r\n              <input type=\"text\" nz-input [ngModel]=\"'0571'\">\r\n            </div>\r\n            <div nz-col nzSpan=\"8\">\r\n              <input type=\"text\" nz-input [ngModel]=\"'26888888'\">\r\n            </div>\r\n          </nz-input-group>\r\n          <br>\r\n          <nz-input-group nzCompact>\r\n            <input type=\"text\" nz-input [ngModel]=\"'0571'\" style=\"width: 20%;\">\r\n            <input type=\"text\" nz-input [ngModel]=\"'26888888'\" style=\"width:30%;\">\r\n          </nz-input-group>\r\n          <br>\r\n          <nz-input-group nzCompact>\r\n            <nz-select [ngModel]=\"'Zhejiang'\">\r\n              <nz-option [nzLabel]=\"'Zhejiang'\" [nzValue]=\"'Zhejiang'\"></nz-option>\r\n              <nz-option [nzLabel]=\"'Jiangsu'\" [nzValue]=\"'Jiangsu'\"></nz-option>\r\n            </nz-select>\r\n            <input type=\"text\" nz-input [ngModel]=\"'Xihu District, Hangzhou'\" style=\"width:50%;\">\r\n          </nz-input-group>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"搜索框\">\r\n        <div>\r\n          <nz-input-group nzSuffixIcon=\"anticon anticon-search\">\r\n            <input type=\"text\" nz-input placeholder=\"input search text\">\r\n          </nz-input-group>\r\n          <br>\r\n          <br>\r\n          <nz-input-group nzSearch [nzSuffix]=\"suffixIconButton\">\r\n            <input type=\"text\" nz-input placeholder=\"input search text\">\r\n          </nz-input-group>\r\n          <ng-template #suffixIconButton>\r\n            <button nz-button nzType=\"primary\" nzSearch><i class=\"anticon anticon-search\"></i></button>\r\n          </ng-template>\r\n          <br>\r\n          <br>\r\n          <nz-input-group nzSearch nzSize=\"large\" [nzSuffix]=\"suffixButton\">\r\n            <input type=\"text\" nz-input placeholder=\"input search text\">\r\n          </nz-input-group>\r\n          <ng-template #suffixButton>\r\n            <button nz-button nzType=\"primary\" nzSize=\"large\" nzSearch>Search</button>\r\n          </ng-template>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"文本域\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <textarea row=\"4\" nz-input [(ngModel)]=\"inputValueTe\"></textarea>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"格式化数字框\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-input-number [(ngModel)]=\"demoValue\" [nzMin]=\"1\" [nzMax]=\"100\" [nzStep]=\"1\"\r\n                           [nzFormatter]=\"formatterDollar\" [nzParser]=\"parserDollar\"></nz-input-number>\r\n          <nz-input-number [(ngModel)]=\"demoValue\" [nzMin]=\"1\" [nzMax]=\"100\" [nzStep]=\"1\"\r\n                           [nzFormatter]=\"formatterPercent\" [nzParser]=\"parserPercent\"></nz-input-number>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/ui/inputs.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let InputsComponent = class InputsComponent {
    constructor() {
        this.inputValue = 'my site';
        this.demoValue = 100;
        this.formatterPercent = value => `${value} %`;
        this.parserPercent = value => value.replace(' %', '');
        this.formatterDollar = value => `$ ${value}`;
        this.parserDollar = value => value.replace('$ ', '');
    }
    ngOnInit() {
    }
};
InputsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/components/ui/inputs.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
    })
], InputsComponent);



/***/ }),

/***/ "./src/components/ui/paginations.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-outer-layer-div\">\r\n  <div nz-row nzGutter=\"24\">\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"基本\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-pagination [nzPageIndex]=\"1\" [nzTotal]=\"50\"></nz-pagination>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"改变\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-pagination [nzPageIndex]=\"3\" [nzTotal]=\"500\" nzShowSizeChanger [nzPageSize]=\"10\"></nz-pagination>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"跳转\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-pagination [nzPageIndex]=\"2\" [nzTotal]=\"500\" nzShowQuickJumper></nz-pagination>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"页码\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-pagination [nzPageIndex]=\"1\" [nzTotal]=\"85\" [nzPageSize]=\"20\"\r\n                         [nzShowTotal]=\"totalTemplate\"></nz-pagination>\r\n          <br>\r\n          <nz-pagination [nzPageIndex]=\"1\" [nzTotal]=\"85\" [nzPageSize]=\"20\"\r\n                         [nzShowTotal]=\"rangeTemplate\"></nz-pagination>\r\n          <ng-template #totalTemplate let-total>\r\n            Total {{total}} items\r\n          </ng-template>\r\n          <ng-template #rangeTemplate let-range=\"range\" let-total>\r\n            {{range[0]}}-{{range[1]}} of {{total}} items\r\n          </ng-template>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"简洁\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-pagination [nzPageIndex]=\"2\" [nzTotal]=\"50\" nzSimple></nz-pagination>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"上一步下一步\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-pagination [nzPageIndex]=\"1\" [nzTotal]=\"500\" [nzItemRender]=\"renderItemTemplate\"></nz-pagination>\r\n          <ng-template #renderItemTemplate let-type let-page=\"page\">\r\n            <a *ngIf=\"type==='pre'\">Previous</a>\r\n            <a *ngIf=\"type==='next'\">Next</a>\r\n            <a *ngIf=\"type==='page'\">{{page}}</a>\r\n          </ng-template>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/ui/paginations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let PaginationsComponent = class PaginationsComponent {
    ngOnInit() {
    }
};
PaginationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/components/ui/paginations.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
    })
], PaginationsComponent);



/***/ }),

/***/ "./src/components/ui/popover.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-outer-layer-div\">\r\n  <div nz-row nzGutter=\"24\">\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"12个方向\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <div style=\"margin-left: 60px\">\r\n            <nz-popover [nzTitle]=\"'Title'\" [nzPlacement]=\"'topLeft'\">\r\n              <button nz-button nz-popover>TL</button>\r\n              <ng-template #nzTemplate>\r\n                <div><p>Content</p>\r\n                  <p>Content</p></div>\r\n              </ng-template>\r\n            </nz-popover>\r\n            <nz-popover [nzTitle]=\"'Title'\" [nzPlacement]=\"'top'\">\r\n              <button nz-button nz-popover>Top</button>\r\n              <ng-template #nzTemplate>\r\n                <div><p>Content</p>\r\n                  <p>Content</p></div>\r\n              </ng-template>\r\n            </nz-popover>\r\n            <nz-popover [nzTitle]=\"'Title'\" [nzPlacement]=\"'topRight'\">\r\n              <button nz-button nz-popover>TR</button>\r\n              <ng-template #nzTemplate>\r\n                <div><p>Content</p>\r\n                  <p>Content</p></div>\r\n              </ng-template>\r\n            </nz-popover>\r\n          </div>\r\n          <div style=\"width: 60px; float: left;\">\r\n            <nz-popover [nzTitle]=\"'Title'\" [nzPlacement]=\"'leftTop'\">\r\n              <button nz-button nz-popover>LT</button>\r\n              <ng-template #nzTemplate>\r\n                <div><p>Content</p>\r\n                  <p>Content</p></div>\r\n              </ng-template>\r\n            </nz-popover>\r\n            <nz-popover [nzTitle]=\"'Title'\" [nzPlacement]=\"'left'\">\r\n              <button nz-button nz-popover>Left</button>\r\n              <ng-template #nzTemplate>\r\n                <div><p>Content</p>\r\n                  <p>Content</p></div>\r\n              </ng-template>\r\n            </nz-popover>\r\n            <nz-popover [nzTitle]=\"'Title'\" [nzPlacement]=\"'leftBottom'\">\r\n              <button nz-button nz-popover>LB</button>\r\n              <ng-template #nzTemplate>\r\n                <div><p>Content</p>\r\n                  <p>Content</p></div>\r\n              </ng-template>\r\n            </nz-popover>\r\n          </div>\r\n          <div style=\"width: 60px; margin-left: 252px;\">\r\n            <nz-popover [nzTitle]=\"'Title'\" [nzPlacement]=\"'rightTop'\">\r\n              <button nz-button nz-popover>RT</button>\r\n              <ng-template #nzTemplate>\r\n                <div><p>Content</p>\r\n                  <p>Content</p></div>\r\n              </ng-template>\r\n            </nz-popover>\r\n            <nz-popover [nzTitle]=\"'Title'\" [nzPlacement]=\"'right'\">\r\n              <button nz-button nz-popover>Right</button>\r\n              <ng-template #nzTemplate>\r\n                <div><p>Content</p>\r\n                  <p>Content</p></div>\r\n              </ng-template>\r\n            </nz-popover>\r\n            <nz-popover [nzTitle]=\"'Title'\" [nzPlacement]=\"'rightBottom'\">\r\n              <button nz-button nz-popover>RB</button>\r\n              <ng-template #nzTemplate>\r\n                <div><p>Content</p>\r\n                  <p>Content</p></div>\r\n              </ng-template>\r\n            </nz-popover>\r\n          </div>\r\n          <div style=\"margin-left: 60px; clear: both;\">\r\n            <nz-popover [nzTitle]=\"'Title'\" [nzPlacement]=\"'bottomLeft'\">\r\n              <button nz-button nz-popover>BL</button>\r\n              <ng-template #nzTemplate>\r\n                <div><p>Content</p>\r\n                  <p>Content</p></div>\r\n              </ng-template>\r\n            </nz-popover>\r\n            <nz-popover [nzTitle]=\"'Title'\" [nzPlacement]=\"'bottom'\">\r\n              <button nz-button nz-popover>Bottom</button>\r\n              <ng-template #nzTemplate>\r\n                <div><p>Content</p>\r\n                  <p>Content</p></div>\r\n              </ng-template>\r\n            </nz-popover>\r\n            <nz-popover [nzTitle]=\"'Title'\" [nzPlacement]=\"'bottomRight'\">\r\n              <button nz-button nz-popover>BR</button>\r\n              <ng-template #nzTemplate>\r\n                <div><p>Content</p>\r\n                  <p>Content</p></div>\r\n              </ng-template>\r\n            </nz-popover>\r\n          </div>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"三种触发方式\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-popover [nzTitle]=\"'Title'\" [nzTrigger]=\"'click'\">\r\n            <button nz-button nz-popover>Click me</button>\r\n            <ng-template #nzTemplate>\r\n              <div><p>Content</p>\r\n                <p>Content</p></div>\r\n            </ng-template>\r\n          </nz-popover>\r\n          <nz-popover [nzTitle]=\"'Title'\" [nzTrigger]=\"'hover'\">\r\n            <button nz-button nz-popover>Hover me</button>\r\n            <ng-template #nzTemplate>\r\n              <div><p>Content</p>\r\n                <p>Content</p></div>\r\n            </ng-template>\r\n          </nz-popover>\r\n          <nz-popover [nzTitle]=\"'Title'\" [nzTrigger]=\"'focus'\">\r\n            <button nz-button nz-popover>Focus me</button>\r\n            <ng-template #nzTemplate>\r\n              <div><p>Content</p>\r\n                <p>Content</p></div>\r\n            </ng-template>\r\n          </nz-popover>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"从浮层内关闭\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-popover [nzTitle]=\"'Title'\" [(nzVisible)]=\"visible\" [nzTrigger]=\"'click'\">\r\n            <button nz-button nz-popover [nzType]=\"'primary'\">Click me</button>\r\n            <ng-template #nzTemplate>\r\n              <a (click)='clickMe()'>Close</a>\r\n            </ng-template>\r\n          </nz-popover>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/ui/popover.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let PopoverComponent = class PopoverComponent {
    constructor() {
    }
    ngOnInit() {
    }
    clickMe() {
        this.visible = false;
    }
};
PopoverComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/components/ui/popover.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
    }),
    __metadata("design:paramtypes", [])
], PopoverComponent);



/***/ }),

/***/ "./src/components/ui/radio.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-outer-layer-div\">\r\n  <div nz-row nzGutter=\"24\">\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"基本\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <label nz-radio>Radio</label>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"不可用\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <label nz-radio [nzDisabled]=\"disabled\">Disabled</label>\r\n          <br>\r\n          <label nz-radio [nzDisabled]=\"disabled\" [ngModel]=\"true\">Disabled</label>\r\n          <div style=\"margin-top:20px;\">\r\n            <button nz-button nzType=\"primary\" (click)=\"disabled=!disabled\">Toggle disabled</button>\r\n          </div>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"单选组\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-radio-group [(ngModel)]=\"radioValue\">\r\n            <label nz-radio nzValue=\"A\">A</label>\r\n            <label nz-radio nzValue=\"B\">B</label>\r\n            <label nz-radio nzValue=\"C\">C</label>\r\n            <label nz-radio nzValue=\"D\">D</label>\r\n          </nz-radio-group>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"垂直\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-radio-group [(ngModel)]=\"radioValueY\">\r\n            <label nz-radio [ngStyle]=\"style\" nzValue=\"A\">Option A</label>\r\n            <label nz-radio [ngStyle]=\"style\" nzValue=\"B\">Option B</label>\r\n            <label nz-radio [ngStyle]=\"style\" nzValue=\"C\">Option C</label>\r\n            <label nz-radio [ngStyle]=\"style\" nzValue=\"M\">\r\n              More...\r\n              <input type=\"text\" nz-input *ngIf=\"radioValueY=='M'\" style=\"width: 100px; margin-left: 10px;\">\r\n            </label>\r\n          </nz-radio-group>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/ui/radio.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let RadioComponent = class RadioComponent {
    constructor() {
        this.disabled = true;
        this.radioValue = 'A';
        this.radioValueY = 'A';
        this.style = {
            display: 'block',
            height: '30px',
            lineHeight: '30px'
        };
    }
    ngOnInit() {
    }
};
RadioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/components/ui/radio.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
    })
], RadioComponent);



/***/ }),

/***/ "./src/components/ui/rates.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-outer-layer-div\">\r\n  <div nz-row nzGutter=\"24\">\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"基本\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-rate [ngModel]=\"0\"></nz-rate>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"半星\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-rate [ngModel]=\"2.5\" nzAllowHalf></nz-rate>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"文案展示\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-rate [(ngModel)]=\"value\" nzAllowHalf></nz-rate>\r\n          <span *ngIf=\"value\" class=\"ant-rate-text\">{{ value }} stars</span>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"只读\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-rate [ngModel]=\"2\" nzDisabled></nz-rate>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"其他字符\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-rate [ngModel]=\"0\" nzAllowHalf [nzCharacter]=\"characterIcon\"></nz-rate>\r\n          <br>\r\n          <nz-rate [ngModel]=\"0\" nzAllowHalf class=\"large\" [nzCharacter]=\"characterEnLetter\"></nz-rate>\r\n          <br>\r\n          <nz-rate [ngModel]=\"0\" nzAllowHalf [nzCharacter]=\"characterZhLetter\"></nz-rate>\r\n          <ng-template #characterIcon><i class=\"anticon anticon-heart\"></i></ng-template>\r\n          <ng-template #characterZhLetter>好</ng-template>\r\n          <ng-template #characterEnLetter>A</ng-template>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/ui/rates.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let RatesComponent = class RatesComponent {
    constructor() {
        this.value = 3;
    }
    ngOnInit() {
    }
};
RatesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/components/ui/rates.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
    })
], RatesComponent);



/***/ }),

/***/ "./src/components/ui/selectR.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-outer-layer-div\">\r\n  <div nz-row nzGutter=\"24\">\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"基本\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-select style=\"width: 120px;\" [(ngModel)]=\"selectedValue\" nzAllowClear nzPlaceHolder=\"Choose\">\r\n            <nz-option nzValue=\"jack\" nzLabel=\"Jack\"></nz-option>\r\n            <nz-option nzValue=\"lucy\" nzLabel=\"Lucy\"></nz-option>\r\n            <nz-option nzValue=\"disabled\" nzLabel=\"Disabled\" nzDisabled></nz-option>\r\n          </nz-select>\r\n          <nz-select style=\"width: 120px;\" [ngModel]=\"'lucy'\" nzDisabled>\r\n            <nz-option nzValue=\"lucy\" nzLabel=\"Lucy\"></nz-option>\r\n          </nz-select>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"多选\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-select nzMode=\"tags\" style=\"width: 100%;\" nzPlaceHolder=\"Tag Mode\" [(ngModel)]=\"listOfTagOptions\">\r\n            <nz-option *ngFor=\"let option of listOfOption\" [nzLabel]=\"option.label\" [nzValue]=\"option.value\">\r\n            </nz-option>\r\n          </nz-select>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"分组\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-select style=\"width: 120px;\" [(ngModel)]=\"selectedValueG\" nzAllowClear nzPlaceHolder=\"Choose\">\r\n            <nz-option-group nzLabel=\"Manager\">\r\n              <nz-option nzValue=\"jack\" nzLabel=\"Jack\"></nz-option>\r\n              <nz-option nzValue=\"lucy\" nzLabel=\"Lucy\"></nz-option>\r\n            </nz-option-group>\r\n            <nz-option-group nzLabel=\"Engineer\">\r\n              <nz-option nzValue=\"Tom\" nzLabel=\"tom\"></nz-option>\r\n            </nz-option-group>\r\n          </nz-select>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"自定义\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-select style=\"width: 200px;\" nzShowSearch nzAllowClear nzPlaceHolder=\"Select OS\" [(ngModel)]=\"selectedOS\">\r\n            <nz-option nzCustomContent nzLabel=\"Windows\" nzValue=\"windows\"><i class=\"anticon anticon-windows\"></i>\r\n              Windows\r\n            </nz-option>\r\n            <nz-option nzCustomContent nzLabel=\"Mac\" nzValue=\"mac\"><i class=\"anticon anticon-apple\"></i> Mac</nz-option>\r\n            <nz-option nzCustomContent nzLabel=\"Android\" nzValue=\"android\"><i class=\"anticon anticon-android\"></i>\r\n              Android\r\n            </nz-option>\r\n          </nz-select>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/ui/selectR.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectRComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let SelectRComponent = class SelectRComponent {
    constructor() {
        this.selectedValue = 'lucy';
        this.listOfOption = [];
        this.listOfTagOptions = [];
        this.selectedValueG = 'lucy';
    }
    ngOnInit() {
        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
        }
        this.listOfOption = children;
    }
};
SelectRComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/components/ui/selectR.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
    })
], SelectRComponent);



/***/ }),

/***/ "./src/components/ui/steps.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-outer-layer-div\">\r\n  <div nz-row nzGutter=\"24\">\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"基本\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-steps>\r\n            <nz-step nzTitle=\"Finished\" nzDescription=\"This is a description.\"></nz-step>\r\n            <nz-step nzTitle=\"In Progress\" nzDescription=\"This is a description.\"></nz-step>\r\n            <nz-step nzTitle=\"Waiting\" nzDescription=\"This is a description.\"></nz-step>\r\n          </nz-steps>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"迷你\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-steps [nzCurrent]=\"current\" nzSize=\"small\">\r\n            <nz-step nzTitle=\"Finished\"></nz-step>\r\n            <nz-step nzTitle=\"In Progress\"></nz-step>\r\n            <nz-step nzTitle=\"Waiting\"></nz-step>\r\n          </nz-steps>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"带图标\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-steps>\r\n            <nz-step nzTitle=\"Login\" nzStatus=\"finish\" nzIcon=\"anticon anticon-user\"></nz-step>\r\n            <nz-step nzTitle=\"Verification\" nzStatus=\"finish\" nzIcon=\"anticon anticon-solution\"></nz-step>\r\n            <nz-step nzTitle=\"Pay\" nzStatus=\"process\" nzIcon=\"anticon anticon-spin anticon-loading\"></nz-step>\r\n            <nz-step nzTitle=\"Done\" nzStatus=\"wait\" [nzIcon]=\"iconTemplate\"></nz-step>\r\n            <ng-template #iconTemplate><i class=\"anticon anticon-smile-o\"></i></ng-template>\r\n          </nz-steps>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"竖直方向\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-steps [nzCurrent]=\"1\" nzDirection=\"vertical\">\r\n            <nz-step nzTitle=\"Finished\" nzDescription=\"This is a description.\"></nz-step>\r\n            <nz-step nzTitle=\"In Progress\" nzDescription=\"This is a description.\"></nz-step>\r\n            <nz-step nzTitle=\"Waiting\" nzDescription=\"This is a description.\"></nz-step>\r\n          </nz-steps>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"步骤运行错误\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-steps [nzCurrent]=\"1\" nzStatus=\"error\">\r\n            <nz-step nzTitle=\"Finished\" nzDescription=\"This is a description.\"></nz-step>\r\n            <nz-step nzTitle=\"In Progress\" nzDescription=\"This is a description.\"></nz-step>\r\n            <nz-step nzTitle=\"Waiting\" nzDescription=\"This is a description.\"></nz-step>\r\n          </nz-steps>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/ui/steps.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StepsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let StepsComponent = class StepsComponent {
    constructor() {
        this.current = 1;
    }
    ngOnInit() {
    }
};
StepsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/components/ui/steps.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
    })
], StepsComponent);



/***/ }),

/***/ "./src/components/ui/switchR.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"application-outer-layer-div\">\r\n  <div nz-row nzGutter=\"24\">\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"基本\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-switch [(ngModel)]=\"switchValueOne\"></nz-switch>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"不可用\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-switch [(ngModel)]=\"switchValueTwo\" [nzDisabled]=\"isDisabled\" style=\"margin-bottom: 8px\"></nz-switch>\r\n          <br>\r\n          <button nz-button [nzType]=\"'primary'\" (click)=\"isDisabled = !isDisabled\">Toggle disabled</button>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"文字图标\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-switch [ngModel]=\"true\" nzCheckedChildren=\"开\" nzUnCheckedChildren=\"关\"></nz-switch>\r\n          <br>\r\n          <nz-switch [ngModel]=\"false\" nzCheckedChildren=\"1\" nzUnCheckedChildren=\"0\"></nz-switch>\r\n          <br>\r\n          <nz-switch [ngModel]=\"true\" [nzCheckedChildren]=\"checkedTemplate\"\r\n                     [nzUnCheckedChildren]=\"unCheckedTemplate\"></nz-switch>\r\n          <ng-template #checkedTemplate><i class=\"anticon anticon-check\"></i></ng-template>\r\n          <ng-template #unCheckedTemplate><i class=\"anticon anticon-cross\"></i></ng-template>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n    <div nz-col nzSpan=\"24\" class=\"cus-index-margin-top\">\r\n      <nz-card [nzBordered]=\"false\" [nzHoverable]=\"true\" nzTitle=\"加载中\">\r\n        <div class=\"cus-index-margin-e\">\r\n          <nz-switch [ngModel]=\"true\" nzLoading></nz-switch>\r\n          <br>\r\n          <nz-switch nzSize=\"small\" [ngModel]=\"false\" nzLoading></nz-switch>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/components/ui/switchR.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwitchRComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let SwitchRComponent = class SwitchRComponent {
    constructor() {
        this.switchValueOne = false;
        this.switchValueTwo = false;
        this.isDisabled = true;
    }
    ngOnInit() {
    }
};
SwitchRComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("./src/components/ui/switchR.html"),
        styles: [__webpack_require__("./src/components/styles/index.css")],
    })
], SwitchRComponent);



/***/ }),

/***/ "./src/contents/comsManager.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export coms */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return importComs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return uiRouterContents; });
/* unused harmony export uiRouterContentsObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header_customHeader__ = __webpack_require__("./src/components/header/customHeader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_siderBar_customSider__ = __webpack_require__("./src/components/siderBar/customSider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_breadcrumbs_breadcrumb__ = __webpack_require__("./src/components/breadcrumbs/breadcrumb.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_modals_basicServerModal__ = __webpack_require__("./src/components/modals/basicServerModal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_modals_basicCusServerModal__ = __webpack_require__("./src/components/modals/basicCusServerModal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_appHome_contrastiveFunnelCharts__ = __webpack_require__("./src/components/appHome/contrastiveFunnelCharts.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_appHome_homeStatisticMap__ = __webpack_require__("./src/components/appHome/homeStatisticMap.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_appHome_homeBaiduMap__ = __webpack_require__("./src/components/appHome/homeBaiduMap.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_appHome_appHome__ = __webpack_require__("./src/components/appHome/appHome.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_ui_buttons__ = __webpack_require__("./src/components/ui/buttons.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_ui_dropdown__ = __webpack_require__("./src/components/ui/dropdown.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_ui_paginations__ = __webpack_require__("./src/components/ui/paginations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_ui_steps__ = __webpack_require__("./src/components/ui/steps.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_ui_autocompletes__ = __webpack_require__("./src/components/ui/autocompletes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_ui_cascaders__ = __webpack_require__("./src/components/ui/cascaders.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_ui_checkboxes__ = __webpack_require__("./src/components/ui/checkboxes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_ui_datePickers__ = __webpack_require__("./src/components/ui/datePickers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_forms_basicForms__ = __webpack_require__("./src/components/forms/basicForms.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_ui_inputs__ = __webpack_require__("./src/components/ui/inputs.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_ui_radio__ = __webpack_require__("./src/components/ui/radio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_ui_rates__ = __webpack_require__("./src/components/ui/rates.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_ui_selectR__ = __webpack_require__("./src/components/ui/selectR.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_ui_switchR__ = __webpack_require__("./src/components/ui/switchR.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_ui_calendarR__ = __webpack_require__("./src/components/ui/calendarR.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_ui_carouselR__ = __webpack_require__("./src/components/ui/carouselR.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_ui_popover__ = __webpack_require__("./src/components/ui/popover.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_tables_basicTables__ = __webpack_require__("./src/components/tables/basicTables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_tables_selectTables__ = __webpack_require__("./src/components/tables/selectTables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_tables_soTables__ = __webpack_require__("./src/components/tables/soTables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_tables_ssTables__ = __webpack_require__("./src/components/tables/ssTables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_tables_seniorTables__ = __webpack_require__("./src/components/tables/seniorTables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_tables_nestingTables__ = __webpack_require__("./src/components/tables/nestingTables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_internationalizations_internationalizationExamples__ = __webpack_require__("./src/components/internationalizations/internationalizationExamples.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_charts_viserCharts__ = __webpack_require__("./src/components/charts/viserCharts.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_charts_wordCloud__ = __webpack_require__("./src/components/charts/wordCloud.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_modals_basicModal__ = __webpack_require__("./src/components/modals/basicModal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_richText_quillIndex__ = __webpack_require__("./src/components/richText/quillIndex.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_richText_ckeditorIndex__ = __webpack_require__("./src/components/richText/ckeditorIndex.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_ngStore_ngstore__ = __webpack_require__("./src/components/ngStore/ngstore.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_pages_login__ = __webpack_require__("./src/components/pages/login.ts");








































const coms = {
    CustomHeaderComponent: __WEBPACK_IMPORTED_MODULE_0__components_header_customHeader__["a" /* CustomHeaderComponent */],
    CustomSiderComponent: __WEBPACK_IMPORTED_MODULE_1__components_siderBar_customSider__["a" /* CustomSiderComponent */],
    ContrastiveFunnelChartsComponent: __WEBPACK_IMPORTED_MODULE_5__components_appHome_contrastiveFunnelCharts__["a" /* ContrastiveFunnelChartsComponent */],
    HomeStatisticMapComponent: __WEBPACK_IMPORTED_MODULE_6__components_appHome_homeStatisticMap__["a" /* HomeStatisticMapComponent */],
    HomeBaiduMapComponent: __WEBPACK_IMPORTED_MODULE_7__components_appHome_homeBaiduMap__["a" /* HomeBaiduMapComponent */],
    BreadcrumbComponent: __WEBPACK_IMPORTED_MODULE_2__components_breadcrumbs_breadcrumb__["a" /* BreadcrumbComponent */],
    BasicServerModalComponent: __WEBPACK_IMPORTED_MODULE_3__components_modals_basicServerModal__["a" /* BasicServerModalComponent */],
    BasicCusServerModalComponent: __WEBPACK_IMPORTED_MODULE_4__components_modals_basicCusServerModal__["a" /* BasicCusServerModalComponent */],
    AppHomeComponent: __WEBPACK_IMPORTED_MODULE_8__components_appHome_appHome__["a" /* AppHomeComponent */],
    ButtonsComponent: __WEBPACK_IMPORTED_MODULE_9__components_ui_buttons__["a" /* ButtonsComponent */],
    DropdownComponent: __WEBPACK_IMPORTED_MODULE_10__components_ui_dropdown__["a" /* DropdownComponent */],
    PaginationsComponent: __WEBPACK_IMPORTED_MODULE_11__components_ui_paginations__["a" /* PaginationsComponent */],
    StepsComponent: __WEBPACK_IMPORTED_MODULE_12__components_ui_steps__["a" /* StepsComponent */],
    AutocompletesComponent: __WEBPACK_IMPORTED_MODULE_13__components_ui_autocompletes__["a" /* AutocompletesComponent */],
    CascadersComponent: __WEBPACK_IMPORTED_MODULE_14__components_ui_cascaders__["a" /* CascadersComponent */],
    CheckboxesComponent: __WEBPACK_IMPORTED_MODULE_15__components_ui_checkboxes__["a" /* CheckboxesComponent */],
    DatePickersComponent: __WEBPACK_IMPORTED_MODULE_16__components_ui_datePickers__["a" /* DatePickersComponent */],
    BasicFormsComponent: __WEBPACK_IMPORTED_MODULE_17__components_forms_basicForms__["a" /* BasicFormsComponent */],
    InputsComponent: __WEBPACK_IMPORTED_MODULE_18__components_ui_inputs__["a" /* InputsComponent */],
    RadioComponent: __WEBPACK_IMPORTED_MODULE_19__components_ui_radio__["a" /* RadioComponent */],
    RatesComponent: __WEBPACK_IMPORTED_MODULE_20__components_ui_rates__["a" /* RatesComponent */],
    SelectRComponent: __WEBPACK_IMPORTED_MODULE_21__components_ui_selectR__["a" /* SelectRComponent */],
    SwitchRComponent: __WEBPACK_IMPORTED_MODULE_22__components_ui_switchR__["a" /* SwitchRComponent */],
    CalendarRComponent: __WEBPACK_IMPORTED_MODULE_23__components_ui_calendarR__["a" /* CalendarRComponent */],
    CarouselRComponent: __WEBPACK_IMPORTED_MODULE_24__components_ui_carouselR__["a" /* CarouselRComponent */],
    PopoverComponent: __WEBPACK_IMPORTED_MODULE_25__components_ui_popover__["a" /* PopoverComponent */],
    BasicTablesComponent: __WEBPACK_IMPORTED_MODULE_26__components_tables_basicTables__["a" /* BasicTablesComponent */],
    SelectTablesComponent: __WEBPACK_IMPORTED_MODULE_27__components_tables_selectTables__["a" /* SelectTablesComponent */],
    SoTablesComponent: __WEBPACK_IMPORTED_MODULE_28__components_tables_soTables__["a" /* SoTablesComponent */],
    SsTablesComponent: __WEBPACK_IMPORTED_MODULE_29__components_tables_ssTables__["a" /* SsTablesComponent */],
    SeniorTablesComponent: __WEBPACK_IMPORTED_MODULE_30__components_tables_seniorTables__["a" /* SeniorTablesComponent */],
    NestingTablesComponent: __WEBPACK_IMPORTED_MODULE_31__components_tables_nestingTables__["a" /* NestingTablesComponent */],
    InternationalizationExamplesComponent: __WEBPACK_IMPORTED_MODULE_32__components_internationalizations_internationalizationExamples__["a" /* InternationalizationExamplesComponent */],
    ViserChartsComponent: __WEBPACK_IMPORTED_MODULE_33__components_charts_viserCharts__["a" /* ViserChartsComponent */],
    WordCloudComponent: __WEBPACK_IMPORTED_MODULE_34__components_charts_wordCloud__["a" /* WordCloudComponent */],
    BasicModalComponent: __WEBPACK_IMPORTED_MODULE_35__components_modals_basicModal__["a" /* BasicModalComponent */],
    QuillIndexComponent: __WEBPACK_IMPORTED_MODULE_36__components_richText_quillIndex__["a" /* QuillIndexComponent */],
    CkeditorIndexComponent: __WEBPACK_IMPORTED_MODULE_37__components_richText_ckeditorIndex__["a" /* CkeditorIndexComponent */],
    NgstoreComponent: __WEBPACK_IMPORTED_MODULE_38__components_ngStore_ngstore__["a" /* NgstoreComponent */],
    LoginComponent: __WEBPACK_IMPORTED_MODULE_39__components_pages_login__["a" /* LoginComponent */]
};
const importComs = [
    __WEBPACK_IMPORTED_MODULE_0__components_header_customHeader__["a" /* CustomHeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_1__components_siderBar_customSider__["a" /* CustomSiderComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components_appHome_contrastiveFunnelCharts__["a" /* ContrastiveFunnelChartsComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components_appHome_homeStatisticMap__["a" /* HomeStatisticMapComponent */],
    __WEBPACK_IMPORTED_MODULE_7__components_appHome_homeBaiduMap__["a" /* HomeBaiduMapComponent */],
    __WEBPACK_IMPORTED_MODULE_2__components_breadcrumbs_breadcrumb__["a" /* BreadcrumbComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components_modals_basicServerModal__["a" /* BasicServerModalComponent */],
    __WEBPACK_IMPORTED_MODULE_4__components_modals_basicCusServerModal__["a" /* BasicCusServerModalComponent */],
    __WEBPACK_IMPORTED_MODULE_8__components_appHome_appHome__["a" /* AppHomeComponent */],
    __WEBPACK_IMPORTED_MODULE_9__components_ui_buttons__["a" /* ButtonsComponent */],
    __WEBPACK_IMPORTED_MODULE_10__components_ui_dropdown__["a" /* DropdownComponent */],
    __WEBPACK_IMPORTED_MODULE_11__components_ui_paginations__["a" /* PaginationsComponent */],
    __WEBPACK_IMPORTED_MODULE_12__components_ui_steps__["a" /* StepsComponent */],
    __WEBPACK_IMPORTED_MODULE_13__components_ui_autocompletes__["a" /* AutocompletesComponent */],
    __WEBPACK_IMPORTED_MODULE_14__components_ui_cascaders__["a" /* CascadersComponent */],
    __WEBPACK_IMPORTED_MODULE_15__components_ui_checkboxes__["a" /* CheckboxesComponent */],
    __WEBPACK_IMPORTED_MODULE_16__components_ui_datePickers__["a" /* DatePickersComponent */],
    __WEBPACK_IMPORTED_MODULE_17__components_forms_basicForms__["a" /* BasicFormsComponent */],
    __WEBPACK_IMPORTED_MODULE_18__components_ui_inputs__["a" /* InputsComponent */],
    __WEBPACK_IMPORTED_MODULE_19__components_ui_radio__["a" /* RadioComponent */],
    __WEBPACK_IMPORTED_MODULE_20__components_ui_rates__["a" /* RatesComponent */],
    __WEBPACK_IMPORTED_MODULE_21__components_ui_selectR__["a" /* SelectRComponent */],
    __WEBPACK_IMPORTED_MODULE_22__components_ui_switchR__["a" /* SwitchRComponent */],
    __WEBPACK_IMPORTED_MODULE_23__components_ui_calendarR__["a" /* CalendarRComponent */],
    __WEBPACK_IMPORTED_MODULE_24__components_ui_carouselR__["a" /* CarouselRComponent */],
    __WEBPACK_IMPORTED_MODULE_25__components_ui_popover__["a" /* PopoverComponent */],
    __WEBPACK_IMPORTED_MODULE_26__components_tables_basicTables__["a" /* BasicTablesComponent */],
    __WEBPACK_IMPORTED_MODULE_27__components_tables_selectTables__["a" /* SelectTablesComponent */],
    __WEBPACK_IMPORTED_MODULE_28__components_tables_soTables__["a" /* SoTablesComponent */],
    __WEBPACK_IMPORTED_MODULE_29__components_tables_ssTables__["a" /* SsTablesComponent */],
    __WEBPACK_IMPORTED_MODULE_30__components_tables_seniorTables__["a" /* SeniorTablesComponent */],
    __WEBPACK_IMPORTED_MODULE_31__components_tables_nestingTables__["a" /* NestingTablesComponent */],
    __WEBPACK_IMPORTED_MODULE_32__components_internationalizations_internationalizationExamples__["a" /* InternationalizationExamplesComponent */],
    __WEBPACK_IMPORTED_MODULE_33__components_charts_viserCharts__["a" /* ViserChartsComponent */],
    __WEBPACK_IMPORTED_MODULE_34__components_charts_wordCloud__["a" /* WordCloudComponent */],
    __WEBPACK_IMPORTED_MODULE_35__components_modals_basicModal__["a" /* BasicModalComponent */],
    __WEBPACK_IMPORTED_MODULE_36__components_richText_quillIndex__["a" /* QuillIndexComponent */],
    __WEBPACK_IMPORTED_MODULE_37__components_richText_ckeditorIndex__["a" /* CkeditorIndexComponent */],
    __WEBPACK_IMPORTED_MODULE_38__components_ngStore_ngstore__["a" /* NgstoreComponent */],
    __WEBPACK_IMPORTED_MODULE_39__components_pages_login__["a" /* LoginComponent */]
];
const appHome = { name: '/cus/home/index', url: '/cus/home/index', component: __WEBPACK_IMPORTED_MODULE_8__components_appHome_appHome__["a" /* AppHomeComponent */] };
const buttons = { name: '/cus/ui/buttons', url: '/cus/ui/buttons', component: __WEBPACK_IMPORTED_MODULE_9__components_ui_buttons__["a" /* ButtonsComponent */] };
const dropdown = { name: '/cus/ui/dropdown', url: '/cus/ui/dropdown', component: __WEBPACK_IMPORTED_MODULE_10__components_ui_dropdown__["a" /* DropdownComponent */] };
const paginations = { name: '/cus/ui/paginations', url: '/cus/ui/paginations', component: __WEBPACK_IMPORTED_MODULE_11__components_ui_paginations__["a" /* PaginationsComponent */] };
const steps = { name: '/cus/ui/steps', url: '/cus/ui/steps', component: __WEBPACK_IMPORTED_MODULE_12__components_ui_steps__["a" /* StepsComponent */] };
const autocompletes = { name: '/cus/ui/autocompletes', url: '/cus/ui/autocompletes', component: __WEBPACK_IMPORTED_MODULE_13__components_ui_autocompletes__["a" /* AutocompletesComponent */] };
const cascaders = { name: '/cus/ui/cascaders', url: '/cus/ui/cascaders', component: __WEBPACK_IMPORTED_MODULE_14__components_ui_cascaders__["a" /* CascadersComponent */] };
const checkbox = { name: '/cus/ui/checkbox', url: '/cus/ui/checkbox', component: __WEBPACK_IMPORTED_MODULE_15__components_ui_checkboxes__["a" /* CheckboxesComponent */] };
const datePickers = { name: '/cus/ui/datePickers', url: '/cus/ui/datePickers', component: __WEBPACK_IMPORTED_MODULE_16__components_ui_datePickers__["a" /* DatePickersComponent */] };
const inputs = { name: '/cus/ui/inputs', url: '/cus/ui/inputs', component: __WEBPACK_IMPORTED_MODULE_18__components_ui_inputs__["a" /* InputsComponent */] };
const radio = { name: '/cus/ui/radio', url: '/cus/ui/radio', component: __WEBPACK_IMPORTED_MODULE_19__components_ui_radio__["a" /* RadioComponent */] };
const rate = { name: '/cus/ui/rate', url: '/cus/ui/rate', component: __WEBPACK_IMPORTED_MODULE_20__components_ui_rates__["a" /* RatesComponent */] };
const select = { name: '/cus/ui/select', url: '/cus/ui/select', component: __WEBPACK_IMPORTED_MODULE_21__components_ui_selectR__["a" /* SelectRComponent */] };
const switchR = { name: '/cus/ui/switch', url: '/cus/ui/switch', component: __WEBPACK_IMPORTED_MODULE_22__components_ui_switchR__["a" /* SwitchRComponent */] };
const calendarR = { name: '/cus/ui/calendarR', url: '/cus/ui/calendarR', component: __WEBPACK_IMPORTED_MODULE_23__components_ui_calendarR__["a" /* CalendarRComponent */] };
const carouselR = { name: '/cus/ui/carouselR', url: '/cus/ui/carouselR', component: __WEBPACK_IMPORTED_MODULE_24__components_ui_carouselR__["a" /* CarouselRComponent */] };
const popover = { name: '/cus/ui/popover', url: '/cus/ui/popover', component: __WEBPACK_IMPORTED_MODULE_25__components_ui_popover__["a" /* PopoverComponent */] };
const basicForms = { name: '/cus/form/basic', url: '/cus/form/basic', component: __WEBPACK_IMPORTED_MODULE_17__components_forms_basicForms__["a" /* BasicFormsComponent */] };
const basicTables = { name: '/cus/tables/basic', url: '/cus/tables/basic', component: __WEBPACK_IMPORTED_MODULE_26__components_tables_basicTables__["a" /* BasicTablesComponent */] };
const selectTables = { name: '/cus/tables/select', url: '/cus/tables/select', component: __WEBPACK_IMPORTED_MODULE_27__components_tables_selectTables__["a" /* SelectTablesComponent */] };
const soselectTables = { name: '/cus/tables/soselect', url: '/cus/tables/soselect', component: __WEBPACK_IMPORTED_MODULE_28__components_tables_soTables__["a" /* SoTablesComponent */] };
const ssselectTables = { name: '/cus/tables/ssselect', url: '/cus/tables/ssselect', component: __WEBPACK_IMPORTED_MODULE_29__components_tables_ssTables__["a" /* SsTablesComponent */] };
const seniorTables = { name: '/cus/tables/senior', url: '/cus/tables/senior', component: __WEBPACK_IMPORTED_MODULE_30__components_tables_seniorTables__["a" /* SeniorTablesComponent */] };
const nestingTables = {
    name: '/cus/tables/nestingTables',
    url: '/cus/tables/nestingTables',
    component: __WEBPACK_IMPORTED_MODULE_31__components_tables_nestingTables__["a" /* NestingTablesComponent */]
};
const internationalizations = {
    name: '/cus/internationalization/examples',
    url: '/cus/internationalization/examples',
    component: __WEBPACK_IMPORTED_MODULE_32__components_internationalizations_internationalizationExamples__["a" /* InternationalizationExamplesComponent */]
};
const g2 = { name: '/cus/chart/viser', url: '/cus/chart/viser', component: __WEBPACK_IMPORTED_MODULE_33__components_charts_viserCharts__["a" /* ViserChartsComponent */] };
const wordCloud = { name: '/cus/chart/wordCloud', url: '/cus/chart/wordCloud', component: __WEBPACK_IMPORTED_MODULE_34__components_charts_wordCloud__["a" /* WordCloudComponent */] };
const basicModal = { name: '/cus/modals/basic', url: '/cus/modals/basic', component: __WEBPACK_IMPORTED_MODULE_35__components_modals_basicModal__["a" /* BasicModalComponent */] };
const quillIndex = { name: '/cus/richText/quillIndex', url: '/cus/richText/quillIndex', component: __WEBPACK_IMPORTED_MODULE_36__components_richText_quillIndex__["a" /* QuillIndexComponent */] };
const ckeditorIndex = {
    name: '/cus/richText/ckeditorIndex',
    url: '/cus/richText/ckeditorIndex',
    component: __WEBPACK_IMPORTED_MODULE_37__components_richText_ckeditorIndex__["a" /* CkeditorIndexComponent */]
};
const ngstoreIndex = {
    name: '/cus/ngstore/index',
    url: '/cus/ngstore/index',
    component: __WEBPACK_IMPORTED_MODULE_38__components_ngStore_ngstore__["a" /* NgstoreComponent */]
};
const login = {
    name: '/cus/pages/login',
    url: '/cus/pages/login',
    component: __WEBPACK_IMPORTED_MODULE_39__components_pages_login__["a" /* LoginComponent */]
};
const uiRouterContents = [
    appHome,
    buttons,
    dropdown,
    paginations,
    steps,
    autocompletes,
    cascaders,
    checkbox,
    datePickers,
    basicForms,
    inputs,
    radio,
    rate,
    select,
    switchR,
    calendarR,
    carouselR,
    popover,
    basicTables,
    selectTables,
    soselectTables,
    ssselectTables,
    seniorTables,
    nestingTables,
    internationalizations,
    g2,
    wordCloud,
    basicModal,
    quillIndex,
    ckeditorIndex,
    ngstoreIndex,
    login
];
const uiRouterContentsObject = {
    appHome,
    buttons,
    dropdown,
    paginations,
    steps,
    autocompletes,
    cascaders,
    checkbox,
    datePickers,
    basicForms,
    inputs,
    radio,
    rate,
    select,
    switchR,
    calendarR,
    carouselR,
    popover,
    basicTables,
    selectTables,
    soselectTables,
    ssselectTables,
    seniorTables,
    nestingTables,
    internationalizations,
    g2,
    wordCloud,
    basicModal,
    quillIndex,
    ckeditorIndex,
    ngstoreIndex,
    login
};



/***/ }),

/***/ "./src/contents/localStorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class LocalStorage {
    constructor() {
        if (!localStorage) {
            throw new Error('Current browser does not support Local Storage');
        }
        this.localStorage = localStorage;
    }
    set(key, value) {
        this.localStorage[key] = value;
    }
    get(key) {
        return this.localStorage[key] || false;
    }
    setObject(key, value) {
        this.localStorage[key] = JSON.stringify(value);
    }
    getObject(key) {
        return JSON.parse(this.localStorage[key] || '{}');
    }
    remove(key) {
        this.localStorage.removeItem(key);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LocalStorage;



/***/ }),

/***/ "./src/contents/menu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Menu {
}
/* unused harmony export Menu */

class SubMenu {
}
/* unused harmony export SubMenu */

const menusContent = [
    { key: '/cus/home/index', title: '首页', icon: 'anticon anticon-home', checkOpen: false, sub: [] },
    {
        key: '/cus/ui', title: 'UI', icon: 'anticon anticon-appstore', checkOpen: false,
        sub: [
            { key: '/cus/ui/buttons', title: 'Button 按钮', icon: '', checkOpen: false },
            { key: '/cus/ui/dropdown', title: 'Dropdown 下拉菜单', icon: '', checkOpen: false },
            { key: '/cus/ui/paginations', title: 'Pagination 分页', icon: '', checkOpen: false },
            { key: '/cus/ui/steps', title: 'Steps 步骤条', icon: '', checkOpen: false },
            { key: '/cus/ui/autocompletes', title: 'Autocomplete 自动完成', icon: '', checkOpen: false },
            // {key: '/cus/ui/cascaders', title: 'Cascader 级联选择', icon: '', checkOpen: false},
            { key: '/cus/ui/checkbox', title: 'Checkbox 多选框', icon: '', checkOpen: false },
            // {key: '/cus/ui/datePickers', title: 'DatePicker 日期选择框', icon: '', checkOpen: false},
            { key: '/cus/ui/inputs', title: 'Input 输入框', icon: '', checkOpen: false },
            { key: '/cus/ui/radio', title: 'Radio 单选框', icon: '', checkOpen: false },
            { key: '/cus/ui/rate', title: 'Rate 评分', icon: '', checkOpen: false },
            { key: '/cus/ui/select', title: 'Select 选择器', icon: '', checkOpen: false },
            { key: '/cus/ui/switch', title: 'Switch 开关', icon: '', checkOpen: false },
            // {key: '/cus/ui/calendarR', title: 'Calendar 日历', icon: '', checkOpen: false},
            { key: '/cus/ui/carouselR', title: 'Carousel 走马灯', icon: '', checkOpen: false },
            { key: '/cus/ui/popover', title: 'Popover 气泡卡片', icon: '', checkOpen: false },
        ],
    },
    // {
    //   key: '/cus/form', title: '表单', icon: 'anticon anticon-shop', checkOpen: false,
    //   sub: [
    //     {key: '/cus/form/basic', title: '基本表单', icon: '', checkOpen: false},
    //   ],
    // },
    {
        key: '/cus/tables', title: '表格', icon: 'anticon anticon-switcher', checkOpen: false,
        sub: [
            { key: '/cus/tables/basic', title: '基本表格', icon: '', checkOpen: false },
            { key: '/cus/tables/select', title: '可选择表格', icon: '', checkOpen: false },
            { key: '/cus/tables/soselect', title: '选择和操作表格', icon: '', checkOpen: false },
            { key: '/cus/tables/ssselect', title: '筛选和排序表格', icon: '', checkOpen: false },
            { key: '/cus/tables/nestingTables', title: '嵌套子表格', icon: '', checkOpen: false },
            { key: '/cus/tables/senior', title: '高级表格', icon: '', checkOpen: false },
        ],
    },
    {
        key: '/cus/chart', title: '图表', icon: 'anticon anticon-book', checkOpen: false,
        sub: [
            { key: '/cus/chart/viser', title: 'viser图表', icon: '', checkOpen: false },
            { key: '/cus/chart/wordCloud', title: '词云', icon: '', checkOpen: false },
        ],
    },
    {
        key: '/cus/modals', title: '弹出框', icon: 'anticon anticon-star-o', checkOpen: false,
        sub: [
            { key: '/cus/modals/basic', title: '基本弹出框', icon: '', checkOpen: false },
        ],
    },
    {
        key: '/cus/richText', title: '富文本编辑器', icon: 'anticon anticon-edit', checkOpen: false,
        sub: [
            { key: '/cus/richText/quillIndex', title: 'quill 编辑器', icon: '', checkOpen: false },
            { key: '/cus/richText/ckeditorIndex', title: 'ckeditor 编辑器', icon: '', checkOpen: false },
        ],
    },
    {
        key: '/cus/ngstore', title: 'ngstore 工具', icon: 'anticon anticon-tool', checkOpen: false,
        sub: [
            { key: '/cus/ngstore/index', title: 'ngstore', icon: '', checkOpen: false },
        ],
    },
];
/* harmony export (immutable) */ __webpack_exports__["a"] = menusContent;



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;



/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__module__ = __webpack_require__("./src/module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
// const platform = platformBrowserDynamic();
// platform.bootstrapModule(AppModule);
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__module__["a" /* AppModule */]).catch(err => console.log(err));


/***/ }),

/***/ "./src/module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_zorro_antd__ = __webpack_require__("./node_modules/ng-zorro-antd/esm2015/antd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__router_uiRouting__ = __webpack_require__("./src/router/uiRouting.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_httpUtil__ = __webpack_require__("./src/utils/httpUtil.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_viser_ng__ = __webpack_require__("./node_modules/viser-ng/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_quill__ = __webpack_require__("./node_modules/ngx-quill/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_ckeditor__ = __webpack_require__("./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_baidu_map__ = __webpack_require__("./node_modules/angular2-baidu-map/esm2015/angular2-baidu-map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home__ = __webpack_require__("./src/components/home.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__contents_localStorage__ = __webpack_require__("./src/contents/localStorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__contents_comsManager__ = __webpack_require__("./src/contents/comsManager.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ngrxStore_reducer__ = __webpack_require__("./src/ngrxStore/reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm2015/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_locales_zh__ = __webpack_require__("./node_modules/@angular/common/locales/zh.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import 'zone.js';
// import 'zone.js/dist/zone.js';










// 组建管理





Object(__WEBPACK_IMPORTED_MODULE_17__angular_common__["registerLocaleData"])(__WEBPACK_IMPORTED_MODULE_18__angular_common_locales_zh__["a" /* default */]);
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_17__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__router_uiRouting__["a" /* AppUiRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_8_viser_ng__["b" /* ViserModule */],
            __WEBPACK_IMPORTED_MODULE_9_ngx_quill__["a" /* QuillModule */],
            __WEBPACK_IMPORTED_MODULE_10_ng2_ckeditor__["CKEditorModule"],
            __WEBPACK_IMPORTED_MODULE_15__ngrx_store__["b" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__ngrxStore_reducer__["b" /* reducers */], { metaReducers: __WEBPACK_IMPORTED_MODULE_16__ngrxStore_reducer__["a" /* metaReducers */] }),
            __WEBPACK_IMPORTED_MODULE_11_angular2_baidu_map__["a" /* BaiduMapModule */].forRoot({ ak: 'IDPsrfemMGHg9HFrTqGYutv2Rm8E9qVs' }),
            __WEBPACK_IMPORTED_MODULE_4_ng_zorro_antd__["b" /* NgZorroAntdModule */].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__components_home__["a" /* HomeComponent */],
            ...__WEBPACK_IMPORTED_MODULE_14__contents_comsManager__["a" /* importComs */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__contents_localStorage__["a" /* LocalStorage */], __WEBPACK_IMPORTED_MODULE_7__utils_httpUtil__["a" /* HTTP */], { provide: __WEBPACK_IMPORTED_MODULE_4_ng_zorro_antd__["a" /* NZ_I18N */], useValue: __WEBPACK_IMPORTED_MODULE_4_ng_zorro_antd__["h" /* en_US */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__components_home__["a" /* HomeComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_2__angular_core__["NO_ERRORS_SCHEMA"]]
    })
], AppModule);



/***/ }),

/***/ "./src/ngrxStore/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const JAVA = 'Java';
/* harmony export (immutable) */ __webpack_exports__["d"] = JAVA;

const ANGULAR = 'Angular';
/* harmony export (immutable) */ __webpack_exports__["a"] = ANGULAR;

const MY_ARTICLES = 'Favorite_Articles';
/* harmony export (immutable) */ __webpack_exports__["f"] = MY_ARTICLES;

class JavaArticlesAction {
    constructor() {
        this.type = JAVA;
    }
}
/* harmony export (immutable) */ __webpack_exports__["e"] = JavaArticlesAction;

class AngularArticlesAction {
    constructor() {
        this.type = ANGULAR;
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = AngularArticlesAction;

class FavoriteArticlesAction {
    constructor(payload) {
        this.payload = payload;
        this.type = MY_ARTICLES;
    }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = FavoriteArticlesAction;



/***/ }),

/***/ "./src/ngrxStore/article.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const JAVA_ARTICLES = [
    { id: 1, title: 'Java Article 1', category: 'Java' },
    { id: 2, title: 'Java Article 2', category: 'Java' },
];
/* harmony export (immutable) */ __webpack_exports__["c"] = JAVA_ARTICLES;

const ANGULAR_ARTICLES = [
    { id: 1, title: 'Angular Article 1', category: 'Angular' },
    { id: 2, title: 'Angular Article 2', category: 'Angular' },
];
/* harmony export (immutable) */ __webpack_exports__["a"] = ANGULAR_ARTICLES;

const FAVORITE_ARTICLES = [
    { id: 1, title: 'Java Article 1', category: 'Java' },
    { id: 2, title: 'Angular Article 2', category: 'Angular' }
];
/* harmony export (immutable) */ __webpack_exports__["b"] = FAVORITE_ARTICLES;



/***/ }),

/***/ "./src/ngrxStore/componentReducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("./src/ngrxStore/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article__ = __webpack_require__("./src/ngrxStore/article.ts");



const initialState = { articles: [] };
/* unused harmony export initialState */

function reducer(state = initialState, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions__["d" /* JAVA */]: {
            return { articles: __WEBPACK_IMPORTED_MODULE_2__article__["c" /* JAVA_ARTICLES */] };
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions__["a" /* ANGULAR */]: {
            return { articles: __WEBPACK_IMPORTED_MODULE_2__article__["a" /* ANGULAR_ARTICLES */] };
        }
        case __WEBPACK_IMPORTED_MODULE_1__actions__["f" /* MY_ARTICLES */]: {
            return { articles: action.payload };
        }
        default: {
            return state;
        }
    }
}
const getArticleState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["c" /* createFeatureSelector */])('articleState');
/* unused harmony export getArticleState */

const getArticles = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(getArticleState, (state) => state.articles);
/* harmony export (immutable) */ __webpack_exports__["a"] = getArticles;



/***/ }),

/***/ "./src/ngrxStore/reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export logger */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__componentReducer__ = __webpack_require__("./src/ngrxStore/componentReducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");


const reducers = {
    articleState: __WEBPACK_IMPORTED_MODULE_0__componentReducer__["b" /* reducer */]
};
/* harmony export (immutable) */ __webpack_exports__["b"] = reducers;

function logger(reducer) {
    return function (state, action) {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}
const metaReducers = !__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production
    ? [logger]
    : [];
/* harmony export (immutable) */ __webpack_exports__["a"] = metaReducers;



/***/ }),

/***/ "./src/router/uiRouting.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppUiRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uirouter_angular__ = __webpack_require__("./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contents_comsManager__ = __webpack_require__("./src/contents/comsManager.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AppUiRoutingModule = class AppUiRoutingModule {
};
AppUiRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__uirouter_angular__["UIRouterModule"].forRoot({
                states: [...__WEBPACK_IMPORTED_MODULE_2__contents_comsManager__["b" /* uiRouterContents */]],
                useHash: true,
                otherwise: '/cus/pages/login'
            })
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__uirouter_angular__["UIRouterModule"]
        ]
    })
], AppUiRoutingModule);



/***/ }),

/***/ "./src/utils/httpUtil.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HTTP; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let HTTP = class HTTP {
    constructor(http) {
        this.http = http;
    }
    get(url, params, token) {
        let headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]();
        headers.append('Content-type', 'application/json; charset=UTF-8');
        // headers.append('x-auth-token', token);
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http.get(url, {
            params: params,
            headers: headers,
        });
    }
    post(url, params, token) {
        let headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]();
        headers.append('Content-type', 'application/json; charset=UTF-8');
        // headers.append('x-auth-token', token);
        headers.append('Access-Control-Allow-Origin', '*');
        return this.http.post(url, params, {
            headers: headers
        });
    }
};
HTTP = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
], HTTP);



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map