import { badgeTokens } from '@salutejs/plasma-new-hope/emotion';

export const sizeS = `
    ${badgeTokens.borderRadius}: 0.375rem;
    ${badgeTokens.height}: 1.5rem;
    ${badgeTokens.padding}: 0 0.5rem;
    ${badgeTokens.paddingIconOnly}: 0 0.375rem;

    ${badgeTokens.fontFamily}: var(--plasma-typo-body-s-font-family);
    ${badgeTokens.fontSize}: var(--plasma-typo-body-s-font-size);
    ${badgeTokens.fontStyle}: var(--plasma-typo-body-s-font-style);
    ${badgeTokens.fontWeight}: var(--plasma-typo-body-s-font-weight);
    ${badgeTokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);
    ${badgeTokens.lineHeight}: var(--plasma-typo-body-s-line-height);

    ${badgeTokens.leftContentMarginLeft}: -0.0625rem;
    ${badgeTokens.leftContentMarginRight}: 0.125rem;

    ${badgeTokens.rightContentMarginLeft}: 0.125rem;
    ${badgeTokens.rightContentMarginRight}: -0.0625rem;
`;

export const pilled = `
    ${badgeTokens.pilledBorderRadius}: 1000px;
`;
