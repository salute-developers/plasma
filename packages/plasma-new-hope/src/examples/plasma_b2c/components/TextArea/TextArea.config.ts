import { css } from '@linaria/core';

import { textAreaTokens } from '../../../../components/TextArea';

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
                ${textAreaTokens.borderRadiusWithHelpers}: 0.5rem 0.5rem 0 0;
                ${textAreaTokens.inputPaddingTop}: 0.563rem;
                ${textAreaTokens.inputPaddingRight}: 0.625rem;
                ${textAreaTokens.inputPaddingRightWithRightContent}: 2.125rem;
                ${textAreaTokens.inputPaddingBottom}: 0.563rem;
                ${textAreaTokens.inputPaddingLeft}: 0.625rem;
                ${textAreaTokens.helpersPaddingTop}: 0.5rem;
                ${textAreaTokens.helpersPaddingRight}: 0.625rem;
                ${textAreaTokens.helpersPaddingBottom}: 0.563rem;
                ${textAreaTokens.helpersPaddingLeft}: 0.625rem;
                ${textAreaTokens.helpersOffset}: 0rem;
                ${textAreaTokens.rightContentTop}: 0.563rem;
                ${textAreaTokens.rightContentRight}: 0.5rem;
                ${textAreaTokens.rightContentHeight}: 1.25rem;
                ${textAreaTokens.labelMarginBottom}: 0.375rem;
                ${textAreaTokens.labelInnerFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${textAreaTokens.labelInnerFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${textAreaTokens.labelInnerFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${textAreaTokens.labelInnerFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${textAreaTokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${textAreaTokens.labelInnerLineHeight}: var(--plasma-typo-body-xxs-line-height);
                ${textAreaTokens.inputFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${textAreaTokens.inputFontSize}: var(--plasma-typo-body-xs-font-size);
                ${textAreaTokens.inputFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${textAreaTokens.inputFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${textAreaTokens.inputLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${textAreaTokens.inputLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${textAreaTokens.helpersFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${textAreaTokens.helpersFontSize}: var(--plasma-typo-body-xs-font-size);
                ${textAreaTokens.helpersFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${textAreaTokens.helpersFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${textAreaTokens.helpersLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${textAreaTokens.helpersLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
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
            `,
            m: css`
                ${textAreaTokens.inputWidth}: 100%;
                ${textAreaTokens.inputHeight}: 7rem;
                ${textAreaTokens.inputMinHeight}: 1.125rem;
                ${textAreaTokens.borderRadius}: 0.75rem;
                ${textAreaTokens.borderRadiusWithHelpers}: 0.75rem 0.75rem 0 0;
                ${textAreaTokens.inputPaddingTop}: 0.875rem;
                ${textAreaTokens.inputPaddingRight}: 1rem;
                ${textAreaTokens.inputPaddingRightWithRightContent}: 3.375rem;
                ${textAreaTokens.inputPaddingBottom}: 0.75rem;
                ${textAreaTokens.inputPaddingLeft}: 1rem;
                ${textAreaTokens.helpersPaddingTop}: 0.75rem;
                ${textAreaTokens.helpersPaddingRight}: 1rem;
                ${textAreaTokens.helpersPaddingBottom}: 0.75rem;
                ${textAreaTokens.helpersPaddingLeft}: 1rem;
                ${textAreaTokens.helpersOffset}: 0rem;
                ${textAreaTokens.rightContentTop}: 0.875rem;
                ${textAreaTokens.rightContentRight}: 0.875rem;
                ${textAreaTokens.rightContentHeight}: 1.25rem;
                ${textAreaTokens.labelMarginBottom}: 0.625rem;
                ${textAreaTokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${textAreaTokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${textAreaTokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${textAreaTokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${textAreaTokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${textAreaTokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${textAreaTokens.inputFontFamily}: var(--plasma-typo-body-m-font-family);
                ${textAreaTokens.inputFontSize}: var(--plasma-typo-body-m-font-size);
                ${textAreaTokens.inputFontStyle}: var(--plasma-typo-body-m-font-style);
                ${textAreaTokens.inputFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${textAreaTokens.inputLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${textAreaTokens.inputLineHeight}: var(--plasma-typo-body-m-line-height);
                ${textAreaTokens.helpersFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${textAreaTokens.helpersFontSize}: var(--plasma-typo-body-xs-font-size);
                ${textAreaTokens.helpersFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${textAreaTokens.helpersFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${textAreaTokens.helpersLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${textAreaTokens.helpersLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            l: css`
                ${textAreaTokens.inputWidth}: 100%;
                ${textAreaTokens.inputHeight}: 6.812rem;
                ${textAreaTokens.inputMinHeight}: 1.625rem;
                ${textAreaTokens.borderRadius}: 0.875rem;
                ${textAreaTokens.borderRadiusWithHelpers}: 0.875rem 0.875rem 0 0;
                ${textAreaTokens.inputPaddingTop}: 1.063rem;
                ${textAreaTokens.inputPaddingRight}: 1.125rem;
                ${textAreaTokens.inputPaddingRightWithRightContent}: 3.625rem;
                ${textAreaTokens.inputPaddingBottom}: 0.75rem;
                ${textAreaTokens.inputPaddingLeft}: 1.125rem;
                ${textAreaTokens.helpersPaddingTop}: 0.75rem;
                ${textAreaTokens.helpersPaddingRight}: 1.125rem;
                ${textAreaTokens.helpersPaddingBottom}: 0.75rem;
                ${textAreaTokens.helpersPaddingLeft}: 1.125rem;
                ${textAreaTokens.helpersOffset}: 0rem;
                ${textAreaTokens.rightContentTop}: 1.063rem;
                ${textAreaTokens.rightContentRight}: 1rem;
                ${textAreaTokens.rightContentHeight}: 1.25rem;
                ${textAreaTokens.labelMarginBottom}: 0.75rem;
                ${textAreaTokens.labelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${textAreaTokens.labelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${textAreaTokens.labelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${textAreaTokens.labelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${textAreaTokens.labelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${textAreaTokens.labelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${textAreaTokens.inputFontFamily}: var(--plasma-typo-body-l-font-family);
                ${textAreaTokens.inputFontSize}: var(--plasma-typo-body-l-font-size);
                ${textAreaTokens.inputFontStyle}: var(--plasma-typo-body-l-font-style);
                ${textAreaTokens.inputFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${textAreaTokens.inputLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${textAreaTokens.inputLineHeight}: var(--plasma-typo-body-l-line-height);
                ${textAreaTokens.helpersFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${textAreaTokens.helpersFontSize}: var(--plasma-typo-body-xs-font-size);
                ${textAreaTokens.helpersFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${textAreaTokens.helpersFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${textAreaTokens.helpersLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${textAreaTokens.helpersLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
        view: {
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
