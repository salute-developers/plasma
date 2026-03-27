import {
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    textPrimary,
    textSecondary,
    textTertiary,
    textWarning,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, ratingTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${tokens.color}: ${textPrimary};
                ${tokens.helperTextColor}: ${textSecondary};
                ${tokens.iconColor}: ${textPrimary};
                ${tokens.outlineIconColor}: ${textPrimary};
            `,
            accent: css`
                ${tokens.color}: ${textPrimary};
                ${tokens.helperTextColor}: ${textSecondary};
                // TODO: change with token data-yellow, when it will be added to theme
                ${tokens.iconColor}: ${textWarning};
                ${tokens.outlineIconColor}: ${textTertiary};
            `,
        },
        size: {
            s: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: ${bodyS.fontFamily};
                ${tokens.fontSize}: ${bodyS.fontSize};
                ${tokens.fontStyle}: ${bodyS.fontStyle};
                ${tokens.fontWeight}: ${bodySBold.fontWeight};
                ${tokens.letterSpacing}: ${bodyS.letterSpacing};
                ${tokens.lineHeight}: ${bodyS.lineHeight};

                ${tokens.helperTextFontFamily}: ${bodyS.fontFamily};
                ${tokens.helperTextFontSize}: ${bodyS.fontSize};
                ${tokens.helperTextFontStyle}: ${bodyS.fontStyle};
                ${tokens.helperTextFontWeight}: ${bodyS.fontWeight};
                ${tokens.helperTextLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.helperTextLineHeight}: ${bodyS.lineHeight};

                ${tokens.contentGap}: 0.5rem;
                ${tokens.singleIconContentGap}: 0.25rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconSize}: 1rem;
            `,
            h4: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: ${bodyM.fontFamily};
                ${tokens.fontSize}: ${bodyM.fontSize};
                ${tokens.fontStyle}: ${bodyM.fontStyle};
                ${tokens.fontWeight}: ${bodyMBold.fontWeight};
                ${tokens.letterSpacing}: ${bodyM.letterSpacing};
                ${tokens.lineHeight}: ${bodyM.lineHeight};

                ${tokens.helperTextFontFamily}: ${bodyS.fontFamily};
                ${tokens.helperTextFontSize}: ${bodyS.fontSize};
                ${tokens.helperTextFontStyle}: ${bodyS.fontStyle};
                ${tokens.helperTextFontWeight}: ${bodyS.fontWeight};
                ${tokens.helperTextLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.helperTextLineHeight}: ${bodyS.lineHeight};

                ${tokens.contentGap}: 0.625rem;
                ${tokens.singleIconContentGap}: 0.25rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconMarginBottom}: 0.125rem;
                ${tokens.iconSizeLarge}: 1.5rem;
                ${tokens.iconSizeMedium}: 1.25rem;
                ${tokens.iconSizeSmall}: 1.25rem;

                ${tokens.singleIconMarginBottom}: 0.125rem;
                ${tokens.singleIconSizeLarge}: 1.5rem;
                ${tokens.singleIconSizeMedium}: 1.25rem;
                ${tokens.singleIconSizeSmall}: 1.25rem;
            `,
        },
    },
};
