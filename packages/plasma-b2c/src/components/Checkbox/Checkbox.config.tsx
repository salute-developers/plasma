import { css } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'accent',
        size: 'm',
        focused: 'true',
    },
    variations: {
        /**
         * Размер контрола.
         */
        size: {
            s: css`
                --plasma-checkbox-trigger-size: 0.875rem;
                --plasma-checkbox-trigger-border-radius: 0.25rem;
                --plasma-checkbox-content-top-offset: 0.063rem;
                --plasma-checkbox-content-left-offset: 0.5rem;
                --plasma-checkbox-label-font-family: var(--plasma-typo-body-s-font-family);
                --plasma-checkbox-label-font-size: var(--plasma-typo-body-s-font-size);
                --plasma-checkbox-label-font-style: var(--plasma-typo-body-s-font-style);
                --plasma-checkbox-label-font-weight: var(--plasma-typo-body-s-font-weight);
                --plasma-checkbox-label-letter-spacing: var(--plasma-typo-body-s-letter-spacing);
                --plasma-checkbox-label-line-height: var(--plasma-typo-body-s-line-height);
                --plasma-checkbox-description-font-family: var(--plasma-typo-body-xs-font-family);
                --plasma-checkbox-description-font-size: var(--plasma-typo-body-xs-font-size);
                --plasma-checkbox-description-font-style: var(--plasma-typo-body-xs-font-style);
                --plasma-checkbox-description-font-weight: var(--plasma-typo-body-xs-font-weight);
                --plasma-checkbox-description-letter-spacing: var(--plasma-typo-body-xs-letter-spacing);
                --plasma-checkbox-description-line-height: var(--plasma-typo-body-xs-line-height);
            `,
            m: css`
                --plasma-checkbox-trigger-size: 1.25rem;
                --plasma-checkbox-trigger-border-radius: 0.375rem;
                --plasma-checkbox-content-top-offset: 0.188rem;
                --plasma-checkbox-content-left-offset: 0.75rem;
                --plasma-checkbox-label-font-family: var(--plasma-typo-body-m-font-family);
                --plasma-checkbox-label-font-size: var(--plasma-typo-body-m-font-size);
                --plasma-checkbox-label-font-style: var(--plasma-typo-body-m-font-style);
                --plasma-checkbox-label-font-weight: var(--plasma-typo-body-m-font-weight);
                --plasma-checkbox-label-letter-spacing: var(--plasma-typo-body-m-letter-spacing);
                --plasma-checkbox-label-line-height: var(--plasma-typo-body-m-line-height);
                --plasma-checkbox-description-font-family: var(--plasma-typo-body-s-font-family);
                --plasma-checkbox-description-font-size: var(--plasma-typo-body-s-font-size);
                --plasma-checkbox-description-font-style: var(--plasma-typo-body-s-font-style);
                --plasma-checkbox-description-font-weight: var(--plasma-typo-body-s-font-weight);
                --plasma-checkbox-description-letter-spacing: var(--plasma-typo-body-s-letter-spacing);
                --plasma-checkbox-description-line-height: var(--plasma-typo-body-s-line-height);
            `,
        },
        /**
         * Вид контрола.
         */
        view: {
            primary: css`
                --plasma-checkbox-fill-color: var(--text-primary);
                --plasma-checkbox-icon-color: var(--inverse-text-primary);
                --plasma-checkbox-description-color: var(--text-secondary);
                --plasma-checkbox-trigger-border-color: var(--text-secondary);
            `,
            secondary: css`
                --plasma-checkbox-fill-color: var(--text-secondary);
                --plasma-checkbox-icon-color: var(--inverse-text-primary);
                --plasma-checkbox-description-color: var(--text-secondary);
                --plasma-checkbox-trigger-border-color: var(--text-secondary);
            `,
            tertiary: css`
                --plasma-checkbox-fill-color: var(--text-tertiary);
                --plasma-checkbox-icon-color: var(--inverse-text-primary);
                --plasma-checkbox-description-color: var(--text-secondary);
                --plasma-checkbox-trigger-border-color: var(--text-secondary);
            `,
            paragraph: css`
                --plasma-checkbox-fill-color: var(--text-paragraph);
                --plasma-checkbox-icon-color: var(--inverse-text-primary);
                --plasma-checkbox-description-color: var(--text-secondary);
                --plasma-checkbox-trigger-border-color: var(--text-secondary);
            `,
            accent: css`
                --plasma-checkbox-fill-color: var(--text-accent);
                --plasma-checkbox-icon-color: var(--on-dark-text-primary);
                --plasma-checkbox-description-color: var(--text-secondary);
                --plasma-checkbox-trigger-border-color: var(--text-secondary);
            `,
            positive: css`
                --plasma-checkbox-fill-color: var(--text-positive);
                --plasma-checkbox-icon-color: var(--on-dark-text-primary);
                --plasma-checkbox-description-color: var(--text-secondary);
                --plasma-checkbox-trigger-border-color: var(--text-secondary);
            `,
            warning: css`
                --plasma-checkbox-fill-color: var(--text-warning);
                --plasma-checkbox-icon-color: var(--on-dark-text-primary);
                --plasma-checkbox-description-color: var(--text-secondary);
                --plasma-checkbox-trigger-border-color: var(--text-secondary);
            `,
            negative: css`
                --plasma-checkbox-fill-color: var(--text-negative);
                --plasma-checkbox-icon-color: var(--on-dark-text-primary);
                --plasma-checkbox-description-color: var(--text-secondary);
                --plasma-checkbox-trigger-border-color: var(--text-secondary);
            `,
        },
        disabled: {
            true: css`
                --plasma-checkbox-disabled-opacity: 0.4;
            `,
        },
        focused: {
            true: css`
                --plasma-checkbox-focus-color: var(--text-accent);
            `,
        },
    },
};
