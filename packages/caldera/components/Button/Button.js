"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _styledComponents = /*#__PURE__*/require("@salutejs/plasma-new-hope/styled-components");
var _Button = /*#__PURE__*/require("./Button.config");
var mergedConfig = /*#__PURE__*/(0, _styledComponents.mergeConfig)(_styledComponents.buttonConfig, _Button.config);
var ButtonComponent = /*#__PURE__*/(0, _styledComponents.component)(mergedConfig);
/**
 * Кнопка.
 */
var Button = exports.Button = ButtonComponent;