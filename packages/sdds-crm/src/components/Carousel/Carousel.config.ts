import { css, carouselNewTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${tokens.paginationDotBackground}: var(--surface-transparent-tertiary);
                ${tokens.paginationDotActiveBackground}: var(--surface-solid-default);
            `,
        },
        size: {
            s: css``,
        },
    },
};
