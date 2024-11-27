import { css, textFieldTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        labelPlacement: 'outer',
        chipView: 'secondary',
    },
    variations: {
        view: {
            default: css`
                ${tokens.color}: var(--text-primary);
                ${tokens.clearColor}: var(--text-primary);
                ${tokens.placeholderColorFocus}: var(--text-tertiary);
                ${tokens.clearPlaceholderColor}: var(--text-secondary);
                ${tokens.clearPlaceholderColorFocus}: var(--text-tertiary);
                ${tokens.backgroundColor}: var(--surface-transparent-primary);
                ${tokens.backgroundColorHover}: var(--surface-transparent-primary-hover);
                ${tokens.backgroundColorFocus}: var(--surface-transparent-secondary);
                ${tokens.caretColor}: var(--text-accent);
                ${tokens.placeholderColor}: var(--text-secondary);
                ${tokens.textBeforeColor}: var(--text-tertiary);
                ${tokens.textAfterColor}: var(--text-tertiary);
                ${tokens.labelColor}: var(--text-primary);
                ${tokens.leftHelperColor}: var(--text-secondary);
                ${tokens.titleCaptionColor}: var(--text-secondary);
                ${tokens.hintIconColor}: var(--text-secondary);

                ${tokens.contentSlotColor}: var(--text-secondary);
                ${tokens.contentSlotColorHover}: var(--text-secondary-hover);
                ${tokens.contentSlotColorActive}: var(--text-secondary-active);

                ${tokens.dividerColor}: var(--surface-transparent-tertiary);
                ${tokens.dividerColorHover}: var(--text-secondary);
                ${tokens.dividerColorFocus}: var(--surface-accent);

                ${tokens.focusColor}: var(--text-accent);
                ${tokens.indicatorColor}: var(--surface-negative);
                ${tokens.optionalColor}: var(--text-tertiary);
            `,
            positive: css`
                ${tokens.color}: var(--text-primary);
                ${tokens.clearColor}: var(--text-positive);
                ${tokens.clearPlaceholderColor}: var(--text-positive);
                ${tokens.placeholderColorFocus}: var(--text-tertiary);
                ${tokens.clearPlaceholderColorFocus}: var(--text-positive);
                ${tokens.backgroundColor}: var(--surface-transparent-positive);
                ${tokens.backgroundColorHover}: var(--surface-transparent-positive-hover);
                ${tokens.backgroundColorFocus}: var(--surface-transparent-positive-active);
                ${tokens.caretColor}: var(--text-accent);
                ${tokens.placeholderColor}: var(--text-secondary);
                ${tokens.textBeforeColor}: var(--text-tertiary);
                ${tokens.textAfterColor}: var(--text-tertiary);
                ${tokens.labelColor}: var(--text-primary);
                ${tokens.leftHelperColor}: var(--text-positive);
                ${tokens.titleCaptionColor}: var(--text-secondary);
                ${tokens.hintIconColor}: var(--text-secondary);

                ${tokens.contentSlotColor}: var(--text-secondary);
                ${tokens.contentSlotColorHover}: var(--text-secondary-hover);
                ${tokens.contentSlotColorActive}: var(--text-secondary-active);

                ${tokens.dividerColor}: var(--surface-positive);
                ${tokens.dividerColorHover}: var(--surface-positive);
                ${tokens.dividerColorFocus}: var(--surface-accent);

                ${tokens.focusColor}: var(--text-accent);
                ${tokens.indicatorColor}: var(--surface-negative);
                ${tokens.optionalColor}: var(--text-tertiary);
            `,
            warning: css`
                ${tokens.color}: var(--text-primary);
                ${tokens.clearColor}: var(--text-warning);
                ${tokens.clearPlaceholderColor}: var(--text-warning);
                ${tokens.placeholderColorFocus}: var(--text-tertiary);
                ${tokens.clearPlaceholderColorFocus}: var(--text-warning);
                ${tokens.backgroundColor}: var(--surface-transparent-warning);
                ${tokens.backgroundColorHover}: var(--surface-transparent-warning-hover);
                ${tokens.backgroundColorFocus}: var(--surface-transparent-warning-active);
                ${tokens.caretColor}: var(--text-accent);
                ${tokens.placeholderColor}: var(--text-secondary);
                ${tokens.textBeforeColor}: var(--text-tertiary);
                ${tokens.textAfterColor}: var(--text-tertiary);
                ${tokens.labelColor}: var(--text-primary);
                ${tokens.leftHelperColor}: var(--text-warning);
                ${tokens.titleCaptionColor}: var(--text-secondary);
                ${tokens.hintIconColor}: var(--text-secondary);

                ${tokens.contentSlotColor}: var(--text-secondary);
                ${tokens.contentSlotColorHover}: var(--text-secondary-hover);
                ${tokens.contentSlotColorActive}: var(--text-secondary-active);

                ${tokens.dividerColor}: var(--surface-warning);
                ${tokens.dividerColorHover}: var(--surface-warning);
                ${tokens.dividerColorFocus}: var(--surface-accent);

                ${tokens.focusColor}: var(--text-accent);
                ${tokens.indicatorColor}: var(--surface-negative);
                ${tokens.optionalColor}: var(--text-tertiary);
            `,
            negative: css`
                ${tokens.color}: var(--text-primary);
                ${tokens.clearColor}: var(--text-negative);
                ${tokens.clearPlaceholderColor}: var(--text-negative);
                ${tokens.placeholderColorFocus}: var(--text-tertiary);
                ${tokens.clearPlaceholderColorFocus}: var(--text-negative);
                ${tokens.backgroundColor}: var(--surface-transparent-negative);
                ${tokens.backgroundColorHover}: var(--surface-transparent-negative-hover);
                ${tokens.backgroundColorFocus}: var(--surface-transparent-negative-active);
                ${tokens.caretColor}: var(--text-accent);
                ${tokens.placeholderColor}: var(--text-secondary);
                ${tokens.textBeforeColor}: var(--text-tertiary);
                ${tokens.textAfterColor}: var(--text-tertiary);
                ${tokens.labelColor}: var(--text-primary);
                ${tokens.leftHelperColor}: var(--text-negative);
                ${tokens.titleCaptionColor}: var(--text-secondary);
                ${tokens.hintIconColor}: var(--text-secondary);

                ${tokens.contentSlotColor}: var(--text-secondary);
                ${tokens.contentSlotColorHover}: var(--text-secondary-hover);
                ${tokens.contentSlotColorActive}: var(--text-secondary-active);

                ${tokens.dividerColor}: var(--surface-negative);
                ${tokens.dividerColorHover}: var(--surface-negative);
                ${tokens.dividerColorFocus}: var(--surface-accent);

                ${tokens.focusColor}: var(--text-accent);
                ${tokens.indicatorColor}: var(--surface-negative);
                ${tokens.optionalColor}: var(--text-tertiary);
            `,
        },
        size: {
            l: css`
                ${tokens.height}: 3.5rem;
                ${tokens.padding}: 1.0625rem 1.125rem 1.0625rem 1.125rem;
                ${tokens.paddingWithChips}: 0.375rem;
                ${tokens.borderRadius}: 0.875rem;

                ${tokens.leftContentMargin}: -0.0625rem 0.5rem -0.0625rem -0.125rem;
                ${tokens.rightContentMargin}: -0.0625rem -0.125rem -0.0625rem 0.75rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.labelOffset}: 0.75rem;
                ${tokens.clearLabelOffset}: 0.25rem;
                ${tokens.labelFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.labelFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: -0.751rem -2rem auto auto;
                ${tokens.clearHintInnerLabelPlacementOffset}: 0.562rem -2.063rem auto auto;

                ${tokens.titleCaptionInnerLabelOffset}: 0.25rem;
                ${tokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.leftHelperOffset}: 0.25rem;
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.labelInnerPadding}: 0.5625rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.5625rem 0 0.5625rem 0;
                ${tokens.textBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textAfterMargin}: 0 0 0 0.25rem;

                ${tokens.chipGap}: 0.25rem;
                ${tokens.chipBorderRadius}: 0.5rem;
                ${tokens.chipWidth}: auto;
                ${tokens.chipHeight}: 2.75rem;
                ${tokens.chipPaddingRight}: 0.75rem;
                ${tokens.chipPaddingLeft}: 1rem;
                ${tokens.chipClearContentMarginLeft}: 0.625rem;
                ${tokens.chipClearContentMarginRight}: 0rem;
                ${tokens.chipCloseIconSize}: 1.5rem;
                ${tokens.chipFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.chipFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.chipFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.chipFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.chipLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.chipLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.indicatorSizeInner}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.indicatorLabelPlacementOuter}: 0.5rem auto auto -0.75rem;
                ${tokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${tokens.clearIndicatorLabelPlacementInner}: 1.5rem auto auto -0.875rem;
                ${tokens.clearIndicatorLabelPlacementInnerRight}: 1.5rem -0.875rem auto auto;
                ${tokens.clearIndicatorHintInnerRight}: 1.5rem -2.25rem auto auto;
            `,
            m: css`
                ${tokens.height}: 3rem;
                ${tokens.padding}: 0.875rem 1rem 0.875rem 1rem;
                ${tokens.paddingWithChips}: 0.375rem;
                ${tokens.borderRadius}: 0.75rem;

                ${tokens.leftContentMargin}: -0.125rem 0.375rem -0.125rem -0.125rem;
                ${tokens.rightContentMargin}: -0.125rem -0.125rem -0.125rem 0.75rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.labelOffset}: 0.625rem;
                ${tokens.clearLabelOffset}: 0.25rem;
                ${tokens.labelFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.labelFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: -0.751rem -2rem auto auto;
                ${tokens.clearHintInnerLabelPlacementOffset}: 0.312rem -2.063rem auto auto;

                ${tokens.titleCaptionInnerLabelOffset}: 0.25rem;
                ${tokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.leftHelperOffset}: 0.25rem;
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.labelInnerPadding}: 0.375rem 0 0.125rem 0;
                ${tokens.contentLabelInnerPadding}: 1.375rem 0 0.375rem 0;
                ${tokens.textBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textAfterMargin}: 0 0 0 0.25rem;

                ${tokens.chipGap}: 0.25rem;
                ${tokens.chipBorderRadius}: 0.375rem;
                ${tokens.chipWidth}: auto;
                ${tokens.chipHeight}: 2.25rem;
                ${tokens.chipPaddingRight}: 0.625rem;
                ${tokens.chipPaddingLeft}: 0.875rem;
                ${tokens.chipClearContentMarginLeft}: 0.5rem;
                ${tokens.chipClearContentMarginRight}: 0rem;
                ${tokens.chipCloseIconSize}: 1.25rem;
                ${tokens.chipFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.chipFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.chipFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.chipFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.chipLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.chipLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.indicatorSizeInner}: 0.5rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.indicatorLabelPlacementOuter}: 0.375rem auto auto -0.75rem;
                ${tokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.6875rem auto auto;
                ${tokens.clearIndicatorLabelPlacementInner}: 1.25rem auto auto -0.875rem;
                ${tokens.clearIndicatorLabelPlacementInnerRight}: 1.25rem -0.875rem auto auto;
                ${tokens.clearIndicatorHintInnerRight}: 1.25rem -2.25rem auto auto;
            `,
            s: css`
                ${tokens.height}: 2.5rem;
                ${tokens.padding}: 0.6875rem 0.875rem 0.6875rem 0.875rem;
                ${tokens.paddingWithChips}: 0.375rem;
                ${tokens.borderRadius}: 0.625rem;

                ${tokens.leftContentMargin}: -0.1875rem 0.25rem -0.1875rem -0.125rem;
                ${tokens.rightContentMargin}: -0.1875rem -0.125rem -0.1875rem 0.75rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.labelOffset}: 0.5rem;
                ${tokens.clearLabelOffset}: 0.25rem;
                ${tokens.labelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.labelFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.hintMargin}: -0.688rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: -0.751rem -2rem auto auto;
                ${tokens.clearHintInnerLabelPlacementOffset}: 0.062rem -2.063rem auto auto;

                ${tokens.titleCaptionInnerLabelOffset}: 0.25rem;
                ${tokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.leftHelperOffset}: 0.25rem;
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.labelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.contentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;
                ${tokens.textBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textAfterMargin}: 0 0 0 0.25rem;

                ${tokens.chipGap}: 0.25rem;
                ${tokens.chipBorderRadius}: 0.25rem;
                ${tokens.chipWidth}: auto;
                ${tokens.chipHeight}: 1.75rem;
                ${tokens.chipPaddingRight}: 0.5rem;
                ${tokens.chipPaddingLeft}: 0.75rem;
                ${tokens.chipClearContentMarginLeft}: 0.375rem;
                ${tokens.chipClearContentMarginRight}: 0rem;
                ${tokens.chipCloseIconSize}: 1rem;
                ${tokens.chipFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.chipFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.chipFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.chipFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.chipLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.chipLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.indicatorSizeInner}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.indicatorLabelPlacementOuter}: 0.3125rem auto auto -0.6875rem;
                ${tokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${tokens.clearIndicatorLabelPlacementInner}: 1.063rem auto auto -0.75rem;
                ${tokens.clearIndicatorLabelPlacementInnerRight}: 1.063rem -0.75rem auto auto;
                ${tokens.clearIndicatorHintInnerRight}: 1.063rem -2.125rem auto auto;
            `,
            xs: css`
                ${tokens.height}: 2rem;
                ${tokens.padding}: 0.5625rem 0.625rem 0.5625rem 0.625rem;
                ${tokens.paddingWithChips}: 0.375rem;
                ${tokens.borderRadius}: 0.5rem;

                ${tokens.leftContentMargin}: -0.0625rem 0.25rem -0.0625rem -0.125rem;
                ${tokens.rightContentMargin}: -0.0625rem -0.125rem -0.0625rem 0.75rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.labelOffset}: 0.375rem;
                ${tokens.clearLabelOffset}: 0.25rem;
                ${tokens.labelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.labelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.labelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.labelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.labelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.labelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.hintMargin}: -0.75rem -0.625rem -0.75rem -0.5rem;
                ${tokens.hintTargetSize}: 2.375rem;
                ${tokens.hintInnerLabelPlacementOffset}: -0.751rem -1.875rem auto auto;
                ${tokens.clearHintInnerLabelPlacementOffset}: -0.188rem -1.938rem auto auto;

                ${tokens.titleCaptionInnerLabelOffset}: 0.25rem;
                ${tokens.titleCaptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.titleCaptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.titleCaptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.titleCaptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.titleCaptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.titleCaptionLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.leftHelperOffset}: 0.25rem;
                ${tokens.leftHelperFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.leftHelperFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.leftHelperFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.leftHelperFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.leftHelperLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.leftHelperLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.labelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.contentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;
                ${tokens.textBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textAfterMargin}: 0 0 0 0.25rem;

                ${tokens.chipGap}: 0.25rem;
                ${tokens.chipBorderRadius}: 0.125rem;
                ${tokens.chipWidth}: auto;
                ${tokens.chipHeight}: 1.25rem;
                ${tokens.chipPaddingRight}: 0.375rem;
                ${tokens.chipPaddingLeft}: 0.625rem;
                ${tokens.chipClearContentMarginLeft}: 0.25rem;
                ${tokens.chipClearContentMarginRight}: 0rem;
                ${tokens.chipCloseIconSize}: 0.75rem;
                ${tokens.chipFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.chipFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.chipFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.chipFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.chipLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.chipLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.indicatorSizeInner}: 0.375rem;
                ${tokens.indicatorSizeOuter}: 0.375rem;
                ${tokens.indicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.indicatorLabelPlacementOuter}: 0.25rem auto auto -0.625rem;
                ${tokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.indicatorLabelPlacementOuterRight}: 0.125rem -0.6875rem auto auto;
                ${tokens.clearIndicatorLabelPlacementInner}: 0.813rem auto auto -0.625rem;
                ${tokens.clearIndicatorLabelPlacementInnerRight}: 0.813rem -0.625rem auto auto;
                ${tokens.clearIndicatorHintInnerRight}: 0.813rem -1.875rem auto auto;
            `,
        },
        labelPlacement: {
            inner: css`
                ${tokens.placeholderColor}: var(--plasma-input-label-color, var(--plasma-input-placeholder-color, var(--text-secondary)));
                ${tokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            outer: css``,
        },
        clear: {
            true: css``,
        },
        chipView: {
            default: css`
                ${tokens.chipColor}: var(--inverse-text-primary);
                ${tokens.chipBackground}: var(--surface-solid-default);
                ${tokens.chipColorHover}: var(--inverse-text-primary);
                ${tokens.chipBackgroundHover}: var(--surface-solid-default-hover);
                ${tokens.chipColorActive}: var(--inverse-text-primary);
                ${tokens.chipBackgroundActive}: var(--surface-solid-default-active);
                ${tokens.chipBackgroundReadOnly}: var(--surface-solid-default);
                ${tokens.chipColorReadOnly}: var(--inverse-text-primary);
                ${tokens.chipBackgroundReadOnlyHover}: var(--surface-solid-default);
                ${tokens.chipColorReadOnlyHover}: var(--inverse-text-primary);

                ${tokens.chipCloseIconColor}: var(--inverse-text-secondary);
                ${tokens.chipOpacityReadonly}: 0.72;
            `,
            secondary: css`
                ${tokens.chipColor}: var(--text-primary);
                ${tokens.chipBackground}: var(--surface-transparent-secondary);
                ${tokens.chipColorHover}: var(--text-primary);
                ${tokens.chipBackgroundHover}: var(--surface-transparent-secondary-hover);
                ${tokens.chipColorActive}: var(--text-primary);
                ${tokens.chipBackgroundActive}: var(--surface-transparent-secondary-active);
                ${tokens.chipBackgroundReadOnly}: var(--surface-transparent-secondary);
                ${tokens.chipColorReadOnly}: var(--text-primary);
                ${tokens.chipBackgroundReadOnlyHover}: var(--surface-transparent-secondary);
                ${tokens.chipColorReadOnlyHover}: var(--text-primary);

                ${tokens.chipCloseIconColor}: var(--text-secondary);
                ${tokens.chipOpacityReadonly}: 0.72;
            `,
            accent: css`
                ${tokens.chipColor}: var(--on-dark-text-primary);
                ${tokens.chipBackground}: var(--surface-accent);
                ${tokens.chipColorHover}: var(--on-dark-text-primary);
                ${tokens.chipBackgroundHover}: var(--surface-accent-hover);
                ${tokens.chipColorActive}: var(--on-dark-text-primary);
                ${tokens.chipBackgroundActive}: var(--surface-accent-active);
                ${tokens.chipBackgroundReadOnly}: var(--surface-accent);
                ${tokens.chipColorReadOnly}: var(--on-dark-text-primary);
                ${tokens.chipBackgroundReadOnlyHover}: var(--surface-accent);
                ${tokens.chipColorReadOnlyHover}: var(--on-dark-text-primary);

                ${tokens.chipCloseIconColor}: var(--on-dark-text-secondary);
                ${tokens.chipOpacityReadonly}: 0.72;
            `,
            positive: css`
                ${tokens.chipColor}: var(--on-dark-text-primary);
                ${tokens.chipBackground}: var(--surface-positive);
                ${tokens.chipColorHover}: var(--on-dark-text-primary);
                ${tokens.chipBackgroundHover}: var(--surface-positive-hover);
                ${tokens.chipColorActive}: var(--on-dark-text-primary);
                ${tokens.chipBackgroundActive}: var(--surface-positive-active);
                ${tokens.chipBackgroundReadOnly}: var(--surface-positive);
                ${tokens.chipColorReadOnly}: var(--on-dark-text-primary);
                ${tokens.chipBackgroundReadOnlyHover}: var(--surface-positive);
                ${tokens.chipColorReadOnlyHover}: var(--on-dark-text-primary);

                ${tokens.chipCloseIconColor}: var(--on-dark-text-secondary);
                ${tokens.chipOpacityReadonly}: 0.72;
            `,
            warning: css`
                ${tokens.chipColor}: var(--on-dark-text-primary);
                ${tokens.chipBackground}: var(--surface-warning);
                ${tokens.chipColorHover}: var(--on-dark-text-primary);
                ${tokens.chipBackgroundHover}: var(--surface-warning-hover);
                ${tokens.chipColorActive}: var(--on-dark-text-primary);
                ${tokens.chipBackgroundActive}: var(--surface-warning-active);
                ${tokens.chipBackgroundReadOnly}: var(--surface-warning);
                ${tokens.chipColorReadOnly}: var(--on-dark-text-primary);
                ${tokens.chipBackgroundReadOnlyHover}: var(--surface-warning);
                ${tokens.chipColorReadOnlyHover}: var(--on-dark-text-primary);

                ${tokens.chipCloseIconColor}: var(--on-dark-text-secondary);
                ${tokens.chipOpacityReadonly}: 0.72;
            `,
            negative: css`
                ${tokens.chipColor}: var(--on-dark-text-primary);
                ${tokens.chipBackground}: var(--surface-negative);
                ${tokens.chipColorHover}: var(--on-dark-text-primary);
                ${tokens.chipBackgroundHover}: var(--surface-negative-hover);
                ${tokens.chipColorActive}: var(--on-dark-text-primary);
                ${tokens.chipBackgroundActive}: var(--surface-negative-active);
                ${tokens.chipBackgroundReadOnly}: var(--surface-negative);
                ${tokens.chipColorReadOnly}: var(--on-dark-text-primary);
                ${tokens.chipBackgroundReadOnlyHover}: var(--surface-negative);
                ${tokens.chipColorReadOnlyHover}: var(--on-dark-text-primary);

                ${tokens.chipCloseIconColor}: var(--on-dark-text-secondary);
                ${tokens.chipOpacityReadonly}: 0.72;
            `,
        },
        hintView: {
            default: css`
                ${tokens.tooltipBackgroundColor}: var(--surface-solid-card-brightness);
                ${tokens.tooltipBoxShadow}: var(--shadow-down-hard-m, 0px 4px 12px 0px rgba(0, 0, 0, 0.16),0px 1px 4px 0px rgba(0, 0, 0, 0.08));
                ${tokens.tooltipColor}: var(--text-primary);
                ${tokens.tooltipArrowBackground}: var(--surface-solid-card-brightness);
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

                ${tokens.tooltipTextFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.tooltipTextFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.tooltipTextFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.tooltipTextFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.tooltipTextFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.tooltipTextFontLineHeight}: var(--plasma-typo-body-s-line-height);

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

                ${tokens.tooltipTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.tooltipTextFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.tooltipTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.tooltipTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.tooltipTextFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
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
                ${tokens.colorReadOnly}: var(--text-secondary);
                ${tokens.backgroundColorReadOnly}: var(--surface-transparent-primary);
                ${tokens.placeholderColorReadOnly}: var(--text-secondary);
                ${tokens.leftHelperColorReadOnly}: var(--text-secondary);
                ${tokens.titleCaptionColorReadOnly}: var(--text-secondary);
                ${tokens.labelColorReadOnly}: var(--text-secondary);
                ${tokens.dividerColorReadOnly}: var(--surface-transparent-primary);
            `,
        },
    },
};
