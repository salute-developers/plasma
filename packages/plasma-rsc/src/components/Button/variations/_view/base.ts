import { css } from '@linaria/core';

import { tokens } from '../../Button.tokens';

export const base = css`
    color: var(${tokens.buttonColor});
    background-color: var(${tokens.buttonBackgroundColor});

    :hover {
        color: var(${tokens.buttonColorHover}, var(${tokens.buttonColor}));
        background-color: var(${tokens.buttonBackgroundColorHover}, var(${tokens.buttonBackgroundColor}));

        scale: var(${tokens.buttonScaleHover});
    }

    :active {
        color: var(${tokens.buttonColorActive}, var(${tokens.buttonColor}));
        background-color: var(${tokens.buttonBackgroundColorActive}, var(${tokens.buttonBackgroundColor}));

        scale: var(${tokens.buttonScaleActive});
    }
`;

// TODO: #715 background-image: gradients

/// TODO: #714 tokens: optional / default / func toHover(color) => hoverColor ??
/*
    { "optional": true, "value":  "--plasma-button-focus-color" }
    { "default": "#fc0", "value":  "--plasma-button-focus-color" }
*/
