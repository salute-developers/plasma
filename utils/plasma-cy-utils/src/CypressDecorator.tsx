import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
// plasma-web
import { web } from '@salutejs/plasma-tokens-web/typo';
import { light as webLight } from '@salutejs/plasma-tokens-web/themes';
// plasma-ui
import { darkSber } from '@salutejs/plasma-tokens/themes';
// plasma-b2c
import { dark } from '@salutejs/plasma-tokens-b2c/themes';
import { standard as standardTypo, compatible as compatibleTypo } from '@salutejs/plasma-typo';

import { SSRProvider } from './SSRProvider';

// TODO: better naming
const TypoThemeStyle = createGlobalStyle(web);
const WebLightThemeStyle = createGlobalStyle(webLight);

const StandardTypoStyle = createGlobalStyle(standardTypo);
const CompatibleTypoStyle = createGlobalStyle(compatibleTypo);
const ColorB2CStyle = createGlobalStyle(dark);
const ThemeStyle = createGlobalStyle(darkSber);

export const getComponent = function <T = PropsWithChildren<{}>>(componentName: string): React.FC<T> {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const pkgName = Cypress.env('package') as string | undefined;

    if (!pkgName) {
        throw new Error('Add package env to your Cypress config');
    }

    function check<T>(component: T): asserts component is NonNullable<T> {
        if (!component) {
            throw new Error(`Library ${pkgName} has no ${componentName}`);
        }
    }

    if (pkgName === 'plasma-ui') {
        // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
        const pkg = require('../../../packages/plasma-ui') as Record<string, React.FC<T> | undefined>;
        const component = pkg[componentName];

        check(component);

        return component;
    }

    if (pkgName === 'plasma-web') {
        // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
        const pkg = require('../../../packages/plasma-web') as Record<string, React.FC<T> | undefined>;
        const component = pkg[componentName];

        check(component);

        return component;
    }

    if (pkgName === 'plasma-b2c') {
        // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
        const pkg = require('../../../packages/plasma-b2c') as Record<string, React.FC<T> | undefined>;
        const component = pkg[componentName];

        check(component);

        return component;
    }

    throw new Error(`Library ${pkgName} is not required in plasma-core/CypressHelpers:getComponent`);
};

export const CypressTestDecorator: FC<PropsWithChildren<any>> = ({ noSSR, children }) => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const pkgName = Cypress.env('package') as string;

    if (pkgName === 'plasma-ui') {
        const DeviceThemeProvider = getComponent('DeviceThemeProvider');

        return (
            <DeviceThemeProvider>
                <SSRProvider noSSR={noSSR}>
                    <ThemeStyle />
                    {children}
                </SSRProvider>
            </DeviceThemeProvider>
        );
    }

    if (pkgName === 'plasma-web') {
        return (
            <SSRProvider noSSR={noSSR}>
                <TypoThemeStyle />
                <WebLightThemeStyle />
                {children}
            </SSRProvider>
        );
    }

    if (pkgName === 'plasma-b2c') {
        return (
            <SSRProvider noSSR={noSSR}>
                <StandardTypoStyle />
                <CompatibleTypoStyle />
                <ColorB2CStyle />
                {children}
            </SSRProvider>
        );
    }

    return <>{children}</>;
};
