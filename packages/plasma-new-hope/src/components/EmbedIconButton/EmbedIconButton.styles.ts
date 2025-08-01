import { css } from '@linaria/core';

import { buttonTokens } from '../Button';
import { baseContent as buttonBase } from '../Button/Button.styles';

import { tokens } from './EmbedIconButton.tokens';

// Переопределние токенов из Button
export const mappingOverride = `
    ${buttonTokens.buttonPadding}: var(${tokens.embedIconButtonPadding});

    ${buttonTokens.buttonColor}: var(${tokens.embedIconButtonColor});
    ${buttonTokens.buttonBackgroundColor}: var(${tokens.embedIconButtonBackgroundColor});

    ${buttonTokens.buttonColorHover}: var(${tokens.embedIconButtonColorHover});
    ${buttonTokens.buttonBackgroundColorHover}: var(${tokens.embedIconButtonBackgroundColorHover});

    ${buttonTokens.buttonColorActive}: var(${tokens.embedIconButtonColorActive});
    ${buttonTokens.buttonBackgroundColorActive}: var(${tokens.embedIconButtonBackgroundColorActive});

    ${buttonTokens.buttonLoadingBackgroundColor}: var(${tokens.embedIconButtonLoadingBackgroundColor});

    ${buttonTokens.buttonFontFamily}: var(${tokens.embedIconButtonFontFamily});
    ${buttonTokens.buttonFontSize}: var(${tokens.embedIconButtonFontSize});
    ${buttonTokens.buttonFontStyle}: var(${tokens.embedIconButtonFontStyle});
    ${buttonTokens.buttonFontWeight}:var(${tokens.embedIconButtonFontWeight});
    ${buttonTokens.buttonLetterSpacing}: var(${tokens.embedIconButtonLetterSpacing});
    ${buttonTokens.buttonLineHeight}: var(${tokens.embedIconButtonLineHeight});

    ${buttonTokens.buttonWidth}: var(${tokens.embedIconButtonWidth});
    ${buttonTokens.buttonHeight}: var(${tokens.embedIconButtonHeight});
    ${buttonTokens.buttonRadius}: var(${tokens.embedIconButtonRadius});

    ${buttonTokens.buttonDisabledOpacity}: var(${tokens.embedIconButtonDisabledOpacity});
    ${buttonTokens.buttonFocusColor}: var(${tokens.embedIconButtonFocusColor});

    ${buttonTokens.buttonSpinnerSize}: var(${tokens.embedIconButtonSpinnerSize});
    ${buttonTokens.buttonSpinnerColor}: var(${tokens.embedIconButtonSpinnerColor});
`;

export const base = css`
    ${buttonBase};
    ${mappingOverride};
`;
