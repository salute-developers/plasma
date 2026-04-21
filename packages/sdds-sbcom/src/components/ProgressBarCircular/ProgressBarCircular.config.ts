import { css, progressBarCircularTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    /*
     * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
     * Missing tokens in @salutejs/sdds-themes/tokens: bodyLBody, bodyM, bodyMBody, bodySBody,
     * bodyXs, bodyXsBody, bodyXxs
     * bodyXxsBody, h2, h2Bold, h5, h5Bold, surfaceAccent
     */
    bodyL,
    bodyS,
    surfaceInfo,
    surfaceNegative,
    surfacePositive,
    surfaceSolidDefault,
    surfaceTransparentSecondary,
    surfaceTransparentTertiary,
    surfaceWarning,
    textPrimary,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${progressBarCircularTokens.backgroundStroke}: ${surfaceTransparentTertiary};
                ${progressBarCircularTokens.progressStroke}: ${surfaceSolidDefault};
                ${progressBarCircularTokens.contentColor}: ${textPrimary};
            `,
            secondary: css`
                ${progressBarCircularTokens.backgroundStroke}: ${surfaceTransparentTertiary};
                ${progressBarCircularTokens.progressStroke}: ${surfaceTransparentSecondary};
                ${progressBarCircularTokens.contentColor}: ${textPrimary};
            `,
            accent: css`
                ${progressBarCircularTokens.backgroundStroke}: ${surfaceTransparentTertiary};
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.progressStroke}: var(--surface-accent);
                ${progressBarCircularTokens.contentColor}: ${textPrimary};
            `,
            positive: css`
                ${progressBarCircularTokens.backgroundStroke}: ${surfaceTransparentTertiary};
                ${progressBarCircularTokens.progressStroke}: ${surfacePositive};
                ${progressBarCircularTokens.contentColor}: ${textPrimary};
            `,
            warning: css`
                ${progressBarCircularTokens.backgroundStroke}: ${surfaceTransparentTertiary};
                ${progressBarCircularTokens.progressStroke}: ${surfaceWarning};
                ${progressBarCircularTokens.contentColor}: ${textPrimary};
            `,
            negative: css`
                ${progressBarCircularTokens.backgroundStroke}: ${surfaceTransparentTertiary};
                ${progressBarCircularTokens.progressStroke}: ${surfaceNegative};
                ${progressBarCircularTokens.contentColor}: ${textPrimary};
            `,
            info: css`
                ${progressBarCircularTokens.backgroundStroke}: ${surfaceTransparentTertiary};
                ${progressBarCircularTokens.progressStroke}: ${surfaceInfo};
                ${progressBarCircularTokens.contentColor}: ${textPrimary};
            `,
        },
        size: {
            xxl: css`
                ${progressBarCircularTokens.size}: 128;
                ${progressBarCircularTokens.height}: 8rem;
                ${progressBarCircularTokens.width}: 8rem;
                ${progressBarCircularTokens.strokeWidth}: 0.25rem;
                ${progressBarCircularTokens.strokeSize}: 4;
                /* NOTE: no token h2 in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentFontFamily}: var(--plasma-typo-h2-font-family);
                /* NOTE: no token h2 in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentFontSize}: var(--plasma-typo-h2-font-size);
                /* NOTE: no token h2 in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentFontStyle}: var(--plasma-typo-h2-font-style);
                /* NOTE: no token h2Bold in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentFontWeight}: var(--plasma-typo-h2-bold-font-weight);
                /* NOTE: no token h2 in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentLetterSpacing}: var(--plasma-typo-h2-letter-spacing);
                /* NOTE: no token h2 in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentLineHeight}: var(--plasma-typo-h2-line-height);
            `,
            xl: css`
                ${progressBarCircularTokens.size}: 88;
                ${progressBarCircularTokens.height}: 5.5rem;
                ${progressBarCircularTokens.width}: 5.5rem;
                ${progressBarCircularTokens.strokeWidth}: 0.25rem;
                ${progressBarCircularTokens.strokeSize}: 4;
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentFontFamily}: var(--plasma-typo-h5-font-family);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentFontSize}: var(--plasma-typo-h5-font-size);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentFontStyle}: var(--plasma-typo-h5-font-style);
                /* NOTE: no token h5Bold in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentFontWeight}: var(--plasma-typo-h5-bold-font-weight);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentLetterSpacing}: var(--plasma-typo-h5-letter-spacing);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentLineHeight}: var(--plasma-typo-h5-line-height);
            `,
            l: css`
                ${progressBarCircularTokens.size}: 56;
                ${progressBarCircularTokens.height}: 3.5rem;
                ${progressBarCircularTokens.width}: 3.5rem;
                ${progressBarCircularTokens.strokeWidth}: 0.125rem;
                ${progressBarCircularTokens.strokeSize}: 2;
                ${progressBarCircularTokens.contentFontFamily}: ${bodyL.fontFamily};
                ${progressBarCircularTokens.contentFontSize}: ${bodyL.fontSize};
                ${progressBarCircularTokens.contentFontStyle}: ${bodyL.fontStyle};
                /* NOTE: no token bodyLBody in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentFontWeight}: var(--plasma-typo-body-l-body-font-weight);
                ${progressBarCircularTokens.contentLetterSpacing}: ${bodyL.letterSpacing};
                ${progressBarCircularTokens.contentLineHeight}: ${bodyL.lineHeight};
            `,
            m: css`
                ${progressBarCircularTokens.size}: 48;
                ${progressBarCircularTokens.height}: 3rem;
                ${progressBarCircularTokens.width}: 3rem;
                ${progressBarCircularTokens.strokeWidth}: 0.125rem;
                ${progressBarCircularTokens.strokeSize}: 2;
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyMBody in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentFontWeight}: var(--plasma-typo-body-m-body-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            s: css`
                ${progressBarCircularTokens.size}: 32;
                ${progressBarCircularTokens.height}: 2.25rem;
                ${progressBarCircularTokens.width}: 2.25rem;
                ${progressBarCircularTokens.strokeWidth}: 0.125rem;
                ${progressBarCircularTokens.strokeSize}: 2;
                ${progressBarCircularTokens.contentFontFamily}: ${bodyS.fontFamily};
                ${progressBarCircularTokens.contentFontSize}: ${bodyS.fontSize};
                ${progressBarCircularTokens.contentFontStyle}: ${bodyS.fontStyle};
                /* NOTE: no token bodySBody in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentFontWeight}: var(--plasma-typo-body-s-body-font-weight);
                ${progressBarCircularTokens.contentLetterSpacing}: ${bodyS.letterSpacing};
                ${progressBarCircularTokens.contentLineHeight}: ${bodyS.lineHeight};
            `,
            xs: css`
                ${progressBarCircularTokens.size}: 24;
                ${progressBarCircularTokens.height}: 1.5rem;
                ${progressBarCircularTokens.width}: 1.5rem;
                ${progressBarCircularTokens.strokeWidth}: 0.125rem;
                ${progressBarCircularTokens.strokeSize}: 2;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXsBody in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentFontWeight}: var(--plasma-typo-body-xs-body-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            xxs: css`
                ${progressBarCircularTokens.size}: 16;
                ${progressBarCircularTokens.height}: 1rem;
                ${progressBarCircularTokens.width}: 1rem;
                ${progressBarCircularTokens.strokeWidth}: 0.125rem;
                ${progressBarCircularTokens.strokeSize}: 2;
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentFontFamily}: var(--plasma-typo-body-xxs-font-family);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentFontSize}: var(--plasma-typo-body-xxs-font-size);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentFontStyle}: var(--plasma-typo-body-xxs-font-style);
                /* NOTE: no token bodyXxsBody in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentFontWeight}: var(--plasma-typo-body-xxs-body-font-weight);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${progressBarCircularTokens.contentLineHeight}: var(--plasma-typo-body-xxs-line-height);
            `,
        },
    },
};
