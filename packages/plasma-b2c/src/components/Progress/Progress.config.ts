import { css, progressTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        progressSize: '4',
    },
    variations: {
        view: {
            default: css`
                ${progressTokens.trackBackgroundColor}: var(--surface-transparent-secondary);
                ${progressTokens.progressFilledBackgroundColor}: var(--surface-solid-default);
                ${progressTokens.labelColor}: var(--text-primary);
                ${progressTokens.labelIconColor}: var(--text-primary);
                ${progressTokens.valueColor}: var(--text-secondary);
                ${progressTokens.captionColor}: var(--text-secondary);
            `,
            secondary: css`
                ${progressTokens.trackBackgroundColor}: var(--surface-transparent-secondary);
                ${progressTokens.progressFilledBackgroundColor}: var(--surface-transparent-tertiary);
                ${progressTokens.labelColor}: var(--text-primary);
                ${progressTokens.labelIconColor}: var(--text-primary);
                ${progressTokens.valueColor}: var(--text-secondary);
                ${progressTokens.captionColor}: var(--text-secondary);
            `,
            // deprecated
            primary: css`
                ${progressTokens.trackBackgroundColor}: var(--surface-transparent-secondary);
                ${progressTokens.progressFilledBackgroundColor}: var(--surface-accent);
                ${progressTokens.labelColor}: var(--text-primary);
                ${progressTokens.labelIconColor}: var(--text-primary);
                ${progressTokens.valueColor}: var(--text-secondary);
                ${progressTokens.captionColor}: var(--text-secondary);
            `,
            accent: css`
                ${progressTokens.trackBackgroundColor}: var(--surface-transparent-secondary);
                ${progressTokens.progressFilledBackgroundColor}: var(--surface-accent);
                ${progressTokens.labelColor}: var(--text-primary);
                ${progressTokens.labelIconColor}: var(--text-primary);
                ${progressTokens.valueColor}: var(--text-secondary);
                ${progressTokens.captionColor}: var(--text-secondary);
            `,
            accentGradient: css`
                ${progressTokens.trackBackgroundColor}: var(--surface-transparent-secondary);
                ${progressTokens.progressFilledBackgroundColor}: var(--surface-accent-gradient);
                ${progressTokens.labelColor}: var(--text-primary);
                ${progressTokens.labelIconColor}: var(--text-primary);
                ${progressTokens.valueColor}: var(--text-secondary);
                ${progressTokens.captionColor}: var(--text-secondary);
            `,
            info: css`
                ${progressTokens.trackBackgroundColor}: var(--surface-transparent-secondary);
                ${progressTokens.progressFilledBackgroundColor}: var(--surface-info);
                ${progressTokens.labelColor}: var(--text-primary);
                ${progressTokens.labelIconColor}: var(--text-primary);
                ${progressTokens.valueColor}: var(--text-secondary);
                ${progressTokens.captionColor}: var(--text-secondary);
            `,
            // deprecated
            success: css`
                ${progressTokens.trackBackgroundColor}: var(--surface-transparent-secondary);
                ${progressTokens.progressFilledBackgroundColor}: var(--surface-positive);
                ${progressTokens.labelColor}: var(--text-primary);
                ${progressTokens.labelIconColor}: var(--text-primary);
                ${progressTokens.valueColor}: var(--text-secondary);
                ${progressTokens.captionColor}: var(--text-secondary);
            `,
            positive: css`
                ${progressTokens.trackBackgroundColor}: var(--surface-transparent-secondary);
                ${progressTokens.progressFilledBackgroundColor}: var(--surface-positive);
                ${progressTokens.labelColor}: var(--text-primary);
                ${progressTokens.labelIconColor}: var(--text-primary);
                ${progressTokens.valueColor}: var(--text-secondary);
                ${progressTokens.captionColor}: var(--text-secondary);
            `,
            warning: css`
                ${progressTokens.trackBackgroundColor}: var(--surface-transparent-secondary);
                ${progressTokens.progressFilledBackgroundColor}: var(--surface-warning);
                ${progressTokens.labelColor}: var(--text-primary);
                ${progressTokens.labelIconColor}: var(--text-primary);
                ${progressTokens.valueColor}: var(--text-secondary);
                ${progressTokens.captionColor}: var(--text-secondary);
            `,
            // deprecated
            error: css`
                ${progressTokens.trackBackgroundColor}: var(--surface-transparent-secondary);
                ${progressTokens.progressFilledBackgroundColor}: var(--surface-negative);
                ${progressTokens.labelColor}: var(--text-primary);
                ${progressTokens.labelIconColor}: var(--text-primary);
                ${progressTokens.valueColor}: var(--text-secondary);
                ${progressTokens.captionColor}: var(--text-secondary);
            `,
            negative: css`
                ${progressTokens.trackBackgroundColor}: var(--surface-transparent-secondary);
                ${progressTokens.progressFilledBackgroundColor}: var(--surface-negative);
                ${progressTokens.labelColor}: var(--text-primary);
                ${progressTokens.labelIconColor}: var(--text-primary);
                ${progressTokens.valueColor}: var(--text-secondary);
                ${progressTokens.captionColor}: var(--text-secondary);
            `,
        },
        size: {
            l: css`
                ${progressTokens.topRowMarginBottom}: 1.25rem;
                ${progressTokens.labelWrapperGap}: 0.375rem;
                ${progressTokens.labelWrapperMarginRight}: 1.5rem;

                ${progressTokens.labelFontFamily}: var(--plasma-typo-body-l-font-family);
                ${progressTokens.labelFontSize}: var(--plasma-typo-body-l-font-size);
                ${progressTokens.labelFontStyle}: var(--plasma-typo-body-l-font-style);
                ${progressTokens.labelFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${progressTokens.labelLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${progressTokens.labelLineHeight}: var(--plasma-typo-body-l-line-height);

                ${progressTokens.valueFontFamily}: var(--plasma-typo-body-l-font-family);
                ${progressTokens.valueFontSize}: var(--plasma-typo-body-l-font-size);
                ${progressTokens.valueFontStyle}: var(--plasma-typo-body-l-font-style);
                ${progressTokens.valueFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${progressTokens.valueLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${progressTokens.valueLineHeight}: var(--plasma-typo-body-l-line-height);
                ${progressTokens.valueMarginLeft}: 1.5rem;

                ${progressTokens.captionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${progressTokens.captionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${progressTokens.captionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${progressTokens.captionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${progressTokens.captionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${progressTokens.captionLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${progressTokens.captionMarginTop}: 0.5rem;
            `,
            m: css`
                ${progressTokens.topRowMarginBottom}: 1rem;
                ${progressTokens.labelWrapperGap}: 0.375rem;
                ${progressTokens.labelWrapperMarginRight}: 1.25rem;

                ${progressTokens.labelFontFamily}: var(--plasma-typo-body-m-font-family);
                ${progressTokens.labelFontSize}: var(--plasma-typo-body-m-font-size);
                ${progressTokens.labelFontStyle}: var(--plasma-typo-body-m-font-style);
                ${progressTokens.labelFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${progressTokens.labelLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${progressTokens.labelLineHeight}: var(--plasma-typo-body-m-line-height);

                ${progressTokens.valueFontFamily}: var(--plasma-typo-body-m-font-family);
                ${progressTokens.valueFontSize}: var(--plasma-typo-body-m-font-size);
                ${progressTokens.valueFontStyle}: var(--plasma-typo-body-m-font-style);
                ${progressTokens.valueFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${progressTokens.valueLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${progressTokens.valueLineHeight}: var(--plasma-typo-body-m-line-height);
                ${progressTokens.valueMarginLeft}: 1.25rem;

                ${progressTokens.captionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${progressTokens.captionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${progressTokens.captionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${progressTokens.captionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${progressTokens.captionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${progressTokens.captionLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${progressTokens.captionMarginTop}: 0.5rem;
            `,
            s: css`
                ${progressTokens.topRowMarginBottom}: 0.875rem;
                ${progressTokens.labelWrapperGap}: 0.375rem;
                ${progressTokens.labelWrapperMarginRight}: 1rem;

                ${progressTokens.labelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${progressTokens.labelFontSize}: var(--plasma-typo-body-s-font-size);
                ${progressTokens.labelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${progressTokens.labelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${progressTokens.labelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${progressTokens.labelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${progressTokens.valueFontFamily}: var(--plasma-typo-body-s-font-family);
                ${progressTokens.valueFontSize}: var(--plasma-typo-body-s-font-size);
                ${progressTokens.valueFontStyle}: var(--plasma-typo-body-s-font-style);
                ${progressTokens.valueFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${progressTokens.valueLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${progressTokens.valueLineHeight}: var(--plasma-typo-body-s-line-height);
                ${progressTokens.valueMarginLeft}: 1rem;

                ${progressTokens.captionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${progressTokens.captionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${progressTokens.captionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${progressTokens.captionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${progressTokens.captionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${progressTokens.captionLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${progressTokens.captionMarginTop}: 0.5rem;
            `,
        },
        progressSize: {
            2: css`
                ${progressTokens.trackHeight}: 0.125rem;
                ${progressTokens.trackBorderRadius}: 1000px;

                ${progressTokens.progressFilledHeight}: 0.125rem;
                ${progressTokens.progressFilledBorderRadius}: 1000px;
            `,
            4: css`
                ${progressTokens.trackHeight}: 0.25rem;
                ${progressTokens.trackBorderRadius}: 1000px;

                ${progressTokens.progressFilledHeight}: 0.25rem;
                ${progressTokens.progressFilledBorderRadius}: 1000px;
            `,
            6: css`
                ${progressTokens.trackHeight}: 0.375rem;
                ${progressTokens.trackBorderRadius}: 1000px;

                ${progressTokens.progressFilledHeight}: 0.375rem;
                ${progressTokens.progressFilledBorderRadius}: 1000px;
            `,
            8: css`
                ${progressTokens.trackHeight}: 0.5rem;
                ${progressTokens.trackBorderRadius}: 1000px;

                ${progressTokens.progressFilledHeight}: 0.5rem;
                ${progressTokens.progressFilledBorderRadius}: 1000px;
            `,
        },
    },
};
