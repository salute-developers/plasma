import { bodyS, surfaceAccent, textPrimary } from '@salutejs/sdds-themes/tokens/sdds_platform_ai';
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

                ${breadcrumbsTokens.breadcrumbsFocusOutlineColor}: ${surfaceAccent};

                ${breadcrumbsTokens.breadcrumbsOpacity}: 0.4;
            `,
        },
        size: {
            s: css`
                ${breadcrumbsTokens.breadcrumbsGap}: 0;

                ${breadcrumbsTokens.breadcrumbsFontFamily}: ${bodyS.fontFamily};
                ${breadcrumbsTokens.breadcrumbsFontSize}: ${bodyS.fontSize};
                ${breadcrumbsTokens.breadcrumbsFontStyle}: ${bodyS.fontStyle};
                ${breadcrumbsTokens.breadcrumbsFontWeight}: ${bodyS.fontWeight};
                ${breadcrumbsTokens.breadcrumbsLetterSpacing}: ${bodyS.letterSpacing};
                ${breadcrumbsTokens.breadcrumbsLineHeight}: ${bodyS.lineHeight};
            `,
        },
    },
};
