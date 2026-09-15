import { css } from 'styled-components';
import { applyHover } from 'src/mixins';

import { tokens, classes } from '../../Button.tokens';

export const base = css`
    --box-shadow-spread: var(${tokens.buttonBorderWidth}, 0.063rem);

    color: var(${tokens.buttonColor});
    background: var(${tokens.buttonBackgroundColor});
    box-shadow: inset 0 0 0 var(--box-shadow-spread) var(${tokens.buttonBorderColor}, inset 0 0 0 0 transparent);

    &.${classes.buttonLoading} {
        background: var(${tokens.buttonLoadingBackgroundColor});
    }

    ${applyHover(`
        :hover {
            color: var(${tokens.buttonColorHover}, var(${tokens.buttonColor}));
            background: var(${tokens.buttonBackgroundColorHover}, var(${tokens.buttonBackgroundColor}));
            box-shadow: inset 0 0 0 var(--box-shadow-spread)
                var(${tokens.buttonBorderColorHover}, inset 0 0 0 0 transparent);

            scale: var(${tokens.buttonScaleHover});
        }
    `)}

    :active {
        color: var(${tokens.buttonColorActive}, var(${tokens.buttonColor}));
        background: var(${tokens.buttonBackgroundColorActive}, var(${tokens.buttonBackgroundColor}));
        box-shadow: inset 0 0 0 var(--box-shadow-spread)
            var(${tokens.buttonBorderColorActive}, inset 0 0 0 0 transparent);

        scale: var(${tokens.buttonScaleActive});
    }
`;

/// TODO: #714 tokens: optional / default / func toHover(color) => hoverColor ??
/*
    { "optional": true, "value":  "--plasma-button-focus-color" }
    { "default": "#fc0", "value":  "--plasma-button-focus-color" }
*/
