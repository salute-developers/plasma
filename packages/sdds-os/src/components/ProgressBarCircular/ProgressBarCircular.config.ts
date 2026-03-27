import {
    bodyM,
    surfaceAccent,
    surfaceInfo,
    surfaceNegative,
    surfacePositive,
    surfaceSolidDefault,
    surfaceTransparentSecondary,
    surfaceTransparentTertiary,
    surfaceWarning,
    textPrimary,
} from '@salutejs/sdds-themes/tokens/sdds_os';
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
        },
    },
};
