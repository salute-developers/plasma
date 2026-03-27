import {
    bodyS,
    bodyXS,
    outlineClear,
    outlineSolidSecondary,
    shadowDownSoftS,
    surfaceAccent,
    surfaceClear,
    surfaceNegative,
    surfaceSolidCard,
    surfaceSolidSecondary,
    surfaceTransparentCard,
    surfaceTransparentCardActive,
    surfaceTransparentCardHover,
    surfaceTransparentNegative,
    surfaceTransparentNegativeActive,
    surfaceTransparentPositive,
    surfaceTransparentPositiveActive,
    surfaceTransparentPrimary,
    surfaceTransparentSecondary,
    surfaceTransparentTertiary,
    textAccent,
    textPrimary,
    textSecondary,
    textTertiary,
} from '@salutejs/sdds-themes/tokens/sdds_insol';
import { timePickerTokens as tokens, css } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.background}: ${surfaceClear};
                ${tokens.backgroundError}: ${surfaceTransparentNegative};
                ${tokens.backgroundSuccess}: ${surfaceTransparentPositive};

                ${tokens.labelColor}: ${textPrimary};

                ${tokens.textFieldColor}: ${textPrimary};
                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};
                ${tokens.textFieldCaretColor}: ${textAccent};

                ${tokens.indicatorColor}: ${surfaceNegative};

                ${tokens.timePickerShadow}: ${shadowDownSoftS};

                ${tokens.textFieldBackgroundColor}: ${surfaceTransparentCard};
                ${tokens.textFieldBackgroundColorHover}: ${surfaceTransparentCardHover};
                ${tokens.textFieldBackgroundColorFocus}: ${surfaceTransparentCardActive};
                ${tokens.textFieldBackgroundErrorColor}: ${surfaceTransparentNegative};
                ${tokens.textFieldBackgroundErrorColorFocus}: ${surfaceTransparentNegativeActive};
                ${tokens.textFieldBackgroundSuccessColor}: ${surfaceTransparentPositive};
                ${tokens.textFieldBackgroundSuccessColorFocus}: ${surfaceTransparentPositiveActive};
                ${tokens.textFieldBoxShadow}: ${shadowDownSoftS};
                ${tokens.borderColor}: ${outlineClear};
                ${tokens.borderColorHover}: ${outlineClear};
                ${tokens.borderColorFocus}: ${outlineSolidSecondary};

                ${tokens.textFieldTextBeforeColor}: ${textTertiary};
                ${tokens.textFieldTextAfterColor}: ${textTertiary};

                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};

                ${tokens.timePickerBackground}: ${surfaceSolidCard};
                ${tokens.itemBackgroundHover}: ${surfaceTransparentSecondary};
                ${tokens.itemBackgroundActive}: ${surfaceTransparentSecondary};
                ${tokens.itemFocusColor}: ${surfaceAccent};

                ${tokens.scrollbarColor}: ${surfaceTransparentTertiary};
                ${tokens.scrollbarTrackColor}: ${surfaceTransparentPrimary};
            `,
        },
        size: {
            l: css`
                ${tokens.width}: 20rem;
                ${tokens.borderRadius}: 0.875rem;
                ${tokens.dropdownMarginTop}: 0.375rem;

                ${tokens.leftContentMargin}: 0 0 0 1rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.75rem;
                ${tokens.labelInnerPadding}: 0.5625rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.5625rem 0 0.5625rem 0;

                ${tokens.labelFontFamily}: ${bodyS.fontFamily};
                ${tokens.labelFontStyle}: ${bodyS.fontStyle};
                ${tokens.labelFontSize}: ${bodyS.fontSize};
                ${tokens.labelFontWeight}: ${bodyS.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyS.lineHeight};

                ${tokens.indicatorSize}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.5rem auto auto -0.75rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.25rem -0.625rem auto auto;

                ${tokens.textFieldHeight}: 3.5rem;
                ${tokens.textFieldBorderRadius}: 0.875rem;
                ${tokens.textFieldPadding}: 1.0625rem 1.125rem 1.0625rem 1.125rem;
                ${tokens.textFieldFontFamily}: ${bodyS.fontFamily};
                ${tokens.textFieldFontStyle}: ${bodyS.fontStyle};
                ${tokens.textFieldFontSize}: ${bodyS.fontSize};
                ${tokens.textFieldFontWeight}: ${bodyS.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyS.lineHeight};
                ${tokens.textFieldBorderWidth}: 0.0625rem;

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.625rem -0.0625rem 0rem;
                ${tokens.textFieldRightContentMargin}: -0.0625rem 0rem -0.0625rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.timePickerBorderRadius}: 0.875rem;
                ${tokens.timePickerWidth}: 15rem;
                ${tokens.timePickerPadding}: 0.125rem;

                ${tokens.columnHeight}: 36.25rem;

                ${tokens.itemFontFamily}: ${bodyS.fontFamily};
                ${tokens.itemFontSize}: ${bodyS.fontSize};
                ${tokens.itemFontStyle}: ${bodyS.fontStyle};
                ${tokens.itemFontWeight}: ${bodyS.fontWeight};
                ${tokens.itemLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.itemLineHeight}: ${bodyS.lineHeight};

                ${tokens.itemHeight}: 3.5rem;
                ${tokens.itemBorderRadius}: 0.75rem;
                ${tokens.itemPadding}: 0rem;

                ${tokens.labelInnerFontFamily}: ${bodyXS.fontFamily};
                ${tokens.labelInnerFontSize}: ${bodyXS.fontSize};
                ${tokens.labelInnerFontStyle}: ${bodyXS.fontStyle};
                ${tokens.labelInnerFontWeight}: ${bodyXS.fontWeight};
                ${tokens.labelInnerLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.labelInnerLineHeight}: ${bodyXS.lineHeight};

                ${tokens.scrollbarWidth}: 0.125rem;
                ${tokens.scrollbarMargin}: 0.5rem;
            `,
            m: css`
                ${tokens.width}: 20rem;
                ${tokens.borderRadius}: 0.75rem;
                ${tokens.dropdownMarginTop}: 0.25rem;

                ${tokens.leftContentMargin}: 0 0 0 0.875rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.625rem;
                ${tokens.labelInnerPadding}: 0.375rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.375rem 0 0.375rem 0;

                ${tokens.labelFontFamily}: ${bodyXS.fontFamily};
                ${tokens.labelFontStyle}: ${bodyXS.fontStyle};
                ${tokens.labelFontSize}: ${bodyXS.fontSize};
                ${tokens.labelFontWeight}: ${bodyXS.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyXS.lineHeight};

                ${tokens.indicatorSize}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.25rem auto auto -0.75rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.125rem -0.625rem auto auto;

                ${tokens.textFieldHeight}: 3rem;
                ${tokens.textFieldBorderRadius}: 0.75rem;
                ${tokens.textFieldPadding}: 0.875rem 1rem 0.875rem 1rem;
                ${tokens.textFieldFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFieldFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFieldFontSize}: ${bodyXS.fontSize};
                ${tokens.textFieldFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyXS.lineHeight};
                ${tokens.textFieldBorderWidth}: 0.0625rem;

                ${tokens.textFieldLeftContentMargin}: -0.125rem 0.625rem -0.125rem 0rem;
                ${tokens.textFieldRightContentMargin}: -0.125rem 0rem -0.125rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.timePickerBorderRadius}: 0.75rem;
                ${tokens.timePickerWidth}: 13.75rem;
                ${tokens.timePickerPadding}: 0.125rem;

                ${tokens.columnHeight}: 31.25rem;

                ${tokens.itemFontFamily}: ${bodyXS.fontFamily};
                ${tokens.itemFontSize}: ${bodyXS.fontSize};
                ${tokens.itemFontStyle}: ${bodyXS.fontStyle};
                ${tokens.itemFontWeight}: ${bodyXS.fontWeight};
                ${tokens.itemLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.itemLineHeight}: ${bodyXS.lineHeight};

                ${tokens.itemHeight}: 3rem;
                ${tokens.itemBorderRadius}: 0.625rem;
                ${tokens.itemPadding}: 0rem;

                ${tokens.labelInnerFontFamily}: ${bodyXS.fontFamily};
                ${tokens.labelInnerFontSize}: ${bodyXS.fontSize};
                ${tokens.labelInnerFontStyle}: ${bodyXS.fontStyle};
                ${tokens.labelInnerFontWeight}: ${bodyXS.fontWeight};
                ${tokens.labelInnerLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.labelInnerLineHeight}: ${bodyXS.lineHeight};

                ${tokens.scrollbarWidth}: 0.125rem;
                ${tokens.scrollbarMargin}: 0.375rem;
            `,
            s: css`
                ${tokens.width}: 20rem;
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.dropdownMarginTop}: 0.25rem;

                ${tokens.leftContentMargin}: 0 0 0 0.75rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.5rem;
                ${tokens.labelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.contentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${tokens.labelFontFamily}: ${bodyXS.fontFamily};
                ${tokens.labelFontStyle}: ${bodyXS.fontStyle};
                ${tokens.labelFontSize}: ${bodyXS.fontSize};
                ${tokens.labelFontWeight}: ${bodyXS.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyXS.lineHeight};
                ${tokens.textFieldBorderWidth}: 0.0625rem;

                ${tokens.indicatorSize}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.25rem auto auto -0.6875rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.125rem -0.625rem auto auto;

                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldBorderRadius}: 0.625rem;
                ${tokens.textFieldPadding}: 0.813rem 0.75rem 0.813rem 0.75rem;
                ${tokens.textFieldFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFieldFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFieldFontSize}: ${bodyXS.fontSize};
                ${tokens.textFieldFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyXS.lineHeight};

                ${tokens.textFieldLeftContentMargin}: -0.1875rem 0.5rem -0.1875rem 0rem;
                ${tokens.textFieldRightContentMargin}: -0.1875rem 0rem -0.1875rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.timePickerBorderRadius}: 0.625rem;
                ${tokens.timePickerWidth}: 12rem;
                ${tokens.timePickerPadding}: 0.125rem;

                ${tokens.columnHeight}: 26.25rem;

                ${tokens.itemFontFamily}: ${bodyXS.fontFamily};
                ${tokens.itemFontSize}: ${bodyXS.fontSize};
                ${tokens.itemFontStyle}: ${bodyXS.fontStyle};
                ${tokens.itemFontWeight}: ${bodyXS.fontWeight};
                ${tokens.itemLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.itemLineHeight}: ${bodyXS.lineHeight};

                ${tokens.itemHeight}: 2.5rem;
                ${tokens.itemBorderRadius}: 0.5rem;
                ${tokens.itemPadding}: 0rem;

                ${tokens.labelInnerFontFamily}: ${bodyXS.fontFamily};
                ${tokens.labelInnerFontSize}: ${bodyXS.fontSize};
                ${tokens.labelInnerFontStyle}: ${bodyXS.fontStyle};
                ${tokens.labelInnerFontWeight}: ${bodyXS.fontWeight};
                ${tokens.labelInnerLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.labelInnerLineHeight}: ${bodyXS.lineHeight};

                ${tokens.scrollbarWidth}: 0.125rem;
                ${tokens.scrollbarMargin}: 0.25rem;
            `,
            xs: css`
                ${tokens.width}: 20rem;
                ${tokens.borderRadius}: 0.5rem;
                ${tokens.dropdownMarginTop}: 0.125rem;

                ${tokens.leftContentMargin}: 0 0 0 0.5rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.375rem;
                ${tokens.labelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.contentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${tokens.labelFontFamily}: ${bodyXS.fontFamily};
                ${tokens.labelFontStyle}: ${bodyXS.fontStyle};
                ${tokens.labelFontSize}: ${bodyXS.fontSize};
                ${tokens.labelFontWeight}: ${bodyXS.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyXS.lineHeight};

                ${tokens.indicatorSize}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.25rem auto auto -0.625rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.125rem -0.625rem auto auto;

                ${tokens.textFieldHeight}: 2rem;
                ${tokens.textFieldBorderRadius}: 0.5rem;
                ${tokens.textFieldPadding}: 0.5rem 0.625rem 0.5rem 0.625rem;
                ${tokens.textFieldFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFieldFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFieldFontSize}: ${bodyXS.fontSize};
                ${tokens.textFieldFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyXS.lineHeight};
                ${tokens.textFieldBorderWidth}: 0.0625rem;

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.375rem -0.0625rem 0rem;
                ${tokens.textFieldRightContentMargin}: -0.0625rem 0rem -0.0625rem 0.625rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.timePickerBorderRadius}: 0.5rem;
                ${tokens.timePickerWidth}: 10rem;
                ${tokens.timePickerPadding}: 0.125rem;

                ${tokens.columnHeight}: 21.25rem;

                ${tokens.itemFontFamily}: ${bodyXS.fontFamily};
                ${tokens.itemFontSize}: ${bodyXS.fontSize};
                ${tokens.itemFontStyle}: ${bodyXS.fontStyle};
                ${tokens.itemFontWeight}: ${bodyXS.fontWeight};
                ${tokens.itemLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.itemLineHeight}: ${bodyXS.lineHeight};

                ${tokens.itemHeight}: 2rem;
                ${tokens.itemBorderRadius}: 0.375rem;
                ${tokens.itemPadding}: 0rem;

                ${tokens.labelInnerFontFamily}: ${bodyXS.fontFamily};
                ${tokens.labelInnerFontSize}: ${bodyXS.fontSize};
                ${tokens.labelInnerFontStyle}: ${bodyXS.fontStyle};
                ${tokens.labelInnerFontWeight}: ${bodyXS.fontWeight};
                ${tokens.labelInnerLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.labelInnerLineHeight}: ${bodyXS.lineHeight};

                ${tokens.scrollbarWidth}: 0.125rem;
                ${tokens.scrollbarMargin}: 0.25rem;
            `,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 0.4;
            `,
        },
        readonly: {
            true: css`
                ${tokens.backgroundReadOnly}: ${surfaceSolidSecondary};

                ${tokens.textFieldColorReadOnly}: ${textSecondary};
                ${tokens.textFieldBackgroundColorReadOnly}: ${surfaceSolidSecondary};
                ${tokens.textFieldPlaceholderColorReadOnly}: ${textSecondary};
            `,
        },
    },
};
