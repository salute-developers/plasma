import {
    bodyS,
    bodySBold,
    surfaceAccent,
    textAccent,
    textPrimary,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, breadcrumbsTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${breadcrumbsTokens.breadcrumbsColor}: ${textAccent};
                ${breadcrumbsTokens.breadcrumbsColorText}: ${textPrimary};
                ${breadcrumbsTokens.breadcrumbsColorSeparator}: ${textSecondary};
                ${breadcrumbsTokens.breadcrumbsOpacity}: 1;
                ${breadcrumbsTokens.breadcrumbsFocusOutlineColor}: ${surfaceAccent};
            `,
        },
        size: {
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
