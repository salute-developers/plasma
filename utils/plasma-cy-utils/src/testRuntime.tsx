// Default runtime for consumers outside the repository's Cypress webpack configuration.
// The repository replaces this module with the selected vertical at build time.
import React from 'react';
import type { FC } from 'react';
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
    sdds_insol_next__light,
    sdds_bizcom__light,
    sdds_serv__light,
    sdds_scan__light,
    sdds_platform_ai__light,
    sdds_dfa__light,
} from '@salutejs/sdds-themes';
import { sdds_os__light } from '@salutejs-ds/sdds_os';
import { sdds_finai_default__light } from '@sddsjs/sdds_finai';
import { dark } from '@salutejs/plasma-tokens-b2c/themes';
import { standard as standardTypo, compatible as compatibleTypo } from '@salutejs/plasma-typo';

const ThemeGIGA = createGlobalStyle(plasma_giga__light);
const ThemeCS = createGlobalStyle(sdds_cs__light);
const ThemeINSOL = createGlobalStyle(sdds_insol__light);
const ThemeINSOLNext = createGlobalStyle(sdds_insol_next__light);
const ThemeNETOLOGY = createGlobalStyle(plasma_b2c__light);
const ThemeBIZCOM = createGlobalStyle(sdds_bizcom__light);
const ThemeSERV = createGlobalStyle(sdds_serv__light);
const ThemeSCAN = createGlobalStyle(sdds_scan__light);
const ThemeOS = createGlobalStyle(sdds_os__light);
const ThemePLATFORMAI = createGlobalStyle(sdds_platform_ai__light);
const ThemeFINAI = createGlobalStyle(sdds_finai_default__light);
const ThemeDFA = createGlobalStyle(sdds_dfa__light);
const ThemeHOMEDS = createGlobalStyle(plasma_homeds__light);
const ThemeWEB = createGlobalStyle(plasma_web__light);
const StandardTypoStyle = createGlobalStyle(standardTypo);
const CompatibleTypoStyle = createGlobalStyle(compatibleTypo);
const ColorB2CStyle = createGlobalStyle(dark);

const themes = {
    'plasma-giga': <ThemeGIGA />,
    'sdds-cs': <ThemeCS />,
    'sdds-insol': <ThemeINSOL />,
    'sdds-insol-next': <ThemeINSOLNext />,
    'sdds-netology': <ThemeNETOLOGY />,
    'sdds-bizcom': <ThemeBIZCOM />,
    'plasma-web': <ThemeWEB />,
    'sdds-serv': <ThemeSERV />,
    'sdds-scan': <ThemeSCAN />,
    'sdds-os': <ThemeOS />,
    'sdds-platform-ai': <ThemePLATFORMAI />,
    'sdds-finai': <ThemeFINAI />,
    'sdds-dfa': <ThemeDFA />,
    'plasma-homeds': <ThemeHOMEDS />,
};

export const isTestPackageSupported = (packageName: string) =>
    packageName === 'plasma-b2c' || Object.prototype.hasOwnProperty.call(themes, packageName);

export const TestTheme: FC<{ packageName: string }> = ({ packageName }) => {
    if (packageName === 'plasma-b2c') {
        return (
            <>
                <StandardTypoStyle />
                <CompatibleTypoStyle />
                <ColorB2CStyle />
            </>
        );
    }

    return themes[packageName as keyof typeof themes] || null;
};

export const getTestPackage = (packageName: string): Record<string, React.FC<any> | undefined> => {
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
            throw new Error(`Library ${packageName} is not required in plasma-core/CypressHelpers:getComponent`);
    }
    /* eslint-enable @typescript-eslint/no-var-requires, global-require */
};

export const getTestConfig = (component: string): any => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require, import/no-dynamic-require
        return require(`src/examples/components/${component}/${component}.config.ts`).config;
    } catch {
        return null;
    }
};
