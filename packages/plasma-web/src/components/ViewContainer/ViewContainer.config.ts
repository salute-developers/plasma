import { css } from '@salutejs/plasma-new-hope/styled-components';
import { viewContainer } from '@salutejs/plasma-themes/tokens/plasma_web';

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
