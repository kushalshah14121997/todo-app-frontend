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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CreateTask)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction CreateTask() {\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // No default color\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const taskData = {\n            title,\n            color: color || \"white\",\n            completed: false\n        };\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:5000/api/tasks\", taskData, {\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            router.push(\"/\");\n        } catch (error) {\n            console.error(\"Error creating task:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col items-center justify-center min-h-screen bg-[#1A1A1A] text-white p-6\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full max-w-lg flex flex-col items-center space-y-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>router.push(\"/\"),\n                    className: \"self-start mb-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        src: \"/backarrow.png\",\n                        alt: \"Back\",\n                        width: 14,\n                        height: 14\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"w-full space-y-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block font-medium mb-2 text-[14px] text-[#4EA8DE]\",\n                                    children: \"Title\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Ex. Brush your teeth\",\n                                    value: title,\n                                    onChange: (e)=>setTitle(e.target.value),\n                                    className: \"w-full p-3 bg-[#262626] border border-gray-600 rounded-md text-white text-[14px] focus:ring-2 focus:ring-blue-500 outline-none\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: \"block font-medium mb-2 text-[14px] text-[#4EA8DE]\",\n                                    children: \"Color\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex gap-3\",\n                                    children: [\n                                        \"red\",\n                                        \"orange\",\n                                        \"yellow\",\n                                        \"green\",\n                                        \"blue\",\n                                        \"purple\",\n                                        \"pink\",\n                                        \"brown\"\n                                    ].map((c)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"button\",\n                                            onClick: ()=>setColor(c),\n                                            className: \"w-10 h-10 rounded-full border-2 \".concat(color === c ? \"border-white\" : \"border-transparent\"),\n                                            style: {\n                                                backgroundColor: c\n                                            }\n                                        }, c, false, {\n                                            fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 17\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"w-full py-3 bg-[#1E6F9F] text-white font-bold text-[14px] rounded-lg transition-all hover:bg-[#155E75] flex justify-center items-center gap-2\",\n                            children: [\n                                \"Add Task\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    src: \"/plus.png\",\n                                    alt: \"Plus Icon\",\n                                    width: 16,\n                                    height: 16,\n                                    priority: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(CreateTask, \"Th05tvL3EJkwhcn6ev+a0icM+oQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CreateTask;\nvar _c;\n$RefreshReg$(_c, \"CreateTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jcmVhdGUvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRXdDO0FBQ0k7QUFDYjtBQUNMO0FBRVgsU0FBU0s7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNPLE9BQU9DLFNBQVMsR0FBR1IsK0NBQVFBLENBQUMsS0FBSyxtQkFBbUI7SUFDM0QsTUFBTVMsU0FBU1IsMERBQVNBO0lBRXhCLE1BQU1TLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTUMsV0FBVztZQUFFUjtZQUFPRSxPQUFPQSxTQUFTO1lBQVNPLFdBQVc7UUFBTTtRQUVwRSxJQUFJO1lBQ0YsTUFBTVgsNkNBQUtBLENBQUNZLElBQUksQ0FBQyxtQ0FBbUNGLFVBQVU7Z0JBQzVERyxTQUFTO29CQUFFLGdCQUFnQjtnQkFBbUI7WUFDaEQ7WUFDQVAsT0FBT1EsSUFBSSxDQUFDO1FBQ2QsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3hDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0U7UUFBS0MsV0FBVTtrQkFFZCw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBRWIsOERBQUNFO29CQUFPQyxTQUFTLElBQU1mLE9BQU9RLElBQUksQ0FBQztvQkFBTUksV0FBVTs4QkFDakQsNEVBQUNuQixrREFBS0E7d0JBQUN1QixLQUFJO3dCQUFpQkMsS0FBSTt3QkFBT0MsT0FBTzt3QkFBSUMsUUFBUTs7Ozs7Ozs7Ozs7OEJBSTVELDhEQUFDQztvQkFBS0MsVUFBVXBCO29CQUFjVyxXQUFVOztzQ0FFdEMsOERBQUNDOzs4Q0FDQyw4REFBQ1M7b0NBQU1WLFdBQVU7OENBQW9EOzs7Ozs7OENBQ3JFLDhEQUFDVztvQ0FDQ0MsTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWkMsT0FBTzlCO29DQUNQK0IsVUFBVSxDQUFDekIsSUFBTUwsU0FBU0ssRUFBRTBCLE1BQU0sQ0FBQ0YsS0FBSztvQ0FDeENkLFdBQVU7b0NBQ1ZpQixRQUFROzs7Ozs7Ozs7Ozs7c0NBS1osOERBQUNoQjs7OENBQ0MsOERBQUNTO29DQUFNVixXQUFVOzhDQUFvRDs7Ozs7OzhDQUNyRSw4REFBQ0M7b0NBQUlELFdBQVU7OENBQ1o7d0NBQUM7d0NBQU87d0NBQVU7d0NBQVU7d0NBQVM7d0NBQVE7d0NBQVU7d0NBQVE7cUNBQVEsQ0FBQ2tCLEdBQUcsQ0FBQyxDQUFDQyxrQkFDNUUsOERBQUNqQjs0Q0FFQ1UsTUFBSzs0Q0FDTFQsU0FBUyxJQUFNaEIsU0FBU2dDOzRDQUN4Qm5CLFdBQVcsbUNBRVYsT0FEQ2QsVUFBVWlDLElBQUksaUJBQWlCOzRDQUVqQ0MsT0FBTztnREFBRUMsaUJBQWlCRjs0Q0FBRTsyQ0FOdkJBOzs7Ozs7Ozs7Ozs7Ozs7O3NDQWFiLDhEQUFDakI7NEJBQ0NVLE1BQUs7NEJBQ0xaLFdBQVU7O2dDQUNYOzhDQUVDLDhEQUFDbkIsa0RBQUtBO29DQUFDdUIsS0FBSTtvQ0FBWUMsS0FBSTtvQ0FBWUMsT0FBTztvQ0FBSUMsUUFBUTtvQ0FBSWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEY7R0F6RXdCdkM7O1FBR1BILHNEQUFTQTs7O0tBSEZHIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHNoYWhrXFx0b2RvLWFwcFxcZnJvbnRlbmRcXGFwcFxcY3JlYXRlXFxwYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlVGFzaygpIHtcclxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoXCJcIik7IC8vIE5vIGRlZmF1bHQgY29sb3JcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgdGFza0RhdGEgPSB7IHRpdGxlLCBjb2xvcjogY29sb3IgfHwgXCJ3aGl0ZVwiLCBjb21wbGV0ZWQ6IGZhbHNlIH07XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdGFza3NcIiwgdGFza0RhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgdGFzazpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtaW4taC1zY3JlZW4gYmctWyMxQTFBMUFdIHRleHQtd2hpdGUgcC02XCI+XHJcbiAgICAgIHsvKiBDb250YWluZXIgZm9yIEFsaWdubWVudCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbGcgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgc3BhY2UteS02XCI+XHJcbiAgICAgICAgey8qIEJhY2sgQnV0dG9uICovfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfSBjbGFzc05hbWU9XCJzZWxmLXN0YXJ0IG1iLTRcIj5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIvYmFja2Fycm93LnBuZ1wiIGFsdD1cIkJhY2tcIiB3aWR0aD17MTR9IGhlaWdodD17MTR9IC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgIHsvKiBUYXNrIEZvcm0gKi99XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwidy1mdWxsIHNwYWNlLXktNlwiPlxyXG4gICAgICAgICAgey8qIFRpdGxlIElucHV0ICovfVxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtbWVkaXVtIG1iLTIgdGV4dC1bMTRweF0gdGV4dC1bIzRFQThERV1cIj5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4LiBCcnVzaCB5b3VyIHRlZXRoXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMyBiZy1bIzI2MjYyNl0gYm9yZGVyIGJvcmRlci1ncmF5LTYwMCByb3VuZGVkLW1kIHRleHQtd2hpdGUgdGV4dC1bMTRweF0gZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDAgb3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgey8qIENvbG9yIFNlbGVjdGlvbiAqL31cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBmb250LW1lZGl1bSBtYi0yIHRleHQtWzE0cHhdIHRleHQtWyM0RUE4REVdXCI+Q29sb3I8L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTNcIj5cclxuICAgICAgICAgICAgICB7W1wicmVkXCIsIFwib3JhbmdlXCIsIFwieWVsbG93XCIsIFwiZ3JlZW5cIiwgXCJibHVlXCIsIFwicHVycGxlXCIsIFwicGlua1wiLCBcImJyb3duXCJdLm1hcCgoYykgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2N9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDb2xvcihjKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy0xMCBoLTEwIHJvdW5kZWQtZnVsbCBib3JkZXItMiAke1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yID09PSBjID8gXCJib3JkZXItd2hpdGVcIiA6IFwiYm9yZGVyLXRyYW5zcGFyZW50XCJcclxuICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogU3VibWl0IEJ1dHRvbiAqL31cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0zIGJnLVsjMUU2RjlGXSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LVsxNHB4XSByb3VuZGVkLWxnIHRyYW5zaXRpb24tYWxsIGhvdmVyOmJnLVsjMTU1RTc1XSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAtMlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFkZCBUYXNrXHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvcGx1cy5wbmdcIiBhbHQ9XCJQbHVzIEljb25cIiB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IHByaW9yaXR5IC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJJbWFnZSIsImF4aW9zIiwiQ3JlYXRlVGFzayIsInRpdGxlIiwic2V0VGl0bGUiLCJjb2xvciIsInNldENvbG9yIiwicm91dGVyIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFza0RhdGEiLCJjb21wbGV0ZWQiLCJwb3N0IiwiaGVhZGVycyIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsIm1hcCIsImMiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInByaW9yaXR5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/create/page.tsx\n"));

/***/ })

});