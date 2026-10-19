import { css, stepsTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${tokens.completedIndicatorColor}: var(--inverse-text-primary);
                ${tokens.completedIndicatorColorHover}: var(--inverse-text-primary);
                ${tokens.completedIndicatorBackground}: var(--surface-solid-default);
                ${tokens.completedIndicatorBackgroundHover}: var(--surface-solid-default-hover);
                ${tokens.completedTitleColor}: var(--text-primary);
                ${tokens.completedTitleColorHover}: var(--text-primary-hover);

                ${tokens.dividerColor}: var(--surface-solid-default);
            `,
            accent: css`
                ${tokens.completedIndicatorColor}: var(--on-dark-text-primary);
                ${tokens.completedIndicatorColorHover}: var(--on-dark-text-primary-hover);
                ${tokens.completedIndicatorBackground}: var(--surface-accent);
                ${tokens.completedIndicatorBackgroundHover}: var(--surface-accent-hover);
                ${tokens.completedTitleColor}: var(--text-primary);
                ${tokens.completedTitleColorHover}: var(--text-primary-hover);

                ${tokens.dividerColor}: var(--surface-accent);
            `,
            negative: css`
                ${tokens.completedIndicatorColor}: var(--on-dark-text-primary);
                ${tokens.completedIndicatorColorHover}: var(--on-dark-text-primary-hover);
                ${tokens.completedIndicatorBackground}: var(--surface-negative);
                ${tokens.completedIndicatorBackgroundHover}: var(--surface-negative-hover);
                ${tokens.completedTitleColor}: var(--text-negative);
                ${tokens.completedTitleColorHover}: var(--text-negative-hover);

                ${tokens.dividerColor}: var(--surface-negative);
            `,
            warning: css`
                ${tokens.completedIndicatorColor}: var(--on-dark-text-primary);
                ${tokens.completedIndicatorColorHover}: var(--on-dark-text-primary-hover);
                ${tokens.completedIndicatorBackground}: var(--surface-warning);
                ${tokens.completedIndicatorBackgroundHover}: var(--surface-warning-hover);
                ${tokens.completedTitleColor}: var(--text-warning);
                ${tokens.completedTitleColorHover}: var(--text-warning-hover);

                ${tokens.dividerColor}: var(--surface-warning);
            `,
            positive: css`
                ${tokens.completedIndicatorColor}: var(--on-dark-text-primary);
                ${tokens.completedIndicatorColorHover}: var(--on-dark-text-primary-hover);
                ${tokens.completedIndicatorBackground}: var(--surface-positive);
                ${tokens.completedIndicatorBackgroundHover}: var(--surface-positive-hover);
                ${tokens.completedTitleColor}: var(--text-positive);
                ${tokens.completedTitleColorHover}: var(--text-positive-hover);

                ${tokens.dividerColor}: var(--surface-positive);
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
