import { css, textAreaTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'primary',
        focused: 'true',
    },
    variations: {
        size: {
            xs: css`
                ${textAreaTokens.inputWidth}: 100%;
                ${textAreaTokens.inputHeight}: 7.312rem;
                ${textAreaTokens.inputMinHeight}: 0.625rem;
                ${textAreaTokens.borderRadius}: 0.5rem;
                ${textAreaTokens.borderRadiusWithHelpers}: 0.5rem;
                ${textAreaTokens.inputPaddingTop}: 0.563rem;
                ${textAreaTokens.inputPaddingRight}: 0.625rem;
                ${textAreaTokens.inputPaddingRightWithRightContent}: 2.125rem;
                ${textAreaTokens.clearInputPaddingRightWithRightContent}: 1.5rem;
                ${textAreaTokens.inputPaddingBottom}: 0.563rem;
                ${textAreaTokens.inputPaddingBottomWithHelpers}: 0.563rem;
                ${textAreaTokens.inputPaddingLeft}: 0.625rem;
                ${textAreaTokens.helpersPaddingTop}: 0.25rem;
                ${textAreaTokens.clearHelpersPaddingTop}: 0.25rem;
                ${textAreaTokens.helpersPaddingRight}: 0rem;
                ${textAreaTokens.helpersPaddingBottom}: 0rem;
                ${textAreaTokens.helpersPaddingLeft}: 0rem;
                ${textAreaTokens.helpersOffset}: 0.375rem;
                ${textAreaTokens.rightContentTop}: 0.563rem;
                ${textAreaTokens.rightContentRight}: 0.5rem;
                ${textAreaTokens.rightContentHeight}: 1rem;
                ${textAreaTokens.labelMarginBottom}: 0.375rem;
                ${textAreaTokens.clearLabelMarginBottom}: 0.25rem;
                ${textAreaTokens.labelInnerFontFamily}: 'SB Sans Text','SBSansText',sans-serif;
                ${textAreaTokens.labelInnerFontSize}: 0.625rem;
                ${textAreaTokens.labelInnerFontStyle}: normal;
                ${textAreaTokens.labelInnerFontWeight}: 400;
                ${textAreaTokens.labelInnerLetterSpacing}: -0.02em;
                ${textAreaTokens.labelInnerLineHeight}: 0.75rem;
                ${textAreaTokens.labelInnerTop}: 0rem;
                ${textAreaTokens.labelInnerMarginBottom}: 0rem;
                ${textAreaTokens.inputFontFamily}: var(--plasma-typo-caption-font-family);
                ${textAreaTokens.inputFontSize}: var(--plasma-typo-caption-font-size);
                ${textAreaTokens.inputFontStyle}: var(--plasma-typo-caption-font-style);
                ${textAreaTokens.inputFontWeight}: var(--plasma-typo-caption-font-weight);
                ${textAreaTokens.inputLetterSpacing}: var(--plasma-typo-caption-letter-spacing);
                ${textAreaTokens.inputLineHeight}: var(--plasma-typo-caption-line-height);
                ${textAreaTokens.helpersFontFamily}: var(--plasma-typo-caption-font-family);
                ${textAreaTokens.helpersFontSize}: var(--plasma-typo-caption-font-size);
                ${textAreaTokens.helpersFontStyle}: var(--plasma-typo-caption-font-style);
                ${textAreaTokens.helpersFontWeight}: var(--plasma-typo-caption-font-weight);
                ${textAreaTokens.helpersLetterSpacing}: var(--plasma-typo-caption-letter-spacing);
                ${textAreaTokens.helpersLineHeight}: var(--plasma-typo-caption-line-height);
                ${textAreaTokens.indicatorSizeInner}: 0.375rem;
                ${textAreaTokens.indicatorSizeOuter}: 0.375rem;
                ${textAreaTokens.indicatorLabelPlacementInner}: 0 0 0 0;
                ${textAreaTokens.indicatorLabelPlacementOuter}: 0.25rem auto auto -0.625rem;
                ${textAreaTokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${textAreaTokens.indicatorLabelPlacementOuterRight}: 0.125rem -0.675rem auto auto;
                ${textAreaTokens.clearIndicatorLabelPlacementInner}: 0.813rem auto auto -0.625rem;
                ${textAreaTokens.clearIndicatorLabelPlacementInnerRight}: 0.813rem -0.625rem auto auto;

                ${textAreaTokens.scrollbarWidth}: 0.188rem;
                ${textAreaTokens.scrollbarBorderWidth}: 0.063rem;
            `,
            s: css`
                ${textAreaTokens.inputWidth}: 100%;
                ${textAreaTokens.inputHeight}: 7.187rem;
                ${textAreaTokens.inputMinHeight}: 0.625rem;
                ${textAreaTokens.borderRadius}: 0.625rem;
                ${textAreaTokens.borderRadiusWithHelpers}: 0.625rem;
                ${textAreaTokens.inputPaddingTop}: 0.688rem;
                ${textAreaTokens.inputPaddingRight}: 0.875rem;
                ${textAreaTokens.inputPaddingRightWithRightContent}: 3.125rem;
                ${textAreaTokens.clearInputPaddingRightWithRightContent}: 2rem;
                ${textAreaTokens.inputPaddingBottom}: 0.75rem;
                ${textAreaTokens.inputPaddingBottomWithHelpers}: 0.75rem;
                ${textAreaTokens.inputPaddingLeft}: 0.875rem;
                ${textAreaTokens.helpersPaddingTop}: 0.25rem;
                ${textAreaTokens.clearHelpersPaddingTop}: 0.25rem;
                ${textAreaTokens.helpersPaddingRight}: 0rem;
                ${textAreaTokens.helpersPaddingBottom}: 0rem;
                ${textAreaTokens.helpersPaddingLeft}: 0rem;
                ${textAreaTokens.helpersOffset}: 0.375rem;
                ${textAreaTokens.rightContentTop}: 0.688rem;
                ${textAreaTokens.rightContentRight}: 0.75rem;
                ${textAreaTokens.rightContentHeight}: 1.25rem;
                ${textAreaTokens.labelMarginBottom}: 0.5rem;
                ${textAreaTokens.clearLabelMarginBottom}: 0.25rem;
                ${textAreaTokens.labelInnerFontFamily}: var(--plasma-typo-caption-font-family);
                ${textAreaTokens.labelInnerFontSize}: var(--plasma-typo-caption-font-size);
                ${textAreaTokens.labelInnerFontStyle}: var(--plasma-typo-caption-font-style);
                ${textAreaTokens.labelInnerFontWeight}: var(--plasma-typo-caption-font-weight);
                ${textAreaTokens.labelInnerLetterSpacing}: var(--plasma-typo-caption-letter-spacing);
                ${textAreaTokens.labelInnerLineHeight}: var(--plasma-typo-caption-line-height);
                ${textAreaTokens.labelInnerTop}: 0.375rem;
                ${textAreaTokens.labelInnerMarginBottom}: 0.125rem;
                ${textAreaTokens.inputFontFamily}: var(--plasma-typo-footnote1-font-family);
                ${textAreaTokens.inputFontSize}: var(--plasma-typo-footnote1-font-size);
                ${textAreaTokens.inputFontStyle}: var(--plasma-typo-footnote1-font-style);
                ${textAreaTokens.inputFontWeight}: var(--plasma-typo-footnote1-font-weight);
                ${textAreaTokens.inputLetterSpacing}: var(--plasma-typo-footnote1-letter-spacing);
                ${textAreaTokens.inputLineHeight}: var(--plasma-typo-footnote1-line-height);
                ${textAreaTokens.helpersFontFamily}: var(--plasma-typo-caption-font-family);
                ${textAreaTokens.helpersFontSize}: var(--plasma-typo-caption-font-size);
                ${textAreaTokens.helpersFontStyle}: var(--plasma-typo-caption-font-style);
                ${textAreaTokens.helpersFontWeight}: var(--plasma-typo-caption-font-weight);
                ${textAreaTokens.helpersLetterSpacing}: var(--plasma-typo-caption-letter-spacing);
                ${textAreaTokens.helpersLineHeight}: var(--plasma-typo-caption-line-height);
                ${textAreaTokens.indicatorSizeInner}: 0.375rem;
                ${textAreaTokens.indicatorSizeOuter}: 0.375rem;
                ${textAreaTokens.indicatorLabelPlacementInner}: 0 0 0 0;
                ${textAreaTokens.indicatorLabelPlacementOuter}: 0.375rem auto auto -0.675rem;
                ${textAreaTokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${textAreaTokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${textAreaTokens.clearIndicatorLabelPlacementInner}: 1.063rem auto auto -0.75rem;
                ${textAreaTokens.clearIndicatorLabelPlacementInnerRight}: 1.063rem -0.75rem auto auto;

                ${textAreaTokens.scrollbarWidth}: 0.188rem;
                ${textAreaTokens.scrollbarBorderWidth}: 0.063rem;
            `,
            m: css`
                ${textAreaTokens.inputWidth}: 100%;
                ${textAreaTokens.inputHeight}: 7rem;
                ${textAreaTokens.inputMinHeight}: 1.125rem;
                ${textAreaTokens.borderRadius}: 0.75rem;
                ${textAreaTokens.borderRadiusWithHelpers}: 0.75rem;
                ${textAreaTokens.inputPaddingTop}: 0.875rem;
                ${textAreaTokens.inputPaddingRight}: 1rem;
                ${textAreaTokens.inputPaddingRightWithRightContent}: 3.375rem;
                ${textAreaTokens.clearInputPaddingRightWithRightContent}: 2.125rem;
                ${textAreaTokens.inputPaddingBottom}: 0.75rem;
                ${textAreaTokens.inputPaddingBottomWithHelpers}: 0.75rem;
                ${textAreaTokens.inputPaddingLeft}: 1rem;
                ${textAreaTokens.helpersPaddingTop}: 0.25rem;
                ${textAreaTokens.clearHelpersPaddingTop}: 0.25rem;
                ${textAreaTokens.helpersPaddingRight}: 0rem;
                ${textAreaTokens.helpersPaddingBottom}: 0rem;
                ${textAreaTokens.helpersPaddingLeft}: 0rem;
                ${textAreaTokens.helpersOffset}: 0.375rem;
                ${textAreaTokens.rightContentTop}: 0.875rem;
                ${textAreaTokens.rightContentRight}: 0.875rem;
                ${textAreaTokens.rightContentHeight}: 1.25rem;
                ${textAreaTokens.labelMarginBottom}: 0.625rem;
                ${textAreaTokens.clearLabelMarginBottom}: 0.25rem;
                ${textAreaTokens.labelInnerFontFamily}: var(--plasma-typo-caption-font-family);
                ${textAreaTokens.labelInnerFontSize}: var(--plasma-typo-caption-font-size);
                ${textAreaTokens.labelInnerFontStyle}: var(--plasma-typo-caption-font-style);
                ${textAreaTokens.labelInnerFontWeight}: var(--plasma-typo-caption-font-weight);
                ${textAreaTokens.labelInnerLetterSpacing}: var(--plasma-typo-caption-letter-spacing);
                ${textAreaTokens.labelInnerLineHeight}: var(--plasma-typo-caption-line-height);
                ${textAreaTokens.labelInnerTop}: 0.375rem;
                ${textAreaTokens.labelInnerMarginBottom}: 0.125rem;
                ${textAreaTokens.inputFontFamily}: var(--plasma-typo-body1-font-family);
                ${textAreaTokens.inputFontSize}: var(--plasma-typo-body1-font-size);
                ${textAreaTokens.inputFontStyle}: var(--plasma-typo-body1-font-style);
                ${textAreaTokens.inputFontWeight}: var(--plasma-typo-body1-font-weight);
                ${textAreaTokens.inputLetterSpacing}: var(--plasma-typo-body1-letter-spacing);
                ${textAreaTokens.inputLineHeight}: var(--plasma-typo-body1-line-height);
                ${textAreaTokens.helpersFontFamily}: var(--plasma-typo-caption-font-family);
                ${textAreaTokens.helpersFontSize}: var(--plasma-typo-caption-font-size);
                ${textAreaTokens.helpersFontStyle}: var(--plasma-typo-caption-font-style);
                ${textAreaTokens.helpersFontWeight}: var(--plasma-typo-caption-font-weight);
                ${textAreaTokens.helpersLetterSpacing}: var(--plasma-typo-caption-letter-spacing);
                ${textAreaTokens.helpersLineHeight}: var(--plasma-typo-caption-line-height);
                ${textAreaTokens.indicatorSizeInner}: 0.5rem;
                ${textAreaTokens.indicatorSizeOuter}: 0.375rem;
                ${textAreaTokens.indicatorLabelPlacementInner}: 0 0 0 0;
                ${textAreaTokens.indicatorLabelPlacementOuter}: 0.4375rem auto auto -0.675rem;
                ${textAreaTokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${textAreaTokens.indicatorLabelPlacementOuterRight}: 0.1875rem -0.625rem auto auto;
                ${textAreaTokens.clearIndicatorLabelPlacementInner}: 1.25rem auto auto -0.875rem;
                ${textAreaTokens.clearIndicatorLabelPlacementInnerRight}: 1.25rem -0.875rem auto auto;

                ${textAreaTokens.scrollbarWidth}: 0.188rem;
                ${textAreaTokens.scrollbarBorderWidth}: 0.063rem;
            `,
            l: css`
                ${textAreaTokens.inputWidth}: 100%;
                ${textAreaTokens.inputHeight}: 6.812rem;
                ${textAreaTokens.inputMinHeight}: 1.625rem;
                ${textAreaTokens.borderRadius}: 0.875rem;
                ${textAreaTokens.borderRadiusWithHelpers}: 0.875rem;
                ${textAreaTokens.inputPaddingTop}: 1rem;
                ${textAreaTokens.inputPaddingRight}: 1.125rem;
                ${textAreaTokens.inputPaddingRightWithRightContent}: 3.625rem;
                ${textAreaTokens.clearInputPaddingRightWithRightContent}: 2.25rem;
                ${textAreaTokens.inputPaddingBottom}: 0.75rem;
                ${textAreaTokens.inputPaddingBottomWithHelpers}: 0.75rem;
                ${textAreaTokens.inputPaddingLeft}: 1.125rem;
                ${textAreaTokens.helpersPaddingTop}: 0.25rem;
                ${textAreaTokens.clearHelpersPaddingTop}: 0.25rem;
                ${textAreaTokens.helpersPaddingRight}: 0rem;
                ${textAreaTokens.helpersPaddingBottom}: 0rem;
                ${textAreaTokens.helpersPaddingLeft}: 0rem;
                ${textAreaTokens.helpersOffset}: 0.375rem;
                ${textAreaTokens.rightContentTop}: 1.063rem;
                ${textAreaTokens.rightContentRight}: 1rem;
                ${textAreaTokens.rightContentHeight}: 1.25rem;
                ${textAreaTokens.labelMarginBottom}: 0.75rem;
                ${textAreaTokens.clearLabelMarginBottom}: 0.25rem;
                ${textAreaTokens.labelInnerFontFamily}: var(--plasma-typo-caption-font-family);
                ${textAreaTokens.labelInnerFontSize}: var(--plasma-typo-caption-font-size);
                ${textAreaTokens.labelInnerFontStyle}: var(--plasma-typo-caption-font-style);
                ${textAreaTokens.labelInnerFontWeight}: var(--plasma-typo-caption-font-weight);
                ${textAreaTokens.labelInnerLetterSpacing}: var(--plasma-typo-caption-letter-spacing);
                ${textAreaTokens.labelInnerLineHeight}: var(--plasma-typo-caption-line-height);
                ${textAreaTokens.labelInnerTop}: 0.5625rem;
                ${textAreaTokens.labelInnerMarginBottom}: 0.125rem;
                ${textAreaTokens.inputFontFamily}: 'SB Sans Text','SBSansText',sans-serif;
                ${textAreaTokens.inputFontSize}: 1.125rem;
                ${textAreaTokens.inputFontStyle}: normal;
                ${textAreaTokens.inputFontWeight}: 400;
                ${textAreaTokens.inputLetterSpacing}: -0.02em;
                ${textAreaTokens.inputLineHeight}: 1.375rem;
                ${textAreaTokens.helpersFontFamily}: var(--plasma-typo-caption-font-family);
                ${textAreaTokens.helpersFontSize}: var(--plasma-typo-caption-font-size);
                ${textAreaTokens.helpersFontStyle}: var(--plasma-typo-caption-font-style);
                ${textAreaTokens.helpersFontWeight}: var(--plasma-typo-caption-font-weight);
                ${textAreaTokens.helpersLetterSpacing}: var(--plasma-typo-caption-letter-spacing);
                ${textAreaTokens.helpersLineHeight}: var(--plasma-typo-caption-line-height);
                ${textAreaTokens.indicatorSizeInner}: 0.5rem;
                ${textAreaTokens.indicatorSizeOuter}: 0.375rem;
                ${textAreaTokens.indicatorLabelPlacementInner}: 0 0 0 0;
                ${textAreaTokens.indicatorLabelPlacementOuter}: 0.5rem auto auto -0.675rem;
                ${textAreaTokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${textAreaTokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${textAreaTokens.clearIndicatorLabelPlacementInner}: 1.5rem auto auto -0.875rem;
                ${textAreaTokens.clearIndicatorLabelPlacementInnerRight}: 1.5rem -0.875rem auto auto;

                ${textAreaTokens.scrollbarWidth}: 0.188rem;
                ${textAreaTokens.scrollbarBorderWidth}: 0.063rem;
            `,
        },
        view: {
            default: css`
                ${textAreaTokens.inputBorderColor}: var(--text-tertiary);
                ${textAreaTokens.inputBorderColorHover}: var(--text-tertiary-hover);
                ${textAreaTokens.inputBorderColorActive}: var(--text-tertiary-hover);
                ${textAreaTokens.inputBorderColorFocus}: var(--text-accent);
                ${textAreaTokens.inputColor}: var(--text-primary);
                ${textAreaTokens.clearInputColor}: var(--text-primary);
                ${textAreaTokens.inputColorFocus}: var(--text-primary);
                ${textAreaTokens.inputCaretColor}: var(--text-accent);
                ${textAreaTokens.placeholderColor}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--text-tertiary);
                ${textAreaTokens.clearPlaceholderColor}: var(--text-secondary);
                ${textAreaTokens.clearPlaceholderColorFocus}: var(--text-tertiary);
                ${textAreaTokens.leftHelperColor}: var(--text-secondary);
                ${textAreaTokens.rightHelperColor}: var(--text-secondary);
                ${textAreaTokens.indicatorColor}: var(--surface-negative);
                ${textAreaTokens.optionalColor}: var(--text-tertiary);

                ${textAreaTokens.scrollbarThumbBackgroundColor}: var(--surface-transparent-tertiary);
                ${textAreaTokens.scrollbarThumbBackgroundColorHover}: var(--surface-transparent-tertiary-hover);
                ${textAreaTokens.scrollbarThumbBackgroundColorActive}: var(--surface-transparent-tertiary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColor}: var(--surface-transparent-primary);
                ${textAreaTokens.scrollbarTrackBackgroundColorActive}: var(--surface-transparent-primary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColorHover}: var(--surface-transparent-primary-hover);

                ${textAreaTokens.dividerColor}: var(--surface-transparent-tertiary);
                ${textAreaTokens.dividerColorHover}: var(--text-secondary);
                ${textAreaTokens.dividerColorFocus}: var(--surface-accent);
            `,
            /**
             * @deprecated
             * использовать `default`
             */
            primary: css`
                ${textAreaTokens.inputBorderColor}: var(--text-tertiary);
                ${textAreaTokens.inputBorderColorHover}: var(--text-tertiary-hover);
                ${textAreaTokens.inputBorderColorActive}: var(--text-tertiary-hover);
                ${textAreaTokens.inputBorderColorFocus}: var(--text-accent);
                ${textAreaTokens.inputColor}: var(--text-primary);
                ${textAreaTokens.clearInputColor}: var(--text-primary);
                ${textAreaTokens.inputColorFocus}: var(--text-primary);
                ${textAreaTokens.inputCaretColor}: var(--text-accent);
                ${textAreaTokens.placeholderColor}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--text-tertiary);
                ${textAreaTokens.clearPlaceholderColor}: var(--text-secondary);
                ${textAreaTokens.clearPlaceholderColorFocus}: var(--text-tertiary);
                ${textAreaTokens.leftHelperColor}: var(--text-secondary);
                ${textAreaTokens.rightHelperColor}: var(--text-secondary);
                ${textAreaTokens.indicatorColor}: var(--surface-negative);
                ${textAreaTokens.optionalColor}: var(--text-tertiary);

                ${textAreaTokens.scrollbarThumbBackgroundColor}: var(--surface-transparent-tertiary);
                ${textAreaTokens.scrollbarThumbBackgroundColorHover}: var(--surface-transparent-tertiary-hover);
                ${textAreaTokens.scrollbarThumbBackgroundColorActive}: var(--surface-transparent-tertiary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColor}: var(--surface-transparent-primary);
                ${textAreaTokens.scrollbarTrackBackgroundColorActive}: var(--surface-transparent-primary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColorHover}: var(--surface-transparent-primary-hover);

                ${textAreaTokens.dividerColor}: var(--surface-transparent-tertiary);
                ${textAreaTokens.dividerColorHover}: var(--text-secondary);
                ${textAreaTokens.dividerColorFocus}: var(--surface-accent);
            `,
            positive: css`
                ${textAreaTokens.inputBorderColor}: var(--text-positive);
                ${textAreaTokens.inputBorderColorHover}: var(--text-positive-hover);
                ${textAreaTokens.inputBorderColorActive}: var(--text-positive-hover);
                ${textAreaTokens.inputBorderColorFocus}: var(--text-positive);
                ${textAreaTokens.inputColor}: var(--text-primary);
                ${textAreaTokens.clearInputColor}: var(--text-positive);
                ${textAreaTokens.clearPlaceholderColor}: var(--text-positive);
                ${textAreaTokens.clearPlaceholderColorFocus}: var(--text-positive);
                ${textAreaTokens.inputColorFocus}: var(--text-primary);
                ${textAreaTokens.inputCaretColor}: var(--text-positive);
                ${textAreaTokens.placeholderColor}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--text-tertiary);
                ${textAreaTokens.leftHelperColor}: var(--text-positive);
                ${textAreaTokens.rightHelperColor}: var(--text-secondary);
                ${textAreaTokens.indicatorColor}: var(--surface-negative);
                ${textAreaTokens.optionalColor}: var(--text-tertiary);

                ${textAreaTokens.scrollbarThumbBackgroundColor}: var(--surface-transparent-tertiary);
                ${textAreaTokens.scrollbarThumbBackgroundColorHover}: var(--surface-transparent-tertiary-hover);
                ${textAreaTokens.scrollbarThumbBackgroundColorActive}: var(--surface-transparent-tertiary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColor}: var(--surface-transparent-primary);
                ${textAreaTokens.scrollbarTrackBackgroundColorActive}: var(--surface-transparent-primary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColorHover}: var(--surface-transparent-primary-hover);

                ${textAreaTokens.dividerColor}: var(--surface-positive);
                ${textAreaTokens.dividerColorHover}: var(--surface-positive);
                ${textAreaTokens.dividerColorFocus}: var(--surface-accent);
            `,
            warning: css`
                ${textAreaTokens.inputBorderColor}: var(--text-warning);
                ${textAreaTokens.inputBorderColorHover}: var(--text-warning-hover);
                ${textAreaTokens.inputBorderColorActive}: var(--text-warning-hover);
                ${textAreaTokens.inputBorderColorFocus}: var(--text-warning);
                ${textAreaTokens.inputColor}: var(--text-primary);
                ${textAreaTokens.clearInputColor}: var(--text-warning);
                ${textAreaTokens.clearPlaceholderColor}: var(--text-warning);
                ${textAreaTokens.clearPlaceholderColorFocus}: var(--text-warning);
                ${textAreaTokens.inputColorFocus}: var(--text-primary);
                ${textAreaTokens.inputCaretColor}: var(--text-warning);
                ${textAreaTokens.placeholderColor}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--text-tertiary);
                ${textAreaTokens.leftHelperColor}: var(--text-warning);
                ${textAreaTokens.rightHelperColor}: var(--text-secondary);
                ${textAreaTokens.indicatorColor}: var(--surface-negative);
                ${textAreaTokens.optionalColor}: var(--text-tertiary);

                ${textAreaTokens.scrollbarThumbBackgroundColor}: var(--surface-transparent-tertiary);
                ${textAreaTokens.scrollbarThumbBackgroundColorHover}: var(--surface-transparent-tertiary-hover);
                ${textAreaTokens.scrollbarThumbBackgroundColorActive}: var(--surface-transparent-tertiary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColor}: var(--surface-transparent-primary);
                ${textAreaTokens.scrollbarTrackBackgroundColorActive}: var(--surface-transparent-primary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColorHover}: var(--surface-transparent-primary-hover);

                ${textAreaTokens.dividerColor}: var(--surface-warning);
                ${textAreaTokens.dividerColorHover}: var(--surface-warning);
                ${textAreaTokens.dividerColorFocus}: var(--surface-accent);
            `,
            negative: css`
                ${textAreaTokens.inputBorderColor}: var(--text-negative);
                ${textAreaTokens.inputBorderColorHover}: var(--text-negative-hover);
                ${textAreaTokens.inputBorderColorActive}: var(--text-negative-hover);
                ${textAreaTokens.inputBorderColorFocus}: var(--text-negative);
                ${textAreaTokens.inputColor}: var(--text-primary);
                ${textAreaTokens.clearInputColor}: var(--text-negative);
                ${textAreaTokens.clearPlaceholderColor}: var(--text-negative);
                ${textAreaTokens.clearPlaceholderColorFocus}: var(--text-negative);
                ${textAreaTokens.inputColorFocus}: var(--text-primary);
                ${textAreaTokens.inputCaretColor}: var(--text-negative);
                ${textAreaTokens.placeholderColor}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--text-tertiary);
                ${textAreaTokens.leftHelperColor}: var(--text-negative);
                ${textAreaTokens.rightHelperColor}: var(--text-secondary);
                ${textAreaTokens.indicatorColor}: var(--surface-negative);
                ${textAreaTokens.optionalColor}: var(--text-tertiary);

                ${textAreaTokens.scrollbarThumbBackgroundColor}: var(--surface-transparent-tertiary);
                ${textAreaTokens.scrollbarThumbBackgroundColorHover}: var(--surface-transparent-tertiary-hover);
                ${textAreaTokens.scrollbarThumbBackgroundColorActive}: var(--surface-transparent-tertiary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColor}: var(--surface-transparent-primary);
                ${textAreaTokens.scrollbarTrackBackgroundColorActive}: var(--surface-transparent-primary-active);
                ${textAreaTokens.scrollbarTrackBackgroundColorHover}: var(--surface-transparent-primary-hover);

                ${textAreaTokens.dividerColor}: var(--surface-negative);
                ${textAreaTokens.dividerColorHover}: var(--surface-negative);
                ${textAreaTokens.dividerColorFocus}: var(--surface-accent);
            `,
        },
        clear: {
            true: css``,
        },
        disabled: {
            true: css`
                ${textAreaTokens.disabledOpacity}: 0.4;
                ${textAreaTokens.inputColorDisabled}: var(--text-secondary);
                ${textAreaTokens.dividerColorReadOnly}: var(--surface-transparent-primary);
            `,
        },
    },
};
