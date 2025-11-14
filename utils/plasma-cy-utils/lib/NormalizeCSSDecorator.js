"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormalizeCSSDecorator = void 0;
var styled_components_1 = require("styled-components");
/* stylelint-disable selector-max-universal */
exports.NormalizeCSSDecorator = (0, styled_components_1.createGlobalStyle)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    html {\n        box-sizing: border-box;\n    }\n\n    *,\n    ::before,\n    ::after {\n        box-sizing: border-box;\n    }\n"], ["\n    html {\n        box-sizing: border-box;\n    }\n\n    *,\n    ::before,\n    ::after {\n        box-sizing: border-box;\n    }\n"])));
var templateObject_1;
/* stylelint-enable selector-max-universal */
