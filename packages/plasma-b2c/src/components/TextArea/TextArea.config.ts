import { css, textAreaTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'primary',
        focused: 'true',
        resize: 'both',
    },
    variations: {
        size: {
            xs: css`
                ${textAreaTokens.inputWidth}: 100%;
                ${textAreaTokens.inputHeight}: 8.812rem;
                ${textAreaTokens.inputMinHeight}: 0.625rem;
                ${textAreaTokens.borderRadius}: 0.5rem;
                ${textAreaTokens.borderRadiusWithHelpers}: 0.5rem 0.5rem 0 0;
                ${textAreaTokens.inputPaddingTop}: 0.563rem;
                ${textAreaTokens.inputPaddingRight}: 0.5rem;
                ${textAreaTokens.inputPaddingRightWithRightContent}: 2.125rem;
                ${textAreaTokens.inputPaddingBottom}: 0.563rem;
                ${textAreaTokens.inputPaddingLeft}: 0.625rem;
                ${textAreaTokens.helpersPaddingTop}: 0.5rem;
                ${textAreaTokens.helpersPaddingRight}: 0.5rem;
                ${textAreaTokens.helpersPaddingBottom}: 0.563rem;
                ${textAreaTokens.helpersPaddingLeft}: 0.625rem;
                ${textAreaTokens.helpersOffset}: 0rem;
                ${textAreaTokens.rightContentTop}: 0.563rem;
                ${textAreaTokens.rightContentRight}: 0.5rem;
                ${textAreaTokens.rightContentHeight}: 1.25rem;
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
                ${textAreaTokens.inputHeight}: 8.687rem;
                ${textAreaTokens.inputMinHeight}: 0.625rem; /* 2.5rem; */
                ${textAreaTokens.borderRadius}: 0.625rem;
                ${textAreaTokens.borderRadiusWithHelpers}: 0.625rem 0.625rem 0 0;
                ${textAreaTokens.inputPaddingTop}: 0.688rem;
                ${textAreaTokens.inputPaddingRight}: 0.75rem;
                ${textAreaTokens.inputPaddingRightWithRightContent}: 3.125rem;
                ${textAreaTokens.inputPaddingBottom}: 0.75rem;
                ${textAreaTokens.inputPaddingLeft}: 0.875rem;
                ${textAreaTokens.helpersPaddingTop}: 0.75rem;
                ${textAreaTokens.helpersPaddingRight}: 0.75rem;
                ${textAreaTokens.helpersPaddingBottom}: 0.75rem;
                ${textAreaTokens.helpersPaddingLeft}: 0.875rem;
                ${textAreaTokens.helpersOffset}: 0rem;
                ${textAreaTokens.rightContentTop}: 0.688rem;
                ${textAreaTokens.rightContentRight}: 0.75rem;
                ${textAreaTokens.rightContentHeight}: 1.25rem;
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
                ${textAreaTokens.inputHeight}: 8.5rem;
                ${textAreaTokens.inputMinHeight}: 1.125rem;
                ${textAreaTokens.borderRadius}: 0.75rem;
                ${textAreaTokens.borderRadiusWithHelpers}: 0.75rem 0.75rem 0 0;
                ${textAreaTokens.inputPaddingTop}: 0.875rem;
                ${textAreaTokens.inputPaddingRight}: 0.875rem;
                ${textAreaTokens.inputPaddingRightWithRightContent}: 3.375rem;
                ${textAreaTokens.inputPaddingBottom}: 0.75rem;
                ${textAreaTokens.inputPaddingLeft}: 1rem;
                ${textAreaTokens.helpersPaddingTop}: 0.75rem;
                ${textAreaTokens.helpersPaddingRight}: 0.875rem;
                ${textAreaTokens.helpersPaddingBottom}: 0.75rem;
                ${textAreaTokens.helpersPaddingLeft}: 1rem;
                ${textAreaTokens.helpersOffset}: 0rem;
                ${textAreaTokens.rightContentTop}: 0.875rem;
                ${textAreaTokens.rightContentRight}: 0.875rem;
                ${textAreaTokens.rightContentHeight}: 1.25rem;
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
                ${textAreaTokens.inputHeight}: 8.312rem;
                ${textAreaTokens.inputMinHeight}: 1.625rem;
                ${textAreaTokens.borderRadius}: 0.875rem;
                ${textAreaTokens.borderRadiusWithHelpers}: 0.875rem 0.875rem 0 0;
                ${textAreaTokens.inputPaddingTop}: 1.063rem;
                ${textAreaTokens.inputPaddingRight}: 1rem;
                ${textAreaTokens.inputPaddingRightWithRightContent}: 3.625rem;
                ${textAreaTokens.inputPaddingBottom}: 0.75rem;
                ${textAreaTokens.inputPaddingLeft}: 1.125rem;
                ${textAreaTokens.helpersPaddingTop}: 0.5rem;
                ${textAreaTokens.helpersPaddingRight}: 1rem;
                ${textAreaTokens.helpersPaddingBottom}: 0.75rem;
                ${textAreaTokens.helpersPaddingLeft}: 1.125rem;
                ${textAreaTokens.helpersOffset}: 0rem;
                ${textAreaTokens.rightContentTop}: 1.063rem;
                ${textAreaTokens.rightContentRight}: 1rem;
                ${textAreaTokens.rightContentHeight}: 1.25rem;
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
                ${textAreaTokens.inputBackgroundColor}: var(--plasma-colors-surface-liquid01);
                ${textAreaTokens.inputBackgroundColorHover}: var(--plasma-colors-surface-liquid01);
                ${textAreaTokens.inputBackgroundColorActive}: var(--plasma-colors-surface-liquid02);
                ${textAreaTokens.inputBackgroundColorFocus}: var(--plasma-colors-surface-liquid02);
                ${textAreaTokens.helpersBackgroundColor}: var(--plasma-colors-surface-liquid01);
                ${textAreaTokens.helpersBackgroundColorHover}: var(--plasma-colors-surface-liquid01);
                ${textAreaTokens.helpersBackgroundColorActive}: var(--plasma-colors-surface-liquid02);
                ${textAreaTokens.helpersBackgroundColorFocus}: var(--plasma-colors-surface-liquid02);
                ${textAreaTokens.inputColor}: var(--plasma-colors-secondary);
                ${textAreaTokens.inputColorFocus}: var(--plasma-colors-primary);
                ${textAreaTokens.inputCaretColor}: var(--plasma-colors-accent);
                ${textAreaTokens.placeholderColor}: var(--plasma-colors-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--plasma-colors-secondary);
                ${textAreaTokens.leftHelperColor}: var(--plasma-colors-secondary);
                ${textAreaTokens.rightHelperColor}: var(--plasma-colors-secondary);
            `,
            positive: css`
                ${textAreaTokens.inputBackgroundColor}: var(--plasma-colors-button-success-transparent);
                ${textAreaTokens.inputBackgroundColorHover}: var(${textAreaTokens.inputBackgroundColor});
                ${textAreaTokens.inputBackgroundColorActive}: rgba(97, 181, 103, 0.384);
                ${textAreaTokens.inputBackgroundColorFocus}: var(${textAreaTokens.inputBackgroundColorActive});
                ${textAreaTokens.helpersBackgroundColor}: var(${textAreaTokens.inputBackgroundColor});
                ${textAreaTokens.helpersBackgroundColorHover}: var(${textAreaTokens.inputBackgroundColor});
                ${textAreaTokens.helpersBackgroundColorActive}: var(${textAreaTokens.inputBackgroundColorActive});
                ${textAreaTokens.helpersBackgroundColorFocus}: var(${textAreaTokens.helpersBackgroundColorActive});
                ${textAreaTokens.inputColor}: var(--plasma-colors-secondary);
                ${textAreaTokens.inputColorFocus}: var(--plasma-colors-primary);
                ${textAreaTokens.inputCaretColor}: var(--plasma-colors-success);
                ${textAreaTokens.placeholderColor}: var(--plasma-colors-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--plasma-colors-secondary);
                ${textAreaTokens.leftHelperColor}: var(--plasma-colors-success);
                ${textAreaTokens.rightHelperColor}: var(--plasma-colors-secondary);
            `,
            warning: css`
                ${textAreaTokens.inputBackgroundColor}: var(--plasma-colors-button-warning-transparent);
                ${textAreaTokens.inputBackgroundColorHover}: var(${textAreaTokens.inputBackgroundColor});
                ${textAreaTokens.inputBackgroundColorActive}: var(--plasma-colors-button-warning-active-transparent);
                ${textAreaTokens.inputBackgroundColorFocus}: var(${textAreaTokens.inputBackgroundColorActive});
                ${textAreaTokens.helpersBackgroundColor}: var(${textAreaTokens.inputBackgroundColor});
                ${textAreaTokens.helpersBackgroundColorHover}: var(${textAreaTokens.inputBackgroundColor});
                ${textAreaTokens.helpersBackgroundColorActive}: var(${textAreaTokens.inputBackgroundColorActive});
                ${textAreaTokens.helpersBackgroundColorFocus}: var(${textAreaTokens.helpersBackgroundColorActive});
                ${textAreaTokens.inputColor}: var(--plasma-colors-secondary);
                ${textAreaTokens.inputColorFocus}: var(--plasma-colors-primary);
                ${textAreaTokens.inputCaretColor}: var(--plasma-colors-warning);
                ${textAreaTokens.placeholderColor}: var(--plasma-colors-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--plasma-colors-secondary);
                ${textAreaTokens.leftHelperColor}: var(--plasma-colors-warning);
                ${textAreaTokens.rightHelperColor}: var(--plasma-colors-secondary);
            `,
            negative: css`
                ${textAreaTokens.inputBackgroundColor}: var(--plasma-colors-button-critical-transparent);
                ${textAreaTokens.inputBackgroundColorHover}: var(${textAreaTokens.inputBackgroundColor});
                ${textAreaTokens.inputBackgroundColorActive}: var(--plasma-colors-button-critical-active-transparent);
                ${textAreaTokens.inputBackgroundColorFocus}: var(${textAreaTokens.inputBackgroundColorActive});
                ${textAreaTokens.helpersBackgroundColor}: var(${textAreaTokens.inputBackgroundColor});
                ${textAreaTokens.helpersBackgroundColorHover}: var(${textAreaTokens.inputBackgroundColor});
                ${textAreaTokens.helpersBackgroundColorActive}: var(${textAreaTokens.inputBackgroundColorActive});
                ${textAreaTokens.helpersBackgroundColorFocus}: var(${textAreaTokens.helpersBackgroundColorActive});
                ${textAreaTokens.inputColor}: var(--plasma-colors-secondary);
                ${textAreaTokens.inputColorFocus}: var(--plasma-colors-primary);
                ${textAreaTokens.inputCaretColor}: var(--plasma-colors-critical);
                ${textAreaTokens.placeholderColor}: var(--plasma-colors-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--plasma-colors-secondary);
                ${textAreaTokens.leftHelperColor}: var(--plasma-colors-critical);
                ${textAreaTokens.rightHelperColor}: var(--plasma-colors-secondary);
            `,
        },
        disabled: {
            true: css`
                ${textAreaTokens.disabledOpacity}: 0.4;
                ${textAreaTokens.inputColorDisabled}: var(--plasma-colors-tertiary);
            `,
        },
    },
};
