import { css, colorSwatchTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${tokens.alphaOverlayColor}: var(--surface-solid-primary);
                ${tokens.alphaOverlayBackground}: var(--surface-transparent-tertiary);

                ${tokens.colorSwatchSize}: 1.75rem;
                ${tokens.colorSwatchRadius}: 62.5rem;
            `,
        },
    },
};
