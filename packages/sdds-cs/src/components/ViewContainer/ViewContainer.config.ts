import { css } from '@salutejs/plasma-new-hope/emotion';
import { viewContainer } from '@salutejs/sdds-themes/tokens/sdds_cs';

export const config = {
    variations: {
        view: {
            onLight: css`
                ${viewContainer.light}
            `,
            onDark: css`
                ${viewContainer.dark}
            `,
        },
    },
};
