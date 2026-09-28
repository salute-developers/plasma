import { createGlobalStyle, css } from 'styled-components';

import { classes, tokens } from './Bubble.tokens';

const progress = '--plasma-bubble-progress';
const scale = '--plasma-bubble-scale';

export const BubbleMotionProperties = createGlobalStyle`
    @property ${progress} {
        syntax: '<number>';
        inherits: true;
        initial-value: 0;
    }

    @property ${scale} {
        syntax: '<number>';
        inherits: true;
        initial-value: 1;
    }

    @keyframes plasma-bubble-overshoot-open {
        0% {
            ${scale}: 1;
        }

        70% {
            ${scale}: 1.1;
            animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
        }

        100% {
            ${scale}: 1;
        }
    }

    @keyframes plasma-bubble-overshoot-close {
        0% {
            ${scale}: 1;
        }

        30% {
            ${scale}: 1.1;
            animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
        }

        100% {
            ${scale}: 1;
        }
    }
`;

export const base = css`
    position: relative;
    display: inline-block;
    width: var(${tokens.triggerSize});
    height: var(${tokens.triggerSize});
    vertical-align: top;
    flex-shrink: 0;

    ${progress}: 0;
    ${scale}: 1;
    --plasma-bubble-content-opacity: clamp(0, calc((var(${progress}) - 0.85) / 0.15), 1);
    transform: scale(var(${scale}));
    transform-origin: center;
    --plasma-bubble-open-delay: 0s;
    --plasma-bubble-join-bleed: 0.1875rem;
    transition-property: ${progress};
    transition-duration: var(${tokens.duration});
    transition-timing-function: var(${tokens.easing});
    transition-delay: 0s;

    &.${classes.opened} {
        ${progress}: 1;
        --plasma-bubble-open-delay: var(${tokens.delay});
        --plasma-bubble-content-opacity: clamp(0, calc((var(${progress}) - 0.65) / 0.35), 1);
        transition-delay: var(--plasma-bubble-open-delay);
    }

    &[data-motion] {
        animation-name: plasma-bubble-overshoot-close;
        animation-duration: var(${tokens.duration});
        animation-timing-function: linear;
        animation-fill-mode: both;
        animation-delay: 0s;
    }

    &[data-motion].${classes.opened} {
        animation-name: plasma-bubble-overshoot-open;
        animation-delay: var(--plasma-bubble-open-delay);
    }

    .${classes.body} {
        position: absolute;
        z-index: 0;
        box-sizing: border-box;
        width: var(${tokens.bodyWidth});
        min-height: var(${tokens.triggerSize});
        pointer-events: none;
    }

    &.${classes.opened} .${classes.body} {
        pointer-events: auto;
    }

    .${classes.bodyShape} {
        position: absolute;
        inset: 0;
        color: var(${tokens.backgroundColor});
        pointer-events: none;
        opacity: var(${progress});
        transform: scale(var(${progress}));
    }

    .${classes.bodyRect}, .${classes.bodyJoin} {
        position: absolute;
    }

    .${classes.bodyRect} {
        width: var(${tokens.bodyWidth});
        background: currentColor;
    }

    .${classes.bodyJoin} {
        display: block;
        overflow: visible;
    }

    &[data-placement='top-right'],
    &[data-placement='top-left'] {
        .${classes.body} {
            bottom: 0;
            padding-bottom: var(${tokens.neckOffset});
        }

        .${classes.bodyRect} {
            top: 0;
            bottom: var(${tokens.neckOffset});
        }

        .${classes.bodyJoin} {
            bottom: 0;
            width: var(${tokens.triggerSize});
            height: calc(var(${tokens.neckOffset}) + var(--plasma-bubble-join-bleed));
        }
    }

    &[data-placement='top-right'] {
        .${classes.body} {
            left: 0;
        }

        .${classes.bodyShape}, .${classes.content} {
            transform-origin: calc(var(${tokens.triggerSize}) / 2) calc(100% - var(${tokens.triggerSize}) / 2);
        }

        .${classes.bodyRect} {
            left: 0;
            border-radius: var(${tokens.borderRadius}) var(${tokens.borderRadius}) var(${tokens.borderRadius})
                var(${tokens.borderRadiusJoin});
        }

        .${classes.bodyJoin} {
            left: 0;
        }
    }

    &[data-placement='top-left'] {
        .${classes.body} {
            left: 0;
            transform: translateX(calc(var(${tokens.triggerSize}) - 100%));
        }

        .${classes.bodyShape}, .${classes.content} {
            transform-origin: calc(var(${tokens.bodyWidth}) - var(${tokens.triggerSize}) / 2)
                calc(100% - var(${tokens.triggerSize}) / 2);
        }

        .${classes.bodyRect} {
            right: 0;
            border-radius: var(${tokens.borderRadius}) var(${tokens.borderRadius}) var(${tokens.borderRadiusJoin})
                var(${tokens.borderRadius});
        }

        .${classes.bodyJoin} {
            right: 0;
        }
    }

    &[data-placement='right'],
    &[data-placement='left'] {
        .${classes.body} {
            top: 50%;
            width: calc(var(${tokens.bodyWidth}) + var(${tokens.neckOffset}));
            transform: translateY(-50%);
        }

        .${classes.bodyRect} {
            top: 0;
            bottom: 0;
            border-radius: var(${tokens.borderRadius});
        }

        .${classes.bodyJoin} {
            top: 50%;
            width: calc(var(${tokens.neckOffset}) + var(--plasma-bubble-join-bleed));
            height: var(${tokens.triggerSize});
            transform: translateY(-50%);
        }
    }

    &[data-placement='right'] {
        .${classes.body} {
            left: 0;
            padding-left: var(${tokens.neckOffset});
        }

        .${classes.bodyShape}, .${classes.content} {
            transform-origin: calc(var(${tokens.triggerSize}) / 2) 50%;
        }

        .${classes.bodyRect} {
            right: 0;
        }

        .${classes.bodyJoin} {
            left: 0;
        }
    }

    &[data-placement='left'] {
        .${classes.body} {
            left: 0;
            padding-right: var(${tokens.neckOffset});
            transform: translate(calc(var(${tokens.triggerSize}) - 100%), -50%);
        }

        .${classes.bodyShape}, .${classes.content} {
            transform-origin: calc(
                    var(${tokens.bodyWidth}) + var(${tokens.neckOffset}) - var(${tokens.triggerSize}) / 2
                )
                50%;
        }

        .${classes.bodyRect} {
            left: 0;
        }

        .${classes.bodyJoin} {
            right: 0;
        }
    }

    .${classes.content} {
        position: relative;
        z-index: 1;
        padding: var(${tokens.contentPadding});
        opacity: var(--plasma-bubble-content-opacity);
        transform: scale(var(${progress}));
        color: var(${tokens.color});
        font-family: var(${tokens.fontFamily});
        font-size: var(${tokens.fontSize});
        font-style: var(${tokens.fontStyle});
        font-weight: var(${tokens.fontWeight});
        letter-spacing: var(${tokens.letterSpacing});
        line-height: var(${tokens.lineHeight});
    }

    .${classes.trigger} {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: var(${tokens.triggerSize});
        height: var(${tokens.triggerSize});
        margin: 0;
        padding: 0;
        border: 0;
        background: transparent;
        color: var(${tokens.iconColor});
        cursor: pointer;
        appearance: none;
        -webkit-tap-highlight-color: transparent;

        &:focus-visible {
            outline: 0.125rem solid var(${tokens.iconColor});
            outline-offset: 0.125rem;
        }
    }

    .${classes.shapeStar} {
        position: absolute;
        inset: 0;
        pointer-events: none;
        color: var(${tokens.backgroundColor});
        opacity: clamp(0, calc((1 - var(${progress})) / 0.4), 1);
        transform: rotate(calc(var(${progress}) * 45deg));

        svg {
            display: block;
            width: 100%;
            height: 100%;
        }

        path[stroke] {
            stroke: var(${tokens.outlineColor});
        }
    }

    .${classes.decorStar} {
        position: absolute;
        inset: 0;
        z-index: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: var(${progress});
        pointer-events: none;
        transform: rotate(calc(var(${progress}) * 45deg));
    }

    .${classes.decorStar} svg {
        width: var(${tokens.decorStarSize});
        height: var(${tokens.decorStarSize});
    }

    .${classes.icon} {
        position: relative;
        z-index: 1;
        display: grid;
        width: var(${tokens.iconSize});
        height: var(${tokens.iconSize});
        color: var(${tokens.iconColor});
        transform: rotate(calc(var(${progress}) * 45deg));

        > * {
            grid-area: 1 / 1;
            width: 100%;
            height: 100%;
        }
    }

    .${classes.iconStar}, .${classes.iconClose} {
        display: flex;
        transform-origin: center;

        svg {
            display: block;
            width: 100%;
            height: 100%;
        }
    }

    .${classes.iconStar} {
        opacity: calc(1 - var(${progress}));
        transform: scale(calc(1 - var(${progress}) * 0.3));
    }

    .${classes.iconClose} {
        opacity: var(${progress});
        transform: rotate(calc(45deg - var(${progress}) * 45deg)) scale(calc(0.7 + var(${progress}) * 0.3));
    }

    @media (prefers-reduced-motion: reduce) {
        --plasma-bubble-open-delay: 0s;
        transition-duration: 0.001ms;
        transition-delay: 0s;

        &[data-motion],
        &[data-motion].${classes.opened} {
            animation: none;
            transform: none;
        }
    }
`;
