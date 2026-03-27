import { shadowDownHardM, surfaceAccent, surfaceSolidCard } from '@salutejs/sdds-themes/tokens/sdds_finai';
import { css, _beta_popoverTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.backgroundColor}: ${surfaceSolidCard};
                ${tokens.boxShadow}: ${shadowDownHardM};
            `,
            info: css`
                ${tokens.backgroundColor}: ${surfaceAccent};
                ${tokens.boxShadow}: ${shadowDownHardM};
            `,
        },
        size: {
            m: css`
                ${tokens.borderRadius}: 1rem;
                ${tokens.padding}: 0.75rem 0.5rem 0.5rem 0.5rem;
            `,
            s: css`
                ${tokens.borderRadius}: 0.75rem;
                ${tokens.padding}: 0.5rem 0.375rem 0.375rem 0.375rem;
            `,
        },
    },
};
