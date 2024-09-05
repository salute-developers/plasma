import { css } from '@linaria/core';

import { classes, tokens } from '../../TextFieldGroup.tokens';
import { textFieldTokens } from '../../../TextField';

export const base = css`
    &.${classes.textFieldGroupOverrideStyles} .${classes.textFieldGroupItem}  {
        ${textFieldTokens.height}: var(${tokens.height});
        ${textFieldTokens.padding}: var(${tokens.padding});
        ${textFieldTokens.paddingWithChips}: var(${tokens.paddingWithChips});

        ${textFieldTokens.leftContentMargin}: var(${tokens.leftContentMargin});
        ${textFieldTokens.rightContentMargin}: var(${tokens.rightContentMargin});

        ${textFieldTokens.textBeforeMargin}: var(${tokens.textBeforeMargin});
        ${textFieldTokens.textAfterMargin}: var(${tokens.textAfterMargin});

        ${textFieldTokens.fontFamily}: var(${tokens.fontFamily});
        ${textFieldTokens.fontSize}: var(${tokens.fontSize});
        ${textFieldTokens.fontStyle}: var(${tokens.fontStyle});
        ${textFieldTokens.fontWeight}: var(${tokens.fontWeight});
        ${textFieldTokens.letterSpacing}: var(${tokens.letterSpacing});
        ${textFieldTokens.lineHeight}: var(${tokens.lineHeight});

        ${textFieldTokens.labelOffset}: var(${tokens.labelOffset});
        ${textFieldTokens.labelFontFamily}: var(${tokens.labelFontFamily});
        ${textFieldTokens.labelFontSize}: var(${tokens.labelFontSize});
        ${textFieldTokens.labelFontStyle}: var(${tokens.labelFontStyle});
        ${textFieldTokens.labelFontWeight}: var(${tokens.labelFontWeight});
        ${textFieldTokens.labelLetterSpacing}: var(${tokens.labelLetterSpacing});
        ${textFieldTokens.labelLineHeight}: var(${tokens.labelLineHeight});

        ${textFieldTokens.leftHelperOffset}: var(${tokens.leftHelperOffset});
        ${textFieldTokens.leftHelperFontFamily}: var(${tokens.leftHelperFontFamily});
        ${textFieldTokens.leftHelperFontSize}: var(${tokens.leftHelperFontSize});
        ${textFieldTokens.leftHelperFontStyle}: var(${tokens.leftHelperFontStyle});
        ${textFieldTokens.leftHelperFontWeight}: var(${tokens.leftHelperFontWeight});
        ${textFieldTokens.leftHelperLetterSpacing}: var(${tokens.leftHelperLetterSpacing});
        ${textFieldTokens.leftHelperLineHeight}: var(${tokens.leftHelperLineHeight});

        ${textFieldTokens.labelInnerPadding}: var(${tokens.labelInnerPadding});
        ${textFieldTokens.contentLabelInnerPadding}: var(${tokens.contentLabelInnerPadding});

        ${textFieldTokens.chipGap}: var(${tokens.chipGap});
        ${textFieldTokens.chipBorderRadius}: var(${tokens.chipBorderRadius});
        ${textFieldTokens.chipWidth}: var(${tokens.chipWidth});
        ${textFieldTokens.chipHeight}: var(${tokens.chipHeight});
        ${textFieldTokens.chipPaddingRight}: var(${tokens.chipPaddingRight});
        ${textFieldTokens.chipPaddingLeft}: var(${tokens.chipPaddingLeft});
        ${textFieldTokens.chipClearContentMarginLeft}: var(${tokens.chipClearContentMarginLeft});
        ${textFieldTokens.chipClearContentMarginRight}: var(${tokens.chipClearContentMarginRight});
        ${textFieldTokens.chipCloseIconSize}: var(${tokens.chipCloseIconSize});
        ${textFieldTokens.chipFontFamily}: var(${tokens.chipFontFamily});
        ${textFieldTokens.chipFontSize}: var(${tokens.chipFontSize});
        ${textFieldTokens.chipFontStyle}: var(${tokens.chipFontStyle});
        ${textFieldTokens.chipFontWeight}: var(${tokens.chipFontWeight});
        ${textFieldTokens.chipLetterSpacing}: var(${tokens.chipLetterSpacing});
        ${textFieldTokens.chipLineHeight}: var(${tokens.chipLineHeight});
    }
`;
