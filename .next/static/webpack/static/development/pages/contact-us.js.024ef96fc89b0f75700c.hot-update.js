webpackHotUpdate("static\\development\\pages\\contact-us.js",{

/***/ "./components/navigation.js":
/*!**********************************!*\
  !*** ./components/navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _public_media_logoNagda_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/media/logoNagda.svg */ "./public/media/logoNagda.svg");
/* harmony import */ var _public_media_logoNagda_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_media_logoNagda_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_media_logoRectengle_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/media/logoRectengle.svg */ "./public/media/logoRectengle.svg");
/* harmony import */ var _public_media_logoRectengle_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_media_logoRectengle_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "E:\\nagda\\components\\navigation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;







var AppNavBar =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AppNavBar, _Component);

  function AppNavBar() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppNavBar);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AppNavBar).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AppNavBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.props.state);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.state.activeLink === 'home') {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"], {
          expand: "lg",
          className: "py-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, __jsx("div", {
          className: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"].Brand, {
          href: "/home",
          className: "d-flex flex-row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, __jsx("div", {
          className: "position-relative",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, __jsx("img", {
          src: _public_media_logoRectengle_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
          className: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }), __jsx("img", {
          src: _public_media_logoNagda_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
          className: "position-absolute nagaaLogo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        })), __jsx("h2", {
          className: "text-muted mt-4 mr-2 Cairo-bold nagda-brand-h2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, "\u0646\u062C\u062F\u0629"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"].Toggle, {
          "aria-controls": "basic-navbar-nav",
          className: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"].Collapse, {
          id: "basic-navbar-nav ",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"], {
          className: "mr-auto text-lg-right text-center mt-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "/home",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, __jsx("a", {
          className: "".concat(this.props.state.activeLink == 'home' ? 'active' : "", " nav-link"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: '/web-app',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, __jsx("a", {
          className: "nav-link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, "\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0648\u064A\u0628")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: '/web-app',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, __jsx("a", {
          className: "nav-link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: '/sign-up',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, __jsx("a", {
          className: "".concat(this.props.state.activeLink == 'sign-up' ? 'active' : "", " nav-link"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, "\u062A\u0633\u062C\u064A\u0644 \u062C\u062F\u064A\u062F")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: '/contact-us',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, __jsx("a", {
          className: "".concat(this.props.state.activeLink == 'contact us' ? 'active' : "", " nav-link"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: '/who-we-are',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, __jsx("a", {
          className: "".concat(this.props.state.activeLink == 'who-we-are' ? 'active' : "", " nav-link"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, "\u0645\u0646 \u0646\u062D\u0646")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: '/faq',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, __jsx("a", {
          className: "".concat(this.props.state.activeLink == 'faq' ? 'active' : "", " nav-link"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, "\u0627\u0633\u0626\u0644\u0629 \u0645\u0643\u0631\u0631\u0647")))))));
      }

      return __jsx(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"], {
        expand: "lg",
        className: "py-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx("div", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"].Brand, {
        href: "/home",
        className: "d-flex flex-row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx("div", {
        className: "position-relative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx("img", {
        src: _public_media_logoRectengle_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), __jsx("img", {
        src: _public_media_logoNagda_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
        className: "position-absolute nagaaLogo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      })), __jsx("h2", {
        className: "text-muted mt-4 mr-2 Cairo-bold nagda-brand-h2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "\u0646\u062C\u062F\u0629"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"].Toggle, {
        "aria-controls": "basic-navbar-nav",
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Navbar"].Collapse, {
        id: "basic-navbar-nav ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"], {
        className: "mr-auto text-lg-right text-center mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, __jsx("a", {
        className: "".concat(this.props.state.activeLink == 'home' ? 'active' : "", " nav-link secondary-nav-link"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: '/web-app',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link secondary-nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "\u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0648\u064A\u0628")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: '/web-app',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, __jsx("a", {
        className: "nav-link secondary-nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: '/sign-up',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, __jsx("a", {
        className: "".concat(this.props.state.activeLink == 'sign-up' ? 'active' : "", " nav-link secondary-nav-link"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "\u062A\u0633\u062C\u064A\u0644 \u062C\u062F\u064A\u062F")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: '/contact-us',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, __jsx("a", {
        className: "".concat(this.props.state.activeLink == 'contact_us' ? 'active' : "", " nav-link secondary-nav-link"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: '/who-we-are',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, __jsx("a", {
        className: "".concat(this.props.state.activeLink == 'who-we-are' ? 'active' : "", " nav-link secondary-nav-link "),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "\u0645\u0646 \u0646\u062D\u0646")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: '/faq',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, __jsx("a", {
        className: "".concat(this.props.state.activeLink == 'faq' ? 'active' : "", " nav-link secondary-nav-link"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "\u0627\u0633\u0626\u0644\u0629 \u0645\u0643\u0631\u0631\u0647")))))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var store = _ref.store,
          ctx = _ref.ctx;
    }
  }]);

  return AppNavBar;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var stateToProps = function stateToProps(state) {
  return {
    state: state
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(stateToProps)(AppNavBar));

/***/ })

})
//# sourceMappingURL=contact-us.js.024ef96fc89b0f75700c.hot-update.js.map