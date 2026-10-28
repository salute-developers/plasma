import React from 'react';
import type { FC, PropsWithChildren } from 'react';

import { SSRProvider } from './SSRProvider';
import { NormalizeCSSDecorator } from './NormalizeCSSDecorator';
import { getTestPackage, isTestPackageSupported, TestTheme } from './testRuntime';

const getPackage = function <T = PropsWithChildren<{}>>(): Record<string, React.FC<T> | undefined> {
    const pkgName = Cypress.env('package') as string | undefined;

    if (!pkgName) {
        throw new Error('Add package env to your Cypress config');
    }

    return getTestPackage(pkgName) as Record<string, React.FC<T> | undefined>;
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
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const pkgName = Cypress.env('package') as string;

    if (isTestPackageSupported(pkgName)) {
        return (
            <SSRProvider noSSR={noSSR}>
                <NormalizeCSSDecorator />
                <TestTheme packageName={pkgName} />
                {children}
            </SSRProvider>
        );
    }

    return <>{children}</>;
};
