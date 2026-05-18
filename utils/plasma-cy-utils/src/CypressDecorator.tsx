import React from 'react';
import type { FC, PropsWithChildren } from 'react';
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

const getPackage = function <T = PropsWithChildren<{}>>(): Record<string, React.FC<T> | undefined> {
    const pkgName = Cypress.env('package') as string | undefined;

    if (!pkgName) {
        throw new Error('Add package env to your Cypress config');
    }

    return (testPackage as unknown) as Record<string, React.FC<T> | undefined>;
};

export const hasComponent = (componentName: string): boolean => {
    const pkg = getPackage();
    return componentName in pkg && pkg[componentName] !== undefined;
};

export const getComponent = function <T = PropsWithChildren<{}>>(componentName: string): React.FC<T> {
    const pkgName = Cypress.env('package') as string | undefined;
    const pkg = getPackage<T>();
    const component = pkg[componentName] as React.FC<T>;

    if (!component) {
        console.error(`Library ${pkgName} has no ${componentName}`);
    }

    return component;
};

export const getDescribeFN = (component: string) => {
    const componentExists = hasComponent(component);

    return componentExists ? describe : describe.skip;
};

export const skipForPackages = (packages: string[]) => {
    const pkgName = Cypress.env('package') as string;
    return packages.includes(pkgName) ? it.skip : it;
};

export const skipForBrowser = (browsers: string[], customIt: Mocha.TestFunction) => {
    const browserName = Cypress.browser.family as string;
    return browsers.includes(browserName) ? it.skip : customIt;
};

export const CypressTestDecorator: FC<PropsWithChildren<any>> = ({ noSSR, children }) => {
    const pkgName = Cypress.env('package') as string;

    if (pkgName === 'plasma-ui') {
        const DeviceThemeProvider = getComponent('DeviceThemeProvider');

        if (!DeviceThemeProvider) {
            return <>{children}</>;
        }

        return (
            <DeviceThemeProvider>
                <SSRProvider noSSR={noSSR}>
                    <ThemeStyle />
                    {children}
                </SSRProvider>
            </DeviceThemeProvider>
        );
    }

    return (
        <SSRProvider noSSR={noSSR}>
            <NormalizeCSSDecorator />
            <ThemeStyle />
            {StandardTypoStyle && <StandardTypoStyle />}
            {CompatibleTypoStyle && <CompatibleTypoStyle />}
            {children}
        </SSRProvider>
    );
};
