import { css, stepsTokens as tokens } from '@salutejs/plasma-new-hope/emotion';

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
        },
    },
};
