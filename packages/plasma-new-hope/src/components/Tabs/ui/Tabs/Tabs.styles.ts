import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { addFocus } from '../../../../mixins';
import { classes, tokens } from '../../tokens';

export const base = css`
    display: flex;
    gap: 0.125rem;
    align-items: center;
    position: relative;
`;

export const StyledContent = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
`;

export const StyledContentWrapper = styled.div`
    /* allows correctly display outline focus on tabs item */
    margin: -0.125rem;
    padding: 0.25rem;

    box-sizing: content-box;
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;

    &.${classes.tabsClipScroll} {
        overflow: scroll;
        scroll-padding: 0.25rem;
        overscroll-behavior: contain;

        scrollbar-width: none;
        ::-webkit-scrollbar {
            display: none;
        }
    }

    &.${classes.tabsClipShowAll} {
        overflow: visible;
    }
`;

export const StyledArrow = styled.button<{ isLeftArrow?: boolean; isFilled?: boolean }>`
    display: flex;
    cursor: pointer;
    border: none;
    background-color: transparent;
    padding: 0;
    outline: none;

    ${addFocus({
        outlineSize: '0.063rem',
        outlineOffset: '-0.125rem',
        outlineColor: `var(${tokens.outlineFocusColor})`,
        outlineRadius: 'calc(var(--plasma_private-outline-radius) - 0.063rem)',
    })};

    &[disabled] {
        cursor: not-allowed;
    }

    --plasma_private-outer-padding: ${({ isFilled }) => (isFilled ? `var(${tokens.arrowOuterPadding})` : '')};

    padding-right: ${({ isLeftArrow }) =>
        isLeftArrow ? `var(${tokens.arrowInnerPadding})` : 'var(--plasma_private-outer-padding)'};
    padding-left: ${({ isLeftArrow }) =>
        isLeftArrow ? 'var(--plasma_private-outer-padding)' : `var(${tokens.arrowInnerPadding})`};
`;
