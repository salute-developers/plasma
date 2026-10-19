import {
    inverseTextPrimary,
    surfaceSolidDefault,
    surfaceSolidDefaultHover,
    textPrimary,
    textPrimaryHover,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, stepsTokens as tokens } from '@salutejs/plasma-new-hope/emotion';

export const config = {
    defaults: {
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${tokens.completedIndicatorColor}: ${inverseTextPrimary};
                ${tokens.completedIndicatorColorHover}: ${inverseTextPrimary};
                ${tokens.completedIndicatorBackground}: ${surfaceSolidDefault};
                ${tokens.completedIndicatorBackgroundHover}: ${surfaceSolidDefaultHover};
                ${tokens.completedTitleColor}: ${textPrimary};
                ${tokens.completedTitleColorHover}: ${textPrimaryHover};

                ${tokens.dividerColor}: ${surfaceSolidDefault};
            `,
        },
        size: {
            l: css`
                ${tokens.indicatorSize}: 3.5rem;
                ${tokens.activeIndicatorSize}: 3.5rem;
                ${tokens.bulletSize}: 2.25rem;
                ${tokens.activeBulletSize}: 2.25rem;
            `,
            m: css`
                ${tokens.indicatorSize}: 3rem;
                ${tokens.activeIndicatorSize}: 3rem;
                ${tokens.bulletSize}: 1.5rem;
                ${tokens.activeBulletSize}: 1.5rem;
            `,
            s: css`
                ${tokens.indicatorSize}: 2.25rem;
                ${tokens.activeIndicatorSize}: 2.25rem;
                ${tokens.bulletSize}: 1rem;
                ${tokens.activeBulletSize}: 1rem;
            `,
            xs: css`
                ${tokens.indicatorSize}: 1.5rem;
                ${tokens.activeIndicatorSize}: 1.5rem;
                ${tokens.bulletSize}: 0.5rem;
                ${tokens.activeBulletSize}: 0.5rem;
            `,
        },
    },
};
