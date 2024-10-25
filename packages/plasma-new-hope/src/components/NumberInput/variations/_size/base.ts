import { css } from '@linaria/core';

import { classes, privateTokens, tokens } from '../../NumberInput.tokens';
import { iconButtonTokens } from '../../../IconButton';
import { StyledIconButton } from '../../ui/ActionButton/ActionButton.styles';
import {
    AdditionalText,
    DynamicInput,
    Input,
    InputWrapper,
    StyledSpinner,
    TextWrapper,
} from '../../ui/Input/Input.styles';
import { spinnerTokens } from '../../../Spinner';

export const base = css`
    width: var(${privateTokens.inputWidth});
    min-width: var(${tokens.rootMinWidth});

    ${StyledIconButton} {
        ${iconButtonTokens.iconButtonHeight}: var(${tokens.iconButtonHeight});
        ${iconButtonTokens.iconButtonWidth}: var(${tokens.iconButtonWidth});
        ${iconButtonTokens.iconButtonPadding}: var(${tokens.iconButtonPadding});
        ${iconButtonTokens.iconButtonFontFamily}: var(${tokens.iconButtonFontFamily});
        ${iconButtonTokens.iconButtonFontSize}: var(${tokens.iconButtonFontSize});
        ${iconButtonTokens.iconButtonFontStyle}: var(${tokens.iconButtonFontStyle});
        ${iconButtonTokens.iconButtonFontWeight}: var(${tokens.iconButtonFontWeight});
        ${iconButtonTokens.iconButtonLetterSpacing}: var(${tokens.iconButtonLetterSpacing});
        ${iconButtonTokens.iconButtonLineHeight}: var(${tokens.iconButtonLineHeight});
    }

    ${InputWrapper} {
        margin: var(${tokens.inputWrapperMargin});
    }

    ${TextWrapper} {
        height: var(${tokens.textWrapperHeight});
        padding: var(${tokens.textWrapperPadding});
    }

    ${DynamicInput}, ${Input}, ${AdditionalText} {
        font-family: var(${tokens.fontFamily});
        font-size: var(${tokens.fontSize});
        font-style: var(${tokens.fontStyle});
        font-weight: var(${tokens.fontWeight});
        letter-spacing: var(${tokens.letterSpacing});
        line-height: var(${tokens.lineHeight});
    }

    ${AdditionalText} {
        &.${classes.textBefore} {
            margin-right: var(${tokens.textBeforeMarginRight});
        }

        &.${classes.textAfter} {
            margin-left: var(${tokens.textAfterMarginLeft});
        }
    }

    ${StyledSpinner} {
        ${spinnerTokens.size}: var(${tokens.loaderSpinnerSize});
    }
`;
