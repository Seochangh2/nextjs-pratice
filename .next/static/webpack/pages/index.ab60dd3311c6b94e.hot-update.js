"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/shared/lib/styled-jsx */ \"./node_modules/next/dist/shared/lib/styled-jsx.js\");\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Seo */ \"./components/Seo.tsx\");\n\n\n\n\nvar API_KEY = \"10923b261ba94d897ac6b81148314a3f\";\nvar ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), movies = ref[0], setMovies = ref[1];\nvar __N_SSP = true;\nfunction Home(param) {\n    var results = param.results;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-c2884a3ca37cf3fb\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Seo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Home\"\n            }, void 0, false, {\n                fileName: \"/Users/Changhee/Desktop/changh2_git/nextjs-pratice/pages/index.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            movies === null || movies === void 0 ? void 0 : movies.map(function(movie) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-c2884a3ca37cf3fb\" + \" \" + \"movie\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://image.tmdb.org/t/p/w500/\".concat(movie.poster_path),\n                            className: \"jsx-c2884a3ca37cf3fb\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Changhee/Desktop/changh2_git/nextjs-pratice/pages/index.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"jsx-c2884a3ca37cf3fb\",\n                            children: movie.original_title\n                        }, void 0, false, {\n                            fileName: \"/Users/Changhee/Desktop/changh2_git/nextjs-pratice/pages/index.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, movie.id, true, {\n                    fileName: \"/Users/Changhee/Desktop/changh2_git/nextjs-pratice/pages/index.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, _this);\n            }),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"c2884a3ca37cf3fb\",\n                children: \".container.jsx-c2884a3ca37cf3fb{display:grid;grid-template-columns:1fr 1fr;padding:20px;gap:20px}.movie.jsx-c2884a3ca37cf3fb img.jsx-c2884a3ca37cf3fb{max-width:100%;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;-webkit-transition:-webkit-transform.2s ease-in-out;-moz-transition:-moz-transform.2s ease-in-out;-o-transition:-o-transform.2s ease-in-out;transition:-webkit-transform.2s ease-in-out;transition:-moz-transform.2s ease-in-out;transition:-o-transform.2s ease-in-out;transition:transform.2s ease-in-out;-webkit-box-shadow:rgba(0,0,0,.1)0px 4px 12px;-moz-box-shadow:rgba(0,0,0,.1)0px 4px 12px;box-shadow:rgba(0,0,0,.1)0px 4px 12px}.movie.jsx-c2884a3ca37cf3fb:hover img.jsx-c2884a3ca37cf3fb{-webkit-transform:scale(1.05)translateY(-10px);-moz-transform:scale(1.05)translateY(-10px);-ms-transform:scale(1.05)translateY(-10px);-o-transform:scale(1.05)translateY(-10px);transform:scale(1.05)translateY(-10px)}.movie.jsx-c2884a3ca37cf3fb h4.jsx-c2884a3ca37cf3fb{font-size:18px;text-align:center}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Changhee/Desktop/changh2_git/nextjs-pratice/pages/index.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTRDO0FBQ1I7QUFFcEMsSUFBTUUsT0FBTyxHQUFHLGtDQUFrQztBQUNsRCxJQUNFRixHQUF5RSxHQUF6RUEsK0NBQVEsRUFBaUUsRUFEcEVHLE1BQU0sR0FDWEgsR0FBeUUsR0FEOUQsRUFBRUksU0FBUyxHQUN0QkosR0FBeUUsR0FEbkQ7O0FBRVQsU0FBU0ssSUFBSSxDQUFDLEtBQVcsRUFBRTtRQUFiLE9BQVMsR0FBVCxLQUFXLENBQVRDLE9BQU87O0lBQ3BDLHFCQUNFLDhEQUFDQyxLQUFHO2tEQUFXLFdBQVc7OzBCQUN4Qiw4REFBQ04sdURBQUc7Z0JBQUNPLEtBQUssRUFBQyxNQUFNOzs7OztvQkFBRztZQUNuQkwsTUFBTSxhQUFOQSxNQUFNLFdBQUssR0FBWEEsS0FBQUEsQ0FBVyxHQUFYQSxNQUFNLENBQUVNLEdBQUcsQ0FBQyxTQUFDQyxLQUFLO3FDQUNqQiw4REFBQ0gsS0FBRzs4REFBVyxPQUFPOztzQ0FDcEIsOERBQUNJLEtBQUc7NEJBQUNDLEdBQUcsRUFBRSxrQ0FBaUMsQ0FBb0IsT0FBbEJGLEtBQUssQ0FBQ0csV0FBVyxDQUFFOzs7Ozs7aUNBQUk7c0NBQ3BFLDhEQUFDQyxJQUFFOztzQ0FBRUosS0FBSyxDQUFDSyxjQUFjOzs7OztpQ0FBTTs7bUJBRkxMLEtBQUssQ0FBQ00sRUFBRTs7Ozt5QkFHOUI7YUFDUCxDQUFDOzs7Ozs7Ozs7O1lBc0JFLENBQ047Q0FDSDtBQWpDdUJYLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNlbyBmcm9tIFwiLi4vY29tcG9uZW50cy9TZW9cIjtcblxuY29uc3QgQVBJX0tFWSA9IFwiMTA5MjNiMjYxYmE5NGQ4OTdhYzZiODExNDgzMTRhM2ZcIjtcbmNvbnN0IFttb3ZpZXMsIHNldE1vdmllc10gPVxuICB1c2VTdGF0ZTx7IGlkOiBzdHJpbmc7IG9yaWdpbmFsX3RpdGxlOiBzdHJpbmc7IHBvc3Rlcl9wYXRoOiBzdHJpbmcgfVtdPigpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHJlc3VsdHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8U2VvIHRpdGxlPVwiSG9tZVwiIC8+XG4gICAgICB7bW92aWVzPy5tYXAoKG1vdmllKSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWVcIiBrZXk9e21vdmllLmlkfT5cbiAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAvJHttb3ZpZS5wb3N0ZXJfcGF0aH1gfSAvPlxuICAgICAgICAgIDxoND57bW92aWUub3JpZ2luYWxfdGl0bGV9PC9oND5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBnYXA6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm1vdmllIGltZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggMTJweDtcbiAgICAgICAgfVxuICAgICAgICAubW92aWU6aG92ZXIgaW1nIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpIHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgICAgICB9XG4gICAgICAgIC5tb3ZpZSBoNCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCB7IHJlc3VsdHMgfSA9IGF3YWl0IChhd2FpdCBmZXRjaChgL2FwaS9tb3ZpZXNgKSkuanNvbigpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICByZXN1bHRzLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJTZW8iLCJBUElfS0VZIiwibW92aWVzIiwic2V0TW92aWVzIiwiSG9tZSIsInJlc3VsdHMiLCJkaXYiLCJ0aXRsZSIsIm1hcCIsIm1vdmllIiwiaW1nIiwic3JjIiwicG9zdGVyX3BhdGgiLCJoNCIsIm9yaWdpbmFsX3RpdGxlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});