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
                --plasma-radiobox-margin: 0 0 0.188rem 0.188rem;
                --plasma-radiobox-trigger-margin: 0.188rem 0;
                --plasma-radiobox-trigger-size: 1rem;
                --plasma-radiobox-trigger-border-radius 1.125rem;
                --plasma-radiobox-ellipse-size 0.5rem;
                --plasma-radiobox-content-top-offset: 0.1rem;
                --plasma-radiobox-content-left-offset 0.5rem;
                --plasma-radiobox-label-font-family: var(--plasma-typo-footnote1-font-family);
                --plasma-radiobox-label-font-size: var(--plasma-typo-footnote1-font-size);
                --plasma-radiobox-label-font-style: var(--plasma-typo-footnote1-font-style);
                --plasma-radiobox-label-font-weight: var(--plasma-typo-footnote1-font-weight);
                --plasma-radiobox-label-letter-spacing: var(--plasma-typo-footnote1-letter-spacing);
                --plasma-radiobox-label-line-height: var(--plasma-typo-footnote1-line-height);
                --plasma-radiobox-description-font-family: var(--plasma-typo-caption-font-family);
                --plasma-radiobox-description-font-size: var(--plasma-typo-caption-font-size);
                --plasma-radiobox-description-font-style: var(--plasma-typo-caption-font-style);
                --plasma-radiobox-description-font-weight: var(--plasma-typo-caption-font-weight);
                --plasma-radiobox-description-letter-spacing: var(--plasma-typo-caption-letter-spacing);
                --plasma-radiobox-description-line-height: var(--plasma-typo-caption-line-height);
            `,
            m: css`
                --plasma-radiobox-margin: 0 0 0.188rem 0.188rem;
                --plasma-radiobox-trigger-margin: 0.188rem 0;
                --plasma-radiobox-trigger-size: 1.375rem;
                --plasma-radiobox-trigger-border-radius 1.125rem;
                --plasma-radiobox-ellipse-size 0.625rem;
                --plasma-radiobox-content-top-offset: 0.25rem;
                --plasma-radiobox-content-left-offset 0.625rem;
                --plasma-radiobox-label-font-family: var(--plasma-typo-body1-font-family);
                --plasma-radiobox-label-font-size: var(--plasma-typo-body1-font-size);
                --plasma-radiobox-label-font-style: var(--plasma-typo-body1-font-style);
                --plasma-radiobox-label-font-weight: var(--plasma-typo-body1-font-weight);
                --plasma-radiobox-label-letter-spacing: var(--plasma-typo-body1-letter-spacing);
                --plasma-radiobox-label-line-height: var(--plasma-typo-body1-line-height);
                --plasma-radiobox-description-font-family: var(--plasma-typo-footnote1-font-family);
                --plasma-radiobox-description-font-size: var(--plasma-typo-footnote1-font-size);
                --plasma-radiobox-description-font-style: var(--plasma-typo-footnote1-font-style);
                --plasma-radiobox-description-font-weight: var(--plasma-typo-footnote1-font-weight);
                --plasma-radiobox-description-letter-spacing: var(--plasma-typo-footnote1-letter-spacing);
                --plasma-radiobox-description-line-height: var(--plasma-typo-footnote1-line-height);
            `,
        },
        /**
         * Вид контрола.
         */
        view: {
            primary: css`
                --plasma-radiobox-fill-color: var(--text-primary);
                --plasma-radiobox-ellipse-color: var(--inverse-text-primary);
                --plasma-radiobox-description-color: var(--text-secondary);
                --plasma-radiobox-trigger-border-color: var(--text-secondary);
            `,
            secondary: css`
                --plasma-radiobox-fill-color: var(--text-secondary);
                --plasma-radiobox-ellipse-color: var(--inverse-text-primary);
                --plasma-radiobox-description-color: var(--text-secondary);
                --plasma-radiobox-trigger-border-color: var(--text-secondary);
            `,
            tertiary: css`
                --plasma-radiobox-fill-color: var(--text-tertiary);
                --plasma-radiobox-ellipse-color: var(--inverse-text-primary);
                --plasma-radiobox-description-color: var(--text-secondary);
                --plasma-radiobox-trigger-border-color: var(--text-secondary);
            `,
            paragraph: css`
                --plasma-radiobox-fill-color: var(--text-paragraph);
                --plasma-radiobox-ellipse-color: var(--inverse-text-primary);
                --plasma-radiobox-description-color: var(--text-secondary);
                --plasma-radiobox-trigger-border-color: var(--text-secondary);
            `,
            accent: css`
                --plasma-radiobox-fill-color: var(--text-accent);
                --plasma-radiobox-ellipse-color: var(--on-dark-text-primary);
                --plasma-radiobox-description-color: var(--text-secondary);
                --plasma-radiobox-trigger-border-color: var(--text-secondary);
            `,
            positive: css`
                --plasma-radiobox-fill-color: var(--text-positive);
                --plasma-radiobox-ellipse-color: var(--on-dark-text-primary);
                --plasma-radiobox-description-color: var(--text-secondary);
                --plasma-radiobox-trigger-border-color: var(--text-secondary);
            `,
            warning: css`
                --plasma-radiobox-fill-color: var(--text-warning);
                --plasma-radiobox-ellipse-color: var(--on-dark-text-primary);
                --plasma-radiobox-description-color: var(--text-secondary);
                --plasma-radiobox-trigger-border-color: var(--text-secondary);
            `,
            negative: css`
                --plasma-radiobox-fill-color: var(--text-negative);
                --plasma-radiobox-ellipse-color: var(--on-dark-text-primary);
                --plasma-radiobox-description-color: var(--text-secondary);
                --plasma-radiobox-trigger-border-color: var(--text-secondary);
            `,
        },
        disabled: {
            true: css`
                --plasma-radiobox-disabled-opacity: 0.4;
            `,
        },
        focused: {
            true: css`
                --plasma-radiobox-focus-color: var(--text-accent);
            `,
        },
    },
};
