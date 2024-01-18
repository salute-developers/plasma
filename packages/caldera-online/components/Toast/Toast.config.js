"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
var _styledComponents = /*#__PURE__*/require("@salutejs/plasma-new-hope/styled-components");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var config = exports.config = {
  defaults: {
    view: 'primary',
    size: 'm'
  },
  variations: {
    view: {
      primary: /*#__PURE__*/(0, _styledComponents.css)(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", ": var(--text-primary);\n                ", ": var(--surface-solid-card);\n\n                ", ": var(--text-secondary);\n                ", ": var(--text-secondary);\n            "])), _styledComponents.toastTokens.color, _styledComponents.toastTokens.background, _styledComponents.toastTokens.closeIconColor, _styledComponents.toastTokens.closeIconColorOnHover),
      dark: /*#__PURE__*/(0, _styledComponents.css)(_templateObject2 || (_templateObject2 = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", ": var(--on-dark-text-primary);\n                ", ": var(--on-dark-surface-solid-primary);\n\n                ", ": var(--on-dark-text-secondary);\n                ", ": var(--on-dark-text-secondary);\n            "])), _styledComponents.toastTokens.color, _styledComponents.toastTokens.background, _styledComponents.toastTokens.closeIconColor, _styledComponents.toastTokens.closeIconColorOnHover),
      light: /*#__PURE__*/(0, _styledComponents.css)(_templateObject3 || (_templateObject3 = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", ": var(--on-light-text-primary);\n                ", ": var(--on-light-surface-solid-primary);\n\n                ", ": var(--on-light-text-secondary);\n                ", ": var(--on-light-text-secondary);\n            "])), _styledComponents.toastTokens.color, _styledComponents.toastTokens.background, _styledComponents.toastTokens.closeIconColor, _styledComponents.toastTokens.closeIconColorOnHover)
    },
    size: {
      m: /*#__PURE__*/(0, _styledComponents.css)(_templateObject4 || (_templateObject4 = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", ": 0.75rem;\n                ", ": calc(100vw - 5rem);\n                ", ": 0.5625rem 0.75rem;\n\n                ", ": var(--plasma-typo-body-xs-font-family);\n                ", ": var(--plasma-typo-body-xs-font-size);\n                ", ": var(--plasma-typo-body-xs-font-style);\n                ", ": var(--plasma-typo-body-xs-font-weight);\n                ", ": var(--plasma-typo-body-xs-letter-spacing);\n                ", ": var(--plasma-typo-body-xs-line-height);\n\n                ", ": -0.0625rem 0.375rem -0.0625rem -0.125rem;\n                ", ": -0.0625rem -0.25rem -0.0625rem 0.5rem;\n            "])), _styledComponents.toastTokens.borderRadius, _styledComponents.toastTokens.maxWidth, _styledComponents.toastTokens.padding, _styledComponents.toastTokens.fontFamily, _styledComponents.toastTokens.fontSize, _styledComponents.toastTokens.fontStyle, _styledComponents.toastTokens.fontWeight, _styledComponents.toastTokens.letterSpacing, _styledComponents.toastTokens.lineHeight, _styledComponents.toastTokens.leftContentMargin, _styledComponents.toastTokens.closeIconMargin)
    },
    pilled: {
      "true": /*#__PURE__*/(0, _styledComponents.css)(_templateObject5 || (_templateObject5 = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", ": 1.5rem;\n\n                ", ": -0.0625rem 0.375rem -0.0625rem -0.25rem;\n                ", ": -0.0625rem -0.25rem -0.0625rem 0.375rem;\n            "])), _styledComponents.toastTokens.pilledBorderRadius, _styledComponents.toastTokens.leftContentMargin, _styledComponents.toastTokens.closeIconMargin)
    }
  }
};