import { classes, tokens } from '../Grid.tokens';
import { ScreenMap } from '../ui';
import type { ColOffsetProps, ColSizeProps } from '../ui/Col/Col.types';

import type { BreakpointTokens, ScreenVariant, TokensType } from './types';

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

// TODO удалить после отказа от старой сетки
const legacyGridSizesMap = {
    S: 'smallM',
    M: 'mediumS',
    L: 'mediumM',
    XL: 'largeS',
    XXL: 'largeM',
};

const tokenPrefix = '--plasma-grid-';

const initialGridViewStyle = `
    max-width: var(--plasma_private-grid-max-width, unset);
`;

export const getGridViewClass = (view: string) => {
    return `plasma-grid-${view}-view`;
};

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
            const gap = tokens[`${size}Gap` as TokensType];
            const colsCount = tokens[`${size}ColsCount` as TokensType];
            const margin = tokens[`${size}Margin` as TokensType];

            return `
                @media (min-width: ${minWidth}) {
                    --plasma_private-grid-cols-count: var(${colsCount});
                    --plasma_private-grid-gap: calc(var(${gap}) / 2);
                    --plasma_private-grid-margin: var(${margin});
                    
                    padding: 0 var(--plasma_private-grid-margin);

                    .${classes.col} {
                        --plasma_private-col-width: calc(100% / var(--plasma_private-grid-cols-count) * var(--plasma_private-grid-col-${size}-size, var(--plasma_private-grid-col-default-size)));
                        --plasma_private-col-offset: calc(100% / var(--plasma_private-grid-cols-count) * var(--plasma_private-grid-col-${size}-offset, var(--plasma_private-grid-col-default-offset)));

                        width: var(--plasma_private-col-width, auto);
                        margin-left: var(--plasma_private-col-offset, initial);
                    }
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
export const getBaseGridView = (breakponts: BreakpointTokens, viewName: string) => {
    return `
        ${initialGridViewStyle}

        &.${getGridViewClass(viewName)} {
            ${gridMediaQueryTemplate(breakponts)}
        }
    `;
};

/**
 * Используется для получения токенов для view="legacy"
 */
// TODO удалить после отказа от старой сетки
const getColLegacyTokens = (props: ColOffsetProps & ColSizeProps) => {
    return Object.entries(legacyGridSizesMap).reduce((acc, [legacyGridSize, gridSize]) => {
        const offset = props[`offset${legacyGridSize}` as keyof ColOffsetProps];
        const size = props[`size${legacyGridSize}` as keyof ColSizeProps];

        if (!offset && !size) {
            return acc;
        }

        return {
            ...acc,
            [`--plasma_private-grid-col-${gridSize}-size`]: size,
            [`--plasma_private-grid-col-${gridSize}-offset`]: offset,
        };
    }, {});
};

/**
 * Используется в Col.tsx для получения токенов для view="default"
 */
export const getColTokens = (props: ScreenMap & ColOffsetProps & ColSizeProps) => {
    // TODO удалить после отказа от старой сетки
    const legacyTokens = getColLegacyTokens(props);
    if (Object.keys(legacyTokens).length) {
        return legacyTokens;
    }

    return gridSizes.reduce((acc, size) => {
        if (!props[size]) {
            return acc;
        }

        return {
            ...acc,
            [`--plasma_private-grid-col-${size}-size`]: props[size]?.size,
            [`--plasma_private-grid-col-${size}-offset`]: props[size]?.offset,
        };
    }, {});
};
