"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownItem = exports.Dropdown = void 0;
var _styledComponents = /*#__PURE__*/require("@salutejs/plasma-new-hope/styled-components");
var _Dropdown = /*#__PURE__*/require("./Dropdown.config");
var mergedConfig = /*#__PURE__*/(0, _styledComponents.mergeConfig)(_styledComponents.dropdownConfig, _Dropdown.config);
var mergedItemConfig = /*#__PURE__*/(0, _styledComponents.mergeConfig)(_styledComponents.dropdownItemConfig);

/**
 * Компонент элемента Dropdown.
 */
var DropdownItem = exports.DropdownItem = /*#__PURE__*/(0, _styledComponents.component)(mergedItemConfig);

/**
 * Компонент Dropdown.
 */
var Dropdown = exports.Dropdown = /*#__PURE__*/(0, _styledComponents.component)(mergedConfig);