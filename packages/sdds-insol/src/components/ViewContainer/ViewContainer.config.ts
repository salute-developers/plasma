import { css } from '@salutejs/plasma-new-hope/styled-components';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { viewContainer } from '@salutejs/sdds-themes/es/tokens/sdds_insol_next';

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
