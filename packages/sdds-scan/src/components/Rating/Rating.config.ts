import {
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    bodyXS,
    textPrimary,
    textSecondary,
    textTertiary,
} from '@salutejs/sdds-themes/tokens/sdds_scan';
import { css, ratingTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'l',
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
                ${tokens.iconColor}: #F3A912;
                ${tokens.outlineIconColor}: ${textTertiary};
            `,
        },
        size: {
            m: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: ${bodyM.fontFamily};
                ${tokens.fontSize}: ${bodyM.fontSize};
                ${tokens.fontStyle}: ${bodyM.fontStyle};
                ${tokens.fontWeight}: ${bodyMBold.fontWeight};
                ${tokens.letterSpacing}: ${bodyM.letterSpacing};
                ${tokens.lineHeight}: ${bodyM.lineHeight};

                ${tokens.helperTextFontFamily}: ${bodyXS.fontFamily};
                ${tokens.helperTextFontSize}: ${bodyXS.fontSize};
                ${tokens.helperTextFontStyle}: ${bodyXS.fontStyle};
                ${tokens.helperTextFontWeight}: ${bodyXS.fontWeight};
                ${tokens.helperTextLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.helperTextLineHeight}: ${bodyXS.lineHeight};

                ${tokens.contentGap}: 0.5rem;
                ${tokens.singleIconContentGap}: 0.25rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconSize}: 1.25rem;
            `,
            s: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: ${bodyS.fontFamily};
                ${tokens.fontSize}: ${bodyS.fontSize};
                ${tokens.fontStyle}: ${bodyS.fontStyle};
                ${tokens.fontWeight}: ${bodySBold.fontWeight};
                ${tokens.letterSpacing}: ${bodyS.letterSpacing};
                ${tokens.lineHeight}: ${bodyS.lineHeight};

                ${tokens.helperTextFontFamily}: ${bodyXS.fontFamily};
                ${tokens.helperTextFontSize}: ${bodyXS.fontSize};
                ${tokens.helperTextFontStyle}: ${bodyXS.fontStyle};
                ${tokens.helperTextFontWeight}: ${bodyXS.fontWeight};
                ${tokens.helperTextLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.helperTextLineHeight}: ${bodyXS.lineHeight};

                ${tokens.contentGap}: 0.5rem;
                ${tokens.singleIconContentGap}: 0.25rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconSize}: 1rem;
            `,
        },
    },
};
