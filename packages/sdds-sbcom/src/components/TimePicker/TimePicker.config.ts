import { timePickerTokens as timePickerTokensBase, css } from '@salutejs/plasma-new-hope/styled-components';
import {
    /*
     * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
     * Missing tokens in @salutejs/sdds-themes/tokens: bodyM, bodyXs, surfaceAccent, surfaceTransparentNegative
     * surfaceTransparentNegativeActive, surfaceTransparentPositive, surfaceTransparentPositiveActive
     */
    bodyL,
    bodyS,
    shadowDownHardM,
    shadowDownSoftS,
    surfaceNegative,
    surfaceSolidCard,
    surfaceSolidCardBrightness,
    surfaceTransparentPrimary,
    surfaceTransparentSecondary,
    surfaceTransparentTertiary,
    textAccent,
    textNegative,
    textPositive,
    textPrimary,
    textSecondary,
    textTertiary,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * timePickerTokens from plasma-new-hope omits leftHelper/hint blocks vs source — merge CSS custom property
 * names (plasma-time-picker*). TODO: remove when published tokens include these keys.
 */
const timePickerTokenFallbacks = {
    textFieldRightContentWithHintMargin: '--plasma-time-picker--textfield__right-content-with-hint-margin',
    textFieldContentRightWrapperGap: '--plasma-time-picker-content-right-wrapper-gap',
    textFieldContentRightWrapperMargin: '--plasma-time-picker-content-right-wrapper-margin',
    leftHelperColor: '--plasma-time-picker__left-helper-color',
    leftHelperColorError: '--plasma-time-picker__left-helper-color-error',
    leftHelperColorSuccess: '--plasma-time-picker__left-helper-color-success',
    leftHelperColorReadOnly: '--plasma-time-picker__left-helper-color-readonly',
    leftHelperOffset: '--plasma-time-picker__left-helper-offset',
    leftHelperFontFamily: '--plasma-time-picker__left-helper-font-family',
    leftHelperFontStyle: '--plasma-time-picker__left-helper-font-style',
    leftHelperFontSize: '--plasma-time-picker__left-helper-font-size',
    leftHelperFontWeight: '--plasma-time-picker__left-helper-font-weight',
    leftHelperLetterSpacing: '--plasma-time-picker__left-helper-letter-spacing',
    leftHelperLineHeight: '--plasma-time-picker__left-helper-line-height',
    hintMargin: '--plasma-time-picker-hint-margin',
    hintTargetSize: '--plasma-time-picker-hint-target-size',
    hintCustomIconTargetSize: '--plasma-time-picker-hint-custom-icon-target-size',
    hintIconColor: '--plasma-time-picker-hint-icon-color',
    hintInnerLabelPlacementOffset: '--plasma-time-picker-hint-inner-label-placement-offset',
    hintTooltipPaddingTop: '--plasma-time-picker-hint-tooltip-padding-top',
    hintTooltipPaddingRight: '--plasma-time-picker-hint-tooltip-padding-right',
    hintTooltipPaddingBottom: '--plasma-time-picker-hint-tooltip-padding-bottom',
    hintTooltipPaddingLeft: '--plasma-time-picker-hint-tooltip-padding-left',
    hintTooltipMinHeight: '--plasma-time-picker-hint-tooltip-min-height',
    hintTooltipBackgroundColor: '--plasma-time-picker-hint-tooltip-background-color',
    hintTooltipBoxShadow: '--plasma-time-picker-hint-tooltip-box-shadow',
    hintTooltipBorderRadius: '--plasma-time-picker-hint-tooltip-border-radius',
    hintTooltipColor: '--plasma-time-picker-hint-tooltip-color',
    hintTooltipTextFontFamily: '--plasma-time-picker-hint-tooltip-text-font-family',
    hintTooltipTextFontSize: '--plasma-time-picker-hint-tooltip-text-font-size',
    hintTooltipTextFontStyle: '--plasma-time-picker-hint-tooltip-text-font-style',
    hintTooltipTextFontWeight: '--plasma-time-picker-hint-tooltip-text-font-weight',
    hintTooltipTextFontLetterSpacing: '--plasma-time-picker-hint-tooltip-text-font-letter-spacing',
    hintTooltipTextFontLineHeight: '--plasma-time-picker-hint-tooltip-text-font-line-height',
    hintTooltipContentLeftMargin: '--plasma-time-picker-hint-tooltip-content-left-margin',
    hintTooltipArrowMaskWidth: '--plasma-time-picker-hint-tooltip-arrow-mask-width',
    hintTooltipArrowMaskHeight: '--plasma-time-picker-hint-tooltip-arrow-mask-height',
    hintTooltipArrowMaskImage: '--plasma-time-picker-hint-tooltip-arrow-mask-image',
    hintTooltipArrowBackground: '--plasma-time-picker-hint-tooltip-arrow-background',
    hintTooltipArrowHeight: '--plasma-time-picker-hint-tooltip-arrow-height',
    hintTooltipArrowEdgeMargin: '--plasma-time-picker-hint-tooltip-arrow-edge-margin',
} as const;

const tokens = { ...timePickerTokensBase, ...timePickerTokenFallbacks };

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        hintView: 'default',
        hintSize: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.background}: ${surfaceTransparentPrimary};
                /* NOTE: no token surfaceTransparentNegative in @salutejs/sdds-themes/tokens */
                ${tokens.backgroundError}: var(--surface-transparent-negative);
                /* NOTE: no token surfaceTransparentPositive in @salutejs/sdds-themes/tokens */
                ${tokens.backgroundSuccess}: var(--surface-transparent-positive);

                ${tokens.labelColor}: ${textPrimary};

                ${tokens.textFieldColor}: ${textPrimary};
                ${tokens.textFieldPlaceholderColor}: ${textSecondary};
                ${tokens.textFieldCaretColor}: ${textAccent};

                ${tokens.indicatorColor}: ${surfaceNegative};

                ${tokens.timePickerShadow}: ${shadowDownSoftS};

                ${tokens.textFieldBackgroundColor}: ${surfaceTransparentPrimary};
                ${tokens.textFieldBackgroundColorFocus}: ${surfaceTransparentSecondary};
                /* NOTE: no token surfaceTransparentNegative in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldBackgroundErrorColor}: var(--surface-transparent-negative);
                /* NOTE: no token surfaceTransparentNegativeActive in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldBackgroundErrorColorFocus}: var(--surface-transparent-negative-active);
                /* NOTE: no token surfaceTransparentPositive in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldBackgroundSuccessColor}: var(--surface-transparent-positive);
                /* NOTE: no token surfaceTransparentPositiveActive in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldBackgroundSuccessColorFocus}: var(--surface-transparent-positive-active);

                ${tokens.textFieldTextBeforeColor}: ${textTertiary};
                ${tokens.textFieldTextAfterColor}: ${textTertiary};

                ${tokens.textFieldPlaceholderColorFocus}: ${textTertiary};

                ${tokens.timePickerBackground}: ${surfaceSolidCard};
                ${tokens.itemBackgroundHover}: ${surfaceTransparentSecondary};
                ${tokens.itemBackgroundActive}: ${surfaceTransparentSecondary};
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${tokens.itemFocusColor}: var(--surface-accent);

                ${tokens.scrollbarColor}: ${surfaceTransparentTertiary};
                ${tokens.scrollbarTrackColor}: ${surfaceTransparentPrimary};

                ${tokens.leftHelperColor}: ${textSecondary};
                ${tokens.leftHelperColorError}: ${textNegative};
                ${tokens.leftHelperColorSuccess}: ${textPositive};

                ${tokens.hintIconColor}: ${textSecondary};
            `,
        },
        size: {
            l: css`
                ${tokens.width}: 20rem;
                ${tokens.borderRadius}: 0.875rem;

                ${tokens.leftContentMargin}: 0 0 0 1rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.75rem;
                ${tokens.labelInnerPadding}: 0.5625rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.5625rem 0 0.5625rem 0;

                ${tokens.labelFontFamily}: ${bodyL.fontFamily};
                ${tokens.labelFontStyle}: ${bodyL.fontStyle};
                ${tokens.labelFontSize}: ${bodyL.fontSize};
                ${tokens.labelFontWeight}: ${bodyL.fontWeight};
                ${tokens.labelLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.labelLineHeight}: ${bodyL.lineHeight};

                ${tokens.indicatorSize}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.5rem auto auto -0.75rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.25rem -0.625rem auto auto;

                ${tokens.textFieldHeight}: 3.5rem;
                ${tokens.textFieldBorderRadius}: 0.875rem;
                ${tokens.textFieldPadding}: 1.0625rem 1.125rem 1.0625rem 1.125rem;
                ${tokens.textFieldFontFamily}: ${bodyL.fontFamily};
                ${tokens.textFieldFontStyle}: ${bodyL.fontStyle};
                ${tokens.textFieldFontSize}: ${bodyL.fontSize};
                ${tokens.textFieldFontWeight}: ${bodyL.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyL.lineHeight};

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.5rem -0.0625rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.0625rem -0.125rem -0.0625rem 0.75rem;
                ${tokens.textFieldRightContentWithHintMargin}: -0.0625rem -0.438rem -0.0625rem 0.75rem;

                ${tokens.textFieldContentRightWrapperGap}: 0.5rem;
                ${tokens.textFieldContentRightWrapperMargin}: -0.438rem -0.438rem -0.438rem 0;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.timePickerBorderRadius}: 0.875rem;
                ${tokens.timePickerWidth}: 15rem;
                ${tokens.timePickerPadding}: 0.125rem;

                ${tokens.columnHeight}: 36.25rem;

                ${tokens.itemFontFamily}: ${bodyL.fontFamily};
                ${tokens.itemFontSize}: ${bodyL.fontSize};
                ${tokens.itemFontStyle}: ${bodyL.fontStyle};
                ${tokens.itemFontWeight}: ${bodyL.fontWeight};
                ${tokens.itemLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.itemLineHeight}: ${bodyL.lineHeight};

                ${tokens.itemHeight}: 3.5rem;
                ${tokens.itemBorderRadius}: 0.75rem;
                ${tokens.itemPadding}: 0rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: 0.563rem -2.938rem auto auto;

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.scrollbarWidth}: 0.125rem;
                ${tokens.scrollbarMargin}: 0.5rem;
            `,
            m: css`
                ${tokens.width}: 20rem;
                ${tokens.borderRadius}: 0.75rem;

                ${tokens.leftContentMargin}: 0 0 0 0.875rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.625rem;
                ${tokens.labelInnerPadding}: 0.375rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.375rem 0 0.375rem 0;

                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.labelLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.indicatorSize}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.375rem auto auto -0.75rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.25rem -0.6875rem auto auto;

                ${tokens.textFieldHeight}: 3rem;
                ${tokens.textFieldBorderRadius}: 0.75rem;
                ${tokens.textFieldPadding}: 0.875rem 1rem 0.875rem 1rem;
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.textFieldLeftContentMargin}: -0.125rem 0.375rem -0.125rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.125rem -0.125rem -0.125rem 0.75rem;
                ${tokens.textFieldRightContentWithHintMargin}: -0.125rem -0.438rem -0.125rem 0.75rem;

                ${tokens.textFieldContentRightWrapperGap}: 0.375rem;
                ${tokens.textFieldContentRightWrapperMargin}: -0.438rem -0.438rem -0.438rem 0;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.timePickerBorderRadius}: 0.75rem;
                ${tokens.timePickerWidth}: 13.75rem;
                ${tokens.timePickerPadding}: 0.125rem;

                ${tokens.columnHeight}: 31.25rem;

                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.itemFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.itemFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.itemFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.itemFontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.itemLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.itemLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.itemHeight}: 3rem;
                ${tokens.itemBorderRadius}: 0.625rem;
                ${tokens.itemPadding}: 0rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: 0.312rem -2.938rem auto auto;

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.scrollbarWidth}: 0.125rem;
                ${tokens.scrollbarMargin}: 0.375rem;
            `,
            s: css`
                ${tokens.width}: 20rem;
                ${tokens.borderRadius}: 0.625rem;

                ${tokens.leftContentMargin}: 0 0 0 0.75rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.5rem;
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
                ${tokens.textFieldBorderRadius}: 0.625rem;
                ${tokens.textFieldPadding}: 0.6875rem 0.875rem 0.6875rem 0.875rem;
                ${tokens.textFieldFontFamily}: ${bodyS.fontFamily};
                ${tokens.textFieldFontStyle}: ${bodyS.fontStyle};
                ${tokens.textFieldFontSize}: ${bodyS.fontSize};
                ${tokens.textFieldFontWeight}: ${bodyS.fontWeight};
                ${tokens.textFieldLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.textFieldLineHeight}: ${bodyS.lineHeight};

                ${tokens.textFieldLeftContentMargin}: -0.1875rem 0.25rem -0.1875rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.1875rem -0.125rem -0.1875rem 0.75rem;
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

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: 0.062rem -2.813rem auto auto;

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.scrollbarWidth}: 0.125rem;
                ${tokens.scrollbarMargin}: 0.25rem;
            `,
            xs: css`
                ${tokens.width}: 20rem;
                ${tokens.borderRadius}: 0.5rem;

                ${tokens.leftContentMargin}: 0 0 0 0.5rem;
                ${tokens.rightContentMargin}: 0;

                ${tokens.labelOffset}: 0.375rem;
                ${tokens.labelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.contentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.indicatorSize}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorPlacement}: 0 0 0 0;
                ${tokens.indicatorOuterPlacement}: 0.25rem auto auto -0.625rem;
                ${tokens.indicatorPlacementRight}: 0 0 auto auto;
                ${tokens.indicatorOuterPlacementRight}: 0.125rem -0.6875rem auto auto;

                ${tokens.textFieldHeight}: 2rem;
                ${tokens.textFieldBorderRadius}: 0.5rem;
                ${tokens.textFieldPadding}: 0.5625rem 0.625rem 0.5625rem 0.625rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textFieldLeftContentMargin}: -0.0625rem 0.25rem -0.0625rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.0625rem -0.125rem -0.0625rem 0.75rem;
                ${tokens.textFieldRightContentWithHintMargin}: -0.0625rem -0.688rem -0.0625rem 0.75rem;

                ${tokens.textFieldContentRightWrapperGap}: 0.25rem;
                ${tokens.textFieldContentRightWrapperMargin}: -0.688rem -0.688rem -0.688rem 0;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.timePickerBorderRadius}: 0.5rem;
                ${tokens.timePickerWidth}: 10rem;
                ${tokens.timePickerPadding}: 0.125rem;

                ${tokens.columnHeight}: 21.25rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.itemFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.itemFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.itemFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.itemFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.itemLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.itemLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.itemHeight}: 2rem;
                ${tokens.itemBorderRadius}: 0.375rem;
                ${tokens.itemPadding}: 0rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.hintMargin}: -0.75rem -0.625rem -0.75rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: -0.188rem -2.1875rem auto auto;

                ${tokens.leftHelperOffset}: 0.25rem 0 0 0;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.scrollbarWidth}: 0.125rem;
                ${tokens.scrollbarMargin}: 0.25rem;
            `,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 0.4;
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

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.hintTooltipTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.hintTooltipTextFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.hintTooltipTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.hintTooltipTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.hintTooltipTextFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.hintTooltipTextFontLineHeight}: var(--plasma-typo-body-xs-line-height);

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
                ${tokens.backgroundReadOnly}: ${surfaceTransparentPrimary};
                ${tokens.labelColorReadOnly}: ${textSecondary};
                ${tokens.leftHelperColorReadOnly}: ${textSecondary};

                ${tokens.textFieldColorReadOnly}: ${textSecondary};
                ${tokens.textFieldBackgroundColorReadOnly}: ${surfaceTransparentPrimary};
                ${tokens.textFieldPlaceholderColorReadOnly}: ${textSecondary};
            `,
        },
    },
};
