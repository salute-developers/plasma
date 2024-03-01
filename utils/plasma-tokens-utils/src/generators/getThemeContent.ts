import { CreateVariablesByArcheTypeProps } from '@salutejs/plasma-typo';

import type { DataObject, ThemeContent, ThemeMode, ThemeTokenDataGroups } from '../types';
import { attachToRoot } from '../utils';

import { getTypoCSS } from './generateTyposCSS';
import { getThemeData } from './getThemeData';

type GroupedThemes = Record<string, Record<ThemeMode, ThemeTokenDataGroups>>;

export const getThemeContent = (
    themeTokens: Record<string, ThemeTokenDataGroups>,
    typoTokens: CreateVariablesByArcheTypeProps,
    mixin: DataObject = {},
    withDesignPrefix: boolean,
    withKebabCase?: boolean,
) => {
    let result: ThemeContent = {};

    const groupedThemes = Object.entries(themeTokens).reduce<GroupedThemes>((acc, [theme, themeItem]) => {
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
        const darkColors = attachToRoot(getThemeData(dark, mixin, withKebabCase));
        const lightColors = attachToRoot(getThemeData(light, mixin, withKebabCase));
        const typo = getTypoCSS(typoTokens, withDesignPrefix);

        result = {
            ...result,
            [themeName]: {
                dark: darkColors,
                light: lightColors,
                typo,
            },
        };
    }

    return result;
};
