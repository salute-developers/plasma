"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTestConfig = exports.getTestPackage = exports.TestTheme = exports.isTestPackageSupported = void 0;
// Default runtime for consumers outside the repository's Cypress webpack configuration.
// The repository replaces this module with the selected vertical at build time.
var react_1 = __importDefault(require("react"));
var styled_components_1 = require("styled-components");
var plasma_themes_1 = require("@salutejs/plasma-themes");
var sdds_themes_1 = require("@salutejs/sdds-themes");
var sdds_os_1 = require("@salutejs-ds/sdds_os");
var sdds_finai_1 = require("@sddsjs/sdds_finai");
var themes_1 = require("@salutejs/plasma-tokens-b2c/themes");
var plasma_typo_1 = require("@salutejs/plasma-typo");
var ThemeGIGA = (0, styled_components_1.createGlobalStyle)(plasma_themes_1.plasma_giga__light);
var ThemeCS = (0, styled_components_1.createGlobalStyle)(sdds_themes_1.sdds_cs__light);
var ThemeINSOL = (0, styled_components_1.createGlobalStyle)(sdds_themes_1.sdds_insol__light);
var ThemeINSOLNext = (0, styled_components_1.createGlobalStyle)(sdds_themes_1.sdds_insol_next__light);
var ThemeNETOLOGY = (0, styled_components_1.createGlobalStyle)(plasma_themes_1.plasma_b2c__light);
var ThemeBIZCOM = (0, styled_components_1.createGlobalStyle)(sdds_themes_1.sdds_bizcom__light);
var ThemeSERV = (0, styled_components_1.createGlobalStyle)(sdds_themes_1.sdds_serv__light);
var ThemeSCAN = (0, styled_components_1.createGlobalStyle)(sdds_themes_1.sdds_scan__light);
var ThemeOS = (0, styled_components_1.createGlobalStyle)(sdds_os_1.sdds_os__light);
var ThemePLATFORMAI = (0, styled_components_1.createGlobalStyle)(sdds_themes_1.sdds_platform_ai__light);
var ThemeFINAI = (0, styled_components_1.createGlobalStyle)(sdds_finai_1.sdds_finai_default__light);
var ThemeDFA = (0, styled_components_1.createGlobalStyle)(sdds_themes_1.sdds_dfa__light);
var ThemeHOMEDS = (0, styled_components_1.createGlobalStyle)(plasma_themes_1.plasma_homeds__light);
var ThemeWEB = (0, styled_components_1.createGlobalStyle)(plasma_themes_1.plasma_web__light);
var StandardTypoStyle = (0, styled_components_1.createGlobalStyle)(plasma_typo_1.standard);
var CompatibleTypoStyle = (0, styled_components_1.createGlobalStyle)(plasma_typo_1.compatible);
var ColorB2CStyle = (0, styled_components_1.createGlobalStyle)(themes_1.dark);
var themes = {
    'plasma-giga': react_1.default.createElement(ThemeGIGA, null),
    'sdds-cs': react_1.default.createElement(ThemeCS, null),
    'sdds-insol': react_1.default.createElement(ThemeINSOL, null),
    'sdds-insol-next': react_1.default.createElement(ThemeINSOLNext, null),
    'sdds-netology': react_1.default.createElement(ThemeNETOLOGY, null),
    'sdds-bizcom': react_1.default.createElement(ThemeBIZCOM, null),
    'plasma-web': react_1.default.createElement(ThemeWEB, null),
    'sdds-serv': react_1.default.createElement(ThemeSERV, null),
    'sdds-scan': react_1.default.createElement(ThemeSCAN, null),
    'sdds-os': react_1.default.createElement(ThemeOS, null),
    'sdds-platform-ai': react_1.default.createElement(ThemePLATFORMAI, null),
    'sdds-finai': react_1.default.createElement(ThemeFINAI, null),
    'sdds-dfa': react_1.default.createElement(ThemeDFA, null),
    'plasma-homeds': react_1.default.createElement(ThemeHOMEDS, null),
};
var isTestPackageSupported = function (packageName) {
    return packageName === 'plasma-b2c' || Object.prototype.hasOwnProperty.call(themes, packageName);
};
exports.isTestPackageSupported = isTestPackageSupported;
var TestTheme = function (_a) {
    var packageName = _a.packageName;
    if (packageName === 'plasma-b2c') {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(StandardTypoStyle, null),
            react_1.default.createElement(CompatibleTypoStyle, null),
            react_1.default.createElement(ColorB2CStyle, null)));
    }
    return themes[packageName] || null;
};
exports.TestTheme = TestTheme;
var getTestPackage = function (packageName) {
    /* eslint-disable @typescript-eslint/no-var-requires, global-require */
    switch (packageName) {
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
        case 'sdds-insol-next':
            return require('../../../packages/sdds-insol-next/dist/styled-components/cjs/index.js');
        case 'sdds-netology':
            return require('../../../packages/sdds-netology/dist/styled-components/cjs/index.js');
        case 'sdds-bizcom':
            return require('../../../packages/sdds-bizcom/dist/styled-components/cjs/index.js');
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
        case 'sdds-dfa':
            return require('../../../packages/sdds-dfa/dist/styled-components/cjs/index.js');
        case 'plasma-homeds':
            return require('../../../packages/plasma-homeds/dist/styled-components/cjs/index.js');
        default:
            throw new Error("Library ".concat(packageName, " is not required in plasma-core/CypressHelpers:getComponent"));
    }
    /* eslint-enable @typescript-eslint/no-var-requires, global-require */
};
exports.getTestPackage = getTestPackage;
var getTestConfig = function (component) {
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require, import/no-dynamic-require
        return require("src/examples/components/".concat(component, "/").concat(component, ".config.ts")).config;
    }
    catch (_a) {
        return null;
    }
};
exports.getTestConfig = getTestConfig;
