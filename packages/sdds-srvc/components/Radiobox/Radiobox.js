"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "RadioGroup", {
  enumerable: true,
  get: function get() {
    return _styledComponents.RadioGroup;
  }
});
exports.Radiobox = void 0;
var _styledComponents = /*#__PURE__*/require("@salutejs/plasma-new-hope/styled-components");
var _Radiobox = /*#__PURE__*/require("./Radiobox.config");
var mergedConfig = /*#__PURE__*/(0, _styledComponents.mergeConfig)(_styledComponents.radioboxConfig, _Radiobox.config);
var RadioboxComponent = /*#__PURE__*/(0, _styledComponents.component)(mergedConfig);
/**
 * Переключатель, или *радиокнопка*.
 */
var Radiobox = exports.Radiobox = RadioboxComponent;