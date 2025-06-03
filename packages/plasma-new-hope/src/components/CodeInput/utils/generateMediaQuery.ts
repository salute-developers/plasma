import { privateTokens, tokens } from '../CodeInput.tokens';

import type { BreakpointTokens, ScreenVariant, TokensType } from './types';

export const getCodeInputViewClass = (view: string) => {
    return `codeinput-${view}-view`;
};

const tokenPrefix = '--plasma-codeinput-';

export const gridSizes: Array<ScreenVariant> = [
    'smallXXS',
    'smallXS',
    'smallS',
    'smallM',
    'smallL',
    'smallXL',
    'smallXXL',
    'mediumXXS',
    'mediumXS',
    'mediumS',
    'mediumM',
    'mediumL',
    'mediumXL',
    'mediumXXL',
    'largeXXS',
    'largeXS',
    'largeS',
    'largeM',
    'largeL',
    'largeXL',
    'largeXXL',
];

/**
 * Генерирует набор медиа-запросов под различную ширину вьюпорта
 *
 * @param {GridToken} cssTokens - объект view с набором токенов ширины вьюпорта
 * @return {string} сгенерированный набор медиа-запросов
 */
const gridMediaQueryTemplate = (breakpoints: BreakpointTokens): string => {
    return gridSizes
        .map((size) => {
            if (!String(breakpoints[`${tokenPrefix}${size}-min-width`])) {
                return;
            }

            const minWidth = breakpoints[`${tokenPrefix}${size}-min-width` as keyof typeof breakpoints];
            const itemWidth = tokens[`${size}CodeItemWidth` as TokensType];
            const itemHeight = tokens[`${size}CodeItemHeight` as TokensType];
            const fontSize = tokens[`${size}FontSize` as TokensType];
            const lineHeight = tokens[`${size}LineHeight` as TokensType];

            return `
                @media (min-width: ${minWidth}) {
                    ${privateTokens.fontSize}: var(${fontSize});
                    ${privateTokens.lineHeight}: var(${lineHeight});
                    ${privateTokens.itemWidth}: var(${itemWidth});
                    ${privateTokens.itemHeight}: var(${itemHeight});
                }
            `;
        })
        .filter((style) => style)
        .join('\n');
};

/**
 * Генерирует строку со стилями для обертки Grid и набором медиа-запросов
 *
 * @param {BreakpointToken} breakponts - объект view с набором токенов ширины вьюпорта
 * @param {string} viewName - название view из конфига
 * @return {string} стили для обертки Grid
 */
export const getCodeInputView = (breakponts: BreakpointTokens, viewName: string) => {
    return `
        &.${getCodeInputViewClass(viewName)} {
            ${gridMediaQueryTemplate(breakponts)}
        }
    `;
};
