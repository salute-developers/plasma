import { css, formTokens as tokens } from '@salutejs/plasma-new-hope/emotion';

const gap = css`
    ${tokens.gap}: 1.5rem;
`;

export const config = {
    defaults: {
        size: 'm',
        orientation: 'vertical',
    },
    variations: {
        size: {
            xs: gap,
            s: gap,
            m: gap,
            l: gap,
        },
        orientation: {
            vertical: css`
                flex-direction: column;
            `,
            horizontal: css`
                flex-direction: row;
                align-items: flex-start;
            `,
        },
    },
};
