import { css } from '@salutejs/plasma-new-hope/styled-components';
import { viewContainer } from '@sddsjs/sdds_finai';

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
