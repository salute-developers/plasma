import { css, sliderTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${sliderTokens.labelColor}: var(--text-primary);

                ${sliderTokens.rangeValueColor}: var(--text-secondary);

                ${sliderTokens.thumbBorderColor}: var(--surface-solid-tertiary);
                ${sliderTokens.thumbBackgroundColor}: var(--on-light-surface-solid-card);
                ${sliderTokens.thumbFocusBorderColor}: var(--surface-solid-default);

                ${sliderTokens.railBackgroundColor}: var(--surface-solid-tertiary);

                ${sliderTokens.fillColor}: var(--surface-solid-default);

                ${sliderTokens.textFieldColor}: var(--text-secondary);
                ${sliderTokens.textFieldBackgroundColor}: var(--surface-transparent-primary);
                ${sliderTokens.textFieldCaretColor}: var(--text-primary);
                ${sliderTokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${sliderTokens.textFiledFocusColor}: var(--text-primary);
                ${sliderTokens.textFieldActiveColor}: var(--text-primary);
            `,
            accent: css`
                ${sliderTokens.labelColor}: var(--text-primary);

                ${sliderTokens.rangeValueColor}: var(--text-secondary);

                ${sliderTokens.thumbBorderColor}: var(--surface-solid-tertiary);
                ${sliderTokens.thumbBackgroundColor}: var(--on-light-surface-solid-card);
                ${sliderTokens.thumbFocusBorderColor}: var(--surface-accent);

                ${sliderTokens.railBackgroundColor}: var(--surface-solid-tertiary);

                ${sliderTokens.fillColor}: var(--surface-accent);

                ${sliderTokens.textFieldColor}: var(--text-secondary);
                ${sliderTokens.textFieldBackgroundColor}: var(--surface-transparent-primary);
                ${sliderTokens.textFieldCaretColor}: var(--text-primary);
                ${sliderTokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${sliderTokens.textFiledFocusColor}: var(--text-primary);
                ${sliderTokens.textFieldActiveColor}: var(--text-primary);
            `,
            gradient: css`
                ${sliderTokens.labelColor}: var(--text-primary);

                ${sliderTokens.rangeValueColor}: var(--text-secondary);

                ${sliderTokens.thumbBorderColor}: var(--surface-solid-tertiary);
                ${sliderTokens.thumbBackgroundColor}: var(--on-light-surface-solid-card);
                ${sliderTokens.thumbFocusBorderColor}: var(--surface-accent-gradient);

                ${sliderTokens.railBackgroundColor}: var(--surface-solid-tertiary);

                ${sliderTokens.fillColor}: var(--surface-accent-gradient);

                ${sliderTokens.textFieldColor}: var(--text-secondary);
                ${sliderTokens.textFieldBackgroundColor}: var(--surface-transparent-primary);
                ${sliderTokens.textFieldCaretColor}: var(--text-primary);
                ${sliderTokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${sliderTokens.textFiledFocusColor}: var(--text-primary);
                ${sliderTokens.textFieldActiveColor}: var(--text-primary);
            `,
        },
        size: {
            l: css`
                ${sliderTokens.height}: 1.5rem;
                ${sliderTokens.doubleWrapperGap}: 0.375rem;

                ${sliderTokens.labelWrapperGap}: 0.25rem;
                ${sliderTokens.labelWrapperMarginBottom}: 0.25rem;
                ${sliderTokens.labelWrapperMarginRight}: 0.875rem;

                ${sliderTokens.labelFontFamily}: var(--plasma-typo-body-l-font-family);
                ${sliderTokens.labelFontSize}: var(--plasma-typo-body-l-font-size);
                ${sliderTokens.labelFontStyle}: var(--plasma-typo-body-l-font-style);
                ${sliderTokens.labelFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${sliderTokens.labelLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${sliderTokens.labelLineHeight}: var(--plasma-typo-body-l-line-height);

                ${sliderTokens.rangeMinValueMargin}: 0.75rem;
                ${sliderTokens.rangeMaxValueMargin}: 0.75rem;
                ${sliderTokens.rangeValueBottomOffset}: -1.25rem;

                ${sliderTokens.rangeValueFontFamily}: var(--plasma-typo-body-s-font-family);
                ${sliderTokens.rangeValueFontSize}: var(--plasma-typo-body-s-font-size);
                ${sliderTokens.rangeValueFontStyle}: var(--plasma-typo-body-s-font-style);
                ${sliderTokens.rangeValueFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${sliderTokens.rangeValueLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${sliderTokens.rangeValueLineHeight}: var(--plasma-typo-body-s-line-height);

                ${sliderTokens.thumbSize}: 1.5rem;
                ${sliderTokens.thumbBorder}: 0.125rem solid;

                ${sliderTokens.currentValueTopOffset}: 1.625rem;

                ${sliderTokens.currentValueFontFamily}: var(--plasma-typo-text-s-font-family);
                ${sliderTokens.currentValueFontSize}: var(--plasma-typo-text-s-font-size);
                ${sliderTokens.currentValueFontStyle}: var(--plasma-typo-text-s-font-style);
                ${sliderTokens.currentValueFontWeight}: var(--plasma-typo-text-s-font-weight);
                ${sliderTokens.currentValueLetterSpacing}: var(--plasma-typo-text-s-letter-spacing);
                ${sliderTokens.currentValueLineHeight}: var(--plasma-typo-text-s-line-height);

                ${sliderTokens.railHeight}: 0.25rem;
                ${sliderTokens.railBorderRadius}: 0.125rem;
                ${sliderTokens.railIndent}: 0.75rem;

                ${sliderTokens.textFieldWrapperGap}: 0.125rem;

                ${sliderTokens.textFieldHeight}: 3.5rem;
                ${sliderTokens.textFieldPadding}: 1.25rem 1rem 1.25rem 1rem;
                ${sliderTokens.textFieldBorderRadius}: 0.75rem;
                ${sliderTokens.textFieldFontFamily}: var(--plasma-typo-body-l-font-family);
                ${sliderTokens.textFieldFontSize}: var(--plasma-typo-body-l-font-size);
                ${sliderTokens.textFieldFontStyle}: var(--plasma-typo-body-l-font-style);
                ${sliderTokens.textFieldFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${sliderTokens.textFieldLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${sliderTokens.textFieldLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            m: css`
                ${sliderTokens.height}: 1.5rem;
                ${sliderTokens.doubleWrapperGap}: 0.375rem;

                ${sliderTokens.labelWrapperGap}: 0.25rem;
                ${sliderTokens.labelWrapperMarginBottom}: 0.25rem;
                ${sliderTokens.labelWrapperMarginRight}: 0.875rem;

                ${sliderTokens.labelFontFamily}: var(--plasma-typo-body-m-font-family);
                ${sliderTokens.labelFontSize}: var(--plasma-typo-body-m-font-size);
                ${sliderTokens.labelFontStyle}: var(--plasma-typo-body-m-font-style);
                ${sliderTokens.labelFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${sliderTokens.labelLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${sliderTokens.labelLineHeight}: var(--plasma-typo-body-m-line-height);

                ${sliderTokens.rangeMinValueMargin}: 0.75rem;
                ${sliderTokens.rangeMaxValueMargin}: 0.75rem;
                ${sliderTokens.rangeValueBottomOffset}: -1.25rem;

                ${sliderTokens.rangeValueFontFamily}: var(--plasma-typo-body-s-font-family);
                ${sliderTokens.rangeValueFontSize}: var(--plasma-typo-body-s-font-size);
                ${sliderTokens.rangeValueFontStyle}: var(--plasma-typo-body-s-font-style);
                ${sliderTokens.rangeValueFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${sliderTokens.rangeValueLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${sliderTokens.rangeValueLineHeight}: var(--plasma-typo-body-s-line-height);

                ${sliderTokens.thumbSize}: 1.5rem;
                ${sliderTokens.thumbBorder}: 0.125rem solid;

                ${sliderTokens.currentValueTopOffset}: 1.75rem;

                ${sliderTokens.currentValueFontFamily}: var(--plasma-typo-text-xs-font-family);
                ${sliderTokens.currentValueFontSize}: var(--plasma-typo-text-xs-font-size);
                ${sliderTokens.currentValueFontStyle}: var(--plasma-typo-text-xs-font-style);
                ${sliderTokens.currentValueFontWeight}: var(--plasma-typo-text-xs-font-weight);
                ${sliderTokens.currentValueLetterSpacing}: var(--plasma-typo-text-xs-letter-spacing);
                ${sliderTokens.currentValueLineHeight}: var(--plasma-typo-text-xs-line-height);

                ${sliderTokens.railHeight}: 0.25rem;
                ${sliderTokens.railBorderRadius}: 0.125rem;
                ${sliderTokens.railIndent}: 0.75rem;

                ${sliderTokens.textFieldWrapperGap}: 0.125rem;

                ${sliderTokens.textFieldHeight}: 3rem;
                ${sliderTokens.textFieldPadding}: 0.875rem 1rem 0.875rem 1rem;
                ${sliderTokens.textFieldBorderRadius}: 0.75rem;
                ${sliderTokens.textFieldFontFamily}: var(--plasma-typo-body-m-font-family);
                ${sliderTokens.textFieldFontSize}: var(--plasma-typo-body-m-font-size);
                ${sliderTokens.textFieldFontStyle}: var(--plasma-typo-body-m-font-style);
                ${sliderTokens.textFieldFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${sliderTokens.textFieldLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${sliderTokens.textFieldLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            s: css`
                ${sliderTokens.height}: 1rem;
                ${sliderTokens.doubleWrapperGap}: 0.375rem;

                ${sliderTokens.labelWrapperGap}: 0.25rem;
                ${sliderTokens.labelWrapperMarginBottom}: 0.25rem;
                ${sliderTokens.labelWrapperMarginRight}: 0.875rem;

                ${sliderTokens.labelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${sliderTokens.labelFontSize}: var(--plasma-typo-body-s-font-size);
                ${sliderTokens.labelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${sliderTokens.labelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${sliderTokens.labelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${sliderTokens.labelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${sliderTokens.rangeMinValueMargin}: 0.5rem;
                ${sliderTokens.rangeMaxValueMargin}: 0.5rem;
                ${sliderTokens.rangeValueBottomOffset}: -1.25rem;

                ${sliderTokens.rangeValueFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${sliderTokens.rangeValueFontSize}: var(--plasma-typo-body-xs-font-size);
                ${sliderTokens.rangeValueFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${sliderTokens.rangeValueFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${sliderTokens.rangeValueLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${sliderTokens.rangeValueLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${sliderTokens.thumbSize}: 1rem;
                ${sliderTokens.thumbBorder}: 0.125rem solid;

                ${sliderTokens.currentValueTopOffset}: 1.25rem;

                ${sliderTokens.currentValueFontFamily}: var(--plasma-typo-text-xs-font-family);
                ${sliderTokens.currentValueFontSize}: var(--plasma-typo-text-xs-font-size);
                ${sliderTokens.currentValueFontStyle}: var(--plasma-typo-text-xs-font-style);
                ${sliderTokens.currentValueFontWeight}: var(--plasma-typo-text-xs-font-weight);
                ${sliderTokens.currentValueLetterSpacing}: var(--plasma-typo-text-xs-letter-spacing);
                ${sliderTokens.currentValueLineHeight}: var(--plasma-typo-text-xs-line-height);

                ${sliderTokens.railHeight}: 0.25rem;
                ${sliderTokens.railBorderRadius}: 0.125rem;
                ${sliderTokens.railIndent}: 0.75rem;

                ${sliderTokens.textFieldWrapperGap}: 0.125rem;

                ${sliderTokens.textFieldHeight}: 2.5rem;
                ${sliderTokens.textFieldPadding}: 0.5rem 1rem 0.5rem 1rem;
                ${sliderTokens.textFieldBorderRadius}: 0.625rem;
                ${sliderTokens.textFieldFontFamily}: var(--plasma-typo-body-s-font-family);
                ${sliderTokens.textFieldFontSize}: var(--plasma-typo-body-s-font-size);
                ${sliderTokens.textFieldFontStyle}: var(--plasma-typo-body-s-font-style);
                ${sliderTokens.textFieldFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${sliderTokens.textFieldLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${sliderTokens.textFieldLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
        },
        disabled: {
            true: css`
                ${sliderTokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
