import { generalReverted } from '@salutejs/plasma-colors';

import { convertTheme } from './convertTheme';

type TokenState = 'active' | 'hover' | 'brightness';
export type TokenData = {
    value: string;
    fullTokenName: string;
    states: Partial<Record<TokenState, TokenData>> | null;
    opacity?: {
        alpha: string | null;
        parsedAlpha: string;
    };
    tone?: string;
    colorName?: string;
};

type TokenInfo = {
    [token: string]: TokenData;
};

type Subcategory = {
    [subcategory: string]: TokenInfo;
};

export type GroupedTokens = {
    [category: string]: Subcategory;
};

const tokensExclude = ['border-radius', 'shadow', 'plasma-typo', 'plasma-colors', 'spacing'];
const hexLength = 7;
const hexWithAlphaLength = 9;
const categoryPattern = /(on-dark|dark|on-light|light|inverse)-/g;
const stateSuffixPattern = (withHyphen = false) => new RegExp(`${withHyphen ? '-' : ''}(active|hover|brightness)`, 'g');

const camelize = (source?: string) => source?.replace(/[_-]+(.)/g, (_, p1) => p1.toUpperCase()) || '';

export const upperFirstLetter = (value: string) => `${value[0].toLocaleUpperCase()}${value.slice(1)}`;

const getTokenCategory = (name: string) => {
    if (name.startsWith('on-dark') || name.startsWith('dark')) {
        return 'OnDark';
    }

    if (name.startsWith('on-light') || name.startsWith('light')) {
        return 'OnLight';
    }

    if (name.startsWith('inverse')) {
        return 'Inverse';
    }

    return 'Default';
};

const getTokenNameInfo = (name: string) => {
    const nameWithState = name.replace(categoryPattern, '');
    const stateSuffixName = nameWithState.match(stateSuffixPattern());
    const clearName = nameWithState.replace(stateSuffixPattern(true), '');
    const subcategory = upperFirstLetter(nameWithState.split('-')[0]);

    return { clearName, subcategory, stateSuffix: stateSuffixName?.at(0) || null };
};

const getTokenColorInfo = (value: string) => {
    const parsedColorValue =
        value.startsWith('#') && value.length === hexWithAlphaLength ? value.slice(0, hexLength) : value;
    const opacity = getOpacityFromHex(value);

    const additionalInfo = generalReverted?.[parsedColorValue as keyof typeof generalReverted];
    const colorPalleteName = additionalInfo?.name ? upperFirstLetter(additionalInfo.name) : '';

    return {
        value: parsedColorValue,
        opacity,
        colorName: colorPalleteName,
        tone: additionalInfo?.tone,
    };
};

export const getOpacityFromHex = (color: string) => {
    if (!color.startsWith('#')) {
        return;
    }

    if (color.length === hexLength) {
        return { alpha: null, parsedAlpha: '100%' };
    }

    const alpha = color.slice(hexLength);
    const parsedAlpha = Math.round((Number.parseInt(alpha, 16) / 255) * 100);

    return { alpha, parsedAlpha: `${parsedAlpha}%` };
};

export const getGroupedTokens = (themes: string): GroupedTokens => {
    const processedTokens = convertTheme(themes);

    const filteredTokens = Object.entries(processedTokens).filter(
        ([name]) => !tokensExclude.find((token) => name.includes(token)),
    );

    return filteredTokens.reduce((acc, [name, value]) => {
        const category = getTokenCategory(name);
        const { clearName, subcategory, stateSuffix } = getTokenNameInfo(name);
        const tokenColorInfo = getTokenColorInfo(value);

        if (!acc[category]) {
            acc[category] = {};
        }
        if (!acc[category][subcategory]) {
            acc[category][subcategory] = {};
        }
        if (!acc[category][subcategory][camelize(clearName)]) {
            acc[category][subcategory][camelize(clearName)] = {} as TokenData;
        }

        const currentTokenData = acc?.[category]?.[subcategory]?.[camelize(clearName)];

        if (!stateSuffix) {
            acc[category][subcategory][camelize(clearName)] = {
                ...tokenColorInfo,
                fullTokenName: camelize(name),
                states: {
                    ...currentTokenData?.states,
                },
            };
        } else if (!currentTokenData?.value?.includes('gradient')) {
            acc[category][subcategory][camelize(clearName)] = {
                ...acc[category][subcategory][camelize(clearName)],
                value: String(currentTokenData?.value),
                states: {
                    ...currentTokenData?.states,
                    [stateSuffix]: tokenColorInfo,
                },
            };
        }

        return acc;
    }, {} as GroupedTokens);
};
