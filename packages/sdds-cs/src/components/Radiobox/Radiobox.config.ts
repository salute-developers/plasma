import { css, radioboxTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'accent',
        size: 's',
        focused: 'true',
    },
    variations: {
        /**
         * Размер контрола.
         */
        size: {
            s: css`
                ${radioboxTokens.margin}: 0;
                ${radioboxTokens.triggerMargin}: 0.063rem 0;
                ${radioboxTokens.triggerSize}: 1.375rem;
                ${radioboxTokens.triggerBorderRadius}: 1.125rem;
                ${radioboxTokens.ellipseSize}: 0.625rem;
                ${radioboxTokens.contentTopOffset}: 0;
                ${radioboxTokens.contentLeftOffset}: 0.625rem;
                ${radioboxTokens.descriptionMarginTop}: 0.125rem;
                ${radioboxTokens.labelFontFamily}: var(--plasma-typo-body-m-font-family);
                ${radioboxTokens.labelFontSize}: var(--plasma-typo-body-m-font-size);
                ${radioboxTokens.labelFontStyle}: var(--plasma-typo-body-m-font-style);
                ${radioboxTokens.labelFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${radioboxTokens.labelLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${radioboxTokens.labelLineHeight}: var(--plasma-typo-body-m-line-height);
                ${radioboxTokens.descriptionFontFamily}: var(--plasma-typo-body-s-font-family);
                ${radioboxTokens.descriptionFontSize}: var(--plasma-typo-body-s-font-size);
                ${radioboxTokens.descriptionFontStyle}: var(--plasma-typo-body-s-font-style);
                ${radioboxTokens.descriptionFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${radioboxTokens.descriptionLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${radioboxTokens.descriptionLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
        },
        /**
         * Вид контрола.
         */
        view: {
            accent: css`
                ${radioboxTokens.fillColor}: var(--text-accent);
                ${radioboxTokens.ellipseColor}: var(--on-dark-text-primary);
                ${radioboxTokens.descriptionColor}: var(--text-secondary);
                ${radioboxTokens.triggerBackgroundColor}: var(--surface-solid-card);
                ${radioboxTokens.triggerBorderColor}: var(--outline-accent);
            `,
        },
        disabled: {
            true: css`
                ${radioboxTokens.disabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${radioboxTokens.focusColor}: var(--text-accent);
            `,
        },
    },
};
