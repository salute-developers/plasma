import { css, FlattenSimpleInterpolation, StyledComponent } from 'styled-components';
import { backgroundPrimary, primary, surfaceSolid03, surfaceSolid02 } from '@salutejs/plasma-core';
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

export const syntheticFocus = (ruleset: FlattenSimpleInterpolation, focused?: boolean) => css`
    &.focus-visible:focus,
    &[data-focus-visible-added] {
        outline: none;
        z-index: 1;
        ${ruleset};
    }

    ${focused && ruleset};
`;

export const wrapper = (
    StyledItem: StyledComponent<'div', {}>,
    minWidth: number,
    minHeight: number,
    backgroundColor: string,
) => css`
    ${StyledItem} {
        border: 0.063rem solid ${backgroundPrimary};
        background-color: ${backgroundColor};

        min-width: ${minWidth}rem;
        min-height: ${minHeight}rem;
    }
`;

export const selected = ({ StyledItem, minWidth, minHeight, isSelected, isCurrent }: Selected) => css`
    ${
        (isCurrent || isSelected) &&
        css`
            background-color: ${primary};
        `
    }

    ${
        isSelected &&
        css`
            ${bodySBold};

            color: ${backgroundPrimary};
        `
    }

    ${
        isCurrent &&
        css`
            ${StyledItem} {
                background-color: ${backgroundPrimary};

                min-width: ${minWidth + 0.125}rem;
                min-height: ${minHeight + 0.125}rem;
            }
        `
    }

    ${
        isSelected &&
        isCurrent &&
        css`
            ${wrapper(StyledItem, minWidth, minHeight, primary)};
        `
    }

    &:hover {
        ${
            !isSelected &&
            css`
                background-color: ${surfaceSolid02};
                cursor: pointer;
            `
        }

        ${
            isCurrent &&
            !isSelected &&
            css`
                background-color: ${primary};
                color: ${primary};

                ${wrapper(StyledItem, minWidth, minHeight, surfaceSolid02)};
            `
        }
    }

    &:active {
        ${bodySBold};

        background-color: ${primary};
        color: ${surfaceSolid03};

        ${
            isCurrent &&
            css`
                ${wrapper(StyledItem, minWidth, minHeight, primary)};
            `
        }
    }
`;
