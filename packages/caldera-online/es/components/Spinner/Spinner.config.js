var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import { css } from '@salutejs/plasma-new-hope/styled-components';
export var config = {
  defaults: {
    view: 'accent',
    size: 'm'
  },
  variations: {
    view: {
      primary: /*#__PURE__*/css(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteral(["\n                --plasma-spinner-color: var(--text-primary);\n            "]))),
      secondary: /*#__PURE__*/css(_templateObject2 || (_templateObject2 = /*#__PURE__*/_taggedTemplateLiteral(["\n                --plasma-spinner-color: var(--text-secondary);\n            "]))),
      tertiary: /*#__PURE__*/css(_templateObject3 || (_templateObject3 = /*#__PURE__*/_taggedTemplateLiteral(["\n                --plasma-spinner-color: var(--text-tertiary);\n            "]))),
      paragraph: /*#__PURE__*/css(_templateObject4 || (_templateObject4 = /*#__PURE__*/_taggedTemplateLiteral(["\n                --plasma-spinner-color: var(--text-paragraph);\n            "]))),
      accent: /*#__PURE__*/css(_templateObject5 || (_templateObject5 = /*#__PURE__*/_taggedTemplateLiteral(["\n                --plasma-spinner-color: var(--text-accent);\n            "]))),
      positive: /*#__PURE__*/css(_templateObject6 || (_templateObject6 = /*#__PURE__*/_taggedTemplateLiteral(["\n                --plasma-spinner-color: var(--text-positive);\n            "]))),
      warning: /*#__PURE__*/css(_templateObject7 || (_templateObject7 = /*#__PURE__*/_taggedTemplateLiteral(["\n                --plasma-spinner-color: var(--text-warning);\n            "]))),
      negative: /*#__PURE__*/css(_templateObject8 || (_templateObject8 = /*#__PURE__*/_taggedTemplateLiteral(["\n                --plasma-spinner-color: var(--text-negative);\n            "])))
    }
  }
};