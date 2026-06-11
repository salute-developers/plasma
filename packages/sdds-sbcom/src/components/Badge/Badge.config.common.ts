import { badgeTokens } from '@salutejs/plasma-new-hope/styled-components';
import { bodyS } from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyXs, bodyXxs, surfaceTransparentPositive
 * surfaceTransparentWarning
 */

export const sizeL = `
    ${badgeTokens.borderRadius}: 0.5rem;
    ${badgeTokens.height}: 1.75rem;
    ${badgeTokens.padding}: 0 0.6875rem;
    ${badgeTokens.paddingIconOnly}: 0 0.375rem;

    ${badgeTokens.fontFamily}: ${bodyS.fontFamily};
    ${badgeTokens.fontSize}: ${bodyS.fontSize};
    ${badgeTokens.fontStyle}: ${bodyS.fontStyle};
    ${badgeTokens.fontWeight}: ${bodyS.fontWeight};
    ${badgeTokens.letterSpacing}: ${bodyS.letterSpacing};
    ${badgeTokens.lineHeight}: ${bodyS.lineHeight};

    ${badgeTokens.leftContentMarginLeft}: -0.0625rem;
    ${badgeTokens.leftContentMarginRight}: 0.25rem;

    ${badgeTokens.rightContentMarginLeft}: 0.25rem;
    ${badgeTokens.rightContentMarginRight}: -0.0625rem;
`;

export const sizeM = `
    ${badgeTokens.borderRadius}: 0.375rem;
    ${badgeTokens.height}: 1.5rem;
    ${badgeTokens.padding}: 0 0.5625rem;
    ${badgeTokens.paddingIconOnly}: 0 0.375rem;

    ${badgeTokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
    ${badgeTokens.fontSize}: var(--plasma-typo-body-xs-font-size);
    ${badgeTokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
    ${badgeTokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
    ${badgeTokens.letterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
    ${badgeTokens.lineHeight}: var(--plasma-typo-body-xs-line-height);

    ${badgeTokens.leftContentMarginLeft}: -0.0625rem;
    ${badgeTokens.leftContentMarginRight}: 0.1875rem;

    ${badgeTokens.rightContentMarginLeft}: 0.1875rem;
    ${badgeTokens.rightContentMarginRight}: -0.0625rem;
`;

export const sizeS = `
    ${badgeTokens.borderRadius}: 0.375rem;
    ${badgeTokens.height}: 1.25rem;
    ${badgeTokens.padding}: 0 0.4375rem;
    ${badgeTokens.paddingIconOnly}: 0 0.25rem;

    ${badgeTokens.fontFamily}: var(--plasma-typo-body-xxs-font-family);
    ${badgeTokens.fontSize}: var(--plasma-typo-body-xxs-font-size);
    ${badgeTokens.fontStyle}: var(--plasma-typo-body-xxs-font-style);
    ${badgeTokens.fontWeight}: var(--plasma-typo-body-xxs-font-weight);
    ${badgeTokens.letterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
    ${badgeTokens.lineHeight}: var(--plasma-typo-body-xxs-line-height);

    ${badgeTokens.leftContentMarginLeft}: -0.0625rem;
    ${badgeTokens.leftContentMarginRight}: 0.125rem;

    ${badgeTokens.rightContentMarginLeft}: 0.125rem;
    ${badgeTokens.rightContentMarginRight}: -0.0625rem;
`;

export const sizeXS = `
    ${badgeTokens.borderRadius}: 0.25rem;
    ${badgeTokens.height}: 1rem;
    ${badgeTokens.padding}: 0 0.25rem;
    ${badgeTokens.paddingIconOnly}: 0 0.188rem;

    /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
    ${badgeTokens.fontFamily}: var(--plasma-typo-body-xxs-font-family);
    /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
    ${badgeTokens.fontSize}: var(--plasma-typo-body-xxs-font-size);
    /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
    ${badgeTokens.fontStyle}: var(--plasma-typo-body-xxs-font-style);
    /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
    ${badgeTokens.fontWeight}: var(--plasma-typo-body-xxs-font-weight);
    /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
    ${badgeTokens.letterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
    /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
    ${badgeTokens.lineHeight}: var(--plasma-typo-body-xxs-line-height);

    ${badgeTokens.leftContentMarginLeft}: -0.0625rem;
    ${badgeTokens.leftContentMarginRight}: 0.125rem;

    ${badgeTokens.rightContentMarginLeft}: 0.125rem;
    ${badgeTokens.rightContentMarginRight}: -0.0625rem;
`;

export const pilled = `
    ${badgeTokens.pilledBorderRadius}: 1000px;
`;
