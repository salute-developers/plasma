"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CypressTestDecorator = exports.getComponent = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = require("styled-components");
var plasma_themes_1 = require("@salutejs/plasma-themes");
// plasma-web
var typo_1 = require("@salutejs/plasma-tokens-web/typo");
var themes_1 = require("@salutejs/plasma-tokens-web/themes");
// plasma-ui
var themes_2 = require("@salutejs/plasma-tokens/themes");
// plasma-b2c
var themes_3 = require("@salutejs/plasma-tokens-b2c/themes");
var plasma_typo_1 = require("@salutejs/plasma-typo");
var SSRProvider_1 = require("./SSRProvider");
// NOTE: new theme format
var ThemeGIGA = (0, styled_components_1.createGlobalStyle)(plasma_themes_1.plasma_giga__light);
// TODO: better naming
var TypoThemeStyle = (0, styled_components_1.createGlobalStyle)(typo_1.web);
var WebLightThemeStyle = (0, styled_components_1.createGlobalStyle)(themes_1.light);
var StandardTypoStyle = (0, styled_components_1.createGlobalStyle)(plasma_typo_1.standard);
var CompatibleTypoStyle = (0, styled_components_1.createGlobalStyle)(plasma_typo_1.compatible);
var ColorB2CStyle = (0, styled_components_1.createGlobalStyle)(themes_3.dark);
var ThemeStyle = (0, styled_components_1.createGlobalStyle)(themes_2.darkSber);
var testPackagesThemes = {
    'plasma-giga': react_1.default.createElement(ThemeGIGA, null),
};
var getComponent = function (componentName) {
    var pkgName = Cypress.env('package');
    if (!pkgName) {
        throw new Error('Add package env to your Cypress config');
    }
    var pkg;
    /* eslint-disable */
    switch (pkgName) {
        case 'plasma-ui':
            pkg = require('../../../packages/plasma-ui');
            break;
        case 'plasma-web':
            pkg = require('../../../packages/plasma-web');
            break;
        case 'plasma-b2c':
            pkg = require('../../../packages/plasma-b2c');
            break;
        case 'plasma-giga':
            pkg = require('../../../packages/plasma-giga');
            break;
        default:
            throw new Error("Library ".concat(pkgName, " is not required in plasma-core/CypressHelpers:getComponent"));
    }
    /* eslint-enable */
    var component = pkg[componentName];
    if (!component) {
        throw new Error("Library ".concat(pkgName, " has no ").concat(componentName));
    }
    return component;
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
    if (pkgName === 'plasma-giga') {
        return (react_1.default.createElement(SSRProvider_1.SSRProvider, { noSSR: noSSR },
            testPackagesThemes[pkgName],
            children));
    }
    return react_1.default.createElement(react_1.default.Fragment, null, children);
};
exports.CypressTestDecorator = CypressTestDecorator;
