import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { plasma_b2c__light, plasma_web__light } from '@salutejs/plasma-themes';
import { sdds_insol__light, sdds_cs__light } from '@salutejs/sdds-themes';

import { SSRProvider } from './SSRProvider';
import type { HasSSR } from './SSRProvider';

const ThemeB2C = createGlobalStyle(plasma_b2c__light);
const ThemeWEB = createGlobalStyle(plasma_web__light);
const ThemeINSOL = createGlobalStyle(sdds_insol__light);
const ThemeCS = createGlobalStyle(sdds_cs__light);

const testPackagesThemes = {
    'plasma-b2c': <ThemeB2C />,
    'plasma-web': <ThemeWEB />,
    'sdds-insol': <ThemeINSOL />,
    'sdds-cs': <ThemeCS />,
};

export const ThemeDecorator: FC<PropsWithChildren<HasSSR>> = ({ noSSR, children }) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const packageName = import.meta.env.PACKAGE as keyof typeof testPackagesThemes;

    return (
        <SSRProvider noSSR={noSSR}>
            {testPackagesThemes[packageName]}
            {children}
        </SSRProvider>
    );
};
