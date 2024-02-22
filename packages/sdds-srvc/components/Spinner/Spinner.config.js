"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
var _styledComponents = /*#__PURE__*/require("@salutejs/plasma-new-hope/styled-components");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var config = exports.config = {
  defaults: {
    view: 'accent',
    size: 'm'
  },
  variations: {
    view: {
      primary: /*#__PURE__*/(0, _styledComponents.css)(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteral(["\n                --plasma-spinner-color: var(--text-primary);\n            "]))),
      secondary: /*#__PURE__*/(0, _styledComponents.css)(_templateObject2 || (_templateObject2 = /*#__PURE__*/_taggedTemplateLiteral(["\n                --plasma-spinner-color: var(--text-secondary);\n            "]))),
      tertiary: /*#__PURE__*/(0, _styledComponents.css)(_templateObject3 || (_templateObject3 = /*#__PURE__*/_taggedTemplateLiteral(["\n                --plasma-spinner-color: var(--text-tertiary);\n            "]))),
      paragraph: /*#__PURE__*/(0, _styledComponents.css)(_templateObject4 || (_templateObject4 = /*#__PURE__*/_taggedTemplateLiteral(["\n                --plasma-spinner-color: var(--text-paragraph);\n            "]))),
      accent: /*#__PURE__*/(0, _styledComponents.css)(_templateObject5 || (_templateObject5 = /*#__PURE__*/_taggedTemplateLiteral(["\n                --plasma-spinner-color: var(--text-accent);\n            "]))),
      positive: /*#__PURE__*/(0, _styledComponents.css)(_templateObject6 || (_templateObject6 = /*#__PURE__*/_taggedTemplateLiteral(["\n                --plasma-spinner-color: var(--text-positive);\n            "]))),
      warning: /*#__PURE__*/(0, _styledComponents.css)(_templateObject7 || (_templateObject7 = /*#__PURE__*/_taggedTemplateLiteral(["\n                --plasma-spinner-color: var(--text-warning);\n            "]))),
      negative: /*#__PURE__*/(0, _styledComponents.css)(_templateObject8 || (_templateObject8 = /*#__PURE__*/_taggedTemplateLiteral(["\n                --plasma-spinner-color: var(--text-negative);\n            "])))
    }
  }
};