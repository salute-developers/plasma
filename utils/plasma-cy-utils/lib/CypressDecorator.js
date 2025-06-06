"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CypressTestDecorator = exports.getComponent = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = require("styled-components");
// plasma-web
var typo_1 = require("@salutejs/plasma-tokens-web/typo");
var themes_1 = require("@salutejs/plasma-tokens-web/themes");
// plasma-ui
var themes_2 = require("@salutejs/plasma-tokens/themes");
// plasma-b2c
var themes_3 = require("@salutejs/plasma-tokens-b2c/themes");
var plasma_typo_1 = require("@salutejs/plasma-typo");
var SSRProvider_1 = require("./SSRProvider");
// TODO: better naming
var TypoThemeStyle = (0, styled_components_1.createGlobalStyle)(typo_1.web);
var WebLightThemeStyle = (0, styled_components_1.createGlobalStyle)(themes_1.light);
var StandardTypoStyle = (0, styled_components_1.createGlobalStyle)(plasma_typo_1.standard);
var CompatibleTypoStyle = (0, styled_components_1.createGlobalStyle)(plasma_typo_1.compatible);
var ColorB2CStyle = (0, styled_components_1.createGlobalStyle)(themes_3.dark);
var ThemeStyle = (0, styled_components_1.createGlobalStyle)(themes_2.darkSber);
var getComponent = function (componentName) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    var pkgName = Cypress.env('package');
    if (!pkgName) {
        throw new Error('Add package env to your Cypress config');
    }
    function check(component) {
        if (!component) {
            throw new Error("Library ".concat(pkgName, " has no ").concat(componentName));
        }
    }
    if (pkgName === 'plasma-ui') {
        // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
        var pkg = require('../../../packages/plasma-ui');
        var component = pkg[componentName];
        check(component);
        return component;
    }
    if (pkgName === 'plasma-web') {
        // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
        var pkg = require('../../../packages/plasma-web');
        var component = pkg[componentName];
        check(component);
        return component;
    }
    if (pkgName === 'plasma-b2c') {
        // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
        var pkg = require('../../../packages/plasma-b2c');
        var component = pkg[componentName];
        check(component);
        return component;
    }
    throw new Error("Library ".concat(pkgName, " is not required in plasma-core/CypressHelpers:getComponent"));
};
exports.getComponent = getComponent;
var CypressTestDecorator = function (_a) {
    var noSSR = _a.noSSR, children = _a.children;
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    var pkgName = Cypress.env('package');
    if (pkgName === 'plasma-ui') {
        var DeviceThemeProvider = (0, exports.getComponent)('DeviceThemeProvider');
        return (react_1.default.createElement(DeviceThemeProvider, null,
            react_1.default.createElement(SSRProvider_1.SSRProvider, { noSSR: noSSR },
                react_1.default.createElement(ThemeStyle, null),
                children)));
    }
    if (pkgName === 'plasma-web') {
        return (react_1.default.createElement(SSRProvider_1.SSRProvider, { noSSR: noSSR },
            react_1.default.createElement(TypoThemeStyle, null),
            react_1.default.createElement(WebLightThemeStyle, null),
            children));
    }
    if (pkgName === 'plasma-b2c') {
        return (react_1.default.createElement(SSRProvider_1.SSRProvider, { noSSR: noSSR },
            react_1.default.createElement(StandardTypoStyle, null),
            react_1.default.createElement(CompatibleTypoStyle, null),
            react_1.default.createElement(ColorB2CStyle, null),
            children));
    }
    return react_1.default.createElement(react_1.default.Fragment, null, children);
};
exports.CypressTestDecorator = CypressTestDecorator;
