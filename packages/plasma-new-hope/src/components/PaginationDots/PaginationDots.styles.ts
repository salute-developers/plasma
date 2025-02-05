import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { classes, tokens } from './PaginationDots.tokens';

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AnimatedDotsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Dot = styled.div`
    box-sizing: border-box;
    padding: var(${tokens.dotPadding});

    &:before {
        content: '';
        display: block;
        border-radius: var(${tokens.dotBorderRadius});
        background-color: var(${tokens.itemBackground});
        transition: width 0.3s linear, height 0.3s linear;
    }

    &.${classes.active} {
        &:before {
            background-color: var(${tokens.activeItemBackground});
        }
    }

    &[data-size='xs'] {
        &:before {
            --plasma-private-dot-size: var(${tokens.dotSizeXS});
            width: var(${tokens.dotSizeXS});
            height: var(${tokens.dotSizeXS});
        }
    }

    &[data-size='s'] {
        &:before {
            --plasma-private-dot-size: var(${tokens.dotSizeS});
            width: var(${tokens.dotSizeS});
            height: var(${tokens.dotSizeS});
        }
    }

    &[data-size='m'] {
        &:before {
            --plasma-private-dot-size: var(${tokens.dotSizeM});
            width: var(${tokens.dotSizeM});
            height: var(${tokens.dotSizeM});
        }
    }

    &.${classes.clickable} {
        cursor: pointer;
    }

    @keyframes showAnimation {
        from {
            transform: scale(0);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }

    @keyframes showWithColor {
        from {
            background-color: var(${tokens.itemBackground});
        }
        to {
            background-color: var(${tokens.activeItemBackground});
        }
    }

    @keyframes hideWithColor {
        from {
            background-color: var(${tokens.activeItemBackground});
        }
        to {
            background-color: var(${tokens.itemBackground});
        }
    }

    @keyframes hideAnimation {
        from {
            transform: scale(1);
            opacity: 1;
        }
        to {
            transform: scale(0);
            opacity: 0;
        }
    }

    @keyframes reversedWidthAnimation {
        from {
            width: var(${tokens.lineWidth});
            height: var(${tokens.lineHeight});
            border-radius: var(${tokens.lineBorderRadius});
            background-color: var(${tokens.activeItemBackground});
        }
        to {
            width: var(--plasma-private-dot-size);
            height: var(--plasma-private-dot-size);
            border-radius: var(${tokens.lineBorderRadius});
            background-color: var(${tokens.itemBackground});
        }
    }

    @keyframes reversedHeightAnimation {
        from {
            width: var(${tokens.verticalLineWidth});
            height: var(${tokens.verticalLineHeight});
            border-radius: var(${tokens.lineBorderRadius});
        }
        to {
            width: var(--plasma-private-dot-size);
            height: var(--plasma-private-dot-size);
            border-radius: var(${tokens.lineBorderRadius});
        }
    }

    &.${classes.prevActive} {
        &[data-view='line'] {
            &:before {
                animation-name: reversedWidthAnimation;
                animation-duration: 0.3s;
                animation-iteration-count: 1;
                animation-play-state: running;
                animation-timing-function: linear;
            }

            &.${classes.vertical} {
                &:before {
                    animation-name: reversedHeightAnimation;
                }
            }
        }

        &[data-view='dot'] {
            &:before {
                animation-name: hideWithColor;
                animation-duration: 0.3s;
                animation-iteration-count: 1;
                animation-play-state: running;
                animation-timing-function: linear;
                animation-timing-function: ease-out;
            }
        }
    }

    &.hidden {
        position: absolute;
        animation-name: hideAnimation;
        animation-duration: calc(0.3s + 0.1s);
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear;
    }

    &.showed {
        position: absolute;
        animation-name: showAnimation;
        animation-duration: 0.3s;
        animation-iteration-count: 1;
        animation-play-state: running;
        animation-timing-function: linear;
    }

    &.${classes.active} {
        &[data-view='dot'] {
            &:before {
                animation-name: showWithColor;
                animation-duration: 0.3s;
                animation-iteration-count: 1;
                animation-play-state: running;
                animation-timing-function: linear;
                animation-timing-function: ease-in;
            }
        }
    }

    &.${classes.skipAnimation} {
        transition: none;
        animation-name: none !important;

        &:before {
            transition: none;
            animation-name: none !important;
        }
    }
`;

export const Line = styled(Dot)`
    @keyframes widthAnimation {
        from {
            width: var(${tokens.lineHeight});
            height: var(${tokens.lineHeight});
            background-color: var(${tokens.itemBackground});
        }
        to {
            width: var(${tokens.lineWidth});
            height: var(${tokens.lineHeight});
            background-color: var(${tokens.activeItemBackground});
        }
    }

    @keyframes heightAnimation {
        from {
            width: var(${tokens.lineHeight});
            height: var(${tokens.lineHeight});
            background-color: var(${tokens.itemBackground});
        }
        to {
            width: var(${tokens.verticalLineWidth});
            height: var(${tokens.verticalLineHeight});
            background-color: var(${tokens.activeItemBackground});
        }
    }

    &[data-size='s'] {
        &:before {
            width: var(${tokens.lineWidth});
            height: var(${tokens.lineHeight});
            border-radius: var(${tokens.lineBorderRadius});
        }
    }

    &[data-size='m'] {
        &:before {
            width: var(${tokens.lineWidth});
            height: var(${tokens.lineHeight});
            border-radius: var(${tokens.lineBorderRadius});
        }
    }

    &.${classes.vertical} {
        &[data-size='s'] {
            &:before {
                width: var(${tokens.verticalLineWidth});
                height: var(${tokens.verticalLineHeight});
            }
        }

        &[data-size='m'] {
            &:before {
                width: var(${tokens.verticalLineWidth});
                height: var(${tokens.verticalLineHeight});
            }
        }
    }

    &.${classes.active} {
        &:before {
            animation-name: widthAnimation;
            animation-duration: 0.3s;
            animation-iteration-count: 1;
            animation-play-state: running;
            animation-timing-function: linear;
        }

        &.${classes.vertical} {
            &:before {
                animation-name: heightAnimation;
            }
        }
    }

    &.${classes.skipAnimation} {
        animation-name: none !important;

        &:before {
            animation-name: none !important;
        }
    }
`;

export const base = css`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &.${classes.centered} {
        width: 100%;
        justify-content: center;
    }

    &.${classes.vertical} {
        display: inline-flex;
        flex-direction: column;
        align-items: center;

        ${Dot} {
            padding: var(${tokens.verticalDotPadding});
        }

        ${AnimatedDotsWrapper} {
            flex-direction: column;
        }

        &.${classes.centered} {
            width: auto;
            height: 100%;

            position: relative;
        }
    }
`;
