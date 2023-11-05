(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/VideoPlayer/VideoPlayer"],{

/***/ 134:
/*!************************************************************************************************************!*\
  !*** /Users/apple/Documents/HBuilderProjects/uni_blp/main.js?{"page":"pages%2FVideoPlayer%2FVideoPlayer"} ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _VideoPlayer = _interopRequireDefault(__webpack_require__(/*! ./pages/VideoPlayer/VideoPlayer.vue */ 135));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_VideoPlayer.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 135:
/*!*****************************************************************************************!*\
  !*** /Users/apple/Documents/HBuilderProjects/uni_blp/pages/VideoPlayer/VideoPlayer.vue ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VideoPlayer_vue_vue_type_template_id_2dc17480_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoPlayer.vue?vue&type=template&id=2dc17480&scoped=true& */ 136);
/* harmony import */ var _VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoPlayer.vue?vue&type=script&lang=js& */ 138);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _VideoPlayer_vue_vue_type_style_index_0_id_2dc17480_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VideoPlayer.vue?vue&type=style&index=0&id=2dc17480&lang=scss&scoped=true& */ 140);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VideoPlayer_vue_vue_type_template_id_2dc17480_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VideoPlayer_vue_vue_type_template_id_2dc17480_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2dc17480",
  null,
  false,
  _VideoPlayer_vue_vue_type_template_id_2dc17480_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/VideoPlayer/VideoPlayer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 136:
/*!************************************************************************************************************************************!*\
  !*** /Users/apple/Documents/HBuilderProjects/uni_blp/pages/VideoPlayer/VideoPlayer.vue?vue&type=template&id=2dc17480&scoped=true& ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_template_id_2dc17480_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./VideoPlayer.vue?vue&type=template&id=2dc17480&scoped=true& */ 137);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_template_id_2dc17480_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_template_id_2dc17480_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_template_id_2dc17480_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_template_id_2dc17480_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 137:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/apple/Documents/HBuilderProjects/uni_blp/pages/VideoPlayer/VideoPlayer.vue?vue&type=template&id=2dc17480&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniNavBar: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar */ "uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue */ 185))
    },
    uPopup: function () {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-popup/u-popup */ "uview-ui/components/u-popup/u-popup").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-popup/u-popup.vue */ 192))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = JSON.stringify(_vm.current_video_list_info)
  var g1 =
    g0 !== "{}" ? this.current_video_list_info.info[0].video.length : null
  var g2 =
    g0 !== "{}" ? this.current_video_list_info.info[0].video.length : null
  var g3 =
    g0 !== "{}" ? this.current_video_list_info.info[0].video.length : null
  var l0 =
    g0 !== "{}" && g3 > 0
      ? _vm.__map(
          _vm.current_video_list_info.info[0].video,
          function (item, index) {
            var $orig = _vm.__get_orig(item)
            var g4 = item.includes(_vm.current_player_url.originUrl)
            var g5 = item.split("$")
            return {
              $orig: $orig,
              g4: g4,
              g5: g5,
            }
          }
        )
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
        g2: g2,
        g3: g3,
        l0: l0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 138:
/*!******************************************************************************************************************!*\
  !*** /Users/apple/Documents/HBuilderProjects/uni_blp/pages/VideoPlayer/VideoPlayer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./VideoPlayer.vue?vue&type=script&lang=js& */ 139);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 139:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/apple/Documents/HBuilderProjects/uni_blp/pages/VideoPlayer/VideoPlayer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _axios = _interopRequireDefault(__webpack_require__(/*! @/src/api/axios.js */ 74));
