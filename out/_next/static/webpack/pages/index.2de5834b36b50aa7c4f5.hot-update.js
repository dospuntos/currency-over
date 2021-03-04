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
    var reqUrl = "https://api.exchangeratesapi.io/latest?symbols=".concat(currencyFrom, ",").concat(currencyTo);
    fetch(reqUrl).then(function (data) {
      return setResult(data);
    });
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_CurrencySelect_CurrencySelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: currencyFrom,
      handleChange: handleChangeFrom
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), " to", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_CurrencySelect_CurrencySelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      children: JSON.stringify(data)
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
/* export async function getServerSideProps() {
  // Fetch data from external API
  const reqUrl = `https://api.exchangeratesapi.io/latest?symbols=${currencyFrom},${currencyTo}`;
  const res = await fetch(reqUrl);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
} */


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUGFnZSIsInVzZVN0YXRlIiwiY3VycmVuY3lGcm9tIiwic2V0Q3VycmVuY3lGcm9tIiwiY3VycmVuY3lUbyIsInNldEN1cnJlbmN5VG8iLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJoYW5kbGVDaGFuZ2VGcm9tIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlVG8iLCJoYW5kbGVDb252ZXJ0IiwicmVxVXJsIiwiZmV0Y2giLCJ0aGVuIiwiZGF0YSIsIndpZHRoIiwibWFyZ2luIiwiZGlzcGxheSIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUMwQkMsc0RBQVEsQ0FBQyxLQUFELENBRGxDO0FBQUEsTUFDUEMsWUFETztBQUFBLE1BQ09DLGVBRFA7O0FBQUEsbUJBRXNCRixzREFBUSxDQUFDLEtBQUQsQ0FGOUI7QUFBQSxNQUVQRyxVQUZPO0FBQUEsTUFFS0MsYUFGTDs7QUFBQSxtQkFHY0osc0RBQVEsQ0FBQyxFQUFELENBSHRCO0FBQUEsTUFHUEssTUFITztBQUFBLE1BR0NDLFNBSEQ7QUFLZDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHRSxXQUFTQyxnQkFBVCxDQUEwQkMsQ0FBMUIsRUFBNkI7QUFDM0JOLG1CQUFlLENBQUNNLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFDRDs7QUFFRCxXQUFTQyxjQUFULENBQXdCSCxDQUF4QixFQUEyQjtBQUN6QkosaUJBQWEsQ0FBQ0ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBYjtBQUNEOztBQUVELFdBQVNFLGFBQVQsR0FBeUI7QUFDdkIsUUFBTUMsTUFBTSw0REFBcURaLFlBQXJELGNBQXFFRSxVQUFyRSxDQUFaO0FBQ0FXLFNBQUssQ0FBQ0QsTUFBRCxDQUFMLENBQWNFLElBQWQsQ0FBbUIsVUFBQ0MsSUFBRDtBQUFBLGFBQVVWLFNBQVMsQ0FBQ1UsSUFBRCxDQUFuQjtBQUFBLEtBQW5CO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBQSw0QkFDRTtBQUNFLFNBQUcsRUFBQyxrQkFETjtBQUVFLFdBQUssRUFBRTtBQUFFQyxhQUFLLEVBQUUsR0FBVDtBQUFjQyxjQUFNLEVBQUUsUUFBdEI7QUFBZ0NDLGVBQU8sRUFBRTtBQUF6QztBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFLHFFQUFDLHFGQUFEO0FBQWdCLFdBQUssRUFBRWxCLFlBQXZCO0FBQXFDLGtCQUFZLEVBQUVNO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixTQUs2RSxHQUw3RSxlQU1FLHFFQUFDLHFGQUFEO0FBQWdCLFdBQUssRUFBRUosVUFBdkI7QUFBbUMsa0JBQVksRUFBRVE7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBT0U7QUFBUSxhQUFPLEVBQUVDLGFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFRRTtBQUFBLDZDQUNhO0FBQUEsa0JBQVNYO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURiLFNBQ2dELEdBRGhELGVBRUU7QUFBQSxrQkFBU0U7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsZUFZRTtBQUFBLGdCQUFJaUIsSUFBSSxDQUFDQyxTQUFMLENBQWVMLElBQWY7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQ7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztHQXpEU2pCLEk7O0tBQUFBLEk7QUEyRE1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJkZTU4MzRiMzZiNTBhYTdjNGY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ3VycmVuY3lTZWxlY3QgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0N1cnJlbmN5U2VsZWN0L0N1cnJlbmN5U2VsZWN0XCI7XHJcblxyXG5mdW5jdGlvbiBQYWdlKCkge1xyXG4gIGNvbnN0IFtjdXJyZW5jeUZyb20sIHNldEN1cnJlbmN5RnJvbV0gPSB1c2VTdGF0ZShcIlVTRFwiKTtcclxuICBjb25zdCBbY3VycmVuY3lUbywgc2V0Q3VycmVuY3lUb10gPSB1c2VTdGF0ZShcIlVTRFwiKTtcclxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAvKiBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXFVcmwgPVxyXG4gICAgICBcImh0dHBzOi8vYXBpLmV4Y2hhbmdlcmF0ZXNhcGkuaW8vbGF0ZXN0P3N5bWJvbHM9XCIgK1xyXG4gICAgICBjdXJyZW5jeUZyb20gK1xyXG4gICAgICBcIixcIiArXHJcbiAgICAgIGN1cnJlbmN5VG87XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcVVybCk7XHJcbiAgICBjb25zdCByZXEgPSBhd2FpdCBmZXRjaChyZXFVcmwpO1xyXG4gICAgY29uc3QgbmV3RGF0YSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHNldFJlc3VsdChuZXdEYXRhLnJlc3VsdHMpO1xyXG4gIH07ICovXHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZUZyb20oZSkge1xyXG4gICAgc2V0Q3VycmVuY3lGcm9tKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZVRvKGUpIHtcclxuICAgIHNldEN1cnJlbmN5VG8oZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ29udmVydCgpIHtcclxuICAgIGNvbnN0IHJlcVVybCA9IGBodHRwczovL2FwaS5leGNoYW5nZXJhdGVzYXBpLmlvL2xhdGVzdD9zeW1ib2xzPSR7Y3VycmVuY3lGcm9tfSwke2N1cnJlbmN5VG99YDtcclxuICAgIGZldGNoKHJlcVVybCkudGhlbigoZGF0YSkgPT4gc2V0UmVzdWx0KGRhdGEpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiXHJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDI1MCwgbWFyZ2luOiBcIjAgYXV0b1wiLCBkaXNwbGF5OiBcImJsb2NrXCIgfX1cclxuICAgICAgLz5cclxuICAgICAgPEN1cnJlbmN5U2VsZWN0IHZhbHVlPXtjdXJyZW5jeUZyb219IGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlRnJvbX0gLz4gdG97XCIgXCJ9XHJcbiAgICAgIDxDdXJyZW5jeVNlbGVjdCB2YWx1ZT17Y3VycmVuY3lUb30gaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUb30gLz5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDb252ZXJ0fT5Db252ZXJ0PC9idXR0b24+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIENvbnZlcnRpbmcgPHN0cm9uZz57Y3VycmVuY3lGcm9tfTwvc3Ryb25nPiB0b3tcIiBcIn1cclxuICAgICAgICA8c3Ryb25nPntjdXJyZW5jeVRvfTwvc3Ryb25nPi5cclxuICAgICAgPC9wPlxyXG4gICAgICA8cD57SlNPTi5zdHJpbmdpZnkoZGF0YSl9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuLyogZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAvLyBGZXRjaCBkYXRhIGZyb20gZXh0ZXJuYWwgQVBJXHJcbiAgY29uc3QgcmVxVXJsID0gYGh0dHBzOi8vYXBpLmV4Y2hhbmdlcmF0ZXNhcGkuaW8vbGF0ZXN0P3N5bWJvbHM9JHtjdXJyZW5jeUZyb219LCR7Y3VycmVuY3lUb31gO1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHJlcVVybCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIC8vIFBhc3MgZGF0YSB0byB0aGUgcGFnZSB2aWEgcHJvcHNcclxuICByZXR1cm4geyBwcm9wczogeyBkYXRhIH0gfTtcclxufSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==