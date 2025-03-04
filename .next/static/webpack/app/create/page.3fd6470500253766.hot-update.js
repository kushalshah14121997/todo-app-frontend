"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/create/page",{

/***/ "(app-pages-browser)/./app/create/page.tsx":
/*!*****************************!*\
  !*** ./app/create/page.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CreateTask)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction CreateTask() {\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // No default color\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const taskData = {\n            title,\n            color: color || \"white\",\n            completed: false\n        };\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:5000/api/tasks\", taskData, {\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            router.push(\"/\");\n        } catch (error) {\n            console.error(\"Error creating task:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col items-center justify-center min-h-screen bg-[#1A1A1A] text-white p-6 relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>router.push(\"/\"),\n                className: \"absolute top-6 left-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    src: \"/backarrow.png\",\n                    alt: \"Back\",\n                    width: 32,\n                    height: 32\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"w-full max-w-md space-y-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-sm font-medium mb-2\",\n                                children: \"Title\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Ex. Brush your teeth\",\n                                value: title,\n                                onChange: (e)=>setTitle(e.target.value),\n                                className: \"w-full p-3 bg-[#262626] border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 outline-none\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-sm font-medium mb-2\",\n                                children: \"Color\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-3\",\n                                children: [\n                                    \"red\",\n                                    \"orange\",\n                                    \"yellow\",\n                                    \"green\",\n                                    \"blue\",\n                                    \"purple\",\n                                    \"pink\",\n                                    \"brown\"\n                                ].map((c)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        onClick: ()=>setColor(c),\n                                        className: \"w-10 h-10 rounded-full border-2 \".concat(color === c ? \"border-white\" : \"border-transparent\"),\n                                        style: {\n                                            backgroundColor: c\n                                        }\n                                    }, c, false, {\n                                        fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"w-full py-3 bg-[#1E6F9F] text-white font-bold rounded-lg transition-all hover:bg-[#155E75]\",\n                        children: \"Add Task\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(CreateTask, \"Th05tvL3EJkwhcn6ev+a0icM+oQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CreateTask;\nvar _c;\n$RefreshReg$(_c, \"CreateTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jcmVhdGUvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRXdDO0FBQ0k7QUFDYjtBQUNMO0FBRVgsU0FBU0s7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUMsS0FBSyxtQkFBbUI7SUFDM0QsTUFBTVMsU0FBU1IsMERBQVNBO0lBRXhCLE1BQU1TLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTUMsV0FBVztZQUFFUjtZQUFPRSxPQUFPQSxTQUFTO1lBQVNPLFdBQVc7UUFBTTtRQUVwRSxJQUFJO1lBQ0YsTUFBTVgsNkNBQUtBLENBQUNZLElBQUksQ0FBQyxtQ0FBbUNGLFVBQVU7Z0JBQzVERyxTQUFTO29CQUFFLGdCQUFnQjtnQkFBbUI7WUFDaEQ7WUFDQVAsT0FBT1EsSUFBSSxDQUFDO1FBQ2QsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3hDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0U7UUFBS0MsV0FBVTs7MEJBRWQsOERBQUNDO2dCQUNDQyxTQUFTLElBQU1kLE9BQU9RLElBQUksQ0FBQztnQkFDM0JJLFdBQVU7MEJBRVYsNEVBQUNuQixrREFBS0E7b0JBQUNzQixLQUFJO29CQUFpQkMsS0FBSTtvQkFBT0MsT0FBTztvQkFBSUMsUUFBUTs7Ozs7Ozs7Ozs7MEJBSTVELDhEQUFDQztnQkFBS0MsVUFBVW5CO2dCQUFjVyxXQUFVOztrQ0FDdEMsOERBQUNTOzswQ0FDQyw4REFBQ0M7Z0NBQU1WLFdBQVU7MENBQWlDOzs7Ozs7MENBQ2xELDhEQUFDVztnQ0FDQ0MsTUFBSztnQ0FDTEMsYUFBWTtnQ0FDWkMsT0FBTzlCO2dDQUNQK0IsVUFBVSxDQUFDekIsSUFBTUwsU0FBU0ssRUFBRTBCLE1BQU0sQ0FBQ0YsS0FBSztnQ0FDeENkLFdBQVU7Z0NBQ1ZpQixRQUFROzs7Ozs7Ozs7Ozs7a0NBS1osOERBQUNSOzswQ0FDQyw4REFBQ0M7Z0NBQU1WLFdBQVU7MENBQWlDOzs7Ozs7MENBQ2xELDhEQUFDUztnQ0FBSVQsV0FBVTswQ0FDWjtvQ0FBQztvQ0FBTztvQ0FBVTtvQ0FBVTtvQ0FBUztvQ0FBUTtvQ0FBVTtvQ0FBUTtpQ0FBUSxDQUFDa0IsR0FBRyxDQUFDLENBQUNDLGtCQUM1RSw4REFBQ2xCO3dDQUVDVyxNQUFLO3dDQUNMVixTQUFTLElBQU1mLFNBQVNnQzt3Q0FDeEJuQixXQUFXLG1DQUVWLE9BRENkLFVBQVVpQyxJQUFJLGlCQUFpQjt3Q0FFakNDLE9BQU87NENBQUVDLGlCQUFpQkY7d0NBQUU7dUNBTnZCQTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FhYiw4REFBQ2xCO3dCQUNDVyxNQUFLO3dCQUNMWixXQUFVO2tDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQXZFd0JqQjs7UUFHUEgsc0RBQVNBOzs7S0FIRkciLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhaGtcXHRvZG8tYXBwXFxmcm9udGVuZFxcYXBwXFxjcmVhdGVcXHBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVUYXNrKCkge1xyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZShcIlwiKTsgLy8gTm8gZGVmYXVsdCBjb2xvclxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB0YXNrRGF0YSA9IHsgdGl0bGUsIGNvbG9yOiBjb2xvciB8fCBcIndoaXRlXCIsIGNvbXBsZXRlZDogZmFsc2UgfTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS90YXNrc1wiLCB0YXNrRGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyB0YXNrOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBiZy1bIzFBMUExQV0gdGV4dC13aGl0ZSBwLTYgcmVsYXRpdmVcIj5cclxuICAgICAgey8qIEJhY2sgQnV0dG9uIChjb25zaXN0ZW50IHdpdGggRWRpdCBwYWdlKSAqL31cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX1cclxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNiBsZWZ0LTZcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEltYWdlIHNyYz1cIi9iYWNrYXJyb3cucG5nXCIgYWx0PVwiQmFja1wiIHdpZHRoPXszMn0gaGVpZ2h0PXszMn0gLz5cclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICB7LyogVGFzayBGb3JtICovfVxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbWQgc3BhY2UteS02XCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIG1iLTJcIj5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4LiBCcnVzaCB5b3VyIHRlZXRoXCJcclxuICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMyBiZy1bIzI2MjYyNl0gYm9yZGVyIGJvcmRlci1ncmF5LTYwMCByb3VuZGVkLW1kIHRleHQtd2hpdGUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDAgb3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBDb2xvciBTZWxlY3Rpb24gKi99XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIG1iLTJcIj5Db2xvcjwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTNcIj5cclxuICAgICAgICAgICAge1tcInJlZFwiLCBcIm9yYW5nZVwiLCBcInllbGxvd1wiLCBcImdyZWVuXCIsIFwiYmx1ZVwiLCBcInB1cnBsZVwiLCBcInBpbmtcIiwgXCJicm93blwiXS5tYXAoKGMpID0+IChcclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBrZXk9e2N9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENvbG9yKGMpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy0xMCBoLTEwIHJvdW5kZWQtZnVsbCBib3JkZXItMiAke1xyXG4gICAgICAgICAgICAgICAgICBjb2xvciA9PT0gYyA/IFwiYm9yZGVyLXdoaXRlXCIgOiBcImJvcmRlci10cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYyB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBTdWJtaXQgQnV0dG9uICovfVxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTMgYmctWyMxRTZGOUZdIHRleHQtd2hpdGUgZm9udC1ib2xkIHJvdW5kZWQtbGcgdHJhbnNpdGlvbi1hbGwgaG92ZXI6YmctWyMxNTVFNzVdXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBBZGQgVGFza1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkltYWdlIiwiYXhpb3MiLCJDcmVhdGVUYXNrIiwidGl0bGUiLCJzZXRUaXRsZSIsImNvbG9yIiwic2V0Q29sb3IiLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXNrRGF0YSIsImNvbXBsZXRlZCIsInBvc3QiLCJoZWFkZXJzIiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsIm1haW4iLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJmb3JtIiwib25TdWJtaXQiLCJkaXYiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInJlcXVpcmVkIiwibWFwIiwiYyIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/create/page.tsx\n"));

/***/ })

});