import {
    bodyL,
    bodyM,
    bodyS,
    bodyXS,
    bodyXXS,
    surfaceAccent,
    surfaceSolidCardBrightness,
    surfaceTransparentPrimary,
    surfaceTransparentPrimaryActive,
    surfaceTransparentPrimaryHover,
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryActive,
    surfaceTransparentSecondaryHover,
    surfaceTransparentTertiary,
    textAccent,
    textPrimary,
    textSecondary,
} from '@salutejs/plasma-themes/tokens/plasma_b2c';
import { css, comboboxOldTokens as comboboxTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        size: {
            xs: css`
                ${comboboxTokens.width}: 100%;
                ${comboboxTokens.height}: auto;
                ${comboboxTokens.borderRadius}: 0.5rem;
                ${comboboxTokens.paddingTop}: 0.125rem;
                ${comboboxTokens.paddingRight}: 0.125rem;
                ${comboboxTokens.paddingBottom}: 0.125rem;
                ${comboboxTokens.paddingLeft}: 0.125rem;

                ${comboboxTokens.dividerColor}: ${surfaceTransparentTertiary};
                ${comboboxTokens.dividerHeight}: 0.063rem;
                ${comboboxTokens.dividerMarginTop}: 0;
                ${comboboxTokens.dividerMarginRight}: 0.5rem;
                ${comboboxTokens.dividerMarginBottom}: 0;
                ${comboboxTokens.dividerMarginLeft}: 0.375rem;

                ${comboboxTokens.itemWidth}: auto;
                ${comboboxTokens.itemHeight}: 1rem;
                ${comboboxTokens.itemPaddingTop}: 0.5rem;
                ${comboboxTokens.itemPaddingRight}: 0.5rem;
                ${comboboxTokens.itemPaddingBottom}: 0.5rem;
                ${comboboxTokens.itemPaddingLeft}: 0.375rem;
                ${comboboxTokens.itemBorderRadius}: 0.375rem;
                ${comboboxTokens.itemContentLeftWidth}: 1.25rem;
                ${comboboxTokens.itemFontFamily}: ${bodyXS.fontFamily};
                ${comboboxTokens.itemFontSize}: ${bodyXS.fontSize};
                ${comboboxTokens.itemFontStyle}: ${bodyXS.fontStyle};
                ${comboboxTokens.itemFontWeightBold}: ${bodyXS.fontWeight};
                ${comboboxTokens.itemFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${comboboxTokens.itemFontLineHeight}: ${bodyXS.lineHeight};

                ${comboboxTokens.chipGap}: 0.25rem;
                ${comboboxTokens.chipBorderRadius}: 0.125rem;
                ${comboboxTokens.chipWidth}: auto;
                ${comboboxTokens.chipHeight}: 1.25rem;
                ${comboboxTokens.chipPadding}: 0 0.375rem 0 0.625rem;
                ${comboboxTokens.chipClearContentMarginLeft}: 0.25rem;
                ${comboboxTokens.chipClearContentMarginRight}: 0rem;
                ${comboboxTokens.chipCloseIconSize}: 0.75rem;
                ${comboboxTokens.chipFontFamily}: ${bodyXS.fontFamily};
                ${comboboxTokens.chipFontSize}: ${bodyXS.fontSize};
                ${comboboxTokens.chipFontStyle}: ${bodyXS.fontStyle};
                ${comboboxTokens.chipFontWeight}: ${bodyXS.fontWeight};
                ${comboboxTokens.chipLetterSpacing}: ${bodyXS.letterSpacing};
                ${comboboxTokens.chipLineHeight}: ${bodyXS.lineHeight};

                ${comboboxTokens.targetArrowRight}: 0.5rem;
                ${comboboxTokens.targetHeight}: 2rem;
                ${comboboxTokens.targetWidth}: 100%;
                ${comboboxTokens.targetRadius}: 0.5rem;
                ${comboboxTokens.targetPadding}: 0 2.5rem 0 0.75rem;
                ${comboboxTokens.targetPaddingHasChips}: 0 2.625rem 0 0.375rem;
                ${comboboxTokens.targetPaddingWithInput}: 0 2.625rem 0 0.625rem;
                ${comboboxTokens.targetInnerTop}: 0.5rem;
                ${comboboxTokens.targetLabelInnerTop}: 0.375rem;
                ${comboboxTokens.targetFontFamily}: ${bodyXS.fontFamily};
                ${comboboxTokens.targetFontSize}: ${bodyXS.fontSize};
                ${comboboxTokens.targetFontStyle}: ${bodyXS.fontStyle};
                ${comboboxTokens.targetFontWeight}: ${bodyXS.fontWeight};
                ${comboboxTokens.targetLetterSpacing}: ${bodyXS.letterSpacing};
                ${comboboxTokens.targetLineHeight}: ${bodyXS.lineHeight};
                ${comboboxTokens.targetLabelInnerFontFamily}: ${bodyXS.fontFamily};
                ${comboboxTokens.targetLabelInnerFontSize}: ${bodyXS.fontSize};
                ${comboboxTokens.targetLabelInnerFontStyle}: ${bodyXS.fontStyle};
                ${comboboxTokens.targetLabelInnerFontWeight}: ${bodyXS.fontWeight};
                ${comboboxTokens.targetLabelInnerLetterSpacing}: ${bodyXS.letterSpacing};
                ${comboboxTokens.targetLabelInnerLineHeight}: ${bodyXS.lineHeight};
            `,
            s: css`
                ${comboboxTokens.width}: 100%;
                ${comboboxTokens.height}: auto;
                ${comboboxTokens.borderRadius}: 0.625rem;
                ${comboboxTokens.paddingTop}: 0.125rem;
                ${comboboxTokens.paddingRight}: 0.125rem;
                ${comboboxTokens.paddingBottom}: 0.125rem;
                ${comboboxTokens.paddingLeft}: 0.125rem;

                ${comboboxTokens.dividerColor}: ${surfaceTransparentTertiary};
                ${comboboxTokens.dividerHeight}: 0.063rem;
                ${comboboxTokens.dividerMarginTop}: 0;
                ${comboboxTokens.dividerMarginRight}: 0.75rem;
                ${comboboxTokens.dividerMarginBottom}: 0;
                ${comboboxTokens.dividerMarginLeft}: 0.75rem;

                ${comboboxTokens.itemWidth}: auto;
                ${comboboxTokens.itemHeight}: 1.5rem;
                ${comboboxTokens.itemPaddingTop}: 0.5rem;
                ${comboboxTokens.itemPaddingRight}: 0.75rem;
                ${comboboxTokens.itemPaddingBottom}: 0.5rem;
                ${comboboxTokens.itemPaddingLeft}: 0.75rem;
                ${comboboxTokens.itemBorderRadius}: 0.5rem;
                ${comboboxTokens.itemContentLeftWidth}: 1.75rem;
                ${comboboxTokens.itemFontFamily}: ${bodyS.fontFamily};
                ${comboboxTokens.itemFontSize}: ${bodyS.fontSize};
                ${comboboxTokens.itemFontStyle}: ${bodyS.fontStyle};
                ${comboboxTokens.itemFontWeightBold}: ${bodyS.fontWeight};
                ${comboboxTokens.itemFontLetterSpacing}: ${bodyS.letterSpacing};
                ${comboboxTokens.itemFontLineHeight}: ${bodyS.lineHeight};

                ${comboboxTokens.chipGap}: 0.25rem;
                ${comboboxTokens.chipBorderRadius}: 0.25rem;
                ${comboboxTokens.chipWidth}: auto;
                ${comboboxTokens.chipHeight}: 1.75rem;
                ${comboboxTokens.chipPadding}: 0 0.5rem 0 0.75rem;
                ${comboboxTokens.chipClearContentMarginLeft}: 0.375rem;
                ${comboboxTokens.chipClearContentMarginRight}: 0rem;
                ${comboboxTokens.chipCloseIconSize}: 0.75rem;
                ${comboboxTokens.chipFontFamily}: ${bodyS.fontFamily};
                ${comboboxTokens.chipFontSize}: ${bodyS.fontSize};
                ${comboboxTokens.chipFontStyle}: ${bodyS.fontStyle};
                ${comboboxTokens.chipFontWeight}: ${bodyS.fontWeight};
                ${comboboxTokens.chipLetterSpacing}: ${bodyS.letterSpacing};
                ${comboboxTokens.chipLineHeight}: ${bodyS.lineHeight};

                ${comboboxTokens.targetArrowRight}: 0.75rem;
                ${comboboxTokens.targetHeight}: 2.5rem;
                ${comboboxTokens.targetWidth}: 100%;
                ${comboboxTokens.targetRadius}: 0.625rem;
                ${comboboxTokens.targetPadding}: 0 3rem 0 1rem;
                ${comboboxTokens.targetPaddingHasChips}: 0 3.125rem 0 0.375rem;
                ${comboboxTokens.targetPaddingWithInput}: 0 3.125rem 0 0.625rem;
                ${comboboxTokens.targetInnerTop}: 0.5rem;
                ${comboboxTokens.targetLabelInnerTop}: 0.375rem;
                ${comboboxTokens.targetFontFamily}: ${bodyS.fontFamily};
                ${comboboxTokens.targetFontSize}: ${bodyS.fontSize};
                ${comboboxTokens.targetFontStyle}: ${bodyS.fontStyle};
                ${comboboxTokens.targetFontWeight}: ${bodyS.fontWeight};
                ${comboboxTokens.targetLetterSpacing}: ${bodyS.letterSpacing};
                ${comboboxTokens.targetLineHeight}: ${bodyS.lineHeight};
                ${comboboxTokens.targetLabelInnerFontFamily}: ${bodyXXS.fontFamily};
                ${comboboxTokens.targetLabelInnerFontSize}: ${bodyXXS.fontSize};
                ${comboboxTokens.targetLabelInnerFontStyle}: ${bodyXXS.fontStyle};
                ${comboboxTokens.targetLabelInnerFontWeight}: ${bodyXXS.fontWeight};
                ${comboboxTokens.targetLabelInnerLetterSpacing}: ${bodyXXS.letterSpacing};
                ${comboboxTokens.targetLabelInnerLineHeight}: ${bodyXXS.lineHeight};
            `,
            m: css`
                ${comboboxTokens.width}: 100%;
                ${comboboxTokens.height}: auto;
                ${comboboxTokens.borderRadius}: 0.75rem;
                ${comboboxTokens.paddingTop}: 0.125rem;
                ${comboboxTokens.paddingRight}: 0.125rem;
                ${comboboxTokens.paddingBottom}: 0.125rem;
                ${comboboxTokens.paddingLeft}: 0.125rem;

                ${comboboxTokens.dividerColor}: ${surfaceTransparentTertiary};
                ${comboboxTokens.dividerHeight}: 0.063rem;
                ${comboboxTokens.dividerMarginTop}: 0;
                ${comboboxTokens.dividerMarginRight}: 0.875rem;
                ${comboboxTokens.dividerMarginBottom}: 0;
                ${comboboxTokens.dividerMarginLeft}: 0.875rem;

                ${comboboxTokens.itemWidth}: auto;
                ${comboboxTokens.itemHeight}: 1.5rem;
                ${comboboxTokens.itemPaddingTop}: 0.75rem;
                ${comboboxTokens.itemPaddingRight}: 0.875rem;
                ${comboboxTokens.itemPaddingBottom}: 0.75rem;
                ${comboboxTokens.itemPaddingLeft}: 0.875rem;
                ${comboboxTokens.itemBorderRadius}: 0.625rem;
                ${comboboxTokens.itemContentLeftWidth}: 1.75rem;
                ${comboboxTokens.itemFontFamily}: ${bodyM.fontFamily};
                ${comboboxTokens.itemFontSize}: ${bodyM.fontSize};
                ${comboboxTokens.itemFontStyle}: ${bodyM.fontStyle};
                ${comboboxTokens.itemFontWeightBold}: ${bodyM.fontWeight};
                ${comboboxTokens.itemFontLetterSpacing}: ${bodyM.letterSpacing};
                ${comboboxTokens.itemFontLineHeight}: ${bodyM.lineHeight};

                ${comboboxTokens.chipGap}: 0.25rem;
                ${comboboxTokens.chipBorderRadius}: 0.375rem;
                ${comboboxTokens.chipWidth}: auto;
                ${comboboxTokens.chipHeight}: 2.25rem;
                ${comboboxTokens.chipPadding}: 0 0.875rem 0 0.625rem;
                ${comboboxTokens.chipClearContentMarginLeft}: 0.5rem;
                ${comboboxTokens.chipClearContentMarginRight}: 0rem;
                ${comboboxTokens.chipCloseIconSize}: 1rem;
                ${comboboxTokens.chipFontFamily}: ${bodyM.fontFamily};
                ${comboboxTokens.chipFontSize}: ${bodyM.fontSize};
                ${comboboxTokens.chipFontStyle}: ${bodyM.fontStyle};
                ${comboboxTokens.chipFontWeight}: ${bodyM.fontWeight};
                ${comboboxTokens.chipLetterSpacing}: ${bodyM.letterSpacing};
                ${comboboxTokens.chipLineHeight}: ${bodyM.lineHeight};

                ${comboboxTokens.targetArrowRight}: 0.875rem;
                ${comboboxTokens.targetHeight}: 3rem;
                ${comboboxTokens.targetWidth}: 100%;
                ${comboboxTokens.targetRadius}: 0.75rem;
                ${comboboxTokens.targetPadding}: 0 3.25rem 0 1.25rem;
                ${comboboxTokens.targetPaddingHasChips}: 0 3.375rem 0 0.375rem;
                ${comboboxTokens.targetPaddingWithInput}: 0 3.375rem 0 0.625rem;
                ${comboboxTokens.targetInnerTop}: 0.5rem;
                ${comboboxTokens.targetLabelInnerTop}: 0.375rem;
                ${comboboxTokens.targetFontFamily}: ${bodyM.fontFamily};
                ${comboboxTokens.targetFontSize}: ${bodyM.fontSize};
                ${comboboxTokens.targetFontStyle}: ${bodyM.fontStyle};
                ${comboboxTokens.targetFontWeight}: ${bodyM.fontWeight};
                ${comboboxTokens.targetLetterSpacing}: ${bodyM.letterSpacing};
                ${comboboxTokens.targetLineHeight}: ${bodyM.lineHeight};
                ${comboboxTokens.targetLabelInnerFontFamily}: ${bodyXS.fontFamily};
                ${comboboxTokens.targetLabelInnerFontSize}: ${bodyXS.fontSize};
                ${comboboxTokens.targetLabelInnerFontStyle}: ${bodyXS.fontStyle};
                ${comboboxTokens.targetLabelInnerFontWeight}: ${bodyXS.fontWeight};
                ${comboboxTokens.targetLabelInnerLetterSpacing}: ${bodyXS.letterSpacing};
                ${comboboxTokens.targetLabelInnerLineHeight}: ${bodyXS.lineHeight};
            `,
            l: css`
                ${comboboxTokens.width}: 100%;
                ${comboboxTokens.height}: auto;
                ${comboboxTokens.borderRadius}: 0.875rem;
                ${comboboxTokens.paddingTop}: 0.125rem;
                ${comboboxTokens.paddingRight}: 0.125rem;
                ${comboboxTokens.paddingBottom}: 0.125rem;
                ${comboboxTokens.paddingLeft}: 0.125rem;

                ${comboboxTokens.dividerColor}: ${surfaceTransparentTertiary};
                ${comboboxTokens.dividerHeight}: 0.063rem;
                ${comboboxTokens.dividerMarginTop}: 0;
                ${comboboxTokens.dividerMarginRight}: 1rem;
                ${comboboxTokens.dividerMarginBottom}: 0;
                ${comboboxTokens.dividerMarginLeft}: 1rem;

                ${comboboxTokens.itemWidth}: auto;
                ${comboboxTokens.itemHeight}: 1.5rem;
                ${comboboxTokens.itemPaddingTop}: 1rem;
                ${comboboxTokens.itemPaddingRight}: 1rem;
                ${comboboxTokens.itemPaddingBottom}: 1rem;
                ${comboboxTokens.itemPaddingLeft}: 1rem;
                ${comboboxTokens.itemBorderRadius}: 0.75rem;
                ${comboboxTokens.itemContentLeftWidth}: 1.875rem;
                ${comboboxTokens.itemFontFamily}: ${bodyL.fontFamily};
                ${comboboxTokens.itemFontSize}: ${bodyL.fontSize};
                ${comboboxTokens.itemFontStyle}: ${bodyL.fontStyle};
                ${comboboxTokens.itemFontWeightBold}: ${bodyL.fontWeight};
                ${comboboxTokens.itemFontLetterSpacing}: ${bodyL.letterSpacing};
                ${comboboxTokens.itemFontLineHeight}: ${bodyL.lineHeight};

                ${comboboxTokens.chipGap}: 0.25rem;
                ${comboboxTokens.chipBorderRadius}: 0.5rem;
                ${comboboxTokens.chipWidth}: auto;
                ${comboboxTokens.chipHeight}: 2.75rem;
                ${comboboxTokens.chipPadding}: 0 0.75rem 0 1rem;
                ${comboboxTokens.chipClearContentMarginLeft}: 0.625rem;
                ${comboboxTokens.chipClearContentMarginRight}: 0rem;
                ${comboboxTokens.chipCloseIconSize}: 1rem;
                ${comboboxTokens.chipFontFamily}: ${bodyM.fontFamily};
                ${comboboxTokens.chipFontSize}: ${bodyM.fontSize};
                ${comboboxTokens.chipFontStyle}: ${bodyM.fontStyle};
                ${comboboxTokens.chipFontWeight}: ${bodyM.fontWeight};
                ${comboboxTokens.chipLetterSpacing}: ${bodyM.letterSpacing};
                ${comboboxTokens.chipLineHeight}: ${bodyM.lineHeight};

                ${comboboxTokens.targetArrowRight}: 1rem;
                ${comboboxTokens.targetHeight}: 3.5rem;
                ${comboboxTokens.targetWidth}: 100%;
                ${comboboxTokens.targetRadius}: 0.875rem;
                ${comboboxTokens.targetPadding}: 0 3.5rem 0 1.5rem;
                ${comboboxTokens.targetPaddingHasChips}: 0 3.625rem 0 0.375rem;
                ${comboboxTokens.targetPaddingWithInput}: 0 3.625rem 0 0.625rem;
                ${comboboxTokens.targetInnerTop}: 0.5rem;
                ${comboboxTokens.targetLabelInnerTop}: 0.375rem;
                ${comboboxTokens.targetFontFamily}: ${bodyL.fontFamily};
                ${comboboxTokens.targetFontSize}: ${bodyL.fontSize};
                ${comboboxTokens.targetFontStyle}: ${bodyL.fontStyle};
                ${comboboxTokens.targetFontWeight}: ${bodyL.fontWeight};
                ${comboboxTokens.targetLetterSpacing}: ${bodyL.letterSpacing};
                ${comboboxTokens.targetLineHeight}: ${bodyL.lineHeight};
                ${comboboxTokens.targetLabelInnerFontFamily}: ${bodyS.fontFamily};
                ${comboboxTokens.targetLabelInnerFontSize}: ${bodyS.fontSize};
                ${comboboxTokens.targetLabelInnerFontStyle}: ${bodyS.fontStyle};
                ${comboboxTokens.targetLabelInnerFontWeight}: ${bodyS.fontWeight};
                ${comboboxTokens.targetLabelInnerLetterSpacing}: ${bodyS.letterSpacing};
                ${comboboxTokens.targetLabelInnerLineHeight}: ${bodyS.lineHeight};
            `,
        },
        view: {
            default: css`
                ${comboboxTokens.targetColor}: ${textPrimary};
                ${comboboxTokens.targetLabelColor}: ${textSecondary};
                ${comboboxTokens.targetArrowColor}: ${textSecondary};
                ${comboboxTokens.targetBackgroundColor}: ${surfaceTransparentPrimary};
                ${comboboxTokens.targetBackgroundColorHover}: ${surfaceTransparentPrimaryHover};
                ${comboboxTokens.targetBackgroundColorActive}: ${surfaceTransparentPrimaryActive};
                ${comboboxTokens.targetBackgroundColorOpen}: ${surfaceTransparentSecondary};

                ${comboboxTokens.background}: ${surfaceSolidCardBrightness};
                ${comboboxTokens.boxShadow}: 0px 4px 14px -4px rgba(8, 8, 8, 0.08), 0px 1px 4px -1px rgba(0, 0, 0, 0.04); /* TODO: Забирать из токена --shadow-down-soft-s */

                ${comboboxTokens.itemBackground}: transparent;
                ${comboboxTokens.itemBackgroundHover}: ${surfaceTransparentSecondary};
                ${comboboxTokens.itemBackgroundSelectedHover}: ${surfaceTransparentSecondary};
                ${comboboxTokens.itemColor}: ${textPrimary};
                ${comboboxTokens.itemContentLeftColor}: ${textAccent};

                ${comboboxTokens.chipCloseIconColor}: ${textSecondary};
                ${comboboxTokens.chipColor}: ${textPrimary};
                ${comboboxTokens.chipBackground}: ${surfaceTransparentSecondary};
                ${comboboxTokens.chipColorHover}: ${textPrimary};
                ${comboboxTokens.chipBackgroundHover}: ${surfaceTransparentSecondaryHover};
                ${comboboxTokens.chipColorActive}: ${textPrimary};
                ${comboboxTokens.chipBackgroundActive}: ${surfaceTransparentSecondaryActive};
                ${comboboxTokens.chipBackgroundReadOnly}: ${surfaceTransparentSecondary};
                ${comboboxTokens.chipColorReadOnly}: ${textPrimary};
                ${comboboxTokens.chipBackgroundReadOnlyHover}: ${surfaceTransparentSecondary};
                ${comboboxTokens.chipColorReadOnlyHover}: ${textPrimary};
                ${comboboxTokens.chipOpacityReadonly}: 0.72;

                ${comboboxTokens.disabledOpacity}: 0.4;
                ${comboboxTokens.focusColor}: ${surfaceAccent};
            `,
        },
    },
};
