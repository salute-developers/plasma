import { css, checkboxTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'accent',
        size: 'm',
        focused: 'true',
        appearance: 'outline',
    },
    variations: {
        size: {
            s: css`
                ${checkboxTokens.margin}: 0;
                ${checkboxTokens.triggerPadding}: 0.0625rem;
                ${checkboxTokens.triggerSize}: 0.875rem;
                ${checkboxTokens.triggerBorderRadius}: 0.25rem;
                ${checkboxTokens.triggerBorderWidth}: 0.0625rem;
                ${checkboxTokens.contentTopOffset}: 0;
                ${checkboxTokens.contentLeftOffset}: 0.5rem;
                ${checkboxTokens.descriptionMarginTop}: 0.125rem;
                ${checkboxTokens.labelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${checkboxTokens.labelFontSize}: var(--plasma-typo-body-s-font-size);
                ${checkboxTokens.labelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${checkboxTokens.labelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${checkboxTokens.labelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${checkboxTokens.labelLineHeight}: var(--plasma-typo-body-s-line-height);
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
                ${checkboxTokens.triggerBorderWidth}: 0.0625rem;
                ${checkboxTokens.contentTopOffset}: 0.125rem;
                ${checkboxTokens.contentLeftOffset}: 0.75rem;
                ${checkboxTokens.descriptionMarginTop}: 0.125rem;
                ${checkboxTokens.labelFontFamily}: var(--plasma-typo-body-m-font-family);
                ${checkboxTokens.labelFontSize}: var(--plasma-typo-body-m-font-size);
                ${checkboxTokens.labelFontStyle}: var(--plasma-typo-body-m-font-style);
                ${checkboxTokens.labelFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${checkboxTokens.labelLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${checkboxTokens.labelLineHeight}: var(--plasma-typo-body-m-line-height);
                ${checkboxTokens.descriptionFontFamily}: var(--plasma-typo-body-s-font-family);
                ${checkboxTokens.descriptionFontSize}: var(--plasma-typo-body-s-font-size);
                ${checkboxTokens.descriptionFontStyle}: var(--plasma-typo-body-s-font-style);
                ${checkboxTokens.descriptionFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${checkboxTokens.descriptionLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${checkboxTokens.descriptionLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
        },
        view: {
            accent: css`
                ${checkboxTokens.fillColor}: transparent;
                ${checkboxTokens.iconColor}: var(--text-accent);
                ${checkboxTokens.labelColor}: var(--text-primary);
                ${checkboxTokens.descriptionColor}: var(--text-secondary);
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: var(--text-secondary);
                ${checkboxTokens.triggerBorderCheckedColor}: var(--text-accent);
            `,
            // deprecated
            default: css`
                ${checkboxTokens.fillColor}: transparent;
                ${checkboxTokens.iconColor}: var(--text-primary);
                ${checkboxTokens.labelColor}: var(--text-primary);
                ${checkboxTokens.descriptionColor}: var(--text-secondary);
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: var(--text-secondary);
                ${checkboxTokens.triggerBorderCheckedColor}: var(--text-primary);
            `,
            // deprecated
            secondary: css`
                ${checkboxTokens.fillColor}: transparent;
                ${checkboxTokens.iconColor}: var(--text-secondary);
                ${checkboxTokens.labelColor}: var(--text-primary);
                ${checkboxTokens.descriptionColor}: var(--text-secondary);
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: var(--text-secondary);
                ${checkboxTokens.triggerBorderCheckedColor}: var(--text-secondary);
            `,
            // deprecated
            tertiary: css`
                ${checkboxTokens.fillColor}: transparent;
                ${checkboxTokens.iconColor}: var(--text-tertiary);
                ${checkboxTokens.labelColor}: var(--text-primary);
                ${checkboxTokens.descriptionColor}: var(--text-secondary);
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: var(--text-secondary);
                ${checkboxTokens.triggerBorderCheckedColor}: var(--text-tertiary);
            `,
            // deprecated
            paragraph: css`
                ${checkboxTokens.fillColor}: transparent;
                ${checkboxTokens.iconColor}: var(--text-paragraph);
                ${checkboxTokens.labelColor}: var(--text-primary);
                ${checkboxTokens.descriptionColor}: var(--text-secondary);
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: var(--text-secondary);
                ${checkboxTokens.triggerBorderCheckedColor}: var(--text-paragraph);
            `,
            // deprecated
            positive: css`
                ${checkboxTokens.fillColor}: transparent;
                ${checkboxTokens.iconColor}: var(--text-positive);
                ${checkboxTokens.labelColor}: var(--text-primary);
                ${checkboxTokens.descriptionColor}: var(--text-secondary);
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: var(--text-secondary);
                ${checkboxTokens.triggerBorderCheckedColor}: var(--text-positive);
            `,
            // deprecated
            warning: css`
                ${checkboxTokens.fillColor}: transparent;
                ${checkboxTokens.iconColor}: var(--text-warning);
                ${checkboxTokens.labelColor}: var(--text-primary);
                ${checkboxTokens.descriptionColor}: var(--text-secondary);
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: var(--text-secondary);
                ${checkboxTokens.triggerBorderCheckedColor}: var(--text-warning);
            `,
            negative: css`
                ${checkboxTokens.fillColor}: transparent;
                ${checkboxTokens.iconColor}: var(--text-negative);
                ${checkboxTokens.labelColor}: var(--text-primary);
                ${checkboxTokens.descriptionColor}: var(--text-secondary);
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: var(--text-negative);
                ${checkboxTokens.triggerBorderCheckedColor}: var(--text-negative);
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
