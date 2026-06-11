import { badgeTokens } from '@salutejs/plasma-new-hope/styled-components';
import { bodyS, bodyXS, bodyXXS } from '@salutejs/plasma-themes/tokens/plasma_giga';

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

    ${badgeTokens.fontFamily}: ${bodyXS.fontFamily};
    ${badgeTokens.fontSize}: ${bodyXS.fontSize};
    ${badgeTokens.fontStyle}: ${bodyXS.fontStyle};
    ${badgeTokens.fontWeight}: ${bodyXS.fontWeight};
    ${badgeTokens.letterSpacing}: ${bodyXS.letterSpacing};
    ${badgeTokens.lineHeight}: ${bodyXS.lineHeight};

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

    ${badgeTokens.fontFamily}: ${bodyXXS.fontFamily};
    ${badgeTokens.fontSize}: ${bodyXXS.fontSize};
    ${badgeTokens.fontStyle}: ${bodyXXS.fontStyle};
    ${badgeTokens.fontWeight}: ${bodyXXS.fontWeight};
    ${badgeTokens.letterSpacing}: ${bodyXXS.letterSpacing};
    ${badgeTokens.lineHeight}: ${bodyXXS.lineHeight};

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

    ${badgeTokens.fontFamily}: ${bodyXXS.fontFamily};
    ${badgeTokens.fontSize}: ${bodyXXS.fontSize};
    ${badgeTokens.fontStyle}: ${bodyXXS.fontStyle};
    ${badgeTokens.fontWeight}: ${bodyXXS.fontWeight};
    ${badgeTokens.letterSpacing}: ${bodyXXS.letterSpacing};
    ${badgeTokens.lineHeight}: ${bodyXXS.lineHeight};

    ${badgeTokens.leftContentMarginLeft}: -0.0625rem;
    ${badgeTokens.leftContentMarginRight}: 0.125rem;

    ${badgeTokens.rightContentMarginLeft}: 0.125rem;
    ${badgeTokens.rightContentMarginRight}: -0.0625rem;
`;

export const pilled = `
    // NOTE: заменить на токен, когда появится
    ${badgeTokens.pilledBorderRadius}: 1000px;
`;
