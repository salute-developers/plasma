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
                --plasma-checkbox-content-left-offset: 0.563rem;
                --plasma-checkbox-label-font-family: var(--plasma-typo-footnote1-font-family);
                --plasma-checkbox-label-font-size: var(--plasma-typo-footnote1-font-size);
                --plasma-checkbox-label-font-style: var(--plasma-typo-footnote1-font-style);
                --plasma-checkbox-label-font-weight: var(--plasma-typo-footnote1-font-weight);
                --plasma-checkbox-label-letter-spacing: var(--plasma-typo-footnote1-letter-spacing);
                --plasma-checkbox-label-line-height: var(--plasma-typo-footnote1-line-height);
                --plasma-checkbox-description-font-family: var(--plasma-typo-caption-font-family);
                --plasma-checkbox-description-font-size: var(--plasma-typo-caption-font-size);
                --plasma-checkbox-description-font-style: var(--plasma-typo-caption-font-style);
                --plasma-checkbox-description-font-weight: var(--plasma-typo-caption-font-weight);
                --plasma-checkbox-description-letter-spacing: var(--plasma-typo-caption-letter-spacing);
                --plasma-checkbox-description-line-height: var(--plasma-typo-caption-line-height);
            `,
            m: css`
                --plasma-checkbox-trigger-size: 1.25rem;
                --plasma-checkbox-trigger-border-radius: 0.375rem;
                --plasma-checkbox-content-top-offset: 0.188rem;
                --plasma-checkbox-content-left-offset: 0.75rem;
                --plasma-checkbox-label-font-family: var(--plasma-typo-body1-font-family);
                --plasma-checkbox-label-font-size: var(--plasma-typo-body1-font-size);
                --plasma-checkbox-label-font-style: var(--plasma-typo-body1-font-style);
                --plasma-checkbox-label-font-weight: var(--plasma-typo-body1-font-weight);
                --plasma-checkbox-label-letter-spacing: var(--plasma-typo-body1-letter-spacing);
                --plasma-checkbox-label-line-height: var(--plasma-typo-body1-line-height);
                --plasma-checkbox-description-font-family: var(--plasma-typo-footnote1-font-family);
                --plasma-checkbox-description-font-size: var(--plasma-typo-footnote1-font-size);
                --plasma-checkbox-description-font-style: var(--plasma-typo-footnote1-font-style);
                --plasma-checkbox-description-font-weight: var(--plasma-typo-footnote1-font-weight);
                --plasma-checkbox-description-letter-spacing: var(--plasma-typo-footnote1-letter-spacing);
                --plasma-checkbox-description-line-height: var(--plasma-typo-footnote1-line-height);
            `,
        },
        /**
         * Вид контрола.
         */
        view: {
            accent: css`
                --plasma-checkbox-fill-color: var(--plasma-colors-accent);
                --plasma-checkbox-icon-color: var(--plasma-colors-white);
                --plasma-checkbox-description-color: var(--plasma-colors-secondary);
                --plasma-checkbox-trigger-border-color: var(--plasma-colors-secondary);
            `,
        },
        disabled: {
            true: css`
                --plasma-checkbox-disabled-opacity: 0.4;
            `,
        },
        focused: {
            true: css`
                --plasma-checkbox-focus-color: var(--plasma-colors-accent);
            `,
        },
    },
};
