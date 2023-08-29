import { attachToRoot, attachToThemesMode } from '../utils';
import type { DataObject, GeneratedFiles, ThemeMode, ThemeTokenDataGroups } from '../types';

import { generateCSSThemeModuleFile, generateCSSThemeRootFile } from './generateFile';
import { getThemeData } from './getThemeData';

type GroupedThemes = Record<string, Record<ThemeMode, ThemeTokenDataGroups>>;

export const generateThemesCSS = (
    themes: Record<string, ThemeTokenDataGroups>,
    mixin: DataObject = {},
    withKebabCase?: boolean,
) => {
    const files: GeneratedFiles = [];

    const groupedThemes = Object.entries(themes).reduce<GroupedThemes>((acc, [theme, themeItem]) => {
        const [themeName, themeType] = theme.split('__');

        return {
            ...acc,
            [themeName]: {
                ...acc[themeName],
                [themeType]: themeItem,
            },
        };
    }, {});

    for (const [themeName, { dark, light }] of Object.entries(groupedThemes)) {
        const darkTheme = getThemeData(dark, mixin, withKebabCase);
        const lightTheme = getThemeData(light, mixin, withKebabCase);

        files.push(generateCSSThemeModuleFile(`${themeName}.module`, attachToThemesMode(darkTheme, lightTheme)));
        files.push(generateCSSThemeRootFile(`${themeName}__dark`, attachToRoot(darkTheme)));
        files.push(generateCSSThemeRootFile(`${themeName}__light`, attachToRoot(lightTheme)));
    }

    return files;
};
