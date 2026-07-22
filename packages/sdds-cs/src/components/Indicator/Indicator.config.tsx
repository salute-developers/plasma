import {
    onLightSurfaceSolidPrimary,
    surfaceAccent,
    surfaceNegative,
    surfacePositive,
    surfaceSolidDefault,
    surfaceWarning,
    textPrimary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, indicatorTokens as tokens } from '@salutejs/plasma-new-hope/emotion';

export const config = {
    defaults: {
        size: 's',
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${tokens.color}: ${surfaceSolidDefault};
            `,
            accent: css`
                ${tokens.color}: ${surfaceAccent};
            `,
            inactive: css`
                ${tokens.color}: ${onLightSurfaceSolidPrimary};
            `,
            positive: css`
                ${tokens.color}: ${surfacePositive};
            `,
            negative: css`
                ${tokens.color}: ${surfaceNegative};
            `,
            warning: css`
                ${tokens.color}: ${surfaceWarning};
            `,
            black: css`
                ${tokens.color}: ${textPrimary};
            `,
        },
        size: {
            l: css`
                ${tokens.size}: 0.75rem;
            `,
            m: css`
                ${tokens.size}: 0.5rem;
            `,
            s: css`
                ${tokens.size}: 0.375rem;
            `,
        },
    },
};
