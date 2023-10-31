import { css } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'primary',
        focused: 'true',
    },
    variations: {
        // TODO сгенерировать корректные токены
        view: {
            primary: css`
                --plasma-link-color: var(--text-primary);
                --plasma-link-color-hover: var(--text-primary);
                --plasma-link-color-active: var(--text-primary);
                --plasma-link-color-visited: var(--text-primary);
                --plasma-link-color-visited-hover: var(--text-primary);
                --plasma-link-color-visited-active: var(--text-primary);
                --plasma-link-underline-border: 0.063rem;
            `,
        },
        disabled: {
            true: css`
                --plasma-link-disabled-opacity: 0.4;
            `,
        },
        focused: {
            true: css`
                --plasma-link-focus-color: var(--text-primary);
            `,
        },
    },
};
