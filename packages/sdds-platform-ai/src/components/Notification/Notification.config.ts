import { css, notificationTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyS,
    bodySBold,
    outlineInfo,
    outlineNegative,
    shadowDownSoftM,
    surfaceAccentGradient,
    surfaceSolidSecondary,
    surfaceTransparentCard,
    textPrimary,
    textSecondary,
    textTertiary,
    textWarning,
} from '@salutejs/sdds-themes/tokens/sdds_platform_ai';

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
                ${notificationTokens.background}: ${surfaceSolidSecondary};
                ${notificationTokens.borderRadius}: 2rem;
                ${notificationTokens.borderWidth}: 0.5rem;
                ${notificationTokens.borderColor}: ${surfaceTransparentCard};
                ${notificationTokens.boxShadow}: ${shadowDownSoftM};

                ${notificationTokens.closeIconColor}: ${textTertiary};
                ${notificationTokens.closeIconColorOnHover}: ${textPrimary};
            `,
            negative: css`
                ${notificationTokens.titleColor}: ${textPrimary};
                ${notificationTokens.contentLeftIconColor}: ${textPrimary};
                ${notificationTokens.contentColor}: ${textSecondary};
                ${notificationTokens.background}: ${surfaceTransparentCard};
                ${notificationTokens.borderRadius}: 2rem;
                ${notificationTokens.borderWidth}: 0.5rem;
                ${notificationTokens.borderColor}: ${outlineNegative};
                ${notificationTokens.boxShadow}: ${shadowDownSoftM};

                ${notificationTokens.closeIconColor}: ${textTertiary};
                ${notificationTokens.closeIconColorOnHover}: ${textPrimary};
            `,
            positive: css`
                ${notificationTokens.titleColor}: ${textPrimary};
                ${notificationTokens.contentLeftIconColor}: ${textPrimary};
                ${notificationTokens.contentColor}: ${textSecondary};
                ${notificationTokens.background}: ${surfaceTransparentCard};
                ${notificationTokens.borderRadius}: 2rem;
                ${notificationTokens.borderWidth}: 0.5rem;
                ${notificationTokens.borderColor}: ${surfaceAccentGradient};
                ${notificationTokens.boxShadow}: ${shadowDownSoftM};

                ${notificationTokens.closeIconColor}: ${textTertiary};
                ${notificationTokens.closeIconColorOnHover}: ${textPrimary};
            `,
            warning: css`
                ${notificationTokens.titleColor}: ${textWarning};
                ${notificationTokens.contentLeftIconColor}: ${textWarning};
                ${notificationTokens.contentColor}: ${textSecondary};
                ${notificationTokens.background}: ${surfaceTransparentCard};
                ${notificationTokens.borderRadius}: 0.75rem;

                ${notificationTokens.closeIconColor}: ${textTertiary};
                ${notificationTokens.closeIconColorOnHover}: ${textPrimary};
            `,
            info: css`
                ${notificationTokens.titleColor}: ${textPrimary};
                ${notificationTokens.contentLeftIconColor}: ${textPrimary};
                ${notificationTokens.contentColor}: ${textSecondary};
                ${notificationTokens.background}: ${surfaceTransparentCard};
                ${notificationTokens.borderRadius}: 2rem;
                ${notificationTokens.borderWidth}: 0.5rem;
                ${notificationTokens.borderColor}: ${outlineInfo};
                ${notificationTokens.boxShadow}: ${shadowDownSoftM};

                ${notificationTokens.closeIconColor}: ${textTertiary};
                ${notificationTokens.closeIconColorOnHover}: ${textPrimary};
            `,
        },
        size: {
            xs: css`
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

                ${notificationTokens.closeIconTop}: 0.5rem;
                ${notificationTokens.closeIconRight}: 0.5rem;

                ${notificationTokens.padding}: 0.25rem 0.75rem 0.75rem 0.75rem;
                ${notificationTokens.textboxPaddingTopWithTopIcon}: 0rem;

                ${notificationTokens.contentPaddingTop}: 0.25rem;
                ${notificationTokens.contentPaddingRight}: 0.25rem;
                ${notificationTokens.contentPaddingBottom}: 0.25rem;
                ${notificationTokens.contentPaddingLeft}: 0.25rem;

                ${notificationTokens.buttonsMarginLeft}: 1.75rem;
            `,
        },
        layout: {
            horizontal: css`
                ${notificationTokens.width}: 25rem;
                ${notificationTokens.horizontalLayoutPadding}: 1rem 0.5rem 1rem 0.875rem;
            `,
            vertical: css`
                ${notificationTokens.width}: 15rem;
                ${notificationTokens.padding}: 0.25rem 0.75rem 0.75rem 0.75rem;
            `,
        },
        closeIconType: {
            default: css`
                ${notificationTokens.closeIconButtonSize}: 1.5rem;
                ${notificationTokens.closeIconSize}: 1.5rem;
            `,
        },
    },
};
