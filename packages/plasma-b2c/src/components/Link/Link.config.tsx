import { css } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'primary',
        focused: 'true',
    },
    variations: {
        view: {
            primary: css`
                --plasma-link-color: var(--plasma-colors-link);
                --plasma-link-color-hover: var(--plasma-colors-link-hover);
                --plasma-link-color-active: var(--plasma-colors-link-active);
                --plasma-link-color-visited: var(--plasma-colors-link-visited);
                --plasma-link-color-visited-hover: var(--plasma-colors-link-visited-hover);
                --plasma-link-color-visited-active: var(--plasma-colors-link-visited-active);
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
                --plasma-link-focus-color: var(--plasma-colors-link);
            `,
        },
    },
};
