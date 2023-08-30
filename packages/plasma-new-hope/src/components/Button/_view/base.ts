// TODO: switch engine
// import { css } from '../../../engines/styled-components';
// import { css } from '../../../engines/linaria';
import { css } from '@linaria/core';

export const base = css`
    color: var(--plasma-button-color);
    background-color: var(--plasma-button-bg-color);

    :hover {
        color: var(--plasma-button-color-hover, var(--plasma-button-color));
        background-color: var(--plasma-button-bg-color-hover, var(--plasma-button-bg-color));
    }

    :active {
        color: var(--plasma-button-color-active, var(--plasma-button-color));
        background-color: var(--plasma-button-bg-color-active, var(--plasma-button-bg-color));

        /* TODO: */
        scale: 1.02;
    }
`;

// TODO: should we move defaults for token --plasma-button-color-hover default => --plasma-button-color
// from code to plasma-mapping ??

// TODO: background-image: gradients

/// TODO: tokens: optional / default / func toHover(color) => hoverColor ??
/*
    { "optional": true, "value":  "--plasma-button-focus-color" }
    { "default": "#fc0", "value":  "--plasma-button-focus-color" }
*/
