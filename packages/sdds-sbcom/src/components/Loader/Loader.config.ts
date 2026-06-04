import { css, loaderTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyL,
    bodyM,
    h2,
    h2Bold,
    onDarkTextPrimary,
    overlaySoft,
    surfaceAccent,
    surfacePositive,
    surfaceSolidDefault,
    surfaceWarning,
    textAccent,
    textNegative,
    textPrimary,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyLBody, bodyMBody, bodySBody, bodyXs, bodyXsBody, bodyXxs
 * bodyXxsBody, h5, h5Bold
 */
export const config = {
    defaults: {
        view: 'white',
        size: 'm',
    },
    variations: {
        view: {
            white: css`
                ${loaderTokens.progressBarCircularBackgroundStroke}: ${onDarkTextPrimary};
                ${loaderTokens.progressBarCircularStroke}: ${surfaceSolidDefault};
                ${loaderTokens.progressBarCircularContentColor}: ${textPrimary};

                ${loaderTokens.spinnerColor}: ${onDarkTextPrimary};

                ${loaderTokens.overlayColor}: ${overlaySoft};
            `,
            accent: css`
                ${loaderTokens.progressBarCircularBackgroundStroke}: ${textAccent};
                ${loaderTokens.progressBarCircularStroke}: ${surfaceAccent};
                ${loaderTokens.progressBarCircularContentColor}: ${textPrimary};

                ${loaderTokens.spinnerColor}: ${textAccent};

                ${loaderTokens.overlayColor}: ${overlaySoft};
            `,
            danger: css`
                ${loaderTokens.progressBarCircularBackgroundStroke}: ${textNegative};
                ${loaderTokens.progressBarCircularStroke}: ${surfacePositive};
                ${loaderTokens.progressBarCircularContentColor}: ${textPrimary};
                ${loaderTokens.spinnerColor}: ${textNegative};
                ${loaderTokens.overlayColor}: ${overlaySoft};
            `,
            primary: css`
                ${loaderTokens.progressBarCircularBackgroundStroke}: ${textPrimary};
                ${loaderTokens.progressBarCircularStroke}: ${surfaceWarning};
                ${loaderTokens.progressBarCircularContentColor}: ${textPrimary};

                ${loaderTokens.spinnerColor}: ${textPrimary};

                ${loaderTokens.overlayColor}: ${overlaySoft};
            `,
        },
        size: {
            '40': css`
                ${loaderTokens.width}: 100%;
                ${loaderTokens.height}: 100%;
                ${loaderTokens.progressBarCircularStrokeWidth}: 0.188rem;
                ${loaderTokens.progressBarCircularStrokeSize}: 4;
                ${loaderTokens.progressBarCircularContentFontFamily}: ${h2.fontFamily};
                ${loaderTokens.progressBarCircularContentFontSize}: ${h2.fontSize};
                ${loaderTokens.progressBarCircularContentFontStyle}: ${h2.fontStyle};
                ${loaderTokens.progressBarCircularContentFontWeight}: ${h2Bold.fontWeight};
                ${loaderTokens.progressBarCircularContentLetterSpacing}: ${h2.letterSpacing};
                ${loaderTokens.progressBarCircularContentLineHeight}: ${h2.lineHeight};
                ${loaderTokens.spinnerSize}: 2.5rem;
                ${loaderTokens.progressBarCircularStroke}: 2.5rem;
            `,

            '32': css`
                ${loaderTokens.width}: 100%;
                ${loaderTokens.height}: 100%;

                ${loaderTokens.progressBarCircularSize}: 88;
                ${loaderTokens.progressBarCircularHeight}: 5.5rem;
                ${loaderTokens.progressBarCircularWidth}: 5.5rem;
                ${loaderTokens.progressBarCircularStrokeWidth}: 0.125rem;
                ${loaderTokens.progressBarCircularStrokeSize}: 4;
                ${loaderTokens.progressBarCircularContentFontFamily}: var(--plasma-typo-h5-font-family);
                ${loaderTokens.progressBarCircularContentFontSize}: var(--plasma-typo-h5-font-size);
                ${loaderTokens.progressBarCircularContentFontStyle}: var(--plasma-typo-h5-font-style);
                ${loaderTokens.progressBarCircularContentFontWeight}: var(--plasma-typo-h5-bold-font-weight);
                ${loaderTokens.progressBarCircularContentLetterSpacing}: var(--plasma-typo-h5-letter-spacing);
                ${loaderTokens.progressBarCircularContentLineHeight}: var(--plasma-typo-h5-line-height);

                ${loaderTokens.spinnerSize}: 2rem;
            `,
            '24': css`
                ${loaderTokens.width}: 100%;
                ${loaderTokens.height}: 100%;

                ${loaderTokens.progressBarCircularSize}: 56;
                ${loaderTokens.progressBarCircularHeight}: 3.5rem;
                ${loaderTokens.progressBarCircularWidth}: 3.5rem;
                ${loaderTokens.progressBarCircularStrokeWidth}: 0.094rem;
                ${loaderTokens.progressBarCircularStrokeSize}: 2;
                ${loaderTokens.progressBarCircularContentFontFamily}: ${bodyL.fontFamily};
                ${loaderTokens.progressBarCircularContentFontSize}: ${bodyL.fontSize};
                ${loaderTokens.progressBarCircularContentFontStyle}: ${bodyL.fontStyle};
                ${loaderTokens.progressBarCircularContentFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${loaderTokens.progressBarCircularContentLetterSpacing}: ${bodyL.letterSpacing};
                ${loaderTokens.progressBarCircularContentLineHeight}: ${bodyL.lineHeight};
                ${loaderTokens.spinnerSize}: 1.5rem;
            `,
            '16': css`
                ${loaderTokens.width}: 100%;
                ${loaderTokens.height}: 100%;

                ${loaderTokens.progressBarCircularSize}: 48;
                ${loaderTokens.progressBarCircularHeight}: 3rem;
                ${loaderTokens.progressBarCircularWidth}: 3rem;
                ${loaderTokens.progressBarCircularStrokeWidth}: 0.063rem;
                ${loaderTokens.progressBarCircularStrokeSize}: 2;
                ${loaderTokens.progressBarCircularContentFontFamily}: ${bodyM.fontFamily};
                ${loaderTokens.progressBarCircularContentFontSize}: ${bodyM.fontSize};
                ${loaderTokens.progressBarCircularContentFontStyle}: ${bodyM.fontStyle};
                /* NOTE: no token bodyMBody in @salutejs/sdds-themes/tokens */
                ${loaderTokens.progressBarCircularContentFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${loaderTokens.progressBarCircularContentLetterSpacing}: ${bodyM.letterSpacing};
                ${loaderTokens.progressBarCircularContentLineHeight}: ${bodyM.lineHeight};
                ${loaderTokens.spinnerSize}: 1rem;
            `,
        },
    },
};
