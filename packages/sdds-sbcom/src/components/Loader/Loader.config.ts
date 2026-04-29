import { css, loaderTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyL,
    bodyM,
    bodyS,
    h2,
    h2Bold,
    overlaySoft,
    surfaceAccent,
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

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyLBody, bodyMBody, bodySBody, bodyXs, bodyXsBody, bodyXxs
 * bodyXxsBody, h5, h5Bold
 */
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
                ${loaderTokens.progressBarCircularStroke}: ${surfaceAccent};
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
                ${loaderTokens.progressBarCircularContentFontFamily}: ${h2.fontFamily};
                ${loaderTokens.progressBarCircularContentFontSize}: ${h2.fontSize};
                ${loaderTokens.progressBarCircularContentFontStyle}: ${h2.fontStyle};
                ${loaderTokens.progressBarCircularContentFontWeight}: ${h2Bold.fontWeight};
                ${loaderTokens.progressBarCircularContentLetterSpacing}: ${h2.letterSpacing};
                ${loaderTokens.progressBarCircularContentLineHeight}: ${h2.lineHeight};

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
                ${loaderTokens.progressBarCircularContentFontFamily}: var(--plasma-typo-h5-font-family);
                ${loaderTokens.progressBarCircularContentFontSize}: var(--plasma-typo-h5-font-size);
                ${loaderTokens.progressBarCircularContentFontStyle}: var(--plasma-typo-h5-font-style);
                ${loaderTokens.progressBarCircularContentFontWeight}: var(--plasma-typo-h5-bold-font-weight);
                ${loaderTokens.progressBarCircularContentLetterSpacing}: var(--plasma-typo-h5-letter-spacing);
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
                ${loaderTokens.progressBarCircularContentFontWeight}: var(--plasma-typo-body-l-font-weight);
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
                ${loaderTokens.progressBarCircularContentFontFamily}: ${bodyM.fontFamily};
                ${loaderTokens.progressBarCircularContentFontSize}: ${bodyM.fontSize};
                ${loaderTokens.progressBarCircularContentFontStyle}: ${bodyM.fontStyle};
                /* NOTE: no token bodyMBody in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${loaderTokens.progressBarCircularContentLetterSpacing}: ${bodyM.letterSpacing};
                ${loaderTokens.progressBarCircularContentLineHeight}: ${bodyM.lineHeight};

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
                ${loaderTokens.progressBarCircularContentFontWeight}: var(--plasma-typo-body-s-font-weight);
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
                ${loaderTokens.progressBarCircularContentFontWeight}: var(--plasma-typo-body-xs-font-weight);
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
                ${loaderTokens.progressBarCircularContentFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentLineHeight}: var(--plasma-typo-body-xxs-line-height);

                ${loaderTokens.spinnerSize}: 1rem;
            `,
        },
    },
};
