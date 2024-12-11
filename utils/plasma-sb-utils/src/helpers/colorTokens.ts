import { convertTheme } from './convertTheme';

const hexLength = 7;
const hexWithAlphaLength = 9;

const camelize = (source?: string) => source?.replace(/[_-]+(.)/g, (_, p1) => p1.toUpperCase()) || '';

const upperFirstLetter = (value: string) => `${value[0].toLocaleUpperCase()}${value.slice(1)}`;

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

export interface GroupedTokens {
    [category: string]: {
        [subcategory: string]: {
            [token: string]: {
                value: string;
                opacity: {
                    alpha: string | null;
                    parsedAlpha: string;
                } | null;
            };
        };
    };
}

export const getOpacityFromHex = (color: string) => {
    if (color.startsWith('#')) {
        if (color.length === hexLength) {
            return { alpha: null, parsedAlpha: '100%' };
        }

        const alpha = color.slice(hexLength);
        const parsedAlpha = Math.round((Number.parseInt(alpha, 16) / 255) * 100);

        return { alpha, parsedAlpha: `${parsedAlpha}%` };
    }

    return null;
};

export const getGroupedTokens = (themes: string): GroupedTokens => {
    const tokensExclude = ['border-radius', 'shadow', 'plasma-typo', 'plasma-colors', 'brightness', 'hover', 'active'];

    const processedTokens = convertTheme(themes);

    const result = Object.entries(processedTokens).filter(
        ([name]) => !tokensExclude.find((token) => name.includes(token)),
    );

    return result.reduce((acc, [name, value]) => {
        const category = getTokenCategory(name);
        const actualName = name.replace(/(on-dark|dark|on-light|light|inverse)-/g, '');
        const subcategory = upperFirstLetter(actualName.split('-')[0]);
        const parsedValue =
            value.startsWith('#') && value.length === hexWithAlphaLength ? value.slice(0, hexLength) : value;
        const opacity = getOpacityFromHex(value);

        acc[category] = {
            ...acc[category],
            [subcategory]: {
                ...acc[category]?.[subcategory],
                [camelize(name)]: {
                    value: parsedValue,
                    opacity,
                },
            },
        };

        return acc;
    }, {} as GroupedTokens);
};
