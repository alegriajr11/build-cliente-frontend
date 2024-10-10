"use strict";
(self["webpackChunklumar"] = self["webpackChunklumar"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop/shop.component */ 5558);
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/pages.component */ 5816);
/* harmony import */ var _elements_elements_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/elements.component */ 3048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);






const routes = [{
  path: '',
  redirectTo: 'home/lumar',
  pathMatch: 'full'
}, {
  path: 'home',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 5055)).then(m => m.HomeModule)
}, {
  path: 'shop',
  component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_0__.ShopComponent,
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_shop_shop_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./shop/shop.module */ 393)).then(m => m.ShopModule)
}, {
  path: 'pages',
  component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_1__.PagesComponent,
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_pages_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 8423)).then(m => m.PagesModule)
}, {
  path: 'elements',
  component: _elements_elements_component__WEBPACK_IMPORTED_MODULE_2__.ElementsComponent,
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_elements_elements_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./elements/elements.module */ 6567)).then(m => m.ElementsModule)
}, {
  path: '**',
  redirectTo: 'home/lumar'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
      useHash: false,
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    }), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5074);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5842);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-loading-bar/core */ 5545);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 597);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/tap-to-top/tap-to-top.component */ 7349);
/* harmony import */ var _shared_components_redes_sociales_floating_redes_sociales_floating_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/redes-sociales-floating/redes-sociales-floating.component */ 1285);









class AppComponent {
  constructor(platformId, loader, translate) {
    this.platformId = platformId;
    this.loader = loader;
    // For Progressbar
    this.loaders = this.loader.progress$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.delay)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.withLatestFrom)(this.loader.progress$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(v => v[1]));
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformId)) {
      translate.setDefaultLang('en');
      translate.addLangs(['en', 'fr']);
    }
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_7__.LoadingBarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 4,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "ngx-loading-bar")(1, "router-outlet")(2, "app-tap-to-top")(3, "app-redes-sociales-floating");
      }
    },
    dependencies: [_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_7__.LoadingBarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet, _shared_components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_0__.TapToTopComponent, _shared_components_redes_sociales_floating_redes_sociales_floating_component__WEBPACK_IMPORTED_MODULE_1__.RedesSocialesFloatingComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-loading-bar/http-client */ 845);
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-loading-bar/router */ 2653);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 597);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ 5101);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/shared.module */ 3887);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop/shop.component */ 5558);
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/pages.component */ 5816);
/* harmony import */ var _elements_elements_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/elements.component */ 3048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);



















// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule.withServerTransition({
      appId: 'serverApp'
    }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule, _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_12__.LoadingBarHttpClientModule, _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_13__.LoadingBarRouterModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrModule.forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule.forRoot({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient]
      }
    }), _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _shop_shop_component__WEBPACK_IMPORTED_MODULE_3__.ShopComponent, _pages_pages_component__WEBPACK_IMPORTED_MODULE_4__.PagesComponent, _elements_elements_component__WEBPACK_IMPORTED_MODULE_5__.ElementsComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule, _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_12__.LoadingBarHttpClientModule, _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_13__.LoadingBarRouterModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 3048:
/*!************************************************!*\
  !*** ./src/app/elements/elements.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElementsComponent: () => (/* binding */ ElementsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_footer_lumar_footer_lumar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/footer-lumar/footer-lumar.component */ 5532);
/* harmony import */ var _shared_header_lumar_header_lumar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/header-lumar/header-lumar.component */ 1748);




class ElementsComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function ElementsComponent_Factory(t) {
    return new (t || ElementsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ElementsComponent,
    selectors: [["app-elements"]],
    decls: 3,
    vars: 1,
    consts: [[3, "sticky"]],
    template: function ElementsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header-lumar", 0)(1, "router-outlet")(2, "app-footer-lumar");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("sticky", true);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _shared_footer_lumar_footer_lumar_component__WEBPACK_IMPORTED_MODULE_0__.FooterLumarComponent, _shared_header_lumar_header_lumar_component__WEBPACK_IMPORTED_MODULE_1__.HeaderLumarComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5816:
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagesComponent: () => (/* binding */ PagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_footer_lumar_footer_lumar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/footer-lumar/footer-lumar.component */ 5532);
/* harmony import */ var _shared_header_lumar_header_lumar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/header-lumar/header-lumar.component */ 1748);






function PagesComponent_app_header_lumar_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header-lumar", 2);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("sticky", true);
  }
}
function PagesComponent_app_footer_lumar_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-footer-lumar");
  }
}
class PagesComponent {
  constructor(router) {
    this.router = router;
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
        this.url = event.url;
      }
    });
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function PagesComponent_Factory(t) {
    return new (t || PagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: PagesComponent,
    selectors: [["app-pages"]],
    decls: 3,
    vars: 2,
    consts: [[3, "sticky", 4, "ngIf"], [4, "ngIf"], [3, "sticky"]],
    template: function PagesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PagesComponent_app_header_lumar_0_Template, 1, 1, "app-header-lumar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PagesComponent_app_footer_lumar_2_Template, 1, 0, "app-footer-lumar", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.url != "/pages/comingsoon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.url != "/pages/comingsoon");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _shared_footer_lumar_footer_lumar_component__WEBPACK_IMPORTED_MODULE_0__.FooterLumarComponent, _shared_header_lumar_header_lumar_component__WEBPACK_IMPORTED_MODULE_1__.HeaderLumarComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8173:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BreadcrumbComponent: () => (/* binding */ BreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class BreadcrumbComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function BreadcrumbComponent_Factory(t) {
    return new (t || BreadcrumbComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BreadcrumbComponent,
    selectors: [["app-breadcrumb"]],
    inputs: {
      title: "title",
      breadcrumb: "breadcrumb"
    },
    decls: 15,
    vars: 3,
    consts: [[1, "breadcrumb-section"], [1, "container"], [1, "row"], [1, "col-sm-6"], [1, "page-title"], ["aria-label", "breadcrumb", 1, "theme-breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], ["aria-current", "page", 1, "breadcrumb-item", "active"]],
    template: function BreadcrumbComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3)(8, "nav", 5)(9, "ol", 6)(10, "li", 7)(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/home/lumar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.breadcrumb);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7487:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/categories/categories.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoriesComponent: () => (/* binding */ CategoriesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/product.service */ 5085);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);




const _c0 = a0 => [a0];
function CategoriesComponent_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, category_r1.link));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", category_r1.name, " ");
  }
}
class CategoriesComponent {
  constructor(productService) {
    this.productService = productService;
    this.products = [];
    this.collapse = true;
    this.productService.getProducts.subscribe(product => this.products = product);
  }
  ngOnInit() {}
  get filterbyCategory() {
    const categories = [{
      name: 'Regalos',
      link: '/shop/categoria/regalos'
    }, {
      name: 'Decorativas',
      link: '/shop/categoria/decorativas'
    }, {
      name: 'Hogar',
      link: '/shop/categoria/hogar'
    }, {
      name: 'Oficina',
      link: '/shop/categoria/doficina'
    }, {
      name: 'Joyeria',
      link: '/shop/categoria/joyeria'
    }, {
      name: 'Accesorios para ropa',
      link: '/shop/categoria/accesorios-ropa'
    }, {
      name: 'Ropa para hombre',
      link: '/shop/categoria/ropa-hombre'
    }, {
      name: 'Ropa para mujer',
      link: '/shop/categoria/ropa-mujer'
    }, {
      name: 'Mochilas',
      link: '/shop/categoria/mochilas'
    }, {
      name: 'Billetera',
      link: '/shop/categoria/billetera'
    }];
    return categories;
  }
  static #_ = this.ɵfac = function CategoriesComponent_Factory(t) {
    return new (t || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CategoriesComponent,
    selectors: [["app-categories"]],
    decls: 7,
    vars: 3,
    consts: [[1, "collection-collapse-block", "border-0"], [1, "collapse-block-title", 3, "click"], [1, "collection-collapse-block-content"], [1, "collection-brand-filter"], [1, "category-list"], [4, "ngFor", "ngForOf"], [3, "routerLink"]],
    template: function CategoriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoriesComponent_Template_h3_click_1_listener() {
          return ctx.collapse = !ctx.collapse;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Categorias");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CategoriesComponent_li_6_Template, 3, 4, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.collapse);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filterbyCategory);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9941:
/*!********************************************************************!*\
  !*** ./src/app/shared/components/left-menu/left-menu.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeftMenuComponent: () => (/* binding */ LeftMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/nav.service */ 1931);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);




const _c0 = () => ["/home/one"];
function LeftMenuComponent_li_12_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 18);
  }
}
function LeftMenuComponent_li_12_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeftMenuComponent_li_12_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.toggletNavActive(menuItem_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LeftMenuComponent_li_12_a_1_span_2_Template, 1, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r2.children);
  }
}
function LeftMenuComponent_li_12_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 18);
  }
}
function LeftMenuComponent_li_12_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LeftMenuComponent_li_12_a_2_span_2_Template, 1, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", menuItem_r2.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r2.children);
  }
}
function LeftMenuComponent_li_12_a_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 18);
  }
}
function LeftMenuComponent_li_12_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LeftMenuComponent_li_12_a_3_span_2_Template, 1, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", menuItem_r2.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r2.children);
  }
}
function LeftMenuComponent_li_12_a_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 18);
  }
}
function LeftMenuComponent_li_12_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LeftMenuComponent_li_12_a_4_span_2_Template, 1, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", menuItem_r2.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r2.children);
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", childrenItem_r5.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenItem_r5.title, " ");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", !childrenItem_r5.type ? null : childrenItem_r5.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenItem_r5.title, " ");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", !childrenItem_r5.type ? null : childrenItem_r5.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenItem_r5.title, " ");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", childrenSubItem_r6.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenSubItem_r6.title, " ");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", childrenSubItem_r6.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenSubItem_r6.title, " ");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", childrenSubItem_r6.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenSubItem_r6.title, " ");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubSubItem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", childrenSubSubItem_r7.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenSubSubItem_r7.title, " ");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubSubItem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", childrenSubSubItem_r7.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenSubSubItem_r7.title, " ");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubSubItem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", childrenSubSubItem_r7.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenSubSubItem_r7.title, " ");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_ul_4_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubSubSubItem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", childrenSubSubSubItem_r8.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenSubSubSubItem_r8.title, " ");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_ul_4_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubSubSubItem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", childrenSubSubSubItem_r8.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenSubSubSubItem_r8.title, " ");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_ul_4_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubSubSubItem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", childrenSubSubSubItem_r8.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenSubSubSubItem_r8.title, " ");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_ul_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_ul_4_li_1_a_1_Template, 2, 2, "a", 14)(2, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_ul_4_li_1_a_2_Template, 2, 2, "a", 15)(3, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_ul_4_li_1_a_3_Template, 2, 2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubSubSubItem_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubSubSubItem_r8.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubSubSubItem_r8.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubSubSubItem_r8.type === "extTabLink");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_ul_4_li_1_Template, 4, 3, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubSubItem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", childrenSubSubItem_r7.children);
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_a_1_Template, 2, 2, "a", 14)(2, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_a_2_Template, 2, 2, "a", 15)(3, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_a_3_Template, 2, 2, "a", 24)(4, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_ul_4_Template, 2, 1, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubSubItem_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubSubItem_r7.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubSubItem_r7.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubSubItem_r7.type === "extTabLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubSubItem_r7.children);
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_li_1_Template, 5, 4, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", childrenSubItem_r6.children);
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_a_1_Template, 2, 2, "a", 14)(2, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_a_2_Template, 2, 2, "a", 15)(3, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_a_3_Template, 2, 2, "a", 24)(4, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_ul_4_Template, 2, 1, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r6.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r6.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r6.type === "extTabLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r6.children);
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_li_1_Template, 5, 4, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", childrenItem_r5.children);
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_a_1_Template, 2, 2, "a", 23)(2, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_a_2_Template, 2, 2, "a", 15)(3, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_a_3_Template, 2, 2, "a", 24)(4, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_ul_4_Template, 2, 1, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r5.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r5.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r5.type === "extTabLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r5.children);
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeftMenuComponent_li_12_ul_5_ng_container_1_li_1_Template, 5, 4, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", menuItem_r2.children);
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_2_div_3_li_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", childrenSubItem_r9.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenSubItem_r9.title, " ");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_2_div_3_li_5_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", childrenSubItem_r9.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenSubItem_r9.title, " ");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_2_div_3_li_5_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", childrenSubItem_r9.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", childrenSubItem_r9.title, " ");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_2_div_3_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeftMenuComponent_li_12_ul_5_ng_container_2_div_3_li_5_a_1_Template, 2, 2, "a", 14)(2, LeftMenuComponent_li_12_ul_5_ng_container_2_div_3_li_5_a_2_Template, 2, 2, "a", 15)(3, LeftMenuComponent_li_12_ul_5_ng_container_2_div_3_li_5_a_3_Template, 2, 2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r9.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r9.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r9.type === "extTabLink");
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29)(1, "div", 32)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LeftMenuComponent_li_12_ul_5_ng_container_2_div_3_li_5_Template, 4, 3, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const childrenItem_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](childrenItem_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", childrenItem_r10.children);
  }
}
function LeftMenuComponent_li_12_ul_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li")(2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LeftMenuComponent_li_12_ul_5_ng_container_2_div_3_Template, 6, 2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 29)(5, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", menuItem_r2.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
  }
}
function LeftMenuComponent_li_12_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeftMenuComponent_li_12_ul_5_ng_container_1_Template, 2, 1, "ng-container", 21)(2, LeftMenuComponent_li_12_ul_5_ng_container_2_Template, 7, 3, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](menuItem_r2.megaMenu ? "mega-menu clothing-menu" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("opensub1", menuItem_r2.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !menuItem_r2.megaMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r2.megaMenu);
  }
}
function LeftMenuComponent_li_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function LeftMenuComponent_li_12_Template_li_mouseover_0_listener() {
      const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.onHover(menuItem_r2.children ? true : false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LeftMenuComponent_li_12_a_1_Template, 3, 2, "a", 13)(2, LeftMenuComponent_li_12_a_2_Template, 3, 3, "a", 14)(3, LeftMenuComponent_li_12_a_3_Template, 3, 3, "a", 15)(4, LeftMenuComponent_li_12_a_4_Template, 3, 3, "a", 15)(5, LeftMenuComponent_li_12_ul_5_Template, 3, 6, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r2.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r2.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r2.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r2.type === "extTabLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r2.children);
  }
}
class LeftMenuComponent {
  constructor(router, navServices) {
    this.router = router;
    this.navServices = navServices;
    this.router.events.subscribe(() => {
      this.navServices.leftMenuToggle = false;
    });
  }
  ngOnInit() {
    this.listandoMenus();
  }
  listandoMenus() {
    this.navServices.leftMenuItems.subscribe(menuItems => this.menuItems = menuItems);
  }
  leftMenuToggle() {
    this.navServices.leftMenuToggle = !this.navServices.leftMenuToggle;
  }
  // Click Toggle menu (Mobile)
  toggletNavActive(item) {
    item.active = !item.active;
  }
  onHover(menuItem) {
    if (window.innerWidth > 1200 && menuItem) {
      document.getElementById('unset').classList.add('sidebar-unset');
    } else {
      document.getElementById('unset').classList.remove('sidebar-unset');
    }
  }
  static #_ = this.ɵfac = function LeftMenuComponent_Factory(t) {
    return new (t || LeftMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_0__.NavService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LeftMenuComponent,
    selectors: [["app-left-menu"]],
    decls: 13,
    vars: 3,
    consts: [[1, "navbar"], ["href", "javascript:void(0)", 3, "click"], [1, "bar-style"], ["aria-hidden", "true", 1, "fa", "fa-bars", "sidebar-bar"], ["id", "mySidenav", 1, "sidenav"], ["href", "javascript:void(0)", 1, "sidebar-overlay", 3, "click", "mouseover"], ["id", "unset"], [3, "click"], [1, "sidebar-back", "text-start"], ["aria-hidden", "true", 1, "fa", "fa-angle-left", "pe-2"], ["id", "sub-menu", 1, "sidebar-menu"], [3, "mouseover", 4, "ngFor", "ngForOf"], [3, "mouseover"], ["href", "javascript:void(0)", 3, "click", 4, "ngIf"], [3, "routerLink", 4, "ngIf"], [3, "href", 4, "ngIf"], [3, "class", "opensub1", 4, "ngIf"], ["class", "sub-arrow", 4, "ngIf"], [1, "sub-arrow"], [3, "routerLink"], [3, "href"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "has-submenu", 3, "routerLink", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], [1, "has-submenu", 3, "routerLink"], ["target", "_blank", 3, "href"], [1, "row", "m-0"], ["class", "col-xl-4", 4, "ngFor", "ngForOf"], [1, "col-xl-4"], [1, "mega-menu-banner", 3, "routerLink"], ["src", "", "alt", "", 1, "img-fluid"], [1, "link-section"]],
    template: function LeftMenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeftMenuComponent_Template_a_click_1_listener() {
          return ctx.leftMenuToggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeftMenuComponent_Template_a_click_5_listener() {
          return ctx.leftMenuToggle();
        })("mouseover", function LeftMenuComponent_Template_a_mouseover_5_listener() {
          return ctx.onHover(false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nav", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeftMenuComponent_Template_div_click_7_listener() {
          return ctx.leftMenuToggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Regresar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LeftMenuComponent_li_12_Template, 6, 5, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("openSide", ctx.navServices == null ? null : ctx.navServices.leftMenuToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menuItems);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8397:
/*!**********************************************************!*\
  !*** ./src/app/shared/components/menu/menu.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuComponent: () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/nav.service */ 1931);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 597);





const _c0 = () => ({
  exact: true
});
function MenuComponent_li_10_a_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, menuItem_r2.badgeText));
  }
}
function MenuComponent_li_10_a_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 18);
  }
}
function MenuComponent_li_10_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_li_10_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.toggletNavActive(menuItem_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MenuComponent_li_10_a_1_div_3_Template, 3, 3, "div", 15)(4, MenuComponent_li_10_a_1_span_4_Template, 1, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, menuItem_r2.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r2.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r2.children);
  }
}
function MenuComponent_li_10_a_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, menuItem_r2.badgeText));
  }
}
function MenuComponent_li_10_a_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 18);
  }
}
function MenuComponent_li_10_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MenuComponent_li_10_a_2_div_2_Template, 3, 3, "div", 15)(3, MenuComponent_li_10_a_2_span_3_Template, 1, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", menuItem_r2.path)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r2.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r2.children);
  }
}
function MenuComponent_li_10_a_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, menuItem_r2.badgeText));
  }
}
function MenuComponent_li_10_a_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 18);
  }
}
function MenuComponent_li_10_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MenuComponent_li_10_a_3_div_2_Template, 3, 3, "div", 15)(3, MenuComponent_li_10_a_3_span_3_Template, 1, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", menuItem_r2.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r2.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r2.children);
  }
}
function MenuComponent_li_10_a_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, menuItem_r2.badgeText));
  }
}
function MenuComponent_li_10_a_4_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 18);
  }
}
function MenuComponent_li_10_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MenuComponent_li_10_a_4_div_2_Template, 3, 3, "div", 15)(3, MenuComponent_li_10_a_4_span_3_Template, 1, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", menuItem_r2.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menuItem_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r2.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r2.children);
  }
}
function MenuComponent_li_10_ul_5_li_1_a_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, childrenItem_r5.badgeText));
  }
}
function MenuComponent_li_10_ul_5_li_1_a_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 18);
  }
}
function MenuComponent_li_10_ul_5_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_li_10_ul_5_li_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const childrenItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.toggletNavActive(childrenItem_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MenuComponent_li_10_ul_5_li_1_a_1_span_3_Template, 3, 3, "span", 29)(4, MenuComponent_li_10_ul_5_li_1_a_1_span_4_Template, 1, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, childrenItem_r5.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r5.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r5.children);
  }
}
function MenuComponent_li_10_ul_5_li_1_a_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, childrenItem_r5.badgeText));
  }
}
function MenuComponent_li_10_ul_5_li_1_a_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 18);
  }
}
function MenuComponent_li_10_ul_5_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MenuComponent_li_10_ul_5_li_1_a_2_span_3_Template, 3, 3, "span", 29)(4, MenuComponent_li_10_ul_5_li_1_a_2_span_4_Template, 1, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", childrenItem_r5.path)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 5, childrenItem_r5.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r5.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r5.children);
  }
}
function MenuComponent_li_10_ul_5_li_1_a_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, childrenItem_r5.badgeText));
  }
}
function MenuComponent_li_10_ul_5_li_1_a_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 18);
  }
}
function MenuComponent_li_10_ul_5_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MenuComponent_li_10_ul_5_li_1_a_3_span_3_Template, 3, 3, "span", 29)(4, MenuComponent_li_10_ul_5_li_1_a_3_span_4_Template, 1, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", childrenItem_r5.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, childrenItem_r5.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r5.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r5.children);
  }
}
function MenuComponent_li_10_ul_5_li_1_a_4_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, childrenItem_r5.badgeText));
  }
}
function MenuComponent_li_10_ul_5_li_1_a_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 18);
  }
}
function MenuComponent_li_10_ul_5_li_1_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MenuComponent_li_10_ul_5_li_1_a_4_span_3_Template, 3, 3, "span", 29)(4, MenuComponent_li_10_ul_5_li_1_a_4_span_4_Template, 1, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", childrenItem_r5.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, childrenItem_r5.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r5.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r5.children);
  }
}
function MenuComponent_li_10_ul_5_li_1_ul_5_li_1_a_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, childrenSubItem_r6.badgeText));
  }
}
function MenuComponent_li_10_ul_5_li_1_ul_5_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MenuComponent_li_10_ul_5_li_1_ul_5_li_1_a_1_span_3_Template, 3, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", childrenSubItem_r6.path)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, childrenSubItem_r6.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r6.badge);
  }
}
function MenuComponent_li_10_ul_5_li_1_ul_5_li_1_a_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, childrenSubItem_r6.badgeText));
  }
}
function MenuComponent_li_10_ul_5_li_1_ul_5_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MenuComponent_li_10_ul_5_li_1_ul_5_li_1_a_2_span_3_Template, 3, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", childrenSubItem_r6.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, childrenSubItem_r6.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r6.badge);
  }
}
function MenuComponent_li_10_ul_5_li_1_ul_5_li_1_a_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, childrenSubItem_r6.badgeText));
  }
}
function MenuComponent_li_10_ul_5_li_1_ul_5_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MenuComponent_li_10_ul_5_li_1_ul_5_li_1_a_3_span_3_Template, 3, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", childrenSubItem_r6.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, childrenSubItem_r6.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r6.badge);
  }
}
function MenuComponent_li_10_ul_5_li_1_ul_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuComponent_li_10_ul_5_li_1_ul_5_li_1_a_1_Template, 4, 7, "a", 24)(2, MenuComponent_li_10_ul_5_li_1_ul_5_li_1_a_2_Template, 4, 5, "a", 25)(3, MenuComponent_li_10_ul_5_li_1_ul_5_li_1_a_3_Template, 4, 5, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r6.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r6.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r6.type === "extTabLink");
  }
}
function MenuComponent_li_10_ul_5_li_1_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuComponent_li_10_ul_5_li_1_ul_5_li_1_Template, 4, 3, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("opensubchild", childrenItem_r5.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", childrenItem_r5.children);
  }
}
function MenuComponent_li_10_ul_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuComponent_li_10_ul_5_li_1_a_1_Template, 5, 5, "a", 23)(2, MenuComponent_li_10_ul_5_li_1_a_2_Template, 5, 8, "a", 24)(3, MenuComponent_li_10_ul_5_li_1_a_3_Template, 5, 6, "a", 25)(4, MenuComponent_li_10_ul_5_li_1_a_4_Template, 5, 6, "a", 26)(5, MenuComponent_li_10_ul_5_li_1_ul_5_Template, 2, 3, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r5.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r5.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r5.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r5.type === "extTabLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r5.children);
  }
}
function MenuComponent_li_10_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuComponent_li_10_ul_5_li_1_Template, 6, 5, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("opensubmenu", menuItem_r2.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", menuItem_r2.children);
  }
}
function MenuComponent_li_10_div_6_div_3_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 18);
  }
}
function MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, childrenSubItem_r7.badgeText));
  }
}
function MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_1_span_3_Template, 3, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, childrenSubItem_r7.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r7.badge);
  }
}
function MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, childrenSubItem_r7.badgeText));
  }
}
function MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_2_span_3_Template, 3, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", childrenSubItem_r7.path)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, childrenSubItem_r7.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r7.badge);
  }
}
function MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, childrenSubItem_r7.badgeText));
  }
}
function MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_3_span_3_Template, 3, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", childrenSubItem_r7.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, childrenSubItem_r7.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r7.badge);
  }
}
function MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_4_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, childrenSubItem_r7.badgeText));
  }
}
function MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_4_span_3_Template, 3, 3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", childrenSubItem_r7.path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, childrenSubItem_r7.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r7.badge);
  }
}
function MenuComponent_li_10_div_6_div_3_ul_8_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_1_Template, 4, 4, "a", 44)(2, MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_2_Template, 4, 7, "a", 24)(3, MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_3_Template, 4, 5, "a", 25)(4, MenuComponent_li_10_div_6_div_3_ul_8_li_1_a_4_Template, 4, 5, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r7.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r7.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r7.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenSubItem_r7.type === "extTabLink");
  }
}
function MenuComponent_li_10_div_6_div_3_ul_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuComponent_li_10_div_6_div_3_ul_8_li_1_Template, 5, 4, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", childrenItem_r8.children);
  }
}
function MenuComponent_li_10_div_6_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39)(1, "div", 40)(2, "div", 41)(3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MenuComponent_li_10_div_6_div_3_span_6_Template, 1, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MenuComponent_li_10_div_6_div_3_ul_8_Template, 2, 1, "ul", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const childrenItem_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 3, childrenItem_r8.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r8.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", childrenItem_r8.children);
  }
}
function MenuComponent_li_10_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35)(1, "div", 36)(2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MenuComponent_li_10_div_6_div_3_Template, 9, 5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", menuItem_r2.children);
  }
}
function MenuComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuComponent_li_10_a_1_Template, 5, 5, "a", 9)(2, MenuComponent_li_10_a_2_Template, 4, 6, "a", 10)(3, MenuComponent_li_10_a_3_Template, 4, 4, "a", 11)(4, MenuComponent_li_10_a_4_Template, 4, 4, "a", 11)(5, MenuComponent_li_10_ul_5_Template, 2, 3, "ul", 12)(6, MenuComponent_li_10_div_6_Template, 4, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mega-menu", menuItem_r2.megaMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r2.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r2.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r2.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r2.type === "extTabLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r2.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r2.megaMenu && menuItem_r2.children);
  }
}
class MenuComponent {
  constructor(router, navServices) {
    this.router = router;
    this.navServices = navServices;
    this.navServices.items.subscribe(menuItems => this.menuItems = menuItems);
    this.router.events.subscribe(event => {
      this.navServices.mainMenuToggle = false;
    });
  }
  ngOnInit() {}
  mainMenuToggle() {
    this.navServices.mainMenuToggle = !this.navServices.mainMenuToggle;
  }
  // Click Toggle menu (Mobile)
  toggletNavActive(item) {
    item.active = !item.active;
  }
  static #_ = this.ɵfac = function MenuComponent_Factory(t) {
    return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_0__.NavService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MenuComponent,
    selectors: [["app-menu"]],
    decls: 11,
    vars: 3,
    consts: [[1, "main-navbar"], ["id", "mainnav"], [1, "toggle-nav", 3, "click"], [1, "fa", "fa-bars", "sidebar-bar"], [1, "nav-menu"], [1, "back-btn"], [1, "mobile-back", "text-end", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-right", "ps-2"], [3, "mega-menu", 4, "ngFor", "ngForOf"], ["class", "nav-link", 3, "click", 4, "ngIf"], ["routerLinkActive", "active", "class", "nav-link", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], ["class", "nav-link", 3, "href", 4, "ngIf"], ["class", "nav-submenu", 3, "opensubmenu", 4, "ngIf"], ["class", "mega-menu-container", 4, "ngIf"], [1, "nav-link", 3, "click"], ["class", "lable-nav", 4, "ngIf"], ["class", "sub-arrow", 4, "ngIf"], [1, "lable-nav"], [1, "sub-arrow"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], [1, "nav-link", 3, "href"], [1, "nav-submenu"], [4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], [3, "href", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["class", "nav-sub-childmenu", 3, "opensubchild", 4, "ngIf"], ["href", "javascript:void(0)", 3, "click"], ["class", "new-tag", 4, "ngIf"], [1, "new-tag"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], [3, "href"], ["target", "_blank", 3, "href"], [1, "nav-sub-childmenu"], [1, "mega-menu-container"], [1, "container"], [1, "row"], ["class", "col mega-box", 4, "ngFor", "ngForOf"], [1, "col", "mega-box"], [1, "link-section"], [1, "menu-title"], [1, "menu-content", "opensubmegamenu"], [4, "ngIf"], ["href", "javascript:void(0)", 4, "ngIf"], ["href", "javascript:void(0)"]],
    template: function MenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_Template_div_click_2_listener() {
          return ctx.mainMenuToggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 4)(5, "li", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuComponent_Template_div_click_6_listener() {
          return ctx.mainMenuToggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MenuComponent_li_10_Template, 7, 8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("opennav", ctx.navServices == null ? null : ctx.navServices.mainMenuToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menuItems);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3583:
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/modal/age-verification/age-verification.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgeVerificationComponent: () => (/* binding */ AgeVerificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);







const _c0 = ["ageVerification"];
function AgeVerificationComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "div", 7)(6, "div", 8)(7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Age verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "This Website requires you to be 18 years or older to enter. Please enter your Date Of Birth in this fields below in order to continue:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 9)(12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10)(14, "input", 11)(15, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AgeVerificationComponent_ng_template_0_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.ageForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.ageVerificationForm.controls["day"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.ageVerificationForm.controls["month"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.ageVerificationForm.controls["year"]);
  }
}
class AgeVerificationComponent {
  constructor(platformId, modalService, fb) {
    this.platformId = platformId;
    this.modalService = modalService;
    this.fb = fb;
    this.ageVerificationForm = this.fb.group({
      day: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      month: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      year: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
    });
  }
  ngOnInit() {}
  ngAfterViewInit() {
    if (localStorage.getItem("ageVerification") !== 'true') this.openModal();
  }
  openModal() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
      // For SSR 
      this.modalService.open(this.AgeVerificationModal, {
        size: 'md',
        backdrop: 'static',
        keyboard: false,
        centered: true,
        windowClass: 'bd-example-modal-md theme-modal agem'
      }).result.then(result => {
        `Result ${result}`;
      }, reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }
  ageForm() {
    var day = this.ageVerificationForm.value.day;
    var month = this.ageVerificationForm.value.month;
    var year = this.ageVerificationForm.value.year;
    var age = 18;
    var mydate = new Date();
    mydate.setFullYear(year, month - 1, day);
    var currdate = new Date();
    this.currdate = currdate;
    var setDate = new Date();
    this.setDate = setDate.setFullYear(mydate.getFullYear() + age, month - 1, day);
    if (this.currdate - this.setDate > 0) {
      localStorage.setItem('ageVerification', 'true');
      this.modalService.dismissAll();
    } else {
      window.location.href = "https://www.google.com/";
    }
  }
  getDismissReason(reason) {
    if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnDestroy() {}
  static #_ = this.ɵfac = function AgeVerificationComponent_Factory(t) {
    return new (t || AgeVerificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AgeVerificationComponent,
    selectors: [["app-age-verification"]],
    viewQuery: function AgeVerificationComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.AgeVerificationModal = _t.first);
      }
    },
    decls: 2,
    vars: 0,
    consts: [["ageVerification", ""], [1, "theme-modal"], [1, "modal-content"], [1, "modal-body", "modal13"], [1, "container-fluid", "p-0"], [1, "row"], [1, "col-12"], [1, "modal-bg"], [1, "age-content"], ["id", "demoForm"], ["type", "number", "name", "day", "id", "birthDay", "value", "", "placeholder", "DD", "min", "1", "max", "2", 1, "form-control", 3, "formControl"], ["type", "number", "name", "month", "id", "birthMonth", "value", "", "placeholder", "MM", "min", "1", "max", "2", 1, "form-control", 3, "formControl"], ["type", "number", "name", "year", "id", "birthYear", "value", "", "placeholder", "YY", "min", "1", "max", "4", 1, "form-control", 3, "formControl"], ["type", "submit", 1, "btn", "btn-solid", 3, "click"]],
    template: function AgeVerificationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AgeVerificationComponent_ng_template_0_Template, 18, 3, "ng-template", 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8637:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/modal/cart-modal/cart-modal.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartModalComponent: () => (/* binding */ CartModalComponent)
/* harmony export */ });
/* harmony import */ var C_Users_SAMIRJR11_Documents_PROYECTO_ARTESANIAS_LUMAR_cliente_frontend_lumar_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/product.service */ 5085);
/* harmony import */ var src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/productos/producto.service */ 3916);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);












