/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./public/assets/icon_logo_img.svg":
/*!*****************************************!*\
  !*** ./public/assets/icon_logo_img.svg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"src\":\"/_next/static/media/icon_logo_img.f8c34917.svg\",\"height\":80,\"width\":206,\"blurWidth\":0,\"blurHeight\":0});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvYXNzZXRzL2ljb25fbG9nb19pbWcuc3ZnIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZSxDQUFDLDRHQUE0RyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxwY1xcRGVza3RvcFxc6rCc7J2466CI7Y+sXFxhZHZhbmNlZF9wcm9qZWN0XFxwdWJsaWNcXGFzc2V0c1xcaWNvbl9sb2dvX2ltZy5zdmciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL21lZGlhL2ljb25fbG9nb19pbWcuZjhjMzQ5MTcuc3ZnXCIsXCJoZWlnaHRcIjo4MCxcIndpZHRoXCI6MjA2LFwiYmx1cldpZHRoXCI6MCxcImJsdXJIZWlnaHRcIjowfTsiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/assets/icon_logo_img.svg\n");

/***/ }),

/***/ "./src/components/Gnb/NavBar.tsx":
/*!***************************************!*\
  !*** ./src/components/Gnb/NavBar.tsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _stores_useAuthStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/stores/useAuthStore */ \"./src/stores/useAuthStore.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_assets_icon_logo_img_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @public/assets/icon_logo_img.svg */ \"./public/assets/icon_logo_img.svg\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_useAuthStore__WEBPACK_IMPORTED_MODULE_3__]);\n_stores_useAuthStore__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nconst NavBar = ()=>{\n    const { isLoggedIn, nickname, role, setLogout } = (0,_stores_useAuthStore__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const renderLinks = ()=>{\n        if (!isLoggedIn) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: \"Maker 찾기\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\개인레포\\\\advanced_project\\\\src\\\\components\\\\Gnb\\\\NavBar.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\개인레포\\\\advanced_project\\\\src\\\\components\\\\Gnb\\\\NavBar.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false);\n        }\n        if (role === \"Dreamer\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            children: \"여행 요청\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\개인레포\\\\advanced_project\\\\src\\\\components\\\\Gnb\\\\NavBar.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\개인레포\\\\advanced_project\\\\src\\\\components\\\\Gnb\\\\NavBar.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            children: \"Maker 찾기\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\개인레포\\\\advanced_project\\\\src\\\\components\\\\Gnb\\\\NavBar.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\개인레포\\\\advanced_project\\\\src\\\\components\\\\Gnb\\\\NavBar.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            children: \"내 여행 관리\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\개인레포\\\\advanced_project\\\\src\\\\components\\\\Gnb\\\\NavBar.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\개인레포\\\\advanced_project\\\\src\\\\components\\\\Gnb\\\\NavBar.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true);\n        }\n        if (role === \"Maker\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            children: \"받은 요청\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\개인레포\\\\advanced_project\\\\src\\\\components\\\\Gnb\\\\NavBar.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\개인레포\\\\advanced_project\\\\src\\\\components\\\\Gnb\\\\NavBar.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            children: \"내 여행 관리\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\개인레포\\\\advanced_project\\\\src\\\\components\\\\Gnb\\\\NavBar.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\개인레포\\\\advanced_project\\\\src\\\\components\\\\Gnb\\\\NavBar.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex items-center justify-between py-6 bg-color-background-200 pc:px-32  tablet:px-5 mobile:px-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-2xl font-bold mr-20\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                src: _public_assets_icon_logo_img_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                alt: \"임시시로고\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\개인레포\\\\advanced_project\\\\src\\\\components\\\\Gnb\\\\NavBar.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\개인레포\\\\advanced_project\\\\src\\\\components\\\\Gnb\\\\NavBar.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\개인레포\\\\advanced_project\\\\src\\\\components\\\\Gnb\\\\NavBar.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"flex space-x-6 text-2lg bold\",\n                        children: renderLinks()\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\개인레포\\\\advanced_project\\\\src\\\\components\\\\Gnb\\\\NavBar.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\개인레포\\\\advanced_project\\\\src\\\\components\\\\Gnb\\\\NavBar.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center space-x-4\",\n                children: isLoggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center space-x-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                src: _public_assets_icon_logo_img_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                alt: \"로고\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\개인레포\\\\advanced_project\\\\src\\\\components\\\\Gnb\\\\NavBar.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-2lg medium\",\n                                children: nickname\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\개인레포\\\\advanced_project\\\\src\\\\components\\\\Gnb\\\\NavBar.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\개인레포\\\\advanced_project\\\\src\\\\components\\\\Gnb\\\\NavBar.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/login\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-6 py-3 bg-color-blue-300 rounded-2xl hover:bg-color-blue-200 text-white text-2lg semibold\",\n                        children: \"로그인\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\개인레포\\\\advanced_project\\\\src\\\\components\\\\Gnb\\\\NavBar.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\개인레포\\\\advanced_project\\\\src\\\\components\\\\Gnb\\\\NavBar.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\개인레포\\\\advanced_project\\\\src\\\\components\\\\Gnb\\\\NavBar.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\개인레포\\\\advanced_project\\\\src\\\\components\\\\Gnb\\\\NavBar.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HbmIvTmF2QmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDRztBQUNvQjtBQUNsQjtBQUNxQjtBQUVwRCxNQUFNSyxTQUFTO0lBQ2IsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLFFBQVEsRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUUsR0FBR1AsZ0VBQVlBO0lBRTlELE1BQU1RLGNBQWM7UUFDbEIsSUFBSSxDQUFDSixZQUFZO1lBQ2YscUJBQ0U7MEJBQ0UsNEVBQUNLOzhCQUNDLDRFQUFDVixrREFBSUE7d0JBQUNXLE1BQUs7a0NBQUk7Ozs7Ozs7Ozs7OztRQUl2QjtRQUVBLElBQUlKLFNBQVMsV0FBVztZQUN0QixxQkFDRTs7a0NBQ0UsOERBQUNHO2tDQUNDLDRFQUFDVixrREFBSUE7NEJBQUNXLE1BQUs7c0NBQUk7Ozs7Ozs7Ozs7O2tDQUVqQiw4REFBQ0Q7a0NBQ0MsNEVBQUNWLGtEQUFJQTs0QkFBQ1csTUFBSztzQ0FBSTs7Ozs7Ozs7Ozs7a0NBRWpCLDhEQUFDRDtrQ0FDQyw0RUFBQ1Ysa0RBQUlBOzRCQUFDVyxNQUFLO3NDQUFJOzs7Ozs7Ozs7Ozs7O1FBSXZCO1FBRUEsSUFBSUosU0FBUyxTQUFTO1lBQ3BCLHFCQUNFOztrQ0FDRSw4REFBQ0c7a0NBQ0MsNEVBQUNWLGtEQUFJQTs0QkFBQ1csTUFBSztzQ0FBSTs7Ozs7Ozs7Ozs7a0NBRWpCLDhEQUFDRDtrQ0FDQyw0RUFBQ1Ysa0RBQUlBOzRCQUFDVyxNQUFLO3NDQUFJOzs7Ozs7Ozs7Ozs7O1FBSXZCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNiLGtEQUFJQTs0QkFBQ1csTUFBSztzQ0FDVCw0RUFBQ1QsbURBQUtBO2dDQUFDYSxLQUFLWix3RUFBSUE7Z0NBQUVhLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSTFCLDhEQUFDQzt3QkFBR0osV0FBVTtrQ0FBZ0NKOzs7Ozs7Ozs7Ozs7MEJBRWhELDhEQUFDSztnQkFBSUQsV0FBVTswQkFDWlIsMkJBQ0M7OEJBQ0UsNEVBQUNTO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ1gsbURBQUtBO2dDQUFDYSxLQUFLWix3RUFBSUE7Z0NBQUVhLEtBQUk7Ozs7OzswQ0FDdEIsOERBQUNFO2dDQUFLTCxXQUFVOzBDQUFtQlA7Ozs7Ozs7Ozs7OztrREFJdkMsOERBQUNOLGtEQUFJQTtvQkFBQ1csTUFBSzs4QkFDVCw0RUFBQ1E7d0JBQU9OLFdBQVU7a0NBQStGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTdIO0FBRUEsaUVBQWVULE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGNcXERlc2t0b3BcXOqwnOyduOugiO2PrFxcYWR2YW5jZWRfcHJvamVjdFxcc3JjXFxjb21wb25lbnRzXFxHbmJcXE5hdkJhci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB1c2VBdXRoU3RvcmUgZnJvbSBcIkAvc3RvcmVzL3VzZUF1dGhTdG9yZVwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IGxvZ28gZnJvbSBcIkBwdWJsaWMvYXNzZXRzL2ljb25fbG9nb19pbWcuc3ZnXCI7XHJcblxyXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBpc0xvZ2dlZEluLCBuaWNrbmFtZSwgcm9sZSwgc2V0TG9nb3V0IH0gPSB1c2VBdXRoU3RvcmUoKTtcclxuXHJcbiAgY29uc3QgcmVuZGVyTGlua3MgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWlzTG9nZ2VkSW4pIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPk1ha2VyIOywvuq4sDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJvbGUgPT09IFwiRHJlYW1lclwiKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj7sl6ztlokg7JqU7LKtPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5NYWtlciDssL7quLA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPuuCtCDsl6ztlokg6rSA66asPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocm9sZSA9PT0gXCJNYWtlclwiKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj7rsJvsnYAg7JqU7LKtPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj7rgrQg7Jes7ZaJIOq0gOumrDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LTYgYmctY29sb3ItYmFja2dyb3VuZC0yMDAgcGM6cHgtMzIgIHRhYmxldDpweC01IG1vYmlsZTpweC00XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtci0yMFwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17bG9nb30gYWx0PVwi7J6E7Iuc7Iuc66Gc6rOgXCIgLz5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC02IHRleHQtMmxnIGJvbGRcIj57cmVuZGVyTGlua3MoKX08L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTRcIj5cclxuICAgICAgICB7aXNMb2dnZWRJbiA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yXCI+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17bG9nb30gYWx0PVwi66Gc6rOgXCIgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJsZyBtZWRpdW1cIj57bmlja25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtNiBweS0zIGJnLWNvbG9yLWJsdWUtMzAwIHJvdW5kZWQtMnhsIGhvdmVyOmJnLWNvbG9yLWJsdWUtMjAwIHRleHQtd2hpdGUgdGV4dC0ybGcgc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICDroZzqt7jsnbhcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwidXNlQXV0aFN0b3JlIiwiSW1hZ2UiLCJsb2dvIiwiTmF2QmFyIiwiaXNMb2dnZWRJbiIsIm5pY2tuYW1lIiwicm9sZSIsInNldExvZ291dCIsInJlbmRlckxpbmtzIiwibGkiLCJocmVmIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2Iiwic3JjIiwiYWx0IiwidWwiLCJzcGFuIiwiYnV0dG9uIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Gnb/NavBar.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Gnb_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Gnb/NavBar */ \"./src/components/Gnb/NavBar.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Gnb_NavBar__WEBPACK_IMPORTED_MODULE_2__]);\n_components_Gnb_NavBar__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Gnb_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\개인레포\\\\advanced_project\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"pt-16\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\개인레포\\\\advanced_project\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pc\\\\Desktop\\\\개인레포\\\\advanced_project\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUErQjtBQUVjO0FBRTlCLFNBQVNDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDNUQscUJBQ0U7OzBCQUNFLDhEQUFDSCw4REFBTUE7Ozs7OzBCQUNQLDhEQUFDSTtnQkFBS0MsV0FBVTswQkFDZCw0RUFBQ0g7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7OztBQUloQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxwY1xcRGVza3RvcFxc6rCc7J2466CI7Y+sXFxhZHZhbmNlZF9wcm9qZWN0XFxzcmNcXHBhZ2VzXFxfYXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCJAL2NvbXBvbmVudHMvR25iL05hdkJhclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdkJhciAvPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJwdC0xNlwiPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTmF2QmFyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibWFpbiIsImNsYXNzTmFtZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/stores/useAuthStore.tsx":
