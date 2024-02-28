import { extractTokenData, objectToCSSShadowVariables, objectToCSSVariables } from '../utils';
import type { DataObject, ThemeTokenDataGroups } from '../types';

export const getThemeData = (themeItem: ThemeTokenDataGroups, mixin: DataObject = {}, withKebabCase?: boolean) => {
    const { color = {}, shadow = {}, borderRadius = {}, spacing = {} } = themeItem;
    const themeData = extractTokenData(color);
    const themeShadow = extractTokenData(shadow);
    const themeBorderRadius = extractTokenData(borderRadius);
    const themeSpacing = extractTokenData(spacing);
    const withPrefixDesign = false;

    return {
        ...objectToCSSVariables(themeData, '', withPrefixDesign, withKebabCase),
        ...objectToCSSShadowVariables(themeShadow, withKebabCase),
        ...objectToCSSVariables(themeBorderRadius, '', withPrefixDesign, withKebabCase),
        ...objectToCSSVariables(themeSpacing, '', withPrefixDesign, withKebabCase),
        ...objectToCSSVariables(mixin, '', withPrefixDesign, withKebabCase),
        color: 'var(--text-primary)',
        ['background-color' as string]: 'var(--background-primary)',
    };
};
