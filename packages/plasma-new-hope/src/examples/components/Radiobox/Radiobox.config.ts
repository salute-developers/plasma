import { css } from '@linaria/core';

import { radioboxTokens } from '../../../components/Radiobox';

export const config = {
    defaults: {
        view: 'accent',
        focused: 'true',
    },
    variations: {
        /**
         * Размер контрола.
         */
        size: {
            s: css`
                ${radioboxTokens.margin}: 0;
                ${radioboxTokens.triggerPadding}: 0.0625rem 0;
                ${radioboxTokens.triggerSize}: 1rem;
                ${radioboxTokens.triggerBorderRadius}: 1.125rem;
                ${radioboxTokens.triggerBorderWidth}: 0.125rem;
                ${radioboxTokens.ellipseSize}: 0.5rem;
                ${radioboxTokens.contentTopOffset}: 0;
                ${radioboxTokens.contentLeftOffset}: 0.5rem;
                ${radioboxTokens.labelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${radioboxTokens.labelFontSize}: var(--plasma-typo-body-s-font-size);
                ${radioboxTokens.labelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${radioboxTokens.labelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${radioboxTokens.labelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${radioboxTokens.labelLineHeight}: var(--plasma-typo-body-s-line-height);
                ${radioboxTokens.descriptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${radioboxTokens.descriptionMarginTop}: 0.125rem;
                ${radioboxTokens.descriptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${radioboxTokens.descriptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${radioboxTokens.descriptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${radioboxTokens.descriptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${radioboxTokens.descriptionLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            m: css`
                ${radioboxTokens.margin}: 0;
                ${radioboxTokens.triggerPadding}: 0.0625rem;
                ${radioboxTokens.triggerSize}: 1.375rem;
                ${radioboxTokens.triggerBorderRadius}: 1.125rem;
                ${radioboxTokens.triggerBorderWidth}: 0.125rem;
                ${radioboxTokens.ellipseSize}: 0.625rem;
                ${radioboxTokens.contentTopOffset}: 0.125rem;
                ${radioboxTokens.contentLeftOffset}: 0.625rem;
                ${radioboxTokens.labelFontFamily}: var(--plasma-typo-body-m-font-family);
                ${radioboxTokens.labelFontSize}: var(--plasma-typo-body-m-font-size);
                ${radioboxTokens.labelFontStyle}: var(--plasma-typo-body-m-font-style);
                ${radioboxTokens.labelFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${radioboxTokens.labelLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${radioboxTokens.labelLineHeight}: var(--plasma-typo-body-m-line-height);
                ${radioboxTokens.descriptionFontFamily}: var(--plasma-typo-body-s-font-family);
                ${radioboxTokens.descriptionMarginTop}: 0.125rem;
                ${radioboxTokens.descriptionFontSize}: var(--plasma-typo-body-s-font-size);
                ${radioboxTokens.descriptionFontStyle}: var(--plasma-typo-body-s-font-style);
                ${radioboxTokens.descriptionFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${radioboxTokens.descriptionLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${radioboxTokens.descriptionLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            l: css`
                ${radioboxTokens.margin}: 0;
                ${radioboxTokens.triggerPadding}: 0.0625rem;
                ${radioboxTokens.triggerSize}: 1.375rem;
                ${radioboxTokens.triggerBorderRadius}: 1.125rem;
                ${radioboxTokens.triggerBorderWidth}: 0.125rem;
                ${radioboxTokens.ellipseSize}: 0.625rem;
                ${radioboxTokens.contentTopOffset}: 0.0625rem;
                ${radioboxTokens.contentLeftOffset}: 0.75rem;
                ${radioboxTokens.labelFontFamily}: var(--plasma-typo-body-l-font-family);
                ${radioboxTokens.labelFontSize}: var(--plasma-typo-body-l-font-size);
                ${radioboxTokens.labelFontStyle}: var(--plasma-typo-body-l-font-style);
                ${radioboxTokens.labelFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${radioboxTokens.labelLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${radioboxTokens.labelLineHeight}: var(--plasma-typo-body-l-line-height);
                ${radioboxTokens.descriptionFontFamily}: var(--plasma-typo-body-m-font-family);
                ${radioboxTokens.descriptionMarginTop}: 0.125rem;
                ${radioboxTokens.descriptionFontSize}: var(--plasma-typo-body-m-font-size);
                ${radioboxTokens.descriptionFontStyle}: var(--plasma-typo-body-m-font-style);
                ${radioboxTokens.descriptionFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${radioboxTokens.descriptionLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${radioboxTokens.descriptionLineHeight}: var(--plasma-typo-body-m-line-height);
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
                ${radioboxTokens.triggerBackgroundColor}: transparent;
                ${radioboxTokens.triggerBorderColor}: var(--text-secondary);
                ${radioboxTokens.triggerBorderCheckedColor}: transparent;
            `,
            // deprecated
            default: css`
                ${radioboxTokens.fillColor}: var(--text-primary);
                ${radioboxTokens.ellipseColor}: var(--inverse-text-primary);
                ${radioboxTokens.descriptionColor}: var(--text-secondary);
                ${radioboxTokens.triggerBackgroundColor}: transparent;
                ${radioboxTokens.triggerBorderColor}: var(--text-secondary);
                ${radioboxTokens.triggerBorderCheckedColor}: transparent;
            `,
            // deprecated
            secondary: css`
                ${radioboxTokens.fillColor}: var(--text-secondary);
                ${radioboxTokens.ellipseColor}: var(--inverse-text-primary);
                ${radioboxTokens.descriptionColor}: var(--text-secondary);
                ${radioboxTokens.triggerBackgroundColor}: transparent;
                ${radioboxTokens.triggerBorderColor}: var(--text-secondary);
                ${radioboxTokens.triggerBorderCheckedColor}: transparent;
            `,
            // deprecated
            tertiary: css`
                ${radioboxTokens.fillColor}: var(--text-tertiary);
                ${radioboxTokens.ellipseColor}: var(--inverse-text-primary);
                ${radioboxTokens.descriptionColor}: var(--text-secondary);
                ${radioboxTokens.triggerBackgroundColor}: transparent;
                ${radioboxTokens.triggerBorderColor}: var(--text-secondary);
                ${radioboxTokens.triggerBorderCheckedColor}: transparent;
            `,
            // deprecated
            paragraph: css`
                ${radioboxTokens.fillColor}: var(--text-paragraph);
                ${radioboxTokens.ellipseColor}: var(--inverse-text-primary);
                ${radioboxTokens.descriptionColor}: var(--text-secondary);
                ${radioboxTokens.triggerBackgroundColor}: transparent;
                ${radioboxTokens.triggerBorderColor}: var(--text-secondary);
                ${radioboxTokens.triggerBorderCheckedColor}: transparent;
            `,
            // deprecated
            positive: css`
                ${radioboxTokens.fillColor}: var(--text-positive);
                ${radioboxTokens.ellipseColor}: var(--on-dark-text-primary);
                ${radioboxTokens.descriptionColor}: var(--text-secondary);
                ${radioboxTokens.triggerBackgroundColor}: transparent;
                ${radioboxTokens.triggerBorderColor}: var(--text-secondary);
                ${radioboxTokens.triggerBorderCheckedColor}: transparent;
            `,
            // deprecated
            warning: css`
                ${radioboxTokens.fillColor}: var(--text-warning);
                ${radioboxTokens.ellipseColor}: var(--on-dark-text-primary);
                ${radioboxTokens.descriptionColor}: var(--text-secondary);
                ${radioboxTokens.triggerBackgroundColor}: transparent;
                ${radioboxTokens.triggerBorderColor}: var(--text-secondary);
                ${radioboxTokens.triggerBorderCheckedColor}: transparent;
            `,
            // deprecated
            negative: css`
                ${radioboxTokens.fillColor}: var(--text-negative);
                ${radioboxTokens.ellipseColor}: var(--on-dark-text-primary);
                ${radioboxTokens.descriptionColor}: var(--text-secondary);
                ${radioboxTokens.triggerBackgroundColor}: transparent;
                ${radioboxTokens.triggerBorderColor}: var(--text-secondary);
                ${radioboxTokens.triggerBorderCheckedColor}: transparent;
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
