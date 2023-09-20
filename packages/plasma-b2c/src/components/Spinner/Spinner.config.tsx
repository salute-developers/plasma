import { css } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'accent',
    },
    variations: {
        view: {
            accent: css`
                --plasma-spinner-color: var(--plasma-colors-accent);
            `,
        },
    },
};
