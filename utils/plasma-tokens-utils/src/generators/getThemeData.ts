import { extractTokenData, objectToCSSShadowVariables, objectToCSSVariables } from '../utils';
import type { DataObject, ThemeTokenDataGroups } from '../types';

// Метод для поиска ключа, у которого может быть  префикс
const findExistedProp = (themeData: Record<string, string>, prop: string) =>
    Object.keys(themeData).find((data) => data.endsWith(prop)) || '';

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
        color: themeData[findExistedProp(themeData, 'text')],
        ['background-color' as string]: themeData[findExistedProp(themeData, 'background')],
    };
};
