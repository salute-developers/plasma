import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { plasma_giga__light } from '@salutejs/plasma-themes';
import { sdds_cs__light, sdds_insol__light } from '@salutejs/sdds-themes';
// plasma-web
import { web } from '@salutejs/plasma-tokens-web/typo';
import { light as webLight } from '@salutejs/plasma-tokens-web/themes';
// plasma-ui
import { darkSber } from '@salutejs/plasma-tokens/themes';
// plasma-b2c
import { dark } from '@salutejs/plasma-tokens-b2c/themes';
import { standard as standardTypo, compatible as compatibleTypo } from '@salutejs/plasma-typo';

import { SSRProvider } from './SSRProvider';
import { NormalizeCSSDecorator } from './NormalizeCSSDecorator';

// NOTE: new theme format
const ThemeGIGA = createGlobalStyle(plasma_giga__light);
const ThemeCS = createGlobalStyle(sdds_cs__light);
const ThemeINSOL = createGlobalStyle(sdds_insol__light);

// TODO: better naming
const TypoThemeStyle = createGlobalStyle(web);
const WebLightThemeStyle = createGlobalStyle(webLight);

const StandardTypoStyle = createGlobalStyle(standardTypo);
const CompatibleTypoStyle = createGlobalStyle(compatibleTypo);
const ColorB2CStyle = createGlobalStyle(dark);
const ThemeStyle = createGlobalStyle(darkSber);

const testPackagesThemes = {
    'plasma-giga': <ThemeGIGA />,
    'sdds-cs': <ThemeCS />,
    'sdds-insol': <ThemeINSOL />,
};

const getPackage = function <T = PropsWithChildren<{}>>(): Record<string, React.FC<T> | undefined> {
    const pkgName = Cypress.env('package') as string | undefined;

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
            throw new Error(`Library ${pkgName} is not required in plasma-core/CypressHelpers:getComponent`);
    }
    /* eslint-enable */
};

export const hasComponent = (componentName: string): boolean => {
    const pkg = getPackage();
    return componentName in pkg && pkg[componentName] !== undefined;
};

export const getComponent = function <T = PropsWithChildren<{}>>(componentName: string): React.FC<T> {
    const pkgName = Cypress.env('package') as string | undefined;
    const pkg = getPackage<T>();
    const component = pkg[componentName];

    if (!component) {
        console.error(`Library ${pkgName} has no ${componentName}`);
    }

    return component || (() => null);
};

export const getDescribeFN = (component: string) => {
    const componentExists = hasComponent(component);

    return componentExists ? describe : describe.skip;
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
                <NormalizeCSSDecorator />
                <TypoThemeStyle />
                <WebLightThemeStyle />
                {children}
            </SSRProvider>
        );
    }

    if (pkgName === 'plasma-b2c') {
        return (
            <SSRProvider noSSR={noSSR}>
                <NormalizeCSSDecorator />
                <StandardTypoStyle />
                <CompatibleTypoStyle />
                <ColorB2CStyle />
                {children}
            </SSRProvider>
        );
    }

    if (['plasma-giga', 'sdds-cs', 'sdds-insol'].includes(pkgName)) {
        return (
            <SSRProvider noSSR={noSSR}>
                <NormalizeCSSDecorator />
                {testPackagesThemes[pkgName as keyof typeof testPackagesThemes]}
                {children}
            </SSRProvider>
        );
    }

    return <>{children}</>;
};
