"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withNoAnimation = exports.SpaceMe = exports.PadMe = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.PadMe = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: 5px;\n    box-sizing: content-box;\n"], ["\n    padding: 5px;\n    box-sizing: content-box;\n"])));
exports.SpaceMe = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    padding: 5px;\n    box-sizing: content-box;\n"], ["\n    padding: 5px;\n    box-sizing: content-box;\n"])));
var withNoAnimation = function (Comp) {
    return (0, styled_components_1.default)(Comp)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        animation: none !important;\n        /* stylelint-disable-next-line selector-max-universal */\n        & * {\n            animation: none !important;\n        }\n    "], ["\n        animation: none !important;\n        /* stylelint-disable-next-line selector-max-universal */\n        & * {\n            animation: none !important;\n        }\n    "])));
};
exports.withNoAnimation = withNoAnimation;
var templateObject_1, templateObject_2, templateObject_3;
