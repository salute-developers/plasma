import styled, { css } from 'styled-components';
import { addFocus } from 'src/mixins';

import { classes, privateTokens, tokens } from '../../../tokens';

export const base = css`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
    align-items: center;
    padding: var(${tokens.tabsPadding}, 0);
`;

export const StyledContent = styled.div<{ hasDivider?: boolean }>`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const StyledContentWrapper = styled.div`
    box-sizing: border-box;
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
    color: var(${tokens.arrowColor});

    ${privateTokens.outlineRadius}: var(${tokens.arrowBorderRadius}, inherit);

    ${addFocus({
        outlineSize: '0.063rem',
        outlineOffset: '0',
        outlineColor: `var(${tokens.outlineFocusColor})`,
        outlineRadius: `calc(var(${privateTokens.outlineRadius}) - 0.063rem)`,
    })};

    &[disabled] {
        cursor: not-allowed;
    }

    &:hover {
        color: var(${tokens.arrowColorHover});
    }

    &:active {
        color: var(${tokens.arrowColorActive});
    }
`;
