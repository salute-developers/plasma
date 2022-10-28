import type { Dictionary, File, TransformedToken } from 'style-dictionary';

import { lowerFirstLetter } from '../../themeBuilder/utils';

const getKotlinTemplate = (
    dataClassContent: string,
    lightThemeContent: string,
    darkThemeContent: string,
    name: string,
) => {
    const header = `
package com.${lowerFirstLetter(name)}.uikit.theme.tokens

import androidx.compose.ui.graphics.Color
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Brush
import androidx.compose.runtime.Immutable

internal data class AngledLinearGradient(
    private val colors: List<Color>,
    private val stops: List<Float>? = null,
    private val start: Offset = Offset.Zero,
    private val end: Offset = Offset.Infinite,
    private val tileMode: TileMode = TileMode.Clamp,
    private val angle: Float = 0.0f,
) : ShaderBrush()`;

    const dataClass = `@Immutable\ndata class ${name}Color(\n${dataClassContent}\n)`;
    const lightTheme = `internal val lightColors = ${name}Color(\n${lightThemeContent}\n)`;
    const darkTheme = `internal val darkColors = ${name}Color(\n${darkThemeContent}\n)\n`;

    return [header, dataClass, lightTheme, darkTheme].join('\n\n');
};

const getTheme = (tokenItems: TransformedToken[], theme: 'light' | 'dark') =>
    tokenItems
        .filter((tokens) => tokens.attributes?.type?.includes(theme))
        .map((token) => `    ${token.attributes?.item} = ${token.value},`)
        .join(`\n`);

const getEnumValue = (token: TransformedToken) => {
    const type = token.original.value.linearGradient ? 'Brush' : 'Color';

    return `    val ${token.attributes?.item}: ${type}`;
};

export const kotlinCustomFormatter = ({ dictionary, file }: { dictionary: Dictionary; file: File }) => {
    const themeName = file.className || '';
    const filterWord = 'light';

    const enums = dictionary.allTokens
        .filter((tokens) => tokens.attributes?.type?.includes(filterWord))
        .map(getEnumValue)
        .join(`,\n`);

    const lightTheme = getTheme(dictionary.allTokens, 'light');
    const darkTheme = getTheme(dictionary.allTokens, 'dark');

    return getKotlinTemplate(enums, lightTheme, darkTheme, themeName);
};
