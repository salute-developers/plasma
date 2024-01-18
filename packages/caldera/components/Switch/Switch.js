"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Switch = void 0;
var _styledComponents = /*#__PURE__*/require("@salutejs/plasma-new-hope/styled-components");
var _Switch = /*#__PURE__*/require("./Switch.config");
var mergedConfig = /*#__PURE__*/(0, _styledComponents.mergeConfig)(_styledComponents.switchConfig, _Switch.config);
var SwitchComponent = /*#__PURE__*/(0, _styledComponents.component)(mergedConfig);
/**
 * Визуальный переключатель между двумя взаимоисключающими состояниями — вкл. и выкл.
 */
var Switch = exports.Switch = SwitchComponent;