var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import { css, segmentTokens } from '@salutejs/plasma-new-hope/styled-components';
export var config = {
  defaults: {
    view: 'clear',
    size: 'xs'
  },
  variations: {
    view: {
      clear: /*#__PURE__*/css(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", ": tranparent;\n                ", ": var(--plasma-colors-secondary);\n\n                ", ": var(--plasma-colors-button-focused);\n            "])), segmentTokens.groupBackgroundColor, segmentTokens.arrowColor, segmentTokens.outlineFocusColor),
      filled: /*#__PURE__*/css(_templateObject2 || (_templateObject2 = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", ": transparent;\n                ", ": var(--plasma-colors-secondary);\n\n                ", ": var(--plasma-colors-button-focused);\n            "])), segmentTokens.groupBackgroundColor, segmentTokens.arrowColor, segmentTokens.outlineFocusColor)
    },
    size: {
      xs: /*#__PURE__*/css(_templateObject3 || (_templateObject3 = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", ": 0.5rem;\n                ", ": auto;\n                ", ": auto;\n            "])), segmentTokens.groupBorderRadius, segmentTokens.groupWidth, segmentTokens.groupHeight),
      s: /*#__PURE__*/css(_templateObject4 || (_templateObject4 = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", ": 0.625rem;\n                ", ": auto;\n                ", ": auto;\n            "])), segmentTokens.groupBorderRadius, segmentTokens.groupWidth, segmentTokens.groupHeight),
      m: /*#__PURE__*/css(_templateObject5 || (_templateObject5 = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", ": 0.75rem;\n                ", ": auto;\n                ", ": auto;\n            "])), segmentTokens.groupBorderRadius, segmentTokens.groupWidth, segmentTokens.groupHeight),
      l: /*#__PURE__*/css(_templateObject6 || (_templateObject6 = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", ": 0.75rem;\n                ", ": auto;\n                ", ": auto;\n            "])), segmentTokens.groupBorderRadius, segmentTokens.groupWidth, segmentTokens.groupHeight)
    },
    disabled: {
      "true": /*#__PURE__*/css(_templateObject7 || (_templateObject7 = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", ": 0.4;\n            "])), segmentTokens.disabledOpacity)
    },
    pilled: {
      "true": /*#__PURE__*/css(_templateObject8 || (_templateObject8 = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", ": 1.75rem;\n            "])), segmentTokens.groupPilledBorderRadius)
    },
    filledBackground: {
      "true": /*#__PURE__*/css(_templateObject9 || (_templateObject9 = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", ": var(--plasma-colors-surface-liquid01);\n            "])), segmentTokens.groupFilledBackgroundColor)
    },
    stretch: {
      "true": /*#__PURE__*/css(_templateObject10 || (_templateObject10 = /*#__PURE__*/_taggedTemplateLiteral([""])))
    }
  }
};