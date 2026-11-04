import { css, groupTokens as tokens } from '@salutejs/plasma-new-hope/emotion';

export const config = {
    defaults: {
        gap: 'dense',
        orientation: 'horizontal',
        shape: 'default',
        stretching: 'auto',
    },
    variations: {
        orientation: {
            horizontal: css`
                ${tokens.orientation}: row;
            `,
            vertical: css`
                ${tokens.orientation}: column;
            `,
        },
        gap: {
            none: css`
                ${tokens.gap}: 0;
            `,
            dense: css`
                ${tokens.gap}: 0.125rem;
            `,
            wide: css`
                ${tokens.gap}: 0.5rem;
            `,
        },
        shape: {
            default: css``,
            segmented: css`
                ${tokens.segmentedRadius}: 0.25rem;
            `,
        },
        stretching: {
            auto: css``,
            filled: css``,
        },
    },
};
