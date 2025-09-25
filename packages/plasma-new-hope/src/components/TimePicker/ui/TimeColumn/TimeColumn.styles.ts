import { styled } from '@linaria/react';

import { classes, tokens } from '../../TimePicker.tokens';

export const StyledRoot = styled.div`
    position: relative;
    width: 100%;
`;

export const StyledTimeItem = styled.div`
    height: var(${tokens.itemHeight});
    padding: var(${tokens.itemPadding});
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.05s;
    border-radius: var(${tokens.itemBorderRadius});
    cursor: pointer;
    flex-shrink: 0;
    overflow: auto;

    font-family: var(${tokens.itemFontFamily});
    font-size: var(${tokens.itemFontSize});
    font-style: var(${tokens.itemFontStyle});
    font-weight: var(${tokens.itemFontWeight});
    letter-spacing: var(${tokens.itemLetterSpacing});
    line-height: var(${tokens.itemLineHeight});

    &:hover {
        background: var(${tokens.itemBackgroundHover});
    }
    &.${classes.timeItemActive} {
        background: var(${tokens.itemBackgroundActive});
    }
`;

export const StyledTimeColumn = styled.div<{ height?: string | number }>`
    max-height: ${({ height }) => height || `var(${tokens.columnHeight})`};
    overflow-y: scroll;
    flex: 1;
    z-index: 3;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: var(${tokens.scrollbarWidth});
    width: 100%;

    &.${classes.timeColumnActive} {
        border: 0.125rem solid var(${tokens.itemBackgroundHover});
        border-radius: var(${tokens.itemBorderRadius});
    }

    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
        width: 0;
    }
`;

export const CustomScrollbar = styled.div`
    position: absolute;
    top: var(${tokens.scrollbarMargin});
    right: 0;
    bottom: var(${tokens.scrollbarMargin});
    width: var(${tokens.scrollbarWidth});
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 10;
    overflow: hidden;

    &.${classes.scrollbarVisible} {
        opacity: 1;
        pointer-events: auto;
    }
`;

export const ScrollbarTrack = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: var(${tokens.scrollbarTrackColor});
    border-radius: var(${tokens.scrollbarWidth});
`;

export const ScrollbarThumb = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: var(${tokens.scrollbarColor});
    border-radius: var(${tokens.scrollbarWidth});
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        background: var(${tokens.scrollbarColor});
    }

    &:active {
        background: var(${tokens.scrollbarTrackColor});
    }
`;

export const StyledEmpty = styled.div`
    width: 100%;
    height: 0%.125rem;
`;
