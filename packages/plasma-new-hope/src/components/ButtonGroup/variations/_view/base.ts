import { css } from '@linaria/core';

import { classes, tokens } from '../../ButtonGroup.tokens';
import { buttonClasses, buttonTokens } from '../../../Button';

export const base = css`
    &.${classes.buttonGroupOverrideStyles} .${buttonClasses.buttonItem} {
        ${buttonTokens.buttonColor}: var(${tokens.buttonColor});
        ${buttonTokens.buttonColorHover}: var(${tokens.buttonColorHover});
        ${buttonTokens.buttonColorActive}: var(${tokens.buttonColorActive});        
            
        ${buttonTokens.buttonTextColor}: var(${tokens.buttonTextColor});
        ${buttonTokens.buttonIconColor}: var(${tokens.buttonIconColor});
        ${buttonTokens.buttonValueColor}: var(${tokens.buttonValueColor});

        ${buttonTokens.buttonBorderColor}: var(${tokens.buttonBorderColor});            
        ${buttonTokens.buttonBorderColorHover}: var(${tokens.buttonBorderColorHover});            
        ${buttonTokens.buttonBorderColorActive}: var(${tokens.buttonBorderColorActive});            
            
        ${buttonTokens.buttonBackgroundColor}: var(${tokens.buttonBackgroundColor});
        ${buttonTokens.buttonBackgroundColorHover}: var(${tokens.buttonBackgroundColorHover});
        ${buttonTokens.buttonBackgroundColorActive}: var(${tokens.buttonBackgroundColorActive});

        ${buttonTokens.buttonLoadingBackgroundColor}: var(${tokens.buttonLoadingBackgroundColor});
    }
`;
