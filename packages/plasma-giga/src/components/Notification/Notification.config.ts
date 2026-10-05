import { css, notificationClasses, notificationTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyS,
    bodySBold,
    bodyXS,
    h5,
    h5Bold,
    outlineTransparentPrimary,
    surfaceTransparentCard,
    surfaceTransparentPrimary,
    textInfo,
    textNegative,
    textPositive,
    textPrimary,
    textSecondary,
    textTertiary,
    textWarning,
    textSBold,
} from '@salutejs/plasma-themes/tokens/plasma_giga';

export const config = {
    defaults: {
        view: 'default',
        closeIconType: 'default',
    },
    variations: {
        view: {
            default: css`
                ${notificationTokens.titleColor}: ${textPrimary};
                ${notificationTokens.contentLeftIconColor}: ${textPrimary};
                ${notificationTokens.contentColor}: ${textSecondary};
                ${notificationTokens.background}: ${surfaceTransparentCard};

                ${notificationTokens.closeIconColor}: ${textTertiary};
                ${notificationTokens.closeIconColorOnHover}: ${textPrimary};
            `,
            negative: css`
                ${notificationTokens.titleColor}: ${textNegative};
                ${notificationTokens.contentLeftIconColor}: ${textNegative};
                ${notificationTokens.contentColor}: ${textSecondary};
                ${notificationTokens.background}: ${surfaceTransparentCard};

                ${notificationTokens.closeIconColor}: ${textTertiary};
                ${notificationTokens.closeIconColorOnHover}: ${textPrimary};
            `,
            positive: css`
                ${notificationTokens.titleColor}: ${textPositive};
                ${notificationTokens.contentLeftIconColor}: ${textPositive};
                ${notificationTokens.contentColor}: ${textSecondary};
                ${notificationTokens.background}: ${surfaceTransparentCard};

                ${notificationTokens.closeIconColor}: ${textTertiary};
                ${notificationTokens.closeIconColorOnHover}: ${textPrimary};
            `,
            warning: css`
                ${notificationTokens.titleColor}: ${textWarning};
                ${notificationTokens.contentLeftIconColor}: ${textWarning};
                ${notificationTokens.contentColor}: ${textSecondary};
                ${notificationTokens.background}: ${surfaceTransparentCard};

                ${notificationTokens.closeIconColor}: ${textTertiary};
                ${notificationTokens.closeIconColorOnHover}: ${textPrimary};
            `,
            info: css`
                ${notificationTokens.titleColor}: ${textInfo};
                ${notificationTokens.contentLeftIconColor}: ${textInfo};
                ${notificationTokens.contentColor}: ${textSecondary};
                ${notificationTokens.background}: ${surfaceTransparentCard};

                ${notificationTokens.closeIconColor}: ${textTertiary};
                ${notificationTokens.closeIconColorOnHover}: ${textPrimary};
            `,
        },
        layout: {
            horizontal: css`
                ${notificationTokens.width}: 25rem;
                ${notificationTokens.horizontalLayoutPadding}: 1rem 0.5rem 1rem 0.875rem;
            `,
            vertical: css`
                ${notificationTokens.width}: 15rem;
                ${notificationTokens.padding}: 0.375rem;

                .${notificationClasses.wrapper}.${notificationClasses.withImage} {
                    ${notificationTokens.imageContentPadding}: 1rem;
                    ${notificationTokens.borderRadius}: 1.5rem;
                    ${notificationTokens.borderWidth}: 1px;
                    ${notificationTokens.borderColor}: ${outlineTransparentPrimary};
                    ${notificationTokens.background}: ${surfaceTransparentPrimary};
                    ${notificationTokens.contentColor}: ${textPrimary};

                    ${notificationTokens.imageWidth}: 4.5rem;
                    ${notificationTokens.imageHeight}: 4.5rem;
                    ${notificationTokens.imageFullWidthHeight}: 12.5rem;
                    ${notificationTokens.imageMarginBottom}: 1rem;

                    ${notificationTokens.textboxPaddingTopWithTopIcon}: 0rem;
                    ${notificationTokens.textboxPaddingBottom}: 0rem;
                    ${notificationTokens.buttonsMarginTop}: 1rem;
                    ${notificationTokens.closeIconTop}: 1rem;
                    ${notificationTokens.closeIconRight}: 1rem;

                    ${notificationTokens.contentFontFamily}: ${bodyXS.fontFamily};
                    ${notificationTokens.contentFontSize}: ${bodyXS.fontSize};
                    ${notificationTokens.contentFontStyle}: ${bodyXS.fontStyle};
                    ${notificationTokens.contentFontWeight}: ${bodyXS.fontWeight};
                    ${notificationTokens.contentFontLetterSpacing}: ${bodyXS.letterSpacing};
                    ${notificationTokens.contentFontLineHeight}: ${bodyXS.lineHeight};

                    ${notificationTokens.titleFontFamily}: ${textSBold.fontFamily};
                    ${notificationTokens.titleFontSize}: ${textSBold.fontSize};
                    ${notificationTokens.titleFontStyle}: ${textSBold.fontStyle};
                    ${notificationTokens.titleFontWeight}: ${textSBold.fontWeight};
                    ${notificationTokens.titleFontLetterSpacing}: ${textSBold.letterSpacing};
                    ${notificationTokens.titleFontLineHeight}: ${textSBold.lineHeight};
                }
            `,
        },
        closeIconType: {
            default: css`
                ${notificationTokens.closeIconButtonSize}: 1.5rem;
                ${notificationTokens.closeIconSize}: 1.5rem;
            `,
        },
        size: {
            s: css`
                ${notificationTokens.borderRadius}: 0.75rem;

                ${notificationTokens.contentPaddingTopWithoutIcon}: 0.25rem;
                ${notificationTokens.horizontalLayoutRightPaddingWithoutCloseIcon}: 1rem;

                ${notificationTokens.textboxPaddingTop}: 0.1875rem;
                ${notificationTokens.textboxPaddingRight}: 0.125rem;
                ${notificationTokens.textboxPaddingBottom}: 0.375rem;
                ${notificationTokens.textboxPaddingLeft}: 0.125rem;
                ${notificationTokens.textboxPaddingRightWithCloseIcon}: 1.625rem;
                ${notificationTokens.textboxGap}: 0.25rem;

                ${notificationTokens.buttonsMarginTop}: 0.375rem;

                ${notificationTokens.contentLeftIconSize}: 1.5rem;
                ${notificationTokens.contentLeftIconMargin}: 0.375rem;
                ${notificationTokens.contentTopIconMargin}: 0.5rem;

                ${notificationTokens.contentFontFamily}: ${bodyS.fontFamily};
                ${notificationTokens.contentFontSize}: ${bodyS.fontSize};
                ${notificationTokens.contentFontStyle}: ${bodyS.fontStyle};
                ${notificationTokens.contentFontWeight}: ${bodyS.fontWeight};
                ${notificationTokens.contentFontLetterSpacing}: ${bodyS.letterSpacing};
                ${notificationTokens.contentFontLineHeight}: ${bodyS.lineHeight};

                ${notificationTokens.titleFontFamily}: ${h5.fontFamily};
                ${notificationTokens.titleFontSize}: ${h5.fontSize};
                ${notificationTokens.titleFontStyle}: ${h5.fontStyle};
                ${notificationTokens.titleFontWeight}: ${h5Bold.fontWeight};
                ${notificationTokens.titleFontLetterSpacing}: ${h5.letterSpacing};
                ${notificationTokens.titleFontLineHeight}: ${h5.lineHeight};

                ${notificationTokens.horizontalLayoutGap}: 0.5rem;
                ${notificationTokens.horizontalLayoutLeftIconMargin}: 0.75rem;
                ${notificationTokens.paddingOneLineTextbox}: 0.8125rem 0.5rem 0.8125rem 0.875rem;

                ${notificationTokens.closeIconTop}: 0.5rem;
                ${notificationTokens.closeIconRight}: 0.5rem;

                ${notificationTokens.padding}: 0.375rem;
                ${notificationTokens.textboxPaddingTopWithTopIcon}: 0rem;

                ${notificationTokens.contentPaddingTop}: 0.125rem;
                ${notificationTokens.contentPaddingRight}: 0.25rem;
                ${notificationTokens.contentPaddingBottom}: 0rem;
                ${notificationTokens.contentPaddingLeft}: 0.25rem;

                ${notificationTokens.buttonsMarginLeft}: 0rem;
            `,
            xs: css`
                ${notificationTokens.borderRadius}: 0.75rem;

                ${notificationTokens.contentPaddingTopWithoutIcon}: 0.25rem;
                ${notificationTokens.horizontalLayoutRightPaddingWithoutCloseIcon}: 1rem;

                ${notificationTokens.textboxPaddingTop}: 0.1875rem;
                ${notificationTokens.textboxPaddingRight}: 0.125rem;
                ${notificationTokens.textboxPaddingBottom}: 0.375rem;
                ${notificationTokens.textboxPaddingLeft}: 0.125rem;
                ${notificationTokens.textboxPaddingRightWithCloseIcon}: 1.625rem;
                ${notificationTokens.textboxGap}: 0.25rem;

                ${notificationTokens.buttonsMarginTop}: 0.375rem;

                ${notificationTokens.contentLeftIconSize}: 1.5rem;
                ${notificationTokens.contentLeftIconMargin}: 0.375rem;
                ${notificationTokens.contentTopIconMargin}: 0.5rem;

                ${notificationTokens.contentFontFamily}: ${bodyS.fontFamily};
                ${notificationTokens.contentFontSize}: ${bodyS.fontSize};
                ${notificationTokens.contentFontStyle}: ${bodyS.fontStyle};
                ${notificationTokens.contentFontWeight}: ${bodyS.fontWeight};
                ${notificationTokens.contentFontLetterSpacing}: ${bodyS.letterSpacing};
                ${notificationTokens.contentFontLineHeight}: ${bodyS.lineHeight};

                ${notificationTokens.titleFontFamily}: ${bodyS.fontFamily};
                ${notificationTokens.titleFontSize}: ${bodyS.fontSize};
                ${notificationTokens.titleFontStyle}: ${bodyS.fontStyle};
                ${notificationTokens.titleFontWeight}: ${bodySBold.fontWeight};
                ${notificationTokens.titleFontLetterSpacing}: ${bodyS.letterSpacing};
                ${notificationTokens.titleFontLineHeight}: ${bodyS.lineHeight};

                ${notificationTokens.horizontalLayoutGap}: 0.5rem;
                ${notificationTokens.horizontalLayoutLeftIconMargin}: 0.75rem;
                ${notificationTokens.paddingOneLineTextbox}: 0.8125rem 0.5rem 0.8125rem 0.875rem;

                ${notificationTokens.closeIconTop}: 0.5rem;
                ${notificationTokens.closeIconRight}: 0.5rem;

                ${notificationTokens.padding}: 0.375rem;
                ${notificationTokens.textboxPaddingTopWithTopIcon}: 0rem;

                ${notificationTokens.contentPaddingTop}: 0.125rem;
                ${notificationTokens.contentPaddingRight}: 0.25rem;
                ${notificationTokens.contentPaddingBottom}: 0rem;
                ${notificationTokens.contentPaddingLeft}: 0.25rem;

                ${notificationTokens.buttonsMarginLeft}: 0rem;
            `,
            // deprecated
            xxs: css`
                ${notificationTokens.borderRadius}: 0.75rem;

                ${notificationTokens.contentPaddingTopWithoutIcon}: 0.25rem;
                ${notificationTokens.horizontalLayoutRightPaddingWithoutCloseIcon}: 1rem;

                ${notificationTokens.textboxPaddingTop}: 0.1875rem;
                ${notificationTokens.textboxPaddingRight}: 0.125rem;
                ${notificationTokens.textboxPaddingBottom}: 0.375rem;
                ${notificationTokens.textboxPaddingLeft}: 0.125rem;
                ${notificationTokens.textboxPaddingRightWithCloseIcon}: 1.625rem;
                ${notificationTokens.textboxGap}: 0.25rem;

                ${notificationTokens.buttonsMarginTop}: 0.375rem;

                ${notificationTokens.contentLeftIconSize}: 1.5rem;
                ${notificationTokens.contentLeftIconMargin}: 0.375rem;
                ${notificationTokens.contentTopIconMargin}: 0.5rem;

                ${notificationTokens.contentFontFamily}: ${bodyS.fontFamily};
                ${notificationTokens.contentFontSize}: ${bodyS.fontSize};
                ${notificationTokens.contentFontStyle}: ${bodyS.fontStyle};
                ${notificationTokens.contentFontWeight}: ${bodyS.fontWeight};
                ${notificationTokens.contentFontLetterSpacing}: ${bodyS.letterSpacing};
                ${notificationTokens.contentFontLineHeight}: ${bodyS.lineHeight};

                ${notificationTokens.titleFontFamily}: ${bodyS.fontFamily};
                ${notificationTokens.titleFontSize}: ${bodyS.fontSize};
                ${notificationTokens.titleFontStyle}: ${bodyS.fontStyle};
                ${notificationTokens.titleFontWeight}: ${bodySBold.fontWeight};
                ${notificationTokens.titleFontLetterSpacing}: ${bodyS.letterSpacing};
                ${notificationTokens.titleFontLineHeight}: ${bodyS.lineHeight};

                ${notificationTokens.horizontalLayoutGap}: 0.375rem;
                ${notificationTokens.horizontalLayoutLeftIconMargin}: 0.75rem;
                ${notificationTokens.paddingOneLineTextbox}: 0.8125rem 0.5rem 0.8125rem 0.875rem;

                ${notificationTokens.closeIconTop}: 0.8125rem;
                ${notificationTokens.closeIconRight}: 1rem;

                ${notificationTokens.padding}: 0.5625rem 1rem 1rem 1rem;
                ${notificationTokens.textboxPaddingTopWithTopIcon}: 0.1875rem;

                ${notificationTokens.contentPaddingTop}: 0.25rem;
                ${notificationTokens.contentPaddingRight}: 0rem;
                ${notificationTokens.contentPaddingBottom}: 0rem;
                ${notificationTokens.contentPaddingLeft}: 0rem;

                ${notificationTokens.buttonsMarginLeft}: 2rem;
            `,
        },
    },
};
