"use strict";
(self["webpackChunklumar"] = self["webpackChunklumar"] || []).push([["src_app_shop_shop_module_ts"],{

/***/ 1837:
/*!********************************************************************!*\
  !*** ./src/app/shared/services/comentarios/comentarios.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComentariosService: () => (/* binding */ ComentariosService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class ComentariosService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.comentario_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.comentario_URL;
  }
  //Solicitud Crear Comentario Sin Producto
  createComentario(formData) {
    return this.httpClient.post(this.comentario_URL + 'comentarios-simple', formData);
  }
  //Solicitud Crear Comentario Con Producto
  createComentarioProducto(formData) {
    return this.httpClient.post(this.comentario_URL, formData);
  }
  //Solicitud Listar Comentarios del Producto
  getComentarioProductos(productoId) {
    return this.httpClient.get(`${this.comentario_URL}` + 'producto/' + productoId);
  }
  static {
    this.ɵfac = function ComentariosService_Factory(t) {
      return new (t || ComentariosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ComentariosService,
      factory: ComentariosService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 277:
/*!********************************************************!*\
  !*** ./src/app/shared/services/orden/orden.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrdenService: () => (/* binding */ OrdenService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);




class OrdenService {
  constructor(http, router) {
    // Configurar ePayco al inicializar el servicio
    this.http = http;
    this.router = router;
    this.apiUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl}/pedido`; // Ajusta esta URL según tu configuración
    this.orderData = {};
  }
  // Método para abrir el checkout de ePayco
  openEpaycoCheckout(data) {
    this.epayco.open(data);
  }
  makePayment() {}
  // Métodos para guardar y obtener datos
  setOrderData(data) {
    this.orderData = {
      ...this.orderData,
      ...data
    };
  }
  getOrderData() {
    return this.orderData;
  }
  clearOrderData() {
    localStorage.removeItem('orderData'); // Elimina la orden del localStorage
  }
  crearPedido(pedidoData) {
    return this.http.post(`${this.apiUrl}/crear`, pedidoData);
  }
  static {
    this.ɵfac = function OrdenService_Factory(t) {
      return new (t || OrdenService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: OrdenService,
      factory: OrdenService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 397:
/*!****************************************************************!*\
  !*** ./src/app/shared/services/ubicacion/ubicacion.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UbicacionService: () => (/* binding */ UbicacionService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class UbicacionService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.ubicacionUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ubicacion_URL;
  }
  //Solicitar la lista de paises
  getAllCountries() {
    return this.httpClient.get(this.ubicacionUrl + 'countries');
  }
  //Solicitar la lista de paises
  getAllStateByCountrie(country_name) {
    return this.httpClient.get(this.ubicacionUrl + 'countrie/states/' + country_name);
  }
  //Solicitar la lista de ciudades
  getAllCityByState(city_name) {
    return this.httpClient.get(this.ubicacionUrl + 'countrie/state/cities/' + city_name);
  }
  static {
    this.ɵfac = function UbicacionService_Factory(t) {
      return new (t || UbicacionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: UbicacionService,
      factory: UbicacionService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 407:
/*!*********************************************!*\
  !*** ./src/app/shop/cart/cart.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartComponent: () => (/* binding */ CartComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/productos/producto.service */ 3916);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 8173);








const _c0 = () => ["/shop/collection/left/sidebar"];
function CartComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h3")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Tu carrito est\u00E1 vac\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Agrega algo que te haga feliz :)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function CartComponent_div_4_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Talla");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CartComponent_div_4_tbody_18_td_27_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartComponent_div_4_tbody_18_td_27_li_5_Template_a_click_1_listener() {
      const talla_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4).$implicit;
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.selectSize(talla_r5, product_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const talla_r5 = ctx.$implicit;
    const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", product_r2.selectedSize === talla_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, talla_r5));
  }
}
function CartComponent_div_4_tbody_18_td_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td")(1, "div", 29)(2, "div", 30)(3, "div", 31)(4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CartComponent_div_4_tbody_18_td_27_li_5_Template, 4, 5, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.Size(product_r2.inventario));
  }
}
function CartComponent_div_4_tbody_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody")(1, "tr")(2, "td")(3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartComponent_div_4_tbody_18_Template_a_click_3_listener() {
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.sendProducto(product_r2.prod_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td")(6, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartComponent_div_4_tbody_18_Template_a_click_6_listener() {
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.sendProducto(product_r2.prod_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td")(10, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "td")(17, "div", 18)(18, "div", 19)(19, "div", 20)(20, "span", 21)(21, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartComponent_div_4_tbody_18_Template_button_click_21_listener() {
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.decrement(product_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span", 21)(25, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartComponent_div_4_tbody_18_Template_button_click_25_listener() {
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.increment(product_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, CartComponent_div_4_tbody_18_td_27_Template, 6, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "td")(29, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartComponent_div_4_tbody_18_Template_a_click_29_listener() {
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.removeItem(product_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "td")(32, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](34, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", product_r2.imagenes && product_r2.imagenes.length > 0 ? ctx_r2.urlApi + product_r2.imagenes[0].imagen_url : "path/to/default/image.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 7, product_r2.prod_nombre));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 9, product_r2.prod_precio), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 11, product_r2.prod_precio_oferta));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", product_r2.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.hasAvailableSize());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](34, 13, product_r2.prod_precio * product_r2.quantity));
  }
}
function CartComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "table", 11)(3, "thead")(4, "tr", 12)(5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Imagen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Nombre del Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Precio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, CartComponent_div_4_th_13_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Acci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, CartComponent_div_4_tbody_18_Template, 35, 15, "tbody", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "table", 14)(20, "tfoot")(21, "tr")(22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Precio Total :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "td")(25, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.hasAvailableSize());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](28, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 3, ctx_r2.getTotal)));
  }
}
function CartComponent_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 36)(1, "div", 37)(2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartComponent_div_5_div_1_Template_a_click_2_listener() {
      const product_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.sendProducto(product_r7.prod_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 39)(5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 19)(15, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartComponent_div_5_div_1_Template_button_click_15_listener() {
      const product_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.decrement(product_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartComponent_div_5_div_1_Template_button_click_18_listener() {
      const product_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.increment(product_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 40)(21, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartComponent_div_5_div_1_Template_button_click_21_listener() {
      const product_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.removeItem(product_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", product_r7.imagenes && product_r7.imagenes.length > 0 ? ctx_r2.urlApi + product_r7.imagenes[0].imagen_url : "path/to/default/image.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 6, product_r7.prod_nombre));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 8, product_r7.prod_precio), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 10, product_r7.prod_precio_oferta));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", product_r7.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](25, 12, product_r7.prod_precio * product_r7.quantity), " ");
  }
}
function CartComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CartComponent_div_5_div_1_Template, 26, 14, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 35)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 2, ctx_r2.getTotal)), "");
  }
}
function CartComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 43)(1, "div", 44)(2, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Seguir Comprando");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 44)(5, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartComponent_div_6_Template_a_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.buyCart());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Comprar Carrito");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
  }
}
class CartComponent {
  constructor(router, productoServices, toastrService) {
    this.router = router;
    this.productoServices = productoServices;
    this.toastrService = toastrService;
    this.products = [];
    this.urlApi = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;
    // Cargar los productos desde el localStorage
    this.products = this.productoServices.getCartProducts();
    this.screenWidth = window.innerWidth;
  }
  onResize(event) {
    this.screenWidth = event.target.innerWidth;
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
  get getTotal() {
    this.totalItems$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(this.productoServices.getCartTotalAmount());
    return this.totalItems$;
  }
  // Método para obtener las tallas disponibles del producto
  // Método para obtener las tallas disponibles del producto con stock mayor a cero
  Size(inventario) {
    return inventario.filter(item => item.inv_talla && item.inv_cantidad_disponible > 0) // Filtra por inventario disponible y talla válida
    .map(item => item.inv_talla); // Obtiene las tallas disponibles
  }
  // Método para verificar si existe al menos una talla en el inventario
  hasAvailableSize() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Verificar si al menos un producto en el carrito tiene una talla disponible
    return cart.some(product => product.inventario && product.inventario.some(inv => inv.inv_talla && inv.inv_talla.trim() !== ''));
  }
  // Método para seleccionar una talla
  selectSize(talla, product) {
    // Asignar la talla seleccionada al producto específico
    product.selectedSize = talla;
    this.productoServices.verificarSizeTalla(product, product.selectedSize);
    console.log(`Talla seleccionada: ${talla}`);
  }
  // Incrementar cantidad
  increment(product) {
    // Verifica si hay una talla seleccionada
    if (product.selectedSize) {
      // Busca la cantidad disponible en el inventario para la talla seleccionada
      const selectedInventory = product.inventario.find(inv => inv.inv_talla === product.selectedSize);
      if (selectedInventory) {
        // Verifica si la cantidad del producto en el carrito es menor que la cantidad disponible en el inventario
        if (product.quantity < selectedInventory.inv_cantidad_disponible) {
          // Incrementa la cantidad para esa talla
          this.productoServices.incrementCartQuantity(product, product.selectedSize);
        } else {
          // Muestra un mensaje indicando que no hay más inventario disponible para esa talla
          this.toastrService.warning(`No hay más stock disponible para la talla ${product.selectedSize}.`, 'Error', {
            timeOut: 3000,
            positionClass: 'toast-top-center'
          });
          console.log(``);
        }
      } else {
        // Si no se encuentra el inventario para la talla seleccionada
        console.log(`No se encontró inventario para la talla seleccionada ${this.selectedSize}.`);
      }
    } else {
      // Si no hay talla seleccionada, tratar el producto como si no tuviera variantes de talla
      const maxQuantity = product.inventario[0].inv_cantidad_disponible;
      if (product.quantity < maxQuantity) {
        // Incrementa la cantidad sin considerar la talla
        this.productoServices.incrementCartQuantity(product);
      } else {
        // Muestra un mensaje indicando que no hay más inventario disponible
        this.toastrService.warning(`No hay más inventario disponible para este producto.`, 'Error', {
          timeOut: 3000,
          positionClass: 'toast-top-center'
        });
      }
    }
  }
  decrement(product) {
    if (product.quantity > 1) {
      this.productoServices.decrementCartQuantity(product, product.selectedSize);
    } else {
      this.toastrService.warning('La cantidad mínima es 1.', 'Aviso', {
        timeOut: 3000,
        positionClass: 'toast-top-center'
      });
    }
  }
  removeItem(product) {
    this.productoServices.removeFromCart(product);
    //Volver a Cargar los productos desde el localStorage
    this.products = this.productoServices.getCartProducts();
  }
  buyCart() {
    // Verificar si todos los productos que requieren talla tienen una talla seleccionada
    const missingSizeProducts = this.products.filter(product => {
      const hasSize = this.Size(product.inventario).length > 0; // Verificar si el producto tiene tallas disponibles
      return hasSize && !product.selectedSize; // Filtrar productos con talla disponible pero sin talla seleccionada
    });
    if (missingSizeProducts.length > 0) {
      // Mostrar mensaje de advertencia si hay productos sin talla seleccionada
      this.toastrService.warning('Por favor, selecciona una talla para todos los productos que requieren talla.', 'Aviso', {
        timeOut: 3000,
        positionClass: 'toast-top-center'
      });
      return;
    }
    // Si todos los productos tienen talla seleccionada (cuando es necesario), proceder con la compra
    this.router.navigate(['/shop/checkout']);
  }
  //Enviar id del producto a detallar
  sendProducto(prod_id) {
    localStorage.setItem('prod_id', prod_id.toString());
    this.router.navigate(['/shop/product/three/column/trim-dress']);
  }
  static {
    this.ɵfac = function CartComponent_Factory(t) {
      return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_1__.ProductoService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: CartComponent,
      selectors: [["app-cart"]],
      hostBindings: function CartComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function CartComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
        }
      },
      decls: 7,
      vars: 6,
      consts: [[3, "title", "breadcrumb"], [1, "cart-section", "section-b-space"], [1, "container"], ["class", "col-sm-12 empty-cart-cls text-center", 4, "ngIf"], ["class", "row", 4, "ngIf"], [4, "ngIf"], ["class", "row cart-buttons", 4, "ngIf"], [1, "col-sm-12", "empty-cart-cls", "text-center"], ["src", "assets/images/icon-empty-cart.png", 1, "img-fluid", "mb-4"], [1, "row"], [1, "col-sm-12"], [1, "table-responsive-xs"], [2, "text-align", "center"], [4, "ngFor", "ngForOf"], [1, "table", "cart-table", "table-responsive-md"], [3, "click"], ["alt", "Producto", 1, "img-fluid", 3, "src"], [1, "td-color"], [1, "col"], [1, "qty-box"], [1, "input-group"], [1, "input-group-prepend"], ["type", "button", 1, "btn", "quantity-left-minus", 3, "click"], [1, "ti-angle-left"], ["type", "text", "name", "quantity", "disabled", "", 1, "form-control", "input-number", 3, "value"], ["type", "button", 1, "btn", "quantity-right-plus", 3, "click"], [1, "ti-angle-right"], ["href", "javascript:void(0)", 1, "icon", 3, "click"], [1, "ti-close"], [1, "product-right"], [1, "border-product"], [1, "size-box"], [3, "active", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 3, "click"], ["class", "product-card", 4, "ngFor", "ngForOf"], [1, "total-price"], [1, "product-card"], [1, "product-image"], ["alt", "Producto", 3, "src"], [1, "product-info"], [1, "action-buttons"], ["type", "button", 1, "btn", 3, "click"], [1, "product-total"], [1, "row", "cart-buttons"], [1, "col-6"], [1, "btn", "btn-solid", 3, "routerLink"], [1, "btn", "btn-solid", 3, "click"]],
      template: function CartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-breadcrumb", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "section", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CartComponent_div_3_Template, 7, 0, "div", 3)(4, CartComponent_div_4_Template, 29, 7, "div", 4)(5, CartComponent_div_5_Template, 7, 6, "div", 5)(6, CartComponent_div_6_Template, 7, 2, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Carrito")("breadcrumb", "Carrito");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.products.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.products.length && ctx.screenWidth > 767);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.products.length && ctx.screenWidth <= 767);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.products.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe],
      styles: ["@charset \"UTF-8\";\n.product-right[_ngcontent-%COMP%]   .border-product[_ngcontent-%COMP%] {\n  padding-top: 0px !important;\n  padding-bottom: 20px !important;\n  border-top: none;\n}\n\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n@media (max-width: 767px) {\n  .cart-section[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  \n\n  .table-responsive-xs[_ngcontent-%COMP%] {\n    display: none;\n  }\n  \n\n  .product-card[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    background-color: #f9f9f9;\n    padding: 15px;\n    margin-bottom: 10px;\n    border: 1px solid #e0e0e0;\n    border-radius: 5px;\n    \n\n    \n\n    \n\n    \n\n  }\n  .product-card[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: auto;\n    margin-bottom: 10px;\n    text-align: center;\n  }\n  .product-card[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .product-card[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-bottom: 10px;\n  }\n  .product-card[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .product-card[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: 5px 0;\n  }\n  .product-card[_ngcontent-%COMP%]   .qty-box[_ngcontent-%COMP%], .product-card[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 5px 0;\n  }\n  .product-card[_ngcontent-%COMP%]   .qty-box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .product-card[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 5px 10px;\n    font-size: 12px;\n  }\n  .product-card[_ngcontent-%COMP%]   .product-total[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: bold;\n    text-align: right;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFBST1lFQ1RPJTIwQVJURVNBTklBUyUyMExVTUFSXFxjbGllbnRlLWZyb250ZW5kLWx1bWFyXFxzcmNcXGFwcFxcc2hvcFxcY2FydFxcY2FydC5jb21wb25lbnQuc2NzcyIsImNhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksMkJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FERUo7O0FDQ0E7RUFDSSxlQUFBO0FERUo7O0FDQ0E7RUFDSTtJQUNJLGFBQUE7RURFTjtFQ0NFLCtDQUFBO0VBQ0E7SUFDSSxhQUFBO0VEQ047RUNFRSxzQ0FBQTtFQUNBO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EseUJBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtJQUNBLGtCQUFBO0lBRUEsd0JBQUE7SUFZQSw2QkFBQTtJQVVBLGlDQUFBO0lBYUEsaUJBQUE7RURqQ047RUNETTtJQUNJLGVBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFREdWO0VDRFU7SUFDSSxVQUFBO0VER2Q7RUNFTTtJQUNJLGVBQUE7SUFDQSxtQkFBQTtFREFWO0VDRVU7SUFDSSxhQUFBO0VEQWQ7RUNLTTtJQUNJLGFBQUE7SUFDQSw4QkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtFREhWO0VDS1U7SUFDSSxpQkFBQTtJQUNBLGVBQUE7RURIZDtFQ1FNO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUROVjtBQUNGIiwiZmlsZSI6ImNhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ucHJvZHVjdC1yaWdodCAuYm9yZGVyLXByb2R1Y3Qge1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbmEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY2FydC1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIC8qIE9jdWx0YSBsYSB0YWJsYSB5IHVzYSBlbCBlc3RpbG8gZGUgdGFyamV0YSAqL1xuICAudGFibGUtcmVzcG9uc2l2ZS14cyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAvKiBFc3RpbG9zIHBhcmEgZWwgZGlzZcOxbyBkZSB0YXJqZXRhICovXG4gIC5wcm9kdWN0LWNhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAvKiBJbWFnZW4gZGVsIHByb2R1Y3RvICovXG4gICAgLyogSW5mb3JtYWNpw7NuIGRlbCBwcm9kdWN0byAqL1xuICAgIC8qIEJvdG9uZXMgZGUgY2FudGlkYWQgeSBhY2Npw7NuICovXG4gICAgLyogUHJlY2lvIHRvdGFsICovXG4gIH1cbiAgLnByb2R1Y3QtY2FyZCAucHJvZHVjdC1pbWFnZSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAucHJvZHVjdC1jYXJkIC5wcm9kdWN0LWltYWdlIGltZyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuICAucHJvZHVjdC1jYXJkIC5wcm9kdWN0LWluZm8ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5wcm9kdWN0LWNhcmQgLnByb2R1Y3QtaW5mbyBoNCwgLnByb2R1Y3QtY2FyZCAucHJvZHVjdC1pbmZvIGgyIHtcbiAgICBtYXJnaW46IDVweCAwO1xuICB9XG4gIC5wcm9kdWN0LWNhcmQgLnF0eS1ib3gsIC5wcm9kdWN0LWNhcmQgLmFjdGlvbi1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogNXB4IDA7XG4gIH1cbiAgLnByb2R1Y3QtY2FyZCAucXR5LWJveCAuYnRuLCAucHJvZHVjdC1jYXJkIC5hY3Rpb24tYnV0dG9ucyAuYnRuIHtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLnByb2R1Y3QtY2FyZCAucHJvZHVjdC10b3RhbCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59IiwiLnByb2R1Y3QtcmlnaHQgLmJvcmRlci1wcm9kdWN0IHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuY2FydC1zZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qIE9jdWx0YSBsYSB0YWJsYSB5IHVzYSBlbCBlc3RpbG8gZGUgdGFyamV0YSAqL1xyXG4gICAgLnRhYmxlLXJlc3BvbnNpdmUteHMge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLyogRXN0aWxvcyBwYXJhIGVsIGRpc2XDsW8gZGUgdGFyamV0YSAqL1xyXG4gICAgLnByb2R1Y3QtY2FyZCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgICAgICAvKiBJbWFnZW4gZGVsIHByb2R1Y3RvICovXHJcbiAgICAgICAgLnByb2R1Y3QtaW1hZ2Uge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIEluZm9ybWFjacOzbiBkZWwgcHJvZHVjdG8gKi9cclxuICAgICAgICAucHJvZHVjdC1pbmZvIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgaDQsIGgyIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIEJvdG9uZXMgZGUgY2FudGlkYWQgeSBhY2Npw7NuICovXHJcbiAgICAgICAgLnF0eS1ib3gsIC5hY3Rpb24tYnV0dG9ucyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuXHJcbiAgICAgICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIFByZWNpbyB0b3RhbCAqL1xyXG4gICAgICAgIC5wcm9kdWN0LXRvdGFsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL1BST1lFQ1RPJTIwQVJURVNBTklBUyUyMExVTUFSL2NsaWVudGUtZnJvbnRlbmQtbHVtYXIvc3JjL2FwcC9zaG9wL2NhcnQvY2FydC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksMkJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FERUo7O0FDQ0E7RUFDSSxlQUFBO0FERUo7O0FDQ0E7RUFDSTtJQUNJLGFBQUE7RURFTjtFQ0NFLCtDQUFBO0VBQ0E7SUFDSSxhQUFBO0VEQ047RUNFRSxzQ0FBQTtFQUNBO0lBQ0ksYUFBQTtJQUNBLHNCQUFBO0lBQ0EseUJBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtJQUNBLGtCQUFBO0lBRUEsd0JBQUE7SUFZQSw2QkFBQTtJQVVBLGlDQUFBO0lBYUEsaUJBQUE7RURqQ047RUNETTtJQUNJLGVBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFREdWO0VDRFU7SUFDSSxVQUFBO0VER2Q7RUNFTTtJQUNJLGVBQUE7SUFDQSxtQkFBQTtFREFWO0VDRVU7SUFDSSxhQUFBO0VEQWQ7RUNLTTtJQUNJLGFBQUE7SUFDQSw4QkFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtFREhWO0VDS1U7SUFDSSxpQkFBQTtJQUNBLGVBQUE7RURIZDtFQ1FNO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUROVjtBQUNGO0FDQ0EsdzFLQUF3MUsiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ucHJvZHVjdC1yaWdodCAuYm9yZGVyLXByb2R1Y3Qge1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbmEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY2FydC1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIC8qIE9jdWx0YSBsYSB0YWJsYSB5IHVzYSBlbCBlc3RpbG8gZGUgdGFyamV0YSAqL1xuICAudGFibGUtcmVzcG9uc2l2ZS14cyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAvKiBFc3RpbG9zIHBhcmEgZWwgZGlzZcODwrFvIGRlIHRhcmpldGEgKi9cbiAgLnByb2R1Y3QtY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC8qIEltYWdlbiBkZWwgcHJvZHVjdG8gKi9cbiAgICAvKiBJbmZvcm1hY2nDg8KzbiBkZWwgcHJvZHVjdG8gKi9cbiAgICAvKiBCb3RvbmVzIGRlIGNhbnRpZGFkIHkgYWNjacODwrNuICovXG4gICAgLyogUHJlY2lvIHRvdGFsICovXG4gIH1cbiAgLnByb2R1Y3QtY2FyZCAucHJvZHVjdC1pbWFnZSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAucHJvZHVjdC1jYXJkIC5wcm9kdWN0LWltYWdlIGltZyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuICAucHJvZHVjdC1jYXJkIC5wcm9kdWN0LWluZm8ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5wcm9kdWN0LWNhcmQgLnByb2R1Y3QtaW5mbyBoNCwgLnByb2R1Y3QtY2FyZCAucHJvZHVjdC1pbmZvIGgyIHtcbiAgICBtYXJnaW46IDVweCAwO1xuICB9XG4gIC5wcm9kdWN0LWNhcmQgLnF0eS1ib3gsIC5wcm9kdWN0LWNhcmQgLmFjdGlvbi1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogNXB4IDA7XG4gIH1cbiAgLnByb2R1Y3QtY2FyZCAucXR5LWJveCAuYnRuLCAucHJvZHVjdC1jYXJkIC5hY3Rpb24tYnV0dG9ucyAuYnRuIHtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLnByb2R1Y3QtY2FyZCAucHJvZHVjdC10b3RhbCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59IiwiLnByb2R1Y3QtcmlnaHQgLmJvcmRlci1wcm9kdWN0IHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuY2FydC1zZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qIE9jdWx0YSBsYSB0YWJsYSB5IHVzYSBlbCBlc3RpbG8gZGUgdGFyamV0YSAqL1xyXG4gICAgLnRhYmxlLXJlc3BvbnNpdmUteHMge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLyogRXN0aWxvcyBwYXJhIGVsIGRpc2XDg8KxbyBkZSB0YXJqZXRhICovXHJcbiAgICAucHJvZHVjdC1jYXJkIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICAgIC8qIEltYWdlbiBkZWwgcHJvZHVjdG8gKi9cclxuICAgICAgICAucHJvZHVjdC1pbWFnZSB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogSW5mb3JtYWNpw4PCs24gZGVsIHByb2R1Y3RvICovXHJcbiAgICAgICAgLnByb2R1Y3QtaW5mbyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAgICAgICAgIGg0LCBoMiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiBCb3RvbmVzIGRlIGNhbnRpZGFkIHkgYWNjacODwrNuICovXHJcbiAgICAgICAgLnF0eS1ib3gsIC5hY3Rpb24tYnV0dG9ucyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuXHJcbiAgICAgICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIFByZWNpbyB0b3RhbCAqL1xyXG4gICAgICAgIC5wcm9kdWN0LXRvdGFsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8064:
/*!****************************************************************************************************!*\
  !*** ./src/app/shop/categoria/accesorio-ropa-left-slider/accesorio-ropa-left-sidebar.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccesorioRopaLeftSidebarComponent: () => (/* binding */ AccesorioRopaLeftSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/productos/producto.service */ 3916);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 8173);
/* harmony import */ var _shared_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/categories/categories.component */ 7487);
/* harmony import */ var _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/product/product-box-one/product-box-one.component */ 6646);
/* harmony import */ var _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/product/product-box-vertical-slider/product-box-vertical-slider.component */ 3093);
/* harmony import */ var _seccion_widgets_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../seccion/widgets/grid/grid.component */ 1386);
/* harmony import */ var _seccion_widgets_price_price_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../seccion/widgets/price/price.component */ 7832);











const _c0 = () => ["/home/lumar"];
function AccesorioRopaLeftSidebarComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-product-box-one", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r1.grid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product", product_r1)("cartModal", true)("loader", true)("onHowerChangeImage", true);
  }
}
function AccesorioRopaLeftSidebarComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\u00A1Lo siento! \u00A1\u00A1\u00A1No pudiste encontrar el producto que buscabas!!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Por favor verifique si ha escrito algo mal o intente buscar con otras palabras.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Seguir Comprando");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
  }
}
class AccesorioRopaLeftSidebarComponent {
  constructor(route, router, productoService) {
    this.route = route;
    this.router = router;
    this.productoService = productoService;
    this.grid = 'col-xl-3 col-md-6';
    this.layoutView = 'grid-view';
    this.all_products = [];
    this.products = [];
    this.brands = [];
    this.colors = [];
    this.size = [];
    this.minPrice = 0;
    this.maxPrice = 1200;
    this.tags = [];
    this.pageNo = 1;
    this.paginate = {}; // Pagination use only
    this.mobileSidebar = false;
    this.loader = true;
    this.finished = false; // boolean when end of data is reached
    this.addItemCount = 8;
    //Array para productos
    this.product_list = [];
    this.listaVacia = undefined;
    //tamaño de paginacion e inicio
    this.page = 1;
    this.pageSize = 20;
  }
  ngOnInit() {
    this.productoService.currentProductList.subscribe(products => {
      this.product_list = products;
    });
    this.listProductosAccesoriosRopa();
  }
  // Change Grid Layout
  updateGridLayout(value) {
    this.grid = value;
  }
  // Change Layout View
  updateLayoutView(value) {
    this.layoutView = value;
    if (value == 'list-view') this.grid = 'col-lg-12';else this.grid = 'col-xl-3 col-md-6';
  }
  // Mobile sidebar
  toggleMobileSidebar() {
    this.mobileSidebar = !this.mobileSidebar;
  }
  onHover(menuItem) {
    if (window.innerWidth > 1200 && menuItem) {
      document.getElementById('unset').classList.add('sidebar-unset');
    } else {
      document.getElementById('unset').classList.remove('sidebar-unset');
    }
  }
  //Listar todos los productos de la categoria Accesorios para Ropa
  listProductosAccesoriosRopa() {
    const categoriaId = 6; //Pertenece el id de Accesorios para Ropa en la base de datos
    this.productoService.getProductosCategoria(categoriaId).subscribe(data => {
      this.product_list = data.map(product => {
        return {
          ...product,
          img_url: product.imagen_producto && product.imagen_producto.length > 0 ? product.imagen_producto[0].imagen_url : 'path/to/default/image.jpg'
        };
      });
      this.listaVacia = undefined;
    }, err => {
      this.listaVacia = err.error.message;
      console.log(err.error.message);
    });
  }
  static {
    this.ɵfac = function AccesorioRopaLeftSidebarComponent_Factory(t) {
      return new (t || AccesorioRopaLeftSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__.ProductoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: AccesorioRopaLeftSidebarComponent,
      selectors: [["app-accesorio-ropa-left-sidebar"]],
      decls: 37,
      vars: 22,
      consts: [[3, "title", "breadcrumb"], [1, "section-b-space"], [1, "collection-wrapper"], [1, "container"], [1, "row"], [1, "col-lg-3"], [1, "collection-filter"], [1, "collection-filter-block"], [1, "collection-mobile-back", 3, "click"], [1, "filter-back"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "collection-filter-block", "slide-productos"], [3, "title"], [3, "min", "max"], [1, "collection-content", "col"], [1, "page-main-content"], [1, "col-sm-12"], [1, "col-xl-12"], [1, "filter-main-btn", 3, "click"], [1, "filter-btn", "btn", "btn-theme"], ["aria-hidden", "true", 1, "fa", "fa-filter"], ["id", "products", 1, "collection-product-wrapper"], [3, "setGrid", "setLayout", "product_list", "pageSize", "layoutView", "sortBy", "categoriaId"], [1, "product-wrapper-grid", 3, "ngClass"], ["class", "col-grid-box", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "col-sm-12 text-center section-b-space mt-5 no-found", 4, "ngIf"], [1, "d-flex", "justify-content-center", 3, "pageChange", "page", "pageSize", "collectionSize"], [1, "col-grid-box", 3, "ngClass"], [1, "product-box"], [3, "product", "cartModal", "loader", "onHowerChangeImage"], [1, "col-sm-12", "text-center", "section-b-space", "mt-5", "no-found"], ["src", "assets/images/empty-compare.png", 1, "img-fluid", "mb-4"], [1, "no-size"], [1, "btn", "btn-solid", 3, "routerLink"]],
      template: function AccesorioRopaLeftSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-breadcrumb", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AccesorioRopaLeftSidebarComponent_Template_div_click_8_listener() {
            return ctx.toggleMobileSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Regresar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "app-product-box-vertical-slider", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "app-categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "app-price", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "div", 4)(21, "div", 16)(22, "div", 4)(23, "div", 17)(24, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AccesorioRopaLeftSidebarComponent_Template_div_click_24_listener() {
            return ctx.toggleMobileSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, " Filtro ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 21)(29, "app-grid", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("setGrid", function AccesorioRopaLeftSidebarComponent_Template_app_grid_setGrid_29_listener($event) {
            return ctx.updateGridLayout($event);
          })("setLayout", function AccesorioRopaLeftSidebarComponent_Template_app_grid_setLayout_29_listener($event) {
            return ctx.updateLayoutView($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 23)(31, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, AccesorioRopaLeftSidebarComponent_div_32_Template, 3, 5, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "slice");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, AccesorioRopaLeftSidebarComponent_div_34_Template, 8, 2, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "ngb-pagination", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("pageChange", function AccesorioRopaLeftSidebarComponent_Template_ngb_pagination_pageChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.page, $event) || (ctx.page = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Accesorios para Ropa")("breadcrumb", "Accesorios para Ropa");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("openFilterbar", ctx.mobileSidebar);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Nuevos Productos");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("min", ctx.minPrice)("max", ctx.maxPrice);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product_list", ctx.product_list)("pageSize", ctx.pageSize)("layoutView", ctx.layoutView)("sortBy", ctx.sortBy)("categoriaId", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.layoutView);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](33, 18, ctx.product_list, (ctx.page - 1) * ctx.pageSize, (ctx.page - 1) * ctx.pageSize + ctx.pageSize));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.product_list.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("page", ctx.page);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSize", ctx.pageSize)("collectionSize", ctx.product_list == null ? null : ctx.product_list.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPagination, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _shared_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__.CategoriesComponent, _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__.ProductBoxOneComponent, _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_4__.ProductBoxVerticalSliderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _seccion_widgets_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__.GridComponent, _seccion_widgets_price_price_component__WEBPACK_IMPORTED_MODULE_6__.PriceComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.SlicePipe],
      styles: ["p[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n.no-size[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.slide-productos[_ngcontent-%COMP%] {\n  padding: 0 36px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY2Vzb3Jpby1yb3BhLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxQUk9ZRUNUTyUyMEFSVEVTQU5JQVMlMjBMVU1BUlxcY2xpZW50ZS1mcm9udGVuZC1sdW1hclxcc3JjXFxhcHBcXHNob3BcXGNhdGVnb3JpYVxcYWNjZXNvcmlvLXJvcGEtbGVmdC1zbGlkZXJcXGFjY2Vzb3Jpby1yb3BhLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSiIsImZpbGUiOiJhY2Nlc29yaW8tcm9wYS1sZWZ0LXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5uby1zaXplIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNsaWRlLXByb2R1Y3Rvc3tcclxuICAgIHBhZGRpbmc6IDAgMzZweCAhaW1wb3J0YW50O1xyXG59IiwicCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5uby1zaXplIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2xpZGUtcHJvZHVjdG9zIHtcbiAgcGFkZGluZzogMCAzNnB4ICFpbXBvcnRhbnQ7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9jYXRlZ29yaWEvYWNjZXNvcmlvLXJvcGEtbGVmdC1zbGlkZXIvYWNjZXNvcmlvLXJvcGEtbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vUFJPWUVDVE8lMjBBUlRFU0FOSUFTJTIwTFVNQVIvY2xpZW50ZS1mcm9udGVuZC1sdW1hci9zcmMvYXBwL3Nob3AvY2F0ZWdvcmlhL2FjY2Vzb3Jpby1yb3BhLWxlZnQtc2xpZGVyL2FjY2Vzb3Jpby1yb3BhLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSjtBRENBLG85QkFBbzlCIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4ubm8tc2l6ZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zbGlkZS1wcm9kdWN0b3N7XHJcbiAgICBwYWRkaW5nOiAwIDM2cHggIWltcG9ydGFudDtcclxufSIsInAge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4ubm8tc2l6ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNsaWRlLXByb2R1Y3RvcyB7XG4gIHBhZGRpbmc6IDAgMzZweCAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 2495:
/*!******************************************************************************************!*\
  !*** ./src/app/shop/categoria/billetera-left-slider/billetera-left-sidebar.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BilleteraLeftSidebarComponent: () => (/* binding */ BilleteraLeftSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/productos/producto.service */ 3916);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 8173);
/* harmony import */ var _shared_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/categories/categories.component */ 7487);
/* harmony import */ var _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/product/product-box-one/product-box-one.component */ 6646);
/* harmony import */ var _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/product/product-box-vertical-slider/product-box-vertical-slider.component */ 3093);
/* harmony import */ var _seccion_widgets_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../seccion/widgets/grid/grid.component */ 1386);
/* harmony import */ var _seccion_widgets_price_price_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../seccion/widgets/price/price.component */ 7832);











const _c0 = () => ["/home/lumar"];
function BilleteraLeftSidebarComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-product-box-one", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r1.grid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product", product_r1)("cartModal", true)("loader", true)("onHowerChangeImage", true);
  }
}
function BilleteraLeftSidebarComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\u00A1Lo siento! \u00A1\u00A1\u00A1No pudiste encontrar el producto que buscabas!!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Por favor verifique si ha escrito algo mal o intente buscar con otras palabras.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Seguir Comprando");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
  }
}
class BilleteraLeftSidebarComponent {
  constructor(route, router, productoService) {
    this.route = route;
    this.router = router;
    this.productoService = productoService;
    this.grid = 'col-xl-3 col-md-6';
    this.layoutView = 'grid-view';
    this.all_products = [];
    this.products = [];
    this.brands = [];
    this.colors = [];
    this.size = [];
    this.minPrice = 0;
    this.maxPrice = 1200;
    this.tags = [];
    this.pageNo = 1;
    this.paginate = {}; // Pagination use only
    this.mobileSidebar = false;
    this.loader = true;
    this.finished = false; // boolean when end of data is reached
    this.addItemCount = 8;
    //Array para productos
    this.product_list = [];
    this.listaVacia = undefined;
    //tamaño de paginacion e inicio
    this.page = 1;
    this.pageSize = 20;
  }
  ngOnInit() {
    this.productoService.currentProductList.subscribe(products => {
      this.product_list = products;
    });
    this.listProductosBilletera();
  }
  // Change Grid Layout
  updateGridLayout(value) {
    this.grid = value;
  }
  // Change Layout View
  updateLayoutView(value) {
    this.layoutView = value;
    if (value == 'list-view') this.grid = 'col-lg-12';else this.grid = 'col-xl-3 col-md-6';
  }
  // Mobile sidebar
  toggleMobileSidebar() {
    this.mobileSidebar = !this.mobileSidebar;
  }
  onHover(menuItem) {
    if (window.innerWidth > 1200 && menuItem) {
      document.getElementById('unset').classList.add('sidebar-unset');
    } else {
      document.getElementById('unset').classList.remove('sidebar-unset');
    }
  }
  //Listar todos los productos de la categoria Accesorios para Billetera
  listProductosBilletera() {
    const categoriaId = 10; //Pertenece el id de Accesorios para Billetera en la base de datos
    this.productoService.getProductosCategoria(categoriaId).subscribe(data => {
      this.product_list = data.map(product => {
        return {
          ...product,
          img_url: product.imagen_producto && product.imagen_producto.length > 0 ? product.imagen_producto[0].imagen_url : 'path/to/default/image.jpg'
        };
      });
      this.listaVacia = undefined;
    }, err => {
      this.listaVacia = err.error.message;
      console.log(err.error.message);
    });
  }
  static {
    this.ɵfac = function BilleteraLeftSidebarComponent_Factory(t) {
      return new (t || BilleteraLeftSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__.ProductoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: BilleteraLeftSidebarComponent,
      selectors: [["app-billetera-left-sidebar"]],
      decls: 37,
      vars: 22,
      consts: [[3, "title", "breadcrumb"], [1, "section-b-space"], [1, "collection-wrapper"], [1, "container"], [1, "row"], [1, "col-lg-3"], [1, "collection-filter"], [1, "collection-filter-block"], [1, "collection-mobile-back", 3, "click"], [1, "filter-back"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "collection-filter-block", "slide-productos"], [3, "title"], [3, "min", "max"], [1, "collection-content", "col"], [1, "page-main-content"], [1, "col-sm-12"], [1, "col-xl-12"], [1, "filter-main-btn", 3, "click"], [1, "filter-btn", "btn", "btn-theme"], ["aria-hidden", "true", 1, "fa", "fa-filter"], ["id", "products", 1, "collection-product-wrapper"], [3, "setGrid", "setLayout", "product_list", "pageSize", "layoutView", "sortBy", "categoriaId"], [1, "product-wrapper-grid", 3, "ngClass"], ["class", "col-grid-box", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "col-sm-12 text-center section-b-space mt-5 no-found", 4, "ngIf"], [1, "d-flex", "justify-content-center", 3, "pageChange", "page", "pageSize", "collectionSize"], [1, "col-grid-box", 3, "ngClass"], [1, "product-box"], [3, "product", "cartModal", "loader", "onHowerChangeImage"], [1, "col-sm-12", "text-center", "section-b-space", "mt-5", "no-found"], ["src", "assets/images/empty-compare.png", 1, "img-fluid", "mb-4"], [1, "no-size"], [1, "btn", "btn-solid", 3, "routerLink"]],
      template: function BilleteraLeftSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-breadcrumb", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BilleteraLeftSidebarComponent_Template_div_click_8_listener() {
            return ctx.toggleMobileSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Regresar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "app-product-box-vertical-slider", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "app-categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "app-price", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "div", 4)(21, "div", 16)(22, "div", 4)(23, "div", 17)(24, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BilleteraLeftSidebarComponent_Template_div_click_24_listener() {
            return ctx.toggleMobileSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, " Filtro ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 21)(29, "app-grid", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("setGrid", function BilleteraLeftSidebarComponent_Template_app_grid_setGrid_29_listener($event) {
            return ctx.updateGridLayout($event);
          })("setLayout", function BilleteraLeftSidebarComponent_Template_app_grid_setLayout_29_listener($event) {
            return ctx.updateLayoutView($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 23)(31, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, BilleteraLeftSidebarComponent_div_32_Template, 3, 5, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "slice");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, BilleteraLeftSidebarComponent_div_34_Template, 8, 2, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "ngb-pagination", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("pageChange", function BilleteraLeftSidebarComponent_Template_ngb_pagination_pageChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.page, $event) || (ctx.page = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Billeteras")("breadcrumb", "Billeteras");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("openFilterbar", ctx.mobileSidebar);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Nuevos Productos");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("min", ctx.minPrice)("max", ctx.maxPrice);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product_list", ctx.product_list)("pageSize", ctx.pageSize)("layoutView", ctx.layoutView)("sortBy", ctx.sortBy)("categoriaId", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.layoutView);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](33, 18, ctx.product_list, (ctx.page - 1) * ctx.pageSize, (ctx.page - 1) * ctx.pageSize + ctx.pageSize));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.product_list.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("page", ctx.page);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSize", ctx.pageSize)("collectionSize", ctx.product_list == null ? null : ctx.product_list.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPagination, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _shared_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__.CategoriesComponent, _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__.ProductBoxOneComponent, _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_4__.ProductBoxVerticalSliderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _seccion_widgets_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__.GridComponent, _seccion_widgets_price_price_component__WEBPACK_IMPORTED_MODULE_6__.PriceComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.SlicePipe],
      styles: ["p[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n.no-size[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.slide-productos[_ngcontent-%COMP%] {\n  padding: 0 36px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbGxldGVyYS1sZWZ0LXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUFJPWUVDVE8lMjBBUlRFU0FOSUFTJTIwTFVNQVJcXGNsaWVudGUtZnJvbnRlbmQtbHVtYXJcXHNyY1xcYXBwXFxzaG9wXFxjYXRlZ29yaWFcXGJpbGxldGVyYS1sZWZ0LXNsaWRlclxcYmlsbGV0ZXJhLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSiIsImZpbGUiOiJiaWxsZXRlcmEtbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4ubm8tc2l6ZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zbGlkZS1wcm9kdWN0b3N7XHJcbiAgICBwYWRkaW5nOiAwIDM2cHggIWltcG9ydGFudDtcclxufSIsInAge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4ubm8tc2l6ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNsaWRlLXByb2R1Y3RvcyB7XG4gIHBhZGRpbmc6IDAgMzZweCAhaW1wb3J0YW50O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9jYXRlZ29yaWEvYmlsbGV0ZXJhLWxlZnQtc2xpZGVyL2JpbGxldGVyYS1sZWZ0LXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi9QUk9ZRUNUTyUyMEFSVEVTQU5JQVMlMjBMVU1BUi9jbGllbnRlLWZyb250ZW5kLWx1bWFyL3NyYy9hcHAvc2hvcC9jYXRlZ29yaWEvYmlsbGV0ZXJhLWxlZnQtc2xpZGVyL2JpbGxldGVyYS1sZWZ0LXNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLDBCQUFBO0FDQ0o7QURDQSw0N0JBQTQ3QiIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLm5vLXNpemUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2xpZGUtcHJvZHVjdG9ze1xyXG4gICAgcGFkZGluZzogMCAzNnB4ICFpbXBvcnRhbnQ7XHJcbn0iLCJwIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLm5vLXNpemUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zbGlkZS1wcm9kdWN0b3Mge1xuICBwYWRkaW5nOiAwIDM2cHggIWltcG9ydGFudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 2544:
/*!**********************************************************************************************!*\
  !*** ./src/app/shop/categoria/decorativas-left-slider/decorativas-left-sidebar.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DecorativasLeftSidebarComponent: () => (/* binding */ DecorativasLeftSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/productos/producto.service */ 3916);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 8173);
/* harmony import */ var _shared_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/categories/categories.component */ 7487);
/* harmony import */ var _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/product/product-box-one/product-box-one.component */ 6646);
/* harmony import */ var _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/product/product-box-vertical-slider/product-box-vertical-slider.component */ 3093);
/* harmony import */ var _seccion_widgets_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../seccion/widgets/grid/grid.component */ 1386);
/* harmony import */ var _seccion_widgets_price_price_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../seccion/widgets/price/price.component */ 7832);











const _c0 = () => ["/home/lumar"];
function DecorativasLeftSidebarComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-product-box-one", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r1.grid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product", product_r1)("cartModal", true)("loader", true)("onHowerChangeImage", true);
  }
}
function DecorativasLeftSidebarComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\u00A1Lo siento! \u00A1\u00A1\u00A1No pudiste encontrar el producto que buscabas!!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Por favor verifique si ha escrito algo mal o intente buscar con otras palabras.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Seguir Comprando");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
  }
}
class DecorativasLeftSidebarComponent {
  constructor(route, router, productoService) {
    this.route = route;
    this.router = router;
    this.productoService = productoService;
    this.grid = 'col-xl-3 col-md-6';
    this.layoutView = 'grid-view';
    this.all_products = [];
    this.products = [];
    this.brands = [];
    this.colors = [];
    this.size = [];
    this.minPrice = 0;
    this.maxPrice = 1200;
    this.tags = [];
    this.pageNo = 1;
    this.paginate = {}; // Pagination use only
    this.mobileSidebar = false;
    this.loader = true;
    this.finished = false; // boolean when end of data is reached
    this.addItemCount = 8;
    //Array para productos
    this.product_list = [];
    this.listaVacia = undefined;
    //tamaño de paginacion e inicio
    this.page = 1;
    this.pageSize = 20;
  }
  ngOnInit() {
    this.productoService.currentProductList.subscribe(products => {
      this.product_list = products;
    });
    this.listProductosDecorativas();
  }
  // Change Grid Layout
  updateGridLayout(value) {
    this.grid = value;
  }
  // Change Layout View
  updateLayoutView(value) {
    this.layoutView = value;
    if (value == 'list-view') this.grid = 'col-lg-12';else this.grid = 'col-xl-3 col-md-6';
  }
  // Mobile sidebar
  toggleMobileSidebar() {
    this.mobileSidebar = !this.mobileSidebar;
  }
  onHover(menuItem) {
    if (window.innerWidth > 1200 && menuItem) {
      document.getElementById('unset').classList.add('sidebar-unset');
    } else {
      document.getElementById('unset').classList.remove('sidebar-unset');
    }
  }
  //Listar todos los productos de la categoria Decorativas
  listProductosDecorativas() {
    const categoriaId = 2; //Pertenece el id de Decorativas en la base de datos
    this.productoService.getProductosCategoria(categoriaId).subscribe(data => {
      this.product_list = data.map(product => {
        return {
          ...product,
          img_url: product.imagen_producto && product.imagen_producto.length > 0 ? product.imagen_producto[0].imagen_url : 'path/to/default/image.jpg'
        };
      });
      this.listaVacia = undefined;
    }, err => {
      this.listaVacia = err.error.message;
      console.log(err.error.message);
    });
  }
  static {
    this.ɵfac = function DecorativasLeftSidebarComponent_Factory(t) {
      return new (t || DecorativasLeftSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__.ProductoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: DecorativasLeftSidebarComponent,
      selectors: [["app-decorativas-left-sidebar"]],
      decls: 37,
      vars: 22,
      consts: [[3, "title", "breadcrumb"], [1, "section-b-space"], [1, "collection-wrapper"], [1, "container"], [1, "row"], [1, "col-lg-3"], [1, "collection-filter"], [1, "collection-filter-block"], [1, "collection-mobile-back", 3, "click"], [1, "filter-back"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "collection-filter-block", "slide-productos"], [3, "title"], [3, "min", "max"], [1, "collection-content", "col"], [1, "page-main-content"], [1, "col-sm-12"], [1, "col-xl-12"], [1, "filter-main-btn", 3, "click"], [1, "filter-btn", "btn", "btn-theme"], ["aria-hidden", "true", 1, "fa", "fa-filter"], ["id", "products", 1, "collection-product-wrapper"], [3, "setGrid", "setLayout", "product_list", "pageSize", "layoutView", "sortBy", "categoriaId"], [1, "product-wrapper-grid", 3, "ngClass"], ["class", "col-grid-box", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "col-sm-12 text-center section-b-space mt-5 no-found", 4, "ngIf"], [1, "d-flex", "justify-content-center", 3, "pageChange", "page", "pageSize", "collectionSize"], [1, "col-grid-box", 3, "ngClass"], [1, "product-box"], [3, "product", "cartModal", "loader", "onHowerChangeImage"], [1, "col-sm-12", "text-center", "section-b-space", "mt-5", "no-found"], ["src", "assets/images/empty-compare.png", 1, "img-fluid", "mb-4"], [1, "no-size"], [1, "btn", "btn-solid", 3, "routerLink"]],
      template: function DecorativasLeftSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-breadcrumb", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DecorativasLeftSidebarComponent_Template_div_click_8_listener() {
            return ctx.toggleMobileSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Regresar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "app-product-box-vertical-slider", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "app-categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "app-price", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "div", 4)(21, "div", 16)(22, "div", 4)(23, "div", 17)(24, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DecorativasLeftSidebarComponent_Template_div_click_24_listener() {
            return ctx.toggleMobileSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, " Filtro ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 21)(29, "app-grid", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("setGrid", function DecorativasLeftSidebarComponent_Template_app_grid_setGrid_29_listener($event) {
            return ctx.updateGridLayout($event);
          })("setLayout", function DecorativasLeftSidebarComponent_Template_app_grid_setLayout_29_listener($event) {
            return ctx.updateLayoutView($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 23)(31, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, DecorativasLeftSidebarComponent_div_32_Template, 3, 5, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "slice");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, DecorativasLeftSidebarComponent_div_34_Template, 8, 2, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "ngb-pagination", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("pageChange", function DecorativasLeftSidebarComponent_Template_ngb_pagination_pageChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.page, $event) || (ctx.page = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Decorativas")("breadcrumb", "Decorativas");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("openFilterbar", ctx.mobileSidebar);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Nuevos Productos");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("min", ctx.minPrice)("max", ctx.maxPrice);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product_list", ctx.product_list)("pageSize", ctx.pageSize)("layoutView", ctx.layoutView)("sortBy", ctx.sortBy)("categoriaId", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.layoutView);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](33, 18, ctx.product_list, (ctx.page - 1) * ctx.pageSize, (ctx.page - 1) * ctx.pageSize + ctx.pageSize));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.product_list.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("page", ctx.page);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSize", ctx.pageSize)("collectionSize", ctx.product_list == null ? null : ctx.product_list.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPagination, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _shared_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__.CategoriesComponent, _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__.ProductBoxOneComponent, _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_4__.ProductBoxVerticalSliderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _seccion_widgets_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__.GridComponent, _seccion_widgets_price_price_component__WEBPACK_IMPORTED_MODULE_6__.PriceComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.SlicePipe],
      styles: ["p[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n.no-size[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.slide-productos[_ngcontent-%COMP%] {\n  padding: 0 36px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY29yYXRpdmFzLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxQUk9ZRUNUTyUyMEFSVEVTQU5JQVMlMjBMVU1BUlxcY2xpZW50ZS1mcm9udGVuZC1sdW1hclxcc3JjXFxhcHBcXHNob3BcXGNhdGVnb3JpYVxcZGVjb3JhdGl2YXMtbGVmdC1zbGlkZXJcXGRlY29yYXRpdmFzLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSiIsImZpbGUiOiJkZWNvcmF0aXZhcy1sZWZ0LXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5uby1zaXplIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNsaWRlLXByb2R1Y3Rvc3tcclxuICAgIHBhZGRpbmc6IDAgMzZweCAhaW1wb3J0YW50O1xyXG59IiwicCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5uby1zaXplIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2xpZGUtcHJvZHVjdG9zIHtcbiAgcGFkZGluZzogMCAzNnB4ICFpbXBvcnRhbnQ7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9jYXRlZ29yaWEvZGVjb3JhdGl2YXMtbGVmdC1zbGlkZXIvZGVjb3JhdGl2YXMtbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vUFJPWUVDVE8lMjBBUlRFU0FOSUFTJTIwTFVNQVIvY2xpZW50ZS1mcm9udGVuZC1sdW1hci9zcmMvYXBwL3Nob3AvY2F0ZWdvcmlhL2RlY29yYXRpdmFzLWxlZnQtc2xpZGVyL2RlY29yYXRpdmFzLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSjtBRENBLG84QkFBbzhCIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4ubm8tc2l6ZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zbGlkZS1wcm9kdWN0b3N7XHJcbiAgICBwYWRkaW5nOiAwIDM2cHggIWltcG9ydGFudDtcclxufSIsInAge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4ubm8tc2l6ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNsaWRlLXByb2R1Y3RvcyB7XG4gIHBhZGRpbmc6IDAgMzZweCAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8280:
/*!**********************************************************************************!*\
  !*** ./src/app/shop/categoria/hogar-left-slider/hogar-left-sidebar.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HogarLeftSidebarComponent: () => (/* binding */ HogarLeftSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/productos/producto.service */ 3916);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 8173);
/* harmony import */ var _shared_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/categories/categories.component */ 7487);
/* harmony import */ var _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/product/product-box-one/product-box-one.component */ 6646);
/* harmony import */ var _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/product/product-box-vertical-slider/product-box-vertical-slider.component */ 3093);
/* harmony import */ var _seccion_widgets_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../seccion/widgets/grid/grid.component */ 1386);
/* harmony import */ var _seccion_widgets_price_price_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../seccion/widgets/price/price.component */ 7832);











const _c0 = () => ["/home/lumar"];
function HogarLeftSidebarComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-product-box-one", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r1.grid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product", product_r1)("cartModal", true)("loader", true)("onHowerChangeImage", true);
  }
}
function HogarLeftSidebarComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\u00A1Lo siento! \u00A1\u00A1\u00A1No pudiste encontrar el producto que buscabas!!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Por favor verifique si ha escrito algo mal o intente buscar con otras palabras.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Seguir Comprando");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
  }
}
class HogarLeftSidebarComponent {
  constructor(route, router, productoService) {
    this.route = route;
    this.router = router;
    this.productoService = productoService;
    this.grid = 'col-xl-3 col-md-6';
    this.layoutView = 'grid-view';
    this.all_products = [];
    this.products = [];
    this.brands = [];
    this.colors = [];
    this.size = [];
    this.minPrice = 0;
    this.maxPrice = 1200;
    this.tags = [];
    this.pageNo = 1;
    this.paginate = {}; // Pagination use only
    this.mobileSidebar = false;
    this.loader = true;
    this.finished = false; // boolean when end of data is reached
    this.addItemCount = 8;
    //Array para productos
    this.product_list = [];
    this.listaVacia = undefined;
    //tamaño de paginacion e inicio
    this.page = 1;
    this.pageSize = 20;
  }
  ngOnInit() {
    this.productoService.currentProductList.subscribe(products => {
      this.product_list = products;
    });
    this.listProductosHogar();
  }
  // Change Grid Layout
  updateGridLayout(value) {
    this.grid = value;
  }
  // Change Layout View
  updateLayoutView(value) {
    this.layoutView = value;
    if (value == 'list-view') this.grid = 'col-lg-12';else this.grid = 'col-xl-3 col-md-6';
  }
  // Mobile sidebar
  toggleMobileSidebar() {
    this.mobileSidebar = !this.mobileSidebar;
  }
  onHover(menuItem) {
    if (window.innerWidth > 1200 && menuItem) {
      document.getElementById('unset').classList.add('sidebar-unset');
    } else {
      document.getElementById('unset').classList.remove('sidebar-unset');
    }
  }
  //Listar todos los productos de la categoira Hogar
  listProductosHogar() {
    const categoriaId = 3; //Pertenece el id de Hogar en la base de datos
    this.productoService.getProductosCategoria(categoriaId).subscribe(data => {
      this.product_list = data.map(product => {
        return {
          ...product,
          img_url: product.imagen_producto && product.imagen_producto.length > 0 ? product.imagen_producto[0].imagen_url : 'path/to/default/image.jpg'
        };
      });
      this.listaVacia = undefined;
    }, err => {
      this.listaVacia = err.error.message;
      console.log(err.error.message);
    });
  }
  static {
    this.ɵfac = function HogarLeftSidebarComponent_Factory(t) {
      return new (t || HogarLeftSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__.ProductoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: HogarLeftSidebarComponent,
      selectors: [["app-hogar-left-sidebar"]],
      decls: 37,
      vars: 22,
      consts: [[3, "title", "breadcrumb"], [1, "section-b-space"], [1, "collection-wrapper"], [1, "container"], [1, "row"], [1, "col-lg-3"], [1, "collection-filter"], [1, "collection-filter-block"], [1, "collection-mobile-back", 3, "click"], [1, "filter-back"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "collection-filter-block", "slide-productos"], [3, "title"], [3, "min", "max"], [1, "collection-content", "col"], [1, "page-main-content"], [1, "col-sm-12"], [1, "col-xl-12"], [1, "filter-main-btn", 3, "click"], [1, "filter-btn", "btn", "btn-theme"], ["aria-hidden", "true", 1, "fa", "fa-filter"], ["id", "products", 1, "collection-product-wrapper"], [3, "setGrid", "setLayout", "product_list", "pageSize", "layoutView", "sortBy", "categoriaId"], [1, "product-wrapper-grid", 3, "ngClass"], ["class", "col-grid-box", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "col-sm-12 text-center section-b-space mt-5 no-found", 4, "ngIf"], [1, "d-flex", "justify-content-center", 3, "pageChange", "page", "pageSize", "collectionSize"], [1, "col-grid-box", 3, "ngClass"], [1, "product-box"], [3, "product", "cartModal", "loader", "onHowerChangeImage"], [1, "col-sm-12", "text-center", "section-b-space", "mt-5", "no-found"], ["src", "assets/images/empty-compare.png", 1, "img-fluid", "mb-4"], [1, "no-size"], [1, "btn", "btn-solid", 3, "routerLink"]],
      template: function HogarLeftSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-breadcrumb", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HogarLeftSidebarComponent_Template_div_click_8_listener() {
            return ctx.toggleMobileSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Regresar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "app-product-box-vertical-slider", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "app-categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "app-price", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "div", 4)(21, "div", 16)(22, "div", 4)(23, "div", 17)(24, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HogarLeftSidebarComponent_Template_div_click_24_listener() {
            return ctx.toggleMobileSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, " Filtro ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 21)(29, "app-grid", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("setGrid", function HogarLeftSidebarComponent_Template_app_grid_setGrid_29_listener($event) {
            return ctx.updateGridLayout($event);
          })("setLayout", function HogarLeftSidebarComponent_Template_app_grid_setLayout_29_listener($event) {
            return ctx.updateLayoutView($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 23)(31, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, HogarLeftSidebarComponent_div_32_Template, 3, 5, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "slice");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, HogarLeftSidebarComponent_div_34_Template, 8, 2, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "ngb-pagination", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("pageChange", function HogarLeftSidebarComponent_Template_ngb_pagination_pageChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.page, $event) || (ctx.page = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Hogar")("breadcrumb", "Hogar");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("openFilterbar", ctx.mobileSidebar);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Nuevos Productos");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("min", ctx.minPrice)("max", ctx.maxPrice);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product_list", ctx.product_list)("pageSize", ctx.pageSize)("layoutView", ctx.layoutView)("sortBy", ctx.sortBy)("categoriaId", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.layoutView);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](33, 18, ctx.product_list, (ctx.page - 1) * ctx.pageSize, (ctx.page - 1) * ctx.pageSize + ctx.pageSize));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.product_list.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("page", ctx.page);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSize", ctx.pageSize)("collectionSize", ctx.product_list == null ? null : ctx.product_list.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPagination, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _shared_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__.CategoriesComponent, _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__.ProductBoxOneComponent, _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_4__.ProductBoxVerticalSliderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _seccion_widgets_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__.GridComponent, _seccion_widgets_price_price_component__WEBPACK_IMPORTED_MODULE_6__.PriceComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.SlicePipe],
      styles: ["p[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n.no-size[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.slide-productos[_ngcontent-%COMP%] {\n  padding: 0 36px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvZ2FyLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxQUk9ZRUNUTyUyMEFSVEVTQU5JQVMlMjBMVU1BUlxcY2xpZW50ZS1mcm9udGVuZC1sdW1hclxcc3JjXFxhcHBcXHNob3BcXGNhdGVnb3JpYVxcaG9nYXItbGVmdC1zbGlkZXJcXGhvZ2FyLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSiIsImZpbGUiOiJob2dhci1sZWZ0LXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5uby1zaXplIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNsaWRlLXByb2R1Y3Rvc3tcclxuICAgIHBhZGRpbmc6IDAgMzZweCAhaW1wb3J0YW50O1xyXG59IiwicCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5uby1zaXplIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2xpZGUtcHJvZHVjdG9zIHtcbiAgcGFkZGluZzogMCAzNnB4ICFpbXBvcnRhbnQ7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9jYXRlZ29yaWEvaG9nYXItbGVmdC1zbGlkZXIvaG9nYXItbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vUFJPWUVDVE8lMjBBUlRFU0FOSUFTJTIwTFVNQVIvY2xpZW50ZS1mcm9udGVuZC1sdW1hci9zcmMvYXBwL3Nob3AvY2F0ZWdvcmlhL2hvZ2FyLWxlZnQtc2xpZGVyL2hvZ2FyLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSjtBRENBLG82QkFBbzZCIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4ubm8tc2l6ZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zbGlkZS1wcm9kdWN0b3N7XHJcbiAgICBwYWRkaW5nOiAwIDM2cHggIWltcG9ydGFudDtcclxufSIsInAge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4ubm8tc2l6ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNsaWRlLXByb2R1Y3RvcyB7XG4gIHBhZGRpbmc6IDAgMzZweCAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7248:
/*!**********************************************************************************************************!*\
  !*** ./src/app/shop/categoria/joyeria-categoria-left-slider/joyeria-categoria-left-sidebar.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JoyeriaCategoriaLeftSidebarComponent: () => (/* binding */ JoyeriaCategoriaLeftSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/productos/producto.service */ 3916);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 8173);
/* harmony import */ var _shared_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/categories/categories.component */ 7487);
/* harmony import */ var _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/product/product-box-one/product-box-one.component */ 6646);
/* harmony import */ var _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/product/product-box-vertical-slider/product-box-vertical-slider.component */ 3093);
/* harmony import */ var _seccion_widgets_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../seccion/widgets/grid/grid.component */ 1386);
/* harmony import */ var _seccion_widgets_price_price_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../seccion/widgets/price/price.component */ 7832);











const _c0 = () => ["/home/lumar"];
function JoyeriaCategoriaLeftSidebarComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-product-box-one", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r1.grid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product", product_r1)("cartModal", true)("loader", true)("onHowerChangeImage", true);
  }
}
function JoyeriaCategoriaLeftSidebarComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\u00A1Lo siento! \u00A1\u00A1\u00A1No pudiste encontrar el producto que buscabas!!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Por favor verifique si ha escrito algo mal o intente buscar con otras palabras.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Seguir Comprando");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
  }
}
class JoyeriaCategoriaLeftSidebarComponent {
  constructor(route, router, productoService) {
    this.route = route;
    this.router = router;
    this.productoService = productoService;
    this.grid = 'col-xl-3 col-md-6';
    this.layoutView = 'grid-view';
    this.all_products = [];
    this.products = [];
    this.brands = [];
    this.colors = [];
    this.size = [];
    this.minPrice = 0;
    this.maxPrice = 1200;
    this.tags = [];
    this.pageNo = 1;
    this.paginate = {}; // Pagination use only
    this.mobileSidebar = false;
    this.loader = true;
    this.finished = false; // boolean when end of data is reached
    this.addItemCount = 8;
    //Array para productos
    this.product_list = [];
    this.listaVacia = undefined;
    //tamaño de paginacion e inicio
    this.page = 1;
    this.pageSize = 20;
  }
  ngOnInit() {
    this.productoService.currentProductList.subscribe(products => {
      this.product_list = products;
    });
    this.listProductosDecorativas();
  }
  // Change Grid Layout
  updateGridLayout(value) {
    this.grid = value;
  }
  // Change Layout View
  updateLayoutView(value) {
    this.layoutView = value;
    if (value == 'list-view') this.grid = 'col-lg-12';else this.grid = 'col-xl-3 col-md-6';
  }
  // Mobile sidebar
  toggleMobileSidebar() {
    this.mobileSidebar = !this.mobileSidebar;
  }
  onHover(menuItem) {
    if (window.innerWidth > 1200 && menuItem) {
      document.getElementById('unset').classList.add('sidebar-unset');
    } else {
      document.getElementById('unset').classList.remove('sidebar-unset');
    }
  }
  //Listar todos los productos de la categoria Joyeria
  listProductosDecorativas() {
    const categoriaId = 4; //Pertenece el id de Joyeria en la base de datos
    this.productoService.getProductosCategoria(categoriaId).subscribe(data => {
      this.product_list = data.map(product => {
        return {
          ...product,
          img_url: product.imagen_producto && product.imagen_producto.length > 0 ? product.imagen_producto[0].imagen_url : 'path/to/default/image.jpg'
        };
      });
      this.listaVacia = undefined;
    }, err => {
      this.listaVacia = err.error.message;
      console.log(err.error.message);
    });
  }
  static {
    this.ɵfac = function JoyeriaCategoriaLeftSidebarComponent_Factory(t) {
      return new (t || JoyeriaCategoriaLeftSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__.ProductoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: JoyeriaCategoriaLeftSidebarComponent,
      selectors: [["app-joyeria-categoria-left-sidebar"]],
      decls: 37,
      vars: 22,
      consts: [[3, "title", "breadcrumb"], [1, "section-b-space"], [1, "collection-wrapper"], [1, "container"], [1, "row"], [1, "col-lg-3"], [1, "collection-filter"], [1, "collection-filter-block"], [1, "collection-mobile-back", 3, "click"], [1, "filter-back"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "collection-filter-block", "slide-productos"], [3, "title"], [3, "min", "max"], [1, "collection-content", "col"], [1, "page-main-content"], [1, "col-sm-12"], [1, "col-xl-12"], [1, "filter-main-btn", 3, "click"], [1, "filter-btn", "btn", "btn-theme"], ["aria-hidden", "true", 1, "fa", "fa-filter"], ["id", "products", 1, "collection-product-wrapper"], [3, "setGrid", "setLayout", "product_list", "pageSize", "layoutView", "sortBy", "categoriaId"], [1, "product-wrapper-grid", 3, "ngClass"], ["class", "col-grid-box", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "col-sm-12 text-center section-b-space mt-5 no-found", 4, "ngIf"], [1, "d-flex", "justify-content-center", 3, "pageChange", "page", "pageSize", "collectionSize"], [1, "col-grid-box", 3, "ngClass"], [1, "product-box"], [3, "product", "cartModal", "loader", "onHowerChangeImage"], [1, "col-sm-12", "text-center", "section-b-space", "mt-5", "no-found"], ["src", "assets/images/empty-compare.png", 1, "img-fluid", "mb-4"], [1, "no-size"], [1, "btn", "btn-solid", 3, "routerLink"]],
      template: function JoyeriaCategoriaLeftSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-breadcrumb", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function JoyeriaCategoriaLeftSidebarComponent_Template_div_click_8_listener() {
            return ctx.toggleMobileSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Regresar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "app-product-box-vertical-slider", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "app-categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "app-price", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "div", 4)(21, "div", 16)(22, "div", 4)(23, "div", 17)(24, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function JoyeriaCategoriaLeftSidebarComponent_Template_div_click_24_listener() {
            return ctx.toggleMobileSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, " Filtro ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 21)(29, "app-grid", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("setGrid", function JoyeriaCategoriaLeftSidebarComponent_Template_app_grid_setGrid_29_listener($event) {
            return ctx.updateGridLayout($event);
          })("setLayout", function JoyeriaCategoriaLeftSidebarComponent_Template_app_grid_setLayout_29_listener($event) {
            return ctx.updateLayoutView($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 23)(31, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, JoyeriaCategoriaLeftSidebarComponent_div_32_Template, 3, 5, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "slice");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, JoyeriaCategoriaLeftSidebarComponent_div_34_Template, 8, 2, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "ngb-pagination", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("pageChange", function JoyeriaCategoriaLeftSidebarComponent_Template_ngb_pagination_pageChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.page, $event) || (ctx.page = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Joyeria")("breadcrumb", "Joyeria");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("openFilterbar", ctx.mobileSidebar);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Nuevos Productos");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("min", ctx.minPrice)("max", ctx.maxPrice);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product_list", ctx.product_list)("pageSize", ctx.pageSize)("layoutView", ctx.layoutView)("sortBy", ctx.sortBy)("categoriaId", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.layoutView);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](33, 18, ctx.product_list, (ctx.page - 1) * ctx.pageSize, (ctx.page - 1) * ctx.pageSize + ctx.pageSize));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.product_list.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("page", ctx.page);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSize", ctx.pageSize)("collectionSize", ctx.product_list == null ? null : ctx.product_list.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPagination, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _shared_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__.CategoriesComponent, _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__.ProductBoxOneComponent, _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_4__.ProductBoxVerticalSliderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _seccion_widgets_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__.GridComponent, _seccion_widgets_price_price_component__WEBPACK_IMPORTED_MODULE_6__.PriceComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.SlicePipe],
      styles: ["p[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n.no-size[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.slide-productos[_ngcontent-%COMP%] {\n  padding: 0 36px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpveWVyaWEtY2F0ZWdvcmlhLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxQUk9ZRUNUTyUyMEFSVEVTQU5JQVMlMjBMVU1BUlxcY2xpZW50ZS1mcm9udGVuZC1sdW1hclxcc3JjXFxhcHBcXHNob3BcXGNhdGVnb3JpYVxcam95ZXJpYS1jYXRlZ29yaWEtbGVmdC1zbGlkZXJcXGpveWVyaWEtY2F0ZWdvcmlhLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSiIsImZpbGUiOiJqb3llcmlhLWNhdGVnb3JpYS1sZWZ0LXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5uby1zaXplIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNsaWRlLXByb2R1Y3Rvc3tcclxuICAgIHBhZGRpbmc6IDAgMzZweCAhaW1wb3J0YW50O1xyXG59IiwicCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5uby1zaXplIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2xpZGUtcHJvZHVjdG9zIHtcbiAgcGFkZGluZzogMCAzNnB4ICFpbXBvcnRhbnQ7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9jYXRlZ29yaWEvam95ZXJpYS1jYXRlZ29yaWEtbGVmdC1zbGlkZXIvam95ZXJpYS1jYXRlZ29yaWEtbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vUFJPWUVDVE8lMjBBUlRFU0FOSUFTJTIwTFVNQVIvY2xpZW50ZS1mcm9udGVuZC1sdW1hci9zcmMvYXBwL3Nob3AvY2F0ZWdvcmlhL2pveWVyaWEtY2F0ZWdvcmlhLWxlZnQtc2xpZGVyL2pveWVyaWEtY2F0ZWdvcmlhLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSjtBRENBLG8rQkFBbytCIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4ubm8tc2l6ZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zbGlkZS1wcm9kdWN0b3N7XHJcbiAgICBwYWRkaW5nOiAwIDM2cHggIWltcG9ydGFudDtcclxufSIsInAge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4ubm8tc2l6ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNsaWRlLXByb2R1Y3RvcyB7XG4gIHBhZGRpbmc6IDAgMzZweCAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 9430:
/*!****************************************************************************************!*\
  !*** ./src/app/shop/categoria/mochilas-left-slider/mochilas-left-sidebar.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MochilasLeftSidebarComponent: () => (/* binding */ MochilasLeftSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/productos/producto.service */ 3916);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 8173);
/* harmony import */ var _shared_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/categories/categories.component */ 7487);
/* harmony import */ var _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/product/product-box-one/product-box-one.component */ 6646);
/* harmony import */ var _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/product/product-box-vertical-slider/product-box-vertical-slider.component */ 3093);
/* harmony import */ var _seccion_widgets_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../seccion/widgets/grid/grid.component */ 1386);
/* harmony import */ var _seccion_widgets_price_price_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../seccion/widgets/price/price.component */ 7832);











const _c0 = () => ["/home/lumar"];
function MochilasLeftSidebarComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-product-box-one", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r1.grid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product", product_r1)("cartModal", true)("loader", true)("onHowerChangeImage", true);
  }
}
function MochilasLeftSidebarComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\u00A1Lo siento! \u00A1\u00A1\u00A1No pudiste encontrar el producto que buscabas!!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Por favor verifique si ha escrito algo mal o intente buscar con otras palabras.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Seguir Comprando");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
  }
}
class MochilasLeftSidebarComponent {
  constructor(route, router, productoService) {
    this.route = route;
    this.router = router;
    this.productoService = productoService;
    this.grid = 'col-xl-3 col-md-6';
    this.layoutView = 'grid-view';
    this.all_products = [];
    this.products = [];
    this.brands = [];
    this.colors = [];
    this.size = [];
    this.minPrice = 0;
    this.maxPrice = 1200;
    this.tags = [];
    this.pageNo = 1;
    this.paginate = {}; // Pagination use only
    this.mobileSidebar = false;
    this.loader = true;
    this.finished = false; // boolean when end of data is reached
    this.addItemCount = 8;
    //Array para productos
    this.product_list = [];
    this.listaVacia = undefined;
    //tamaño de paginacion e inicio
    this.page = 1;
    this.pageSize = 20;
  }
  ngOnInit() {
    this.productoService.currentProductList.subscribe(products => {
      this.product_list = products;
    });
    this.listProductosMochilas();
  }
  // Change Grid Layout
  updateGridLayout(value) {
    this.grid = value;
  }
  // Change Layout View
  updateLayoutView(value) {
    this.layoutView = value;
    if (value == 'list-view') this.grid = 'col-lg-12';else this.grid = 'col-xl-3 col-md-6';
  }
  // Mobile sidebar
  toggleMobileSidebar() {
    this.mobileSidebar = !this.mobileSidebar;
  }
  onHover(menuItem) {
    if (window.innerWidth > 1200 && menuItem) {
      document.getElementById('unset').classList.add('sidebar-unset');
    } else {
      document.getElementById('unset').classList.remove('sidebar-unset');
    }
  }
  //Listar todos los productos de la categoira Mochilas
  listProductosMochilas() {
    const categoriaId = 9; //Pertenece el id de Mochilas en la base de datos
    this.productoService.getProductosCategoria(categoriaId).subscribe(data => {
      this.product_list = data.map(product => {
        return {
          ...product,
          img_url: product.imagen_producto && product.imagen_producto.length > 0 ? product.imagen_producto[0].imagen_url : 'path/to/default/image.jpg'
        };
      });
      this.listaVacia = undefined;
    }, err => {
      this.listaVacia = err.error.message;
      console.log(err.error.message);
    });
  }
  static {
    this.ɵfac = function MochilasLeftSidebarComponent_Factory(t) {
      return new (t || MochilasLeftSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__.ProductoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: MochilasLeftSidebarComponent,
      selectors: [["app-mochilas-left-sidebar"]],
      decls: 37,
      vars: 22,
      consts: [[3, "title", "breadcrumb"], [1, "section-b-space"], [1, "collection-wrapper"], [1, "container"], [1, "row"], [1, "col-lg-3"], [1, "collection-filter"], [1, "collection-filter-block"], [1, "collection-mobile-back", 3, "click"], [1, "filter-back"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "collection-filter-block", "slide-productos"], [3, "title"], [3, "min", "max"], [1, "collection-content", "col"], [1, "page-main-content"], [1, "col-sm-12"], [1, "col-xl-12"], [1, "filter-main-btn", 3, "click"], [1, "filter-btn", "btn", "btn-theme"], ["aria-hidden", "true", 1, "fa", "fa-filter"], ["id", "products", 1, "collection-product-wrapper"], [3, "setGrid", "setLayout", "product_list", "pageSize", "layoutView", "sortBy", "categoriaId"], [1, "product-wrapper-grid", 3, "ngClass"], ["class", "col-grid-box", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "col-sm-12 text-center section-b-space mt-5 no-found", 4, "ngIf"], [1, "d-flex", "justify-content-center", 3, "pageChange", "page", "pageSize", "collectionSize"], [1, "col-grid-box", 3, "ngClass"], [1, "product-box"], [3, "product", "cartModal", "loader", "onHowerChangeImage"], [1, "col-sm-12", "text-center", "section-b-space", "mt-5", "no-found"], ["src", "assets/images/empty-compare.png", 1, "img-fluid", "mb-4"], [1, "no-size"], [1, "btn", "btn-solid", 3, "routerLink"]],
      template: function MochilasLeftSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-breadcrumb", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MochilasLeftSidebarComponent_Template_div_click_8_listener() {
            return ctx.toggleMobileSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Regresar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "app-product-box-vertical-slider", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "app-categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "app-price", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "div", 4)(21, "div", 16)(22, "div", 4)(23, "div", 17)(24, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MochilasLeftSidebarComponent_Template_div_click_24_listener() {
            return ctx.toggleMobileSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, " Filtro ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 21)(29, "app-grid", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("setGrid", function MochilasLeftSidebarComponent_Template_app_grid_setGrid_29_listener($event) {
            return ctx.updateGridLayout($event);
          })("setLayout", function MochilasLeftSidebarComponent_Template_app_grid_setLayout_29_listener($event) {
            return ctx.updateLayoutView($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 23)(31, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, MochilasLeftSidebarComponent_div_32_Template, 3, 5, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "slice");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, MochilasLeftSidebarComponent_div_34_Template, 8, 2, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "ngb-pagination", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("pageChange", function MochilasLeftSidebarComponent_Template_ngb_pagination_pageChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.page, $event) || (ctx.page = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Mochilas")("breadcrumb", "Mochilas");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("openFilterbar", ctx.mobileSidebar);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Nuevos Productos");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("min", ctx.minPrice)("max", ctx.maxPrice);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product_list", ctx.product_list)("pageSize", ctx.pageSize)("layoutView", ctx.layoutView)("sortBy", ctx.sortBy)("categoriaId", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.layoutView);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](33, 18, ctx.product_list, (ctx.page - 1) * ctx.pageSize, (ctx.page - 1) * ctx.pageSize + ctx.pageSize));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.product_list.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("page", ctx.page);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSize", ctx.pageSize)("collectionSize", ctx.product_list == null ? null : ctx.product_list.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPagination, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _shared_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__.CategoriesComponent, _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__.ProductBoxOneComponent, _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_4__.ProductBoxVerticalSliderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _seccion_widgets_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__.GridComponent, _seccion_widgets_price_price_component__WEBPACK_IMPORTED_MODULE_6__.PriceComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.SlicePipe],
      styles: ["p[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n.no-size[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.slide-productos[_ngcontent-%COMP%] {\n  padding: 0 36px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2hpbGFzLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxQUk9ZRUNUTyUyMEFSVEVTQU5JQVMlMjBMVU1BUlxcY2xpZW50ZS1mcm9udGVuZC1sdW1hclxcc3JjXFxhcHBcXHNob3BcXGNhdGVnb3JpYVxcbW9jaGlsYXMtbGVmdC1zbGlkZXJcXG1vY2hpbGFzLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSiIsImZpbGUiOiJtb2NoaWxhcy1sZWZ0LXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5uby1zaXplIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNsaWRlLXByb2R1Y3Rvc3tcclxuICAgIHBhZGRpbmc6IDAgMzZweCAhaW1wb3J0YW50O1xyXG59IiwicCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5uby1zaXplIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2xpZGUtcHJvZHVjdG9zIHtcbiAgcGFkZGluZzogMCAzNnB4ICFpbXBvcnRhbnQ7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9jYXRlZ29yaWEvbW9jaGlsYXMtbGVmdC1zbGlkZXIvbW9jaGlsYXMtbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vUFJPWUVDVE8lMjBBUlRFU0FOSUFTJTIwTFVNQVIvY2xpZW50ZS1mcm9udGVuZC1sdW1hci9zcmMvYXBwL3Nob3AvY2F0ZWdvcmlhL21vY2hpbGFzLWxlZnQtc2xpZGVyL21vY2hpbGFzLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSjtBRENBLG83QkFBbzdCIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4ubm8tc2l6ZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zbGlkZS1wcm9kdWN0b3N7XHJcbiAgICBwYWRkaW5nOiAwIDM2cHggIWltcG9ydGFudDtcclxufSIsInAge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4ubm8tc2l6ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNsaWRlLXByb2R1Y3RvcyB7XG4gIHBhZGRpbmc6IDAgMzZweCAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7804:
/*!**************************************************************************************!*\
  !*** ./src/app/shop/categoria/oficina-left-slider/oficina-left-sidebar.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OficinaLeftSidebarComponent: () => (/* binding */ OficinaLeftSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/productos/producto.service */ 3916);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 8173);
/* harmony import */ var _shared_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/categories/categories.component */ 7487);
/* harmony import */ var _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/product/product-box-one/product-box-one.component */ 6646);
/* harmony import */ var _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/product/product-box-vertical-slider/product-box-vertical-slider.component */ 3093);
/* harmony import */ var _seccion_widgets_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../seccion/widgets/grid/grid.component */ 1386);
/* harmony import */ var _seccion_widgets_price_price_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../seccion/widgets/price/price.component */ 7832);











const _c0 = () => ["/home/lumar"];
function OficinaLeftSidebarComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-product-box-one", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r1.grid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product", product_r1)("cartModal", true)("loader", true)("onHowerChangeImage", true);
  }
}
function OficinaLeftSidebarComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\u00A1Lo siento! \u00A1\u00A1\u00A1No pudiste encontrar el producto que buscabas!!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Por favor verifique si ha escrito algo mal o intente buscar con otras palabras.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Seguir Comprando");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
  }
}
class OficinaLeftSidebarComponent {
  constructor(route, router, productoService) {
    this.route = route;
    this.router = router;
    this.productoService = productoService;
    this.grid = 'col-xl-3 col-md-6';
    this.layoutView = 'grid-view';
    this.all_products = [];
    this.products = [];
    this.brands = [];
    this.colors = [];
    this.size = [];
    this.minPrice = 0;
    this.maxPrice = 1200;
    this.tags = [];
    this.pageNo = 1;
    this.paginate = {}; // Pagination use only
    this.mobileSidebar = false;
    this.loader = true;
    this.finished = false; // boolean when end of data is reached
    this.addItemCount = 8;
    //Array para productos
    this.product_list = [];
    this.listaVacia = undefined;
    //tamaño de paginacion e inicio
    this.page = 1;
    this.pageSize = 20;
  }
  ngOnInit() {
    this.productoService.currentProductList.subscribe(products => {
      this.product_list = products;
    });
    this.listProductosOficina();
  }
  // Change Grid Layout
  updateGridLayout(value) {
    this.grid = value;
  }
  // Change Layout View
  updateLayoutView(value) {
    this.layoutView = value;
    if (value == 'list-view') this.grid = 'col-lg-12';else this.grid = 'col-xl-3 col-md-6';
  }
  // Mobile sidebar
  toggleMobileSidebar() {
    this.mobileSidebar = !this.mobileSidebar;
  }
  onHover(menuItem) {
    if (window.innerWidth > 1200 && menuItem) {
      document.getElementById('unset').classList.add('sidebar-unset');
    } else {
      document.getElementById('unset').classList.remove('sidebar-unset');
    }
  }
  //Listar todos los productos de la categoira Oficina
  listProductosOficina() {
    const categoriaId = 4; //Pertenece el id de Oficina en la base de datos
    this.productoService.getProductosCategoria(categoriaId).subscribe(data => {
      this.product_list = data.map(product => {
        return {
          ...product,
          img_url: product.imagen_producto && product.imagen_producto.length > 0 ? product.imagen_producto[0].imagen_url : 'path/to/default/image.jpg'
        };
      });
      this.listaVacia = undefined;
    }, err => {
      this.listaVacia = err.error.message;
      console.log(err.error.message);
    });
  }
  static {
    this.ɵfac = function OficinaLeftSidebarComponent_Factory(t) {
      return new (t || OficinaLeftSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__.ProductoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: OficinaLeftSidebarComponent,
      selectors: [["app-oficina-left-sidebar"]],
      decls: 37,
      vars: 22,
      consts: [[3, "title", "breadcrumb"], [1, "section-b-space"], [1, "collection-wrapper"], [1, "container"], [1, "row"], [1, "col-lg-3"], [1, "collection-filter"], [1, "collection-filter-block"], [1, "collection-mobile-back", 3, "click"], [1, "filter-back"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "collection-filter-block", "slide-productos"], [3, "title"], [3, "min", "max"], [1, "collection-content", "col"], [1, "page-main-content"], [1, "col-sm-12"], [1, "col-xl-12"], [1, "filter-main-btn", 3, "click"], [1, "filter-btn", "btn", "btn-theme"], ["aria-hidden", "true", 1, "fa", "fa-filter"], ["id", "products", 1, "collection-product-wrapper"], [3, "setGrid", "setLayout", "product_list", "pageSize", "layoutView", "sortBy", "categoriaId"], [1, "product-wrapper-grid", 3, "ngClass"], ["class", "col-grid-box", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "col-sm-12 text-center section-b-space mt-5 no-found", 4, "ngIf"], [1, "d-flex", "justify-content-center", 3, "pageChange", "page", "pageSize", "collectionSize"], [1, "col-grid-box", 3, "ngClass"], [1, "product-box"], [3, "product", "cartModal", "loader", "onHowerChangeImage"], [1, "col-sm-12", "text-center", "section-b-space", "mt-5", "no-found"], ["src", "assets/images/empty-compare.png", 1, "img-fluid", "mb-4"], [1, "no-size"], [1, "btn", "btn-solid", 3, "routerLink"]],
      template: function OficinaLeftSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-breadcrumb", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function OficinaLeftSidebarComponent_Template_div_click_8_listener() {
            return ctx.toggleMobileSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Regresar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "app-product-box-vertical-slider", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "app-categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "app-price", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "div", 4)(21, "div", 16)(22, "div", 4)(23, "div", 17)(24, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function OficinaLeftSidebarComponent_Template_div_click_24_listener() {
            return ctx.toggleMobileSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, " Filtro ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 21)(29, "app-grid", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("setGrid", function OficinaLeftSidebarComponent_Template_app_grid_setGrid_29_listener($event) {
            return ctx.updateGridLayout($event);
          })("setLayout", function OficinaLeftSidebarComponent_Template_app_grid_setLayout_29_listener($event) {
            return ctx.updateLayoutView($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 23)(31, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, OficinaLeftSidebarComponent_div_32_Template, 3, 5, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "slice");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, OficinaLeftSidebarComponent_div_34_Template, 8, 2, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "ngb-pagination", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("pageChange", function OficinaLeftSidebarComponent_Template_ngb_pagination_pageChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.page, $event) || (ctx.page = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Oficina")("breadcrumb", "Oficina");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("openFilterbar", ctx.mobileSidebar);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Nuevos Productos");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("min", ctx.minPrice)("max", ctx.maxPrice);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product_list", ctx.product_list)("pageSize", ctx.pageSize)("layoutView", ctx.layoutView)("sortBy", ctx.sortBy)("categoriaId", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.layoutView);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](33, 18, ctx.product_list, (ctx.page - 1) * ctx.pageSize, (ctx.page - 1) * ctx.pageSize + ctx.pageSize));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.product_list.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("page", ctx.page);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSize", ctx.pageSize)("collectionSize", ctx.product_list == null ? null : ctx.product_list.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPagination, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _shared_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__.CategoriesComponent, _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__.ProductBoxOneComponent, _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_4__.ProductBoxVerticalSliderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _seccion_widgets_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__.GridComponent, _seccion_widgets_price_price_component__WEBPACK_IMPORTED_MODULE_6__.PriceComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.SlicePipe],
      styles: ["p[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n.no-size[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.slide-productos[_ngcontent-%COMP%] {\n  padding: 0 36px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9maWNpbmEtbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFBST1lFQ1RPJTIwQVJURVNBTklBUyUyMExVTUFSXFxjbGllbnRlLWZyb250ZW5kLWx1bWFyXFxzcmNcXGFwcFxcc2hvcFxcY2F0ZWdvcmlhXFxvZmljaW5hLWxlZnQtc2xpZGVyXFxvZmljaW5hLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSiIsImZpbGUiOiJvZmljaW5hLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLm5vLXNpemUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2xpZGUtcHJvZHVjdG9ze1xyXG4gICAgcGFkZGluZzogMCAzNnB4ICFpbXBvcnRhbnQ7XHJcbn0iLCJwIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLm5vLXNpemUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zbGlkZS1wcm9kdWN0b3Mge1xuICBwYWRkaW5nOiAwIDM2cHggIWltcG9ydGFudDtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9jYXRlZ29yaWEvb2ZpY2luYS1sZWZ0LXNsaWRlci9vZmljaW5hLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL1BST1lFQ1RPJTIwQVJURVNBTklBUyUyMExVTUFSL2NsaWVudGUtZnJvbnRlbmQtbHVtYXIvc3JjL2FwcC9zaG9wL2NhdGVnb3JpYS9vZmljaW5hLWxlZnQtc2xpZGVyL29maWNpbmEtbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtBQ0NKO0FEQ0EsZzdCQUFnN0IiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5uby1zaXplIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNsaWRlLXByb2R1Y3Rvc3tcclxuICAgIHBhZGRpbmc6IDAgMzZweCAhaW1wb3J0YW50O1xyXG59IiwicCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5uby1zaXplIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2xpZGUtcHJvZHVjdG9zIHtcbiAgcGFkZGluZzogMCAzNnB4ICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6292:
/*!**************************************************************************************!*\
  !*** ./src/app/shop/categoria/regalos-left-slider/regalos-left-sidebar.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegalosLeftSidebarComponent: () => (/* binding */ RegalosLeftSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/productos/producto.service */ 3916);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 8173);
/* harmony import */ var _shared_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/categories/categories.component */ 7487);
/* harmony import */ var _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/product/product-box-one/product-box-one.component */ 6646);
/* harmony import */ var _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/product/product-box-vertical-slider/product-box-vertical-slider.component */ 3093);
/* harmony import */ var _seccion_widgets_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../seccion/widgets/grid/grid.component */ 1386);
/* harmony import */ var _seccion_widgets_price_price_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../seccion/widgets/price/price.component */ 7832);











const _c0 = () => ["/home/lumar"];
function RegalosLeftSidebarComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-product-box-one", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r1.grid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product", product_r1)("cartModal", true)("loader", true)("onHowerChangeImage", true);
  }
}
function RegalosLeftSidebarComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\u00A1Lo siento! \u00A1\u00A1\u00A1No pudiste encontrar el producto que buscabas!!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Por favor verifique si ha escrito algo mal o intente buscar con otras palabras.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Seguir Comprando");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
  }
}
class RegalosLeftSidebarComponent {
  constructor(route, router, productoService) {
    this.route = route;
    this.router = router;
    this.productoService = productoService;
    this.grid = 'col-xl-3 col-md-6';
    this.layoutView = 'grid-view';
    this.all_products = [];
    this.products = [];
    this.brands = [];
    this.colors = [];
    this.size = [];
    this.minPrice = 0;
    this.maxPrice = 1200;
    this.tags = [];
    this.pageNo = 1;
    this.paginate = {}; // Pagination use only
    this.mobileSidebar = false;
    this.loader = true;
    this.finished = false; // boolean when end of data is reached
    this.addItemCount = 8;
    //Array para productos
    this.product_list = [];
    this.listaVacia = undefined;
    //tamaño de paginacion e inicio
    this.page = 1;
    this.pageSize = 20;
  }
  ngOnInit() {
    this.productoService.currentProductList.subscribe(products => {
      this.product_list = products;
    });
    this.listProductosRegalos();
  }
  // Change Grid Layout
  updateGridLayout(value) {
    this.grid = value;
  }
  // Change Layout View
  updateLayoutView(value) {
    this.layoutView = value;
    if (value == 'list-view') this.grid = 'col-lg-12';else this.grid = 'col-xl-3 col-md-6';
  }
  // Mobile sidebar
  toggleMobileSidebar() {
    this.mobileSidebar = !this.mobileSidebar;
  }
  onHover(menuItem) {
    if (window.innerWidth > 1200 && menuItem) {
      document.getElementById('unset').classList.add('sidebar-unset');
    } else {
      document.getElementById('unset').classList.remove('sidebar-unset');
    }
  }
  //Listar todos los productos de la categoira Regalos
  listProductosRegalos() {
    const categoriaId = 1; //Pertenece el id de Regalos en la base de datos
    this.productoService.getProductosCategoria(categoriaId).subscribe(data => {
      this.product_list = data.map(product => {
        return {
          ...product,
          img_url: product.imagen_producto && product.imagen_producto.length > 0 ? product.imagen_producto[0].imagen_url : 'path/to/default/image.jpg'
        };
      });
      this.listaVacia = undefined;
    }, err => {
      this.listaVacia = err.error.message;
      console.log(err.error.message);
    });
  }
  static {
    this.ɵfac = function RegalosLeftSidebarComponent_Factory(t) {
      return new (t || RegalosLeftSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__.ProductoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: RegalosLeftSidebarComponent,
      selectors: [["app-regalos-left-sidebar"]],
      decls: 37,
      vars: 22,
      consts: [[3, "title", "breadcrumb"], [1, "section-b-space"], [1, "collection-wrapper"], [1, "container"], [1, "row"], [1, "col-lg-3"], [1, "collection-filter"], [1, "collection-filter-block"], [1, "collection-mobile-back", 3, "click"], [1, "filter-back"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "collection-filter-block", "slide-productos"], [3, "title"], [3, "min", "max"], [1, "collection-content", "col"], [1, "page-main-content"], [1, "col-sm-12"], [1, "col-xl-12"], [1, "filter-main-btn", 3, "click"], [1, "filter-btn", "btn", "btn-theme"], ["aria-hidden", "true", 1, "fa", "fa-filter"], ["id", "products", 1, "collection-product-wrapper"], [3, "setGrid", "setLayout", "product_list", "pageSize", "layoutView", "sortBy", "categoriaId"], [1, "product-wrapper-grid", 3, "ngClass"], ["class", "col-grid-box", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "col-sm-12 text-center section-b-space mt-5 no-found", 4, "ngIf"], [1, "d-flex", "justify-content-center", 3, "pageChange", "page", "pageSize", "collectionSize"], [1, "col-grid-box", 3, "ngClass"], [1, "product-box"], [3, "product", "cartModal", "loader", "onHowerChangeImage"], [1, "col-sm-12", "text-center", "section-b-space", "mt-5", "no-found"], ["src", "assets/images/empty-compare.png", 1, "img-fluid", "mb-4"], [1, "no-size"], [1, "btn", "btn-solid", 3, "routerLink"]],
      template: function RegalosLeftSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-breadcrumb", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegalosLeftSidebarComponent_Template_div_click_8_listener() {
            return ctx.toggleMobileSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Regresar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "app-product-box-vertical-slider", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "app-categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "app-price", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "div", 4)(21, "div", 16)(22, "div", 4)(23, "div", 17)(24, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RegalosLeftSidebarComponent_Template_div_click_24_listener() {
            return ctx.toggleMobileSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, " Filtro ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 21)(29, "app-grid", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("setGrid", function RegalosLeftSidebarComponent_Template_app_grid_setGrid_29_listener($event) {
            return ctx.updateGridLayout($event);
          })("setLayout", function RegalosLeftSidebarComponent_Template_app_grid_setLayout_29_listener($event) {
            return ctx.updateLayoutView($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 23)(31, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, RegalosLeftSidebarComponent_div_32_Template, 3, 5, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "slice");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, RegalosLeftSidebarComponent_div_34_Template, 8, 2, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "ngb-pagination", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("pageChange", function RegalosLeftSidebarComponent_Template_ngb_pagination_pageChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.page, $event) || (ctx.page = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Regalos")("breadcrumb", "Regalos");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("openFilterbar", ctx.mobileSidebar);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Nuevos Productos");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("min", ctx.minPrice)("max", ctx.maxPrice);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product_list", ctx.product_list)("pageSize", ctx.pageSize)("layoutView", ctx.layoutView)("sortBy", ctx.sortBy)("categoriaId", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.layoutView);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](33, 18, ctx.product_list, (ctx.page - 1) * ctx.pageSize, (ctx.page - 1) * ctx.pageSize + ctx.pageSize));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.product_list.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("page", ctx.page);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSize", ctx.pageSize)("collectionSize", ctx.product_list == null ? null : ctx.product_list.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPagination, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _shared_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__.CategoriesComponent, _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__.ProductBoxOneComponent, _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_4__.ProductBoxVerticalSliderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _seccion_widgets_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__.GridComponent, _seccion_widgets_price_price_component__WEBPACK_IMPORTED_MODULE_6__.PriceComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.SlicePipe],
      styles: ["p[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n.no-size[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.slide-productos[_ngcontent-%COMP%] {\n  padding: 0 36px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2Fsb3MtbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFBST1lFQ1RPJTIwQVJURVNBTklBUyUyMExVTUFSXFxjbGllbnRlLWZyb250ZW5kLWx1bWFyXFxzcmNcXGFwcFxcc2hvcFxcY2F0ZWdvcmlhXFxyZWdhbG9zLWxlZnQtc2xpZGVyXFxyZWdhbG9zLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSiIsImZpbGUiOiJyZWdhbG9zLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLm5vLXNpemUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2xpZGUtcHJvZHVjdG9ze1xyXG4gICAgcGFkZGluZzogMCAzNnB4ICFpbXBvcnRhbnQ7XHJcbn0iLCJwIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLm5vLXNpemUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zbGlkZS1wcm9kdWN0b3Mge1xuICBwYWRkaW5nOiAwIDM2cHggIWltcG9ydGFudDtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9jYXRlZ29yaWEvcmVnYWxvcy1sZWZ0LXNsaWRlci9yZWdhbG9zLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL1BST1lFQ1RPJTIwQVJURVNBTklBUyUyMExVTUFSL2NsaWVudGUtZnJvbnRlbmQtbHVtYXIvc3JjL2FwcC9zaG9wL2NhdGVnb3JpYS9yZWdhbG9zLWxlZnQtc2xpZGVyL3JlZ2Fsb3MtbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtBQ0NKO0FEQ0EsZzdCQUFnN0IiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5uby1zaXplIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNsaWRlLXByb2R1Y3Rvc3tcclxuICAgIHBhZGRpbmc6IDAgMzZweCAhaW1wb3J0YW50O1xyXG59IiwicCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5uby1zaXplIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2xpZGUtcHJvZHVjdG9zIHtcbiAgcGFkZGluZzogMCAzNnB4ICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7340:
/*!**********************************************************************************************!*\
  !*** ./src/app/shop/categoria/ropa-hombre-left-slider/ropa-hombre-left-sidebar.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RopaHombreLeftSidebarComponent: () => (/* binding */ RopaHombreLeftSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/productos/producto.service */ 3916);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 8173);
/* harmony import */ var _shared_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/categories/categories.component */ 7487);
/* harmony import */ var _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/product/product-box-one/product-box-one.component */ 6646);
/* harmony import */ var _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/product/product-box-vertical-slider/product-box-vertical-slider.component */ 3093);
/* harmony import */ var _seccion_widgets_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../seccion/widgets/grid/grid.component */ 1386);
/* harmony import */ var _seccion_widgets_price_price_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../seccion/widgets/price/price.component */ 7832);











const _c0 = () => ["/home/lumar"];
function RopaHombreLeftSidebarComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-product-box-one", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r1.grid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product", product_r1)("cartModal", true)("loader", true)("onHowerChangeImage", true);
  }
}
function RopaHombreLeftSidebarComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\u00A1Lo siento! \u00A1\u00A1\u00A1No pudiste encontrar el producto que buscabas!!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Por favor verifique si ha escrito algo mal o intente buscar con otras palabras.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Seguir Comprando");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
  }
}
class RopaHombreLeftSidebarComponent {
  constructor(route, router, productoService) {
    this.route = route;
    this.router = router;
    this.productoService = productoService;
    this.grid = 'col-xl-3 col-md-6';
    this.layoutView = 'grid-view';
    this.all_products = [];
    this.products = [];
    this.brands = [];
    this.colors = [];
    this.size = [];
    this.minPrice = 0;
    this.maxPrice = 1200;
    this.tags = [];
    this.pageNo = 1;
    this.paginate = {}; // Pagination use only
    this.mobileSidebar = false;
    this.loader = true;
    this.finished = false; // boolean when end of data is reached
    this.addItemCount = 8;
    //Array para productos
    this.product_list = [];
    this.listaVacia = undefined;
    //tamaño de paginacion e inicio
    this.page = 1;
    this.pageSize = 20;
  }
  ngOnInit() {
    this.productoService.currentProductList.subscribe(products => {
      this.product_list = products;
    });
    this.listProductosRopaHombre();
  }
  // Change Grid Layout
  updateGridLayout(value) {
    this.grid = value;
  }
  // Change Layout View
  updateLayoutView(value) {
    this.layoutView = value;
    if (value == 'list-view') this.grid = 'col-lg-12';else this.grid = 'col-xl-3 col-md-6';
  }
  // Mobile sidebar
  toggleMobileSidebar() {
    this.mobileSidebar = !this.mobileSidebar;
  }
  onHover(menuItem) {
    if (window.innerWidth > 1200 && menuItem) {
      document.getElementById('unset').classList.add('sidebar-unset');
    } else {
      document.getElementById('unset').classList.remove('sidebar-unset');
    }
  }
  //Listar todos los productos de la categoria Ropa Hombre
  listProductosRopaHombre() {
    const categoriaId = 7; //Pertenece el id de Ropa Hombre en la base de datos
    this.productoService.getProductosCategoria(categoriaId).subscribe(data => {
      this.product_list = data.map(product => {
        return {
          ...product,
          img_url: product.imagen_producto && product.imagen_producto.length > 0 ? product.imagen_producto[0].imagen_url : 'path/to/default/image.jpg'
        };
      });
      this.listaVacia = undefined;
    }, err => {
      this.listaVacia = err.error.message;
      console.log(err.error.message);
    });
  }
  static {
    this.ɵfac = function RopaHombreLeftSidebarComponent_Factory(t) {
      return new (t || RopaHombreLeftSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__.ProductoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: RopaHombreLeftSidebarComponent,
      selectors: [["app-ropa-hombre-left-sidebar"]],
      decls: 37,
      vars: 22,
      consts: [[3, "title", "breadcrumb"], [1, "section-b-space"], [1, "collection-wrapper"], [1, "container"], [1, "row"], [1, "col-lg-3"], [1, "collection-filter"], [1, "collection-filter-block"], [1, "collection-mobile-back", 3, "click"], [1, "filter-back"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "collection-filter-block", "slide-productos"], [3, "title"], [3, "min", "max"], [1, "collection-content", "col"], [1, "page-main-content"], [1, "col-sm-12"], [1, "col-xl-12"], [1, "filter-main-btn", 3, "click"], [1, "filter-btn", "btn", "btn-theme"], ["aria-hidden", "true", 1, "fa", "fa-filter"], ["id", "products", 1, "collection-product-wrapper"], [3, "setGrid", "setLayout", "product_list", "pageSize", "layoutView", "sortBy", "categoriaId"], [1, "product-wrapper-grid", 3, "ngClass"], ["class", "col-grid-box", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "col-sm-12 text-center section-b-space mt-5 no-found", 4, "ngIf"], [1, "d-flex", "justify-content-center", 3, "pageChange", "page", "pageSize", "collectionSize"], [1, "col-grid-box", 3, "ngClass"], [1, "product-box"], [3, "product", "cartModal", "loader", "onHowerChangeImage"], [1, "col-sm-12", "text-center", "section-b-space", "mt-5", "no-found"], ["src", "assets/images/empty-compare.png", 1, "img-fluid", "mb-4"], [1, "no-size"], [1, "btn", "btn-solid", 3, "routerLink"]],
      template: function RopaHombreLeftSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-breadcrumb", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RopaHombreLeftSidebarComponent_Template_div_click_8_listener() {
            return ctx.toggleMobileSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Regresar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "app-product-box-vertical-slider", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "app-categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "app-price", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "div", 4)(21, "div", 16)(22, "div", 4)(23, "div", 17)(24, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RopaHombreLeftSidebarComponent_Template_div_click_24_listener() {
            return ctx.toggleMobileSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, " Filtro ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 21)(29, "app-grid", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("setGrid", function RopaHombreLeftSidebarComponent_Template_app_grid_setGrid_29_listener($event) {
            return ctx.updateGridLayout($event);
          })("setLayout", function RopaHombreLeftSidebarComponent_Template_app_grid_setLayout_29_listener($event) {
            return ctx.updateLayoutView($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 23)(31, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, RopaHombreLeftSidebarComponent_div_32_Template, 3, 5, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "slice");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, RopaHombreLeftSidebarComponent_div_34_Template, 8, 2, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "ngb-pagination", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("pageChange", function RopaHombreLeftSidebarComponent_Template_ngb_pagination_pageChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.page, $event) || (ctx.page = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Ropa para Hombre")("breadcrumb", "Ropa para Hombre");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("openFilterbar", ctx.mobileSidebar);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Nuevos Productos");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("min", ctx.minPrice)("max", ctx.maxPrice);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product_list", ctx.product_list)("pageSize", ctx.pageSize)("layoutView", ctx.layoutView)("sortBy", ctx.sortBy)("categoriaId", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.layoutView);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](33, 18, ctx.product_list, (ctx.page - 1) * ctx.pageSize, (ctx.page - 1) * ctx.pageSize + ctx.pageSize));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.product_list.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("page", ctx.page);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSize", ctx.pageSize)("collectionSize", ctx.product_list == null ? null : ctx.product_list.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPagination, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _shared_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__.CategoriesComponent, _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__.ProductBoxOneComponent, _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_4__.ProductBoxVerticalSliderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _seccion_widgets_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__.GridComponent, _seccion_widgets_price_price_component__WEBPACK_IMPORTED_MODULE_6__.PriceComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.SlicePipe],
      styles: ["p[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n.no-size[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.slide-productos[_ngcontent-%COMP%] {\n  padding: 0 36px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvcGEtaG9tYnJlLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxQUk9ZRUNUTyUyMEFSVEVTQU5JQVMlMjBMVU1BUlxcY2xpZW50ZS1mcm9udGVuZC1sdW1hclxcc3JjXFxhcHBcXHNob3BcXGNhdGVnb3JpYVxccm9wYS1ob21icmUtbGVmdC1zbGlkZXJcXHJvcGEtaG9tYnJlLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSiIsImZpbGUiOiJyb3BhLWhvbWJyZS1sZWZ0LXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5uby1zaXplIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNsaWRlLXByb2R1Y3Rvc3tcclxuICAgIHBhZGRpbmc6IDAgMzZweCAhaW1wb3J0YW50O1xyXG59IiwicCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5uby1zaXplIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2xpZGUtcHJvZHVjdG9zIHtcbiAgcGFkZGluZzogMCAzNnB4ICFpbXBvcnRhbnQ7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9jYXRlZ29yaWEvcm9wYS1ob21icmUtbGVmdC1zbGlkZXIvcm9wYS1ob21icmUtbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vUFJPWUVDVE8lMjBBUlRFU0FOSUFTJTIwTFVNQVIvY2xpZW50ZS1mcm9udGVuZC1sdW1hci9zcmMvYXBwL3Nob3AvY2F0ZWdvcmlhL3JvcGEtaG9tYnJlLWxlZnQtc2xpZGVyL3JvcGEtaG9tYnJlLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSjtBRENBLG84QkFBbzhCIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4ubm8tc2l6ZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zbGlkZS1wcm9kdWN0b3N7XHJcbiAgICBwYWRkaW5nOiAwIDM2cHggIWltcG9ydGFudDtcclxufSIsInAge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4ubm8tc2l6ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNsaWRlLXByb2R1Y3RvcyB7XG4gIHBhZGRpbmc6IDAgMzZweCAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7914:
/*!********************************************************************************************!*\
  !*** ./src/app/shop/categoria/ropa-mujer-left-slider/ropa-mujer-left-sidebar.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RopaMujerLeftSidebarComponent: () => (/* binding */ RopaMujerLeftSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/productos/producto.service */ 3916);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 8173);
/* harmony import */ var _shared_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/categories/categories.component */ 7487);
/* harmony import */ var _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/product/product-box-one/product-box-one.component */ 6646);
/* harmony import */ var _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/product/product-box-vertical-slider/product-box-vertical-slider.component */ 3093);
/* harmony import */ var _seccion_widgets_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../seccion/widgets/grid/grid.component */ 1386);
/* harmony import */ var _seccion_widgets_price_price_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../seccion/widgets/price/price.component */ 7832);











const _c0 = () => ["/home/lumar"];
function RopaMujerLeftSidebarComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-product-box-one", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r1.grid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product", product_r1)("cartModal", true)("loader", true)("onHowerChangeImage", true);
  }
}
function RopaMujerLeftSidebarComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\u00A1Lo siento! \u00A1\u00A1\u00A1No pudiste encontrar el producto que buscabas!!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Por favor verifique si ha escrito algo mal o intente buscar con otras palabras.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Seguir Comprando");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
  }
}
class RopaMujerLeftSidebarComponent {
  constructor(route, router, productoService) {
    this.route = route;
    this.router = router;
    this.productoService = productoService;
    this.grid = 'col-xl-3 col-md-6';
    this.layoutView = 'grid-view';
    this.all_products = [];
    this.products = [];
    this.brands = [];
    this.colors = [];
    this.size = [];
    this.minPrice = 0;
    this.maxPrice = 1200;
    this.tags = [];
    this.pageNo = 1;
    this.paginate = {}; // Pagination use only
    this.mobileSidebar = false;
    this.loader = true;
    this.finished = false; // boolean when end of data is reached
    this.addItemCount = 8;
    //Array para productos
    this.product_list = [];
    this.listaVacia = undefined;
    //tamaño de paginacion e inicio
    this.page = 1;
    this.pageSize = 20;
  }
  ngOnInit() {
    this.productoService.currentProductList.subscribe(products => {
      this.product_list = products;
    });
    this.listProductosRopaMujer();
  }
  // Change Grid Layout
  updateGridLayout(value) {
    this.grid = value;
  }
  // Change Layout View
  updateLayoutView(value) {
    this.layoutView = value;
    if (value == 'list-view') this.grid = 'col-lg-12';else this.grid = 'col-xl-3 col-md-6';
  }
  // Mobile sidebar
  toggleMobileSidebar() {
    this.mobileSidebar = !this.mobileSidebar;
  }
  onHover(menuItem) {
    if (window.innerWidth > 1200 && menuItem) {
      document.getElementById('unset').classList.add('sidebar-unset');
    } else {
      document.getElementById('unset').classList.remove('sidebar-unset');
    }
  }
  //Listar todos los productos de la categoria Ropa Mujer
  listProductosRopaMujer() {
    const categoriaId = 8; //Pertenece el id de Ropa Mujer en la base de datos
    this.productoService.getProductosCategoria(categoriaId).subscribe(data => {
      this.product_list = data.map(product => {
        return {
          ...product,
          img_url: product.imagen_producto && product.imagen_producto.length > 0 ? product.imagen_producto[0].imagen_url : 'path/to/default/image.jpg'
        };
      });
      this.listaVacia = undefined;
    }, err => {
      this.listaVacia = err.error.message;
      console.log(err.error.message);
    });
  }
  static {
    this.ɵfac = function RopaMujerLeftSidebarComponent_Factory(t) {
      return new (t || RopaMujerLeftSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__.ProductoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: RopaMujerLeftSidebarComponent,
      selectors: [["app-ropa-mujer-left-sidebar"]],
      decls: 37,
      vars: 22,
      consts: [[3, "title", "breadcrumb"], [1, "section-b-space"], [1, "collection-wrapper"], [1, "container"], [1, "row"], [1, "col-lg-3"], [1, "collection-filter"], [1, "collection-filter-block"], [1, "collection-mobile-back", 3, "click"], [1, "filter-back"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "collection-filter-block", "slide-productos"], [3, "title"], [3, "min", "max"], [1, "collection-content", "col"], [1, "page-main-content"], [1, "col-sm-12"], [1, "col-xl-12"], [1, "filter-main-btn", 3, "click"], [1, "filter-btn", "btn", "btn-theme"], ["aria-hidden", "true", 1, "fa", "fa-filter"], ["id", "products", 1, "collection-product-wrapper"], [3, "setGrid", "setLayout", "product_list", "pageSize", "layoutView", "sortBy", "categoriaId"], [1, "product-wrapper-grid", 3, "ngClass"], ["class", "col-grid-box", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "col-sm-12 text-center section-b-space mt-5 no-found", 4, "ngIf"], [1, "d-flex", "justify-content-center", 3, "pageChange", "page", "pageSize", "collectionSize"], [1, "col-grid-box", 3, "ngClass"], [1, "product-box"], [3, "product", "cartModal", "loader", "onHowerChangeImage"], [1, "col-sm-12", "text-center", "section-b-space", "mt-5", "no-found"], ["src", "assets/images/empty-compare.png", 1, "img-fluid", "mb-4"], [1, "no-size"], [1, "btn", "btn-solid", 3, "routerLink"]],
      template: function RopaMujerLeftSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-breadcrumb", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RopaMujerLeftSidebarComponent_Template_div_click_8_listener() {
            return ctx.toggleMobileSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Regresar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "app-product-box-vertical-slider", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "app-categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "app-price", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "div", 4)(21, "div", 16)(22, "div", 4)(23, "div", 17)(24, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RopaMujerLeftSidebarComponent_Template_div_click_24_listener() {
            return ctx.toggleMobileSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, " Filtro ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 21)(29, "app-grid", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("setGrid", function RopaMujerLeftSidebarComponent_Template_app_grid_setGrid_29_listener($event) {
            return ctx.updateGridLayout($event);
          })("setLayout", function RopaMujerLeftSidebarComponent_Template_app_grid_setLayout_29_listener($event) {
            return ctx.updateLayoutView($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 23)(31, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, RopaMujerLeftSidebarComponent_div_32_Template, 3, 5, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "slice");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, RopaMujerLeftSidebarComponent_div_34_Template, 8, 2, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "ngb-pagination", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("pageChange", function RopaMujerLeftSidebarComponent_Template_ngb_pagination_pageChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.page, $event) || (ctx.page = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Ropa para Mujer")("breadcrumb", "Ropa para Mujer");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("openFilterbar", ctx.mobileSidebar);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Nuevos Productos");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("min", ctx.minPrice)("max", ctx.maxPrice);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product_list", ctx.product_list)("pageSize", ctx.pageSize)("layoutView", ctx.layoutView)("sortBy", ctx.sortBy)("categoriaId", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.layoutView);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](33, 18, ctx.product_list, (ctx.page - 1) * ctx.pageSize, (ctx.page - 1) * ctx.pageSize + ctx.pageSize));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.product_list.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("page", ctx.page);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSize", ctx.pageSize)("collectionSize", ctx.product_list == null ? null : ctx.product_list.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPagination, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _shared_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__.CategoriesComponent, _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__.ProductBoxOneComponent, _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_4__.ProductBoxVerticalSliderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _seccion_widgets_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__.GridComponent, _seccion_widgets_price_price_component__WEBPACK_IMPORTED_MODULE_6__.PriceComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.SlicePipe],
      styles: ["p[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n.no-size[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.slide-productos[_ngcontent-%COMP%] {\n  padding: 0 36px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvcGEtbXVqZXItbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFBST1lFQ1RPJTIwQVJURVNBTklBUyUyMExVTUFSXFxjbGllbnRlLWZyb250ZW5kLWx1bWFyXFxzcmNcXGFwcFxcc2hvcFxcY2F0ZWdvcmlhXFxyb3BhLW11amVyLWxlZnQtc2xpZGVyXFxyb3BhLW11amVyLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSiIsImZpbGUiOiJyb3BhLW11amVyLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLm5vLXNpemUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2xpZGUtcHJvZHVjdG9ze1xyXG4gICAgcGFkZGluZzogMCAzNnB4ICFpbXBvcnRhbnQ7XHJcbn0iLCJwIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLm5vLXNpemUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zbGlkZS1wcm9kdWN0b3Mge1xuICBwYWRkaW5nOiAwIDM2cHggIWltcG9ydGFudDtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9jYXRlZ29yaWEvcm9wYS1tdWplci1sZWZ0LXNsaWRlci9yb3BhLW11amVyLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL1BST1lFQ1RPJTIwQVJURVNBTklBUyUyMExVTUFSL2NsaWVudGUtZnJvbnRlbmQtbHVtYXIvc3JjL2FwcC9zaG9wL2NhdGVnb3JpYS9yb3BhLW11amVyLWxlZnQtc2xpZGVyL3JvcGEtbXVqZXItbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtBQ0NKO0FEQ0EsZzhCQUFnOEIiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5uby1zaXplIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNsaWRlLXByb2R1Y3Rvc3tcclxuICAgIHBhZGRpbmc6IDAgMzZweCAhaW1wb3J0YW50O1xyXG59IiwicCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5uby1zaXplIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2xpZGUtcHJvZHVjdG9zIHtcbiAgcGFkZGluZzogMCAzNnB4ICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1823:
/*!*****************************************************!*\
  !*** ./src/app/shop/checkout/checkout.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckoutComponent: () => (/* binding */ CheckoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/productos/producto.service */ 3916);
/* harmony import */ var src_app_shared_services_orden_orden_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/orden/orden.service */ 277);
/* harmony import */ var src_app_shared_services_ubicacion_ubicacion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/ubicacion/ubicacion.service */ 397);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 8173);










function CheckoutComponent_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tipo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", tipo_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", tipo_r1.label, "");
  }
}
function CheckoutComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Es obligatorio seleccionar el tipo de identificaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CheckoutComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " N\u00FAmero de identificaci\u00F3n es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CheckoutComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " El n\u00FAmero de identificaci\u00F3n debe ser n\u00FAmerico. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CheckoutComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Los nombres son requeridos. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CheckoutComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " El nombre debe ser alfab\u00E9tico. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CheckoutComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Los apellidos son requeridos. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CheckoutComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " El nombre debe ser alfab\u00E9tico. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CheckoutComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " N\u00FAmero de celular es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CheckoutComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " N\u00FAmero de celular debe ser n\u00FAmerico. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CheckoutComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Correo electr\u00F3nico es obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CheckoutComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Correo electr\u00F3nico invalido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CheckoutComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Es obligatorio agregar un Pais ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CheckoutComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Es obligatorio agregar un Estado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CheckoutComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Es obligatorio agregar una ciudad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CheckoutComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " La direcci\u00F3n de residencia es requerida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CheckoutComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " M\u00E1ximo 50 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CheckoutComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " El codigo postal de la ciudad es obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function CheckoutComponent_ul_82_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", product_r2.prod_nombre, " \u00D7 ", product_r2.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 3, product_r2.prod_precio * product_r2.quantity), " ");
  }
}
function CheckoutComponent_ul_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CheckoutComponent_ul_82_li_1_Template, 5, 5, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.products);
  }
}
function CheckoutComponent_ul_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 38)(1, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " No hay productos en el carrito ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function CheckoutComponent_li_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Env\u00EDo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 41)(3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Env\u00EDo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Recogida local");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx_r2.checkoutForm.controls["ped_estado"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx_r2.checkoutForm.controls["ped_estado"]);
  }
}
function CheckoutComponent_div_99_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CheckoutComponent_div_99_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.procesarPago());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Realizar pedido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r2.checkoutForm.valid);
  }
}
function CheckoutComponent_div_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47)(1, "div", 48)(2, "div", 49)(3, "ul")(4, "li")(5, "div", 50)(6, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function CheckoutComponent_div_99_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx_r2.payment, $event) || (ctx_r2.payment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "ePayco ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Please send a check to Store Name, Store Street, Store dir_ciudad, Store dir_departamento / County, Store Postcode.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, CheckoutComponent_div_99_button_12_Template, 2, 1, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.payment);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", "ePayco");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.payment == "ePayco");
  }
}
class CheckoutComponent {
  constructor(fb, productoServices, ordenService, ubicacionService) {
    this.fb = fb;
    this.productoServices = productoServices;
    this.ordenService = ordenService;
    this.ubicacionService = ubicacionService;
    this.products = [];
    this.paises = [];
    this.departamentos = [];
    this.ciudades = [];
    this.payment = 'ePayco';
    this.epayco_public_key = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.epayco_public_key;
    this.urlFront = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.urlFront;
    this.tiposIdentificacion = [{
      value: 'PASAPORTE',
      label: 'Pasaporte'
    }, {
      value: 'CEDULA',
      label: 'Cedula de Ciudadania'
    }, {
      value: 'LICENCIA',
      label: 'Licencia de Conducir'
    }, {
      value: 'NIE',
      label: 'Número de Identidad de Extranjero (NIE)'
    }, {
      value: 'RUT',
      label: 'Registro Unico Tributario (RUT)'
    }, {
      value: 'RFC',
      label: 'Registro Federal de Contribuyentes (RFC)'
    }, {
      value: 'CURP',
      label: 'Clave Unica de Registro de Población (CURP)'
    }, {
      value: 'SSN',
      label: 'Número de Seguro Social (SSN)'
    }];
    this.checkoutForm = this.fb.group({
      cli_tipo_identificacion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      cli_identificacion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('[0-9]+')]],
      cli_nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      cli_apellido: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      cli_telefono: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('[0-9]+')]],
      cli_email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]],
      dir_direccion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(50)]],
      dir_pais: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      dir_ciudad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      dir_departamento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      dir_codigo_postal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      ped_estado: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
  }
  ngOnInit() {
    this.cartSubscription = this.productoServices.cartItems.subscribe(cartItems => {
      this.products = cartItems;
    });
  }
  get getTotal() {
    this.totalItems$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(this.productoServices.getCartTotalAmount());
    return this.totalItems$;
  }
  // Método para guardar datos del cliente y dirección
  storeOrderData() {
    // Obtener los datos del formulario
    const clienteDto = {
      cli_tipo_identificacion: this.checkoutForm.get('cli_tipo_identificacion').value,
      cli_identificacion: this.checkoutForm.get('cli_identificacion').value,
      cli_nombre: this.checkoutForm.get('cli_nombre').value,
      cli_apellido: this.checkoutForm.get('cli_apellido').value,
      cli_telefono: this.checkoutForm.get('cli_telefono').value,
      cli_email: this.checkoutForm.get('cli_email').value,
      //Enviar el ped_estado por DtoCliente
      ped_estado: this.checkoutForm.get('ped_estado').value
    };
    console.log(clienteDto);
    const direccionDto = {
      dir_direccion: this.checkoutForm.get('dir_direccion').value,
      dir_pais: this.checkoutForm.get('dir_pais').value,
      dir_ciudad: this.checkoutForm.get('dir_ciudad').value,
      dir_departamento: this.checkoutForm.get('dir_departamento').value,
      dir_codigo_postal: this.checkoutForm.get('dir_codigo_postal').value
    };
    const detalleDtos = this.products.map(product => ({
      det_pedido_cantidad: product.quantity,
      det_precio_unitario: product.prod_precio,
      det_talla_producto: product.selectedSize || null,
      prod_id: product.prod_id
    }));
    // Almacenar en localStorage
    localStorage.setItem('orderData', JSON.stringify({
      clienteDto,
      direccionDto,
      detalleDtos
    }));
  }
  procesarPago() {
    // Configurar los atributos y abrir el checkout
    const handler = window.ePayco.checkout.configure({
      key: this.epayco_public_key,
      test: false // Cambia a false para producción
    });
    //Obtener el valor del carrito
    const total = this.productoServices.getCartTotalAmount();
    //Informaion del cliente para enviar a ePayco
    const direccion = this.checkoutForm.get('dir_direccion').value;
    const nombres = this.checkoutForm.get('cli_nombre').value;
    const apellidos = this.checkoutForm.get('cli_apellido').value;
    const telefono = this.checkoutForm.get('cli_telefono').value;
    const nombre_completo = nombres + ' ' + apellidos;
    const data = {
      // Configuración de la transacción
      name: "Carrito Artesanias Lumar",
      currency: "cop",
      amount: total,
      country: "co",
      lang: "es",
      external: "false",
      response: `${this.urlFront}shop/checkout/success`,
      name_billing: nombre_completo,
      address_billing: direccion,
      type_doc_billing: "cc",
      mobilephone_billing: telefono
    };
    this.storeOrderData();
    handler.open(data);
  }
  static {
    this.ɵfac = function CheckoutComponent_Factory(t) {
      return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_1__.ProductoService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_orden_orden_service__WEBPACK_IMPORTED_MODULE_2__.OrdenService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_ubicacion_ubicacion_service__WEBPACK_IMPORTED_MODULE_3__.UbicacionService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: CheckoutComponent,
      selectors: [["app-checkout"]],
      decls: 100,
      vars: 45,
      consts: [[3, "title", "breadcrumb"], [1, "section-b-space"], [1, "container"], [1, "checkout-page"], [1, "checkout-form"], [1, "row"], [1, "col-lg-6", "col-sm-12", "col-xs-12"], [1, "checkout-title"], [1, "row", "check-out"], [1, "form-group", "col-md-6", "col-sm-6", "col-xs-12"], [1, "field-label"], ["name", "cli_tipo_identificacion", 3, "formControl"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text text-danger", 4, "ngIf"], ["type", "text", "name", "cli_identificacion", "value", "", "placeholder", "", "autocomplete", "off", 3, "formControl"], ["type", "text", "name", "cli_nombre", "value", "", "placeholder", "", "autocomplete", "off", 3, "formControl"], ["type", "text", "name", "cli_apellido", "value", "", "placeholder", "", "autocomplete", "off", 3, "formControl"], ["type", "text", "name", "cli_telefono", "value", "", "placeholder", "", "autocomplete", "off", 3, "formControl"], ["type", "text", "name", "cli_email", "value", "", "placeholder", "", "autocomplete", "off", 3, "formControl"], [1, "form-group", "col-md-12", "col-sm-6", "col-xs-12"], ["type", "text", "name", "dir_pais", "value", "", "placeholder", "", "autocomplete", "off", 3, "formControl"], ["type", "text", "name", "dir_departamento", "value", "", "placeholder", "", "autocomplete", "off", 3, "formControl"], ["type", "text", "name", "dir_ciudad", "value", "", "placeholder", "", "autocomplete", "off", 3, "formControl"], [1, "form-group", "col-md-12", "col-sm-12", "col-xs-12"], ["type", "text", "name", "dir_direccion", "value", "", "placeholder", "", "autocomplete", "off", 3, "formControl"], ["type", "text", "name", "dir_codigo_postal", "value", "", "placeholder", "", "autocomplete", "off", 3, "formControl"], [1, "checkout-details"], [1, "order-box"], [1, "title-box"], ["class", "qty", 4, "ngIf"], [1, "sub-total"], [1, "count"], [4, "ngIf"], [1, "total"], ["class", "payment-box", 4, "ngIf"], [3, "value"], [1, "text", "text-danger"], [1, "qty"], [4, "ngFor", "ngForOf"], [1, "empty-checkout"], [1, "shipping"], [1, "shopping-option"], ["type", "radio", "name", "ped_estado", "checked", "checked", "id", "free-shipping", "value", "Pendiente de Envio", 3, "formControl"], ["for", "free-shipping"], ["type", "radio", "name", "ped_estado", "id", "local-pickup", "value", "Recogida local", 3, "formControl"], ["for", "local-pickup"], [1, "payment-box"], [1, "upper-box"], [1, "payment-options"], [1, "radio-option"], ["type", "radio", "name", "payment-group", "id", "payment-2", 3, "ngModelChange", "ngModel", "value"], ["for", "payment-2"], [1, "small-text"], [1, "text-end"], ["type", "submit", "class", "btn-solid btn", 3, "disabled", "click", 4, "ngIf"], ["type", "submit", 1, "btn-solid", "btn", 3, "click", "disabled"]],
      template: function CheckoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-breadcrumb", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "form")(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Detalles de facturaci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Tipo de Identificaci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "select", 11)(16, "option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Selecciona Tipo de Identificaci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, CheckoutComponent_option_18_Template, 2, 2, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, CheckoutComponent_div_19_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 9)(21, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "N\u00FAmero de Identificaci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, CheckoutComponent_div_24_Template, 2, 0, "div", 14)(25, CheckoutComponent_div_25_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 9)(27, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Nombres");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, CheckoutComponent_div_30_Template, 2, 0, "div", 14)(31, CheckoutComponent_div_31_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 9)(33, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Apellidos ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, CheckoutComponent_div_36_Template, 2, 0, "div", 14)(37, CheckoutComponent_div_37_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 9)(39, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "N\u00FAmero de celular");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, CheckoutComponent_div_42_Template, 2, 0, "div", 14)(43, CheckoutComponent_div_43_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 9)(45, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Correo electr\u00F3nico");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, CheckoutComponent_div_48_Template, 2, 0, "div", 14)(49, CheckoutComponent_div_49_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 20)(51, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Pa\u00EDs");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, CheckoutComponent_div_54_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 20)(56, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Departamento/Estado");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](58, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, CheckoutComponent_div_59_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 20)(61, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Ciudad");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](64, CheckoutComponent_div_64_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 24)(66, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Direcci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](68, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](69, CheckoutComponent_div_69_Template, 2, 0, "div", 14)(70, CheckoutComponent_div_70_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 20)(72, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "C\u00F3digo Postal");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](74, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](75, CheckoutComponent_div_75_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 6)(77, "div", 27)(78, "div", 28)(79, "div", 29)(80, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "Producto");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](82, CheckoutComponent_ul_82_Template, 2, 1, "ul", 30)(83, CheckoutComponent_ul_83_Template, 3, 0, "ul", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "ul", 31)(85, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, " Subtotal ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](89, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](90, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](91, CheckoutComponent_li_91_Template, 11, 2, "li", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "ul", 34)(93, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, "Total ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](97, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](98, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](99, CheckoutComponent_div_99_Template, 13, 3, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", "Verificar")("breadcrumb", "Verificar");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.checkoutForm.controls["cli_tipo_identificacion"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.tiposIdentificacion);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.checkoutForm.controls.cli_tipo_identificacion.touched && (ctx.checkoutForm.controls.cli_tipo_identificacion.errors == null ? null : ctx.checkoutForm.controls.cli_tipo_identificacion.errors.required));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.checkoutForm.controls["cli_identificacion"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.checkoutForm.controls.cli_identificacion.touched && (ctx.checkoutForm.controls.cli_identificacion.errors == null ? null : ctx.checkoutForm.controls.cli_identificacion.errors.required));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.checkoutForm.controls.cli_identificacion.touched && (ctx.checkoutForm.controls.cli_identificacion.errors == null ? null : ctx.checkoutForm.controls.cli_identificacion.errors.pattern));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.checkoutForm.controls["cli_nombre"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.checkoutForm.controls.cli_nombre.touched && (ctx.checkoutForm.controls.cli_nombre.errors == null ? null : ctx.checkoutForm.controls.cli_nombre.errors.required));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.checkoutForm.controls.cli_nombre.touched && (ctx.checkoutForm.controls.cli_nombre.errors == null ? null : ctx.checkoutForm.controls.cli_nombre.errors.pattern));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.checkoutForm.controls["cli_apellido"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.checkoutForm.controls.cli_apellido.touched && (ctx.checkoutForm.controls.cli_apellido.errors == null ? null : ctx.checkoutForm.controls.cli_apellido.errors.required));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.checkoutForm.controls.cli_apellido.touched && (ctx.checkoutForm.controls.cli_apellido.errors == null ? null : ctx.checkoutForm.controls.cli_apellido.errors.pattern));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.checkoutForm.controls["cli_telefono"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.checkoutForm.controls.cli_telefono.touched && (ctx.checkoutForm.controls.cli_telefono.errors == null ? null : ctx.checkoutForm.controls.cli_telefono.errors.required));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.checkoutForm.controls.cli_telefono.touched && (ctx.checkoutForm.controls.cli_telefono.errors == null ? null : ctx.checkoutForm.controls.cli_telefono.errors.pattern));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.checkoutForm.controls["cli_email"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.checkoutForm.controls.cli_email.touched && (ctx.checkoutForm.controls.cli_email.errors == null ? null : ctx.checkoutForm.controls.cli_email.errors.required));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.checkoutForm.controls.cli_email.touched && (ctx.checkoutForm.controls.cli_email.errors == null ? null : ctx.checkoutForm.controls.cli_email.errors.cli_email));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.checkoutForm.controls["dir_pais"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.checkoutForm.controls.dir_pais.touched && (ctx.checkoutForm.controls.dir_pais.errors == null ? null : ctx.checkoutForm.controls.dir_pais.errors.required));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.checkoutForm.controls["dir_departamento"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.checkoutForm.controls.dir_departamento.touched && (ctx.checkoutForm.controls.dir_departamento.errors == null ? null : ctx.checkoutForm.controls.dir_departamento.errors.required));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.checkoutForm.controls["dir_ciudad"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.checkoutForm.controls.dir_ciudad.touched && (ctx.checkoutForm.controls.dir_ciudad.errors == null ? null : ctx.checkoutForm.controls.dir_ciudad.errors.required));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.checkoutForm.controls["dir_direccion"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.checkoutForm.controls.dir_direccion.touched && (ctx.checkoutForm.controls.dir_direccion.errors == null ? null : ctx.checkoutForm.controls.dir_direccion.errors.required));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.checkoutForm.controls.dir_direccion.touched && (ctx.checkoutForm.controls.dir_direccion.errors == null ? null : ctx.checkoutForm.controls.dir_direccion.errors.maxlength));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.checkoutForm.controls["dir_codigo_postal"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.checkoutForm.controls.dir_codigo_postal.touched && (ctx.checkoutForm.controls.dir_codigo_postal.errors == null ? null : ctx.checkoutForm.controls.dir_codigo_postal.errors.required));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.products.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.products.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](90, 39, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](89, 37, ctx.getTotal)));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.products.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](98, 43, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](97, 41, ctx.getTotal)));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.products.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CurrencyPipe],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja291dC5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0tBQW9LIiwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 3198:
/*!************************************************************!*\
  !*** ./src/app/shop/checkout/success/success.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuccessComponent: () => (/* binding */ SuccessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/productos/producto.service */ 3916);
/* harmony import */ var src_app_shared_services_orden_orden_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/orden/orden.service */ 277);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 8173);







function SuccessComponent_app_breadcrumb_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-breadcrumb", 13);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "404 page")("breadcrumb", "404 page");
  }
}
function SuccessComponent_section_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 14)(1, "div", 3)(2, "div", 4)(3, "div", 15)(4, "div", 16)(5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "404");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "page not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "back to home");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/home/fashion");
  }
}
function SuccessComponent_i_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 17);
  }
}
function SuccessComponent_i_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 18);
  }
}
function SuccessComponent_i_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 19);
  }
}
function SuccessComponent_h2_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Gracias por tu compra");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SuccessComponent_h2_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Tu compra no se ha completado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SuccessComponent_h2_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Compra Cancelada");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SuccessComponent_h2_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Compra Pendiente");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SuccessComponent_p_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Se ha recibido el pago. El pedido se realiz\u00F3 correctamente.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SuccessComponent_p_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Su transacci\u00F3n ha sido rechazada. Verifica tu medio de pago o montos insuficientes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SuccessComponent_p_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Su transacci\u00F3n ha sido cancelada. \u00C1nimate a comprar tu carrito.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SuccessComponent_p_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Su transacci\u00F3n se encuentra pendiente de confirmaci\u00F3n. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SuccessComponent_p_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "N\u00FAmero de Pedido: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.infoPay.receiptOfPayment);
  }
}
class SuccessComponent {
  constructor(productoServices, ordenService, http, route) {
    this.productoServices = productoServices;
    this.ordenService = ordenService;
    this.http = http;
    this.route = route;
    this.orderDetails = {};
    this.infoPay = {};
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const refPayco = params['ref_payco'];
      if (refPayco) {
        this.http.get(`https://secure.epayco.co/validation/v1/reference/${refPayco}`).subscribe(data => {
          if (data.success) {
            const infoPay = {
              date: data.data.x_transaction_date,
              response: data.data.x_response,
              reference: data.data.x_id_invoice,
              reason: data.data.x_response_reason_text,
              receiptOfPayment: data.data.x_transaction_id,
              bank: data.data.x_bank_name,
              auth: data.data.x_approval_code,
              total: `${data.data.x_amount} ${data.data.x_currency_code}`
            };
            this.infoPay = infoPay;
            // Obtener los datos almacenados en localStorage
            const orderData = JSON.parse(localStorage.getItem('orderData') || '{}');
            // Crear los DTOs de pago y método de pago
            const pagosDto = {
              pag_amount: parseFloat(infoPay.total.split(' ')[0]),
              pag_divisa: infoPay.total.split(' ')[1],
              pag_estado: infoPay.response,
              pag_transaccion: infoPay.reference
            };
            const metodoPagoDto = {
              met_nombre: infoPay.bank
            };
            const pedidoDto = {
              ped_precio_total: pagosDto.pag_amount,
              ped_numero_orden: infoPay.receiptOfPayment,
              ped_estado: orderData.clienteDto.ped_estado
            };
            // Construir el objeto final para enviar al backend
            const requestBody = {
              pedidoDto,
              metodoPagoDto,
              pagosDto,
              clienteDto: orderData.clienteDto,
              direccionDto: orderData.direccionDto,
              detalleDtos: orderData.detalleDtos
            };
            if (infoPay.response === 'Rechazada' || infoPay.response === 'Cancelada' || infoPay.response === '') {
              console.log('Compra rechazada');
            } else {
              // Enviar la solicitud al backend
              this.ordenService.crearPedido(requestBody).subscribe(response => {
                console.log(response);
                // Limpiar los datos almacenados solo si el pago es "Aceptada"
                this.ordenService.clearOrderData();
                this.productoServices.clearCart(); // Limpia el carrito
              }, error => {
                console.error('Error al crear el pedido', error);
              });
            }
          } else {
            console.error('Error en la transacción:', data.data.x_response_reason_text);
          }
        });
      }
    });
  }
  ngAfterViewInit() {}
  static {
    this.ɵfac = function SuccessComponent_Factory(t) {
      return new (t || SuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__.ProductoService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_orden_orden_service__WEBPACK_IMPORTED_MODULE_1__.OrdenService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: SuccessComponent,
      selectors: [["app-success"]],
      decls: 25,
      vars: 16,
      consts: [[3, "title", "breadcrumb", 4, "ngIf"], ["class", "p-0", 4, "ngIf"], [1, "section-b-space", "light-layout"], [1, "container"], [1, "row"], [1, "col-md-12"], [1, "success-text"], ["class", "fa fa-check-circle", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-times-circle", "aria-hidden", "true", "style", "color: red;", 4, "ngIf"], ["class", "fa fa-times-circle-o", "aria-hidden", "true", "style", "color: orangered;", 4, "ngIf"], [4, "ngIf"], [2, "font-weight", "bold"], [1, "btn", "btn-solid", 3, "routerLink"], [3, "title", "breadcrumb"], [1, "p-0"], [1, "col-sm-12"], [1, "error-section"], ["aria-hidden", "true", 1, "fa", "fa-check-circle"], ["aria-hidden", "true", 1, "fa", "fa-times-circle", 2, "color", "red"], ["aria-hidden", "true", 1, "fa", "fa-times-circle-o", 2, "color", "orangered"]],
      template: function SuccessComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SuccessComponent_app_breadcrumb_0_Template, 1, 2, "app-breadcrumb", 0)(1, SuccessComponent_section_1_Template, 11, 1, "section", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "section", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SuccessComponent_i_7_Template, 1, 0, "i", 7)(8, SuccessComponent_i_8_Template, 1, 0, "i", 8)(9, SuccessComponent_i_9_Template, 1, 0, "i", 9)(10, SuccessComponent_h2_10_Template, 2, 0, "h2", 10)(11, SuccessComponent_h2_11_Template, 2, 0, "h2", 10)(12, SuccessComponent_h2_12_Template, 2, 0, "h2", 10)(13, SuccessComponent_h2_13_Template, 2, 0, "h2", 10)(14, SuccessComponent_p_14_Template, 2, 0, "p", 10)(15, SuccessComponent_p_15_Template, 2, 0, "p", 10)(16, SuccessComponent_p_16_Template, 2, 0, "p", 10)(17, SuccessComponent_p_17_Template, 2, 0, "p", 10)(18, SuccessComponent_p_18_Template, 4, 1, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Fecha: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Regresar al Inicio");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.orderDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.orderDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.infoPay.response === "Aceptada");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.infoPay.response === "Rechazada");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.infoPay.response === "Cancelada");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.infoPay.response === "Aceptada");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.infoPay.response === "Rechazada");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.infoPay.response === "Cancelada");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.infoPay.response === "Pendiente");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.infoPay.response === "Aceptada");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.infoPay.response === "Rechazada");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.infoPay.response === "Cancelada");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.infoPay.response === "Pendiente");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.infoPay.response === "Aceptada");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.infoPay.date);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/home/lumar");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWNjZXNzLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9jaGVja291dC9zdWNjZXNzL3N1Y2Nlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9LQUFvSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5776:
/*!**********************************************************************************!*\
  !*** ./src/app/shop/flitro-productos/search-product/search-product.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchProductComponent: () => (/* binding */ SearchProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/product.service */ 5085);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/product/product-box-one/product-box-one.component */ 6646);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);






const _c0 = () => ["/home/lumar"];
function SearchProductComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-product-box-one", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.grid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("product", product_r1)("cartModal", true)("loader", true)("onHowerChangeImage", true);
  }
}
function SearchProductComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u00A1Lo siento! \u00A1\u00A1\u00A1No hay productos con esa busqueda!!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Seguir Comprando");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
  }
}
class SearchProductComponent {
  constructor(productService) {
    this.productService = productService;
    this.product_list = [];
    //tamaño de paginacion e inicio
    this.page = 1;
    this.pageSize = 10;
    this.layoutView = 'grid-view';
    this.grid = 'col-xl-2 col-md-6';
  }
  ngOnInit() {
    // Suscribirse al servicio para recibir actualizaciones de la lista de productos
    this.productService.productList$.subscribe(products => {
      this.product_list = products;
    });
  }
  static {
    this.ɵfac = function SearchProductComponent_Factory(t) {
      return new (t || SearchProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SearchProductComponent,
      selectors: [["app-search-product"]],
      decls: 16,
      vars: 10,
      consts: [[1, "section-b-space"], [1, "collection-wrapper"], [1, "container"], [1, "row"], [1, "collection-content", "col"], [1, "page-main-content"], [1, "col-sm-12"], ["id", "products", 1, "collection-product-wrapper"], [1, "product-wrapper-grid", 3, "ngClass"], ["class", "col-grid-box", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "col-sm-12 text-center section-b-space mt-5 no-found", 4, "ngIf"], [1, "d-flex", "justify-content-center", 3, "pageChange", "page", "pageSize", "collectionSize"], [1, "col-grid-box", 3, "ngClass"], [1, "product-box"], [3, "product", "cartModal", "loader", "onHowerChangeImage"], [1, "col-sm-12", "text-center", "section-b-space", "mt-5", "no-found"], ["src", "assets/images/empty-compare.png", 1, "img-fluid", "mb-4"], [1, "no-productos"], [1, "btn", "btn-solid", 3, "routerLink"]],
      template: function SearchProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 3)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, SearchProductComponent_div_11_Template, 3, 5, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "slice");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, SearchProductComponent_div_13_Template, 6, 2, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ngb-pagination", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("pageChange", function SearchProductComponent_Template_ngb_pagination_pageChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.page, $event) || (ctx.page = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.layoutView);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](12, 6, ctx.product_list, (ctx.page - 1) * ctx.pageSize, (ctx.page - 1) * ctx.pageSize + ctx.pageSize));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.product_list.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("page", ctx.page);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageSize", ctx.pageSize)("collectionSize", ctx.product_list == null ? null : ctx.product_list.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbPagination, _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_1__.ProductBoxOneComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.SlicePipe],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtcHJvZHVjdC5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9mbGl0cm8tcHJvZHVjdG9zL3NlYXJjaC1wcm9kdWN0L3NlYXJjaC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0S0FBNEsiLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 9005:
/*!*********************************************************************!*\
  !*** ./src/app/shop/product/three-column/three-column.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThreeColumnComponent: () => (/* binding */ ThreeColumnComponent)
/* harmony export */ });
/* harmony import */ var C_Users_SAMIRJR11_Documents_PROYECTO_ARTESANIAS_LUMAR_cliente_frontend_lumar_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _shared_data_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/data/slider */ 3966);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap */ 3527);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/productos/producto.service */ 3916);
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/product.service */ 5085);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var src_app_shared_services_comentarios_comentarios_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/comentarios/comentarios.service */ 1837);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-owl-carousel-o */ 6821);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 8173);
/* harmony import */ var _shared_components_modal_cart_modal_cart_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/modal/cart-modal/cart-modal.component */ 8637);
/* harmony import */ var _widgets_countdown_countdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../widgets/countdown/countdown.component */ 1815);


















const _c0 = ["cartModal"];
function ThreeColumnComponent_ng_container_8_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ThreeColumnComponent_ng_container_8_ng_template_1_Template_img_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2);
      const imagen_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r3.openModal(ctx_r3.urlApi + imagen_r3.imagen_url));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const imagen_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r3.urlApi + imagen_r3.imagen_url, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
  }
}
function ThreeColumnComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ThreeColumnComponent_ng_container_8_ng_template_1_Template, 2, 1, "ng-template", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", i_r5);
  }
}
function ThreeColumnComponent_ng_container_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 62)(1, "div", 63)(2, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ThreeColumnComponent_ng_container_13_ng_template_1_Template_img_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6);
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      const owlCar_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](owlCar_r8.to(ctx_r3.activeSlide = i_r7.toString()));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    const imagen_r10 = ctx_r8.$implicit;
    const i_r7 = ctx_r8.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", i_r7 == ctx_r3.activeSlide);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r3.urlApi + imagen_r10.imagen_url, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
  }
}
function ThreeColumnComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ThreeColumnComponent_ng_container_13_ng_template_1_Template, 3, 3, "ng-template", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("id", i_r7);
  }
}
function ThreeColumnComponent_del_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, ctx_r3.precio_oferta_producto));
  }
}
function ThreeColumnComponent_h5_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h5", 65)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "En Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function ThreeColumnComponent_h5_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "h5", 65)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Agotado");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function ThreeColumnComponent_div_76_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li")(1, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ThreeColumnComponent_div_76_li_4_Template_a_click_1_listener() {
      const talla_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r3.selectSize(talla_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const talla_r12 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r3.selectedSize == talla_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 3, talla_r12));
  }
}
function ThreeColumnComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 66)(1, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Talla:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, ThreeColumnComponent_div_76_li_4_Template, 4, 5, "li", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r3.Size(ctx_r3.producto_inventario));
  }
}
function ThreeColumnComponent_ng_template_99_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 72)(1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const comentario_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", comentario_r13.com_nombre_cliente, " ", comentario_r13.com_apellido_cliente, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("( ", comentario_r13.com_fecha_comentario, " )");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](comentario_r13.com_comentario);
  }
}
function ThreeColumnComponent_ng_template_99_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ThreeColumnComponent_ng_template_99_ng_container_1_div_1_Template, 9, 4, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r3.comentarios_producto);
  }
}
function ThreeColumnComponent_ng_template_99_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "No hay comentarios para este producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ThreeColumnComponent_ng_template_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ThreeColumnComponent_ng_template_99_ng_container_1_Template, 2, 1, "ng-container", 70)(2, ThreeColumnComponent_ng_template_99_ng_template_2_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const noComentarios_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](3);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r3.comentarios_producto && ctx_r3.comentarios_producto.length > 0)("ngIfElse", noComentarios_r14);
  }
}
function ThreeColumnComponent_ng_template_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r3.descripcion_producto);
  }
}
function ThreeColumnComponent_ng_template_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "form", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function ThreeColumnComponent_ng_template_107_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r15);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r3.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 8)(2, "div", 75)(3, "label", 76)(4, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, " Nombre:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 75)(9, "label", 79)(10, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, " Apellidos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 81)(15, "label", 82)(16, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, " Comentario:");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "textarea", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 81)(21, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "Enviar Comentario");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r3.comentarioForm);
  }
}
class ThreeColumnComponent {
  constructor(route, router, productoService, productService, fb, toastrService, comentarioServices) {
    this.route = route;
    this.router = router;
    this.productoService = productoService;
    this.productService = productService;
    this.fb = fb;
    this.toastrService = toastrService;
    this.comentarioServices = comentarioServices;
    //public product: Product = {};
    this.counter = 1;
    this.activeSlide = 0;
    this.active = 1;
    //Array para las imagenes del producto
    this.producto_imagenes = [];
    //Array para el inventario
    this.producto_inventario = [];
    this.urlApi = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiBaseUrl;
    //Array para el producto
    this.product_list = [];
    this.listaVacia = undefined;
    this.cartModal = false; // Default False
    this.ProductDetailsMainSliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_1__.ProductDetailsMainSlider;
    this.ProductDetailsThumbConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_1__.ProductDetailsThumbSlider;
    this.comentarioForm = this.fb.group({
      com_nombre_cliente: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      com_apellido_cliente: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      com_comentario: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      productoId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]] // Valor inicial
    });
  }
  ngAfterViewInit() {
    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
      this.modal = new bootstrap__WEBPACK_IMPORTED_MODULE_3__.Modal(modalElement);
    }
  }
  ngOnInit() {
    this.id_producto = parseInt(localStorage.getItem('prod_id') || 'null', 10);
    this.getOneProducto();
    //Asignar el id del producto
    if (this.id_producto) {
      // Uso de patchValue para asignar id_producto al control productoId
      this.comentarioForm.patchValue({
        productoId: this.id_producto
      });
    }
    this.listarComentariosProducto();
  }
  //Modal Imagen
  openModal(imageUrl) {
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageUrl;
    if (this.modal) {
      this.modal.show();
    }
  }
  closeModal() {
    if (this.modal) {
      this.modal.hide();
    }
  }
  // Obtener un producto, solicitud a la API
  getOneProducto() {
    if (this.id_producto) {
      this.productoService.getOneProducto(this.id_producto).subscribe(data => {
        this.product_list = {
          ...data,
          img_url: data.imagenes && data.imagenes.length > 0 ? data.imagenes[0].imagen_url : 'path/to/default/image.jpg'
        };
        //Asignando el producto a las variables
        this.nombre_producto = data.prod_nombre;
        this.descripcion_producto = data.prod_descripcion;
        this.precio_producto = data.prod_precio;
        this.precio_oferta_producto = data.prod_precio_oferta;
        this.producto_imagenes = data.imagenes;
        this.producto_inventario = data.inventario;
        this.listaVacia = undefined;
      }, err => {
        this.listaVacia = err.error.message;
        console.log(err.error.message);
      });
    }
  }
  // Obtener la cantidad disponible basada en la talla seleccionada
  getStockDisponible() {
    if (this.selectedSize) {
      const sizeInventory = this.producto_inventario.find(item => item.inv_talla === this.selectedSize);
      return sizeInventory ? sizeInventory.inv_cantidad_disponible : 0;
    } else {
      return this.producto_inventario.reduce((total, item) => total + item.inv_cantidad_disponible, 0);
    }
  }
  // Método para verificar si existe al menos una talla en el inventario
  hasAvailableSize() {
    return this.producto_inventario.some(item => item.inv_talla && item.inv_talla.trim() !== '');
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
  // Método para obtener la lista de tallas
  Size(variants) {
    return [...new Set(variants.map(v => v.inv_talla))];
  }
  selectSize(size) {
    this.selectedSize = size;
    console.log(this.selectSize);
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
  // Buy Now
  buyNow(product, quantity, selectedSize) {
    var _this2 = this;
    return (0,C_Users_SAMIRJR11_Documents_PROYECTO_ARTESANIAS_LUMAR_cliente_frontend_lumar_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Verifica si el producto tiene tallas disponibles
      const hasSizes = product.inventario && product.inventario.some(inv => inv.inv_talla && inv.inv_talla.trim() !== '');
      // Si el producto tiene tallas disponibles, verifica que se haya seleccionado una talla
      if (hasSizes && !selectedSize) {
        // Muestra un mensaje de error si no se ha seleccionado una talla
        _this2.toastrService.warning('Por favor, selecciona una talla antes de continuar con la compra.', 'Talla Requerida', {
          timeOut: 3000,
          positionClass: 'toast-top-center'
        });
        return;
      }
      // Realizar la lógica para filtrar productos relacionados
      yield _this2.productoService.getProductosCategoria(product.categoriaId).subscribe(response => {
        _this2.product_list = response.filter(items => items.prod_id !== product.prod_id);
      });
      // Añadir el producto al carrito con la talla seleccionada (si corresponde)
      const status = yield _this2.productoService.addToCart(product, quantity, selectedSize);
      // Redirigir a la página de checkout si el producto se añade al carrito correctamente
      if (status) {
        _this2.router.navigate(['/shop/checkout']);
      }
    })();
  }
  // Add to Wishlist
  addToWishlist(product) {
    this.productService.addToWishlist(product);
  }
  //Solicitud Listar Comentarios Del Producto
  listarComentariosProducto() {
    this.comentarioServices.getComentarioProductos(this.id_producto).subscribe(data => {
      this.comentarios_producto = data;
      this.listaVaciaComentario = undefined;
    }, err => {
      this.listaVaciaComentario = 'No hay comentarios para este producto';
    });
  }
  //Solicitud Crear Comentario
  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.comentarioForm.invalid) {
      this.toastrService.error('Por favor, complete todos los campos requeridos.', 'Error', {
        timeOut: 3000,
        positionClass: 'toast-top-center'
      });
    }
    if (this.comentarioForm.valid) {
      const formData = this.comentarioForm.value;
      this.comentarioServices.createComentarioProducto(formData).subscribe(data => {
        this.toastrService.success(data.message, 'Éxito', {
          timeOut: 3000,
          positionClass: 'toast-top-center'
        });
        // Reiniciar los inputs
        this.comentarioForm.reset();
        //Cargar los nuevos Comentarios
        this.listarComentariosProducto();
        //Mostrar la lista de comentarios en el Nav
        this.active = 1;
        this.id_producto = parseInt(localStorage.getItem('prod_id') || 'null', 10);
        //Asignar el id del producto
        if (this.id_producto) {
          // Uso de patchValue para asignar id_producto al control productoId
          this.comentarioForm.patchValue({
            productoId: this.id_producto
          });
        }
      }, error => {
        const errorMessage = error.error?.message || 'Error al crear el producto';
        this.toastrService.error(errorMessage, 'Error', {
          timeOut: 3000,
          positionClass: 'toast-top-center'
        });
        console.error(error);
      });
    }
  }
  static {
    this.ɵfac = function ThreeColumnComponent_Factory(t) {
      return new (t || ThreeColumnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_4__.ProductoService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_services_product_service__WEBPACK_IMPORTED_MODULE_5__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_comentarios_comentarios_service__WEBPACK_IMPORTED_MODULE_6__.ComentariosService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: ThreeColumnComponent,
      selectors: [["app-three-column"]],
      viewQuery: function ThreeColumnComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.CartModal = _t.first);
        }
      },
      decls: 111,
      vars: 29,
      consts: [["owlCar", ""], ["nav", "ngbNav"], ["cartModal", ""], ["noComentarios", ""], [3, "title", "breadcrumb"], [1, "section-b-space"], [1, "collection-wrapper"], [1, "container"], [1, "row"], [1, "col-lg-4"], [1, "product-slick", 3, "options"], [4, "ngFor", "ngForOf"], [1, "col-12"], [1, "slider-nav"], ["id", "imageModal", "tabindex", "-1", "aria-labelledby", "imageModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body"], ["id", "modalImage", "src", "", 1, "img-fluid", "w-100", "img-hover"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "product-right", "product-description-box"], [1, "border-product"], [1, "product-title"], [1, "single-product-tables", "border-product", "detail-section"], [1, "large-text"], [1, "large-text-stock"], [1, "payment-card-bottom"], ["src", "assets/images/icon/visa.png", "alt", ""], ["src", "assets/images/icon/mastercard.png", "alt", ""], ["src", "assets/images/icon/american-express.png", "alt", ""], [1, "border-product", "rtl-right-text"], [1, "product-right", "product-form-box"], [4, "ngIf"], [1, "product-description", "border-product"], ["class", "avalibility", 4, "ngIf"], [1, "qty-box"], [1, "input-group"], [1, "input-group-prepend"], ["type", "button", "data-type", "minus", 1, "btn", "quantity-left-minus", 3, "click"], [1, "ti-angle-left"], ["type", "text", "name", "quantity", "disabled", "", 1, "form-control", "input-number", 3, "value"], ["type", "button", "data-type", "plus", 1, "btn", "quantity-right-plus", 3, "click"], [1, "ti-angle-right"], ["class", "size-box", 4, "ngIf"], [1, "product-buttons"], [1, "btn", "btn-solid", "boton", 3, "click"], [1, "btn", "btn-solid", 3, "click"], ["for", "name"], ["type", "text", "id", "name", "placeholder", "Ingresa un cup\u00F3n", "required", "", 1, "form-control"], ["href", "javascrip:void(0)", 1, "btn", "btn-solid", 2, "margin-top", "20px"], [1, "tab-product", "m-0", "section-b-space"], [1, "row", "section-b-space"], [1, "col-sm-12", "col-lg-12"], ["ngbNav", "", 1, "nav-tabs", "comment-section", 3, "activeIdChange", "activeId"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "mt-2", 3, "ngbNavOutlet"], [3, "product"], ["carouselSlide", "", 3, "id"], [1, "img-fluid", "img-pointer", 3, "click", "src"], [1, "owl-thumb"], [1, "img-container"], [3, "click", "src"], [1, "avalibility"], [1, "size-box"], [3, "active", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 3, "click"], [1, ""], [4, "ngIf", "ngIfElse"], ["class", "media-body", 4, "ngFor", "ngForOf"], [1, "media-body"], [1, "ti-user"], [1, "theme-form", 3, "ngSubmit", "formGroup"], [1, "col-md-6"], ["for", "nombre"], [1, "obligatorio"], ["type", "text", "id", "nombre", "formControlName", "com_nombre_cliente", "placeholder", "Ingresa tu nombre", 1, "form-control"], ["for", "apellidos"], ["type", "text", "id", "apellidos", "formControlName", "com_apellido_cliente", "placeholder", "Ingresa tu apellido", 1, "form-control"], [1, "col-md-12"], ["for", "comentario"], ["id", "comentario", "formControlName", "com_comentario", "placeholder", "Escribe tu comentario aqu\u00ED", "rows", "6", 1, "form-control"], ["type", "submit", 1, "btn", "btn-solid"]],
      template: function ThreeColumnComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-breadcrumb", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "section", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8)(5, "div", 9)(6, "owl-carousel-o", 10, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, ThreeColumnComponent_ng_container_8_Template, 2, 1, "ng-container", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 8)(10, "div", 12)(11, "div", 13)(12, "owl-carousel-o", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, ThreeColumnComponent_ng_container_13_Template, 2, 1, "ng-container", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 14)(15, "div", 15)(16, "div", 16)(17, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "img", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 19)(20, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ThreeColumnComponent_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.closeModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "Cerrar");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 9)(23, "div", 21)(24, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](26, "titlecase");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div", 22)(28, "h4", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "Detalles del producto:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "div", 24)(33, "table")(34, "tbody")(35, "tr")(36, "td", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "Cantidad Disponible:");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "td", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "div", 22)(41, "h6", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "100% PAGO SEGURO");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "div", 27)(44, "ul")(45, "li")(46, "a");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](47, "img", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "li")(49, "a");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](50, "img", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "li")(52, "a");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](53, "img", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](55, "app-countdown");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "div", 9)(57, "div", 32)(58, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](60, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](61, ThreeColumnComponent_del_61_Template, 3, 3, "del", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](63, ThreeColumnComponent_h5_63_Template, 3, 0, "h5", 35)(64, ThreeColumnComponent_h5_64_Template, 3, 0, "h5", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "h6", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](66, "Cantidad");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "div", 36)(68, "div", 37)(69, "span", 38)(70, "button", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ThreeColumnComponent_Template_button_click_70_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.decrement());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](71, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](72, "input", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "span", 38)(74, "button", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ThreeColumnComponent_Template_button_click_74_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.increment());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](75, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](76, ThreeColumnComponent_div_76_Template, 5, 1, "div", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "div", 45)(78, "a", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ThreeColumnComponent_Template_a_click_78_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.addToCart(ctx.product_list, ctx.counter, ctx.selectedSize));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](79, "Agregar al carrito");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](80, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "a", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ThreeColumnComponent_Template_a_click_81_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.buyNow(ctx.product_list, ctx.counter, ctx.selectedSize));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](82, "Comprar Ahora");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](83, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "div", 32)(85, "div")(86, "h3", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](87, "Cup\u00F3n de Descuento");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](88, "input", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](89, "a", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](90, "Aplicar Cup\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](91, "section", 51)(92, "div", 52)(93, "div", 53)(94, "ul", 54, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("activeIdChange", function ThreeColumnComponent_Template_ul_activeIdChange_94_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx.active, $event) || (ctx.active = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](96, "li", 55)(97, "a", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](98, "Comentarios");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](99, ThreeColumnComponent_ng_template_99_Template, 4, 2, "ng-template", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](100, "li", 55)(101, "a", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](102, "Descripci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](103, ThreeColumnComponent_ng_template_103_Template, 2, 1, "ng-template", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "li", 55)(105, "a", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](106, "Escribir Comentario");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](107, ThreeColumnComponent_ng_template_107_Template, 23, 1, "ng-template", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](108, "div", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](109, "app-cart-modal", 59, 2);
        }
        if (rf & 2) {
          const nav_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](95);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", ctx.nombre_producto)("breadcrumb", "Producto");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx.ProductDetailsMainSliderConfig);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.producto_imagenes);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx.ProductDetailsThumbConfig);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.producto_imagenes);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](26, 25, ctx.nombre_producto));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.descripcion_producto);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", ctx.getStockDisponible(), " en stock");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](60, 27, ctx.precio_producto), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.precio_producto < ctx.precio_oferta_producto);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.counter <= ctx.getStockDisponible());
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.counter > ctx.getStockDisponible());
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx.counter);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.hasAvailableSize());
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("disabled", ctx.counter > ctx.getStockDisponible());
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("disabled", ctx.counter > ctx.getStockDisponible());
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("activeId", ctx.active);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngbNavItem", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngbNavItem", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngbNavItem", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngbNavOutlet", nav_r16);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("product", ctx.product_list);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbNavItemRole, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbNavLinkBase, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbNavOutlet, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_16__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_16__.CarouselSlideDirective, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbComponent, _shared_components_modal_cart_modal_cart_modal_component__WEBPACK_IMPORTED_MODULE_8__.CartModalComponent, _widgets_countdown_countdown_component__WEBPACK_IMPORTED_MODULE_9__.CountdownComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.CurrencyPipe],
      styles: ["@charset \"UTF-8\";\n.img-pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.img-hover[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n  \n\n}\n\n.img-hover[_ngcontent-%COMP%]:hover {\n  transform: scale(1.3);\n  \n\n  \n\n}\n\n.img-container[_ngcontent-%COMP%] {\n  width: 100%;\n  \n\n  height: 200px;\n  \n\n  overflow: hidden;\n}\n\n.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 30px;\n  width: 80%;\n  height: 100%;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n}\n\n.large-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  padding-right: 40px;\n}\n\n.large-text-stock[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.name-comment[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n}\n\n.obligatorio[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxQUk9ZRUNUTyUyMEFSVEVTQU5JQVMlMjBMVU1BUlxcY2xpZW50ZS1mcm9udGVuZC1sdW1hclxcc3JjXFxhcHBcXHNob3BcXHByb2R1Y3RcXHRocmVlLWNvbHVtblxcdGhyZWUtY29sdW1uLmNvbXBvbmVudC5zY3NzIiwidGhyZWUtY29sdW1uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGVBQUE7QURFSjs7QUNDQTtFQUNJLCtCQUFBO0VBQ0EseUNBQUE7QURFSjs7QUNDQTtFQUNJLHFCQUFBO0VBQ0EsZ0RBQUE7RUFDQSw0R0FBQTtBREVKOztBQ0NBO0VBQ0ksV0FBQTtFQUNBLHNDQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QURFSjs7QUNDQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QURFSjs7QUNDQTtFQUNJLDBCQUFBO0FERUo7O0FDRUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QURDSjs7QUNDQTtFQUNJLGVBQUE7QURFSjs7QUNHQTtFQUNJLDBCQUFBO0FEQUo7O0FDS0E7RUFDSSxVQUFBO0FERkoiLCJmaWxlIjoidGhyZWUtY29sdW1uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmltZy1wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW1nLWhvdmVyIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgLyogU3Vhdml6YSBsYSB0cmFuc2ljacOzbiBkZWwgbW92aW1pZW50byAqL1xufVxuXG4uaW1nLWhvdmVyOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xuICAvKiBFc2NhbGEgbGEgaW1hZ2VuIGFsIDExMCUgYWwgcGFzYXIgZWwgY3Vyc29yICovXG4gIC8qIFB1ZWRlcyB1c2FyIG90cmFzIHRyYW5zZm9ybWFjaW9uZXMsIGNvbW8gdHJhbnNsYXRlWCwgdHJhbnNsYXRlWSwgZXRjLiwgc2kgcHJlZmllcmVzIHVuIGVmZWN0byBkaWZlcmVudGUgKi9cbn1cblxuLmltZy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgLyogTyB1biB0YW1hw7FvIGVzcGVjw61maWNvIGNvbW8gMzAwcHggKi9cbiAgaGVpZ2h0OiAyMDBweDtcbiAgLyogQWp1c3RhIHNlZ8O6biBsbyBxdWUgbmVjZXNpdGVzICovXG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pbWctY29udGFpbmVyIGltZyB7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICB3aWR0aDogODAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbnAge1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmxhcmdlLXRleHQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG5cbi5sYXJnZS10ZXh0LXN0b2NrIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4ubmFtZS1jb21tZW50IHtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5vYmxpZ2F0b3JpbyB7XG4gIGNvbG9yOiByZWQ7XG59IiwiLmltZy1wb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmltZy1ob3ZlciB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG4gICAgLyogU3Vhdml6YSBsYSB0cmFuc2ljacOzbiBkZWwgbW92aW1pZW50byAqL1xyXG59XHJcblxyXG4uaW1nLWhvdmVyOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxuICAgIC8qIEVzY2FsYSBsYSBpbWFnZW4gYWwgMTEwJSBhbCBwYXNhciBlbCBjdXJzb3IgKi9cclxuICAgIC8qIFB1ZWRlcyB1c2FyIG90cmFzIHRyYW5zZm9ybWFjaW9uZXMsIGNvbW8gdHJhbnNsYXRlWCwgdHJhbnNsYXRlWSwgZXRjLiwgc2kgcHJlZmllcmVzIHVuIGVmZWN0byBkaWZlcmVudGUgKi9cclxufVxyXG5cclxuLmltZy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBPIHVuIHRhbWHDsW8gZXNwZWPDrWZpY28gY29tbyAzMDBweCAqL1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIC8qIEFqdXN0YSBzZWfDum4gbG8gcXVlIG5lY2VzaXRlcyAqL1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmltZy1jb250YWluZXIgaW1nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLy9UYW1hw7FvIHRkXHJcbi5sYXJnZS10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbn1cclxuLmxhcmdlLXRleHQtc3RvY2t7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcblxyXG4vL0VzdGlsb3MgYSBsYSBsaXN0YSBkZSBjb21lbnRhcmlvc1xyXG4ubmFtZS1jb21tZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLy9Fc3RpbG8gYSBzcGFuIGNhbXBvIG9ibGlnYXRvcmlvXHJcbi5vYmxpZ2F0b3JpbyB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uLy4uLy4uL1BST1lFQ1RPJTIwQVJURVNBTklBUyUyMExVTUFSL2NsaWVudGUtZnJvbnRlbmQtbHVtYXIvc3JjL2FwcC9zaG9wL3Byb2R1Y3QvdGhyZWUtY29sdW1uL3RocmVlLWNvbHVtbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9wcm9kdWN0L3RocmVlLWNvbHVtbi90aHJlZS1jb2x1bW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksZUFBQTtBREVKOztBQ0NBO0VBQ0ksK0JBQUE7RUFDQSx5Q0FBQTtBREVKOztBQ0NBO0VBQ0kscUJBQUE7RUFDQSxnREFBQTtFQUNBLDRHQUFBO0FERUo7O0FDQ0E7RUFDSSxXQUFBO0VBQ0Esc0NBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtBREVKOztBQ0NBO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBREVKOztBQ0NBO0VBQ0ksMEJBQUE7QURFSjs7QUNFQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBRENKOztBQ0NBO0VBQ0ksZUFBQTtBREVKOztBQ0dBO0VBQ0ksMEJBQUE7QURBSjs7QUNLQTtFQUNJLFVBQUE7QURGSjtBQ0NBLHc0R0FBdzRHIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmltZy1wb2ludGVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW1nLWhvdmVyIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbiAgLyogU3Vhdml6YSBsYSB0cmFuc2ljacODwrNuIGRlbCBtb3ZpbWllbnRvICovXG59XG5cbi5pbWctaG92ZXI6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gIC8qIEVzY2FsYSBsYSBpbWFnZW4gYWwgMTEwJSBhbCBwYXNhciBlbCBjdXJzb3IgKi9cbiAgLyogUHVlZGVzIHVzYXIgb3RyYXMgdHJhbnNmb3JtYWNpb25lcywgY29tbyB0cmFuc2xhdGVYLCB0cmFuc2xhdGVZLCBldGMuLCBzaSBwcmVmaWVyZXMgdW4gZWZlY3RvIGRpZmVyZW50ZSAqL1xufVxuXG4uaW1nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBPIHVuIHRhbWHDg8KxbyBlc3BlY8ODwq1maWNvIGNvbW8gMzAwcHggKi9cbiAgaGVpZ2h0OiAyMDBweDtcbiAgLyogQWp1c3RhIHNlZ8ODwrpuIGxvIHF1ZSBuZWNlc2l0ZXMgKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmltZy1jb250YWluZXIgaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xufVxuXG4ubGFyZ2UtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cblxuLmxhcmdlLXRleHQtc3RvY2sge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5uYW1lLWNvbW1lbnQge1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cblxuLm9ibGlnYXRvcmlvIHtcbiAgY29sb3I6IHJlZDtcbn0iLCIuaW1nLXBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaW1nLWhvdmVyIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbiAgICAvKiBTdWF2aXphIGxhIHRyYW5zaWNpw4PCs24gZGVsIG1vdmltaWVudG8gKi9cclxufVxyXG5cclxuLmltZy1ob3Zlcjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgICAvKiBFc2NhbGEgbGEgaW1hZ2VuIGFsIDExMCUgYWwgcGFzYXIgZWwgY3Vyc29yICovXHJcbiAgICAvKiBQdWVkZXMgdXNhciBvdHJhcyB0cmFuc2Zvcm1hY2lvbmVzLCBjb21vIHRyYW5zbGF0ZVgsIHRyYW5zbGF0ZVksIGV0Yy4sIHNpIHByZWZpZXJlcyB1biBlZmVjdG8gZGlmZXJlbnRlICovXHJcbn1cclxuXHJcbi5pbWctY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyogTyB1biB0YW1hw4PCsW8gZXNwZWPDg8KtZmljbyBjb21vIDMwMHB4ICovXHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgLyogQWp1c3RhIHNlZ8ODwrpuIGxvIHF1ZSBuZWNlc2l0ZXMgKi9cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5pbWctY29udGFpbmVyIGltZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vVGFtYcODwrFvIHRkXHJcbi5sYXJnZS10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbn1cclxuLmxhcmdlLXRleHQtc3RvY2t7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcblxyXG4vL0VzdGlsb3MgYSBsYSBsaXN0YSBkZSBjb21lbnRhcmlvc1xyXG4ubmFtZS1jb21tZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLy9Fc3RpbG8gYSBzcGFuIGNhbXBvIG9ibGlnYXRvcmlvXHJcbi5vYmxpZ2F0b3JpbyB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1815:
/*!***********************************************************************!*\
  !*** ./src/app/shop/product/widgets/countdown/countdown.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CountdownComponent: () => (/* binding */ CountdownComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class CountdownComponent {
  constructor() {
    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }
  ngOnInit() {
    // Inicializa el contador
    this.startCountdown();
    // Actualiza cada segundo
    this.intervalId = window.setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  // Método para iniciar el contador con base en la fecha y hora actual hasta la medianoche
  startCountdown() {
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0); // La siguiente medianoche
    const timeLeft = midnight.getTime() - now.getTime(); // Diferencia entre ahora y la medianoche
    this.calculateTimeLeft(timeLeft);
  }
  // Método para actualizar el contador
  updateCountdown() {
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0); // Próxima medianoche
    const timeLeft = midnight.getTime() - now.getTime(); // Diferencia entre ahora y medianoche
    if (timeLeft <= 0) {
      this.startCountdown(); // Reinicia el contador para el nuevo día
    } else {
      this.calculateTimeLeft(timeLeft); // Actualiza la cuenta regresiva
    }
  }
  // Método para calcular el tiempo restante y asignarlo a días, horas, minutos, segundos
  calculateTimeLeft(timeLeft) {
    this.days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); // Aunque será siempre 0 porque es el mismo día
    this.hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    this.minutes = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60));
    this.seconds = Math.floor(timeLeft % (1000 * 60) / 1000);
  }
  static {
    this.ɵfac = function CountdownComponent_Factory(t) {
      return new (t || CountdownComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CountdownComponent,
      selectors: [["app-countdown"]],
      decls: 30,
      vars: 4,
      consts: [[1, "product-title"], [1, "timer"], ["id", "demo"], [1, "timer-num"], [1, "padding-l"], [1, "timer-cal"]],
      template: function CountdownComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tiempo de Promoci\u00F3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "p", 2)(4, "span")(5, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Days");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span")(12, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Hrs");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span")(19, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, ":");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Min");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span")(26, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Sec");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.days);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hours);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.minutes);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.seconds);
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3VudGRvd24uY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9wcm9kdWN0L3dpZGdldHMvY291bnRkb3duL2NvdW50ZG93bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 6807:
/*!***********************************************************************************!*\
  !*** ./src/app/shop/product/widgets/related-product/related-product.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RelatedProductComponent: () => (/* binding */ RelatedProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/services/product.service */ 5085);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/product/product-box-one/product-box-one.component */ 6646);




function RelatedProductComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-product-box-one", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("product", product_r1)("currency", ctx_r1.productService == null ? null : ctx_r1.productService.Currency)("cartModal", true);
  }
}
class RelatedProductComponent {
  constructor(productService) {
    this.productService = productService;
    this.products = [];
    // this.productService.getProducts.subscribe(response => 
    //   this.products = response.filter(item => item.type == this.type)
    //);
  }
  ngOnInit() {}
  static {
    this.ɵfac = function RelatedProductComponent_Factory(t) {
      return new (t || RelatedProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: RelatedProductComponent,
      selectors: [["app-related-product"]],
      inputs: {
        type: "type"
      },
      decls: 9,
      vars: 5,
      consts: [[1, "section-b-space"], [1, "container"], [1, "row"], [1, "col-12", "product-related"], [1, "row", "search-product"], ["class", "col-xl-2 col-md-4 col-sm-6", 4, "ngFor", "ngForOf"], [1, "col-xl-2", "col-md-4", "col-sm-6"], [1, "product-box"], [3, "product", "currency", "cartModal"]],
      template: function RelatedProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Related Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, RelatedProductComponent_div_7_Template, 3, 3, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "slice");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](8, 1, ctx.products, 0, 6));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_1__.ProductBoxOneComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.SlicePipe],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWxhdGVkLXByb2R1Y3QuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9wcm9kdWN0L3dpZGdldHMvcmVsYXRlZC1wcm9kdWN0L3JlbGF0ZWQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0xBQWdMIiwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 8341:
/*!*********************************************************************!*\
  !*** ./src/app/shop/product/widgets/services/services.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServicesComponent: () => (/* binding */ ServicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class ServicesComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function ServicesComponent_Factory(t) {
      return new (t || ServicesComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServicesComponent,
      selectors: [["app-services"]],
      decls: 53,
      vars: 0,
      consts: [[1, "product-service"], [1, "media"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 -117 679.99892 679"], ["d", "m12.347656 378.382812h37.390625c4.371094 37.714844 36.316407 66.164063 74.277344 66.164063 37.96875 0 69.90625-28.449219 74.28125-66.164063h241.789063c4.382812 37.714844 36.316406 66.164063 74.277343 66.164063 37.96875 0 69.902344-28.449219 74.285157-66.164063h78.890624c6.882813 0 12.460938-5.578124 12.460938-12.460937v-352.957031c0-6.882813-5.578125-12.464844-12.460938-12.464844h-432.476562c-6.875 0-12.457031 5.582031-12.457031 12.464844v69.914062h-105.570313c-4.074218.011719-7.890625 2.007813-10.21875 5.363282l-68.171875 97.582031-26.667969 37.390625-9.722656 13.835937c-1.457031 2.082031-2.2421872 4.558594-2.24999975 7.101563v121.398437c-.09765625 3.34375 1.15624975 6.589844 3.47656275 9.003907 2.320312 2.417968 5.519531 3.796874 8.867187 3.828124zm111.417969 37.386719c-27.527344 0-49.851563-22.320312-49.851563-49.847656 0-27.535156 22.324219-49.855469 49.851563-49.855469 27.535156 0 49.855469 22.320313 49.855469 49.855469 0 27.632813-22.21875 50.132813-49.855469 50.472656zm390.347656 0c-27.53125 0-49.855469-22.320312-49.855469-49.847656 0-27.535156 22.324219-49.855469 49.855469-49.855469 27.539063 0 49.855469 22.320313 49.855469 49.855469.003906 27.632813-22.21875 50.132813-49.855469 50.472656zm140.710938-390.34375v223.34375h-338.375c-6.882813 0-12.464844 5.578125-12.464844 12.460938 0 6.882812 5.582031 12.464843 12.464844 12.464843h338.375v79.761719h-66.421875c-4.382813-37.710937-36.320313-66.15625-74.289063-66.15625-37.960937 0-69.898437 28.445313-74.277343 66.15625h-192.308594v-271.324219h89.980468c6.882813 0 12.464844-5.582031 12.464844-12.464843 0-6.882813-5.582031-12.464844-12.464844-12.464844h-89.980468v-31.777344zm-531.304688 82.382813h99.703125v245.648437h-24.925781c-4.375-37.710937-36.3125-66.15625-74.28125-66.15625-37.960937 0-69.90625 28.445313-74.277344 66.15625h-24.929687v-105.316406l3.738281-5.359375h152.054687c6.882813 0 12.460938-5.574219 12.460938-12.457031v-92.226563c0-6.882812-5.578125-12.464844-12.460938-12.464844h-69.796874zm-30.160156 43h74.777344v67.296875h-122.265625zm0 0", "fill", "#ff4c3b"], [1, "media-body"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "id", "Capa_1", "x", "0px", "y", "0px", "viewBox", "0 0 480 480", 0, "xml", "space", "preserve", "width", "512px", "height", "512px", 2, "enable-background", "new 0 0 480 480"], ["d", "M472,432h-24V280c-0.003-4.418-3.588-7.997-8.006-7.994c-2.607,0.002-5.05,1.274-6.546,3.41l-112,160     c-2.532,3.621-1.649,8.609,1.972,11.14c1.343,0.939,2.941,1.443,4.58,1.444h104v24c0,4.418,3.582,8,8,8s8-3.582,8-8v-24h24     c4.418,0,8-3.582,8-8S476.418,432,472,432z M432,432h-88.64L432,305.376V432z", "fill", "#ff4c3b"], ["d", "M328,464h-94.712l88.056-103.688c0.2-0.238,0.387-0.486,0.56-0.744c16.566-24.518,11.048-57.713-12.56-75.552     c-28.705-20.625-68.695-14.074-89.319,14.631C212.204,309.532,207.998,322.597,208,336c0,4.418,3.582,8,8,8s8-3.582,8-8     c-0.003-26.51,21.486-48.002,47.995-48.005c10.048-0.001,19.843,3.151,28.005,9.013c16.537,12.671,20.388,36.007,8.8,53.32     l-98.896,116.496c-2.859,3.369-2.445,8.417,0.924,11.276c1.445,1.226,3.277,1.899,5.172,1.9h112c4.418,0,8-3.582,8-8     S332.418,464,328,464z", "fill", "#ff4c3b"], ["d", "M216.176,424.152c0.167-4.415-3.278-8.129-7.693-8.296c-0.001,0-0.002,0-0.003,0     C104.11,411.982,20.341,328.363,16.28,224H48c4.418,0,8-3.582,8-8s-3.582-8-8-8H16.28C20.283,103.821,103.82,20.287,208,16.288     V40c0,4.418,3.582,8,8,8s8-3.582,8-8V16.288c102.754,3.974,185.686,85.34,191.616,188l-31.2-31.2     c-3.178-3.07-8.242-2.982-11.312,0.196c-2.994,3.1-2.994,8.015,0,11.116l44.656,44.656c0.841,1.018,1.925,1.807,3.152,2.296     c0.313,0.094,0.631,0.172,0.952,0.232c0.549,0.198,1.117,0.335,1.696,0.408c0.08,0,0.152,0,0.232,0c0.08,0,0.152,0,0.224,0     c0.609-0.046,1.211-0.164,1.792-0.352c0.329-0.04,0.655-0.101,0.976-0.184c1.083-0.385,2.069-1.002,2.888-1.808l45.264-45.248     c3.069-3.178,2.982-8.242-0.196-11.312c-3.1-2.994-8.015-2.994-11.116,0l-31.976,31.952     C425.933,90.37,331.38,0.281,216.568,0.112C216.368,0.104,216.2,0,216,0s-0.368,0.104-0.568,0.112     C96.582,0.275,0.275,96.582,0.112,215.432C0.112,215.632,0,215.8,0,216s0.104,0.368,0.112,0.568     c0.199,115.917,91.939,210.97,207.776,215.28h0.296C212.483,431.847,216.013,428.448,216.176,424.152z", "fill", "#ff4c3b"], ["d", "M323.48,108.52c-3.124-3.123-8.188-3.123-11.312,0L226.2,194.48c-6.495-2.896-13.914-2.896-20.408,0l-40.704-40.704     c-3.178-3.069-8.243-2.981-11.312,0.197c-2.994,3.1-2.994,8.015,0,11.115l40.624,40.624c-5.704,11.94-0.648,26.244,11.293,31.947     c9.165,4.378,20.095,2.501,27.275-4.683c7.219-7.158,9.078-18.118,4.624-27.256l85.888-85.888     C326.603,116.708,326.603,111.644,323.48,108.52z M221.658,221.654c-0.001,0.001-0.001,0.001-0.002,0.002     c-3.164,3.025-8.148,3.025-11.312,0c-3.125-3.124-3.125-8.189-0.002-11.314c3.124-3.125,8.189-3.125,11.314-0.002     C224.781,213.464,224.781,218.53,221.658,221.654z", "fill", "#ff4c3b"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 -14 512.00001 512"], ["d", "m136.964844 308.234375c4.78125-2.757813 6.417968-8.878906 3.660156-13.660156-2.761719-4.777344-8.878906-6.417969-13.660156-3.660157-4.78125 2.761719-6.421875 8.882813-3.660156 13.660157 2.757812 4.78125 8.878906 6.421875 13.660156 3.660156zm0 0", "fill", "#ff4c3b"], ["d", "m95.984375 377.253906 50.359375 87.230469c10.867188 18.84375 35.3125 25.820313 54.644531 14.644531 19.128907-11.054687 25.703125-35.496094 14.636719-54.640625l-30-51.96875 25.980469-15c4.78125-2.765625 6.421875-8.878906 3.660156-13.660156l-13.003906-22.523437c1.550781-.300782 11.746093-2.300782 191.539062-37.570313 22.226563-1.207031 35.542969-25.515625 24.316407-44.949219l-33.234376-57.5625 21.238282-32.167968c2.085937-3.164063 2.210937-7.230469.316406-10.511719l-20-34.640625c-1.894531-3.28125-5.492188-5.203125-9.261719-4.980469l-38.472656 2.308594-36.894531-63.90625c-5.34375-9.257813-14.917969-14.863281-25.605469-14.996094-.128906-.003906-.253906-.003906-.382813-.003906-10.328124 0-19.703124 5.140625-25.257812 13.832031l-130.632812 166.414062-84.925782 49.03125c-33.402344 19.277344-44.972656 62.128907-25.621094 95.621094 17.679688 30.625 54.953126 42.671875 86.601563 30zm102.324219 57.238282c5.523437 9.554687 2.253906 21.78125-7.328125 27.316406-9.613281 5.558594-21.855469 2.144531-27.316407-7.320313l-50-86.613281 34.640626-20c57.867187 100.242188 49.074218 85.011719 50.003906 86.617188zm-22.683594-79.296876-10-17.320312 17.320312-10 10 17.320312zm196.582031-235.910156 13.820313 23.9375-12.324219 18.664063-23.820313-41.261719zm-104.917969-72.132812c2.683594-4.390625 6.941407-4.84375 8.667969-4.796875 1.707031.019531 5.960938.550781 8.527344 4.996093l116.3125 201.464844c3.789063 6.558594-.816406 14.804688-8.414063 14.992188-1.363281.03125-1.992187.277344-5.484374.929687l-123.035157-213.105469c2.582031-3.320312 2.914063-3.640624 3.425781-4.480468zm-16.734374 21.433594 115.597656 200.222656-174.460938 34.21875-53.046875-91.878906zm-223.851563 268.667968c-4.390625-7.597656-6.710937-16.222656-6.710937-24.949218 0-17.835938 9.585937-34.445313 25.011718-43.351563l77.941406-45 50 86.601563-77.941406 45.003906c-23.878906 13.78125-54.515625 5.570312-68.300781-18.304688zm0 0", "fill", "#ff4c3b"], ["d", "m105.984375 314.574219c-2.761719-4.78125-8.878906-6.421875-13.660156-3.660157l-17.320313 10c-4.773437 2.757813-10.902344 1.113282-13.660156-3.660156-2.761719-4.78125-8.878906-6.421875-13.660156-3.660156s-6.421875 8.878906-3.660156 13.660156c8.230468 14.257813 26.589843 19.285156 40.980468 10.980469l17.320313-10c4.78125-2.761719 6.421875-8.875 3.660156-13.660156zm0 0", "fill", "#ff4c3b"], ["d", "m497.136719 43.746094-55.722657 31.007812c-4.824218 2.6875-6.5625 8.777344-3.875 13.601563 2.679688 4.820312 8.765626 6.566406 13.601563 3.875l55.71875-31.007813c4.828125-2.6875 6.5625-8.777344 3.875-13.601562-2.683594-4.828125-8.773437-6.5625-13.597656-3.875zm0 0", "fill", "#ff4c3b"], ["d", "m491.292969 147.316406-38.636719-10.351562c-5.335938-1.429688-10.820312 1.734375-12.25 7.070312-1.429688 5.335938 1.738281 10.816406 7.074219 12.246094l38.640625 10.351562c5.367187 1.441407 10.824218-1.773437 12.246094-7.070312 1.429687-5.335938-1.738282-10.820312-7.074219-12.246094zm0 0", "fill", "#ff4c3b"], ["d", "m394.199219 7.414062-10.363281 38.640626c-1.429688 5.335937 1.734374 10.816406 7.070312 12.25 5.332031 1.425781 10.816406-1.730469 12.25-7.070313l10.359375-38.640625c1.429687-5.335938-1.734375-10.820312-7.070313-12.25-5.332031-1.429688-10.816406 1.734375-12.246093 7.070312zm0 0", "fill", "#ff4c3b"], [1, "media", "border-0", "m-0"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "id", "Layer_1", "x", "0px", "y", "0px", "viewBox", "0 0 512 512", 0, "xml", "space", "preserve", "width", "512px", "height", "512px", 2, "enable-background", "new 0 0 512 512"], ["d", "M498.409,175.706L336.283,13.582c-8.752-8.751-20.423-13.571-32.865-13.571c-12.441,0-24.113,4.818-32.865,13.569     L13.571,270.563C4.82,279.315,0,290.985,0,303.427c0,12.442,4.82,24.114,13.571,32.864l19.992,19.992     c0.002,0.001,0.003,0.003,0.005,0.005c0.002,0.002,0.004,0.004,0.006,0.006l134.36,134.36H149.33     c-5.89,0-10.666,4.775-10.666,10.666c0,5.89,4.776,10.666,10.666,10.666h59.189c0.014,0,0.027,0.001,0.041,0.001     s0.027-0.001,0.041-0.001l154.053,0.002c5.89,0,10.666-4.776,10.666-10.666c0-5.891-4.776-10.666-10.666-10.666l-113.464-0.002     L498.41,241.434C516.53,223.312,516.53,193.826,498.409,175.706z M483.325,226.35L226.341,483.334     c-4.713,4.712-11.013,7.31-17.742,7.32h-0.081c-6.727-0.011-13.025-2.608-17.736-7.32L56.195,348.746L302.99,101.949     c4.165-4.165,4.165-10.919,0-15.084c-4.166-4.165-10.918-4.165-15.085,0.001L41.11,333.663l-12.456-12.456     c-4.721-4.721-7.321-11.035-7.321-17.779c0-6.744,2.6-13.059,7.322-17.781L285.637,28.665c4.722-4.721,11.037-7.321,17.781-7.321     c6.744,0,13.059,2.6,17.781,7.322l57.703,57.702l-246.798,246.8c-4.165,4.164-4.165,10.918,0,15.085     c2.083,2.082,4.813,3.123,7.542,3.123c2.729,0,5.459-1.042,7.542-3.124l246.798-246.799l89.339,89.336     C493.128,200.593,493.127,216.546,483.325,226.35z", "fill", "#ff4c3b"], ["d", "M262.801,308.064c-4.165-4.165-10.917-4.164-15.085,0l-83.934,83.933c-4.165,4.165-4.165,10.918,0,15.085     c2.083,2.083,4.813,3.124,7.542,3.124c2.729,0,5.459-1.042,7.542-3.124l83.934-83.933     C266.966,318.982,266.966,312.229,262.801,308.064z", "fill", "#ff4c3b"], ["d", "M228.375,387.741l-34.425,34.425c-4.165,4.165-4.165,10.919,0,15.085c2.083,2.082,4.813,3.124,7.542,3.124     c2.731,0,5.459-1.042,7.542-3.124l34.425-34.425c4.165-4.165,4.165-10.919,0-15.085     C239.294,383.575,232.543,383.575,228.375,387.741z", "fill", "#ff4c3b"], ["d", "M260.054,356.065l-4.525,4.524c-4.166,4.165-4.166,10.918-0.001,15.085c2.082,2.083,4.813,3.125,7.542,3.125     c2.729,0,5.459-1.042,7.541-3.125l4.525-4.524c4.166-4.165,4.166-10.918,0.001-15.084     C270.974,351.901,264.219,351.9,260.054,356.065z", "fill", "#ff4c3b"], ["d", "M407.073,163.793c-2-2-4.713-3.124-7.542-3.124c-2.829,0-5.541,1.124-7.542,3.124l-45.255,45.254     c-2,2.001-3.124,4.713-3.124,7.542s1.124,5.542,3.124,7.542l30.17,30.167c2.083,2.083,4.813,3.124,7.542,3.124     c2.731,0,5.459-1.042,7.542-3.124l45.253-45.252c4.165-4.165,4.165-10.919,0-15.084L407.073,163.793z M384.445,231.673     l-15.085-15.084l30.17-30.169l15.084,15.085L384.445,231.673z", "fill", "#ff4c3b"], ["d", "M320.339,80.186c2.731,0,5.461-1.042,7.543-3.126l4.525-4.527c4.164-4.166,4.163-10.92-0.003-15.084     c-4.165-4.164-10.92-4.163-15.084,0.003l-4.525,4.527c-4.164,4.166-4.163,10.92,0.003,15.084     C314.881,79.146,317.609,80.186,320.339,80.186z", "fill", "#ff4c3b"], ["d", "M107.215,358.057l-4.525,4.525c-4.165,4.164-4.165,10.918,0,15.085c2.083,2.082,4.813,3.123,7.542,3.123     s5.459-1.041,7.542-3.123l4.525-4.525c4.165-4.166,4.165-10.92,0-15.085C118.133,353.891,111.381,353.891,107.215,358.057z", "fill", "#ff4c3b"]],
      template: function ServicesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "free shipping");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "free shipping world wide");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 5)(11, "g")(12, "g")(13, "g");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 6)(15, "path", 7)(16, "path", 8)(17, "path", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4)(19, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "24 X 7 service");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "online service for new customer");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "svg", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 11)(26, "path", 12)(27, "path", 13)(28, "path", 14)(29, "path", 15)(30, "path", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4)(32, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "festival offer");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "new online special festival offer");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "svg", 18)(38, "g")(39, "g")(40, "g");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 19)(42, "path", 20)(43, "path", 21)(44, "path", 22)(45, "path", 23)(46, "path", 24)(47, "path", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 4)(49, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "online payment");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Contrary to popular belief.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9wcm9kdWN0L3dpZGdldHMvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9LQUFvSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5679:
/*!*****************************************************************!*\
  !*** ./src/app/shop/product/widgets/social/social.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocialComponent: () => (/* binding */ SocialComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class SocialComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function SocialComponent_Factory(t) {
      return new (t || SocialComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SocialComponent,
      selectors: [["app-social"]],
      decls: 13,
      vars: 0,
      consts: [[1, "product-social"], ["href", "https://www.facebook.com/"], [1, "fa", "fa-facebook"], ["href", "https://plus.google.com/discover"], [1, "fa", "fa-google-plus"], ["href", "https://twitter.com/"], [1, "fa", "fa-twitter"], ["href", "https://www.instagram.com/"], [1, "fa", "fa-instagram"]],
      template: function SocialComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0)(1, "li")(2, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li")(5, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li")(11, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb2NpYWwuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9wcm9kdWN0L3dpZGdldHMvc29jaWFsL3NvY2lhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0tBQW9LIiwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 3036:
/*!***********************************************************************************!*\
  !*** ./src/app/shop/product/widgets/stock-inventory/stock-inventory.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockInventoryComponent: () => (/* binding */ StockInventoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


function StockInventoryComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Hurry! We have only ", ctx_r0.stock, " product in stock. ");
  }
}
class StockInventoryComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function StockInventoryComponent_Factory(t) {
      return new (t || StockInventoryComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StockInventoryComponent,
      selectors: [["app-stock-inventory"]],
      inputs: {
        stock: "stock"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "pro_inventory", 4, "ngIf"], [1, "pro_inventory"], [1, "active"], [1, "inventory-scroll", "nostripes", "active"], [2, "width", "95%"]],
      template: function StockInventoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StockInventoryComponent_div_0_Template, 5, 1, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stock <= 5);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9jay1pbnZlbnRvcnkuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9wcm9kdWN0L3dpZGdldHMvc3RvY2staW52ZW50b3J5L3N0b2NrLWludmVudG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0xBQWdMIiwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 8586:
/*!*******************************************************************************************!*\
  !*** ./src/app/shop/seccion/artesanias-left-sidebar/artesanias-left-sidebar.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArtesaniasLeftSidebarComponent: () => (/* binding */ ArtesaniasLeftSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/productos/producto.service */ 3916);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 8173);
/* harmony import */ var _shared_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/categories/categories.component */ 7487);
/* harmony import */ var _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/product/product-box-one/product-box-one.component */ 6646);
/* harmony import */ var _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/product/product-box-vertical-slider/product-box-vertical-slider.component */ 3093);
/* harmony import */ var _widgets_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../widgets/grid/grid.component */ 1386);
/* harmony import */ var _widgets_price_price_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../widgets/price/price.component */ 7832);











const _c0 = () => ["/home/lumar"];
function ArtesaniasLeftSidebarComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-product-box-one", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r1.grid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product", product_r1)("cartModal", true)("loader", true)("onHowerChangeImage", true);
  }
}
function ArtesaniasLeftSidebarComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\u00A1Lo siento! \u00A1\u00A1\u00A1No pudiste encontrar el producto que buscabas!!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Por favor verifique si ha escrito algo mal o intente buscar con otras palabras.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Seguir Comprando");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
  }
}
class ArtesaniasLeftSidebarComponent {
  constructor(route, router, productoService) {
    this.route = route;
    this.router = router;
    this.productoService = productoService;
    this.grid = 'col-xl-3 col-md-6';
    this.layoutView = 'grid-view';
    this.products = [];
    this.brands = [];
    this.colors = [];
    this.size = [];
    this.minPrice = 0;
    this.maxPrice = 8200;
    this.tags = [];
    this.pageNo = 1;
    this.paginate = {}; // Pagination use only
    this.paginate2 = {}; // Pagination use only
    this.mobileSidebar = false;
    this.loader = true;
    //Array para productos
    this.product_list = [];
    this.listaVacia = undefined;
    //tamaño de paginacion e inicio
    this.page = 1;
    this.pageSize = 20;
  }
  ngOnInit() {
    this.productoService.currentProductList.subscribe(products => {
      this.product_list = products;
    });
    this.listProductosArtesanias();
  }
  // Change Grid Layout
  updateGridLayout(value) {
    this.grid = value;
  }
  // Change Layout View
  updateLayoutView(value) {
    this.layoutView = value;
    if (value == 'list-view') this.grid = 'col-lg-12';else this.grid = 'col-xl-3 col-md-6';
  }
  // Mobile sidebar
  toggleMobileSidebar() {
    this.mobileSidebar = !this.mobileSidebar;
  }
  onHover(menuItem) {
    if (window.innerWidth > 1200 && menuItem) {
      document.getElementById('unset').classList.add('sidebar-unset');
    } else {
      document.getElementById('unset').classList.remove('sidebar-unset');
    }
  }
  //Listar todos los productos de la seccion Artesanias
  listProductosArtesanias() {
    const seccionId = 1; //Pertenece el id de Artesanias en la base de datos
    this.productoService.getProductosSeccion(seccionId).subscribe(data => {
      this.product_list = data.map(product => {
        return {
          ...product,
          img_url: product.imagen_producto && product.imagen_producto.length > 0 ? product.imagen_producto[0].imagen_url : 'path/to/default/image.jpg'
        };
      });
      this.listaVacia = undefined;
    }, err => {
      this.listaVacia = err.error.message;
      console.log(err.error.message);
    });
  }
  static {
    this.ɵfac = function ArtesaniasLeftSidebarComponent_Factory(t) {
      return new (t || ArtesaniasLeftSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__.ProductoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: ArtesaniasLeftSidebarComponent,
      selectors: [["app-artesanias-left-sidebar"]],
      decls: 37,
      vars: 22,
      consts: [[3, "title", "breadcrumb"], [1, "section-b-space"], [1, "collection-wrapper"], [1, "container"], [1, "row"], [1, "col-lg-3"], [1, "collection-filter"], [1, "collection-filter-block"], [1, "collection-mobile-back", 3, "click"], [1, "filter-back"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "collection-filter-block", "slide-productos"], [3, "title"], [3, "min", "max"], [1, "collection-content", "col"], [1, "page-main-content"], [1, "col-sm-12"], [1, "col-xl-12"], [1, "filter-main-btn", 3, "click"], [1, "filter-btn", "btn", "btn-theme"], ["aria-hidden", "true", 1, "fa", "fa-filter"], ["id", "products", 1, "collection-product-wrapper"], [3, "setGrid", "setLayout", "product_list", "pageSize", "layoutView", "sortBy", "seccionId"], [1, "product-wrapper-grid", 3, "ngClass"], ["class", "col-grid-box", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "col-sm-12 text-center section-b-space mt-5 no-found", 4, "ngIf"], [1, "d-flex", "justify-content-center", 3, "pageChange", "page", "pageSize", "collectionSize"], [1, "col-grid-box", 3, "ngClass"], [1, "product-box"], [3, "product", "cartModal", "loader", "onHowerChangeImage"], [1, "col-sm-12", "text-center", "section-b-space", "mt-5", "no-found"], ["src", "assets/images/empty-compare.png", 1, "img-fluid", "mb-4"], [1, "no-size"], [1, "btn", "btn-solid", 3, "routerLink"]],
      template: function ArtesaniasLeftSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-breadcrumb", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ArtesaniasLeftSidebarComponent_Template_div_click_8_listener() {
            return ctx.toggleMobileSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Regresar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "app-product-box-vertical-slider", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "app-categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "app-price", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "div", 4)(21, "div", 16)(22, "div", 4)(23, "div", 17)(24, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ArtesaniasLeftSidebarComponent_Template_div_click_24_listener() {
            return ctx.toggleMobileSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, " Filtro ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 21)(29, "app-grid", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("setGrid", function ArtesaniasLeftSidebarComponent_Template_app_grid_setGrid_29_listener($event) {
            return ctx.updateGridLayout($event);
          })("setLayout", function ArtesaniasLeftSidebarComponent_Template_app_grid_setLayout_29_listener($event) {
            return ctx.updateLayoutView($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 23)(31, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, ArtesaniasLeftSidebarComponent_div_32_Template, 3, 5, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "slice");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, ArtesaniasLeftSidebarComponent_div_34_Template, 8, 2, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "ngb-pagination", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("pageChange", function ArtesaniasLeftSidebarComponent_Template_ngb_pagination_pageChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.page, $event) || (ctx.page = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Artesanias")("breadcrumb", "Artesanias");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("openFilterbar", ctx.mobileSidebar);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Nuevos Productos");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("min", ctx.minPrice)("max", ctx.maxPrice);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product_list", ctx.product_list)("pageSize", ctx.pageSize)("layoutView", ctx.layoutView)("sortBy", ctx.sortBy)("seccionId", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.layoutView);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](33, 18, ctx.product_list, (ctx.page - 1) * ctx.pageSize, (ctx.page - 1) * ctx.pageSize + ctx.pageSize));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.product_list.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("page", ctx.page);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSize", ctx.pageSize)("collectionSize", ctx.product_list == null ? null : ctx.product_list.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPagination, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _shared_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__.CategoriesComponent, _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__.ProductBoxOneComponent, _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_4__.ProductBoxVerticalSliderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _widgets_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__.GridComponent, _widgets_price_price_component__WEBPACK_IMPORTED_MODULE_6__.PriceComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.SlicePipe],
      styles: ["p[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n.slide-productos[_ngcontent-%COMP%] {\n  padding: 0 36px !important;\n}\n\n.no-size[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGVzYW5pYXMtbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFBST1lFQ1RPJTIwQVJURVNBTklBUyUyMExVTUFSXFxjbGllbnRlLWZyb250ZW5kLWx1bWFyXFxzcmNcXGFwcFxcc2hvcFxcc2VjY2lvblxcYXJ0ZXNhbmlhcy1sZWZ0LXNpZGViYXJcXGFydGVzYW5pYXMtbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6ImFydGVzYW5pYXMtbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4uc2xpZGUtcHJvZHVjdG9ze1xyXG4gICAgcGFkZGluZzogMCAzNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uby1zaXplIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsInAge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uc2xpZGUtcHJvZHVjdG9zIHtcbiAgcGFkZGluZzogMCAzNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uby1zaXplIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9zZWNjaW9uL2FydGVzYW5pYXMtbGVmdC1zaWRlYmFyL2FydGVzYW5pYXMtbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vUFJPWUVDVE8lMjBBUlRFU0FOSUFTJTIwTFVNQVIvY2xpZW50ZS1mcm9udGVuZC1sdW1hci9zcmMvYXBwL3Nob3Avc2VjY2lvbi9hcnRlc2FuaWFzLWxlZnQtc2lkZWJhci9hcnRlc2FuaWFzLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjtBRENBLGc4QkFBZzhCIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4uc2xpZGUtcHJvZHVjdG9ze1xyXG4gICAgcGFkZGluZzogMCAzNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uby1zaXplIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsInAge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uc2xpZGUtcHJvZHVjdG9zIHtcbiAgcGFkZGluZzogMCAzNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5uby1zaXplIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 5494:
/*!***********************************************************************************!*\
  !*** ./src/app/shop/seccion/bolsos-left-sidebar/bolsos-left-sidebar.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BolsosLeftSidebarComponent: () => (/* binding */ BolsosLeftSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/productos/producto.service */ 3916);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 8173);
/* harmony import */ var _shared_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/categories/categories.component */ 7487);
/* harmony import */ var _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/product/product-box-one/product-box-one.component */ 6646);
/* harmony import */ var _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/product/product-box-vertical-slider/product-box-vertical-slider.component */ 3093);
/* harmony import */ var _widgets_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../widgets/grid/grid.component */ 1386);
/* harmony import */ var _widgets_price_price_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../widgets/price/price.component */ 7832);











const _c0 = () => ["/home/lumar"];
function BolsosLeftSidebarComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-product-box-one", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r1.grid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product", product_r1)("cartModal", true)("loader", true)("onHowerChangeImage", true);
  }
}
function BolsosLeftSidebarComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\u00A1Lo siento! \u00A1\u00A1\u00A1No pudiste encontrar el producto que buscabas!!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Por favor verifique si ha escrito algo mal o intente buscar con otras palabras.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Seguir Comprando");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
  }
}
class BolsosLeftSidebarComponent {
  constructor(route, router, productoService) {
    this.route = route;
    this.router = router;
    this.productoService = productoService;
    this.grid = 'col-xl-3 col-md-6';
    this.layoutView = 'grid-view';
    this.products = [];
    this.brands = [];
    this.colors = [];
    this.size = [];
    this.minPrice = 0;
    this.maxPrice = 1000;
    this.tags = [];
    this.pageNo = 1;
    this.paginate = {}; // Pagination use only
    this.mobileSidebar = false;
    //Array para productos
    this.product_list = [];
    this.listaVacia = undefined;
    //tamaño de paginacion e inicio
    this.page = 1;
    this.pageSize = 20;
  }
  ngOnInit() {
    this.productoService.currentProductList.subscribe(products => {
      this.product_list = products;
    });
    this.listProductosBolsos();
  }
  // Change Grid Layout
  updateGridLayout(value) {
    this.grid = value;
  }
  // Change Layout View
  updateLayoutView(value) {
    this.layoutView = value;
    if (value == 'list-view') this.grid = 'col-lg-12';else this.grid = 'col-xl-3 col-md-6';
  }
  // Mobile sidebar
  toggleMobileSidebar() {
    this.mobileSidebar = !this.mobileSidebar;
  }
  onHover(menuItem) {
    if (window.innerWidth > 1200 && menuItem) {
      document.getElementById('unset').classList.add('sidebar-unset');
    } else {
      document.getElementById('unset').classList.remove('sidebar-unset');
    }
  }
  //Listar todos los productos de la seccion Bolsos
  listProductosBolsos() {
    const seccionId = 4; //Pertenece el id de Bolsos en la base de datos
    this.productoService.getProductosSeccion(seccionId).subscribe(data => {
      this.product_list = data.map(product => {
        return {
          ...product,
          img_url: product.imagen_producto && product.imagen_producto.length > 0 ? product.imagen_producto[0].imagen_url : 'path/to/default/image.jpg'
        };
      });
      this.listaVacia = undefined;
    }, err => {
      this.listaVacia = err.error.message;
      console.log(err.error.message);
    });
  }
  static {
    this.ɵfac = function BolsosLeftSidebarComponent_Factory(t) {
      return new (t || BolsosLeftSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__.ProductoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: BolsosLeftSidebarComponent,
      selectors: [["app-bolsos-left-sidebar"]],
      decls: 37,
      vars: 22,
      consts: [[3, "title", "breadcrumb"], [1, "section-b-space"], [1, "collection-wrapper"], [1, "container"], [1, "row"], [1, "col-lg-3"], [1, "collection-filter"], [1, "collection-filter-block"], [1, "collection-mobile-back", 3, "click"], [1, "filter-back"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "collection-filter-block", "slide-productos"], [3, "title"], [3, "min", "max"], [1, "collection-content", "col"], [1, "page-main-content"], [1, "col-sm-12"], [1, "col-xl-12"], [1, "filter-main-btn", 3, "click"], [1, "filter-btn", "btn", "btn-theme"], ["aria-hidden", "true", 1, "fa", "fa-filter"], ["id", "products", 1, "collection-product-wrapper"], [3, "setGrid", "setLayout", "product_list", "pageSize", "layoutView", "sortBy", "seccionId"], [1, "product-wrapper-grid", 3, "ngClass"], ["class", "col-grid-box", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "col-sm-12 text-center section-b-space mt-5 no-found", 4, "ngIf"], [1, "d-flex", "justify-content-center", 3, "pageChange", "page", "pageSize", "collectionSize"], [1, "col-grid-box", 3, "ngClass"], [1, "product-box"], [3, "product", "cartModal", "loader", "onHowerChangeImage"], [1, "col-sm-12", "text-center", "section-b-space", "mt-5", "no-found"], ["src", "assets/images/empty-compare.png", 1, "img-fluid", "mb-4"], [1, "no-size"], [1, "btn", "btn-solid", 3, "routerLink"]],
      template: function BolsosLeftSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-breadcrumb", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BolsosLeftSidebarComponent_Template_div_click_8_listener() {
            return ctx.toggleMobileSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Regresar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "app-product-box-vertical-slider", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "app-categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "app-price", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "div", 4)(21, "div", 16)(22, "div", 4)(23, "div", 17)(24, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BolsosLeftSidebarComponent_Template_div_click_24_listener() {
            return ctx.toggleMobileSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, " Filtro ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 21)(29, "app-grid", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("setGrid", function BolsosLeftSidebarComponent_Template_app_grid_setGrid_29_listener($event) {
            return ctx.updateGridLayout($event);
          })("setLayout", function BolsosLeftSidebarComponent_Template_app_grid_setLayout_29_listener($event) {
            return ctx.updateLayoutView($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 23)(31, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, BolsosLeftSidebarComponent_div_32_Template, 3, 5, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "slice");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, BolsosLeftSidebarComponent_div_34_Template, 8, 2, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "ngb-pagination", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("pageChange", function BolsosLeftSidebarComponent_Template_ngb_pagination_pageChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.page, $event) || (ctx.page = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Bolsos")("breadcrumb", "Bolsos");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("openFilterbar", ctx.mobileSidebar);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Nuevos Productos");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("min", ctx.minPrice)("max", ctx.maxPrice);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product_list", ctx.product_list)("pageSize", ctx.pageSize)("layoutView", ctx.layoutView)("sortBy", ctx.sortBy)("seccionId", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.layoutView);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](33, 18, ctx.product_list, (ctx.page - 1) * ctx.pageSize, (ctx.page - 1) * ctx.pageSize + ctx.pageSize));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.product_list.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("page", ctx.page);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSize", ctx.pageSize)("collectionSize", ctx.product_list == null ? null : ctx.product_list.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPagination, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _shared_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__.CategoriesComponent, _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__.ProductBoxOneComponent, _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_4__.ProductBoxVerticalSliderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _widgets_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__.GridComponent, _widgets_price_price_component__WEBPACK_IMPORTED_MODULE_6__.PriceComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.SlicePipe],
      styles: ["p[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n.no-size[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.slide-productos[_ngcontent-%COMP%] {\n  padding: 0 36px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvbHNvcy1sZWZ0LXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUFJPWUVDVE8lMjBBUlRFU0FOSUFTJTIwTFVNQVJcXGNsaWVudGUtZnJvbnRlbmQtbHVtYXJcXHNyY1xcYXBwXFxzaG9wXFxzZWNjaW9uXFxib2xzb3MtbGVmdC1zaWRlYmFyXFxib2xzb3MtbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtBQ0NKIiwiZmlsZSI6ImJvbHNvcy1sZWZ0LXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5uby1zaXplIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNsaWRlLXByb2R1Y3Rvc3tcclxuICAgIHBhZGRpbmc6IDAgMzZweCAhaW1wb3J0YW50O1xyXG59IiwicCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5uby1zaXplIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2xpZGUtcHJvZHVjdG9zIHtcbiAgcGFkZGluZzogMCAzNnB4ICFpbXBvcnRhbnQ7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9zZWNjaW9uL2JvbHNvcy1sZWZ0LXNpZGViYXIvYm9sc29zLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uL1BST1lFQ1RPJTIwQVJURVNBTklBUyUyMExVTUFSL2NsaWVudGUtZnJvbnRlbmQtbHVtYXIvc3JjL2FwcC9zaG9wL3NlY2Npb24vYm9sc29zLWxlZnQtc2lkZWJhci9ib2xzb3MtbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtBQ0NKO0FEQ0EsdzZCQUF3NkIiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5uby1zaXplIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNsaWRlLXByb2R1Y3Rvc3tcclxuICAgIHBhZGRpbmc6IDAgMzZweCAhaW1wb3J0YW50O1xyXG59IiwicCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5uby1zaXplIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2xpZGUtcHJvZHVjdG9zIHtcbiAgcGFkZGluZzogMCAzNnB4ICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 3520:
/*!*************************************************************************************!*\
  !*** ./src/app/shop/seccion/joyeria-left-sidebar/joyeria-left-sidebar.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JoyeriaLeftSidebarComponent: () => (/* binding */ JoyeriaLeftSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/productos/producto.service */ 3916);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 8173);
/* harmony import */ var _shared_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/categories/categories.component */ 7487);
/* harmony import */ var _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/product/product-box-one/product-box-one.component */ 6646);
/* harmony import */ var _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/product/product-box-vertical-slider/product-box-vertical-slider.component */ 3093);
/* harmony import */ var _widgets_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../widgets/grid/grid.component */ 1386);
/* harmony import */ var _widgets_price_price_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../widgets/price/price.component */ 7832);











const _c0 = () => ["/home/lumar"];
function JoyeriaLeftSidebarComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-product-box-one", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r1.grid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product", product_r1)("cartModal", true)("loader", true)("onHowerChangeImage", true);
  }
}
function JoyeriaLeftSidebarComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\u00A1Lo siento! \u00A1\u00A1\u00A1No pudiste encontrar el producto que buscabas!!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Por favor verifique si ha escrito algo mal o intente buscar con otras palabras.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Seguir Comprando");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
  }
}
class JoyeriaLeftSidebarComponent {
  constructor(route, router, productoService) {
    this.route = route;
    this.router = router;
    this.productoService = productoService;
    this.grid = 'col-xl-3 col-md-6';
    this.layoutView = 'grid-view';
    this.products = [];
    this.brands = [];
    this.colors = [];
    this.size = [];
    this.minPrice = 0;
    this.maxPrice = 1200;
    this.tags = [];
    this.pageNo = 1;
    this.paginate = {}; // Pagination use only
    this.mobileSidebar = false;
    this.loader = true;
    //Array para productos
    this.product_list = [];
    this.listaVacia = undefined;
    //tamaño de paginacion e inicio
    this.page = 1;
    this.pageSize = 20;
  }
  ngOnInit() {
    this.productoService.currentProductList.subscribe(products => {
      this.product_list = products;
    });
    this.listProductosJoyeria();
  }
  // Change Grid Layout
  updateGridLayout(value) {
    this.grid = value;
  }
  // Change Layout View
  updateLayoutView(value) {
    this.layoutView = value;
    if (value == 'list-view') this.grid = 'col-lg-12';else this.grid = 'col-xl-3 col-md-6';
  }
  // Mobile sidebar
  toggleMobileSidebar() {
    this.mobileSidebar = !this.mobileSidebar;
  }
  onHover(menuItem) {
    if (window.innerWidth > 1200 && menuItem) {
      document.getElementById('unset').classList.add('sidebar-unset');
    } else {
      document.getElementById('unset').classList.remove('sidebar-unset');
    }
  }
  //Listar todos los productos de la seccion Joyeria
  listProductosJoyeria() {
    const seccionId = 2; //Pertenece el id de Joyeria y Bisuteria en la base de datos
    this.productoService.getProductosSeccion(seccionId).subscribe(data => {
      this.product_list = data.map(product => {
        return {
          ...product,
          img_url: product.imagen_producto && product.imagen_producto.length > 0 ? product.imagen_producto[0].imagen_url : 'path/to/default/image.jpg'
        };
      });
      this.listaVacia = undefined;
    }, err => {
      this.listaVacia = err.error.message;
      console.log(err.error.message);
    });
  }
  static {
    this.ɵfac = function JoyeriaLeftSidebarComponent_Factory(t) {
      return new (t || JoyeriaLeftSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__.ProductoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: JoyeriaLeftSidebarComponent,
      selectors: [["app-joyeria-left-sidebar"]],
      decls: 37,
      vars: 22,
      consts: [[3, "title", "breadcrumb"], [1, "section-b-space"], [1, "collection-wrapper"], [1, "container"], [1, "row"], [1, "col-lg-3"], [1, "collection-filter"], [1, "collection-filter-block"], [1, "collection-mobile-back", 3, "click"], [1, "filter-back"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "collection-filter-block", "slide-productos"], [3, "title"], [3, "min", "max"], [1, "collection-content", "col"], [1, "page-main-content"], [1, "col-sm-12"], [1, "col-xl-12"], [1, "filter-main-btn", 3, "click"], [1, "filter-btn", "btn", "btn-theme"], ["aria-hidden", "true", 1, "fa", "fa-filter"], ["id", "products", 1, "collection-product-wrapper"], [3, "setGrid", "setLayout", "product_list", "pageSize", "layoutView", "sortBy", "seccionId"], [1, "product-wrapper-grid", 3, "ngClass"], ["class", "col-grid-box", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "col-sm-12 text-center section-b-space mt-5 no-found", 4, "ngIf"], [1, "d-flex", "justify-content-center", 3, "pageChange", "page", "pageSize", "collectionSize"], [1, "col-grid-box", 3, "ngClass"], [1, "product-box"], [3, "product", "cartModal", "loader", "onHowerChangeImage"], [1, "col-sm-12", "text-center", "section-b-space", "mt-5", "no-found"], ["src", "assets/images/empty-compare.png", 1, "img-fluid", "mb-4"], [1, "no-size"], [1, "btn", "btn-solid", 3, "routerLink"]],
      template: function JoyeriaLeftSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-breadcrumb", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function JoyeriaLeftSidebarComponent_Template_div_click_8_listener() {
            return ctx.toggleMobileSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Regresar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "app-product-box-vertical-slider", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "app-categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "app-price", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "div", 4)(21, "div", 16)(22, "div", 4)(23, "div", 17)(24, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function JoyeriaLeftSidebarComponent_Template_div_click_24_listener() {
            return ctx.toggleMobileSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, " Filtro ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 21)(29, "app-grid", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("setGrid", function JoyeriaLeftSidebarComponent_Template_app_grid_setGrid_29_listener($event) {
            return ctx.updateGridLayout($event);
          })("setLayout", function JoyeriaLeftSidebarComponent_Template_app_grid_setLayout_29_listener($event) {
            return ctx.updateLayoutView($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 23)(31, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, JoyeriaLeftSidebarComponent_div_32_Template, 3, 5, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "slice");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, JoyeriaLeftSidebarComponent_div_34_Template, 8, 2, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "ngb-pagination", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("pageChange", function JoyeriaLeftSidebarComponent_Template_ngb_pagination_pageChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.page, $event) || (ctx.page = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Joyeria y Bisuteria")("breadcrumb", "Joyeria y Bisuteria");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("openFilterbar", ctx.mobileSidebar);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Nuevos Productos");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("min", ctx.minPrice)("max", ctx.maxPrice);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product_list", ctx.product_list)("pageSize", ctx.pageSize)("layoutView", ctx.layoutView)("sortBy", ctx.sortBy)("seccionId", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.layoutView);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](33, 18, ctx.product_list, (ctx.page - 1) * ctx.pageSize, (ctx.page - 1) * ctx.pageSize + ctx.pageSize));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.product_list.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("page", ctx.page);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSize", ctx.pageSize)("collectionSize", ctx.product_list == null ? null : ctx.product_list.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPagination, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _shared_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__.CategoriesComponent, _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__.ProductBoxOneComponent, _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_4__.ProductBoxVerticalSliderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _widgets_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__.GridComponent, _widgets_price_price_component__WEBPACK_IMPORTED_MODULE_6__.PriceComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.SlicePipe],
      styles: ["p[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n.no-size[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.slide-productos[_ngcontent-%COMP%] {\n  padding: 0 36px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpveWVyaWEtbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFBST1lFQ1RPJTIwQVJURVNBTklBUyUyMExVTUFSXFxjbGllbnRlLWZyb250ZW5kLWx1bWFyXFxzcmNcXGFwcFxcc2hvcFxcc2VjY2lvblxcam95ZXJpYS1sZWZ0LXNpZGViYXJcXGpveWVyaWEtbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtBQ0NKIiwiZmlsZSI6ImpveWVyaWEtbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4ubm8tc2l6ZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zbGlkZS1wcm9kdWN0b3N7XHJcbiAgICBwYWRkaW5nOiAwIDM2cHggIWltcG9ydGFudDtcclxufSIsInAge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4ubm8tc2l6ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNsaWRlLXByb2R1Y3RvcyB7XG4gIHBhZGRpbmc6IDAgMzZweCAhaW1wb3J0YW50O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9zZWNjaW9uL2pveWVyaWEtbGVmdC1zaWRlYmFyL2pveWVyaWEtbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vUFJPWUVDVE8lMjBBUlRFU0FOSUFTJTIwTFVNQVIvY2xpZW50ZS1mcm9udGVuZC1sdW1hci9zcmMvYXBwL3Nob3Avc2VjY2lvbi9qb3llcmlhLWxlZnQtc2lkZWJhci9qb3llcmlhLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSjtBRENBLGc3QkFBZzdCIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4ubm8tc2l6ZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zbGlkZS1wcm9kdWN0b3N7XHJcbiAgICBwYWRkaW5nOiAwIDM2cHggIWltcG9ydGFudDtcclxufSIsInAge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4ubm8tc2l6ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNsaWRlLXByb2R1Y3RvcyB7XG4gIHBhZGRpbmc6IDAgMzZweCAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 1953:
/*!*******************************************************************************!*\
  !*** ./src/app/shop/seccion/ropa-left-sidebar/ropa-left-sidebar.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RopaLeftSidebarComponent: () => (/* binding */ RopaLeftSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/productos/producto.service */ 3916);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 8173);
/* harmony import */ var _shared_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/categories/categories.component */ 7487);
/* harmony import */ var _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/product/product-box-one/product-box-one.component */ 6646);
/* harmony import */ var _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/product/product-box-vertical-slider/product-box-vertical-slider.component */ 3093);
/* harmony import */ var _widgets_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../widgets/grid/grid.component */ 1386);
/* harmony import */ var _widgets_price_price_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../widgets/price/price.component */ 7832);











const _c0 = () => ["/home/lumar"];
function RopaLeftSidebarComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27)(1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-product-box-one", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r1.grid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product", product_r1)("cartModal", true)("loader", true)("onHowerChangeImage", true);
  }
}
function RopaLeftSidebarComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\u00A1Lo siento! \u00A1\u00A1\u00A1No pudiste encontrar el producto que buscabas!!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Por favor verifique si ha escrito algo mal o intente buscar con otras palabras.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Seguir Comprando");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
  }
}
class RopaLeftSidebarComponent {
  constructor(route, router, productoService) {
    this.route = route;
    this.router = router;
    this.productoService = productoService;
    this.grid = 'col-xl-3 col-md-6';
    this.layoutView = 'grid-view';
    this.all_products = [];
    this.products = [];
    this.brands = [];
    this.colors = [];
    this.size = [];
    this.minPrice = 0;
    this.maxPrice = 1200;
    this.tags = [];
    this.pageNo = 1;
    this.paginate = {}; // Pagination use only
    this.mobileSidebar = false;
    this.loader = true;
    this.finished = false; // boolean when end of data is reached
    this.addItemCount = 8;
    //Array para productos
    this.product_list = [];
    this.listaVacia = undefined;
    //tamaño de paginacion e inicio
    this.page = 1;
    this.pageSize = 20;
  }
  ngOnInit() {
    this.productoService.currentProductList.subscribe(products => {
      this.product_list = products;
    });
    this.listProductosRopa();
  }
  // Change Grid Layout
  updateGridLayout(value) {
    this.grid = value;
  }
  // Change Layout View
  updateLayoutView(value) {
    this.layoutView = value;
    if (value == 'list-view') this.grid = 'col-lg-12';else this.grid = 'col-xl-3 col-md-6';
  }
  // Mobile sidebar
  toggleMobileSidebar() {
    this.mobileSidebar = !this.mobileSidebar;
  }
  onHover(menuItem) {
    if (window.innerWidth > 1200 && menuItem) {
      document.getElementById('unset').classList.add('sidebar-unset');
    } else {
      document.getElementById('unset').classList.remove('sidebar-unset');
    }
  }
  //Listar todos los productos de la seccion Ropa
  listProductosRopa() {
    const seccionId = 3; //Pertenece el id de Ropa en la base de datos
    this.productoService.getProductosSeccion(seccionId).subscribe(data => {
      this.product_list = data.map(product => {
        return {
          ...product,
          img_url: product.imagen_producto && product.imagen_producto.length > 0 ? product.imagen_producto[0].imagen_url : 'path/to/default/image.jpg'
        };
      });
      this.listaVacia = undefined;
    }, err => {
      this.listaVacia = err.error.message;
      console.log(err.error.message);
    });
  }
  static {
    this.ɵfac = function RopaLeftSidebarComponent_Factory(t) {
      return new (t || RopaLeftSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__.ProductoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: RopaLeftSidebarComponent,
      selectors: [["app-ropa-left-sidebar"]],
      decls: 37,
      vars: 22,
      consts: [[3, "title", "breadcrumb"], [1, "section-b-space"], [1, "collection-wrapper"], [1, "container"], [1, "row"], [1, "col-lg-3"], [1, "collection-filter"], [1, "collection-filter-block"], [1, "collection-mobile-back", 3, "click"], [1, "filter-back"], ["aria-hidden", "true", 1, "fa", "fa-angle-left"], [1, "collection-filter-block", "slide-productos"], [3, "title"], [3, "min", "max"], [1, "collection-content", "col"], [1, "page-main-content"], [1, "col-sm-12"], [1, "col-xl-12"], [1, "filter-main-btn", 3, "click"], [1, "filter-btn", "btn", "btn-theme"], ["aria-hidden", "true", 1, "fa", "fa-filter"], ["id", "products", 1, "collection-product-wrapper"], [3, "setGrid", "setLayout", "product_list", "pageSize", "layoutView", "sortBy", "seccionId"], [1, "product-wrapper-grid", 3, "ngClass"], ["class", "col-grid-box", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "col-sm-12 text-center section-b-space mt-5 no-found", 4, "ngIf"], [1, "d-flex", "justify-content-center", 3, "pageChange", "page", "pageSize", "collectionSize"], [1, "col-grid-box", 3, "ngClass"], [1, "product-box"], [3, "product", "cartModal", "loader", "onHowerChangeImage"], [1, "col-sm-12", "text-center", "section-b-space", "mt-5", "no-found"], ["src", "assets/images/empty-compare.png", 1, "img-fluid", "mb-4"], [1, "no-size"], [1, "btn", "btn-solid", 3, "routerLink"]],
      template: function RopaLeftSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-breadcrumb", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RopaLeftSidebarComponent_Template_div_click_8_listener() {
            return ctx.toggleMobileSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Regresar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "app-product-box-vertical-slider", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "app-categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "app-price", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "div", 4)(21, "div", 16)(22, "div", 4)(23, "div", 17)(24, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RopaLeftSidebarComponent_Template_div_click_24_listener() {
            return ctx.toggleMobileSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, " Filtro ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 21)(29, "app-grid", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("setGrid", function RopaLeftSidebarComponent_Template_app_grid_setGrid_29_listener($event) {
            return ctx.updateGridLayout($event);
          })("setLayout", function RopaLeftSidebarComponent_Template_app_grid_setLayout_29_listener($event) {
            return ctx.updateLayoutView($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 23)(31, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, RopaLeftSidebarComponent_div_32_Template, 3, 5, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](33, "slice");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, RopaLeftSidebarComponent_div_34_Template, 8, 2, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "ngb-pagination", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("pageChange", function RopaLeftSidebarComponent_Template_ngb_pagination_pageChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.page, $event) || (ctx.page = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Ropa")("breadcrumb", "Ropa");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("openFilterbar", ctx.mobileSidebar);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Nuevos Productos");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("min", ctx.minPrice)("max", ctx.maxPrice);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("product_list", ctx.product_list)("pageSize", ctx.pageSize)("layoutView", ctx.layoutView)("sortBy", ctx.sortBy)("seccionId", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.layoutView);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](33, 18, ctx.product_list, (ctx.page - 1) * ctx.pageSize, (ctx.page - 1) * ctx.pageSize + ctx.pageSize));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.product_list.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("page", ctx.page);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSize", ctx.pageSize)("collectionSize", ctx.product_list == null ? null : ctx.product_list.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPagination, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbComponent, _shared_components_categories_categories_component__WEBPACK_IMPORTED_MODULE_2__.CategoriesComponent, _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_3__.ProductBoxOneComponent, _shared_components_product_product_box_vertical_slider_product_box_vertical_slider_component__WEBPACK_IMPORTED_MODULE_4__.ProductBoxVerticalSliderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _widgets_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__.GridComponent, _widgets_price_price_component__WEBPACK_IMPORTED_MODULE_6__.PriceComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.SlicePipe],
      styles: ["p[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n.no-size[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.slide-productos[_ngcontent-%COMP%] {\n  padding: 0 36px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvcGEtbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFBST1lFQ1RPJTIwQVJURVNBTklBUyUyMExVTUFSXFxjbGllbnRlLWZyb250ZW5kLWx1bWFyXFxzcmNcXGFwcFxcc2hvcFxcc2VjY2lvblxccm9wYS1sZWZ0LXNpZGViYXJcXHJvcGEtbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtBQ0NKIiwiZmlsZSI6InJvcGEtbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4ubm8tc2l6ZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zbGlkZS1wcm9kdWN0b3N7XHJcbiAgICBwYWRkaW5nOiAwIDM2cHggIWltcG9ydGFudDtcclxufSIsInAge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4ubm8tc2l6ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNsaWRlLXByb2R1Y3RvcyB7XG4gIHBhZGRpbmc6IDAgMzZweCAhaW1wb3J0YW50O1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9zZWNjaW9uL3JvcGEtbGVmdC1zaWRlYmFyL3JvcGEtbGVmdC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vUFJPWUVDVE8lMjBBUlRFU0FOSUFTJTIwTFVNQVIvY2xpZW50ZS1mcm9udGVuZC1sdW1hci9zcmMvYXBwL3Nob3Avc2VjY2lvbi9yb3BhLWxlZnQtc2lkZWJhci9yb3BhLWxlZnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSjtBRENBLGc2QkFBZzZCIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4ubm8tc2l6ZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zbGlkZS1wcm9kdWN0b3N7XHJcbiAgICBwYWRkaW5nOiAwIDM2cHggIWltcG9ydGFudDtcclxufSIsInAge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4ubm8tc2l6ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNsaWRlLXByb2R1Y3RvcyB7XG4gIHBhZGRpbmc6IDAgMzZweCAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 9122:
/*!*****************************************************************!*\
  !*** ./src/app/shop/seccion/widgets/brands/brands.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrandsComponent: () => (/* binding */ BrandsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);



function BrandsComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BrandsComponent_div_0_div_5_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.appliedFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const brand_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", brand_r4)("checked", ctx_r1.checked(brand_r4))("id", brand_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", brand_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](brand_r4);
  }
}
function BrandsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandsComponent_div_0_Template_h3_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.collapse = !ctx_r1.collapse);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "brand");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BrandsComponent_div_0_div_5_Template, 4, 5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx_r1.collapse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.filterbyBrand);
  }
}
class BrandsComponent {
  constructor() {
    this.products = [];
    this.brands = [];
    this.brandsFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.collapse = true;
  }
  ngOnInit() {}
  get filterbyBrand() {
    const uniqueBrands = [];
    this.products.filter(product => {
      if (product.brand) {
        const index = uniqueBrands.indexOf(product.brand);
        if (index === -1) uniqueBrands.push(product.brand);
      }
    });
    return uniqueBrands;
  }
  appliedFilter(event) {
    let index = this.brands.indexOf(event.target.value); // checked and unchecked value
    if (event.target.checked) this.brands.push(event.target.value); // push in array cheked value
    else this.brands.splice(index, 1); // removed in array unchecked value  
    let brands = this.brands.length ? {
      brand: this.brands.join(",")
    } : {
      brand: null
    };
    this.brandsFilter.emit(brands);
  }
  // check if the item are selected
  checked(item) {
    if (this.brands.indexOf(item) != -1) {
      return true;
    }
  }
  static {
    this.ɵfac = function BrandsComponent_Factory(t) {
      return new (t || BrandsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BrandsComponent,
      selectors: [["app-brands"]],
      inputs: {
        products: "products",
        brands: "brands"
      },
      outputs: {
        brandsFilter: "brandsFilter"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "collection-collapse-block", 3, "open", 4, "ngIf"], [1, "collection-collapse-block"], [1, "collapse-block-title", 3, "click"], [1, "collection-collapse-block-content"], [1, "collection-brand-filter"], ["class", "custom-control custom-checkbox collection-filter-checkbox", 4, "ngFor", "ngForOf"], [1, "custom-control", "custom-checkbox", "collection-filter-checkbox"], ["type", "checkbox", 1, "custom-control-input", 3, "change", "value", "checked", "id"], [1, "custom-control-label", 3, "for"]],
      template: function BrandsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BrandsComponent_div_0_Template, 6, 3, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterbyBrand.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmFuZHMuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9zZWNjaW9uL3dpZGdldHMvYnJhbmRzL2JyYW5kcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0tBQW9LIiwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 8674:
/*!*****************************************************************!*\
  !*** ./src/app/shop/seccion/widgets/colors/colors.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorsComponent: () => (/* binding */ ColorsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);



const _c0 = a0 => ({
  "background-color": a0
});
function ColorsComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ColorsComponent_div_0_div_5_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.appliedFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const color_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", color_r4)("checked", ctx_r1.checked(color_r4))("id", color_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](color_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, color_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", color_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](color_r4);
  }
}
function ColorsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColorsComponent_div_0_Template_h3_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.collapse = !ctx_r1.collapse);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "colors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColorsComponent_div_0_div_5_Template, 5, 10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx_r1.collapse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.filterbycolor);
  }
}
class ColorsComponent {
  constructor() {
    this.products = [];
    this.colors = [];
    this.colorsFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.collapse = true;
  }
  ngOnInit() {}
  get filterbycolor() {
    const uniqueColors = [];
    this.products.filter(product => {
      product.variants.filter(variant => {
        if (variant.color) {
          const index = uniqueColors.indexOf(variant.color);
          if (index === -1) uniqueColors.push(variant.color);
        }
      });
    });
    return uniqueColors;
  }
  appliedFilter(event) {
    let index = this.colors.indexOf(event.target.value); // checked and unchecked value
    if (event.target.checked) this.colors.push(event.target.value); // push in array cheked value
    else this.colors.splice(index, 1); // removed in array unchecked value
    let colors = this.colors.length ? {
      color: this.colors.join(",")
    } : {
      color: null
    };
    this.colorsFilter.emit(colors);
  }
  // check if the item are selected
  checked(item) {
    if (this.colors.indexOf(item) != -1) {
      return true;
    }
  }
  static {
    this.ɵfac = function ColorsComponent_Factory(t) {
      return new (t || ColorsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ColorsComponent,
      selectors: [["app-colors"]],
      inputs: {
        products: "products",
        colors: "colors"
      },
      outputs: {
        colorsFilter: "colorsFilter"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "collection-collapse-block", 3, "open", 4, "ngIf"], [1, "collection-collapse-block"], [1, "collapse-block-title", 3, "click"], [1, "collection-collapse-block-content"], [1, "collection-brand-filter", "color-filter"], ["class", "custom-control custom-checkbox collection-filter-checkbox", 4, "ngFor", "ngForOf"], [1, "custom-control", "custom-checkbox", "collection-filter-checkbox"], ["type", "checkbox", 1, "custom-control-input", 3, "change", "value", "checked", "id"], [3, "ngStyle"], [1, "custom-control-label", 3, "for"]],
      template: function ColorsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ColorsComponent_div_0_Template, 6, 3, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterbycolor.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb2xvcnMuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9zZWNjaW9uL3dpZGdldHMvY29sb3JzL2NvbG9ycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0tBQW9LIiwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 1386:
/*!*************************************************************!*\
  !*** ./src/app/shop/seccion/widgets/grid/grid.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GridComponent: () => (/* binding */ GridComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/productos/producto.service */ 3916);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);





function GridComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "ul")(2, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GridComponent_div_10_Template_li_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.setGridLayout("col-lg-6"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GridComponent_div_10_Template_li_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.setGridLayout("col-lg-4"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GridComponent_div_10_Template_li_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.setGridLayout("col-lg-3"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GridComponent_div_10_Template_li_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.setGridLayout("col-lg-2"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
class GridComponent {
  constructor(productoService) {
    this.productoService = productoService;
    this.paginate = {};
    this.paginate2 = {};
    this.layoutView = 'grid-view';
    this.sortBy = 'AZ';
    this.product_list = [];
    this.setGrid = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.setLayout = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.sortedBy = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  ngOnInit() {}
  setGridLayout(value) {
    this.setGrid.emit(value); // Set Grid Size
  }
  setLayoutView(value) {
    this.layoutView = value;
    this.setLayout.emit(value); // Set layout view
  }
  // Método para obtener productos ordenados
  getSortedProducts(orderBy) {
    this.productoService.getProducts(orderBy, this.seccionId, this.categoriaId).subscribe(res => {
      this.product_list = res;
      this.productoService.updateProductList(res); // Actualiza la lista en el servicio
    });
  }
  // Método para manejar la selección de orden en el HTML
  sorting(event) {
    const selectedOrder = event.target.value;
    this.sortedBy.emit(selectedOrder);
    this.getSortedProducts(selectedOrder); // Llama al servicio para obtener productos ordenados
  }
  static {
    this.ɵfac = function GridComponent_Factory(t) {
      return new (t || GridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_productos_producto_service__WEBPACK_IMPORTED_MODULE_0__.ProductoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GridComponent,
      selectors: [["app-grid"]],
      inputs: {
        paginate: "paginate",
        paginate2: "paginate2",
        layoutView: "layoutView",
        sortBy: "sortBy",
        seccionId: "seccionId",
        categoriaId: "categoriaId",
        pageSize: "pageSize",
        product_list: "product_list"
      },
      outputs: {
        setGrid: "setGrid",
        setLayout: "setLayout",
        sortedBy: "sortedBy"
      },
      decls: 23,
      vars: 5,
      consts: [[1, "product-top-filter"], [1, "row"], [1, "col-12"], [1, "product-filter-content"], [1, "collection-view"], [3, "click"], [1, "fa", "fa-th", "grid-layout-view"], [1, "fa", "fa-list-ul", "list-layout-view"], ["class", "collection-grid-view", 4, "ngIf"], [1, "product-page-filter"], [3, "change"], ["value", "", "disabled", "", "selected", ""], ["value", "AZ", 3, "selected"], ["value", "ZA", 3, "selected"], ["value", "priceAsc", 3, "selected"], ["value", "priceDesc", 3, "selected"], [1, "collection-grid-view"], ["src", "assets/images/icon/2.png", 1, "product-2-layout-view"], ["src", "assets/images/icon/3.png", 1, "product-3-layout-view"], ["src", "assets/images/icon/4.png", 1, "product-4-layout-view"], ["src", "assets/images/icon/6.png", 1, "product-6-layout-view"]],
      template: function GridComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ul")(6, "li", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GridComponent_Template_li_click_6_listener() {
            return ctx.setLayoutView("grid-view");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GridComponent_Template_li_click_8_listener() {
            return ctx.setLayoutView("list-view");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, GridComponent_div_10_Template, 10, 0, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9)(12, "select", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function GridComponent_Template_select_change_12_listener($event) {
            return ctx.sorting($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Ordenar art\u00EDculos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Alfab\u00E9ticamente A-Z");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Alfab\u00E9ticamente Z-A");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Precio de menor a mayor");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Precio de mayor a menor");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.layoutView == "grid-view");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", ctx.sortBy == "AZ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", ctx.sortBy == "ZA");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", ctx.sortBy == "priceAsc");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selected", ctx.sortBy == "priceDesc");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"]],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmlkLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9zZWNjaW9uL3dpZGdldHMvZ3JpZC9ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6650:
/*!*************************************************************************!*\
  !*** ./src/app/shop/seccion/widgets/pagination/pagination.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PaginationComponent: () => (/* binding */ PaginationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);



const _c0 = a0 => ({
  disabled: a0
});
const _c1 = a0 => ({
  active: a0
});
function PaginationComponent_div_0_ul_6_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18)(1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_div_0_ul_6_li_7_Template_a_click_1_listener() {
      const page_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.pageSet(page_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r1.paginate.currentPage == page_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r4);
  }
}
function PaginationComponent_div_0_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 9)(1, "li", 10)(2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_div_0_ul_6_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.pageSet(ctx_r1.paginate.currentPage - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PaginationComponent_div_0_ul_6_li_7_Template, 3, 4, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 10)(9, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_div_0_ul_6_Template_a_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.pageSet(ctx_r1.paginate.currentPage + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r1.paginate.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.paginate.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r1.paginate.currentPage == ctx_r1.paginate.totalPages));
  }
}
function PaginationComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "nav", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PaginationComponent_div_0_ul_6_Template, 14, 7, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "div", 8)(9, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.paginate.pages && ctx_r1.paginate.pages.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Showing Products 1-", ctx_r1.product_list.length, " of ", ctx_r1.paginate2.totalItems, " Result");
  }
}
class PaginationComponent {
  constructor() {
    this.product_list = [];
    this.paginate = {};
    this.paginate2 = {};
    this.setPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {}
  pageSet(page) {
    this.setPage.emit(page); // Set Page Number  
  }
  static {
    this.ɵfac = function PaginationComponent_Factory(t) {
      return new (t || PaginationComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PaginationComponent,
      selectors: [["app-pagination"]],
      inputs: {
        product_list: "product_list",
        paginate: "paginate",
        paginate2: "paginate2"
      },
      outputs: {
        setPage: "setPage"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "product-pagination", 4, "ngIf"], [1, "product-pagination"], [1, "theme-paggination-block"], [1, "container-fluid", "p-0"], [1, "row"], [1, "col-xl-6", "col-md-6", "col-sm-12"], ["aria-label", "Page navigation"], ["class", "pagination", 4, "ngIf"], [1, "product-search-count-bottom"], [1, "pagination"], [1, "page-item", 3, "ngClass"], ["href", "javascript:void(0)", "aria-label", "Previous", 1, "page-link", 3, "click"], ["aria-hidden", "true"], ["aria-hidden", "true", 1, "fa", "fa-chevron-left"], [1, "sr-only"], ["class", "page-item active", 3, "ngClass", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", "aria-label", "Next", 1, "page-link", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-chevron-right"], [1, "page-item", "active", 3, "ngClass"], ["href", "javascript:void(0)", 1, "page-link", 3, "click"]],
      template: function PaginationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PaginationComponent_div_0_Template, 11, 3, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product_list.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9zZWNjaW9uL3dpZGdldHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7832:
/*!***************************************************************!*\
  !*** ./src/app/shop/seccion/widgets/price/price.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PriceComponent: () => (/* binding */ PriceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class PriceComponent {
  constructor() {
    // Using Output EventEmitter
    this.priceFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.collapse = true;
    this.isBrowser = false;
    // Configuración del slider
    this.options = {
      floor: 0,
      ceil: 10000,
      step: 1,
      translate: value => `\$${value}` // Opcional: para mostrar el valor en formato de moneda
    };
  }
  ngOnInit() {}
  // Método para manejar cambios en los valores del slider
  onValueChange(event) {
    if (this.min < this.options.floor) {
      this.min = this.options.floor;
    }
    if (this.max > this.options.ceil) {
      this.max = this.options.ceil;
    }
  }
  static {
    this.ɵfac = function PriceComponent_Factory(t) {
      return new (t || PriceComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PriceComponent,
      selectors: [["app-price"]],
      inputs: {
        min: "min",
        max: "max"
      },
      outputs: {
        priceFilter: "priceFilter"
      },
      decls: 0,
      vars: 0,
      template: function PriceComponent_Template(rf, ctx) {},
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmljZS5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9zZWNjaW9uL3dpZGdldHMvcHJpY2UvcHJpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdLQUFnSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9992:
/*!*************************************************************!*\
  !*** ./src/app/shop/seccion/widgets/size/size.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SizeComponent: () => (/* binding */ SizeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);



function SizeComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SizeComponent_div_0_div_6_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.appliedFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const size_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", size_r4)("checked", ctx_r1.checked(size_r4))("id", size_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", size_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](size_r4);
  }
}
function SizeComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SizeComponent_div_0_Template_h3_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.collapse = !ctx_r1.collapse);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SizeComponent_div_0_div_6_Template, 4, 5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx_r1.collapse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.filterbysize);
  }
}
class SizeComponent {
  constructor() {
    this.products = [];
    this.size = [];
    this.sizeFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.collapse = true;
  }
  ngOnInit() {}
  get filterbysize() {
    const uniqueSize = [];
    this.products.filter(product => {
      product.variants.filter(variant => {
        if (variant.size) {
          const index = uniqueSize.indexOf(variant.size);
          if (index === -1) uniqueSize.push(variant.size);
        }
      });
    });
    return uniqueSize;
  }
  appliedFilter(event) {
    let index = this.size.indexOf(event.target.value); // checked and unchecked value
    if (event.target.checked) this.size.push(event.target.value); // push in array cheked value
    else this.size.splice(index, 1); // removed in array unchecked value  
    let size = this.size.length ? {
      size: this.size.join(",")
    } : {
      size: null
    };
    this.sizeFilter.emit(size);
  }
  // check if the item are selected
  checked(item) {
    if (this.size.indexOf(item) != -1) {
      return true;
    }
  }
  static {
    this.ɵfac = function SizeComponent_Factory(t) {
      return new (t || SizeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SizeComponent,
      selectors: [["app-size"]],
      inputs: {
        products: "products",
        size: "size"
      },
      outputs: {
        sizeFilter: "sizeFilter"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "collection-collapse-block", 3, "open", 4, "ngIf"], [1, "collection-collapse-block"], [1, "collapse-block-title", 3, "click"], [1, "collection-collapse-block-content"], [1, "color-selector"], [1, "collection-brand-filter"], ["class", "custom-control custom-checkbox collection-filter-checkbox", 4, "ngFor", "ngForOf"], [1, "custom-control", "custom-checkbox", "collection-filter-checkbox"], ["type", "checkbox", 1, "custom-control-input", 3, "change", "value", "checked", "id"], [1, "custom-control-label", 3, "for"]],
      template: function SizeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SizeComponent_div_0_Template, 7, 3, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterbysize.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaXplLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC9zZWNjaW9uL3dpZGdldHMvc2l6ZS9zaXplLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6920:
/*!*********************************************!*\
  !*** ./src/app/shop/shop-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShopRoutingModule: () => (/* binding */ ShopRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _product_three_column_three_column_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product/three-column/three-column.component */ 9005);
/* harmony import */ var _seccion_artesanias_left_sidebar_artesanias_left_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seccion/artesanias-left-sidebar/artesanias-left-sidebar.component */ 8586);
/* harmony import */ var _seccion_joyeria_left_sidebar_joyeria_left_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seccion/joyeria-left-sidebar/joyeria-left-sidebar.component */ 3520);
/* harmony import */ var _seccion_ropa_left_sidebar_ropa_left_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seccion/ropa-left-sidebar/ropa-left-sidebar.component */ 1953);
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart/cart.component */ 407);
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wishlist/wishlist.component */ 6593);
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout/checkout.component */ 1823);
/* harmony import */ var _checkout_success_success_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkout/success/success.component */ 3198);
/* harmony import */ var _seccion_bolsos_left_sidebar_bolsos_left_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./seccion/bolsos-left-sidebar/bolsos-left-sidebar.component */ 5494);
/* harmony import */ var _categoria_regalos_left_slider_regalos_left_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./categoria/regalos-left-slider/regalos-left-sidebar.component */ 6292);
/* harmony import */ var _categoria_decorativas_left_slider_decorativas_left_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./categoria/decorativas-left-slider/decorativas-left-sidebar.component */ 2544);
/* harmony import */ var _categoria_hogar_left_slider_hogar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./categoria/hogar-left-slider/hogar-left-sidebar.component */ 8280);
/* harmony import */ var _categoria_oficina_left_slider_oficina_left_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./categoria/oficina-left-slider/oficina-left-sidebar.component */ 7804);
/* harmony import */ var _categoria_joyeria_categoria_left_slider_joyeria_categoria_left_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./categoria/joyeria-categoria-left-slider/joyeria-categoria-left-sidebar.component */ 7248);
/* harmony import */ var _categoria_accesorio_ropa_left_slider_accesorio_ropa_left_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./categoria/accesorio-ropa-left-slider/accesorio-ropa-left-sidebar.component */ 8064);
/* harmony import */ var _categoria_ropa_hombre_left_slider_ropa_hombre_left_sidebar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./categoria/ropa-hombre-left-slider/ropa-hombre-left-sidebar.component */ 7340);
/* harmony import */ var _categoria_ropa_mujer_left_slider_ropa_mujer_left_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./categoria/ropa-mujer-left-slider/ropa-mujer-left-sidebar.component */ 7914);
/* harmony import */ var _categoria_mochilas_left_slider_mochilas_left_sidebar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./categoria/mochilas-left-slider/mochilas-left-sidebar.component */ 9430);
/* harmony import */ var _categoria_billetera_left_slider_billetera_left_sidebar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./categoria/billetera-left-slider/billetera-left-sidebar.component */ 2495);
/* harmony import */ var _shop_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shop.component */ 5558);
/* harmony import */ var _flitro_productos_search_product_search_product_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./flitro-productos/search-product/search-product.component */ 5776);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 7580);
























const routes = [{
  path: '',
  component: _shop_component__WEBPACK_IMPORTED_MODULE_19__.ShopComponent
}, {
  path: 'product/three/column/:slug',
  component: _product_three_column_three_column_component__WEBPACK_IMPORTED_MODULE_0__.ThreeColumnComponent
}, {
  path: 'product/search',
  component: _flitro_productos_search_product_search_product_component__WEBPACK_IMPORTED_MODULE_20__.SearchProductComponent
}, {
  path: 'seccion/artesanias',
  component: _seccion_artesanias_left_sidebar_artesanias_left_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.ArtesaniasLeftSidebarComponent
}, {
  path: 'seccion/joyeria',
  component: _seccion_joyeria_left_sidebar_joyeria_left_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.JoyeriaLeftSidebarComponent
}, {
  path: 'seccion/ropa',
  component: _seccion_ropa_left_sidebar_ropa_left_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.RopaLeftSidebarComponent
}, {
  path: 'seccion/bolsos',
  component: _seccion_bolsos_left_sidebar_bolsos_left_sidebar_component__WEBPACK_IMPORTED_MODULE_8__.BolsosLeftSidebarComponent
},
//Rutas componentes
{
  path: 'categoria/regalos',
  component: _categoria_regalos_left_slider_regalos_left_sidebar_component__WEBPACK_IMPORTED_MODULE_9__.RegalosLeftSidebarComponent
}, {
  path: 'categoria/decorativas',
  component: _categoria_decorativas_left_slider_decorativas_left_sidebar_component__WEBPACK_IMPORTED_MODULE_10__.DecorativasLeftSidebarComponent
}, {
  path: 'categoria/hogar',
  component: _categoria_hogar_left_slider_hogar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_11__.HogarLeftSidebarComponent
}, {
  path: 'categoria/oficina',
  component: _categoria_oficina_left_slider_oficina_left_sidebar_component__WEBPACK_IMPORTED_MODULE_12__.OficinaLeftSidebarComponent
}, {
  path: 'categoria/joyeria',
  component: _categoria_joyeria_categoria_left_slider_joyeria_categoria_left_sidebar_component__WEBPACK_IMPORTED_MODULE_13__.JoyeriaCategoriaLeftSidebarComponent
}, {
  path: 'categoria/accesorios-ropa',
  component: _categoria_accesorio_ropa_left_slider_accesorio_ropa_left_sidebar_component__WEBPACK_IMPORTED_MODULE_14__.AccesorioRopaLeftSidebarComponent
}, {
  path: 'categoria/ropa-hombre',
  component: _categoria_ropa_hombre_left_slider_ropa_hombre_left_sidebar_component__WEBPACK_IMPORTED_MODULE_15__.RopaHombreLeftSidebarComponent
}, {
  path: 'categoria/ropa-mujer',
  component: _categoria_ropa_mujer_left_slider_ropa_mujer_left_sidebar_component__WEBPACK_IMPORTED_MODULE_16__.RopaMujerLeftSidebarComponent
}, {
  path: 'categoria/mochilas',
  component: _categoria_mochilas_left_slider_mochilas_left_sidebar_component__WEBPACK_IMPORTED_MODULE_17__.MochilasLeftSidebarComponent
}, {
  path: 'categoria/billetera',
  component: _categoria_billetera_left_slider_billetera_left_sidebar_component__WEBPACK_IMPORTED_MODULE_18__.BilleteraLeftSidebarComponent
}, {
  path: 'cart',
  component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__.CartComponent
}, {
  path: 'wishlist',
  component: _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_5__.WishlistComponent
}, {
  path: 'checkout',
  component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__.CheckoutComponent
}, {
  path: 'checkout/success',
  component: _checkout_success_success_component__WEBPACK_IMPORTED_MODULE_7__.SuccessComponent
}];
class ShopRoutingModule {
  static {
    this.ɵfac = function ShopRoutingModule_Factory(t) {
      return new (t || ShopRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({
      type: ShopRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](ShopRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule]
  });
})();

/***/ }),

/***/ 393:
/*!*************************************!*\
  !*** ./src/app/shop/shop.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShopModule: () => (/* binding */ ShopModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var ngx_slider_v2__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-slider-v2 */ 9323);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ngx-infinite-scroll */ 6739);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 3887);
/* harmony import */ var _shop_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop-routing.module */ 6920);
/* harmony import */ var _product_three_column_three_column_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/three-column/three-column.component */ 9005);
/* harmony import */ var _product_widgets_services_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product/widgets/services/services.component */ 8341);
/* harmony import */ var _product_widgets_countdown_countdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/widgets/countdown/countdown.component */ 1815);
/* harmony import */ var _product_widgets_social_social_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/widgets/social/social.component */ 5679);
/* harmony import */ var _product_widgets_stock_inventory_stock_inventory_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/widgets/stock-inventory/stock-inventory.component */ 3036);
/* harmony import */ var _product_widgets_related_product_related_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product/widgets/related-product/related-product.component */ 6807);
/* harmony import */ var _seccion_artesanias_left_sidebar_artesanias_left_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./seccion/artesanias-left-sidebar/artesanias-left-sidebar.component */ 8586);
/* harmony import */ var _seccion_joyeria_left_sidebar_joyeria_left_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./seccion/joyeria-left-sidebar/joyeria-left-sidebar.component */ 3520);
/* harmony import */ var _seccion_ropa_left_sidebar_ropa_left_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./seccion/ropa-left-sidebar/ropa-left-sidebar.component */ 1953);
/* harmony import */ var _seccion_bolsos_left_sidebar_bolsos_left_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./seccion/bolsos-left-sidebar/bolsos-left-sidebar.component */ 5494);
/* harmony import */ var _categoria_regalos_left_slider_regalos_left_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./categoria/regalos-left-slider/regalos-left-sidebar.component */ 6292);
/* harmony import */ var _categoria_decorativas_left_slider_decorativas_left_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./categoria/decorativas-left-slider/decorativas-left-sidebar.component */ 2544);
/* harmony import */ var _categoria_hogar_left_slider_hogar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./categoria/hogar-left-slider/hogar-left-sidebar.component */ 8280);
/* harmony import */ var _categoria_oficina_left_slider_oficina_left_sidebar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./categoria/oficina-left-slider/oficina-left-sidebar.component */ 7804);
/* harmony import */ var _categoria_joyeria_categoria_left_slider_joyeria_categoria_left_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./categoria/joyeria-categoria-left-slider/joyeria-categoria-left-sidebar.component */ 7248);
/* harmony import */ var _categoria_accesorio_ropa_left_slider_accesorio_ropa_left_sidebar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./categoria/accesorio-ropa-left-slider/accesorio-ropa-left-sidebar.component */ 8064);
/* harmony import */ var _categoria_ropa_hombre_left_slider_ropa_hombre_left_sidebar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./categoria/ropa-hombre-left-slider/ropa-hombre-left-sidebar.component */ 7340);
/* harmony import */ var _categoria_ropa_mujer_left_slider_ropa_mujer_left_sidebar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./categoria/ropa-mujer-left-slider/ropa-mujer-left-sidebar.component */ 7914);
/* harmony import */ var _categoria_mochilas_left_slider_mochilas_left_sidebar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./categoria/mochilas-left-slider/mochilas-left-sidebar.component */ 9430);
/* harmony import */ var _categoria_billetera_left_slider_billetera_left_sidebar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./categoria/billetera-left-slider/billetera-left-sidebar.component */ 2495);
/* harmony import */ var _seccion_widgets_grid_grid_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./seccion/widgets/grid/grid.component */ 1386);
/* harmony import */ var _seccion_widgets_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./seccion/widgets/pagination/pagination.component */ 6650);
/* harmony import */ var _seccion_widgets_brands_brands_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./seccion/widgets/brands/brands.component */ 9122);
/* harmony import */ var _seccion_widgets_colors_colors_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./seccion/widgets/colors/colors.component */ 8674);
/* harmony import */ var _seccion_widgets_size_size_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./seccion/widgets/size/size.component */ 9992);
/* harmony import */ var _seccion_widgets_price_price_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./seccion/widgets/price/price.component */ 7832);
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./cart/cart.component */ 407);
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./wishlist/wishlist.component */ 6593);
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./checkout/checkout.component */ 1823);
/* harmony import */ var _checkout_success_success_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./checkout/success/success.component */ 3198);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _flitro_productos_search_product_search_product_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./flitro-productos/search-product/search-product.component */ 5776);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/core */ 7580);





// Product Details Components

// Product Details Widgest Components





// Secciones Components




// Categorias Components










// Collection Widgets













class ShopModule {
  static {
    this.ɵfac = function ShopModule_Factory(t) {
      return new (t || ShopModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineNgModule"]({
      type: ShopModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_34__.CommonModule, ngx_slider_v2__WEBPACK_IMPORTED_MODULE_35__.NgxSliderModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_36__.InfiniteScrollModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _shop_routing_module__WEBPACK_IMPORTED_MODULE_1__.ShopRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_37__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵsetNgModuleScope"](ShopModule, {
    declarations: [_product_three_column_three_column_component__WEBPACK_IMPORTED_MODULE_2__.ThreeColumnComponent, _product_widgets_services_services_component__WEBPACK_IMPORTED_MODULE_3__.ServicesComponent, _product_widgets_countdown_countdown_component__WEBPACK_IMPORTED_MODULE_4__.CountdownComponent, _product_widgets_social_social_component__WEBPACK_IMPORTED_MODULE_5__.SocialComponent, _product_widgets_stock_inventory_stock_inventory_component__WEBPACK_IMPORTED_MODULE_6__.StockInventoryComponent, _product_widgets_related_product_related_product_component__WEBPACK_IMPORTED_MODULE_7__.RelatedProductComponent, _seccion_artesanias_left_sidebar_artesanias_left_sidebar_component__WEBPACK_IMPORTED_MODULE_8__.ArtesaniasLeftSidebarComponent, _seccion_joyeria_left_sidebar_joyeria_left_sidebar_component__WEBPACK_IMPORTED_MODULE_9__.JoyeriaLeftSidebarComponent, _seccion_ropa_left_sidebar_ropa_left_sidebar_component__WEBPACK_IMPORTED_MODULE_10__.RopaLeftSidebarComponent, _seccion_bolsos_left_sidebar_bolsos_left_sidebar_component__WEBPACK_IMPORTED_MODULE_11__.BolsosLeftSidebarComponent, _seccion_widgets_grid_grid_component__WEBPACK_IMPORTED_MODULE_22__.GridComponent, _seccion_widgets_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_23__.PaginationComponent, _seccion_widgets_brands_brands_component__WEBPACK_IMPORTED_MODULE_24__.BrandsComponent, _seccion_widgets_colors_colors_component__WEBPACK_IMPORTED_MODULE_25__.ColorsComponent, _seccion_widgets_size_size_component__WEBPACK_IMPORTED_MODULE_26__.SizeComponent, _seccion_widgets_price_price_component__WEBPACK_IMPORTED_MODULE_27__.PriceComponent, _cart_cart_component__WEBPACK_IMPORTED_MODULE_28__.CartComponent, _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_29__.WishlistComponent, _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_30__.CheckoutComponent, _checkout_success_success_component__WEBPACK_IMPORTED_MODULE_31__.SuccessComponent,
    //Categorias Component
    _categoria_regalos_left_slider_regalos_left_sidebar_component__WEBPACK_IMPORTED_MODULE_12__.RegalosLeftSidebarComponent, _categoria_decorativas_left_slider_decorativas_left_sidebar_component__WEBPACK_IMPORTED_MODULE_13__.DecorativasLeftSidebarComponent, _categoria_hogar_left_slider_hogar_left_sidebar_component__WEBPACK_IMPORTED_MODULE_14__.HogarLeftSidebarComponent, _categoria_oficina_left_slider_oficina_left_sidebar_component__WEBPACK_IMPORTED_MODULE_15__.OficinaLeftSidebarComponent, _categoria_joyeria_categoria_left_slider_joyeria_categoria_left_sidebar_component__WEBPACK_IMPORTED_MODULE_16__.JoyeriaCategoriaLeftSidebarComponent, _categoria_accesorio_ropa_left_slider_accesorio_ropa_left_sidebar_component__WEBPACK_IMPORTED_MODULE_17__.AccesorioRopaLeftSidebarComponent, _categoria_ropa_hombre_left_slider_ropa_hombre_left_sidebar_component__WEBPACK_IMPORTED_MODULE_18__.RopaHombreLeftSidebarComponent, _categoria_ropa_mujer_left_slider_ropa_mujer_left_sidebar_component__WEBPACK_IMPORTED_MODULE_19__.RopaMujerLeftSidebarComponent, _categoria_mochilas_left_slider_mochilas_left_sidebar_component__WEBPACK_IMPORTED_MODULE_20__.MochilasLeftSidebarComponent, _categoria_billetera_left_slider_billetera_left_sidebar_component__WEBPACK_IMPORTED_MODULE_21__.BilleteraLeftSidebarComponent, _flitro_productos_search_product_search_product_component__WEBPACK_IMPORTED_MODULE_32__.SearchProductComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_34__.CommonModule, ngx_slider_v2__WEBPACK_IMPORTED_MODULE_35__.NgxSliderModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_36__.InfiniteScrollModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _shop_routing_module__WEBPACK_IMPORTED_MODULE_1__.ShopRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_37__.RouterModule]
  });
})();

/***/ }),

/***/ 6593:
/*!*****************************************************!*\
  !*** ./src/app/shop/wishlist/wishlist.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WishlistComponent: () => (/* binding */ WishlistComponent)
/* harmony export */ });
/* harmony import */ var C_Users_SAMIRJR11_Documents_PROYECTO_ARTESANIAS_LUMAR_cliente_frontend_lumar_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/product.service */ 5085);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/breadcrumb/breadcrumb.component */ 8173);
/* harmony import */ var _shared_pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/pipes/discount.pipe */ 8943);







const _c0 = a0 => ["/shop/product/left/sidebar/", a0];
const _c1 = () => ["/shop/cart"];
const _c2 = () => ["/shop/collection/left/sidebar"];
const _c3 = () => ["/shop/checkout"];
function WishlistComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h3", 8)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Wishlist is Empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Explore more shortlist some items.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function WishlistComponent_div_4_tbody_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody")(1, "tr")(2, "td")(3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td")(6, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 17)(10, "div", 18)(11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 18)(14, "h2", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 18)(19, "h2", 19)(20, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WishlistComponent_div_4_tbody_15_Template_a_click_20_listener() {
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.removeItem(product_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WishlistComponent_div_4_tbody_15_Template_a_click_22_listener() {
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.addToCart(product_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "td")(25, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "td")(30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "td")(33, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WishlistComponent_div_4_tbody_15_Template_a_click_33_listener() {
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.removeItem(product_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WishlistComponent_div_4_tbody_15_Template_a_click_35_listener() {
      const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.addToCart(product_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](26, _c0, product_r2.title.replace(" ", "-")));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", product_r2.images[0].src, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", product_r2.images[0].alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](28, _c0, product_r2.title.replace(" ", "-")));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 10, product_r2.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](product_r2.stock > 0 ? "in stock" : "out of stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](17, 15, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](16, 12, product_r2.price, product_r2) * (ctx_r2.productService == null ? null : ctx_r2.productService.Currency.price), ctx_r2.productService == null ? null : ctx_r2.productService.Currency.currency, "symbol"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](30, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](28, 22, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](27, 19, product_r2.price, product_r2) * (ctx_r2.productService == null ? null : ctx_r2.productService.Currency.price), ctx_r2.productService == null ? null : ctx_r2.productService.Currency.currency, "symbol"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](product_r2.stock > 0 ? "in stock" : "out of stock");
  }
}
function WishlistComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "table", 11)(3, "thead")(4, "tr", 12)(5, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "product name");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "price");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "availability");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "action");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, WishlistComponent_div_4_tbody_15_Template, 37, 31, "tbody", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.products);
  }
}
function WishlistComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "continue shopping");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "check out");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c3));
  }
}
class WishlistComponent {
  constructor(router, productService) {
    this.router = router;
    this.productService = productService;
    this.products = [];
    this.productService.wishlistItems.subscribe(response => this.products = response);
  }
  ngOnInit() {}
  addToCart(product) {
    var _this = this;
    return (0,C_Users_SAMIRJR11_Documents_PROYECTO_ARTESANIAS_LUMAR_cliente_frontend_lumar_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const status = yield _this.productService.addToCart(product);
      if (status) {
        _this.router.navigate(['/shop/cart']);
        _this.removeItem(product);
      }
    })();
  }
  removeItem(product) {
    this.productService.removeWishlistItem(product);
  }
  static {
    this.ɵfac = function WishlistComponent_Factory(t) {
      return new (t || WishlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: WishlistComponent,
      selectors: [["app-wishlist"]],
      decls: 6,
      vars: 5,
      consts: [[3, "title", "breadcrumb"], [1, "wishlist-section", "section-b-space"], [1, "container"], ["class", "col-md-12 empty-cart-cls text-center", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "row wishlist-buttons", 4, "ngIf"], [1, "col-md-12", "empty-cart-cls", "text-center"], ["src", "assets/images/empty-wishlist.png", "alt", "Empty cart", "title", "Emprt cart"], [1, "mt-4"], [1, "row"], [1, "col-sm-12"], [1, "table", "cart-table", "table-responsive-xs"], [1, "table-head"], ["scope", "col"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [3, "src", "alt"], [1, "mobile-cart-content", "row"], [1, "col"], [1, "td-color"], ["href", "javascript:void(0)", 1, "icon", "me-1", 3, "click"], [1, "ti-close"], [1, "cart", 3, "click", "routerLink"], [1, "ti-shopping-cart"], ["href", "javascript:void(0)", 1, "icon", "me-3", 3, "click"], ["href", "javascript:void(0)", 1, "cart", 3, "click"], [1, "row", "wishlist-buttons"], [1, "col-12"], [1, "btn", "btn-solid", 3, "routerLink"]],
      template: function WishlistComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-breadcrumb", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "section", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, WishlistComponent_div_3_Template, 7, 0, "div", 3)(4, WishlistComponent_div_4_Template, 16, 1, "div", 4)(5, WishlistComponent_div_5_Template, 6, 4, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Wishlist")("breadcrumb", "Wishlist");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.products.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.products.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.products.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe, _shared_pipes_discount_pipe__WEBPACK_IMPORTED_MODULE_3__.DiscountPipe],
      styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aXNobGlzdC5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvcC93aXNobGlzdC93aXNobGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0tBQW9LIiwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 8899:
/*!**************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   afterMain: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.afterMain),
/* harmony export */   afterRead: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.afterRead),
/* harmony export */   afterWrite: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.afterWrite),
/* harmony export */   applyStyles: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.applyStyles),
/* harmony export */   arrow: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.arrow),
/* harmony export */   auto: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.auto),
/* harmony export */   basePlacements: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.basePlacements),
/* harmony export */   beforeMain: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.beforeMain),
/* harmony export */   beforeRead: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.beforeRead),
/* harmony export */   beforeWrite: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.beforeWrite),
/* harmony export */   bottom: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom),
/* harmony export */   clippingParents: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.clippingParents),
/* harmony export */   computeStyles: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.computeStyles),
/* harmony export */   createPopper: () => (/* reexport safe */ _popper_js__WEBPACK_IMPORTED_MODULE_4__.createPopper),
/* harmony export */   createPopperBase: () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_2__.createPopper),
/* harmony export */   createPopperLite: () => (/* reexport safe */ _popper_lite_js__WEBPACK_IMPORTED_MODULE_5__.createPopper),
/* harmony export */   detectOverflow: () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   end: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.end),
/* harmony export */   eventListeners: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.eventListeners),
/* harmony export */   flip: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.flip),
/* harmony export */   hide: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.hide),
/* harmony export */   left: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.left),
/* harmony export */   main: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.main),
/* harmony export */   modifierPhases: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.modifierPhases),
/* harmony export */   offset: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.offset),
/* harmony export */   placements: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.placements),
/* harmony export */   popper: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.popper),
/* harmony export */   popperGenerator: () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_2__.popperGenerator),
/* harmony export */   popperOffsets: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.popperOffsets),
/* harmony export */   preventOverflow: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__.preventOverflow),
/* harmony export */   read: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.read),
/* harmony export */   reference: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.reference),
/* harmony export */   right: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.right),
/* harmony export */   start: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.start),
/* harmony export */   top: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.top),
/* harmony export */   variationPlacements: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.variationPlacements),
/* harmony export */   viewport: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.viewport),
/* harmony export */   write: () => (/* reexport safe */ _enums_js__WEBPACK_IMPORTED_MODULE_0__.write)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ 9322);
/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/index.js */ 945);
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPopper.js */ 692);
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createPopper.js */ 7269);
/* harmony import */ var _popper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popper.js */ 5412);
/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popper-lite.js */ 5125);

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ 5461:
/*!***********************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/hide.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums.js */ 9322);
/* harmony import */ var _utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/detectOverflow.js */ 7269);


function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [_enums_js__WEBPACK_IMPORTED_MODULE_0__.top, _enums_js__WEBPACK_IMPORTED_MODULE_0__.right, _enums_js__WEBPACK_IMPORTED_MODULE_0__.bottom, _enums_js__WEBPACK_IMPORTED_MODULE_0__.left].some(function (side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state,
    name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = (0,_utils_detectOverflow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});

/***/ }),

/***/ 945:
/*!************************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/modifiers/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyStyles: () => (/* reexport safe */ _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   arrow: () => (/* reexport safe */ _arrow_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   computeStyles: () => (/* reexport safe */ _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   eventListeners: () => (/* reexport safe */ _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   flip: () => (/* reexport safe */ _flip_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   hide: () => (/* reexport safe */ _hide_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   offset: () => (/* reexport safe */ _offset_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   popperOffsets: () => (/* reexport safe */ _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   preventOverflow: () => (/* reexport safe */ _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__["default"])
/* harmony export */ });
/* harmony import */ var _applyStyles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyStyles.js */ 6643);
/* harmony import */ var _arrow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow.js */ 7348);
/* harmony import */ var _computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computeStyles.js */ 5474);
/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventListeners.js */ 5496);
/* harmony import */ var _flip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./flip.js */ 4970);
/* harmony import */ var _hide_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hide.js */ 5461);
/* harmony import */ var _offset_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offset.js */ 142);
/* harmony import */ var _popperOffsets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./popperOffsets.js */ 943);
/* harmony import */ var _preventOverflow_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./preventOverflow.js */ 7437);










/***/ }),

/***/ 5412:
/*!***************************************************!*\
  !*** ./node_modules/@popperjs/core/lib/popper.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyStyles: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.applyStyles),
/* harmony export */   arrow: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.arrow),
/* harmony export */   computeStyles: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.computeStyles),
/* harmony export */   createPopper: () => (/* binding */ createPopper),
/* harmony export */   createPopperLite: () => (/* reexport safe */ _popper_lite_js__WEBPACK_IMPORTED_MODULE_11__.createPopper),
/* harmony export */   defaultModifiers: () => (/* binding */ defaultModifiers),
/* harmony export */   detectOverflow: () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   eventListeners: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.eventListeners),
/* harmony export */   flip: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.flip),
/* harmony export */   hide: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.hide),
/* harmony export */   offset: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.offset),
/* harmony export */   popperGenerator: () => (/* reexport safe */ _createPopper_js__WEBPACK_IMPORTED_MODULE_9__.popperGenerator),
/* harmony export */   popperOffsets: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.popperOffsets),
/* harmony export */   preventOverflow: () => (/* reexport safe */ _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__.preventOverflow)
/* harmony export */ });
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./createPopper.js */ 692);
/* harmony import */ var _createPopper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./createPopper.js */ 7269);
/* harmony import */ var _modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifiers/eventListeners.js */ 5496);
/* harmony import */ var _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiers/popperOffsets.js */ 943);
/* harmony import */ var _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modifiers/computeStyles.js */ 5474);
/* harmony import */ var _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modifiers/applyStyles.js */ 6643);
/* harmony import */ var _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modifiers/offset.js */ 142);
/* harmony import */ var _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modifiers/flip.js */ 4970);
/* harmony import */ var _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modifiers/preventOverflow.js */ 7437);
/* harmony import */ var _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modifiers/arrow.js */ 7348);
/* harmony import */ var _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modifiers/hide.js */ 5461);
/* harmony import */ var _popper_lite_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./popper-lite.js */ 5125);
/* harmony import */ var _modifiers_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modifiers/index.js */ 945);










var defaultModifiers = [_modifiers_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__["default"], _modifiers_popperOffsets_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modifiers_computeStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modifiers_applyStyles_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modifiers_offset_js__WEBPACK_IMPORTED_MODULE_4__["default"], _modifiers_flip_js__WEBPACK_IMPORTED_MODULE_5__["default"], _modifiers_preventOverflow_js__WEBPACK_IMPORTED_MODULE_6__["default"], _modifiers_arrow_js__WEBPACK_IMPORTED_MODULE_7__["default"], _modifiers_hide_js__WEBPACK_IMPORTED_MODULE_8__["default"]];
var createPopper = /*#__PURE__*/(0,_createPopper_js__WEBPACK_IMPORTED_MODULE_9__.popperGenerator)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),

/***/ 3527:
/*!*********************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Alert: () => (/* binding */ Alert),
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   Carousel: () => (/* binding */ Carousel),
/* harmony export */   Collapse: () => (/* binding */ Collapse),
/* harmony export */   Dropdown: () => (/* binding */ Dropdown),
/* harmony export */   Modal: () => (/* binding */ Modal),
/* harmony export */   Offcanvas: () => (/* binding */ Offcanvas),
/* harmony export */   Popover: () => (/* binding */ Popover),
/* harmony export */   ScrollSpy: () => (/* binding */ ScrollSpy),
/* harmony export */   Tab: () => (/* binding */ Tab),
/* harmony export */   Toast: () => (/* binding */ Toast),
/* harmony export */   Tooltip: () => (/* binding */ Tooltip)
/* harmony export */ });
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @popperjs/core */ 8899);
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @popperjs/core */ 5412);
/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */


/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

const elementMap = new Map();
const Data = {
  set(element, key, instance) {
    if (!elementMap.has(element)) {
      elementMap.set(element, new Map());
    }
    const instanceMap = elementMap.get(element);

    // make it clear we only want one instance per element
    // can be removed later when multiple key/instances are fine to be used
    if (!instanceMap.has(key) && instanceMap.size !== 0) {
      // eslint-disable-next-line no-console
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
      return;
    }
    instanceMap.set(key, instance);
  },
  get(element, key) {
    if (elementMap.has(element)) {
      return elementMap.get(element).get(key) || null;
    }
    return null;
  },
  remove(element, key) {
    if (!elementMap.has(element)) {
      return;
    }
    const instanceMap = elementMap.get(element);
    instanceMap.delete(key);

    // free up element references if there are no instances left for an element
    if (instanceMap.size === 0) {
      elementMap.delete(element);
    }
  }
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const MAX_UID = 1000000;
const MILLISECONDS_MULTIPLIER = 1000;
const TRANSITION_END = 'transitionend';

/**
 * Properly escape IDs selectors to handle weird IDs
 * @param {string} selector
 * @returns {string}
 */
const parseSelector = selector => {
  if (selector && window.CSS && window.CSS.escape) {
    // document.querySelector needs escaping to handle IDs (html5+) containing for instance /
    selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
  }
  return selector;
};

// Shout-out Angus Croll (https://goo.gl/pxwQGp)
const toType = object => {
  if (object === null || object === undefined) {
    return `${object}`;
  }
  return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
};

/**
 * Public Util API
 */

const getUID = prefix => {
  do {
    prefix += Math.floor(Math.random() * MAX_UID);
  } while (document.getElementById(prefix));
  return prefix;
};
const getTransitionDurationFromElement = element => {
  if (!element) {
    return 0;
  }

  // Get transition-duration of the element
  let {
    transitionDuration,
    transitionDelay
  } = window.getComputedStyle(element);
  const floatTransitionDuration = Number.parseFloat(transitionDuration);
  const floatTransitionDelay = Number.parseFloat(transitionDelay);

  // Return 0 if element or transition duration is not found
  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  }

  // If multiple durations are defined, take the first
  transitionDuration = transitionDuration.split(',')[0];
  transitionDelay = transitionDelay.split(',')[0];
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};
const triggerTransitionEnd = element => {
  element.dispatchEvent(new Event(TRANSITION_END));
};
const isElement = object => {
  if (!object || typeof object !== 'object') {
    return false;
  }
  if (typeof object.jquery !== 'undefined') {
    object = object[0];
  }
  return typeof object.nodeType !== 'undefined';
};
const getElement = object => {
  // it's a jQuery object or a node element
  if (isElement(object)) {
    return object.jquery ? object[0] : object;
  }
  if (typeof object === 'string' && object.length > 0) {
    return document.querySelector(parseSelector(object));
  }
  return null;
};
const isVisible = element => {
  if (!isElement(element) || element.getClientRects().length === 0) {
    return false;
  }
  const elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible';
  // Handle `details` element as its content may falsie appear visible when it is closed
  const closedDetails = element.closest('details:not([open])');
  if (!closedDetails) {
    return elementIsVisible;
  }
  if (closedDetails !== element) {
    const summary = element.closest('summary');
    if (summary && summary.parentNode !== closedDetails) {
      return false;
    }
    if (summary === null) {
      return false;
    }
  }
  return elementIsVisible;
};
const isDisabled = element => {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return true;
  }
  if (element.classList.contains('disabled')) {
    return true;
  }
  if (typeof element.disabled !== 'undefined') {
    return element.disabled;
  }
  return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
};
const findShadowRoot = element => {
  if (!document.documentElement.attachShadow) {
    return null;
  }

  // Can find the shadow root otherwise it'll return the document
  if (typeof element.getRootNode === 'function') {
    const root = element.getRootNode();
    return root instanceof ShadowRoot ? root : null;
  }
  if (element instanceof ShadowRoot) {
    return element;
  }

  // when we don't find a shadow root
  if (!element.parentNode) {
    return null;
  }
  return findShadowRoot(element.parentNode);
};
const noop = () => {};

/**
 * Trick to restart an element's animation
 *
 * @param {HTMLElement} element
 * @return void
 *
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */
const reflow = element => {
  element.offsetHeight; // eslint-disable-line no-unused-expressions
};
const getjQuery = () => {
  if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
    return window.jQuery;
  }
  return null;
};
const DOMContentLoadedCallbacks = [];
const onDOMContentLoaded = callback => {
  if (document.readyState === 'loading') {
    // add listener on the first call when the document is in loading state
    if (!DOMContentLoadedCallbacks.length) {
      document.addEventListener('DOMContentLoaded', () => {
        for (const callback of DOMContentLoadedCallbacks) {
          callback();
        }
      });
    }
    DOMContentLoadedCallbacks.push(callback);
  } else {
    callback();
  }
};
const isRTL = () => document.documentElement.dir === 'rtl';
const defineJQueryPlugin = plugin => {
  onDOMContentLoaded(() => {
    const $ = getjQuery();
    /* istanbul ignore if */
    if ($) {
      const name = plugin.NAME;
      const JQUERY_NO_CONFLICT = $.fn[name];
      $.fn[name] = plugin.jQueryInterface;
      $.fn[name].Constructor = plugin;
      $.fn[name].noConflict = () => {
        $.fn[name] = JQUERY_NO_CONFLICT;
        return plugin.jQueryInterface;
      };
    }
  });
};
const execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
  return typeof possibleCallback === 'function' ? possibleCallback(...args) : defaultValue;
};
const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
  if (!waitForTransition) {
    execute(callback);
    return;
  }
  const durationPadding = 5;
  const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
  let called = false;
  const handler = ({
    target
  }) => {
    if (target !== transitionElement) {
      return;
    }
    called = true;
    transitionElement.removeEventListener(TRANSITION_END, handler);
    execute(callback);
  };
  transitionElement.addEventListener(TRANSITION_END, handler);
  setTimeout(() => {
    if (!called) {
      triggerTransitionEnd(transitionElement);
    }
  }, emulatedDuration);
};

/**
 * Return the previous/next element of a list.
 *
 * @param {array} list    The list of elements
 * @param activeElement   The active element
 * @param shouldGetNext   Choose to get next or previous element
 * @param isCycleAllowed
 * @return {Element|elem} The proper element
 */
const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
  const listLength = list.length;
  let index = list.indexOf(activeElement);

  // if the element does not exist in the list return an element
  // depending on the direction and if cycle is allowed
  if (index === -1) {
    return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
  }
  index += shouldGetNext ? 1 : -1;
  if (isCycleAllowed) {
    index = (index + listLength) % listLength;
  }
  return list[Math.max(0, Math.min(index, listLength - 1))];
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
const stripNameRegex = /\..*/;
const stripUidRegex = /::\d+$/;
const eventRegistry = {}; // Events storage
let uidEvent = 1;
const customEvents = {
  mouseenter: 'mouseover',
  mouseleave: 'mouseout'
};
const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);

/**
 * Private methods
 */

function makeEventUid(element, uid) {
  return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
}
function getElementEvents(element) {
  const uid = makeEventUid(element);
  element.uidEvent = uid;
  eventRegistry[uid] = eventRegistry[uid] || {};
  return eventRegistry[uid];
}
function bootstrapHandler(element, fn) {
  return function handler(event) {
    hydrateObj(event, {
      delegateTarget: element
    });
    if (handler.oneOff) {
      EventHandler.off(element, event.type, fn);
    }
    return fn.apply(element, [event]);
  };
}
function bootstrapDelegationHandler(element, selector, fn) {
  return function handler(event) {
    const domElements = element.querySelectorAll(selector);
    for (let {
      target
    } = event; target && target !== this; target = target.parentNode) {
      for (const domElement of domElements) {
        if (domElement !== target) {
          continue;
        }
        hydrateObj(event, {
          delegateTarget: target
        });
        if (handler.oneOff) {
          EventHandler.off(element, event.type, selector, fn);
        }
        return fn.apply(target, [event]);
      }
    }
  };
}
function findHandler(events, callable, delegationSelector = null) {
  return Object.values(events).find(event => event.callable === callable && event.delegationSelector === delegationSelector);
}
function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
  const isDelegated = typeof handler === 'string';
  // TODO: tooltip passes `false` instead of selector, so we need to check
  const callable = isDelegated ? delegationFunction : handler || delegationFunction;
  let typeEvent = getTypeEvent(originalTypeEvent);
  if (!nativeEvents.has(typeEvent)) {
    typeEvent = originalTypeEvent;
  }
  return [isDelegated, callable, typeEvent];
}
function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
  if (typeof originalTypeEvent !== 'string' || !element) {
    return;
  }
  let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);

  // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
  // this prevents the handler from being dispatched the same way as mouseover or mouseout does
  if (originalTypeEvent in customEvents) {
    const wrapFunction = fn => {
      return function (event) {
        if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
          return fn.call(this, event);
        }
      };
    };
    callable = wrapFunction(callable);
  }
  const events = getElementEvents(element);
  const handlers = events[typeEvent] || (events[typeEvent] = {});
  const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
  if (previousFunction) {
    previousFunction.oneOff = previousFunction.oneOff && oneOff;
    return;
  }
  const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''));
  const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
  fn.delegationSelector = isDelegated ? handler : null;
  fn.callable = callable;
  fn.oneOff = oneOff;
  fn.uidEvent = uid;
  handlers[uid] = fn;
  element.addEventListener(typeEvent, fn, isDelegated);
}
function removeHandler(element, events, typeEvent, handler, delegationSelector) {
  const fn = findHandler(events[typeEvent], handler, delegationSelector);
  if (!fn) {
    return;
  }
  element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
  delete events[typeEvent][fn.uidEvent];
}
function removeNamespacedHandlers(element, events, typeEvent, namespace) {
  const storeElementEvent = events[typeEvent] || {};
  for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
    if (handlerKey.includes(namespace)) {
      removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
    }
  }
}
function getTypeEvent(event) {
  // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
  event = event.replace(stripNameRegex, '');
  return customEvents[event] || event;
}
const EventHandler = {
  on(element, event, handler, delegationFunction) {
    addHandler(element, event, handler, delegationFunction, false);
  },
  one(element, event, handler, delegationFunction) {
    addHandler(element, event, handler, delegationFunction, true);
  },
  off(element, originalTypeEvent, handler, delegationFunction) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }
    const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
    const inNamespace = typeEvent !== originalTypeEvent;
    const events = getElementEvents(element);
    const storeElementEvent = events[typeEvent] || {};
    const isNamespace = originalTypeEvent.startsWith('.');
    if (typeof callable !== 'undefined') {
      // Simplest case: handler is passed, remove that listener ONLY.
      if (!Object.keys(storeElementEvent).length) {
        return;
      }
      removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
      return;
    }
    if (isNamespace) {
      for (const elementEvent of Object.keys(events)) {
        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
      }
    }
    for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
      const handlerKey = keyHandlers.replace(stripUidRegex, '');
      if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  },
  trigger(element, event, args) {
    if (typeof event !== 'string' || !element) {
      return null;
    }
    const $ = getjQuery();
    const typeEvent = getTypeEvent(event);
    const inNamespace = event !== typeEvent;
    let jQueryEvent = null;
    let bubbles = true;
    let nativeDispatch = true;
    let defaultPrevented = false;
    if (inNamespace && $) {
      jQueryEvent = $.Event(event, args);
      $(element).trigger(jQueryEvent);
      bubbles = !jQueryEvent.isPropagationStopped();
      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
      defaultPrevented = jQueryEvent.isDefaultPrevented();
    }
    const evt = hydrateObj(new Event(event, {
      bubbles,
      cancelable: true
    }), args);
    if (defaultPrevented) {
      evt.preventDefault();
    }
    if (nativeDispatch) {
      element.dispatchEvent(evt);
    }
    if (evt.defaultPrevented && jQueryEvent) {
      jQueryEvent.preventDefault();
    }
    return evt;
  }
};
function hydrateObj(obj, meta = {}) {
  for (const [key, value] of Object.entries(meta)) {
    try {
      obj[key] = value;
    } catch (_unused) {
      Object.defineProperty(obj, key, {
        configurable: true,
        get() {
          return value;
        }
      });
    }
  }
  return obj;
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

function normalizeData(value) {
  if (value === 'true') {
    return true;
  }
  if (value === 'false') {
    return false;
  }
  if (value === Number(value).toString()) {
    return Number(value);
  }
  if (value === '' || value === 'null') {
    return null;
  }
  if (typeof value !== 'string') {
    return value;
  }
  try {
    return JSON.parse(decodeURIComponent(value));
  } catch (_unused) {
    return value;
  }
}
function normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
}
const Manipulator = {
  setDataAttribute(element, key, value) {
    element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
  },
  removeDataAttribute(element, key) {
    element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
  },
  getDataAttributes(element) {
    if (!element) {
      return {};
    }
    const attributes = {};
    const bsKeys = Object.keys(element.dataset).filter(key => key.startsWith('bs') && !key.startsWith('bsConfig'));
    for (const key of bsKeys) {
      let pureKey = key.replace(/^bs/, '');
      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
      attributes[pureKey] = normalizeData(element.dataset[key]);
    }
    return attributes;
  },
  getDataAttribute(element, key) {
    return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
  }
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap util/config.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Class definition
 */

class Config {
  // Getters
  static get Default() {
    return {};
  }
  static get DefaultType() {
    return {};
  }
  static get NAME() {
    throw new Error('You have to implement the static method "NAME", for each component!');
  }
  _getConfig(config) {
    config = this._mergeConfigObj(config);
    config = this._configAfterMerge(config);
    this._typeCheckConfig(config);
    return config;
  }
  _configAfterMerge(config) {
    return config;
  }
  _mergeConfigObj(config, element) {
    const jsonConfig = isElement(element) ? Manipulator.getDataAttribute(element, 'config') : {}; // try to parse

    return {
      ...this.constructor.Default,
      ...(typeof jsonConfig === 'object' ? jsonConfig : {}),
      ...(isElement(element) ? Manipulator.getDataAttributes(element) : {}),
      ...(typeof config === 'object' ? config : {})
    };
  }
  _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
    for (const [property, expectedTypes] of Object.entries(configTypes)) {
      const value = config[property];
      const valueType = isElement(value) ? 'element' : toType(value);
      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
      }
    }
  }
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

const VERSION = '5.3.3';

/**
 * Class definition
 */

class BaseComponent extends Config {
  constructor(element, config) {
    super();
    element = getElement(element);
    if (!element) {
      return;
    }
    this._element = element;
    this._config = this._getConfig(config);
    Data.set(this._element, this.constructor.DATA_KEY, this);
  }

  // Public
  dispose() {
    Data.remove(this._element, this.constructor.DATA_KEY);
    EventHandler.off(this._element, this.constructor.EVENT_KEY);
    for (const propertyName of Object.getOwnPropertyNames(this)) {
      this[propertyName] = null;
    }
  }
  _queueCallback(callback, element, isAnimated = true) {
    executeAfterTransition(callback, element, isAnimated);
  }
  _getConfig(config) {
    config = this._mergeConfigObj(config, this._element);
    config = this._configAfterMerge(config);
    this._typeCheckConfig(config);
    return config;
  }

  // Static
  static getInstance(element) {
    return Data.get(getElement(element), this.DATA_KEY);
  }
  static getOrCreateInstance(element, config = {}) {
    return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
  }
  static get VERSION() {
    return VERSION;
  }
  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
  static eventName(name) {
    return `${name}${this.EVENT_KEY}`;
  }
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const getSelector = element => {
  let selector = element.getAttribute('data-bs-target');
  if (!selector || selector === '#') {
    let hrefAttribute = element.getAttribute('href');

    // The only valid content that could double as a selector are IDs or classes,
    // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
    // `document.querySelector` will rightfully complain it is invalid.
    // See https://github.com/twbs/bootstrap/issues/32273
    if (!hrefAttribute || !hrefAttribute.includes('#') && !hrefAttribute.startsWith('.')) {
      return null;
    }

    // Just in case some CMS puts out a full URL with the anchor appended
    if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {
      hrefAttribute = `#${hrefAttribute.split('#')[1]}`;
    }
    selector = hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null;
  }
  return selector ? selector.split(',').map(sel => parseSelector(sel)).join(',') : null;
};
const SelectorEngine = {
  find(selector, element = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
  },
  findOne(selector, element = document.documentElement) {
    return Element.prototype.querySelector.call(element, selector);
  },
  children(element, selector) {
    return [].concat(...element.children).filter(child => child.matches(selector));
  },
  parents(element, selector) {
    const parents = [];
    let ancestor = element.parentNode.closest(selector);
    while (ancestor) {
      parents.push(ancestor);
      ancestor = ancestor.parentNode.closest(selector);
    }
    return parents;
  },
  prev(element, selector) {
    let previous = element.previousElementSibling;
    while (previous) {
      if (previous.matches(selector)) {
        return [previous];
      }
      previous = previous.previousElementSibling;
    }
    return [];
  },
  // TODO: this is now unused; remove later along with prev()
  next(element, selector) {
    let next = element.nextElementSibling;
    while (next) {
      if (next.matches(selector)) {
        return [next];
      }
      next = next.nextElementSibling;
    }
    return [];
  },
  focusableChildren(element) {
    const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(',');
    return this.find(focusables, element).filter(el => !isDisabled(el) && isVisible(el));
  },
  getSelectorFromElement(element) {
    const selector = getSelector(element);
    if (selector) {
      return SelectorEngine.findOne(selector) ? selector : null;
    }
    return null;
  },
  getElementFromSelector(element) {
    const selector = getSelector(element);
    return selector ? SelectorEngine.findOne(selector) : null;
  },
  getMultipleElementsFromSelector(element) {
    const selector = getSelector(element);
    return selector ? SelectorEngine.find(selector) : [];
  }
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap util/component-functions.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const enableDismissTrigger = (component, method = 'hide') => {
  const clickEvent = `click.dismiss${component.EVENT_KEY}`;
  const name = component.NAME;
  EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
    const instance = component.getOrCreateInstance(target);

    // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
    instance[method]();
  });
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

const NAME$f = 'alert';
const DATA_KEY$a = 'bs.alert';
const EVENT_KEY$b = `.${DATA_KEY$a}`;
const EVENT_CLOSE = `close${EVENT_KEY$b}`;
const EVENT_CLOSED = `closed${EVENT_KEY$b}`;
const CLASS_NAME_FADE$5 = 'fade';
const CLASS_NAME_SHOW$8 = 'show';

/**
 * Class definition
 */

class Alert extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME$f;
  }

  // Public
  close() {
    const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
    if (closeEvent.defaultPrevented) {
      return;
    }
    this._element.classList.remove(CLASS_NAME_SHOW$8);
    const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
    this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
  }

  // Private
  _destroyElement() {
    this._element.remove();
    EventHandler.trigger(this._element, EVENT_CLOSED);
    this.dispose();
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Alert.getOrCreateInstance(this);
      if (typeof config !== 'string') {
        return;
      }
      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config](this);
    });
  }
}

/**
 * Data API implementation
 */

enableDismissTrigger(Alert, 'close');

/**
 * jQuery
 */

defineJQueryPlugin(Alert);

/**
 * --------------------------------------------------------------------------
 * Bootstrap button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

const NAME$e = 'button';
const DATA_KEY$9 = 'bs.button';
const EVENT_KEY$a = `.${DATA_KEY$9}`;
const DATA_API_KEY$6 = '.data-api';
const CLASS_NAME_ACTIVE$3 = 'active';
const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;

/**
 * Class definition
 */

class Button extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME$e;
  }

  // Public
  toggle() {
    // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
    this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Button.getOrCreateInstance(this);
      if (config === 'toggle') {
        data[config]();
      }
    });
  }
}

/**
 * Data API implementation
 */

EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, event => {
  event.preventDefault();
  const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
  const data = Button.getOrCreateInstance(button);
  data.toggle();
});

/**
 * jQuery
 */

defineJQueryPlugin(Button);

/**
 * --------------------------------------------------------------------------
 * Bootstrap util/swipe.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

const NAME$d = 'swipe';
const EVENT_KEY$9 = '.bs.swipe';
const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
const POINTER_TYPE_TOUCH = 'touch';
const POINTER_TYPE_PEN = 'pen';
const CLASS_NAME_POINTER_EVENT = 'pointer-event';
const SWIPE_THRESHOLD = 40;
const Default$c = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
};
const DefaultType$c = {
  endCallback: '(function|null)',
  leftCallback: '(function|null)',
  rightCallback: '(function|null)'
};

/**
 * Class definition
 */

class Swipe extends Config {
  constructor(element, config) {
    super();
    this._element = element;
    if (!element || !Swipe.isSupported()) {
      return;
    }
    this._config = this._getConfig(config);
    this._deltaX = 0;
    this._supportPointerEvents = Boolean(window.PointerEvent);
    this._initEvents();
  }

  // Getters
  static get Default() {
    return Default$c;
  }
  static get DefaultType() {
    return DefaultType$c;
  }
  static get NAME() {
    return NAME$d;
  }

  // Public
  dispose() {
    EventHandler.off(this._element, EVENT_KEY$9);
  }

  // Private
  _start(event) {
    if (!this._supportPointerEvents) {
      this._deltaX = event.touches[0].clientX;
      return;
    }
    if (this._eventIsPointerPenTouch(event)) {
      this._deltaX = event.clientX;
    }
  }
  _end(event) {
    if (this._eventIsPointerPenTouch(event)) {
      this._deltaX = event.clientX - this._deltaX;
    }
    this._handleSwipe();
    execute(this._config.endCallback);
  }
  _move(event) {
    this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const absDeltaX = Math.abs(this._deltaX);
    if (absDeltaX <= SWIPE_THRESHOLD) {
      return;
    }
    const direction = absDeltaX / this._deltaX;
    this._deltaX = 0;
    if (!direction) {
      return;
    }
    execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    if (this._supportPointerEvents) {
      EventHandler.on(this._element, EVENT_POINTERDOWN, event => this._start(event));
      EventHandler.on(this._element, EVENT_POINTERUP, event => this._end(event));
      this._element.classList.add(CLASS_NAME_POINTER_EVENT);
    } else {
      EventHandler.on(this._element, EVENT_TOUCHSTART, event => this._start(event));
      EventHandler.on(this._element, EVENT_TOUCHMOVE, event => this._move(event));
      EventHandler.on(this._element, EVENT_TOUCHEND, event => this._end(event));
    }
  }
  _eventIsPointerPenTouch(event) {
    return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
  }

  // Static
  static isSupported() {
    return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
  }
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

const NAME$c = 'carousel';
const DATA_KEY$8 = 'bs.carousel';
const EVENT_KEY$8 = `.${DATA_KEY$8}`;
const DATA_API_KEY$5 = '.data-api';
const ARROW_LEFT_KEY$1 = 'ArrowLeft';
const ARROW_RIGHT_KEY$1 = 'ArrowRight';
const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

const ORDER_NEXT = 'next';
const ORDER_PREV = 'prev';
const DIRECTION_LEFT = 'left';
const DIRECTION_RIGHT = 'right';
const EVENT_SLIDE = `slide${EVENT_KEY$8}`;
const EVENT_SLID = `slid${EVENT_KEY$8}`;
const EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
const EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
const EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
const EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
const EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
const CLASS_NAME_CAROUSEL = 'carousel';
const CLASS_NAME_ACTIVE$2 = 'active';
const CLASS_NAME_SLIDE = 'slide';
const CLASS_NAME_END = 'carousel-item-end';
const CLASS_NAME_START = 'carousel-item-start';
const CLASS_NAME_NEXT = 'carousel-item-next';
const CLASS_NAME_PREV = 'carousel-item-prev';
const SELECTOR_ACTIVE = '.active';
const SELECTOR_ITEM = '.carousel-item';
const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
const SELECTOR_ITEM_IMG = '.carousel-item img';
const SELECTOR_INDICATORS = '.carousel-indicators';
const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
const KEY_TO_DIRECTION = {
  [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
  [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
};
const Default$b = {
  interval: 5000,
  keyboard: true,
  pause: 'hover',
  ride: false,
  touch: true,
  wrap: true
};
const DefaultType$b = {
  interval: '(number|boolean)',
  // TODO:v6 remove boolean support
  keyboard: 'boolean',
  pause: '(string|boolean)',
  ride: '(boolean|string)',
  touch: 'boolean',
  wrap: 'boolean'
};

/**
 * Class definition
 */

class Carousel extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._interval = null;
    this._activeElement = null;
    this._isSliding = false;
    this.touchTimeout = null;
    this._swipeHelper = null;
    this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
    this._addEventListeners();
    if (this._config.ride === CLASS_NAME_CAROUSEL) {
      this.cycle();
    }
  }

  // Getters
  static get Default() {
    return Default$b;
  }
  static get DefaultType() {
    return DefaultType$b;
  }
  static get NAME() {
    return NAME$c;
  }

  // Public
  next() {
    this._slide(ORDER_NEXT);
  }
  nextWhenVisible() {
    // FIXME TODO use `document.visibilityState`
    // Don't call next when the page isn't visible
    // or the carousel or its parent isn't visible
    if (!document.hidden && isVisible(this._element)) {
      this.next();
    }
  }
  prev() {
    this._slide(ORDER_PREV);
  }
  pause() {
    if (this._isSliding) {
      triggerTransitionEnd(this._element);
    }
    this._clearInterval();
  }
  cycle() {
    this._clearInterval();
    this._updateInterval();
    this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (!this._config.ride) {
      return;
    }
    if (this._isSliding) {
      EventHandler.one(this._element, EVENT_SLID, () => this.cycle());
      return;
    }
    this.cycle();
  }
  to(index) {
    const items = this._getItems();
    if (index > items.length - 1 || index < 0) {
      return;
    }
    if (this._isSliding) {
      EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
      return;
    }
    const activeIndex = this._getItemIndex(this._getActive());
    if (activeIndex === index) {
      return;
    }
    const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
    this._slide(order, items[index]);
  }
  dispose() {
    if (this._swipeHelper) {
      this._swipeHelper.dispose();
    }
    super.dispose();
  }

  // Private
  _configAfterMerge(config) {
    config.defaultInterval = config.interval;
    return config;
  }
  _addEventListeners() {
    if (this._config.keyboard) {
      EventHandler.on(this._element, EVENT_KEYDOWN$1, event => this._keydown(event));
    }
    if (this._config.pause === 'hover') {
      EventHandler.on(this._element, EVENT_MOUSEENTER$1, () => this.pause());
      EventHandler.on(this._element, EVENT_MOUSELEAVE$1, () => this._maybeEnableCycle());
    }
    if (this._config.touch && Swipe.isSupported()) {
      this._addTouchEventListeners();
    }
  }
  _addTouchEventListeners() {
    for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {
      EventHandler.on(img, EVENT_DRAG_START, event => event.preventDefault());
    }
    const endCallBack = () => {
      if (this._config.pause !== 'hover') {
        return;
      }

      // If it's a touch-enabled device, mouseenter/leave are fired as
      // part of the mouse compatibility events on first tap - the carousel
      // would stop cycling until user tapped out of it;
      // here, we listen for touchend, explicitly pause the carousel
      // (as if it's the second time we tap on it, mouseenter compat event
      // is NOT fired) and after a timeout (to allow for mouse compatibility
      // events to fire) we explicitly restart cycling

      this.pause();
      if (this.touchTimeout) {
        clearTimeout(this.touchTimeout);
      }
      this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
    };
    const swipeConfig = {
      leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
      rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
      endCallback: endCallBack
    };
    this._swipeHelper = new Swipe(this._element, swipeConfig);
  }
  _keydown(event) {
    if (/input|textarea/i.test(event.target.tagName)) {
      return;
    }
    const direction = KEY_TO_DIRECTION[event.key];
    if (direction) {
      event.preventDefault();
      this._slide(this._directionToOrder(direction));
    }
  }
  _getItemIndex(element) {
    return this._getItems().indexOf(element);
  }
  _setActiveIndicatorElement(index) {
    if (!this._indicatorsElement) {
      return;
    }
    const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
    activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
    activeIndicator.removeAttribute('aria-current');
    const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
    if (newActiveIndicator) {
      newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
      newActiveIndicator.setAttribute('aria-current', 'true');
    }
  }
  _updateInterval() {
    const element = this._activeElement || this._getActive();
    if (!element) {
      return;
    }
    const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);
    this._config.interval = elementInterval || this._config.defaultInterval;
  }
  _slide(order, element = null) {
    if (this._isSliding) {
      return;
    }
    const activeElement = this._getActive();
    const isNext = order === ORDER_NEXT;
    const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
    if (nextElement === activeElement) {
      return;
    }
    const nextElementIndex = this._getItemIndex(nextElement);
    const triggerEvent = eventName => {
      return EventHandler.trigger(this._element, eventName, {
        relatedTarget: nextElement,
        direction: this._orderToDirection(order),
        from: this._getItemIndex(activeElement),
        to: nextElementIndex
      });
    };
    const slideEvent = triggerEvent(EVENT_SLIDE);
    if (slideEvent.defaultPrevented) {
      return;
    }
    if (!activeElement || !nextElement) {
      // Some weirdness is happening, so we bail
      // TODO: change tests that use empty divs to avoid this check
      return;
    }
    const isCycling = Boolean(this._interval);
    this.pause();
    this._isSliding = true;
    this._setActiveIndicatorElement(nextElementIndex);
    this._activeElement = nextElement;
    const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
    const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
    nextElement.classList.add(orderClassName);
    reflow(nextElement);
    activeElement.classList.add(directionalClassName);
    nextElement.classList.add(directionalClassName);
    const completeCallBack = () => {
      nextElement.classList.remove(directionalClassName, orderClassName);
      nextElement.classList.add(CLASS_NAME_ACTIVE$2);
      activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
      this._isSliding = false;
      triggerEvent(EVENT_SLID);
    };
    this._queueCallback(completeCallBack, activeElement, this._isAnimated());
    if (isCycling) {
      this.cycle();
    }
  }
  _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_SLIDE);
  }
  _getActive() {
    return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
  }
  _getItems() {
    return SelectorEngine.find(SELECTOR_ITEM, this._element);
  }
  _clearInterval() {
    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }
  }
  _directionToOrder(direction) {
    if (isRTL()) {
      return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
    }
    return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
  }
  _orderToDirection(order) {
    if (isRTL()) {
      return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Carousel.getOrCreateInstance(this, config);
      if (typeof config === 'number') {
        data.to(config);
        return;
      }
      if (typeof config === 'string') {
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    });
  }
}

/**
 * Data API implementation
 */

EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function (event) {
  const target = SelectorEngine.getElementFromSelector(this);
  if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
    return;
  }
  event.preventDefault();
  const carousel = Carousel.getOrCreateInstance(target);
  const slideIndex = this.getAttribute('data-bs-slide-to');
  if (slideIndex) {
    carousel.to(slideIndex);
    carousel._maybeEnableCycle();
    return;
  }
  if (Manipulator.getDataAttribute(this, 'slide') === 'next') {
    carousel.next();
    carousel._maybeEnableCycle();
    return;
  }
  carousel.prev();
  carousel._maybeEnableCycle();
});
EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {
  const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
  for (const carousel of carousels) {
    Carousel.getOrCreateInstance(carousel);
  }
});

/**
 * jQuery
 */

defineJQueryPlugin(Carousel);

/**
 * --------------------------------------------------------------------------
 * Bootstrap collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

const NAME$b = 'collapse';
const DATA_KEY$7 = 'bs.collapse';
const EVENT_KEY$7 = `.${DATA_KEY$7}`;
const DATA_API_KEY$4 = '.data-api';
const EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
const EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
const EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
const EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
const CLASS_NAME_SHOW$7 = 'show';
const CLASS_NAME_COLLAPSE = 'collapse';
const CLASS_NAME_COLLAPSING = 'collapsing';
const CLASS_NAME_COLLAPSED = 'collapsed';
const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
const WIDTH = 'width';
const HEIGHT = 'height';
const SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
const Default$a = {
  parent: null,
  toggle: true
};
const DefaultType$a = {
  parent: '(null|element)',
  toggle: 'boolean'
};

/**
 * Class definition
 */

class Collapse extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._isTransitioning = false;
    this._triggerArray = [];
    const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
    for (const elem of toggleList) {
      const selector = SelectorEngine.getSelectorFromElement(elem);
      const filterElement = SelectorEngine.find(selector).filter(foundElement => foundElement === this._element);
      if (selector !== null && filterElement.length) {
        this._triggerArray.push(elem);
      }
    }
    this._initializeChildren();
    if (!this._config.parent) {
      this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
    }
    if (this._config.toggle) {
      this.toggle();
    }
  }

  // Getters
  static get Default() {
    return Default$a;
  }
  static get DefaultType() {
    return DefaultType$a;
  }
  static get NAME() {
    return NAME$b;
  }

  // Public
  toggle() {
    if (this._isShown()) {
      this.hide();
    } else {
      this.show();
    }
  }
  show() {
    if (this._isTransitioning || this._isShown()) {
      return;
    }
    let activeChildren = [];

    // find active children
    if (this._config.parent) {
      activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter(element => element !== this._element).map(element => Collapse.getOrCreateInstance(element, {
        toggle: false
      }));
    }
    if (activeChildren.length && activeChildren[0]._isTransitioning) {
      return;
    }
    const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
    if (startEvent.defaultPrevented) {
      return;
    }
    for (const activeInstance of activeChildren) {
      activeInstance.hide();
    }
    const dimension = this._getDimension();
    this._element.classList.remove(CLASS_NAME_COLLAPSE);
    this._element.classList.add(CLASS_NAME_COLLAPSING);
    this._element.style[dimension] = 0;
    this._addAriaAndCollapsedClass(this._triggerArray, true);
    this._isTransitioning = true;
    const complete = () => {
      this._isTransitioning = false;
      this._element.classList.remove(CLASS_NAME_COLLAPSING);
      this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
      this._element.style[dimension] = '';
      EventHandler.trigger(this._element, EVENT_SHOWN$6);
    };
    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    const scrollSize = `scroll${capitalizedDimension}`;
    this._queueCallback(complete, this._element, true);
    this._element.style[dimension] = `${this._element[scrollSize]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown()) {
      return;
    }
    const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
    if (startEvent.defaultPrevented) {
      return;
    }
    const dimension = this._getDimension();
    this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
    reflow(this._element);
    this._element.classList.add(CLASS_NAME_COLLAPSING);
    this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
    for (const trigger of this._triggerArray) {
      const element = SelectorEngine.getElementFromSelector(trigger);
      if (element && !this._isShown(element)) {
        this._addAriaAndCollapsedClass([trigger], false);
      }
    }
    this._isTransitioning = true;
    const complete = () => {
      this._isTransitioning = false;
      this._element.classList.remove(CLASS_NAME_COLLAPSING);
      this._element.classList.add(CLASS_NAME_COLLAPSE);
      EventHandler.trigger(this._element, EVENT_HIDDEN$6);
    };
    this._element.style[dimension] = '';
    this._queueCallback(complete, this._element, true);
  }
  _isShown(element = this._element) {
    return element.classList.contains(CLASS_NAME_SHOW$7);
  }

  // Private
  _configAfterMerge(config) {
    config.toggle = Boolean(config.toggle); // Coerce string values
    config.parent = getElement(config.parent);
    return config;
  }
  _getDimension() {
    return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
  }
  _initializeChildren() {
    if (!this._config.parent) {
      return;
    }
    const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
    for (const element of children) {
      const selected = SelectorEngine.getElementFromSelector(element);
      if (selected) {
        this._addAriaAndCollapsedClass([element], this._isShown(selected));
      }
    }
  }
  _getFirstLevelChildren(selector) {
    const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
    // remove children if greater depth
    return SelectorEngine.find(selector, this._config.parent).filter(element => !children.includes(element));
  }
  _addAriaAndCollapsedClass(triggerArray, isOpen) {
    if (!triggerArray.length) {
      return;
    }
    for (const element of triggerArray) {
      element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
      element.setAttribute('aria-expanded', isOpen);
    }
  }

  // Static
  static jQueryInterface(config) {
    const _config = {};
    if (typeof config === 'string' && /show|hide/.test(config)) {
      _config.toggle = false;
    }
    return this.each(function () {
      const data = Collapse.getOrCreateInstance(this, _config);
      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      }
    });
  }
}

/**
 * Data API implementation
 */

EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
  if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
    event.preventDefault();
  }
  for (const element of SelectorEngine.getMultipleElementsFromSelector(this)) {
    Collapse.getOrCreateInstance(element, {
      toggle: false
    }).toggle();
  }
});

/**
 * jQuery
 */

defineJQueryPlugin(Collapse);

/**
 * --------------------------------------------------------------------------
 * Bootstrap dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

const NAME$a = 'dropdown';
const DATA_KEY$6 = 'bs.dropdown';
const EVENT_KEY$6 = `.${DATA_KEY$6}`;
const DATA_API_KEY$3 = '.data-api';
const ESCAPE_KEY$2 = 'Escape';
const TAB_KEY$1 = 'Tab';
const ARROW_UP_KEY$1 = 'ArrowUp';
const ARROW_DOWN_KEY$1 = 'ArrowDown';
const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

const EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
const EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
const EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
const CLASS_NAME_SHOW$6 = 'show';
const CLASS_NAME_DROPUP = 'dropup';
const CLASS_NAME_DROPEND = 'dropend';
const CLASS_NAME_DROPSTART = 'dropstart';
const CLASS_NAME_DROPUP_CENTER = 'dropup-center';
const CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center';
const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
const SELECTOR_MENU = '.dropdown-menu';
const SELECTOR_NAVBAR = '.navbar';
const SELECTOR_NAVBAR_NAV = '.navbar-nav';
const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
const PLACEMENT_TOPCENTER = 'top';
const PLACEMENT_BOTTOMCENTER = 'bottom';
const Default$9 = {
  autoClose: true,
  boundary: 'clippingParents',
  display: 'dynamic',
  offset: [0, 2],
  popperConfig: null,
  reference: 'toggle'
};
const DefaultType$9 = {
  autoClose: '(boolean|string)',
  boundary: '(string|element)',
  display: 'string',
  offset: '(array|string|function)',
  popperConfig: '(null|object|function)',
  reference: '(string|element|object)'
};

/**
 * Class definition
 */

class Dropdown extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._popper = null;
    this._parent = this._element.parentNode; // dropdown wrapper
    // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
    this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
    this._inNavbar = this._detectNavbar();
  }

  // Getters
  static get Default() {
    return Default$9;
  }
  static get DefaultType() {
    return DefaultType$9;
  }
  static get NAME() {
    return NAME$a;
  }

  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (isDisabled(this._element) || this._isShown()) {
      return;
    }
    const relatedTarget = {
      relatedTarget: this._element
    };
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);
    if (showEvent.defaultPrevented) {
      return;
    }
    this._createPopper();

    // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
    if ('ontouchstart' in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.on(element, 'mouseover', noop);
      }
    }
    this._element.focus();
    this._element.setAttribute('aria-expanded', true);
    this._menu.classList.add(CLASS_NAME_SHOW$6);
    this._element.classList.add(CLASS_NAME_SHOW$6);
    EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
  }
  hide() {
    if (isDisabled(this._element) || !this._isShown()) {
      return;
    }
    const relatedTarget = {
      relatedTarget: this._element
    };
    this._completeHide(relatedTarget);
  }
  dispose() {
    if (this._popper) {
      this._popper.destroy();
    }
    super.dispose();
  }
  update() {
    this._inNavbar = this._detectNavbar();
    if (this._popper) {
      this._popper.update();
    }
  }

  // Private
  _completeHide(relatedTarget) {
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
    if (hideEvent.defaultPrevented) {
      return;
    }

    // If this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support
    if ('ontouchstart' in document.documentElement) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.off(element, 'mouseover', noop);
      }
    }
    if (this._popper) {
      this._popper.destroy();
    }
    this._menu.classList.remove(CLASS_NAME_SHOW$6);
    this._element.classList.remove(CLASS_NAME_SHOW$6);
    this._element.setAttribute('aria-expanded', 'false');
    Manipulator.removeDataAttribute(this._menu, 'popper');
    EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
  }
  _getConfig(config) {
    config = super._getConfig(config);
    if (typeof config.reference === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
      // Popper virtual elements require a getBoundingClientRect method
      throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    }
    return config;
  }
  _createPopper() {
    if (typeof _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ === 'undefined') {
      throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
    }
    let referenceElement = this._element;
    if (this._config.reference === 'parent') {
      referenceElement = this._parent;
    } else if (isElement(this._config.reference)) {
      referenceElement = getElement(this._config.reference);
    } else if (typeof this._config.reference === 'object') {
      referenceElement = this._config.reference;
    }
    const popperConfig = this._getPopperConfig();
    this._popper = _popperjs_core__WEBPACK_IMPORTED_MODULE_1__.createPopper(referenceElement, this._menu, popperConfig);
  }
  _isShown() {
    return this._menu.classList.contains(CLASS_NAME_SHOW$6);
  }
  _getPlacement() {
    const parentDropdown = this._parent;
    if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
      return PLACEMENT_RIGHT;
    }
    if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
      return PLACEMENT_LEFT;
    }
    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
      return PLACEMENT_TOPCENTER;
    }
    if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
      return PLACEMENT_BOTTOMCENTER;
    }

    // We need to trim the value because custom properties can also include spaces
    const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';
    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
      return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
    }
    return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
  }
  _detectNavbar() {
    return this._element.closest(SELECTOR_NAVBAR) !== null;
  }
  _getOffset() {
    const {
      offset
    } = this._config;
    if (typeof offset === 'string') {
      return offset.split(',').map(value => Number.parseInt(value, 10));
    }
    if (typeof offset === 'function') {
      return popperData => offset(popperData, this._element);
    }
    return offset;
  }
  _getPopperConfig() {
    const defaultBsPopperConfig = {
      placement: this._getPlacement(),
      modifiers: [{
        name: 'preventOverflow',
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: 'offset',
        options: {
          offset: this._getOffset()
        }
      }]
    };

    // Disable Popper if we have a static display or Dropdown is in Navbar
    if (this._inNavbar || this._config.display === 'static') {
      Manipulator.setDataAttribute(this._menu, 'popper', 'static'); // TODO: v6 remove
      defaultBsPopperConfig.modifiers = [{
        name: 'applyStyles',
        enabled: false
      }];
    }
    return {
      ...defaultBsPopperConfig,
      ...execute(this._config.popperConfig, [defaultBsPopperConfig])
    };
  }
  _selectMenuItem({
    key,
    target
  }) {
    const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(element => isVisible(element));
    if (!items.length) {
      return;
    }

    // if target isn't included in items (e.g. when expanding the dropdown)
    // allow cycling to get the last item in case key equals ARROW_UP_KEY
    getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Dropdown.getOrCreateInstance(this, config);
      if (typeof config !== 'string') {
        return;
      }
      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
  static clearMenus(event) {
    if (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1) {
      return;
    }
    const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
    for (const toggle of openToggles) {
      const context = Dropdown.getInstance(toggle);
      if (!context || context._config.autoClose === false) {
        continue;
      }
      const composedPath = event.composedPath();
      const isMenuTarget = composedPath.includes(context._menu);
      if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
        continue;
      }

      // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
      if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
        continue;
      }
      const relatedTarget = {
        relatedTarget: context._element
      };
      if (event.type === 'click') {
        relatedTarget.clickEvent = event;
      }
      context._completeHide(relatedTarget);
    }
  }
  static dataApiKeydownHandler(event) {
    // If not an UP | DOWN | ESCAPE key => not a dropdown command
    // If input/textarea && if key is other than ESCAPE => not a dropdown command

    const isInput = /input|textarea/i.test(event.target.tagName);
    const isEscapeEvent = event.key === ESCAPE_KEY$2;
    const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);
    if (!isUpOrDownEvent && !isEscapeEvent) {
      return;
    }
    if (isInput && !isEscapeEvent) {
      return;
    }
    event.preventDefault();

    // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
    const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
    const instance = Dropdown.getOrCreateInstance(getToggleButton);
    if (isUpOrDownEvent) {
      event.stopPropagation();
      instance.show();
      instance._selectMenuItem(event);
      return;
    }
    if (instance._isShown()) {
      // else is escape and we check if it is shown
      event.stopPropagation();
      instance.hide();
      getToggleButton.focus();
    }
  }
}

/**
 * Data API implementation
 */

EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
  event.preventDefault();
  Dropdown.getOrCreateInstance(this).toggle();
});

/**
 * jQuery
 */

defineJQueryPlugin(Dropdown);

/**
 * --------------------------------------------------------------------------
 * Bootstrap util/backdrop.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

const NAME$9 = 'backdrop';
const CLASS_NAME_FADE$4 = 'fade';
const CLASS_NAME_SHOW$5 = 'show';
const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
const Default$8 = {
  className: 'modal-backdrop',
  clickCallback: null,
  isAnimated: false,
  isVisible: true,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: 'body' // give the choice to place backdrop under different elements
};
const DefaultType$8 = {
  className: 'string',
  clickCallback: '(function|null)',
  isAnimated: 'boolean',
  isVisible: 'boolean',
  rootElement: '(element|string)'
};

/**
 * Class definition
 */

class Backdrop extends Config {
  constructor(config) {
    super();
    this._config = this._getConfig(config);
    this._isAppended = false;
    this._element = null;
  }

  // Getters
  static get Default() {
    return Default$8;
  }
  static get DefaultType() {
    return DefaultType$8;
  }
  static get NAME() {
    return NAME$9;
  }

  // Public
  show(callback) {
    if (!this._config.isVisible) {
      execute(callback);
      return;
    }
    this._append();
    const element = this._getElement();
    if (this._config.isAnimated) {
      reflow(element);
    }
    element.classList.add(CLASS_NAME_SHOW$5);
    this._emulateAnimation(() => {
      execute(callback);
    });
  }
  hide(callback) {
    if (!this._config.isVisible) {
      execute(callback);
      return;
    }
    this._getElement().classList.remove(CLASS_NAME_SHOW$5);
    this._emulateAnimation(() => {
      this.dispose();
      execute(callback);
    });
  }
  dispose() {
    if (!this._isAppended) {
      return;
    }
    EventHandler.off(this._element, EVENT_MOUSEDOWN);
    this._element.remove();
    this._isAppended = false;
  }

  // Private
  _getElement() {
    if (!this._element) {
      const backdrop = document.createElement('div');
      backdrop.className = this._config.className;
      if (this._config.isAnimated) {
        backdrop.classList.add(CLASS_NAME_FADE$4);
      }
      this._element = backdrop;
    }
    return this._element;
  }
  _configAfterMerge(config) {
    // use getElement() with the default "body" to get a fresh Element on each instantiation
    config.rootElement = getElement(config.rootElement);
    return config;
  }
  _append() {
    if (this._isAppended) {
      return;
    }
    const element = this._getElement();
    this._config.rootElement.append(element);
    EventHandler.on(element, EVENT_MOUSEDOWN, () => {
      execute(this._config.clickCallback);
    });
    this._isAppended = true;
  }
  _emulateAnimation(callback) {
    executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
  }
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap util/focustrap.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

const NAME$8 = 'focustrap';
const DATA_KEY$5 = 'bs.focustrap';
const EVENT_KEY$5 = `.${DATA_KEY$5}`;
const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
const TAB_KEY = 'Tab';
const TAB_NAV_FORWARD = 'forward';
const TAB_NAV_BACKWARD = 'backward';
const Default$7 = {
  autofocus: true,
  trapElement: null // The element to trap focus inside of
};
const DefaultType$7 = {
  autofocus: 'boolean',
  trapElement: 'element'
};

/**
 * Class definition
 */

class FocusTrap extends Config {
  constructor(config) {
    super();
    this._config = this._getConfig(config);
    this._isActive = false;
    this._lastTabNavDirection = null;
  }

  // Getters
  static get Default() {
    return Default$7;
  }
  static get DefaultType() {
    return DefaultType$7;
  }
  static get NAME() {
    return NAME$8;
  }

  // Public
  activate() {
    if (this._isActive) {
      return;
    }
    if (this._config.autofocus) {
      this._config.trapElement.focus();
    }
    EventHandler.off(document, EVENT_KEY$5); // guard against infinite focus loop
    EventHandler.on(document, EVENT_FOCUSIN$2, event => this._handleFocusin(event));
    EventHandler.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));
    this._isActive = true;
  }
  deactivate() {
    if (!this._isActive) {
      return;
    }
    this._isActive = false;
    EventHandler.off(document, EVENT_KEY$5);
  }

  // Private
  _handleFocusin(event) {
    const {
      trapElement
    } = this._config;
    if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
      return;
    }
    const elements = SelectorEngine.focusableChildren(trapElement);
    if (elements.length === 0) {
      trapElement.focus();
    } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
      elements[elements.length - 1].focus();
    } else {
      elements[0].focus();
    }
  }
  _handleKeydown(event) {
    if (event.key !== TAB_KEY) {
      return;
    }
    this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
  }
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
const SELECTOR_STICKY_CONTENT = '.sticky-top';
const PROPERTY_PADDING = 'padding-right';
const PROPERTY_MARGIN = 'margin-right';

/**
 * Class definition
 */

class ScrollBarHelper {
  constructor() {
    this._element = document.body;
  }

  // Public
  getWidth() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    const documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
  }
  hide() {
    const width = this.getWidth();
    this._disableOverFlow();
    // give padding to element to balance the hidden scrollbar width
    this._setElementAttributes(this._element, PROPERTY_PADDING, calculatedValue => calculatedValue + width);
    // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
    this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, calculatedValue => calculatedValue + width);
    this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, calculatedValue => calculatedValue - width);
  }
  reset() {
    this._resetElementAttributes(this._element, 'overflow');
    this._resetElementAttributes(this._element, PROPERTY_PADDING);
    this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
    this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }

  // Private
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, 'overflow');
    this._element.style.overflow = 'hidden';
  }
  _setElementAttributes(selector, styleProperty, callback) {
    const scrollbarWidth = this.getWidth();
    const manipulationCallBack = element => {
      if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
        return;
      }
      this._saveInitialAttribute(element, styleProperty);
      const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
      element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
    };
    this._applyManipulationCallback(selector, manipulationCallBack);
  }
  _saveInitialAttribute(element, styleProperty) {
    const actualValue = element.style.getPropertyValue(styleProperty);
    if (actualValue) {
      Manipulator.setDataAttribute(element, styleProperty, actualValue);
    }
  }
  _resetElementAttributes(selector, styleProperty) {
    const manipulationCallBack = element => {
      const value = Manipulator.getDataAttribute(element, styleProperty);
      // We only want to remove the property if the value is `null`; the value can also be zero
      if (value === null) {
        element.style.removeProperty(styleProperty);
        return;
      }
      Manipulator.removeDataAttribute(element, styleProperty);
      element.style.setProperty(styleProperty, value);
    };
    this._applyManipulationCallback(selector, manipulationCallBack);
  }
  _applyManipulationCallback(selector, callBack) {
    if (isElement(selector)) {
      callBack(selector);
      return;
    }
    for (const sel of SelectorEngine.find(selector, this._element)) {
      callBack(sel);
    }
  }
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

const NAME$7 = 'modal';
const DATA_KEY$4 = 'bs.modal';
const EVENT_KEY$4 = `.${DATA_KEY$4}`;
const DATA_API_KEY$2 = '.data-api';
const ESCAPE_KEY$1 = 'Escape';
const EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
const EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
const EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
const EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
const EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
const CLASS_NAME_OPEN = 'modal-open';
const CLASS_NAME_FADE$3 = 'fade';
const CLASS_NAME_SHOW$4 = 'show';
const CLASS_NAME_STATIC = 'modal-static';
const OPEN_SELECTOR$1 = '.modal.show';
const SELECTOR_DIALOG = '.modal-dialog';
const SELECTOR_MODAL_BODY = '.modal-body';
const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
const Default$6 = {
  backdrop: true,
  focus: true,
  keyboard: true
};
const DefaultType$6 = {
  backdrop: '(boolean|string)',
  focus: 'boolean',
  keyboard: 'boolean'
};

/**
 * Class definition
 */

class Modal extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();
    this._isShown = false;
    this._isTransitioning = false;
    this._scrollBar = new ScrollBarHelper();
    this._addEventListeners();
  }

  // Getters
  static get Default() {
    return Default$6;
  }
  static get DefaultType() {
    return DefaultType$6;
  }
  static get NAME() {
    return NAME$7;
  }

  // Public
  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  }
  show(relatedTarget) {
    if (this._isShown || this._isTransitioning) {
      return;
    }
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
      relatedTarget
    });
    if (showEvent.defaultPrevented) {
      return;
    }
    this._isShown = true;
    this._isTransitioning = true;
    this._scrollBar.hide();
    document.body.classList.add(CLASS_NAME_OPEN);
    this._adjustDialog();
    this._backdrop.show(() => this._showElement(relatedTarget));
  }
  hide() {
    if (!this._isShown || this._isTransitioning) {
      return;
    }
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
    if (hideEvent.defaultPrevented) {
      return;
    }
    this._isShown = false;
    this._isTransitioning = true;
    this._focustrap.deactivate();
    this._element.classList.remove(CLASS_NAME_SHOW$4);
    this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
  }
  dispose() {
    EventHandler.off(window, EVENT_KEY$4);
    EventHandler.off(this._dialog, EVENT_KEY$4);
    this._backdrop.dispose();
    this._focustrap.deactivate();
    super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }

  // Private
  _initializeBackDrop() {
    return new Backdrop({
      isVisible: Boolean(this._config.backdrop),
      // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new FocusTrap({
      trapElement: this._element
    });
  }
  _showElement(relatedTarget) {
    // try to append dynamic modal
    if (!document.body.contains(this._element)) {
      document.body.append(this._element);
    }
    this._element.style.display = 'block';
    this._element.removeAttribute('aria-hidden');
    this._element.setAttribute('aria-modal', true);
    this._element.setAttribute('role', 'dialog');
    this._element.scrollTop = 0;
    const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
    if (modalBody) {
      modalBody.scrollTop = 0;
    }
    reflow(this._element);
    this._element.classList.add(CLASS_NAME_SHOW$4);
    const transitionComplete = () => {
      if (this._config.focus) {
        this._focustrap.activate();
      }
      this._isTransitioning = false;
      EventHandler.trigger(this._element, EVENT_SHOWN$4, {
        relatedTarget
      });
    };
    this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, event => {
      if (event.key !== ESCAPE_KEY$1) {
        return;
      }
      if (this._config.keyboard) {
        this.hide();
        return;
      }
      this._triggerBackdropTransition();
    });
    EventHandler.on(window, EVENT_RESIZE$1, () => {
      if (this._isShown && !this._isTransitioning) {
        this._adjustDialog();
      }
    });
    EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, event => {
      // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
      EventHandler.one(this._element, EVENT_CLICK_DISMISS, event2 => {
        if (this._element !== event.target || this._element !== event2.target) {
          return;
        }
        if (this._config.backdrop === 'static') {
          this._triggerBackdropTransition();
          return;
        }
        if (this._config.backdrop) {
          this.hide();
        }
      });
    });
  }
  _hideModal() {
    this._element.style.display = 'none';
    this._element.setAttribute('aria-hidden', true);
    this._element.removeAttribute('aria-modal');
    this._element.removeAttribute('role');
    this._isTransitioning = false;
    this._backdrop.hide(() => {
      document.body.classList.remove(CLASS_NAME_OPEN);
      this._resetAdjustments();
      this._scrollBar.reset();
      EventHandler.trigger(this._element, EVENT_HIDDEN$4);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_FADE$3);
  }
  _triggerBackdropTransition() {
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
    if (hideEvent.defaultPrevented) {
      return;
    }
    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
    const initialOverflowY = this._element.style.overflowY;
    // return if the following background transition hasn't yet completed
    if (initialOverflowY === 'hidden' || this._element.classList.contains(CLASS_NAME_STATIC)) {
      return;
    }
    if (!isModalOverflowing) {
      this._element.style.overflowY = 'hidden';
    }
    this._element.classList.add(CLASS_NAME_STATIC);
    this._queueCallback(() => {
      this._element.classList.remove(CLASS_NAME_STATIC);
      this._queueCallback(() => {
        this._element.style.overflowY = initialOverflowY;
      }, this._dialog);
    }, this._dialog);
    this._element.focus();
  }

  /**
   * The following methods are used to handle overflowing modals
   */

  _adjustDialog() {
    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
    const scrollbarWidth = this._scrollBar.getWidth();
    const isBodyOverflowing = scrollbarWidth > 0;
    if (isBodyOverflowing && !isModalOverflowing) {
      const property = isRTL() ? 'paddingLeft' : 'paddingRight';
      this._element.style[property] = `${scrollbarWidth}px`;
    }
    if (!isBodyOverflowing && isModalOverflowing) {
      const property = isRTL() ? 'paddingRight' : 'paddingLeft';
      this._element.style[property] = `${scrollbarWidth}px`;
    }
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = '';
    this._element.style.paddingRight = '';
  }

  // Static
  static jQueryInterface(config, relatedTarget) {
    return this.each(function () {
      const data = Modal.getOrCreateInstance(this, config);
      if (typeof config !== 'string') {
        return;
      }
      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config](relatedTarget);
    });
  }
}

/**
 * Data API implementation
 */

EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
  const target = SelectorEngine.getElementFromSelector(this);
  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }
  EventHandler.one(target, EVENT_SHOW$4, showEvent => {
    if (showEvent.defaultPrevented) {
      // only register focus restorer if modal will actually get shown
      return;
    }
    EventHandler.one(target, EVENT_HIDDEN$4, () => {
      if (isVisible(this)) {
        this.focus();
      }
    });
  });

  // avoid conflict when clicking modal toggler while another one is open
  const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
  if (alreadyOpen) {
    Modal.getInstance(alreadyOpen).hide();
  }
  const data = Modal.getOrCreateInstance(target);
  data.toggle(this);
});
enableDismissTrigger(Modal);

/**
 * jQuery
 */

defineJQueryPlugin(Modal);

/**
 * --------------------------------------------------------------------------
 * Bootstrap offcanvas.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

const NAME$6 = 'offcanvas';
const DATA_KEY$3 = 'bs.offcanvas';
const EVENT_KEY$3 = `.${DATA_KEY$3}`;
const DATA_API_KEY$1 = '.data-api';
const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
const ESCAPE_KEY = 'Escape';
const CLASS_NAME_SHOW$3 = 'show';
const CLASS_NAME_SHOWING$1 = 'showing';
const CLASS_NAME_HIDING = 'hiding';
const CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
const OPEN_SELECTOR = '.offcanvas.show';
const EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
const EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
const EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
const EVENT_RESIZE = `resize${EVENT_KEY$3}`;
const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
const Default$5 = {
  backdrop: true,
  keyboard: true,
  scroll: false
};
const DefaultType$5 = {
  backdrop: '(boolean|string)',
  keyboard: 'boolean',
  scroll: 'boolean'
};

/**
 * Class definition
 */

class Offcanvas extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._isShown = false;
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();
    this._addEventListeners();
  }

  // Getters
  static get Default() {
    return Default$5;
  }
  static get DefaultType() {
    return DefaultType$5;
  }
  static get NAME() {
    return NAME$6;
  }

  // Public
  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  }
  show(relatedTarget) {
    if (this._isShown) {
      return;
    }
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
      relatedTarget
    });
    if (showEvent.defaultPrevented) {
      return;
    }
    this._isShown = true;
    this._backdrop.show();
    if (!this._config.scroll) {
      new ScrollBarHelper().hide();
    }
    this._element.setAttribute('aria-modal', true);
    this._element.setAttribute('role', 'dialog');
    this._element.classList.add(CLASS_NAME_SHOWING$1);
    const completeCallBack = () => {
      if (!this._config.scroll || this._config.backdrop) {
        this._focustrap.activate();
      }
      this._element.classList.add(CLASS_NAME_SHOW$3);
      this._element.classList.remove(CLASS_NAME_SHOWING$1);
      EventHandler.trigger(this._element, EVENT_SHOWN$3, {
        relatedTarget
      });
    };
    this._queueCallback(completeCallBack, this._element, true);
  }
  hide() {
    if (!this._isShown) {
      return;
    }
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
    if (hideEvent.defaultPrevented) {
      return;
    }
    this._focustrap.deactivate();
    this._element.blur();
    this._isShown = false;
    this._element.classList.add(CLASS_NAME_HIDING);
    this._backdrop.hide();
    const completeCallback = () => {
      this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
      this._element.removeAttribute('aria-modal');
      this._element.removeAttribute('role');
      if (!this._config.scroll) {
        new ScrollBarHelper().reset();
      }
      EventHandler.trigger(this._element, EVENT_HIDDEN$3);
    };
    this._queueCallback(completeCallback, this._element, true);
  }
  dispose() {
    this._backdrop.dispose();
    this._focustrap.deactivate();
    super.dispose();
  }

  // Private
  _initializeBackDrop() {
    const clickCallback = () => {
      if (this._config.backdrop === 'static') {
        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
        return;
      }
      this.hide();
    };

    // 'static' option will be translated to true, and booleans will keep their value
    const isVisible = Boolean(this._config.backdrop);
    return new Backdrop({
      className: CLASS_NAME_BACKDROP,
      isVisible,
      isAnimated: true,
      rootElement: this._element.parentNode,
      clickCallback: isVisible ? clickCallback : null
    });
  }
  _initializeFocusTrap() {
    return new FocusTrap({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
      if (event.key !== ESCAPE_KEY) {
        return;
      }
      if (this._config.keyboard) {
        this.hide();
        return;
      }
      EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
    });
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Offcanvas.getOrCreateInstance(this, config);
      if (typeof config !== 'string') {
        return;
      }
      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config](this);
    });
  }
}

/**
 * Data API implementation
 */

EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
  const target = SelectorEngine.getElementFromSelector(this);
  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }
  if (isDisabled(this)) {
    return;
  }
  EventHandler.one(target, EVENT_HIDDEN$3, () => {
    // focus on trigger when it is closed
    if (isVisible(this)) {
      this.focus();
    }
  });

  // avoid conflict when clicking a toggler of an offcanvas, while another is open
  const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
  if (alreadyOpen && alreadyOpen !== target) {
    Offcanvas.getInstance(alreadyOpen).hide();
  }
  const data = Offcanvas.getOrCreateInstance(target);
  data.toggle(this);
});
EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
  for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
    Offcanvas.getOrCreateInstance(selector).show();
  }
});
EventHandler.on(window, EVENT_RESIZE, () => {
  for (const element of SelectorEngine.find('[aria-modal][class*=show][class*=offcanvas-]')) {
    if (getComputedStyle(element).position !== 'fixed') {
      Offcanvas.getOrCreateInstance(element).hide();
    }
  }
});
enableDismissTrigger(Offcanvas);

/**
 * jQuery
 */

defineJQueryPlugin(Offcanvas);

/**
 * --------------------------------------------------------------------------
 * Bootstrap util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

// js-docs-start allow-list
const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
const DefaultAllowlist = {
  // Global attributes allowed on any supplied element below.
  '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
  a: ['target', 'href', 'title', 'rel'],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  dd: [],
  div: [],
  dl: [],
  dt: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};
// js-docs-end allow-list

const uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);

/**
 * A pattern that recognizes URLs that are safe wrt. XSS in URL navigation
 * contexts.
 *
 * Shout-out to Angular https://github.com/angular/angular/blob/15.2.8/packages/core/src/sanitization/url_sanitizer.ts#L38
 */
// eslint-disable-next-line unicorn/better-regex
const SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
const allowedAttribute = (attribute, allowedAttributeList) => {
  const attributeName = attribute.nodeName.toLowerCase();
  if (allowedAttributeList.includes(attributeName)) {
    if (uriAttributes.has(attributeName)) {
      return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
    }
    return true;
  }

  // Check if a regular expression validates the attribute.
  return allowedAttributeList.filter(attributeRegex => attributeRegex instanceof RegExp).some(regex => regex.test(attributeName));
};
function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
  if (!unsafeHtml.length) {
    return unsafeHtml;
  }
  if (sanitizeFunction && typeof sanitizeFunction === 'function') {
    return sanitizeFunction(unsafeHtml);
  }
  const domParser = new window.DOMParser();
  const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
  const elements = [].concat(...createdDocument.body.querySelectorAll('*'));
  for (const element of elements) {
    const elementName = element.nodeName.toLowerCase();
    if (!Object.keys(allowList).includes(elementName)) {
      element.remove();
      continue;
    }
    const attributeList = [].concat(...element.attributes);
    const allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);
    for (const attribute of attributeList) {
      if (!allowedAttribute(attribute, allowedAttributes)) {
        element.removeAttribute(attribute.nodeName);
      }
    }
  }
  return createdDocument.body.innerHTML;
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap util/template-factory.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

const NAME$5 = 'TemplateFactory';
const Default$4 = {
  allowList: DefaultAllowlist,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: '',
  html: false,
  sanitize: true,
  sanitizeFn: null,
  template: '<div></div>'
};
const DefaultType$4 = {
  allowList: 'object',
  content: 'object',
  extraClass: '(string|function)',
  html: 'boolean',
  sanitize: 'boolean',
  sanitizeFn: '(null|function)',
  template: 'string'
};
const DefaultContentType = {
  entry: '(string|element|function|null)',
  selector: '(string|element)'
};

/**
 * Class definition
 */

class TemplateFactory extends Config {
  constructor(config) {
    super();
    this._config = this._getConfig(config);
  }

  // Getters
  static get Default() {
    return Default$4;
  }
  static get DefaultType() {
    return DefaultType$4;
  }
  static get NAME() {
    return NAME$5;
  }

  // Public
  getContent() {
    return Object.values(this._config.content).map(config => this._resolvePossibleFunction(config)).filter(Boolean);
  }
  hasContent() {
    return this.getContent().length > 0;
  }
  changeContent(content) {
    this._checkContent(content);
    this._config.content = {
      ...this._config.content,
      ...content
    };
    return this;
  }
  toHtml() {
    const templateWrapper = document.createElement('div');
    templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
    for (const [selector, text] of Object.entries(this._config.content)) {
      this._setContent(templateWrapper, text, selector);
    }
    const template = templateWrapper.children[0];
    const extraClass = this._resolvePossibleFunction(this._config.extraClass);
    if (extraClass) {
      template.classList.add(...extraClass.split(' '));
    }
    return template;
  }

  // Private
  _typeCheckConfig(config) {
    super._typeCheckConfig(config);
    this._checkContent(config.content);
  }
  _checkContent(arg) {
    for (const [selector, content] of Object.entries(arg)) {
      super._typeCheckConfig({
        selector,
        entry: content
      }, DefaultContentType);
    }
  }
  _setContent(template, content, selector) {
    const templateElement = SelectorEngine.findOne(selector, template);
    if (!templateElement) {
      return;
    }
    content = this._resolvePossibleFunction(content);
    if (!content) {
      templateElement.remove();
      return;
    }
    if (isElement(content)) {
      this._putElementInTemplate(getElement(content), templateElement);
      return;
    }
    if (this._config.html) {
      templateElement.innerHTML = this._maybeSanitize(content);
      return;
    }
    templateElement.textContent = content;
  }
  _maybeSanitize(arg) {
    return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
  }
  _resolvePossibleFunction(arg) {
    return execute(arg, [this]);
  }
  _putElementInTemplate(element, templateElement) {
    if (this._config.html) {
      templateElement.innerHTML = '';
      templateElement.append(element);
      return;
    }
    templateElement.textContent = element.textContent;
  }
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

const NAME$4 = 'tooltip';
const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
const CLASS_NAME_FADE$2 = 'fade';
const CLASS_NAME_MODAL = 'modal';
const CLASS_NAME_SHOW$2 = 'show';
const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
const EVENT_MODAL_HIDE = 'hide.bs.modal';
const TRIGGER_HOVER = 'hover';
const TRIGGER_FOCUS = 'focus';
const TRIGGER_CLICK = 'click';
const TRIGGER_MANUAL = 'manual';
const EVENT_HIDE$2 = 'hide';
const EVENT_HIDDEN$2 = 'hidden';
const EVENT_SHOW$2 = 'show';
const EVENT_SHOWN$2 = 'shown';
const EVENT_INSERTED = 'inserted';
const EVENT_CLICK$1 = 'click';
const EVENT_FOCUSIN$1 = 'focusin';
const EVENT_FOCUSOUT$1 = 'focusout';
const EVENT_MOUSEENTER = 'mouseenter';
const EVENT_MOUSELEAVE = 'mouseleave';
const AttachmentMap = {
  AUTO: 'auto',
  TOP: 'top',
  RIGHT: isRTL() ? 'left' : 'right',
  BOTTOM: 'bottom',
  LEFT: isRTL() ? 'right' : 'left'
};
const Default$3 = {
  allowList: DefaultAllowlist,
  animation: true,
  boundary: 'clippingParents',
  container: false,
  customClass: '',
  delay: 0,
  fallbackPlacements: ['top', 'right', 'bottom', 'left'],
  html: false,
  offset: [0, 6],
  placement: 'top',
  popperConfig: null,
  sanitize: true,
  sanitizeFn: null,
  selector: false,
  template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
  title: '',
  trigger: 'hover focus'
};
const DefaultType$3 = {
  allowList: 'object',
  animation: 'boolean',
  boundary: '(string|element)',
  container: '(string|element|boolean)',
  customClass: '(string|function)',
  delay: '(number|object)',
  fallbackPlacements: 'array',
  html: 'boolean',
  offset: '(array|string|function)',
  placement: '(string|function)',
  popperConfig: '(null|object|function)',
  sanitize: 'boolean',
  sanitizeFn: '(null|function)',
  selector: '(string|boolean)',
  template: 'string',
  title: '(string|element|function)',
  trigger: 'string'
};

/**
 * Class definition
 */

class Tooltip extends BaseComponent {
  constructor(element, config) {
    if (typeof _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ === 'undefined') {
      throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
    }
    super(element, config);

    // Private
    this._isEnabled = true;
    this._timeout = 0;
    this._isHovered = null;
    this._activeTrigger = {};
    this._popper = null;
    this._templateFactory = null;
    this._newContent = null;

    // Protected
    this.tip = null;
    this._setListeners();
    if (!this._config.selector) {
      this._fixTitle();
    }
  }

  // Getters
  static get Default() {
    return Default$3;
  }
  static get DefaultType() {
    return DefaultType$3;
  }
  static get NAME() {
    return NAME$4;
  }

  // Public
  enable() {
    this._isEnabled = true;
  }
  disable() {
    this._isEnabled = false;
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }
  toggle() {
    if (!this._isEnabled) {
      return;
    }
    this._activeTrigger.click = !this._activeTrigger.click;
    if (this._isShown()) {
      this._leave();
      return;
    }
    this._enter();
  }
  dispose() {
    clearTimeout(this._timeout);
    EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
    if (this._element.getAttribute('data-bs-original-title')) {
      this._element.setAttribute('title', this._element.getAttribute('data-bs-original-title'));
    }
    this._disposePopper();
    super.dispose();
  }
  show() {
    if (this._element.style.display === 'none') {
      throw new Error('Please use show on visible elements');
    }
    if (!(this._isWithContent() && this._isEnabled)) {
      return;
    }
    const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
    const shadowRoot = findShadowRoot(this._element);
    const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
    if (showEvent.defaultPrevented || !isInTheDom) {
      return;
    }

    // TODO: v6 remove this or make it optional
    this._disposePopper();
    const tip = this._getTipElement();
    this._element.setAttribute('aria-describedby', tip.getAttribute('id'));
    const {
      container
    } = this._config;
    if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
      container.append(tip);
      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
    }
    this._popper = this._createPopper(tip);
    tip.classList.add(CLASS_NAME_SHOW$2);

    // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
    if ('ontouchstart' in document.documentElement) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.on(element, 'mouseover', noop);
      }
    }
    const complete = () => {
      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));
      if (this._isHovered === false) {
        this._leave();
      }
      this._isHovered = false;
    };
    this._queueCallback(complete, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown()) {
      return;
    }
    const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
    if (hideEvent.defaultPrevented) {
      return;
    }
    const tip = this._getTipElement();
    tip.classList.remove(CLASS_NAME_SHOW$2);

    // If this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support
    if ('ontouchstart' in document.documentElement) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.off(element, 'mouseover', noop);
      }
    }
    this._activeTrigger[TRIGGER_CLICK] = false;
    this._activeTrigger[TRIGGER_FOCUS] = false;
    this._activeTrigger[TRIGGER_HOVER] = false;
    this._isHovered = null; // it is a trick to support manual triggering

    const complete = () => {
      if (this._isWithActiveTrigger()) {
        return;
      }
      if (!this._isHovered) {
        this._disposePopper();
      }
      this._element.removeAttribute('aria-describedby');
      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));
    };
    this._queueCallback(complete, this.tip, this._isAnimated());
  }
  update() {
    if (this._popper) {
      this._popper.update();
    }
  }

  // Protected
  _isWithContent() {
    return Boolean(this._getTitle());
  }
  _getTipElement() {
    if (!this.tip) {
      this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
    }
    return this.tip;
  }
  _createTipElement(content) {
    const tip = this._getTemplateFactory(content).toHtml();

    // TODO: remove this check in v6
    if (!tip) {
      return null;
    }
    tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
    // TODO: v6 the following can be achieved with CSS only
    tip.classList.add(`bs-${this.constructor.NAME}-auto`);
    const tipId = getUID(this.constructor.NAME).toString();
    tip.setAttribute('id', tipId);
    if (this._isAnimated()) {
      tip.classList.add(CLASS_NAME_FADE$2);
    }
    return tip;
  }
  setContent(content) {
    this._newContent = content;
    if (this._isShown()) {
      this._disposePopper();
      this.show();
    }
  }
  _getTemplateFactory(content) {
    if (this._templateFactory) {
      this._templateFactory.changeContent(content);
    } else {
      this._templateFactory = new TemplateFactory({
        ...this._config,
        // the `content` var has to be after `this._config`
        // to override config.content in case of popover
        content,
        extraClass: this._resolvePossibleFunction(this._config.customClass)
      });
    }
    return this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [SELECTOR_TOOLTIP_INNER]: this._getTitle()
    };
  }
  _getTitle() {
    return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute('data-bs-original-title');
  }

  // Private
  _initializeOnDelegatedTarget(event) {
    return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
  }
  _isAnimated() {
    return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
  }
  _createPopper(tip) {
    const placement = execute(this._config.placement, [this, tip, this._element]);
    const attachment = AttachmentMap[placement.toUpperCase()];
    return _popperjs_core__WEBPACK_IMPORTED_MODULE_1__.createPopper(this._element, tip, this._getPopperConfig(attachment));
  }
  _getOffset() {
    const {
      offset
    } = this._config;
    if (typeof offset === 'string') {
      return offset.split(',').map(value => Number.parseInt(value, 10));
    }
    if (typeof offset === 'function') {
      return popperData => offset(popperData, this._element);
    }
    return offset;
  }
  _resolvePossibleFunction(arg) {
    return execute(arg, [this._element]);
  }
  _getPopperConfig(attachment) {
    const defaultBsPopperConfig = {
      placement: attachment,
      modifiers: [{
        name: 'flip',
        options: {
          fallbackPlacements: this._config.fallbackPlacements
        }
      }, {
        name: 'offset',
        options: {
          offset: this._getOffset()
        }
      }, {
        name: 'preventOverflow',
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: 'arrow',
        options: {
          element: `.${this.constructor.NAME}-arrow`
        }
      }, {
        name: 'preSetPlacement',
        enabled: true,
        phase: 'beforeMain',
        fn: data => {
          // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
          // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
          this._getTipElement().setAttribute('data-popper-placement', data.state.placement);
        }
      }]
    };
    return {
      ...defaultBsPopperConfig,
      ...execute(this._config.popperConfig, [defaultBsPopperConfig])
    };
  }
  _setListeners() {
    const triggers = this._config.trigger.split(' ');
    for (const trigger of triggers) {
      if (trigger === 'click') {
        EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, event => {
          const context = this._initializeOnDelegatedTarget(event);
          context.toggle();
        });
      } else if (trigger !== TRIGGER_MANUAL) {
        const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
        const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
        EventHandler.on(this._element, eventIn, this._config.selector, event => {
          const context = this._initializeOnDelegatedTarget(event);
          context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
          context._enter();
        });
        EventHandler.on(this._element, eventOut, this._config.selector, event => {
          const context = this._initializeOnDelegatedTarget(event);
          context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
          context._leave();
        });
      }
    }
    this._hideModalHandler = () => {
      if (this._element) {
        this.hide();
      }
    };
    EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
  }
  _fixTitle() {
    const title = this._element.getAttribute('title');
    if (!title) {
      return;
    }
    if (!this._element.getAttribute('aria-label') && !this._element.textContent.trim()) {
      this._element.setAttribute('aria-label', title);
    }
    this._element.setAttribute('data-bs-original-title', title); // DO NOT USE IT. Is only for backwards compatibility
    this._element.removeAttribute('title');
  }
  _enter() {
    if (this._isShown() || this._isHovered) {
      this._isHovered = true;
      return;
    }
    this._isHovered = true;
    this._setTimeout(() => {
      if (this._isHovered) {
        this.show();
      }
    }, this._config.delay.show);
  }
  _leave() {
    if (this._isWithActiveTrigger()) {
      return;
    }
    this._isHovered = false;
    this._setTimeout(() => {
      if (!this._isHovered) {
        this.hide();
      }
    }, this._config.delay.hide);
  }
  _setTimeout(handler, timeout) {
    clearTimeout(this._timeout);
    this._timeout = setTimeout(handler, timeout);
  }
  _isWithActiveTrigger() {
    return Object.values(this._activeTrigger).includes(true);
  }
  _getConfig(config) {
    const dataAttributes = Manipulator.getDataAttributes(this._element);
    for (const dataAttribute of Object.keys(dataAttributes)) {
      if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
        delete dataAttributes[dataAttribute];
      }
    }
    config = {
      ...dataAttributes,
      ...(typeof config === 'object' && config ? config : {})
    };
    config = this._mergeConfigObj(config);
    config = this._configAfterMerge(config);
    this._typeCheckConfig(config);
    return config;
  }
  _configAfterMerge(config) {
    config.container = config.container === false ? document.body : getElement(config.container);
    if (typeof config.delay === 'number') {
      config.delay = {
        show: config.delay,
        hide: config.delay
      };
    }
    if (typeof config.title === 'number') {
      config.title = config.title.toString();
    }
    if (typeof config.content === 'number') {
      config.content = config.content.toString();
    }
    return config;
  }
  _getDelegateConfig() {
    const config = {};
    for (const [key, value] of Object.entries(this._config)) {
      if (this.constructor.Default[key] !== value) {
        config[key] = value;
      }
    }
    config.selector = false;
    config.trigger = 'manual';

    // In the future can be replaced with:
    // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
    // `Object.fromEntries(keysWithDifferentValues)`
    return config;
  }
  _disposePopper() {
    if (this._popper) {
      this._popper.destroy();
      this._popper = null;
    }
    if (this.tip) {
      this.tip.remove();
      this.tip = null;
    }
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Tooltip.getOrCreateInstance(this, config);
      if (typeof config !== 'string') {
        return;
      }
      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
}

/**
 * jQuery
 */

defineJQueryPlugin(Tooltip);

/**
 * --------------------------------------------------------------------------
 * Bootstrap popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

const NAME$3 = 'popover';
const SELECTOR_TITLE = '.popover-header';
const SELECTOR_CONTENT = '.popover-body';
const Default$2 = {
  ...Tooltip.Default,
  content: '',
  offset: [0, 8],
  placement: 'right',
  template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>',
  trigger: 'click'
};
const DefaultType$2 = {
  ...Tooltip.DefaultType,
  content: '(null|string|element|function)'
};

/**
 * Class definition
 */

class Popover extends Tooltip {
  // Getters
  static get Default() {
    return Default$2;
  }
  static get DefaultType() {
    return DefaultType$2;
  }
  static get NAME() {
    return NAME$3;
  }

  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }

  // Private
  _getContentForTemplate() {
    return {
      [SELECTOR_TITLE]: this._getTitle(),
      [SELECTOR_CONTENT]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Popover.getOrCreateInstance(this, config);
      if (typeof config !== 'string') {
        return;
      }
      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
}

/**
 * jQuery
 */

defineJQueryPlugin(Popover);

/**
 * --------------------------------------------------------------------------
 * Bootstrap scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

const NAME$2 = 'scrollspy';
const DATA_KEY$2 = 'bs.scrollspy';
const EVENT_KEY$2 = `.${DATA_KEY$2}`;
const DATA_API_KEY = '.data-api';
const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
const EVENT_CLICK = `click${EVENT_KEY$2}`;
const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
const CLASS_NAME_ACTIVE$1 = 'active';
const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
const SELECTOR_TARGET_LINKS = '[href]';
const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
const SELECTOR_NAV_LINKS = '.nav-link';
const SELECTOR_NAV_ITEMS = '.nav-item';
const SELECTOR_LIST_ITEMS = '.list-group-item';
const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
const SELECTOR_DROPDOWN = '.dropdown';
const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
const Default$1 = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: '0px 0px -25%',
  smoothScroll: false,
  target: null,
  threshold: [0.1, 0.5, 1]
};
const DefaultType$1 = {
  offset: '(number|null)',
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: 'string',
  smoothScroll: 'boolean',
  target: 'element',
  threshold: 'array'
};

/**
 * Class definition
 */

class ScrollSpy extends BaseComponent {
  constructor(element, config) {
    super(element, config);

    // this._element is the observablesContainer and config.target the menu links wrapper
    this._targetLinks = new Map();
    this._observableSections = new Map();
    this._rootElement = getComputedStyle(this._element).overflowY === 'visible' ? null : this._element;
    this._activeTarget = null;
    this._observer = null;
    this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    };
    this.refresh(); // initialize
  }

  // Getters
  static get Default() {
    return Default$1;
  }
  static get DefaultType() {
    return DefaultType$1;
  }
  static get NAME() {
    return NAME$2;
  }

  // Public
  refresh() {
    this._initializeTargetsAndObservables();
    this._maybeEnableSmoothScroll();
    if (this._observer) {
      this._observer.disconnect();
    } else {
      this._observer = this._getNewObserver();
    }
    for (const section of this._observableSections.values()) {
      this._observer.observe(section);
    }
  }
  dispose() {
    this._observer.disconnect();
    super.dispose();
  }

  // Private
  _configAfterMerge(config) {
    // TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case
    config.target = getElement(config.target) || document.body;

    // TODO: v6 Only for backwards compatibility reasons. Use rootMargin only
    config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
    if (typeof config.threshold === 'string') {
      config.threshold = config.threshold.split(',').map(value => Number.parseFloat(value));
    }
    return config;
  }
  _maybeEnableSmoothScroll() {
    if (!this._config.smoothScroll) {
      return;
    }

    // unregister any previous listeners
    EventHandler.off(this._config.target, EVENT_CLICK);
    EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, event => {
      const observableSection = this._observableSections.get(event.target.hash);
      if (observableSection) {
        event.preventDefault();
        const root = this._rootElement || window;
        const height = observableSection.offsetTop - this._element.offsetTop;
        if (root.scrollTo) {
          root.scrollTo({
            top: height,
            behavior: 'smooth'
          });
          return;
        }

        // Chrome 60 doesn't support `scrollTo`
        root.scrollTop = height;
      }
    });
  }
  _getNewObserver() {
    const options = {
      root: this._rootElement,
      threshold: this._config.threshold,
      rootMargin: this._config.rootMargin
    };
    return new IntersectionObserver(entries => this._observerCallback(entries), options);
  }

  // The logic of selection
  _observerCallback(entries) {
    const targetElement = entry => this._targetLinks.get(`#${entry.target.id}`);
    const activate = entry => {
      this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
      this._process(targetElement(entry));
    };
    const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
    const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = parentScrollTop;
    for (const entry of entries) {
      if (!entry.isIntersecting) {
        this._activeTarget = null;
        this._clearActiveClass(targetElement(entry));
        continue;
      }
      const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      // if we are scrolling down, pick the bigger offsetTop
      if (userScrollsDown && entryIsLowerThanPrevious) {
        activate(entry);
        // if parent isn't scrolled, let's keep the first visible item, breaking the iteration
        if (!parentScrollTop) {
          return;
        }
        continue;
      }

      // if we are scrolling up, pick the smallest offsetTop
      if (!userScrollsDown && !entryIsLowerThanPrevious) {
        activate(entry);
      }
    }
  }
  _initializeTargetsAndObservables() {
    this._targetLinks = new Map();
    this._observableSections = new Map();
    const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
    for (const anchor of targetLinks) {
      // ensure that the anchor has an id and is not disabled
      if (!anchor.hash || isDisabled(anchor)) {
        continue;
      }
      const observableSection = SelectorEngine.findOne(decodeURI(anchor.hash), this._element);

      // ensure that the observableSection exists & is visible
      if (isVisible(observableSection)) {
        this._targetLinks.set(decodeURI(anchor.hash), anchor);
        this._observableSections.set(anchor.hash, observableSection);
      }
    }
  }
  _process(target) {
    if (this._activeTarget === target) {
      return;
    }
    this._clearActiveClass(this._config.target);
    this._activeTarget = target;
    target.classList.add(CLASS_NAME_ACTIVE$1);
    this._activateParents(target);
    EventHandler.trigger(this._element, EVENT_ACTIVATE, {
      relatedTarget: target
    });
  }
  _activateParents(target) {
    // Activate dropdown parents
    if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
      SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
      return;
    }
    for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {
      // Set triggered links parents as active
      // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
      for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {
        item.classList.add(CLASS_NAME_ACTIVE$1);
      }
    }
  }
  _clearActiveClass(parent) {
    parent.classList.remove(CLASS_NAME_ACTIVE$1);
    const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);
    for (const node of activeNodes) {
      node.classList.remove(CLASS_NAME_ACTIVE$1);
    }
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = ScrollSpy.getOrCreateInstance(this, config);
      if (typeof config !== 'string') {
        return;
      }
      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
}

/**
 * Data API implementation
 */

EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
  for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {
    ScrollSpy.getOrCreateInstance(spy);
  }
});

/**
 * jQuery
 */

defineJQueryPlugin(ScrollSpy);

/**
 * --------------------------------------------------------------------------
 * Bootstrap tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

const NAME$1 = 'tab';
const DATA_KEY$1 = 'bs.tab';
const EVENT_KEY$1 = `.${DATA_KEY$1}`;
const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
const EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
const EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
const ARROW_LEFT_KEY = 'ArrowLeft';
const ARROW_RIGHT_KEY = 'ArrowRight';
const ARROW_UP_KEY = 'ArrowUp';
const ARROW_DOWN_KEY = 'ArrowDown';
const HOME_KEY = 'Home';
const END_KEY = 'End';
const CLASS_NAME_ACTIVE = 'active';
const CLASS_NAME_FADE$1 = 'fade';
const CLASS_NAME_SHOW$1 = 'show';
const CLASS_DROPDOWN = 'dropdown';
const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
const SELECTOR_DROPDOWN_MENU = '.dropdown-menu';
const NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${SELECTOR_DROPDOWN_TOGGLE})`;
const SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
const SELECTOR_OUTER = '.nav-item, .list-group-item';
const SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'; // TODO: could only be `tab` in v6
const SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
const SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;

/**
 * Class definition
 */

class Tab extends BaseComponent {
  constructor(element) {
    super(element);
    this._parent = this._element.closest(SELECTOR_TAB_PANEL);
    if (!this._parent) {
      return;
      // TODO: should throw exception in v6
      // throw new TypeError(`${element.outerHTML} has not a valid parent ${SELECTOR_INNER_ELEM}`)
    }

    // Set up initial aria attributes
    this._setInitialAttributes(this._parent, this._getChildren());
    EventHandler.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
  }

  // Getters
  static get NAME() {
    return NAME$1;
  }

  // Public
  show() {
    // Shows this elem and deactivate the active sibling if exists
    const innerElem = this._element;
    if (this._elemIsActive(innerElem)) {
      return;
    }

    // Search for active tab on same parent to deactivate it
    const active = this._getActiveElem();
    const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
      relatedTarget: innerElem
    }) : null;
    const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
      relatedTarget: active
    });
    if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
      return;
    }
    this._deactivate(active, innerElem);
    this._activate(innerElem, active);
  }

  // Private
  _activate(element, relatedElem) {
    if (!element) {
      return;
    }
    element.classList.add(CLASS_NAME_ACTIVE);
    this._activate(SelectorEngine.getElementFromSelector(element)); // Search and activate/show the proper section

    const complete = () => {
      if (element.getAttribute('role') !== 'tab') {
        element.classList.add(CLASS_NAME_SHOW$1);
        return;
      }
      element.removeAttribute('tabindex');
      element.setAttribute('aria-selected', true);
      this._toggleDropDown(element, true);
      EventHandler.trigger(element, EVENT_SHOWN$1, {
        relatedTarget: relatedElem
      });
    };
    this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
  }
  _deactivate(element, relatedElem) {
    if (!element) {
      return;
    }
    element.classList.remove(CLASS_NAME_ACTIVE);
    element.blur();
    this._deactivate(SelectorEngine.getElementFromSelector(element)); // Search and deactivate the shown section too

    const complete = () => {
      if (element.getAttribute('role') !== 'tab') {
        element.classList.remove(CLASS_NAME_SHOW$1);
        return;
      }
      element.setAttribute('aria-selected', false);
      element.setAttribute('tabindex', '-1');
      this._toggleDropDown(element, false);
      EventHandler.trigger(element, EVENT_HIDDEN$1, {
        relatedTarget: relatedElem
      });
    };
    this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
  }
  _keydown(event) {
    if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY, HOME_KEY, END_KEY].includes(event.key)) {
      return;
    }
    event.stopPropagation(); // stopPropagation/preventDefault both added to support up/down keys without scrolling the page
    event.preventDefault();
    const children = this._getChildren().filter(element => !isDisabled(element));
    let nextActiveElement;
    if ([HOME_KEY, END_KEY].includes(event.key)) {
      nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
    } else {
      const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
      nextActiveElement = getNextActiveElement(children, event.target, isNext, true);
    }
    if (nextActiveElement) {
      nextActiveElement.focus({
        preventScroll: true
      });
      Tab.getOrCreateInstance(nextActiveElement).show();
    }
  }
  _getChildren() {
    // collection of inner elements
    return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
  }
  _getActiveElem() {
    return this._getChildren().find(child => this._elemIsActive(child)) || null;
  }
  _setInitialAttributes(parent, children) {
    this._setAttributeIfNotExists(parent, 'role', 'tablist');
    for (const child of children) {
      this._setInitialAttributesOnChild(child);
    }
  }
  _setInitialAttributesOnChild(child) {
    child = this._getInnerElement(child);
    const isActive = this._elemIsActive(child);
    const outerElem = this._getOuterElement(child);
    child.setAttribute('aria-selected', isActive);
    if (outerElem !== child) {
      this._setAttributeIfNotExists(outerElem, 'role', 'presentation');
    }
    if (!isActive) {
      child.setAttribute('tabindex', '-1');
    }
    this._setAttributeIfNotExists(child, 'role', 'tab');

    // set attributes to the related panel too
    this._setInitialAttributesOnTargetPanel(child);
  }
  _setInitialAttributesOnTargetPanel(child) {
    const target = SelectorEngine.getElementFromSelector(child);
    if (!target) {
      return;
    }
    this._setAttributeIfNotExists(target, 'role', 'tabpanel');
    if (child.id) {
      this._setAttributeIfNotExists(target, 'aria-labelledby', `${child.id}`);
    }
  }
  _toggleDropDown(element, open) {
    const outerElem = this._getOuterElement(element);
    if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
      return;
    }
    const toggle = (selector, className) => {
      const element = SelectorEngine.findOne(selector, outerElem);
      if (element) {
        element.classList.toggle(className, open);
      }
    };
    toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
    toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
    outerElem.setAttribute('aria-expanded', open);
  }
  _setAttributeIfNotExists(element, attribute, value) {
    if (!element.hasAttribute(attribute)) {
      element.setAttribute(attribute, value);
    }
  }
  _elemIsActive(elem) {
    return elem.classList.contains(CLASS_NAME_ACTIVE);
  }

  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(elem) {
    return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
  }

  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(elem) {
    return elem.closest(SELECTOR_OUTER) || elem;
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Tab.getOrCreateInstance(this);
      if (typeof config !== 'string') {
        return;
      }
      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
}

/**
 * Data API implementation
 */

EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }
  if (isDisabled(this)) {
    return;
  }
  Tab.getOrCreateInstance(this).show();
});

/**
 * Initialize on focus
 */
EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
  for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
    Tab.getOrCreateInstance(element);
  }
});
/**
 * jQuery
 */

defineJQueryPlugin(Tab);

/**
 * --------------------------------------------------------------------------
 * Bootstrap toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */

const NAME = 'toast';
const DATA_KEY = 'bs.toast';
const EVENT_KEY = `.${DATA_KEY}`;
const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const CLASS_NAME_FADE = 'fade';
const CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility
const CLASS_NAME_SHOW = 'show';
const CLASS_NAME_SHOWING = 'showing';
const DefaultType = {
  animation: 'boolean',
  autohide: 'boolean',
  delay: 'number'
};
const Default = {
  animation: true,
  autohide: true,
  delay: 5000
};

/**
 * Class definition
 */

class Toast extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._timeout = null;
    this._hasMouseInteraction = false;
    this._hasKeyboardInteraction = false;
    this._setListeners();
  }

  // Getters
  static get Default() {
    return Default;
  }
  static get DefaultType() {
    return DefaultType;
  }
  static get NAME() {
    return NAME;
  }

  // Public
  show() {
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
    if (showEvent.defaultPrevented) {
      return;
    }
    this._clearTimeout();
    if (this._config.animation) {
      this._element.classList.add(CLASS_NAME_FADE);
    }
    const complete = () => {
      this._element.classList.remove(CLASS_NAME_SHOWING);
      EventHandler.trigger(this._element, EVENT_SHOWN);
      this._maybeScheduleHide();
    };
    this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated
    reflow(this._element);
    this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
    this._queueCallback(complete, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown()) {
      return;
    }
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
    if (hideEvent.defaultPrevented) {
      return;
    }
    const complete = () => {
      this._element.classList.add(CLASS_NAME_HIDE); // @deprecated
      this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
      EventHandler.trigger(this._element, EVENT_HIDDEN);
    };
    this._element.classList.add(CLASS_NAME_SHOWING);
    this._queueCallback(complete, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout();
    if (this.isShown()) {
      this._element.classList.remove(CLASS_NAME_SHOW);
    }
    super.dispose();
  }
  isShown() {
    return this._element.classList.contains(CLASS_NAME_SHOW);
  }

  // Private

  _maybeScheduleHide() {
    if (!this._config.autohide) {
      return;
    }
    if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
      return;
    }
    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }
  _onInteraction(event, isInteracting) {
    switch (event.type) {
      case 'mouseover':
      case 'mouseout':
        {
          this._hasMouseInteraction = isInteracting;
          break;
        }
      case 'focusin':
      case 'focusout':
        {
          this._hasKeyboardInteraction = isInteracting;
          break;
        }
    }
    if (isInteracting) {
      this._clearTimeout();
      return;
    }
    const nextElement = event.relatedTarget;
    if (this._element === nextElement || this._element.contains(nextElement)) {
      return;
    }
    this._maybeScheduleHide();
  }
  _setListeners() {
    EventHandler.on(this._element, EVENT_MOUSEOVER, event => this._onInteraction(event, true));
    EventHandler.on(this._element, EVENT_MOUSEOUT, event => this._onInteraction(event, false));
    EventHandler.on(this._element, EVENT_FOCUSIN, event => this._onInteraction(event, true));
    EventHandler.on(this._element, EVENT_FOCUSOUT, event => this._onInteraction(event, false));
  }
  _clearTimeout() {
    clearTimeout(this._timeout);
    this._timeout = null;
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Toast.getOrCreateInstance(this, config);
      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      }
    });
  }
}

/**
 * Data API implementation
 */

enableDismissTrigger(Toast);

/**
 * jQuery
 */

defineJQueryPlugin(Toast);


/***/ }),

/***/ 9867:
/*!******************************************************!*\
  !*** ./node_modules/detect-it/dist/detect-it.esm.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deviceType: () => (/* binding */ deviceType),
/* harmony export */   primaryInput: () => (/* binding */ primaryInput),
/* harmony export */   supportsPassiveEvents: () => (/* binding */ supportsPassiveEvents),
/* harmony export */   supportsPointerEvents: () => (/* binding */ supportsPointerEvents),
/* harmony export */   supportsTouchEvents: () => (/* binding */ supportsTouchEvents)
/* harmony export */ });
// so it doesn't throw if no window or matchMedia
var w = typeof window !== 'undefined' ? window : {
  screen: {},
  navigator: {}
};
var matchMedia = (w.matchMedia || function () {
  return {
    matches: false
  };
}).bind(w);
// passive events test
// adapted from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
var passiveOptionAccessed = false;
var options = {
  get passive() {
    return passiveOptionAccessed = true;
  }
};
// have to set and remove a no-op listener instead of null
// (which was used previously), because Edge v15 throws an error
// when providing a null callback.
// https://github.com/rafgraph/detect-passive-events/pull/3
// eslint-disable-next-line @typescript-eslint/no-empty-function
var noop = function () {};
w.addEventListener && w.addEventListener('p', noop, options);
w.removeEventListener && w.removeEventListener('p', noop, false);
var supportsPassiveEvents = passiveOptionAccessed;
var supportsPointerEvents = ('PointerEvent' in w);
var onTouchStartInWindow = ('ontouchstart' in w);
var touchEventInWindow = ('TouchEvent' in w);
// onTouchStartInWindow is the old-old-legacy way to determine a touch device
// and many websites interpreted it to mean that the device is a touch only phone,
// so today browsers on a desktop/laptop computer with a touch screen (primary input mouse)
// have onTouchStartInWindow as false (to prevent from being confused with a
// touchOnly phone) even though they support the TouchEvents API, so need to check
// both onTouchStartInWindow and touchEventInWindow for TouchEvent support,
// however, some browsers (chromium) support the TouchEvents API even when running on
// a mouse only device (touchEventInWindow true, but onTouchStartInWindow false)
// so the touchEventInWindow check needs to include an coarse pointer media query
var supportsTouchEvents = onTouchStartInWindow || touchEventInWindow && matchMedia('(any-pointer: coarse)').matches;
var hasTouch = (w.navigator.maxTouchPoints || 0) > 0 || supportsTouchEvents;
// userAgent is used as a backup to correct for known device/browser bugs
// and when the browser doesn't support interaction media queries (pointer and hover)
// see https://caniuse.com/css-media-interaction
var userAgent = w.navigator.userAgent || '';
// iPads now support a mouse that can hover, however the media query interaction
// feature results always say iPads only have a coarse pointer that can't hover
// even when a mouse is connected (anyFine and anyHover are always false),
// this unfortunately indicates a touch only device but iPads should
// be classified as a hybrid device, so determine if it is an iPad
// to indicate it should be treated as a hybrid device with anyHover true
var isIPad = matchMedia('(pointer: coarse)').matches &&
// both iPad and iPhone can "request desktop site", which sets the userAgent to Macintosh
// so need to check both userAgents to determine if it is an iOS device
// and screen size to separate iPad from iPhone
/iPad|Macintosh/.test(userAgent) && Math.min(w.screen.width || 0, w.screen.height || 0) >= 768;
var hasCoarsePrimaryPointer = (matchMedia('(pointer: coarse)').matches ||
// if the pointer is not coarse and not fine then the browser doesn't support
// interaction media queries (see https://caniuse.com/css-media-interaction)
// so if it has onTouchStartInWindow assume it has a coarse primary pointer
!matchMedia('(pointer: fine)').matches && onTouchStartInWindow) &&
// bug in firefox (as of v81) on hybrid windows devices where the interaction media queries
// always indicate a touch only device (only has a coarse pointer that can't hover)
// so assume that the primary pointer is not coarse for firefox windows
!/Windows.*Firefox/.test(userAgent);
var hasAnyHoverOrAnyFinePointer = matchMedia('(any-pointer: fine)').matches || matchMedia('(any-hover: hover)').matches ||
// iPads might have an input device that can hover, so assume it has anyHover
isIPad ||
// if no onTouchStartInWindow then the browser is indicating that it is not a touch only device
// see above note for supportsTouchEvents
!onTouchStartInWindow;
// a hybrid device is one that both hasTouch and
// any input can hover or has a fine pointer, or the primary pointer is not coarse
// if it's not a hybrid, then if it hasTouch it's touchOnly, otherwise it's mouseOnly
var deviceType = hasTouch && (hasAnyHoverOrAnyFinePointer || !hasCoarsePrimaryPointer) ? 'hybrid' : hasTouch ? 'touchOnly' : 'mouseOnly';
var primaryInput = deviceType === 'mouseOnly' ? 'mouse' : deviceType === 'touchOnly' ? 'touch' :
// if the device is a hybrid, then if the primary pointer is coarse
// assume the primaryInput is touch, otherwise assume it's mouse
hasCoarsePrimaryPointer ? 'touch' : 'mouse';


/***/ }),

/***/ 1166:
/*!*************************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/NotificationFactories.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMPLETE_NOTIFICATION: () => (/* binding */ COMPLETE_NOTIFICATION),
/* harmony export */   createNotification: () => (/* binding */ createNotification),
/* harmony export */   errorNotification: () => (/* binding */ errorNotification),
/* harmony export */   nextNotification: () => (/* binding */ nextNotification)
/* harmony export */ });
const COMPLETE_NOTIFICATION = (() => createNotification('C', undefined, undefined))();
function errorNotification(error) {
  return createNotification('E', undefined, error);
}
function nextNotification(value) {
  return createNotification('N', value, undefined);
}
function createNotification(kind, value, error) {
  return {
    kind,
    value,
    error
  };
}

/***/ }),

/***/ 2416:
/*!**************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/Observable.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Observable: () => (/* binding */ Observable)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ 6323);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Subscription */ 8076);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbol/observable */ 5581);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/pipe */ 9068);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ 1627);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/isFunction */ 732);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/errorContext */ 6341);







class Observable {
  constructor(subscribe) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }
  lift(operator) {
    const observable = new Observable();
    observable.source = this;
    observable.operator = operator;
    return observable;
  }
  subscribe(observerOrNext, error, complete) {
    const subscriber = isSubscriber(observerOrNext) ? observerOrNext : new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber(observerOrNext, error, complete);
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_1__.errorContext)(() => {
      const {
        operator,
        source
      } = this;
      subscriber.add(operator ? operator.call(subscriber, source) : source ? this._subscribe(subscriber) : this._trySubscribe(subscriber));
    });
    return subscriber;
  }
  _trySubscribe(sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  }
  forEach(next, promiseCtor) {
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor((resolve, reject) => {
      const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
        next: value => {
          try {
            next(value);
          } catch (err) {
            reject(err);
            subscriber.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
      this.subscribe(subscriber);
    });
  }
  _subscribe(subscriber) {
    var _a;
    return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
  }
  [_symbol_observable__WEBPACK_IMPORTED_MODULE_2__.observable]() {
    return this;
  }
  pipe(...operations) {
    return (0,_util_pipe__WEBPACK_IMPORTED_MODULE_3__.pipeFromArray)(operations)(this);
  }
  toPromise(promiseCtor) {
    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor((resolve, reject) => {
      let value;
      this.subscribe(x => value = x, err => reject(err), () => resolve(value));
    });
  }
}
Observable.create = subscribe => {
  return new Observable(subscribe);
};
function getPromiseCtor(promiseCtor) {
  var _a;
  return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : _config__WEBPACK_IMPORTED_MODULE_4__.config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
  return value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.next) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.error) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_5__.isFunction)(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber || isObserver(value) && (0,_Subscription__WEBPACK_IMPORTED_MODULE_6__.isSubscription)(value);
}

/***/ }),

/***/ 4532:
/*!*************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/Scheduler.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scheduler: () => (/* binding */ Scheduler)
/* harmony export */ });
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduler/dateTimestampProvider */ 3594);

class Scheduler {
  constructor(schedulerActionCtor, now = Scheduler.now) {
    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }
  schedule(work, delay = 0, state) {
    return new this.schedulerActionCtor(this, work).schedule(state, delay);
  }
}
Scheduler.now = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_0__.dateTimestampProvider.now;

/***/ }),

/***/ 4969:
/*!***********************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/Subject.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnonymousSubject: () => (/* binding */ AnonymousSubject),
/* harmony export */   Subject: () => (/* binding */ Subject)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observable */ 2416);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Subscription */ 8076);
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ 5504);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/arrRemove */ 2705);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/errorContext */ 6341);





class Subject extends _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable {
  constructor() {
    super();
    this.closed = false;
    this.currentObservers = null;
    this.observers = [];
    this.isStopped = false;
    this.hasError = false;
    this.thrownError = null;
  }
  lift(operator) {
    const subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  }
  _throwIfClosed() {
    if (this.closed) {
      throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__.ObjectUnsubscribedError();
    }
  }
  next(value) {
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(() => {
      this._throwIfClosed();
      if (!this.isStopped) {
        if (!this.currentObservers) {
          this.currentObservers = Array.from(this.observers);
        }
        for (const observer of this.currentObservers) {
          observer.next(value);
        }
      }
    });
  }
  error(err) {
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(() => {
      this._throwIfClosed();
      if (!this.isStopped) {
        this.hasError = this.isStopped = true;
        this.thrownError = err;
        const {
          observers
        } = this;
        while (observers.length) {
          observers.shift().error(err);
        }
      }
    });
  }
  complete() {
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_2__.errorContext)(() => {
      this._throwIfClosed();
      if (!this.isStopped) {
        this.isStopped = true;
        const {
          observers
        } = this;
        while (observers.length) {
          observers.shift().complete();
        }
      }
    });
  }
  unsubscribe() {
    this.isStopped = this.closed = true;
    this.observers = this.currentObservers = null;
  }
  get observed() {
    var _a;
    return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
  }
  _trySubscribe(subscriber) {
    this._throwIfClosed();
    return super._trySubscribe(subscriber);
  }
  _subscribe(subscriber) {
    this._throwIfClosed();
    this._checkFinalizedStatuses(subscriber);
    return this._innerSubscribe(subscriber);
  }
  _innerSubscribe(subscriber) {
    const {
      hasError,
      isStopped,
      observers
    } = this;
    if (hasError || isStopped) {
      return _Subscription__WEBPACK_IMPORTED_MODULE_3__.EMPTY_SUBSCRIPTION;
    }
    this.currentObservers = null;
    observers.push(subscriber);
    return new _Subscription__WEBPACK_IMPORTED_MODULE_3__.Subscription(() => {
      this.currentObservers = null;
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_4__.arrRemove)(observers, subscriber);
    });
  }
  _checkFinalizedStatuses(subscriber) {
    const {
      hasError,
      thrownError,
      isStopped
    } = this;
    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped) {
      subscriber.complete();
    }
  }
  asObservable() {
    const observable = new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable();
    observable.source = this;
    return observable;
  }
}
Subject.create = (destination, source) => {
  return new AnonymousSubject(destination, source);
};
class AnonymousSubject extends Subject {
  constructor(destination, source) {
    super();
    this.destination = destination;
    this.source = source;
  }
  next(value) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
  }
  error(err) {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
  }
  complete() {
    var _a, _b;
    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
  }
  _subscribe(subscriber) {
    var _a, _b;
    return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : _Subscription__WEBPACK_IMPORTED_MODULE_3__.EMPTY_SUBSCRIPTION;
  }
}

/***/ }),

/***/ 6323:
/*!**************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/Subscriber.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_OBSERVER: () => (/* binding */ EMPTY_OBSERVER),
/* harmony export */   SafeSubscriber: () => (/* binding */ SafeSubscriber),
/* harmony export */   Subscriber: () => (/* binding */ Subscriber)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/isFunction */ 732);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscription */ 8076);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ 1627);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/reportUnhandledError */ 1537);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/noop */ 3180);
/* harmony import */ var _NotificationFactories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationFactories */ 1166);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scheduler/timeoutProvider */ 5365);
/* harmony import */ var _util_errorContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/errorContext */ 6341);








class Subscriber extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
  constructor(destination) {
    super();
    this.isStopped = false;
    if (destination) {
      this.destination = destination;
      if ((0,_Subscription__WEBPACK_IMPORTED_MODULE_0__.isSubscription)(destination)) {
        destination.add(this);
      }
    } else {
      this.destination = EMPTY_OBSERVER;
    }
  }
  static create(next, error, complete) {
    return new SafeSubscriber(next, error, complete);
  }
  next(value) {
    if (this.isStopped) {
      handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_1__.nextNotification)(value), this);
    } else {
      this._next(value);
    }
  }
  error(err) {
    if (this.isStopped) {
      handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_1__.errorNotification)(err), this);
    } else {
      this.isStopped = true;
      this._error(err);
    }
  }
  complete() {
    if (this.isStopped) {
      handleStoppedNotification(_NotificationFactories__WEBPACK_IMPORTED_MODULE_1__.COMPLETE_NOTIFICATION, this);
    } else {
      this.isStopped = true;
      this._complete();
    }
  }
  unsubscribe() {
    if (!this.closed) {
      this.isStopped = true;
      super.unsubscribe();
      this.destination = null;
    }
  }
  _next(value) {
    this.destination.next(value);
  }
  _error(err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  }
  _complete() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }
}
const _bind = Function.prototype.bind;
function bind(fn, thisArg) {
  return _bind.call(fn, thisArg);
}
class ConsumerObserver {
  constructor(partialObserver) {
    this.partialObserver = partialObserver;
  }
  next(value) {
    const {
      partialObserver
    } = this;
    if (partialObserver.next) {
      try {
        partialObserver.next(value);
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  }
  error(err) {
    const {
      partialObserver
    } = this;
    if (partialObserver.error) {
      try {
        partialObserver.error(err);
      } catch (error) {
        handleUnhandledError(error);
      }
    } else {
      handleUnhandledError(err);
    }
  }
  complete() {
    const {
      partialObserver
    } = this;
    if (partialObserver.complete) {
      try {
        partialObserver.complete();
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  }
}
class SafeSubscriber extends Subscriber {
  constructor(observerOrNext, error, complete) {
    super();
    let partialObserver;
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_2__.isFunction)(observerOrNext) || !observerOrNext) {
      partialObserver = {
        next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined,
        error: error !== null && error !== void 0 ? error : undefined,
        complete: complete !== null && complete !== void 0 ? complete : undefined
      };
    } else {
      let context;
      if (this && _config__WEBPACK_IMPORTED_MODULE_3__.config.useDeprecatedNextContext) {
        context = Object.create(observerOrNext);
        context.unsubscribe = () => this.unsubscribe();
        partialObserver = {
          next: observerOrNext.next && bind(observerOrNext.next, context),
          error: observerOrNext.error && bind(observerOrNext.error, context),
          complete: observerOrNext.complete && bind(observerOrNext.complete, context)
        };
      } else {
        partialObserver = observerOrNext;
      }
    }
    this.destination = new ConsumerObserver(partialObserver);
  }
}
function handleUnhandledError(error) {
  if (_config__WEBPACK_IMPORTED_MODULE_3__.config.useDeprecatedSynchronousErrorHandling) {
    (0,_util_errorContext__WEBPACK_IMPORTED_MODULE_4__.captureError)(error);
  } else {
    (0,_util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_5__.reportUnhandledError)(error);
  }
}
function defaultErrorHandler(err) {
  throw err;
}
function handleStoppedNotification(notification, subscriber) {
  const {
    onStoppedNotification
  } = _config__WEBPACK_IMPORTED_MODULE_3__.config;
  onStoppedNotification && _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_6__.timeoutProvider.setTimeout(() => onStoppedNotification(notification, subscriber));
}
const EMPTY_OBSERVER = {
  closed: true,
  next: _util_noop__WEBPACK_IMPORTED_MODULE_7__.noop,
  error: defaultErrorHandler,
  complete: _util_noop__WEBPACK_IMPORTED_MODULE_7__.noop
};

/***/ }),

/***/ 8076:
/*!****************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/Subscription.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_SUBSCRIPTION: () => (/* binding */ EMPTY_SUBSCRIPTION),
/* harmony export */   Subscription: () => (/* binding */ Subscription),
/* harmony export */   isSubscription: () => (/* binding */ isSubscription)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/isFunction */ 732);
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/UnsubscriptionError */ 5250);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/arrRemove */ 2705);



class Subscription {
  constructor(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }
  unsubscribe() {
    let errors;
    if (!this.closed) {
      this.closed = true;
      const {
        _parentage
      } = this;
      if (_parentage) {
        this._parentage = null;
        if (Array.isArray(_parentage)) {
          for (const parent of _parentage) {
            parent.remove(this);
          }
        } else {
          _parentage.remove(this);
        }
      }
      const {
        initialTeardown: initialFinalizer
      } = this;
      if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(initialFinalizer)) {
        try {
          initialFinalizer();
        } catch (e) {
          errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError ? e.errors : [e];
        }
      }
      const {
        _finalizers
      } = this;
      if (_finalizers) {
        this._finalizers = null;
        for (const finalizer of _finalizers) {
          try {
            execFinalizer(finalizer);
          } catch (err) {
            errors = errors !== null && errors !== void 0 ? errors : [];
            if (err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError) {
              errors = [...errors, ...err.errors];
            } else {
              errors.push(err);
            }
          }
        }
      }
      if (errors) {
        throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_1__.UnsubscriptionError(errors);
      }
    }
  }
  add(teardown) {
    var _a;
    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof Subscription) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }
          teardown._addParent(this);
        }
        (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
      }
    }
  }
  _hasParent(parent) {
    const {
      _parentage
    } = this;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  }
  _addParent(parent) {
    const {
      _parentage
    } = this;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  }
  _removeParent(parent) {
    const {
      _parentage
    } = this;
    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(_parentage, parent);
    }
  }
  remove(teardown) {
    const {
      _finalizers
    } = this;
    _finalizers && (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(_finalizers, teardown);
    if (teardown instanceof Subscription) {
      teardown._removeParent(this);
    }
  }
}
Subscription.EMPTY = (() => {
  const empty = new Subscription();
  empty.closed = true;
  return empty;
})();
const EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
  return value instanceof Subscription || value && 'closed' in value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.remove) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.add) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.unsubscribe);
}
function execFinalizer(finalizer) {
  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}

/***/ }),

/***/ 1627:
/*!**********************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/config.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config)
/* harmony export */ });
const config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: undefined,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};

/***/ }),

/***/ 995:
/*!************************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/observable/innerFrom.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromArrayLike: () => (/* binding */ fromArrayLike),
/* harmony export */   fromAsyncIterable: () => (/* binding */ fromAsyncIterable),
/* harmony export */   fromInteropObservable: () => (/* binding */ fromInteropObservable),
/* harmony export */   fromIterable: () => (/* binding */ fromIterable),
/* harmony export */   fromPromise: () => (/* binding */ fromPromise),
/* harmony export */   fromReadableStreamLike: () => (/* binding */ fromReadableStreamLike),
/* harmony export */   innerFrom: () => (/* binding */ innerFrom)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArrayLike */ 9956);
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isPromise */ 9491);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 2416);
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isInteropObservable */ 6658);
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isAsyncIterable */ 8300);
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/throwUnobservableError */ 5848);
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/isIterable */ 86);
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/isReadableStreamLike */ 9819);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/isFunction */ 732);
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/reportUnhandledError */ 1537);
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../symbol/observable */ 5581);












function innerFrom(input) {
  if (input instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable) {
    return input;
  }
  if (input != null) {
    if ((0,_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_1__.isInteropObservable)(input)) {
      return fromInteropObservable(input);
    }
    if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__.isArrayLike)(input)) {
      return fromArrayLike(input);
    }
    if ((0,_util_isPromise__WEBPACK_IMPORTED_MODULE_3__.isPromise)(input)) {
      return fromPromise(input);
    }
    if ((0,_util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_4__.isAsyncIterable)(input)) {
      return fromAsyncIterable(input);
    }
    if ((0,_util_isIterable__WEBPACK_IMPORTED_MODULE_5__.isIterable)(input)) {
      return fromIterable(input);
    }
    if ((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__.isReadableStreamLike)(input)) {
      return fromReadableStreamLike(input);
    }
  }
  throw (0,_util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_7__.createInvalidObservableTypeError)(input);
}
function fromInteropObservable(obj) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    const obs = obj[_symbol_observable__WEBPACK_IMPORTED_MODULE_8__.observable]();
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_9__.isFunction)(obs.subscribe)) {
      return obs.subscribe(subscriber);
    }
    throw new TypeError('Provided object does not correctly implement Symbol.observable');
  });
}
function fromArrayLike(array) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    for (let i = 0; i < array.length && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }
    subscriber.complete();
  });
}
function fromPromise(promise) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    promise.then(value => {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, err => subscriber.error(err)).then(null, _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_10__.reportUnhandledError);
  });
}
function fromIterable(iterable) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    for (const value of iterable) {
      subscriber.next(value);
      if (subscriber.closed) {
        return;
      }
    }
    subscriber.complete();
  });
}
function fromAsyncIterable(asyncIterable) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => {
    process(asyncIterable, subscriber).catch(err => subscriber.error(err));
  });
}
function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_6__.readableStreamLikeToAsyncGenerator)(readableStream));
}
function process(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1;
  var e_1, _a;
  return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
    try {
      for (asyncIterable_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__asyncValues)(asyncIterable); asyncIterable_1_1 = yield asyncIterable_1.next(), !asyncIterable_1_1.done;) {
        const value = asyncIterable_1_1.value;
        subscriber.next(value);
        if (subscriber.closed) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return)) yield _a.call(asyncIterable_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    subscriber.complete();
  });
}

/***/ }),

/***/ 6862:
/*!********************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/observable/timer.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timer: () => (/* binding */ timer)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 2416);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 8483);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ 5835);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isDate */ 8840);




function timer(dueTime = 0, intervalOrScheduler, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
  let intervalDuration = -1;
  if (intervalOrScheduler != null) {
    if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(intervalOrScheduler)) {
      scheduler = intervalOrScheduler;
    } else {
      intervalDuration = intervalOrScheduler;
    }
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
    let due = (0,_util_isDate__WEBPACK_IMPORTED_MODULE_3__.isValidDate)(dueTime) ? +dueTime - scheduler.now() : dueTime;
    if (due < 0) {
      due = 0;
    }
    let n = 0;
    return scheduler.schedule(function () {
      if (!subscriber.closed) {
        subscriber.next(n++);
        if (0 <= intervalDuration) {
          this.schedule(undefined, intervalDuration);
        } else {
          subscriber.complete();
        }
      }
    }, due);
  });
}

/***/ }),

/***/ 7077:
/*!********************************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/operators/OperatorSubscriber.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OperatorSubscriber: () => (/* binding */ OperatorSubscriber),
/* harmony export */   createOperatorSubscriber: () => (/* binding */ createOperatorSubscriber)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 6323);

function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
  return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
class OperatorSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
  constructor(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
    super(destination);
    this.onFinalize = onFinalize;
    this.shouldUnsubscribe = shouldUnsubscribe;
    this._next = onNext ? function (value) {
      try {
        onNext(value);
      } catch (err) {
        destination.error(err);
      }
    } : super._next;
    this._error = onError ? function (err) {
      try {
        onError(err);
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : super._error;
    this._complete = onComplete ? function () {
      try {
        onComplete();
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : super._complete;
  }
  unsubscribe() {
    var _a;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      const {
        closed
      } = this;
      super.unsubscribe();
      !closed && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
    }
  }
}

/***/ }),

/***/ 1071:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/operators/distinctUntilChanged.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   distinctUntilChanged: () => (/* binding */ distinctUntilChanged)
/* harmony export */ });
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/identity */ 1454);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 1465);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 7077);



function distinctUntilChanged(comparator, keySelector = _util_identity__WEBPACK_IMPORTED_MODULE_0__.identity) {
  comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    let previousKey;
    let first = true;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      const currentKey = keySelector(value);
      if (first || !comparator(previousKey, currentKey)) {
        first = false;
        previousKey = currentKey;
        subscriber.next(value);
      }
    }));
  });
}
function defaultCompare(a, b) {
  return a === b;
}

/***/ }),

/***/ 4081:
/*!********************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/operators/filter.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filter: () => (/* binding */ filter)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 1465);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 7077);


function filter(predicate, thisArg) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let index = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => predicate.call(thisArg, value, index++) && subscriber.next(value)));
  });
}

/***/ }),

/***/ 6578:
/*!*****************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/operators/tap.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tap: () => (/* binding */ tap)
/* harmony export */ });
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 732);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 1465);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 7077);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/identity */ 1454);




function tap(observerOrNext, error, complete) {
  const tapObserver = (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(observerOrNext) || error || complete ? {
    next: observerOrNext,
    error,
    complete
  } : observerOrNext;
  return tapObserver ? (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    var _a;
    (_a = tapObserver.subscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
    let isUnsub = true;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      var _a;
      (_a = tapObserver.next) === null || _a === void 0 ? void 0 : _a.call(tapObserver, value);
      subscriber.next(value);
    }, () => {
      var _a;
      isUnsub = false;
      (_a = tapObserver.complete) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
      subscriber.complete();
    }, err => {
      var _a;
      isUnsub = false;
      (_a = tapObserver.error) === null || _a === void 0 ? void 0 : _a.call(tapObserver, err);
      subscriber.error(err);
    }, () => {
      var _a, _b;
      if (isUnsub) {
        (_a = tapObserver.unsubscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
      }
      (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
    }));
  }) : _util_identity__WEBPACK_IMPORTED_MODULE_3__.identity;
}

/***/ }),

/***/ 4343:
/*!**********************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/operators/throttle.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   throttle: () => (/* binding */ throttle)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 1465);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 7077);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/innerFrom */ 995);



function throttle(durationSelector, config) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    const {
      leading = true,
      trailing = false
    } = config !== null && config !== void 0 ? config : {};
    let hasValue = false;
    let sendValue = null;
    let throttled = null;
    let isComplete = false;
    const endThrottling = () => {
      throttled === null || throttled === void 0 ? void 0 : throttled.unsubscribe();
      throttled = null;
      if (trailing) {
        send();
        isComplete && subscriber.complete();
      }
    };
    const cleanupThrottling = () => {
      throttled = null;
      isComplete && subscriber.complete();
    };
    const startThrottle = value => throttled = (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__.innerFrom)(durationSelector(value)).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, endThrottling, cleanupThrottling));
    const send = () => {
      if (hasValue) {
        hasValue = false;
        const value = sendValue;
        sendValue = null;
        subscriber.next(value);
        !isComplete && startThrottle(value);
      }
    };
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      hasValue = true;
      sendValue = value;
      !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
    }, () => {
      isComplete = true;
      !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
    }));
  });
}

/***/ }),

/***/ 8194:
/*!**************************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/operators/throttleTime.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   throttleTime: () => (/* binding */ throttleTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 8483);
/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./throttle */ 4343);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/timer */ 6862);



function throttleTime(duration, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler, config) {
  const duration$ = (0,_observable_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(duration, scheduler);
  return (0,_throttle__WEBPACK_IMPORTED_MODULE_2__.throttle)(() => duration$, config);
}

/***/ }),

/***/ 8077:
/*!********************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/scheduler/Action.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 8076);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
  constructor(scheduler, work) {
    super();
  }
  schedule(state, delay = 0) {
    return this;
  }
}

/***/ }),

/***/ 7185:
/*!*************************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/scheduler/AsyncAction.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncAction: () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 8077);
/* harmony import */ var _intervalProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intervalProvider */ 5935);
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/arrRemove */ 2705);



class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
    this.pending = false;
  }
  schedule(state, delay = 0) {
    var _a;
    if (this.closed) {
      return this;
    }
    this.state = state;
    const id = this.id;
    const scheduler = this.scheduler;
    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }
    this.pending = true;
    this.delay = delay;
    this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
    return this;
  }
  requestAsyncId(scheduler, _id, delay = 0) {
    return _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
  }
  recycleAsyncId(_scheduler, id, delay = 0) {
    if (delay != null && this.delay === delay && this.pending === false) {
      return id;
    }
    if (id != null) {
      _intervalProvider__WEBPACK_IMPORTED_MODULE_1__.intervalProvider.clearInterval(id);
    }
    return undefined;
  }
  execute(state, delay) {
    if (this.closed) {
      return new Error('executing a cancelled action');
    }
    this.pending = false;
    const error = this._execute(state, delay);
    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  }
  _execute(state, _delay) {
    let errored = false;
    let errorValue;
    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error('Scheduled action threw falsy error');
    }
    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  }
  unsubscribe() {
    if (!this.closed) {
      const {
        id,
        scheduler
      } = this;
      const {
        actions
      } = scheduler;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_2__.arrRemove)(actions, this);
      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }
      this.delay = null;
      super.unsubscribe();
    }
  }
}

/***/ }),

/***/ 3730:
/*!****************************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/scheduler/AsyncScheduler.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncScheduler: () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 4532);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
  constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
    super(SchedulerAction, now);
    this.actions = [];
    this._active = false;
  }
  flush(action) {
    const {
      actions
    } = this;
    if (this._active) {
      actions.push(action);
      return;
    }
    let error;
    this._active = true;
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());
    this._active = false;
    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}

/***/ }),

/***/ 8483:
/*!*******************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/scheduler/async.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   async: () => (/* binding */ async),
/* harmony export */   asyncScheduler: () => (/* binding */ asyncScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 7185);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 3730);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;

/***/ }),

/***/ 3594:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/scheduler/dateTimestampProvider.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dateTimestampProvider: () => (/* binding */ dateTimestampProvider)
/* harmony export */ });
const dateTimestampProvider = {
  now() {
    return (dateTimestampProvider.delegate || Date).now();
  },
  delegate: undefined
};

/***/ }),

/***/ 5935:
/*!******************************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/scheduler/intervalProvider.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   intervalProvider: () => (/* binding */ intervalProvider)
/* harmony export */ });
const intervalProvider = {
  setInterval(handler, timeout, ...args) {
    const {
      delegate
    } = intervalProvider;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
      return delegate.setInterval(handler, timeout, ...args);
    }
    return setInterval(handler, timeout, ...args);
  },
  clearInterval(handle) {
    const {
      delegate
    } = intervalProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  },
  delegate: undefined
};

/***/ }),

/***/ 5365:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/scheduler/timeoutProvider.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   timeoutProvider: () => (/* binding */ timeoutProvider)
/* harmony export */ });
const timeoutProvider = {
  setTimeout(handler, timeout, ...args) {
    const {
      delegate
    } = timeoutProvider;
    if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
      return delegate.setTimeout(handler, timeout, ...args);
    }
    return setTimeout(handler, timeout, ...args);
  },
  clearTimeout(handle) {
    const {
      delegate
    } = timeoutProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
  },
  delegate: undefined
};

/***/ }),

/***/ 9550:
/*!*******************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/symbol/iterator.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSymbolIterator: () => (/* binding */ getSymbolIterator),
/* harmony export */   iterator: () => (/* binding */ iterator)
/* harmony export */ });
function getSymbolIterator() {
  if (typeof Symbol !== 'function' || !Symbol.iterator) {
    return '@@iterator';
  }
  return Symbol.iterator;
}
const iterator = getSymbolIterator();

/***/ }),

/***/ 5581:
/*!*********************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/symbol/observable.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observable: () => (/* binding */ observable)
/* harmony export */ });
const observable = (() => typeof Symbol === 'function' && Symbol.observable || '@@observable')();

/***/ }),

/***/ 5504:
/*!********************************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/util/ObjectUnsubscribedError.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ObjectUnsubscribedError: () => (/* binding */ ObjectUnsubscribedError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createErrorClass */ 7030);

const ObjectUnsubscribedError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(_super => function ObjectUnsubscribedErrorImpl() {
  _super(this);
  this.name = 'ObjectUnsubscribedError';
  this.message = 'object unsubscribed';
});

/***/ }),

/***/ 5250:
/*!****************************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/util/UnsubscriptionError.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnsubscriptionError: () => (/* binding */ UnsubscriptionError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createErrorClass */ 7030);

const UnsubscriptionError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(_super => function UnsubscriptionErrorImpl(errors) {
  _super(this);
  this.message = errors ? `${errors.length} errors occurred during unsubscription:
${errors.map((err, i) => `${i + 1}) ${err.toString()}`).join('\n  ')}` : '';
  this.name = 'UnsubscriptionError';
  this.errors = errors;
});

/***/ }),

/***/ 2705:
/*!******************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/util/arrRemove.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrRemove: () => (/* binding */ arrRemove)
/* harmony export */ });
function arrRemove(arr, item) {
  if (arr) {
    const index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}

/***/ }),

/***/ 7030:
/*!*************************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/util/createErrorClass.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createErrorClass: () => (/* binding */ createErrorClass)
/* harmony export */ });
function createErrorClass(createImpl) {
  const _super = instance => {
    Error.call(instance);
    instance.stack = new Error().stack;
  };
  const ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}

/***/ }),

/***/ 6341:
/*!*********************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/util/errorContext.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   captureError: () => (/* binding */ captureError),
/* harmony export */   errorContext: () => (/* binding */ errorContext)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ 1627);

let context = null;
function errorContext(cb) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling) {
    const isRoot = !context;
    if (isRoot) {
      context = {
        errorThrown: false,
        error: null
      };
    }
    cb();
    if (isRoot) {
      const {
        errorThrown,
        error
      } = context;
      context = null;
      if (errorThrown) {
        throw error;
      }
    }
  } else {
    cb();
  }
}
function captureError(err) {
  if (_config__WEBPACK_IMPORTED_MODULE_0__.config.useDeprecatedSynchronousErrorHandling && context) {
    context.errorThrown = true;
    context.error = err;
  }
}

/***/ }),

/***/ 1454:
/*!*****************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/util/identity.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   identity: () => (/* binding */ identity)
/* harmony export */ });
function identity(x) {
  return x;
}

/***/ }),

/***/ 9956:
/*!********************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/util/isArrayLike.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isArrayLike: () => (/* binding */ isArrayLike)
/* harmony export */ });
const isArrayLike = x => x && typeof x.length === 'number' && typeof x !== 'function';

/***/ }),

/***/ 8300:
/*!************************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/util/isAsyncIterable.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAsyncIterable: () => (/* binding */ isAsyncIterable)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 732);

function isAsyncIterable(obj) {
  return Symbol.asyncIterator && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}

/***/ }),

/***/ 8840:
/*!***************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/util/isDate.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidDate: () => (/* binding */ isValidDate)
/* harmony export */ });
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}

/***/ }),

/***/ 732:
/*!*******************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/util/isFunction.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFunction: () => (/* binding */ isFunction)
/* harmony export */ });
function isFunction(value) {
  return typeof value === 'function';
}

/***/ }),

/***/ 6658:
/*!****************************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/util/isInteropObservable.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isInteropObservable: () => (/* binding */ isInteropObservable)
/* harmony export */ });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/observable */ 5581);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 732);


function isInteropObservable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(input[_symbol_observable__WEBPACK_IMPORTED_MODULE_1__.observable]);
}

/***/ }),

/***/ 86:
/*!*******************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/util/isIterable.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isIterable: () => (/* binding */ isIterable)
/* harmony export */ });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/iterator */ 9550);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 732);


function isIterable(input) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(input === null || input === void 0 ? void 0 : input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__.iterator]);
}

/***/ }),

/***/ 9491:
/*!******************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/util/isPromise.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPromise: () => (/* binding */ isPromise)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 732);

function isPromise(value) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value === null || value === void 0 ? void 0 : value.then);
}

/***/ }),

/***/ 9819:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/util/isReadableStreamLike.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isReadableStreamLike: () => (/* binding */ isReadableStreamLike),
/* harmony export */   readableStreamLikeToAsyncGenerator: () => (/* binding */ readableStreamLikeToAsyncGenerator)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction */ 732);


function readableStreamLikeToAsyncGenerator(readableStream) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncGenerator)(this, arguments, function* readableStreamLikeToAsyncGenerator_1() {
    const reader = readableStream.getReader();
    try {
      while (true) {
        const {
          value,
          done
        } = yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(reader.read());
        if (done) {
          return yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(void 0);
        }
        yield yield (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(value);
      }
    } finally {
      reader.releaseLock();
    }
  });
}
function isReadableStreamLike(obj) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(obj === null || obj === void 0 ? void 0 : obj.getReader);
}

/***/ }),

/***/ 5835:
/*!********************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/util/isScheduler.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isScheduler: () => (/* binding */ isScheduler)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 732);

function isScheduler(value) {
  return value && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value.schedule);
}

/***/ }),

/***/ 1465:
/*!*************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/util/lift.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasLift: () => (/* binding */ hasLift),
/* harmony export */   operate: () => (/* binding */ operate)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ 732);

function hasLift(source) {
  return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
  return source => {
    if (hasLift(source)) {
      return source.lift(function (liftedSource) {
        try {
          return init(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    }
    throw new TypeError('Unable to lift unknown Observable type');
  };
}

/***/ }),

/***/ 3180:
/*!*************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/util/noop.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noop: () => (/* binding */ noop)
/* harmony export */ });
function noop() {}

/***/ }),

/***/ 9068:
/*!*************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/util/pipe.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pipe: () => (/* binding */ pipe),
/* harmony export */   pipeFromArray: () => (/* binding */ pipeFromArray)
/* harmony export */ });
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ 1454);

function pipe(...fns) {
  return pipeFromArray(fns);
}
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce((prev, fn) => fn(prev), input);
  };
}

/***/ }),

/***/ 1537:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/util/reportUnhandledError.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reportUnhandledError: () => (/* binding */ reportUnhandledError)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ 1627);
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/timeoutProvider */ 5365);


function reportUnhandledError(err) {
  _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__.timeoutProvider.setTimeout(() => {
    const {
      onUnhandledError
    } = _config__WEBPACK_IMPORTED_MODULE_1__.config;
    if (onUnhandledError) {
      onUnhandledError(err);
    } else {
      throw err;
    }
  });
}

/***/ }),

/***/ 5848:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/node_modules/rxjs/dist/esm/internal/util/throwUnobservableError.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createInvalidObservableTypeError: () => (/* binding */ createInvalidObservableTypeError)
/* harmony export */ });
function createInvalidObservableTypeError(input) {
  return new TypeError(`You provided ${input !== null && typeof input === 'object' ? 'an invalid object' : `'${input}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`);
}

/***/ }),

/***/ 4861:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/throttle.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultThrottleConfig: () => (/* binding */ defaultThrottleConfig),
/* harmony export */   throttle: () => (/* binding */ throttle)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 3200);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperatorSubscriber */ 1687);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/innerFrom */ 2645);



const defaultThrottleConfig = {
  leading: true,
  trailing: false
};
function throttle(durationSelector, config = defaultThrottleConfig) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    const {
      leading,
      trailing
    } = config;
    let hasValue = false;
    let sendValue = null;
    let throttled = null;
    let isComplete = false;
    const endThrottling = () => {
      throttled === null || throttled === void 0 ? void 0 : throttled.unsubscribe();
      throttled = null;
      if (trailing) {
        send();
        isComplete && subscriber.complete();
      }
    };
    const cleanupThrottling = () => {
      throttled = null;
      isComplete && subscriber.complete();
    };
    const startThrottle = value => throttled = (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__.innerFrom)(durationSelector(value)).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, endThrottling, cleanupThrottling));
    const send = () => {
      if (hasValue) {
        hasValue = false;
        const value = sendValue;
        sendValue = null;
        subscriber.next(value);
        !isComplete && startThrottle(value);
      }
    };
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.createOperatorSubscriber)(subscriber, value => {
      hasValue = true;
      sendValue = value;
      !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
    }, () => {
      isComplete = true;
      !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
    }));
  });
}

/***/ }),

/***/ 2136:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/throttleTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   throttleTime: () => (/* binding */ throttleTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 8473);
/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./throttle */ 4861);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/timer */ 4876);



function throttleTime(duration, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler, config = _throttle__WEBPACK_IMPORTED_MODULE_1__.defaultThrottleConfig) {
  const duration$ = (0,_observable_timer__WEBPACK_IMPORTED_MODULE_2__.timer)(duration, scheduler);
  return (0,_throttle__WEBPACK_IMPORTED_MODULE_1__.throttle)(() => duration$, config);
}

/***/ }),

/***/ 6739:
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-infinite-scroll/fesm2022/ngx-infinite-scroll.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfiniteScrollDirective: () => (/* binding */ InfiniteScrollDirective),
/* harmony export */   InfiniteScrollModule: () => (/* binding */ InfiniteScrollModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8537);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 3255);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 2136);




function resolveContainerElement(selector, scrollWindow, defaultElement, fromRoot) {
  const hasWindow = window && !!window.document && window.document.documentElement;
  let container = hasWindow && scrollWindow ? window : defaultElement;
  if (selector) {
    const containerIsString = selector && hasWindow && typeof selector === 'string';
    container = containerIsString ? findElement(selector, defaultElement.nativeElement, fromRoot) : selector;
    if (!container) {
      throw new Error('ngx-infinite-scroll {resolveContainerElement()}: selector for');
    }
  }
  return container;
}
function findElement(selector, customRoot, fromRoot) {
  const rootEl = fromRoot ? window.document : customRoot;
  return rootEl.querySelector(selector);
}
function inputPropChanged(prop) {
  return prop && !prop.firstChange;
}
function hasWindowDefined() {
  return typeof window !== 'undefined';
}
const VerticalProps = {
  clientHeight: "clientHeight",
  offsetHeight: "offsetHeight",
  scrollHeight: "scrollHeight",
  pageYOffset: "pageYOffset",
  offsetTop: "offsetTop",
  scrollTop: "scrollTop",
  top: "top"
};
const HorizontalProps = {
  clientHeight: "clientWidth",
  offsetHeight: "offsetWidth",
  scrollHeight: "scrollWidth",
  pageYOffset: "pageXOffset",
  offsetTop: "offsetLeft",
  scrollTop: "scrollLeft",
  top: "left"
};
class AxisResolver {
  constructor(vertical = true) {
    this.vertical = vertical;
    this.propsMap = vertical ? VerticalProps : HorizontalProps;
  }
  clientHeightKey() {
    return this.propsMap.clientHeight;
  }
  offsetHeightKey() {
    return this.propsMap.offsetHeight;
  }
  scrollHeightKey() {
    return this.propsMap.scrollHeight;
  }
  pageYOffsetKey() {
    return this.propsMap.pageYOffset;
  }
  offsetTopKey() {
    return this.propsMap.offsetTop;
  }
  scrollTopKey() {
    return this.propsMap.scrollTop;
  }
  topKey() {
    return this.propsMap.top;
  }
}
function shouldTriggerEvents(alwaysCallback, shouldFireScrollEvent, isTriggeredCurrentTotal) {
  if (alwaysCallback && shouldFireScrollEvent) {
    return true;
  }
  if (!isTriggeredCurrentTotal && shouldFireScrollEvent) {
    return true;
  }
  return false;
}
function createResolver({
  windowElement,
  axis
}) {
  return createResolverWithContainer({
    axis,
    isWindow: isElementWindow(windowElement)
  }, windowElement);
}
function createResolverWithContainer(resolver, windowElement) {
  const container = resolver.isWindow || windowElement && !windowElement.nativeElement ? windowElement : windowElement.nativeElement;
  return {
    ...resolver,
    container
  };
}
function isElementWindow(windowElement) {
  const isWindow = ['Window', 'global'].some(obj => Object.prototype.toString.call(windowElement).includes(obj));
  return isWindow;
}
function getDocumentElement(isContainerWindow, windowElement) {
  return isContainerWindow ? windowElement.document.documentElement : null;
}
function calculatePoints(element, resolver) {
  const height = extractHeightForElement(resolver);
  return resolver.isWindow ? calculatePointsForWindow(height, element, resolver) : calculatePointsForElement(height, element, resolver);
}
function calculatePointsForWindow(height, element, resolver) {
  const {
    axis,
    container,
    isWindow
  } = resolver;
  const {
    offsetHeightKey,
    clientHeightKey
  } = extractHeightPropKeys(axis);
  // scrolled until now / current y point
  const scrolled = height + getElementPageYOffset(getDocumentElement(isWindow, container), axis, isWindow);
  // total height / most bottom y point
  const nativeElementHeight = getElementHeight(element.nativeElement, isWindow, offsetHeightKey, clientHeightKey);
  const totalToScroll = getElementOffsetTop(element.nativeElement, axis, isWindow) + nativeElementHeight;
  return {
    height,
    scrolled,
    totalToScroll,
    isWindow
  };
}
function calculatePointsForElement(height, element, resolver) {
  const {
    axis,
    container
  } = resolver;
  // perhaps use container.offsetTop instead of 'scrollTop'
  const scrolled = container[axis.scrollTopKey()];
  const totalToScroll = container[axis.scrollHeightKey()];
  return {
    height,
    scrolled,
    totalToScroll,
    isWindow: false
  };
}
function extractHeightPropKeys(axis) {
  return {
    offsetHeightKey: axis.offsetHeightKey(),
    clientHeightKey: axis.clientHeightKey()
  };
}
function extractHeightForElement({
  container,
  isWindow,
  axis
}) {
  const {
    offsetHeightKey,
    clientHeightKey
  } = extractHeightPropKeys(axis);
  return getElementHeight(container, isWindow, offsetHeightKey, clientHeightKey);
}
function getElementHeight(elem, isWindow, offsetHeightKey, clientHeightKey) {
  if (isNaN(elem[offsetHeightKey])) {
    const docElem = getDocumentElement(isWindow, elem);
    return docElem ? docElem[clientHeightKey] : 0;
  } else {
    return elem[offsetHeightKey];
  }
}
function getElementOffsetTop(elem, axis, isWindow) {
  const topKey = axis.topKey();
  // elem = elem.nativeElement;
  if (!elem.getBoundingClientRect) {
    // || elem.css('none')) {
    return;
  }
  return elem.getBoundingClientRect()[topKey] + getElementPageYOffset(elem, axis, isWindow);
}
function getElementPageYOffset(elem, axis, isWindow) {
  const pageYOffset = axis.pageYOffsetKey();
  const scrollTop = axis.scrollTopKey();
  const offsetTop = axis.offsetTopKey();
  if (isNaN(window.pageYOffset)) {
    return getDocumentElement(isWindow, elem)[scrollTop];
  } else if (elem.ownerDocument) {
    return elem.ownerDocument.defaultView[pageYOffset];
  } else {
    return elem[offsetTop];
  }
}
function shouldFireScrollEvent(container, distance = {
  down: 0,
  up: 0
}, scrollingDown) {
  let remaining;
  let containerBreakpoint;
  if (container.totalToScroll <= 0) {
    return false;
  }
  const scrolledUntilNow = container.isWindow ? container.scrolled : container.height + container.scrolled;
  if (scrollingDown) {
    remaining = (container.totalToScroll - scrolledUntilNow) / container.totalToScroll;
    const distanceDown = distance?.down ? distance.down : 0;
    containerBreakpoint = distanceDown / 10;
  } else {
    const totalHiddenContentHeight = container.scrolled + (container.totalToScroll - scrolledUntilNow);
    remaining = container.scrolled / totalHiddenContentHeight;
    const distanceUp = distance?.up ? distance.up : 0;
    containerBreakpoint = distanceUp / 10;
  }
  const shouldFireEvent = remaining <= containerBreakpoint;
  return shouldFireEvent;
}
function isScrollingDownwards(lastScrollPosition, container) {
  return lastScrollPosition < container.scrolled;
}
function getScrollStats(lastScrollPosition, container, distance) {
  const scrollDown = isScrollingDownwards(lastScrollPosition, container);
  return {
    fire: shouldFireScrollEvent(container, distance, scrollDown),
    scrollDown
  };
}
function updateScrollPosition(position, scrollState) {
  return scrollState.lastScrollPosition = position;
}
function updateTotalToScroll(totalToScroll, scrollState) {
  if (scrollState.lastTotalToScroll !== totalToScroll) {
    scrollState.lastTotalToScroll = scrollState.totalToScroll;
    scrollState.totalToScroll = totalToScroll;
  }
}
function isSameTotalToScroll(scrollState) {
  return scrollState.totalToScroll === scrollState.lastTotalToScroll;
}
function updateTriggeredFlag(scroll, scrollState, triggered, isScrollingDown) {
  if (isScrollingDown) {
    scrollState.triggered.down = scroll;
  } else {
    scrollState.triggered.up = scroll;
  }
}
function isTriggeredScroll(totalToScroll, scrollState, isScrollingDown) {
  return isScrollingDown ? scrollState.triggered.down === totalToScroll : scrollState.triggered.up === totalToScroll;
}
function updateScrollState(scrollState, scrolledUntilNow, totalToScroll) {
  updateScrollPosition(scrolledUntilNow, scrollState);
  updateTotalToScroll(totalToScroll, scrollState);
  // const isSameTotal = isSameTotalToScroll(scrollState);
  // if (!isSameTotal) {
  //   updateTriggeredFlag(scrollState, false, isScrollingDown);
  // }
}
class ScrollState {
  constructor(attrs) {
    this.lastScrollPosition = 0;
    this.lastTotalToScroll = 0;
    this.totalToScroll = 0;
    this.triggered = {
      down: 0,
      up: 0
    };
    Object.assign(this, attrs);
  }
  updateScrollPosition(position) {
    return this.lastScrollPosition = position;
  }
  updateTotalToScroll(totalToScroll) {
    if (this.lastTotalToScroll !== totalToScroll) {
      this.lastTotalToScroll = this.totalToScroll;
      this.totalToScroll = totalToScroll;
    }
  }
  updateScroll(scrolledUntilNow, totalToScroll) {
    this.updateScrollPosition(scrolledUntilNow);
    this.updateTotalToScroll(totalToScroll);
  }
  updateTriggeredFlag(scroll, isScrollingDown) {
    if (isScrollingDown) {
      this.triggered.down = scroll;
    } else {
      this.triggered.up = scroll;
    }
  }
  isTriggeredScroll(totalToScroll, isScrollingDown) {
    return isScrollingDown ? this.triggered.down === totalToScroll : this.triggered.up === totalToScroll;
  }
}
function createScroller(config) {
  const {
    scrollContainer,
    scrollWindow,
    element,
    fromRoot
  } = config;
  const resolver = createResolver({
    axis: new AxisResolver(!config.horizontal),
    windowElement: resolveContainerElement(scrollContainer, scrollWindow, element, fromRoot)
  });
  const scrollState = new ScrollState({
    totalToScroll: calculatePoints(element, resolver).totalToScroll
  });
  const options = {
    container: resolver.container,
    throttle: config.throttle
  };
  const distance = {
    up: config.upDistance,
    down: config.downDistance
  };
  return attachScrollEvent(options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.mergeMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(calculatePoints(element, resolver))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(positionStats => toInfiniteScrollParams(scrollState.lastScrollPosition, positionStats, distance)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(({
    stats
  }) => scrollState.updateScroll(stats.scrolled, stats.totalToScroll)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(({
    fire,
    scrollDown,
    stats: {
      totalToScroll
    }
  }) => shouldTriggerEvents(config.alwaysCallback, fire, scrollState.isTriggeredScroll(totalToScroll, scrollDown))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(({
    scrollDown,
    stats: {
      totalToScroll
    }
  }) => {
    scrollState.updateTriggeredFlag(totalToScroll, scrollDown);
  }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(toInfiniteScrollAction));
}
function attachScrollEvent(options) {
  let obs = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(options.container, 'scroll');
  // For an unknown reason calling `sampleTime()` causes trouble for many users, even with `options.throttle = 0`.
  // Let's avoid calling the function unless needed.
  // Replacing with throttleTime seems to solve the problem
  // See https://github.com/orizens/ngx-infinite-scroll/issues/198
  if (options.throttle) {
    obs = obs.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.throttleTime)(options.throttle, undefined, {
      leading: true,
      trailing: true
    }));
  }
  return obs;
}
function toInfiniteScrollParams(lastScrollPosition, stats, distance) {
  const {
    scrollDown,
    fire
  } = getScrollStats(lastScrollPosition, stats, distance);
  return {
    scrollDown,
    fire,
    stats
  };
}
const InfiniteScrollActions = {
  DOWN: '[NGX_ISE] DOWN',
  UP: '[NGX_ISE] UP'
};
function toInfiniteScrollAction(response) {
  const {
    scrollDown,
    stats: {
      scrolled: currentScrollPosition
    }
  } = response;
  return {
    type: scrollDown ? InfiniteScrollActions.DOWN : InfiniteScrollActions.UP,
    payload: {
      currentScrollPosition
    }
  };
}
class InfiniteScrollDirective {
  constructor(element, zone) {
    this.element = element;
    this.zone = zone;
    this.scrolled = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.scrolledUp = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.infiniteScrollDistance = 2;
    this.infiniteScrollUpDistance = 1.5;
    this.infiniteScrollThrottle = 150;
    this.infiniteScrollDisabled = false;
    this.infiniteScrollContainer = null;
    this.scrollWindow = true;
    this.immediateCheck = false;
    this.horizontal = false;
    this.alwaysCallback = false;
    this.fromRoot = false;
  }
  ngAfterViewInit() {
    if (!this.infiniteScrollDisabled) {
      this.setup();
    }
  }
  ngOnChanges({
    infiniteScrollContainer,
    infiniteScrollDisabled,
    infiniteScrollDistance
  }) {
    const containerChanged = inputPropChanged(infiniteScrollContainer);
    const disabledChanged = inputPropChanged(infiniteScrollDisabled);
    const distanceChanged = inputPropChanged(infiniteScrollDistance);
    const shouldSetup = !disabledChanged && !this.infiniteScrollDisabled || disabledChanged && !infiniteScrollDisabled.currentValue || distanceChanged;
    if (containerChanged || disabledChanged || distanceChanged) {
      this.destroyScroller();
      if (shouldSetup) {
        this.setup();
      }
    }
  }
  ngOnDestroy() {
    this.destroyScroller();
  }
  setup() {
    if (!hasWindowDefined()) {
      return;
    }
    this.zone.runOutsideAngular(() => {
      this.disposeScroller = createScroller({
        fromRoot: this.fromRoot,
        alwaysCallback: this.alwaysCallback,
        disable: this.infiniteScrollDisabled,
        downDistance: this.infiniteScrollDistance,
        element: this.element,
        horizontal: this.horizontal,
        scrollContainer: this.infiniteScrollContainer,
        scrollWindow: this.scrollWindow,
        throttle: this.infiniteScrollThrottle,
        upDistance: this.infiniteScrollUpDistance
      }).subscribe(payload => this.handleOnScroll(payload));
    });
  }
  handleOnScroll({
    type,
    payload
  }) {
    const emitter = type === InfiniteScrollActions.DOWN ? this.scrolled : this.scrolledUp;
    if (hasObservers(emitter)) {
      this.zone.run(() => emitter.emit(payload));
    }
  }
  destroyScroller() {
    if (this.disposeScroller) {
      this.disposeScroller.unsubscribe();
    }
  }
  static {
    this.ɵfac = function InfiniteScrollDirective_Factory(t) {
      return new (t || InfiniteScrollDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone));
    };
  }
  static {
    this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({
      type: InfiniteScrollDirective,
      selectors: [["", "infiniteScroll", ""], ["", "infinite-scroll", ""], ["", "data-infinite-scroll", ""]],
      inputs: {
        infiniteScrollDistance: "infiniteScrollDistance",
        infiniteScrollUpDistance: "infiniteScrollUpDistance",
        infiniteScrollThrottle: "infiniteScrollThrottle",
        infiniteScrollDisabled: "infiniteScrollDisabled",
        infiniteScrollContainer: "infiniteScrollContainer",
        scrollWindow: "scrollWindow",
        immediateCheck: "immediateCheck",
        horizontal: "horizontal",
        alwaysCallback: "alwaysCallback",
        fromRoot: "fromRoot"
      },
      outputs: {
        scrolled: "scrolled",
        scrolledUp: "scrolledUp"
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]]
    });
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](InfiniteScrollDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Directive,
    args: [{
      selector: '[infiniteScroll], [infinite-scroll], [data-infinite-scroll]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
  }], {
    scrolled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    scrolledUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output
    }],
    infiniteScrollDistance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    infiniteScrollUpDistance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    infiniteScrollThrottle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    infiniteScrollDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    infiniteScrollContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    scrollWindow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    immediateCheck: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    horizontal: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    alwaysCallback: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }],
    fromRoot: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  });
})();
function hasObservers(emitter) {
  // Note: The `observed` property is available only in RxJS@7.2.0, which means it's
  // not available for users running the lower version.
  return emitter.observed ?? emitter.observers.length > 0;
}

/**
 * @deprecated Import InfiniteScrollDirective instead
 */
class InfiniteScrollModule {
  static {
    this.ɵfac = function InfiniteScrollModule_Factory(t) {
      return new (t || InfiniteScrollModule)();
    };
  }
  static {
    this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: InfiniteScrollModule
    });
  }
  static {
    this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({});
  }
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](InfiniteScrollModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule,
    args: [{
      exports: [InfiniteScrollDirective],
      imports: [InfiniteScrollDirective]
    }]
  }], null, null);
})();

/*
 * Public API Surface of ngx-infinite-scroll
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 9323:
/*!***************************************************************!*\
  !*** ./node_modules/ngx-slider-v2/fesm2022/ngx-slider-v2.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllowUnsafeHtmlInSlider: () => (/* binding */ AllowUnsafeHtmlInSlider),
/* harmony export */   ChangeContext: () => (/* binding */ ChangeContext),
/* harmony export */   LabelType: () => (/* binding */ LabelType),
/* harmony export */   NgxSliderModule: () => (/* binding */ NgxSliderModule),
/* harmony export */   Options: () => (/* binding */ Options),
/* harmony export */   PointerType: () => (/* binding */ PointerType),
/* harmony export */   SliderComponent: () => (/* binding */ SliderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4969);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8194);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6578);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1071);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 4081);
/* harmony import */ var detect_passive_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! detect-passive-events */ 9867);









/** Label type */
const _c0 = (a0, a1, a2) => ({
  tooltip: a0,
  placement: a1,
  content: a2
});
function TooltipWrapperComponent_ng_container_0_1_ng_template_0_Template(rf, ctx) {}
function TooltipWrapperComponent_ng_container_0_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TooltipWrapperComponent_ng_container_0_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TooltipWrapperComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TooltipWrapperComponent_ng_container_0_1_Template, 1, 0, null, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx_r0.tooltip, ctx_r0.placement, ctx_r0.content));
  }
}
function TooltipWrapperComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx_r0.tooltip)("data-tooltip-placement", ctx_r0.placement);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.content, " ");
  }
}
const _c1 = ["tooltipTemplate"];
const _c2 = ["leftOuterSelectionBar"];
const _c3 = ["rightOuterSelectionBar"];
const _c4 = ["fullBar"];
const _c5 = ["selectionBar"];
const _c6 = ["minHandle"];
const _c7 = ["maxHandle"];
const _c8 = ["floorLabel"];
const _c9 = ["ceilLabel"];
const _c10 = ["minHandleLabel"];
const _c11 = ["maxHandleLabel"];
const _c12 = ["combinedLabel"];
const _c13 = ["ticksElement"];
const _c14 = a0 => ({
  "ngx-slider-selected": a0
});
function SliderComponent_span_28_ngx_slider_tooltip_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-slider-tooltip-wrapper", 32);
  }
  if (rf & 2) {
    const t_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("template", ctx_r1.tooltipTemplate)("tooltip", t_r1.valueTooltip)("placement", t_r1.valueTooltipPlacement)("content", t_r1.value);
  }
}
function SliderComponent_span_28_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 33);
  }
  if (rf & 2) {
    const t_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerText", t_r1.legend);
  }
}
function SliderComponent_span_28_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 34);
  }
  if (rf & 2) {
    const t_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", t_r1.legend, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function SliderComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-slider-tooltip-wrapper", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SliderComponent_span_28_ngx_slider_tooltip_wrapper_2_Template, 1, 4, "ngx-slider-tooltip-wrapper", 29)(3, SliderComponent_span_28_span_3_Template, 1, 1, "span", 30)(4, SliderComponent_span_28_span_4_Template, 1, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c14, t_r1.selected))("ngStyle", t_r1.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("template", ctx_r1.tooltipTemplate)("tooltip", t_r1.tooltip)("placement", t_r1.tooltipPlacement);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", t_r1.value != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", t_r1.legend != null && ctx_r1.allowUnsafeHtmlInSlider === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", t_r1.legend != null && (ctx_r1.allowUnsafeHtmlInSlider == null || ctx_r1.allowUnsafeHtmlInSlider));
  }
}
var LabelType;
(function (LabelType) {
  /** Label above low pointer */
  LabelType[LabelType["Low"] = 0] = "Low";
  /** Label above high pointer */
  LabelType[LabelType["High"] = 1] = "High";
  /** Label for minimum slider value */
  LabelType[LabelType["Floor"] = 2] = "Floor";
  /** Label for maximum slider value */
  LabelType[LabelType["Ceil"] = 3] = "Ceil";
  /** Label below legend tick */
  LabelType[LabelType["TickValue"] = 4] = "TickValue";
})(LabelType || (LabelType = {}));
/** Slider options */
class Options {
  /** Minimum value for a slider.
    Not applicable when using stepsArray. */
  floor = 0;
  /** Maximum value for a slider.
    Not applicable when using stepsArray. */
  ceil = null;
  /** Step between each value.
    Not applicable when using stepsArray. */
  step = 1;
  /** The minimum range authorized on the slider.
    Applies to range slider only.
    When using stepsArray, expressed as index into stepsArray. */
  minRange = null;
  /** The maximum range authorized on the slider.
    Applies to range slider only.
    When using stepsArray, expressed as index into stepsArray. */
  maxRange = null;
  /** Set to true to have a push behavior. When the min handle goes above the max,
    the max is moved as well (and vice-versa). The range between min and max is
    defined by the step option (defaults to 1) and can also be overriden by
    the minRange option. Applies to range slider only. */
  pushRange = false;
  /** The minimum value authorized on the slider.
    When using stepsArray, expressed as index into stepsArray. */
  minLimit = null;
  /** The maximum value authorized on the slider.
    When using stepsArray, expressed as index into stepsArray. */
  maxLimit = null;
  /** Custom translate function. Use this if you want to translate values displayed
      on the slider. */
  translate = null;
  /** Custom function for combining overlapping labels in range slider.
      It takes the min and max values (already translated with translate fuction)
      and should return how these two values should be combined.
      If not provided, the default function will join the two values with
      ' - ' as separator. */
  combineLabels = null;
  /** Use to display legend under ticks (thus, it needs to be used along with
     showTicks or showTicksValues). The function will be called with each tick
     value and returned content will be displayed under the tick as a legend.
     If the returned value is null, then no legend is displayed under
     the corresponding tick.You can also directly provide the legend values
     in the stepsArray option. */
  getLegend = null;
  /** Use to display a custom legend of a stepItem from stepsArray.
    It will be the same as getLegend but for stepsArray. */
  getStepLegend = null;
  /** If you want to display a slider with non linear/number steps.
     Just pass an array with each slider value and that's it; the floor, ceil and step settings
     of the slider will be computed automatically.
     By default, the value model and valueHigh model values will be the value of the selected item
     in the stepsArray.
     They can also be bound to the index of the selected item by setting the bindIndexForStepsArray
     option to true. */
  stepsArray = null;
  /** Set to true to bind the index of the selected item to value model and valueHigh model. */
  bindIndexForStepsArray = false;
  /** When set to true and using a range slider, the range can be dragged by the selection bar.
    Applies to range slider only. */
  draggableRange = false;
  /** Same as draggableRange but the slider range can't be changed.
    Applies to range slider only. */
  draggableRangeOnly = false;
  /** Set to true to always show the selection bar before the slider handle. */
  showSelectionBar = false;
  /** Set to true to always show the selection bar after the slider handle. */
  showSelectionBarEnd = false;
  /**  Set a number to draw the selection bar between this value and the slider handle.
    When using stepsArray, expressed as index into stepsArray. */
  showSelectionBarFromValue = null;
  /**  Only for range slider. Set to true to visualize in different colour the areas
    on the left/right (top/bottom for vertical range slider) of selection bar between the handles. */
  showOuterSelectionBars = false;
  /** Set to true to hide pointer labels */
  hidePointerLabels = false;
  /** Set to true to hide min / max labels  */
  hideLimitLabels = false;
  /** Set to false to disable the auto-hiding behavior of the limit labels. */
  autoHideLimitLabels = true;
  /** Set to true to make the slider read-only. */
  readOnly = false;
  /** Set to true to disable the slider. */
  disabled = false;
  /** Set to true to display a tick for each step of the slider. */
  showTicks = false;
  /** Set to true to display a tick and the step value for each step of the slider.. */
  showTicksValues = false;
  /* The step between each tick to display. If not set, the step value is used.
    Not used when ticksArray is specified. */
  tickStep = null;
  /* The step between displaying each tick step value.
    If not set, then tickStep or step is used, depending on which one is set. */
  tickValueStep = null;
  /** Use to display ticks at specific positions.
    The array contains the index of the ticks that should be displayed.
    For example, [0, 1, 5] will display a tick for the first, second and sixth values. */
  ticksArray = null;
  /** Used to display a tooltip when a tick is hovered.
    Set to a function that returns the tooltip content for a given value. */
  ticksTooltip = null;
  /** Same as ticksTooltip but for ticks values. */
  ticksValuesTooltip = null;
  /** Set to true to display the slider vertically.
    The slider will take the full height of its parent.
    Changing this value at runtime is not currently supported. */
  vertical = false;
  /** Function that returns the current color of the selection bar.
    If your color won't change, don't use this option but set it through CSS.
    If the returned color depends on a model value (either value or valueHigh),
    you should use the argument passed to the function.
    Indeed, when the function is called, there is no certainty that the model
    has already been updated.*/
  getSelectionBarColor = null;
  /** Function that returns the color of a tick. showTicks must be enabled. */
  getTickColor = null;
  /** Function that returns the current color of a pointer.
    If your color won't change, don't use this option but set it through CSS.
    If the returned color depends on a model value (either value or valueHigh),
    you should use the argument passed to the function.
    Indeed, when the function is called, there is no certainty that the model has already been updated.
    To handle range slider pointers independently, you should evaluate pointerType within the given
    function where "min" stands for value model and "max" for valueHigh model values. */
  getPointerColor = null;
  /** Handles are focusable (on click or with tab) and can be modified using the following keyboard controls:
    Left/bottom arrows: -1
    Right/top arrows: +1
    Page-down: -10%
    Page-up: +10%
    Home: minimum value
    End: maximum value
   */
  keyboardSupport = true;
  /** If you display the slider in an element that uses transform: scale(0.5), set the scale value to 2
    so that the slider is rendered properly and the events are handled correctly. */
  scale = 1;
  /** If you display the slider in an element that uses transform: rotate(90deg), set the rotate value to 90
   so that the slider is rendered properly and the events are handled correctly. Value is in degrees. */
  rotate = 0;
  /** Set to true to force the value(s) to be rounded to the step, even when modified from the outside.
    When set to false, if the model values are modified from outside the slider, they are not rounded
    and can be between two steps. */
  enforceStep = true;
  /** Set to true to force the value(s) to be normalised to allowed range (floor to ceil), even when modified from the outside.
    When set to false, if the model values are modified from outside the slider, and they are outside allowed range,
    the slider may be rendered incorrectly. However, setting this to false may be useful if you want to perform custom normalisation. */
  enforceRange = true;
  /** Set to true to force the value(s) to be rounded to the nearest step value, even when modified from the outside.
    When set to false, if the model values are modified from outside the slider, and they are outside allowed range,
    the slider may be rendered incorrectly. However, setting this to false may be useful if you want to perform custom normalisation. */
  enforceStepsArray = true;
  /** Set to true to prevent to user from switching the min and max handles. Applies to range slider only. */
  noSwitching = false;
  /** Set to true to only bind events on slider handles. */
  onlyBindHandles = false;
  /** Set to true to show graphs right to left.
    If vertical is true it will be from top to bottom and left / right arrow functions reversed. */
  rightToLeft = false;
  /** Set to true to reverse keyboard navigation:
    Right/top arrows: -1
    Left/bottom arrows: +1
    Page-up: -10%
    Page-down: +10%
    End: minimum value
    Home: maximum value
   */
  reversedControls = false;
  /** Set to true to keep the slider labels inside the slider bounds. */
  boundPointerLabels = true;
  /** Set to true to use a logarithmic scale to display the slider.  */
  logScale = false;
  /** Function that returns the position on the slider for a given value.
    The position must be a percentage between 0 and 1.
    The function should be monotonically increasing or decreasing; otherwise the slider may behave incorrectly. */
  customValueToPosition = null;
  /** Function that returns the value for a given position on the slider.
    The position is a percentage between 0 and 1.
    The function should be monotonically increasing or decreasing; otherwise the slider may behave incorrectly. */
  customPositionToValue = null;
  /** Precision limit for calculated values.
    Values used in calculations will be rounded to this number of significant digits
    to prevent accumulating small floating-point errors. */
  precisionLimit = 12;
  /** Use to display the selection bar as a gradient.
    The given object must contain from and to properties which are colors. */
  selectionBarGradient = null;
  /** Use to add a label directly to the slider for accessibility. Adds the aria-label attribute. */
  ariaLabel = "ngx-slider";
  /** Use instead of ariaLabel to reference the id of an element which will be used to label the slider.
    Adds the aria-labelledby attribute. */
  ariaLabelledBy = null;
  /** Use to add a label directly to the slider range for accessibility. Adds the aria-label attribute. */
  ariaLabelHigh = "ngx-slider-max";
  /** Use instead of ariaLabelHigh to reference the id of an element which will be used to label the slider range.
    Adds the aria-labelledby attribute. */
  ariaLabelledByHigh = null;
  /** Use to increase rendering performance. If the value is not provided, the slider calculates the with/height of the handle */
  handleDimension = null;
  /** Use to increase rendering performance. If the value is not provided, the slider calculates the with/height of the bar */
  barDimension = null;
  /** Enable/disable CSS animations */
  animate = true;
  /** Enable/disable CSS animations while moving the slider */
  animateOnMove = false;
}
const AllowUnsafeHtmlInSlider = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("AllowUnsafeHtmlInSlider");

/** Pointer type */
var PointerType;
(function (PointerType) {
  /** Low pointer */
  PointerType[PointerType["Min"] = 0] = "Min";
  /** High pointer */
  PointerType[PointerType["Max"] = 1] = "Max";
})(PointerType || (PointerType = {}));
class ChangeContext {
  value;
  highValue;
  pointerType;
}

/**
 *  Collection of functions to handle conversions/lookups of values
 */
class ValueHelper {
  static isNullOrUndefined(value) {
    return value === undefined || value === null;
  }
  static areArraysEqual(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; ++i) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
  static linearValueToPosition(val, minVal, maxVal) {
    const range = maxVal - minVal;
    return (val - minVal) / range;
  }
  static logValueToPosition(val, minVal, maxVal) {
    val = Math.log(val);
    minVal = Math.log(minVal);
    maxVal = Math.log(maxVal);
    const range = maxVal - minVal;
    return (val - minVal) / range;
  }
  static linearPositionToValue(percent, minVal, maxVal) {
    return percent * (maxVal - minVal) + minVal;
  }
  static logPositionToValue(percent, minVal, maxVal) {
    minVal = Math.log(minVal);
    maxVal = Math.log(maxVal);
    const value = percent * (maxVal - minVal) + minVal;
    return Math.exp(value);
  }
  static findStepIndex(modelValue, stepsArray) {
    const differences = stepsArray.map(step => Math.abs(modelValue - step.value));
    let minDifferenceIndex = 0;
    for (let index = 0; index < stepsArray.length; index++) {
      if (differences[index] !== differences[minDifferenceIndex] && differences[index] < differences[minDifferenceIndex]) {
        minDifferenceIndex = index;
      }
    }
    return minDifferenceIndex;
  }
}

/** Helper with compatibility functions to support different browsers */
class CompatibilityHelper {
  /** Workaround for TouchEvent constructor sadly not being available on all browsers (e.g. Firefox, Safari) */
  static isTouchEvent(event) {
    if (window.TouchEvent !== undefined) {
      return event instanceof TouchEvent;
    }
    return event.touches !== undefined;
  }
  /** Detect presence of ResizeObserver API */
  static isResizeObserverAvailable() {
    return window.ResizeObserver !== undefined;
  }
}

/** Helper with mathematical functions */
class MathHelper {
  /* Round numbers to a given number of significant digits */
  static roundToPrecisionLimit(value, precisionLimit) {
    return +value.toPrecision(precisionLimit);
  }
  static isModuloWithinPrecisionLimit(value, modulo, precisionLimit) {
    const limit = Math.pow(10, -precisionLimit);
    return Math.abs(value % modulo) <= limit || Math.abs(Math.abs(value % modulo) - modulo) <= limit;
  }
  static clampToRange(value, floor, ceil) {
    return Math.min(Math.max(value, floor), ceil);
  }
}
class EventListener {
  eventName = null;
  events = null;
  eventsSubscription = null;
  teardownCallback = null;
}

/**
 * Helper class to attach event listeners to DOM elements with debounce support using rxjs
 */
class EventListenerHelper {
  renderer;
  constructor(renderer) {
    this.renderer = renderer;
  }
  attachPassiveEventListener(nativeElement, eventName, callback, throttleInterval) {
    // Only use passive event listeners if the browser supports it
    if (detect_passive_events__WEBPACK_IMPORTED_MODULE_1__.supportsPassiveEvents !== true) {
      return this.attachEventListener(nativeElement, eventName, callback, throttleInterval);
    }
    // Angular doesn't support passive event handlers (yet), so we need to roll our own code using native functions
    const listener = new EventListener();
    listener.eventName = eventName;
    listener.events = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    const observerCallback = event => {
      listener.events.next(event);
    };
    nativeElement.addEventListener(eventName, observerCallback, {
      passive: true,
      capture: false
    });
    listener.teardownCallback = () => {
      nativeElement.removeEventListener(eventName, observerCallback, {
        passive: true,
        capture: false
      });
    };
    listener.eventsSubscription = listener.events.pipe(!ValueHelper.isNullOrUndefined(throttleInterval) ? (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.throttleTime)(throttleInterval, undefined, {
      leading: true,
      trailing: true
    }) : (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {}) // no-op
    ).subscribe(event => {
      callback(event);
    });
    return listener;
  }
  detachEventListener(eventListener) {
    if (!ValueHelper.isNullOrUndefined(eventListener.eventsSubscription)) {
      eventListener.eventsSubscription.unsubscribe();
      eventListener.eventsSubscription = null;
    }
    if (!ValueHelper.isNullOrUndefined(eventListener.events)) {
      eventListener.events.complete();
      eventListener.events = null;
    }
    if (!ValueHelper.isNullOrUndefined(eventListener.teardownCallback)) {
      eventListener.teardownCallback();
      eventListener.teardownCallback = null;
    }
  }
  attachEventListener(nativeElement, eventName, callback, throttleInterval) {
    const listener = new EventListener();
    listener.eventName = eventName;
    listener.events = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    const observerCallback = event => {
      listener.events.next(event);
    };
    listener.teardownCallback = this.renderer.listen(nativeElement, eventName, observerCallback);
    listener.eventsSubscription = listener.events.pipe(!ValueHelper.isNullOrUndefined(throttleInterval) ? (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.throttleTime)(throttleInterval, undefined, {
      leading: true,
      trailing: true
    }) : (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {}) // no-op
    ).subscribe(event => {
      callback(event);
    });
    return listener;
  }
}
class SliderElementDirective {
  elemRef;
  renderer;
  changeDetectionRef;
  _position = 0;
  get position() {
    return this._position;
  }
  _dimension = 0;
  get dimension() {
    return this._dimension;
  }
  _alwaysHide = false;
  get alwaysHide() {
    return this._alwaysHide;
  }
  _vertical = false;
  get vertical() {
    return this._vertical;
  }
  _scale = 1;
  get scale() {
    return this._scale;
  }
  _rotate = 0;
  get rotate() {
    return this._rotate;
  }
  opacity = 1;
  visibility = 'visible';
  left = '';
  bottom = '';
  height = '';
  width = '';
  transform = '';
  eventListenerHelper;
  eventListeners = [];
  constructor(elemRef, renderer, changeDetectionRef) {
    this.elemRef = elemRef;
    this.renderer = renderer;
    this.changeDetectionRef = changeDetectionRef;
    this.eventListenerHelper = new EventListenerHelper(this.renderer);
  }
  setAlwaysHide(hide) {
    this._alwaysHide = hide;
    if (hide) {
      this.visibility = 'hidden';
    } else {
      this.visibility = 'visible';
    }
  }
  hide() {
    this.opacity = 0;
  }
  show() {
    if (this.alwaysHide) {
      return;
    }
    this.opacity = 1;
  }
  isVisible() {
    if (this.alwaysHide) {
      return false;
    }
    return this.opacity !== 0;
  }
  setVertical(vertical) {
    this._vertical = vertical;
    if (this._vertical) {
      this.left = '';
      this.width = '';
    } else {
      this.bottom = '';
      this.height = '';
    }
  }
  setScale(scale) {
    this._scale = scale;
  }
  setRotate(rotate) {
    this._rotate = rotate;
    this.transform = 'rotate(' + rotate + 'deg)';
  }
  getRotate() {
    return this._rotate;
  }
  // Set element left/top position depending on whether slider is horizontal or vertical
  setPosition(pos) {
    if (this._position !== pos && !this.isRefDestroyed()) {
      this.changeDetectionRef.markForCheck();
    }
    this._position = pos;
    if (this._vertical) {
      this.bottom = Math.round(pos) + 'px';
    } else {
      this.left = Math.round(pos) + 'px';
    }
  }
  // Calculate element's width/height depending on whether slider is horizontal or vertical
  calculateDimension() {
    const val = this.getBoundingClientRect();
    if (this.vertical) {
      this._dimension = (val.bottom - val.top) * this.scale;
    } else {
      this._dimension = (val.right - val.left) * this.scale;
    }
  }
  // Set element width/height depending on whether slider is horizontal or vertical
  setDimension(dim) {
    if (this._dimension !== dim && !this.isRefDestroyed()) {
      this.changeDetectionRef.markForCheck();
    }
    this._dimension = dim;
    if (this._vertical) {
      this.height = Math.round(dim) + 'px';
    } else {
      this.width = Math.round(dim) + 'px';
    }
  }
  getBoundingClientRect() {
    return this.elemRef.nativeElement.getBoundingClientRect();
  }
  on(eventName, callback, debounceInterval) {
    const listener = this.eventListenerHelper.attachEventListener(this.elemRef.nativeElement, eventName, callback, debounceInterval);
    this.eventListeners.push(listener);
  }
  onPassive(eventName, callback, debounceInterval) {
    const listener = this.eventListenerHelper.attachPassiveEventListener(this.elemRef.nativeElement, eventName, callback, debounceInterval);
    this.eventListeners.push(listener);
  }
  off(eventName) {
    let listenersToKeep;
    let listenersToRemove;
    if (!ValueHelper.isNullOrUndefined(eventName)) {
      listenersToKeep = this.eventListeners.filter(event => event.eventName !== eventName);
      listenersToRemove = this.eventListeners.filter(event => event.eventName === eventName);
    } else {
      listenersToKeep = [];
      listenersToRemove = this.eventListeners;
    }
    for (const listener of listenersToRemove) {
      this.eventListenerHelper.detachEventListener(listener);
    }
    this.eventListeners = listenersToKeep;
  }
  isRefDestroyed() {
    return ValueHelper.isNullOrUndefined(this.changeDetectionRef) || this.changeDetectionRef['destroyed'];
  }
  static ɵfac = function SliderElementDirective_Factory(t) {
    return new (t || SliderElementDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: SliderElementDirective,
    selectors: [["", "ngxSliderElement", ""]],
    hostVars: 14,
    hostBindings: function SliderElementDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", ctx.opacity)("visibility", ctx.visibility)("left", ctx.left)("bottom", ctx.bottom)("height", ctx.height)("width", ctx.width)("transform", ctx.transform);
      }
    }
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderElementDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngxSliderElement]'
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }], {
    opacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.opacity']
    }],
    visibility: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.visibility']
    }],
    left: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.left']
    }],
    bottom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.bottom']
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.height']
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.width']
    }],
    transform: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.transform']
    }]
  });
})();
class SliderHandleDirective extends SliderElementDirective {
  active = false;
  role = "";
  tabindex = "";
  ariaOrientation = "";
  ariaLabel = "";
  ariaLabelledBy = "";
  ariaValueNow = "";
  ariaValueText = "";
  ariaValueMin = "";
  ariaValueMax = "";
  focus() {
    this.elemRef.nativeElement.focus();
  }
  constructor(elemRef, renderer, changeDetectionRef) {
    super(elemRef, renderer, changeDetectionRef);
  }
  static ɵfac = function SliderHandleDirective_Factory(t) {
    return new (t || SliderHandleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: SliderHandleDirective,
    selectors: [["", "ngxSliderHandle", ""]],
    hostVars: 11,
    hostBindings: function SliderHandleDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role)("tabindex", ctx.tabindex)("aria-orientation", ctx.ariaOrientation)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("aria-valuenow", ctx.ariaValueNow)("aria-valuetext", ctx.ariaValueText)("aria-valuemin", ctx.ariaValueMin)("aria-valuemax", ctx.ariaValueMax);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ngx-slider-active", ctx.active);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderHandleDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: "[ngxSliderHandle]"
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }], {
    active: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ["class.ngx-slider-active"]
    }],
    role: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ["attr.role"]
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ["attr.tabindex"]
    }],
    ariaOrientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ["attr.aria-orientation"]
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ["attr.aria-label"]
    }],
    ariaLabelledBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ["attr.aria-labelledby"]
    }],
    ariaValueNow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ["attr.aria-valuenow"]
    }],
    ariaValueText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ["attr.aria-valuetext"]
    }],
    ariaValueMin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ["attr.aria-valuemin"]
    }],
    ariaValueMax: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ["attr.aria-valuemax"]
    }]
  });
})();
class SliderLabelDirective extends SliderElementDirective {
  allowUnsafeHtmlInSlider;
  _value = null;
  get value() {
    return this._value;
  }
  constructor(elemRef, renderer, changeDetectionRef, allowUnsafeHtmlInSlider) {
    super(elemRef, renderer, changeDetectionRef);
    this.allowUnsafeHtmlInSlider = allowUnsafeHtmlInSlider;
  }
  setValue(value) {
    let recalculateDimension = false;
    if (!this.alwaysHide && (ValueHelper.isNullOrUndefined(this.value) || this.value.length !== value.length || this.value.length > 0 && this.dimension === 0)) {
      recalculateDimension = true;
    }
    this._value = value;
    if (this.allowUnsafeHtmlInSlider === false) {
      this.elemRef.nativeElement.innerText = value;
    } else {
      this.elemRef.nativeElement.innerHTML = value;
    }
    // Update dimension only when length of the label have changed
    if (recalculateDimension) {
      this.calculateDimension();
    }
  }
  static ɵfac = function SliderLabelDirective_Factory(t) {
    return new (t || SliderLabelDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](AllowUnsafeHtmlInSlider, 8));
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: SliderLabelDirective,
    selectors: [["", "ngxSliderLabel", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderLabelDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: "[ngxSliderLabel]"
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [AllowUnsafeHtmlInSlider]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }], null);
})();
class TooltipWrapperComponent {
  template;
  tooltip;
  placement;
  content;
  static ɵfac = function TooltipWrapperComponent_Factory(t) {
    return new (t || TooltipWrapperComponent)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TooltipWrapperComponent,
    selectors: [["ngx-slider-tooltip-wrapper"]],
    inputs: {
      template: "template",
      tooltip: "tooltip",
      placement: "placement",
      content: "content"
    },
    decls: 2,
    vars: 2,
    consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ngx-slider-inner-tooltip"]],
    template: function TooltipWrapperComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TooltipWrapperComponent_ng_container_0_Template, 2, 6, "ng-container", 0)(1, TooltipWrapperComponent_ng_container_1_Template, 3, 3, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.template);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.template);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet],
    styles: [".ngx-slider-inner-tooltip[_ngcontent-%COMP%]{height:100%}"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipWrapperComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngx-slider-tooltip-wrapper',
      template: "<ng-container *ngIf=\"template\">\n  <ng-template *ngTemplateOutlet=\"template; context: {tooltip: tooltip, placement: placement, content: content}\"></ng-template>\n</ng-container>\n\n<ng-container *ngIf=\"!template\">\n  <div class=\"ngx-slider-inner-tooltip\" [attr.title]=\"tooltip\" [attr.data-tooltip-placement]=\"placement\">\n    {{content}}\n  </div>\n</ng-container>",
      styles: [".ngx-slider-inner-tooltip{height:100%}\n"]
    }]
  }], null, {
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class Tick {
  selected = false;
  style = {};
  tooltip = null;
  tooltipPlacement = null;
  value = null;
  valueTooltip = null;
  valueTooltipPlacement = null;
  legend = null;
}
class Dragging {
  active = false;
  value = 0;
  difference = 0;
  position = 0;
  lowLimit = 0;
  highLimit = 0;
}
class ModelValues {
  value;
  highValue;
  static compare(x, y) {
    if (ValueHelper.isNullOrUndefined(x) && ValueHelper.isNullOrUndefined(y)) {
      return false;
    }
    if (ValueHelper.isNullOrUndefined(x) !== ValueHelper.isNullOrUndefined(y)) {
      return false;
    }
    return x.value === y.value && x.highValue === y.highValue;
  }
}
class ModelChange extends ModelValues {
  // Flag used to by-pass distinctUntilChanged() filter on input values
  // (sometimes there is a need to pass values through even though the model values have not changed)
  forceChange;
  static compare(x, y) {
    if (ValueHelper.isNullOrUndefined(x) && ValueHelper.isNullOrUndefined(y)) {
      return false;
    }
    if (ValueHelper.isNullOrUndefined(x) !== ValueHelper.isNullOrUndefined(y)) {
      return false;
    }
    return x.value === y.value && x.highValue === y.highValue && x.forceChange === y.forceChange;
  }
}
class InputModelChange extends ModelChange {
  internalChange;
}
class OutputModelChange extends ModelChange {
  userEventInitiated;
}
const NGX_SLIDER_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALUE_ACCESSOR,
  /* tslint:disable-next-line: no-use-before-declare */
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => SliderComponent),
  multi: true
};
class SliderComponent {
  renderer;
  elementRef;
  changeDetectionRef;
  zone;
  allowUnsafeHtmlInSlider;
  // Model for low value of slider. For simple slider, this is the only input. For range slider, this is the low value.
  value = null;
  // Output for low value slider to support two-way bindings
  valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  // Model for high value of slider. Not used in simple slider. For range slider, this is the high value.
  highValue = null;
  // Output for high value slider to support two-way bindings
  highValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  // An object with all the other options of the slider.
  // Each option can be updated at runtime and the slider will automatically be re-rendered.
  options = new Options();
  // Event emitted when user starts interaction with the slider
  userChangeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  // Event emitted on each change coming from user interaction
  userChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  // Event emitted when user finishes interaction with the slider
  userChangeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  manualRefreshSubscription;
  // Input event that triggers slider refresh (re-positioning of slider elements)
  set manualRefresh(manualRefresh) {
    this.unsubscribeManualRefresh();
    this.manualRefreshSubscription = manualRefresh.subscribe(() => {
      setTimeout(() => this.calculateViewDimensionsAndDetectChanges());
    });
  }
  triggerFocusSubscription;
  // Input event that triggers setting focus on given slider handle
  set triggerFocus(triggerFocus) {
    this.unsubscribeTriggerFocus();
    this.triggerFocusSubscription = triggerFocus.subscribe(pointerType => {
      this.focusPointer(pointerType);
    });
  }
  // Slider type, true means range slider
  get range() {
    return !ValueHelper.isNullOrUndefined(this.value) && !ValueHelper.isNullOrUndefined(this.highValue);
  }
  // Set to true if init method already executed
  initHasRun = false;
  // Changes in model inputs are passed through this subject
  // These are all changes coming in from outside the component through input bindings or reactive form inputs
  inputModelChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  inputModelChangeSubscription = null;
  // Changes to model outputs are passed through this subject
  // These are all changes that need to be communicated to output emitters and registered callbacks
  outputModelChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  outputModelChangeSubscription = null;
  // Low value synced to model low value
  viewLowValue = null;
  // High value synced to model high value
  viewHighValue = null;
  // Options synced to model options, based on defaults
  viewOptions = new Options();
  // Half of the width or height of the slider handles
  handleHalfDimension = 0;
  // Maximum position the slider handle can have
  maxHandlePosition = 0;
  // Which handle is currently tracked for move events
  currentTrackingPointer = null;
  // Internal variable to keep track of the focus element
  currentFocusPointer = null;
  // Used to call onStart on the first keydown event
  firstKeyDown = false;
  // Current touch id of touch event being handled
  touchId = null;
  // Values recorded when first dragging the bar
  dragging = new Dragging();
  /* Slider DOM elements */
  // Left selection bar outside two handles
  leftOuterSelectionBarElement;
  // Right selection bar outside two handles
  rightOuterSelectionBarElement;
  // The whole slider bar
  fullBarElement;
  // Highlight between two handles
  selectionBarElement;
  // Left slider handle
  minHandleElement;
  // Right slider handle
  maxHandleElement;
  // Floor label
  floorLabelElement;
  // Ceiling label
  ceilLabelElement;
  // Label above the low value
  minHandleLabelElement;
  // Label above the high value
  maxHandleLabelElement;
  // Combined label
  combinedLabelElement;
  // The ticks
  ticksElement;
  // Optional custom template for displaying tooltips
  tooltipTemplate;
  // Host element class bindings
  sliderElementVerticalClass = false;
  sliderElementAnimateClass = false;
  sliderElementWithLegendClass = false;
  sliderElementDisabledAttr = null;
  sliderElementAriaLabel = "ngx-slider";
  // CSS styles and class flags
  barStyle = {};
  minPointerStyle = {};
  maxPointerStyle = {};
  fullBarTransparentClass = false;
  selectionBarDraggableClass = false;
  ticksUnderValuesClass = false;
  // Whether to show/hide ticks
  get showTicks() {
    return this.viewOptions.showTicks;
  }
  /* If tickStep is set or ticksArray is specified.
     In this case, ticks values should be displayed below the slider. */
  intermediateTicks = false;
  // Ticks array as displayed in view
  ticks = [];
  // Event listeners
  eventListenerHelper = null;
  onMoveEventListener = null;
  onEndEventListener = null;
  // Whether currently moving the slider (between onStart() and onEnd())
  moving = false;
  // Observer for slider element resize events
  resizeObserver = null;
  // Callbacks for reactive forms support
  onTouchedCallback = null;
  onChangeCallback = null;
  constructor(renderer, elementRef, changeDetectionRef, zone, allowUnsafeHtmlInSlider) {
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.changeDetectionRef = changeDetectionRef;
    this.zone = zone;
    this.allowUnsafeHtmlInSlider = allowUnsafeHtmlInSlider;
    this.eventListenerHelper = new EventListenerHelper(this.renderer);
  }
  // OnInit interface
  ngOnInit() {
    this.viewOptions = new Options();
    Object.assign(this.viewOptions, this.options);
    // We need to run these two things first, before the rest of the init in ngAfterViewInit(),
    // because these two settings are set through @HostBinding and Angular change detection
    // mechanism doesn't like them changing in ngAfterViewInit()
    this.updateDisabledState();
    this.updateVerticalState();
    this.updateAriaLabel();
  }
  // AfterViewInit interface
  ngAfterViewInit() {
    this.applyOptions();
    this.subscribeInputModelChangeSubject();
    this.subscribeOutputModelChangeSubject();
    // Once we apply options, we need to normalise model values for the first time
    this.renormaliseModelValues();
    this.viewLowValue = this.modelValueToViewValue(this.value);
    if (this.range) {
      this.viewHighValue = this.modelValueToViewValue(this.highValue);
    } else {
      this.viewHighValue = null;
    }
    this.updateVerticalState(); // need to run this again to cover changes to slider elements
    this.manageElementsStyle();
    this.updateDisabledState();
    this.calculateViewDimensions();
    this.addAccessibility();
    this.updateCeilLabel();
    this.updateFloorLabel();
    this.initHandles();
    this.manageEventsBindings();
    this.updateAriaLabel();
    this.subscribeResizeObserver();
    this.initHasRun = true;
    // Run change detection manually to resolve some issues when init procedure changes values used in the view
    if (!this.isRefDestroyed()) {
      this.changeDetectionRef.detectChanges();
    }
  }
  // OnChanges interface
  ngOnChanges(changes) {
    // Always apply options first
    if (!ValueHelper.isNullOrUndefined(changes.options) && JSON.stringify(changes.options.previousValue) !== JSON.stringify(changes.options.currentValue)) {
      this.onChangeOptions();
    }
    // Then value changes
    if (!ValueHelper.isNullOrUndefined(changes.value) || !ValueHelper.isNullOrUndefined(changes.highValue)) {
      this.inputModelChangeSubject.next({
        value: this.value,
        highValue: this.highValue,
        forceChange: false,
        internalChange: false
      });
    }
  }
  // OnDestroy interface
  ngOnDestroy() {
    this.unbindEvents();
    this.unsubscribeResizeObserver();
    this.unsubscribeInputModelChangeSubject();
    this.unsubscribeOutputModelChangeSubject();
    this.unsubscribeManualRefresh();
    this.unsubscribeTriggerFocus();
  }
  // ControlValueAccessor interface
  writeValue(obj) {
    if (obj instanceof Array) {
      this.value = obj[0];
      this.highValue = obj[1];
    } else {
      this.value = obj;
    }
    // ngOnChanges() is not called in this instance, so we need to communicate the change manually
    this.inputModelChangeSubject.next({
      value: this.value,
      highValue: this.highValue,
      forceChange: false,
      internalChange: false
    });
  }
  // ControlValueAccessor interface
  registerOnChange(onChangeCallback) {
    this.onChangeCallback = onChangeCallback;
  }
  // ControlValueAccessor interface
  registerOnTouched(onTouchedCallback) {
    this.onTouchedCallback = onTouchedCallback;
  }
  // ControlValueAccessor interface
  setDisabledState(isDisabled) {
    this.viewOptions.disabled = isDisabled;
    this.updateDisabledState();
  }
  setAriaLabel(ariaLabel) {
    this.viewOptions.ariaLabel = ariaLabel;
    this.updateAriaLabel();
  }
  onResize(event) {
    this.calculateViewDimensionsAndDetectChanges();
  }
  subscribeInputModelChangeSubject() {
    this.inputModelChangeSubscription = this.inputModelChangeSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(ModelChange.compare),
    // Hack to reset the status of the distinctUntilChanged() - if a "fake" event comes through with forceChange=true,
    // we forcefully by-pass distinctUntilChanged(), but otherwise drop the event
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(modelChange => !modelChange.forceChange && !modelChange.internalChange)).subscribe(modelChange => this.applyInputModelChange(modelChange));
  }
  subscribeOutputModelChangeSubject() {
    this.outputModelChangeSubscription = this.outputModelChangeSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(ModelChange.compare)).subscribe(modelChange => this.publishOutputModelChange(modelChange));
  }
  subscribeResizeObserver() {
    if (CompatibilityHelper.isResizeObserverAvailable()) {
      this.resizeObserver = new ResizeObserver(() => this.calculateViewDimensionsAndDetectChanges());
      this.resizeObserver.observe(this.elementRef.nativeElement);
    }
  }
  unsubscribeResizeObserver() {
    if (CompatibilityHelper.isResizeObserverAvailable() && this.resizeObserver !== null) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
  }
  unsubscribeOnMove() {
    if (!ValueHelper.isNullOrUndefined(this.onMoveEventListener)) {
      this.eventListenerHelper.detachEventListener(this.onMoveEventListener);
      this.onMoveEventListener = null;
    }
  }
  unsubscribeOnEnd() {
    if (!ValueHelper.isNullOrUndefined(this.onEndEventListener)) {
      this.eventListenerHelper.detachEventListener(this.onEndEventListener);
      this.onEndEventListener = null;
    }
  }
  unsubscribeInputModelChangeSubject() {
    if (!ValueHelper.isNullOrUndefined(this.inputModelChangeSubscription)) {
      this.inputModelChangeSubscription.unsubscribe();
      this.inputModelChangeSubscription = null;
    }
  }
  unsubscribeOutputModelChangeSubject() {
    if (!ValueHelper.isNullOrUndefined(this.outputModelChangeSubscription)) {
      this.outputModelChangeSubscription.unsubscribe();
      this.outputModelChangeSubscription = null;
    }
  }
  unsubscribeManualRefresh() {
    if (!ValueHelper.isNullOrUndefined(this.manualRefreshSubscription)) {
      this.manualRefreshSubscription.unsubscribe();
      this.manualRefreshSubscription = null;
    }
  }
  unsubscribeTriggerFocus() {
    if (!ValueHelper.isNullOrUndefined(this.triggerFocusSubscription)) {
      this.triggerFocusSubscription.unsubscribe();
      this.triggerFocusSubscription = null;
    }
  }
  getPointerElement(pointerType) {
    if (pointerType === PointerType.Min) {
      return this.minHandleElement;
    } else if (pointerType === PointerType.Max) {
      return this.maxHandleElement;
    }
    return null;
  }
  getCurrentTrackingValue() {
    if (this.currentTrackingPointer === PointerType.Min) {
      return this.viewLowValue;
    } else if (this.currentTrackingPointer === PointerType.Max) {
      return this.viewHighValue;
    }
    return null;
  }
  modelValueToViewValue(modelValue) {
    if (ValueHelper.isNullOrUndefined(modelValue)) {
      return NaN;
    }
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray) && !this.viewOptions.bindIndexForStepsArray) {
      return ValueHelper.findStepIndex(+modelValue, this.viewOptions.stepsArray);
    }
    return +modelValue;
  }
  viewValueToModelValue(viewValue) {
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray) && !this.viewOptions.bindIndexForStepsArray) {
      return this.getStepValue(viewValue);
    }
    return viewValue;
  }
  getStepValue(sliderValue) {
    const step = this.viewOptions.stepsArray[sliderValue];
    return !ValueHelper.isNullOrUndefined(step) ? step.value : NaN;
  }
  applyViewChange() {
    this.value = this.viewValueToModelValue(this.viewLowValue);
    if (this.range) {
      this.highValue = this.viewValueToModelValue(this.viewHighValue);
    }
    this.outputModelChangeSubject.next({
      value: this.value,
      highValue: this.highValue,
      userEventInitiated: true,
      forceChange: false
    });
    // At this point all changes are applied and outputs are emitted, so we should be done.
    // However, input changes are communicated in different stream and we need to be ready to
    // act on the next input change even if it is exactly the same as last input change.
    // Therefore, we send a special event to reset the stream.
    this.inputModelChangeSubject.next({
      value: this.value,
      highValue: this.highValue,
      forceChange: false,
      internalChange: true
    });
  }
  // Apply model change to the slider view
  applyInputModelChange(modelChange) {
    const normalisedModelChange = this.normaliseModelValues(modelChange);
    // If normalised model change is different, apply the change to the model values
    const normalisationChange = !ModelValues.compare(modelChange, normalisedModelChange);
    if (normalisationChange) {
      this.value = normalisedModelChange.value;
      this.highValue = normalisedModelChange.highValue;
    }
    this.viewLowValue = this.modelValueToViewValue(normalisedModelChange.value);
    if (this.range) {
      this.viewHighValue = this.modelValueToViewValue(normalisedModelChange.highValue);
    } else {
      this.viewHighValue = null;
    }
    this.updateLowHandle(this.valueToPosition(this.viewLowValue));
    if (this.range) {
      this.updateHighHandle(this.valueToPosition(this.viewHighValue));
    }
    this.updateSelectionBar();
    this.updateTicksScale();
    this.updateAriaAttributes();
    if (this.range) {
      this.updateCombinedLabel();
    }
    // At the end, we need to communicate the model change to the outputs as well
    // Normalisation changes are also always forced out to ensure that subscribers always end up in correct state
    this.outputModelChangeSubject.next({
      value: normalisedModelChange.value,
      highValue: normalisedModelChange.highValue,
      forceChange: normalisationChange,
      userEventInitiated: false
    });
  }
  // Publish model change to output event emitters and registered callbacks
  publishOutputModelChange(modelChange) {
    const emitOutputs = () => {
      this.valueChange.emit(modelChange.value);
      if (this.range) {
        this.highValueChange.emit(modelChange.highValue);
      }
      if (!ValueHelper.isNullOrUndefined(this.onChangeCallback)) {
        if (this.range) {
          this.onChangeCallback([modelChange.value, modelChange.highValue]);
        } else {
          this.onChangeCallback(modelChange.value);
        }
      }
      if (!ValueHelper.isNullOrUndefined(this.onTouchedCallback)) {
        if (this.range) {
          this.onTouchedCallback([modelChange.value, modelChange.highValue]);
        } else {
          this.onTouchedCallback(modelChange.value);
        }
      }
    };
    if (modelChange.userEventInitiated) {
      // If this change was initiated by a user event, we can emit outputs in the same tick
      emitOutputs();
      this.userChange.emit(this.getChangeContext());
    } else {
      // But, if the change was initated by something else like a change in input bindings,
      // we need to wait until next tick to emit the outputs to keep Angular change detection happy
      setTimeout(() => {
        emitOutputs();
      });
    }
  }
  normaliseModelValues(input) {
    const normalisedInput = new ModelValues();
    normalisedInput.value = input.value;
    normalisedInput.highValue = input.highValue;
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray)) {
      // When using steps array, only round to nearest step in the array
      // No other enforcement can be done, as the step array may be out of order, and that is perfectly fine
      if (this.viewOptions.enforceStepsArray) {
        const valueIndex = ValueHelper.findStepIndex(normalisedInput.value, this.viewOptions.stepsArray);
        normalisedInput.value = this.viewOptions.stepsArray[valueIndex].value;
        if (this.range) {
          const highValueIndex = ValueHelper.findStepIndex(normalisedInput.highValue, this.viewOptions.stepsArray);
          normalisedInput.highValue = this.viewOptions.stepsArray[highValueIndex].value;
        }
      }
      return normalisedInput;
    }
    if (this.viewOptions.enforceStep) {
      normalisedInput.value = this.roundStep(normalisedInput.value);
      if (this.range) {
        normalisedInput.highValue = this.roundStep(normalisedInput.highValue);
      }
    }
    if (this.viewOptions.enforceRange) {
      normalisedInput.value = MathHelper.clampToRange(normalisedInput.value, this.viewOptions.floor, this.viewOptions.ceil);
      if (this.range) {
        normalisedInput.highValue = MathHelper.clampToRange(normalisedInput.highValue, this.viewOptions.floor, this.viewOptions.ceil);
      }
      // Make sure that range slider invariant (value <= highValue) is always satisfied
      if (this.range && input.value > input.highValue) {
        // We know that both values are now clamped correctly, they may just be in the wrong order
        // So the easy solution is to swap them... except swapping is sometimes disabled in options, so we make the two values the same
        if (this.viewOptions.noSwitching) {
          normalisedInput.value = normalisedInput.highValue;
        } else {
          const tempValue = input.value;
          normalisedInput.value = input.highValue;
          normalisedInput.highValue = tempValue;
        }
      }
    }
    return normalisedInput;
  }
  renormaliseModelValues() {
    const previousModelValues = {
      value: this.value,
      highValue: this.highValue
    };
    const normalisedModelValues = this.normaliseModelValues(previousModelValues);
    if (!ModelValues.compare(normalisedModelValues, previousModelValues)) {
      this.value = normalisedModelValues.value;
      this.highValue = normalisedModelValues.highValue;
      this.outputModelChangeSubject.next({
        value: this.value,
        highValue: this.highValue,
        forceChange: true,
        userEventInitiated: false
      });
    }
  }
  onChangeOptions() {
    if (!this.initHasRun) {
      return;
    }
    const previousOptionsInfluencingEventBindings = this.getOptionsInfluencingEventBindings(this.viewOptions);
    this.applyOptions();
    const newOptionsInfluencingEventBindings = this.getOptionsInfluencingEventBindings(this.viewOptions);
    // Avoid re-binding events in case nothing changes that can influence it
    // It makes it possible to change options while dragging the slider
    const rebindEvents = !ValueHelper.areArraysEqual(previousOptionsInfluencingEventBindings, newOptionsInfluencingEventBindings);
    // With new options, we need to re-normalise model values if necessary
    this.renormaliseModelValues();
    this.viewLowValue = this.modelValueToViewValue(this.value);
    if (this.range) {
      this.viewHighValue = this.modelValueToViewValue(this.highValue);
    } else {
      this.viewHighValue = null;
    }
    this.resetSlider(rebindEvents);
  }
  // Read the user options and apply them to the slider model
  applyOptions() {
    this.viewOptions = new Options();
    Object.assign(this.viewOptions, this.options);
    this.viewOptions.draggableRange = this.range && this.viewOptions.draggableRange;
    this.viewOptions.draggableRangeOnly = this.range && this.viewOptions.draggableRangeOnly;
    if (this.viewOptions.draggableRangeOnly) {
      this.viewOptions.draggableRange = true;
    }
    this.viewOptions.showTicks = this.viewOptions.showTicks || this.viewOptions.showTicksValues || !ValueHelper.isNullOrUndefined(this.viewOptions.ticksArray);
    if (this.viewOptions.showTicks && (!ValueHelper.isNullOrUndefined(this.viewOptions.tickStep) || !ValueHelper.isNullOrUndefined(this.viewOptions.ticksArray))) {
      this.intermediateTicks = true;
    }
    this.viewOptions.showSelectionBar = this.viewOptions.showSelectionBar || this.viewOptions.showSelectionBarEnd || !ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue);
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray)) {
      this.applyStepsArrayOptions();
    } else {
      this.applyFloorCeilOptions();
    }
    if (ValueHelper.isNullOrUndefined(this.viewOptions.combineLabels)) {
      this.viewOptions.combineLabels = (minValue, maxValue) => {
        return minValue + " - " + maxValue;
      };
    }
    if (this.viewOptions.logScale && this.viewOptions.floor === 0) {
      throw Error("Can't use floor=0 with logarithmic scale");
    }
  }
  applyStepsArrayOptions() {
    this.viewOptions.floor = 0;
    this.viewOptions.ceil = this.viewOptions.stepsArray.length - 1;
    this.viewOptions.step = 1;
    if (ValueHelper.isNullOrUndefined(this.viewOptions.translate)) {
      this.viewOptions.translate = modelValue => {
        if (this.viewOptions.bindIndexForStepsArray) {
          return String(this.getStepValue(modelValue));
        }
        return String(modelValue);
      };
    }
  }
  applyFloorCeilOptions() {
    if (ValueHelper.isNullOrUndefined(this.viewOptions.step)) {
      this.viewOptions.step = 1;
    } else {
      this.viewOptions.step = +this.viewOptions.step;
      if (this.viewOptions.step <= 0) {
        this.viewOptions.step = 1;
      }
    }
    if (ValueHelper.isNullOrUndefined(this.viewOptions.ceil) || ValueHelper.isNullOrUndefined(this.viewOptions.floor)) {
      throw Error("floor and ceil options must be supplied");
    }
    this.viewOptions.ceil = +this.viewOptions.ceil;
    this.viewOptions.floor = +this.viewOptions.floor;
    if (ValueHelper.isNullOrUndefined(this.viewOptions.translate)) {
      this.viewOptions.translate = value => String(value);
    }
  }
  // Resets slider
  resetSlider(rebindEvents = true) {
    this.manageElementsStyle();
    this.addAccessibility();
    this.updateCeilLabel();
    this.updateFloorLabel();
    if (rebindEvents) {
      this.unbindEvents();
      this.manageEventsBindings();
    }
    this.updateDisabledState();
    this.updateAriaLabel();
    this.calculateViewDimensions();
    // this.refocusPointerIfNeeded();
  }
  // Sets focus on the specified pointer
  focusPointer(pointerType) {
    // If not supplied, use min pointer as default
    if (pointerType !== PointerType.Min && pointerType !== PointerType.Max) {
      pointerType = PointerType.Min;
    }
    if (pointerType === PointerType.Min) {
      this.minHandleElement.focus();
    } else if (this.range && pointerType === PointerType.Max) {
      this.maxHandleElement.focus();
    }
  }
  refocusPointerIfNeeded() {
    if (!ValueHelper.isNullOrUndefined(this.currentFocusPointer)) {
      this.onPointerFocus(this.currentFocusPointer);
      const element = this.getPointerElement(this.currentFocusPointer);
      element.focus();
    }
  }
  // Update each elements style based on options
  manageElementsStyle() {
    this.updateScale();
    this.floorLabelElement.setAlwaysHide(this.viewOptions.showTicksValues || this.viewOptions.hideLimitLabels);
    this.ceilLabelElement.setAlwaysHide(this.viewOptions.showTicksValues || this.viewOptions.hideLimitLabels);
    const hideLabelsForTicks = this.viewOptions.showTicksValues && !this.intermediateTicks;
    this.minHandleLabelElement.setAlwaysHide(hideLabelsForTicks || this.viewOptions.hidePointerLabels);
    this.maxHandleLabelElement.setAlwaysHide(hideLabelsForTicks || !this.range || this.viewOptions.hidePointerLabels);
    this.combinedLabelElement.setAlwaysHide(hideLabelsForTicks || !this.range || this.viewOptions.hidePointerLabels);
    this.selectionBarElement.setAlwaysHide(!this.range && !this.viewOptions.showSelectionBar);
    this.leftOuterSelectionBarElement.setAlwaysHide(!this.range || !this.viewOptions.showOuterSelectionBars);
    this.rightOuterSelectionBarElement.setAlwaysHide(!this.range || !this.viewOptions.showOuterSelectionBars);
    this.fullBarTransparentClass = this.range && this.viewOptions.showOuterSelectionBars;
    this.selectionBarDraggableClass = this.viewOptions.draggableRange && !this.viewOptions.onlyBindHandles;
    this.ticksUnderValuesClass = this.intermediateTicks && this.options.showTicksValues;
    if (this.sliderElementVerticalClass !== this.viewOptions.vertical) {
      this.updateVerticalState();
      // The above change in host component class will not be applied until the end of this cycle
      // However, functions calculating the slider position expect the slider to be already styled as vertical
      // So as a workaround, we need to reset the slider once again to compute the correct values
      setTimeout(() => {
        this.resetSlider();
      });
    }
    // Changing animate class may interfere with slider reset/initialisation, so we should set it separately,
    // after all is properly set up
    if (this.sliderElementAnimateClass !== this.viewOptions.animate) {
      setTimeout(() => {
        this.sliderElementAnimateClass = this.viewOptions.animate;
      });
    }
    this.updateRotate();
  }
  // Manage the events bindings based on readOnly and disabled options
  manageEventsBindings() {
    if (this.viewOptions.disabled || this.viewOptions.readOnly) {
      this.unbindEvents();
    } else {
      this.bindEvents();
    }
  }
  // Set the disabled state based on disabled option
  updateDisabledState() {
    this.sliderElementDisabledAttr = this.viewOptions.disabled ? "disabled" : null;
  }
  // Set the aria-label state based on ariaLabel option
  updateAriaLabel() {
    this.sliderElementAriaLabel = this.viewOptions.ariaLabel || "nxg-slider";
  }
  // Set vertical state based on vertical option
  updateVerticalState() {
    this.sliderElementVerticalClass = this.viewOptions.vertical;
    for (const element of this.getAllSliderElements()) {
      // This is also called before ngAfterInit, so need to check that view child bindings work
      if (!ValueHelper.isNullOrUndefined(element)) {
        element.setVertical(this.viewOptions.vertical);
      }
    }
  }
  updateScale() {
    for (const element of this.getAllSliderElements()) {
      element.setScale(this.viewOptions.scale);
    }
  }
  updateRotate() {
    for (const element of this.getAllSliderElements()) {
      element.setRotate(this.viewOptions.rotate);
    }
  }
  getAllSliderElements() {
    return [this.leftOuterSelectionBarElement, this.rightOuterSelectionBarElement, this.fullBarElement, this.selectionBarElement, this.minHandleElement, this.maxHandleElement, this.floorLabelElement, this.ceilLabelElement, this.minHandleLabelElement, this.maxHandleLabelElement, this.combinedLabelElement, this.ticksElement];
  }
  // Initialize slider handles positions and labels
  // Run only once during initialization and every time view port changes size
  initHandles() {
    this.updateLowHandle(this.valueToPosition(this.viewLowValue));
    /*
    the order here is important since the selection bar should be
    updated after the high handle but before the combined label
    */
    if (this.range) {
      this.updateHighHandle(this.valueToPosition(this.viewHighValue));
    }
    this.updateSelectionBar();
    if (this.range) {
      this.updateCombinedLabel();
    }
    this.updateTicksScale();
  }
  // Adds accessibility attributes, run only once during initialization
  addAccessibility() {
    this.updateAriaAttributes();
    this.minHandleElement.role = "slider";
    if (this.viewOptions.keyboardSupport && !(this.viewOptions.readOnly || this.viewOptions.disabled)) {
      this.minHandleElement.tabindex = "0";
    } else {
      this.minHandleElement.tabindex = "";
    }
    this.minHandleElement.ariaOrientation = this.viewOptions.vertical || this.viewOptions.rotate !== 0 ? "vertical" : "horizontal";
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabel)) {
      this.minHandleElement.ariaLabel = this.viewOptions.ariaLabel;
    } else if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabelledBy)) {
      this.minHandleElement.ariaLabelledBy = this.viewOptions.ariaLabelledBy;
    }
    if (this.range) {
      this.maxHandleElement.role = "slider";
      if (this.viewOptions.keyboardSupport && !(this.viewOptions.readOnly || this.viewOptions.disabled)) {
        this.maxHandleElement.tabindex = "0";
      } else {
        this.maxHandleElement.tabindex = "";
      }
      this.maxHandleElement.ariaOrientation = this.viewOptions.vertical || this.viewOptions.rotate !== 0 ? "vertical" : "horizontal";
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabelHigh)) {
        this.maxHandleElement.ariaLabel = this.viewOptions.ariaLabelHigh;
      } else if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabelledByHigh)) {
        this.maxHandleElement.ariaLabelledBy = this.viewOptions.ariaLabelledByHigh;
      }
    }
  }
  // Updates aria attributes according to current values
  updateAriaAttributes() {
    this.minHandleElement.ariaValueNow = (+this.value).toString();
    this.minHandleElement.ariaValueText = this.viewOptions.translate(+this.value, LabelType.Low);
    this.minHandleElement.ariaValueMin = this.viewOptions.floor.toString();
    this.minHandleElement.ariaValueMax = this.viewOptions.ceil.toString();
    if (this.range) {
      this.maxHandleElement.ariaValueNow = (+this.highValue).toString();
      this.maxHandleElement.ariaValueText = this.viewOptions.translate(+this.highValue, LabelType.High);
      this.maxHandleElement.ariaValueMin = this.viewOptions.floor.toString();
      this.maxHandleElement.ariaValueMax = this.viewOptions.ceil.toString();
    }
  }
  // Calculate dimensions that are dependent on view port size
  // Run once during initialization and every time view port changes size.
  calculateViewDimensions() {
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.handleDimension)) {
      this.minHandleElement.setDimension(this.viewOptions.handleDimension);
    } else {
      this.minHandleElement.calculateDimension();
    }
    const handleWidth = this.minHandleElement.dimension;
    this.handleHalfDimension = handleWidth / 2;
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.barDimension)) {
      this.fullBarElement.setDimension(this.viewOptions.barDimension);
    } else {
      this.fullBarElement.calculateDimension();
    }
    this.maxHandlePosition = this.fullBarElement.dimension - handleWidth;
    if (this.initHasRun) {
      this.updateFloorLabel();
      this.updateCeilLabel();
      this.initHandles();
    }
  }
  calculateViewDimensionsAndDetectChanges() {
    this.calculateViewDimensions();
    if (!this.isRefDestroyed()) {
      this.changeDetectionRef.detectChanges();
    }
  }
  /**
   * If the slider reference is already destroyed
   * @returns boolean - true if ref is destroyed
   */
  isRefDestroyed() {
    return this.changeDetectionRef["destroyed"];
  }
  // Update the ticks position
  updateTicksScale() {
    if (!this.viewOptions.showTicks && this.sliderElementWithLegendClass) {
      setTimeout(() => {
        this.sliderElementWithLegendClass = false;
      });
      return;
    }
    const ticksArray = !ValueHelper.isNullOrUndefined(this.viewOptions.ticksArray) ? this.viewOptions.ticksArray : this.getTicksArray();
    const translate = this.viewOptions.vertical ? "translateY" : "translateX";
    if (this.viewOptions.rightToLeft) {
      ticksArray.reverse();
    }
    const tickValueStep = !ValueHelper.isNullOrUndefined(this.viewOptions.tickValueStep) ? this.viewOptions.tickValueStep : !ValueHelper.isNullOrUndefined(this.viewOptions.tickStep) ? this.viewOptions.tickStep : this.viewOptions.step;
    let hasAtLeastOneLegend = false;
    const newTicks = ticksArray.map(value => {
      let position = this.valueToPosition(value);
      if (this.viewOptions.vertical) {
        position = this.maxHandlePosition - position;
      }
      const translation = translate + "(" + Math.round(position) + "px)";
      const tick = new Tick();
      tick.selected = this.isTickSelected(value);
      tick.style = {
        "-webkit-transform": translation,
        "-moz-transform": translation,
        "-o-transform": translation,
        "-ms-transform": translation,
        transform: translation
      };
      if (tick.selected && !ValueHelper.isNullOrUndefined(this.viewOptions.getSelectionBarColor)) {
        tick.style["background-color"] = this.getSelectionBarColor();
      }
      if (!tick.selected && !ValueHelper.isNullOrUndefined(this.viewOptions.getTickColor)) {
        tick.style["background-color"] = this.getTickColor(value);
      }
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.ticksTooltip)) {
        tick.tooltip = this.viewOptions.ticksTooltip(value);
        tick.tooltipPlacement = this.viewOptions.vertical ? "right" : "top";
      }
      if (this.viewOptions.showTicksValues && !ValueHelper.isNullOrUndefined(tickValueStep) && MathHelper.isModuloWithinPrecisionLimit(value, tickValueStep, this.viewOptions.precisionLimit)) {
        tick.value = this.getDisplayValue(value, LabelType.TickValue);
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.ticksValuesTooltip)) {
          tick.valueTooltip = this.viewOptions.ticksValuesTooltip(value);
          tick.valueTooltipPlacement = this.viewOptions.vertical ? "right" : "top";
        }
      }
      let legend = null;
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray)) {
        const step = this.viewOptions.stepsArray[value];
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.getStepLegend)) {
          legend = this.viewOptions.getStepLegend(step);
        } else if (!ValueHelper.isNullOrUndefined(step)) {
          legend = step.legend;
        }
      } else if (!ValueHelper.isNullOrUndefined(this.viewOptions.getLegend)) {
        legend = this.viewOptions.getLegend(value);
      }
      if (!ValueHelper.isNullOrUndefined(legend)) {
        tick.legend = legend;
        hasAtLeastOneLegend = true;
      }
      return tick;
    });
    if (this.sliderElementWithLegendClass !== hasAtLeastOneLegend) {
      setTimeout(() => {
        this.sliderElementWithLegendClass = hasAtLeastOneLegend;
      });
    }
    // We should avoid re-creating the ticks array if possible
    // This both improves performance and makes CSS animations work correctly
    if (!ValueHelper.isNullOrUndefined(this.ticks) && this.ticks.length === newTicks.length) {
      for (let i = 0; i < newTicks.length; ++i) {
        Object.assign(this.ticks[i], newTicks[i]);
      }
    } else {
      this.ticks = newTicks;
      if (!this.isRefDestroyed()) {
        this.changeDetectionRef.detectChanges();
      }
    }
  }
  getTicksArray() {
    const step = !ValueHelper.isNullOrUndefined(this.viewOptions.tickStep) ? this.viewOptions.tickStep : this.viewOptions.step;
    const ticksArray = [];
    const numberOfValues = 1 + Math.floor(MathHelper.roundToPrecisionLimit(Math.abs(this.viewOptions.ceil - this.viewOptions.floor) / step, this.viewOptions.precisionLimit));
    for (let index = 0; index < numberOfValues; ++index) {
      ticksArray.push(MathHelper.roundToPrecisionLimit(this.viewOptions.floor + step * index, this.viewOptions.precisionLimit));
    }
    return ticksArray;
  }
  isTickSelected(value) {
    if (!this.range) {
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue)) {
        const center = this.viewOptions.showSelectionBarFromValue;
        if (this.viewLowValue > center && value >= center && value <= this.viewLowValue) {
          return true;
        } else if (this.viewLowValue < center && value <= center && value >= this.viewLowValue) {
          return true;
        }
      } else if (this.viewOptions.showSelectionBarEnd) {
        if (value >= this.viewLowValue) {
          return true;
        }
      } else if (this.viewOptions.showSelectionBar && value <= this.viewLowValue) {
        return true;
      }
    }
    if (this.range && value >= this.viewLowValue && value <= this.viewHighValue) {
      return true;
    }
    return false;
  }
  // Update position of the floor label
  updateFloorLabel() {
    if (!this.floorLabelElement.alwaysHide) {
      this.floorLabelElement.setValue(this.getDisplayValue(this.viewOptions.floor, LabelType.Floor));
      this.floorLabelElement.calculateDimension();
      const position = this.viewOptions.rightToLeft ? this.fullBarElement.dimension - this.floorLabelElement.dimension : 0;
      this.floorLabelElement.setPosition(position);
    }
  }
  // Update position of the ceiling label
  updateCeilLabel() {
    if (!this.ceilLabelElement.alwaysHide) {
      this.ceilLabelElement.setValue(this.getDisplayValue(this.viewOptions.ceil, LabelType.Ceil));
      this.ceilLabelElement.calculateDimension();
      const position = this.viewOptions.rightToLeft ? 0 : this.fullBarElement.dimension - this.ceilLabelElement.dimension;
      this.ceilLabelElement.setPosition(position);
    }
  }
  // Update slider handles and label positions
  updateHandles(which, newPos) {
    if (which === PointerType.Min) {
      this.updateLowHandle(newPos);
    } else if (which === PointerType.Max) {
      this.updateHighHandle(newPos);
    }
    this.updateSelectionBar();
    this.updateTicksScale();
    if (this.range) {
      this.updateCombinedLabel();
    }
  }
  // Helper function to work out the position for handle labels depending on RTL or not
  getHandleLabelPos(labelType, newPos) {
    const labelDimension = labelType === PointerType.Min ? this.minHandleLabelElement.dimension : this.maxHandleLabelElement.dimension;
    const nearHandlePos = newPos - labelDimension / 2 + this.handleHalfDimension;
    const endOfBarPos = this.fullBarElement.dimension - labelDimension;
    if (!this.viewOptions.boundPointerLabels) {
      return nearHandlePos;
    }
    if (this.viewOptions.rightToLeft && labelType === PointerType.Min || !this.viewOptions.rightToLeft && labelType === PointerType.Max) {
      return Math.min(nearHandlePos, endOfBarPos);
    } else {
      return Math.min(Math.max(nearHandlePos, 0), endOfBarPos);
    }
  }
  // Update low slider handle position and label
  updateLowHandle(newPos) {
    this.minHandleElement.setPosition(newPos);
    this.minHandleLabelElement.setValue(this.getDisplayValue(this.viewLowValue, LabelType.Low));
    this.minHandleLabelElement.setPosition(this.getHandleLabelPos(PointerType.Min, newPos));
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.getPointerColor)) {
      this.minPointerStyle = {
        backgroundColor: this.getPointerColor(PointerType.Min)
      };
    }
    if (this.viewOptions.autoHideLimitLabels) {
      this.updateFloorAndCeilLabelsVisibility();
    }
  }
  // Update high slider handle position and label
  updateHighHandle(newPos) {
    this.maxHandleElement.setPosition(newPos);
    this.maxHandleLabelElement.setValue(this.getDisplayValue(this.viewHighValue, LabelType.High));
    this.maxHandleLabelElement.setPosition(this.getHandleLabelPos(PointerType.Max, newPos));
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.getPointerColor)) {
      this.maxPointerStyle = {
        backgroundColor: this.getPointerColor(PointerType.Max)
      };
    }
    if (this.viewOptions.autoHideLimitLabels) {
      this.updateFloorAndCeilLabelsVisibility();
    }
  }
  // Show/hide floor/ceiling label
  updateFloorAndCeilLabelsVisibility() {
    // Show based only on hideLimitLabels if pointer labels are hidden
    if (this.viewOptions.hidePointerLabels) {
      return;
    }
    let floorLabelHidden = false;
    let ceilLabelHidden = false;
    const isMinLabelAtFloor = this.isLabelBelowFloorLabel(this.minHandleLabelElement);
    const isMinLabelAtCeil = this.isLabelAboveCeilLabel(this.minHandleLabelElement);
    const isMaxLabelAtCeil = this.isLabelAboveCeilLabel(this.maxHandleLabelElement);
    const isCombinedLabelAtFloor = this.isLabelBelowFloorLabel(this.combinedLabelElement);
    const isCombinedLabelAtCeil = this.isLabelAboveCeilLabel(this.combinedLabelElement);
    if (isMinLabelAtFloor) {
      floorLabelHidden = true;
      this.floorLabelElement.hide();
    } else {
      floorLabelHidden = false;
      this.floorLabelElement.show();
    }
    if (isMinLabelAtCeil) {
      ceilLabelHidden = true;
      this.ceilLabelElement.hide();
    } else {
      ceilLabelHidden = false;
      this.ceilLabelElement.show();
    }
    if (this.range) {
      const hideCeil = this.combinedLabelElement.isVisible() ? isCombinedLabelAtCeil : isMaxLabelAtCeil;
      const hideFloor = this.combinedLabelElement.isVisible() ? isCombinedLabelAtFloor : isMinLabelAtFloor;
      if (hideCeil) {
        this.ceilLabelElement.hide();
      } else if (!ceilLabelHidden) {
        this.ceilLabelElement.show();
      }
      // Hide or show floor label
      if (hideFloor) {
        this.floorLabelElement.hide();
      } else if (!floorLabelHidden) {
        this.floorLabelElement.show();
      }
    }
  }
  isLabelBelowFloorLabel(label) {
    const pos = label.position;
    const dim = label.dimension;
    const floorPos = this.floorLabelElement.position;
    const floorDim = this.floorLabelElement.dimension;
    return this.viewOptions.rightToLeft ? pos + dim >= floorPos - 2 : pos <= floorPos + floorDim + 2;
  }
  isLabelAboveCeilLabel(label) {
    const pos = label.position;
    const dim = label.dimension;
    const ceilPos = this.ceilLabelElement.position;
    const ceilDim = this.ceilLabelElement.dimension;
    return this.viewOptions.rightToLeft ? pos <= ceilPos + ceilDim + 2 : pos + dim >= ceilPos - 2;
  }
  // Update slider selection bar, combined label and range label
  updateSelectionBar() {
    let position = 0;
    let dimension = 0;
    const isSelectionBarFromRight = this.viewOptions.rightToLeft ? !this.viewOptions.showSelectionBarEnd : this.viewOptions.showSelectionBarEnd;
    const positionForRange = this.viewOptions.rightToLeft ? this.maxHandleElement.position + this.handleHalfDimension : this.minHandleElement.position + this.handleHalfDimension;
    if (this.range) {
      dimension = Math.abs(this.maxHandleElement.position - this.minHandleElement.position);
      position = positionForRange;
    } else {
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue)) {
        const center = this.viewOptions.showSelectionBarFromValue;
        const centerPosition = this.valueToPosition(center);
        const isModelGreaterThanCenter = this.viewOptions.rightToLeft ? this.viewLowValue <= center : this.viewLowValue > center;
        if (isModelGreaterThanCenter) {
          dimension = this.minHandleElement.position - centerPosition;
          position = centerPosition + this.handleHalfDimension;
        } else {
          dimension = centerPosition - this.minHandleElement.position;
          position = this.minHandleElement.position + this.handleHalfDimension;
        }
      } else if (isSelectionBarFromRight) {
        dimension = Math.ceil(Math.abs(this.maxHandlePosition - this.minHandleElement.position) + this.handleHalfDimension);
        position = Math.floor(this.minHandleElement.position + this.handleHalfDimension);
      } else {
        dimension = this.minHandleElement.position + this.handleHalfDimension;
        position = 0;
      }
    }
    this.selectionBarElement.setDimension(dimension);
    this.selectionBarElement.setPosition(position);
    if (this.range && this.viewOptions.showOuterSelectionBars) {
      if (this.viewOptions.rightToLeft) {
        this.rightOuterSelectionBarElement.setDimension(position);
        this.rightOuterSelectionBarElement.setPosition(0);
        this.fullBarElement.calculateDimension();
        this.leftOuterSelectionBarElement.setDimension(this.fullBarElement.dimension - (position + dimension));
        this.leftOuterSelectionBarElement.setPosition(position + dimension);
      } else {
        this.leftOuterSelectionBarElement.setDimension(position);
        this.leftOuterSelectionBarElement.setPosition(0);
        this.fullBarElement.calculateDimension();
        this.rightOuterSelectionBarElement.setDimension(this.fullBarElement.dimension - (position + dimension));
        this.rightOuterSelectionBarElement.setPosition(position + dimension);
      }
    }
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.getSelectionBarColor)) {
      const color = this.getSelectionBarColor();
      this.barStyle = {
        backgroundColor: color
      };
    } else if (!ValueHelper.isNullOrUndefined(this.viewOptions.selectionBarGradient)) {
      const offset = !ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue) ? this.valueToPosition(this.viewOptions.showSelectionBarFromValue) : 0;
      const reversed = offset - position > 0 && !isSelectionBarFromRight || offset - position <= 0 && isSelectionBarFromRight;
      const direction = this.viewOptions.vertical ? reversed ? "bottom" : "top" : reversed ? "left" : "right";
      this.barStyle = {
        backgroundImage: "linear-gradient(to " + direction + ", " + this.viewOptions.selectionBarGradient.from + " 0%," + this.viewOptions.selectionBarGradient.to + " 100%)"
      };
      if (this.viewOptions.vertical) {
        this.barStyle.backgroundPosition = "center " + (offset + dimension + position + (reversed ? -this.handleHalfDimension : 0)) + "px";
        this.barStyle.backgroundSize = "100% " + (this.fullBarElement.dimension - this.handleHalfDimension) + "px";
      } else {
        this.barStyle.backgroundPosition = offset - position + (reversed ? this.handleHalfDimension : 0) + "px center";
        this.barStyle.backgroundSize = this.fullBarElement.dimension - this.handleHalfDimension + "px 100%";
      }
    }
  }
  // Wrapper around the getSelectionBarColor of the user to pass to correct parameters
  getSelectionBarColor() {
    if (this.range) {
      return this.viewOptions.getSelectionBarColor(this.value, this.highValue);
    }
    return this.viewOptions.getSelectionBarColor(this.value);
  }
  // Wrapper around the getPointerColor of the user to pass to  correct parameters
  getPointerColor(pointerType) {
    if (pointerType === PointerType.Max) {
      return this.viewOptions.getPointerColor(this.highValue, pointerType);
    }
    return this.viewOptions.getPointerColor(this.value, pointerType);
  }
  // Wrapper around the getTickColor of the user to pass to correct parameters
  getTickColor(value) {
    return this.viewOptions.getTickColor(value);
  }
  // Update combined label position and value
  updateCombinedLabel() {
    let isLabelOverlap = null;
    if (this.viewOptions.rightToLeft) {
      isLabelOverlap = this.minHandleLabelElement.position - this.minHandleLabelElement.dimension - 10 <= this.maxHandleLabelElement.position;
    } else {
      isLabelOverlap = this.minHandleLabelElement.position + this.minHandleLabelElement.dimension + 10 >= this.maxHandleLabelElement.position;
    }
    if (isLabelOverlap) {
      const lowDisplayValue = this.getDisplayValue(this.viewLowValue, LabelType.Low);
      const highDisplayValue = this.getDisplayValue(this.viewHighValue, LabelType.High);
      const combinedLabelValue = this.viewOptions.rightToLeft ? this.viewOptions.combineLabels(highDisplayValue, lowDisplayValue) : this.viewOptions.combineLabels(lowDisplayValue, highDisplayValue);
      this.combinedLabelElement.setValue(combinedLabelValue);
      const pos = this.viewOptions.boundPointerLabels ? Math.min(Math.max(this.selectionBarElement.position + this.selectionBarElement.dimension / 2 - this.combinedLabelElement.dimension / 2, 0), this.fullBarElement.dimension - this.combinedLabelElement.dimension) : this.selectionBarElement.position + this.selectionBarElement.dimension / 2 - this.combinedLabelElement.dimension / 2;
      this.combinedLabelElement.setPosition(pos);
      this.minHandleLabelElement.hide();
      this.maxHandleLabelElement.hide();
      this.combinedLabelElement.show();
    } else {
      this.updateHighHandle(this.valueToPosition(this.viewHighValue));
      this.updateLowHandle(this.valueToPosition(this.viewLowValue));
      this.maxHandleLabelElement.show();
      this.minHandleLabelElement.show();
      this.combinedLabelElement.hide();
    }
    if (this.viewOptions.autoHideLimitLabels) {
      this.updateFloorAndCeilLabelsVisibility();
    }
  }
  // Return the translated value if a translate function is provided else the original value
  getDisplayValue(value, which) {
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray) && !this.viewOptions.bindIndexForStepsArray) {
      value = this.getStepValue(value);
    }
    return this.viewOptions.translate(value, which);
  }
  // Round value to step and precision based on minValue
  roundStep(value, customStep) {
    const step = !ValueHelper.isNullOrUndefined(customStep) ? customStep : this.viewOptions.step;
    let steppedDifference = MathHelper.roundToPrecisionLimit((value - this.viewOptions.floor) / step, this.viewOptions.precisionLimit);
    steppedDifference = Math.round(steppedDifference) * step;
    return MathHelper.roundToPrecisionLimit(this.viewOptions.floor + steppedDifference, this.viewOptions.precisionLimit);
  }
  // Translate value to pixel position
  valueToPosition(val) {
    let fn = ValueHelper.linearValueToPosition;
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.customValueToPosition)) {
      fn = this.viewOptions.customValueToPosition;
    } else if (this.viewOptions.logScale) {
      fn = ValueHelper.logValueToPosition;
    }
    val = MathHelper.clampToRange(val, this.viewOptions.floor, this.viewOptions.ceil);
    let percent = fn(val, this.viewOptions.floor, this.viewOptions.ceil);
    if (ValueHelper.isNullOrUndefined(percent)) {
      percent = 0;
    }
    if (this.viewOptions.rightToLeft) {
      percent = 1 - percent;
    }
    return percent * this.maxHandlePosition;
  }
  // Translate position to model value
  positionToValue(position) {
    let percent = position / this.maxHandlePosition;
    if (this.viewOptions.rightToLeft) {
      percent = 1 - percent;
    }
    let fn = ValueHelper.linearPositionToValue;
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.customPositionToValue)) {
      fn = this.viewOptions.customPositionToValue;
    } else if (this.viewOptions.logScale) {
      fn = ValueHelper.logPositionToValue;
    }
    const value = fn(percent, this.viewOptions.floor, this.viewOptions.ceil);
    return !ValueHelper.isNullOrUndefined(value) ? value : 0;
  }
  // Get the X-coordinate or Y-coordinate of an event
  getEventXY(event, targetTouchId) {
    if (event instanceof MouseEvent) {
      return this.viewOptions.vertical || this.viewOptions.rotate !== 0 ? event.clientY : event.clientX;
    }
    let touchIndex = 0;
    const touches = event.touches;
    if (!ValueHelper.isNullOrUndefined(targetTouchId)) {
      for (let i = 0; i < touches.length; i++) {
        if (touches[i].identifier === targetTouchId) {
          touchIndex = i;
          break;
        }
      }
    }
    // Return the target touch or if the target touch was not found in the event
    // returns the coordinates of the first touch
    return this.viewOptions.vertical || this.viewOptions.rotate !== 0 ? touches[touchIndex].clientY : touches[touchIndex].clientX;
  }
  // Compute the event position depending on whether the slider is horizontal or vertical
  getEventPosition(event, targetTouchId) {
    const sliderElementBoundingRect = this.elementRef.nativeElement.getBoundingClientRect();
    const sliderPos = this.viewOptions.vertical || this.viewOptions.rotate !== 0 ? sliderElementBoundingRect.bottom : sliderElementBoundingRect.left;
    let eventPos = 0;
    if (this.viewOptions.vertical || this.viewOptions.rotate !== 0) {
      eventPos = -this.getEventXY(event, targetTouchId) + sliderPos;
    } else {
      eventPos = this.getEventXY(event, targetTouchId) - sliderPos;
    }
    return eventPos * this.viewOptions.scale - this.handleHalfDimension;
  }
  // Get the handle closest to an event
  getNearestHandle(event) {
    if (!this.range) {
      return PointerType.Min;
    }
    const position = this.getEventPosition(event);
    const distanceMin = Math.abs(position - this.minHandleElement.position);
    const distanceMax = Math.abs(position - this.maxHandleElement.position);
    if (distanceMin < distanceMax) {
      return PointerType.Min;
    } else if (distanceMin > distanceMax) {
      return PointerType.Max;
    } else if (!this.viewOptions.rightToLeft) {
      // if event is at the same distance from min/max then if it's at left of minH, we return minH else maxH
      return position < this.minHandleElement.position ? PointerType.Min : PointerType.Max;
    }
    // reverse in rtl
    return position > this.minHandleElement.position ? PointerType.Min : PointerType.Max;
  }
  // Bind mouse and touch events to slider handles
  bindEvents() {
    const draggableRange = this.viewOptions.draggableRange;
    if (!this.viewOptions.onlyBindHandles) {
      this.selectionBarElement.on("mousedown", event => this.onBarStart(null, draggableRange, event, true, true, true));
    }
    if (this.viewOptions.draggableRangeOnly) {
      this.minHandleElement.on("mousedown", event => this.onBarStart(PointerType.Min, draggableRange, event, true, true));
      this.maxHandleElement.on("mousedown", event => this.onBarStart(PointerType.Max, draggableRange, event, true, true));
    } else {
      this.minHandleElement.on("mousedown", event => this.onStart(PointerType.Min, event, true, true));
      if (this.range) {
        this.maxHandleElement.on("mousedown", event => this.onStart(PointerType.Max, event, true, true));
      }
      if (!this.viewOptions.onlyBindHandles) {
        this.fullBarElement.on("mousedown", event => this.onStart(null, event, true, true, true));
        this.ticksElement.on("mousedown", event => this.onStart(null, event, true, true, true, true));
      }
    }
    if (!this.viewOptions.onlyBindHandles) {
      this.selectionBarElement.onPassive("touchstart", event => this.onBarStart(null, draggableRange, event, true, true, true));
    }
    if (this.viewOptions.draggableRangeOnly) {
      this.minHandleElement.onPassive("touchstart", event => this.onBarStart(PointerType.Min, draggableRange, event, true, true));
      this.maxHandleElement.onPassive("touchstart", event => this.onBarStart(PointerType.Max, draggableRange, event, true, true));
    } else {
      this.minHandleElement.onPassive("touchstart", event => this.onStart(PointerType.Min, event, true, true));
      if (this.range) {
        this.maxHandleElement.onPassive("touchstart", event => this.onStart(PointerType.Max, event, true, true));
      }
      if (!this.viewOptions.onlyBindHandles) {
        this.fullBarElement.onPassive("touchstart", event => this.onStart(null, event, true, true, true));
        this.ticksElement.onPassive("touchstart", event => this.onStart(null, event, false, false, true, true));
      }
    }
    if (this.viewOptions.keyboardSupport) {
      this.minHandleElement.on("focus", () => this.onPointerFocus(PointerType.Min));
      if (this.range) {
        this.maxHandleElement.on("focus", () => this.onPointerFocus(PointerType.Max));
      }
    }
  }
  getOptionsInfluencingEventBindings(options) {
    return [options.disabled, options.readOnly, options.draggableRange, options.draggableRangeOnly, options.onlyBindHandles, options.keyboardSupport];
  }
  // Unbind mouse and touch events to slider handles
  unbindEvents() {
    this.unsubscribeOnMove();
    this.unsubscribeOnEnd();
    for (const element of this.getAllSliderElements()) {
      if (!ValueHelper.isNullOrUndefined(element)) {
        element.off();
      }
    }
  }
  onBarStart(pointerType, draggableRange, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd) {
    if (draggableRange) {
      this.onDragStart(pointerType, event, bindMove, bindEnd);
    } else {
      this.onStart(pointerType, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd);
    }
  }
  // onStart event handler
  onStart(pointerType, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd) {
    event.stopPropagation();
    // Only call preventDefault() when handling non-passive events (passive events don't need it)
    if (!CompatibilityHelper.isTouchEvent(event) && !detect_passive_events__WEBPACK_IMPORTED_MODULE_1__.supportsPassiveEvents) {
      event.preventDefault();
    }
    this.moving = false;
    // We have to do this in case the HTML where the sliders are on
    // have been animated into view.
    this.calculateViewDimensions();
    if (ValueHelper.isNullOrUndefined(pointerType)) {
      pointerType = this.getNearestHandle(event);
    }
    this.currentTrackingPointer = pointerType;
    const pointerElement = this.getPointerElement(pointerType);
    pointerElement.active = true;
    if (this.viewOptions.keyboardSupport) {
      pointerElement.focus();
    }
    if (bindMove) {
      this.unsubscribeOnMove();
      const onMoveCallback = e => this.dragging.active ? this.onDragMove(e) : this.onMove(e);
      if (CompatibilityHelper.isTouchEvent(event)) {
        this.onMoveEventListener = this.eventListenerHelper.attachPassiveEventListener(document, "touchmove", onMoveCallback);
      } else {
        this.onMoveEventListener = this.eventListenerHelper.attachEventListener(document, "mousemove", onMoveCallback);
      }
    }
    if (bindEnd) {
      this.unsubscribeOnEnd();
      const onEndCallback = e => this.onEnd(e);
      if (CompatibilityHelper.isTouchEvent(event)) {
        this.onEndEventListener = this.eventListenerHelper.attachPassiveEventListener(document, "touchend", onEndCallback);
      } else {
        this.onEndEventListener = this.eventListenerHelper.attachEventListener(document, "mouseup", onEndCallback);
      }
    }
    this.userChangeStart.emit(this.getChangeContext());
    if (CompatibilityHelper.isTouchEvent(event) && !ValueHelper.isNullOrUndefined(event.changedTouches)) {
      // Store the touch identifier
      if (ValueHelper.isNullOrUndefined(this.touchId)) {
        this.touchId = event.changedTouches[0].identifier;
      }
    }
    // Click events, either with mouse or touch gesture are weird. Sometimes they result in full
    // start, move, end sequence, and sometimes, they don't - they only invoke mousedown
    // As a workaround, we simulate the first move event and the end event if it's necessary
    if (simulateImmediateMove) {
      this.onMove(event, true);
    }
    if (simulateImmediateEnd) {
      this.onEnd(event);
    }
  }
  // onMove event handler
  onMove(event, fromTick) {
    let touchForThisSlider = null;
    if (CompatibilityHelper.isTouchEvent(event)) {
      const changedTouches = event.changedTouches;
      for (let i = 0; i < changedTouches.length; i++) {
        if (changedTouches[i].identifier === this.touchId) {
          touchForThisSlider = changedTouches[i];
          break;
        }
      }
      if (ValueHelper.isNullOrUndefined(touchForThisSlider)) {
        return;
      }
    }
    if (this.viewOptions.animate && !this.viewOptions.animateOnMove) {
      if (this.moving) {
        this.sliderElementAnimateClass = false;
      }
    }
    this.moving = true;
    const newPos = !ValueHelper.isNullOrUndefined(touchForThisSlider) ? this.getEventPosition(event, touchForThisSlider.identifier) : this.getEventPosition(event);
    let newValue;
    const ceilValue = this.viewOptions.rightToLeft ? this.viewOptions.floor : this.viewOptions.ceil;
    const floorValue = this.viewOptions.rightToLeft ? this.viewOptions.ceil : this.viewOptions.floor;
    if (newPos <= 0) {
      newValue = floorValue;
    } else if (newPos >= this.maxHandlePosition) {
      newValue = ceilValue;
    } else {
      newValue = this.positionToValue(newPos);
      if (fromTick && !ValueHelper.isNullOrUndefined(this.viewOptions.tickStep)) {
        newValue = this.roundStep(newValue, this.viewOptions.tickStep);
      } else {
        newValue = this.roundStep(newValue);
      }
    }
    this.positionTrackingHandle(newValue);
  }
  onEnd(event) {
    if (CompatibilityHelper.isTouchEvent(event)) {
      const changedTouches = event.changedTouches;
      if (changedTouches[0].identifier !== this.touchId) {
        return;
      }
    }
    this.moving = false;
    if (this.viewOptions.animate) {
      this.sliderElementAnimateClass = true;
    }
    this.touchId = null;
    if (!this.viewOptions.keyboardSupport) {
      this.minHandleElement.active = false;
      this.maxHandleElement.active = false;
      this.currentTrackingPointer = null;
    }
    this.dragging.active = false;
    this.unsubscribeOnMove();
    this.unsubscribeOnEnd();
    this.userChangeEnd.emit(this.getChangeContext());
  }
  onPointerFocus(pointerType) {
    const pointerElement = this.getPointerElement(pointerType);
    pointerElement.on("blur", () => this.onPointerBlur(pointerElement));
    pointerElement.on("keydown", event => this.onKeyboardEvent(event));
    pointerElement.on("keyup", () => this.onKeyUp());
    pointerElement.active = true;
    this.currentTrackingPointer = pointerType;
    this.currentFocusPointer = pointerType;
    this.firstKeyDown = true;
  }
  onKeyUp() {
    this.firstKeyDown = true;
    this.userChangeEnd.emit(this.getChangeContext());
  }
  onPointerBlur(pointer) {
    pointer.off("blur");
    pointer.off("keydown");
    pointer.off("keyup");
    pointer.active = false;
    if (ValueHelper.isNullOrUndefined(this.touchId)) {
      this.currentTrackingPointer = null;
      this.currentFocusPointer = null;
    }
  }
  getKeyActions(currentValue) {
    const valueRange = this.viewOptions.ceil - this.viewOptions.floor;
    let increaseStep = currentValue + this.viewOptions.step;
    let decreaseStep = currentValue - this.viewOptions.step;
    let increasePage = currentValue + valueRange / 10;
    let decreasePage = currentValue - valueRange / 10;
    if (this.viewOptions.reversedControls) {
      increaseStep = currentValue - this.viewOptions.step;
      decreaseStep = currentValue + this.viewOptions.step;
      increasePage = currentValue - valueRange / 10;
      decreasePage = currentValue + valueRange / 10;
    }
    // Left to right default actions
    const actions = {
      UP: increaseStep,
      DOWN: decreaseStep,
      LEFT: decreaseStep,
      RIGHT: increaseStep,
      PAGEUP: increasePage,
      PAGEDOWN: decreasePage,
      HOME: this.viewOptions.reversedControls ? this.viewOptions.ceil : this.viewOptions.floor,
      END: this.viewOptions.reversedControls ? this.viewOptions.floor : this.viewOptions.ceil
    };
    // right to left means swapping right and left arrows
    if (this.viewOptions.rightToLeft) {
      actions.LEFT = increaseStep;
      actions.RIGHT = decreaseStep;
      // right to left and vertical means we also swap up and down
      if (this.viewOptions.vertical || this.viewOptions.rotate !== 0) {
        actions.UP = decreaseStep;
        actions.DOWN = increaseStep;
      }
    }
    return actions;
  }
  onKeyboardEvent(event) {
    const currentValue = this.getCurrentTrackingValue();
    const keyCode = !ValueHelper.isNullOrUndefined(event.keyCode) ? event.keyCode : event.which;
    const keys = {
      38: "UP",
      40: "DOWN",
      37: "LEFT",
      39: "RIGHT",
      33: "PAGEUP",
      34: "PAGEDOWN",
      36: "HOME",
      35: "END"
    };
    const actions = this.getKeyActions(currentValue);
    const key = keys[keyCode];
    const action = actions[key];
    if (ValueHelper.isNullOrUndefined(action) || ValueHelper.isNullOrUndefined(this.currentTrackingPointer)) {
      return;
    }
    event.preventDefault();
    if (this.firstKeyDown) {
      this.firstKeyDown = false;
      this.userChangeStart.emit(this.getChangeContext());
    }
    const actionValue = MathHelper.clampToRange(action, this.viewOptions.floor, this.viewOptions.ceil);
    const newValue = this.roundStep(actionValue);
    if (!this.viewOptions.draggableRangeOnly) {
      this.positionTrackingHandle(newValue);
    } else {
      const difference = this.viewHighValue - this.viewLowValue;
      let newMinValue;
      let newMaxValue;
      if (this.currentTrackingPointer === PointerType.Min) {
        newMinValue = newValue;
        newMaxValue = newValue + difference;
        if (newMaxValue > this.viewOptions.ceil) {
          newMaxValue = this.viewOptions.ceil;
          newMinValue = newMaxValue - difference;
        }
      } else if (this.currentTrackingPointer === PointerType.Max) {
        newMaxValue = newValue;
        newMinValue = newValue - difference;
        if (newMinValue < this.viewOptions.floor) {
          newMinValue = this.viewOptions.floor;
          newMaxValue = newMinValue + difference;
        }
      }
      this.positionTrackingBar(newMinValue, newMaxValue);
    }
  }
  // onDragStart event handler, handles dragging of the middle bar
  onDragStart(pointerType, event, bindMove, bindEnd) {
    const position = this.getEventPosition(event);
    this.dragging = new Dragging();
    this.dragging.active = true;
    this.dragging.value = this.positionToValue(position);
    this.dragging.difference = this.viewHighValue - this.viewLowValue;
    this.dragging.lowLimit = this.viewOptions.rightToLeft ? this.minHandleElement.position - position : position - this.minHandleElement.position;
    this.dragging.highLimit = this.viewOptions.rightToLeft ? position - this.maxHandleElement.position : this.maxHandleElement.position - position;
    this.onStart(pointerType, event, bindMove, bindEnd);
  }
  /** Get min value depending on whether the newPos is outOfBounds above or below the bar and rightToLeft */
  getMinValue(newPos, outOfBounds, isAbove) {
    const isRTL = this.viewOptions.rightToLeft;
    let value = null;
    if (outOfBounds) {
      if (isAbove) {
        value = isRTL ? this.viewOptions.floor : this.viewOptions.ceil - this.dragging.difference;
      } else {
        value = isRTL ? this.viewOptions.ceil - this.dragging.difference : this.viewOptions.floor;
      }
    } else {
      value = isRTL ? this.positionToValue(newPos + this.dragging.lowLimit) : this.positionToValue(newPos - this.dragging.lowLimit);
    }
    return this.roundStep(value);
  }
  /** Get max value depending on whether the newPos is outOfBounds above or below the bar and rightToLeft */
  getMaxValue(newPos, outOfBounds, isAbove) {
    const isRTL = this.viewOptions.rightToLeft;
    let value = null;
    if (outOfBounds) {
      if (isAbove) {
        value = isRTL ? this.viewOptions.floor + this.dragging.difference : this.viewOptions.ceil;
      } else {
        value = isRTL ? this.viewOptions.ceil : this.viewOptions.floor + this.dragging.difference;
      }
    } else {
      if (isRTL) {
        value = this.positionToValue(newPos + this.dragging.lowLimit) + this.dragging.difference;
      } else {
        value = this.positionToValue(newPos - this.dragging.lowLimit) + this.dragging.difference;
      }
    }
    return this.roundStep(value);
  }
  onDragMove(event) {
    const newPos = this.getEventPosition(event);
    if (this.viewOptions.animate && !this.viewOptions.animateOnMove) {
      if (this.moving) {
        this.sliderElementAnimateClass = false;
      }
    }
    this.moving = true;
    let ceilLimit, floorLimit, floorHandleElement, ceilHandleElement;
    if (this.viewOptions.rightToLeft) {
      ceilLimit = this.dragging.lowLimit;
      floorLimit = this.dragging.highLimit;
      floorHandleElement = this.maxHandleElement;
      ceilHandleElement = this.minHandleElement;
    } else {
      ceilLimit = this.dragging.highLimit;
      floorLimit = this.dragging.lowLimit;
      floorHandleElement = this.minHandleElement;
      ceilHandleElement = this.maxHandleElement;
    }
    const isUnderFloorLimit = newPos <= floorLimit;
    const isOverCeilLimit = newPos >= this.maxHandlePosition - ceilLimit;
    let newMinValue;
    let newMaxValue;
    if (isUnderFloorLimit) {
      if (floorHandleElement.position === 0) {
        return;
      }
      newMinValue = this.getMinValue(newPos, true, false);
      newMaxValue = this.getMaxValue(newPos, true, false);
    } else if (isOverCeilLimit) {
      if (ceilHandleElement.position === this.maxHandlePosition) {
        return;
      }
      newMaxValue = this.getMaxValue(newPos, true, true);
      newMinValue = this.getMinValue(newPos, true, true);
    } else {
      newMinValue = this.getMinValue(newPos, false, false);
      newMaxValue = this.getMaxValue(newPos, false, false);
    }
    this.positionTrackingBar(newMinValue, newMaxValue);
  }
  // Set the new value and position for the entire bar
  positionTrackingBar(newMinValue, newMaxValue) {
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.minLimit) && newMinValue < this.viewOptions.minLimit) {
      newMinValue = this.viewOptions.minLimit;
      newMaxValue = MathHelper.roundToPrecisionLimit(newMinValue + this.dragging.difference, this.viewOptions.precisionLimit);
    }
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.maxLimit) && newMaxValue > this.viewOptions.maxLimit) {
      newMaxValue = this.viewOptions.maxLimit;
      newMinValue = MathHelper.roundToPrecisionLimit(newMaxValue - this.dragging.difference, this.viewOptions.precisionLimit);
    }
    this.viewLowValue = newMinValue;
    this.viewHighValue = newMaxValue;
    this.applyViewChange();
    this.updateHandles(PointerType.Min, this.valueToPosition(newMinValue));
    this.updateHandles(PointerType.Max, this.valueToPosition(newMaxValue));
  }
  // Set the new value and position to the current tracking handle
  positionTrackingHandle(newValue) {
    newValue = this.applyMinMaxLimit(newValue);
    if (this.range) {
      if (this.viewOptions.pushRange) {
        newValue = this.applyPushRange(newValue);
      } else {
        if (this.viewOptions.noSwitching) {
          if (this.currentTrackingPointer === PointerType.Min && newValue > this.viewHighValue) {
            newValue = this.applyMinMaxRange(this.viewHighValue);
          } else if (this.currentTrackingPointer === PointerType.Max && newValue < this.viewLowValue) {
            newValue = this.applyMinMaxRange(this.viewLowValue);
          }
        }
        newValue = this.applyMinMaxRange(newValue);
        /* This is to check if we need to switch the min and max handles */
        if (this.currentTrackingPointer === PointerType.Min && newValue > this.viewHighValue) {
          this.viewLowValue = this.viewHighValue;
          this.applyViewChange();
          this.updateHandles(PointerType.Min, this.maxHandleElement.position);
          this.updateAriaAttributes();
          this.currentTrackingPointer = PointerType.Max;
          this.minHandleElement.active = false;
          this.maxHandleElement.active = true;
          if (this.viewOptions.keyboardSupport) {
            this.maxHandleElement.focus();
          }
        } else if (this.currentTrackingPointer === PointerType.Max && newValue < this.viewLowValue) {
          this.viewHighValue = this.viewLowValue;
          this.applyViewChange();
          this.updateHandles(PointerType.Max, this.minHandleElement.position);
          this.updateAriaAttributes();
          this.currentTrackingPointer = PointerType.Min;
          this.maxHandleElement.active = false;
          this.minHandleElement.active = true;
          if (this.viewOptions.keyboardSupport) {
            this.minHandleElement.focus();
          }
        }
      }
    }
    if (this.getCurrentTrackingValue() !== newValue) {
      if (this.currentTrackingPointer === PointerType.Min) {
        this.viewLowValue = newValue;
        this.applyViewChange();
      } else if (this.currentTrackingPointer === PointerType.Max) {
        this.viewHighValue = newValue;
        this.applyViewChange();
      }
      this.updateHandles(this.currentTrackingPointer, this.valueToPosition(newValue));
      this.updateAriaAttributes();
    }
  }
  applyMinMaxLimit(newValue) {
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.minLimit) && newValue < this.viewOptions.minLimit) {
      return this.viewOptions.minLimit;
    }
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.maxLimit) && newValue > this.viewOptions.maxLimit) {
      return this.viewOptions.maxLimit;
    }
    return newValue;
  }
  applyMinMaxRange(newValue) {
    const oppositeValue = this.currentTrackingPointer === PointerType.Min ? this.viewHighValue : this.viewLowValue;
    const difference = Math.abs(newValue - oppositeValue);
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.minRange)) {
      if (difference < this.viewOptions.minRange) {
        if (this.currentTrackingPointer === PointerType.Min) {
          return MathHelper.roundToPrecisionLimit(this.viewHighValue - this.viewOptions.minRange, this.viewOptions.precisionLimit);
        } else if (this.currentTrackingPointer === PointerType.Max) {
          return MathHelper.roundToPrecisionLimit(this.viewLowValue + this.viewOptions.minRange, this.viewOptions.precisionLimit);
        }
      }
    }
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.maxRange)) {
      if (difference > this.viewOptions.maxRange) {
        if (this.currentTrackingPointer === PointerType.Min) {
          return MathHelper.roundToPrecisionLimit(this.viewHighValue - this.viewOptions.maxRange, this.viewOptions.precisionLimit);
        } else if (this.currentTrackingPointer === PointerType.Max) {
          return MathHelper.roundToPrecisionLimit(this.viewLowValue + this.viewOptions.maxRange, this.viewOptions.precisionLimit);
        }
      }
    }
    return newValue;
  }
  applyPushRange(newValue) {
    const difference = this.currentTrackingPointer === PointerType.Min ? this.viewHighValue - newValue : newValue - this.viewLowValue;
    const minRange = !ValueHelper.isNullOrUndefined(this.viewOptions.minRange) ? this.viewOptions.minRange : this.viewOptions.step;
    const maxRange = this.viewOptions.maxRange;
    // if smaller than minRange
    if (difference < minRange) {
      if (this.currentTrackingPointer === PointerType.Min) {
        this.viewHighValue = MathHelper.roundToPrecisionLimit(Math.min(newValue + minRange, this.viewOptions.ceil), this.viewOptions.precisionLimit);
        newValue = MathHelper.roundToPrecisionLimit(this.viewHighValue - minRange, this.viewOptions.precisionLimit);
        this.applyViewChange();
        this.updateHandles(PointerType.Max, this.valueToPosition(this.viewHighValue));
      } else if (this.currentTrackingPointer === PointerType.Max) {
        this.viewLowValue = MathHelper.roundToPrecisionLimit(Math.max(newValue - minRange, this.viewOptions.floor), this.viewOptions.precisionLimit);
        newValue = MathHelper.roundToPrecisionLimit(this.viewLowValue + minRange, this.viewOptions.precisionLimit);
        this.applyViewChange();
        this.updateHandles(PointerType.Min, this.valueToPosition(this.viewLowValue));
      }
      this.updateAriaAttributes();
    } else if (!ValueHelper.isNullOrUndefined(maxRange) && difference > maxRange) {
      // if greater than maxRange
      if (this.currentTrackingPointer === PointerType.Min) {
        this.viewHighValue = MathHelper.roundToPrecisionLimit(newValue + maxRange, this.viewOptions.precisionLimit);
        this.applyViewChange();
        this.updateHandles(PointerType.Max, this.valueToPosition(this.viewHighValue));
      } else if (this.currentTrackingPointer === PointerType.Max) {
        this.viewLowValue = MathHelper.roundToPrecisionLimit(newValue - maxRange, this.viewOptions.precisionLimit);
        this.applyViewChange();
        this.updateHandles(PointerType.Min, this.valueToPosition(this.viewLowValue));
      }
      this.updateAriaAttributes();
    }
    return newValue;
  }
  getChangeContext() {
    const changeContext = new ChangeContext();
    changeContext.pointerType = this.currentTrackingPointer;
    changeContext.value = +this.value;
    if (this.range) {
      changeContext.highValue = +this.highValue;
    }
    return changeContext;
  }
  static ɵfac = function SliderComponent_Factory(t) {
    return new (t || SliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](AllowUnsafeHtmlInSlider, 8));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SliderComponent,
    selectors: [["ngx-slider"]],
    contentQueries: function SliderComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tooltipTemplate = _t.first);
      }
    },
    viewQuery: function SliderComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5, SliderElementDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5, SliderElementDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5, SliderElementDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5, SliderElementDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5, SliderHandleDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, 5, SliderHandleDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, 5, SliderLabelDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c9, 5, SliderLabelDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c10, 5, SliderLabelDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c11, 5, SliderLabelDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c12, 5, SliderLabelDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c13, 5, SliderElementDirective);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.leftOuterSelectionBarElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rightOuterSelectionBarElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fullBarElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.selectionBarElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.minHandleElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.maxHandleElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.floorLabelElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ceilLabelElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.minHandleLabelElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.maxHandleLabelElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.combinedLabelElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ticksElement = _t.first);
      }
    },
    hostAttrs: [1, "ngx-slider"],
    hostVars: 8,
    hostBindings: function SliderComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function SliderComponent_resize_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.sliderElementDisabledAttr)("aria-label", ctx.sliderElementAriaLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("vertical", ctx.sliderElementVerticalClass)("animate", ctx.sliderElementAnimateClass)("with-legend", ctx.sliderElementWithLegendClass);
      }
    },
    inputs: {
      value: "value",
      highValue: "highValue",
      options: "options",
      manualRefresh: "manualRefresh",
      triggerFocus: "triggerFocus"
    },
    outputs: {
      valueChange: "valueChange",
      highValueChange: "highValueChange",
      userChangeStart: "userChangeStart",
      userChange: "userChange",
      userChangeEnd: "userChangeEnd"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([NGX_SLIDER_CONTROL_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 29,
    vars: 13,
    consts: [["leftOuterSelectionBar", ""], ["rightOuterSelectionBar", ""], ["fullBar", ""], ["selectionBar", ""], ["minHandle", ""], ["maxHandle", ""], ["floorLabel", ""], ["ceilLabel", ""], ["minHandleLabel", ""], ["maxHandleLabel", ""], ["combinedLabel", ""], ["ticksElement", ""], ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-left-out-selection"], [1, "ngx-slider-span", "ngx-slider-bar"], ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-right-out-selection"], ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-full-bar"], ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-selection-bar"], [1, "ngx-slider-span", "ngx-slider-bar", "ngx-slider-selection", 3, "ngStyle"], ["ngxSliderHandle", "", 1, "ngx-slider-span", "ngx-slider-pointer", "ngx-slider-pointer-min", 3, "ngStyle"], ["ngxSliderHandle", "", 1, "ngx-slider-span", "ngx-slider-pointer", "ngx-slider-pointer-max", 3, "ngStyle"], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-limit", "ngx-slider-floor"], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-limit", "ngx-slider-ceil"], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-model-value"], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-model-high"], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-combined"], ["ngxSliderElement", "", 1, "ngx-slider-ticks", 3, "hidden"], ["class", "ngx-slider-tick", 3, "ngClass", "ngStyle", 4, "ngFor", "ngForOf"], [1, "ngx-slider-tick", 3, "ngClass", "ngStyle"], [3, "template", "tooltip", "placement"], ["class", "ngx-slider-span ngx-slider-tick-value", 3, "template", "tooltip", "placement", "content", 4, "ngIf"], ["class", "ngx-slider-span ngx-slider-tick-legend", 3, "innerText", 4, "ngIf"], ["class", "ngx-slider-span ngx-slider-tick-legend", 3, "innerHTML", 4, "ngIf"], [1, "ngx-slider-span", "ngx-slider-tick-value", 3, "template", "tooltip", "placement", "content"], [1, "ngx-slider-span", "ngx-slider-tick-legend", 3, "innerText"], [1, "ngx-slider-span", "ngx-slider-tick-legend", 3, "innerHTML"]],
    template: function SliderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 14, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 15, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 16, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 18, 4)(14, "span", 19, 5)(16, "span", 20, 6)(18, "span", 21, 7)(20, "span", 22, 8)(22, "span", 23, 9)(24, "span", 24, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 25, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SliderComponent_span_28_Template, 5, 10, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ngx-slider-transparent", ctx.fullBarTransparentClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ngx-slider-draggable", ctx.selectionBarDraggableClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.barStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.minPointerStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.range ? "inherit" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.maxPointerStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ngx-slider-ticks-values-under", ctx.ticksUnderValuesClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showTicks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ticks);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, SliderElementDirective, SliderHandleDirective, SliderLabelDirective, TooltipWrapperComponent],
    styles: [".ngx-slider{display:inline-block;position:relative;height:4px;width:100%;margin:35px 0 15px;vertical-align:middle;-webkit-user-select:none;user-select:none;touch-action:pan-y}  .ngx-slider.with-legend{margin-bottom:40px}  .ngx-slider[disabled]{cursor:not-allowed}  .ngx-slider[disabled] .ngx-slider-pointer{cursor:not-allowed;background-color:#d8e0f3}  .ngx-slider[disabled] .ngx-slider-draggable{cursor:not-allowed}  .ngx-slider[disabled] .ngx-slider-selection{background:#8b91a2}  .ngx-slider[disabled] .ngx-slider-tick{cursor:not-allowed}  .ngx-slider[disabled] .ngx-slider-tick.ngx-slider-selected{background:#8b91a2}  .ngx-slider .ngx-slider-span{white-space:nowrap;position:absolute;display:inline-block}  .ngx-slider .ngx-slider-base{width:100%;height:100%;padding:0}  .ngx-slider .ngx-slider-bar-wrapper{left:0;box-sizing:border-box;margin-top:-16px;padding-top:16px;width:100%;height:32px;z-index:1}  .ngx-slider .ngx-slider-draggable{cursor:move}  .ngx-slider .ngx-slider-bar{left:0;width:100%;height:4px;z-index:1;background:#d8e0f3;border-radius:2px}  .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-transparent .ngx-slider-bar{background:transparent}  .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-left-out-selection .ngx-slider-bar{background:#df002d}  .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-right-out-selection .ngx-slider-bar{background:#03a688}  .ngx-slider .ngx-slider-selection{z-index:2;background:#0db9f0;border-radius:2px}  .ngx-slider .ngx-slider-pointer{cursor:pointer;width:32px;height:32px;top:-14px;background-color:#0db9f0;z-index:3;border-radius:16px}  .ngx-slider .ngx-slider-pointer:after{content:\"\";width:8px;height:8px;position:absolute;top:12px;left:12px;border-radius:4px;background:#fff}  .ngx-slider .ngx-slider-pointer:hover:after{background-color:#fff}  .ngx-slider .ngx-slider-pointer.ngx-slider-active{z-index:4}  .ngx-slider .ngx-slider-pointer.ngx-slider-active:after{background-color:#451aff}  .ngx-slider .ngx-slider-bubble{cursor:default;bottom:16px;padding:1px 3px;color:#55637d;font-size:16px}  .ngx-slider .ngx-slider-bubble.ngx-slider-limit{color:#55637d}  .ngx-slider .ngx-slider-ticks{box-sizing:border-box;width:100%;height:0;position:absolute;left:0;top:-3px;margin:0;z-index:1;list-style:none}  .ngx-slider .ngx-slider-ticks-values-under .ngx-slider-tick-value{top:auto;bottom:-36px}  .ngx-slider .ngx-slider-tick{text-align:center;cursor:pointer;width:10px;height:10px;background:#d8e0f3;border-radius:50%;position:absolute;top:0;left:0;margin-left:11px}  .ngx-slider .ngx-slider-tick.ngx-slider-selected{background:#0db9f0}  .ngx-slider .ngx-slider-tick-value{position:absolute;top:-34px;transform:translate(-50%)}  .ngx-slider .ngx-slider-tick-legend{position:absolute;top:24px;transform:translate(-50%);max-width:50px;white-space:normal}  .ngx-slider.vertical{position:relative;width:4px;height:100%;margin:0 20px;padding:0;vertical-align:baseline;touch-action:pan-x}  .ngx-slider.vertical .ngx-slider-base{width:100%;height:100%;padding:0}  .ngx-slider.vertical .ngx-slider-bar-wrapper{top:auto;left:0;margin:0 0 0 -16px;padding:0 0 0 16px;height:100%;width:32px}  .ngx-slider.vertical .ngx-slider-bar{bottom:0;left:auto;width:4px;height:100%}  .ngx-slider.vertical .ngx-slider-pointer{left:-14px!important;top:auto;bottom:0}  .ngx-slider.vertical .ngx-slider-bubble{left:16px!important;bottom:0}  .ngx-slider.vertical .ngx-slider-ticks{height:100%;width:0;left:-3px;top:0;z-index:1}  .ngx-slider.vertical .ngx-slider-tick{vertical-align:middle;margin-left:auto;margin-top:11px}  .ngx-slider.vertical .ngx-slider-tick-value{left:24px;top:auto;transform:translateY(-28%)}  .ngx-slider.vertical .ngx-slider-tick-legend{top:auto;right:24px;transform:translateY(-28%);max-width:none;white-space:nowrap}  .ngx-slider.vertical .ngx-slider-ticks-values-under .ngx-slider-tick-value{bottom:auto;left:auto;right:24px}  .ngx-slider *{transition:none}  .ngx-slider.animate .ngx-slider-bar-wrapper{transition:all linear .3s}  .ngx-slider.animate .ngx-slider-selection{transition:background-color linear .3s}  .ngx-slider.animate .ngx-slider-pointer{transition:all linear .3s}  .ngx-slider.animate .ngx-slider-pointer:after{transition:all linear .3s}  .ngx-slider.animate .ngx-slider-bubble{transition:all linear .3s}  .ngx-slider.animate .ngx-slider-bubble.ngx-slider-limit{transition:opacity linear .3s}  .ngx-slider.animate .ngx-slider-bubble.ngx-slider-combined{transition:opacity linear .3s}  .ngx-slider.animate .ngx-slider-tick{transition:background-color linear .3s}"],
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: "ngx-slider",
      host: {
        class: "ngx-slider"
      },
      providers: [NGX_SLIDER_CONTROL_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<!-- // 0 Left selection bar outside two handles -->\n<span ngxSliderElement #leftOuterSelectionBar class=\"ngx-slider-span ngx-slider-bar-wrapper ngx-slider-left-out-selection\">\n  <span class=\"ngx-slider-span ngx-slider-bar\"></span>\n</span>\n<!-- // 1 Right selection bar outside two handles -->\n<span ngxSliderElement #rightOuterSelectionBar class=\"ngx-slider-span ngx-slider-bar-wrapper ngx-slider-right-out-selection\">\n  <span class=\"ngx-slider-span ngx-slider-bar\"></span>\n</span>\n<!-- // 2 The whole slider bar -->\n<span ngxSliderElement #fullBar [class.ngx-slider-transparent]=\"fullBarTransparentClass\" class=\"ngx-slider-span ngx-slider-bar-wrapper ngx-slider-full-bar\">\n  <span class=\"ngx-slider-span ngx-slider-bar\"></span>\n</span>\n<!-- // 3 Selection bar between two handles -->\n<span ngxSliderElement #selectionBar [class.ngx-slider-draggable]=\"selectionBarDraggableClass\" class=\"ngx-slider-span ngx-slider-bar-wrapper ngx-slider-selection-bar\">\n  <span class=\"ngx-slider-span ngx-slider-bar ngx-slider-selection\" [ngStyle]=\"barStyle\"></span>\n</span>\n<!-- // 4 Low slider handle -->\n<span ngxSliderHandle #minHandle class=\"ngx-slider-span ngx-slider-pointer ngx-slider-pointer-min\" [ngStyle]=minPointerStyle></span>\n<!-- // 5 High slider handle -->\n<span ngxSliderHandle #maxHandle [style.display]=\"range ? 'inherit' : 'none'\" class=\"ngx-slider-span ngx-slider-pointer ngx-slider-pointer-max\" [ngStyle]=maxPointerStyle></span>\n<!-- // 6 Floor label -->\n<span ngxSliderLabel #floorLabel class=\"ngx-slider-span ngx-slider-bubble ngx-slider-limit ngx-slider-floor\"></span>\n<!-- // 7 Ceiling label -->\n<span ngxSliderLabel #ceilLabel class=\"ngx-slider-span ngx-slider-bubble ngx-slider-limit ngx-slider-ceil\"></span>\n<!-- // 8 Label above the low slider handle -->\n<span ngxSliderLabel #minHandleLabel class=\"ngx-slider-span ngx-slider-bubble ngx-slider-model-value\"></span>\n<!-- // 9 Label above the high slider handle -->\n<span ngxSliderLabel #maxHandleLabel class=\"ngx-slider-span ngx-slider-bubble ngx-slider-model-high\"></span>\n<!-- // 10 Combined range label when the slider handles are close ex. 15 - 17 -->\n<span ngxSliderLabel #combinedLabel class=\"ngx-slider-span ngx-slider-bubble ngx-slider-combined\"></span>\n<!-- // 11 The ticks -->\n<span ngxSliderElement #ticksElement [hidden]=\"!showTicks\" [class.ngx-slider-ticks-values-under]=\"ticksUnderValuesClass\" class=\"ngx-slider-ticks\">\n  <span *ngFor=\"let t of ticks\" class=\"ngx-slider-tick\" [ngClass]=\"{'ngx-slider-selected': t.selected}\" [ngStyle]=\"t.style\">\n    <ngx-slider-tooltip-wrapper [template]=\"tooltipTemplate\" [tooltip]=\"t.tooltip\" [placement]=\"t.tooltipPlacement\"></ngx-slider-tooltip-wrapper>\n    <ngx-slider-tooltip-wrapper *ngIf=\"t.value != null\" class=\"ngx-slider-span ngx-slider-tick-value\"\n        [template]=\"tooltipTemplate\" [tooltip]=\"t.valueTooltip\" [placement]=\"t.valueTooltipPlacement\" [content]=\"t.value\"></ngx-slider-tooltip-wrapper>\n    <span *ngIf=\"t.legend != null && allowUnsafeHtmlInSlider === false\" class=\"ngx-slider-span ngx-slider-tick-legend\" [innerText]=\"t.legend\"></span>\n    <span *ngIf=\"t.legend != null && (allowUnsafeHtmlInSlider == null || allowUnsafeHtmlInSlider)\" class=\"ngx-slider-span ngx-slider-tick-legend\" [innerHTML]=\"t.legend\"></span>\n  </span>\n</span>",
      styles: ["::ng-deep .ngx-slider{display:inline-block;position:relative;height:4px;width:100%;margin:35px 0 15px;vertical-align:middle;-webkit-user-select:none;user-select:none;touch-action:pan-y}::ng-deep .ngx-slider.with-legend{margin-bottom:40px}::ng-deep .ngx-slider[disabled]{cursor:not-allowed}::ng-deep .ngx-slider[disabled] .ngx-slider-pointer{cursor:not-allowed;background-color:#d8e0f3}::ng-deep .ngx-slider[disabled] .ngx-slider-draggable{cursor:not-allowed}::ng-deep .ngx-slider[disabled] .ngx-slider-selection{background:#8b91a2}::ng-deep .ngx-slider[disabled] .ngx-slider-tick{cursor:not-allowed}::ng-deep .ngx-slider[disabled] .ngx-slider-tick.ngx-slider-selected{background:#8b91a2}::ng-deep .ngx-slider .ngx-slider-span{white-space:nowrap;position:absolute;display:inline-block}::ng-deep .ngx-slider .ngx-slider-base{width:100%;height:100%;padding:0}::ng-deep .ngx-slider .ngx-slider-bar-wrapper{left:0;box-sizing:border-box;margin-top:-16px;padding-top:16px;width:100%;height:32px;z-index:1}::ng-deep .ngx-slider .ngx-slider-draggable{cursor:move}::ng-deep .ngx-slider .ngx-slider-bar{left:0;width:100%;height:4px;z-index:1;background:#d8e0f3;border-radius:2px}::ng-deep .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-transparent .ngx-slider-bar{background:transparent}::ng-deep .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-left-out-selection .ngx-slider-bar{background:#df002d}::ng-deep .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-right-out-selection .ngx-slider-bar{background:#03a688}::ng-deep .ngx-slider .ngx-slider-selection{z-index:2;background:#0db9f0;border-radius:2px}::ng-deep .ngx-slider .ngx-slider-pointer{cursor:pointer;width:32px;height:32px;top:-14px;background-color:#0db9f0;z-index:3;border-radius:16px}::ng-deep .ngx-slider .ngx-slider-pointer:after{content:\"\";width:8px;height:8px;position:absolute;top:12px;left:12px;border-radius:4px;background:#fff}::ng-deep .ngx-slider .ngx-slider-pointer:hover:after{background-color:#fff}::ng-deep .ngx-slider .ngx-slider-pointer.ngx-slider-active{z-index:4}::ng-deep .ngx-slider .ngx-slider-pointer.ngx-slider-active:after{background-color:#451aff}::ng-deep .ngx-slider .ngx-slider-bubble{cursor:default;bottom:16px;padding:1px 3px;color:#55637d;font-size:16px}::ng-deep .ngx-slider .ngx-slider-bubble.ngx-slider-limit{color:#55637d}::ng-deep .ngx-slider .ngx-slider-ticks{box-sizing:border-box;width:100%;height:0;position:absolute;left:0;top:-3px;margin:0;z-index:1;list-style:none}::ng-deep .ngx-slider .ngx-slider-ticks-values-under .ngx-slider-tick-value{top:auto;bottom:-36px}::ng-deep .ngx-slider .ngx-slider-tick{text-align:center;cursor:pointer;width:10px;height:10px;background:#d8e0f3;border-radius:50%;position:absolute;top:0;left:0;margin-left:11px}::ng-deep .ngx-slider .ngx-slider-tick.ngx-slider-selected{background:#0db9f0}::ng-deep .ngx-slider .ngx-slider-tick-value{position:absolute;top:-34px;transform:translate(-50%)}::ng-deep .ngx-slider .ngx-slider-tick-legend{position:absolute;top:24px;transform:translate(-50%);max-width:50px;white-space:normal}::ng-deep .ngx-slider.vertical{position:relative;width:4px;height:100%;margin:0 20px;padding:0;vertical-align:baseline;touch-action:pan-x}::ng-deep .ngx-slider.vertical .ngx-slider-base{width:100%;height:100%;padding:0}::ng-deep .ngx-slider.vertical .ngx-slider-bar-wrapper{top:auto;left:0;margin:0 0 0 -16px;padding:0 0 0 16px;height:100%;width:32px}::ng-deep .ngx-slider.vertical .ngx-slider-bar{bottom:0;left:auto;width:4px;height:100%}::ng-deep .ngx-slider.vertical .ngx-slider-pointer{left:-14px!important;top:auto;bottom:0}::ng-deep .ngx-slider.vertical .ngx-slider-bubble{left:16px!important;bottom:0}::ng-deep .ngx-slider.vertical .ngx-slider-ticks{height:100%;width:0;left:-3px;top:0;z-index:1}::ng-deep .ngx-slider.vertical .ngx-slider-tick{vertical-align:middle;margin-left:auto;margin-top:11px}::ng-deep .ngx-slider.vertical .ngx-slider-tick-value{left:24px;top:auto;transform:translateY(-28%)}::ng-deep .ngx-slider.vertical .ngx-slider-tick-legend{top:auto;right:24px;transform:translateY(-28%);max-width:none;white-space:nowrap}::ng-deep .ngx-slider.vertical .ngx-slider-ticks-values-under .ngx-slider-tick-value{bottom:auto;left:auto;right:24px}::ng-deep .ngx-slider *{transition:none}::ng-deep .ngx-slider.animate .ngx-slider-bar-wrapper{transition:all linear .3s}::ng-deep .ngx-slider.animate .ngx-slider-selection{transition:background-color linear .3s}::ng-deep .ngx-slider.animate .ngx-slider-pointer{transition:all linear .3s}::ng-deep .ngx-slider.animate .ngx-slider-pointer:after{transition:all linear .3s}::ng-deep .ngx-slider.animate .ngx-slider-bubble{transition:all linear .3s}::ng-deep .ngx-slider.animate .ngx-slider-bubble.ngx-slider-limit{transition:opacity linear .3s}::ng-deep .ngx-slider.animate .ngx-slider-bubble.ngx-slider-combined{transition:opacity linear .3s}::ng-deep .ngx-slider.animate .ngx-slider-tick{transition:background-color linear .3s}\n"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [AllowUnsafeHtmlInSlider]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }], {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    valueChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    highValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    highValueChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    userChangeStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    userChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    userChangeEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    manualRefresh: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    triggerFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    leftOuterSelectionBarElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ["leftOuterSelectionBar", {
        read: SliderElementDirective,
        static: false
      }]
    }],
    rightOuterSelectionBarElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ["rightOuterSelectionBar", {
        read: SliderElementDirective,
        static: false
      }]
    }],
    fullBarElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ["fullBar", {
        read: SliderElementDirective,
        static: false
      }]
    }],
    selectionBarElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ["selectionBar", {
        read: SliderElementDirective,
        static: false
      }]
    }],
    minHandleElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ["minHandle", {
        read: SliderHandleDirective,
        static: false
      }]
    }],
    maxHandleElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ["maxHandle", {
        read: SliderHandleDirective,
        static: false
      }]
    }],
    floorLabelElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ["floorLabel", {
        read: SliderLabelDirective,
        static: false
      }]
    }],
    ceilLabelElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ["ceilLabel", {
        read: SliderLabelDirective,
        static: false
      }]
    }],
    minHandleLabelElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ["minHandleLabel", {
        read: SliderLabelDirective,
        static: false
      }]
    }],
    maxHandleLabelElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ["maxHandleLabel", {
        read: SliderLabelDirective,
        static: false
      }]
    }],
    combinedLabelElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ["combinedLabel", {
        read: SliderLabelDirective,
        static: false
      }]
    }],
    ticksElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ["ticksElement", {
        read: SliderElementDirective,
        static: false
      }]
    }],
    tooltipTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: ["tooltipTemplate", {
        static: false
      }]
    }],
    sliderElementVerticalClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ["class.vertical"]
    }],
    sliderElementAnimateClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ["class.animate"]
    }],
    sliderElementWithLegendClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ["class.with-legend"]
    }],
    sliderElementDisabledAttr: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ["attr.disabled"]
    }],
    sliderElementAriaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ["attr.aria-label"]
    }],
    onResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ["window:resize", ["$event"]]
    }]
  });
})();

/**
 * NgxSlider module
 *
 * The module exports the slider component
 */
class NgxSliderModule {
  static ɵfac = function NgxSliderModule_Factory(t) {
    return new (t || NgxSliderModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: NgxSliderModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxSliderModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
      declarations: [SliderComponent, SliderElementDirective, SliderHandleDirective, SliderLabelDirective, TooltipWrapperComponent],
      exports: [SliderComponent]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_shop_shop_module_ts.js.map