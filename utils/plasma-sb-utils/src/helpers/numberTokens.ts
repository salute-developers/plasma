import { convertTheme } from './convertTheme';

export type GroupedNumberTokens = Record<string, string>;

export const getGroupedCornerRadiusTokens = (themes: string): GroupedNumberTokens => {
    const cornerRadiusToken = 'border-radius';
    const result: GroupedNumberTokens = {
        null: '0',
    };

    const parsedTokens = convertTheme(themes);
    const actualTokens = Object.entries(parsedTokens).filter(([name]) => name.includes(cornerRadiusToken));

    const processedTokens = actualTokens.reduce((acc, [name, value]) => {
        const actualName = name.replace(/border-radius-/g, 'cR');
        const actualValue = `${value.match(/px/gim)?.[0] ? value.replace('px', '') : parseFloat(value) * 16}`;

        acc[actualName] = actualValue;

        return acc;
    }, result);

    return { ...processedTokens, rounded: '1000' };
};

export const getGroupedSpacingTokens = (themes: string): GroupedNumberTokens => {
    const cornerRadiusToken = 'spacing';
    const excludeTypoToken = 'plasma-typo';

    const parsedTokens = convertTheme(themes);
    const actualTokens = Object.entries(parsedTokens).filter(
        ([name]) => name.includes(cornerRadiusToken) && !name.includes(excludeTypoToken),
    );

    return actualTokens.reduce((acc, [name, value]) => {
        const actualName = name.replace(/-/g, '');
        const actualValue = `${value.match(/px/gim)?.[0] ? value.replace('px', '') : parseFloat(value) * 16}`;

        acc[actualName] = actualValue;

        return acc;
    }, {} as GroupedNumberTokens);
};
