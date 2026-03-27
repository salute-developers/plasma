import { shadowDownSoftM, surfaceAccent, surfaceSolidCard } from '@salutejs/plasma-themes/tokens/plasma_b2c';
import { css } from '@linaria/core';
import { _beta_popoverTokens as tokens } from 'src/components/_beta/Popover';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.backgroundColor}: ${surfaceSolidCard};
                ${tokens.boxShadow}: ${shadowDownSoftM};
            `,
            accent: css`
                ${tokens.backgroundColor}: ${surfaceAccent};
                ${tokens.boxShadow}: ${shadowDownSoftM};
            `,
        },
        size: {
            l: css`
                ${tokens.borderRadius}: 1rem;
                ${tokens.padding}: 0.75rem;
            `,
            m: css`
                ${tokens.borderRadius}: 0.875rem;
                ${tokens.padding}: 0.625rem;
            `,
            s: css`
                ${tokens.borderRadius}: 0.75rem;
                ${tokens.padding}: 0.5rem;
            `,
        },
    },
};
