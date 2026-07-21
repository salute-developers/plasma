import { css, _beta_popoverTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import { shadowDownHardM, surfaceSolidTertiary } from '@salutejs-ds/sdds_sbcom/theme/tokens';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.backgroundColor}: ${surfaceSolidTertiary};
                ${tokens.boxShadow}: ${shadowDownHardM};
            `,
        },
        size: {
            m: css`
                ${tokens.borderRadius}: 1rem;
                ${tokens.padding}: 0.75rem 0.5rem 0.5rem 0.5rem;
            `,
        },
    },
};
