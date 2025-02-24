import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { classes, tokens } from './PaginationDots.tokens';

export const Dot = styled.div`
    padding: var(${tokens.dotPadding});

    &:before {
        content: '';
        display: block;
        border-radius: var(${tokens.dotBorderRadius});

        background-color: var(${tokens.itemBackground});
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

    @keyframes reversedWidthAnimation {
        from {
            width: var(${tokens.lineWidth});
            height: var(${tokens.lineHeight});
            border-radius: var(${tokens.lineBorderRadius});
        }
        to {
            width: var(--plasma-private-dot-size);
            height: var(--plasma-private-dot-size);
            border-radius: var(${tokens.lineBorderRadius});
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
        &:before {
            animation-name: reversedWidthAnimation;
            animation-duration: 0.5s;
            animation-iteration-count: 1;
            animation-play-state: running;
        }

        &.${classes.vertical} {
            &:before {
                animation-name: reversedHeightAnimation;
            }
        }
    }
`;

export const Line = styled(Dot)`
    @keyframes widthAnimation {
        from {
            width: var(${tokens.lineHeight});
            height: var(${tokens.lineHeight});
        }
        to {
            width: var(${tokens.lineWidth});
            height: var(${tokens.lineHeight});
        }
    }

    @keyframes heightAnimation {
        from {
            width: var(${tokens.lineHeight});
            height: var(${tokens.lineHeight});
        }
        to {
            width: var(${tokens.verticalLineWidth});
            height: var(${tokens.verticalLineHeight});
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
            animation-duration: 0.5s;
            animation-iteration-count: 1;
            animation-play-state: running;
        }

        &.${classes.vertical} {
            &:before {
                animation-name: heightAnimation;
            }
        }
    }
`;

export const CenterWrapper = styled.div`
    position: relative;
    display: flex;
`;

export const BeforeWrapper = styled.div`
    position: absolute;
    display: flex;
`;

export const AfterWrapper = styled(BeforeWrapper)`
    position: absolute;
    display: flex;
`;

export const base = css`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &.${classes.centered} {
        width: 100%;
        justify-content: center;

        ${BeforeWrapper}, ${AfterWrapper} {
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }

        ${BeforeWrapper} {
            inset: 0 100% 0 auto;
        }

        ${AfterWrapper} {
            inset: 0 auto 0 100%;
        }
    }

    &.${classes.vertical} {
        display: inline-flex;
        flex-direction: column;
        align-items: center;

        ${Dot} {
            padding: var(${tokens.verticalDotPadding});
        }

        &.${classes.centered} {
            width: auto;
            height: 100%;

            position: relative;

            /*
            :before {
                position: absolute;
                display: block;
                content: '';
                top: 0;
                bottom: 0;

                height: 4px;
                width: 20px;
                margin: auto;
                left: calc(100% + 2px);

                background: black;
            }
            
            background: lightcoral;
            height: 300px;
             */

            ${BeforeWrapper}, ${AfterWrapper} {
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            ${BeforeWrapper} {
                inset: auto 0 100% 0;
            }

            ${AfterWrapper} {
                inset: 100% 0 auto 0;
            }
        }
    }
`;
