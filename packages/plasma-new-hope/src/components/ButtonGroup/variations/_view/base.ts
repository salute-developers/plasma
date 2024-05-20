import { css } from '@linaria/core';

import { classes, tokens } from '../../ButtonGroup.tokens';
import { buttonClasses, buttonTokens } from '../../../Button';

export const base = css`
    &.${classes.buttonGroupOverrideStyles} .${buttonClasses.buttonItem} {
        ${buttonTokens.buttonColor}: var(${tokens.buttonColor});
        ${buttonTokens.buttonValueColor}: var(${tokens.buttonValueColor});
        ${buttonTokens.buttonBackgroundColor}: var(${tokens.buttonBackgroundColor});
        ${buttonTokens.buttonColorHover}: var(${tokens.buttonColorHover});
        ${buttonTokens.buttonBackgroundColorHover}: var(${tokens.buttonBackgroundColorHover});
        ${buttonTokens.buttonColorActive}: var(${tokens.buttonColorActive});
        ${buttonTokens.buttonBackgroundColorActive}: var(${tokens.buttonBackgroundColorActive});
    }
`;
