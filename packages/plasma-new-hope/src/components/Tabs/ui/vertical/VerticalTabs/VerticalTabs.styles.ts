import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { addFocus } from '../../../../../mixins';
import { classes, tokens } from '../../../tokens';

export const base = css`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
    align-items: center;
`;

export const StyledContent = styled.div<{ hasDivider?: boolean }>`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
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

    z-index: 1;

    &.${classes.tabsClipScroll} {
        overflow: scroll;

        scrollbar-width: none;
        ::-webkit-scrollbar {
            display: none;
        }

        ${StyledContent} {
            margin-top: auto;
        }
    }

    &.${classes.tabsClipShowAll} {
        overflow: visible;
    }
`;

export const StyledArrow = styled.button`
    display: flex;
    cursor: pointer;
    border: none;
    background-color: transparent;
    padding: 0;
    outline: none;
    transform: rotate(90deg);

    ${addFocus({
        outlineSize: '0.063rem',
        outlineOffset: '-0.125rem',
        outlineColor: `var(${tokens.outlineFocusColor})`,
        outlineRadius: 'calc(var(--plasma_private-outline-radius) - 0.063rem)',
    })};

    &[disabled] {
        cursor: not-allowed;
    }

    color: var(${tokens.arrowColor});

    &:hover {
        color: var(${tokens.arrowColorHover});
    }

    &:active {
        color: var(${tokens.arrowColorActive});
    }
`;
