import { css } from 'styled-components';

import { tokens, classes } from '../../Button.tokens';

export const base = css`
    color: var(${tokens.buttonColor});
    background: red;
    box-shadow: inset 0 0 0 0.063rem var(${tokens.buttonBorderColor}, inset 0 0 0 0 transparent);

    &.${classes.buttonLoading} {
        background: red;
    }

    // INFO: Чтобы не было "залипания" состояния на мобильных устройствах
    @media (hover: hover) and (pointer: fine) {
        :hover {
            color: var(${tokens.buttonColorHover}, var(${tokens.buttonColor}));
            background: red;
            box-shadow: inset 0 0 0 0.063rem var(${tokens.buttonBorderColorHover}, inset 0 0 0 0 transparent);

            scale: var(${tokens.buttonScaleHover});
        }
    }

    :active {
        color: var(${tokens.buttonColorActive}, var(${tokens.buttonColor}));
        background: red;
        box-shadow: inset 0 0 0 0.063rem var(${tokens.buttonBorderColorActive}, inset 0 0 0 0 transparent);

        scale: var(${tokens.buttonScaleActive});
    }
`;

// TODO: #715 background-image: gradients

/// TODO: #714 tokens: optional / default / func toHover(color) => hoverColor ??
/*
    { "optional": true, "value":  "--plasma-button-focus-color" }
    { "default": "#fc0", "value":  "--plasma-button-focus-color" }
*/
