import { Grayscale, ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { buildDefaultTheme } from '../themes';

export const buildDefaultThemeWithUserConfig = async () => {
    const userConfig: ThemeConfig = {
        name: 'default',
        accentColor: {
            dark: '[general.blue.500]',
            light: '[general.blue.500]',
        },
        grayscale: {
            dark: Grayscale.gray,
            light: Grayscale.gray,
        },
    };

    const defaultTheme = buildDefaultTheme(userConfig);

    console.log('defaultTheme', JSON.parse(JSON.stringify(defaultTheme)));
};