var _uniRequest = __webpack_require__(/*! @/src/api/uniRequest.js */ 122);
var _url = __webpack_require__(/*! @/src/config/url.js */ 65);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var CustomTag = function CustomTag() {
  __webpack_require__.e(/*! require.ensure | src/components/CustomHotSearch/CustomTag */ "src/components/CustomHotSearch/CustomTag").then((function () {
    return resolve(__webpack_require__(/*! @/src/components/CustomHotSearch/CustomTag.vue */ 178));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Loading = function Loading() {
  __webpack_require__.e(/*! require.ensure | src/components/CustomLoading/CustomLoading */ "src/components/CustomLoading/CustomLoading").then((function () {
    return resolve(__webpack_require__(/*! @/src/components/CustomLoading/CustomLoading.vue */ 171));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  components: {
    CustomTag: CustomTag,
    Loading: Loading
  },
  data: function data() {
    return {
      current_player_url: {
        originUrl: '',
        // 原始url
        parseUrl: '' //解析后的url
      },

      poster_image_url: '',
      //当前视频封面
      current_video_info: '',
      //当前视频信息
      current_video_list_info: {},
      //当前视频列表信息

      show: false,
      //是否展示播放列表
      containerHeight: 0,
      leftHeight: 44,
      is_loading: false,
      param: [],
      //分享使用
      retryCount: 0 // 解析失败，重试，最多两次
    };
  },

  watch: {
    show: function show(n) {
      // console.log(n);
    }
  },
  onLoad: function onLoad(e) {
    debugger;
    this.retryCount = 1;
    this.param = e.value;
    this.is_loading = true;
    if (JSON.stringify(e) === "{}") {
      var json = '{"flag":0,"flag_name":"kuaikan","from":"BL高清D","type":"日本动漫","id":"64161","title":"龙珠超：布罗利","img:":"null"}';
      this.current_video_info = JSON.parse(json);
      this.requestList(true);
    } else {
      // debugger
      var systemInfo = wx.getSystemInfoSync();
      this.containerHeight = systemInfo.statusBarHeight + 44 + 'px';
      if (JSON.stringify(e) === '{}') return;
      // this.$store.state.loading = true

      this.current_video_info = JSON.parse(e.value) || '';
      // console.log(e.value)
      this.requestList(false);
    }
  },
  methods: {
    videoErrorHandle: function videoErrorHandle(e) {
      console.log('视频错误信息:' + e.target.errMsg);
    },
    loadedmetadata: function loadedmetadata() {
      // debugger
      this.$store.state.loading = false;
    },
    onReady: function onReady() {
      // debugger
      this.videoContext = uni.createVideoContext('myVideo');
    },
    longPress: function longPress() {
      console.log("longPress------");
      this.videoContext.playbackRate(Number(2));
    },
    touchend: function touchend() {
      this.videoContext.playbackRate(Number(1));
    },
    requestList: function requestList() {
      var _this = this;
      var local = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (local === false) {
        var that = this;
        var url = (0, _url.url_videoPlayer_url)(this.current_video_info.flag, this.current_video_info.id);
        (0, _uniRequest.request)(url).then(function (res) {
          // debugger
          var dataStr = "{" + res.split('({')[1].split('})')[0] + "}";
          // let strArr = data.split('(')[1].split(')')[0]
          var result = JSON.parse(dataStr);
          debugger;
          that.poster_image_url = result.pic || '';
          that.current_video_list_info = result;
          that.handleCurrent_player_url(_this.current_video_list_info.url);
          // debugger
          console.log('VideoPlayer:' + result);
          // this.$store.state.loading = false
          _this.is_loading = false;
        });
      } else {
        // debugger
        var dataStr = '{"success":1,"code":200,"url":"https:\/\/vip.kuaikan-cdn2.com\/20230524\/IRYhvhUl\/index.m3u8","pic":"https:\/\/img.kuaikanzy.net\/upload\/vod\/20230315-10\/6f10df39caf9f9c07a35f8d9d12afb9c.jpg","title":"七龙珠(日)","part":1,"type":"kuaikan","info":[{"flag":"kuaikan","flag_name":"BL高清D","part":152,"video":["1$https:\/\/vip.kuaikan-cdn2.com\/20230524\/IRYhvhUl\/index.m3u8$","2$https:\/\/vip.kuaikan-cdn2.com\/20230524\/TUWPpKPb\/index.m3u8$","3$https:\/\/vip.kuaikan-cdn2.com\/20230524\/x7I0UZKo\/index.m3u8$","4$https:\/\/vip.kuaikan-cdn2.com\/20230524\/v5MNBXjE\/index.m3u8$","5$https:\/\/vip.kuaikan-cdn2.com\/20230524\/k7UWHM6T\/index.m3u8$","6$https:\/\/vip.kuaikan-cdn2.com\/20230524\/6O2zzIvs\/index.m3u8$","7$https:\/\/vip.kuaikan-cdn2.com\/20230524\/XajnRBeu\/index.m3u8$","8$https:\/\/vip.kuaikan-cdn2.com\/20230524\/pSmRsrJ6\/index.m3u8$","9$https:\/\/vip.kuaikan-cdn2.com\/20230524\/8L6exWzO\/index.m3u8$","10$https:\/\/vip.kuaikan-cdn2.com\/20230524\/KMSGnHdV\/index.m3u8$","11$https:\/\/vip.kuaikan-cdn2.com\/20230524\/1P0XySJD\/index.m3u8$","12$https:\/\/vip.kuaikan-cdn2.com\/20230524\/3jzO4S9H\/index.m3u8$","13$https:\/\/vip.kuaikan-cdn2.com\/20230524\/clxm8cVA\/index.m3u8$","14$https:\/\/vip.kuaikan-cdn2.com\/20230524\/ZG8wTZlm\/index.m3u8$","15$https:\/\/vip.kuaikan-cdn2.com\/20230524\/SmY8v1Bz\/index.m3u8$","16$https:\/\/vip.kuaikan-cdn2.com\/20230524\/tKY6g7eR\/index.m3u8$","17$https:\/\/vip.kuaikan-cdn2.com\/20230524\/fWnm75zv\/index.m3u8$","18$https:\/\/vip.kuaikan-cdn2.com\/20230524\/K65gCbYg\/index.m3u8$","19$https:\/\/vip.kuaikan-cdn2.com\/20230524\/9b5KPlJR\/index.m3u8$","20$https:\/\/vip.kuaikan-cdn2.com\/20230524\/viCSCt33\/index.m3u8$","21$https:\/\/vip.kuaikan-cdn2.com\/20230524\/fOHhOYND\/index.m3u8$","22$https:\/\/vip.kuaikan-cdn2.com\/20230524\/nGhMHUil\/index.m3u8$","23$https:\/\/vip.kuaikan-cdn2.com\/20230524\/Nf0b0mhT\/index.m3u8$","24$https:\/\/vip.kuaikan-cdn2.com\/20230524\/UX2knTIn\/index.m3u8$","25$https:\/\/vip.kuaikan-cdn2.com\/20230524\/fyuoOoGZ\/index.m3u8$","26$https:\/\/vip.kuaikan-cdn2.com\/20230524\/PIkr6E7a\/index.m3u8$","27$https:\/\/vip.kuaikan-cdn2.com\/20230524\/enJdPE4Y\/index.m3u8$","28$https:\/\/vip.kuaikan-cdn2.com\/20230524\/nhuO7vhq\/index.m3u8$","29$https:\/\/vip.kuaikan-cdn2.com\/20230524\/7rlR9PzG\/index.m3u8$","30$https:\/\/vip.kuaikan-cdn2.com\/20230524\/IebtJ8SV\/index.m3u8$","31$https:\/\/vip.kuaikan-cdn2.com\/20230524\/U9ggCtts\/index.m3u8$","32$https:\/\/vip.kuaikan-cdn2.com\/20230524\/ybxK8o13\/index.m3u8$","33$https:\/\/vip.kuaikan-cdn2.com\/20230524\/ITbqrkpT\/index.m3u8$","34$https:\/\/vip.kuaikan-cdn2.com\/20230524\/UqOeqxSS\/index.m3u8$","35$https:\/\/vip.kuaikan-cdn2.com\/20230524\/bvY79Tpn\/index.m3u8$","36$https:\/\/vip.kuaikan-cdn2.com\/20230524\/ytuJTadf\/index.m3u8$","37$https:\/\/vip.kuaikan-cdn2.com\/20230524\/tQQY69wU\/index.m3u8$","38$https:\/\/vip.kuaikan-cdn2.com\/20230524\/U2Z3FFOc\/index.m3u8$","39$https:\/\/vip.kuaikan-cdn2.com\/20230524\/6dZWyLE6\/index.m3u8$","40$https:\/\/vip.kuaikan-cdn2.com\/20230524\/BJGEKPvO\/index.m3u8$","41$https:\/\/vip.kuaikan-cdn2.com\/20230524\/vYSjw8iP\/index.m3u8$","42$https:\/\/vip.kuaikan-cdn2.com\/20230524\/rUWi99C3\/index.m3u8$","43$https:\/\/vip.kuaikan-cdn2.com\/20230524\/HIN5OmKS\/index.m3u8$","44$https:\/\/vip.kuaikan-cdn2.com\/20230524\/ltSqnFSZ\/index.m3u8$","45$https:\/\/vip.kuaikan-cdn2.com\/20230524\/blPHnTz1\/index.m3u8$","46$https:\/\/vip.kuaikan-cdn2.com\/20230524\/h0veaqrj\/index.m3u8$","47$https:\/\/vip.kuaikan-cdn2.com\/20230524\/4R3o5iOv\/index.m3u8$","48$https:\/\/vip.kuaikan-cdn2.com\/20230524\/jFe3nNa3\/index.m3u8$","49$https:\/\/vip.kuaikan-cdn2.com\/20230524\/PfYmR0IT\/index.m3u8$","50$https:\/\/vip.kuaikan-cdn2.com\/20230524\/3GhmHW0q\/index.m3u8$","51$https:\/\/vip.kuaikan-cdn2.com\/20230524\/JxJe4KZY\/index.m3u8$","52$https:\/\/vip.kuaikan-cdn2.com\/20230524\/4RACwhm6\/index.m3u8$","53$https:\/\/vip.kuaikan-cdn2.com\/20230524\/MamNos1S\/index.m3u8$","54$https:\/\/vip.kuaikan-cdn2.com\/20230524\/88aOwQzl\/index.m3u8$","55$https:\/\/vip.kuaikan-cdn2.com\/20230524\/v0Tb4K6O\/index.m3u8$","56$https:\/\/vip.kuaikan-cdn2.com\/20230524\/h53bFjwE\/index.m3u8$","57$https:\/\/vip.kuaikan-cdn2.com\/20230524\/BCL1QBlf\/index.m3u8$","58$https:\/\/vip.kuaikan-cdn2.com\/20230524\/7SKRprQt\/index.m3u8$","59$https:\/\/vip.kuaikan-cdn2.com\/20230524\/Vt9QsMl2\/index.m3u8$","60$https:\/\/vip.kuaikan-cdn2.com\/20230524\/yYDKBX1K\/index.m3u8$","61$https:\/\/vip.kuaikan-cdn2.com\/20230524\/A9LYj9uT\/index.m3u8$","62$https:\/\/vip.kuaikan-cdn2.com\/20230524\/fsCaMpBB\/index.m3u8$","63$https:\/\/vip.kuaikan-cdn2.com\/20230524\/I3nZ0FKi\/index.m3u8$","64$https:\/\/vip.kuaikan-cdn2.com\/20230524\/XXsMxAzc\/index.m3u8$","65$https:\/\/vip.kuaikan-cdn2.com\/20230524\/bbePfN8Y\/index.m3u8$","66$https:\/\/vip.kuaikan-cdn2.com\/20230524\/LN9PsO3s\/index.m3u8$","67$https:\/\/vip.kuaikan-cdn2.com\/20230524\/XnwFKFQP\/index.m3u8$","68$https:\/\/vip.kuaikan-cdn2.com\/20230524\/ZTrendPW\/index.m3u8$","69$https:\/\/vip.kuaikan-cdn2.com\/20230524\/oCdiJjfi\/index.m3u8$","70$https:\/\/vip.kuaikan-cdn2.com\/20230524\/uPlunX3R\/index.m3u8$","71$https:\/\/vip.kuaikan-cdn2.com\/20230524\/emazruW3\/index.m3u8$","72$https:\/\/vip.kuaikan-cdn2.com\/20230524\/DtbALDnb\/index.m3u8$","73$https:\/\/vip.kuaikan-cdn2.com\/20230524\/sT2yYs3j\/index.m3u8$","74$https:\/\/vip.kuaikan-cdn2.com\/20230524\/D2by6wST\/index.m3u8$","75$https:\/\/vip.kuaikan-cdn2.com\/20230524\/WgFFk6cL\/index.m3u8$","76$https:\/\/vip.kuaikan-cdn2.com\/20230524\/IfwOn2fC\/index.m3u8$","77$https:\/\/vip.kuaikan-cdn2.com\/20230524\/YCIq25sO\/index.m3u8$","78$https:\/\/vip.kuaikan-cdn2.com\/20230524\/oIf0teOd\/index.m3u8$","79$https:\/\/vip.kuaikan-cdn2.com\/20230524\/FgpnomVn\/index.m3u8$","80$https:\/\/vip.kuaikan-cdn2.com\/20230524\/WWoKfwoO\/index.m3u8$","81$https:\/\/vip.kuaikan-cdn2.com\/20230524\/G7hRgURS\/index.m3u8$","82$https:\/\/vip.kuaikan-cdn2.com\/20230524\/VMy0bFg5\/index.m3u8$","83$https:\/\/vip.kuaikan-cdn2.com\/20230524\/FEUiGy7i\/index.m3u8$","84$https:\/\/vip.kuaikan-cdn2.com\/20230524\/PNkmMk23\/index.m3u8$","85$https:\/\/vip.kuaikan-cdn2.com\/20230524\/xcvnlUpN\/index.m3u8$","86$https:\/\/vip.kuaikan-cdn2.com\/20230524\/vgG2F0kE\/index.m3u8$","87$https:\/\/vip.kuaikan-cdn2.com\/20230524\/ot8VqZAy\/index.m3u8$","88$https:\/\/vip.kuaikan-cdn2.com\/20230524\/XzgMHqKk\/index.m3u8$","89$https:\/\/vip.kuaikan-cdn2.com\/20230524\/d0YOVGwR\/index.m3u8$","90$https:\/\/vip.kuaikan-cdn2.com\/20230524\/zHwzmAJZ\/index.m3u8$","91$https:\/\/vip.kuaikan-cdn2.com\/20230524\/exFb2d6w\/index.m3u8$","92$https:\/\/vip.kuaikan-cdn2.com\/20230524\/6ifs3DQm\/index.m3u8$","93$https:\/\/vip.kuaikan-cdn2.com\/20230524\/Jd8vjGX6\/index.m3u8$","94$https:\/\/vip.kuaikan-cdn2.com\/20230524\/KkOfoAer\/index.m3u8$","95$https:\/\/vip.kuaikan-cdn2.com\/20230524\/rP54dAD8\/index.m3u8$","96$https:\/\/vip.kuaikan-cdn2.com\/20230524\/MCiokRN0\/index.m3u8$","97$https:\/\/vip.kuaikan-cdn2.com\/20230524\/au7gkabZ\/index.m3u8$","98$https:\/\/vip.kuaikan-cdn2.com\/20230524\/NdEACHDE\/index.m3u8$","99$https:\/\/vip.kuaikan-cdn2.com\/20230524\/V7UAzSXS\/index.m3u8$","100$https:\/\/vip.kuaikan-cdn2.com\/20230524\/C8LhssC9\/index.m3u8$","101$https:\/\/vip.kuaikan-cdn2.com\/20230524\/2zT5ZaHT\/index.m3u8$","102$https:\/\/vip.kuaikan-cdn2.com\/20230524\/rflx5bNH\/index.m3u8$","103$https:\/\/vip.kuaikan-cdn2.com\/20230524\/DltTxypZ\/index.m3u8$","104$https:\/\/vip.kuaikan-cdn2.com\/20230524\/mJdRgjwY\/index.m3u8$","105$https:\/\/vip.kuaikan-cdn2.com\/20230524\/OJaATceL\/index.m3u8$","106$https:\/\/vip.kuaikan-cdn2.com\/20230524\/icT3sHyp\/index.m3u8$","107$https:\/\/vip.kuaikan-cdn2.com\/20230524\/bxwWj2Em\/index.m3u8$","108$https:\/\/vip.kuaikan-cdn2.com\/20230524\/55ZrHLax\/index.m3u8$","109$https:\/\/vip.kuaikan-cdn2.com\/20230524\/HK6IFzIC\/index.m3u8$","110$https:\/\/vip.kuaikan-cdn2.com\/20230524\/1n9RSNrv\/index.m3u8$","111$https:\/\/vip.kuaikan-cdn2.com\/20230524\/VIHtEAgy\/index.m3u8$","112$https:\/\/vip.kuaikan-cdn2.com\/20230524\/U11piqw1\/index.m3u8$","113$https:\/\/vip.kuaikan-cdn2.com\/20230524\/mzrdRswn\/index.m3u8$","114$https:\/\/vip.kuaikan-cdn2.com\/20230524\/5fKDcEZR\/index.m3u8$","115$https:\/\/vip.kuaikan-cdn2.com\/20230524\/fF50TE0H\/index.m3u8$","116$https:\/\/vip.kuaikan-cdn2.com\/20230524\/VkcYO4vs\/index.m3u8$","117$https:\/\/vip.kuaikan-cdn2.com\/20230524\/c0GDN8Q9\/index.m3u8$","118$https:\/\/vip.kuaikan-cdn2.com\/20230524\/l8hOPiDB\/index.m3u8$","119$https:\/\/vip.kuaikan-cdn2.com\/20230524\/pBOYlJLv\/index.m3u8$","120$https:\/\/vip.kuaikan-cdn2.com\/20230524\/S1tstl3L\/index.m3u8$","121$https:\/\/vip.kuaikan-cdn2.com\/20230524\/UPtYZgEG\/index.m3u8$","122$https:\/\/vip.kuaikan-cdn2.com\/20230524\/43sm45UA\/index.m3u8$","123$https:\/\/vip.kuaikan-cdn2.com\/20230524\/2hInrvOv\/index.m3u8$","124$https:\/\/vip.kuaikan-cdn2.com\/20230524\/XxOYG6Vl\/index.m3u8$","125$https:\/\/vip.kuaikan-cdn2.com\/20230524\/PtHvo8ZK\/index.m3u8$","126$https:\/\/vip.kuaikan-cdn2.com\/20230524\/NHyJ4yIF\/index.m3u8$","127$https:\/\/vip.kuaikan-cdn2.com\/20230524\/HQIEutw8\/index.m3u8$","128$https:\/\/vip.kuaikan-cdn2.com\/20230524\/zwTlsbqf\/index.m3u8$","129$https:\/\/vip.kuaikan-cdn2.com\/20230524\/t1zUnjPm\/index.m3u8$","130$https:\/\/vip.kuaikan-cdn2.com\/20230524\/AmIfztMB\/index.m3u8$","131$https:\/\/vip.kuaikan-cdn2.com\/20230524\/tSOBkAHo\/index.m3u8$","132$https:\/\/vip.kuaikan-cdn2.com\/20230524\/Y6TPzqnl\/index.m3u8$","133$https:\/\/vip.kuaikan-cdn2.com\/20230524\/Sj5kMaxJ\/index.m3u8$","134$https:\/\/vip.kuaikan-cdn2.com\/20230524\/L6mlDqAj\/index.m3u8$","135$https:\/\/vip.kuaikan-cdn2.com\/20230524\/SHvne06z\/index.m3u8$","136$https:\/\/vip.kuaikan-cdn2.com\/20230524\/IB5LuaRq\/index.m3u8$","137$https:\/\/vip.kuaikan-cdn2.com\/20230524\/2jQXln9f\/index.m3u8$","138$https:\/\/vip.kuaikan-cdn2.com\/20230524\/oOW84VBj\/index.m3u8$","139$https:\/\/vip.kuaikan-cdn2.com\/20230524\/KuJrQkkN\/index.m3u8$","140$https:\/\/vip.kuaikan-cdn2.com\/20230524\/2WMz6JoP\/index.m3u8$","141$https:\/\/vip.kuaikan-cdn2.com\/20230524\/0o43mQte\/index.m3u8$","143$https:\/\/vip.kuaikan-cdn2.com\/20230524\/rtAKsERR\/index.m3u8$","144$https:\/\/vip.kuaikan-cdn2.com\/20230524\/nwy5rX8l\/index.m3u8$","145$https:\/\/vip.kuaikan-cdn2.com\/20230524\/VfXGXweb\/index.m3u8$","146$https:\/\/vip.kuaikan-cdn2.com\/20230524\/tGmEJDTM\/index.m3u8$","147$https:\/\/vip.kuaikan-cdn2.com\/20230524\/7yG3h47x\/index.m3u8$","148$https:\/\/vip.kuaikan-cdn2.com\/20230524\/4UUzBNyN\/index.m3u8$","149$https:\/\/vip.kuaikan-cdn2.com\/20230524\/mXmFP8iF\/index.m3u8$","150$https:\/\/vip.kuaikan-cdn2.com\/20230524\/AA6gns4z\/index.m3u8$","151$https:\/\/vip.kuaikan-cdn2.com\/20230524\/iGQq4v5K\/index.m3u8$","152$https:\/\/vip.kuaikan-cdn2.com\/20230524\/uKGhiSbl\/index.m3u8$","153$https:\/\/vip.kuaikan-cdn2.com\/20230524\/uW1jJpUH\/index.m3u8$"]}]}';
        var result = JSON.parse(dataStr);
        this.poster_image_url = result.pic || '';
        this.current_video_list_info = result;
        this.handleCurrent_player_url(this.current_video_list_info.url);
      }
    },
    itemClick: function itemClick(item) {
      // console.log(item)
      var arr = item.split('$');
      this.handleCurrent_player_url(arr[1]);
      this.show = !this.show;
    },
    handleCurrent_player_url: function handleCurrent_player_url(play_url) {
      debugger;
      if (play_url.includes('.html')) {
        // 不是m3u8格式
        this.parseVideoPlayUrl(play_url);
        this.current_player_url.originUrl = play_url;
      } else {
        this.current_player_url.originUrl = play_url;
        this.current_player_url.parseUrl = play_url;
      }
    },
    /* 视频播放url 格式不是m3u8,再次获取 */parseVideoPlayUrl: function parseVideoPlayUrl(play_url) {
      var useBack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      debugger;
      var url = (0, _url.url_video_parse_url)(play_url);
      if (useBack) {
        url = (0, _url.url_video_parse_url_back)(url);
      }
      var that = this;
      (0, _uniRequest.request)(url).then(function (res) {
        debugger;
        console.log('VideoPlayer: parseUrl' + res);
        if (res.code === 200) {
          that.current_player_url.parseUrl = res.url;
        } else {
          that.retryCount += 1;
          if (that.retryCount > 2) {
            uni.showToast({
              title: '解析失败，请切换其他！'
            });
          }
          that.parseVideoPlayUrl(play_url, useBack = true);
        }
      });
    },
    backAction: function backAction() {
      uni.navigateBack();
    },
    onShareAppMessage: function onShareAppMessage() {
      return {
        title: '欢迎体验...影视号',
        path: '/pages/VideoPlayer/VideoPlayer?value=' + this.param
      };
    },
    switchCurrentPlaying: function switchCurrentPlaying(item, index) {
      // debugger
      var arr = item.split('$');
      this.handleCurrent_player_url(arr[1]);
      this.show = false;
    },
    back: function back() {
      uni.navigateBack({
        delta: 1
      });
    },
    showMenu: function showMenu() {
      this.show = true;
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 140:
/*!***************************************************************************************************************************************************!*\
  !*** /Users/apple/Documents/HBuilderProjects/uni_blp/pages/VideoPlayer/VideoPlayer.vue?vue&type=style&index=0&id=2dc17480&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_style_index_0_id_2dc17480_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./VideoPlayer.vue?vue&type=style&index=0&id=2dc17480&lang=scss&scoped=true& */ 141);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_style_index_0_id_2dc17480_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_style_index_0_id_2dc17480_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_style_index_0_id_2dc17480_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_style_index_0_id_2dc17480_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_style_index_0_id_2dc17480_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 141:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/apple/Documents/HBuilderProjects/uni_blp/pages/VideoPlayer/VideoPlayer.vue?vue&type=style&index=0&id=2dc17480&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[134,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/VideoPlayer/VideoPlayer.js.map