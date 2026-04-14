import { css } from 'styled-components';

import { colorPickerTokens } from '../../../components/ColorPicker';

export const config = {
    defaults: {
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${colorPickerTokens.backgroundColor}: var(--surface-solid-card);
                ${colorPickerTokens.activeTabColor}: var(--surface-solid-default);
                ${colorPickerTokens.inputBackgroundColor}: var(--surface-transparent-primary);
                ${colorPickerTokens.buttonColor}: var(--text-primary);
                ${colorPickerTokens.buttonTextColor}: var(--inverse-text-primary);
                ${colorPickerTokens.buttonBackgroundColor}: var(--surface-transparent-secondary);
                ${colorPickerTokens.buttonColorHover}: var(--inverse-text-primary-hover);
                ${colorPickerTokens.buttonColorActive}: var(--inverse-text-primary-active);
                ${colorPickerTokens.activeTabTextColor}: var(--inverse-text-primary);
            `,
        },
        size: {
            s: css`
                ${colorPickerTokens.buttonHeight}: 2.5rem;
                ${colorPickerTokens.buttonWidth}: 11.25rem;
                ${colorPickerTokens.buttonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${colorPickerTokens.buttonFontSize}: var(--plasma-typo-body-s-font-size);
                ${colorPickerTokens.buttonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${colorPickerTokens.buttonFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${colorPickerTokens.buttonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${colorPickerTokens.buttonLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
        },
    },
};
