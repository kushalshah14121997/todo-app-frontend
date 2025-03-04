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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CreateTask)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction CreateTask() {\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const taskData = {\n            title,\n            color,\n            completed: false\n        };\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:5000/api/tasks\", taskData, {\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            router.push(\"/\"); // Redirect to home\n        } catch (error) {\n            console.error(\"Error creating task:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col items-center min-h-screen bg-[#1A1A1A] text-white p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>router.push(\"/\"),\n                className: \"self-start mb-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/backarrow.png\",\n                    alt: \"Back\",\n                    className: \"w-6 h-6\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"w-full max-w-md space-y-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"text-sm font-medium\",\n                                children: \"Title\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Ex. Brush your teeth\",\n                                value: title,\n                                onChange: (e)=>setTitle(e.target.value),\n                                className: \"w-full p-3 mt-2 bg-[#2A2A2A] border border-gray-600 rounded-md text-white outline-none\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"text-sm font-medium\",\n                                children: \"Color\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex space-x-3 mt-2\",\n                                children: [\n                                    \"red\",\n                                    \"orange\",\n                                    \"yellow\",\n                                    \"green\",\n                                    \"blue\",\n                                    \"indigo\",\n                                    \"purple\",\n                                    \"pink\",\n                                    \"brown\"\n                                ].map((c)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        className: \"w-8 h-8 rounded-full border-2 \".concat(color === c ? \"border-white\" : \"border-transparent\"),\n                                        style: {\n                                            backgroundColor: c\n                                        },\n                                        onClick: ()=>setColor(c)\n                                    }, c, false, {\n                                        fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"w-full py-3 bg-[#1E6F9F] text-white font-bold rounded-lg text-lg transition-all hover:bg-[#155E75]\",\n                        children: \"Add Task\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(CreateTask, \"Th05tvL3EJkwhcn6ev+a0icM+oQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CreateTask;\nvar _c;\n$RefreshReg$(_c, \"CreateTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jcmVhdGUvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFd0M7QUFDZDtBQUNrQjtBQUU3QixTQUFTSTs7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ00sT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNUSxTQUFTTiwwREFBU0E7SUFFeEIsTUFBTU8sZUFBZSxPQUFPQztRQUMxQkEsRUFBRUMsY0FBYztRQUNoQixNQUFNQyxXQUFXO1lBQUVSO1lBQU9FO1lBQU9PLFdBQVc7UUFBTTtRQUVsRCxJQUFJO1lBQ0YsTUFBTVosNkNBQUtBLENBQUNhLElBQUksQ0FBQyxtQ0FBbUNGLFVBQVU7Z0JBQzVERyxTQUFTO29CQUFFLGdCQUFnQjtnQkFBbUI7WUFDaEQ7WUFDQVAsT0FBT1EsSUFBSSxDQUFDLE1BQU0sbUJBQW1CO1FBQ3ZDLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtRQUN4QztJQUNGO0lBRUEscUJBQ0UsOERBQUNFO1FBQUtDLFdBQVU7OzBCQUVkLDhEQUFDQztnQkFBT0MsU0FBUyxJQUFNZCxPQUFPUSxJQUFJLENBQUM7Z0JBQU1JLFdBQVU7MEJBQ2pELDRFQUFDRztvQkFBSUMsS0FBSTtvQkFBaUJDLEtBQUk7b0JBQU9MLFdBQVU7Ozs7Ozs7Ozs7OzBCQUtqRCw4REFBQ007Z0JBQUtDLFVBQVVsQjtnQkFBY1csV0FBVTs7a0NBRXRDLDhEQUFDUTs7MENBQ0MsOERBQUNDO2dDQUFNVCxXQUFVOzBDQUFzQjs7Ozs7OzBDQUN2Qyw4REFBQ1U7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLGFBQVk7Z0NBQ1pDLE9BQU83QjtnQ0FDUDhCLFVBQVUsQ0FBQ3hCLElBQU1MLFNBQVNLLEVBQUV5QixNQUFNLENBQUNGLEtBQUs7Z0NBQ3hDYixXQUFVO2dDQUNWZ0IsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUtaLDhEQUFDUjs7MENBQ0MsOERBQUNDO2dDQUFNVCxXQUFVOzBDQUFzQjs7Ozs7OzBDQUN2Qyw4REFBQ1E7Z0NBQUlSLFdBQVU7MENBQ1o7b0NBQUM7b0NBQU87b0NBQVU7b0NBQVU7b0NBQVM7b0NBQVE7b0NBQVU7b0NBQVU7b0NBQVE7aUNBQVEsQ0FBQ2lCLEdBQUcsQ0FBQyxDQUFDQyxrQkFDdEYsOERBQUNqQjt3Q0FFQ1UsTUFBSzt3Q0FDTFgsV0FBVyxpQ0FBcUYsT0FBcERkLFVBQVVnQyxJQUFJLGlCQUFpQjt3Q0FDM0VDLE9BQU87NENBQUVDLGlCQUFpQkY7d0NBQUU7d0NBQzVCaEIsU0FBUyxJQUFNZixTQUFTK0I7dUNBSm5CQTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FXYiw4REFBQ2pCO3dCQUNDVSxNQUFLO3dCQUNMWCxXQUFVO2tDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQXBFd0JqQjs7UUFHUEQsc0RBQVNBOzs7S0FIRkMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhaGtcXHRvZG8tYXBwXFxmcm9udGVuZFxcYXBwXFxjcmVhdGVcXHBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVRhc2soKSB7XHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB0YXNrRGF0YSA9IHsgdGl0bGUsIGNvbG9yLCBjb21wbGV0ZWQ6IGZhbHNlIH07XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdGFza3NcIiwgdGFza0RhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9cIik7IC8vIFJlZGlyZWN0IHRvIGhvbWVcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyB0YXNrOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG1pbi1oLXNjcmVlbiBiZy1bIzFBMUExQV0gdGV4dC13aGl0ZSBwLTZcIj5cclxuICAgICAgey8qIEJhY2sgQnV0dG9uIChVc2VzIFlvdXIgT3duIEltYWdlKSAqL31cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9IGNsYXNzTmFtZT1cInNlbGYtc3RhcnQgbWItNFwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL2JhY2thcnJvdy5wbmdcIiBhbHQ9XCJCYWNrXCIgY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+IFxyXG4gICAgICAgIHsvKiBSZXBsYWNlIFwiL2JhY2thcnJvdy5wbmdcIiB3aXRoIHlvdXIgYWN0dWFsIGltYWdlIHBhdGggKi99XHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgey8qIFRhc2sgRm9ybSAqL31cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LW1kIHNwYWNlLXktNlwiPlxyXG4gICAgICAgIHsvKiBUaXRsZSBJbnB1dCAqL31cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW1cIj5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4LiBCcnVzaCB5b3VyIHRlZXRoXCJcclxuICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMyBtdC0yIGJnLVsjMkEyQTJBXSBib3JkZXIgYm9yZGVyLWdyYXktNjAwIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIENvbG9yIFNlbGVjdGlvbiAqL31cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW1cIj5Db2xvcjwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0zIG10LTJcIj5cclxuICAgICAgICAgICAge1tcInJlZFwiLCBcIm9yYW5nZVwiLCBcInllbGxvd1wiLCBcImdyZWVuXCIsIFwiYmx1ZVwiLCBcImluZGlnb1wiLCBcInB1cnBsZVwiLCBcInBpbmtcIiwgXCJicm93blwiXS5tYXAoKGMpID0+IChcclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBrZXk9e2N9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctOCBoLTggcm91bmRlZC1mdWxsIGJvcmRlci0yICR7Y29sb3IgPT09IGMgPyBcImJvcmRlci13aGl0ZVwiIDogXCJib3JkZXItdHJhbnNwYXJlbnRcIn1gfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDb2xvcihjKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogU3VibWl0IEJ1dHRvbiAqL31cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0zIGJnLVsjMUU2RjlGXSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCByb3VuZGVkLWxnIHRleHQtbGcgdHJhbnNpdGlvbi1hbGwgaG92ZXI6YmctWyMxNTVFNzVdXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBBZGQgVGFza1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwidXNlUm91dGVyIiwiQ3JlYXRlVGFzayIsInRpdGxlIiwic2V0VGl0bGUiLCJjb2xvciIsInNldENvbG9yIiwicm91dGVyIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFza0RhdGEiLCJjb21wbGV0ZWQiLCJwb3N0IiwiaGVhZGVycyIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJtYWluIiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsImltZyIsInNyYyIsImFsdCIsImZvcm0iLCJvblN1Ym1pdCIsImRpdiIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJtYXAiLCJjIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/create/page.tsx\n"));

/***/ })

});