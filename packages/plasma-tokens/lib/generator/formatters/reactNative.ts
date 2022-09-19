import type { Dictionary, File, TransformedToken } from 'style-dictionary';

import { upperFirstLetter } from '../../themeBuilder/utils';

const getReactNativeTemplate = (lightThemeContent: string, darkThemeContent: string, name: string) => {
    const themeName = upperFirstLetter(name);

    const lightTheme = `export const ${themeName}LightColors = {\n${lightThemeContent}\n} as const`;
    const darkTheme = `export const ${themeName}DarkColors = {\n${darkThemeContent}\n} as const`;

    return [lightTheme, darkTheme].join('\n\n');
};

export const reactNativeCustomFormatter = ({ dictionary, file }: { dictionary: Dictionary; file: File }) => {
    const themeName = file.className || '';

    const getTheme = (tokenItems: TransformedToken[], theme: 'light' | 'dark') =>
        tokenItems
            .filter((tokens) => tokens.attributes?.type?.includes(theme))
            .map((token) => `    ${token.attributes?.item}: '${token.value}'`)
            .join(`,\n`);

    const lightTheme = getTheme(dictionary.allTokens, 'light');
    const darkTheme = getTheme(dictionary.allTokens, 'dark');

    return getReactNativeTemplate(lightTheme, darkTheme, themeName);
};
