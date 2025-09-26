import { css } from '@linaria/core';

import { chipTokens } from '../../../components/Chip';

export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${chipTokens.color}: var(--text-primary);
                ${chipTokens.background}: var(--surface-transparent-secondary);
                ${chipTokens.colorHover}: var(--text-primary-hover);
                ${chipTokens.backgroundHover}: var(--surface-transparent-secondary-hover);
                ${chipTokens.colorActive}: var(--text-primary-active);
                ${chipTokens.backgroundActive}: var(--surface-transparent-secondary-active);
                ${chipTokens.backgroundReadOnly}: var(--surface-transparent-secondary);
                ${chipTokens.colorReadOnly}: var(--text-primary);
                ${chipTokens.backgroundReadOnlyHover}: var(--surface-transparent-secondary);
                ${chipTokens.colorReadOnlyHover}: var(--text-primary);
            `,
            secondary: css`
                ${chipTokens.color}: var(--text-primary);
                ${chipTokens.background}: var(--surface-transparent-secondary);
                ${chipTokens.colorHover}: var(--text-primary-hover);
                ${chipTokens.backgroundHover}: var(--surface-transparent-secondary-hover);
                ${chipTokens.colorActive}: var(--text-primary-active);
                ${chipTokens.backgroundActive}: var(--surface-transparent-secondary-active);
                ${chipTokens.backgroundReadOnly}: var(--surface-transparent-secondary);
                ${chipTokens.colorReadOnly}: var(--text-primary);
                ${chipTokens.backgroundReadOnlyHover}: var(--surface-transparent-secondary);
                ${chipTokens.colorReadOnlyHover}: var(--text-primary);
            `,
            accent: css`
                ${chipTokens.color}: var(--text-accent);
                ${chipTokens.background}: var(--surface-transparent-accent);
                ${chipTokens.colorHover}: var(--text-accent);
                ${chipTokens.backgroundHover}: var(--surface-transparent-accent-hover);
                ${chipTokens.colorActive}: var(--text-accent);
                ${chipTokens.backgroundActive}: var(--surface-transparent-accent-active);
                ${chipTokens.backgroundReadOnly}: var(--surface-transparent-accent);
                ${chipTokens.colorReadOnly}: var(--text-accent);
                ${chipTokens.backgroundReadOnlyHover}: var(--surface-transparent-accent);
                ${chipTokens.colorReadOnlyHover}: var(--text-accent);
            `,
            positive: css`
                ${chipTokens.color}: var(--text-positive);
                ${chipTokens.background}: var(--surface-transparent-positive);
                ${chipTokens.colorHover}: var(--text-positive);
                ${chipTokens.backgroundHover}: var(--surface-transparent-positive-hover);
                ${chipTokens.colorActive}: var(--text-positive);
                ${chipTokens.backgroundActive}: var(--surface-transparent-positive-active);
                ${chipTokens.backgroundReadOnly}: var(--surface-transparent-positive);
                ${chipTokens.colorReadOnly}: var(--text-positive);
                ${chipTokens.backgroundReadOnlyHover}: var(--surface-transparent-positive);
                ${chipTokens.colorReadOnlyHover}: var(--text-positive);
            `,
            warning: css`
                ${chipTokens.color}: var(--text-warning);
                ${chipTokens.background}: var(--surface-transparent-warning);
                ${chipTokens.colorHover}: var(--text-warning);
                ${chipTokens.backgroundHover}: var(--surface-transparent-warning-hover);
                ${chipTokens.colorActive}: var(--text-warning);
                ${chipTokens.backgroundActive}: var(--surface-transparent-warning-active);
                ${chipTokens.backgroundReadOnly}: var(--surface-transparent-warning);
                ${chipTokens.colorReadOnly}: var(--text-warning);
                ${chipTokens.backgroundReadOnlyHover}: var(--surface-transparent-warning);
                ${chipTokens.colorReadOnlyHover}: var(--text-warning);
            `,
            negative: css`
                ${chipTokens.color}: var(--text-negative);
                ${chipTokens.background}: var(--surface-transparent-negative);
                ${chipTokens.colorHover}: var(--text-negative);
                ${chipTokens.backgroundHover}: var(--surface-transparent-negative-hover);
                ${chipTokens.colorActive}: var(--text-negative);
                ${chipTokens.backgroundActive}: var(--surface-transparent-negative-active);
                ${chipTokens.backgroundReadOnly}: var(--surface-transparent-negative);
                ${chipTokens.colorReadOnly}: var(--text-negative);
                ${chipTokens.backgroundReadOnlyHover}: var(--surface-transparent-negative);
                ${chipTokens.colorReadOnlyHover}: var(--text-negative);
            `,
        },
        size: {
            l: css`
                ${chipTokens.borderRadius}: 0.75rem;
                ${chipTokens.pilledBorderRadius}: 1.5rem;
                ${chipTokens.width}: auto;
                ${chipTokens.height}: 3rem;
                ${chipTokens.padding}: 0 1rem;

                ${chipTokens.fontFamily}: var(--plasma-typo-body-l-font-family);
                ${chipTokens.fontSize}: var(--plasma-typo-body-l-font-size);
                ${chipTokens.fontStyle}: var(--plasma-typo-body-l-font-style);
                ${chipTokens.fontWeight}: var(--plasma-typo-body-l-font-weight);
                ${chipTokens.letterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${chipTokens.lineHeight}: var(--plasma-typo-body-l-line-height);

                ${chipTokens.leftContentMarginLeft}: -0.125rem;
                ${chipTokens.leftContentMarginRight}: 0.5rem;
                ${chipTokens.rightContentMarginLeft}: 0.5rem;
                ${chipTokens.rightContentMarginRight}: -0.125rem;
                ${chipTokens.clearContentMarginLeft}: 0.625rem;
                ${chipTokens.clearContentMarginRight}: -0.25rem;
                ${chipTokens.closeIconSize}: 1.5rem;
            `,
            m: css`
                ${chipTokens.borderRadius}: 0.625rem;
                ${chipTokens.pilledBorderRadius}: 1.25rem;
                ${chipTokens.width}: auto;
                ${chipTokens.height}: 2.5rem;
                ${chipTokens.padding}: 0 0.875rem;

                ${chipTokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${chipTokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${chipTokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${chipTokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                ${chipTokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${chipTokens.lineHeight}: var(--plasma-typo-body-m-line-height);

                ${chipTokens.leftContentMarginLeft}: -0.125rem;
                ${chipTokens.leftContentMarginRight}: 0.375rem;
                ${chipTokens.rightContentMarginLeft}: 0.375rem;
                ${chipTokens.rightContentMarginRight}: -0.125rem;
                ${chipTokens.clearContentMarginLeft}: 0.5rem;
                ${chipTokens.clearContentMarginRight}: -0.25rem;
                ${chipTokens.closeIconSize}: 1rem;
            `,
            s: css`
                ${chipTokens.borderRadius}: 0.5rem;
                ${chipTokens.pilledBorderRadius}: 1rem;
                ${chipTokens.width}: auto;
                ${chipTokens.height}: 2rem;
                ${chipTokens.padding}: 0 0.875rem;

                ${chipTokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${chipTokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${chipTokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${chipTokens.fontWeight}: var(--plasma-typo-body-s-font-weight);
                ${chipTokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${chipTokens.lineHeight}: var(--plasma-typo-body-s-line-height);

                ${chipTokens.leftContentMarginLeft}: -0.125rem;
                ${chipTokens.leftContentMarginRight}: 0.25rem;
                ${chipTokens.rightContentMarginLeft}: 0.25rem;
                ${chipTokens.rightContentMarginRight}: -0.125rem;
                ${chipTokens.clearContentMarginLeft}: 0.375rem;
                ${chipTokens.clearContentMarginRight}: -0.25rem;
                ${chipTokens.closeIconSize}: 1rem;
            `,
            xs: css`
                ${chipTokens.borderRadius}: 0.375rem;
                ${chipTokens.pilledBorderRadius}: 0.75rem;
                ${chipTokens.width}: auto;
                ${chipTokens.height}: 1.5rem;
                ${chipTokens.padding}: 0 0.625rem;

                ${chipTokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                ${chipTokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                ${chipTokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                ${chipTokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${chipTokens.letterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${chipTokens.lineHeight}: var(--plasma-typo-body-xs-line-height);

                ${chipTokens.leftContentMarginLeft}: -0.125rem;
                ${chipTokens.leftContentMarginRight}: 0.25rem;
                ${chipTokens.rightContentMarginLeft}: 0.25rem;
                ${chipTokens.rightContentMarginRight}: -0.125rem;
                ${chipTokens.clearContentMarginLeft}: 0.25rem;
                ${chipTokens.clearContentMarginRight}: -0.25rem;
                ${chipTokens.closeIconSize}: 0.75rem;
            `,
            xxs: css`
                ${chipTokens.borderRadius}: 0.375rem;
                ${chipTokens.pilledBorderRadius}: 0.625rem;
                ${chipTokens.width}: auto;
                ${chipTokens.height}: 1.25rem;
                ${chipTokens.padding}: 0 0.5rem;

                ${chipTokens.fontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${chipTokens.fontSize}: var(--plasma-typo-body-xxs-font-size);
                ${chipTokens.fontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${chipTokens.fontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${chipTokens.letterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${chipTokens.lineHeight}: var(--plasma-typo-body-xxs-line-height);

                ${chipTokens.leftContentMarginLeft}: -0.125rem;
                ${chipTokens.leftContentMarginRight}: 0.125rem;
                ${chipTokens.rightContentMarginLeft}: 0.125rem;
                ${chipTokens.rightContentMarginRight}: -0.125rem;
                ${chipTokens.clearContentMarginLeft}: 0.25rem;
                ${chipTokens.clearContentMarginRight}: -0.25rem;
                ${chipTokens.closeIconSize}: 0.75rem;
            `,
        },
        disabled: {
            true: css`
                ${chipTokens.disabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${chipTokens.focusColor}: var(--surface-accent);
            `,
        },
        pilled: {
            true: css``,
        },
    },
};