const _c0 = ["cartModal"];
const _c1 = () => ["/shop/product/left/sidebar/"];
const _c2 = () => ["/shop/cart"];
function CartModalComponent_ng_template_0_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 22)(2, "div", 23)(3, "div", 24)(4, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 25)(7, "h6", 26)(8, "a", 9)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", product_r4.imagenes && product_r4.imagenes.length > 0 ? ctx_r2.urlApi + product_r4.imagenes[0].imagen_url : "path/to/default/image.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](13, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 6, product_r4.prod_nombre));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 8, product_r4.prod_precio), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 10, product_r4.prod_precio_oferta));
  }
}
function CartModalComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CartModalComponent_ng_template_0_Template_button_click_5_listener() {
      const modal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 8)(9, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 11)(12, "a", 9)(13, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " agregado exitosamente a su carrito");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 13)(21, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Tu carrito");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CartModalComponent_ng_template_0_Template_a_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.continueShopping());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Continuar comprando");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 18)(28, "div", 19)(29, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Clientes que compraron este art\u00EDculo tambi\u00E9n.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, CartModalComponent_ng_template_0_ng_container_32_Template, 18, 14, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r2.product.imagenes && ctx_r2.product.imagenes.length > 0 ? ctx_r2.urlApi + ctx_r2.product.imagenes[0].imagen_url : "path/to/default/image.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](13, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 6, ctx_r2.product.prod_nombre));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](14, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](33, 8, ctx_r2.products, 0, 4));
  }
}
class CartModalComponent {
  constructor(platformId, modalService, productService, productoServices, toastrService) {
    this.platformId = platformId;
    this.modalService = modalService;
    this.productService = productService;
    this.productoServices = productoServices;
    this.toastrService = toastrService;
    this.urlApi = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl;
    this.modalOpen = false;
    this.products = [];
    //Array para el inventario
    this.producto_inventario = [];
  }
  ngOnInit() {}
  ngAfterViewInit() {}
  openModal(product, quantity, selectedSize) {
    var _this = this;
    return (0,C_Users_SAMIRJR11_Documents_PROYECTO_ARTESANIAS_LUMAR_cliente_frontend_lumar_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Realizar la lógica para filtrar productos relacionados
      yield _this.productoServices.getProductosCategoria(product.categoriaId).subscribe(response => {
        _this.products = response.filter(items => items.prod_id !== product.prod_id);
      });
      // Obtener la información completa del producto
      _this.productoServices.getOneProducto(product.prod_id).subscribe(data => {
        // Verificar la disponibilidad de inventario
        const inventario = data.inventario;
        // Comprobar si hay inventario disponible
        const isAvailable = inventario.some(inv => inv.inv_cantidad_disponible >= 1);
        if (isAvailable) {
          // Añadir el producto al carrito
          const status = _this.productoServices.addToCart(product, quantity, selectedSize);
          if (status) {
            _this.modalOpen = true;
            if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(_this.platformId)) {
              // Para la renderización del lado del servidor
              _this.modalService.open(_this.CartModal, {
                size: 'lg',
                ariaLabelledBy: 'Cart-Modal',
                centered: true,
                windowClass: 'theme-modal cart-modal CartModal'
              }).result.then(result => {
                _this.closeResult = `Result ${result}`;
              }, reason => {
                _this.closeResult = `Dismissed ${_this.getDismissReason(reason)}`;
              });
            }
          } else {
            _this.toastrService.warning('El producto ya se encuentra en el carrito.', 'Aviso', {
              timeOut: 3000,
              positionClass: 'toast-top-center'
            });
          }
        } else {
          _this.toastrService.warning('No hay suficiente inventario para el producto seleccionado.', 'Aviso', {
            timeOut: 3000,
            positionClass: 'toast-top-center'
          });
        }
      }, err => {
        console.log(err.error.message);
      });
    })();
  }
  getDismissReason(reason) {
    if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnDestroy() {
    if (this.modalOpen) {
      this.modalService.dismissAll();
    }
  }
  continueShopping() {
    this.modalService.dismissAll();
  }
  static #_ = this.ɵfac = function CartModalComponent_Factory(t) {
    return new (t || CartModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_3__.ProductoService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: CartModalComponent,
    selectors: [["app-cart-modal"]],
    viewQuery: function CartModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.CartModal = _t.first);
      }
    },
    inputs: {
      product: "product",
      currency: "currency"
    },
    decls: 2,
    vars: 0,
    consts: [["cartModal", ""], [1, "modal-body"], [1, "container-fluid", "p-0"], [1, "row"], [1, "col-12"], [1, "modal-bg", "addtocart"], ["type", "button", "id", "close-cart-modal", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "media"], [3, "routerLink"], ["alt", "Product Image", 1, "img-fluid", "blur-up", "lazyload", "bg-img", 3, "src"], [1, "media-body", "align-self-center", "text-center"], [1, "fa", "fa-check"], [1, "buttons"], [1, "view-cart", "btn", "btn-solid", 3, "routerLink"], [1, "continue", "btn", "btn-solid", 3, "click"], [1, "upsell_payment"], ["src", "assets/images/payment_cart.webp", "alt", "", 1, "img-fluid"], [1, "product-section"], [1, "col-12", "product-upsell", "text-center"], ["id", "upsell_product", 1, "row"], [4, "ngFor", "ngForOf"], [1, "product-box", "col-sm-3", "col-6"], [1, "img-wrapper"], [1, "front"], [1, "product-detail"], [1, "mt-0"]],
    template: function CartModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, CartModalComponent_ng_template_0_Template, 34, 15, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_5__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 105:
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/modal/cart-variation/cart-variation.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartVariationComponent: () => (/* binding */ CartVariationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/product.service */ 5085);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../pipes/discount.pipe */ 8943);





const _c0 = () => ["/shop/cart"];
const _c1 = () => ["/shop/checkout"];
const _c2 = a0 => ["/shop/product/left/sidebar/", a0];
const _c3 = () => ["/shop/collection/left/sidebar"];
function CartVariationComponent_div_9_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "div", 17)(2, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 20)(5, "a", 18)(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h4")(10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 21)(15, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartVariationComponent_div_9_li_2_Template_a_click_15_listener() {
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.removeItem(product_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c2, product_r2.title.replace(" ", "-")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", product_r2.images[0].src, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", product_r2.images[0].alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](18, _c2, product_r2.title.replace(" ", "-")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 7, product_r2 == null ? null : product_r2.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", product_r2 == null ? null : product_r2.quantity, " x ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](13, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](12, 9, (product_r2 == null ? null : product_r2.price) * (ctx_r2.productService == null ? null : ctx_r2.productService.Currency.price), product_r2), ctx_r2.productService == null ? null : ctx_r2.productService.Currency.currency, "symbol"), " ");
  }
}
function CartVariationComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CartVariationComponent_div_9_li_2_Template, 17, 20, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 12)(4, "li")(5, "div", 13)(6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " subtotal : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li")(13, "div", 14)(14, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "view cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](11, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 4, ctx_r2.getTotal), ctx_r2.productService == null ? null : ctx_r2.productService.Currency.currency, "symbol"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c1));
  }
}
function CartVariationComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24)(1, "h4", 25)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Your Cart is Empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "continue shopping");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c3));
  }
}
class CartVariationComponent {
  constructor(productService) {
    this.productService = productService;
    this.direction = 'right'; // Default Direction Right
    this.products = [];
    this.productService.cartItems.subscribe(response => this.products = response);
  }
  ngOnInit() {
    this.productService.OpenCart = false;
  }
  closeCart() {
    this.productService.OpenCart = false;
  }
  get getTotal() {
    return this.productService.cartTotalAmount();
  }
  removeItem(product) {
    this.productService.removeCartItem(product);
  }
  ngOnDestroy() {
    this.closeCart();
  }
  static #_ = this.ɵfac = function CartVariationComponent_Factory(t) {
    return new (t || CartVariationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CartVariationComponent,
    selectors: [["app-cart-variation"]],
    inputs: {
      direction: "direction"
    },
    decls: 11,
    vars: 5,
    consts: [["id", "cart_side", 1, "add_to_cart", 3, "ngClass"], ["href", "javascript:void(0)", 1, "overlay", 3, "click"], [1, "cart-inner"], [1, "cart_top"], [1, "close-cart", 3, "click"], ["href", "javascript:void(0)"], ["aria-hidden", "true", 1, "fa", "fa-times"], ["class", "cart_media", 4, "ngIf"], ["class", "col-sm-12 empty-cart-cls text-start", 4, "ngIf"], [1, "cart_media"], [1, "cart_product"], [4, "ngFor", "ngForOf"], [1, "cart_total"], [1, "total"], [1, "buttons"], [1, "btn", "btn-solid", "btn-xs", "view-cart", 3, "routerLink"], [1, "btn", "btn-solid", "btn-xs", "checkout", 3, "routerLink"], [1, "media"], [3, "routerLink"], [1, "me-3", 3, "src", "alt"], [1, "media-body"], [1, "close-circle"], ["href", "javascript:void(0)", 3, "click"], ["aria-hidden", "true", 1, "ti-trash"], [1, "col-sm-12", "empty-cart-cls", "text-start"], [1, "mt-3"], [1, "btn", "btn-solid", 3, "routerLink"]],
    template: function CartVariationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartVariationComponent_Template_a_click_1_listener() {
          return ctx.closeCart();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "my cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartVariationComponent_Template_div_click_6_listener() {
          return ctx.closeCart();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CartVariationComponent_div_9_Template, 18, 12, "div", 7)(10, CartVariationComponent_div_10_Template, 6, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("openSide", ctx.productService == null ? null : ctx.productService.OpenCart);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.direction);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.products.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.products.length);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe, _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_1__.DiscountPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5879:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/modal/newsletter/newsletter.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewsletterComponent: () => (/* binding */ NewsletterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);






const _c0 = ["newsletter"];
function NewsletterComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "div", 7)(6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsletterComponent_ng_template_0_Template_button_click_6_listener() {
      const modal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Artesanias Lumar - Cupones");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 12)(14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "subscribe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
  }
}
class NewsletterComponent {
  constructor(platformId, modalService) {
    this.platformId = platformId;
    this.modalService = modalService;
    this.modalOpen = false;
  }
  ngOnInit() {}
  ngAfterViewInit() {
    if (localStorage.getItem("newsletter") !== 'true') this.openModal();
    localStorage.setItem("newsletter", 'true');
  }
  openModal() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      // For SSR 
      this.modalService.open(this.NewsLetterModal, {
        size: 'lg',
        ariaLabelledBy: 'NewsLetter-Modal',
        centered: true,
        windowClass: 'theme-modal newsletterm NewsLetterModal'
      }).result.then(result => {
        this.modalOpen = true;
        `Result ${result}`;
      }, reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }
  getDismissReason(reason) {
    if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnDestroy() {
    if (this.modalOpen) {
      this.modalService.dismissAll();
    }
  }
  static #_ = this.ɵfac = function NewsletterComponent_Factory(t) {
    return new (t || NewsletterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NewsletterComponent,
    selectors: [["app-newsletter"]],
    viewQuery: function NewsletterComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.NewsLetterModal = _t.first);
      }
    },
    decls: 2,
    vars: 0,
    consts: [["newsletter", ""], [1, "theme-modal"], [1, "modal-content"], [1, "modal-body", "modal7"], [1, "container-fluid", "p-0"], [1, "row"], [1, "col-12"], [1, "modal-bg"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "offer-content"], ["src", "assets/images/offer-banner-1.png", "alt", "", 1, "img-fluid"], ["action", "https://pixelstrap.us19.list-manage.com/subscribe/post?u=5a128856334b598b395f1fc9b&id=082f74cbda", "method", "post", "id", "mc-embedded-subscribe-form", "name", "mc-embedded-subscribe-form", "target", "_blank", 1, "auth-form", "needs-validation"], [1, "form-group", "mx-sm-3"], ["type", "text", "name", "EMAIL", "id", "mce-EMAIL", "placeholder", "Enter your email", "required", "required", 1, "form-control"], ["type", "submit", "id", "mc-submit", 1, "btn", "btn-solid"]],
    template: function NewsletterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NewsletterComponent_ng_template_0_Template, 18, 0, "ng-template", 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7759:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/modal/quick-view/quick-view.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuickViewComponent: () => (/* binding */ QuickViewComponent)
/* harmony export */ });
/* harmony import */ var C_Users_SAMIRJR11_Documents_PROYECTO_ARTESANIAS_LUMAR_cliente_frontend_lumar_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/product.service */ 5085);
/* harmony import */ var _cart_modal_cart_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart-modal/cart-modal.component */ 8637);











