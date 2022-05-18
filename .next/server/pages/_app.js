"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/store/thunks/index.ts + 2 modules
var thunks = __webpack_require__(5956);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: ./src/store/reducers/projects.ts


const projects = (0,toolkit_.createSlice)({
    name: "projects",
    initialState: {
        projects: [],
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(thunks/* getProjectsByThunk.fulfilled */.c.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.projects = action.payload;
        });
        builder.addCase(thunks/* getProjectsByThunk.pending */.c.pending, (state)=>{
            state.isLoading = true;
        });
        builder.addCase(thunks/* getProjectsByThunk.rejected */.c.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        });
    }
});
/* harmony default export */ const reducers_projects = (projects.reducer);

;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
// EXTERNAL MODULE: ./src/store/reducers/filter.ts
var filter = __webpack_require__(6741);
;// CONCATENATED MODULE: ./src/store/index.ts




const store = (0,toolkit_.configureStore)({
    reducer: {
        filter: filter/* default */.ZP,
        projects: reducers_projects
    },
    middleware: [
        (external_redux_thunk_default())
    ]
});

;// CONCATENATED MODULE: ./src/pages/_app.tsx





function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [156], () => (__webpack_exec__(2298)));
module.exports = __webpack_exports__;

})();