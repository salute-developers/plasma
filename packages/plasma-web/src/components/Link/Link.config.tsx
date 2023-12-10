import { css } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'accent',
        focused: 'true',
    },
    variations: {
        size: {
            m: css`
                --plasma-link-font-family: var(--plasma-typo-paragraph1-font-family);
                --plasma-link-font-size: var(--plasma-typo-paragraph1-font-size);
                --plasma-link-font-style: var(--plasma-typo-paragraph1-font-style);
                --plasma-link-font-weight: var(--plasma-typo-paragraph1-font-weight);
                --plasma-link-letter-spacing: var(--plasma-typo-paragraph1-letter-spacing);
                --plasma-link-line-height: var(--plasma-typo-paragraph1-line-height);
            `,
        },
        view: {
            primary: css`
                --plasma-link-color: var(--text-primary);
                --plasma-link-color-hover: var(--text-primary-hover);
                --plasma-link-color-active: var(--text-primary-active);
                --plasma-link-color-visited: var(--text-primary);
                --plasma-link-color-visited-hover: var(--text-primary-hover);
                --plasma-link-color-visited-active: var(--text-primary-active);
                --plasma-link-underline-border: 0;
            `,
            secondary: css`
                --plasma-link-color: var(--text-secondary);
                --plasma-link-color-hover: var(--text-secondary-hover);
                --plasma-link-color-active: var(--text-secondary-active);
                --plasma-link-color-visited: var(--text-secondary);
                --plasma-link-color-visited-hover: var(--text-secondary-hover);
                --plasma-link-color-visited-active: var(--text-secondary-active);
                --plasma-link-underline-border: 0;
            `,
            tertiary: css`
                --plasma-link-color: var(--text-tertiary);
                --plasma-link-color-hover: var(--text-tertiary-hover);
                --plasma-link-color-active: var(--text-tertiary-active);
                --plasma-link-color-visited: var(--text-tertiary);
                --plasma-link-color-visited-hover: var(--text-tertiary-hover);
                --plasma-link-color-visited-active: var(--text-tertiary-active);
                --plasma-link-underline-border: 0;
            `,
            paragraph: css`
                --plasma-link-color: var(--text-paragraph);
                --plasma-link-color-hover: var(--text-paragraph-hover);
                --plasma-link-color-active: var(--text-paragraph-active);
                --plasma-link-color-visited: var(--text-paragraph);
                --plasma-link-color-visited-hover: var(--text-paragraph-hover);
                --plasma-link-color-visited-active: var(--text-paragraph-active);
                --plasma-link-underline-border: 0;
            `,
            accent: css`
                --plasma-link-color: var(--text-accent);
                --plasma-link-color-hover: var(--text-accent-hover);
                --plasma-link-color-active: var(--text-accent-active);
                --plasma-link-color-visited: var(--text-accent);
                --plasma-link-color-visited-hover: var(--text-accent-hover);
                --plasma-link-color-visited-active: var(--text-accent-active);
                --plasma-link-underline-border: 0;
            `,
            positive: css`
                --plasma-link-color: var(--text-positive);
                --plasma-link-color-hover: var(--text-positive-hover);
                --plasma-link-color-active: var(--text-positive-active);
                --plasma-link-color-visited: var(--text-positive);
                --plasma-link-color-visited-hover: var(--text-positive-hover);
                --plasma-link-color-visited-active: var(--text-positive-active);
                --plasma-link-underline-border: 0;
            `,
            warning: css`
                --plasma-link-color: var(--text-warning);
                --plasma-link-color-hover: var(--text-warning-hover);
                --plasma-link-color-active: var(--text-warning-active);
                --plasma-link-color-visited: var(--text-warning);
                --plasma-link-color-visited-hover: var(--text-warning-hover);
                --plasma-link-color-visited-active: var(--text-warning-active);
                --plasma-link-underline-border: 0;
            `,
            negative: css`
                --plasma-link-color: var(--text-negative);
                --plasma-link-color-hover: var(--text-negative-hover);
                --plasma-link-color-active: var(--text-negative-active);
                --plasma-link-color-visited: var(--text-negative);
                --plasma-link-color-visited-hover: var(--text-negative-hover);
                --plasma-link-color-visited-active: var(--text-negative-active);
                --plasma-link-underline-border: 0;
            `,
            clear: css`
                --plasma-link-color: inherit;
                --plasma-link-color-hover: inherit;
                --plasma-link-color-active: inherit;
                --plasma-link-color-visited: inherit;
                --plasma-link-color-visited-hover: inherit;
                --plasma-link-color-visited-active: inherit;
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
                --plasma-link-focus-color: var(--text-accent);
            `,
        },
    },
};
