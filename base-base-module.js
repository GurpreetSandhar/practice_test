(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["base-base-module"],{

/***/ "HJNQ":
/*!*************************************!*\
  !*** ./src/app/base/base.module.ts ***!
  \*************************************/
/*! exports provided: BaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModule", function() { return BaseModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _base_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-routing.module */ "ckKC");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.component */ "d4jW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class BaseModule {
}
BaseModule.ɵfac = function BaseModule_Factory(t) { return new (t || BaseModule)(); };
BaseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: BaseModule });
BaseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _base_routing_module__WEBPACK_IMPORTED_MODULE_1__["BaseRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](BaseModule, { declarations: [_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _base_routing_module__WEBPACK_IMPORTED_MODULE_1__["BaseRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] }); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "yObi");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "320Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_3__["SideBarComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModule"]], exports: [_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_3__["SideBarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]] }); })();


/***/ }),

/***/ "ckKC":
/*!*********************************************!*\
  !*** ./src/app/base/base-routing.module.ts ***!
  \*********************************************/
/*! exports provided: BaseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRoutingModule", function() { return BaseRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | tasks-tasks-module */ "tasks-tasks-module").then(__webpack_require__.bind(null, /*! ../tasks/tasks.module */ "S1vP")).then(m => m.TasksModule),
    },
    {
        path: 'contact-us',
        loadChildren: () => __webpack_require__.e(/*! import() | contact-us-contact-us-module */ "contact-us-contact-us-module").then(__webpack_require__.bind(null, /*! ../contact-us/contact-us.module */ "lhKH")).then(m => m.ContactUsModule),
    }
];
class BaseRoutingModule {
}
BaseRoutingModule.ɵfac = function BaseRoutingModule_Factory(t) { return new (t || BaseRoutingModule)(); };
BaseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BaseRoutingModule });
BaseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BaseRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=base-base-module.js.map