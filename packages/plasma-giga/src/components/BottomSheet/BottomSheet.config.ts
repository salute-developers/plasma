import { css, bottomSheetTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    outlineTransparentPrimary,
    overlayBlur,
    overlaySoft,
    surfaceSolidCard,
    surfaceSolidTertiary,
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryHover,
    textPrimary,
    textSecondary,
    textLBold,
} from '@salutejs/plasma-themes/tokens/plasma_giga';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${bottomSheetTokens.overlayColor}: ${overlaySoft};
                ${bottomSheetTokens.overlayWithBlurColor}: ${overlayBlur};
                ${bottomSheetTokens.contentBackgroundColor}: ${surfaceSolidCard};
                ${bottomSheetTokens.handleBackgroundColor}: ${surfaceSolidTertiary};

                ${bottomSheetTokens.titleColor}: ${textPrimary};
                ${bottomSheetTokens.titleFontFamily}: ${textLBold.fontFamily};
                ${bottomSheetTokens.titleFontSize}: ${textLBold.fontSize};
                ${bottomSheetTokens.titleFontStyle}: ${textLBold.fontStyle};
                ${bottomSheetTokens.titleFontWeight}: ${textLBold.fontWeight};
                ${bottomSheetTokens.titleFontLetterSpacing}: ${textLBold.letterSpacing};
                ${bottomSheetTokens.titleFontLineHeight}: ${textLBold.lineHeight};

                ${bottomSheetTokens.closeIconColor}: ${textPrimary};
                ${bottomSheetTokens.closeIconBackgroundColor}: ${surfaceTransparentSecondary};
                ${bottomSheetTokens.closeIconBackgroundColorHover}: ${surfaceTransparentSecondaryHover};
                ${bottomSheetTokens.closeIconColorOnImage}: ${textSecondary};
                ${bottomSheetTokens.closeIconBackgroundColorOnImage}: transparent;

                ${bottomSheetTokens.dividerColor}: ${outlineTransparentPrimary};
            `,
        },
        size: {
            m: css`
                ${bottomSheetTokens.maxHeight}: 90dvh;
                ${bottomSheetTokens.collapsedHeight}: 66%;

                ${bottomSheetTokens.borderRadius}: 2.25rem 2.25rem 0 0;
                ${bottomSheetTokens.contentPaddingHorizontal}: 1.5rem;
                ${bottomSheetTokens.contentPaddingTop}: 1.5rem;
                ${bottomSheetTokens.contentPaddingBottom}: 2.5rem;
                ${bottomSheetTokens.headerPadding}: 0 0 0.5rem;
                ${bottomSheetTokens.footerPaddingTop}: 1rem;

                ${bottomSheetTokens.imageBorderRadius}: 2.25rem;
                ${bottomSheetTokens.imageHeight}: 13.875rem;

                ${bottomSheetTokens.closeIconSize}: 2.5rem;
                ${bottomSheetTokens.closeIconRadius}: 50%;
                ${bottomSheetTokens.closeIconOnImageOffset}: 1.5rem;

                ${bottomSheetTokens.handleGapTop}: 0.375rem;
                ${bottomSheetTokens.handleGapBottom}: 0.875rem;
                ${bottomSheetTokens.handleWidth}: 3rem;
                ${bottomSheetTokens.handleHeight}: 0.25rem;
                ${bottomSheetTokens.handleBorderRadius}: 0.625rem;

                ${bottomSheetTokens.dividerWidth}: 0.0625rem;
            `,
        },
    },
};
