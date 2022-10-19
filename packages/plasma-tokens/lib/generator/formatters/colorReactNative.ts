import type { Dictionary, File, TransformedToken } from 'style-dictionary';

import { upperFirstLetter } from '../../themeBuilder/utils';

const getReactNativeTemplate = (lightThemeContent: string, darkThemeContent: string, name: string) => {
    const themeName = upperFirstLetter(name);

    const lightTheme = `export const ${themeName}LightColors = {\n${lightThemeContent}\n} as const`;
    const darkTheme = `export const ${themeName}DarkColors = {\n${darkThemeContent}\n} as const`;

    return [lightTheme, darkTheme].join('\n\n');
};

const getTokenValue = (token: TransformedToken) => {
    const value = token.original.value.linearGradient
        ? `${token.value.replace(/@@@/g, '{').replace(/!!!/g, '}')}`
        : `'${token.value}'`;

    return `    ${token.attributes?.item}: ${value}`;
};

const getTheme = (tokenItems: TransformedToken[], theme: 'light' | 'dark') =>
    tokenItems
        .filter((tokens) => tokens.attributes?.type?.includes(theme))
        .map(getTokenValue)
        .join(`,\n`);

export const colorReactNativeCustomFormatter = ({ dictionary, file }: { dictionary: Dictionary; file: File }) => {
    const themeName = file.className || '';

    const lightTheme = getTheme(dictionary.allTokens, 'light');
    const darkTheme = getTheme(dictionary.allTokens, 'dark');

    return getReactNativeTemplate(lightTheme, darkTheme, themeName);
};
