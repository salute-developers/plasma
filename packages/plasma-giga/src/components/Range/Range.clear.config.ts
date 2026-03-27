import {
    bodyL,
    bodyM,
    bodyS,
    bodyXS,
    shadowDownHardM,
    surfaceAccent,
    surfaceClear,
    surfaceNegative,
    surfacePositive,
    surfaceSolidCardBrightness,
    surfaceTransparentPrimary,
    surfaceTransparentTertiary,
    textAccent,
    textNegative,
    textNegativeActive,
    textNegativeHover,
    textPositive,
    textPositiveActive,
    textPositiveHover,
    textPrimary,
    textPrimaryActive,
    textPrimaryHover,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
    textTertiary,
} from '@salutejs/plasma-themes/tokens/plasma_giga';
import { css, rangeTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'l',
        hintView: 'default',
        hintSize: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.background}: transparent;
                ${tokens.backgroundError}: transparent;
                ${tokens.backgroundSuccess}: transparent;

                ${tokens.clearDividerColor}: ${surfaceTransparentTertiary};

                ${tokens.dividerColor}: ${surfaceClear};
                ${tokens.labelColor}: ${textPrimary};
                ${tokens.leftHelperColor}: ${textSecondary};
                ${tokens.leftHelperColorError}: ${textNegative};
                ${tokens.leftHelperColorSuccess}: ${textPositive};
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

                ${tokens.contentSlotColorSuccess}: ${textPositive};
                ${tokens.contentSlotColorSuccessHover}: ${textPositiveHover};
                ${tokens.contentSlotColorSuccessActive}: ${textPositiveActive};

                ${tokens.textFieldContentSlotColorSuccess}: ${textPositive};
                ${tokens.textFieldContentSlotColorSuccessHover}: ${textPositiveHover};
                ${tokens.textFieldContentSlotColorSuccessActive}: ${textPositiveActive};

                ${tokens.contentSlotColorError}: ${textNegative};
                ${tokens.contentSlotColorErrorHover}: ${textNegativeHover};
                ${tokens.contentSlotColorErrorActive}: ${textNegativeActive};

                ${tokens.textFieldContentSlotColorError}: ${textNegative};
                ${tokens.textFieldContentSlotColorErrorHover}: ${textNegativeHover};
                ${tokens.textFieldContentSlotColorErrorActive}: ${textNegativeActive};

                ${tokens.textFieldColor}: ${textPrimary};
                ${tokens.textFieldColorSuccess}: ${textPositive};
                ${tokens.textFieldColorError}: ${textNegative};
                ${tokens.focusColor}: ${textAccent};
                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};
                ${tokens.textFieldClearPlaceholderColorFocus}: ${textTertiary};
                ${tokens.textFieldCaretColor}: ${textAccent};

                ${tokens.textFieldBackgroundColorHover}: transparent;
                ${tokens.textFieldBackgroundColorFocus}: transparent;
                ${tokens.textFieldBackgroundErrorColor}: transparent;
                ${tokens.textFieldBackgroundErrorColorHover}: transparent;
                ${tokens.textFieldBackgroundErrorColorFocus}: transparent;
                ${tokens.textFieldBackgroundSuccessColor}: transparent;
                ${tokens.textFieldBackgroundSuccessColorHover}: transparent;
                ${tokens.textFieldBackgroundSuccessColorFocus}: transparent;

                ${tokens.textFieldTextBeforeColor}: ${textTertiary};
                ${tokens.textFieldTextAfterColor}: ${textTertiary};

                ${tokens.textFieldDividerColorSuccess}: ${surfacePositive};
                ${tokens.textFieldDividerColorError}: ${surfaceNegative};
                ${tokens.textFieldDividerColorHover}: ${textSecondary};
                ${tokens.textFieldDividerColorFocus}: ${surfaceAccent};

                ${tokens.indicatorColor}: ${surfaceNegative};
            `,
        },
        size: {
            xl: css`
                ${tokens.borderRadius}: 1rem;

                ${tokens.dividerPadding}: 0 1.5rem;
                ${tokens.dividerFontFamily}: ${bodyL.fontFamily};
                ${tokens.dividerFontStyle}: ${bodyL.fontStyle};
                ${tokens.dividerFontSize}: ${bodyL.fontSize};
                ${tokens.dividerFontWeight}: ${bodyL.fontWeight};
                ${tokens.dividerLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.dividerLineHeight}: ${bodyL.lineHeight};

                ${tokens.leftContentMargin}: 0 1.125rem 0 0;
                ${tokens.rightContentMargin}: 0;

                ${tokens.textFieldHeight}: 4rem;
                ${tokens.textFieldBorderRadius}: 1rem;
                ${tokens.textFieldPadding}: 1.3125rem 0;
                ${tokens.textFieldFontFamily}: ${bodyL.fontFamily};
                ${tokens.textFieldFontStyle}: ${bodyL.fontStyle};
                ${tokens.textFieldFontSize}: ${bodyL.fontSize};
                ${tokens.textFieldFontWeight}: ${bodyL.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyL.lineHeight};

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.5rem -0.0625rem 0;
                ${tokens.textFieldRightContentMargin}: -0.0625rem 0 -0.0625rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.labelFontFamily}: ${bodyL.fontFamily};
                ${tokens.labelFontStyle}: ${bodyL.fontStyle};
                ${tokens.labelFontSize}: ${bodyL.fontSize};
                ${tokens.labelFontWeight}: ${bodyL.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyL.lineHeight};

                ${tokens.embedIconButtonHeight}: 4rem;
                ${tokens.embedIconButtonWidth}: 2.25rem;
                ${tokens.embedIconButtonPadding}: 0 0 0.75rem;
                ${tokens.embedIconButtonRadius}: 0.625rem;

                ${tokens.indicatorWrapperGap}: 0.25rem;
                ${tokens.labelWrapperOffset}: 0.25rem;
                ${tokens.labelWrapperTitleCaptionOffset}: 0.25rem;
                ${tokens.contentGap}: 1rem;

                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintWithoutLabelPlacementOffset}: 1.688rem -2.938rem auto auto;
                ${tokens.hintPlacementInnerMargin}: 0 -0.438rem;

                ${tokens.titleCaptionOffset}: 0.375rem;
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
                ${tokens.indicatorWithoutLabelInner}: 2.563rem -1.25rem auto auto;
                ${tokens.indicatorWithoutLabelInnerLeft}: 2.563rem auto auto -1.25rem;
                ${tokens.indicatorWithoutLabelOuterHint}: 2.563rem -3.5rem auto auto;
            `,
            l: css`
                ${tokens.borderRadius}: 0.875rem;

                ${tokens.dividerPadding}: 0 1.375rem;
                ${tokens.dividerFontFamily}: ${bodyL.fontFamily};
                ${tokens.dividerFontStyle}: ${bodyL.fontStyle};
                ${tokens.dividerFontSize}: ${bodyL.fontSize};
                ${tokens.dividerFontWeight}: ${bodyL.fontWeight};
                ${tokens.dividerLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.dividerLineHeight}: ${bodyL.lineHeight};

                ${tokens.leftContentMargin}: 0 1.125rem 0 0;
                ${tokens.rightContentMargin}: 0;

                ${tokens.textFieldHeight}: 3.5rem;
                ${tokens.textFieldBorderRadius}: 0.875rem;
                ${tokens.textFieldPadding}: 1.0625rem 0;
                ${tokens.textFieldFontFamily}: ${bodyL.fontFamily};
                ${tokens.textFieldFontStyle}: ${bodyL.fontStyle};
                ${tokens.textFieldFontSize}: ${bodyL.fontSize};
                ${tokens.textFieldFontWeight}: ${bodyL.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyL.lineHeight};

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.5rem -0.0625rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.0625rem -0.125rem -0.0625rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.labelFontFamily}: ${bodyL.fontFamily};
                ${tokens.labelFontSize}: ${bodyL.fontSize};
                ${tokens.labelFontStyle}: ${bodyL.fontStyle};
                ${tokens.labelFontWeight}: ${bodyL.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyL.lineHeight};

                ${tokens.embedIconButtonHeight}: 3.5rem;
                ${tokens.embedIconButtonWidth}: 2.25rem;
                ${tokens.embedIconButtonPadding}: 0 0 0.75rem;
                ${tokens.embedIconButtonRadius}: 0.625rem;

                ${tokens.indicatorWrapperGap}: 0.25rem;
                ${tokens.labelWrapperOffset}: 0.25rem;
                ${tokens.labelWrapperTitleCaptionOffset}: 0.25rem;
                ${tokens.contentGap}: 1rem;

                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintWithoutLabelPlacementOffset}: 1.438rem -2.938rem auto auto;
                ${tokens.hintPlacementInnerMargin}: 0 -0.438rem;

                ${tokens.titleCaptionOffset}: 0.375rem;
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
                ${tokens.indicatorWithoutLabelInner}: 2.313rem -1.125rem auto auto;
                ${tokens.indicatorWithoutLabelInnerLeft}: 2.313rem auto auto -1.125rem;
                ${tokens.indicatorWithoutLabelOuterHint}: 2.313rem -3.375rem auto auto;
            `,
            m: css`
                ${tokens.borderRadius}: 0.75rem;

                ${tokens.dividerPadding}: 0 1.25rem;
                ${tokens.dividerFontFamily}: ${bodyM.fontFamily};
                ${tokens.dividerFontStyle}: ${bodyM.fontStyle};
                ${tokens.dividerFontSize}: ${bodyM.fontSize};
                ${tokens.dividerFontWeight}: ${bodyM.fontWeight};
                ${tokens.dividerLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.dividerLineHeight}: ${bodyM.lineHeight};

                ${tokens.leftContentMargin}: 0 0.875rem 0 0;
                ${tokens.rightContentMargin}: 0;

                ${tokens.textFieldHeight}: 3rem;
                ${tokens.textFieldBorderRadius}: 0.75rem;
                ${tokens.textFieldPadding}: 0.875rem 0;
                ${tokens.textFieldFontFamily}: ${bodyM.fontFamily};
                ${tokens.textFieldFontStyle}: ${bodyM.fontStyle};
                ${tokens.textFieldFontSize}: ${bodyM.fontSize};
                ${tokens.textFieldFontWeight}: ${bodyM.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyM.lineHeight};

                ${tokens.textFieldLeftContentMargin}: -0.125rem 0.375rem -0.125rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.125rem -0.125rem -0.125rem 0.75rem;
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.labelFontFamily}: ${bodyM.fontFamily};
                ${tokens.labelFontSize}: ${bodyM.fontSize};
                ${tokens.labelFontStyle}: ${bodyM.fontStyle};
                ${tokens.labelFontWeight}: ${bodyM.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyM.lineHeight};

                ${tokens.embedIconButtonHeight}: 3rem;
                ${tokens.embedIconButtonWidth}: 2.375rem;
                ${tokens.embedIconButtonPadding}: 0 0 0.875rem;
                ${tokens.embedIconButtonRadius}: 0.625rem;

                ${tokens.indicatorWrapperGap}: 0.25rem;
                ${tokens.labelWrapperOffset}: 0.25rem;
                ${tokens.labelWrapperTitleCaptionOffset}: 0.25rem;
                ${tokens.contentGap}: 0.875rem;

                ${tokens.hintMargin}: -0.688rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintWithoutLabelPlacementOffset}: 1.1875rem -2.813rem auto auto;
                ${tokens.hintPlacementInnerMargin}: 0 -0.438rem;

                ${tokens.titleCaptionOffset}: 0.313rem;
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
                ${tokens.indicatorWithoutLabelInner}: 2.063rem -1rem auto auto;
                ${tokens.indicatorWithoutLabelInnerLeft}: 2.063rem auto auto -1rem;
                ${tokens.indicatorWithoutLabelOuterHint}: 2.063rem -3.25rem auto auto;
            `,
            s: css`
                ${tokens.borderRadius}: 0.625rem;

                ${tokens.dividerPadding}: 0 1.125rem;
                ${tokens.dividerFontFamily}: ${bodyS.fontFamily};
                ${tokens.dividerFontStyle}: ${bodyS.fontStyle};
                ${tokens.dividerFontSize}: ${bodyS.fontSize};
                ${tokens.dividerFontWeight}: ${bodyS.fontWeight};
                ${tokens.dividerLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.dividerLineHeight}: ${bodyS.lineHeight};

                ${tokens.leftContentMargin}: 0 0.75rem 0 0;
                ${tokens.rightContentMargin}: 0;

                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldBorderRadius}: 0.625rem;
                ${tokens.textFieldPadding}: 0.6875rem 0;
                ${tokens.textFieldFontFamily}: ${bodyS.fontFamily};
                ${tokens.textFieldFontStyle}: ${bodyS.fontStyle};
                ${tokens.textFieldFontSize}: ${bodyS.fontSize};
                ${tokens.textFieldFontWeight}: ${bodyS.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyS.lineHeight};

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
                ${tokens.embedIconButtonPadding}: 0 0 0.75rem;
                ${tokens.embedIconButtonRadius}: 0.625rem;

                ${tokens.indicatorWrapperGap}: 0.25rem;
                ${tokens.labelWrapperOffset}: 0.25rem;
                ${tokens.labelWrapperTitleCaptionOffset}: 0.25rem;
                ${tokens.contentGap}: 0.75rem;

                ${tokens.hintMargin}: -0.688rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintWithoutLabelPlacementOffset}: 0.938rem -2.688rem auto auto;
                ${tokens.hintPlacementInnerMargin}: 0 -0.438rem;

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
                ${tokens.indicatorWithoutLabelInner}: 1.813rem -0.875rem auto auto;
                ${tokens.indicatorWithoutLabelInnerLeft}: 1.813rem auto auto -0.875rem;
                ${tokens.indicatorWithoutLabelOuterHint}: 1.813rem -3.125rem auto auto;
            `,
            xs: css`
                ${tokens.borderRadius}: 0.5rem;

                ${tokens.dividerPadding}: 0 0.875rem;
                ${tokens.dividerFontFamily}: ${bodyXS.fontFamily};
                ${tokens.dividerFontStyle}: ${bodyXS.fontStyle};
                ${tokens.dividerFontSize}: ${bodyXS.fontSize};
                ${tokens.dividerFontWeight}: ${bodyXS.fontWeight};
                ${tokens.dividerLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.dividerLineHeight}: ${bodyXS.lineHeight};

                ${tokens.leftContentMargin}: 0 0.5rem 0 0;
                ${tokens.rightContentMargin}: 0;

                ${tokens.textFieldHeight}: 2rem;
                ${tokens.textFieldBorderRadius}: 0.5rem;
                ${tokens.textFieldPadding}: 0.5625rem 0;
                ${tokens.textFieldFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFieldFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFieldFontSize}: ${bodyXS.fontSize};
                ${tokens.textFieldFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyXS.lineHeight};

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
                ${tokens.embedIconButtonWidth}: 1.5rem;
                ${tokens.embedIconButtonPadding}: 0 0 0.5rem;
                ${tokens.embedIconButtonRadius}: 0.5rem;

                ${tokens.indicatorWrapperGap}: 0.25rem;
                ${tokens.labelWrapperOffset}: 0.25rem;
                ${tokens.labelWrapperTitleCaptionOffset}: 0.25rem;
                ${tokens.contentGap}: 0.5rem;

                ${tokens.hintMargin}: -0.688rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintWithoutLabelPlacementOffset}: 0.688rem -2.063rem auto auto;
                ${tokens.hintPlacementInnerMargin}: 0 -0.688rem;

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
                ${tokens.indicatorWithoutLabelInner}: 1.875rem -0.75rem auto auto;
                ${tokens.indicatorWithoutLabelInnerLeft}: 1.625rem auto auto -0.75rem;
                ${tokens.indicatorWithoutLabelOuterHint}: 1.625rem -2rem auto auto;
            `,
        },
        hintView: {
            default: css`
                ${tokens.tooltipBackgroundColor}: ${surfaceSolidCardBrightness};
                ${tokens.tooltipBoxShadow}: ${shadowDownHardM}, 0px 4px 12px 0px rgba(0, 0, 0, 0.16),0px 1px 4px 0px rgba(0, 0, 0, 0.08));
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
                ${tokens.disabledOpacity}: 0.4;
            `,
        },
        readOnly: {
            true: css`
                ${tokens.backgroundReadOnly}: ${surfaceTransparentPrimary};

                ${tokens.dividerColorReadOnly}: ${textSecondary};
                ${tokens.readOnlyOpacity}: 0.1;
                ${tokens.dividerOpacityReadOnly}: 0.4;
                ${tokens.rightContentOpacityReadOnly}: 0.4;

                ${tokens.textFieldColorReadOnly}: ${textPrimary};
                ${tokens.textFieldBackgroundColorReadOnly}: transparent;
                ${tokens.textFieldPlaceholderColorReadOnly}: ${textSecondary};
            `,
        },
    },
};