const _c0 = ["quickView"];
const _c1 = ["cartModal"];
function QuickViewComponent_ng_template_0_h5_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5", 29)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "En Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function QuickViewComponent_ng_template_0_h5_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5", 29)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Agotado");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function QuickViewComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuickViewComponent_ng_template_0_Template_button_click_2_listener() {
      const modal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 8)(6, "div", 9)(7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 12)(10, "div", 13)(11, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 14)(21, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "detalles del producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, QuickViewComponent_ng_template_0_h5_26_Template, 3, 0, "h5", 17)(27, QuickViewComponent_ng_template_0_h5_27_Template, 3, 0, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 18)(31, "div", 19)(32, "span", 20)(33, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuickViewComponent_ng_template_0_Template_button_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.decrement());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "span", 20)(37, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuickViewComponent_ng_template_0_Template_button_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.increment());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 26)(40, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuickViewComponent_ng_template_0_Template_a_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.addToCart(ctx_r2.product, ctx_r2.counter));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "a\u00F1adir a carrito");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function QuickViewComponent_ng_template_0_Template_a_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.sendProducto(ctx_r2.product.prod_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "ver detalles");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r2.product.imagenes && ctx_r2.product.imagenes.length > 0 ? ctx_r2.urlApi + ctx_r2.product.imagenes[0].imagen_url : "path/to/default/image.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 10, ctx_r2.product.prod_nombre));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 12, ctx_r2.product.prod_precio), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](19, 14, ctx_r2.product.prod_precio_oferta));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.product.prod_descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.counter <= ctx_r2.getStockDisponible());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.counter > ctx_r2.getStockDisponible());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r2.counter);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx_r2.counter > ctx_r2.product.stock);
  }
}
class QuickViewComponent {
  constructor(platformId, router, modalService, productService) {
    this.platformId = platformId;
    this.router = router;
    this.modalService = modalService;
    this.productService = productService;
    this.urlApi = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl;
    this.counter = 1;
    this.modalOpen = false;
  }
  ngOnInit() {}
  openModal() {
    this.modalOpen = true;
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformId)) {
      // For SSR 
      this.modalService.open(this.QuickView, {
        size: 'lg',
        ariaLabelledBy: 'modal-basic-title',
        centered: true,
        windowClass: 'Quickview'
      }).result.then(result => {
        `Result ${result}`;
      }, reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }
  getDismissReason(reason) {
    if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  // Get Product Color
  Color(variants) {
    const uniqColor = [];
    for (let i = 0; i < Object.keys(variants).length; i++) {
      if (uniqColor.indexOf(variants[i].color) === -1 && variants[i].color) {
        uniqColor.push(variants[i].color);
      }
    }
    return uniqColor;
  }
  // Get Product Size
  Size(variants) {
    const uniqSize = [];
    for (let i = 0; i < Object.keys(variants).length; i++) {
      if (uniqSize.indexOf(variants[i].size) === -1 && variants[i].size) {
        uniqSize.push(variants[i].size);
      }
    }
    return uniqSize;
  }
  // Change Variants
  ChangeVariants(color, product) {
    product.variants.map(item => {
      if (item.color === color) {
        product.images.map(img => {
          if (img.image_id === item.image_id) {
            this.ImageSrc = img.src;
          }
        });
      }
    });
  }
  // Incrementar
  increment() {
    if (this.counter < this.getStockDisponible()) {
      this.counter++;
    }
  }
  // Decrement
  decrement() {
    if (this.counter > 1) this.counter--;
  }
  addToCart(product, quantity, selectedSize) {
    var _this = this;
    return (0,C_Users_SAMIRJR11_Documents_PROYECTO_ARTESANIAS_LUMAR_cliente_frontend_lumar_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.selectedSize) {
        selectedSize = _this.selectedSize;
      }
      if (_this.CartModal) {
        _this.CartModal.openModal(product, quantity, selectedSize);
      } else {
        console.error('CartModal no está inicializado.');
      }
    })();
  }
  ngOnDestroy() {
    if (this.modalOpen) {
      this.modalService.dismissAll();
    }
  }
  // Obtener la cantidad disponible basada en la talla seleccionada
  getStockDisponible() {
    return this.product.inventario.reduce((total, item) => total + item.inv_cantidad_disponible, 0);
  }
  //Enviar id del producto a detallar
  sendProducto(prod_id) {
    localStorage.setItem('prod_id', prod_id.toString());
    this.router.navigate(['/shop/product/three/column/trim-dress']);
  }
  static #_ = this.ɵfac = function QuickViewComponent_Factory(t) {
    return new (t || QuickViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: QuickViewComponent,
    selectors: [["app-quick-view"]],
    viewQuery: function QuickViewComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.QuickView = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.CartModal = _t.first);
      }
    },
    inputs: {
      product: "product",
      currency: "currency"
    },
    decls: 4,
    vars: 1,
    consts: [["quickView", ""], ["cartModal", ""], [1, "theme-modal"], [3, "product"], [1, "modal-content", "quick-view-modal"], [1, "modal-body"], ["type", "button", 1, "close", "float-end", "border-0", 3, "click"], ["aria-hidden", "true"], [1, "row"], [1, "col-lg-5", "col-xs-12"], [1, "quick-view-img"], ["alt", "Product Image", 1, "img-fluid", "blur-up", "lazyload", "bg-img", 3, "src"], [1, "col-lg-7", "rtl-text"], [1, "product-right"], [1, "border-product"], [1, "product-title"], [1, "product-description", "border-product"], ["class", "avalibility", 4, "ngIf"], [1, "qty-box"], [1, "input-group"], [1, "input-group-prepend"], ["type", "button", "data-type", "minus", 1, "btn", "quantity-left-minus", 3, "click"], [1, "ti-angle-left"], ["type", "text", "name", "quantity", "disabled", "", 1, "form-control", "input-number", 3, "value"], ["type", "button", "data-type", "plus", 1, "btn", "quantity-right-plus", 3, "click"], [1, "ti-angle-right"], [1, "product-buttons"], ["href", "javascript:void(0)", 1, "btn", "btn-solid", 3, "click"], [1, "btn", "btn-solid", 3, "click"], [1, "avalibility"]],
    template: function QuickViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, QuickViewComponent_ng_template_0_Template, 44, 16, "ng-template", 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-cart-modal", 3, 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", ctx.product);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _cart_modal_cart_modal_component__WEBPACK_IMPORTED_MODULE_3__.CartModalComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 39:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/modal/size-modal/size-modal.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SizeModalComponent: () => (/* binding */ SizeModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);





const _c0 = ["sizeChart"];
function SizeModalComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SizeModalComponent_ng_template_0_Template_button_click_4_listener() {
      const modal_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.product == null ? null : ctx_r2.product.title);
  }
}
class SizeModalComponent {
  constructor(platformId, modalService) {
    this.platformId = platformId;
    this.modalService = modalService;
    this.modalOpen = false;
  }
  ngOnInit() {}
  openModal() {
    this.modalOpen = true;
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      // For SSR 
      this.modalService.open(this.SizeChart, {
        size: 'md',
        ariaLabelledBy: 'size-modal',
        centered: true,
        windowClass: 'SizeChart'
      }).result.then(result => {
        `Result ${result}`;
      }, reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }
  getDismissReason(reason) {
    if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnDestroy() {
    if (this.modalOpen) {
      this.modalService.dismissAll();
    }
  }
  static #_ = this.ɵfac = function SizeModalComponent_Factory(t) {
    return new (t || SizeModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SizeModalComponent,
    selectors: [["app-size-modal"]],
    viewQuery: function SizeModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.SizeChart = _t.first);
      }
    },
    inputs: {
      product: "product"
    },
    decls: 2,
    vars: 0,
    consts: [["sizeChart", ""], [1, "theme-modal"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["src", "assets/images/size-chart.jpg", "alt", "", 1, "img-fluid"]],
    template: function SizeModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SizeModalComponent_ng_template_0_Template, 9, 1, "ng-template", 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1732:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/modal/video-modal/video-modal.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoModalComponent: () => (/* binding */ VideoModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);





const _c0 = ["videoModal"];
function VideoModalComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "iframe", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class VideoModalComponent {
  constructor(platformId, modalService) {
    this.platformId = platformId;
    this.modalService = modalService;
    this.modalOpen = false;
  }
  ngOnInit() {}
  openModal() {
    this.modalOpen = true;
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
      // For SSR 
      this.modalService.open(this.VideoModal, {
        size: 'lg',
        ariaLabelledBy: 'Video-Modal',
        centered: true,
        windowClass: 'modal fade video-modal'
      }).result.then(result => {
        `Result ${result}`;
      }, reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }
  getDismissReason(reason) {
    if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnDestroy() {
    if (this.modalOpen) {
      this.modalService.dismissAll();
    }
  }
  static #_ = this.ɵfac = function VideoModalComponent_Factory(t) {
    return new (t || VideoModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: VideoModalComponent,
    selectors: [["app-video-modal"]],
    viewQuery: function VideoModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.VideoModal = _t.first);
      }
    },
    decls: 2,
    vars: 0,
    consts: [["videoModal", ""], [1, "modal-content"], [1, "modal-body"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]`https://www.youtube.com/embed/FRIDLxM8Roc`, "allowfullscreen", ""]],
    template: function VideoModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VideoModalComponent_ng_template_0_Template, 3, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 471:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/product/product-box-five/product-box-five.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductBoxFiveComponent: () => (/* binding */ ProductBoxFiveComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/product.service */ 5085);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bar-rating */ 9139);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-lazyload-image */ 385);
/* harmony import */ var _modal_quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modal/quick-view/quick-view.component */ 7759);
/* harmony import */ var _modal_cart_modal_cart_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modal/cart-modal/cart-modal.component */ 8637);
/* harmony import */ var _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/discount.pipe */ 8943);









const _c0 = ["quickView"];
const _c1 = ["cartModal"];
const _c2 = a0 => ["/shop/product/left/sidebar/", a0];
const _c3 = a0 => ({
  "background-color": a0
});
function ProductBoxFiveComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "new");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductBoxFiveComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c2, ctx_r1.product.title.replace(" ", "-")));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", ctx_r1.product == null ? null : ctx_r1.product.images[1].alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r1.ImageSrc ? ctx_r1.ImageSrc : ctx_r1.product.images[1].src, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function ProductBoxFiveComponent_ul_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 30)(1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function ProductBoxFiveComponent_ul_7_li_1_Template_a_mouseover_1_listener() {
      const image_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.ChangeVariantsImage(image_r4.src));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const image_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r1.ImageSrc == image_r4.src);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("lazyLoad", image_r4.src);
  }
}
function ProductBoxFiveComponent_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductBoxFiveComponent_ul_7_li_1_Template, 3, 3, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.product.images);
  }
}
function ProductBoxFiveComponent_del_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "del")(1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](3, 1, (ctx_r1.product == null ? null : ctx_r1.product.price) * (ctx_r1.currency == null ? null : ctx_r1.currency.price), ctx_r1.currency == null ? null : ctx_r1.currency.currency, "symbol"), "");
  }
}
function ProductBoxFiveComponent_ul_27_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxFiveComponent_ul_27_li_1_Template_li_click_0_listener() {
      const color_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.ChangeVariants(color_r6, ctx_r1.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const color_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](color_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c3, color_r6));
  }
}
function ProductBoxFiveComponent_ul_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductBoxFiveComponent_ul_27_li_1_Template, 1, 5, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.Color(ctx_r1.product == null ? null : ctx_r1.product.variants));
  }
}
function ProductBoxFiveComponent_a_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxFiveComponent_a_29_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.CartModal.openModal(ctx_r1.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Add to cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductBoxFiveComponent_a_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxFiveComponent_a_30_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.addToCart(ctx_r1.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Add to cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductBoxFiveComponent_app_cart_modal_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-cart-modal", 23, 1);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", ctx_r1.product)("currency", ctx_r1.currency);
  }
}
class ProductBoxFiveComponent {
  constructor(productService) {
    this.productService = productService;
    this.currency = this.productService.Currency; // Default Currency 
    this.thumbnail = false; // Default False 
    this.onHowerChangeImage = false; // Default False
    this.cartModal = false; // Default False
  }
  ngOnInit() {}
  // Get Product Color
  Color(variants) {
    const uniqColor = [];
    for (let i = 0; i < Object.keys(variants).length; i++) {
      if (uniqColor.indexOf(variants[i].color) === -1 && variants[i].color) {
        uniqColor.push(variants[i].color);
      }
    }
    return uniqColor;
  }
  // Change Variants
  ChangeVariants(color, product) {
    product.variants.map(item => {
      if (item.color === color) {
        product.images.map(img => {
          if (img.image_id === item.image_id) {
            this.ImageSrc = img.src;
          }
        });
      }
    });
  }
  // Change Variants Image
  ChangeVariantsImage(src) {
    this.ImageSrc = src;
  }
  addToCart(product) {
    this.productService.addToCart(product);
  }
  addToWishlist(product) {
    this.productService.addToWishlist(product);
  }
  addToCompare(product) {
    this.productService.addToCompare(product);
  }
  static #_ = this.ɵfac = function ProductBoxFiveComponent_Factory(t) {
    return new (t || ProductBoxFiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ProductBoxFiveComponent,
    selectors: [["app-product-box-five"]],
    viewQuery: function ProductBoxFiveComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.QuickView = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.CartModal = _t.first);
      }
    },
    inputs: {
      product: "product",
      currency: "currency",
      thumbnail: "thumbnail",
      onHowerChangeImage: "onHowerChangeImage",
      cartModal: "cartModal"
    },
    decls: 34,
    vars: 32,
    consts: [["quickView", ""], ["cartModal", ""], [1, "img-wrapper"], [1, "lable-block"], ["class", "lable3", 4, "ngIf"], [1, "front"], [3, "routerLink"], [1, "img-fluid", "lazy-loading", 3, "defaultImage", "lazyLoad", "alt"], ["class", "back", 4, "ngIf"], ["class", "product-thumb-list", 4, "ngIf"], [1, "cart-detail"], ["href", "javascript:void(0)", "title", "Add to Wishlist", 3, "click"], ["aria-hidden", "true", 1, "ti-heart"], ["href", "javascript:void(0)", "title", "Quick View", 3, "click"], ["aria-hidden", "true", 1, "ti-search"], ["href", "javascript:void(0)", "title", "Compare", 3, "click"], ["aria-hidden", "true", 1, "ti-reload"], [1, "product-info"], [3, "rate", "readOnly"], [4, "ngIf"], ["class", "color-variant", 4, "ngIf"], [1, "add-btn"], ["href", "javascript:void(0)", "class", "btn btn-outline", "title", "Add to cart", 3, "click", 4, "ngIf"], [3, "product", "currency"], [3, "product", "currency", 4, "ngIf"], [1, "lable3"], [1, "back"], [1, "img-fluid", "lazy-loading", 3, "src", "alt"], [1, "product-thumb-list"], ["class", "grid_thumb_img", 3, "active", 4, "ngFor", "ngForOf"], [1, "grid_thumb_img"], ["href", "javascript:void(0)", 3, "mouseover"], [3, "lazyLoad"], [1, "money"], [1, "color-variant"], [3, "class", "ngStyle", "click", 4, "ngFor", "ngForOf"], [3, "click", "ngStyle"], ["href", "javascript:void(0)", "title", "Add to cart", 1, "btn", "btn-outline", 3, "click"], [1, "ti-shopping-cart"]],
    template: function ProductBoxFiveComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ProductBoxFiveComponent_span_2_Template, 2, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 5)(4, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ProductBoxFiveComponent_div_6_Template, 3, 5, "div", 8)(7, ProductBoxFiveComponent_ul_7_Template, 2, 1, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 10)(9, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxFiveComponent_Template_a_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.addToWishlist(ctx.product));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxFiveComponent_Template_a_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.QuickView.openModal());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxFiveComponent_Template_a_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.addToCompare(ctx.product));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 17)(16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "bar-rating", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "a", 6)(19, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, ProductBoxFiveComponent_del_26_Template, 4, 5, "del", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, ProductBoxFiveComponent_ul_27_Template, 2, 1, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, ProductBoxFiveComponent_a_29_Template, 3, 0, "a", 22)(30, ProductBoxFiveComponent_a_30_Template, 3, 0, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "app-quick-view", 23, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, ProductBoxFiveComponent_app_cart_modal_33_Template, 2, 2, "app-cart-modal", 24);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product.new);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](28, _c2, ctx.product.title.replace(" ", "-")));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", ctx.product == null ? null : ctx.product.images[0].alt);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("defaultImage", ctx.ImageSrc ? ctx.ImageSrc : "assets/images/product/placeholder.jpg")("lazyLoad", ctx.ImageSrc ? ctx.ImageSrc : ctx.product.images[0].src);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.onHowerChangeImage && ctx.product.images.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.thumbnail);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rate", 5)("readOnly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](30, _c2, ctx.product == null ? null : ctx.product.title.replace(" ", "-")));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 19, ctx.product == null ? null : ctx.product.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](25, 24, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](24, 21, (ctx.product == null ? null : ctx.product.price) * (ctx.currency == null ? null : ctx.currency.price), ctx.product), ctx.currency == null ? null : ctx.currency.currency, "symbol"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product == null ? null : ctx.product.discount);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Color(ctx.product == null ? null : ctx.product.variants).length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.cartModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.cartModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", ctx.product)("currency", ctx.currency);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.cartModal);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, ngx_bar_rating__WEBPACK_IMPORTED_MODULE_7__.BarRating, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__.LazyLoadImageDirective, _modal_quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_1__.QuickViewComponent, _modal_cart_modal_cart_modal_component__WEBPACK_IMPORTED_MODULE_2__.CartModalComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe, _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_3__.DiscountPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7119:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/product/product-box-four/product-box-four.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductBoxFourComponent: () => (/* binding */ ProductBoxFourComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/product.service */ 5085);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bar-rating */ 9139);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-lazyload-image */ 385);
/* harmony import */ var _modal_quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modal/quick-view/quick-view.component */ 7759);
/* harmony import */ var _modal_cart_modal_cart_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modal/cart-modal/cart-modal.component */ 8637);
/* harmony import */ var _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/discount.pipe */ 8943);









const _c0 = ["quickView"];
const _c1 = ["cartModal"];
const _c2 = a0 => ["/shop/product/left/sidebar/", a0];
const _c3 = a0 => ({
  "background-color": a0
});
function ProductBoxFourComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "new");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductBoxFourComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.product == null ? null : ctx_r1.product.discount, "% off");
  }
}
function ProductBoxFourComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27)(1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c2, ctx_r1.product.title.replace(" ", "-")));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", ctx_r1.product.images[1].alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r1.ImageSrc ? ctx_r1.ImageSrc : ctx_r1.product.images[1].src, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function ProductBoxFourComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxFourComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.CartModal.openModal(ctx_r1.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductBoxFourComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxFourComponent_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.addToCart(ctx_r1.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductBoxFourComponent_del_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "del")(1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](3, 1, (ctx_r1.product == null ? null : ctx_r1.product.price) * (ctx_r1.currency == null ? null : ctx_r1.currency.price), ctx_r1.currency == null ? null : ctx_r1.currency.currency, "symbol"), "");
  }
}
function ProductBoxFourComponent_ul_30_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxFourComponent_ul_30_li_1_Template_li_click_0_listener() {
      const color_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.ChangeVariants(color_r6, ctx_r1.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const color_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](color_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c3, color_r6));
  }
}
function ProductBoxFourComponent_ul_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductBoxFourComponent_ul_30_li_1_Template, 1, 5, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.Color(ctx_r1.product == null ? null : ctx_r1.product.variants));
  }
}
function ProductBoxFourComponent_app_cart_modal_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-cart-modal", 23, 1);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", ctx_r1.product)("currency", ctx_r1.currency);
  }
}
class ProductBoxFourComponent {
  constructor(productService) {
    this.productService = productService;
    this.currency = this.productService.Currency; // Default Currency 
    this.onHowerChangeImage = false; // Default False
    this.cartModal = false; // Default False
  }
  ngOnInit() {}
  // Get Product Color
  Color(variants) {
    const uniqColor = [];
    for (let i = 0; i < Object.keys(variants).length; i++) {
      if (uniqColor.indexOf(variants[i].color) === -1 && variants[i].color) {
        uniqColor.push(variants[i].color);
      }
    }
    return uniqColor;
  }
  // Change Variants
  ChangeVariants(color, product) {
    product.variants.map(item => {
      if (item.color === color) {
        product.images.map(img => {
          if (img.image_id === item.image_id) {
            this.ImageSrc = img.src;
          }
        });
      }
    });
  }
  // Change Variants Image
  ChangeVariantsImage(src) {
    this.ImageSrc = src;
  }
  addToCart(product) {
    this.productService.addToCart(product);
  }
  addToWishlist(product) {
    this.productService.addToWishlist(product);
  }
  addToCompare(product) {
    this.productService.addToCompare(product);
  }
  static #_ = this.ɵfac = function ProductBoxFourComponent_Factory(t) {
    return new (t || ProductBoxFourComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ProductBoxFourComponent,
    selectors: [["app-product-box-four"]],
    viewQuery: function ProductBoxFourComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.QuickView = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.CartModal = _t.first);
      }
    },
    inputs: {
      product: "product",
      currency: "currency",
      onHowerChangeImage: "onHowerChangeImage",
      cartModal: "cartModal"
    },
    decls: 34,
    vars: 32,
    consts: [["quickView", ""], ["cartModal", ""], [1, "img-wrapper"], [1, "img-block"], [1, "lable-wrapper"], ["class", "lable1", 4, "ngIf"], ["class", "lable2", 4, "ngIf"], [1, "front"], [3, "routerLink"], [1, "img-fluid", "lazy-loading", 3, "defaultImage", "lazyLoad", "alt"], ["class", "back", 4, "ngIf"], [1, "cart-info"], ["title", "Add to cart", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", "title", "Add to Wishlist", 3, "click"], ["aria-hidden", "true", 1, "ti-heart"], ["href", "javascript:void(0)", "title", "Quick View", 3, "click"], ["aria-hidden", "true", 1, "ti-search"], ["href", "javascript:void(0)", "title", "Compare", 3, "click"], ["aria-hidden", "true", 1, "ti-reload"], [1, "product-detail"], [3, "rate", "readOnly"], [4, "ngIf"], ["class", "color-variant", 4, "ngIf"], [3, "product", "currency"], [3, "product", "currency", 4, "ngIf"], [1, "lable1"], [1, "lable2"], [1, "back"], [1, "img-fluid", "lazy-loading", 3, "src", "alt"], ["title", "Add to cart", 3, "click"], [1, "ti-shopping-cart"], [1, "money"], [1, "color-variant"], [3, "class", "ngStyle", "click", 4, "ngFor", "ngForOf"], [3, "click", "ngStyle"]],
    template: function ProductBoxFourComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ProductBoxFourComponent_span_3_Template, 2, 0, "span", 5)(4, ProductBoxFourComponent_span_4_Template, 2, 1, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 7)(6, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ProductBoxFourComponent_div_8_Template, 3, 5, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ProductBoxFourComponent_button_10_Template, 2, 0, "button", 12)(11, ProductBoxFourComponent_button_11_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxFourComponent_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.addToWishlist(ctx.product));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxFourComponent_Template_a_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.QuickView.openModal());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxFourComponent_Template_a_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.addToCompare(ctx.product));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 19)(19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "bar-rating", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "a", 8)(22, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, ProductBoxFourComponent_del_29_Template, 4, 5, "del", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, ProductBoxFourComponent_ul_30_Template, 2, 1, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "app-quick-view", 23, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, ProductBoxFourComponent_app_cart_modal_33_Template, 2, 2, "app-cart-modal", 24);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product.new);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product.sale);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](28, _c2, ctx.product.title.replace(" ", "-")));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", ctx.product.images[0].alt);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("defaultImage", ctx.ImageSrc ? ctx.ImageSrc : "assets/images/product/placeholder.jpg")("lazyLoad", ctx.ImageSrc ? ctx.ImageSrc : ctx.product.images[0].src);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.onHowerChangeImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.cartModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.cartModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rate", 5)("readOnly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](30, _c2, ctx.product == null ? null : ctx.product.title.replace(" ", "-")));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 19, ctx.product == null ? null : ctx.product.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](28, 24, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](27, 21, (ctx.product == null ? null : ctx.product.price) * (ctx.currency == null ? null : ctx.currency.price), ctx.product), ctx.currency == null ? null : ctx.currency.currency, "symbol"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product == null ? null : ctx.product.discount);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.Color(ctx.product == null ? null : ctx.product.variants).length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", ctx.product)("currency", ctx.currency);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.cartModal);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, ngx_bar_rating__WEBPACK_IMPORTED_MODULE_7__.BarRating, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__.LazyLoadImageDirective, _modal_quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_1__.QuickViewComponent, _modal_cart_modal_cart_modal_component__WEBPACK_IMPORTED_MODULE_2__.CartModalComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe, _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_3__.DiscountPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6646:
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/product/product-box-one/product-box-one.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductBoxOneComponent: () => (/* binding */ ProductBoxOneComponent)
/* harmony export */ });
/* harmony import */ var C_Users_SAMIRJR11_Documents_PROYECTO_ARTESANIAS_LUMAR_cliente_frontend_lumar_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/product.service */ 5085);
/* harmony import */ var src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/productos/producto.service */ 3916);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bar-rating */ 9139);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-lazyload-image */ 385);
/* harmony import */ var _modal_quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modal/quick-view/quick-view.component */ 7759);
/* harmony import */ var _modal_cart_modal_cart_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modal/cart-modal/cart-modal.component */ 8637);
/* harmony import */ var _skeleton_skeleton_product_box_skeleton_product_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../skeleton/skeleton-product-box/skeleton-product-box.component */ 1301);













