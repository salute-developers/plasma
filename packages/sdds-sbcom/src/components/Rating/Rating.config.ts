import {
    bodyL,
    bodyLBold,
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    bodyXS,
    bodyXSBold,
    bodyXXS,
    bodyXXSBold,
    dsplS as ratingDsplS,
    dsplSBold as ratingDsplSBold,
    h1 as ratingH1,
    h1Bold as ratingH1Bold,
    h2 as ratingH2,
    h2Bold as ratingH2Bold,
    h3 as ratingH3,
    h3Bold as ratingH3Bold,
    h4 as ratingH4,
    h4Bold as ratingH4Bold,
    textPrimary,
    textSecondary,
    textTertiary,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';
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
            l: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: ${bodyL.fontFamily};
                ${tokens.fontSize}: ${bodyL.fontSize};
                ${tokens.fontStyle}: ${bodyL.fontStyle};
                ${tokens.fontWeight}: ${bodyLBold.fontWeight};
                ${tokens.letterSpacing}: ${bodyL.letterSpacing};
                ${tokens.lineHeight}: ${bodyL.lineHeight};

                ${tokens.helperTextFontFamily}: ${bodyXS.fontFamily};
                ${tokens.helperTextFontSize}: ${bodyXS.fontSize};
                ${tokens.helperTextFontStyle}: ${bodyXS.fontStyle};
                ${tokens.helperTextFontWeight}: ${bodyXS.fontWeight};
                ${tokens.helperTextLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.helperTextLineHeight}: ${bodyXS.lineHeight};

                ${tokens.contentGap}: 0.625rem;
                ${tokens.singleIconContentGap}: 0.25rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconSize}: 1.25rem;
            `,
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
            xs: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: ${bodyXS.fontFamily};
                ${tokens.fontSize}: ${bodyXS.fontSize};
                ${tokens.fontStyle}: ${bodyXS.fontStyle};
                ${tokens.fontWeight}: ${bodyXSBold.fontWeight};
                ${tokens.letterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.lineHeight}: ${bodyXS.lineHeight};

                ${tokens.helperTextFontFamily}: ${bodyXXS.fontFamily};
                ${tokens.helperTextFontSize}: ${bodyXXS.fontSize};
                ${tokens.helperTextFontStyle}: ${bodyXXS.fontStyle};
                ${tokens.helperTextFontWeight}: ${bodyXXS.fontWeight};
                ${tokens.helperTextLetterSpacing}: ${bodyXXS.letterSpacing};
                ${tokens.helperTextLineHeight}: ${bodyXXS.lineHeight};

                ${tokens.iconMarginBottom}: 0.125rem;
                ${tokens.contentGap}: 0.375rem;
                ${tokens.singleIconContentGap}: 0.25rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.singleIconMarginBottom}: 0.125rem;
                ${tokens.iconSize}: 0.75rem;
                ${tokens.actualIconSize}: 1rem;
                ${tokens.scaleFactor}: 0.75;
            `,
            xxs: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: ${bodyXXS.fontFamily};
                ${tokens.fontSize}: ${bodyXXS.fontSize};
                ${tokens.fontStyle}: ${bodyXXS.fontStyle};
                ${tokens.fontWeight}: ${bodyXXSBold.fontWeight};
                ${tokens.letterSpacing}: ${bodyXXS.letterSpacing};
                ${tokens.lineHeight}: ${bodyXXS.lineHeight};

                ${tokens.helperTextFontFamily}: ${bodyXXS.fontFamily};
                ${tokens.helperTextFontSize}: ${bodyXXS.fontSize};
                ${tokens.helperTextFontStyle}: ${bodyXXS.fontStyle};
                ${tokens.helperTextFontWeight}: ${bodyXXS.fontWeight};
                ${tokens.helperTextLetterSpacing}: ${bodyXXS.letterSpacing};
                ${tokens.helperTextLineHeight}: ${bodyXXS.lineHeight};

                ${tokens.contentGap}: 0.375rem;
                ${tokens.singleIconContentGap}: 0.25rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconSize}: 0.75rem;
                ${tokens.actualIconSize}: 1rem;
                ${tokens.scaleFactor}: 0.75;
            `,
            h1: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: ${ratingH1.fontFamily};
                ${tokens.fontSize}: ${ratingH1.fontSize};
                ${tokens.fontStyle}: ${ratingH1.fontStyle};
                ${tokens.fontWeight}: ${ratingH1Bold.fontWeight};
                ${tokens.letterSpacing}: ${ratingH1.letterSpacing};
                ${tokens.lineHeight}: ${ratingH1.lineHeight};

                ${tokens.helperTextFontFamily}: ${bodyM.fontFamily};
                ${tokens.helperTextFontSize}: ${bodyM.fontSize};
                ${tokens.helperTextFontStyle}: ${bodyM.fontStyle};
                ${tokens.helperTextFontWeight}: ${bodyM.fontWeight};
                ${tokens.helperTextLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.helperTextLineHeight}: ${bodyM.lineHeight};

                ${tokens.contentGap}: 1rem;
                ${tokens.singleIconContentGap}: 0.5rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconMarginBottom}: 0.25rem;
                ${tokens.iconSizeLarge}: 3rem;
                ${tokens.iconSizeMedium}: 3rem;
                ${tokens.iconSizeSmall}: 2.25rem;

                ${tokens.singleIconMarginBottom}: 0.25rem;
                ${tokens.singleIconSizeLarge}: 3rem;
                ${tokens.singleIconSizeMedium}: 3rem;
                ${tokens.singleIconSizeSmall}: 2.25rem;
            `,
            h2: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: ${ratingH2.fontFamily};
                ${tokens.fontSize}: ${ratingH2.fontSize};
                ${tokens.fontStyle}: ${ratingH2.fontStyle};
                ${tokens.fontWeight}: ${ratingH2Bold.fontWeight};
                ${tokens.letterSpacing}: ${ratingH2.letterSpacing};
                ${tokens.lineHeight}: ${ratingH2.lineHeight};

                ${tokens.helperTextFontFamily}: ${bodyS.fontFamily};
                ${tokens.helperTextFontSize}: ${bodyS.fontSize};
                ${tokens.helperTextFontStyle}: ${bodyS.fontStyle};
                ${tokens.helperTextFontWeight}: ${bodyS.fontWeight};
                ${tokens.helperTextLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.helperTextLineHeight}: ${bodyS.lineHeight};

                ${tokens.contentGap}: 0.875rem;
                ${tokens.singleIconContentGap}: 0.5rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconMarginBottom}: 0.25rem;
                ${tokens.iconSizeLarge}: 2rem;
                ${tokens.iconSizeMedium}: 1.75rem;
                ${tokens.iconSizeSmall}: 1.5rem;

                ${tokens.singleIconMarginBottom}: 0.25rem;
                ${tokens.singleIconSizeLarge}: 2rem;
                ${tokens.singleIconSizeMedium}: 1.75rem;
                ${tokens.singleIconSizeSmall}: 1.5rem;
            `,
            h3: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: ${ratingH3.fontFamily};
                ${tokens.fontSize}: ${ratingH3.fontSize};
                ${tokens.fontStyle}: ${ratingH3.fontStyle};
                ${tokens.fontWeight}: ${ratingH3Bold.fontWeight};
                ${tokens.letterSpacing}: ${ratingH3.letterSpacing};
                ${tokens.lineHeight}: ${ratingH3.lineHeight};

                ${tokens.helperTextFontFamily}: ${bodyXS.fontFamily};
                ${tokens.helperTextFontSize}: ${bodyXS.fontSize};
                ${tokens.helperTextFontStyle}: ${bodyXS.fontStyle};
                ${tokens.helperTextFontWeight}: ${bodyXS.fontWeight};
                ${tokens.helperTextLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.helperTextLineHeight}: ${bodyXS.lineHeight};

                ${tokens.contentGap}: 0.75rem;
                ${tokens.singleIconContentGap}: 0.375rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconMarginBottom}: 0.125rem;
                ${tokens.iconSizeLarge}: 1.75rem;
                ${tokens.iconSizeMedium}: 1.5rem;
                ${tokens.iconSizeSmall}: 1.25rem;

                ${tokens.singleIconMarginBottom}: 0.125rem;
                ${tokens.singleIconSizeLarge}: 1.75rem;
                ${tokens.singleIconSizeMedium}: 1.5rem;
                ${tokens.singleIconSizeSmall}: 1.25rem;
            `,
            h4: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: ${ratingH4.fontFamily};
                ${tokens.fontSize}: ${ratingH4.fontSize};
                ${tokens.fontStyle}: ${ratingH4.fontStyle};
                ${tokens.fontWeight}: ${ratingH4Bold.fontWeight};
                ${tokens.letterSpacing}: ${ratingH4.letterSpacing};
                ${tokens.lineHeight}: ${ratingH4.lineHeight};

                ${tokens.helperTextFontFamily}: ${bodyXS.fontFamily};
                ${tokens.helperTextFontSize}: ${bodyXS.fontSize};
                ${tokens.helperTextFontStyle}: ${bodyXS.fontStyle};
                ${tokens.helperTextFontWeight}: ${bodyXS.fontWeight};
                ${tokens.helperTextLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.helperTextLineHeight}: ${bodyXS.lineHeight};

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
            h5: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: ${ratingH3.fontFamily};
                ${tokens.fontSize}: ${ratingH3.fontSize};
                ${tokens.fontStyle}: ${ratingH3.fontStyle};
                ${tokens.fontWeight}: ${ratingH3Bold.fontWeight};
                ${tokens.letterSpacing}: ${ratingH3.letterSpacing};
                ${tokens.lineHeight}: ${ratingH3.lineHeight};

                ${tokens.helperTextFontFamily}: ${bodyXS.fontFamily};
                ${tokens.helperTextFontSize}: ${bodyXS.fontSize};
                ${tokens.helperTextFontStyle}: ${bodyXS.fontStyle};
                ${tokens.helperTextFontWeight}: ${bodyXS.fontWeight};
                ${tokens.helperTextLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.helperTextLineHeight}: ${bodyXS.lineHeight};

                ${tokens.contentGap}: 0.625rem;
                ${tokens.singleIconContentGap}: 0.25rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconMarginBottom}: 0.125rem;
                ${tokens.iconSizeLarge}: 1.25rem;
                ${tokens.iconSizeMedium}: 1.25rem;
                ${tokens.iconSizeSmall}: 1rem;

                ${tokens.singleIconMarginBottom}: 0.125rem;
                ${tokens.singleIconSizeLarge}: 1.25rem;
                ${tokens.singleIconSizeMedium}: 1.25rem;
                ${tokens.singleIconSizeSmall}: 1rem;
            `,
            h6: css`
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

                ${tokens.contentGap}: 0.625rem;
                ${tokens.singleIconContentGap}: 0.25rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconMarginBottom}: 0.125rem;
                ${tokens.iconSizeLarge}: 1.25rem;
                ${tokens.iconSizeMedium}: 1.25rem;
                ${tokens.iconSizeSmall}: 1rem;

                ${tokens.singleIconMarginBottom}: 0.125rem;
                ${tokens.singleIconSizeLarge}: 1.25rem;
                ${tokens.singleIconSizeMedium}: 1.25rem;
                ${tokens.singleIconSizeSmall}: 1rem;
            `,
            displayL: css`
                ${tokens.gap}: 0.375rem;

                ${tokens.fontFamily}: ${ratingH1.fontFamily};
                ${tokens.fontSize}: ${ratingH1.fontSize};
                ${tokens.fontStyle}: ${ratingH1.fontStyle};
                ${tokens.fontWeight}: ${ratingH1Bold.fontWeight};
                ${tokens.letterSpacing}: ${ratingH1.letterSpacing};
                ${tokens.lineHeight}: ${ratingH1.lineHeight};

                ${tokens.helperTextFontFamily}: ${ratingH3.fontFamily};
                ${tokens.helperTextFontSize}: ${ratingH3.fontSize};
                ${tokens.helperTextFontStyle}: ${ratingH3.fontStyle};
                ${tokens.helperTextFontWeight}: ${ratingH3.fontWeight};
                ${tokens.helperTextLetterSpacing}: ${ratingH3.letterSpacing};
                ${tokens.helperTextLineHeight}: ${ratingH3.lineHeight};

                ${tokens.contentGap}: 1.5rem;
                ${tokens.singleIconContentGap}: 0.75rem;
                ${tokens.wrapperGap}: 0.625rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconSizeLarge}: 4rem;
                ${tokens.iconSizeMedium}: 3rem;
                ${tokens.iconSizeSmall}: 2.25rem;

                ${tokens.singleIconMarginBottom}: 0.5rem;
                ${tokens.singleIconSizeLarge}: 7.5rem;
                ${tokens.singleIconSizeMedium}: 7rem;
                ${tokens.singleIconSizeSmall}: 5.5rem;
            `,
            displayM: css`
                ${tokens.gap}: 0.375rem;

                ${tokens.fontFamily}: ${ratingH2.fontFamily};
                ${tokens.fontSize}: ${ratingH2.fontSize};
                ${tokens.fontStyle}: ${ratingH2.fontStyle};
                ${tokens.fontWeight}: ${ratingH2Bold.fontWeight};
                ${tokens.letterSpacing}: ${ratingH2.letterSpacing};
                ${tokens.lineHeight}: ${ratingH2.lineHeight};

                ${tokens.helperTextFontFamily}: ${bodyL.fontFamily};
                ${tokens.helperTextFontSize}: ${bodyL.fontSize};
                ${tokens.helperTextFontStyle}: ${bodyL.fontStyle};
                ${tokens.helperTextFontWeight}: ${bodyL.fontWeight};
                ${tokens.helperTextLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.helperTextLineHeight}: ${bodyL.lineHeight};

                ${tokens.contentGap}: 1.5rem;
                ${tokens.singleIconContentGap}: 0.75rem;
                ${tokens.wrapperGap}: 0.5rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconSizeLarge}: 3rem;
                ${tokens.iconSizeMedium}: 2.25rem;
                ${tokens.iconSizeSmall}: 1.75rem;

                ${tokens.singleIconMarginBottom}: 0.5rem;
                ${tokens.singleIconSizeLarge}: 5.25rem;
                ${tokens.singleIconSizeMedium}: 4.5rem;
                ${tokens.singleIconSizeSmall}: 4rem;
            `,
            displayS: css`
                ${tokens.gap}: 0.375rem;

                ${tokens.fontFamily}: ${ratingDsplS.fontFamily};
                ${tokens.fontSize}: ${ratingDsplS.fontSize};
                ${tokens.fontStyle}: ${ratingDsplS.fontStyle};
                ${tokens.fontWeight}: ${ratingDsplSBold.fontWeight};
                ${tokens.letterSpacing}: ${ratingDsplS.letterSpacing};
                ${tokens.lineHeight}: ${ratingDsplS.lineHeight};

                ${tokens.helperTextFontFamily}: ${bodyL.fontFamily};
                ${tokens.helperTextFontSize}: ${bodyL.fontSize};
                ${tokens.helperTextFontStyle}: ${bodyL.fontStyle};
                ${tokens.helperTextFontWeight}: ${bodyL.fontWeight};
                ${tokens.helperTextLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.helperTextLineHeight}: ${bodyL.lineHeight};

                ${tokens.contentGap}: 1.5rem;
                ${tokens.singleIconContentGap}: 0.75rem;
                ${tokens.wrapperGap}: 0.375rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconSizeLarge}: 2rem;
                ${tokens.iconSizeMedium}: 1.5rem;
                ${tokens.iconSizeSmall}: 1.25rem;

                ${tokens.singleIconMarginBottom}: 0.313rem;
                ${tokens.singleIconSizeLarge}: 4rem;
                ${tokens.singleIconSizeMedium}: 3.5rem;
                ${tokens.singleIconSizeSmall}: 2.75rem;
            `,
        },
    },
};
