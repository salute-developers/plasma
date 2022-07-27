import { css, FlattenSimpleInterpolation, StyledComponent } from 'styled-components';
import { backgroundPrimary, primary, surfaceSolid03, surfaceLiquid02, addFocus, accent } from '@salutejs/plasma-core';
import { bodySBold } from '@salutejs/plasma-typo';

interface Selected {
    StyledItem: StyledComponent<'div', {}>;
    minWidth: number;
    minHeight: number;
    isSelected?: boolean;
    isCurrent?: boolean;
    isHovered?: boolean;
}

export const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const flexSpaceBetween = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

/**
 * Функция для установки синтетического фокуса на выбранном дне.
 */
export const syntheticFocus = (ruleset: FlattenSimpleInterpolation, focused?: boolean) => css`
    &.focus-visible:focus,
    &[data-focus-visible-added] {
        outline: none;
        z-index: 1;
        ${ruleset};
    }

    ${focused && ruleset};
`;

/**
 * Миксин для установки синтетического фокуса на выбранной кнопке.
 */
export const buttonFocus = css`
    ${addFocus({
        outlineRadius: '0.563rem',
        outlineSize: '0.063rem',
        outlineOffset: '0.125rem',
    })};

    border: none;
    background-color: transparent;
    padding: 0;
`;

/**
 * Миксин для изменения стиля выбранного дня.
 */
export const selected = ({ StyledItem, minWidth, minHeight, isSelected, isCurrent, isHovered }: Selected) => css`
    outline: none;

    ${addFocus({
        synthesizeFocus: syntheticFocus,
        outlineRadius: '0.563rem',
        outlineSize: '0.063rem',
        outlineOffset: isCurrent ? '0.125rem' : '0.063rem',
    })};

    ${isCurrent &&
    css`
        border: 0.063rem solid ${primary};
    `}

    ${isSelected &&
    css`
        ${bodySBold};

        border: 0;
        background-color: ${primary};
        color: ${backgroundPrimary};
    `}

    &:hover {
        ${!isSelected &&
        css`
            background-color: ${surfaceLiquid02};
            cursor: pointer;
        `}

        ${isCurrent &&
        !isSelected &&
        css`
            border: 0.063rem solid ${primary};
            background-color: transparent;
            color: ${primary};

            ${StyledItem} {
                background-color: ${surfaceLiquid02};

                min-width: ${minWidth}rem;
                min-height: ${minHeight}rem;
            }
        `}
    }

    &,
    &:hover {
        ${isHovered &&
        css`
            ${bodySBold};

            background-color: ${accent};
            color: ${backgroundPrimary};

            cursor: pointer;
        `}
    }

    &:active {
        ${bodySBold};

        background-color: ${primary};
        color: ${surfaceSolid03};
    }
`;
