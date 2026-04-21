import { css, emptyStateTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import { bodyL, bodyS } from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyM, bodyXs
 */
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
                ${tokens.fontFamily}: ${bodyL.fontFamily};
                ${tokens.fontSize}: ${bodyL.fontSize};
                ${tokens.fontStyle}: ${bodyL.fontStyle};
                ${tokens.fontWeight}: ${bodyL.fontWeight};
                ${tokens.fontLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.fontLineHeight}: ${bodyL.lineHeight};
            `,
            m: css`
                ${tokens.borderRadius}: 0.75rem;
                ${tokens.padding}: 1.625rem 1rem 0.875rem 1rem;
                ${tokens.iconMargin}: 0 0 0.375rem 0;
                ${tokens.descriptionMargin}: 0 0 0.875rem 0;
                ${tokens.buttonMargin}: -0.875rem 0 0 0;
                ${tokens.buttonHeight}: 3rem;
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.fontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.fontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${tokens.fontLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            s: css`
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.padding}: 1.375rem 0.875rem 0.625rem 0.875rem;
                ${tokens.iconMargin}: 0 0 0.25rem 0;
                ${tokens.descriptionMargin}: 0 0 0.625rem 0;
                ${tokens.buttonMargin}: -0.625rem 0 0 0;
                ${tokens.buttonHeight}: 2.5rem;
                ${tokens.fontFamily}: ${bodyS.fontFamily};
                ${tokens.fontSize}: ${bodyS.fontSize};
                ${tokens.fontStyle}: ${bodyS.fontStyle};
                ${tokens.fontWeight}: ${bodyS.fontWeight};
                ${tokens.fontLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.fontLineHeight}: ${bodyS.lineHeight};
            `,
            xs: css`
                ${tokens.borderRadius}: 0.5rem;
                ${tokens.padding}: 1rem 0.625rem 0.5rem 0.625rem;
                ${tokens.iconMargin}: 0 0 0.25rem 0;
                ${tokens.descriptionMargin}: 0 0 0.5rem 0;
                ${tokens.buttonMargin}: -0.5rem 0 0 0;
                ${tokens.buttonHeight}: 2rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.fontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.fontLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
    },
};
