import { css } from '@linaria/core';

export const config = {
    defaults: {
        size: 'm',
        focused: 'true',
        view: 'secondary',
    },
    variations: {
        view: {
            primary: css`
                --plasma-button-color: var(--on-dark-text-primary);
                --plasma-button-bg-color: var(--surface-accent);
                --plasma-button-bg-color-hover: #18a2ff;
                --plasma-button-bg-color-active: #045891;
            `,
            secondary: css`
                --plasma-button-color: var(--text-primary);
                --plasma-button-bg-color: var(--surface-transparent-secondary);
                --plasma-button-bg-color-hover: rgba(11, 126, 203, 0.12);
                --plasma-button-bg-color-active: rgba(11, 126, 203, 0.19);
            `,
            clear: css`
                --plasma-button-color: var(--text-accent);
                --plasma-button-bg-color: var(--surface-clear);
                --plasma-button-bg-color-hover: rgb(11, 126, 203, 0.12);
                --plasma-button-bg-color-active: rgb(11, 126, 203, 0.19);
            `,
            negative: css`
                --plasma-button-color: var(--on-dark-text-primary);
                --plasma-button-bg-color: var(--surface-negative);
                --plasma-button-bg-color-hover: #e65260;
                --plasma-button-bg-color-active: #c60014;
            `,
            white: css`
                --plasma-button-color: var(--text-primary);
                --plasma-button-bg-color: var(--background-primary);
                --plasma-button-bg-color-hover: #ffffff;
                --plasma-button-bg-color-active: #ebeaea;
            `,
        },
        size: {
            m: css`
                --plasma-button-height: 40px;
                --plasma-button-padding: 20px;
                --plasma-button-radius: 4px;
                --plasma-button-font-family: var(--plasma-typo-body-m-font-family);
                --plasma-button-font-size: var(--plasma-typo-body-m-font-size);
                --plasma-button-font-style: var(--plasma-typo-body-m-font-style);
                --plasma-button-font-weight: var(--plasma-typo-body-m-font-weight);
                --plasma-button-letter-spacing: var(--plasma-typo-body-m-letter-spacing);
                --plasma-button-line-height: var(--plasma-typo-body-m-line-height);
            `,
            s: css`
                --plasma-button-height: 28px;
                --plasma-button-padding: 12px;
                --plasma-button-radius: 4px;
                --plasma-button-font-family: var(--plasma-typo-body-m-font-family);
                --plasma-button-font-size: var(--plasma-typo-body-m-font-size);
                --plasma-button-font-style: var(--plasma-typo-body-m-font-style);
                --plasma-button-font-weight: var(--plasma-typo-body-m-font-weight);
                --plasma-button-letter-spacing: var(--plasma-typo-body-m-letter-spacing);
                --plasma-button-line-height: var(--plasma-typo-body-m-line-height);
            `,
            xs: css`
                --plasma-button-height: 20px;
                --plasma-button-padding: 12px;
                --plasma-button-radius: 4px;
                --plasma-button-font-family: var(--plasma-typo-body-s-font-family);
                --plasma-button-font-size: var(--plasma-typo-body-s-font-size);
                --plasma-button-font-style: var(--plasma-typo-body-s-font-style);
                --plasma-button-font-weight: var(--plasma-typo-body-s-font-weight);
                --plasma-button-letter-spacing: var(--plasma-typo-body-s-letter-spacing);
                --plasma-button-line-height: var(--plasma-typo-body-s-line-height);
            `,
        },
        disabled: {
            true: css`
                --plasma-button-disabled-opacity: 0.4;
            `,
        },
        focused: {
            true: css`
                --plasma-button-focus-color: var(--surface-accent);
            `,
        },
        square: {},
        pin: {
            square: css``,
            circle: css`
                border-radius: calc(var(--plasma-button-height) / 2);
            `,
        },
    },
};
