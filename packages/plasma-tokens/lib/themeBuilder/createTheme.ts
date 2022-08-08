import inquirer from 'inquirer';

import path from 'path';
import { writeGeneratedToFS } from '@salutejs/plasma-tokens-utils';
import { general as generalColors, PlasmaSaturation } from '@salutejs/plasma-colors';

import { backgroundTokenGetters } from './themeTokenGetters/backgrounds';
import { controlsSurfacesTokenGetters } from './themeTokenGetters/controlsSurfacesTokenGetters';
import { overlayTokenGetters } from './themeTokenGetters/overlay';
import { textIconsTokenGetters } from './themeTokenGetters/textIconsTokenGetters';
import {
    BackgroundName,
    ControlsSurfacesName,
    Grayscale,
    OverlayName,
    TextIconsTokenName,
    Theme,
    ThemeConfig,
    ThemeMode,
    TokensByType,
    TokensGetterFn,
} from './types';
import { baseColors, themesFolder } from './constants';
import { generateThemeHtml } from './generateThemeHtml';

const getTokensByGroups = <T extends string>(
    tokenGetters: Record<string, TokensGetterFn>,
    config: ThemeConfig,
    mode: ThemeMode,
): TokensByType<T> => {
    return Object.entries(tokenGetters).reduce(
        (tokensByGroup, [name, getter]) => {
            const tokens = getter(config);

            return {
                default: {
                    ...tokensByGroup.default,
                    [name]: tokens[mode].default,
                },
                onDark: {
                    ...tokensByGroup.onDark,
                    [name]: tokens[mode].onDark,
                },
                onLight: {
                    ...tokensByGroup.onLight,
                    [name]: tokens[mode].onLight,
                },
                inverse: {
                    ...tokensByGroup.inverse,
                    [name]: tokens[mode].inverse,
                },
            };
        },
        {
            default: {},
            onDark: {},
            onLight: {},
            inverse: {},
        } as TokensByType<T>,
    );
};

const getThemeModeTokens = <T extends ThemeMode>(config: ThemeConfig, mode: T): Theme[T] => {
    return {
        textIcons: getTokensByGroups<TextIconsTokenName>(textIconsTokenGetters, config, mode),
        controlsSurfaces: getTokensByGroups<ControlsSurfacesName>(controlsSurfacesTokenGetters, config, mode),
        backgrounds: getTokensByGroups<BackgroundName>(backgroundTokenGetters, config, mode),
        overlay: getTokensByGroups<OverlayName>(overlayTokenGetters, config, mode),
        ...baseColors,
    };
};

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Введите имя темы (латинские буквы без пробелов, минимум 3 символа)',
        validate: (value: string) => RegExp(/^[a-zA-Z]{3,}$/).test(value) || 'Пожалуйста введите корректное имя темы',
    },
    {
        type: 'confirm',
        name: 'opacity',
        message: 'С прозрачностью?',
        default: true,
    },
    {
        type: 'list',
        name: 'grayscale',
        message: 'Оттенок серого',
        choices: Object.keys(Grayscale),
    },
    {
        type: 'list',
        name: 'accentColor',
        message: 'Акцентный цвет из основной палитры',
        choices: Object.keys(generalColors),
    },
    {
        type: 'list',
        name: 'saturation',
        message: 'Сатурация акцентного цвета',
        choices: Object.keys(generalColors.amber),
    },
];

const createTheme = (config: ThemeConfig): Theme => ({
    config,
    dark: getThemeModeTokens(config, 'dark'),
    light: getThemeModeTokens(config, 'light'),
});

inquirer.prompt(questions).then((answers: ThemeConfig & { saturation: PlasmaSaturation }) => {
    const { name, opacity, grayscale, accentColor, saturation } = answers;

    const theme = createTheme({
        name,
        opacity,
        grayscale,
        accentColor: generalColors[accentColor as keyof typeof generalColors][saturation],
    });

    const fileName = `${name}.json`;

    writeGeneratedToFS(themesFolder, [
        {
            file: fileName,
            content: `${JSON.stringify(theme, null, 4)}\n`,
        },
    ]);

    generateThemeHtml(name);

    console.log(`Готово. ${path.join(themesFolder, fileName)}`);
});
