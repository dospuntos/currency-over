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
/* harmony import */ var C_wamp_www_react_currencyOver_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_wamp_www_react_currencyOver_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_wamp_www_react_currencyOver_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_wamp_www_react_currencyOver_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_CurrencySelect_CurrencySelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/CurrencySelect/CurrencySelect */ "./src/components/CurrencySelect/CurrencySelect.jsx");




var _jsxFileName = "C:\\wamp\\www\\react\\currencyOver\\pages\\index.js",
    _s = $RefreshSig$();




function Page() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("USD"),
      currencyFrom = _useState[0],
      setCurrencyFrom = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("USD"),
      currencyTo = _useState2[0],
      setCurrencyTo = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      result = _useState3[0],
      setResult = _useState3[1];

  var fetchData = /*#__PURE__*/function () {
    var _ref = Object(C_wamp_www_react_currencyOver_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_wamp_www_react_currencyOver_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return C_wamp_www_react_currencyOver_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              reqUrl = "https://api.exchangeratesapi.io/latest?symbols=" + currencyFrom + "," + currencyTo;
              console.log(reqUrl);
              return _context.abrupt("return", []);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchData() {
      return _ref.apply(this, arguments);
    };
  }();

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
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_CurrencySelect_CurrencySelect__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: currencyFrom,
      handleChange: handleChangeFrom
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), " to", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_CurrencySelect_CurrencySelect__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: currencyTo,
      handleChange: handleChangeTo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: handleConvert,
      children: "Convert"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Converting ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: currencyFrom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 20
      }, this), " to", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: currencyTo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), "."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: JSON.stringify(result)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

