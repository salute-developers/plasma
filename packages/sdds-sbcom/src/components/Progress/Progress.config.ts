import { css, progressTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    /*
     * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
     * Missing tokens in @salutejs/sdds-themes/tokens: surfaceAccent
     */
    surfaceAccentGradient,
    surfaceInfo,
    surfaceNegative,
    surfacePositive,
    surfaceSolidDefault,
    surfaceSolidTertiary,
    surfaceTransparentSecondary,
    surfaceWarning,
    textTertiary,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${progressTokens.trackBackgroundColor}: ${surfaceTransparentSecondary};
                ${progressTokens.progressFilledBackgroundColor}: ${surfaceSolidDefault};
                ${progressTokens.valueColor}: ${textTertiary};
            `,
            secondary: css`
                ${progressTokens.trackBackgroundColor}: ${surfaceTransparentSecondary};
                ${progressTokens.progressFilledBackgroundColor}: ${surfaceSolidTertiary};
                ${progressTokens.valueColor}: ${textTertiary};
            `,
            primary: css`
                ${progressTokens.trackBackgroundColor}: ${surfaceTransparentSecondary};
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${progressTokens.progressFilledBackgroundColor}: var(--surface-accent);
                ${progressTokens.valueColor}: ${textTertiary};
            `,
            accent: css`
                ${progressTokens.trackBackgroundColor}: ${surfaceTransparentSecondary};
                ${progressTokens.progressFilledBackgroundColor}: ${surfaceAccentGradient};
                ${progressTokens.valueColor}: ${textTertiary};
            `,
            info: css`
                ${progressTokens.trackBackgroundColor}: ${surfaceTransparentSecondary};
                ${progressTokens.progressFilledBackgroundColor}: ${surfaceInfo};
                ${progressTokens.valueColor}: ${textTertiary};
            `,
            success: css`
                ${progressTokens.trackBackgroundColor}: ${surfaceTransparentSecondary};
                ${progressTokens.progressFilledBackgroundColor}: ${surfacePositive};
                ${progressTokens.valueColor}: ${textTertiary};
            `,
            warning: css`
                ${progressTokens.trackBackgroundColor}: ${surfaceTransparentSecondary};
                ${progressTokens.progressFilledBackgroundColor}: ${surfaceWarning};
                ${progressTokens.valueColor}: ${textTertiary};
            `,
            error: css`
                ${progressTokens.trackBackgroundColor}: ${surfaceTransparentSecondary};
                ${progressTokens.progressFilledBackgroundColor}: ${surfaceNegative};
                ${progressTokens.valueColor}: ${textTertiary};
            `,
        },
        size: {
            m: css`
                ${progressTokens.trackHeight}: 0.25rem;
                ${progressTokens.trackBorderRadius}: 0.125rem;

                ${progressTokens.progressFilledHeight}: 0.375rem;
                ${progressTokens.progressFilledBorderRadius}: 0.375rem;

                ${progressTokens.valueMarginLeft}: 0.5rem;
            `,
        },
    },
};
