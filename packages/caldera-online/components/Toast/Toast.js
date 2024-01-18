"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastProvider = exports.ToastController = exports.Toast = void 0;
Object.defineProperty(exports, "useToast", {
  enumerable: true,
  get: function get() {
    return _styledComponents.useToast;
  }
});
var _styledComponents = /*#__PURE__*/require("@salutejs/plasma-new-hope/styled-components");
var _Toast = /*#__PURE__*/require("./Toast.config");
var mergedConfig = /*#__PURE__*/(0, _styledComponents.mergeConfig)(_styledComponents.toastConfig, _Toast.config);
var Toast = exports.Toast = /*#__PURE__*/(0, _styledComponents.component)(mergedConfig);
var ToastController = exports.ToastController = /*#__PURE__*/(0, _styledComponents.ToastControllerHoc)(Toast);
var ToastProvider = exports.ToastProvider = /*#__PURE__*/(0, _styledComponents.ToastProviderHoc)(ToastController);