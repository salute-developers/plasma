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
                ${radioboxTokens.triggerBorderWidth}: 0.0625rem;
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
                ${radioboxTokens.triggerBorderWidth}: 0.0625rem;
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
                ${radioboxTokens.triggerBorderWidth}: 0.0625rem;
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
                ${radioboxTokens.fillColor}: transparent;
                ${radioboxTokens.ellipseColor}: var(--text-accent);
                ${radioboxTokens.descriptionColor}: var(--text-secondary);
                ${radioboxTokens.triggerBackgroundColor}: transparent;
                ${radioboxTokens.triggerBorderColor}: var(--text-secondary);
                ${radioboxTokens.triggerBorderCheckedColor}: var(--text-accent);
            `,
            // deprecated
            default: css`
                ${radioboxTokens.fillColor}: transparent;
                ${radioboxTokens.ellipseColor}: var(--text-default);
                ${radioboxTokens.descriptionColor}: var(--text-secondary);
                ${radioboxTokens.triggerBackgroundColor}: transparent;
                ${radioboxTokens.triggerBorderColor}: var(--text-secondary);
                ${radioboxTokens.triggerBorderCheckedColor}: var(--text-default);
            `,
            // deprecated
            secondary: css`
                ${radioboxTokens.fillColor}: transparent;
                ${radioboxTokens.ellipseColor}: var(--text-secondary);
                ${radioboxTokens.descriptionColor}: var(--text-secondary);
                ${radioboxTokens.triggerBackgroundColor}: transparent;
                ${radioboxTokens.triggerBorderColor}: var(--text-secondary);
                ${radioboxTokens.triggerBorderCheckedColor}: var(--text-secondary);
            `,
            // deprecated
            tertiary: css`
                ${radioboxTokens.fillColor}: transparent;
                ${radioboxTokens.ellipseColor}: var(--text-tertiary);
                ${radioboxTokens.descriptionColor}: var(--text-secondary);
                ${radioboxTokens.triggerBackgroundColor}: transparent;
                ${radioboxTokens.triggerBorderColor}: var(--text-secondary);
                ${radioboxTokens.triggerBorderCheckedColor}: var(--text-tertiary);
            `,
            // deprecated
            paragraph: css`
                ${radioboxTokens.fillColor}: transparent;
                ${radioboxTokens.ellipseColor}: var(--text-paragraph);
                ${radioboxTokens.descriptionColor}: var(--text-secondary);
                ${radioboxTokens.triggerBackgroundColor}: transparent;
                ${radioboxTokens.triggerBorderColor}: var(--text-secondary);
                ${radioboxTokens.triggerBorderCheckedColor}: var(--text-paragraph);
            `,
            // deprecated
            positive: css`
                ${radioboxTokens.fillColor}: transparent;
                ${radioboxTokens.ellipseColor}: var(--text-positive);
                ${radioboxTokens.descriptionColor}: var(--text-secondary);
                ${radioboxTokens.triggerBackgroundColor}: transparent;
                ${radioboxTokens.triggerBorderColor}: var(--text-secondary);
                ${radioboxTokens.triggerBorderCheckedColor}: var(--text-positive);
            `,
            // deprecated
            warning: css`
                ${radioboxTokens.fillColor}: transparent;
                ${radioboxTokens.ellipseColor}: var(--text-warning);
                ${radioboxTokens.descriptionColor}: var(--text-secondary);
                ${radioboxTokens.triggerBackgroundColor}: transparent;
                ${radioboxTokens.triggerBorderColor}: var(--text-secondary);
                ${radioboxTokens.triggerBorderCheckedColor}: var(--text-warning);
            `,
            // deprecated
            negative: css`
                ${radioboxTokens.fillColor}: transparent;
                ${radioboxTokens.ellipseColor}: var(--text-negative);
                ${radioboxTokens.descriptionColor}: var(--text-secondary);
                ${radioboxTokens.triggerBackgroundColor}: transparent;
                ${radioboxTokens.triggerBorderColor}: var(--text-secondary);
                ${radioboxTokens.triggerBorderCheckedColor}: var(--text-negative);
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
