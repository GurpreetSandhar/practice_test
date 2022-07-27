(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-us-contact-us-module"],{

/***/ "YIa3":
/*!*********************************************************!*\
  !*** ./src/app/contact-us/contact-us-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ContactUsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsRoutingModule", function() { return ContactUsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "jBux");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_1__["ContactUsComponent"]
    }
];
class ContactUsRoutingModule {
}
ContactUsRoutingModule.ɵfac = function ContactUsRoutingModule_Factory(t) { return new (t || ContactUsRoutingModule)(); };
ContactUsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ContactUsRoutingModule });
ContactUsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ContactUsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "jBux":
/*!***************************************************************!*\
  !*** ./src/app/contact-us/contact-us/contact-us.component.ts ***!
  \***************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ContactUsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) { return new (t || ContactUsComponent)(); };
ContactUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactUsComponent, selectors: [["app-contact-us"]], decls: 2, vars: 0, template: function ContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contact-us works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "lhKH":
/*!*************************************************!*\
  !*** ./src/app/contact-us/contact-us.module.ts ***!
  \*************************************************/
/*! exports provided: ContactUsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsModule", function() { return ContactUsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-us-routing.module */ "YIa3");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "jBux");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ContactUsModule {
}
ContactUsModule.ɵfac = function ContactUsModule_Factory(t) { return new (t || ContactUsModule)(); };
ContactUsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ContactUsModule });
ContactUsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_1__["ContactUsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ContactUsModule, { declarations: [_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_2__["ContactUsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_1__["ContactUsRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=contact-us-contact-us-module.js.map