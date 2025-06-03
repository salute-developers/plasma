import { css } from '@linaria/core';
import { viewContainer } from '@salutejs/plasma-themes/tokens/plasma_b2c';

export const config = {
    variations: {
        view: {
            onDark: css`
                ${viewContainer.dark}
            `,
            onLight: css`
                ${viewContainer.light}
            `,
        },
    },
};