/*!*************************************!*\
  !*** ./src/stores/useAuthStore.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"zustand\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);\nzustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst useAuthStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({\n        isLoggedIn: false,\n        nickname: null,\n        role: null,\n        setLogin: (nickname, role)=>set({\n                isLoggedIn: true,\n                nickname,\n                role\n            }),\n        setLogout: ()=>set({\n                isLoggedIn: false,\n                nickname: null,\n                role: null\n            })\n    }));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAuthStore);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmVzL3VzZUF1dGhTdG9yZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUM7QUFZakMsTUFBTUMsZUFBZUQsK0NBQU1BLENBQVksQ0FBQ0UsTUFBUztRQUMvQ0MsWUFBWTtRQUNaQyxVQUFVO1FBQ1ZDLE1BQU07UUFDTkMsVUFBVSxDQUFDRixVQUFrQkMsT0FBZUgsSUFBSTtnQkFBRUMsWUFBWTtnQkFBTUM7Z0JBQVVDO1lBQUs7UUFDbkZFLFdBQVcsSUFBTUwsSUFBSTtnQkFBRUMsWUFBWTtnQkFBT0MsVUFBVTtnQkFBTUMsTUFBTTtZQUFLO0lBQ3ZFO0FBRUEsaUVBQWVKLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGNcXERlc2t0b3BcXOqwnOyduOugiO2PrFxcYWR2YW5jZWRfcHJvamVjdFxcc3JjXFxzdG9yZXNcXHVzZUF1dGhTdG9yZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSBcInp1c3RhbmRcIjtcclxuXHJcbnR5cGUgUm9sZSA9IFwiRHJlYW1lclwiIHwgXCJNYWtlclwiIHwgbnVsbDtcclxuXHJcbmludGVyZmFjZSBBdXRoU3RhdGUge1xyXG4gIGlzTG9nZ2VkSW46IGJvb2xlYW47XHJcbiAgbmlja25hbWU6IHN0cmluZyB8IG51bGw7XHJcbiAgcm9sZTogUm9sZTtcclxuICBzZXRMb2dpbjogKHVzZXJuYW1lOiBzdHJpbmcsIHJvbGU6IFJvbGUpID0+IHZvaWQ7XHJcbiAgc2V0TG9nb3V0OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCB1c2VBdXRoU3RvcmUgPSBjcmVhdGU8QXV0aFN0YXRlPigoc2V0KSA9PiAoe1xyXG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gIG5pY2tuYW1lOiBudWxsLFxyXG4gIHJvbGU6IG51bGwsXHJcbiAgc2V0TG9naW46IChuaWNrbmFtZTogc3RyaW5nLCByb2xlOiBSb2xlKSA9PiBzZXQoeyBpc0xvZ2dlZEluOiB0cnVlLCBuaWNrbmFtZSwgcm9sZSB9KSxcclxuICBzZXRMb2dvdXQ6ICgpID0+IHNldCh7IGlzTG9nZ2VkSW46IGZhbHNlLCBuaWNrbmFtZTogbnVsbCwgcm9sZTogbnVsbCB9KSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlQXV0aFN0b3JlO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlIiwidXNlQXV0aFN0b3JlIiwic2V0IiwiaXNMb2dnZWRJbiIsIm5pY2tuYW1lIiwicm9sZSIsInNldExvZ2luIiwic2V0TG9nb3V0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/stores/useAuthStore.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "zustand":
/*!**************************!*\
  !*** external "zustand" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();