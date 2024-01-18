"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
var _styledComponents = /*#__PURE__*/require("@salutejs/plasma-new-hope/styled-components");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var config = exports.config = {
  defaults: {
    view: 'default',
    size: 'm',
    labelPosition: 'before',
    focused: 'true'
  },
  variations: {
    size: {
      m: /*#__PURE__*/(0, _styledComponents.css)(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", ": var(--plasma-typo-body1-font-family);\n                ", ": var(--plasma-typo-body1-font-style);\n                ", ": var(--plasma-typo-body1-font-weight);\n                ", ": var(--plasma-typo-body1-font-weight);\n                ", ": var(--plasma-typo-body1-line-height);\n                ", ": var(--plasma-typo-body1-font-size);\n                ", ": var(--plasma-typo-body1-letter-spacing);\n                ", ": 2.75rem;\n                ", ": 1.75rem;\n                ", ": calc(var(", ") / 2);\n                ", ": 1.5rem;\n                ", ": calc(var(", ") / 2);\n                ", ": 0.125rem;\n                ", ": 1.25;\n                ", ": 0.75rem;\n            "])), _styledComponents.switchTokens.fontFamily, _styledComponents.switchTokens.fontStyle, _styledComponents.switchTokens.fontWeight, _styledComponents.switchTokens.fontWeight, _styledComponents.switchTokens.lineHeight, _styledComponents.switchTokens.fontSize, _styledComponents.switchTokens.letterSpacing, _styledComponents.switchTokens.trackWidth, _styledComponents.switchTokens.trackHeight, _styledComponents.switchTokens.trackBorderRadius, _styledComponents.switchTokens.trackHeight, _styledComponents.switchTokens.thumbSize, _styledComponents.switchTokens.thumbBorderRadius, _styledComponents.switchTokens.thumbSize, _styledComponents.switchTokens.thumbOffset, _styledComponents.switchTokens.thumbPressScale, _styledComponents.switchTokens.labelOffset)
    },
    view: {
      "default": /*#__PURE__*/(0, _styledComponents.css)(_templateObject2 || (_templateObject2 = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", ": var(--surface-accent);\n                ", ": var(--surface-transparent-secondary);\n                ", ": var(--on-dark-text-primary);\n                ", ": 0 1px 1px rgba(0, 0, 0, 0.11);\n            "])), _styledComponents.switchTokens.trackBackgroundColorOn, _styledComponents.switchTokens.trackBackgroundColorOff, _styledComponents.switchTokens.thumbBackgroundColor, _styledComponents.switchTokens.thumbBoxShadow)
    },
    labelPosition: {
      before: /*#__PURE__*/(0, _styledComponents.css)(_templateObject3 || (_templateObject3 = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", "\n            "])), _styledComponents.Switch_LabelPosition_Before),
      after: /*#__PURE__*/(0, _styledComponents.css)(_templateObject4 || (_templateObject4 = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", "\n            "])), _styledComponents.Switch_LabelPosition_After)
    },
    disabled: {
      "true": /*#__PURE__*/(0, _styledComponents.css)(_templateObject5 || (_templateObject5 = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", ": 0.4;\n            "])), _styledComponents.switchTokens.disabledOpacity)
    },
    focused: {
      "true": /*#__PURE__*/(0, _styledComponents.css)(_templateObject6 || (_templateObject6 = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", ": var(--surface-accent);\n            "])), _styledComponents.switchTokens.trackFocusColor)
    }
  }
};