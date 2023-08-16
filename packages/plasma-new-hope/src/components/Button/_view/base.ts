import { css } from '@linaria/core';

export const base = css`
    color: var(--plasma-button-color);
    background-color: var(--plasma-button-bg-color);

    :hover {
        color: var(--plasma-button-color-hover, var(--plasma-button-color));
        background-color: var(--plasma-button-bg-color-hover, var(--plasma-button-bg-color));

        /* TODO: #706 make scale - token */
        scale: 1.02;
    }

    :active {
        color: var(--plasma-button-color-active, var(--plasma-button-color));
        background-color: var(--plasma-button-bg-color-active, var(--plasma-button-bg-color));

        /* TODO: #706 make scale - token */
        scale: 0.98;
    }
`;

// TODO: #715 background-image: gradients

/// TODO: #714 tokens: optional / default / func toHover(color) => hoverColor ??
/*
    { "optional": true, "value":  "--plasma-button-focus-color" }
    { "default": "#fc0", "value":  "--plasma-button-focus-color" }
*/
