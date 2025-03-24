import { css, emptyStateTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        size: 'l',
    },
    variations: {
        size: {
            l: css`
                ${tokens.borderRadius}: 0.875rem;
                ${tokens.padding}: 2rem 1rem 1rem 1rem;
                ${tokens.iconMargin}: 0 0 0.5rem 0;
                ${tokens.descriptionMargin}: 0 0 1rem 0;
                ${tokens.buttonMargin}: -1rem 0 0 0;
                ${tokens.buttonHeight}: 3.5rem;
                ${tokens.fontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.fontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.fontLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            m: css`
                ${tokens.borderRadius}: 0.75rem;
                ${tokens.padding}: 1.625rem 1rem 0.875rem 1rem;
                ${tokens.iconMargin}: 0 0 0.375rem 0;
                ${tokens.descriptionMargin}: 0 0 0.875rem 0;
                ${tokens.buttonMargin}: -0.875rem 0 0 0;
                ${tokens.buttonHeight}: 3rem;
                ${tokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.fontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.fontLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            s: css`
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.padding}: 1.375rem 0.875rem 0.625rem 0.875rem;
                ${tokens.iconMargin}: 0 0 0.25rem 0;
                ${tokens.descriptionMargin}: 0 0 0.625rem 0;
                ${tokens.buttonMargin}: -0.625rem 0 0 0;
                ${tokens.buttonHeight}: 2.5rem;
                ${tokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.fontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.fontLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            xs: css`
                ${tokens.borderRadius}: 0.5rem;
                ${tokens.padding}: 1rem 0.625rem 0.5rem 0.625rem;
                ${tokens.iconMargin}: 0 0 0.25rem 0;
                ${tokens.descriptionMargin}: 0 0 0.5rem 0;
                ${tokens.buttonMargin}: -0.5rem 0 0 0;
                ${tokens.buttonHeight}: 2rem;
                ${tokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.fontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.fontLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
    },
};
