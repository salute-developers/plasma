import type { Dictionary, File, TransformedToken } from 'style-dictionary';

import { camelize, lowerFirstLetter } from '../../tokensGenerator/utils';
import { ThemeColor, ThemeColorType } from '../types';

const getKotlinTemplate = (lightThemeContent: string, darkThemeContent: string, name: string) => {
    const header = `package ru.${lowerFirstLetter(name)}.sm_theme.theme.constants

import androidx.compose.ui.graphics.Color
import ru.${lowerFirstLetter(name)}.sm_theme.theme.AngledLinearGradient
import ru.${lowerFirstLetter(name)}.sm_theme.theme.tokens.SMColor`;

    const deprecatedColor = `    // Main colors
    mainPrimary = Color(0xff24b23e),
    mainWhite = Color(0xFFFFFFFF),

    // Black shades
    black100 = Color(0xff24282b),
    black200 = Color(0xff8c959c),
    black300 = Color(0xffbec9d1),
    black400 = Color(0xffe4ebf0),
    black500 = Color(0xfff2f5f7),
    black600 = Color(0xFFF7F8FA),

    // Notification colors
    notificationError = Color(0xfff31b31),
    notificationSuccess = Color(0xFF32D74B),

    // Accent colors
    colorAccentSecondary = Color(0xffff1f78),
    
    /**
     * relevant (new) color scheme
     */`;

    const lightTheme = `internal val lightColors = SMColor(\n${deprecatedColor}\n${lightThemeContent}\n)`;
    const darkTheme = `internal val darkColors = SMColor(\n${deprecatedColor}\n${darkThemeContent}\n)\n`;

    return [header, lightTheme, darkTheme].join('\n\n');
};

const getTheme = (tokenItems: TransformedToken[], theme: ThemeColorType) =>
    tokenItems
        .filter((token) => (camelize(token.attributes?.type) || '').includes(theme))
        .map((token) => `    ${token.attributes?.item} = ${token.value},`)
        .join(`\n`);

export const colorKotlinCustomFormatter = ({ dictionary, file }: { dictionary: Dictionary; file: File }) => {
    const themeName = lowerFirstLetter(file.className || '');

    const lightTheme = getTheme(dictionary.allTokens, ThemeColor.light);
    const darkTheme = getTheme(dictionary.allTokens, ThemeColor.dark);

    return getKotlinTemplate(lightTheme, darkTheme, themeName);
};
