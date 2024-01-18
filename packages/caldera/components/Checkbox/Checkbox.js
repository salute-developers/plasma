"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;
var _styledComponents = /*#__PURE__*/require("@salutejs/plasma-new-hope/styled-components");
var _Checkbox = /*#__PURE__*/require("./Checkbox.config");
var mergedConfig = /*#__PURE__*/(0, _styledComponents.mergeConfig)(_styledComponents.checkboxConfig, _Checkbox.config);
var CheckboxComponent = /*#__PURE__*/(0, _styledComponents.component)(mergedConfig);
/**
 * Флажок или чекбокс. Позволяет пользователю управлять параметром с двумя состояниями — ☑ включено и ☐ отключено.
 */
var Checkbox = exports.Checkbox = CheckboxComponent;