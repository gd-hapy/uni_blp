(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/VideoPlayer/VideoPlayer"],{

/***/ 129:
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
var _VideoPlayer = _interopRequireDefault(__webpack_require__(/*! ./pages/VideoPlayer/VideoPlayer.vue */ 130));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_VideoPlayer.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 130:
/*!*****************************************************************************************!*\
  !*** /Users/apple/Documents/HBuilderProjects/uni_blp/pages/VideoPlayer/VideoPlayer.vue ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VideoPlayer_vue_vue_type_template_id_2dc17480_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoPlayer.vue?vue&type=template&id=2dc17480&scoped=true& */ 131);
/* harmony import */ var _VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoPlayer.vue?vue&type=script&lang=js& */ 133);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _VideoPlayer_vue_vue_type_style_index_0_id_2dc17480_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VideoPlayer.vue?vue&type=style&index=0&id=2dc17480&lang=scss&scoped=true& */ 135);
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

/***/ 131:
/*!************************************************************************************************************************************!*\
  !*** /Users/apple/Documents/HBuilderProjects/uni_blp/pages/VideoPlayer/VideoPlayer.vue?vue&type=template&id=2dc17480&scoped=true& ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_template_id_2dc17480_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./VideoPlayer.vue?vue&type=template&id=2dc17480&scoped=true& */ 132);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_template_id_2dc17480_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_template_id_2dc17480_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_template_id_2dc17480_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_template_id_2dc17480_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 132:
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
      return __webpack_require__.e(/*! import() | node-modules/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar */ "node-modules/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(__webpack_require__.bind(null, /*! uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue */ 211))
    },
    uPopup: function () {
      return __webpack_require__.e(/*! import() | node-modules/uview-ui/components/u-popup/u-popup */ "node-modules/uview-ui/components/u-popup/u-popup").then(__webpack_require__.bind(null, /*! uview-ui/components/u-popup/u-popup.vue */ 190))
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
  var l0 =
    g0 !== "{}" && g2 > 0
      ? _vm.__map(
          _vm.current_video_list_info.info[0].video,
          function (item, index) {
            var $orig = _vm.__get_orig(item)
            var g3 = item.includes(_vm.current_player_url)
            var g4 = item.split("$")
            return {
              $orig: $orig,
              g3: g3,
              g4: g4,
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
        l0: l0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 133:
/*!******************************************************************************************************************!*\
  !*** /Users/apple/Documents/HBuilderProjects/uni_blp/pages/VideoPlayer/VideoPlayer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./VideoPlayer.vue?vue&type=script&lang=js& */ 134);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 134:
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
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _axios = _interopRequireDefault(__webpack_require__(/*! @/src/api/axios.js */ 118));
var _methods;
var CustomTag = function CustomTag() {
  __webpack_require__.e(/*! require.ensure | src/components/CustomHotSearch/CustomTag */ "src/components/CustomHotSearch/CustomTag").then((function () {
    return resolve(__webpack_require__(/*! @/src/components/CustomHotSearch/CustomTag.vue */ 173));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var Loading = function Loading() {
  __webpack_require__.e(/*! require.ensure | src/components/CustomLoading/CustomLoading */ "src/components/CustomLoading/CustomLoading").then((function () {
    return resolve(__webpack_require__(/*! @/src/components/CustomLoading/CustomLoading.vue */ 166));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  components: {
    CustomTag: CustomTag,
    Loading: Loading
  },
  data: function data() {
    return {
      current_player_url: '',
      //当前视频url'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4', //https://vip.ffzyread1.com/20230705/14839_01547161/index.m3u8',
      poster_image_url: '',
      //当前视频封面
      current_video_info: '',
      //当前视频信息
      current_video_list_info: {},
      //当前视频列表信息

      show: false,
      //是否展示播放列表
      containerHeight: 0
    };
  },
  watch: {
    show: function show(n) {
      // console.log(n);
    }
  },
  onLoad: function onLoad(e) {
    // https://vip.bljiex.com/api.php?out=jsonp&tp=getparm&refererundefined&cb=jQuery18208611017191950332_1695388300569&_=1695388301246
    // res: 
    // jQuery18208611017191950332_1695388300569({"success":1,"code":0,"type":"getparm","app":0,"val":"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"});

    // https://vip.bljiex.com/api.php?out=jsonp&flag=2&id=56306&cb=jQuery1820805803329265659_1695378993338&_=1695388301646
    // res:
    // jQuery1820805803329265659_1695378993338({"success":1,"code":200,"url":"https://vip.ffzyread1.com/20230705/14839_01547161/index.m3u8","pic":"https://img.ffzypic.com/upload/vod/20230705-1/c4777a9a41246ead0476827565635d0a.jpg","title":"我的人间烟火","part":1,"type":"ffm3u8","info":[{"flag":"ffm3u8","flag_name":"BL高清F","part":40,"video":["第01集$https://vip.ffzyread1.com/20230705/14839_01547161/index.m3u8$","第02集$https://vip.ffzyread1.com/20230705/14840_cfba065a/index.m3u8$","第03集$https://vip.ffzyread1.com/20230705/14841_b0f9633c/index.m3u8$","第04集$https://vip.ffzyread1.com/20230705/14842_22337777/index.m3u8$","第05集$https://vip.ffzyread1.com/20230705/14843_6055533f/index.m3u8$","第06集$https://vip.ffzyread1.com/20230705/14844_0aeb51ba/index.m3u8$","第07集$https://vip.ffzyread1.com/20230706/14894_eb8bcedd/index.m3u8$","第08集$https://vip.ffzyread1.com/20230706/14893_e3ab8026/index.m3u8$","第09集$https://vip.ffzyread1.com/20230707/14949_ca954d80/index.m3u8$","第10集$https://vip.ffzyread1.com/20230707/14948_c746cc0f/index.m3u8$","第11集$https://vip.ffzyread1.com/20230708/15002_bc435e32/index.m3u8$","第12集$https://vip.ffzyread1.com/20230709/15045_f5fce9d4/index.m3u8$","第13集$https://vip.ffzyread1.com/20230710/15080_e43a24f3/index.m3u8$","第14集$https://vip.ffzyread1.com/20230710/15079_7cc04f3b/index.m3u8$","第15集$https://vip.ffzyread1.com/20230711/15120_68615c71/index.m3u8$","第16集$https://vip.ffzyread1.com/20230711/15119_afabad15/index.m3u8$","第17集$https://vip.ffzyread1.com/20230712/15160_4db734c2/index.m3u8$","第18集$https://vip.ffzyread1.com/20230712/15159_ac42123c/index.m3u8$","第19集$https://vip.ffzyread1.com/20230713/15211_a117c59c/index.m3u8$","第20集$https://vip.ffzyread1.com/20230713/15210_c0a915d1/index.m3u8$","第21集$https://vip.ffzyread1.com/20230714/15280_2ff1c084/index.m3u8$","第22集$https://vip.ffzyread1.com/20230715/15332_080d32b4/index.m3u8$","第23集$https://vip.ffzyread1.com/20230717/15426_89d43286/index.m3u8$","第24集$https://vip.ffzyread1.com/20230717/15425_96647177/index.m3u8$","第25集$https://vip.ffzyread1.com/20230718/15472_43fef8d4/index.m3u8$","第26集$https://vip.ffzyread1.com/20230718/15471_c93546f8/index.m3u8$","第27集$https://vip.ffzyread1.com/20230719/15516_a3c8b5d2/index.m3u8$","第28集$https://vip.ffzyread1.com/20230719/15515_4331d601/index.m3u8$","第29集$https://vip.ffzyread1.com/20230720/15562_366d4001/index.m3u8$","第30集$https://vip.ffzyread1.com/20230720/15561_c7ff4a8f/index.m3u8$","第31集$https://vip.ffzyread1.com/20230721/15616_e326f5c7/index.m3u8$","第32集$https://vip.ffzyread1.com/20230722/15665_71e270aa/index.m3u8$","第33集$https://vip.ffzyread1.com/20230722/15681_ad2b7861/index.m3u8$","第34集$https://vip.ffzy-online2.com/20230724/42018_b623a3ef/index.m3u8$","第35集$https://vip.ffzyread1.com/20230722/15679_8ecd47ff/index.m3u8$","第36集$https://vip.ffzyread1.com/20230722/15678_88bc4295/index.m3u8$","第37集$https://vip.ffzyread1.com/20230722/15677_7fac1f0b/index.m3u8$","第38集$https://vip.ffzyread1.com/20230722/15676_b83130f9/index.m3u8$","第39集$https://vip.ffzyread1.com/20230722/15675_41b8eeca/index.m3u8$","第40集$https://vip.ffzyread1.com/20230722/15674_4a7be242/index.m3u8$"]}]});

    // let json =
    // 	'{"flag":0,"flag_name":"kuaikan","from":"BL高清D","type":"日本动漫","id":"64161","title":"龙珠超：布罗利","img:":"null"}'
    // this.current_video_info = JSON.parse(json)
    // debugger
    // // "{"flag":0,"flag_name":"kuaikan",
    // // "from":"BL高清D","type":"日本动漫",
    // // "id":"64094","title":"七龙珠(日)","img:":"null"}"
    // debugger
    var systemInfo = wx.getSystemInfoSync();
    this.containerHeight = systemInfo.statusBarHeight + 44 + 'px';
    if (JSON.stringify(e) === '{}') return;
    this.$store.state.loading = true;
    this.current_video_info = JSON.parse(e.value) || '';
    // console.log(e.value)
    this.requestList();
  },
  methods: (_methods = {
    videoErrorCallback: function videoErrorCallback(e) {
      console.log('视频错误信息:');
      console.log(e.target.errMsg);
    },
    errHandle: function errHandle(e) {
      // debugger
      console.log('errHandle:' + e);
    },
    handleLoaded: function handleLoaded(e) {
      // debugger
      console.log("handleLoaded:" + e);
    },
    requestList: function requestList() {
      var _this = this;
      // https://vip.bljiex.com/api.php?out=jsonp&flag=2&id=50876&cb=jQuery18209472083540549927_1695409634320&_=1695409652972
      // https://vip.bljiex.com/api.php?out=jsonp&flag=0&id=64094&cb=jQuery18209472083540549927_1695409634320&_=1695409652972
      // debugger
      // if (this.current_video_info.length == 0) return
      var url = 'api.php?out=jsonp&flag=' + this.current_video_info.flag + '&id=' + this.current_video_info.id;
      _axios.default.get(url).then(function (res) {
        // debugger
        var dataStr = "{" + res.split('({')[1].split('})')[0] + "}";
        // let strArr = data.split('(')[1].split(')')[0]
        var result = JSON.parse(dataStr);
        _this.poster_image_url = result.pic || '';
        _this.current_video_list_info = result;
        _this.current_player_url = _this.current_video_list_info.url;
        // debugger
        _this.$store.state.loading = false;
      });

      // debugger
      // let dataStr =
      // 	'{"success":1,"code":200,"url":"https:\/\/vip.kuaikan-cdn2.com\/20230524\/IRYhvhUl\/index.m3u8","pic":"https:\/\/img.kuaikanzy.net\/upload\/vod\/20230315-10\/6f10df39caf9f9c07a35f8d9d12afb9c.jpg","title":"七龙珠(日)","part":1,"type":"kuaikan","info":[{"flag":"kuaikan","flag_name":"BL高清D","part":152,"video":["1$https:\/\/vip.kuaikan-cdn2.com\/20230524\/IRYhvhUl\/index.m3u8$","2$https:\/\/vip.kuaikan-cdn2.com\/20230524\/TUWPpKPb\/index.m3u8$","3$https:\/\/vip.kuaikan-cdn2.com\/20230524\/x7I0UZKo\/index.m3u8$","4$https:\/\/vip.kuaikan-cdn2.com\/20230524\/v5MNBXjE\/index.m3u8$","5$https:\/\/vip.kuaikan-cdn2.com\/20230524\/k7UWHM6T\/index.m3u8$","6$https:\/\/vip.kuaikan-cdn2.com\/20230524\/6O2zzIvs\/index.m3u8$","7$https:\/\/vip.kuaikan-cdn2.com\/20230524\/XajnRBeu\/index.m3u8$","8$https:\/\/vip.kuaikan-cdn2.com\/20230524\/pSmRsrJ6\/index.m3u8$","9$https:\/\/vip.kuaikan-cdn2.com\/20230524\/8L6exWzO\/index.m3u8$","10$https:\/\/vip.kuaikan-cdn2.com\/20230524\/KMSGnHdV\/index.m3u8$","11$https:\/\/vip.kuaikan-cdn2.com\/20230524\/1P0XySJD\/index.m3u8$","12$https:\/\/vip.kuaikan-cdn2.com\/20230524\/3jzO4S9H\/index.m3u8$","13$https:\/\/vip.kuaikan-cdn2.com\/20230524\/clxm8cVA\/index.m3u8$","14$https:\/\/vip.kuaikan-cdn2.com\/20230524\/ZG8wTZlm\/index.m3u8$","15$https:\/\/vip.kuaikan-cdn2.com\/20230524\/SmY8v1Bz\/index.m3u8$","16$https:\/\/vip.kuaikan-cdn2.com\/20230524\/tKY6g7eR\/index.m3u8$","17$https:\/\/vip.kuaikan-cdn2.com\/20230524\/fWnm75zv\/index.m3u8$","18$https:\/\/vip.kuaikan-cdn2.com\/20230524\/K65gCbYg\/index.m3u8$","19$https:\/\/vip.kuaikan-cdn2.com\/20230524\/9b5KPlJR\/index.m3u8$","20$https:\/\/vip.kuaikan-cdn2.com\/20230524\/viCSCt33\/index.m3u8$","21$https:\/\/vip.kuaikan-cdn2.com\/20230524\/fOHhOYND\/index.m3u8$","22$https:\/\/vip.kuaikan-cdn2.com\/20230524\/nGhMHUil\/index.m3u8$","23$https:\/\/vip.kuaikan-cdn2.com\/20230524\/Nf0b0mhT\/index.m3u8$","24$https:\/\/vip.kuaikan-cdn2.com\/20230524\/UX2knTIn\/index.m3u8$","25$https:\/\/vip.kuaikan-cdn2.com\/20230524\/fyuoOoGZ\/index.m3u8$","26$https:\/\/vip.kuaikan-cdn2.com\/20230524\/PIkr6E7a\/index.m3u8$","27$https:\/\/vip.kuaikan-cdn2.com\/20230524\/enJdPE4Y\/index.m3u8$","28$https:\/\/vip.kuaikan-cdn2.com\/20230524\/nhuO7vhq\/index.m3u8$","29$https:\/\/vip.kuaikan-cdn2.com\/20230524\/7rlR9PzG\/index.m3u8$","30$https:\/\/vip.kuaikan-cdn2.com\/20230524\/IebtJ8SV\/index.m3u8$","31$https:\/\/vip.kuaikan-cdn2.com\/20230524\/U9ggCtts\/index.m3u8$","32$https:\/\/vip.kuaikan-cdn2.com\/20230524\/ybxK8o13\/index.m3u8$","33$https:\/\/vip.kuaikan-cdn2.com\/20230524\/ITbqrkpT\/index.m3u8$","34$https:\/\/vip.kuaikan-cdn2.com\/20230524\/UqOeqxSS\/index.m3u8$","35$https:\/\/vip.kuaikan-cdn2.com\/20230524\/bvY79Tpn\/index.m3u8$","36$https:\/\/vip.kuaikan-cdn2.com\/20230524\/ytuJTadf\/index.m3u8$","37$https:\/\/vip.kuaikan-cdn2.com\/20230524\/tQQY69wU\/index.m3u8$","38$https:\/\/vip.kuaikan-cdn2.com\/20230524\/U2Z3FFOc\/index.m3u8$","39$https:\/\/vip.kuaikan-cdn2.com\/20230524\/6dZWyLE6\/index.m3u8$","40$https:\/\/vip.kuaikan-cdn2.com\/20230524\/BJGEKPvO\/index.m3u8$","41$https:\/\/vip.kuaikan-cdn2.com\/20230524\/vYSjw8iP\/index.m3u8$","42$https:\/\/vip.kuaikan-cdn2.com\/20230524\/rUWi99C3\/index.m3u8$","43$https:\/\/vip.kuaikan-cdn2.com\/20230524\/HIN5OmKS\/index.m3u8$","44$https:\/\/vip.kuaikan-cdn2.com\/20230524\/ltSqnFSZ\/index.m3u8$","45$https:\/\/vip.kuaikan-cdn2.com\/20230524\/blPHnTz1\/index.m3u8$","46$https:\/\/vip.kuaikan-cdn2.com\/20230524\/h0veaqrj\/index.m3u8$","47$https:\/\/vip.kuaikan-cdn2.com\/20230524\/4R3o5iOv\/index.m3u8$","48$https:\/\/vip.kuaikan-cdn2.com\/20230524\/jFe3nNa3\/index.m3u8$","49$https:\/\/vip.kuaikan-cdn2.com\/20230524\/PfYmR0IT\/index.m3u8$","50$https:\/\/vip.kuaikan-cdn2.com\/20230524\/3GhmHW0q\/index.m3u8$","51$https:\/\/vip.kuaikan-cdn2.com\/20230524\/JxJe4KZY\/index.m3u8$","52$https:\/\/vip.kuaikan-cdn2.com\/20230524\/4RACwhm6\/index.m3u8$","53$https:\/\/vip.kuaikan-cdn2.com\/20230524\/MamNos1S\/index.m3u8$","54$https:\/\/vip.kuaikan-cdn2.com\/20230524\/88aOwQzl\/index.m3u8$","55$https:\/\/vip.kuaikan-cdn2.com\/20230524\/v0Tb4K6O\/index.m3u8$","56$https:\/\/vip.kuaikan-cdn2.com\/20230524\/h53bFjwE\/index.m3u8$","57$https:\/\/vip.kuaikan-cdn2.com\/20230524\/BCL1QBlf\/index.m3u8$","58$https:\/\/vip.kuaikan-cdn2.com\/20230524\/7SKRprQt\/index.m3u8$","59$https:\/\/vip.kuaikan-cdn2.com\/20230524\/Vt9QsMl2\/index.m3u8$","60$https:\/\/vip.kuaikan-cdn2.com\/20230524\/yYDKBX1K\/index.m3u8$","61$https:\/\/vip.kuaikan-cdn2.com\/20230524\/A9LYj9uT\/index.m3u8$","62$https:\/\/vip.kuaikan-cdn2.com\/20230524\/fsCaMpBB\/index.m3u8$","63$https:\/\/vip.kuaikan-cdn2.com\/20230524\/I3nZ0FKi\/index.m3u8$","64$https:\/\/vip.kuaikan-cdn2.com\/20230524\/XXsMxAzc\/index.m3u8$","65$https:\/\/vip.kuaikan-cdn2.com\/20230524\/bbePfN8Y\/index.m3u8$","66$https:\/\/vip.kuaikan-cdn2.com\/20230524\/LN9PsO3s\/index.m3u8$","67$https:\/\/vip.kuaikan-cdn2.com\/20230524\/XnwFKFQP\/index.m3u8$","68$https:\/\/vip.kuaikan-cdn2.com\/20230524\/ZTrendPW\/index.m3u8$","69$https:\/\/vip.kuaikan-cdn2.com\/20230524\/oCdiJjfi\/index.m3u8$","70$https:\/\/vip.kuaikan-cdn2.com\/20230524\/uPlunX3R\/index.m3u8$","71$https:\/\/vip.kuaikan-cdn2.com\/20230524\/emazruW3\/index.m3u8$","72$https:\/\/vip.kuaikan-cdn2.com\/20230524\/DtbALDnb\/index.m3u8$","73$https:\/\/vip.kuaikan-cdn2.com\/20230524\/sT2yYs3j\/index.m3u8$","74$https:\/\/vip.kuaikan-cdn2.com\/20230524\/D2by6wST\/index.m3u8$","75$https:\/\/vip.kuaikan-cdn2.com\/20230524\/WgFFk6cL\/index.m3u8$","76$https:\/\/vip.kuaikan-cdn2.com\/20230524\/IfwOn2fC\/index.m3u8$","77$https:\/\/vip.kuaikan-cdn2.com\/20230524\/YCIq25sO\/index.m3u8$","78$https:\/\/vip.kuaikan-cdn2.com\/20230524\/oIf0teOd\/index.m3u8$","79$https:\/\/vip.kuaikan-cdn2.com\/20230524\/FgpnomVn\/index.m3u8$","80$https:\/\/vip.kuaikan-cdn2.com\/20230524\/WWoKfwoO\/index.m3u8$","81$https:\/\/vip.kuaikan-cdn2.com\/20230524\/G7hRgURS\/index.m3u8$","82$https:\/\/vip.kuaikan-cdn2.com\/20230524\/VMy0bFg5\/index.m3u8$","83$https:\/\/vip.kuaikan-cdn2.com\/20230524\/FEUiGy7i\/index.m3u8$","84$https:\/\/vip.kuaikan-cdn2.com\/20230524\/PNkmMk23\/index.m3u8$","85$https:\/\/vip.kuaikan-cdn2.com\/20230524\/xcvnlUpN\/index.m3u8$","86$https:\/\/vip.kuaikan-cdn2.com\/20230524\/vgG2F0kE\/index.m3u8$","87$https:\/\/vip.kuaikan-cdn2.com\/20230524\/ot8VqZAy\/index.m3u8$","88$https:\/\/vip.kuaikan-cdn2.com\/20230524\/XzgMHqKk\/index.m3u8$","89$https:\/\/vip.kuaikan-cdn2.com\/20230524\/d0YOVGwR\/index.m3u8$","90$https:\/\/vip.kuaikan-cdn2.com\/20230524\/zHwzmAJZ\/index.m3u8$","91$https:\/\/vip.kuaikan-cdn2.com\/20230524\/exFb2d6w\/index.m3u8$","92$https:\/\/vip.kuaikan-cdn2.com\/20230524\/6ifs3DQm\/index.m3u8$","93$https:\/\/vip.kuaikan-cdn2.com\/20230524\/Jd8vjGX6\/index.m3u8$","94$https:\/\/vip.kuaikan-cdn2.com\/20230524\/KkOfoAer\/index.m3u8$","95$https:\/\/vip.kuaikan-cdn2.com\/20230524\/rP54dAD8\/index.m3u8$","96$https:\/\/vip.kuaikan-cdn2.com\/20230524\/MCiokRN0\/index.m3u8$","97$https:\/\/vip.kuaikan-cdn2.com\/20230524\/au7gkabZ\/index.m3u8$","98$https:\/\/vip.kuaikan-cdn2.com\/20230524\/NdEACHDE\/index.m3u8$","99$https:\/\/vip.kuaikan-cdn2.com\/20230524\/V7UAzSXS\/index.m3u8$","100$https:\/\/vip.kuaikan-cdn2.com\/20230524\/C8LhssC9\/index.m3u8$","101$https:\/\/vip.kuaikan-cdn2.com\/20230524\/2zT5ZaHT\/index.m3u8$","102$https:\/\/vip.kuaikan-cdn2.com\/20230524\/rflx5bNH\/index.m3u8$","103$https:\/\/vip.kuaikan-cdn2.com\/20230524\/DltTxypZ\/index.m3u8$","104$https:\/\/vip.kuaikan-cdn2.com\/20230524\/mJdRgjwY\/index.m3u8$","105$https:\/\/vip.kuaikan-cdn2.com\/20230524\/OJaATceL\/index.m3u8$","106$https:\/\/vip.kuaikan-cdn2.com\/20230524\/icT3sHyp\/index.m3u8$","107$https:\/\/vip.kuaikan-cdn2.com\/20230524\/bxwWj2Em\/index.m3u8$","108$https:\/\/vip.kuaikan-cdn2.com\/20230524\/55ZrHLax\/index.m3u8$","109$https:\/\/vip.kuaikan-cdn2.com\/20230524\/HK6IFzIC\/index.m3u8$","110$https:\/\/vip.kuaikan-cdn2.com\/20230524\/1n9RSNrv\/index.m3u8$","111$https:\/\/vip.kuaikan-cdn2.com\/20230524\/VIHtEAgy\/index.m3u8$","112$https:\/\/vip.kuaikan-cdn2.com\/20230524\/U11piqw1\/index.m3u8$","113$https:\/\/vip.kuaikan-cdn2.com\/20230524\/mzrdRswn\/index.m3u8$","114$https:\/\/vip.kuaikan-cdn2.com\/20230524\/5fKDcEZR\/index.m3u8$","115$https:\/\/vip.kuaikan-cdn2.com\/20230524\/fF50TE0H\/index.m3u8$","116$https:\/\/vip.kuaikan-cdn2.com\/20230524\/VkcYO4vs\/index.m3u8$","117$https:\/\/vip.kuaikan-cdn2.com\/20230524\/c0GDN8Q9\/index.m3u8$","118$https:\/\/vip.kuaikan-cdn2.com\/20230524\/l8hOPiDB\/index.m3u8$","119$https:\/\/vip.kuaikan-cdn2.com\/20230524\/pBOYlJLv\/index.m3u8$","120$https:\/\/vip.kuaikan-cdn2.com\/20230524\/S1tstl3L\/index.m3u8$","121$https:\/\/vip.kuaikan-cdn2.com\/20230524\/UPtYZgEG\/index.m3u8$","122$https:\/\/vip.kuaikan-cdn2.com\/20230524\/43sm45UA\/index.m3u8$","123$https:\/\/vip.kuaikan-cdn2.com\/20230524\/2hInrvOv\/index.m3u8$","124$https:\/\/vip.kuaikan-cdn2.com\/20230524\/XxOYG6Vl\/index.m3u8$","125$https:\/\/vip.kuaikan-cdn2.com\/20230524\/PtHvo8ZK\/index.m3u8$","126$https:\/\/vip.kuaikan-cdn2.com\/20230524\/NHyJ4yIF\/index.m3u8$","127$https:\/\/vip.kuaikan-cdn2.com\/20230524\/HQIEutw8\/index.m3u8$","128$https:\/\/vip.kuaikan-cdn2.com\/20230524\/zwTlsbqf\/index.m3u8$","129$https:\/\/vip.kuaikan-cdn2.com\/20230524\/t1zUnjPm\/index.m3u8$","130$https:\/\/vip.kuaikan-cdn2.com\/20230524\/AmIfztMB\/index.m3u8$","131$https:\/\/vip.kuaikan-cdn2.com\/20230524\/tSOBkAHo\/index.m3u8$","132$https:\/\/vip.kuaikan-cdn2.com\/20230524\/Y6TPzqnl\/index.m3u8$","133$https:\/\/vip.kuaikan-cdn2.com\/20230524\/Sj5kMaxJ\/index.m3u8$","134$https:\/\/vip.kuaikan-cdn2.com\/20230524\/L6mlDqAj\/index.m3u8$","135$https:\/\/vip.kuaikan-cdn2.com\/20230524\/SHvne06z\/index.m3u8$","136$https:\/\/vip.kuaikan-cdn2.com\/20230524\/IB5LuaRq\/index.m3u8$","137$https:\/\/vip.kuaikan-cdn2.com\/20230524\/2jQXln9f\/index.m3u8$","138$https:\/\/vip.kuaikan-cdn2.com\/20230524\/oOW84VBj\/index.m3u8$","139$https:\/\/vip.kuaikan-cdn2.com\/20230524\/KuJrQkkN\/index.m3u8$","140$https:\/\/vip.kuaikan-cdn2.com\/20230524\/2WMz6JoP\/index.m3u8$","141$https:\/\/vip.kuaikan-cdn2.com\/20230524\/0o43mQte\/index.m3u8$","143$https:\/\/vip.kuaikan-cdn2.com\/20230524\/rtAKsERR\/index.m3u8$","144$https:\/\/vip.kuaikan-cdn2.com\/20230524\/nwy5rX8l\/index.m3u8$","145$https:\/\/vip.kuaikan-cdn2.com\/20230524\/VfXGXweb\/index.m3u8$","146$https:\/\/vip.kuaikan-cdn2.com\/20230524\/tGmEJDTM\/index.m3u8$","147$https:\/\/vip.kuaikan-cdn2.com\/20230524\/7yG3h47x\/index.m3u8$","148$https:\/\/vip.kuaikan-cdn2.com\/20230524\/4UUzBNyN\/index.m3u8$","149$https:\/\/vip.kuaikan-cdn2.com\/20230524\/mXmFP8iF\/index.m3u8$","150$https:\/\/vip.kuaikan-cdn2.com\/20230524\/AA6gns4z\/index.m3u8$","151$https:\/\/vip.kuaikan-cdn2.com\/20230524\/iGQq4v5K\/index.m3u8$","152$https:\/\/vip.kuaikan-cdn2.com\/20230524\/uKGhiSbl\/index.m3u8$","153$https:\/\/vip.kuaikan-cdn2.com\/20230524\/uW1jJpUH\/index.m3u8$"]}]}'
      // let result = JSON.parse(dataStr)
      // this.poster_image_url = result.pic || ''
      // this.current_video_list_info = result
      // this.current_player_url = this.current_video_list_info.url
      // 	debugger
    },
    // 视频详情
    requestVideoDetail: function requestVideoDetail(param) {
      // https://myaixixi.com/xgapp.php/v2/video_detail?id=541152
      // var requestUrl = '/v2/video_detail?id='+param.vod_id +'?'+ kRequestSuf
      // // console.log("requestVideoDetail---")
      // // console.log(requestUrl)
      // // debugger
      // const data = uni.$http.get(requestUrl)
      // console.log("requestVideoDetail--data:" + data)
    },
    itemClick: function itemClick(item) {
      console.log(item);
      var arr = item.split('$');
      this.current_player_url = arr[1];
    },
    backAction: function backAction() {
      uni.navigateBack();
    }
  }, (0, _defineProperty2.default)(_methods, "videoErrorCallback", function videoErrorCallback(e) {
    // debugger
    // uni.$hideLoading()
    console.log("videoErrorCallback");
  }), (0, _defineProperty2.default)(_methods, "onShareAppMessage", function onShareAppMessage() {
    return {
      title: '欢迎体验天空影视号',
      path: 'subpkg/videoDetail/videoDetail' + '?param=' + this.param
    };
  }), (0, _defineProperty2.default)(_methods, "onShareTimeline", function onShareTimeline() {}), (0, _defineProperty2.default)(_methods, "switchCurrentPlaying", function switchCurrentPlaying(item, index) {
    // debugger
    var arr = item.split('$');
    this.current_player_url = arr[1];
    // this.show = false
  }), (0, _defineProperty2.default)(_methods, "btnClick", function btnClick() {
    this.show = true;
  }), (0, _defineProperty2.default)(_methods, "back", function back() {
    uni.navigateBack({
      delta: 1
    });
  }), (0, _defineProperty2.default)(_methods, "showMenu", function showMenu() {
    this.show = true;
  }), _methods)
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 135:
/*!***************************************************************************************************************************************************!*\
  !*** /Users/apple/Documents/HBuilderProjects/uni_blp/pages/VideoPlayer/VideoPlayer.vue?vue&type=style&index=0&id=2dc17480&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_style_index_0_id_2dc17480_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./VideoPlayer.vue?vue&type=style&index=0&id=2dc17480&lang=scss&scoped=true& */ 136);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_style_index_0_id_2dc17480_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_style_index_0_id_2dc17480_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_style_index_0_id_2dc17480_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_style_index_0_id_2dc17480_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_VideoPlayer_vue_vue_type_style_index_0_id_2dc17480_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 136:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/apple/Documents/HBuilderProjects/uni_blp/pages/VideoPlayer/VideoPlayer.vue?vue&type=style&index=0&id=2dc17480&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[129,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/VideoPlayer/VideoPlayer.js.map