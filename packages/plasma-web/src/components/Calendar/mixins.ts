import { css, FlattenSimpleInterpolation, StyledComponent } from 'styled-components';
import { backgroundPrimary, primary, surfaceSolid03, surfaceLiquid02, addFocus } from '@salutejs/plasma-core';
import { bodySBold } from '@salutejs/plasma-typo';

interface Selected {
    StyledItem: StyledComponent<'div', {}>;
    minWidth: number;
    minHeight: number;
    isSelected?: boolean;
    isCurrent?: boolean;
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

export const syntheticFocus = (ruleset: FlattenSimpleInterpolation, focused?: boolean) => css`
    &.focus-visible:focus,
    &[data-focus-visible-added] {
        outline: none;
        z-index: 1;
        ${ruleset};
    }

    ${focused && ruleset};
`;

export const selected = ({ StyledItem, minWidth, minHeight, isSelected, isCurrent }: Selected) => css`
    ${addFocus({
        synthesizeFocus: syntheticFocus,
        outlineRadius: '0.563rem',
        outlineSize: '0.063rem',
        outlineOffset: isCurrent ? '0.125rem' : '0.063rem',
    })};

    ${isSelected &&
    css`
        ${bodySBold};

        background-color: ${primary};
        color: ${backgroundPrimary};
    `}

    ${isCurrent &&
    css`
        border: 0.063rem solid ${primary};

        ${StyledItem} {
            min-width: ${minWidth + 0.125}rem;
            min-height: ${minHeight + 0.125}rem;
        }
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

    &:active {
        ${bodySBold};

        background-color: ${primary};
        color: ${surfaceSolid03};
    }
`;
