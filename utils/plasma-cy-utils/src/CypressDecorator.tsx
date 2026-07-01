import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import {
    plasma_giga__light,
    plasma_web__light,
    plasma_homeds__light,
    plasma_b2c__light,
} from '@salutejs/plasma-themes';
import {
    sdds_cs__light,
    sdds_insol__light,
    sdds_serv__light,
    sdds_scan__light,
    sdds_platform_ai__light,
    sdds_finai__light,
    sdds_dfa__light,
} from '@salutejs/sdds-themes';
import { sdds_os__light } from '@salutejs-ds/sdds_os';
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
const ThemeNETOLOGY = createGlobalStyle(plasma_b2c__light);
const ThemeSERV = createGlobalStyle(sdds_serv__light);
const ThemeSCAN = createGlobalStyle(sdds_scan__light);
const ThemeOS = createGlobalStyle(sdds_os__light);
const ThemePLATFORMAI = createGlobalStyle(sdds_platform_ai__light);
const ThemeFINAI = createGlobalStyle(sdds_finai__light);
const ThemeDFA = createGlobalStyle(sdds_dfa__light);
const ThemeHOMEDS = createGlobalStyle(plasma_homeds__light);
const ThemeWEB = createGlobalStyle(plasma_web__light);

const StandardTypoStyle = createGlobalStyle(standardTypo);
const CompatibleTypoStyle = createGlobalStyle(compatibleTypo);
const ColorB2CStyle = createGlobalStyle(dark);
const ThemeStyle = createGlobalStyle(darkSber);

const testPackagesThemes = {
    'plasma-giga': <ThemeGIGA />,
    'sdds-cs': <ThemeCS />,
    'sdds-insol': <ThemeINSOL />,
    'sdds-netology': <ThemeNETOLOGY />,
    'plasma-web': <ThemeWEB />,
    'sdds-serv': <ThemeSERV />,
    'sdds-scan': <ThemeSCAN />,
    'sdds-os': <ThemeOS />,
    'sdds-platform-ai': <ThemePLATFORMAI />,
    'sdds-finai': <ThemeFINAI />,
    'sdds-dfa': <ThemeDFA />,
    'plasma-homeds': <ThemeHOMEDS />,
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
            return require('../../../packages/sdds-cs/dist/emotion/cjs/index.js');
        case 'sdds-insol':
            return require('../../../packages/sdds-insol/dist/styled-components/cjs/index.js');
        case 'sdds-netology':
            return require('../../../packages/sdds-netology/dist/styled-components/cjs/index.js');
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

    if (
        [
            'plasma-giga',
            'sdds-cs',
            'sdds-insol',
            'sdds-netology',
            'plasma-web',
            'sdds-serv',
            'sdds-scan',
            'sdds-os',
            'sdds-platform-ai',
            'sdds-finai',
            'sdds-dfa',
            'plasma-homeds',
        ].includes(pkgName)
    ) {
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
