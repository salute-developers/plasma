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

                ${sliderTokens.thumbBorderColor}: var(--outline-solid-tertiary);
                ${sliderTokens.thumbBackgroundColor}: var(--on-light-surface-solid-card);
                ${sliderTokens.thumbFocusBorderColor}: var(--surface-solid-default);

                ${sliderTokens.railBackgroundColor}: var(--surface-solid-tertiary);

                ${sliderTokens.fillColor}: var(--surface-solid-default);

                ${sliderTokens.textFieldCaretColor}: var(--text-accent);
                ${sliderTokens.textFieldColor}: var(--text-primary);
                ${sliderTokens.textFiledFocusColor}: var(--text-primary);
                ${sliderTokens.textFieldPlaceholderColor}: var(--text-secondary);

                ${sliderTokens.textFieldBackgroundColor}: var(--surface-transparent-primary);
                ${sliderTokens.textFieldBackgroundColorHover}: var(--surface-transparent-primary-hover);
                ${sliderTokens.textFieldBackgroundColorFocus}: var(--surface-transparent-secondary);
            `,
            accent: css`
                ${sliderTokens.labelColor}: var(--text-primary);

                ${sliderTokens.rangeValueColor}: var(--text-secondary);

                ${sliderTokens.thumbBorderColor}: var(--outline-solid-tertiary);
                ${sliderTokens.thumbBackgroundColor}: var(--on-light-surface-solid-card);
                ${sliderTokens.thumbFocusBorderColor}: var(--surface-accent);

                ${sliderTokens.railBackgroundColor}: var(--surface-solid-tertiary);

                ${sliderTokens.fillColor}: var(--surface-accent);

                ${sliderTokens.textFieldCaretColor}: var(--text-accent);
                ${sliderTokens.textFieldColor}: var(--text-primary);
                ${sliderTokens.textFiledFocusColor}: var(--text-primary);
                ${sliderTokens.textFieldPlaceholderColor}: var(--text-secondary);

                ${sliderTokens.textFieldBackgroundColor}: var(--surface-transparent-primary);
                ${sliderTokens.textFieldBackgroundColorHover}: var(--surface-transparent-primary-hover);
                ${sliderTokens.textFieldBackgroundColorFocus}: var(--surface-transparent-secondary);
            `,
            gradient: css`
                ${sliderTokens.labelColor}: var(--text-primary);

                ${sliderTokens.rangeValueColor}: var(--text-secondary);

                ${sliderTokens.thumbBorderColor}: var(--surface-solid-tertiary);
                ${sliderTokens.thumbBackgroundColor}: var(--on-light-surface-solid-card);
                ${sliderTokens.thumbFocusBorderColor}: var(--surface-accent-gradient);

                ${sliderTokens.railBackgroundColor}: var(--surface-solid-tertiary);

                ${sliderTokens.fillColor}: var(--surface-accent-gradient);

                ${sliderTokens.textFieldCaretColor}: var(--text-accent);
                ${sliderTokens.textFieldColor}: var(--text-primary);
                ${sliderTokens.textFiledFocusColor}: var(--text-primary);
                ${sliderTokens.textFieldPlaceholderColor}: var(--text-secondary);

                ${sliderTokens.textFieldBackgroundColor}: var(--surface-transparent-primary);
                ${sliderTokens.textFieldBackgroundColorHover}: var(--surface-transparent-primary-hover);
                ${sliderTokens.textFieldBackgroundColorFocus}: var(--surface-transparent-secondary);
            `,
        },
        size: {
            l: css`
                ${sliderTokens.size}: 1.5rem;
                ${sliderTokens.doubleWrapperGap}: 0.375rem;

                ${sliderTokens.labelWrapperGap}: 0.25rem;
                ${sliderTokens.labelWrapperMarginBottom}: 0.25rem;
                ${sliderTokens.labelWrapperMarginRight}: 1rem;
                ${sliderTokens.labelWrapperOnlyIconMarginRight}: 0.625rem;
                ${sliderTokens.labelWrapperVerticalMargin}: 1rem;

                ${sliderTokens.labelFontFamily}: var(--plasma-typo-body-l-font-family);
                ${sliderTokens.labelFontSize}: var(--plasma-typo-body-l-font-size);
                ${sliderTokens.labelFontStyle}: var(--plasma-typo-body-l-font-style);
                ${sliderTokens.labelFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${sliderTokens.labelLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${sliderTokens.labelLineHeight}: var(--plasma-typo-body-l-line-height);

                ${sliderTokens.rangeValueHorizontalMargin}: 0.75rem;
                ${sliderTokens.rangeValueBottomOffset}: 0.875rem;
                ${sliderTokens.rangeValueHorizontalOffset}: 0.875rem;
                ${sliderTokens.rangeValueVerticalMargin}: 0.75rem;

                ${sliderTokens.valueFontFamily}: var(--plasma-typo-body-m-font-family);
                ${sliderTokens.valueFontSize}: var(--plasma-typo-body-m-font-size);
                ${sliderTokens.valueFontStyle}: var(--plasma-typo-body-m-font-style);
                ${sliderTokens.valueFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${sliderTokens.valueLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${sliderTokens.valueLineHeight}: var(--plasma-typo-body-m-line-height);

                ${sliderTokens.thumbSize}: 1rem;
                ${sliderTokens.thumbSizeLarge}: 1.25rem;
                ${sliderTokens.thumbBorder}: 0.0625rem solid;

                ${sliderTokens.currentValueTopOffset}: 1.625rem;

                ${sliderTokens.railThickness}: 0.25rem;
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
                ${sliderTokens.size}: 1.5rem;
                ${sliderTokens.doubleWrapperGap}: 0.375rem;

                ${sliderTokens.labelWrapperGap}: 0.25rem;
                ${sliderTokens.labelWrapperMarginBottom}: 0.25rem;
                ${sliderTokens.labelWrapperMarginRight}: 1rem;
                ${sliderTokens.labelWrapperOnlyIconMarginRight}: 0.625rem;
                ${sliderTokens.labelWrapperVerticalMargin}: 0.75rem;

                ${sliderTokens.labelFontFamily}: var(--plasma-typo-body-m-font-family);
                ${sliderTokens.labelFontSize}: var(--plasma-typo-body-m-font-size);
                ${sliderTokens.labelFontStyle}: var(--plasma-typo-body-m-font-style);
                ${sliderTokens.labelFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${sliderTokens.labelLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${sliderTokens.labelLineHeight}: var(--plasma-typo-body-m-line-height);

                ${sliderTokens.rangeValueHorizontalMargin}: 0.75rem;
                ${sliderTokens.rangeValueBottomOffset}: 0.75rem;
                ${sliderTokens.rangeValueHorizontalOffset}: 0.875rem;
                ${sliderTokens.rangeValueVerticalMargin}: 0.625rem;

                ${sliderTokens.valueFontFamily}: var(--plasma-typo-body-s-font-family);
                ${sliderTokens.valueFontSize}: var(--plasma-typo-body-s-font-size);
                ${sliderTokens.valueFontStyle}: var(--plasma-typo-body-s-font-style);
                ${sliderTokens.valueFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${sliderTokens.valueLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${sliderTokens.valueLineHeight}: var(--plasma-typo-body-s-line-height);

                ${sliderTokens.thumbSize}: 1rem;
                ${sliderTokens.thumbSizeLarge}: 1.25rem;
                ${sliderTokens.thumbBorder}: 0.0625rem solid;

                ${sliderTokens.currentValueTopOffset}: 1.75rem;

                ${sliderTokens.railThickness}: 0.25rem;
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
                ${sliderTokens.size}: 1rem;
                ${sliderTokens.doubleWrapperGap}: 0.375rem;

                ${sliderTokens.labelWrapperGap}: 0.25rem;
                ${sliderTokens.labelWrapperMarginBottom}: 0.25rem;
                ${sliderTokens.labelWrapperMarginRight}: 1rem;
                ${sliderTokens.labelWrapperOnlyIconMarginRight}: 0.625rem;
                ${sliderTokens.labelWrapperVerticalMargin}: 0.625rem;

                ${sliderTokens.labelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${sliderTokens.labelFontSize}: var(--plasma-typo-body-s-font-size);
                ${sliderTokens.labelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${sliderTokens.labelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${sliderTokens.labelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${sliderTokens.labelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${sliderTokens.rangeValueHorizontalMargin}: 0.5rem;
                ${sliderTokens.rangeValueBottomOffset}: 0.625rem;
                ${sliderTokens.rangeValueHorizontalOffset}: 0.625rem;
                ${sliderTokens.rangeValueVerticalMargin}: 0.5rem;

                ${sliderTokens.valueFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${sliderTokens.valueFontSize}: var(--plasma-typo-body-xs-font-size);
                ${sliderTokens.valueFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${sliderTokens.valueFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${sliderTokens.valueLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${sliderTokens.valueLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${sliderTokens.thumbSize}: 1rem;
                ${sliderTokens.thumbSizeLarge}: 1.25rem;
                ${sliderTokens.thumbBorder}: 0.0625rem solid;

                ${sliderTokens.currentValueTopOffset}: 1.25rem;

                ${sliderTokens.railThickness}: 0.25rem;
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
