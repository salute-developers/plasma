import { css, progressBarCircularTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyL,
    bodyM,
    bodyS,
    h2,
    h2Bold,
    surfaceAccent,
    surfaceInfo,
    surfaceNegative,
    surfacePositive,
    surfaceSolidDefault,
    surfaceTransparentSecondary,
    surfaceTransparentTertiary,
    surfaceWarning,
    textPrimary,
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
                ${progressBarCircularTokens.contentFontFamily}: var(--plasma-typo-h5-font-family);
                ${progressBarCircularTokens.contentFontSize}: var(--plasma-typo-h5-font-size);
                ${progressBarCircularTokens.contentFontStyle}: var(--plasma-typo-h5-font-style);
                ${progressBarCircularTokens.contentFontWeight}: var(--plasma-typo-h5-bold-font-weight);
                ${progressBarCircularTokens.contentLetterSpacing}: var(--plasma-typo-h5-letter-spacing);
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
                ${progressBarCircularTokens.contentFontFamily}: ${bodyM.fontFamily};
                ${progressBarCircularTokens.contentFontSize}: ${bodyM.fontSize};
                ${progressBarCircularTokens.contentFontStyle}: ${bodyM.fontStyle};
                ${progressBarCircularTokens.contentFontWeight}: var(--plasma-typo-body-m-body-font-weight);
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
                ${progressBarCircularTokens.contentFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${progressBarCircularTokens.contentFontSize}: var(--plasma-typo-body-xs-font-size);
                ${progressBarCircularTokens.contentFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${progressBarCircularTokens.contentFontWeight}: var(--plasma-typo-body-xs-body-font-weight);
                ${progressBarCircularTokens.contentLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${progressBarCircularTokens.contentLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            xxs: css`
                ${progressBarCircularTokens.size}: 16;
                ${progressBarCircularTokens.height}: 1rem;
                ${progressBarCircularTokens.width}: 1rem;
                ${progressBarCircularTokens.strokeWidth}: 0.125rem;
                ${progressBarCircularTokens.strokeSize}: 2;
                ${progressBarCircularTokens.contentFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${progressBarCircularTokens.contentFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${progressBarCircularTokens.contentFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${progressBarCircularTokens.contentFontWeight}: var(--plasma-typo-body-xxs-body-font-weight);
                ${progressBarCircularTokens.contentLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${progressBarCircularTokens.contentLineHeight}: var(--plasma-typo-body-xxs-line-height);
            `,
        },
    },
};
