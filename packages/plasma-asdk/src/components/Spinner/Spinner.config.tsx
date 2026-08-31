import { css, spinnerTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'accent',
    },
    variations: {
        view: {
            accent: css`
                ${tokens.color}: var(--text-accent-main);
            `,
        },
    },
};
