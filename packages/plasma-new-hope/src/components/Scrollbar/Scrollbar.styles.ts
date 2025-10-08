import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { tokens, classes } from './Scrollbar.tokens';

export const base = css`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
`;

export const StyledScrollBar = styled.div`
    position: relative;
    width: var(${tokens.width}, 100%);
    height: var(${tokens.height}, 100%);
    overflow: hidden;

    &.${classes.scrollBarVisible} {
        .${classes.scrollBarTrack} {
            opacity: 1;
            pointer-events: auto;
        }
    }

    &.${classes.scrollBarDragging} {
        .${classes.scrollBarThumb} {
            background-color: var(${tokens.thumbColorActive}) !important;
        }
    }
`;

export const StyledContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;
    overflow: overlay;
    scrollbar-width: none;
    -ms-overflow-style: none;
    box-sizing: border-box;

    &::-webkit-scrollbar {
        display: none;
        width: 0;
        height: 0;
    }
`;

export const StyledContent = styled.div`
    min-height: 100%;
    box-sizing: border-box;
    width: 100%;
`;

export const StyledTrack = styled.div`
    position: absolute;
    width: var(${tokens.trackWidth});
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 10;
    background: var(${tokens.trackColor});
    border-radius: var(${tokens.trackBorderRadius});
    top: var(--scrollbar-offset-top, 0);
    bottom: var(--scrollbar-offset-bottom, 0);

    &[data-placement='left'] {
        left: var(--scrollbar-offset-left, 0);
    }

    &[data-placement='right'] {
        right: var(--scrollbar-offset-right, 0);
    }

    &.${classes.scrollBarTrackVisible} {
        opacity: 1;
        pointer-events: auto;
    }
`;

export const StyledThumb = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    background: var(${tokens.thumbColor});
    border-radius: var(${tokens.thumbBorderRadius});
    cursor: pointer;
    transition: background-color 0.2s ease;
    box-sizing: border-box;

    &:hover {
        background: var(${tokens.thumbColorHover});
    }

    &:active {
        background: var(${tokens.thumbColorActive});
    }
`;
