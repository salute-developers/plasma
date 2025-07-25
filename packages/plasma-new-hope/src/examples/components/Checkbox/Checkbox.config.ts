import { css } from '@linaria/core';

import { checkboxTokens } from '../../../components/Checkbox';

export const config = {
    defaults: {
        view: 'accent',
    },
    variations: {
        /**
         * Размер контрола.
         */
        size: {
            s: css`
                ${checkboxTokens.margin}: 0;
                ${checkboxTokens.triggerPadding}: 0.0625rem;
                ${checkboxTokens.triggerSize}: 0.875rem;
                ${checkboxTokens.triggerBorderRadius}: 0.25rem;
                ${checkboxTokens.triggerBorderWidth}: 0.125rem;
                ${checkboxTokens.contentTopOffset}: 0;
                ${checkboxTokens.contentLeftOffset}: 0.5rem;
                ${checkboxTokens.labelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${checkboxTokens.labelFontSize}: var(--plasma-typo-body-s-font-size);
                ${checkboxTokens.labelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${checkboxTokens.labelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${checkboxTokens.labelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${checkboxTokens.labelLineHeight}: var(--plasma-typo-body-s-line-height);
                ${checkboxTokens.descriptionMarginTop}: 0.125rem;
                ${checkboxTokens.descriptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${checkboxTokens.descriptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${checkboxTokens.descriptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${checkboxTokens.descriptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${checkboxTokens.descriptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${checkboxTokens.descriptionLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            m: css`
                ${checkboxTokens.margin}: 0;
                ${checkboxTokens.triggerPadding}: 0.125rem;
                ${checkboxTokens.triggerSize}: 1.25rem;
                ${checkboxTokens.triggerBorderRadius}: 0.375rem;
                ${checkboxTokens.triggerBorderWidth}: 0.125rem;
                ${checkboxTokens.contentTopOffset}: 0.125rem;
                ${checkboxTokens.contentLeftOffset}: 0.75rem;
                ${checkboxTokens.labelFontFamily}: var(--plasma-typo-body-m-font-family);
                ${checkboxTokens.labelFontSize}: var(--plasma-typo-body-m-font-size);
                ${checkboxTokens.labelFontStyle}: var(--plasma-typo-body-m-font-style);
                ${checkboxTokens.labelFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${checkboxTokens.labelLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${checkboxTokens.labelLineHeight}: var(--plasma-typo-body-m-line-height);
                ${checkboxTokens.descriptionMarginTop}: 0.125rem;
                ${checkboxTokens.descriptionFontFamily}: var(--plasma-typo-body-s-font-family);
                ${checkboxTokens.descriptionFontSize}: var(--plasma-typo-body-s-font-size);
                ${checkboxTokens.descriptionFontStyle}: var(--plasma-typo-body-s-font-style);
                ${checkboxTokens.descriptionFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${checkboxTokens.descriptionLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${checkboxTokens.descriptionLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            l: css`
                ${checkboxTokens.margin}: 0;
                ${checkboxTokens.triggerPadding}: 0.125rem;
                ${checkboxTokens.triggerSize}: 1.25rem;
                ${checkboxTokens.triggerBorderRadius}: 0.375rem;
                ${checkboxTokens.triggerBorderWidth}: 0.125rem;
                ${checkboxTokens.contentTopOffset}: 0.0625rem;
                ${checkboxTokens.contentLeftOffset}: 0.75rem;
                ${checkboxTokens.labelFontFamily}: var(--plasma-typo-body-l-font-family);
                ${checkboxTokens.labelFontSize}: var(--plasma-typo-body-l-font-size);
                ${checkboxTokens.labelFontStyle}: var(--plasma-typo-body-l-font-style);
                ${checkboxTokens.labelFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${checkboxTokens.labelLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${checkboxTokens.labelLineHeight}: var(--plasma-typo-body-l-line-height);
                ${checkboxTokens.descriptionMarginTop}: 0.125rem;
                ${checkboxTokens.descriptionFontFamily}: var(--plasma-typo-body-m-font-family);
                ${checkboxTokens.descriptionFontSize}: var(--plasma-typo-body-m-font-size);
                ${checkboxTokens.descriptionFontStyle}: var(--plasma-typo-body-m-font-style);
                ${checkboxTokens.descriptionFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${checkboxTokens.descriptionLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${checkboxTokens.descriptionLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
        },
        /**
         * Вид контрола.
         */
        view: {
            accent: css`
                ${checkboxTokens.fillColor}: var(--text-accent);
                ${checkboxTokens.iconColor}: var(--on-dark-text-primary);
                ${checkboxTokens.labelColor}: var(--text-primary);
                ${checkboxTokens.descriptionColor}: var(--text-secondary);
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: var(--text-secondary);
                ${checkboxTokens.triggerBorderCheckedColor}: var(--text-accent);
            `,
            // deprecated
            default: css`
                ${checkboxTokens.fillColor}: var(--text-primary);
                ${checkboxTokens.iconColor}: var(--inverse-text-primary);
                ${checkboxTokens.descriptionColor}: var(--text-secondary);
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: var(--text-secondary);
                ${checkboxTokens.triggerBorderCheckedColor}: transparent;
            `,
            // deprecated
            secondary: css`
                ${checkboxTokens.fillColor}: var(--text-secondary);
                ${checkboxTokens.iconColor}: var(--inverse-text-primary);
                ${checkboxTokens.descriptionColor}: var(--text-secondary);
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: var(--text-secondary);
                ${checkboxTokens.triggerBorderCheckedColor}: transparent;
            `,
            // deprecated
            tertiary: css`
                ${checkboxTokens.fillColor}: var(--text-tertiary);
                ${checkboxTokens.iconColor}: var(--inverse-text-primary);
                ${checkboxTokens.descriptionColor}: var(--text-secondary);
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: var(--text-secondary);
                ${checkboxTokens.triggerBorderCheckedColor}: transparent;
            `,
            // deprecated
            paragraph: css`
                ${checkboxTokens.fillColor}: var(--text-paragraph);
                ${checkboxTokens.iconColor}: var(--inverse-text-primary);
                ${checkboxTokens.descriptionColor}: var(--text-secondary);
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: var(--text-secondary);
                ${checkboxTokens.triggerBorderCheckedColor}: transparent;
            `,
            // deprecated
            positive: css`
                ${checkboxTokens.fillColor}: var(--text-positive);
                ${checkboxTokens.iconColor}: var(--on-dark-text-primary);
                ${checkboxTokens.descriptionColor}: var(--text-secondary);
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: var(--text-secondary);
                ${checkboxTokens.triggerBorderCheckedColor}: transparent;
            `,
            // deprecated
            warning: css`
                ${checkboxTokens.fillColor}: var(--text-warning);
                ${checkboxTokens.iconColor}: var(--on-dark-text-primary);
                ${checkboxTokens.descriptionColor}: var(--text-secondary);
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: var(--text-secondary);
                ${checkboxTokens.triggerBorderCheckedColor}: transparent;
            `,
            negative: css`
                ${checkboxTokens.fillColor}: var(--text-negative);
                ${checkboxTokens.iconColor}: var(--on-dark-text-primary);
                ${checkboxTokens.descriptionColor}: var(--text-secondary);
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: var(--text-negative);
                ${checkboxTokens.triggerBorderCheckedColor}: transparent;
            `,
        },
        disabled: {
            true: css`
                ${checkboxTokens.disabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${checkboxTokens.focusColor}: var(--text-accent);
            `,
        },
    },
};
