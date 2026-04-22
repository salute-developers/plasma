import { css, indicatorTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    onDarkSurfaceSolidDefault,
    onLightSurfaceSolidDefault,
    surfaceNegative,
    surfacePositive,
    surfaceSolidDefault,
    surfaceSolidTertiary,
    surfaceWarning,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: surfaceAccent
 */
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
                ${tokens.color}: var(--surface-accent);
            `,
            inactive: css`
                ${tokens.color}: ${surfaceSolidTertiary};
            `,
            positive: css`
                ${tokens.color}: ${surfacePositive};
            `,
            warning: css`
                ${tokens.color}: ${surfaceWarning};
            `,
            negative: css`
                ${tokens.color}: ${surfaceNegative};
            `,
            black: css`
                ${tokens.color}: ${onLightSurfaceSolidDefault};
            `,
            white: css`
                ${tokens.color}: ${onDarkSurfaceSolidDefault};
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
