webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Stats.js":
/*!*****************************!*\
  !*** ./components/Stats.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stats; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_useStats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/useStats */ "./utils/useStats.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var victory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! victory */ "./node_modules/victory/es/index.js");

var _jsxFileName = "/home/nazmul/WebProjects/coronaAPI-react/components/Stats.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background: grey;\n    font-size: 2rem;\n    background: #f2f2f2;\n    border-radius: 2rem;\n    display: grid;\n    align-items: center;\n    justify-items: center;\n    text-align: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 1rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var StatGrid = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var StatBlock = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());
function Stats(_ref) {
  var url = _ref.url;

  var _useStats = Object(_utils_useStats__WEBPACK_IMPORTED_MODULE_2__["default"])(url),
      stats = _useStats.stats,
      loading = _useStats.loading,
      error = _useStats.error; // console.log(url, stats);


  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Loading...");
  if (error) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Error...");
  var viewStats = stats ? // <StatGrid>
  //     <StatBlock>
  //         <h3>Confirmed: </h3>
  //         <span>
  //             {stats.confirmed ? stats.confirmed.value : "Not Found Yet"}
  //         </span>
  //     </StatBlock>
  //     <StatBlock>
  //         <h3>Deaths: </h3>
  //         <span>
  //             {stats.deaths ? stats.deaths.value : "Not Found Yet"}
  //         </span>
  //     </StatBlock>
  //     <StatBlock>
  //         <h3>Recovered: </h3>
  //         <span>
  //             {stats.recovered ? stats.recovered.value : "Not Found Yet"}
  //         </span>
  //     </StatBlock>
  // </StatGrid>
  __jsx(victory__WEBPACK_IMPORTED_MODULE_4__["VictoryPie"], {
    data: [{
      x: "Confirmed",
      y: stats.confirmed.value
    }, {
      x: "Deaths",
      y: stats.deaths.value
    }, {
      x: "Recovered",
      y: stats.recovered.value
    }],
    animate: {
      duration: 2000
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }) : null;
  return viewStats;
}

/***/ })

})
//# sourceMappingURL=index.js.715e3bb8775a5abbe361.hot-update.js.map