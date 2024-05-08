import { css } from '@linaria/core';

import { buttonTokens } from '../Button';
import { baseContent as buttonBase } from '../Button/Button.styles';

import { tokens } from './IconButton.tokens';

// Переопределние токенов из Button
export const mappingOverride = `
    ${buttonTokens.buttonPadding}: 0;

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

    ${buttonTokens.buttonSpinnerSize}: var(${tokens.iconButtonSpinnerSize});
    ${buttonTokens.buttonSpinnerColor}: var(${tokens.iconButtonSpinnerColor});
`;

export const base = css`
    ${buttonBase};
    ${mappingOverride};
`;
