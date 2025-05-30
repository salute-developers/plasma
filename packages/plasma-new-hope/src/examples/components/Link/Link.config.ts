import { css } from '@linaria/core';

import { tokens } from '../../../components/Link/Link.tokens';

export const config = {
    defaults: {
        view: 'accent',
        size: 'm',
        focused: 'true',
    },
    variations: {
        view: {
            default: css`
                ${tokens.linkColor}: var(--text-primary);
                ${tokens.linkColorHover}: var(--text-primary-hover);
                ${tokens.linkColorActive}: var(--text-primary-active);
                ${tokens.linkColorVisited}: var(--text-primary);
                ${tokens.linkColorVisitedHover}: var(--text-primary-hover);
                ${tokens.linkColorVisitedActive}: var(--text-primary-active);
                ${tokens.linkUnderlineBorder}: 0;
            `,
            secondary: css`
                ${tokens.linkColor}: var(--text-secondary);
                ${tokens.linkColorHover}: var(--text-secondary-hover);
                ${tokens.linkColorActive}: var(--text-secondary-active);
                ${tokens.linkColorVisited}: var(--text-secondary);
                ${tokens.linkColorVisitedHover}: var(--text-secondary-hover);
                ${tokens.linkColorVisitedActive}: var(--text-secondary-active);
                ${tokens.linkUnderlineBorder}: 0;
            `,
            tertiary: css`
                ${tokens.linkColor}: var(--text-tertiary);
                ${tokens.linkColorHover}: var(--text-tertiary-hover);
                ${tokens.linkColorActive}: var(--text-tertiary-active);
                ${tokens.linkColorVisited}: var(--text-tertiary);
                ${tokens.linkColorVisitedHover}: var(--text-tertiary-hover);
                ${tokens.linkColorVisitedActive}: var(--text-tertiary-active);
                ${tokens.linkUnderlineBorder}: 0;
            `,
            paragraph: css`
                ${tokens.linkColor}: var(--text-paragraph);
                ${tokens.linkColorHover}: var(--text-paragraph-hover);
                ${tokens.linkColorActive}: var(--text-paragraph-active);
                ${tokens.linkColorVisited}: var(--text-paragraph);
                ${tokens.linkColorVisitedHover}: var(--text-paragraph-hover);
                ${tokens.linkColorVisitedActive}: var(--text-paragraph-active);
                ${tokens.linkUnderlineBorder}: 0;
            `,
            accent: css`
                ${tokens.linkColor}: var(--text-accent);
                ${tokens.linkColorHover}: var(--text-accent-hover);
                ${tokens.linkColorActive}: var(--text-accent-active);
                ${tokens.linkColorVisited}: var(--text-accent);
                ${tokens.linkColorVisitedHover}: var(--text-accent-hover);
                ${tokens.linkColorVisitedActive}: var(--text-accent-active);
                ${tokens.linkUnderlineBorder}: 0;
            `,
            positive: css`
                ${tokens.linkColor}: var(--text-positive);
                ${tokens.linkColorHover}: var(--text-positive-hover);
                ${tokens.linkColorActive}: var(--text-positive-active);
                ${tokens.linkColorVisited}: var(--text-positive);
                ${tokens.linkColorVisitedHover}: var(--text-positive-hover);
                ${tokens.linkColorVisitedActive}: var(--text-positive-active);
                ${tokens.linkUnderlineBorder}: 0;
            `,
            warning: css`
                ${tokens.linkColor}: var(--text-warning);
                ${tokens.linkColorHover}: var(--text-warning-hover);
                ${tokens.linkColorActive}: var(--text-warning-active);
                ${tokens.linkColorVisited}: var(--text-warning);
                ${tokens.linkColorVisitedHover}: var(--text-warning-hover);
                ${tokens.linkColorVisitedActive}: var(--text-warning-active);
                ${tokens.linkUnderlineBorder}: 0;
            `,
            negative: css`
                ${tokens.linkColor}: var(--text-negative);
                ${tokens.linkColorHover}: var(--text-negative-hover);
                ${tokens.linkColorActive}: var(--text-negative-active);
                ${tokens.linkColorVisited}: var(--text-negative);
                ${tokens.linkColorVisitedHover}: var(--text-negative-hover);
                ${tokens.linkColorVisitedActive}: var(--text-negative-active);
                ${tokens.linkUnderlineBorder}: 0;
            `,
            clear: css`
                ${tokens.linkColor}:inherit;
                ${tokens.linkColorHover}: inherit;
                ${tokens.linkColorActive}: inherit;
                ${tokens.linkColorVisited}: inherit;
                ${tokens.linkColorVisitedHover}: inherit;
                ${tokens.linkColorVisitedActive}: inherit;
                ${tokens.linkUnderlineBorder}: 0.0625rem;
            `,
        },
        size: {
            l: css`
                ${tokens.linkFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.linkFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.linkFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.linkFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.linkLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.linkLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            m: css`
                ${tokens.linkFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.linkFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.linkFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.linkFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.linkLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.linkLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            s: css`
                ${tokens.linkFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.linkFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.linkFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.linkFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.linkLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.linkLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            xs: css`
                ${tokens.linkFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.linkFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.linkFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.linkFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.linkLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.linkLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            xxs: css`
                ${tokens.linkFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${tokens.linkFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${tokens.linkFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${tokens.linkFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${tokens.linkLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${tokens.linkLineHeight}: var(--plasma-typo-body-xxs-line-height);
            `,
            h1: css`
                ${tokens.linkFontFamily}: var(--plasma-typo-h1-font-family);
                ${tokens.linkFontSize}: var(--plasma-typo-h1-font-size);
                ${tokens.linkFontStyle}: var(--plasma-typo-h1-font-style);
                ${tokens.linkFontWeight}: var(--plasma-typo-h1-font-weight);
                ${tokens.linkLetterSpacing}: var(--plasma-typo-h1-letter-spacing);
                ${tokens.linkLineHeight}: var(--plasma-typo-h1-line-height);
            `,
            h2: css`
                ${tokens.linkFontFamily}: var(--plasma-typo-h2-font-family);
                ${tokens.linkFontSize}: var(--plasma-typo-h2-font-size);
                ${tokens.linkFontStyle}: var(--plasma-typo-h2-font-style);
                ${tokens.linkFontWeight}: var(--plasma-typo-h2-font-weight);
                ${tokens.linkLetterSpacing}: var(--plasma-typo-h2-letter-spacing);
                ${tokens.linkLineHeight}: var(--plasma-typo-h2-line-height);
            `,
            h3: css`
                ${tokens.linkFontFamily}: var(--plasma-typo-h3-font-family);
                ${tokens.linkFontSize}: var(--plasma-typo-h3-font-size);
                ${tokens.linkFontStyle}: var(--plasma-typo-h3-font-style);
                ${tokens.linkFontWeight}: var(--plasma-typo-h3-font-weight);
                ${tokens.linkLetterSpacing}: var(--plasma-typo-h3-letter-spacing);
                ${tokens.linkLineHeight}: var(--plasma-typo-h3-line-height);
            `,
            h4: css`
                ${tokens.linkFontFamily}: var(--plasma-typo-h4-font-family);
                ${tokens.linkFontSize}: var(--plasma-typo-h4-font-size);
                ${tokens.linkFontStyle}: var(--plasma-typo-h4-font-style);
                ${tokens.linkFontWeight}: var(--plasma-typo-h4-font-weight);
                ${tokens.linkLetterSpacing}: var(--plasma-typo-h4-letter-spacing);
                ${tokens.linkLineHeight}: var(--plasma-typo-h4-line-height);
            `,
            h5: css`
                ${tokens.linkFontFamily}: var(--plasma-typo-h5-font-family);
                ${tokens.linkFontSize}: var(--plasma-typo-h5-font-size);
                ${tokens.linkFontStyle}: var(--plasma-typo-h5-font-style);
                ${tokens.linkFontWeight}: var(--plasma-typo-h5-font-weight);
                ${tokens.linkLetterSpacing}: var(--plasma-typo-h5-letter-spacing);
                ${tokens.linkLineHeight}: var(--plasma-typo-h5-line-height);
            `,
            displayL: css`
                ${tokens.linkFontFamily}: var(--plasma-typo-dspl-l-font-family);
                ${tokens.linkFontSize}: var(--plasma-typo-dspl-l-font-size);
                ${tokens.linkFontStyle}: var(--plasma-typo-dspl-l-font-style);
                ${tokens.linkFontWeight}: var(--plasma-typo-dspl-l-font-weight);
                ${tokens.linkLetterSpacing}: var(--plasma-typo-dspl-l-letter-spacing);
                ${tokens.linkLineHeight}: var(--plasma-typo-dspl-l-line-height);
            `,
            displayM: css`
                ${tokens.linkFontFamily}: var(--plasma-typo-dspl-m-font-family);
                ${tokens.linkFontSize}: var(--plasma-typo-dspl-m-font-size);
                ${tokens.linkFontStyle}: var(--plasma-typo-dspl-m-font-style);
                ${tokens.linkFontWeight}: var(--plasma-typo-dspl-m-font-weight);
                ${tokens.linkLetterSpacing}: var(--plasma-typo-dspl-m-letter-spacing);
                ${tokens.linkLineHeight}: var(--plasma-typo-dspl-m-line-height);
            `,
            displayS: css`
                ${tokens.linkFontFamily}: var(--plasma-typo-dspl-s-font-family);
                ${tokens.linkFontSize}: var(--plasma-typo-dspl-s-font-size);
                ${tokens.linkFontStyle}: var(--plasma-typo-dspl-s-font-style);
                ${tokens.linkFontWeight}: var(--plasma-typo-dspl-s-font-weight);
                ${tokens.linkLetterSpacing}: var(--plasma-typo-dspl-s-letter-spacing);
                ${tokens.linkLineHeight}: var(--plasma-typo-dspl-s-line-height);
            `,
            textL: css`
                ${tokens.linkFontFamily}: var(--plasma-typo-text-l-font-family);
                ${tokens.linkFontSize}: var(--plasma-typo-text-l-font-size);
                ${tokens.linkFontStyle}: var(--plasma-typo-text-l-font-style);
                ${tokens.linkFontWeight}: var(--plasma-typo-text-l-font-weight);
                ${tokens.linkLetterSpacing}: var(--plasma-typo-text-l-letter-spacing);
                ${tokens.linkLineHeight}: var(--plasma-typo-text-l-line-height);
            `,
            textM: css`
                ${tokens.linkFontFamily}: var(--plasma-typo-text-m-font-family);
                ${tokens.linkFontSize}: var(--plasma-typo-text-m-font-size);
                ${tokens.linkFontStyle}: var(--plasma-typo-text-m-font-style);
                ${tokens.linkFontWeight}: var(--plasma-typo-text-m-font-weight);
                ${tokens.linkLetterSpacing}: var(--plasma-typo-text-m-letter-spacing);
                ${tokens.linkLineHeight}: var(--plasma-typo-text-m-line-height);
            `,
            textS: css`
                ${tokens.linkFontFamily}: var(--plasma-typo-text-s-font-family);
                ${tokens.linkFontSize}: var(--plasma-typo-text-s-font-size);
                ${tokens.linkFontStyle}: var(--plasma-typo-text-s-font-style);
                ${tokens.linkFontWeight}: var(--plasma-typo-text-s-font-weight);
                ${tokens.linkLetterSpacing}: var(--plasma-typo-text-s-letter-spacing);
                ${tokens.linkLineHeight}: var(--plasma-typo-text-s-line-height);
            `,
            textXs: css`
                ${tokens.linkFontFamily}: var(--plasma-typo-text-xs-font-family);
                ${tokens.linkFontSize}: var(--plasma-typo-text-xs-font-size);
                ${tokens.linkFontStyle}: var(--plasma-typo-text-xs-font-style);
                ${tokens.linkFontWeight}: var(--plasma-typo-text-xs-font-weight);
                ${tokens.linkLetterSpacing}: var(--plasma-typo-text-xs-letter-spacing);
                ${tokens.linkLineHeight}: var(--plasma-typo-text-xs-line-height);
            `,
        },
        disabled: {
            true: css`
                ${tokens.linkDisabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${tokens.linkColorFocus}: var(--text-accent);
            `,
        },
    },
};
