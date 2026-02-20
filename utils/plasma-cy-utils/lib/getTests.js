"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBaseVisualTests = void 0;
var react_1 = __importDefault(require("react"));
var CypressHelpers_1 = require("./CypressHelpers");
var CypressDecorator_1 = require("./CypressDecorator");
var getConfigMatrix_1 = require("./getConfigMatrix");
var getConfig = function (component) {
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require, import/no-dynamic-require
        return require("src/examples/components/".concat(component, "/").concat(component, ".config.ts")).config;
    }
    catch (_a) {
        return null;
    }
};
var getBaseVisualTests = function (_a) {
    var component = _a.component, componentProps = _a.componentProps, children = _a.children, configPropsForMatrix = _a.configPropsForMatrix;
    var componentExists = (0, CypressDecorator_1.hasComponent)(component);
    var describeFn = (0, CypressDecorator_1.getDescribeFN)(component);
    return describeFn("".concat(component), function () {
        var Component = componentExists ? (0, CypressDecorator_1.getComponent)(component) : function () { return null; };
        var config = componentExists ? getConfig(component) : null;
        var configMatrix = (0, getConfigMatrix_1.getConfigMatrix)(config, configPropsForMatrix);
        configMatrix.forEach(function (combination) {
            var testParams = Object.entries(combination)
                .map(function (_a) {
                var propName = _a[0], propValue = _a[1];
                return "".concat(propName, "=").concat(propValue);
            })
                .join(', ');
            it("".concat(testParams), function () {
                (0, CypressHelpers_1.mount)(react_1.default.createElement(react_1.default.Fragment, null, children ? (react_1.default.createElement(Component, __assign({}, combination, componentProps), children)) : (react_1.default.createElement(Component, __assign({}, combination, componentProps)))));
                // @ts-ignore
                cy.matchImageSnapshot();
            });
        });
    });
};
exports.getBaseVisualTests = getBaseVisualTests;
