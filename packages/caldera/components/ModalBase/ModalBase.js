"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalBase = void 0;
var _styledComponents = /*#__PURE__*/require("@salutejs/plasma-new-hope/styled-components");
var _Modal = /*#__PURE__*/require("./Modal.config");
var mergedConfig = /*#__PURE__*/(0, _styledComponents.mergeConfig)(_styledComponents.modalConfig, _Modal.config);
var ModalBaseComponent = /*#__PURE__*/(0, _styledComponents.component)(mergedConfig);

/**
 * Модальное окно.
 */
var ModalBase = exports.ModalBase = ModalBaseComponent;