const _c0 = ["quickView"];
const _c1 = ["cartModal"];
function ProductBoxOneComponent_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "new");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ProductBoxOneComponent_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "on sale");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ProductBoxOneComponent_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25)(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductBoxOneComponent_div_1_div_8_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.sendProducto(ctx_r1.product.prod_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("alt", ctx_r1.product.prod_nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.product.imagenes && ctx_r1.product.imagenes.length > 0 ? ctx_r1.urlApi + ctx_r1.product.imagenes[0].imagen_url : "path/to/default/image.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function ProductBoxOneComponent_div_1_a_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductBoxOneComponent_div_1_a_10_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.CartModal.openModal(ctx_r1.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ProductBoxOneComponent_div_1_a_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductBoxOneComponent_div_1_a_11_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.addToCart(ctx_r1.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ProductBoxOneComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 6)(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ProductBoxOneComponent_div_1_span_3_Template, 2, 0, "span", 8)(4, ProductBoxOneComponent_div_1_span_4_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 10)(6, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductBoxOneComponent_div_1_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.sendProducto(ctx_r1.product.prod_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ProductBoxOneComponent_div_1_div_8_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ProductBoxOneComponent_div_1_a_10_Template, 2, 0, "a", 15)(11, ProductBoxOneComponent_div_1_a_11_Template, 2, 0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductBoxOneComponent_div_1_Template_a_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.buyNow(ctx_r1.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductBoxOneComponent_div_1_Template_a_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.QuickView.openModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 20)(17, "div")(18, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "bar-rating", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductBoxOneComponent_div_1_Template_a_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.sendProducto(ctx_r1.product.prod_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](23, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](26, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](29, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.product.new);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.product.sale);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("alt", ctx_r1.product.prod_nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r1.product.imagenes && ctx_r1.product.imagenes.length > 0 ? ctx_r1.urlApi + ctx_r1.product.imagenes[0].imagen_url : "path/to/default/image.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("lazyLoad", ctx_r1.ImageSrc ? ctx_r1.ImageSrc : ctx_r1.product.imagenes[0].src);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.onHowerChangeImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.cartModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.cartModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("rate", 5)("readOnly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](23, 13, ctx_r1.product == null ? null : ctx_r1.product.prod_nombre));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](26, 15, ctx_r1.product.prod_precio), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](29, 17, ctx_r1.product.prod_precio_oferta));
  }
}
function ProductBoxOneComponent_app_skeleton_product_box_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-skeleton-product-box");
  }
}
function ProductBoxOneComponent_app_cart_modal_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-cart-modal", 4, 1);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product", ctx_r1.product);
  }
}
class ProductBoxOneComponent {
  constructor(router, productService, productoService, toastrService) {
    this.router = router;
    this.productService = productService;
    this.productoService = productoService;
    this.toastrService = toastrService;
    this.urlApi = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl;
    this.currency = this.productService.Currency; // Default Currency 
    this.thumbnail = false; // Default False 
    this.onHowerChangeImage = false; // Default False
    this.cartModal = false; // Default False
    this.loader = false;
    this.especial = false; // Default False
  }
  ngOnInit() {
    if (this.loader) {
      setTimeout(() => {
        this.loader = false;
      }, 2000); // Skeleton Loader
    }
  }
  addToCart(product) {
    this.productService.addToCart(product);
  }
  addToWishlist(product) {
    this.productService.addToWishlist(product);
  }
  addToCompare(product) {
    this.productService.addToCompare(product);
  }
  // Buy Now
  buyNow(product, quantity, selectedSize) {
    var _this = this;
    return (0,C_Users_SAMIRJR11_Documents_PROYECTO_ARTESANIAS_LUMAR_cliente_frontend_lumar_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Verifica si el producto tiene tallas disponibles
      const hasSizes = product.inventario && product.inventario.some(inv => inv.inv_talla && inv.inv_talla.trim() !== '');
      // Si el producto tiene tallas disponibles, verifica que se haya seleccionado una talla
      if (hasSizes && !selectedSize) {
        _this.toastrService.warning('Por favor, debes seleccionar una talla antes de continuar con la compra.', 'Talla Requerida', {
          timeOut: 3000,
          positionClass: 'toast-top-center'
        });
        return;
      }
      // Obtener la información completa del producto
      const productDetails = yield _this.productoService.getOneProducto(product.prod_id).toPromise();
      // Verificar la disponibilidad de inventario
      const inventario = productDetails.inventario;
      // Comprobar si hay suficiente inventario disponible para la talla seleccionada
      const isAvailable = inventario.some(inv => inv.inv_cantidad_disponible >= 1);
      if (!isAvailable) {
        _this.toastrService.warning('No hay suficiente inventario para comprar el producto seleccionado.', 'Inventario Insuficiente', {
          timeOut: 4000,
          positionClass: 'toast-top-center'
        });
        return;
      }
      // Añadir el producto al carrito con la talla seleccionada (si corresponde)
      const status = yield _this.productoService.addToCart(product, quantity, selectedSize);
      // Redirigir a la página de checkout si el producto se añade al carrito correctamente
      if (status) {
        _this.router.navigate(['/shop/checkout']);
      } else {
        _this.toastrService.warning('No se pudo añadir el producto al carrito. Intentalo más tarde', 'Error', {
          timeOut: 3000,
          positionClass: 'toast-top-center'
        });
      }
    })();
  }
  //Enviar id del producto a detallar
  sendProducto(prod_id) {
    localStorage.setItem('prod_id', prod_id.toString());
    this.router.navigate(['/shop/product/three/column/trim-dress']);
  }
  static #_ = this.ɵfac = function ProductBoxOneComponent_Factory(t) {
    return new (t || ProductBoxOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_3__.ProductoService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: ProductBoxOneComponent,
    selectors: [["app-product-box-one"]],
    viewQuery: function ProductBoxOneComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.QuickView = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.CartModal = _t.first);
      }
    },
    inputs: {
      product: "product",
      currency: "currency",
      thumbnail: "thumbnail",
      onHowerChangeImage: "onHowerChangeImage",
      cartModal: "cartModal",
      loader: "loader",
      especial: "especial"
    },
    decls: 6,
    vars: 4,
    consts: [["quickView", ""], ["cartModal", ""], [1, "product-container"], [4, "ngIf"], [3, "product"], [3, "product", 4, "ngIf"], [1, "img-wrapper"], [1, "lable-block"], ["class", "lable3", 4, "ngIf"], ["class", "lable4", 4, "ngIf"], [1, "front"], [3, "click"], [1, "img-fluid", "lazy-loading", 3, "src", "lazyLoad", "alt"], ["class", "back", 4, "ngIf"], [1, "cart-info", "cart-wrap", "cart-box"], ["href", "javascript:void(0)", "title", "A\u00F1adir a Carrito", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", "title", "Comprar Producto", 3, "click"], ["aria-hidden", "true", 1, "ti-money"], ["href", "javascript:void(0)", "title", "Detalles del Producto", 3, "click"], ["aria-hidden", "true", 1, "ti-more"], [1, "product-detail"], [1, "rating-container"], [3, "rate", "readOnly"], [1, "lable3"], [1, "lable4"], [1, "back"], [1, "img-fluid", "lazy-loading", 3, "src", "alt"], ["href", "javascript:void(0)", "title", "A\u00F1adir a Carrito", 3, "click"], [1, "ti-shopping-cart"]],
    template: function ProductBoxOneComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ProductBoxOneComponent_div_1_Template, 30, 19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ProductBoxOneComponent_app_skeleton_product_box_2_Template, 1, 0, "app-skeleton-product-box", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-quick-view", 4, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ProductBoxOneComponent_app_cart_modal_5_Template, 2, 1, "app-cart-modal", 5);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.cartModal);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, ngx_bar_rating__WEBPACK_IMPORTED_MODULE_11__.BarRating, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_12__.LazyLoadImageDirective, _modal_quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_4__.QuickViewComponent, _modal_cart_modal_cart_modal_component__WEBPACK_IMPORTED_MODULE_5__.CartModalComponent, _skeleton_skeleton_product_box_skeleton_product_box_component__WEBPACK_IMPORTED_MODULE_6__.SkeletonProductBoxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CurrencyPipe],
    styles: ["@charset \"UTF-8\";\n.product-wrapper-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.col-grid-box[_ngcontent-%COMP%] {\n  flex: 1 0 21%;\n  \n\n  margin: 10px;\n  box-sizing: border-box;\n}\n\n.product-box[_ngcontent-%COMP%] {\n  background-color: white;\n  \n\n  border-radius: 10px;\n  \n\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  \n\n  overflow: hidden;\n  \n\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  \n\n  margin-bottom: 20px;\n  \n\n}\n\n.product-box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  \n\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\n  \n\n}\n\n.product-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 15px;\n  \n\n}\n\n.product-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  \n\n  object-fit: cover;\n  \n\n  border-bottom: 1px solid #e0e0e0;\n  \n\n}\n\n.product-detail[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.product-container[_ngcontent-%COMP%]:hover   .front[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.product-container[_ngcontent-%COMP%]:hover   .back[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.cart-box[_ngcontent-%COMP%] {\n  padding: 10px 1px !important;\n}\n\n.rating-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL1BST1lFQ1RPJTIwQVJURVNBTklBUyUyMExVTUFSL2NsaWVudGUtZnJvbnRlbmQtbHVtYXIvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtYm94LW9uZS9wcm9kdWN0LWJveC1vbmUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1ib3gtb25lL3Byb2R1Y3QtYm94LW9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0FERUo7O0FDQ0E7RUFDSSxhQUFBO0VBQ0Esd0VBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QURFSjs7QUNDQTtFQUNJLHVCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseURBQUE7RUFDQSxxREFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBREVKOztBQ0NBO0VBQ0ksMkJBQUE7RUFDQSxnREFBQTtFQUNBLHlDQUFBO0VBQ0EscUNBQUE7QURFSjs7QUNDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLHlDQUFBO0FERUo7O0FDQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHFEQUFBO0VBQ0EsaUJBQUE7RUFDQSxzRkFBQTtFQUNBLGdDQUFBO0VBQ0EsMERBQUE7QURFSjs7QUNDQTtFQUNJLGtCQUFBO0FERUo7O0FDQ0E7RUFDSSxVQUFBO0FERUo7O0FDQ0E7RUFDSSxVQUFBO0FERUo7O0FDQ0E7RUFDSSxlQUFBO0FERUo7O0FDQ0E7RUFDSSw0QkFBQTtBREVKOztBQ0NBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QURFSiIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5wcm9kdWN0LXdyYXBwZXItZ3JpZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY29sLWdyaWQtYm94IHtcbiAgZmxleDogMSAwIDIxJTtcbiAgLyogQWp1c3RhIGVsIHRhbWHDg8KxbyBwYXJhIG1hbnRlbmVyIHVuIG7Dg8K6bWVybyBmaWpvIGRlIHByb2R1Y3RvcyBwb3IgZmlsYSAqL1xuICBtYXJnaW46IDEwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5wcm9kdWN0LWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAvKiBGb25kbyBibGFuY28gcGFyYSBsYSB0YXJqZXRhICovXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC8qIEJvcmRlcyByZWRvbmRlYWRvcyAqL1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAvKiBTb21icmEgbGlnZXJhICovXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC8qIEFzZWd1cmEgcXVlIGVsIGNvbnRlbmlkbyBubyBzb2JyZXNhbGdhIGRlIGxhIHRhcmpldGEgKi9cbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XG4gIC8qIEFuaW1hY2nDg8KzbiBwYXJhIGVmZWN0byBkZSBob3ZlciAqL1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAvKiBFc3BhY2lvIGVudHJlIHRhcmpldGFzICovXG59XG5cbi5wcm9kdWN0LWJveDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgLyogRWZlY3RvIGRlIGVsZXZhY2nDg8KzbiBjdWFuZG8gc2UgcGFzYSBlbCBtb3VzZSAqL1xuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgLyogU29tYnJhIG3Dg8KhcyBmdWVydGUgYWwgaGFjZXIgaG92ZXIgKi9cbn1cblxuLnByb2R1Y3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxNXB4O1xuICAvKiBFc3BhY2lhZG8gaW50ZXJubyBwYXJhIGxvcyBwcm9kdWN0b3MgKi9cbn1cblxuLnByb2R1Y3QtY29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICAvKiBQdWVkZXMgYWp1c3RhciBlc3RhIGFsdHVyYSBzZWfDg8K6biB0dXMgbmVjZXNpZGFkZXMgKi9cbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIC8qIEVzdG8gYXNlZ3VyYSBxdWUgbGEgaW1hZ2VuIG5vIHNlIGRpc3RvcnNpb25lIHkgc2UgYWp1c3RlIGFsIHRhbWHDg8KxbyBkZWwgY29udGVuZWRvciAqL1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcbiAgLyogTMODwq1uZWEgc2VwYXJhZG9yYSBlbnRyZSBpbWFnZW4geSBkZXRhbGxlcyBkZWwgcHJvZHVjdG8gKi9cbn1cblxuLnByb2R1Y3QtZGV0YWlsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJvZHVjdC1jb250YWluZXI6aG92ZXIgLmZyb250IHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnByb2R1Y3QtY29udGFpbmVyOmhvdmVyIC5iYWNrIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcnQtYm94IHtcbiAgcGFkZGluZzogMTBweCAxcHggIWltcG9ydGFudDtcbn1cblxuLnJhdGluZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iLCIucHJvZHVjdC13cmFwcGVyLWdyaWQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmNvbC1ncmlkLWJveCB7XHJcbiAgICBmbGV4OiAxIDAgMjElO1xyXG4gICAgLyogQWp1c3RhIGVsIHRhbWHDg8KxbyBwYXJhIG1hbnRlbmVyIHVuIG7Dg8K6bWVybyBmaWpvIGRlIHByb2R1Y3RvcyBwb3IgZmlsYSAqL1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnByb2R1Y3QtYm94IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgLyogRm9uZG8gYmxhbmNvIHBhcmEgbGEgdGFyamV0YSAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC8qIEJvcmRlcyByZWRvbmRlYWRvcyAqL1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIC8qIFNvbWJyYSBsaWdlcmEgKi9cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAvKiBBc2VndXJhIHF1ZSBlbCBjb250ZW5pZG8gbm8gc29icmVzYWxnYSBkZSBsYSB0YXJqZXRhICovXHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcclxuICAgIC8qIEFuaW1hY2nDg8KzbiBwYXJhIGVmZWN0byBkZSBob3ZlciAqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIC8qIEVzcGFjaW8gZW50cmUgdGFyamV0YXMgKi9cclxufVxyXG5cclxuLnByb2R1Y3QtYm94OmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgIC8qIEVmZWN0byBkZSBlbGV2YWNpw4PCs24gY3VhbmRvIHNlIHBhc2EgZWwgbW91c2UgKi9cclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgLyogU29tYnJhIG3Dg8KhcyBmdWVydGUgYWwgaGFjZXIgaG92ZXIgKi9cclxufVxyXG5cclxuLnByb2R1Y3QtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIC8qIEVzcGFjaWFkbyBpbnRlcm5vIHBhcmEgbG9zIHByb2R1Y3RvcyAqL1xyXG59XHJcblxyXG4ucHJvZHVjdC1jb250YWluZXIgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIC8qIFB1ZWRlcyBhanVzdGFyIGVzdGEgYWx0dXJhIHNlZ8ODwrpuIHR1cyBuZWNlc2lkYWRlcyAqL1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAvKiBFc3RvIGFzZWd1cmEgcXVlIGxhIGltYWdlbiBubyBzZSBkaXN0b3JzaW9uZSB5IHNlIGFqdXN0ZSBhbCB0YW1hw4PCsW8gZGVsIGNvbnRlbmVkb3IgKi9cclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgLyogTMODwq1uZWEgc2VwYXJhZG9yYSBlbnRyZSBpbWFnZW4geSBkZXRhbGxlcyBkZWwgcHJvZHVjdG8gKi9cclxufVxyXG5cclxuLnByb2R1Y3QtZGV0YWlsIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2R1Y3QtY29udGFpbmVyOmhvdmVyIC5mcm9udCB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ucHJvZHVjdC1jb250YWluZXI6aG92ZXIgLmJhY2sge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJ0LWJveCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDFweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmF0aW5nLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6789:
/*!********************************************************************************************!*\
  !*** ./src/app/shared/components/product/product-box-three/product-box-three.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductBoxThreeComponent: () => (/* binding */ ProductBoxThreeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/product.service */ 5085);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bar-rating */ 9139);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-lazyload-image */ 385);
/* harmony import */ var _modal_quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modal/quick-view/quick-view.component */ 7759);
/* harmony import */ var _modal_cart_modal_cart_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modal/cart-modal/cart-modal.component */ 8637);
/* harmony import */ var _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../pipes/discount.pipe */ 8943);









const _c0 = ["quickView"];
const _c1 = ["cartModal"];
const _c2 = a0 => ["/shop/product/left/sidebar/", a0];
function ProductBoxThreeComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19)(1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "new");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function ProductBoxThreeComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxThreeComponent_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.CartModal.openModal(ctx_r2.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductBoxThreeComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxThreeComponent_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.addToCart(ctx_r2.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductBoxThreeComponent_app_cart_modal_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-cart-modal", 17, 1);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", ctx_r2.product)("currency", ctx_r2.currency);
  }
}
class ProductBoxThreeComponent {
  constructor(productService) {
    this.productService = productService;
    this.currency = this.productService.Currency; // Default Currency
    this.cartModal = false; // Default False
  }
  ngOnInit() {}
  addToCart(product) {
    this.productService.addToCart(product);
  }
  addToWishlist(product) {
    this.productService.addToWishlist(product);
  }
  addToCompare(product) {
    this.productService.addToCompare(product);
  }
  static #_ = this.ɵfac = function ProductBoxThreeComponent_Factory(t) {
    return new (t || ProductBoxThreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ProductBoxThreeComponent,
    selectors: [["app-product-box-three"]],
    viewQuery: function ProductBoxThreeComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.QuickView = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.CartModal = _t.first);
      }
    },
    inputs: {
      product: "product",
      currency: "currency",
      cartModal: "cartModal"
    },
    decls: 27,
    vars: 28,
    consts: [["quickView", ""], ["cartModal", ""], [1, "img-wrapper"], ["class", "lable-block", 4, "ngIf"], [1, "front"], [3, "routerLink"], [1, "img-fluid", 3, "defaultImage", "lazyLoad", "alt"], [1, "cart-box"], ["title", "Add to cart", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", "title", "Add to Wishlist", 3, "click"], ["aria-hidden", "true", 1, "ti-heart"], ["href", "javascript:void(0)", "title", "Quick View", 1, "mobile-quick-view", 3, "click"], ["aria-hidden", "true", 1, "ti-search"], ["href", "javascript:void(0)", "title", "Compare", 3, "click"], ["aria-hidden", "true", 1, "ti-reload"], [1, "product-info"], [3, "rate", "readOnly"], [3, "product", "currency"], [3, "product", "currency", 4, "ngIf"], [1, "lable-block"], [1, "lable3"], ["title", "Add to cart", 3, "click"], [1, "ti-shopping-cart"]],
    template: function ProductBoxThreeComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductBoxThreeComponent_div_1_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 4)(3, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ProductBoxThreeComponent_button_6_Template, 2, 0, "button", 8)(7, ProductBoxThreeComponent_button_7_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxThreeComponent_Template_a_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.addToWishlist(ctx.product));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxThreeComponent_Template_a_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.QuickView.openModal());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductBoxThreeComponent_Template_a_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.addToCompare(ctx.product));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "bar-rating", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a", 5)(17, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "app-quick-view", 17, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, ProductBoxThreeComponent_app_cart_modal_26_Template, 2, 2, "app-cart-modal", 18);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product.new);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](24, _c2, ctx.product.title.replace(" ", "-")));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", ctx.product.images[0].alt);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("defaultImage", "assets/images/product/placeholder.jpg")("lazyLoad", ctx.product.images[0].src);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.cartModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.cartModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rate", 5)("readOnly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](26, _c2, ctx.product == null ? null : ctx.product.title.replace(" ", "-")));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](19, 15, ctx.product == null ? null : ctx.product.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](23, 20, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](22, 17, (ctx.product == null ? null : ctx.product.price) * (ctx.currency == null ? null : ctx.currency.price), ctx.product), ctx.currency == null ? null : ctx.currency.currency, "symbol"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("product", ctx.product)("currency", ctx.currency);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.cartModal);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, ngx_bar_rating__WEBPACK_IMPORTED_MODULE_7__.BarRating, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_8__.LazyLoadImageDirective, _modal_quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_1__.QuickViewComponent, _modal_cart_modal_cart_modal_component__WEBPACK_IMPORTED_MODULE_2__.CartModalComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe, _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_3__.DiscountPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1585:
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/product/product-box-two/product-box-two.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductBoxTwoComponent: () => (/* binding */ ProductBoxTwoComponent)
/* harmony export */ });
/* harmony import */ var C_Users_SAMIRJR11_Documents_PROYECTO_ARTESANIAS_LUMAR_cliente_frontend_lumar_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/product.service */ 5085);
/* harmony import */ var src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/productos/producto.service */ 3916);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bar-rating */ 9139);
/* harmony import */ var _modal_quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modal/quick-view/quick-view.component */ 7759);
/* harmony import */ var _modal_cart_modal_cart_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modal/cart-modal/cart-modal.component */ 8637);











