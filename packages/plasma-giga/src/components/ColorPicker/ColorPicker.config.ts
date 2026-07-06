import { css, colorPickerTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${tokens.backgroundColor}: var(--surface-solid-card);
                ${tokens.activeTabColor}: var(--surface-solid-default);
                ${tokens.inputBackgroundColor}: var(--surface-transparent-primary);
                ${tokens.buttonColor}: var(--text-primary);
                ${tokens.buttonTextColor}: var(--inverse-text-primary);
                ${tokens.buttonBackgroundColor}: var(--surface-transparent-secondary);
                ${tokens.buttonColorHover}: var(--inverse-text-primary-hover);
                ${tokens.buttonColorActive}: var(--inverse-text-primary-active);
                ${tokens.activeTabTextColor}: var(--inverse-text-primary);
            `,
        },
        size: {
            s: css`
                ${tokens.buttonHeight}: 2.5rem;
                ${tokens.buttonWidth}: 11.25rem;
                ${tokens.buttonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.buttonFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.buttonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.buttonFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.buttonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.buttonLineHeight}: var(--plasma-typo-body-s-line-height);
                ${tokens.buttonRadius}: 1000px;
            `,
        },
    },
};
