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
      var reqUrl;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUGFnZSIsInVzZVN0YXRlIiwiY3VycmVuY3lGcm9tIiwic2V0Q3VycmVuY3lGcm9tIiwiY3VycmVuY3lUbyIsInNldEN1cnJlbmN5VG8iLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJmZXRjaERhdGEiLCJyZXFVcmwiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlRnJvbSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZVRvIiwiaGFuZGxlQ29udmVydCIsIndpZHRoIiwibWFyZ2luIiwiZGlzcGxheSIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQzBCQyxzREFBUSxDQUFDLEtBQUQsQ0FEbEM7QUFBQSxNQUNQQyxZQURPO0FBQUEsTUFDT0MsZUFEUDs7QUFBQSxtQkFFc0JGLHNEQUFRLENBQUMsS0FBRCxDQUY5QjtBQUFBLE1BRVBHLFVBRk87QUFBQSxNQUVLQyxhQUZMOztBQUFBLG1CQUdjSixzREFBUSxDQUFDLEVBQUQsQ0FIdEI7QUFBQSxNQUdQSyxNQUhPO0FBQUEsTUFHQ0MsU0FIRDs7QUFLZCxNQUFNQyxTQUFTO0FBQUEsb1JBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1ZDLG9CQURVLEdBRWQsb0RBQ0FQLFlBREEsR0FFQSxHQUZBLEdBR0FFLFVBTGM7QUFNaEJNLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjtBQU5nQiwrQ0FPVCxFQVBTOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVRELFNBQVM7QUFBQTtBQUFBO0FBQUEsS0FBZjs7QUFjQSxXQUFTSSxnQkFBVCxDQUEwQkMsQ0FBMUIsRUFBNkI7QUFDM0JWLG1CQUFlLENBQUNVLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFDRDs7QUFFRCxXQUFTQyxjQUFULENBQXdCSCxDQUF4QixFQUEyQjtBQUN6QlIsaUJBQWEsQ0FBQ1EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBYjtBQUNEOztBQUVELFdBQVNFLGFBQVQsR0FBeUI7QUFDdkJULGFBQVM7QUFDVjs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFO0FBQ0UsU0FBRyxFQUFDLGtCQUROO0FBRUUsV0FBSyxFQUFFO0FBQUVVLGFBQUssRUFBRSxHQUFUO0FBQWNDLGNBQU0sRUFBRSxRQUF0QjtBQUFnQ0MsZUFBTyxFQUFFO0FBQXpDO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0UscUVBQUMscUZBQUQ7QUFBZ0IsV0FBSyxFQUFFbEIsWUFBdkI7QUFBcUMsa0JBQVksRUFBRVU7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLFNBSzZFLEdBTDdFLGVBTUUscUVBQUMscUZBQUQ7QUFBZ0IsV0FBSyxFQUFFUixVQUF2QjtBQUFtQyxrQkFBWSxFQUFFWTtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFPRTtBQUFRLGFBQU8sRUFBRUMsYUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRixlQVFFO0FBQUEsNkNBQ2E7QUFBQSxrQkFBU2Y7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRGIsU0FDZ0QsR0FEaEQsZUFFRTtBQUFBLGtCQUFTRTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRixlQVlFO0FBQUEsZ0JBQUlpQixJQUFJLENBQUNDLFNBQUwsQ0FBZWhCLE1BQWY7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQ7O0dBL0NRTixJOztLQUFBQSxJO0FBaURNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kZTQyYjI0YTU0OWFiNzRlZWU0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEN1cnJlbmN5U2VsZWN0IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9DdXJyZW5jeVNlbGVjdC9DdXJyZW5jeVNlbGVjdFwiO1xyXG5cclxuZnVuY3Rpb24gUGFnZSgpIHtcclxuICBjb25zdCBbY3VycmVuY3lGcm9tLCBzZXRDdXJyZW5jeUZyb21dID0gdXNlU3RhdGUoXCJVU0RcIik7XHJcbiAgY29uc3QgW2N1cnJlbmN5VG8sIHNldEN1cnJlbmN5VG9dID0gdXNlU3RhdGUoXCJVU0RcIik7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVxVXJsID1cclxuICAgICAgXCJodHRwczovL2FwaS5leGNoYW5nZXJhdGVzYXBpLmlvL2xhdGVzdD9zeW1ib2xzPVwiICtcclxuICAgICAgY3VycmVuY3lGcm9tICtcclxuICAgICAgXCIsXCIgK1xyXG4gICAgICBjdXJyZW5jeVRvO1xyXG4gICAgY29uc29sZS5sb2cocmVxVXJsKTtcclxuICAgIHJldHVybiBbXTtcclxuICAgIC8qIGNvbnN0IHJlcSA9IGF3YWl0IGZldGNoKHJlcVVybCk7XHJcbiAgICBjb25zdCBuZXdEYXRhID0gYXdhaXQgcmVxLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4gc2V0UmVzdWx0KG5ld0RhdGEucmVzdWx0cyk7ICovXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlRnJvbShlKSB7XHJcbiAgICBzZXRDdXJyZW5jeUZyb20oZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlVG8oZSkge1xyXG4gICAgc2V0Q3VycmVuY3lUbyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDb252ZXJ0KCkge1xyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIlxyXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiAyNTAsIG1hcmdpbjogXCIwIGF1dG9cIiwgZGlzcGxheTogXCJibG9ja1wiIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxDdXJyZW5jeVNlbGVjdCB2YWx1ZT17Y3VycmVuY3lGcm9tfSBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZUZyb219IC8+IHRve1wiIFwifVxyXG4gICAgICA8Q3VycmVuY3lTZWxlY3QgdmFsdWU9e2N1cnJlbmN5VG99IGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlVG99IC8+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ29udmVydH0+Q29udmVydDwvYnV0dG9uPlxyXG4gICAgICA8cD5cclxuICAgICAgICBDb252ZXJ0aW5nIDxzdHJvbmc+e2N1cnJlbmN5RnJvbX08L3N0cm9uZz4gdG97XCIgXCJ9XHJcbiAgICAgICAgPHN0cm9uZz57Y3VycmVuY3lUb308L3N0cm9uZz4uXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHA+e0pTT04uc3RyaW5naWZ5KHJlc3VsdCl9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==