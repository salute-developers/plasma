"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
var _styledComponents = /*#__PURE__*/require("@salutejs/plasma-new-hope/styled-components");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var config = exports.config = {
  defaults: {
    view: 'default'
  },
  variations: {
    view: {
      "default": /*#__PURE__*/(0, _styledComponents.css)(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", ": rgba(35, 35, 35, 0.2);\n                ", ": var(--plasma-colors-overlay);\n            "])), _styledComponents.modalTokens.modalOverlayWithBlurColor, _styledComponents.modalTokens.modalOverlayColor)
    }
  }
};