const _c0 = ["quickView"];
const _c1 = ["cartModal"];
function ProductBoxTwoComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductBoxTwoComponent_div_8_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.sendProducto(ctx_r2.product.prod_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r2.product.imagenes && ctx_r2.product.imagenes.length > 0 ? ctx_r2.urlApi + ctx_r2.product.imagenes[0].imagen_url : "path/to/default/image.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function ProductBoxTwoComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductBoxTwoComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.CartModal.openModal(ctx_r2.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
class ProductBoxTwoComponent {
  constructor(router, productService, productoService, toastrService) {
    this.router = router;
    this.productService = productService;
    this.productoService = productoService;
    this.toastrService = toastrService;
    this.urlApi = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiBaseUrl;
    this.currency = this.productService.Currency; // Default Currency
    this.thumbnail = false; // Default False 
    this.cartModal = false; // Default False
    this.onHowerChangeImage = false; // Default False
    this.loader = false;
  }
  ngOnInit() {}
  // Buy Now
  buyNow(product, quantity, selectedSize) {
    var _this = this;
    return (0,C_Users_SAMIRJR11_Documents_PROYECTO_ARTESANIAS_LUMAR_cliente_frontend_lumar_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Verifica si el producto tiene tallas disponibles
      const hasSizes = product.inventario && product.inventario.some(inv => inv.inv_talla && inv.inv_talla.trim() !== '');
      // Si el producto tiene tallas disponibles, verifica que se haya seleccionado una talla
      if (hasSizes && !selectedSize) {
        _this.toastrService.warning('Por favor, debes seleccionar una talla antes de continuar con la compra.', 'Talla Requerida', {
          timeOut: 3000,
          positionClass: 'toast-top-center'
        });
        return;
      }
      // Obtener la información completa del producto
      const productDetails = yield _this.productoService.getOneProducto(product.prod_id).toPromise();
      // Verificar la disponibilidad de inventario
      const inventario = productDetails.inventario;
      // Comprobar si hay suficiente inventario disponible para la talla seleccionada
      const isAvailable = inventario.some(inv => inv.inv_cantidad_disponible >= 1);
      if (!isAvailable) {
        _this.toastrService.warning('No hay suficiente inventario para comprar el producto seleccionado.', 'Inventario Insuficiente', {
          timeOut: 4000,
          positionClass: 'toast-top-center'
        });
        return;
      }
      // Añadir el producto al carrito con la talla seleccionada (si corresponde)
      const status = yield _this.productoService.addToCart(product, quantity, selectedSize);
      // Redirigir a la página de checkout si el producto se añade al carrito correctamente
      if (status) {
        _this.router.navigate(['/shop/checkout']);
      } else {
        _this.toastrService.warning('No se pudo añadir el producto al carrito. Intentalo más tarde', 'Error', {
          timeOut: 3000,
          positionClass: 'toast-top-center'
        });
      }
    })();
  }
  addToCompare(product) {
    this.productService.addToCompare(product);
  }
  //Enviar id del producto a detallar
  sendProducto(prod_id) {
    localStorage.setItem('prod_id', prod_id.toString());
    this.router.navigate(['/shop/product/three/column/trim-dress']);
  }
  static #_ = this.ɵfac = function ProductBoxTwoComponent_Factory(t) {
    return new (t || ProductBoxTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_3__.ProductoService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ProductBoxTwoComponent,
    selectors: [["app-product-box-two"]],
    viewQuery: function ProductBoxTwoComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.QuickView = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.CartModal = _t.first);
      }
    },
    inputs: {
      product: "product",
      currency: "currency",
      thumbnail: "thumbnail",
      cartModal: "cartModal",
      onHowerChangeImage: "onHowerChangeImage",
      loader: "loader"
    },
    decls: 32,
    vars: 18,
    consts: [["quickView", ""], ["cartModal", ""], [1, "product-container"], [1, "img-wrapper"], [1, "lable-block"], [1, "lable3"], [1, "front"], [3, "click"], ["alt", "Product Image", 1, "img-fluid", "blur-up", "lazyload", "bg-img", 3, "src"], ["class", "back", 4, "ngIf"], [1, "cart-box"], ["title", "A\u00F1adir al carrito", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", "title", "Comprar Producto", 3, "click"], ["aria-hidden", "true", 1, "ti-money"], ["href", "javascript:void(0)", "title", "Detalle del Producto", 3, "click"], ["aria-hidden", "true", 1, "ti-more"], [1, "product-detail", "text-center"], [1, "rating"], [1, "text-center", "pro-rating", 3, "rate", "readOnly"], [3, "product", "currency"], [1, "back"], ["title", "A\u00F1adir al carrito", 3, "click"], [1, "ti-shopping-cart"]],
    template: function ProductBoxTwoComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Nuevo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 6)(6, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductBoxTwoComponent_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.sendProducto(ctx.product.prod_id));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ProductBoxTwoComponent_div_8_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ProductBoxTwoComponent_button_10_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductBoxTwoComponent_Template_a_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.buyNow(ctx.product));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductBoxTwoComponent_Template_a_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.QuickView.openModal());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 16)(16, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "bar-rating", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProductBoxTwoComponent_Template_a_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx.sendProducto(ctx.product.prod_id));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "del");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](27, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "app-quick-view", 19, 0)(30, "app-cart-modal", 19, 1);
      }
      if (rf & 2) {
        const cartModal_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.product.imagenes && ctx.product.imagenes.length > 0 ? ctx.urlApi + ctx.product.imagenes[0].imagen_url : "path/to/default/image.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.onHowerChangeImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", cartModal_r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rate", 5)("readOnly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](21, 12, ctx.product.prod_nombre));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](24, 14, ctx.product.prod_precio), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](27, 16, ctx.product.prod_precio_oferta));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("product", ctx.product)("currency", ctx.currency);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("product", ctx.product)("currency", ctx.currency);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, ngx_bar_rating__WEBPACK_IMPORTED_MODULE_10__.BarRating, _modal_quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_4__.QuickViewComponent, _modal_cart_modal_cart_modal_component__WEBPACK_IMPORTED_MODULE_5__.CartModalComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CurrencyPipe],
    styles: ["@charset \"UTF-8\";\n.img-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding-top: 100%; \n\n  overflow: hidden;\n  border: 2px solid #000; \n\n  box-sizing: border-box; \n\n}\n\n.front[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 25px;\n}\n\n.front[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 80%;\n  object-fit: cover; \n\n}\n\n.product-detail[_ngcontent-%COMP%] {\n  border: 2px solid #000; \n\n  box-sizing: border-box; \n\n}\n\n.product-container[_ngcontent-%COMP%]:hover   .front[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.product-container[_ngcontent-%COMP%]:hover   .back[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL1BST1lFQ1RPJTIwQVJURVNBTklBUyUyMExVTUFSL2NsaWVudGUtZnJvbnRlbmQtbHVtYXIvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtYm94LXR3by9wcm9kdWN0LWJveC10d28uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1ib3gtdHdvL3Byb2R1Y3QtYm94LXR3by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQSxFQUFBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQSxFQUFBLDhEQUFBO0VBQ0Esc0JBQUEsRUFBQSx1REFBQTtBREVKOztBQ0NBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBREVKOztBQ0NBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQSxFQUFBLGdFQUFBO0FERUo7O0FDQ0E7RUFDSSxzQkFBQSxFQUFBLDhEQUFBO0VBQ0Esc0JBQUEsRUFBQSx1REFBQTtBREVKOztBQ0NBO0VBQ0ksVUFBQTtBREVKOztBQ0NBO0VBQ0ksVUFBQTtBREVKOztBQ0NBO0VBQ0ksZUFBQTtBREVKIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmltZy13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDEwMCU7IC8qIFJlbGFjacODwrNuIGRlIGFzcGVjdG8gY3VhZHJhZGEgKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDsgLyogQWp1c3RhIGVsIGdyb3NvciB5IGVsIGNvbG9yIGRlbCBib3JkZSBzZWfDg8K6biBzZWEgbmVjZXNhcmlvICovXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIEluY2x1eWUgZWwgYm9yZGUgZW4gZWwgdGFtYcODwrFvIHRvdGFsIGRlbCBjb250ZW5lZG9yICovXG59XG5cbi5mcm9udCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG59XG5cbi5mcm9udCBpbWcge1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7IC8qIEFqdXN0YSBsYSBpbWFnZW4gcGFyYSBjdWJyaXIgZWwgY29udGVuZWRvciBzaW4gZGlzdG9yc2lvbmFyICovXG59XG5cbi5wcm9kdWN0LWRldGFpbCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7IC8qIEFqdXN0YSBlbCBncm9zb3IgeSBlbCBjb2xvciBkZWwgYm9yZGUgc2Vnw4PCum4gc2VhIG5lY2VzYXJpbyAqL1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBJbmNsdXllIGVsIGJvcmRlIGVuIGVsIHRhbWHDg8KxbyB0b3RhbCBkZWwgY29udGVuZWRvciAqL1xufVxuXG4ucHJvZHVjdC1jb250YWluZXI6aG92ZXIgLmZyb250IHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnByb2R1Y3QtY29udGFpbmVyOmhvdmVyIC5iYWNrIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iLCIuaW1nLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwJTsgLyogUmVsYWNpw4PCs24gZGUgYXNwZWN0byBjdWFkcmFkYSAqL1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7IC8qIEFqdXN0YSBlbCBncm9zb3IgeSBlbCBjb2xvciBkZWwgYm9yZGUgc2Vnw4PCum4gc2VhIG5lY2VzYXJpbyAqL1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogSW5jbHV5ZSBlbCBib3JkZSBlbiBlbCB0YW1hw4PCsW8gdG90YWwgZGVsIGNvbnRlbmVkb3IgKi9cclxufVxyXG5cclxuLmZyb250IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG5cclxuLmZyb250IGltZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjsgLyogQWp1c3RhIGxhIGltYWdlbiBwYXJhIGN1YnJpciBlbCBjb250ZW5lZG9yIHNpbiBkaXN0b3JzaW9uYXIgKi9cclxufVxyXG5cclxuLnByb2R1Y3QtZGV0YWlse1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDsgLyogQWp1c3RhIGVsIGdyb3NvciB5IGVsIGNvbG9yIGRlbCBib3JkZSBzZWfDg8K6biBzZWEgbmVjZXNhcmlvICovXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBJbmNsdXllIGVsIGJvcmRlIGVuIGVsIHRhbWHDg8KxbyB0b3RhbCBkZWwgY29udGVuZWRvciAqL1xyXG59XHJcblxyXG4ucHJvZHVjdC1jb250YWluZXI6aG92ZXIgLmZyb250IHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWNvbnRhaW5lcjpob3ZlciAuYmFjayB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3093:
/*!****************************************************************************************************************!*\
  !*** ./src/app/shared/components/product/product-box-vertical-slider/product-box-vertical-slider.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductBoxVerticalSliderComponent: () => (/* binding */ ProductBoxVerticalSliderComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/productos/producto.service */ 3916);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-owl-carousel-o */ 6821);






