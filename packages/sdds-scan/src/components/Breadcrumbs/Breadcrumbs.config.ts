import { bodyM, bodyMBold, bodyS, bodySBold, surfaceAccent, textPrimary } from '@salutejs/sdds-themes/tokens/sdds_scan';
import { css, breadcrumbsTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${breadcrumbsTokens.breadcrumbsColor}: ${textPrimary};
                ${breadcrumbsTokens.breadcrumbsColorText}: ${textPrimary};
                ${breadcrumbsTokens.breadcrumbsColorSeparator}: ${textPrimary};
                ${breadcrumbsTokens.breadcrumbsOpacity}: 0.4;
                ${breadcrumbsTokens.breadcrumbsFocusOutlineColor}: ${surfaceAccent};
            `,
        },
        size: {
            m: css`
                ${breadcrumbsTokens.breadcrumbsGap}: 0.375rem;

                ${breadcrumbsTokens.breadcrumbsFontFamily}: ${bodyM.fontFamily};
                ${breadcrumbsTokens.breadcrumbsFontSize}: ${bodyM.fontSize};
                ${breadcrumbsTokens.breadcrumbsFontStyle}: ${bodyM.fontStyle};
                ${breadcrumbsTokens.breadcrumbsFontWeight}: ${bodyMBold.fontWeight};
                ${breadcrumbsTokens.breadcrumbsLetterSpacing}: ${bodyM.letterSpacing};
                ${breadcrumbsTokens.breadcrumbsLineHeight}: ${bodyM.lineHeight};
            `,
            s: css`
                ${breadcrumbsTokens.breadcrumbsGap}: 0.25rem;

                ${breadcrumbsTokens.breadcrumbsFontFamily}: ${bodyS.fontFamily};
                ${breadcrumbsTokens.breadcrumbsFontSize}: ${bodyS.fontSize};
                ${breadcrumbsTokens.breadcrumbsFontStyle}: ${bodyS.fontStyle};
                ${breadcrumbsTokens.breadcrumbsFontWeight}: ${bodySBold.fontWeight};
                ${breadcrumbsTokens.breadcrumbsLetterSpacing}: ${bodyS.letterSpacing};
                ${breadcrumbsTokens.breadcrumbsLineHeight}: ${bodyS.lineHeight};
            `,
        },
    },
};
