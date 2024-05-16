import { Grayscale, ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { buildDefaultTheme } from '../themes';

export const buildDefaultThemeWithUserConfig = async () => {
    const userConfig: ThemeConfig = {
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

    const defaultTheme = buildDefaultTheme(userConfig);

    console.log('defaultTheme', JSON.parse(JSON.stringify(defaultTheme)));
};
