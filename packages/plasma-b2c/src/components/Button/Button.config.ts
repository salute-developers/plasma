// generated by theme-builder { version } { plasma-hope-version??? }

// TODO:
// import { css } from 'plasma-new-hope';
import { css } from 'styled-components';
// import { css } from '@linaria/core';

export const config = {
    defaults: {
        focused: 'true',
        size: 'm',
        view: 'secondary',
    },
    variations: {
        pin: {
            'square-square': css``,
            'clear-clear': css`
                border-radius: 0;
            `,
            'square-clear': css`
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            `,
            'clear-square': css`
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            `,
            'clear-circle': css`
                border-radius: calc(var(--plasma-button-height) / 2);
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            `,
            'circle-clear': css`
                border-radius: calc(var(--plasma-button-height) / 2);
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            `,
            'circle-circle': css`
                border-radius: calc(var(--plasma-button-height) / 2);
            `,
        },
        view: {
            primary: css`
                --plasma-button-color: var(--plasma-colors-white);
                --plasma-button-bg-color: var(--plasma-colors-button-accent);
                --plasma-button-bg-color-hover: var(--plasma-colors-button-primary-hover);
                --plasma-button-bg-color-active: var(--plasma-colors-button-primary-active);
            `,
            secondary: css`
                --plasma-button-color: var(--plasma-colors-text);
                --plasma-button-bg-color: var(--plasma-colors-button-secondary);
                --plasma-button-bg-color-hover: var(--plasma-colors-button-secondary-hover);
                --plasma-button-bg-color-active: var(--plasma-colors-button-secondary-active);
            `,
            clear: css`
                --plasma-button-color: var(--plasma-colors-text);
                --plasma-button-bg-color: var(--plasma-colors-transparent);
            `,
            success: css`
                --plasma-button-color: var(--plasma-colors-white);
                --plasma-button-bg-color: var(--plasma-colors-button-success);
                --plasma-button-bg-color-hover: var(--plasma-colors-button-success-hover);
                --plasma-button-bg-color-active: var(--plasma-colors-button-success-active);
            `,
            warning: css`
                --plasma-button-color: var(--plasma-colors-white);
                --plasma-button-bg-color: var(--plasma-colors-button-warning);
                --plasma-button-bg-color-hover: var(--plasma-colors-button-warning-hover);
                --plasma-button-bg-color-active: var(--plasma-colors-button-warning-active);
            `,
            critical: css`
                --plasma-button-color: var(--plasma-colors-white);
                --plasma-button-bg-color: var(--plasma-colors-button-critical);
                --plasma-button-bg-color-hover: var(--plasma-colors-button-critical-hover);
                --plasma-button-bg-color-active: var(--plasma-colors-button-critical-active);
            `,
            checked: css`
                --plasma-button-color: var(--plasma-colors-background);
                --plasma-button-bg-color: var(--plasma-colors-button-checked);
                --plasma-button-color-hover: var(--plasma-colors-button-checked-hover-color);
                --plasma-button-bg-color-hover: var(--plasma-colors-button-checked-hover);
                --plasma-button-color-active: var(--plasma-colors-button-checked-active-color);
                --plasma-button-bg-color-active: var(--plasma-colors-button-checked-active);
            `,
            overlay: css`
                --plasma-button-color: var(--plasma-colors-white);
                --plasma-button-bg-color: var(--plasma-colors-black-secondary);
            `,
        },
        size: {
            l: css`
                --plasma-button-height: 3.5rem;
                --plasma-button-padding: 1.625rem;
                --plasma-button-radius: 1rem;
                --plasma-button-font-family: var(--plasma-typo-body-l-font-family);
                --plasma-button-font-size: var(--plasma-typo-body-l-font-size);
                --plasma-button-font-style: var(--plasma-typo-body-l-font-style);
                --plasma-button-font-weight: var(--plasma-typo-body-l-bold-font-weight);
                --plasma-button-letter-spacing: var(--plasma-typo-body-l-letter-spacing);
                --plasma-button-line-height: var(--plasma-typo-body-l-line-height);
            `,
            m: css`
                --plasma-button-height: 3rem;
                --plasma-button-padding: 1.375rem;
                --plasma-button-radius: 0.75rem;
                --plasma-button-font-family: var(--plasma-typo-body-m-font-family);
                --plasma-button-font-size: var(--plasma-typo-body-m-font-size);
                --plasma-button-font-style: var(--plasma-typo-body-m-font-style);
                --plasma-button-font-weight: var(--plasma-typo-body-m-bold-font-weight);
                --plasma-button-letter-spacing: var(--plasma-typo-body-m-letter-spacing);
                --plasma-button-line-height: var(--plasma-typo-body-m-line-height);
            `,
            s: css`
                --plasma-button-height: 2.5rem;
                --plasma-button-padding: 1.125rem;
                --plasma-button-radius: 0.75rem;
                --plasma-button-font-family: var(--plasma-typo-body-s-font-family);
                --plasma-button-font-size: var(--plasma-typo-body-s-font-size);
                --plasma-button-font-style: var(--plasma-typo-body-s-font-style);
                --plasma-button-font-weight: var(--plasma-typo-body-s-bold-font-weight);
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
                --plasma-button-focus-color: var(--plasma-colors-button-focused);
            `,
        },
        square: {},
        // TODO: PLASMA-2165
        shiftLeft: {
            true: css`
                margin-left: calc(-1 * var(--btn-padding));
            `,
        },
        shiftRight: {
            true: css`
                margin-right: calc(-1 * var(--btn-padding));
            `,
        },
        // TODO: PLASMA-2163
        contentLeft: {
            true: css`
                padding-left: var(--btn-padding);
                padding-right: var(--btn-padding);
            `,
        },
        contentRight: {
            true: css`
                padding-left: var(--btn-padding);
                padding-right: var(--btn-padding);
            `,
        },
    },
};