function ProductBoxVerticalSliderComponent_owl_carousel_o_3_ng_container_1_ng_template_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductBoxVerticalSliderComponent_owl_carousel_o_3_ng_container_1_ng_template_1_div_1_Template_a_click_1_listener() {
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.sendProducto(product_r2.prod_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 10)(4, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductBoxVerticalSliderComponent_owl_carousel_o_3_ng_container_1_ng_template_1_div_1_Template_a_click_4_listener() {
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.sendProducto(product_r2.prod_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", product_r2.imagenes && product_r2.imagenes.length > 0 ? ctx_r2.urlApi + product_r2.imagenes[0].imagen_url : "path/to/default/image.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 4, product_r2.prod_nombre));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 6, product_r2.prod_precio), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 8, product_r2.prod_precio_oferta));
  }
}
function ProductBoxVerticalSliderComponent_owl_carousel_o_3_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProductBoxVerticalSliderComponent_owl_carousel_o_3_ng_container_1_ng_template_1_div_1_Template, 14, 10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const segment_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", segment_r4);
  }
}
function ProductBoxVerticalSliderComponent_owl_carousel_o_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProductBoxVerticalSliderComponent_owl_carousel_o_3_ng_container_1_ng_template_1_Template, 2, 1, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function ProductBoxVerticalSliderComponent_owl_carousel_o_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "owl-carousel-o", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProductBoxVerticalSliderComponent_owl_carousel_o_3_ng_container_1_Template, 2, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r2.NewProductSliderConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.segmentedProducts);
  }
}
class ProductBoxVerticalSliderComponent {
  constructor(productoService, router) {
    this.productoService = productoService;
    this.router = router;
    this.urlApi = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
    this.title = 'Nuevos Productos'; // Default
    this.type = 'fashion'; // Default Fashion
    this.product_list = [];
    this.segmentedProducts = []; // Array para almacenar segmentos de productos
    // Configuración del slider
    this.NewProductSliderConfig = {
      items: 1,
      loop: true,
      margin: 10,
      nav: true,
      dots: true
    };
  }
  ngOnInit() {
    this.listarDiezProductos();
  }
  //Obtener los ultimos diez productos
  listarDiezProductos() {
    this.productoService.getAllTenProductos().subscribe(data => {
      this.product_list = data.map(product => {
        return {
          ...product,
          img_url: product.imagen_producto && product.imagen_producto.length > 0 ? product.imagen_producto[0].imagen_url : 'path/to/default/image.jpg'
        };
      });
      this.segmentProducts();
    }, error => {
      console.error('Error al obtener productos', error);
    });
  }
  //Enviar id del producto a detallar
  sendProducto(prod_id) {
    localStorage.setItem('prod_id', prod_id.toString());
    this.router.navigate(['/shop/product/three/column/trim-dress']);
  }
  // Método para dividir el array en segmentos de 3
  segmentProducts() {
    const size = 3; // Tamaño del segmento
    this.segmentedProducts = [];
    for (let i = 0; i < this.product_list.length; i += size) {
      this.segmentedProducts.push(this.product_list.slice(i, i + size));
    }
  }
  static #_ = this.ɵfac = function ProductBoxVerticalSliderComponent_Factory(t) {
    return new (t || ProductBoxVerticalSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_1__.ProductoService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ProductBoxVerticalSliderComponent,
    selectors: [["app-product-box-vertical-slider"]],
    inputs: {
      title: "title",
      type: "type"
    },
    decls: 4,
    vars: 2,
    consts: [[1, "theme-card"], [1, "title-border"], ["class", "offer-slider", 3, "options", 4, "ngIf"], [1, "offer-slider", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], ["class", "d-flex align-items-center", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center"], [3, "click"], ["alt", "Producto", 1, "img-fluid", 3, "src"], [1, "media-body", "align-self-center"]],
    template: function ProductBoxVerticalSliderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProductBoxVerticalSliderComponent_owl_carousel_o_3_Template, 2, 2, "owl-carousel-o", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.segmentedProducts.length > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__.CarouselSlideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe],
    styles: ["@charset \"UTF-8\";\n.custom-img[_ngcontent-%COMP%] {\n  width: 100%; \n\n  height: auto; \n\n  max-width: 100%; \n\n  max-height: 200px; \n\n  object-fit: cover; \n\n}\n\n\n\n.custom-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n}\n\n\n\n@media (max-width: 768px) {\n  .custom-img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 200px; \n\n  }\n}\n\n\n@media (max-width: 576px) {\n  .custom-img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 200px; \n\n  }\n}\n.offer-slider[_ngcontent-%COMP%]   .owl-carousel[_ngcontent-%COMP%]   .owl-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.offer-slider[_ngcontent-%COMP%]   .d-flex[_ngcontent-%COMP%] {\n  flex-direction: column; \n\n  text-align: center; \n\n}\n\n.offer-slider[_ngcontent-%COMP%]   .custom-img[_ngcontent-%COMP%] {\n  width: 100%; \n\n  height: 200px; \n\n  object-fit: cover;\n}\n\n.title-border[_ngcontent-%COMP%] {\n  text-align: center;\n  padding-right: 18px;\n}\n\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL1BST1lFQ1RPJTIwQVJURVNBTklBUyUyMExVTUFSL2NsaWVudGUtZnJvbnRlbmQtbHVtYXIvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtYm94LXZlcnRpY2FsLXNsaWRlci9wcm9kdWN0LWJveC12ZXJ0aWNhbC1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1ib3gtdmVydGljYWwtc2xpZGVyL3Byb2R1Y3QtYm94LXZlcnRpY2FsLXNsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxXQUFBLEVBQUEsc0NBQUE7RUFDQSxZQUFBLEVBQUEsd0NBQUE7RUFDQSxlQUFBLEVBQUEsdUNBQUE7RUFDQSxpQkFBQSxFQUFBLGtEQUFBO0VBQ0EsaUJBQUEsRUFBQSw2REFBQTtBREVKOztBQ0NBLG1DQUFBO0FBQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBREVKOztBQ0NBLG9DQUFBO0FBQ0E7RUFDSTtJQUNJLFdBQUE7SUFDQSxhQUFBLEVBQUEsbUNBQUE7RURFTjtBQUNGO0FDQ0Esb0NBQUE7QUFDQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGFBQUEsRUFBQSxtQ0FBQTtFRENOO0FBQ0Y7QUNJQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FERko7O0FDS0E7RUFDSSxzQkFBQSxFQUFBLGdEQUFBO0VBQ0Esa0JBQUEsRUFBQSxvQ0FBQTtBREZKOztBQ0tBO0VBQ0ksV0FBQSxFQUFBLG1DQUFBO0VBQ0EsYUFBQSxFQUFBLGtDQUFBO0VBQ0EsaUJBQUE7QURGSjs7QUNPQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QURKSjs7QUNPQTtFQUNJLGVBQUE7QURKSiIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jdXN0b20taW1nIHtcbiAgd2lkdGg6IDEwMCU7IC8qIFNlIGFkYXB0YSBhbCBhbmNobyBkZWwgY29udGVuZWRvciAqL1xuICBoZWlnaHQ6IGF1dG87IC8qIE1hbnRpZW5lIGxhIHByb3BvcmNpw4PCs24gZGUgbGEgaW1hZ2VuICovXG4gIG1heC13aWR0aDogMTAwJTsgLyogTm8gZXhjZWRlIGVsIHRhbWHDg8KxbyBkZWwgY29udGVuZWRvciAqL1xuICBtYXgtaGVpZ2h0OiAyMDBweDsgLyogQWp1c3RhIGxhIGFsdHVyYSBtw4PCoXhpbWEgc2Vnw4PCum4gdHVzIG5lY2VzaWRhZGVzICovXG4gIG9iamVjdC1maXQ6IGNvdmVyOyAvKiBBc2VndXJhIHF1ZSBsYSBpbWFnZW4gY3VicmEgZWwgY29udGVuZWRvciBzaW4gZGlzdG9yc2nDg8KzbiAqL1xufVxuXG4vKiBFc3RpbG9zIHBhcmEgcGFudGFsbGFzIGdyYW5kZXMgKi9cbi5jdXN0b20taW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi8qIEVzdGlsb3MgcGFyYSBwYW50YWxsYXMgbWVkaWFuYXMgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY3VzdG9tLWltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDBweDsgLyogQWp1c3RhIHNlZ8ODwrpuIGVsIGRpc2XDg8KxbyBkZXNlYWRvICovXG4gIH1cbn1cbi8qIEVzdGlsb3MgcGFyYSBwYW50YWxsYXMgcGVxdWXDg8KxYXMgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuY3VzdG9tLWltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMDBweDsgLyogQWp1c3RhIHNlZ8ODwrpuIGVsIGRpc2XDg8KxbyBkZXNlYWRvICovXG4gIH1cbn1cbi5vZmZlci1zbGlkZXIgLm93bC1jYXJvdXNlbCAub3dsLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm9mZmVyLXNsaWRlciAuZC1mbGV4IHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogQWp1c3RhIGxhIGRpcmVjY2nDg8KzbiBzZWfDg8K6biBlbCBkaXNlw4PCsW8gZGVzZWFkbyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIENlbnRyYSBlbCB0ZXh0byBzaSBlcyBuZWNlc2FyaW8gKi9cbn1cblxuLm9mZmVyLXNsaWRlciAuY3VzdG9tLWltZyB7XG4gIHdpZHRoOiAxMDAlOyAvKiBPIGVsIHRhbWHDg8KxbyBmaWpvIHF1ZSBwcmVmaWVyYXMgKi9cbiAgaGVpZ2h0OiAyMDBweDsgLyogQWp1c3RhIHNlZ8ODwrpuIGxvIHF1ZSBuZWNlc2l0ZXMgKi9cbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi50aXRsZS1ib3JkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDE4cHg7XG59XG5cbmEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiLmN1c3RvbS1pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7IC8qIFNlIGFkYXB0YSBhbCBhbmNobyBkZWwgY29udGVuZWRvciAqL1xyXG4gICAgaGVpZ2h0OiBhdXRvOyAvKiBNYW50aWVuZSBsYSBwcm9wb3JjacODwrNuIGRlIGxhIGltYWdlbiAqL1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvKiBObyBleGNlZGUgZWwgdGFtYcODwrFvIGRlbCBjb250ZW5lZG9yICovXHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDsgLyogQWp1c3RhIGxhIGFsdHVyYSBtw4PCoXhpbWEgc2Vnw4PCum4gdHVzIG5lY2VzaWRhZGVzICovXHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjsgLyogQXNlZ3VyYSBxdWUgbGEgaW1hZ2VuIGN1YnJhIGVsIGNvbnRlbmVkb3Igc2luIGRpc3RvcnNpw4PCs24gKi9cclxufVxyXG5cclxuLyogRXN0aWxvcyBwYXJhIHBhbnRhbGxhcyBncmFuZGVzICovXHJcbi5jdXN0b20taW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLyogRXN0aWxvcyBwYXJhIHBhbnRhbGxhcyBtZWRpYW5hcyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jdXN0b20taW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4OyAvKiBBanVzdGEgc2Vnw4PCum4gZWwgZGlzZcODwrFvIGRlc2VhZG8gKi9cclxuICAgIH1cclxufVxyXG5cclxuLyogRXN0aWxvcyBwYXJhIHBhbnRhbGxhcyBwZXF1ZcODwrFhcyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIC5jdXN0b20taW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4OyAvKiBBanVzdGEgc2Vnw4PCum4gZWwgZGlzZcODwrFvIGRlc2VhZG8gKi9cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4ub2ZmZXItc2xpZGVyIC5vd2wtY2Fyb3VzZWwgLm93bC1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vZmZlci1zbGlkZXIgLmQtZmxleCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBBanVzdGEgbGEgZGlyZWNjacODwrNuIHNlZ8ODwrpuIGVsIGRpc2XDg8KxbyBkZXNlYWRvICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIENlbnRyYSBlbCB0ZXh0byBzaSBlcyBuZWNlc2FyaW8gKi9cclxufVxyXG5cclxuLm9mZmVyLXNsaWRlciAuY3VzdG9tLWltZyB7XHJcbiAgICB3aWR0aDogMTAwJTsgLyogTyBlbCB0YW1hw4PCsW8gZmlqbyBxdWUgcHJlZmllcmFzICovXHJcbiAgICBoZWlnaHQ6IDIwMHB4OyAvKiBBanVzdGEgc2Vnw4PCum4gbG8gcXVlIG5lY2VzaXRlcyAqL1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcblxyXG4vL0VzdGlsb3MgYWwgSDVcclxuLnRpdGxlLWJvcmRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbmEgeyBcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6464:
/*!**************************************************************************************************!*\
  !*** ./src/app/shared/components/product/product-box-vertical/product-box-vertical.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductBoxVerticalComponent: () => (/* binding */ ProductBoxVerticalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bar-rating */ 9139);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-lazyload-image */ 385);
/* harmony import */ var _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../pipes/discount.pipe */ 8943);






const _c0 = a0 => ["/shop/product/left/sidebar/", a0];
const _c1 = a0 => ({
  "background-color": a0
});
function ProductBoxVerticalComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductBoxVerticalComponent_li_15_Template_li_click_0_listener() {
      const color_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.ChangeVariants(color_r2, ctx_r2.product));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const color_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](color_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, color_r2));
  }
}
class ProductBoxVerticalComponent {
  constructor() {}
  ngOnInit() {}
  // Get Product Color
  Color(variants) {
    const uniqColor = [];
    for (let i = 0; i < Object.keys(variants).length; i++) {
      if (uniqColor.indexOf(variants[i].color) === -1 && variants[i].color) {
        uniqColor.push(variants[i].color);
      }
    }
    return uniqColor;
  }
  // Change Variants
  ChangeVariants(color, product) {
    product.variants.map(item => {
      if (item.color === color) {
        product.images.map(img => {
          if (img.image_id === item.image_id) {
            this.ImageSrc = img.src;
          }
        });
      }
    });
  }
  static #_ = this.ɵfac = function ProductBoxVerticalComponent_Factory(t) {
    return new (t || ProductBoxVerticalComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ProductBoxVerticalComponent,
    selectors: [["app-product-box-vertical"]],
    inputs: {
      product: "product",
      currency: "currency"
    },
    decls: 16,
    vars: 23,
    consts: [[1, "media", "d-flex", "align-items-center"], [3, "routerLink"], [1, "img-fluid", "lazy-loading", 3, "defaultImage", "lazyLoad", "alt"], [1, "media-body", "align-self-center"], [1, "rating"], [3, "rate", "readOnly"], [1, "color-variant"], [3, "class", "ngStyle", "click", 4, "ngFor", "ngForOf"], [3, "click", "ngStyle"]],
    template: function ProductBoxVerticalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "bar-rating", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 1)(7, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ProductBoxVerticalComponent_li_15_Template, 1, 5, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c0, ctx.product.title.replace(" ", "-")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", ctx.product.images[0].alt);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("defaultImage", ctx.ImageSrc ? ctx.ImageSrc : "assets/images/product/placeholder.jpg")("lazyLoad", ctx.ImageSrc ? ctx.ImageSrc : ctx.product.images[0].src);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rate", 5)("readOnly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c0, ctx.product.title.replace(" ", "-")));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 10, ctx.product.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](13, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](12, 12, (ctx.product == null ? null : ctx.product.price) * (ctx.currency == null ? null : ctx.currency.price), ctx.product), ctx.currency == null ? null : ctx.currency.currency, "symbol"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.Color(ctx.product == null ? null : ctx.product.variants));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, ngx_bar_rating__WEBPACK_IMPORTED_MODULE_4__.BarRating, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_5__.LazyLoadImageDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe, _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_0__.DiscountPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1285:
/*!************************************************************************************************!*\
  !*** ./src/app/shared/components/redes-sociales-floating/redes-sociales-floating.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RedesSocialesFloatingComponent: () => (/* binding */ RedesSocialesFloatingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


class RedesSocialesFloatingComponent {
  constructor(viewScroller) {
    this.viewScroller = viewScroller;
    this.show = true;
    this.url_whatsapp = "https://api.whatsapp.com/send?phone=3178804915";
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function RedesSocialesFloatingComponent_Factory(t) {
    return new (t || RedesSocialesFloatingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: RedesSocialesFloatingComponent,
    selectors: [["app-redes-sociales-floating"]],
    decls: 10,
    vars: 0,
    consts: [[1, "container-redes"], ["type", "checkbox", "id", "btn-desplegar"], [1, "redes"], ["href", "https://www.facebook.com/ArtesaniasLumar?mibextid=ZbWKwL", "target", "_blank", "rel", "noopener noreferrer", 1, "fa", "fa-facebook"], ["href", "https://www.instagram.com/artesaniaslumar/", "target", "_blank", "rel", "noopener noreferrer", 1, "fa", "fa-instagram"], ["href", "https://www.tiktok.com/@artesaniaslumar?_t=8pGBz9wVWcA&_r=1", "target", "_blank", "rel", "noopener noreferrer", 1, "fab", "fa-tiktok"], ["href", "https://wa.me/+573178804915/?text=Hola, quisiera contactar para", "target", "_blank", "rel", "noopener noreferrer", 1, "fa", "fa-whatsapp"], ["href", "mailto:artesaniasputumayocolombia@gmail.com", "target", "_blank", "rel", "noopener noreferrer", 1, "fa", "fa-envelope"], [1, "btn-mas"], ["for", "btn-desplegar", "id", "signo-mas", 1, "fa", "fa-plus"]],
    template: function RedesSocialesFloatingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 3)(4, "a", 4)(5, "a", 5)(6, "a", 6)(7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: [".container-redes[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 130px;\n  left: 30px;\n  z-index: 9999;\n}\n.container-redes[_ngcontent-%COMP%]   #btn-desplegar[_ngcontent-%COMP%] {\n  display: none;\n}\n.container-redes[_ngcontent-%COMP%]   #signo-mas[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  background: #fc5c04;\n  color: #fff;\n  font-size: 25px;\n  width: 50px;\n  height: 50px;\n  line-height: 52px;\n  text-align: center;\n  border-radius: 50%;\n  transition: all 500ms ease;\n  cursor: pointer;\n}\n.container-redes[_ngcontent-%COMP%]   #signo-mas[_ngcontent-%COMP%]:hover {\n  background: gray;\n  color: #ffffff;\n}\n.container-redes[_ngcontent-%COMP%]   #btn-desplegar[_ngcontent-%COMP%]:checked    ~ .btn-mas[_ngcontent-%COMP%]   #signo-mas[_ngcontent-%COMP%] {\n  transform: rotate(137deg);\n  font-size: 25px;\n}\n.container-redes[_ngcontent-%COMP%]   .redes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  background: #fc5c04;\n  font-size: 25px;\n  color: #fff;\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  border-radius: 50%;\n  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.4);\n  transition: all 500ms ease;\n}\n.container-redes[_ngcontent-%COMP%]   .redes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: black;\n  color: #fff;\n  box-shadow: 0px 1px 10px rgb(255, 255, 255);\n}\n.container-redes[_ngcontent-%COMP%]   .redes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-bottom: -15px;\n  opacity: 0;\n  visibility: hidden;\n}\n.container-redes[_ngcontent-%COMP%]   #btn-desplegar[_ngcontent-%COMP%]:checked    ~ .redes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  opacity: 1;\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmVkZXMtc29jaWFsZXMtZmxvYXRpbmcvcmVkZXMtc29jaWFsZXMtZmxvYXRpbmcuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9QUk9ZRUNUTyUyMEFSVEVTQU5JQVMlMjBMVU1BUi9jbGllbnRlLWZyb250ZW5kLWx1bWFyL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmVkZXMtc29jaWFsZXMtZmxvYXRpbmcvcmVkZXMtc29jaWFsZXMtZmxvYXRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDQ0o7QURBSTtFQUNJLGFBQUE7QUNFUjtBREFJO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBRUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEsMEJBQUE7RUFDQSxlQUFBO0FDQVI7QURFSTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ0FSO0FERUk7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUNBUjtBREVJO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSwwQkFBQTtBQ0FSO0FERUk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSwyQ0FBQTtBQ0FSO0FERUk7RUFDSSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0FSO0FERUk7RUFDSSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0FSIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1yZWRlc3tcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMTMwcHg7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgICNidG4tZGVzcGxlZ2Fye1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAjc2lnbm8tbWFze1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAvL2JhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZjNWMwNDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgLy9ib3gtc2hhZG93OiAwcHggMXB4IDEwcHggcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgICNzaWduby1tYXM6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZDpncmF5O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgfVxyXG4gICAgI2J0bi1kZXNwbGVnYXI6Y2hlY2tlZCB+IC5idG4tbWFzICNzaWduby1tYXN7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTM3ZGVnKTtcclxuICAgICAgICBmb250LXNpemU6IDI1cHggO1xyXG4gICAgfVxyXG4gICAgLnJlZGVzIGF7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmYzVjMDQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4Oy8vXHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IHJnYigwLDAsMCwwLjQpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xyXG4gICAgfVxyXG4gICAgLnJlZGVzIGE6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIH1cclxuICAgIC5yZWRlcyBhe1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0xNXB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgI2J0bi1kZXNwbGVnYXI6Y2hlY2tlZH4gLnJlZGVzIGF7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB9XHJcbn0iLCIuY29udGFpbmVyLXJlZGVzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDEzMHB4O1xuICBsZWZ0OiAzMHB4O1xuICB6LWluZGV4OiA5OTk5O1xufVxuLmNvbnRhaW5lci1yZWRlcyAjYnRuLWRlc3BsZWdhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY29udGFpbmVyLXJlZGVzICNzaWduby1tYXMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmM1YzA0O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyLXJlZGVzICNzaWduby1tYXM6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBncmF5O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5jb250YWluZXItcmVkZXMgI2J0bi1kZXNwbGVnYXI6Y2hlY2tlZCB+IC5idG4tbWFzICNzaWduby1tYXMge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzdkZWcpO1xuICBmb250LXNpemU6IDI1cHg7XG59XG4uY29udGFpbmVyLXJlZGVzIC5yZWRlcyBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZjNWMwNDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5jb250YWluZXItcmVkZXMgLnJlZGVzIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCByZ2IoMjU1LCAyNTUsIDI1NSk7XG59XG4uY29udGFpbmVyLXJlZGVzIC5yZWRlcyBhIHtcbiAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5jb250YWluZXItcmVkZXMgI2J0bi1kZXNwbGVnYXI6Y2hlY2tlZCB+IC5yZWRlcyBhIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5313:
/*!******************************************************************!*\
  !*** ./src/app/shared/components/settings/settings.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsComponent: () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 597);
/* harmony import */ var _services_productos_producto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/productos/producto.service */ 3916);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);









const _c0 = a0 => ({
  "display": a0
});
const _c1 = () => ["/shop/cart"];
function SettingsComponent_ul_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 19)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Su carrito est\u00E1 vacio.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function SettingsComponent_ul_25_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "div", 24)(2, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SettingsComponent_ul_25_li_1_Template_a_click_2_listener() {
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.sendProducto(product_r2.prod_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 26)(5, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SettingsComponent_ul_25_li_1_Template_a_click_5_listener() {
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.sendProducto(product_r2.prod_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h4")(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SettingsComponent_ul_25_li_1_Template_div_click_15_listener() {
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.removeItem(product_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", product_r2.imagenes && product_r2.imagenes.length > 0 ? ctx_r2.urlApi + product_r2.imagenes[0].imagen_url : "path/to/default/image.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r2 == null ? null : product_r2.prod_nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", product_r2 == null ? null : product_r2.quantity, " x ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 5, product_r2.prod_precio), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 7, product_r2.prod_precio_oferta));
  }
}
function SettingsComponent_ul_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SettingsComponent_ul_25_li_1_Template, 18, 9, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "li")(3, "div", 21)(4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "subtotal: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li")(11, "div", 22)(12, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Ver Carrito");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 3, ctx_r2.getTotal)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c1));
  }
}
class SettingsComponent {
  constructor(platformId, translate, productoServices, router) {
    this.platformId = platformId;
    this.translate = translate;
    this.productoServices = productoServices;
    this.router = router;
    this.urlApi = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
    this.products = [];
    this.search = false;
  }
  ngOnInit() {
    // Suscribirse a los cambios en el carrito
    this.cartSubscription = this.productoServices.cartItems.subscribe(cartItems => {
      this.products = cartItems;
    });
  }
  ngOnDestroy() {
    // Cancelar la suscripción al destruir el componente para evitar fugas de memoria
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
  searchToggle() {
    this.search = !this.search;
  }
  get getTotal() {
    this.totalItems$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.productoServices.getCartTotalAmount());
    return this.totalItems$;
  }
  removeItem(product) {
    this.productoServices.removeFromCart(product);
    //Volver a Cargar los productos desde el localStorage
    this.products = this.productoServices.getCartProducts();
  }
  //Enviar id del producto a detallar
  sendProducto(prod_id) {
    localStorage.setItem('prod_id', prod_id.toString());
    this.router.navigate(['/shop/product/three/column/trim-dress']);
  }
  static #_ = this.ɵfac = function SettingsComponent_Factory(t) {
    return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_1__.ProductoService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SettingsComponent,
    selectors: [["app-settings"]],
    decls: 26,
    vars: 8,
    consts: [[1, "icon-nav"], ["id", "search-widgets", 1, "onhover-div", "search-widgets"], [3, "click"], ["src", "assets/images/icon/search.png", "alt", "", 1, "img-fluid"], ["id", "search-overlay", 1, "search-overlay", 3, "ngStyle"], ["title", "Cerrar", 1, "closebtn", 3, "click"], [1, "overlay-content"], [1, "container"], [1, "row"], [1, "col-xl-12"], [1, "form-group"], ["type", "text", "id", "exampleInputPassword1", "placeholder", "Buscar un producto", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "fa", "fa-search"], [1, "onhover-div"], [3, "routerLink"], ["src", "assets/images/icon/cart.png", "alt", "", 1, "img-fluid"], [1, "cart_qty_cls"], ["class", "show-div shopping-cart", 4, "ngIf"], [1, "show-div", "shopping-cart"], [4, "ngFor", "ngForOf"], [1, "total"], [1, "buttons"], [1, "view-cart", 2, "margin-right", "10px", 3, "routerLink"], [1, "media"], ["alt", "Producto", 1, "img-fluid", 3, "src"], [1, "media-body"], [1, "close-circle", 3, "click"], ["href", "javascript:void(0)"], ["aria-hidden", "true", 1, "fa", "fa-times"]],
    template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "ul")(2, "li", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SettingsComponent_Template_div_click_3_listener() {
          return ctx.searchToggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "div")(7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SettingsComponent_Template_span_click_7_listener() {
          return ctx.searchToggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "form")(14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li", 14)(19, "div")(20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, SettingsComponent_ul_24_Template, 3, 0, "ul", 18)(25, SettingsComponent_ul_25_Template, 14, 8, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, ctx.search ? "block" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.products.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.products.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.products.length);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1301:
/*!***************************************************************************************************!*\
  !*** ./src/app/shared/components/skeleton/skeleton-product-box/skeleton-product-box.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkeletonProductBoxComponent: () => (/* binding */ SkeletonProductBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-skeleton-loader */ 2347);


const _c0 = () => ({
  "background-color": "#e8e8e8",
  "border-radius": "0",
  height: "280px"
});
const _c1 = () => ({
  "background-color": "#e8e8e8",
  width: "130px",
  "border-radius": "15px",
  height: "15px",
  "margin-bottom": "6px"
});
const _c2 = () => ({
  "background-color": "#e8e8e8",
  width: "160px",
  "border-radius": "15px",
  height: "12px"
});
const _c3 = () => ({
  "background-color": "#e8e8e8",
  width: "70px",
  "border-radius": "15px",
  height: "14px"
});
class SkeletonProductBoxComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function SkeletonProductBoxComponent_Factory(t) {
    return new (t || SkeletonProductBoxComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SkeletonProductBoxComponent,
    selectors: [["app-skeleton-product-box"]],
    decls: 10,
    vars: 8,
    consts: [[1, "img-wrapper"], [3, "theme"], [1, "product-detail"]],
    template: function SkeletonProductBoxComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-skeleton-loader", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ngx-skeleton-loader", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ngx-skeleton-loader", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ngx-skeleton-loader", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
      }
    },
    dependencies: [ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_1__.NgxSkeletonLoaderComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7349:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/tap-to-top/tap-to-top.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TapToTopComponent: () => (/* binding */ TapToTopComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


const _c0 = a0 => ({
  "display": a0
});
class TapToTopComponent {
  constructor(viewScroller) {
    this.viewScroller = viewScroller;
    this.show = false;
  }
  ngOnInit() {}
  // @HostListener Decorator
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 600) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
  tapToTop() {
    this.viewScroller.scrollToPosition([0, 0]);
  }
  static #_ = this.ɵfac = function TapToTopComponent_Factory(t) {
    return new (t || TapToTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TapToTopComponent,
    selectors: [["app-tap-to-top"]],
    hostBindings: function TapToTopComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function TapToTopComponent_scroll_HostBindingHandler() {
          return ctx.onWindowScroll();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
      }
    },
    decls: 3,
    vars: 3,
    consts: [[1, "tap-top", "top-cls", 3, "click", "ngStyle"], [1, "fa", "fa-angle-double-up"]],
    template: function TapToTopComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TapToTopComponent_Template_div_click_0_listener() {
          return ctx.tapToTop();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.show ? "block" : "none"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5532:
/*!***************************************************************!*\
  !*** ./src/app/shared/footer-lumar/footer-lumar.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterLumarComponent: () => (/* binding */ FooterLumarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


function FooterLumarComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "section", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class FooterLumarComponent {
  constructor() {
    this.class = 'footer-light'; // Default class 
    this.themeLogo = 'assets/images/icon/logo-lumar-footer.png'; // Default Logo
    this.newsletter = true; // Default True
    this.today = Date.now();
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function FooterLumarComponent_Factory(t) {
    return new (t || FooterLumarComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterLumarComponent,
    selectors: [["app-footer-lumar"]],
    inputs: {
      class: "class",
      themeLogo: "themeLogo",
      newsletter: "newsletter"
    },
    decls: 109,
    vars: 8,
    consts: [["class", "dark-layout", 4, "ngIf"], [1, "section-b-space", "dark-layout"], [1, "container"], [1, "row", "footer-theme", "partition-f"], [1, "col-lg-4", "col-md-6"], [1, "footer-title", "footer-mobile-title"], [1, "footer-contant"], [1, "footer-logo"], ["alt", "logo", 2, "filter", "drop-shadow( 0.4px 1px 2px rgb(255, 255, 255))", 3, "src"], [1, "desc_lumar"], [1, "footer-social"], ["src", "../../../assets/images/logos-cam-ind/Logo-Camara-Comercio.webp", "alt", "Camara de Comercio Putumayo", "title", "C\u00E1mara de Comercio Putumayo", 1, "logo-img"], ["src", "../../../assets/images/logos-cam-ind/Logo-Industria-y-Comercio.webp", "alt", "Industria y Comercio", "title", "Industria y Comercio", 1, "logo-img"], [1, "col", "offset-xl-1"], [1, "sub-title"], [1, "footer-title"], ["href", "/shop/categoria/joyeria"], ["href", "/shop/categoria/regalos"], ["href", "/shop/categoria/ropa-hombre"], ["href", "/shop/categoria/ropa-mujer"], [1, "col"], ["href", "/pages/contact"], [1, "contact-list"], [1, "fa", "fa-map-marker"], [1, "fa", "fa-phone"], [1, "fa", "fa-envelope-o"], [1, "politicas"], ["href", "/pages/entrega-mensajeria"], ["href", "/pages/blog/right/sidebar"], [1, "sub-footer"], [1, "row"], [1, "col-xl-6", "col-md-6", "col-sm-12"], [1, "footer-end"], ["aria-hidden", "true", 1, "fa", "fa-copyright"], [1, "payment-card-bottom"], ["src", "assets/images/icon/visa.png", "alt", ""], ["src", "assets/images/icon/mastercard.png", "alt", ""], ["src", "assets/images/icon/paypal.png", "alt", ""], ["src", "assets/images/icon/american-express.png", "alt", ""], ["src", "assets/images/icon/discover.png", "alt", ""], [1, "dark-layout"], [1, "small-section", "border-section", "border-top-0"]],
    template: function FooterLumarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterLumarComponent_div_1_Template, 3, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1)(3, "div", 2)(4, "div", 3)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "En nuestra empresa ofrecemos una variedad de art\u00EDculos artesanales para oficina, decorativos para el hogar, accesorios y prendas de vestir etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10)(13, "li")(14, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li")(17, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13)(20, "div", 14)(21, "div", 15)(22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Categorias");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6)(25, "ul")(26, "li")(27, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Joyeria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li")(30, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Regalos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li")(33, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Ropa para hombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li")(36, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Ropa para mujer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20)(39, "div", 14)(40, "div", 15)(41, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u00BFPor qu\u00E9 elegirnos?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6)(44, "ul")(45, "li")(46, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "env\u00EDo y devoluci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li")(49, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "compras seguras");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li")(52, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "contactos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 20)(55, "div", 14)(56, "div", 15)(57, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Informaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 6)(60, "ul", 22)(61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Calle 9 N\u00BA 6-35 Centro Mocoa - Putumayo diagonal al tobog\u00E1n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Ll\u00E1manos: +573124363780");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "soportealcliente@artesaniaslumar.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 26)(73, "div", 14)(74, "div")(75, "ul")(76, "li")(77, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Pol\u00EDticas Entrega y Mensajer\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li")(80, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Pol\u00EDticas de Garant\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 29)(83, "div", 2)(84, "div", 30)(85, "div", 31)(86, "div", 32)(87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](90, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 31)(92, "div", 34)(93, "ul")(94, "li")(95, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li")(98, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li")(101, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li")(104, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li")(107, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.class);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newsletter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.themeLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](90, 5, ctx.today, "y"), " ARTESANIAS LUMAR");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
    styles: ["@charset \"UTF-8\";\n.desc_lumar[_ngcontent-%COMP%] {\n  color: white !important;\n  text-align: justify;\n}\n\n.logo-img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  width: 50px;\n  \n\n}\n\n@media (max-width: 768px) {\n  .logo-img[_ngcontent-%COMP%] {\n    width: 40px;\n    \n\n  }\n}\n@media (max-width: 480px) {\n  .logo-img[_ngcontent-%COMP%] {\n    width: 35px;\n    \n\n  }\n  .politicas[_ngcontent-%COMP%] {\n    margin-top: 40px;\n  }\n}\n.politicas[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  \n\n  align-items: center;\n  \n\n  height: 100%;\n  \n\n  text-align: center;\n}\n\n.politicas[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  \n\n  padding: 0;\n  padding: 0;\n  display: flex;\n  \n\n  gap: 40px;\n  \n\n}\n\n.politicas[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  \n\n}\n\n.politicas[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  \n\n  color: white;\n  \n\n  font-size: 18px;\n  \n\n  position: relative;\n}\n\n.politicas[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after {\n  content: \"\";\n  \n\n  position: absolute;\n  width: 0;\n  height: 3px;\n  bottom: -2px;\n  left: 0;\n  background-color: #fc5c04;\n  \n\n  transition: width 0.3s ease;\n  \n\n}\n\n.politicas[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n  \n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL1BST1lFQ1RPJTIwQVJURVNBTklBUyUyMExVTUFSL2NsaWVudGUtZnJvbnRlbmQtbHVtYXIvc3JjL2FwcC9zaGFyZWQvZm9vdGVyLWx1bWFyL2Zvb3Rlci1sdW1hci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2Zvb3Rlci1sdW1hci9mb290ZXItbHVtYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtBREVKOztBQ0NBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7QURFSjs7QUNDQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLCtDQUFBO0VERU47QUFDRjtBQ0NBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsaUNBQUE7RURDTjtFQ0NFO0lBQ0ksZ0JBQUE7RURDTjtBQUNGO0FDRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7RUFDQSxZQUFBO0VBQ0Esa0RBQUE7RUFDQSxrQkFBQTtBREFKOztBQ0dBO0VBQ0ksZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGdEQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0FEQUo7O0FDR0E7RUFDSSxjQUFBO0VBQ0EsOENBQUE7QURBSjs7QUNHQTtFQUNJLHFCQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBREFKOztBQ0dBO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7QURBSjs7QUNHQTtFQUNJLFdBQUE7RUFDQSx1Q0FBQTtBREFKIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmRlc2NfbHVtYXIge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmxvZ28taW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiA1MHB4O1xuICAvKiBQdWVkZXMgYWp1c3RhciBlbCB0YW1hw4PCsW8gYmFzZSBhcXXDg8KtICovXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubG9nby1pbWcge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIC8qIFRhbWHDg8KxbyBtw4PCoXMgcGVxdWXDg8KxbyBwYXJhIHBhbnRhbGxhcyBwZXF1ZcODwrFhcyAqL1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmxvZ28taW1nIHtcbiAgICB3aWR0aDogMzVweDtcbiAgICAvKiBBw4PCum4gbcODwqFzIHBlcXVlw4PCsW8gcGFyYSBtw4PCs3ZpbGVzICovXG4gIH1cbiAgLnBvbGl0aWNhcyB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgfVxufVxuLnBvbGl0aWNhcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAvKiBDZW50cmEgaG9yaXpvbnRhbG1lbnRlICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qIENlbnRyYSB2ZXJ0aWNhbG1lbnRlIHNpIGhheSBtw4PCoXMgY29udGVuaWRvICovXG4gIGhlaWdodDogMTAwJTtcbiAgLyogUHVlZGVzIGFqdXN0YXIgZXN0YSBhbHR1cmEgc2Vnw4PCum4gbG8gbmVjZXNpdGVzICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBvbGl0aWNhcyB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIC8qIEVsaW1pbmEgbG9zIHB1bnRvcyBkZSBsYSBsaXN0YSAqL1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBIYWNlIHF1ZSBsb3MgPGxpPiBlc3TDg8KpbiBlbiBsw4PCrW5lYSBob3Jpem9udGFsICovXG4gIGdhcDogNDBweDtcbiAgLyogQcODwrFhZGUgc2VwYXJhY2nDg8KzbiBlbnRyZSBsb3MgPGxpPiAqL1xufVxuXG4ucG9saXRpY2FzIGxpIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIC8qIEVzcGFjaWFkbyBlbnRyZSBsb3MgZWxlbWVudG9zIGRlIGxhIGxpc3RhICovXG59XG5cbi5wb2xpdGljYXMgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgLyogRWxpbWluYSBlbCBzdWJyYXlhZG8gcG9yIGRlZmVjdG8gKi9cbiAgY29sb3I6IHdoaXRlO1xuICAvKiBDb2xvciBkZWwgdGV4dG8gKi9cbiAgZm9udC1zaXplOiAxOHB4O1xuICAvKiBUYW1hw4PCsW8gZGVsIHRleHRvICovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBvbGl0aWNhcyBhOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIC8qIENyZWEgZWwgc3VicmF5YWRvICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogM3B4O1xuICBib3R0b206IC0ycHg7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYzVjMDQ7XG4gIC8qIENvbG9yIGRlbCBzdWJyYXlhZG8gZW4gaG92ZXIgKi9cbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICAvKiBFZmVjdG8gZGUgdHJhbnNpY2nDg8KzbiAqL1xufVxuXG4ucG9saXRpY2FzIGE6aG92ZXI6OmFmdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIEV4cGFuZGUgbGEgbMODwq1uZWEgY29tcGxldGEgZW4gaG92ZXIgKi9cbn0iLCIuZGVzY19sdW1hciB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5sb2dvLWltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIC8qIFB1ZWRlcyBhanVzdGFyIGVsIHRhbWHDg8KxbyBiYXNlIGFxdcODwq0gKi9cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAubG9nby1pbWcge1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIC8qIFRhbWHDg8KxbyBtw4PCoXMgcGVxdWXDg8KxbyBwYXJhIHBhbnRhbGxhcyBwZXF1ZcODwrFhcyAqL1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5sb2dvLWltZyB7XHJcbiAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgLyogQcODwrpuIG3Dg8KhcyBwZXF1ZcODwrFvIHBhcmEgbcODwrN2aWxlcyAqL1xyXG4gICAgfVxyXG4gICAgLnBvbGl0aWNhc3tcclxuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucG9saXRpY2FzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC8qIENlbnRyYSBob3Jpem9udGFsbWVudGUgKi9cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvKiBDZW50cmEgdmVydGljYWxtZW50ZSBzaSBoYXkgbcODwqFzIGNvbnRlbmlkbyAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLyogUHVlZGVzIGFqdXN0YXIgZXN0YSBhbHR1cmEgc2Vnw4PCum4gbG8gbmVjZXNpdGVzICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wb2xpdGljYXMgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIC8qIEVsaW1pbmEgbG9zIHB1bnRvcyBkZSBsYSBsaXN0YSAqL1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyogSGFjZSBxdWUgbG9zIDxsaT4gZXN0w4PCqW4gZW4gbMODwq1uZWEgaG9yaXpvbnRhbCAqL1xyXG4gICAgZ2FwOiA0MHB4O1xyXG4gICAgLyogQcODwrFhZGUgc2VwYXJhY2nDg8KzbiBlbnRyZSBsb3MgPGxpPiAqL1xyXG59XHJcblxyXG4ucG9saXRpY2FzIGxpIHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgLyogRXNwYWNpYWRvIGVudHJlIGxvcyBlbGVtZW50b3MgZGUgbGEgbGlzdGEgKi9cclxufVxyXG5cclxuLnBvbGl0aWNhcyBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIC8qIEVsaW1pbmEgZWwgc3VicmF5YWRvIHBvciBkZWZlY3RvICovXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAvKiBDb2xvciBkZWwgdGV4dG8gKi9cclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIC8qIFRhbWHDg8KxbyBkZWwgdGV4dG8gKi9cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnBvbGl0aWNhcyBhOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgLyogQ3JlYSBlbCBzdWJyYXlhZG8gKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBib3R0b206IC0ycHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjNWMwNDtcclxuICAgIC8qIENvbG9yIGRlbCBzdWJyYXlhZG8gZW4gaG92ZXIgKi9cclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcclxuICAgIC8qIEVmZWN0byBkZSB0cmFuc2ljacODwrNuICovXHJcbn1cclxuXHJcbi5wb2xpdGljYXMgYTpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBFeHBhbmRlIGxhIGzDg8KtbmVhIGNvbXBsZXRhIGVuIGhvdmVyICovXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1748:
/*!***************************************************************!*\
  !*** ./src/app/shared/header-lumar/header-lumar.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderLumarComponent: () => (/* binding */ HeaderLumarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/left-menu/left-menu.component */ 9941);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/menu/menu.component */ 8397);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/settings/settings.component */ 5313);






const _c0 = () => ["/home/lumar"];
function HeaderLumarComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13)(1, "div", 2)(2, "div", 3)(3, "div", 14)(4, "div", 15)(5, "ul")(6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Bienvenido a Artesanias Lumar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Ll\u00E1manos: +573178804915");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
  }
}
class HeaderLumarComponent {
  constructor() {
    this.class = 'header-2';
    this.themeLogo = 'assets/images/icon/logo.png'; // Default Logo
    this.topbar = true; // Default True
    this.sticky = false; // Default false
    this.stick = false;
  }
  ngOnInit() {}
  // @HostListener Decorator
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number >= 150) {
      this.stick = true;
    } else {
      this.stick = false;
    }
  }
  static #_ = this.ɵfac = function HeaderLumarComponent_Factory(t) {
    return new (t || HeaderLumarComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: HeaderLumarComponent,
    selectors: [["app-header-lumar"]],
    hostBindings: function HeaderLumarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scroll", function HeaderLumarComponent_scroll_HostBindingHandler() {
          return ctx.onWindowScroll();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
      }
    },
    inputs: {
      class: "class",
      themeLogo: "themeLogo",
      topbar: "topbar",
      sticky: "sticky"
    },
    decls: 18,
    vars: 7,
    consts: [[1, "sticky", 3, "ngClass"], ["class", "top-header", 4, "ngIf"], [1, "container"], [1, "row"], [1, "col-sm-12"], [1, "main-menu", "border-section", "border-top-0"], [1, "menu-left"], [1, "brand-logo", "layout2-logo", "headerlogo"], [3, "routerLink"], ["alt", "logo", 1, "img-fluid", 3, "src"], [1, "menu-right", "pull-right"], [1, "col-lg-12"], [1, "main-nav-center"], [1, "top-header"], [1, "col-lg-8"], [1, "header-contact"], ["aria-hidden", "true", 1, "fa", "fa-phone"]],
    template: function HeaderLumarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HeaderLumarComponent_div_1_Template, 11, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-left-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7)(9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "app-settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 2)(14, "div", 3)(15, "div", 11)(16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("fixed", ctx.stick && ctx.sticky);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.class);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.topbar);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.themeLogo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _components_left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_0__.LeftMenuComponent, _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__.SettingsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8943:
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/discount.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiscountPipe: () => (/* binding */ DiscountPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class DiscountPipe {
  transform(value, args) {
    const price = args.discount ? args.price - args.price * args.discount / 100 : args.price;
    return price;
  }
  static #_ = this.ɵfac = function DiscountPipe_Factory(t) {
    return new (t || DiscountPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "discount",
    type: DiscountPipe,
    pure: true
  });
}

/***/ }),

/***/ 1931:
/*!************************************************!*\
  !*** ./src/app/shared/services/nav.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavService: () => (/* binding */ NavService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);




