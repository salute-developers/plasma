import { Grayscale } from '@salutejs/plasma-tokens-utils';
import type { ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { createTheme } from '../builder/createTheme';
import { useNormalizeThemeSections } from '.';

export const useDefaultThemeData = () => {
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
            surfaces: false,
            textIcons: false,
        },
    };

    const data = createTheme(defaultConfig);

    return useNormalizeThemeSections(data);
};
