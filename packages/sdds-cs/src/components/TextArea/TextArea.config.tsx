import { css, textAreaTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
    },
    variations: {
        size: {
            s: css`
                ${textAreaTokens.inputWidth}: 100%;
                ${textAreaTokens.inputHeight}: 7.187rem;
                ${textAreaTokens.inputMinHeight}: 0.625rem;
                ${textAreaTokens.borderRadius}: 0.625rem;
                ${textAreaTokens.borderRadiusWithHelpers}: 0.625rem 0.625rem 0 0;
                ${textAreaTokens.inputPaddingTop}: 0.688rem;
                ${textAreaTokens.inputPaddingRight}: 0.875rem;
                ${textAreaTokens.inputPaddingRightWithRightContent}: 3.125rem;
                ${textAreaTokens.inputPaddingBottom}: 0.75rem;
                ${textAreaTokens.inputPaddingLeft}: 0.875rem;
                ${textAreaTokens.helpersPaddingTop}: 0.75rem;
                ${textAreaTokens.helpersPaddingRight}: 0.875rem;
                ${textAreaTokens.helpersPaddingBottom}: 0.75rem;
                ${textAreaTokens.helpersPaddingLeft}: 0.875rem;
                ${textAreaTokens.helpersOffset}: 0rem;
                ${textAreaTokens.rightContentTop}: 0.688rem;
                ${textAreaTokens.rightContentRight}: 0.75rem;
                ${textAreaTokens.rightContentHeight}: 1.25rem;
                ${textAreaTokens.labelMarginBottom}: 0.5rem;
                ${textAreaTokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${textAreaTokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${textAreaTokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${textAreaTokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${textAreaTokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${textAreaTokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${textAreaTokens.labelInnerTop}: 0.375rem;
                ${textAreaTokens.labelInnerMarginBottom}: 0.125rem;
                ${textAreaTokens.inputFontFamily}: var(--plasma-typo-body-s-font-family);
                ${textAreaTokens.inputFontSize}: var(--plasma-typo-body-s-font-size);
                ${textAreaTokens.inputFontStyle}: var(--plasma-typo-body-s-font-style);
                ${textAreaTokens.inputFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${textAreaTokens.inputLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${textAreaTokens.inputLineHeight}: var(--plasma-typo-body-s-line-height);
                ${textAreaTokens.helpersFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${textAreaTokens.helpersFontSize}: var(--plasma-typo-body-xs-font-size);
                ${textAreaTokens.helpersFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${textAreaTokens.helpersFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${textAreaTokens.helpersLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${textAreaTokens.helpersLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${textAreaTokens.indicatorSizeInner}: 0.375rem;
                ${textAreaTokens.indicatorSizeOuter}: 0.375rem;
                ${textAreaTokens.indicatorLabelPlacementInner}: 0 0 0 0;
                /* stylelint-disable-next-line number-max-precision */
                ${textAreaTokens.indicatorLabelPlacementOuter}: 0.3125rem auto auto -0.6875rem;
                ${textAreaTokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${textAreaTokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
            `,
        },
        view: {
            default: css`
                ${textAreaTokens.inputBackgroundColor}: var(--surface-transparent-primary);
                ${textAreaTokens.inputBackgroundColorHover}: var(--surface-transparent-primary-hover);
                ${textAreaTokens.inputBackgroundColorActive}: var(--surface-transparent-primary-active);
                ${textAreaTokens.inputBackgroundColorFocus}: var(--surface-transparent-secondary);
                ${textAreaTokens.helpersBackgroundColor}: var(--surface-transparent-primary);
                ${textAreaTokens.helpersBackgroundColorHover}: var(--surface-transparent-primary-hover);
                ${textAreaTokens.helpersBackgroundColorActive}: var(--surface-transparent-primary-active);
                ${textAreaTokens.helpersBackgroundColorFocus}: var(--surface-transparent-secondary);
                ${textAreaTokens.inputColor}: var(--text-primary);
                ${textAreaTokens.inputColorFocus}: var(--text-primary);
                ${textAreaTokens.inputCaretColor}: var(--text-accent);
                ${textAreaTokens.placeholderColor}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--text-tertiary);
                ${textAreaTokens.leftHelperColor}: var(--text-secondary);
                ${textAreaTokens.rightHelperColor}: var(--text-secondary);
                ${textAreaTokens.indicatorColor}: var(--surface-negative);
                ${textAreaTokens.optionalColor}: var(--text-tertiary);
            `,
            /**
             * @deprecated
             * использовать `default`
             */
            primary: css`
                ${textAreaTokens.inputBackgroundColor}: var(--surface-transparent-primary);
                ${textAreaTokens.inputBackgroundColorHover}: var(--surface-transparent-primary-hover);
                ${textAreaTokens.inputBackgroundColorActive}: var(--surface-transparent-primary-active);
                ${textAreaTokens.inputBackgroundColorFocus}: var(--surface-transparent-secondary);
                ${textAreaTokens.helpersBackgroundColor}: var(--surface-transparent-primary);
                ${textAreaTokens.helpersBackgroundColorHover}: var(--surface-transparent-primary-hover);
                ${textAreaTokens.helpersBackgroundColorActive}: var(--surface-transparent-primary-active);
                ${textAreaTokens.helpersBackgroundColorFocus}: var(--surface-transparent-secondary);
                ${textAreaTokens.inputColor}: var(--text-primary);
                ${textAreaTokens.inputColorFocus}: var(--text-primary);
                ${textAreaTokens.inputCaretColor}: var(--text-accent);
                ${textAreaTokens.placeholderColor}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--text-tertiary);
                ${textAreaTokens.leftHelperColor}: var(--text-secondary);
                ${textAreaTokens.rightHelperColor}: var(--text-secondary);
                ${textAreaTokens.indicatorColor}: var(--surface-negative);
                ${textAreaTokens.optionalColor}: var(--text-tertiary);
            `,
            positive: css`
                ${textAreaTokens.inputBackgroundColor}: var(--surface-transparent-positive);
                ${textAreaTokens.inputBackgroundColorHover}: var(--surface-transparent-positive-hover);
                ${textAreaTokens.inputBackgroundColorActive}: var(--surface-transparent-positive-active);
                ${textAreaTokens.inputBackgroundColorFocus}: var(--surface-transparent-positive);
                ${textAreaTokens.helpersBackgroundColor}: var(--surface-transparent-positive);
                ${textAreaTokens.helpersBackgroundColorHover}: var(--surface-transparent-positive-hover);
                ${textAreaTokens.helpersBackgroundColorActive}: var(--surface-transparent-positive-active);
                ${textAreaTokens.helpersBackgroundColorFocus}: var(--surface-transparent-positive);
                ${textAreaTokens.inputColor}: var(--text-primary);
                ${textAreaTokens.inputColorFocus}: var(--text-primary);
                ${textAreaTokens.inputCaretColor}: var(--text-positive);
                ${textAreaTokens.placeholderColor}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--text-tertiary);
                ${textAreaTokens.leftHelperColor}: var(--text-positive);
                ${textAreaTokens.rightHelperColor}: var(--text-secondary);
                ${textAreaTokens.indicatorColor}: var(--surface-negative);
                ${textAreaTokens.optionalColor}: var(--text-tertiary);
            `,
            warning: css`
                ${textAreaTokens.inputBackgroundColor}: var(--surface-transparent-warning);
                ${textAreaTokens.inputBackgroundColorHover}: var(--surface-transparent-warning-hover);
                ${textAreaTokens.inputBackgroundColorActive}: var(--surface-transparent-warning-active);
                ${textAreaTokens.inputBackgroundColorFocus}: var(--surface-transparent-warning);
                ${textAreaTokens.helpersBackgroundColor}: var(--surface-transparent-warning);
                ${textAreaTokens.helpersBackgroundColorHover}: var(--surface-transparent-warning-hover);
                ${textAreaTokens.helpersBackgroundColorActive}: var(--surface-transparent-warning-active);
                ${textAreaTokens.helpersBackgroundColorFocus}: var(--surface-transparent-warning);
                ${textAreaTokens.inputColor}: var(--text-primary);
                ${textAreaTokens.inputColorFocus}: var(--text-primary);
                ${textAreaTokens.inputCaretColor}: var(--text-warning);
                ${textAreaTokens.placeholderColor}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--text-tertiary);
                ${textAreaTokens.leftHelperColor}: var(--text-warning);
                ${textAreaTokens.rightHelperColor}: var(--text-secondary);
                ${textAreaTokens.indicatorColor}: var(--surface-negative);
                ${textAreaTokens.optionalColor}: var(--text-tertiary);
            `,
            negative: css`
                ${textAreaTokens.inputBackgroundColor}: var(--surface-transparent-negative);
                ${textAreaTokens.inputBackgroundColorHover}: var(--surface-transparent-negative-hover);
                ${textAreaTokens.inputBackgroundColorActive}: var(--surface-transparent-negative-active);
                ${textAreaTokens.inputBackgroundColorFocus}: var(--surface-transparent-negative);
                ${textAreaTokens.helpersBackgroundColor}: var(--surface-transparent-negative);
                ${textAreaTokens.helpersBackgroundColorHover}: var(--surface-transparent-negative-hover);
                ${textAreaTokens.helpersBackgroundColorActive}: var(--surface-transparent-negative-active);
                ${textAreaTokens.helpersBackgroundColorFocus}: var(--surface-transparent-negative);
                ${textAreaTokens.inputColor}: var(--text-primary);
                ${textAreaTokens.inputColorFocus}: var(--text-primary);
                ${textAreaTokens.inputCaretColor}: var(--text-negative);
                ${textAreaTokens.placeholderColor}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--text-tertiary);
                ${textAreaTokens.leftHelperColor}: var(--text-negative);
                ${textAreaTokens.rightHelperColor}: var(--text-secondary);
                ${textAreaTokens.indicatorColor}: var(--surface-negative);
                ${textAreaTokens.optionalColor}: var(--text-tertiary);
            `,
        },
        disabled: {
            true: css`
                ${textAreaTokens.disabledOpacity}: 0.4;
                ${textAreaTokens.inputColorDisabled}: var(--text-secondary);
            `,
        },
    },
};
