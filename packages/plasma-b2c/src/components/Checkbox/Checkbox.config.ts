import { css, checkboxTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'accent',
        size: 'm',
        focused: 'true',
    },
    variations: {
        size: {
            s: css`
                ${checkboxTokens.margin}: 0;
                ${checkboxTokens.triggerPadding}: 0.0625rem;
                ${checkboxTokens.triggerSize}: 0.875rem;
                ${checkboxTokens.triggerBorderRadius}: 0.25rem;
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
                ${checkboxTokens.fillColor}: var(--text-accent);
                ${checkboxTokens.iconColor}: var(--on-dark-text-primary);
                ${checkboxTokens.descriptionColor}: var(--text-secondary);
                ${checkboxTokens.labelColor}: var(--text-primary);
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: var(--text-secondary);
            `,
            // deprecated
            default: css`
                ${checkboxTokens.fillColor}: var(--text-primary);
                ${checkboxTokens.iconColor}: var(--inverse-text-primary);
                ${checkboxTokens.descriptionColor}: var(--text-secondary);
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: var(--text-secondary);
            `,
            // deprecated
            primary: css`
                ${checkboxTokens.fillColor}: var(--text-primary);
                ${checkboxTokens.iconColor}: var(--inverse-text-primary);
                ${checkboxTokens.descriptionColor}: var(--text-secondary);
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: var(--text-secondary);
            `,
            // deprecated
            secondary: css`
                ${checkboxTokens.fillColor}: var(--text-secondary);
                ${checkboxTokens.iconColor}: var(--inverse-text-primary);
                ${checkboxTokens.descriptionColor}: var(--text-secondary);
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: var(--text-secondary);
            `,
            // deprecated
            tertiary: css`
                ${checkboxTokens.fillColor}: var(--text-tertiary);
                ${checkboxTokens.iconColor}: var(--inverse-text-primary);
                ${checkboxTokens.descriptionColor}: var(--text-secondary);
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: var(--text-secondary);
            `,
            // deprecated
            paragraph: css`
                ${checkboxTokens.fillColor}: var(--text-paragraph);
                ${checkboxTokens.iconColor}: var(--inverse-text-primary);
                ${checkboxTokens.descriptionColor}: var(--text-secondary);
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: var(--text-secondary);
            `,
            // deprecated
            positive: css`
                ${checkboxTokens.fillColor}: var(--text-positive);
                ${checkboxTokens.iconColor}: var(--on-dark-text-primary);
                ${checkboxTokens.descriptionColor}: var(--text-secondary);
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: var(--text-secondary);
            `,
            // deprecated
            warning: css`
                ${checkboxTokens.fillColor}: var(--text-warning);
                ${checkboxTokens.iconColor}: var(--on-dark-text-primary);
                ${checkboxTokens.descriptionColor}: var(--text-secondary);
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: var(--text-secondary);
            `,
            // deprecated
            negative: css`
                ${checkboxTokens.fillColor}: var(--text-negative);
                ${checkboxTokens.iconColor}: var(--on-dark-text-primary);
                ${checkboxTokens.descriptionColor}: var(--text-secondary);
                ${checkboxTokens.triggerBackgroundColor}: transparent;
                ${checkboxTokens.triggerBorderColor}: var(--text-secondary);
            `,
        },
        disabled: {
            true: css`
                ${checkboxTokens.disabledOpacity}: 0.4;
            `,
        },
        outline: {
            true: css`
                ${checkboxTokens.triggerBorderWidth}: 0.0625rem;
                ${checkboxTokens.iconColor}: var(${checkboxTokens.fillColor});
                ${checkboxTokens.triggerBorderColor}: var(${checkboxTokens.fillColor});
                ${checkboxTokens.triggerBorderColorChecked}: var(${checkboxTokens.fillColor});
                ${checkboxTokens.triggerBackgroundColorChecked}: transparent;
            `,
            false: css`
                ${checkboxTokens.triggerBorderWidth}: 0.125rem;
                ${checkboxTokens.triggerBackgroundColorChecked}: var(${checkboxTokens.fillColor});
                ${checkboxTokens.triggerBorderColorChecked}: transparent;
            `,
        },
        focused: {
            true: css`
                ${checkboxTokens.focusColor}: var(--text-accent);
            `,
        },
    },
};
