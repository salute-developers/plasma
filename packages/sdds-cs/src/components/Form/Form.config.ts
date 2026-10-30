import { css, formTokens as tokens } from '@salutejs/plasma-new-hope/emotion';

const gap = css`
    ${tokens.gap}: 1.5rem;
`;

export const config = {
    defaults: {
        orientation: 'vertical',
    },
    variations: {
        orientation: {
            vertical: gap,
            horizontal: gap,
        },
    },
};
