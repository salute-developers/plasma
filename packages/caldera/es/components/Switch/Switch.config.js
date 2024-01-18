var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import { css, switchTokens, Switch_LabelPosition_Before, Switch_LabelPosition_After } from '@salutejs/plasma-new-hope/styled-components';
export var config = {
  defaults: {
    view: 'default',
    size: 'm',
    labelPosition: 'before',
    focused: 'true'
  },
  variations: {
    size: {
      m: /*#__PURE__*/css(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", ": var(--plasma-typo-body1-font-family);\n                ", ": var(--plasma-typo-body1-font-style);\n                ", ": var(--plasma-typo-body1-font-weight);\n                ", ": var(--plasma-typo-body1-font-weight);\n                ", ": var(--plasma-typo-body1-line-height);\n                ", ": var(--plasma-typo-body1-font-size);\n                ", ": var(--plasma-typo-body1-letter-spacing);\n                ", ": 2.75rem;\n                ", ": 1.75rem;\n                ", ": calc(var(", ") / 2);\n                ", ": 1.5rem;\n                ", ": calc(var(", ") / 2);\n                ", ": 0.125rem;\n                ", ": 1.25;\n                ", ": 0.75rem;\n            "])), switchTokens.fontFamily, switchTokens.fontStyle, switchTokens.fontWeight, switchTokens.fontWeight, switchTokens.lineHeight, switchTokens.fontSize, switchTokens.letterSpacing, switchTokens.trackWidth, switchTokens.trackHeight, switchTokens.trackBorderRadius, switchTokens.trackHeight, switchTokens.thumbSize, switchTokens.thumbBorderRadius, switchTokens.thumbSize, switchTokens.thumbOffset, switchTokens.thumbPressScale, switchTokens.labelOffset)
    },
    view: {
      "default": /*#__PURE__*/css(_templateObject2 || (_templateObject2 = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", ": var(--surface-accent);\n                ", ": var(--surface-transparent-secondary);\n                ", ": var(--on-dark-text-primary);\n                ", ": 0 1px 1px rgba(0, 0, 0, 0.11);\n            "])), switchTokens.trackBackgroundColorOn, switchTokens.trackBackgroundColorOff, switchTokens.thumbBackgroundColor, switchTokens.thumbBoxShadow)
    },
    labelPosition: {
      before: /*#__PURE__*/css(_templateObject3 || (_templateObject3 = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", "\n            "])), Switch_LabelPosition_Before),
      after: /*#__PURE__*/css(_templateObject4 || (_templateObject4 = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", "\n            "])), Switch_LabelPosition_After)
    },
    disabled: {
      "true": /*#__PURE__*/css(_templateObject5 || (_templateObject5 = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", ": 0.4;\n            "])), switchTokens.disabledOpacity)
    },
    focused: {
      "true": /*#__PURE__*/css(_templateObject6 || (_templateObject6 = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", ": var(--surface-accent);\n            "])), switchTokens.trackFocusColor)
    }
  }
};