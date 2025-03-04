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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CreateTask)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction CreateTask() {\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"red\"); // Default color is red if not specified\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // Construct the task data with title, color, and completed status (false by default)\n        const taskData = {\n            title,\n            color,\n            completed: false\n        };\n        console.log(\"Sending request data to backend:\", taskData);\n        try {\n            // Send the task data to the backend\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:5000/api/tasks\", taskData, {\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                withCredentials: false\n            });\n            console.log(\"Response from server:\", response.data);\n            router.push(\"/\"); // Redirect to home page after creating the task\n        } catch (error) {\n            console.error(\"Error creating task:\", error);\n            if (axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].isAxiosError(error)) {\n                var _error_response, _error_response1;\n                console.error(\"Axios error response:\", (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data);\n                console.error(\"Axios error status:\", (_error_response1 = error.response) === null || _error_response1 === void 0 ? void 0 : _error_response1.status);\n            }\n        }\n    };\n    // Handle cancel button click (navigate back to home page)\n    const handleCancel = ()=>{\n        router.push(\"/\"); // Redirect to home page on cancel\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold mb-6\",\n                children: \"Create a New Task\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"space-y-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-sm font-medium text-gray-700\",\n                                htmlFor: \"title\",\n                                children: \"Task Title\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"title\",\n                                value: title,\n                                onChange: (e)=>setTitle(e.target.value),\n                                className: \"mt-2 p-2 w-full border rounded-md\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-sm font-medium text-gray-700\",\n                                htmlFor: \"color\",\n                                children: \"Task Color\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                id: \"color\",\n                                value: color,\n                                onChange: (e)=>setColor(e.target.value),\n                                className: \"mt-2 p-2 w-full border rounded-md\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"red\",\n                                        children: \"Red\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"green\",\n                                        children: \"Green\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"blue\",\n                                        children: \"Blue\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex space-x-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                onClick: handleCancel,\n                                className: \"px-4 py-2 bg-gray-600 text-white rounded\",\n                                children: \"Cancel\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"px-4 py-2 bg-blue-600 text-white rounded\",\n                                children: \"Create Task\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\shahk\\\\todo-app\\\\frontend\\\\app\\\\create\\\\page.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(CreateTask, \"XD1S6YpggVHAKIHARP6m1dbfBW8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CreateTask;\nvar _c;\n$RefreshReg$(_c, \"CreateTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jcmVhdGUvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFd0M7QUFDZDtBQUNrQjtBQUU3QixTQUFTSTs7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ00sT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQyxRQUFRLHdDQUF3QztJQUNuRixNQUFNUSxTQUFTTiwwREFBU0E7SUFFeEIsTUFBTU8sZUFBZSxPQUFPQztRQUMxQkEsRUFBRUMsY0FBYztRQUVoQixxRkFBcUY7UUFDckYsTUFBTUMsV0FBVztZQUFFUjtZQUFPRTtZQUFPTyxXQUFXO1FBQU07UUFDbERDLFFBQVFDLEdBQUcsQ0FBQyxvQ0FBb0NIO1FBRWhELElBQUk7WUFDRixvQ0FBb0M7WUFDcEMsTUFBTUksV0FBVyxNQUFNZiw2Q0FBS0EsQ0FBQ2dCLElBQUksQ0FBQyxtQ0FBbUNMLFVBQVU7Z0JBQzdFTSxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLGlCQUFpQjtZQUNuQjtZQUVBTCxRQUFRQyxHQUFHLENBQUMseUJBQXlCQyxTQUFTSSxJQUFJO1lBQ2xEWixPQUFPYSxJQUFJLENBQUMsTUFBTSxnREFBZ0Q7UUFDcEUsRUFBRSxPQUFPQyxPQUFZO1lBQ25CUixRQUFRUSxLQUFLLENBQUMsd0JBQXdCQTtZQUN0QyxJQUFJckIsNkNBQUtBLENBQUNzQixZQUFZLENBQUNELFFBQVE7b0JBQ1VBLGlCQUNGQTtnQkFEckNSLFFBQVFRLEtBQUssQ0FBQywwQkFBeUJBLGtCQUFBQSxNQUFNTixRQUFRLGNBQWRNLHNDQUFBQSxnQkFBZ0JGLElBQUk7Z0JBQzNETixRQUFRUSxLQUFLLENBQUMsd0JBQXVCQSxtQkFBQUEsTUFBTU4sUUFBUSxjQUFkTSx1Q0FBQUEsaUJBQWdCRSxNQUFNO1lBQzdEO1FBQ0Y7SUFDRjtJQUVBLDBEQUEwRDtJQUMxRCxNQUFNQyxlQUFlO1FBQ25CakIsT0FBT2EsSUFBSSxDQUFDLE1BQU0sa0NBQWtDO0lBQ3REO0lBRUEscUJBQ0UsOERBQUNLO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBMEI7Ozs7OzswQkFDeEMsOERBQUNFO2dCQUFLQyxVQUFVckI7Z0JBQWNrQixXQUFVOztrQ0FDdEMsOERBQUNJOzswQ0FDQyw4REFBQ0M7Z0NBQU1MLFdBQVU7Z0NBQTBDTSxTQUFROzBDQUFROzs7Ozs7MENBRzNFLDhEQUFDQztnQ0FDQ0MsTUFBSztnQ0FDTEMsSUFBRztnQ0FDSEMsT0FBT2pDO2dDQUNQa0MsVUFBVSxDQUFDNUIsSUFBTUwsU0FBU0ssRUFBRTZCLE1BQU0sQ0FBQ0YsS0FBSztnQ0FDeENWLFdBQVU7Z0NBQ1ZhLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FJWiw4REFBQ1Q7OzBDQUNDLDhEQUFDQztnQ0FBTUwsV0FBVTtnQ0FBMENNLFNBQVE7MENBQVE7Ozs7OzswQ0FHM0UsOERBQUNRO2dDQUNDTCxJQUFHO2dDQUNIQyxPQUFPL0I7Z0NBQ1BnQyxVQUFVLENBQUM1QixJQUFNSCxTQUFTRyxFQUFFNkIsTUFBTSxDQUFDRixLQUFLO2dDQUN4Q1YsV0FBVTs7a0RBRVYsOERBQUNlO3dDQUFPTCxPQUFNO2tEQUFNOzs7Ozs7a0RBQ3BCLDhEQUFDSzt3Q0FBT0wsT0FBTTtrREFBUTs7Ozs7O2tEQUN0Qiw4REFBQ0s7d0NBQU9MLE9BQU07a0RBQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJekIsOERBQUNOO3dCQUFJSixXQUFVOzswQ0FDYiw4REFBQ2dCO2dDQUNDUixNQUFLO2dDQUNMUyxTQUFTbkI7Z0NBQ1RFLFdBQVU7MENBQ1g7Ozs7OzswQ0FHRCw4REFBQ2dCO2dDQUNDUixNQUFLO2dDQUNMUixXQUFVOzBDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQXpGd0J4Qjs7UUFHUEQsc0RBQVNBOzs7S0FIRkMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2hhaGtcXHRvZG8tYXBwXFxmcm9udGVuZFxcYXBwXFxjcmVhdGVcXHBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVRhc2soKSB7XHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKFwicmVkXCIpOyAvLyBEZWZhdWx0IGNvbG9yIGlzIHJlZCBpZiBub3Qgc3BlY2lmaWVkXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyBDb25zdHJ1Y3QgdGhlIHRhc2sgZGF0YSB3aXRoIHRpdGxlLCBjb2xvciwgYW5kIGNvbXBsZXRlZCBzdGF0dXMgKGZhbHNlIGJ5IGRlZmF1bHQpXHJcbiAgICBjb25zdCB0YXNrRGF0YSA9IHsgdGl0bGUsIGNvbG9yLCBjb21wbGV0ZWQ6IGZhbHNlIH07XHJcbiAgICBjb25zb2xlLmxvZyhcIlNlbmRpbmcgcmVxdWVzdCBkYXRhIHRvIGJhY2tlbmQ6XCIsIHRhc2tEYXRhKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBTZW5kIHRoZSB0YXNrIGRhdGEgdG8gdGhlIGJhY2tlbmRcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS90YXNrc1wiLCB0YXNrRGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZSwgLy8gRXhwbGljaXRseSBkaXNhYmxlIHNlbmRpbmcgY3JlZGVudGlhbHNcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcIlJlc3BvbnNlIGZyb20gc2VydmVyOlwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpOyAvLyBSZWRpcmVjdCB0byBob21lIHBhZ2UgYWZ0ZXIgY3JlYXRpbmcgdGhlIHRhc2tcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIHRhc2s6XCIsIGVycm9yKTtcclxuICAgICAgaWYgKGF4aW9zLmlzQXhpb3NFcnJvcihlcnJvcikpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQXhpb3MgZXJyb3IgcmVzcG9uc2U6XCIsIGVycm9yLnJlc3BvbnNlPy5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQXhpb3MgZXJyb3Igc3RhdHVzOlwiLCBlcnJvci5yZXNwb25zZT8uc3RhdHVzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIEhhbmRsZSBjYW5jZWwgYnV0dG9uIGNsaWNrIChuYXZpZ2F0ZSBiYWNrIHRvIGhvbWUgcGFnZSlcclxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChcIi9cIik7IC8vIFJlZGlyZWN0IHRvIGhvbWUgcGFnZSBvbiBjYW5jZWxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwicC02XCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNlwiPkNyZWF0ZSBhIE5ldyBUYXNrPC9oMT5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIiBodG1sRm9yPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgVGFzayBUaXRsZVxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwidGl0bGVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0yIHAtMiB3LWZ1bGwgYm9yZGVyIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIiBodG1sRm9yPVwiY29sb3JcIj5cclxuICAgICAgICAgICAgVGFzayBDb2xvclxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgaWQ9XCJjb2xvclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtjb2xvcn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb2xvcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTIgcC0yIHctZnVsbCBib3JkZXIgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyZWRcIj5SZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImdyZWVuXCI+R3JlZW48L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJsdWVcIj5CbHVlPC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNFwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2FuY2VsfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctZ3JheS02MDAgdGV4dC13aGl0ZSByb3VuZGVkXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDcmVhdGUgVGFza1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJDcmVhdGVUYXNrIiwidGl0bGUiLCJzZXRUaXRsZSIsImNvbG9yIiwic2V0Q29sb3IiLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXNrRGF0YSIsImNvbXBsZXRlZCIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsInBvc3QiLCJoZWFkZXJzIiwid2l0aENyZWRlbnRpYWxzIiwiZGF0YSIsInB1c2giLCJlcnJvciIsImlzQXhpb3NFcnJvciIsInN0YXR1cyIsImhhbmRsZUNhbmNlbCIsIm1haW4iLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImRpdiIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInJlcXVpcmVkIiwic2VsZWN0Iiwib3B0aW9uIiwiYnV0dG9uIiwib25DbGljayJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/create/page.tsx\n"));

/***/ })

});