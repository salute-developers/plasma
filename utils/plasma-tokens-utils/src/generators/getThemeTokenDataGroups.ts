import { DataObject, TokenData, TokenDataGroup, upperFirstLetter } from '../index';
import { TokenGroup, TokenMode } from '../types';
import type { Theme, ThemeTokenDataGroups } from '../types';

const isTokenData = (value: unknown): value is TokenData => {
    return typeof value === 'object' && value !== null && 'value' in value;
};

const makePath = (path: string, key: string) => {
    if (!path && key in TokenGroup) {
        return '';
    }

    if (path === TokenMode.default) {
        return key;
    }

    return path ? `${path}${upperFirstLetter(key)}` : key;
};

const dataObjectToTokenDataGroup = (dataObject: DataObject, path: string, prefix?: string): TokenDataGroup<string> =>
    Object.entries(dataObject).reduce((acc, [key, value]) => {
        const fullPath = makePath(path, key);

        if (isTokenData(value) && value.enabled === false) {
            return acc;
        }

        if (isTokenData(value)) {
            const tokenName = prefix ? `${prefix}${upperFirstLetter(fullPath)}` : fullPath;
            return { ...acc, [tokenName]: value };
        }

        if (value && typeof value === 'object') {
            return { ...acc, ...dataObjectToTokenDataGroup(value, fullPath, prefix) };
        }

        return acc;
    }, {});

export const getThemeTokenDataGroups = (theme: Theme): Record<string, Record<string, ThemeTokenDataGroups>> => {
    const {
        config: { name },
        dark,
        light,
        shadow,
        borderRadius,
        spacing,
    } = theme;

    const shadowTokens = shadow
        ? dataObjectToTokenDataGroup((shadow as unknown) as DataObject, '', 'shadow')
        : undefined;

    const borderRadiusTokens = borderRadius
        ? dataObjectToTokenDataGroup((borderRadius as unknown) as DataObject, '', 'borderRadius')
        : undefined;

    const spacingTokens = spacing
        ? dataObjectToTokenDataGroup((spacing as unknown) as DataObject, '', 'spacing')
        : undefined;

    return {
        [name]: {
            [`${name}__dark`]: {
                color: dataObjectToTokenDataGroup((dark as unknown) as DataObject, ''),
                shadow: shadowTokens,
                borderRadius: borderRadiusTokens,
                spacing: spacingTokens,
            },
            [`${name}__light`]: {
                color: dataObjectToTokenDataGroup((light as unknown) as DataObject, ''),
                shadow: shadowTokens,
                borderRadius: borderRadiusTokens,
                spacing: spacingTokens,
            },
        },
    };
};
