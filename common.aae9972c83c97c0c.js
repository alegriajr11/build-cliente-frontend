"use strict";
(self["webpackChunklumar"] = self["webpackChunklumar"] || []).push([["common"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/shared/data/slider.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogSlider: () => (/* binding */ BlogSlider),
/* harmony export */   CategorySlider: () => (/* binding */ CategorySlider),
/* harmony export */   CollectionSlider: () => (/* binding */ CollectionSlider),
/* harmony export */   CompareSlider: () => (/* binding */ CompareSlider),
/* harmony export */   HomeSlider: () => (/* binding */ HomeSlider),
/* harmony export */   InstaSlider: () => (/* binding */ InstaSlider),
/* harmony export */   LogoSlider: () => (/* binding */ LogoSlider),
/* harmony export */   NewProductSlider: () => (/* binding */ NewProductSlider),
/* harmony export */   ProductDetailsMainSlider: () => (/* binding */ ProductDetailsMainSlider),
/* harmony export */   ProductDetailsThumbSlider: () => (/* binding */ ProductDetailsThumbSlider),
/* harmony export */   ProductOneSlider: () => (/* binding */ ProductOneSlider),
/* harmony export */   ProductSlider: () => (/* binding */ ProductSlider),
/* harmony export */   TeamSlider: () => (/* binding */ TeamSlider),
/* harmony export */   TestimonialSlider: () => (/* binding */ TestimonialSlider)
/* harmony export */ });
// Home Slider
let HomeSlider = {
  loop: true,
  nav: true,
  dots: false,
  navContainerClass: 'owl-nav',
  navClass: ['owl-prev', 'owl-next'],
  navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 1
    },
    740: {
      items: 1
    },
    940: {
      items: 1
    }
  }
};
// Blog Slider
let BlogSlider = {
  loop: true,
  dots: false,
  navSpeed: 300,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 2
    },
    940: {
      items: 3
    },
    1200: {
      items: 3
    }
  }
};
// Insta Slider
let InstaSlider = {
  loop: true,
  dots: false,
  navSpeed: 300,
  responsive: {
    740: {
      items: 3
    },
    940: {
      items: 6
    },
    1200: {
      items: 6
    }
  }
};
// Logo Slider
let LogoSlider = {
  loop: true,
  dots: false,
  navSpeed: 300,
  responsive: {
    767: {
      items: 5
    },
    576: {
      items: 4
    },
    480: {
      items: 3
    },
    0: {
      items: 2
    }
  }
};
// Collection Slider
let CollectionSlider = {
  loop: true,
  dots: false,
  navSpeed: 300,
  responsive: {
    991: {
      items: 4
    },
    767: {
      items: 3
    },
    586: {
      items: 2
    },
    0: {
      items: 1
    }
  }
};
// Category Slider
let CategorySlider = {
  loop: true,
  dots: false,
  navSpeed: 300,
  responsive: {
    1024: {
      items: 6
    },
    767: {
      items: 5
    },
    576: {
      items: 5
    },
    480: {
      items: 3
    },
    0: {
      items: 2
    }
  }
};
// Testimonial Slider
let TestimonialSlider = {
  loop: true,
  dots: false,
  navSpeed: 300,
  responsive: {
    991: {
      items: 2
    },
    0: {
      items: 1
    }
  }
};
// Team Slider
let TeamSlider = {
  loop: true,
  dots: false,
  navSpeed: 300,
  responsive: {
    991: {
      items: 4
    },
    767: {
      items: 3
    },
    586: {
      items: 2
    },
    0: {
      items: 2
    }
  }
};
// Compare Slider
let CompareSlider = {
  loop: true,
  dots: false,
  navSpeed: 300,
  responsive: {
    991: {
      items: 4
    },
    767: {
      items: 3
    },
    586: {
      items: 2
    },
    0: {
      items: 1
    }
  }
};
// Product Slider
let ProductSlider = {
  loop: false,
  dots: true,
  navContainerClass: 'owl-nav',
  navClass: ['owl-prev', 'owl-next'],
  navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
  navSpeed: 300,
  autoHeight: true,
  responsive: {
    991: {
      items: 4
    },
    767: {
      items: 3
    },
    420: {
      items: 2
    },
    0: {
      items: 1
    }
  }
};
// Product Slider
let ProductOneSlider = {
  items: 1,
  loop: true,
  dots: false,
  navSpeed: 300
};
// New Product Slider
let NewProductSlider = {
  items: 1,
  loop: true,
  nav: true,
  dots: false,
  navContainerClass: 'owl-nav',
  navClass: ['owl-prev', 'owl-next'],
  navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>']
};
// Product Details Main Slider
let ProductDetailsMainSlider = {
  items: 1,
  nav: false,
  dots: false,
  autoplay: false,
  slideSpeed: 300,
  loop: true
};
// Product Details Thumb Slider
let ProductDetailsThumbSlider = {
  // items: 3,                  // Número de elementos a mostrar por defecto
  // loop: true,                // Hacer que el carrusel vuelva al principio al llegar al final
  // nav: true,                 // Habilitar los controles de navegación
  // margin: 10,                // Margen entre los elementos
  // dots: true,                // Mostrar puntos de navegación
  // responsive: {
  //     0: {
  //         items: 2          
  //     },
  //     600: {
  //         items: 2          
  //     },
  //     1000: {
  //         items: 3           
  //     }
  // }
  loop: true,
  nav: true,
  dots: false,
  navContainerClass: 'owl-nav',
  navClass: ['owl-prev', 'owl-next'],
  navText: ['', ''],
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 3
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=common.aae9972c83c97c0c.js.map