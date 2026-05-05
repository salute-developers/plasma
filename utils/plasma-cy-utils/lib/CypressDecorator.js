"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CypressTestDecorator = exports.skipForBrowser = exports.skipForPackages = exports.getDescribeFN = exports.getComponent = exports.hasComponent = void 0;
var react_1 = __importDefault(require("react"));
var styled_components_1 = require("styled-components");
var plasma_themes_1 = require("@salutejs/plasma-themes");
var sdds_themes_1 = require("@salutejs/sdds-themes");
var sdds_os_1 = require("@salutejs-ds/sdds_os");
// plasma-ui
var themes_1 = require("@salutejs/plasma-tokens/themes");
// plasma-b2c
var themes_2 = require("@salutejs/plasma-tokens-b2c/themes");
var plasma_typo_1 = require("@salutejs/plasma-typo");
var SSRProvider_1 = require("./SSRProvider");
var NormalizeCSSDecorator_1 = require("./NormalizeCSSDecorator");
// NOTE: new theme format
var ThemeGIGA = (0, styled_components_1.createGlobalStyle)(plasma_themes_1.plasma_giga__light);
var ThemeCS = (0, styled_components_1.createGlobalStyle)(sdds_themes_1.sdds_cs__light);
var ThemeINSOL = (0, styled_components_1.createGlobalStyle)(sdds_themes_1.sdds_insol__light);
var ThemeSERV = (0, styled_components_1.createGlobalStyle)(sdds_themes_1.sdds_serv__light);
var ThemeSCAN = (0, styled_components_1.createGlobalStyle)(sdds_themes_1.sdds_scan__light);
var ThemeOS = (0, styled_components_1.createGlobalStyle)(sdds_os_1.sdds_os__light);
var ThemePLATFORMAI = (0, styled_components_1.createGlobalStyle)(sdds_themes_1.sdds_platform_ai__light);
var ThemeFINAI = (0, styled_components_1.createGlobalStyle)(sdds_themes_1.sdds_finai__light);
var ThemeHOMEDS = (0, styled_components_1.createGlobalStyle)(plasma_themes_1.plasma_homeds__light);
var ThemeWEB = (0, styled_components_1.createGlobalStyle)(plasma_themes_1.plasma_web__light);
var StandardTypoStyle = (0, styled_components_1.createGlobalStyle)(plasma_typo_1.standard);
var CompatibleTypoStyle = (0, styled_components_1.createGlobalStyle)(plasma_typo_1.compatible);
var ColorB2CStyle = (0, styled_components_1.createGlobalStyle)(themes_2.dark);
var ThemeStyle = (0, styled_components_1.createGlobalStyle)(themes_1.darkSber);
var testPackagesThemes = {
    'plasma-giga': react_1.default.createElement(ThemeGIGA, null),
    'sdds-cs': react_1.default.createElement(ThemeCS, null),
    'sdds-insol': react_1.default.createElement(ThemeINSOL, null),
    'plasma-web': react_1.default.createElement(ThemeWEB, null),
    'sdds-serv': react_1.default.createElement(ThemeSERV, null),
    'sdds-scan': react_1.default.createElement(ThemeSCAN, null),
    'sdds-os': react_1.default.createElement(ThemeOS, null),
    'sdds-platform-ai': react_1.default.createElement(ThemePLATFORMAI, null),
    'sdds-finai': react_1.default.createElement(ThemeFINAI, null),
    'plasma-homeds': react_1.default.createElement(ThemeHOMEDS, null),
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
            return require('../../../packages/sdds-cs/dist/emotion/cjs/index.js');
        case 'sdds-insol':
            return require('../../../packages/sdds-insol/dist/styled-components/cjs/index.js');
        case 'sdds-serv':
            return require('../../../packages/sdds-serv/dist/styled-components/cjs/index.js');
        case 'sdds-scan':
            return require('../../../packages/sdds-scan/dist/styled-components/cjs/index.js');
        case 'sdds-os':
            return require('../../../packages/sdds-os/dist/styled-components/cjs/index.js');
        case 'sdds-platform-ai':
            return require('../../../packages/sdds-platform-ai/dist/styled-components/cjs/index.js');
        case 'sdds-finai':
            return require('../../../packages/sdds-finai/dist/styled-components/cjs/index.js');
        case 'plasma-homeds':
            return require('../../../packages/plasma-homeds/dist/styled-components/cjs/index.js');
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
    return component;
};
exports.getComponent = getComponent;
var getDescribeFN = function (component) {
    var componentExists = (0, exports.hasComponent)(component);
    return componentExists ? describe : describe.skip;
};
exports.getDescribeFN = getDescribeFN;
var skipForPackages = function (packages) {
    var pkgName = Cypress.env('package');
    return packages.includes(pkgName) ? it.skip : it;
};
exports.skipForPackages = skipForPackages;
var skipForBrowser = function (browsers, customIt) {
    var browserName = Cypress.browser.family;
    return browsers.includes(browserName) ? it.skip : customIt;
};
exports.skipForBrowser = skipForBrowser;
var CypressTestDecorator = function (_a) {
    var noSSR = _a.noSSR, children = _a.children;
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    var pkgName = Cypress.env('package');
    if (pkgName === 'plasma-ui') {
        var DeviceThemeProvider = (0, exports.getComponent)('DeviceThemeProvider');
        if (!DeviceThemeProvider) {
            return react_1.default.createElement(react_1.default.Fragment, null, children);
        }
        return (react_1.default.createElement(DeviceThemeProvider, null,
            react_1.default.createElement(SSRProvider_1.SSRProvider, { noSSR: noSSR },
                react_1.default.createElement(ThemeStyle, null),
                children)));
    }
    if (pkgName === 'plasma-b2c') {
        return (react_1.default.createElement(SSRProvider_1.SSRProvider, { noSSR: noSSR },
            react_1.default.createElement(NormalizeCSSDecorator_1.NormalizeCSSDecorator, null),
            react_1.default.createElement(StandardTypoStyle, null),
            react_1.default.createElement(CompatibleTypoStyle, null),
            react_1.default.createElement(ColorB2CStyle, null),
            children));
    }
    if ([
        'plasma-giga',
        'sdds-cs',
        'sdds-insol',
        'plasma-web',
        'sdds-serv',
        'sdds-scan',
        'sdds-os',
        'sdds-platform-ai',
        'sdds-finai',
        'plasma-homeds',
    ].includes(pkgName)) {
        return (react_1.default.createElement(SSRProvider_1.SSRProvider, { noSSR: noSSR },
            react_1.default.createElement(NormalizeCSSDecorator_1.NormalizeCSSDecorator, null),
            testPackagesThemes[pkgName],
            children));
    }
    return react_1.default.createElement(react_1.default.Fragment, null, children);
};
exports.CypressTestDecorator = CypressTestDecorator;
