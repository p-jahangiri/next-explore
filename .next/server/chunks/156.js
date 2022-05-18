"use strict";
exports.id = 156;
exports.ids = [156];
exports.modules = {

/***/ 6741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "bP": () => (/* binding */ toggleMode)
/* harmony export */ });
/* unused harmony export filter */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const filter = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "projects",
    initialState: {
        viewMode: "grid"
    },
    reducers: {
        toggleMode: (state, action)=>{
            state.viewMode = action.payload;
        }
    }
});
const { toggleMode  } = filter.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter.reducer);


/***/ }),

/***/ 5956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c": () => (/* binding */ getProjectsByThunk)
});

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./src/gate/api.ts


function isEmpty(params) {
    return Object.keys(params).length === 0;
}
const client = external_axios_default().create({
    baseURL: "http://cgnation.php-master.ir/api/"
});
client.defaults.timeout = 20000;
client.interceptors.response.use((config)=>config
, (error)=>{
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    if (!expectedError) {
        // toast.error('An unexpected error occurrred.');
        console.error(error);
    }
    if (error.response.status === 401) {
        // store.dispatch(logout(''));
        router_default().push("/login");
    }
    return Promise.reject(error);
});
const call = async (method, url, data = {})=>{
    const accessToken = "";
    const headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
    };
    if (accessToken) {
        client.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
    }
    const request = {
        headers,
        method,
        url
    };
    if (!isEmpty(data)) {
        if (method === "get") {
            request.params = data;
        } else {
            request.data = data;
        }
    }
    try {
        const response = await client(request);
        return Promise.resolve(response.data);
    } catch (error) {
        let err = null;
        if (error.response) {
            err = error.response;
        } else if (error.request) {
            err = {
                message: error.request._response
            };
        } else {
            err = error;
        }
        return Promise.reject(err);
    }
};
const file = async (url, data, onUploadProgress)=>{
    try {
        const headers = {
            Accept: "application/json",
            "Content-Type": "multipart/form-data"
        };
        const response = await client({
            url,
            data,
            method: "post",
            headers,
            onUploadProgress
        });
        return Promise.resolve(response.data);
    } catch (error) {
        return Promise.reject(error.response);
    }
};
/* harmony default export */ const api = ({
    delete: (url, data)=>call("delete", url, data)
    ,
    get: (url, data)=>call("get", url, data)
    ,
    patch: (url, data)=>call("patch", url, data)
    ,
    post: (url, data)=>call("post", url, data)
    ,
    put: (url, data)=>call("put", url, data)
    ,
    file: (url, data, onUploadProgress)=>file(url, data, onUploadProgress)
});

;// CONCATENATED MODULE: ./src/gate/index.ts

const home = {
    getProjects: ()=>api.get("project")
};
/* harmony default export */ const gate = ({
    ...home
});

;// CONCATENATED MODULE: ./src/store/thunks/index.ts


const getProjectsByThunk = (0,toolkit_.createAsyncThunk)("filter/getProjectsByThunk", async ()=>{
    const res = await gate.getProjects();
    return res;
});


/***/ })

};
;