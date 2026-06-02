import { css, sliderTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        pointerSize: 'small',
    },
    variations: {
        view: {
            default: css`
                ${sliderTokens.labelColor}: var(--text-primary);

                ${sliderTokens.rangeValueColor}: var(--text-secondary);

                ${sliderTokens.thumbBorderColor}: var(--surface-solid-card);
                ${sliderTokens.thumbBackgroundColor}: var(--surface-accent);
                ${sliderTokens.thumbFocusBorderColor}: var(--surface-solid-card);

                ${sliderTokens.railBackgroundColor}: var(--surface-solid-tertiary);

                ${sliderTokens.fillColor}: var(--surface-solid-default);

                ${sliderTokens.tickDotColor}: var(--surface-solid-tertiary);
                ${sliderTokens.tickDotFilledColor}: var(--surface-solid-default);

                ${sliderTokens.doubleBoxShadow}: var(--shadow-down-soft-s);

                ${sliderTokens.textFieldCaretColor}: var(--text-accent);
                ${sliderTokens.textFieldColor}: var(--text-primary);
                ${sliderTokens.textFiledFocusColor}: var(--text-primary);
                ${sliderTokens.textFieldPlaceholderColor}: var(--text-secondary);

                ${sliderTokens.textFieldBorderColor}: var(--outline-clear);
                ${sliderTokens.textFieldBorderColorFocus}: var(--outline-solid-secondary);
                ${sliderTokens.textFieldBorderColorHover}: var(--outline-clear);

                ${sliderTokens.textFieldBackgroundColor}: var(--surface-transparent-card);
                ${sliderTokens.textFieldBackgroundColorHover}: var(--surface-transparent-card);
                ${sliderTokens.textFieldBackgroundColorFocus}: var(--surface-transparent-card-active);
            `,
            accent: css`
                ${sliderTokens.labelColor}: var(--text-primary);

                ${sliderTokens.rangeValueColor}: var(--text-secondary);

                ${sliderTokens.thumbBorderColor}: var(--surface-solid-card);
                ${sliderTokens.thumbBackgroundColor}: var(--surface-accent);
                ${sliderTokens.thumbFocusBorderColor}: var(--surface-solid-card);

                ${sliderTokens.railBackgroundColor}: var(--surface-solid-tertiary);

                ${sliderTokens.fillColor}: var(--surface-accent);

                ${sliderTokens.tickDotColor}: var(--surface-solid-tertiary);
                ${sliderTokens.tickDotFilledColor}: var(--surface-accent);

                ${sliderTokens.doubleBoxShadow}: var(--shadow-down-soft-s);

                ${sliderTokens.textFieldCaretColor}: var(--text-accent);
                ${sliderTokens.textFieldColor}: var(--text-primary);
                ${sliderTokens.textFiledFocusColor}: var(--text-primary);
                ${sliderTokens.textFieldPlaceholderColor}: var(--text-secondary);

                ${sliderTokens.textFieldBorderColor}: var(--outline-clear);
                ${sliderTokens.textFieldBorderColorFocus}: var(--outline-solid-secondary);
                ${sliderTokens.textFieldBorderColorHover}: var(--outline-clear);

                ${sliderTokens.textFieldBackgroundColor}: var(--surface-transparent-card);
                ${sliderTokens.textFieldBackgroundColorHover}: var(--surface-transparent-card);
                ${sliderTokens.textFieldBackgroundColorFocus}: var(--surface-transparent-card-active);
            `,
            gradient: css`
                ${sliderTokens.labelColor}: var(--text-primary);

                ${sliderTokens.rangeValueColor}: var(--text-secondary);

                ${sliderTokens.thumbBorderColor}: var(--surface-solid-card);
                ${sliderTokens.thumbBackgroundColor}: var(--surface-accent);
                ${sliderTokens.thumbFocusBorderColor}: var(--surface-solid-card);

                ${sliderTokens.railBackgroundColor}: var(--surface-solid-tertiary);

                ${sliderTokens.fillColor}: var(--surface-accent-gradient);

                ${sliderTokens.tickDotColor}: var(--surface-solid-tertiary);
                ${sliderTokens.tickDotFilledColor}: var(--surface-accent-gradient);

                ${sliderTokens.doubleBoxShadow}: var(--shadow-down-soft-s);

                ${sliderTokens.textFieldCaretColor}: var(--text-accent);
                ${sliderTokens.textFieldColor}: var(--text-primary);
                ${sliderTokens.textFiledFocusColor}: var(--text-primary);
                ${sliderTokens.textFieldPlaceholderColor}: var(--text-secondary);

                ${sliderTokens.textFieldBorderColor}: var(--outline-clear);
                ${sliderTokens.textFieldBorderColorFocus}: var(--outline-solid-secondary);
                ${sliderTokens.textFieldBorderColorHover}: var(--outline-clear);

                ${sliderTokens.textFieldBackgroundColor}: var(--surface-transparent-card);
                ${sliderTokens.textFieldBackgroundColorHover}: var(--surface-transparent-card);
                ${sliderTokens.textFieldBackgroundColorFocus}: var(--surface-transparent-card-active);
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

                ${sliderTokens.tickSize}: 0.5rem;

                ${sliderTokens.railThickness}: 0.25rem;
                ${sliderTokens.railBorderRadius}: 0.125rem;
                ${sliderTokens.railIndent}: 0.75rem;

                ${sliderTokens.textFieldWrapperGap}: 0.063rem;
                ${sliderTokens.textFieldBorderWidth}: 0.0625rem;

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

                ${sliderTokens.tickSize}: 0.5rem;

                ${sliderTokens.railThickness}: 0.25rem;
                ${sliderTokens.railBorderRadius}: 0.125rem;
                ${sliderTokens.railIndent}: 0.75rem;

                ${sliderTokens.textFieldWrapperGap}: 0.063rem;
                ${sliderTokens.textFieldBorderWidth}: 0.0625rem;

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

                ${sliderTokens.tickSize}: 0.5rem;

                ${sliderTokens.railThickness}: 0.25rem;
                ${sliderTokens.railBorderRadius}: 0.125rem;
                ${sliderTokens.railIndent}: 0.75rem;

                ${sliderTokens.textFieldWrapperGap}: 0.063rem;
                ${sliderTokens.textFieldBorderWidth}: 0.0625rem;

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
        pointerSize: {
            small: css`
                ${sliderTokens.thumbSize}: 1.875rem;
                ${sliderTokens.thumbHeight}: 1.1875rem;
                ${sliderTokens.thumbBorderStyle}: solid;
                ${sliderTokens.thumbBorderWidth}: 0.09375rem 0.1875rem;
                ${sliderTokens.thumbBorderRadius}: 0.6875rem / 0.59375rem;
                ${sliderTokens.thumbInnerContent}: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='3'%3E%3Crect width='12' height='3' rx='1.5' fill='%23FFFFFF'/%3E%3C/svg%3E");

                ${sliderTokens.currentValueTopOffset}: 1.375rem;
            `,
            large: css`
                ${sliderTokens.thumbSize}: 2.5rem;
                ${sliderTokens.thumbSizeLarge}: 2.5rem;
                ${sliderTokens.thumbHeight}: 1.5rem;
                ${sliderTokens.thumbBorderStyle}: solid;
                ${sliderTokens.thumbBorderWidth}: 0.125rem 0.25rem;
                ${sliderTokens.thumbBorderRadius}: 0.875rem / 0.75rem;
                ${sliderTokens.thumbInnerContent}: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='4'%3E%3Crect width='16' height='4' rx='2' fill='%23FFFFFF'/%3E%3C/svg%3E");

                ${sliderTokens.currentValueTopOffset}: 1.625rem;
            `,
            none: css`
                ${sliderTokens.thumbSize}: 0rem;
                ${sliderTokens.thumbSizeLarge}: 0rem;
                ${sliderTokens.thumbHeight}: 0rem;

                ${sliderTokens.currentValueTopOffset}: 1.5rem;
            `,
        },
        disabled: {
            true: css`
                ${sliderTokens.disabledOpacity}: 0.4;
            `,
        },
    },
    intersections: [
        {
            size: 's',
            pointerSize: 'small',
            style: css`
                ${sliderTokens.currentValueTopOffset}: 1rem;
                &.slider-vertical-orientation {
                    ${sliderTokens.currentValueTopOffset}: 1.25rem;
                }
            `,
        },
        {
            size: 'm',
            pointerSize: 'small',
            style: css`
                ${sliderTokens.currentValueTopOffset}: 1.25rem;
                &.slider-vertical-orientation {
                    ${sliderTokens.currentValueTopOffset}: 1.5rem;
                }
            `,
        },
        {
            size: 'l',
            pointerSize: 'small',
            style: css`
                ${sliderTokens.currentValueTopOffset}: 1.25rem;
                &.slider-vertical-orientation {
                    ${sliderTokens.currentValueTopOffset}: 1.5rem;
                }
            `,
        },
        {
            size: 's',
            pointerSize: 'large',
            style: css`
                ${sliderTokens.currentValueTopOffset}: 1.25rem;
                &.slider-vertical-orientation {
                    ${sliderTokens.currentValueTopOffset}: 1.375rem;
                }
            `,
        },
        {
            size: 'm',
            pointerSize: 'large',
            style: css`
                ${sliderTokens.currentValueTopOffset}: 1.5rem;
                &.slider-vertical-orientation {
                    ${sliderTokens.currentValueTopOffset}: 1.625rem;
                }
            `,
        },
        {
            size: 'l',
            pointerSize: 'large',
            style: css`
                ${sliderTokens.currentValueTopOffset}: 1.5rem;
                &.slider-vertical-orientation {
                    ${sliderTokens.currentValueTopOffset}: 1.625rem;
                }
            `,
        },
        {
            size: 's',
            pointerSize: 'none',
            style: css`
                ${sliderTokens.currentValueTopOffset}: 1rem;
                &.slider-vertical-orientation {
                    ${sliderTokens.currentValueTopOffset}: 1rem;
                }
            `,
        },
        {
            size: 'm',
            pointerSize: 'none',
            style: css`
                ${sliderTokens.currentValueTopOffset}: 1.5rem;
                &.slider-vertical-orientation {
                    ${sliderTokens.currentValueTopOffset}: 1.25rem;
                }
            `,
        },
        {
            size: 'l',
            pointerSize: 'none',
            style: css`
                ${sliderTokens.currentValueTopOffset}: 1.5rem;
                &.slider-vertical-orientation {
                    ${sliderTokens.currentValueTopOffset}: 1.25rem;
                }
            `,
        },
    ],
};
