import { css, rangeTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyS,
    bodyXS,
    dataBlueLight,
    dataBlueLightActive,
    dataBlueLightHover,
    outlineAccent,
    outlineSolidPrimary,
    outlineSolidPrimaryHover,
    outlineTransparentInfo,
    outlineTransparentInfoActive,
    outlineTransparentInfoHover,
    outlineTransparentNegative,
    outlineTransparentNegativeHover,
    outlineTransparentPositive,
    outlineTransparentPositiveHover,
    surfaceAccent,
    surfaceNegative,
    surfaceSolidCardBrightness,
    surfaceTransparentCard,
    surfaceTransparentCardHover,
    surfaceTransparentNegative,
    surfaceTransparentNegativeHover,
    surfaceTransparentPositive,
    surfaceTransparentPositiveHover,
    surfaceTransparentSecondary,
    textAccent,
    textNegative,
    textPositive,
    textPrimary,
    textPrimaryActive,
    textPrimaryHover,
    textSecondary,
    textSecondaryActive,
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
                ${tokens.backgroundEdited}: ${dataBlueLight};

                ${tokens.borderColor}: ${outlineSolidPrimary};
                ${tokens.borderColorError}: ${outlineTransparentNegative};
                ${tokens.borderColorSuccess}: ${outlineTransparentPositive};
                ${tokens.borderColorEdited}: ${outlineTransparentInfo};

                ${tokens.dividerColor}: ${textSecondary};
                ${tokens.labelColor}: ${textSecondary};
                ${tokens.leftHelperColor}: ${textSecondary};
                ${tokens.leftHelperColorError}: ${textNegative};
                ${tokens.leftHelperColorSuccess}: ${textPositive};
                ${tokens.leftHelperColorEdited}: ${textSecondary};
                ${tokens.titleCaptionColor}: ${textSecondary};
                ${tokens.hintIconColor}: ${textSecondary};

                ${tokens.contentSlotColor}: ${textPrimary};
                ${tokens.contentSlotColorHover}: ${textPrimaryHover};
                ${tokens.contentSlotColorActive}: ${textPrimaryActive};

                ${tokens.embedIconButtonFocusColor}: ${surfaceAccent};
                ${tokens.contentSlotRightColor}: ${textPrimary};
                ${tokens.contentSlotRightColorHover}: ${textPrimaryHover};
                ${tokens.contentSlotRightColorActive}: ${textPrimaryActive};

                ${tokens.textFieldContentSlotColor}: ${textSecondary};
                ${tokens.textFieldContentSlotColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentSlotColorActive}: ${textSecondaryActive};

                ${tokens.textFieldContentSlotRightColor}: ${textSecondary};
                ${tokens.textFieldContentSlotRightColorHover}: ${textSecondaryHover};
                ${tokens.textFieldContentSlotRightColorActive}: ${textSecondaryActive};

                ${tokens.textFieldColor}: ${textPrimary};
                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldCaretColor}: ${textAccent};

                ${tokens.textFieldBackgroundColorHover}: ${surfaceTransparentCardHover};
                ${tokens.textFieldBackgroundColorFocus}: ${surfaceTransparentCard};
                ${tokens.textFieldBorderColorHover}: ${outlineSolidPrimaryHover};
                ${tokens.textFieldBorderColorFocus}: ${outlineAccent};
                ${tokens.textFieldBackgroundErrorColor}: ${surfaceTransparentNegative};
                ${tokens.textFieldBackgroundErrorColorHover}: ${surfaceTransparentNegativeHover};
                ${tokens.textFieldBackgroundErrorColorFocus}: ${surfaceTransparentCard};
                ${tokens.textFieldBorderColorErrorHover}: ${outlineTransparentNegativeHover};
                ${tokens.textFieldBorderColorErrorFocus}: ${outlineAccent};
                ${tokens.textFieldBackgroundSuccessColor}: ${surfaceTransparentPositive};
                ${tokens.textFieldBackgroundSuccessColorHover}: ${surfaceTransparentPositiveHover};
                ${tokens.textFieldBackgroundSuccessColorFocus}: ${surfaceTransparentCard};
                ${tokens.textFieldBorderColorSuccessHover}: ${outlineTransparentPositiveHover};
                ${tokens.textFieldBorderColorSuccessFocus}: ${outlineAccent};
                ${tokens.textFieldBackgroundEditedColor}: ${dataBlueLight};
                ${tokens.textFieldBackgroundEditedColorHover}: ${dataBlueLightHover};
                ${tokens.textFieldBackgroundEditedColorFocus}: ${dataBlueLightActive};
                ${tokens.textFieldBorderColorEdited}: ${outlineTransparentInfo};
                ${tokens.textFieldBorderColorEditedHover}: ${outlineTransparentInfoHover};
                ${tokens.textFieldBorderColorEditedFocus}: ${outlineTransparentInfoActive};

                ${tokens.textFieldTextBeforeColor}: ${textTertiary};
                ${tokens.textFieldTextAfterColor}: ${textTertiary};

                ${tokens.indicatorColor}: ${surfaceNegative};

                ${tokens.focusColor}: ${textAccent};
                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};
            `,
        },
        size: {
            s: css`
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.borderWidth}: 0.125rem;

                ${tokens.dividerPadding}: 0 0.375rem;
                ${tokens.dividerFontFamily}: ${bodyS.fontFamily};
                ${tokens.dividerFontStyle}: ${bodyS.fontStyle};
                ${tokens.dividerFontSize}: ${bodyS.fontSize};
                ${tokens.dividerFontWeight}: ${bodyS.fontWeight};
                ${tokens.dividerLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.dividerLineHeight}: ${bodyS.lineHeight};

                ${tokens.leftContentMargin}: 0 0 0 0.75rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldBorderRadius}: 0.625rem;
                ${tokens.textFieldPadding}: 0.6875rem 0.875rem 0.6875rem 0.875rem;
                ${tokens.textFieldFontFamily}: ${bodyS.fontFamily};
                ${tokens.textFieldFontStyle}: ${bodyS.fontStyle};
                ${tokens.textFieldFontSize}: ${bodyS.fontSize};
                ${tokens.textFieldFontWeight}: ${bodyS.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyS.lineHeight};
                ${tokens.textFieldBorderWidth}: 0.125rem;

                ${tokens.textFieldLeftContentMargin}: -0.1875rem 0.25rem -0.1875rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.1875rem -0.125rem -0.1875rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.labelFontFamily}: ${bodyS.fontFamily};
                ${tokens.labelFontSize}: ${bodyS.fontSize};
                ${tokens.labelFontStyle}: ${bodyS.fontStyle};
                ${tokens.labelFontWeight}: ${bodyS.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyS.lineHeight};

                ${tokens.embedIconButtonHeight}: 2.5rem;
                ${tokens.embedIconButtonWidth}: 2.5rem;
                ${tokens.embedIconButtonPadding}: 0.5rem;
                ${tokens.embedIconButtonRadius}: 0.625rem;

                ${tokens.indicatorWrapperGap}: 0.25rem;
                ${tokens.labelWrapperOffset}: 0.5rem;
                ${tokens.labelWrapperTitleCaptionOffset}: 0.25rem;
                ${tokens.contentGap}: 0.75rem;

                ${tokens.hintMargin}: -0.688rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintWithoutLabelPlacementOffset}: 0.938rem -2.688rem auto auto;
                ${tokens.hintPlacementInnerMargin}: 0 0.063rem 0 -0.438rem;

                ${tokens.titleCaptionOffset}: 0.188rem;
                ${tokens.titleCaptionFontFamily}: ${bodyXS.fontFamily};
                ${tokens.titleCaptionFontSize}: ${bodyXS.fontSize};
                ${tokens.titleCaptionFontStyle}: ${bodyXS.fontStyle};
                ${tokens.titleCaptionFontWeight}: ${bodyXS.fontWeight};
                ${tokens.titleCaptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.titleCaptionLineHeight}: ${bodyXS.lineHeight};

                ${tokens.helpersPadding}: 0.25rem 0 0 0;
                ${tokens.helpersGap}: 0.25rem;

                ${tokens.leftHelperFontFamily}: ${bodyXS.fontFamily};
                ${tokens.leftHelperFontSize}: ${bodyXS.fontSize};
                ${tokens.leftHelperFontStyle}: ${bodyXS.fontStyle};
                ${tokens.leftHelperFontWeight}: ${bodyXS.fontWeight};
                ${tokens.leftHelperLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.leftHelperLineHeight}: ${bodyXS.lineHeight};

                ${tokens.indicatorSizeInner}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorMarginTop}: 0.25rem;
                ${tokens.indicatorOuterLeft}: -0.75rem;
                ${tokens.indicatorWithoutLabelInner}: auto 0 -0.5rem auto;
                ${tokens.indicatorWithoutLabelInnerLeft}: auto auto -0.5rem 0;
            `,
            xs: css`
                ${tokens.borderRadius}: 0.5rem;
                ${tokens.borderWidth}: 0.125rem;

                ${tokens.dividerPadding}: 0 0.375rem;
                ${tokens.dividerFontFamily}: ${bodyXS.fontFamily};
                ${tokens.dividerFontStyle}: ${bodyXS.fontStyle};
                ${tokens.dividerFontSize}: ${bodyXS.fontSize};
                ${tokens.dividerFontWeight}: ${bodyXS.fontWeight};
                ${tokens.dividerLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.dividerLineHeight}: ${bodyXS.lineHeight};

                ${tokens.leftContentMargin}: 0 0 0 0.5rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.textFieldHeight}: 2rem;
                ${tokens.textFieldBorderRadius}: 0.5rem;
                ${tokens.textFieldPadding}: 0.5625rem 0.625rem 0.5625rem 0.625rem;
                ${tokens.textFieldFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFieldFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFieldFontSize}: ${bodyXS.fontSize};
                ${tokens.textFieldFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyXS.lineHeight};
                ${tokens.textFieldBorderWidth}: 0.125rem;

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.25rem -0.0625rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.0625rem -0.125rem -0.0625rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.labelFontFamily}: ${bodyXS.fontFamily};
                ${tokens.labelFontSize}: ${bodyXS.fontSize};
                ${tokens.labelFontStyle}: ${bodyXS.fontStyle};
                ${tokens.labelFontWeight}: ${bodyXS.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyXS.lineHeight};

                ${tokens.embedIconButtonHeight}: 2rem;
                ${tokens.embedIconButtonWidth}: 2rem;
                ${tokens.embedIconButtonPadding}: 0.5rem;
                ${tokens.embedIconButtonRadius}: 0.5rem;

                ${tokens.indicatorWrapperGap}: 0.25rem;
                ${tokens.labelWrapperOffset}: 0.375rem;
                ${tokens.labelWrapperTitleCaptionOffset}: 0.25rem;
                ${tokens.contentGap}: 0.5rem;

                ${tokens.hintMargin}: -0.688rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintWithoutLabelPlacementOffset}: 0.688rem -2.063rem auto auto;
                ${tokens.hintPlacementInnerMargin}: 0 -0.188rem 0 -0.688rem;

                ${tokens.titleCaptionOffset}: 0;
                ${tokens.titleCaptionFontFamily}: ${bodyXS.fontFamily};
                ${tokens.titleCaptionFontSize}: ${bodyXS.fontSize};
                ${tokens.titleCaptionFontStyle}: ${bodyXS.fontStyle};
                ${tokens.titleCaptionFontWeight}: ${bodyXS.fontWeight};
                ${tokens.titleCaptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.titleCaptionLineHeight}: ${bodyXS.lineHeight};

                ${tokens.helpersPadding}: 0.25rem 0 0 0;
                ${tokens.helpersGap}: 0.25rem;

                ${tokens.leftHelperFontFamily}: ${bodyXS.fontFamily};
                ${tokens.leftHelperFontSize}: ${bodyXS.fontSize};
                ${tokens.leftHelperFontStyle}: ${bodyXS.fontStyle};
                ${tokens.leftHelperFontWeight}: ${bodyXS.fontWeight};
                ${tokens.leftHelperLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.leftHelperLineHeight}: ${bodyXS.lineHeight};

                ${tokens.indicatorSizeInner}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorMarginTop}: 0.125rem;
                ${tokens.indicatorOuterLeft}: -0.75rem;
                ${tokens.indicatorWithoutLabelInner}: auto 0 -0.375rem auto;
                ${tokens.indicatorWithoutLabelInnerLeft}: auto auto -0.375rem 0;
            `,
        },
        hintView: {
            default: css`
                ${tokens.tooltipBackgroundColor}: ${surfaceSolidCardBrightness};
                ${tokens.tooltipBoxShadow}: var(--shadow-down-hard-m, 0px 4px 12px 0px rgba(0, 0, 0, 0.16),0px 1px 4px 0px rgba(0, 0, 0, 0.08));
                ${tokens.tooltipColor}: ${textPrimary};
                ${tokens.tooltipArrowBackground}: ${surfaceSolidCardBrightness};
            `,
        },
        hintSize: {
            m: css`
                ${tokens.tooltipPaddingTop}: 0.6875rem;
                ${tokens.tooltipPaddingRight}: 0.875rem;
                ${tokens.tooltipPaddingBottom}: 0.6875rem;
                ${tokens.tooltipPaddingLeft}: 0.875rem;

                ${tokens.tooltipMinHeight}: 2.5rem;
                ${tokens.tooltipBorderRadius}: 0.625rem;

                ${tokens.tooltipTextFontFamily}: ${bodyS.fontFamily};
                ${tokens.tooltipTextFontSize}: ${bodyS.fontSize};
                ${tokens.tooltipTextFontStyle}: ${bodyS.fontStyle};
                ${tokens.tooltipTextFontWeight}: ${bodyS.fontWeight};
                ${tokens.tooltipTextFontLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.tooltipTextFontLineHeight}: ${bodyS.lineHeight};

                ${tokens.tooltipContentLeftMargin}: 0.375rem;

                ${tokens.tooltipArrowMaskWidth}: 1.25rem;
                ${tokens.tooltipArrowMaskHeight}: 1.25rem;
                ${tokens.tooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMC4xNywxMS44M2wyMCwwYy01LjUyLDAgLTEwLDMuNTkgLTEwLDhjMCwtNC40MSAtNC40OCwtOCAtMTAsLTh6IiBmaWxsPSIjMTcxNzE3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJUYWlsIi8+Cjwvc3ZnPg==");
                ${tokens.tooltipArrowHeight}: 0.5rem;
                ${tokens.tooltipArrowEdgeMargin}: 0.625rem;
            `,
            s: css`
                ${tokens.tooltipPaddingTop}: 0.5rem;
                ${tokens.tooltipPaddingRight}: 0.75rem;
                ${tokens.tooltipPaddingBottom}: 0.5rem;
                ${tokens.tooltipPaddingLeft}: 0.75rem;

                ${tokens.tooltipMinHeight}: 2rem;
                ${tokens.tooltipBorderRadius}: 0.5rem;

                ${tokens.tooltipTextFontFamily}: ${bodyXS.fontFamily};
                ${tokens.tooltipTextFontSize}: ${bodyXS.fontSize};
                ${tokens.tooltipTextFontStyle}: ${bodyXS.fontStyle};
                ${tokens.tooltipTextFontWeight}: ${bodyXS.fontWeight};
                ${tokens.tooltipTextFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.tooltipTextFontLineHeight}: ${bodyXS.lineHeight};

                ${tokens.tooltipContentLeftMargin}: 0.25rem;

                ${tokens.tooltipArrowMaskWidth}: 1rem;
                ${tokens.tooltipArrowMaskHeight}: 1rem;
                ${tokens.tooltipArrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMCw5Ljg1bDE2LDBjLTQuNDEsMCAtOCwyLjY5IC04LDZjMCwtMy4zMSAtMy41OSwtNiAtOCwtNnoiIGZpbGw9IiMxNzE3MTciIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IlRhaWwiLz4KPC9zdmc+");
                ${tokens.tooltipArrowHeight}: 0.375rem;
                ${tokens.tooltipArrowEdgeMargin}: 0.5625rem;
            `,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 1;
                ${tokens.textFieldColor}: ${textSecondary};
                ${tokens.textFieldBackgroundColor}: transparent;
                ${tokens.background}: ${surfaceTransparentSecondary};
                ${tokens.borderColor}: transparent;
                ${tokens.contentSlotRightColor}: ${textSecondary};
                ${tokens.contentSlotColor}: ${textSecondary};
            `,
        },
        readOnly: {
            true: css`
                ${tokens.backgroundReadOnly}: ${surfaceTransparentSecondary};
                ${tokens.background}: ${surfaceTransparentCard};
                ${tokens.labelColorReadOnly}: ${textSecondary};
                ${tokens.leftHelperColorReadOnly}: ${textSecondary};
                ${tokens.dividerColorReadOnly}: ${textSecondary};
                ${tokens.dividerOpacityReadOnly}: 0.4;
                ${tokens.rightContentOpacityReadOnly}: 1;

                ${tokens.textFieldBackgroundColorReadOnly}: transparent;
                ${tokens.textFieldPlaceholderColorReadOnly}: ${textSecondary};
                ${tokens.contentSlotRightColor}: ${textSecondary};
                ${tokens.contentSlotColor}: ${textSecondary};
                ${tokens.borderColor}: transparent;
            `,
        },
    },
};
