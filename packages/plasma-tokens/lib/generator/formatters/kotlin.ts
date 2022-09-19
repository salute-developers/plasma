import type { Dictionary, File, TransformedToken } from 'style-dictionary';

import { upperFirstLetter } from '../../themeBuilder/utils';

const getKotlinTemplate = (
    dataClassContent: string,
    lightThemeContent: string,
    darkThemeContent: string,
    name: string,
) => {
    const themeName = upperFirstLetter(name);

    const header = `
package com.sbermarket.uikit.theme.tokens

import androidx.compose.ui.graphics.Color
import androidx.compose.runtime.Immutable`;

    const dataClass = `@Immutable\ndata class ${themeName}Color(\n${dataClassContent}\n)`;
    const lightTheme = `internal val lightColors = ${themeName}Color(\n${lightThemeContent}\n)`;
    const darkTheme = `internal val darkColors = ${themeName}Color(\n${darkThemeContent}\n)\n`;

    return [header, dataClass, lightTheme, darkTheme].join('\n\n');
};

export const kotlinCustomFormatter = ({ dictionary, file }: { dictionary: Dictionary; file: File }) => {
    const themeName = file.className || '';
    const filterWord = 'light';

    const getTheme = (tokenItems: TransformedToken[], theme: 'light' | 'dark') =>
        tokenItems
            .filter((tokens) => tokens.attributes?.type?.includes(theme))
            .map((token) => `    ${token.attributes?.item} = ${token.value}`)
            .join(`\n`);

    const enums = dictionary.allTokens
        .filter((tokens) => tokens.attributes?.type?.includes(filterWord)) // or dark
        .map((token) => `    val ${token.attributes?.item}: Color`)
        .join(`,\n`);

    const lightTheme = getTheme(dictionary.allTokens, 'light');
    const darkTheme = getTheme(dictionary.allTokens, 'dark');

    return getKotlinTemplate(enums, lightTheme, darkTheme, themeName);
};
