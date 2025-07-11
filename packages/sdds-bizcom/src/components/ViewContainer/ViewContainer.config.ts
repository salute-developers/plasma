import { css } from '@salutejs/plasma-new-hope/styled-components';
import { viewContainer } from '@salutejs/sdds-themes/tokens/sdds_bizcom';

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
