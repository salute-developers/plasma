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
    surfaceAccent,
    surfaceInfo,
    surfaceNegative,
    surfacePositive,
    surfaceSolidDefault,
    surfaceTransparentSecondary,
    surfaceTransparentTertiary,
    surfaceWarning,
    textPrimary,
} from '@salutejs/sdds-themes/tokens/sdds_finai';
import { css, progressBarCircularTokens } from '@salutejs/plasma-new-hope/styled-components';

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
                ${progressBarCircularTokens.progressStroke}: ${surfaceAccent};
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
                ${progressBarCircularTokens.contentFontFamily}: ${h2.fontFamily};
                ${progressBarCircularTokens.contentFontSize}: ${h2.fontSize};
                ${progressBarCircularTokens.contentFontStyle}: ${h2.fontStyle};
                ${progressBarCircularTokens.contentFontWeight}: ${h2Bold.fontWeight};
                ${progressBarCircularTokens.contentLetterSpacing}: ${h2.letterSpacing};
                ${progressBarCircularTokens.contentLineHeight}: ${h2.lineHeight};
            `,
            xl: css`
                ${progressBarCircularTokens.size}: 88;
                ${progressBarCircularTokens.height}: 5.5rem;
                ${progressBarCircularTokens.width}: 5.5rem;
                ${progressBarCircularTokens.strokeWidth}: 0.25rem;
                ${progressBarCircularTokens.strokeSize}: 4;
                ${progressBarCircularTokens.contentFontFamily}: ${h5.fontFamily};
                ${progressBarCircularTokens.contentFontSize}: ${h5.fontSize};
                ${progressBarCircularTokens.contentFontStyle}: ${h5.fontStyle};
                ${progressBarCircularTokens.contentFontWeight}: ${h5Bold.fontWeight};
                ${progressBarCircularTokens.contentLetterSpacing}: ${h5.letterSpacing};
                ${progressBarCircularTokens.contentLineHeight}: ${h5.lineHeight};
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
                ${progressBarCircularTokens.contentFontWeight}: ${bodyL.fontWeight};
                ${progressBarCircularTokens.contentLetterSpacing}: ${bodyL.letterSpacing};
                ${progressBarCircularTokens.contentLineHeight}: ${bodyL.lineHeight};
            `,
            m: css`
                ${progressBarCircularTokens.size}: 48;
                ${progressBarCircularTokens.height}: 3rem;
                ${progressBarCircularTokens.width}: 3rem;
                ${progressBarCircularTokens.strokeWidth}: 0.125rem;
                ${progressBarCircularTokens.strokeSize}: 2;
                ${progressBarCircularTokens.contentFontFamily}: ${bodyM.fontFamily};
                ${progressBarCircularTokens.contentFontSize}: ${bodyM.fontSize};
                ${progressBarCircularTokens.contentFontStyle}: ${bodyM.fontStyle};
                ${progressBarCircularTokens.contentFontWeight}: ${bodyM.fontWeight};
                ${progressBarCircularTokens.contentLetterSpacing}: ${bodyM.letterSpacing};
                ${progressBarCircularTokens.contentLineHeight}: ${bodyM.lineHeight};
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
                ${progressBarCircularTokens.contentFontWeight}: ${bodyS.fontWeight};
                ${progressBarCircularTokens.contentLetterSpacing}: ${bodyS.letterSpacing};
                ${progressBarCircularTokens.contentLineHeight}: ${bodyS.lineHeight};
            `,
            xs: css`
                ${progressBarCircularTokens.size}: 24;
                ${progressBarCircularTokens.height}: 1.5rem;
                ${progressBarCircularTokens.width}: 1.5rem;
                ${progressBarCircularTokens.strokeWidth}: 0.125rem;
                ${progressBarCircularTokens.strokeSize}: 2;
                ${progressBarCircularTokens.contentFontFamily}: ${bodyXS.fontFamily};
                ${progressBarCircularTokens.contentFontSize}: ${bodyXS.fontSize};
                ${progressBarCircularTokens.contentFontStyle}: ${bodyXS.fontStyle};
                ${progressBarCircularTokens.contentFontWeight}: ${bodyXS.fontWeight};
                ${progressBarCircularTokens.contentLetterSpacing}: ${bodyXS.letterSpacing};
                ${progressBarCircularTokens.contentLineHeight}: ${bodyXS.lineHeight};
            `,
            xxs: css`
                ${progressBarCircularTokens.size}: 16;
                ${progressBarCircularTokens.height}: 1rem;
                ${progressBarCircularTokens.width}: 1rem;
                ${progressBarCircularTokens.strokeWidth}: 0.125rem;
                ${progressBarCircularTokens.strokeSize}: 2;
                ${progressBarCircularTokens.contentFontFamily}: ${bodyXXS.fontFamily};
                ${progressBarCircularTokens.contentFontSize}: ${bodyXXS.fontSize};
                ${progressBarCircularTokens.contentFontStyle}: ${bodyXXS.fontStyle};
                ${progressBarCircularTokens.contentFontWeight}: ${bodyXXS.fontWeight};
                ${progressBarCircularTokens.contentLetterSpacing}: ${bodyXXS.letterSpacing};
                ${progressBarCircularTokens.contentLineHeight}: ${bodyXXS.lineHeight};
            `,
        },
    },
};
