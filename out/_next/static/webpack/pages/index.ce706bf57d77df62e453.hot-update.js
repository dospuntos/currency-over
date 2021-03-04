webpackHotUpdate_N_E("pages/index",{

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




function Page(_ref) {
  _s();

  var data = _ref.data;

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
      children: JSON.stringify(data)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUGFnZSIsImRhdGEiLCJ1c2VTdGF0ZSIsImN1cnJlbmN5RnJvbSIsInNldEN1cnJlbmN5RnJvbSIsImN1cnJlbmN5VG8iLCJzZXRDdXJyZW5jeVRvIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiaGFuZGxlQ2hhbmdlRnJvbSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZVRvIiwiaGFuZGxlQ29udmVydCIsImZldGNoRGF0YSIsIndpZHRoIiwibWFyZ2luIiwiZGlzcGxheSIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsT0FBd0I7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQUEsa0JBQ2tCQyxzREFBUSxDQUFDLEtBQUQsQ0FEMUI7QUFBQSxNQUNmQyxZQURlO0FBQUEsTUFDREMsZUFEQzs7QUFBQSxtQkFFY0Ysc0RBQVEsQ0FBQyxLQUFELENBRnRCO0FBQUEsTUFFZkcsVUFGZTtBQUFBLE1BRUhDLGFBRkc7O0FBQUEsbUJBR01KLHNEQUFRLENBQUMsRUFBRCxDQUhkO0FBQUEsTUFHZkssTUFIZTtBQUFBLE1BR1BDLFNBSE87QUFLdEI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0UsV0FBU0MsZ0JBQVQsQ0FBMEJDLENBQTFCLEVBQTZCO0FBQzNCTixtQkFBZSxDQUFDTSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQ0Q7O0FBRUQsV0FBU0MsY0FBVCxDQUF3QkgsQ0FBeEIsRUFBMkI7QUFDekJKLGlCQUFhLENBQUNJLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWI7QUFDRDs7QUFFRCxXQUFTRSxhQUFULEdBQXlCO0FBQ3ZCQyxhQUFTO0FBQ1Y7O0FBRUQsc0JBQ0U7QUFBQSw0QkFDRTtBQUNFLFNBQUcsRUFBQyxrQkFETjtBQUVFLFdBQUssRUFBRTtBQUFFQyxhQUFLLEVBQUUsR0FBVDtBQUFjQyxjQUFNLEVBQUUsUUFBdEI7QUFBZ0NDLGVBQU8sRUFBRTtBQUF6QztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFLHFFQUFDLHFGQUFEO0FBQWdCLFdBQUssRUFBRWYsWUFBdkI7QUFBcUMsa0JBQVksRUFBRU07QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLFNBSzZFLEdBTDdFLGVBTUUscUVBQUMscUZBQUQ7QUFBZ0IsV0FBSyxFQUFFSixVQUF2QjtBQUFtQyxrQkFBWSxFQUFFUTtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFPRTtBQUFRLGFBQU8sRUFBRUMsYUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRixlQVFFO0FBQUEsNkNBQ2E7QUFBQSxrQkFBU1g7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRGIsU0FDZ0QsR0FEaEQsZUFFRTtBQUFBLGtCQUFTRTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRixlQVlFO0FBQUEsZ0JBQUljLElBQUksQ0FBQ0MsU0FBTCxDQUFlbkIsSUFBZjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdCRDs7R0E5Q1FELEk7O0tBQUFBLEk7O0FBOERNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jZTcwNmJmNTdkNzdkZjYyZTQ1My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEN1cnJlbmN5U2VsZWN0IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9DdXJyZW5jeVNlbGVjdC9DdXJyZW5jeVNlbGVjdFwiO1xyXG5cclxuZnVuY3Rpb24gUGFnZSh7IGRhdGEgfSkge1xyXG4gIGNvbnN0IFtjdXJyZW5jeUZyb20sIHNldEN1cnJlbmN5RnJvbV0gPSB1c2VTdGF0ZShcIlVTRFwiKTtcclxuICBjb25zdCBbY3VycmVuY3lUbywgc2V0Q3VycmVuY3lUb10gPSB1c2VTdGF0ZShcIlVTRFwiKTtcclxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAvKiBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXFVcmwgPVxyXG4gICAgICBcImh0dHBzOi8vYXBpLmV4Y2hhbmdlcmF0ZXNhcGkuaW8vbGF0ZXN0P3N5bWJvbHM9XCIgK1xyXG4gICAgICBjdXJyZW5jeUZyb20gK1xyXG4gICAgICBcIixcIiArXHJcbiAgICAgIGN1cnJlbmN5VG87XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcVVybCk7XHJcbiAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaChyZXFVcmwpO1xyXG4gICAgY29uc3QgbmV3RGF0YSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHNldFJlc3VsdChuZXdEYXRhLnJlc3VsdHMpO1xyXG4gIH07ICovXHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZUZyb20oZSkge1xyXG4gICAgc2V0Q3VycmVuY3lGcm9tKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZVRvKGUpIHtcclxuICAgIHNldEN1cnJlbmN5VG8oZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ29udmVydCgpIHtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCJcclxuICAgICAgICBzdHlsZT17eyB3aWR0aDogMjUwLCBtYXJnaW46IFwiMCBhdXRvXCIsIGRpc3BsYXk6IFwiYmxvY2tcIiB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8Q3VycmVuY3lTZWxlY3QgdmFsdWU9e2N1cnJlbmN5RnJvbX0gaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2VGcm9tfSAvPiB0b3tcIiBcIn1cclxuICAgICAgPEN1cnJlbmN5U2VsZWN0IHZhbHVlPXtjdXJyZW5jeVRvfSBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZVRvfSAvPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNvbnZlcnR9PkNvbnZlcnQ8L2J1dHRvbj5cclxuICAgICAgPHA+XHJcbiAgICAgICAgQ29udmVydGluZyA8c3Ryb25nPntjdXJyZW5jeUZyb219PC9zdHJvbmc+IHRve1wiIFwifVxyXG4gICAgICAgIDxzdHJvbmc+e2N1cnJlbmN5VG99PC9zdHJvbmc+LlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwPntKU09OLnN0cmluZ2lmeShkYXRhKX08L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gIC8vIEZldGNoIGRhdGEgZnJvbSBleHRlcm5hbCBBUElcclxuICBjb25zdCByZXFVcmwgPVxyXG4gICAgXCJodHRwczovL2FwaS5leGNoYW5nZXJhdGVzYXBpLmlvL2xhdGVzdD9zeW1ib2xzPVwiICtcclxuICAgIGN1cnJlbmN5RnJvbSArXHJcbiAgICBcIixcIiArXHJcbiAgICBjdXJyZW5jeVRvO1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHJlcVVybCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIC8vIFBhc3MgZGF0YSB0byB0aGUgcGFnZSB2aWEgcHJvcHNcclxuICByZXR1cm4geyBwcm9wczogeyBkYXRhIH0gfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==