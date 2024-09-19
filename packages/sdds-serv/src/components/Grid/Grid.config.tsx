import { css, gridTokens, getBaseGridView } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${getBaseGridView(
                    {
                        [gridTokens.smallMMinWidth]: 0,
                        [gridTokens.mediumSMinWidth]: '35rem',
                        [gridTokens.mediumMMinWidth]: '49.125rem',
                        [gridTokens.largeSMinWidth]: '60rem',
                        [gridTokens.largeMMinWidth]: '75rem',
                    },
                    'default',
                )};

                ${gridTokens.smallMColsCount}: 6;
                ${gridTokens.smallMGap}: 0.5rem;
                ${gridTokens.smallMMargin}: 1rem;
                ${gridTokens.smallMMinWidth}: 0;

                ${gridTokens.mediumSColsCount}: 12;
                ${gridTokens.mediumSGap}: 0.5rem;
                ${gridTokens.mediumSMargin}: 1.25rem;
                ${gridTokens.mediumSMinWidth}: 35rem;

                ${gridTokens.mediumMColsCount}: 18;
                ${gridTokens.mediumMGap}: 0.5rem;
                ${gridTokens.mediumMMargin}: 1.75rem;
                ${gridTokens.mediumMMinWidth}: 49.125rem;

                ${gridTokens.largeSColsCount}: 24;
                ${gridTokens.largeSGap}: 0.5rem;
                ${gridTokens.largeSMargin}: 2.5rem;
                ${gridTokens.largeSMinWidth}: 60rem;

                ${gridTokens.largeMColsCount}: 30;
                ${gridTokens.largeMGap}: 0.5rem;
                ${gridTokens.largeMMargin}: 4rem;
                ${gridTokens.largeMMinWidth}: 75rem;
            `,
        },
    },
};
