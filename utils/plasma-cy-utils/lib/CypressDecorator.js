"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CypressTestDecorator = exports.skipForBrowser = exports.skipForPackages = exports.getDescribeFN = exports.getComponent = exports.hasComponent = void 0;
var react_1 = __importDefault(require("react"));
var SSRProvider_1 = require("./SSRProvider");
var NormalizeCSSDecorator_1 = require("./NormalizeCSSDecorator");
var testRuntime_1 = require("./testRuntime");
var getPackage = function () {
    var pkgName = Cypress.env('package');
    if (!pkgName) {
        throw new Error('Add package env to your Cypress config');
    }
    return (0, testRuntime_1.getTestPackage)(pkgName);
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
    if ((0, testRuntime_1.isTestPackageSupported)(pkgName)) {
        return (react_1.default.createElement(SSRProvider_1.SSRProvider, { noSSR: noSSR },
            react_1.default.createElement(NormalizeCSSDecorator_1.NormalizeCSSDecorator, null),
            react_1.default.createElement(testRuntime_1.TestTheme, { packageName: pkgName }),
            children));
    }
    return react_1.default.createElement(react_1.default.Fragment, null, children);
};
exports.CypressTestDecorator = CypressTestDecorator;
