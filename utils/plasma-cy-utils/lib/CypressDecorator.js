"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CypressTestDecorator = exports.getDescribeFN = exports.getComponent = exports.hasComponent = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = require("styled-components");
var plasma_themes_1 = require("@salutejs/plasma-themes");
var sdds_themes_1 = require("@salutejs/sdds-themes");
// plasma-web
var typo_1 = require("@salutejs/plasma-tokens-web/typo");
var themes_1 = require("@salutejs/plasma-tokens-web/themes");
// plasma-ui
var themes_2 = require("@salutejs/plasma-tokens/themes");
// plasma-b2c
var themes_3 = require("@salutejs/plasma-tokens-b2c/themes");
var plasma_typo_1 = require("@salutejs/plasma-typo");
var SSRProvider_1 = require("./SSRProvider");
var NormalizeCSSDecorator_1 = require("./NormalizeCSSDecorator");
// NOTE: new theme format
var ThemeGIGA = (0, styled_components_1.createGlobalStyle)(plasma_themes_1.plasma_giga__light);
var ThemeCS = (0, styled_components_1.createGlobalStyle)(sdds_themes_1.sdds_cs__light);
var ThemeINSOL = (0, styled_components_1.createGlobalStyle)(sdds_themes_1.sdds_insol__light);
// TODO: better naming
var TypoThemeStyle = (0, styled_components_1.createGlobalStyle)(typo_1.web);
var WebLightThemeStyle = (0, styled_components_1.createGlobalStyle)(themes_1.light);
var StandardTypoStyle = (0, styled_components_1.createGlobalStyle)(plasma_typo_1.standard);
var CompatibleTypoStyle = (0, styled_components_1.createGlobalStyle)(plasma_typo_1.compatible);
var ColorB2CStyle = (0, styled_components_1.createGlobalStyle)(themes_3.dark);
var ThemeStyle = (0, styled_components_1.createGlobalStyle)(themes_2.darkSber);
var testPackagesThemes = {
    'plasma-giga': react_1.default.createElement(ThemeGIGA, null),
    'sdds-cs': react_1.default.createElement(ThemeCS, null),
    'sdds-insol': react_1.default.createElement(ThemeINSOL, null),
};
var getPackage = function () {
    var pkgName = Cypress.env('package');
    if (!pkgName) {
        throw new Error('Add package env to your Cypress config');
    }
    /* eslint-disable */
    switch (pkgName) {
        case 'plasma-ui':
            return require('../../../packages/plasma-ui');
        case 'plasma-web':
            return require('../../../packages/plasma-web/dist/styled-components/cjs/index.js');
        case 'plasma-b2c':
            return require('../../../packages/plasma-b2c/dist/styled-components/cjs/index.js');
        case 'plasma-giga':
            return require('../../../packages/plasma-giga/dist/styled-components/cjs/index.js');
        case 'sdds-cs':
            return require('../../../packages/sdds-cs/dist/styled-components/cjs/index.js');
        case 'sdds-insol':
            return require('../../../packages/sdds-insol/dist/styled-components/cjs/index.js');
        default:
            throw new Error("Library ".concat(pkgName, " is not required in plasma-core/CypressHelpers:getComponent"));
    }
    /* eslint-enable */
};
var hasComponent = function (componentName) {
    var pkg = getPackage();
    return componentName in pkg && pkg[componentName] !== undefined;
};
exports.hasComponent = hasComponent;
var getComponent = function (componentName) {
    var pkgName = Cypress.env('package');
    var pkg = getPackage();
    var component = pkg[componentName];
    if (!component) {
        console.error("Library ".concat(pkgName, " has no ").concat(componentName));
    }
    return component || (function () { return null; });
};
exports.getComponent = getComponent;
var getDescribeFN = function (component) {
    var componentExists = (0, exports.hasComponent)(component);
    return componentExists ? describe : describe.skip;
};
exports.getDescribeFN = getDescribeFN;
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
            react_1.default.createElement(NormalizeCSSDecorator_1.NormalizeCSSDecorator, null),
            react_1.default.createElement(TypoThemeStyle, null),
            react_1.default.createElement(WebLightThemeStyle, null),
            children));
    }
    if (pkgName === 'plasma-b2c') {
        return (react_1.default.createElement(SSRProvider_1.SSRProvider, { noSSR: noSSR },
            react_1.default.createElement(NormalizeCSSDecorator_1.NormalizeCSSDecorator, null),
            react_1.default.createElement(StandardTypoStyle, null),
            react_1.default.createElement(CompatibleTypoStyle, null),
            react_1.default.createElement(ColorB2CStyle, null),
            children));
    }
    if (['plasma-giga', 'sdds-cs', 'sdds-insol'].includes(pkgName)) {
        return (react_1.default.createElement(SSRProvider_1.SSRProvider, { noSSR: noSSR },
            react_1.default.createElement(NormalizeCSSDecorator_1.NormalizeCSSDecorator, null),
            testPackagesThemes[pkgName],
            children));
    }
    return react_1.default.createElement(react_1.default.Fragment, null, children);
};
exports.CypressTestDecorator = CypressTestDecorator;
