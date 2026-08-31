import styled, { css } from 'styled-components';
import { addFocus } from 'src/mixins';

import { classes, privateTokens, tokens } from '../../../tokens';

export const base = css`
    display: flex;
    gap: 0.125rem;
    align-items: center;
    position: relative;
    padding: var(${tokens.tabsPadding}, 0);
`;

export const StyledContent = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
`;

export const StyledContentWrapper = styled.div`
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
    color: var(${tokens.arrowColor});
    margin-right: ${({ isLeftArrow }) =>
        isLeftArrow ? `var(${tokens.arrowInnerPadding})` : `var(${privateTokens.outerPadding})`};
    margin-left: ${({ isLeftArrow }) =>
        isLeftArrow ? `var(${privateTokens.outerPadding})` : `var(${tokens.arrowInnerPadding})`};

    ${privateTokens.outlineRadius}: var(${tokens.arrowBorderRadius}, inherit);
    ${privateTokens.outerPadding}: ${({ isFilled }) => (isFilled ? `var(${tokens.arrowOuterPadding})` : '')};

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