class NavService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.seccionUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.seccionUrl;
    this.categoriaUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.categoriaUrl;
    this.leftMenuToggle = false;
    this.mainMenuToggle = false;
    this.MENUITEMS = [{
      path: 'home/lumar',
      title: 'inicio',
      type: 'link',
      active: false
    }, {
      title: 'Sección',
      type: 'sub',
      active: false,
      children: [{
        path: '/shop/seccion/artesanias',
        title: 'Artesanias',
        type: 'link'
      }, {
        path: '/shop/seccion/joyeria',
        title: 'Joyeria y Bisuteria',
        type: 'link'
      }, {
        path: '/shop/seccion/ropa',
        title: 'Ropa',
        type: 'link'
      }, {
        path: '/shop/seccion/bolsos',
        title: 'Bolsos',
        type: 'link'
      }]
    }, {
      title: 'Categorias',
      type: 'sub',
      active: false,
      children: [
      // {
      // 	title: 'sidebar', type: 'sub', active: false, children: [
      // 		{ path: '/shop/product/left/sidebar/trim-dress', title: 'left-sidebar', type: 'link' },
      // 		{ path: '/shop/product/right/sidebar/trim-dress', title: 'right-sidebar', type: 'link' },
      // 		{ path: '/shop/product/no/sidebar/trim-dress', title: 'no-sidebar', type: 'link' }
      // 	]
      // },
      {
        path: '/shop/categoria/regalos',
        title: 'Regalos',
        type: 'link'
      }, {
        path: '/shop/categoria/decorativas',
        title: 'Decorativas',
        type: 'link'
      }, {
        path: '/shop/categoria/hogar',
        title: 'Hogar',
        type: 'link'
      }, {
        path: '/shop/categoria/oficina',
        title: 'Oficina',
        type: 'link'
      }, {
        path: '/shop/categoria/joyeria',
        title: 'Joyeria',
        type: 'link'
      }, {
        path: '/shop/categoria/accesorios-ropa',
        title: 'Accesorios para ropa',
        type: 'link'
      }, {
        path: '/shop/categoria/ropa-hombre',
        title: 'Ropa para hombre',
        type: 'link'
      }, {
        path: '/shop/categoria/ropa-mujer',
        title: 'Ropa para mujer',
        type: 'link'
      }, {
        path: '/shop/categoria/mochilas',
        title: 'Mochilas',
        type: 'link'
      }, {
        path: '/shop/categoria/billetera',
        title: 'Billetera',
        type: 'link'
      }]
    },
    // {
    // 	title: 'Información Importante', type: 'sub', active: false, children: [
    // 		{ path: '/pages/entrega-mensajeria', title: 'Entrega y Mensajeria', type: 'link' },
    // 		{ path: '/pages/blog/right/sidebar', title: 'Politicas de Garantia', type: 'link' },
    // 	]
    // },
    {
      title: 'Sobre Nosotros',
      type: 'sub',
      active: false,
      children: [{
        path: '/pages/presentacion',
        title: 'presentación',
        type: 'link'
      }, {
        path: '/pages/contact',
        title: 'información de contacto',
        type: 'link'
      }, {
        path: '/pages/atencion-cliente',
        title: 'atención al cliente',
        type: 'link'
      }]
    }];
    this.LEFTMENUITEMS = [{
      title: 'clothing',
      type: 'sub',
      megaMenu: true,
      active: false,
      children: [{
        title: 'mens fashion',
        type: 'link',
        active: false,
        children: [{
          path: '/home/fashion',
          title: 'sports wear',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'top',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'bottom',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'ethic wear',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'sports wear',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'shirts',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'bottom',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'ethic wear',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'sports wear',
          type: 'link'
        }]
      }, {
        title: 'women fashion',
        type: 'link',
        active: false,
        children: [{
          path: '/home/fashion',
          title: 'dresses',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'skirts',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'westarn wear',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'ethic wear',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'bottom',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'ethic wear',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'sports wear',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'sports wear',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'bottom wear',
          type: 'link'
        }]
      }]
    }, {
      title: 'bags',
      type: 'sub',
      active: false,
      children: [{
        path: '/home/fashion',
        title: 'shopper bags',
        type: 'link'
      }, {
        path: '/home/fashion',
        title: 'laptop bags',
        type: 'link'
      }, {
        path: '/home/fashion',
        title: 'clutches',
        type: 'link'
      }, {
        path: '/home/fashion',
        title: 'purses',
        type: 'link',
        active: false,
        children: [{
          path: '/home/fashion',
          title: 'purses',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'wallets',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'leathers',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'satchels',
          type: 'link'
        }]
      }]
    }, {
      title: 'footwear',
      type: 'sub',
      active: false,
      children: [{
        path: '/home/fashion',
        title: 'sport shoes',
        type: 'link'
      }, {
        path: '/home/fashion',
        title: 'formal shoes',
        type: 'link'
      }, {
        path: '/home/fashion',
        title: 'casual shoes',
        type: 'link'
      }]
    }, {
      path: '/home/fashion',
      title: 'watches',
      type: 'link'
    }, {
      title: 'Accessories',
      type: 'sub',
      active: false,
      children: [{
        path: '/home/fashion',
        title: 'fashion jewellery',
        type: 'link'
      }, {
        path: '/home/fashion',
        title: 'caps and hats',
        type: 'link'
      }, {
        path: '/home/fashion',
        title: 'precious jewellery',
        type: 'link'
      }, {
        path: '/home/fashion',
        title: 'more..',
        type: 'link',
        active: false,
        children: [{
          path: '/home/fashion',
          title: 'necklaces',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'earrings',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'rings & wrist wear',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'more...',
          type: 'link',
          active: false,
          children: [{
            path: '/home/fashion',
            title: 'ties',
            type: 'link'
          }, {
            path: '/home/fashion',
            title: 'cufflinks',
            type: 'link'
          }, {
            path: '/home/fashion',
            title: 'pockets squares',
            type: 'link'
          }, {
            path: '/home/fashion',
            title: 'helmets',
            type: 'link'
          }, {
            path: '/home/fashion',
            title: 'scarves',
            type: 'link'
          }, {
            path: '/home/fashion',
            title: 'more...',
            type: 'link',
            active: false,
            children: [{
              path: '/home/fashion',
              title: 'accessory gift sets',
              type: 'link'
            }, {
              path: '/home/fashion',
              title: 'travel accessories',
              type: 'link'
            }, {
              path: '/home/fashion',
              title: 'phone cases',
              type: 'link'
            }]
          }]
        }]
      }]
    }, {
      path: '/home/fashion',
      title: 'house of design',
      type: 'link'
    }, {
      title: 'beauty & personal care',
      type: 'sub',
      active: false,
      children: [{
        path: '/home/fashion',
        title: 'makeup',
        type: 'link'
      }, {
        path: '/home/fashion',
        title: 'skincare',
        type: 'link'
      }, {
        path: '/home/fashion',
        title: 'premium beaty',
        type: 'link'
      }, {
        path: '/home/fashion',
        title: 'more..',
        type: 'link',
        active: false,
        children: [{
          path: '/home/fashion',
          title: 'fragrances',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'luxury beauty',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'hair care',
          type: 'link'
        }, {
          path: '/home/fashion',
          title: 'tools & brushes',
          type: 'link'
        }]
      }]
    }, {
      path: '/home/fashion',
      title: 'home & decor',
      type: 'link'
    }, {
      path: '/home/fashion',
      title: 'kitchen',
      type: 'link'
    }];
    // Array
    this.items = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.MENUITEMS);
    this.leftMenuItems = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.MENUITEMS);
  }
  // Windows width
  onResize(event) {
    this.screenWidth = window.innerWidth;
  }
  static #_ = this.ɵfac = function NavService_Factory(t) {
    return new (t || NavService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: NavService,
    factory: NavService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5085:
/*!****************************************************!*\
  !*** ./src/app/shared/services/product.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductService: () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3037);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4285);





const state = {
  products: JSON.parse(localStorage['products'] || '[]'),
  wishlist: JSON.parse(localStorage['wishlistItems'] || '[]'),
  compare: JSON.parse(localStorage['compareItems'] || '[]'),
  cart: JSON.parse(localStorage['cartItems'] || '[]')
};
class ProductService {
  constructor(http, toastrService) {
    this.http = http;
    this.toastrService = toastrService;
    this.Currency = {
      name: 'Dollar',
      currency: 'USD',
      price: 1
    }; // Default Currency
    this.OpenCart = false;
  }
  /*
    ---------------------------------------------
    ---------------  Product  -------------------
    ---------------------------------------------
  */
  // Product
  get products() {
    this.Products = this.http.get('assets/data/products.json').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(data => data));
    this.Products.subscribe(next => {
      localStorage['products'] = JSON.stringify(next);
    });
    return this.Products = this.Products.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.startWith)(JSON.parse(localStorage['products'] || '[]')));
  }
  // Get Products
  get getProducts() {
    return this.products;
  }
  // Get Products By Slug
  getProductBySlug(slug) {
    return this.products.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(items => {
      return items.find(item => {
        return item.title.replace(' ', '-') === slug;
      });
    }));
  }
  /*
    ---------------------------------------------
    ---------------  Wish List  -----------------
    ---------------------------------------------
  */
  // Get Wishlist Items
  get wishlistItems() {
    const itemsStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
      observer.next(state.wishlist);
      observer.complete();
    });
    return itemsStream;
  }
  // Add to Wishlist
  addToWishlist(product) {
    const wishlistItem = state.wishlist.find(item => item.id === product.id);
    if (!wishlistItem) {
      state.wishlist.push({
        ...product
      });
    }
    this.toastrService.success('Product has been added in wishlist.');
    localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
    return true;
  }
  // Remove Wishlist items
  removeWishlistItem(product) {
    const index = state.wishlist.indexOf(product);
    state.wishlist.splice(index, 1);
    localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
    return true;
  }
  /*
    ---------------------------------------------
    -------------  Compare Product  -------------
    ---------------------------------------------
  */
  // Get Compare Items
  get compareItems() {
    const itemsStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
      observer.next(state.compare);
      observer.complete();
    });
    return itemsStream;
  }
  // Add to Compare
  addToCompare(product) {
    const compareItem = state.compare.find(item => item.id === product.id);
    if (!compareItem) {
      state.compare.push({
        ...product
      });
    }
    this.toastrService.success('Product has been added in compare.');
    localStorage.setItem("compareItems", JSON.stringify(state.compare));
    return true;
  }
  // Remove Compare items
  removeCompareItem(product) {
    const index = state.compare.indexOf(product);
    state.compare.splice(index, 1);
    localStorage.setItem("compareItems", JSON.stringify(state.compare));
    return true;
  }
  /*
    ---------------------------------------------
    -----------------  Cart  --------------------
    ---------------------------------------------
  */
  // Get Cart Items
  get cartItems() {
    const itemsStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
      observer.next(state.cart);
      observer.complete();
    });
    return itemsStream;
  }
  // Add to Cart
  addToCart(product) {
    // const cartItem = state.cart.find(item => item.id === product.id);
    // const qty = product.quantity ? product.quantity : 1;
    // const items = cartItem ? cartItem : product;
    // const stock = this.calculateStockCounts(items, qty);
    // if(!stock) return false
    // if (cartItem) {
    //     cartItem.quantity += qty    
    // } else {
    //   state.cart.push({
    //     ...product,
    //     quantity: qty
    //   })
    // }
    // this.OpenCart = true; // If we use cart variation modal
    // localStorage.setItem("cartItems", JSON.stringify(state.cart));
    // return true;
  }
  // Update Cart Quantity
  updateCartQuantity(product, quantity) {
    return state.cart.find((items, index) => {
      if (items.id === product.id) {
        const qty = state.cart[index].quantity + quantity;
        const stock = this.calculateStockCounts(state.cart[index], quantity);
        if (qty !== 0 && stock) {
          state.cart[index].quantity = qty;
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cart));
        return true;
      }
    });
  }
  // Calculate Stock Counts
  calculateStockCounts(product, quantity) {
    const qty = product.quantity + quantity;
    const stock = product.stock;
    if (stock < qty || stock == 0) {
      this.toastrService.error('You can not add more items than available. In stock ' + stock + ' items.');
      return false;
    }
    return true;
  }
  // Remove Cart items
  removeCartItem(product) {
    const index = state.cart.indexOf(product);
    state.cart.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(state.cart));
    return true;
  }
  // Total amount 
  cartTotalAmount() {
    return this.cartItems.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(product => {
      return product.reduce((prev, curr) => {
        let price = curr.price;
        if (curr.discount) {
          price = curr.price - curr.price * curr.discount / 100;
        }
        return (prev + price * curr.quantity) * this.Currency.price;
      }, 0);
    }));
  }
  /*
    ---------------------------------------------
    ------------  Filter Product  ---------------
    ---------------------------------------------
  */
  // Get Product Filter
  filterProducts(filter) {
    return this.products.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(product => product.filter(item => {
      if (!filter.length) return true;
      const Tags = filter.some(prev => {
        if (item.tags) {
          if (item.tags.includes(prev)) {
            return prev;
          }
        }
      });
      return Tags;
    })));
  }
  // Sorting Filter
  sortProducts(products, payload) {
    if (payload === 'ascending') {
      return products.sort((a, b) => {
        if (a.id < b.id) {
          return -1;
        } else if (a.id > b.id) {
          return 1;
        }
        return 0;
      });
    } else if (payload === 'a-z') {
      return products.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        } else if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    } else if (payload === 'z-a') {
      return products.sort((a, b) => {
        if (a.title > b.title) {
          return -1;
        } else if (a.title < b.title) {
          return 1;
        }
        return 0;
      });
    } else if (payload === 'low') {
      return products.sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        } else if (a.price > b.price) {
          return 1;
        }
        return 0;
      });
    } else if (payload === 'high') {
      return products.sort((a, b) => {
        if (a.price > b.price) {
          return -1;
        } else if (a.price < b.price) {
          return 1;
        }
        return 0;
      });
    }
  }
  /*
    ---------------------------------------------
    ------------- Product Pagination  -----------
    ---------------------------------------------
  */
  getPager(totalItems, currentPage = 1, pageSize = 16) {
    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);
    // Paginate Range
    let paginateRange = 3;
    // ensure current page isn't out of range
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }
    let startPage, endPage;
    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage < paginateRange - 1) {
      startPage = 1;
      endPage = startPage + paginateRange - 1;
    } else {
      startPage = currentPage - 1;
      endPage = currentPage + 1;
    }
    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array(endPage + 1 - startPage).keys()).map(i => startPage + i);
    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }
  static #_ = this.ɵfac = function ProductService_Factory(t) {
    return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ProductService,
    factory: ProductService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3916:
