import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { plasma_giga__light } from '@salutejs/plasma-themes';
import { sdds_cs__light } from '@salutejs/sdds-themes';
// plasma-web
import { web } from '@salutejs/plasma-tokens-web/typo';
import { light as webLight } from '@salutejs/plasma-tokens-web/themes';
// plasma-ui
import { darkSber } from '@salutejs/plasma-tokens/themes';
// plasma-b2c
import { dark } from '@salutejs/plasma-tokens-b2c/themes';
import { standard as standardTypo, compatible as compatibleTypo } from '@salutejs/plasma-typo';

import { SSRProvider } from './SSRProvider';

// NOTE: new theme format
const ThemeGIGA = createGlobalStyle(plasma_giga__light);
const ThemeCS = createGlobalStyle(sdds_cs__light);

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
};

export const getComponent = function <T = PropsWithChildren<{}>>(componentName: string): React.FC<T> {
    const pkgName = Cypress.env('package') as string | undefined;

    if (!pkgName) {
        throw new Error('Add package env to your Cypress config');
    }

    let pkg: Record<string, React.FC<T> | undefined>;

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
        case 'sdds-cs':
            pkg = require('../../../packages/sdds-cs');
            break;
        default:
            throw new Error(`Library ${pkgName} is not required in plasma-core/CypressHelpers:getComponent`);
    }
    /* eslint-enable */

    const component = pkg[componentName];

    if (!component) {
        throw new Error(`Library ${pkgName} has no ${componentName}`);
    }

    return component;
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

    if (['plasma-giga', 'sdds-cs'].includes(pkgName)) {
        return (
            <SSRProvider noSSR={noSSR}>
                {testPackagesThemes[pkgName as keyof typeof testPackagesThemes]}
                {children}
            </SSRProvider>
        );
    }

    return <>{children}</>;
};
