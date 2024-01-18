var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import { css, toastTokens } from '@salutejs/plasma-new-hope/styled-components';
export var config = {
  defaults: {
    view: 'primary',
    size: 'm'
  },
  variations: {
    view: {
      primary: /*#__PURE__*/css(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", ": var(--text-primary);\n                ", ": var(--surface-solid-card);\n\n                ", ": var(--text-secondary);\n                ", ": var(--text-secondary);\n            "])), toastTokens.color, toastTokens.background, toastTokens.closeIconColor, toastTokens.closeIconColorOnHover),
      dark: /*#__PURE__*/css(_templateObject2 || (_templateObject2 = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", ": var(--on-dark-text-primary);\n                ", ": var(--on-dark-surface-solid-primary);\n\n                ", ": var(--on-dark-text-secondary);\n                ", ": var(--on-dark-text-secondary);\n            "])), toastTokens.color, toastTokens.background, toastTokens.closeIconColor, toastTokens.closeIconColorOnHover),
      light: /*#__PURE__*/css(_templateObject3 || (_templateObject3 = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", ": var(--on-light-text-primary);\n                ", ": var(--on-light-surface-solid-primary);\n\n                ", ": var(--on-light-text-secondary);\n                ", ": var(--on-light-text-secondary);\n            "])), toastTokens.color, toastTokens.background, toastTokens.closeIconColor, toastTokens.closeIconColorOnHover)
    },
    size: {
      m: /*#__PURE__*/css(_templateObject4 || (_templateObject4 = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", ": 0.75rem;\n                ", ": calc(100vw - 5rem);\n                ", ": 0.5625rem 0.75rem;\n\n                ", ": var(--plasma-typo-body-xs-font-family);\n                ", ": var(--plasma-typo-body-xs-font-size);\n                ", ": var(--plasma-typo-body-xs-font-style);\n                ", ": var(--plasma-typo-body-xs-font-weight);\n                ", ": var(--plasma-typo-body-xs-letter-spacing);\n                ", ": var(--plasma-typo-body-xs-line-height);\n\n                ", ": -0.0625rem 0.375rem -0.0625rem -0.125rem;\n                ", ": -0.0625rem -0.25rem -0.0625rem 0.5rem;\n            "])), toastTokens.borderRadius, toastTokens.maxWidth, toastTokens.padding, toastTokens.fontFamily, toastTokens.fontSize, toastTokens.fontStyle, toastTokens.fontWeight, toastTokens.letterSpacing, toastTokens.lineHeight, toastTokens.leftContentMargin, toastTokens.closeIconMargin)
    },
    pilled: {
      "true": /*#__PURE__*/css(_templateObject5 || (_templateObject5 = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", ": 1.5rem;\n\n                ", ": -0.0625rem 0.375rem -0.0625rem -0.25rem;\n                ", ": -0.0625rem -0.25rem -0.0625rem 0.375rem;\n            "])), toastTokens.pilledBorderRadius, toastTokens.leftContentMargin, toastTokens.closeIconMargin)
    }
  }
};