/*!***************************************************************!*\
  !*** ./src/app/shared/services/productos/producto.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductoService: () => (/* binding */ ProductoService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);




class ProductoService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.productoUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.productoURL;
    //Cambios en el carrito
    this.cartSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.getCartProducts()); // Inicializa el BehaviorSubject con los productos en el carrito
    this.cartItems = this.cartSubject.asObservable(); // Observable para los productos en el carrito
  }
  //Obtener los ultimos diez productos
  getAllTenProductos() {
    return this.httpClient.get(this.productoUrl + 'lasted');
  }
  //Obtener los productos especiales
  getAllEspecialesProductos() {
    return this.httpClient.get(this.productoUrl + 'especiales/lista');
  }
  //Solicitud listar productos por seccion
  getProductosSeccion(seccionId) {
    return this.httpClient.get(`${this.productoUrl}search?seccionId=${seccionId}`);
  }
  //Solicitud obtener un producto
  getOneProducto(prod_id) {
    return this.httpClient.get(this.productoUrl + prod_id);
  }
  //Solicitud Productos por categoria
  getProductosCategoria(categoriaId) {
    return this.httpClient.get(`${this.productoUrl}search?categoriaId=${categoriaId}`);
  }
  // Añadir producto al carrito
  addToCart(product, quantity = 1, selectedSize) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Verificar si el producto ya está en el carrito
    const itemIndex = cart.findIndex(item => item.prod_id === product.prod_id);
    if (itemIndex === -1) {
      //Agregar selectedSize si hay talla seleccionada
      if (selectedSize) {
        // Si no está en el carrito, añadirlo con la cantidad especificada (por defecto será 1)
        cart.push({
          ...product,
          quantity,
          selectedSize
        });
        localStorage.setItem('cart', JSON.stringify(cart));
        this.cartSubject.next(cart); // Emitir cambios
        return true;
      } else {
        // Si no está en el carrito, añadirlo con la cantidad especificada (por defecto será 1)
        cart.push({
          ...product,
          quantity
        });
        localStorage.setItem('cart', JSON.stringify(cart));
        this.cartSubject.next(cart); // Emitir cambios
        return true;
      }
    }
    return false; // No se añade porque ya está en el carrito
  }
  // Limpiar el carrito
  clearCart() {
    localStorage.removeItem('cart'); // Elimina el carrito del localStorage
    this.cartSubject.next([]); // Emite un carrito vacío para actualizar cualquier suscripción
  }
  // Obtener productos en el carrito
  getCartProducts() {
    return JSON.parse(localStorage.getItem('cart')) || [];
  }
  // Eliminar producto del carrito
  removeFromCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.prod_id !== product.prod_id);
    localStorage.setItem('cart', JSON.stringify(cart));
    this.cartSubject.next(cart); // Emite los cambios
  }
  // Actualizar cantidad de un producto en el carrito
  incrementCartQuantity(product, selectedTalla) {
    // Obtener el carrito del localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Encontrar el índice del producto en el carrito
    const itemIndex = cart.findIndex(item => item.prod_id === product.prod_id);
    if (itemIndex > -1) {
      const cartItem = cart[itemIndex];
      cartItem.selectedSize = selectedTalla;
      // Verificar si el producto tiene inventario con talla
      if (cartItem.inventario && cartItem.inventario.length > 1 && selectedTalla) {
        // Si hay tallas y se seleccionó una talla específica
        const invIndex = cartItem.inventario.findIndex(inv => inv.inv_talla === selectedTalla);
        if (invIndex > -1) {
          const inventarioItem = cartItem.inventario[invIndex];
          // Si la cantidad actual del producto es mayor que el inventario disponible para esa talla
          if (cartItem.quantity > inventarioItem.inv_cantidad_disponible) {
            cartItem.quantity = inventarioItem.inv_cantidad_disponible;
            console.log(`Cantidad ajustada a ${cartItem.quantity} debido a la falta de inventario para la talla ${selectedTalla}.`);
          }
          // Verificar si hay stock disponible para esa talla
          if (inventarioItem.inv_cantidad_disponible > 0 && cartItem.quantity < inventarioItem.inv_cantidad_disponible) {
            // Incrementar la cantidad específica de la talla
            if (!cartItem.tallas) {
              cartItem.tallas = {};
            }
            // Llevar un registro separado de la cantidad por talla
            cartItem.tallas[selectedTalla] = (cartItem.tallas[selectedTalla] || 0) + 1;
            // Incrementar la cantidad total del producto
            cartItem.quantity += 1;
          } else {
            console.log("No hay más stock disponible para la talla seleccionada.");
          }
        }
      } else {
        // No hay talla, por lo tanto, considerar solo el primer inventario (un solo elemento)
        const inventarioItem = cartItem.inventario[0];
        // Ajustar quantity si es mayor que el inventario disponible
        if (cartItem.quantity > inventarioItem.inv_cantidad_disponible) {
          cartItem.quantity = inventarioItem.inv_cantidad_disponible;
          console.log(`Cantidad ajustada a ${cartItem.quantity} debido a la falta de inventario.`);
        }
        if (inventarioItem.inv_cantidad_disponible > 0 && cartItem.quantity < inventarioItem.inv_cantidad_disponible) {
          // Incrementar la cantidad en el carrito
          cartItem.quantity += 1;
        } else {
          console.log("No hay más stock disponible.");
        }
      }
      // Actualizar el carrito en el localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
      // Emitir los cambios en el carrito
      this.cartSubject.next(cart);
    }
  }
  // Disminuir cantidad de un producto en el carrito
  decrementCartQuantity(product, selectedTalla) {
    // Obtener el carrito del localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Encontrar el índice del producto en el carrito
    const itemIndex = cart.findIndex(item => item.prod_id === product.prod_id);
    if (itemIndex > -1) {
      const cartItem = cart[itemIndex];
      cartItem.selectedSize = selectedTalla; // Mantener la talla seleccionada
      // Verificar si el producto tiene inventario con talla
      if (cartItem.inventario && cartItem.inventario.length > 1 && selectedTalla) {
        // Si hay tallas y se seleccionó una talla específica
        const invIndex = cartItem.inventario.findIndex(inv => inv.inv_talla === selectedTalla);
        if (invIndex > -1) {
          const inventarioItem = cartItem.inventario[invIndex];
          // Verificar si hay una cantidad mayor a 0 para esa talla
          if (cartItem.tallas && cartItem.tallas[selectedTalla] > 0) {
            // Disminuir la cantidad específica de la talla
            cartItem.tallas[selectedTalla] -= 1;
            // Disminuir la cantidad total del producto
            cartItem.quantity -= 1;
          } else {
            console.log(`No puedes disminuir más la cantidad para la talla ${selectedTalla}.`);
          }
          // Si la cantidad total del producto llega a 0, puedes considerar eliminarlo del carrito si lo deseas
          if (cartItem.quantity === 0) {
            console.log(`El producto ${product.prod_nombre} fue eliminado del carrito.`);
            cart.splice(itemIndex, 1); // Elimina el producto del carrito
          }
        } else {
          console.log(`No se encontró inventario para la talla seleccionada ${selectedTalla}.`);
        }
      } else {
        // No hay talla seleccionada o el producto no tiene variantes de talla
        const inventarioItem = cartItem.inventario[0];
        if (cartItem.quantity > 0) {
          // Disminuir la cantidad en el carrito
          cartItem.quantity -= 1;
        } else {
          console.log("No puedes disminuir más la cantidad.");
        }
        // Si la cantidad total del producto llega a 0, puedes considerar eliminarlo del carrito si lo deseas
        if (cartItem.quantity === 0) {
          console.log(`El producto ${product.prod_nombre} fue eliminado del carrito.`);
          cart.splice(itemIndex, 1); // Elimina el producto del carrito
        }
      }
      // Actualizar el carrito en el localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
      // Emitir los cambios en el carrito
      this.cartSubject.next(cart);
    }
  }
  //Metodo para verificar la talla seleccionada y ver si la talla seleccionada tiene disponibilidad de lo contrario ajusta cantidad a l disponible
  verificarSizeTalla(product, selectedTalla) {
    // Obtener el carrito del localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Encontrar el índice del producto en el carrito
    const itemIndex = cart.findIndex(item => item.prod_id === product.prod_id);
    if (itemIndex > -1) {
      const cartItem = cart[itemIndex];
      cartItem.selectedSize = selectedTalla; // Mantener la talla seleccionada
      // Verificar si el producto tiene inventario con talla
      if (cartItem.inventario && cartItem.inventario.length > 1 && selectedTalla) {
        // Si hay tallas y se seleccionó una talla específica
        const invIndex = cartItem.inventario.findIndex(inv => inv.inv_talla === selectedTalla);
        if (invIndex > -1) {
          const inventarioItem = cartItem.inventario[invIndex];
          // Si la cantidad actual del producto es mayor que el inventario disponible para esa talla
          if (cartItem.quantity > inventarioItem.inv_cantidad_disponible) {
            cartItem.quantity = inventarioItem.inv_cantidad_disponible;
            console.log(`Cantidad ajustada a ${cartItem.quantity} debido a la falta de inventario para la talla ${selectedTalla}.`);
            // Igualar a la cantidad disponible
            cartItem.tallas[selectedTalla] = inventarioItem.inv_cantidad_disponible;
          }
        }
      }
      // Actualizar el carrito en el localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
      // Emitir los cambios en el carrito
      this.cartSubject.next(cart);
    }
  }
  // Obtener el monto total del carrito
  getCartTotalAmount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart.reduce((acc, item) => {
      const itemPrice = item.prod_precio;
      // Calcular el monto basado en la cantidad en el carrito (no en el stock disponible)
      return acc + item.quantity * itemPrice;
    }, 0);
  }
  // Obtener la cantidad total de elementos en el carrito
  getCartTotalItems() {
    let cart = this.getCartProducts();
    return cart.reduce((acc, item) => {
      // Si el producto tiene múltiples inventarios (por ejemplo, ropa con tallas)
      if (item.inventario && item.inventario.length > 1) {
        return acc + item.inventario.reduce((invAcc, invItem) => {
          return invAcc + invItem.inv_cantidad_disponible;
        }, 0);
      } else {
        // Producto sin variantes
        return acc + item.inventario[0].inv_cantidad_disponible;
      }
    }, 0);
  }
  // Método para verificar disponibilidad de inventario
  checkInventoryAvailability(product, quantity, selectedSize) {
    const inventory = product.inventario; // Obtén el inventario asociado al producto
    if (!inventory) {
      return false;
    }
    // Verificar la disponibilidad de cantidad para la talla seleccionada
    const availableInventory = inventory.find(inv => inv.inv_talla === selectedSize);
    if (availableInventory && availableInventory.inv_cantidad_disponible >= quantity) {
      return true;
    }
    return false;
  }
  static #_ = this.ɵfac = function ProductoService_Factory(t) {
    return new (t || ProductoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ProductoService,
    factory: ProductoService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3887:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-owl-carousel-o */ 6821);
/* harmony import */ var ngx_bar_rating__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-bar-rating */ 9139);
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-lazyload-image */ 385);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-skeleton-loader */ 2347);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ngx-translate/core */ 597);
/* harmony import */ var _header_lumar_header_lumar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-lumar/header-lumar.component */ 1748);
/* harmony import */ var _footer_lumar_footer_lumar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer-lumar/footer-lumar.component */ 5532);
/* harmony import */ var _components_left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/left-menu/left-menu.component */ 9941);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menu/menu.component */ 8397);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/settings/settings.component */ 5313);
/* harmony import */ var _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/categories/categories.component */ 7487);
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.component */ 8173);
/* harmony import */ var _components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/product/product-box-one/product-box-one.component */ 6646);
/* harmony import */ var _components_product_product_box_two_product_box_two_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/product/product-box-two/product-box-two.component */ 1585);
/* harmony import */ var _components_product_product_box_three_product_box_three_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/product/product-box-three/product-box-three.component */ 6789);
/* harmony import */ var _components_product_product_box_four_product_box_four_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/product/product-box-four/product-box-four.component */ 7119);
/* harmony import */ var _components_product_product_box_five_product_box_five_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/product/product-box-five/product-box-five.component */ 471);
/* harmony import */ var _components_product_product_box_vertical_product_box_vertical_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/product/product-box-vertical/product-box-vertical.component */ 6464);
/* harmony import */ var _components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/product/product-box-vertical-slider/product-box-vertical-slider.component */ 3093);
/* harmony import */ var _components_modal_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/modal/newsletter/newsletter.component */ 5879);
/* harmony import */ var _components_modal_quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/modal/quick-view/quick-view.component */ 7759);
/* harmony import */ var _components_modal_cart_modal_cart_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/modal/cart-modal/cart-modal.component */ 8637);
/* harmony import */ var _components_modal_cart_variation_cart_variation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/modal/cart-variation/cart-variation.component */ 105);
/* harmony import */ var _components_modal_video_modal_video_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/modal/video-modal/video-modal.component */ 1732);
/* harmony import */ var _components_modal_size_modal_size_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/modal/size-modal/size-modal.component */ 39);
/* harmony import */ var _components_modal_age_verification_age_verification_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/modal/age-verification/age-verification.component */ 3583);
/* harmony import */ var _components_skeleton_skeleton_product_box_skeleton_product_box_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/skeleton/skeleton-product-box/skeleton-product-box.component */ 1301);
/* harmony import */ var _components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/tap-to-top/tap-to-top.component */ 7349);
/* harmony import */ var _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pipes/discount.pipe */ 8943);
/* harmony import */ var _components_redes_sociales_floating_redes_sociales_floating_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/redes-sociales-floating/redes-sociales-floating.component */ 1285);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 7580);









// Header and Footer Components


// Components












// Modals Components







// Skeleton Loader Components

// Tap To Top

// Pipes

//Boton Redes Sociales Flotante


class SharedModule {
  static #_ = this.ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_27__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__.NgbModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_30__.CarouselModule, ngx_bar_rating__WEBPACK_IMPORTED_MODULE_31__.BarRatingModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_32__.LazyLoadImageModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_33__.NgxSkeletonLoaderModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__.TranslateModule, _angular_common__WEBPACK_IMPORTED_MODULE_26__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__.NgbModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_30__.CarouselModule, ngx_bar_rating__WEBPACK_IMPORTED_MODULE_31__.BarRatingModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_32__.LazyLoadImageModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_33__.NgxSkeletonLoaderModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__.TranslateModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_footer_lumar_footer_lumar_component__WEBPACK_IMPORTED_MODULE_1__.FooterLumarComponent, _header_lumar_header_lumar_component__WEBPACK_IMPORTED_MODULE_0__.HeaderLumarComponent, _components_left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_2__.LeftMenuComponent, _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__.MenuComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_4__.SettingsComponent, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbComponent, _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_5__.CategoriesComponent, _components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_7__.ProductBoxOneComponent, _components_product_product_box_two_product_box_two_component__WEBPACK_IMPORTED_MODULE_8__.ProductBoxTwoComponent, _components_product_product_box_three_product_box_three_component__WEBPACK_IMPORTED_MODULE_9__.ProductBoxThreeComponent, _components_product_product_box_four_product_box_four_component__WEBPACK_IMPORTED_MODULE_10__.ProductBoxFourComponent, _components_product_product_box_five_product_box_five_component__WEBPACK_IMPORTED_MODULE_11__.ProductBoxFiveComponent, _components_product_product_box_vertical_product_box_vertical_component__WEBPACK_IMPORTED_MODULE_12__.ProductBoxVerticalComponent, _components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_13__.ProductBoxVerticalSliderComponent, _components_modal_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_14__.NewsletterComponent, _components_modal_quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_15__.QuickViewComponent, _components_modal_cart_modal_cart_modal_component__WEBPACK_IMPORTED_MODULE_16__.CartModalComponent, _components_modal_cart_variation_cart_variation_component__WEBPACK_IMPORTED_MODULE_17__.CartVariationComponent, _components_modal_video_modal_video_modal_component__WEBPACK_IMPORTED_MODULE_18__.VideoModalComponent, _components_modal_size_modal_size_modal_component__WEBPACK_IMPORTED_MODULE_19__.SizeModalComponent, _components_modal_age_verification_age_verification_component__WEBPACK_IMPORTED_MODULE_20__.AgeVerificationComponent, _components_skeleton_skeleton_product_box_skeleton_product_box_component__WEBPACK_IMPORTED_MODULE_21__.SkeletonProductBoxComponent, _components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_22__.TapToTopComponent, _components_redes_sociales_floating_redes_sociales_floating_component__WEBPACK_IMPORTED_MODULE_24__.RedesSocialesFloatingComponent, _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_23__.DiscountPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_27__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__.NgbModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_30__.CarouselModule, ngx_bar_rating__WEBPACK_IMPORTED_MODULE_31__.BarRatingModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_32__.LazyLoadImageModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_33__.NgxSkeletonLoaderModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__.TranslateModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__.NgbModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_30__.CarouselModule, ngx_bar_rating__WEBPACK_IMPORTED_MODULE_31__.BarRatingModule, ng_lazyload_image__WEBPACK_IMPORTED_MODULE_32__.LazyLoadImageModule, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_33__.NgxSkeletonLoaderModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__.TranslateModule, _footer_lumar_footer_lumar_component__WEBPACK_IMPORTED_MODULE_1__.FooterLumarComponent, _header_lumar_header_lumar_component__WEBPACK_IMPORTED_MODULE_0__.HeaderLumarComponent, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbComponent, _components_categories_categories_component__WEBPACK_IMPORTED_MODULE_5__.CategoriesComponent, _components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_7__.ProductBoxOneComponent, _components_product_product_box_two_product_box_two_component__WEBPACK_IMPORTED_MODULE_8__.ProductBoxTwoComponent, _components_product_product_box_three_product_box_three_component__WEBPACK_IMPORTED_MODULE_9__.ProductBoxThreeComponent, _components_product_product_box_four_product_box_four_component__WEBPACK_IMPORTED_MODULE_10__.ProductBoxFourComponent, _components_product_product_box_five_product_box_five_component__WEBPACK_IMPORTED_MODULE_11__.ProductBoxFiveComponent, _components_product_product_box_vertical_product_box_vertical_component__WEBPACK_IMPORTED_MODULE_12__.ProductBoxVerticalComponent, _components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_13__.ProductBoxVerticalSliderComponent, _components_modal_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_14__.NewsletterComponent, _components_modal_quick_view_quick_view_component__WEBPACK_IMPORTED_MODULE_15__.QuickViewComponent, _components_modal_cart_modal_cart_modal_component__WEBPACK_IMPORTED_MODULE_16__.CartModalComponent, _components_modal_cart_variation_cart_variation_component__WEBPACK_IMPORTED_MODULE_17__.CartVariationComponent, _components_modal_video_modal_video_modal_component__WEBPACK_IMPORTED_MODULE_18__.VideoModalComponent, _components_modal_size_modal_size_modal_component__WEBPACK_IMPORTED_MODULE_19__.SizeModalComponent, _components_modal_age_verification_age_verification_component__WEBPACK_IMPORTED_MODULE_20__.AgeVerificationComponent, _components_skeleton_skeleton_product_box_skeleton_product_box_component__WEBPACK_IMPORTED_MODULE_21__.SkeletonProductBoxComponent, _components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_22__.TapToTopComponent, _components_redes_sociales_floating_redes_sociales_floating_component__WEBPACK_IMPORTED_MODULE_24__.RedesSocialesFloatingComponent, _pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_23__.DiscountPipe]
  });
})();

/***/ }),

/***/ 5558:
/*!****************************************!*\
  !*** ./src/app/shop/shop.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShopComponent: () => (/* binding */ ShopComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_footer_lumar_footer_lumar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/footer-lumar/footer-lumar.component */ 5532);
/* harmony import */ var _shared_header_lumar_header_lumar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/header-lumar/header-lumar.component */ 1748);




class ShopComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function ShopComponent_Factory(t) {
    return new (t || ShopComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ShopComponent,
    selectors: [["app-shop"]],
    decls: 3,
    vars: 1,
    consts: [[3, "sticky"]],
    template: function ShopComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header-lumar", 0)(1, "router-outlet")(2, "app-footer-lumar");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("sticky", false);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _shared_footer_lumar_footer_lumar_component__WEBPACK_IMPORTED_MODULE_0__.FooterLumarComponent, _shared_header_lumar_header_lumar_component__WEBPACK_IMPORTED_MODULE_1__.HeaderLumarComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  stripe_token: 'STRIPE_TOKEN',
  paypal_token: 'PAYPAL_TOKEN',
  epayco_public_key: 'c5402cbaaf22aaea9bd8039476535221',
  urlFront: 'https://artesaniaslumar.com/',
  apiBaseUrl: 'https://artesaniaslumar.com/api',
  //RUTA SECCION
  seccionUrl: 'https://artesaniaslumar.com/api/seccion/',
  //RUTA CATEGORIA
  categoriaUrl: 'https://artesaniaslumar.com/api/categoria/',
  //RUTA SUBCATEGORIA
  subcategoriaUrl: 'https://artesaniaslumar.com/api/subcategoria/',
  //RUTA PRODUCTO
  productoURL: 'https://artesaniaslumar.com/api/producto/',
  //RUTA USUARIO
  usuarioURL: 'https://artesaniaslumar.com/api/usuario/',
  //RUTA IMAGEN USUARIO
  usuarioIMG_URL: 'https://artesaniaslumar.com/api/uploads/usuarios/',
  //RUTA ROLES
  rol_URL: 'https://artesaniaslumar.com/api/rol/',
  //RUTA CUPON
  cupon_URL: 'https://artesaniaslumar.com/api/cupon/',
  //RUTA TIPO DE DESCUENTO
  tipo_descuento_URL: 'https://artesaniaslumar.com/api/tipo-descuento/',
  //RUTA COMENTARIOS
  comentario_URL: 'https://artesaniaslumar.com/api/comentarios/',
  //RUTA UBICACIÓN
  ubicacion_URL: 'https://artesaniaslumar.com/api/ubicacion/',
  //RUTA CONTACTO
  contacto_URL: 'https://artesaniaslumar.com/api/contacto/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ 5684);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 5312);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
document.addEventListener('DOMContentLoaded', () => {
  _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).catch(err => console.error(err));
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map