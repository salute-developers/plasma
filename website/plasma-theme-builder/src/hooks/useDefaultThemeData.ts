import { useMemo } from 'react';
import { Grayscale } from '@salutejs/plasma-tokens-utils';
import type { ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { createTheme } from '../builder/createTheme';

const defaultConfig: ThemeConfig = {
    name: 'default',
    accentColor: {
        dark: '[general.green.500]',
        light: '[general.green.600]',
    },
    grayscale: {
        dark: Grayscale.gray,
        light: Grayscale.gray,
    },
};

export const useDefaultThemeData = () => {
    return useMemo(() => createTheme(defaultConfig), []);
};
