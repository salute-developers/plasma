var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import { css, modalTokens } from '@salutejs/plasma-new-hope/styled-components';
export var config = {
  defaults: {
    view: 'default'
  },
  variations: {
    view: {
      "default": /*#__PURE__*/css(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteral(["\n                ", ": rgba(35, 35, 35, 0.2);\n                ", ": var(--plasma-colors-overlay);\n            "])), modalTokens.modalOverlayWithBlurColor, modalTokens.modalOverlayColor)
    }
  }
};