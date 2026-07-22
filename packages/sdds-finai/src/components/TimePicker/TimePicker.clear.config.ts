import { css, timePickerTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyS,
    bodyXS,
    shadowDownHardM,
    shadowDownSoftS,
    surfaceAccent,
    surfaceNegative,
    surfaceSolidCard,
    surfaceSolidCardBrightness,
    surfaceTransparentCard,
    surfaceTransparentNegative,
    surfaceTransparentPositive,
    surfaceTransparentPrimary,
    surfaceTransparentSecondary,
    surfaceTransparentTertiary,
    textAccent,
    textNegative,
    textPositive,
    textPrimary,
    textSecondary,
    textSecondaryHover,
    textTertiary,
} from '@salutejs/sdds-themes/tokens/sdds_finai';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
        hintView: 'default',
        hintSize: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.background}: ${surfaceTransparentCard};
                ${tokens.backgroundError}: ${surfaceTransparentNegative};
                ${tokens.backgroundSuccess}: ${surfaceTransparentPositive};

                ${tokens.borderColor}: transparent;
                ${tokens.borderColorHover}: transparent;
                ${tokens.borderColorFocus}: transparent;
                ${tokens.borderColorError}: transparent;
                ${tokens.borderColorSuccess}: transparent;

                ${tokens.labelColor}: ${textSecondary};

                ${tokens.textFieldColor}: ${textPrimary};
                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldCaretColor}: ${textAccent};

                ${tokens.indicatorColor}: ${surfaceNegative};

                ${tokens.timePickerShadow}: ${shadowDownSoftS};

                ${tokens.textFieldBackgroundColor}: transparent;
                ${tokens.textFieldBackgroundColorFocus}: transparent;
                ${tokens.textFieldBorderColor}: transparent;
                ${tokens.textFieldBorderColorHover}: transparent;
                ${tokens.textFieldBorderColorFocus}: transparent;
                ${tokens.textFieldBackgroundErrorColor}: transparent;
                ${tokens.textFieldBackgroundErrorColorFocus}: transparent;
                ${tokens.textFieldBorderColorError}: transparent;
                ${tokens.textFieldBorderColorErrorHover}: transparent;
                ${tokens.textFieldBorderColorErrorFocus}: transparent;
                ${tokens.textFieldBackgroundSuccessColor}: transparent;
                ${tokens.textFieldBackgroundSuccessColorFocus}: transparent;
                ${tokens.textFieldBorderColorSuccess}: transparent;
                ${tokens.textFieldBackgroundEditedColor}: transparent;
                ${tokens.textFieldBackgroundEditedColorHover}: transparent;
                ${tokens.textFieldBackgroundEditedColorFocus}: transparent;
                ${tokens.textFieldBorderColorEdited}: transparent;
                ${tokens.textFieldBorderColorEditedHover}: transparent;
                ${tokens.textFieldBorderColorEditedFocus}: transparent;

                ${tokens.textFieldDividerColor}: ${surfaceTransparentTertiary};
                ${tokens.textFieldDividerColorHover}: ${textSecondary};
                ${tokens.textFieldDividerColorFocus}: ${surfaceAccent};
                ${tokens.textFieldDividerColorError}: ${textNegative};
                ${tokens.textFieldDividerColorSuccess}: ${textPositive};
                ${tokens.textFieldDividerColorEdited}: ${textAccent};

                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldContentRightSlotColor}: ${textSecondary};
                ${tokens.textFieldContentRightSlotColorHover}: ${textSecondaryHover};

                ${tokens.textFieldTextBeforeColor}: ${textTertiary};
                ${tokens.textFieldTextAfterColor}: ${textTertiary};

                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};

                ${tokens.timePickerBackground}: ${surfaceSolidCard};
                ${tokens.itemBackgroundHover}: ${surfaceTransparentSecondary};
                ${tokens.itemBackgroundActive}: ${surfaceTransparentSecondary};
                ${tokens.itemFocusColor}: ${surfaceAccent};

                ${tokens.scrollbarColor}: ${surfaceTransparentTertiary};
                ${tokens.scrollbarTrackColor}: ${surfaceTransparentPrimary};

                ${tokens.leftHelperColor}: ${textSecondary};
                ${tokens.leftHelperColorError}: ${textNegative};
                ${tokens.leftHelperColorSuccess}: ${textPositive};
                ${tokens.leftHelperColorEdited}: ${textSecondary};

                ${tokens.hintIconColor}: ${textSecondary};
            `,
        },
        size: {
            s: css`
                ${tokens.width}: 20rem;
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.textFieldBorderWidth}: 0.125rem;

                ${tokens.leftContentMargin}: 0 0 0 0.75rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.25rem;
                ${tokens.labelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.contentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${tokens.labelFontFamily}: ${bodyS.fontFamily};
                ${tokens.labelFontStyle}: ${bodyS.fontStyle};
                ${tokens.labelFontSize}: ${bodyS.fontSize};
                ${tokens.labelFontWeight}: ${bodyS.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyS.lineHeight};

                ${tokens.indicatorSize}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.3125rem auto auto -0.6875rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.25rem -0.625rem auto auto;

                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldBorderRadius}: 0.5rem;
                ${tokens.textFieldPadding}: 0.6875rem 0;
                ${tokens.textFieldFontFamily}: ${bodyS.fontFamily};
                ${tokens.textFieldFontStyle}: ${bodyS.fontStyle};
                ${tokens.textFieldFontSize}: ${bodyS.fontSize};
                ${tokens.textFieldFontWeight}: ${bodyS.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyS.lineHeight};

                ${tokens.textFieldLeftContentMargin}: -0.1875rem 0.25rem -0.1875rem 0;
                ${tokens.textFieldRightContentMargin}: -0.1875rem 0 -0.1875rem 0.75rem;
                ${tokens.textFieldRightContentWithHintMargin}: -0.1875rem -0.438rem -0.1875rem 0.75rem;

                ${tokens.textFieldContentRightWrapperGap}: 0.375rem;
                ${tokens.textFieldContentRightWrapperMargin}: -0.438rem -0.438rem -0.438rem 0;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.timePickerBorderRadius}: 0.625rem;
                ${tokens.timePickerWidth}: 12rem;
                ${tokens.timePickerPadding}: 0.125rem;

                ${tokens.columnHeight}: 26.25rem;

                ${tokens.itemFontFamily}: ${bodyS.fontFamily};
                ${tokens.itemFontSize}: ${bodyS.fontSize};
                ${tokens.itemFontStyle}: ${bodyS.fontStyle};
                ${tokens.itemFontWeight}: ${bodyS.fontWeight};
                ${tokens.itemLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.itemLineHeight}: ${bodyS.lineHeight};

                ${tokens.itemHeight}: 2.5rem;
                ${tokens.itemBorderRadius}: 0.5rem;
                ${tokens.itemPadding}: 0rem;

                ${tokens.labelInnerFontFamily}: ${bodyXS.fontFamily};
                ${tokens.labelInnerFontSize}: ${bodyXS.fontSize};
                ${tokens.labelInnerFontStyle}: ${bodyXS.fontStyle};
                ${tokens.labelInnerFontWeight}: ${bodyXS.fontWeight};
                ${tokens.labelInnerLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.labelInnerLineHeight}: ${bodyXS.lineHeight};

                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: 0.062rem -2.813rem auto auto;

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.leftHelperFontFamily}: ${bodyXS.fontFamily};
                ${tokens.leftHelperFontStyle}: ${bodyXS.fontStyle};
                ${tokens.leftHelperFontSize}: ${bodyXS.fontSize};
                ${tokens.leftHelperFontWeight}: ${bodyXS.fontWeight};
                ${tokens.leftHelperLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.leftHelperLineHeight}: ${bodyXS.lineHeight};

                ${tokens.scrollbarWidth}: 0.125rem;
                ${tokens.scrollbarMargin}: 0.25rem;
            `,
            xs: css`
                ${tokens.width}: 20rem;
                ${tokens.borderRadius}: 0.5rem;
                ${tokens.textFieldBorderWidth}: 0.125rem;

                ${tokens.leftContentMargin}: 0 0 0 0.5rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.25rem;
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
                ${tokens.indicatorOuterPlacementRight}: 0.125rem -0.6875rem auto auto;

                ${tokens.textFieldHeight}: 2rem;
                ${tokens.textFieldBorderRadius}: 0.375rem;
                ${tokens.textFieldPadding}: 0.5625rem 0;
                ${tokens.textFieldFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFieldFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFieldFontSize}: ${bodyXS.fontSize};
                ${tokens.textFieldFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyXS.lineHeight};

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.25rem -0.0625rem 0;
                ${tokens.textFieldRightContentMargin}: -0.0625rem 0 -0.0625rem 0.75rem;
                ${tokens.textFieldRightContentWithHintMargin}: -0.0625rem -0.688rem -0.0625rem 0.75rem;

                ${tokens.textFieldContentRightWrapperGap}: 0.25rem;
                ${tokens.textFieldContentRightWrapperMargin}: -0.688rem -0.688rem -0.688rem 0;

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
                ${tokens.hintMargin}: -0.75rem -0.625rem -0.75rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: -0.188rem -2.1875rem auto auto;

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                ${tokens.leftHelperFontFamily}: ${bodyXS.fontFamily};
                ${tokens.leftHelperFontStyle}: ${bodyXS.fontStyle};
                ${tokens.leftHelperFontSize}: ${bodyXS.fontSize};
                ${tokens.leftHelperFontWeight}: ${bodyXS.fontWeight};
                ${tokens.leftHelperLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.leftHelperLineHeight}: ${bodyXS.lineHeight};

                ${tokens.scrollbarWidth}: 0.125rem;
                ${tokens.scrollbarMargin}: 0.25rem;
            `,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 1;
                ${tokens.textFieldColor}: ${textSecondary};
                ${tokens.textFieldBackgroundColor}: ${surfaceTransparentSecondary};
                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldContentRightSlotColor}: ${textSecondary};
                ${tokens.textFieldContentRightSlotColorHover}: ${textSecondary};
                ${tokens.textFieldBorderColor}: transparent;
                ${tokens.borderColor}: transparent;
            `,
        },
        hintView: {
            default: css`
                ${tokens.hintTooltipBackgroundColor}: ${surfaceSolidCardBrightness};
                ${tokens.hintTooltipBoxShadow}: ${shadowDownHardM};
                ${tokens.hintTooltipColor}: ${textPrimary};
                ${tokens.hintTooltipArrowBackground}: ${surfaceSolidCardBrightness};
            `,
        },
        hintSize: {
            m: css`
                ${tokens.hintTooltipPaddingTop}: 0.6875rem;
                ${tokens.hintTooltipPaddingRight}: 0.875rem;
                ${tokens.hintTooltipPaddingBottom}: 0.6875rem;
                ${tokens.hintTooltipPaddingLeft}: 0.875rem;

                ${tokens.hintTooltipMinHeight}: 2.5rem;
                ${tokens.hintTooltipBorderRadius}: 0.625rem;

                ${tokens.hintTooltipTextFontFamily}: ${bodyS.fontFamily};
                ${tokens.hintTooltipTextFontSize}: ${bodyS.fontSize};
                ${tokens.hintTooltipTextFontStyle}: ${bodyS.fontStyle};
                ${tokens.hintTooltipTextFontWeight}: ${bodyS.fontWeight};
                ${tokens.hintTooltipTextFontLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.hintTooltipTextFontLineHeight}: ${bodyS.lineHeight};

                ${tokens.hintTooltipContentLeftMargin}: 0.375rem;

                ${tokens.hintTooltipArrowMaskWidth}: 1.25rem;
                ${tokens.hintTooltipArrowMaskHeight}: 1.25rem;
                ${tokens.hintTooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMC4xNywxMS44M2wyMCwwYy01LjUyLDAgLTEwLDMuNTkgLTEwLDhjMCwtNC40MSAtNC40OCwtOCAtMTAsLTh6IiBmaWxsPSIjMTcxNzE3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJUYWlsIi8+Cjwvc3ZnPg==");
                ${tokens.hintTooltipArrowHeight}: 0.5rem;
                ${tokens.hintTooltipArrowEdgeMargin}: 0.625rem;
            `,
            s: css`
                ${tokens.hintTooltipPaddingTop}: 0.5rem;
                ${tokens.hintTooltipPaddingRight}: 0.75rem;
                ${tokens.hintTooltipPaddingBottom}: 0.5rem;
                ${tokens.hintTooltipPaddingLeft}: 0.75rem;

                ${tokens.hintTooltipMinHeight}: 2rem;
                ${tokens.hintTooltipBorderRadius}: 0.5rem;

                ${tokens.hintTooltipTextFontFamily}: ${bodyXS.fontFamily};
                ${tokens.hintTooltipTextFontSize}: ${bodyXS.fontSize};
                ${tokens.hintTooltipTextFontStyle}: ${bodyXS.fontStyle};
                ${tokens.hintTooltipTextFontWeight}: ${bodyXS.fontWeight};
                ${tokens.hintTooltipTextFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.hintTooltipTextFontLineHeight}: ${bodyXS.lineHeight};

                ${tokens.hintTooltipContentLeftMargin}: 0.25rem;

                ${tokens.hintTooltipArrowMaskWidth}: 1rem;
                ${tokens.hintTooltipArrowMaskHeight}: 1rem;
                ${tokens.hintTooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMCw5Ljg1bDE2LDBjLTQuNDEsMCAtOCwyLjY5IC04LDZjMCwtMy4zMSAtMy41OSwtNiAtOCwtNnoiIGZpbGw9IiMxNzE3MTciIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IlRhaWwiLz4KPC9zdmc+");
                ${tokens.hintTooltipArrowHeight}: 0.375rem;
                ${tokens.hintTooltipArrowEdgeMargin}: 0.5625rem;
            `,
        },
        readonly: {
            true: css`
                ${tokens.backgroundReadOnly}: transparent;
                ${tokens.labelColorReadOnly}: ${textSecondary};
                ${tokens.leftHelperColorReadOnly}: ${textSecondary};

                ${tokens.textFieldColorReadOnly}: ${textPrimary};
                ${tokens.textFieldBackgroundColor}: ${surfaceTransparentSecondary};
                ${tokens.textFieldBackgroundColorReadOnly}: ${surfaceTransparentSecondary};
                ${tokens.textFieldDividerColorReadOnly}: ${surfaceTransparentPrimary};
                ${tokens.textFieldBorderColorReadOnly}: transparent;
                ${tokens.textFieldPlaceholderColorReadOnly}: ${textSecondary};
                ${tokens.textFieldContentSlotRightOpacityReadOnly}: 0.4;
                ${tokens.textFieldContentRightSlotColor}: ${textSecondary};
                ${tokens.textFieldContentRightSlotColorHover}: ${textSecondary};
            `,
        },
    },
};
