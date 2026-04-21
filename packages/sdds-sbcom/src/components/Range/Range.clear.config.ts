import { rangeTokens as tokens, css } from '@salutejs/plasma-new-hope/styled-components';
import {
    /*
     * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
     * Missing tokens in @salutejs/sdds-themes/tokens: bodyM, bodyXs, surfaceAccent, surfaceTransparentClear
     */
    bodyL,
    bodyS,
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
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

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

                /* NOTE: no token surfaceTransparentClear in @salutejs/sdds-themes/tokens */
                ${tokens.dividerColor}: var(--surface-transparent-clear);
                ${tokens.labelColor}: ${textPrimary};
                ${tokens.leftHelperColor}: ${textSecondary};
                ${tokens.leftHelperColorError}: ${textNegative};
                ${tokens.leftHelperColorSuccess}: ${textPositive};
                ${tokens.titleCaptionColor}: ${textSecondary};
                ${tokens.hintIconColor}: ${textSecondary};

                ${tokens.contentSlotColor}: ${textPrimary};
                ${tokens.contentSlotColorHover}: ${textPrimaryHover};
                ${tokens.contentSlotColorActive}: ${textPrimaryActive};

                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${tokens.embedIconButtonFocusColor}: var(--surface-accent);
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
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${tokens.textFieldDividerColorFocus}: var(--surface-accent);

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
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.helpersPadding}: 0.25rem 0 0 0;
                ${tokens.helpersGap}: 0.25rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

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
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.helpersPadding}: 0.25rem 0 0 0;
                ${tokens.helpersGap}: 0.25rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

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
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.dividerFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.dividerFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.dividerFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.dividerFontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.dividerLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.dividerLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.leftContentMargin}: 0 0.875rem 0 0;
                ${tokens.rightContentMargin}: 0;

                ${tokens.textFieldHeight}: 3rem;
                ${tokens.textFieldBorderRadius}: 0.75rem;
                ${tokens.textFieldPadding}: 0.875rem 0;
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
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.labelLineHeight}: var(--plasma-typo-body-m-line-height);

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
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.helpersPadding}: 0.25rem 0 0 0;
                ${tokens.helpersGap}: 0.25rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

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
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.helpersPadding}: 0.25rem 0 0 0;
                ${tokens.helpersGap}: 0.25rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

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
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.dividerFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.dividerFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.dividerFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.dividerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.dividerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.dividerLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.leftContentMargin}: 0 0.5rem 0 0;
                ${tokens.rightContentMargin}: 0;

                ${tokens.textFieldHeight}: 2rem;
                ${tokens.textFieldBorderRadius}: 0.5rem;
                ${tokens.textFieldPadding}: 0.5625rem 0;
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
                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.labelLineHeight}: var(--plasma-typo-body-xs-line-height);

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
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.helpersPadding}: 0.25rem 0 0 0;
                ${tokens.helpersGap}: 0.25rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

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

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.tooltipTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.tooltipTextFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.tooltipTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.tooltipTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.tooltipTextFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.tooltipTextFontLineHeight}: var(--plasma-typo-body-xs-line-height);

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
