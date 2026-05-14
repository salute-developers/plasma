import { css } from '@salutejs/plasma-new-hope/styled-components';
import { viewContainer } from '@salutejs-ds/sdds_os';

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
