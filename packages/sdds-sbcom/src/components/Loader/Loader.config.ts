import { css, loaderTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    /*
     * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
     * Missing tokens in @salutejs/sdds-themes/tokens: bodyLBody, bodyM, bodyMBody, bodySBody,
     * bodyXs, bodyXsBody, bodyXxs
     * bodyXxsBody, h2, h2Bold, h5, h5Bold, surfaceAccent
     */
    bodyL,
    bodyS,
    overlaySoft,
    surfaceInfo,
    surfaceNegative,
    surfacePositive,
    surfaceSolidDefault,
    surfaceTransparentSecondary,
    surfaceTransparentTertiary,
    surfaceWarning,
    textAccent,
    textInfo,
    textNegative,
    textPositive,
    textPrimary,
    textSecondary,
    textWarning,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${loaderTokens.progressBarCircularBackgroundStroke}: ${surfaceTransparentTertiary};
                ${loaderTokens.progressBarCircularStroke}: ${surfaceSolidDefault};
                ${loaderTokens.progressBarCircularContentColor}: ${textPrimary};

                ${loaderTokens.spinnerColor}: ${textPrimary};

                ${loaderTokens.overlayColor}: ${overlaySoft};
            `,
            secondary: css`
                ${loaderTokens.progressBarCircularBackgroundStroke}: ${surfaceTransparentTertiary};
                ${loaderTokens.progressBarCircularStroke}: ${surfaceTransparentSecondary};
                ${loaderTokens.progressBarCircularContentColor}: ${textPrimary};

                ${loaderTokens.spinnerColor}: ${textSecondary};

                ${loaderTokens.overlayColor}: ${overlaySoft};
            `,
            accent: css`
                ${loaderTokens.progressBarCircularBackgroundStroke}: ${surfaceTransparentTertiary};
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularStroke}: var(--surface-accent);
                ${loaderTokens.progressBarCircularContentColor}: ${textPrimary};

                ${loaderTokens.spinnerColor}: ${textAccent};

                ${loaderTokens.overlayColor}: ${overlaySoft};
            `,
            positive: css`
                ${loaderTokens.progressBarCircularBackgroundStroke}: ${surfaceTransparentTertiary};
                ${loaderTokens.progressBarCircularStroke}: ${surfacePositive};
                ${loaderTokens.progressBarCircularContentColor}: ${textPrimary};

                ${loaderTokens.spinnerColor}: ${textPositive};

                ${loaderTokens.overlayColor}: ${overlaySoft};
            `,
            warning: css`
                ${loaderTokens.progressBarCircularBackgroundStroke}: ${surfaceTransparentTertiary};
                ${loaderTokens.progressBarCircularStroke}: ${surfaceWarning};
                ${loaderTokens.progressBarCircularContentColor}: ${textPrimary};

                ${loaderTokens.spinnerColor}: ${textWarning};

                ${loaderTokens.overlayColor}: ${overlaySoft};
            `,
            negative: css`
                ${loaderTokens.progressBarCircularBackgroundStroke}: ${surfaceTransparentTertiary};
                ${loaderTokens.progressBarCircularStroke}: ${surfaceNegative};
                ${loaderTokens.progressBarCircularContentColor}: ${textPrimary};

                ${loaderTokens.spinnerColor}: ${textNegative};

                ${loaderTokens.overlayColor}: ${overlaySoft};
            `,
            info: css`
                ${loaderTokens.progressBarCircularBackgroundStroke}: ${surfaceTransparentTertiary};
                ${loaderTokens.progressBarCircularStroke}: ${surfaceInfo};
                ${loaderTokens.progressBarCircularContentColor}: ${textPrimary};

                ${loaderTokens.spinnerColor}: ${textInfo};

                ${loaderTokens.overlayColor}: ${overlaySoft};
            `,
        },
        size: {
            xxl: css`
                ${loaderTokens.width}: 100%;
                ${loaderTokens.height}: 100%;

                ${loaderTokens.progressBarCircularSize}: 128;
                ${loaderTokens.progressBarCircularHeight}: 8rem;
                ${loaderTokens.progressBarCircularWidth}: 8rem;
                ${loaderTokens.progressBarCircularStrokeWidth}: 0.25rem;
                ${loaderTokens.progressBarCircularStrokeSize}: 4;
                /* NOTE: no token h2 in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentFontFamily}: var(--plasma-typo-h2-font-family);
                /* NOTE: no token h2 in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentFontSize}: var(--plasma-typo-h2-font-size);
                /* NOTE: no token h2 in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentFontStyle}: var(--plasma-typo-h2-font-style);
                /* NOTE: no token h2Bold in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentFontWeight}: var(--plasma-typo-h2-bold-font-weight);
                /* NOTE: no token h2 in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentLetterSpacing}: var(--plasma-typo-h2-letter-spacing);
                /* NOTE: no token h2 in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentLineHeight}: var(--plasma-typo-h2-line-height);

                ${loaderTokens.spinnerSize}: 8rem;
            `,
            xl: css`
                ${loaderTokens.width}: 100%;
                ${loaderTokens.height}: 100%;

                ${loaderTokens.progressBarCircularSize}: 88;
                ${loaderTokens.progressBarCircularHeight}: 5.5rem;
                ${loaderTokens.progressBarCircularWidth}: 5.5rem;
                ${loaderTokens.progressBarCircularStrokeWidth}: 0.25rem;
                ${loaderTokens.progressBarCircularStrokeSize}: 4;
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentFontFamily}: var(--plasma-typo-h5-font-family);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentFontSize}: var(--plasma-typo-h5-font-size);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentFontStyle}: var(--plasma-typo-h5-font-style);
                /* NOTE: no token h5Bold in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentFontWeight}: var(--plasma-typo-h5-bold-font-weight);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentLetterSpacing}: var(--plasma-typo-h5-letter-spacing);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentLineHeight}: var(--plasma-typo-h5-line-height);

                ${loaderTokens.spinnerSize}: 5.5rem;
            `,
            l: css`
                ${loaderTokens.width}: 100%;
                ${loaderTokens.height}: 100%;

                ${loaderTokens.progressBarCircularSize}: 56;
                ${loaderTokens.progressBarCircularHeight}: 3.5rem;
                ${loaderTokens.progressBarCircularWidth}: 3.5rem;
                ${loaderTokens.progressBarCircularStrokeWidth}: 0.125rem;
                ${loaderTokens.progressBarCircularStrokeSize}: 2;
                ${loaderTokens.progressBarCircularContentFontFamily}: ${bodyL.fontFamily};
                ${loaderTokens.progressBarCircularContentFontSize}: ${bodyL.fontSize};
                ${loaderTokens.progressBarCircularContentFontStyle}: ${bodyL.fontStyle};
                /* NOTE: no token bodyLBody in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentFontWeight}: var(--plasma-typo-body-l-body-font-weight);
                ${loaderTokens.progressBarCircularContentLetterSpacing}: ${bodyL.letterSpacing};
                ${loaderTokens.progressBarCircularContentLineHeight}: ${bodyL.lineHeight};

                ${loaderTokens.spinnerSize}: 3.5rem;
            `,
            m: css`
                ${loaderTokens.width}: 100%;
                ${loaderTokens.height}: 100%;

                ${loaderTokens.progressBarCircularSize}: 48;
                ${loaderTokens.progressBarCircularHeight}: 3rem;
                ${loaderTokens.progressBarCircularWidth}: 3rem;
                ${loaderTokens.progressBarCircularStrokeWidth}: 0.125rem;
                ${loaderTokens.progressBarCircularStrokeSize}: 2;
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyMBody in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentFontWeight}: var(--plasma-typo-body-m-body-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentLineHeight}: var(--plasma-typo-body-m-line-height);

                ${loaderTokens.spinnerSize}: 3rem;
            `,
            s: css`
                ${loaderTokens.width}: 100%;
                ${loaderTokens.height}: 100%;

                ${loaderTokens.progressBarCircularSize}: 32;
                ${loaderTokens.progressBarCircularHeight}: 2.25rem;
                ${loaderTokens.progressBarCircularWidth}: 2.25rem;
                ${loaderTokens.progressBarCircularStrokeWidth}: 0.125rem;
                ${loaderTokens.progressBarCircularStrokeSize}: 2;
                ${loaderTokens.progressBarCircularContentFontFamily}: ${bodyS.fontFamily};
                ${loaderTokens.progressBarCircularContentFontSize}: ${bodyS.fontSize};
                ${loaderTokens.progressBarCircularContentFontStyle}: ${bodyS.fontStyle};
                /* NOTE: no token bodySBody in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentFontWeight}: var(--plasma-typo-body-s-body-font-weight);
                ${loaderTokens.progressBarCircularContentLetterSpacing}: ${bodyS.letterSpacing};
                ${loaderTokens.progressBarCircularContentLineHeight}: ${bodyS.lineHeight};

                ${loaderTokens.spinnerSize}: 2.25rem;
            `,
            xs: css`
                ${loaderTokens.width}: 100%;
                ${loaderTokens.height}: 100%;

                ${loaderTokens.progressBarCircularSize}: 24;
                ${loaderTokens.progressBarCircularHeight}: 1.5rem;
                ${loaderTokens.progressBarCircularWidth}: 1.5rem;
                ${loaderTokens.progressBarCircularStrokeWidth}: 0.125rem;
                ${loaderTokens.progressBarCircularStrokeSize}: 2;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXsBody in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentFontWeight}: var(--plasma-typo-body-xs-body-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${loaderTokens.spinnerSize}: 1.5rem;
            `,
            xxs: css`
                ${loaderTokens.width}: 100%;
                ${loaderTokens.height}: 100%;

                ${loaderTokens.progressBarCircularSize}: 16;
                ${loaderTokens.progressBarCircularHeight}: 1rem;
                ${loaderTokens.progressBarCircularWidth}: 1rem;
                ${loaderTokens.progressBarCircularStrokeWidth}: 0.125rem;
                ${loaderTokens.progressBarCircularStrokeSize}: 2;
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentFontFamily}: var(--plasma-typo-body-xxs-font-family);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentFontSize}: var(--plasma-typo-body-xxs-font-size);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentFontStyle}: var(--plasma-typo-body-xxs-font-style);
                /* NOTE: no token bodyXxsBody in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentFontWeight}: var(--plasma-typo-body-xxs-body-font-weight);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentLineHeight}: var(--plasma-typo-body-xxs-line-height);

                ${loaderTokens.spinnerSize}: 1rem;
            `,
        },
    },
};
