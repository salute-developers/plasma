import { css } from 'styled-components';
import { plasma_b2c__dark, plasma_b2c__light } from '@salutejs/plasma-themes';

export const config = {
    variations: {
        view: {
            onDark: css`
                ${plasma_b2c__dark}
            `,
            onLight: css`
                ${plasma_b2c__light}
            `,
        },
    },
};
