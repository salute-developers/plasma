import { css, _beta_embeddedButtonTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.color}: var(--text-primary);
                ${tokens.colorHover}: var(--text-primary-hover);
                ${tokens.colorActive}: var(--text-primary-active);
                ${tokens.backgroundColor}: transparent;
                ${tokens.spinnerColor}: var(--text-primary);
                ${tokens.focusColor}: var(--surface-accent);
                ${tokens.loadingIconOpacity}: 0.06;
            `,
            secondary: css`
                ${tokens.color}: var(--text-secondary);
                ${tokens.colorHover}: var(--text-secondary-hover);
                ${tokens.colorActive}: var(--text-secondary-active);
                ${tokens.backgroundColor}: transparent;
                ${tokens.spinnerColor}: var(--text-secondary);
                ${tokens.focusColor}: var(--surface-accent);
                ${tokens.loadingIconOpacity}: 0.06;
            `,
            accent: css`
                ${tokens.color}: var(--text-accent);
                ${tokens.colorHover}: var(--text-accent-hover);
                ${tokens.colorActive}: var(--text-accent-active);
                ${tokens.backgroundColor}: transparent;
                ${tokens.spinnerColor}: var(--text-accent);
                ${tokens.focusColor}: var(--surface-accent);
                ${tokens.loadingIconOpacity}: 0.06;
            `,
            positive: css`
                ${tokens.color}: var(--text-positive);
                ${tokens.colorHover}: var(--text-positive-hover);
                ${tokens.colorActive}: var(--text-positive-active);
                ${tokens.backgroundColor}: transparent;
                ${tokens.spinnerColor}: var(--text-positive);
                ${tokens.focusColor}: var(--surface-accent);
                ${tokens.loadingIconOpacity}: 0.06;
            `,
            warning: css`
                ${tokens.color}: var(--text-warning);
                ${tokens.colorHover}: var(--text-warning-hover);
                ${tokens.colorActive}: var(--text-warning-active);
                ${tokens.backgroundColor}: transparent;
                ${tokens.spinnerColor}: var(--text-warning);
                ${tokens.focusColor}: var(--surface-accent);
                ${tokens.loadingIconOpacity}: 0.06;
            `,
            negative: css`
                ${tokens.color}: var(--text-negative);
                ${tokens.colorHover}: var(--text-negative-hover);
                ${tokens.colorActive}: var(--text-negative-active);
                ${tokens.backgroundColor}: transparent;
                ${tokens.spinnerColor}: var(--text-negative);
                ${tokens.focusColor}: var(--surface-accent);
                ${tokens.loadingIconOpacity}: 0.06;
            `,
            info: css`
                ${tokens.color}: var(--text-info);
                ${tokens.colorHover}: var(--text-info-hover);
                ${tokens.colorActive}: var(--text-info-active);
                ${tokens.backgroundColor}: transparent;
                ${tokens.spinnerColor}: var(--text-info);
                ${tokens.focusColor}: var(--surface-accent);
                ${tokens.loadingIconOpacity}: 0.06;
            `,
        },
        size: {
            l: css`
                ${tokens.borderRadius}: 0.75rem;
                ${tokens.spinnerSize}: 2.25rem;
            `,
            m: css`
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.spinnerSize}: 1.5rem;
            `,
            s: css`
                ${tokens.borderRadius}: 0.5rem;
                ${tokens.spinnerSize}: 1rem;
            `,
            xs: css`
                ${tokens.borderRadius}: 0.375rem;
                ${tokens.spinnerSize}: 0.75rem;
            `,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
