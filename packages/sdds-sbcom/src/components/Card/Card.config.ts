import { css, cardTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import { surfaceSolidCard } from '@salutejs-ds/sdds_sbcom/theme/tokens';
/*
 * NOTE: Raw var(--…) follows the SBCOM theme CSS. Prefer @salutejs-ds/sdds_sbcom/theme/tokens when the same
 * name exists there; keep raw values only for DS gaps (e.g. surfaceAccent).
 */

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.solidBackground}: ${surfaceSolidCard};
            `,
        },
        size: {
            l: css`
                ${tokens.outlineWidth}: 0.75rem;
                ${tokens.borderWidth}: 0.0625rem;
                ${tokens.borderRadius}: 1rem;
                ${tokens.contentBorderRadius}: 0.5rem;
            `,
            m: css`
                ${tokens.outlineWidth}: 0.625rem;
                ${tokens.borderWidth}: 0.0625rem;
                ${tokens.borderRadius}: 0.875rem;
                ${tokens.contentBorderRadius}: 0.375rem;
            `,
            s: css`
                ${tokens.outlineWidth}: 0.5rem;
                ${tokens.borderWidth}: 0.0625rem;
                ${tokens.borderRadius}: 0.75rem;
                ${tokens.contentBorderRadius}: 0.375rem;
            `,
        },
    },
};
