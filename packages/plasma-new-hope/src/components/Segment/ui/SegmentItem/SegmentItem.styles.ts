import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { addFocus, applyEllipsis } from '../../../../mixins';
import { classes, tokens } from '../../tokens';

export const StyledContent = styled.div<{
    hasRightMargin?: boolean;
    hasLeftMargin?: boolean;
    isSecondary?: boolean;
}>`
    display: inline-block;
    width: fit-content;
    padding: var(${tokens.itemContentPadding});
    ${applyEllipsis()};

    margin-right: ${({ hasRightMargin }) => (hasRightMargin ? `var(${tokens.itemIconMargin})` : '0')};
    margin-left: ${({ hasLeftMargin }) => (hasLeftMargin ? `var(${tokens.itemIconMargin})` : '0')};
`;

export const RightContent = styled.div`
    display: flex;
    margin-left: var(${tokens.itemIconMargin});
    overflow: hidden;

    color: var(${tokens.itemColor});

    &.${classes.segmentAdditionalText} {
        display: inline-block;
        color: var(${tokens.itemAdditionalColor});
        ${applyEllipsis()};
    }
`;

export const LeftContent = styled.div`
    display: flex;
    margin-right: var(${tokens.itemIconMargin});

    color: inherit;
`;

export const base = css`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    min-width: 0;
    white-space: nowrap;

    appearance: none;
    border: none;
    outline: none;
    cursor: pointer;
    margin-left: var(${tokens.itemMarginLeft});
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &:first-child {
        margin-left: 0;
    }

    ${addFocus({
        outlineSize: '0.063rem',
        outlineOffset: 'var(--plasma_private-clip-outline-offset)',
        outlineColor: `var(${tokens.outlineFocusColor})`,
        outlineRadius: 'calc(var(--plasma_private-outline-radius) + var(--plasma_private-clip-outline-radius))',
        customFocusRules: `
            &.focus-visible:focus,
            &[data-focus-visible-added] {
                &::before {
                    z-index: 1;
                    outline: none;
                    box-shadow: 0 0 0 0.063rem var(${tokens.outlineFocusColor});
                }
            }
        `,
    })};

    &.${classes.segmentTruncate} {
        ${StyledContent} {
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`;
