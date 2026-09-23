import { css } from 'styled-components';

import { classes, tokens } from './Bubble.tokens';

export const base = css`
    position: relative;
    display: inline-block;
    width: var(${tokens.triggerSize});
    height: var(${tokens.triggerSize});
    vertical-align: top;
    flex-shrink: 0;

    --plasma-bubble-open-delay: 0s;
    --plasma-bubble-join-bleed: 0.1875rem;

    &.${classes.opened} {
        --plasma-bubble-open-delay: var(${tokens.delay});
    }

    .${classes.body},
        .${classes.content},
        .${classes.decorStar},
        .${classes.shapeStar},
        .${classes.iconStar},
        .${classes.iconClose} {
        transition-duration: var(${tokens.duration});
        transition-timing-function: var(${tokens.easing});
        transition-delay: var(--plasma-bubble-open-delay);
    }

    .${classes.body} {
        position: absolute;
        z-index: 0;
        box-sizing: border-box;
        width: var(${tokens.bodyWidth});
        min-height: var(${tokens.triggerSize});
        clip-path: var(--plasma-bubble-clip);
        opacity: 0;
        pointer-events: none;
        transition-property: clip-path, opacity;
        transition-duration: var(${tokens.duration}), calc(var(${tokens.duration}) * 0.45);
        transition-delay: 0s, calc(var(${tokens.duration}) * 0.55);
    }

    &.${classes.opened} .${classes.body} {
        opacity: 1;
        pointer-events: auto;
        transition-duration: var(${tokens.duration}), 0s;
        transition-delay: var(--plasma-bubble-open-delay), var(--plasma-bubble-open-delay);
    }

    .${classes.bodyShape} {
        position: absolute;
        inset: 0;
        color: var(${tokens.backgroundColor});
        pointer-events: none;
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
        --plasma-bubble-clip: inset(
            calc(100% - var(${tokens.triggerSize})) calc(100% - var(${tokens.triggerSize})) 0 0
        );

        .${classes.body} {
            left: 0;
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
        --plasma-bubble-clip: inset(
            calc(100% - var(${tokens.triggerSize})) 0 0 calc(100% - var(${tokens.triggerSize}))
        );

        .${classes.body} {
            right: 0;
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
        --plasma-bubble-clip: inset(
            calc(50% - var(${tokens.triggerSize}) / 2) calc(100% - var(${tokens.triggerSize}))
                calc(50% - var(${tokens.triggerSize}) / 2) 0
        );

        .${classes.body} {
            left: 0;
            padding-left: var(${tokens.neckOffset});
        }

        .${classes.bodyRect} {
            right: 0;
        }

        .${classes.bodyJoin} {
            left: 0;
        }
    }

    &[data-placement='left'] {
        --plasma-bubble-clip: inset(
            calc(50% - var(${tokens.triggerSize}) / 2) 0 calc(50% - var(${tokens.triggerSize}) / 2)
                calc(100% - var(${tokens.triggerSize}))
        );

        .${classes.body} {
            right: 0;
            padding-right: var(${tokens.neckOffset});
        }

        .${classes.bodyRect} {
            left: 0;
        }

        .${classes.bodyJoin} {
            right: 0;
        }
    }

    &.${classes.opened} {
        --plasma-bubble-clip: inset(-1.5rem);
    }

    .${classes.content} {
        position: relative;
        z-index: 1;
        padding: var(${tokens.contentPadding});
        opacity: 0;
        color: var(${tokens.color});
        font-family: var(${tokens.fontFamily});
        font-size: var(${tokens.fontSize});
        font-style: var(${tokens.fontStyle});
        font-weight: var(${tokens.fontWeight});
        letter-spacing: var(${tokens.letterSpacing});
        line-height: var(${tokens.lineHeight});
        transition-property: opacity;
    }

    &.${classes.opened} .${classes.content} {
        opacity: 1;
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
        transition-property: opacity, transform;
        color: var(${tokens.backgroundColor});
        opacity: 1;
        transition-delay: calc(var(${tokens.duration}) * 0.55);
        transition-duration: calc(var(${tokens.duration}) * 0.45);

        svg {
            display: block;
            width: 100%;
            height: 100%;
        }

        path[stroke] {
            stroke: var(${tokens.outlineColor});
        }
    }

    &.${classes.opened} .${classes.shapeStar} {
        opacity: 0;
        transform: rotate(-45deg);
        transition-delay: var(--plasma-bubble-open-delay);
        transition-duration: var(${tokens.duration});
    }

    .${classes.decorStar} {
        position: absolute;
        inset: 0;
        z-index: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        pointer-events: none;
        transition-property: opacity;
    }

    &.${classes.opened} .${classes.decorStar} {
        opacity: 1;
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

        > * {
            grid-area: 1 / 1;
            width: 100%;
            height: 100%;
        }
    }

    .${classes.iconStar}, .${classes.iconClose} {
        display: flex;
        transition-property: opacity, transform;

        svg {
            display: block;
            width: 100%;
            height: 100%;
        }
    }

    .${classes.iconStar} {
        opacity: 1;
        transform: rotate(0deg);
        transition-delay: calc(var(${tokens.duration}) * 0.55);
        transition-duration: calc(var(${tokens.duration}) * 0.45);
    }

    .${classes.iconClose} {
        opacity: 0;
        transform: rotate(45deg);
        transition-delay: 0s;
        transition-duration: calc(var(${tokens.duration}) * 0.4);
    }

    &.${classes.opened} .${classes.iconStar} {
        opacity: 0;
        transform: rotate(-45deg);
        transition-delay: var(--plasma-bubble-open-delay);
        transition-duration: var(${tokens.duration});
    }

    &.${classes.opened} .${classes.iconClose} {
        opacity: 1;
        transform: rotate(-45deg);
        transition-delay: var(--plasma-bubble-open-delay);
        transition-duration: var(${tokens.duration});
    }

    @media (prefers-reduced-motion: reduce) {
        --plasma-bubble-open-delay: 0s;

        .${classes.body},
            .${classes.content},
            .${classes.decorStar},
            .${classes.shapeStar},
            .${classes.iconStar},
            .${classes.iconClose} {
            transition-duration: 0.001ms;
            transition-delay: 0s;
        }

        &.${classes.opened}
            .${classes.body},
            &.${classes.opened}
            .${classes.shapeStar},
            &.${classes.opened}
            .${classes.iconStar},
            &.${classes.opened}
            .${classes.iconClose} {
            transition-delay: 0s;
            transition-duration: 0.001ms;
        }
    }
`;
