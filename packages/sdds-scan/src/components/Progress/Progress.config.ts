import { css, progressTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${progressTokens.trackBackgroundColor}: var(--surface-transparent-secondary);
                ${progressTokens.progressFilledBackgroundColor}: var(--surface-solid-default);
                ${progressTokens.valueColor}: var(--text-tertiary);
            `,
            secondary: css`
                ${progressTokens.trackBackgroundColor}: var(--surface-transparent-secondary);
                ${progressTokens.progressFilledBackgroundColor}: var(--surface-solid-tertiary);
                ${progressTokens.valueColor}: var(--text-tertiary);
            `,
            primary: css`
                ${progressTokens.trackBackgroundColor}: var(--surface-transparent-secondary);
                ${progressTokens.progressFilledBackgroundColor}: var(--surface-accent);
                ${progressTokens.valueColor}: var(--text-tertiary);
            `,
            accent: css`
                ${progressTokens.trackBackgroundColor}: var(--surface-transparent-secondary);
                ${progressTokens.progressFilledBackgroundColor}: var(--surface-accent-gradient);
                ${progressTokens.valueColor}: var(--text-tertiary);
            `,
            success: css`
                ${progressTokens.trackBackgroundColor}: var(--surface-transparent-secondary);
                ${progressTokens.progressFilledBackgroundColor}: var(--surface-positive);
                ${progressTokens.valueColor}: var(--text-tertiary);
            `,
            warning: css`
                ${progressTokens.trackBackgroundColor}: var(--surface-transparent-secondary);
                ${progressTokens.progressFilledBackgroundColor}: var(--surface-warning);
                ${progressTokens.valueColor}: var(--text-tertiary);
            `,
            error: css`
                ${progressTokens.trackBackgroundColor}: var(--surface-transparent-secondary);
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
