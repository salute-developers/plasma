import { css, progressTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${progressTokens.trackBackgroundColor}: var(--surface-solid-primary);
                ${progressTokens.progressFilledBackgroundColor}: var(--surface-solid-default);
                ${progressTokens.valueColor}: var(--text-tertiary);
            `,
            accent: css`
                ${progressTokens.trackBackgroundColor}: var(--surface-solid-primary);
                ${progressTokens.progressFilledBackgroundColor}: var(--surface-accent);
                ${progressTokens.valueColor}: var(--text-tertiary);
            `,
            positive: css`
                ${progressTokens.trackBackgroundColor}: var(--surface-solid-primary);
                ${progressTokens.progressFilledBackgroundColor}: var(--surface-positive);
                ${progressTokens.valueColor}: var(--text-tertiary);
            `,

            negative: css`
                ${progressTokens.trackBackgroundColor}: var(--surface-solid-primary);
                ${progressTokens.progressFilledBackgroundColor}: var(--surface-negative);
                ${progressTokens.valueColor}: var(--text-tertiary);
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
