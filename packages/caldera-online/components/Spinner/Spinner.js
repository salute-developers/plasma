"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = void 0;
var _styledComponents = /*#__PURE__*/_interopRequireDefault( /*#__PURE__*/require("styled-components"));
var _styledComponents2 = /*#__PURE__*/require("@salutejs/plasma-new-hope/styled-components");
var _Spinner = /*#__PURE__*/require("./Spinner.config");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var mergedConfig = /*#__PURE__*/(0, _styledComponents2.mergeConfig)(_styledComponents2.spinnerConfig, _Spinner.config);
var SpinnerComponent = /*#__PURE__*/(0, _styledComponents2.component)(mergedConfig);
/**
 * Компонент для отображения индикатора загрузки.
 */
var Spinner = exports.Spinner = /*#__PURE__*/(0, _styledComponents["default"])(SpinnerComponent).withConfig({
  componentId: "caldera-online__sc-1h3yw17-0"
})([""]);