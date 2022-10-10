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
    SetupAnswers,
    TextIconsTokenName,
    Theme,
    ThemeConfig,
    ThemeMode,
    TokensBackgroundByType,
    TokensByType,
    TokensGetterFn,
} from './types';
import { baseColors, themesFolder } from './constants';
import { generateThemeHtml } from './generateThemeHTML';

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

const getTokensBackgroundByGroups = <T extends string>(
    tokenGetters: Record<string, TokensGetterFn>,
    config: ThemeConfig,
    mode: ThemeMode,
): TokensBackgroundByType<T> => {
    return Object.entries(tokenGetters).reduce(
        (tokensByGroup, [name, getter]) => {
            const tokens = getter(config);

            return {
                default: {
                    ...tokensByGroup.default,
                    [name]: tokens[mode].default,
                },
                dark: {
                    ...tokensByGroup.dark,
                    [name]: tokens[mode].dark,
                },
                light: {
                    ...tokensByGroup.light,
                    [name]: tokens[mode].light,
                },
                inverse: {
                    ...tokensByGroup.inverse,
                    [name]: tokens[mode].inverse,
                },
            };
        },
        {
            default: {},
            dark: {},
            light: {},
            inverse: {},
        } as TokensBackgroundByType<T>,
    );
};

const getThemeModeTokens = <T extends ThemeMode>(config: ThemeConfig, mode: T): Theme[T] => {
    return {
        textIcons: getTokensByGroups<TextIconsTokenName>(textIconsTokenGetters, config, mode),
        controlsSurfaces: getTokensByGroups<ControlsSurfacesName>(controlsSurfacesTokenGetters, config, mode),
        backgrounds: getTokensBackgroundByGroups<BackgroundName>(backgroundTokenGetters, config, mode),
        overlay: getTokensByGroups<OverlayName>(overlayTokenGetters, config, mode),
        ...baseColors,
    };
};

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Введите имя темы (латинские буквы и/или цифры без пробелов, минимум 3 символа)',
        validate: (value: string) =>
            RegExp(/^[a-zA-Z0-9]{3,}$/).test(value) || 'Пожалуйста введите корректное имя темы',
    },
    {
        type: 'list',
        name: 'accentColor',
        message: 'Акцентный цвет из основной палитры',
        choices: Object.keys(generalColors),
    },
    {
        type: 'list',
        name: 'accentColorSaturationLight',
        message: 'Светлость акцентного цвета для светлой темы',
        choices: Object.keys(generalColors.amber),
    },
    {
        type: 'list',
        name: 'accentColorSaturationDark',
        message: 'Светлость акцентного цвета для темной темы',
        choices: Object.keys(generalColors.amber),
    },
    {
        type: 'list',
        name: 'grayscaleLight',
        message: 'Оттенок серого для светлой темы',
        choices: Object.keys(Grayscale),
    },
    {
        type: 'list',
        name: 'grayscaleDark',
        message: 'Оттенок серого для темной темы',
        choices: Object.keys(Grayscale),
    },
    {
        type: 'confirm',
        name: 'opacityTextIcons',
        message: 'Текст и иконки с прозрачностью?',
        default: true,
    },
    {
        type: 'confirm',
        name: 'opacitySurfaces',
        message: 'Поверхности с прозрачностью?',
        default: true,
    },
];

const createTheme = (config: ThemeConfig): Theme => ({
    config,
    dark: getThemeModeTokens(config, 'dark'),
    light: getThemeModeTokens(config, 'light'),
});

inquirer.prompt(questions).then((answers: SetupAnswers & { saturation: PlasmaSaturation }) => {
    const {
        name,
        accentColor,
        accentColorSaturationLight,
        accentColorSaturationDark,
        grayscaleLight,
        grayscaleDark,
        opacityTextIcons,
        opacitySurfaces,
    } = answers;

    const theme = createTheme({
        name,
        accentColor: {
            light: generalColors[accentColor][accentColorSaturationLight],
            dark: generalColors[accentColor][accentColorSaturationDark],
        },
        grayscale: {
            light: grayscaleLight,
            dark: grayscaleDark,
        },
        opacity: {
            textIcons: opacityTextIcons,
            surfaces: opacitySurfaces,
        },
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
