import {
    bodyL,
    bodyM,
    bodyS,
    bodyXS,
    bodyXXS,
    h2,
    h2Bold,
    h5,
    h5Bold,
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
} from '@salutejs/plasma-themes/tokens/plasma_giga';
import { css, loaderTokens } from '@salutejs/plasma-new-hope/styled-components';

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
                ${loaderTokens.progressBarCircularContentFontFamily}: ${h5.fontFamily};
                ${loaderTokens.progressBarCircularContentFontSize}: ${h5.fontSize};
                ${loaderTokens.progressBarCircularContentFontStyle}: ${h5.fontStyle};
                ${loaderTokens.progressBarCircularContentFontWeight}: ${h5Bold.fontWeight};
                ${loaderTokens.progressBarCircularContentLetterSpacing}: ${h5.letterSpacing};
                ${loaderTokens.progressBarCircularContentLineHeight}: ${h5.lineHeight};

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
                ${loaderTokens.progressBarCircularContentFontWeight}: ${bodyL.fontWeight};
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
                ${loaderTokens.progressBarCircularContentFontWeight}: ${bodyM.fontWeight};
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
                ${loaderTokens.progressBarCircularContentFontWeight}: ${bodyS.fontWeight};
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
                ${loaderTokens.progressBarCircularContentFontFamily}: ${bodyXS.fontFamily};
                ${loaderTokens.progressBarCircularContentFontSize}: ${bodyXS.fontSize};
                ${loaderTokens.progressBarCircularContentFontStyle}: ${bodyXS.fontStyle};
                ${loaderTokens.progressBarCircularContentFontWeight}: ${bodyXS.fontWeight};
                ${loaderTokens.progressBarCircularContentLetterSpacing}: ${bodyXS.letterSpacing};
                ${loaderTokens.progressBarCircularContentLineHeight}: ${bodyXS.lineHeight};

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
                ${loaderTokens.progressBarCircularContentFontFamily}: ${bodyXXS.fontFamily};
                ${loaderTokens.progressBarCircularContentFontSize}: ${bodyXXS.fontSize};
                ${loaderTokens.progressBarCircularContentFontStyle}: ${bodyXXS.fontStyle};
                ${loaderTokens.progressBarCircularContentFontWeight}: ${bodyXXS.fontWeight};
                ${loaderTokens.progressBarCircularContentLetterSpacing}: ${bodyXXS.letterSpacing};
                ${loaderTokens.progressBarCircularContentLineHeight}: ${bodyXXS.lineHeight};

                ${loaderTokens.spinnerSize}: 1rem;
            `,
        },
    },
};
