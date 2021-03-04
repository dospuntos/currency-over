webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      result = _useState3[0],
      setResult = _useState3[1];
  /* const fetchData = async () => {
    const reqUrl =
      "https://api.exchangeratesapi.io/latest?symbols=" +
      currencyFrom +
      "," +
      currencyTo;
      console.log(reqUrl);
    const req = await fetch(reqUrl);
    const newData = await req.json();
      return setResult(newData.results);
  }; */


  function handleChangeFrom(e) {
    setCurrencyFrom(e.target.value);
  }

  function handleChangeTo(e) {
    setCurrencyTo(e.target.value);
  }

  function handleConvert() {
    fetchData();
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
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_CurrencySelect_CurrencySelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: currencyFrom,
      handleChange: handleChangeFrom
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), " to", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_CurrencySelect_CurrencySelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: currencyTo,
      handleChange: handleChangeTo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: handleConvert,
      children: "Convert"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Converting ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: currencyFrom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 20
      }, this), " to", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: currencyTo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), "."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: JSON.stringify(result)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

_s(Page, "Rrgqb4n69M/lVSuDyeJpFDpQhVk=");

_c = Page;
var __N_SSP = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUGFnZSIsInVzZVN0YXRlIiwiY3VycmVuY3lGcm9tIiwic2V0Q3VycmVuY3lGcm9tIiwiY3VycmVuY3lUbyIsInNldEN1cnJlbmN5VG8iLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJoYW5kbGVDaGFuZ2VGcm9tIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlVG8iLCJoYW5kbGVDb252ZXJ0IiwiZmV0Y2hEYXRhIiwid2lkdGgiLCJtYXJnaW4iLCJkaXNwbGF5IiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUMwQkMsc0RBQVEsQ0FBQyxLQUFELENBRGxDO0FBQUEsTUFDUEMsWUFETztBQUFBLE1BQ09DLGVBRFA7O0FBQUEsbUJBRXNCRixzREFBUSxDQUFDLEtBQUQsQ0FGOUI7QUFBQSxNQUVQRyxVQUZPO0FBQUEsTUFFS0MsYUFGTDs7QUFBQSxtQkFHY0osc0RBQVEsQ0FBQyxFQUFELENBSHRCO0FBQUEsTUFHUEssTUFITztBQUFBLE1BR0NDLFNBSEQ7QUFLZDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHRSxXQUFTQyxnQkFBVCxDQUEwQkMsQ0FBMUIsRUFBNkI7QUFDM0JOLG1CQUFlLENBQUNNLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFDRDs7QUFFRCxXQUFTQyxjQUFULENBQXdCSCxDQUF4QixFQUEyQjtBQUN6QkosaUJBQWEsQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBYjtBQUNEOztBQUVELFdBQVNFLGFBQVQsR0FBeUI7QUFDdkJDLGFBQVM7QUFDVjs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFO0FBQ0UsU0FBRyxFQUFDLGtCQUROO0FBRUUsV0FBSyxFQUFFO0FBQUVDLGFBQUssRUFBRSxHQUFUO0FBQWNDLGNBQU0sRUFBRSxRQUF0QjtBQUFnQ0MsZUFBTyxFQUFFO0FBQXpDO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0UscUVBQUMscUZBQUQ7QUFBZ0IsV0FBSyxFQUFFZixZQUF2QjtBQUFxQyxrQkFBWSxFQUFFTTtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsU0FLNkUsR0FMN0UsZUFNRSxxRUFBQyxxRkFBRDtBQUFnQixXQUFLLEVBQUVKLFVBQXZCO0FBQW1DLGtCQUFZLEVBQUVRO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQU9FO0FBQVEsYUFBTyxFQUFFQyxhQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLGVBUUU7QUFBQSw2Q0FDYTtBQUFBLGtCQUFTWDtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEYixTQUNnRCxHQURoRCxlQUVFO0FBQUEsa0JBQVNFO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBWUU7QUFBQSxnQkFBSWMsSUFBSSxDQUFDQyxTQUFMLENBQWViLE1BQWY7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQ7O0dBOUNRTixJOztLQUFBQSxJOztBQXlETUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2MyYzVhYmVmNWRiY2VkYjY5YjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDdXJyZW5jeVNlbGVjdCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQ3VycmVuY3lTZWxlY3QvQ3VycmVuY3lTZWxlY3RcIjtcclxuXHJcbmZ1bmN0aW9uIFBhZ2UoKSB7XHJcbiAgY29uc3QgW2N1cnJlbmN5RnJvbSwgc2V0Q3VycmVuY3lGcm9tXSA9IHVzZVN0YXRlKFwiVVNEXCIpO1xyXG4gIGNvbnN0IFtjdXJyZW5jeVRvLCBzZXRDdXJyZW5jeVRvXSA9IHVzZVN0YXRlKFwiVVNEXCIpO1xyXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIC8qIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlcVVybCA9XHJcbiAgICAgIFwiaHR0cHM6Ly9hcGkuZXhjaGFuZ2VyYXRlc2FwaS5pby9sYXRlc3Q/c3ltYm9scz1cIiArXHJcbiAgICAgIGN1cnJlbmN5RnJvbSArXHJcbiAgICAgIFwiLFwiICtcclxuICAgICAgY3VycmVuY3lUbztcclxuICAgICAgY29uc29sZS5sb2cocmVxVXJsKTtcclxuICAgIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKHJlcVVybCk7XHJcbiAgICBjb25zdCBuZXdEYXRhID0gYXdhaXQgcmVxLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4gc2V0UmVzdWx0KG5ld0RhdGEucmVzdWx0cyk7XHJcbiAgfTsgKi9cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlRnJvbShlKSB7XHJcbiAgICBzZXRDdXJyZW5jeUZyb20oZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlVG8oZSkge1xyXG4gICAgc2V0Q3VycmVuY3lUbyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDb252ZXJ0KCkge1xyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIlxyXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiAyNTAsIG1hcmdpbjogXCIwIGF1dG9cIiwgZGlzcGxheTogXCJibG9ja1wiIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxDdXJyZW5jeVNlbGVjdCB2YWx1ZT17Y3VycmVuY3lGcm9tfSBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZUZyb219IC8+IHRve1wiIFwifVxyXG4gICAgICA8Q3VycmVuY3lTZWxlY3QgdmFsdWU9e2N1cnJlbmN5VG99IGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlVG99IC8+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ29udmVydH0+Q29udmVydDwvYnV0dG9uPlxyXG4gICAgICA8cD5cclxuICAgICAgICBDb252ZXJ0aW5nIDxzdHJvbmc+e2N1cnJlbmN5RnJvbX08L3N0cm9uZz4gdG97XCIgXCJ9XHJcbiAgICAgICAgPHN0cm9uZz57Y3VycmVuY3lUb308L3N0cm9uZz4uXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHA+e0pTT04uc3RyaW5naWZ5KHJlc3VsdCl9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAvLyBGZXRjaCBkYXRhIGZyb20gZXh0ZXJuYWwgQVBJXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vLi4uL2RhdGFgKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgLy8gUGFzcyBkYXRhIHRvIHRoZSBwYWdlIHZpYSBwcm9wc1xyXG4gIHJldHVybiB7IHByb3BzOiB7IGRhdGEgfSB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9