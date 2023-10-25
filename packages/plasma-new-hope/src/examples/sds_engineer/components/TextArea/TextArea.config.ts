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
                ${textAreaTokens.inputHeight}: 5.825rem;
                ${textAreaTokens.inputMinHeight}: 1.125rem;
                ${textAreaTokens.borderSize}: 0.125rem;
                ${textAreaTokens.borderRadius}: 0.25rem;
                ${textAreaTokens.inputPaddingTop}: 0.125rem;
                ${textAreaTokens.inputPaddingRight}: 0.5rem;
                ${textAreaTokens.inputPaddingBottom}: 0.125rem;
                ${textAreaTokens.inputPaddingLeft}: 0.5rem;
                ${textAreaTokens.inputFontFamily}: var(--plasma-typo-body-s-font-family);
                ${textAreaTokens.inputFontSize}: var(--plasma-typo-body-s-font-size);
                ${textAreaTokens.inputFontStyle}: var(--plasma-typo-body-s-font-style);
                ${textAreaTokens.inputFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${textAreaTokens.inputLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${textAreaTokens.inputLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            s: css`
                ${textAreaTokens.inputWidth}: 100%;
                ${textAreaTokens.inputHeight}: 5.825rem;
                ${textAreaTokens.inputMinHeight}: 1.125rem;
                ${textAreaTokens.borderSize}: 0.125rem;
                ${textAreaTokens.borderRadius}: 0.25rem;
                ${textAreaTokens.inputPaddingTop}: 0.188rem;
                ${textAreaTokens.inputPaddingRight}: 0.5rem;
                ${textAreaTokens.inputPaddingBottom}: 0.313rem;
                ${textAreaTokens.inputPaddingLeft}: 0.5rem;
                ${textAreaTokens.inputFontFamily}: var(--plasma-typo-body-m-font-family);
                ${textAreaTokens.inputFontSize}: var(--plasma-typo-body-m-font-size);
                ${textAreaTokens.inputFontStyle}: var(--plasma-typo-body-m-font-style);
                ${textAreaTokens.inputFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${textAreaTokens.inputLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${textAreaTokens.inputLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            m: css`
                ${textAreaTokens.inputWidth}: 100%;
                ${textAreaTokens.inputHeight}: 5.825rem;
                ${textAreaTokens.inputMinHeight}: 1.125rem;
                ${textAreaTokens.borderSize}: 0.125rem;
                ${textAreaTokens.borderRadius}: 0.25rem;
                ${textAreaTokens.inputPaddingTop}: 0.438rem;
                ${textAreaTokens.inputPaddingRight}: 0.5rem;
                ${textAreaTokens.inputPaddingBottom}: 0.563rem;
                ${textAreaTokens.inputPaddingLeft}: 0.75rem;
                ${textAreaTokens.inputFontFamily}: var(--plasma-typo-body-m-font-family);
                ${textAreaTokens.inputFontSize}: var(--plasma-typo-body-m-font-size);
                ${textAreaTokens.inputFontStyle}: var(--plasma-typo-body-m-font-style);
                ${textAreaTokens.inputFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${textAreaTokens.inputLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${textAreaTokens.inputLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
        },
        view: {
            primary: css`
                ${textAreaTokens.inputBorderColor}: var(--surface-transparent-tertiary);
                ${textAreaTokens.inputBorderColorHover}: var(--surface-accent-hover);
                ${textAreaTokens.inputBorderColorActive}: var(--surface-accent-active);
                ${textAreaTokens.inputBorderColorFocus}: var(--surface-accent-active);
                ${textAreaTokens.inputColor}: var(--text-primary);
                ${textAreaTokens.inputColorFocus}: var(--text-primary);
                ${textAreaTokens.placeholderColor}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--text-secondary);
            `,
            negative: css`
                ${textAreaTokens.inputBackgroundColor}: var(--surface-transparent-negative);
                ${textAreaTokens.inputBackgroundColorHover}: var(--surface-transparent-negative);
                ${textAreaTokens.inputBackgroundColorActive}: var(--surface-transparent-negative);
                ${textAreaTokens.inputBackgroundColorFocus}: var(--surface-transparent-negative);
                ${textAreaTokens.inputBorderColor}: var(--surface-transparent-tertiary);
                ${textAreaTokens.inputBorderColorHover}: var(--surface-accent-hover);
                ${textAreaTokens.inputBorderColorActive}: var(--surface-accent-active);
                ${textAreaTokens.inputBorderColorFocus}: var(--surface-accent-active);
                ${textAreaTokens.inputColor}: var(--text-primary);
                ${textAreaTokens.inputColorFocus}: var(--text-primary);
                ${textAreaTokens.placeholderColor}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--plasma-colors-secondary);
            `,
        },
        disabled: {
            true: css`
                ${textAreaTokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
