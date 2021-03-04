webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_CurrencySelect_CurrencySelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/CurrencySelect/CurrencySelect */ "./src/components/CurrencySelect/CurrencySelect.jsx");


var _jsxFileName = "C:\\wamp\\www\\react\\currencyOver\\pages\\index.js",
    _s = $RefreshSig$();




function Page() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("USD"),
      currencyFrom = _useState[0],
      setCurrencyFrom = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("USD"),
      currencyTo = _useState2[0],
      setCurrencyTo = _useState2[1];

  function handleChangeFrom(e) {
    setCurrencyFrom(e.target.value);
  }

  function handleChangeTo(e) {
    setCurrencyTo(e.target.value);
  }

  function handleConvert() {
    //alert("Converting " + currencyFrom + " to " + currencyTo);
    console.log("Converting");
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: "/images/logo.png",
      style: {
        width: 250,
        margin: "0 auto",
        display: "block"
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_CurrencySelect_CurrencySelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: currencyFrom,
      handleChange: handleChangeFrom
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), " to", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_CurrencySelect_CurrencySelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: currencyTo,
      handleChange: handleChangeTo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: function onClick() {
        return alert("Converting");
      },
      children: "Convert"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Converting ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: currencyFrom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 20
      }, this), " to", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: currencyTo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), "."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

_s(Page, "m0NIKZvSkZZjA90WEiTjc2DLf4M=");

_c = Page;
/* harmony default export */ __webpack_exports__["default"] = (Page);

var _c;

$RefreshReg$(_c, "Page");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUGFnZSIsInVzZVN0YXRlIiwiY3VycmVuY3lGcm9tIiwic2V0Q3VycmVuY3lGcm9tIiwiY3VycmVuY3lUbyIsInNldEN1cnJlbmN5VG8iLCJoYW5kbGVDaGFuZ2VGcm9tIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlVG8iLCJoYW5kbGVDb252ZXJ0IiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwibWFyZ2luIiwiZGlzcGxheSIsImFsZXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDMEJDLHNEQUFRLENBQUMsS0FBRCxDQURsQztBQUFBLE1BQ1BDLFlBRE87QUFBQSxNQUNPQyxlQURQOztBQUFBLG1CQUVzQkYsc0RBQVEsQ0FBQyxLQUFELENBRjlCO0FBQUEsTUFFUEcsVUFGTztBQUFBLE1BRUtDLGFBRkw7O0FBSWQsV0FBU0MsZ0JBQVQsQ0FBMEJDLENBQTFCLEVBQTZCO0FBQzNCSixtQkFBZSxDQUFDSSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQ0Q7O0FBRUQsV0FBU0MsY0FBVCxDQUF3QkgsQ0FBeEIsRUFBMkI7QUFDekJGLGlCQUFhLENBQUNFLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWI7QUFDRDs7QUFFRCxXQUFTRSxhQUFULEdBQXlCO0FBQ3ZCO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFO0FBQ0UsU0FBRyxFQUFDLGtCQUROO0FBRUUsV0FBSyxFQUFFO0FBQUVDLGFBQUssRUFBRSxHQUFUO0FBQWNDLGNBQU0sRUFBRSxRQUF0QjtBQUFnQ0MsZUFBTyxFQUFFO0FBQXpDO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0UscUVBQUMscUZBQUQ7QUFBZ0IsV0FBSyxFQUFFZCxZQUF2QjtBQUFxQyxrQkFBWSxFQUFFSTtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsU0FLNkUsR0FMN0UsZUFNRSxxRUFBQyxxRkFBRDtBQUFnQixXQUFLLEVBQUVGLFVBQXZCO0FBQW1DLGtCQUFZLEVBQUVNO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQU9FO0FBQVEsYUFBTyxFQUFFO0FBQUEsZUFBTU8sS0FBSyxDQUFDLFlBQUQsQ0FBWDtBQUFBLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFRRTtBQUFBLDZDQUNhO0FBQUEsa0JBQVNmO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURiLFNBQ2dELEdBRGhELGVBRUU7QUFBQSxrQkFBU0U7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRDs7R0FoQ1FKLEk7O0tBQUFBLEk7QUFrQ01BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJhYWVhZWYzYTlkZTM1YWNjY2UzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ3VycmVuY3lTZWxlY3QgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0N1cnJlbmN5U2VsZWN0L0N1cnJlbmN5U2VsZWN0XCI7XHJcblxyXG5mdW5jdGlvbiBQYWdlKCkge1xyXG4gIGNvbnN0IFtjdXJyZW5jeUZyb20sIHNldEN1cnJlbmN5RnJvbV0gPSB1c2VTdGF0ZShcIlVTRFwiKTtcclxuICBjb25zdCBbY3VycmVuY3lUbywgc2V0Q3VycmVuY3lUb10gPSB1c2VTdGF0ZShcIlVTRFwiKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlRnJvbShlKSB7XHJcbiAgICBzZXRDdXJyZW5jeUZyb20oZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlVG8oZSkge1xyXG4gICAgc2V0Q3VycmVuY3lUbyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDb252ZXJ0KCkge1xyXG4gICAgLy9hbGVydChcIkNvbnZlcnRpbmcgXCIgKyBjdXJyZW5jeUZyb20gKyBcIiB0byBcIiArIGN1cnJlbmN5VG8pO1xyXG4gICAgY29uc29sZS5sb2coXCJDb252ZXJ0aW5nXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCJcclxuICAgICAgICBzdHlsZT17eyB3aWR0aDogMjUwLCBtYXJnaW46IFwiMCBhdXRvXCIsIGRpc3BsYXk6IFwiYmxvY2tcIiB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8Q3VycmVuY3lTZWxlY3QgdmFsdWU9e2N1cnJlbmN5RnJvbX0gaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2VGcm9tfSAvPiB0b3tcIiBcIn1cclxuICAgICAgPEN1cnJlbmN5U2VsZWN0IHZhbHVlPXtjdXJyZW5jeVRvfSBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZVRvfSAvPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGFsZXJ0KFwiQ29udmVydGluZ1wiKX0+Q29udmVydDwvYnV0dG9uPlxyXG4gICAgICA8cD5cclxuICAgICAgICBDb252ZXJ0aW5nIDxzdHJvbmc+e2N1cnJlbmN5RnJvbX08L3N0cm9uZz4gdG97XCIgXCJ9XHJcbiAgICAgICAgPHN0cm9uZz57Y3VycmVuY3lUb308L3N0cm9uZz4uXHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=