import {
    onDarkSurfaceSolidDefault,
    onLightSurfaceSolidDefault,
    surfaceAccent,
    surfaceNegative,
    surfacePositive,
    surfaceSolidDefault,
    surfaceSolidTertiary,
    surfaceWarning,
} from '@salutejs/plasma-themes/tokens/plasma_b2c';
import { css } from '@linaria/core';

import { indicatorTokens as tokens } from '../../../components/Indicator';

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
