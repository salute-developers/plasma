import {
    bodyL,
    bodyLBold,
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    bodyXS,
    bodyXSBold,
    surfaceAccent,
    textPrimary,
} from '@salutejs/plasma-themes/tokens/plasma_b2c';
import { css } from '@linaria/core';

import { breadcrumbsTokens } from '../../../components/Breadcrumbs';

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
            l: css`
                ${breadcrumbsTokens.breadcrumbsGap}: 0.5rem;

                ${breadcrumbsTokens.breadcrumbsFontFamily}: ${bodyL.fontFamily};
                ${breadcrumbsTokens.breadcrumbsFontSize}: ${bodyL.fontSize};
                ${breadcrumbsTokens.breadcrumbsFontStyle}: ${bodyL.fontStyle};
                ${breadcrumbsTokens.breadcrumbsFontWeight}: ${bodyLBold.fontWeight};
                ${breadcrumbsTokens.breadcrumbsLetterSpacing}: ${bodyL.letterSpacing};
                ${breadcrumbsTokens.breadcrumbsLineHeight}: ${bodyL.lineHeight};
            `,
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
            xs: css`
                ${breadcrumbsTokens.breadcrumbsGap}: 0rem;

                ${breadcrumbsTokens.breadcrumbsFontFamily}: ${bodyXS.fontFamily};
                ${breadcrumbsTokens.breadcrumbsFontSize}: ${bodyXS.fontSize};
                ${breadcrumbsTokens.breadcrumbsFontStyle}: ${bodyXS.fontStyle};
                ${breadcrumbsTokens.breadcrumbsFontWeight}: ${bodyXSBold.fontWeight};
                ${breadcrumbsTokens.breadcrumbsLetterSpacing}: ${bodyXS.letterSpacing};
                ${breadcrumbsTokens.breadcrumbsLineHeight}: ${bodyXS.lineHeight};
            `,
        },
    },
};
