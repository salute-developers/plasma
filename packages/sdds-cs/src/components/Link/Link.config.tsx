import { css, linkTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
    },
    variations: {
        view: {
            default: css`
                ${tokens.linkFontFamily}: var(--plasma-typo-text-m-font-family);
                ${tokens.linkColor}: var(--text-primary);
                ${tokens.linkColorHover}: var(--text-primary-hover);
                ${tokens.linkColorActive}: var(--text-primary-active);
                ${tokens.linkColorVisited}: var(--text-primary);
                ${tokens.linkColorVisitedHover}: var(--text-primary-hover);
                ${tokens.linkColorVisitedActive}: var(--text-primary-active);
                ${tokens.linkUnderlineBorder}: 0;
            `,
            secondary: css`
                ${tokens.linkFontFamily}: var(--plasma-typo-text-m-font-family);
                ${tokens.linkColor}: var(--text-secondary);
                ${tokens.linkColorHover}: var(--text-secondary-hover);
                ${tokens.linkColorActive}: var(--text-secondary-active);
                ${tokens.linkColorVisited}: var(--text-secondary);
                ${tokens.linkColorVisitedHover}: var(--text-secondary-hover);
                ${tokens.linkColorVisitedActive}: var(--text-secondary-active);
                ${tokens.linkUnderlineBorder}: 0;
            `,
            tertiary: css`
                ${tokens.linkFontFamily}: var(--plasma-typo-text-m-font-family);
                ${tokens.linkColor}: var(--text-tertiary);
                ${tokens.linkColorHover}: var(--text-tertiary-hover);
                ${tokens.linkColorActive}: var(--text-tertiary-active);
                ${tokens.linkColorVisited}: var(--text-tertiary);
                ${tokens.linkColorVisitedHover}: var(--text-tertiary-hover);
                ${tokens.linkColorVisitedActive}: var(--text-tertiary-active);
                ${tokens.linkUnderlineBorder}: 0;
            `,
            paragraph: css`
                ${tokens.linkFontFamily}: var(--plasma-typo-text-m-font-family);
                ${tokens.linkColor}: var(--text-paragraph);
                ${tokens.linkColorHover}: var(--text-paragraph-hover);
                ${tokens.linkColorActive}: var(--text-paragraph-active);
                ${tokens.linkColorVisited}: var(--text-paragraph);
                ${tokens.linkColorVisitedHover}: var(--text-paragraph-hover);
                ${tokens.linkColorVisitedActive}: var(--text-paragraph-active);
                ${tokens.linkUnderlineBorder}: 0;
            `,
            accent: css`
                ${tokens.linkFontFamily}: var(--plasma-typo-text-m-font-family);
                ${tokens.linkColor}: var(--text-accent);
                ${tokens.linkColorHover}: var(--text-accent-minor);
                ${tokens.linkColorActive}: var(--text-accent-active);
                ${tokens.linkColorVisited}: var(--text-accent);
                ${tokens.linkColorVisitedHover}: var(--text-accent-minor);
                ${tokens.linkColorVisitedActive}: var(--text-accent-active);
                ${tokens.linkUnderlineBorder}: 0;
            `,
            positive: css`
                ${tokens.linkFontFamily}: var(--plasma-typo-text-m-font-family);
                ${tokens.linkColor}: var(--text-positive);
                ${tokens.linkColorHover}: var(--text-positive-hover);
                ${tokens.linkColorActive}: var(--text-positive-active);
                ${tokens.linkColorVisited}: var(--text-positive);
                ${tokens.linkColorVisitedHover}: var(--text-positive-hover);
                ${tokens.linkColorVisitedActive}: var(--text-positive-active);
                ${tokens.linkUnderlineBorder}: 0;
            `,
            warning: css`
                ${tokens.linkFontFamily}: var(--plasma-typo-text-m-font-family);
                ${tokens.linkColor}: var(--text-warning);
                ${tokens.linkColorHover}: var(--text-warning-hover);
                ${tokens.linkColorActive}: var(--text-warning-active);
                ${tokens.linkColorVisited}: var(--text-warning);
                ${tokens.linkColorVisitedHover}: var(--text-warning-hover);
                ${tokens.linkColorVisitedActive}: var(--text-warning-active);
                ${tokens.linkUnderlineBorder}: 0;
            `,
            negative: css`
                ${tokens.linkFontFamily}: var(--plasma-typo-text-m-font-family);
                ${tokens.linkColor}: var(--text-negative);
                ${tokens.linkColorHover}: var(--text-negative-hover);
                ${tokens.linkColorActive}: var(--text-negative-active);
                ${tokens.linkColorVisited}: var(--text-negative);
                ${tokens.linkColorVisitedHover}: var(--text-negative-hover);
                ${tokens.linkColorVisitedActive}: var(--text-negative-active);
                ${tokens.linkUnderlineBorder}: 0;
            `,
            clear: css`
                ${tokens.linkFontFamily}: var(--plasma-typo-text-m-font-family);
                ${tokens.linkColor}:inherit;
                ${tokens.linkColorHover}: inherit;
                ${tokens.linkColorActive}: inherit;
                ${tokens.linkColorVisited}: inherit;
                ${tokens.linkColorVisitedHover}: inherit;
                ${tokens.linkColorVisitedActive}: inherit;
                ${tokens.linkUnderlineBorder}: 0.063rem;
            `,
        },
        disabled: {
            true: css`
                ${tokens.linkDisabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${tokens.linkColorFocus}: var(--text-primary);
            `,
        },
    },
};
