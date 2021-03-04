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
    alert("Converting " + currencyFrom + " to " + currencyTo);
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
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_CurrencySelect_CurrencySelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: currencyFrom,
      handleChange: handleChangeFrom
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), " to", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_CurrencySelect_CurrencySelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: currencyTo,
      handleChange: handleChangeTo
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: function onClick() {
        return handleConvert;
      },
      children: "Convert"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Converting ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: currencyFrom
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 20
      }, this), " to", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: currencyTo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), "."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUGFnZSIsInVzZVN0YXRlIiwiY3VycmVuY3lGcm9tIiwic2V0Q3VycmVuY3lGcm9tIiwiY3VycmVuY3lUbyIsInNldEN1cnJlbmN5VG8iLCJoYW5kbGVDaGFuZ2VGcm9tIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlVG8iLCJoYW5kbGVDb252ZXJ0IiwiYWxlcnQiLCJ3aWR0aCIsIm1hcmdpbiIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUMwQkMsc0RBQVEsQ0FBQyxLQUFELENBRGxDO0FBQUEsTUFDUEMsWUFETztBQUFBLE1BQ09DLGVBRFA7O0FBQUEsbUJBRXNCRixzREFBUSxDQUFDLEtBQUQsQ0FGOUI7QUFBQSxNQUVQRyxVQUZPO0FBQUEsTUFFS0MsYUFGTDs7QUFJZCxXQUFTQyxnQkFBVCxDQUEwQkMsQ0FBMUIsRUFBNkI7QUFDM0JKLG1CQUFlLENBQUNJLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFDRDs7QUFFRCxXQUFTQyxjQUFULENBQXdCSCxDQUF4QixFQUEyQjtBQUN6QkYsaUJBQWEsQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBYjtBQUNEOztBQUVELFdBQVNFLGFBQVQsR0FBeUI7QUFDdkJDLFNBQUssQ0FBQyxnQkFBZ0JWLFlBQWhCLEdBQStCLE1BQS9CLEdBQXdDRSxVQUF6QyxDQUFMO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBQSw0QkFDRTtBQUNFLFNBQUcsRUFBQyxrQkFETjtBQUVFLFdBQUssRUFBRTtBQUFFUyxhQUFLLEVBQUUsR0FBVDtBQUFjQyxjQUFNLEVBQUUsUUFBdEI7QUFBZ0NDLGVBQU8sRUFBRTtBQUF6QztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFLHFFQUFDLHFGQUFEO0FBQWdCLFdBQUssRUFBRWIsWUFBdkI7QUFBcUMsa0JBQVksRUFBRUk7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLFNBSzZFLEdBTDdFLGVBTUUscUVBQUMscUZBQUQ7QUFBZ0IsV0FBSyxFQUFFRixVQUF2QjtBQUFtQyxrQkFBWSxFQUFFTTtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFPRTtBQUFRLGFBQU8sRUFBRTtBQUFBLGVBQU1DLGFBQU47QUFBQSxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLGVBUUU7QUFBQSw2Q0FDYTtBQUFBLGtCQUFTVDtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEYixTQUNnRCxHQURoRCxlQUVFO0FBQUEsa0JBQVNFO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0dBL0JRSixJOztLQUFBQSxJO0FBaUNNQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMDM3MTk3YjlhZGEyMTU2MzAwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEN1cnJlbmN5U2VsZWN0IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9DdXJyZW5jeVNlbGVjdC9DdXJyZW5jeVNlbGVjdFwiO1xyXG5cclxuZnVuY3Rpb24gUGFnZSgpIHtcclxuICBjb25zdCBbY3VycmVuY3lGcm9tLCBzZXRDdXJyZW5jeUZyb21dID0gdXNlU3RhdGUoXCJVU0RcIik7XHJcbiAgY29uc3QgW2N1cnJlbmN5VG8sIHNldEN1cnJlbmN5VG9dID0gdXNlU3RhdGUoXCJVU0RcIik7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZUZyb20oZSkge1xyXG4gICAgc2V0Q3VycmVuY3lGcm9tKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZVRvKGUpIHtcclxuICAgIHNldEN1cnJlbmN5VG8oZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ29udmVydCgpIHtcclxuICAgIGFsZXJ0KFwiQ29udmVydGluZyBcIiArIGN1cnJlbmN5RnJvbSArIFwiIHRvIFwiICsgY3VycmVuY3lUbyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIlxyXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiAyNTAsIG1hcmdpbjogXCIwIGF1dG9cIiwgZGlzcGxheTogXCJibG9ja1wiIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxDdXJyZW5jeVNlbGVjdCB2YWx1ZT17Y3VycmVuY3lGcm9tfSBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZUZyb219IC8+IHRve1wiIFwifVxyXG4gICAgICA8Q3VycmVuY3lTZWxlY3QgdmFsdWU9e2N1cnJlbmN5VG99IGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlVG99IC8+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ29udmVydH0+Q29udmVydDwvYnV0dG9uPlxyXG4gICAgICA8cD5cclxuICAgICAgICBDb252ZXJ0aW5nIDxzdHJvbmc+e2N1cnJlbmN5RnJvbX08L3N0cm9uZz4gdG97XCIgXCJ9XHJcbiAgICAgICAgPHN0cm9uZz57Y3VycmVuY3lUb308L3N0cm9uZz4uXHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=