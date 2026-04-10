import React from 'react';
import { createGlobalStyle } from 'styled-components';
// Виртуальные модули, резолвятся плагинами в vite.config.ts.
// eslint-disable-next-line import/no-unresolved
import { themeVars, standardTypo, compatibleTypo } from '@plasma-cy/test-theme';
// eslint-disable-next-line import/no-unresolved
import * as testPackage from '@plasma-cy/test-package';
import { SSRProvider } from './SSRProvider';
import { NormalizeCSSDecorator } from './NormalizeCSSDecorator';
const ThemeStyle = createGlobalStyle(themeVars);
const StandardTypoStyle = standardTypo ? createGlobalStyle(standardTypo) : null;
const CompatibleTypoStyle = compatibleTypo ? createGlobalStyle(compatibleTypo) : null;
const getPackage = function () {
    const pkgName = Cypress.env('package');
    if (!pkgName) {
        throw new Error('Add package env to your Cypress config');
    }
    return testPackage;
};
export const hasComponent = (componentName) => {
    const pkg = getPackage();
    return componentName in pkg && pkg[componentName] !== undefined;
};
export const getComponent = function (componentName) {
    const pkgName = Cypress.env('package');
    const pkg = getPackage();
    const component = pkg[componentName];
    if (!component) {
        console.error(`Library ${pkgName} has no ${componentName}`);
    }
    return component;
};
export const getDescribeFN = (component) => {
    const componentExists = hasComponent(component);
    return componentExists ? describe : describe.skip;
};
export const skipForPackages = (packages) => {
    const pkgName = Cypress.env('package');
    return packages.includes(pkgName) ? it.skip : it;
};
export const skipForBrowser = (browsers, customIt) => {
    const browserName = Cypress.browser.family;
    return browsers.includes(browserName) ? it.skip : customIt;
};
export const CypressTestDecorator = ({ noSSR, children }) => {
    const pkgName = Cypress.env('package');
    if (pkgName === 'plasma-ui') {
        const DeviceThemeProvider = getComponent('DeviceThemeProvider');
        if (!DeviceThemeProvider) {
            return React.createElement(React.Fragment, null, children);
        }
        return (React.createElement(DeviceThemeProvider, null,
            React.createElement(SSRProvider, { noSSR: noSSR },
                React.createElement(ThemeStyle, null),
                children)));
    }
    return (React.createElement(SSRProvider, { noSSR: noSSR },
        React.createElement(NormalizeCSSDecorator, null),
        React.createElement(ThemeStyle, null),
        StandardTypoStyle && React.createElement(StandardTypoStyle, null),
        CompatibleTypoStyle && React.createElement(CompatibleTypoStyle, null),
        children));
};
