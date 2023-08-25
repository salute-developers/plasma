import { useMemo } from 'react';
import { Grayscale } from '@salutejs/plasma-tokens-utils';
import type { ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { createTheme } from '../builder/createTheme';
import { getNormalizeThemeSections } from '../utils';

const defaultConfig: ThemeConfig = {
    name: 'default',
    accentColor: {
        dark: 'black',
        light: 'white',
    },
    grayscale: {
        dark: Grayscale.coolGray,
        light: Grayscale.coolGray,
    },
    opacity: {
        textIcons: false,
        surfaces: true,
    },
};

export const useDefaultThemeData = () => {
    const defaultThemeData = useMemo(() => createTheme(defaultConfig), []);
    const normalizedThemeData = useMemo(() => getNormalizeThemeSections(defaultThemeData), [defaultThemeData]);

    return normalizedThemeData;
};
