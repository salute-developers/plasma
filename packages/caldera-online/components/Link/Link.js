"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = void 0;
var _styledComponents = /*#__PURE__*/require("@salutejs/plasma-new-hope/styled-components");
var _Link = /*#__PURE__*/require("./Link.config");
var mergedConfig = /*#__PURE__*/(0, _styledComponents.mergeConfig)(_styledComponents.linkConfig, _Link.config);
var LinkComponent = /*#__PURE__*/(0, _styledComponents.component)(mergedConfig);
/**
 * Ссылка.
 */
var Link = exports.Link = LinkComponent;