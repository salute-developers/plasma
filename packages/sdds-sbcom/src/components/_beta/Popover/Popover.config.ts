import { css, _beta_popoverTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import { surfaceSolidTertiary } from '@salutejs-ds/sdds_sbcom/theme/tokens';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.backgroundColor}: ${surfaceSolidTertiary};
                ${tokens.boxShadow}: none;
                ${tokens.dropShadow}: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.16))
                    drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.08));
            `,
        },
        size: {
            m: css`
                ${tokens.borderRadius}: 1rem;
                ${tokens.padding}: 0.75rem 0.5rem 0.5rem 0.5rem;
                ${tokens.tailWidth}: 20px;
                ${tokens.tailHeight}: 8px;
                ${tokens.tailSideCurvature}: 0%;
            `,
        },
    },
};
