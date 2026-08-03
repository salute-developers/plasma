import { bodyS } from '@salutejs/sdds-themes/tokens/sdds_cs';
import { badgeTokens } from '@salutejs/plasma-new-hope/emotion';

export const sizeS = `
    ${badgeTokens.borderRadius}: 0.375rem;
    ${badgeTokens.height}: 1.5rem;
    ${badgeTokens.padding}: 0 0.5rem;
    ${badgeTokens.paddingIconOnly}: 0 0.375rem;

    ${badgeTokens.fontFamily}: ${bodyS.fontFamily};
    ${badgeTokens.fontSize}: ${bodyS.fontSize};
    ${badgeTokens.fontStyle}: ${bodyS.fontStyle};
    ${badgeTokens.fontWeight}: ${bodyS.fontWeight};
    ${badgeTokens.letterSpacing}: ${bodyS.letterSpacing};
    ${badgeTokens.lineHeight}: ${bodyS.lineHeight};

    ${badgeTokens.leftContentMarginLeft}: -0.0625rem;
    ${badgeTokens.leftContentMarginRight}: 0.125rem;

    ${badgeTokens.rightContentMarginLeft}: 0.125rem;
    ${badgeTokens.rightContentMarginRight}: -0.0625rem;
`;

export const pilled = `
    ${badgeTokens.pilledBorderRadius}: 1000px;
`;
