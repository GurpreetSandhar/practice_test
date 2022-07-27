(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tasks-tasks-module"],{

/***/ "+enO":
/*!********************************************************!*\
  !*** ./src/app/pipes/search-user-stories-list.pipe.ts ***!
  \********************************************************/
/*! exports provided: SearchUserStoriesListPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchUserStoriesListPipe", function() { return SearchUserStoriesListPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SearchUserStoriesListPipe {
    transform(array, searchTerm) {
        if (!array || !searchTerm) {
            return array;
        }
        return array.filter((element) => element.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}
SearchUserStoriesListPipe.ɵfac = function SearchUserStoriesListPipe_Factory(t) { return new (t || SearchUserStoriesListPipe)(); };
SearchUserStoriesListPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "searchUserStoriesList", type: SearchUserStoriesListPipe, pure: true });


/***/ }),

/***/ "065y":
/*!***********************************************!*\
  !*** ./src/app/tasks/tasks-routing.module.ts ***!
  \***********************************************/
/*! exports provided: TasksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksRoutingModule", function() { return TasksRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks/tasks.component */ "JMjb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_1__["TasksComponent"] }
];
class TasksRoutingModule {
}
TasksRoutingModule.ɵfac = function TasksRoutingModule_Factory(t) { return new (t || TasksRoutingModule)(); };
TasksRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TasksRoutingModule });
TasksRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TasksRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DataService {
    constructor() {
        this.tableData = [
            {
                checked: false,
                id: 'Payment _RTGS Outward_09_TC_01',
                summary: 'Verfiy if user is aable to initiate RTGS Outward payment for below combination Customer Type: Corporate ',
                status: 'Automated',
            },
            {
                checked: false,
                id: 'Payment _RTGS Outward_09_TC_02',
                summary: 'Verfiy if user is aable to initiate RTGS Outward payment for below combination Customer Type: Corporate ',
                status: 'Automated',
            },
            {
                checked: false,
                id: 'Payment _RTGS Outward_09_TC_03',
                summary: 'Verfiy if user is aable to initiate RTGS Outward payment for below combination',
                status: 'Automated',
            },
            {
                checked: false,
                id: 'Payment _RTGS Outward_09_TC_04',
                summary: 'Verfiy if user is aable to initiate RTGS Outward payment for below combination',
                status: 'Automated',
            },
        ];
        this.userStoriesListData = [
            {
                id: 1,
                name: 'WATS 930',
                status: 'Review',
                summary: 'As a use, I should have an option to run Ransomware testing for my DB-Table, Database and Column so that how fast.',
                testCases: [
                    {
                        total: '03',
                        passed: '01',
                        failed: '01',
                        notExecuted: '01',
                    },
                ],
                testPacks: [
                    {
                        total: '05',
                        passed: '02',
                        failed: '02',
                        notExecuted: '01',
                    },
                ],
            },
            {
                id: 2,
                name: 'WATS 931',
                status: 'Dev Done',
                summary: 'As a use, I should have an option to run Ransomware testing for my DB-Table, Database and Column so that how fast.',
                testCases: [
                    {
                        total: '13',
                        passed: '10',
                        failed: '01',
                        notExecuted: '02',
                    },
                ],
                testPacks: [
                    {
                        total: '05',
                        passed: '02',
                        failed: '02',
                        notExecuted: '01',
                    },
                ],
            },
            {
                id: 3,
                name: 'WATS 932',
                status: 'Done',
                summary: 'As a use, I should have an option to run Ransomware testing for my DB-Table, Database and Column so that how fast.',
                testCases: [
                    {
                        total: '14',
                        passed: '11',
                        failed: '01',
                        notExecuted: '02',
                    },
                ],
                testPacks: [
                    {
                        total: '05',
                        passed: '02',
                        failed: '02',
                        notExecuted: '01',
                    },
                ],
            },
            {
                id: 4,
                name: 'WATS 931',
                status: 'Dev Done',
                summary: 'As a use, I should have an option to run Ransomware testing for my DB-Table, Database and Column so that how fast.',
                testCases: [
                    {
                        total: '12',
                        passed: '10',
                        failed: '01',
                        notExecuted: '01',
                    },
                ],
                testPacks: [
                    {
                        total: '06',
                        passed: '02',
                        failed: '02',
                        notExecuted: '04',
                    },
                ],
            },
        ];
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "JMjb":
/*!************************************************!*\
  !*** ./src/app/tasks/tasks/tasks.component.ts ***!
  \************************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/data.service */ "EnSQ");
/* harmony import */ var _user_stories_list_user_stories_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-stories-list/user-stories-list.component */ "PoUj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function TasksComponent_tr_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " more_vert ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1 == null ? null : data_r1.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1 == null ? null : data_r1.summary, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1 == null ? null : data_r1.status);
} }
const _c0 = function (a0) { return { table_btn_active: a0 }; };
class TasksComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.tableResponse = this.dataService.tableData;
        this.selectedTableButton = 'TEST CASES';
    }
    ngOnInit() { }
    selectedStory(event) {
        console.log('event', event);
        this.selectedUserStory = event;
    }
    selectedTablebtn(value) {
        this.selectedTableButton = value;
    }
}
TasksComponent.ɵfac = function TasksComponent_Factory(t) { return new (t || TasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
TasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TasksComponent, selectors: [["app-tasks"]], decls: 95, vars: 15, consts: [[1, "col-12"], [1, "card", "border_radius_10"], [1, "d-flex"], [1, "userList"], [3, "selectedStory"], [1, "summary"], [1, "mx-4", "mt-3"], [1, "f-20", "lato_bold", "text_black_dark"], [1, "row", "mt-4"], [1, "col-6"], [1, "f-16", "lato_bold", "black_grey_text"], [1, "border", "mt-2", "border_radius_10"], [1, "row"], [1, "col-3", "border-right", "d-flex", "flex-column", "align-items-center", "py-3"], [1, "black_grey_text", "f-16", "lato_bold"], [1, "pt-2", "lighter_green_text", "lato_regular", "f-24"], [1, "pt-2", "pink_dark_text", "lato_regular", "f-24"], [1, "col-3", "d-flex", "flex-column", "align-items-center", "py-3", "pl-0"], [1, "pt-2", "pink_dark_text", "lato_regular", "f-24", "pl-0"], [1, "my-4", "col-5", "pl-0"], [1, "p-2", "align-items-center", "border_radius_5", "border_info", "d-flex", "align-items-center"], [1, "material-icons-outlined", "safron_dark_icon", "f-16", "ml-2"], [1, "ml-2", "black_grey_text", "lato_regular", "f-13"], [1, "py-4", "pl-0", "col-12", "d-flex", "justify-content-between"], [1, "table_btn", "f-12", 3, "ngClass", "click"], [1, "table_btn", "f-12", "ml-3", 3, "ngClass", "click"], [1, "material-icons-outlined", "f-26", 2, "color", "#27b69c"], [1, "material-icons-outlined", "f-26", "mx-3", "black_grey_text"], [1, "material-icons-outlined", "f-26", "black_grey_text"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], ["type", "checkbox", "value", "", "id", "flexCheckChecked", 1, "form-check-input"], [1, "blue_dark_text", "f-14", "lato_regular"], [1, "black_grey_text", "f-14", "lato_regular"], ["type", "button", 1, "table_status_btn", "d-flex", "align-items-center", "f-11", "lato_bold"], [1, "material-icons-outlined", "f-20"], [1, "material-icons-outlined", "black_text", "f-24"]], template: function TasksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-user-stories-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedStory", function TasksComponent_Template_app_user_stories_list_selectedStory_4_listener($event) { return ctx.selectedStory($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Summary : WAT-936");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Test Cases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Passed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Failed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Not Executed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Test Packs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Passed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Failed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Not Executed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Test cases are not modified since 28 April 2022 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasksComponent_Template_button_click_69_listener() { return ctx.selectedTablebtn("TEST CASES"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " TEST CASES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasksComponent_Template_button_click_71_listener() { return ctx.selectedTablebtn("TEST PACKS"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " TEST PACKS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " add_circle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " file_upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " open_in_full ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "table", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, TasksComponent_tr_94_Template, 16, 3, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedUserStory == null ? null : ctx.selectedUserStory.testCases[0] == null ? null : ctx.selectedUserStory.testCases[0].total);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedUserStory == null ? null : ctx.selectedUserStory.testCases[0] == null ? null : ctx.selectedUserStory.testCases[0].passed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedUserStory == null ? null : ctx.selectedUserStory.testCases[0] == null ? null : ctx.selectedUserStory.testCases[0].failed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedUserStory == null ? null : ctx.selectedUserStory.testCases[0] == null ? null : ctx.selectedUserStory.testCases[0].notExecuted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedUserStory == null ? null : ctx.selectedUserStory.testPacks[0] == null ? null : ctx.selectedUserStory.testPacks[0].total);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedUserStory == null ? null : ctx.selectedUserStory.testPacks[0] == null ? null : ctx.selectedUserStory.testPacks[0].passed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedUserStory == null ? null : ctx.selectedUserStory.testPacks[0] == null ? null : ctx.selectedUserStory.testPacks[0].failed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedUserStory == null ? null : ctx.selectedUserStory.testPacks[0] == null ? null : ctx.selectedUserStory.testPacks[0].notExecuted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.selectedTableButton === "TEST CASES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.selectedTableButton === "TEST PACKS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tableResponse);
    } }, directives: [_user_stories_list_user_stories_list_component__WEBPACK_IMPORTED_MODULE_2__["UserStoriesListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".btn_td[_ngcontent-%COMP%] {\n  min-width: 300px;\n}\n\n.createBtn[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.green[_ngcontent-%COMP%] {\n  color: lightgreen;\n}\n\n.blue[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n\n.cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.userList[_ngcontent-%COMP%] {\n  flex: 0 1 23%;\n}\n\n.summary[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.text_black_dark[_ngcontent-%COMP%] {\n  color: var(--black_dark);\n}\n\n.black_grey_text[_ngcontent-%COMP%] {\n  color: var(--black_grey);\n}\n\n.black_text[_ngcontent-%COMP%] {\n  color: var(--black);\n}\n\n.pink_dark_text[_ngcontent-%COMP%] {\n  color: var(--pink_dark);\n}\n\n.blue_dark_text[_ngcontent-%COMP%] {\n  color: var(--blue_dark);\n}\n\n.safron_dark_icon[_ngcontent-%COMP%] {\n  color: var(--safron_dark);\n}\n\n.lighter_green_text[_ngcontent-%COMP%] {\n  color: var(--lighter_green);\n}\n\n.border_info[_ngcontent-%COMP%] {\n  border: 2px solid var(--peach_dark);\n  background-color: var(--peach_light);\n}\n\n.table_btn[_ngcontent-%COMP%] {\n  border: 0px;\n  border-radius: 12px;\n  padding: 4px 18px;\n  background: var(--black_grey);\n  color: var(--white);\n}\n\n.table_btn_active[_ngcontent-%COMP%] {\n  background: var(--dark_pink);\n  color: var(--white);\n}\n\nthead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background-color: #eff2f6;\n}\n\n.table_status_btn[_ngcontent-%COMP%] {\n  border: 1.5px solid;\n  background: white;\n  border-radius: 6px;\n  padding-left: 10px;\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0YXNrcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLE9BQUE7QUFDRjs7QUFFQTtFQUNFLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQ0FBQTtFQUNBLG9DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDRiIsImZpbGUiOiJ0YXNrcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5fdGQge1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5jcmVhdGVCdG4ge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5ncmVlbiB7XHJcbiAgY29sb3I6IGxpZ2h0Z3JlZW47XHJcbn1cclxuXHJcbi5ibHVlIHtcclxuICBjb2xvcjogIzAwN2JmZjtcclxufVxyXG5cclxuLmN1cnNvciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udXNlckxpc3Qge1xyXG4gIGZsZXg6IDAgMSAyMyU7XHJcbn1cclxuXHJcbi5zdW1tYXJ5IHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4udGV4dF9ibGFja19kYXJrIHtcclxuICBjb2xvcjogdmFyKC0tYmxhY2tfZGFyayk7XHJcbn1cclxuXHJcbi5ibGFja19ncmV5X3RleHQge1xyXG4gIGNvbG9yOiB2YXIoLS1ibGFja19ncmV5KTtcclxufVxyXG5cclxuLmJsYWNrX3RleHQge1xyXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XHJcbn1cclxuXHJcbi5waW5rX2RhcmtfdGV4dCB7XHJcbiAgY29sb3I6IHZhcigtLXBpbmtfZGFyayk7XHJcbn1cclxuXHJcbi5ibHVlX2RhcmtfdGV4dCB7XHJcbiAgY29sb3I6IHZhcigtLWJsdWVfZGFyayk7XHJcbn1cclxuXHJcbi5zYWZyb25fZGFya19pY29uIHtcclxuICBjb2xvcjogdmFyKC0tc2Fmcm9uX2RhcmspO1xyXG59XHJcblxyXG4ubGlnaHRlcl9ncmVlbl90ZXh0IHtcclxuICBjb2xvcjogdmFyKC0tbGlnaHRlcl9ncmVlbik7XHJcbn1cclxuXHJcbi5ib3JkZXJfaW5mbyB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcGVhY2hfZGFyayk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGVhY2hfbGlnaHQpO1xyXG59XHJcblxyXG4udGFibGVfYnRuIHtcclxuICBib3JkZXI6IDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDRweCAxOHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJsYWNrX2dyZXkpO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbi50YWJsZV9idG5fYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrX3BpbmspO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbn1cclxuXHJcbnRoZWFkIHRyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmMmY2O1xyXG59XHJcblxyXG4udGFibGVfc3RhdHVzX2J0biB7XHJcbiAgYm9yZGVyOiAxLjVweCBzb2xpZDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "PoUj":
/*!************************************************************************!*\
  !*** ./src/app/tasks/user-stories-list/user-stories-list.component.ts ***!
  \************************************************************************/
/*! exports provided: UserStoriesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStoriesListComponent", function() { return UserStoriesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_search_user_stories_list_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/search-user-stories-list.pipe */ "+enO");






const _c0 = function (a0) { return { "active_list": a0 }; };
function UserStoriesListComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserStoriesListComponent_div_8_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const list_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectedList(list_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " menu_book ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Trace");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r0.activeList === (list_r1 == null ? null : list_r1.id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1 == null ? null : list_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.selectedStatusBtn(list_r1 == null ? null : list_r1.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](list_r1 == null ? null : list_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r1 == null ? null : list_r1.summary, " ");
} }
class UserStoriesListComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.selectedStory = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.userListData = this.dataService.userStoriesListData;
        this.searchedValue = '';
    }
    ngOnInit() {
        console.log('userListData', this.userListData);
        this.selectedList(this.userListData[0]);
    }
    selectedStatusBtn(status) {
        switch (status) {
            case 'Review':
                return { review_btn: true };
            case 'Dev Done':
                return { dev_done_btn: true };
            case 'Done':
                return { done_btn: true };
        }
    }
    selectedList(list) {
        this.activeList = list.id;
        this.selectedStory.emit(list);
    }
}
UserStoriesListComponent.ɵfac = function UserStoriesListComponent_Factory(t) { return new (t || UserStoriesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
UserStoriesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserStoriesListComponent, selectors: [["app-user-stories-list"]], outputs: { selectedStory: "selectedStory" }, decls: 10, vars: 5, consts: [[1, "border-right"], [1, "px-3", "py-4", "d-flex", "justify-content-between", "border-bottom"], [1, "lato_bold", "f-20", "black_grey_text"], [1, "material-icons-outlined", "f-26", "cool_green_icon"], [1, "p-3", "pt-4", "pb-3"], ["type", "text", "placeholder", "Search/Filter", 1, "w-100", "f-10", "serach_input", "lato_regular", 3, "ngModel", "ngModelChange"], ["class", "pt-4 cursor", 4, "ngFor", "ngForOf"], [1, "pt-4", "cursor"], [1, "border-bottom", 3, "ngClass", "click"], [1, "mx-3"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "align-items-center"], [1, "material-icons-outlined", 2, "color", "var(--black_grey)"], [1, "pl-2", "f-16", "blue_dark_text", "lato_regular"], [1, "btn_user", 3, "ngClass"], [1, "btn_user", "white_border_btn", "ml-2"], [1, "black_grey_text", "f-12", "black_grey_text", "lato_regular", "pt-4"], [1, "line-clamp"]], template: function UserStoriesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "User Stories List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " add_circle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserStoriesListComponent_Template_input_ngModelChange_7_listener($event) { return ctx.searchedValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserStoriesListComponent_div_8_Template, 17, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "searchUserStoriesList");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchedValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 2, ctx.userListData, ctx.searchedValue));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], pipes: [_pipes_search_user_stories_list_pipe__WEBPACK_IMPORTED_MODULE_4__["SearchUserStoriesListPipe"]], styles: [".btn_user[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  font-size: 11px;\n  border-color: transparent;\n  width: 68px;\n  color: var(--black_grey);\n}\n\n.review_btn[_ngcontent-%COMP%] {\n  background-color: var(--safron);\n}\n\n.dev_done_btn[_ngcontent-%COMP%] {\n  background-color: var(--bluish_pink);\n}\n\n.done_btn[_ngcontent-%COMP%] {\n  background-color: var(--light_sky);\n}\n\n.white_border_btn[_ngcontent-%COMP%] {\n  background-color: var(--white);\n  border: 1px solid var(--black_grey);\n}\n\n.blue_dark_text[_ngcontent-%COMP%] {\n  color: var(--blue_dark);\n  font-weight: 600;\n  line-height: 24px;\n}\n\n.black_grey_text[_ngcontent-%COMP%] {\n  color: var(--black_grey);\n  line-height: 21px;\n  font-weight: 400;\n}\n\n.line-clamp[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.active_list[_ngcontent-%COMP%] {\n  background: #f4f7f8;\n  border-left: 3px solid #82ddbc;\n}\n\n.cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.cool_green_icon[_ngcontent-%COMP%] {\n  color: var(--cool_green);\n}\n\n.serach_input[_ngcontent-%COMP%] {\n  border: 0px;\n  background: #e3e5ed;\n  height: 34px;\n  border-radius: 10px;\n  padding-left: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLXN0b3JpZXMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBRUEsV0FBQTtFQUNBLHdCQUFBO0FBQUY7O0FBR0E7RUFDRSwrQkFBQTtBQUFGOztBQUdBO0VBQ0Usb0NBQUE7QUFBRjs7QUFHQTtFQUNFLGtDQUFBO0FBQUY7O0FBR0E7RUFDRSw4QkFBQTtFQUNBLG1DQUFBO0FBQUY7O0FBR0E7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsOEJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTtFQUNFLHdCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFGIiwiZmlsZSI6InVzZXItc3Rvcmllcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bl91c2VyIHtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLy8gcGFkZGluZzogMXB4IDE2cHg7XHJcbiAgd2lkdGg6IDY4cHg7XHJcbiAgY29sb3I6IHZhcigtLWJsYWNrX2dyZXkpO1xyXG59XHJcblxyXG4ucmV2aWV3X2J0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Fmcm9uKTtcclxufVxyXG5cclxuLmRldl9kb25lX2J0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1aXNoX3BpbmspO1xyXG59XHJcblxyXG4uZG9uZV9idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0X3NreSk7XHJcbn1cclxuXHJcbi53aGl0ZV9ib3JkZXJfYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2tfZ3JleSk7XHJcbn1cclxuXHJcbi5ibHVlX2RhcmtfdGV4dCB7XHJcbiAgY29sb3I6IHZhcigtLWJsdWVfZGFyayk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxufVxyXG5cclxuLmJsYWNrX2dyZXlfdGV4dCB7XHJcbiAgY29sb3I6IHZhcigtLWJsYWNrX2dyZXkpO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5saW5lLWNsYW1wIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uYWN0aXZlX2xpc3Qge1xyXG4gIGJhY2tncm91bmQ6ICNmNGY3Zjg7XHJcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjODJkZGJjO1xyXG59XHJcblxyXG4uY3Vyc29yIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb29sX2dyZWVuX2ljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1jb29sX2dyZWVuKTtcclxufVxyXG5cclxuLnNlcmFjaF9pbnB1dCB7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYmFja2dyb3VuZDogI2UzZTVlZDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "S1vP":
/*!***************************************!*\
  !*** ./src/app/tasks/tasks.module.ts ***!
  \***************************************/
/*! exports provided: TasksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksModule", function() { return TasksModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _tasks_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks-routing.module */ "065y");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks/tasks.component */ "JMjb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _user_stories_list_user_stories_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-stories-list/user-stories-list.component */ "PoUj");
/* harmony import */ var _pipes_search_user_stories_list_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/search-user-stories-list.pipe */ "+enO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class TasksModule {
}
TasksModule.ɵfac = function TasksModule_Factory(t) { return new (t || TasksModule)(); };
TasksModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: TasksModule });
TasksModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _tasks_routing_module__WEBPACK_IMPORTED_MODULE_1__["TasksRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](TasksModule, { declarations: [_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_2__["TasksComponent"],
        _user_stories_list_user_stories_list_component__WEBPACK_IMPORTED_MODULE_5__["UserStoriesListComponent"],
        _pipes_search_user_stories_list_pipe__WEBPACK_IMPORTED_MODULE_6__["SearchUserStoriesListPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _tasks_routing_module__WEBPACK_IMPORTED_MODULE_1__["TasksRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=tasks-tasks-module.js.map