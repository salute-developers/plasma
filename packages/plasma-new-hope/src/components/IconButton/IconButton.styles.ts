import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { component, mergeConfig } from '../../engines';
import { buttonConfig, buttonTokens } from '../Button';

import { tokens, classes } from './IconButton.tokens';

const mergedConfig = mergeConfig(buttonConfig);
const Button = component(mergedConfig);

export const base = css`
    &&.${classes.iconButtonItem} {
        display: inline-flex;
    }
`;

export const IconButtonStyled = styled(Button)`
    ${buttonTokens.buttonColor}: var(${tokens.iconButtonColor});
    ${buttonTokens.buttonBackgroundColor}: var(${tokens.iconButtonBackgroundColor});

    ${buttonTokens.buttonColorHover}: var(${tokens.iconButtonColorHover});
    ${buttonTokens.buttonBackgroundColorHover}: var(${tokens.iconButtonBackgroundColorHover});

    ${buttonTokens.buttonColorActive}: var(${tokens.iconButtonColorActive});
    ${buttonTokens.buttonBackgroundColorActive}: var(${tokens.iconButtonBackgroundColorActive});


    ${buttonTokens.buttonFontFamily}: var(${tokens.iconButtonFontFamily});
    ${buttonTokens.buttonFontSize}: var(${tokens.iconButtonFontSize});
    ${buttonTokens.buttonFontStyle}: var(${tokens.iconButtonFontStyle});
    ${buttonTokens.buttonFontWeight}:var(${tokens.iconButtonFontWeight});
    ${buttonTokens.buttonLetterSpacing}: var(${tokens.iconButtonLetterSpacing});
    ${buttonTokens.buttonLineHeight}: var(${tokens.iconButtonLineHeight});

    ${buttonTokens.buttonWidth}: var(${tokens.iconButtonWidth});
    ${buttonTokens.buttonHeight}: var(${tokens.iconButtonHeight});
    ${buttonTokens.buttonRadius}: var(${tokens.iconButtonRadius});

    ${buttonTokens.buttonDisabledOpacity}: var(${tokens.iconButtonDisabledOpacity});
    ${buttonTokens.buttonFocusColor}: var(${tokens.iconButtonFocusColor});
`;
