import { css } from 'styled-components';
import { _beta_popoverTokens as tokens } from 'src/components/_beta/Popover';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.backgroundColor}: var(--surface-solid-card);
                ${tokens.boxShadow}: var(--shadow-down-soft-m);
            `,
            accent: css`
                ${tokens.backgroundColor}: var(--surface-accent);
                ${tokens.boxShadow}: var(--shadow-down-soft-m);
            `,
        },
        size: {
            l: css`
                ${tokens.borderRadius}: 1rem;
                ${tokens.padding}: 0.75rem;
                ${tokens.tailWidth}: 20px;
                ${tokens.tailHeight}: 8px;
                ${tokens.tailSideCurvature}: -10%;
            `,
            m: css`
                ${tokens.borderRadius}: 0.875rem;
                ${tokens.padding}: 0.625rem;
                ${tokens.tailWidth}: 20px;
                ${tokens.tailHeight}: 8px;
                ${tokens.tailSideCurvature}: -10%;
            `,
            s: css`
                ${tokens.borderRadius}: 0.75rem;
                ${tokens.padding}: 0.5rem;
                ${tokens.tailWidth}: 20px;
                ${tokens.tailHeight}: 8px;
                ${tokens.tailSideCurvature}: -10%;
            `,
        },
    },
};