_s(Page, "Rrgqb4n69M/lVSuDyeJpFDpQhVk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUGFnZSIsInVzZVN0YXRlIiwiY3VycmVuY3lGcm9tIiwic2V0Q3VycmVuY3lGcm9tIiwiY3VycmVuY3lUbyIsInNldEN1cnJlbmN5VG8iLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJmZXRjaERhdGEiLCJyZXFVcmwiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlRnJvbSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZVRvIiwiaGFuZGxlQ29udmVydCIsIndpZHRoIiwibWFyZ2luIiwiZGlzcGxheSIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQzBCQyxzREFBUSxDQUFDLEtBQUQsQ0FEbEM7QUFBQSxNQUNQQyxZQURPO0FBQUEsTUFDT0MsZUFEUDs7QUFBQSxtQkFFc0JGLHNEQUFRLENBQUMsS0FBRCxDQUY5QjtBQUFBLE1BRVBHLFVBRk87QUFBQSxNQUVLQyxhQUZMOztBQUFBLG1CQUdjSixzREFBUSxDQUFDLEVBQUQsQ0FIdEI7QUFBQSxNQUdQSyxNQUhPO0FBQUEsTUFHQ0MsU0FIRDs7QUFLZCxNQUFNQyxTQUFTO0FBQUEsb1JBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNoQkMsb0JBQU0sR0FDSixvREFDQVAsWUFEQSxHQUVBLEdBRkEsR0FHQUUsVUFKRjtBQUtBTSxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7QUFOZ0IsK0NBT1QsRUFQUzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFURCxTQUFTO0FBQUE7QUFBQTtBQUFBLEtBQWY7O0FBY0EsV0FBU0ksZ0JBQVQsQ0FBMEJDLENBQTFCLEVBQTZCO0FBQzNCVixtQkFBZSxDQUFDVSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQ0Q7O0FBRUQsV0FBU0MsY0FBVCxDQUF3QkgsQ0FBeEIsRUFBMkI7QUFDekJSLGlCQUFhLENBQUNRLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWI7QUFDRDs7QUFFRCxXQUFTRSxhQUFULEdBQXlCO0FBQ3ZCVCxhQUFTO0FBQ1Y7O0FBRUQsc0JBQ0U7QUFBQSw0QkFDRTtBQUNFLFNBQUcsRUFBQyxrQkFETjtBQUVFLFdBQUssRUFBRTtBQUFFVSxhQUFLLEVBQUUsR0FBVDtBQUFjQyxjQUFNLEVBQUUsUUFBdEI7QUFBZ0NDLGVBQU8sRUFBRTtBQUF6QztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFLHFFQUFDLHFGQUFEO0FBQWdCLFdBQUssRUFBRWxCLFlBQXZCO0FBQXFDLGtCQUFZLEVBQUVVO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixTQUs2RSxHQUw3RSxlQU1FLHFFQUFDLHFGQUFEO0FBQWdCLFdBQUssRUFBRVIsVUFBdkI7QUFBbUMsa0JBQVksRUFBRVk7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBT0U7QUFBUSxhQUFPLEVBQUVDLGFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFRRTtBQUFBLDZDQUNhO0FBQUEsa0JBQVNmO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURiLFNBQ2dELEdBRGhELGVBRUU7QUFBQSxrQkFBU0U7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsZUFZRTtBQUFBLGdCQUFJaUIsSUFBSSxDQUFDQyxTQUFMLENBQWVoQixNQUFmO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0JEOztHQS9DUU4sSTs7S0FBQUEsSTtBQWlETUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDlkMzFmZjYwZmVhMzk3OTg4MjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDdXJyZW5jeVNlbGVjdCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQ3VycmVuY3lTZWxlY3QvQ3VycmVuY3lTZWxlY3RcIjtcclxuXHJcbmZ1bmN0aW9uIFBhZ2UoKSB7XHJcbiAgY29uc3QgW2N1cnJlbmN5RnJvbSwgc2V0Q3VycmVuY3lGcm9tXSA9IHVzZVN0YXRlKFwiVVNEXCIpO1xyXG4gIGNvbnN0IFtjdXJyZW5jeVRvLCBzZXRDdXJyZW5jeVRvXSA9IHVzZVN0YXRlKFwiVVNEXCIpO1xyXG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIHJlcVVybCA9XHJcbiAgICAgIFwiaHR0cHM6Ly9hcGkuZXhjaGFuZ2VyYXRlc2FwaS5pby9sYXRlc3Q/c3ltYm9scz1cIiArXHJcbiAgICAgIGN1cnJlbmN5RnJvbSArXHJcbiAgICAgIFwiLFwiICtcclxuICAgICAgY3VycmVuY3lUbztcclxuICAgIGNvbnNvbGUubG9nKHJlcVVybCk7XHJcbiAgICByZXR1cm4gW107XHJcbiAgICAvKiBjb25zdCByZXEgPSBhd2FpdCBmZXRjaChyZXFVcmwpO1xyXG4gICAgY29uc3QgbmV3RGF0YSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHNldFJlc3VsdChuZXdEYXRhLnJlc3VsdHMpOyAqL1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZUZyb20oZSkge1xyXG4gICAgc2V0Q3VycmVuY3lGcm9tKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZVRvKGUpIHtcclxuICAgIHNldEN1cnJlbmN5VG8oZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ29udmVydCgpIHtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9XCIvaW1hZ2VzL2xvZ28ucG5nXCJcclxuICAgICAgICBzdHlsZT17eyB3aWR0aDogMjUwLCBtYXJnaW46IFwiMCBhdXRvXCIsIGRpc3BsYXk6IFwiYmxvY2tcIiB9fVxyXG4gICAgICAvPlxyXG4gICAgICA8Q3VycmVuY3lTZWxlY3QgdmFsdWU9e2N1cnJlbmN5RnJvbX0gaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2VGcm9tfSAvPiB0b3tcIiBcIn1cclxuICAgICAgPEN1cnJlbmN5U2VsZWN0IHZhbHVlPXtjdXJyZW5jeVRvfSBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZVRvfSAvPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNvbnZlcnR9PkNvbnZlcnQ8L2J1dHRvbj5cclxuICAgICAgPHA+XHJcbiAgICAgICAgQ29udmVydGluZyA8c3Ryb25nPntjdXJyZW5jeUZyb219PC9zdHJvbmc+IHRve1wiIFwifVxyXG4gICAgICAgIDxzdHJvbmc+e2N1cnJlbmN5VG99PC9zdHJvbmc+LlxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwPntKU09OLnN0cmluZ2lmeShyZXN1bHQpfTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=