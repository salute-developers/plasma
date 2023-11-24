import { css } from '@linaria/core';

import { chipTokens } from '../../../../components/Chip';

export const config = {
    defaults: {
        view: 'primary',
        size: 'm',
    },
    variations: {
        view: {
            primary: css`
                ${chipTokens.color}: var(--text-primary);
                ${chipTokens.background}: var(--surface-transparent-secondary);
                ${chipTokens.colorHover}: var(--text-primary);
                ${chipTokens.backgroundHover}: rgba(12, 143, 230, 0.11);
                ${chipTokens.colorActive}: var(--text-primary);
                ${chipTokens.backgroundActive}: rgba(12, 143, 230, 0.11);
            `,
        },
        size: {
            m: css`
                ${chipTokens.borderRadius}: 2.5rem;
                ${chipTokens.width}: auto;
                ${chipTokens.height}: 2.5rem;
                ${chipTokens.paddingRight}: 1rem;
                ${chipTokens.paddingLeft}: 1rem;

                ${chipTokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${chipTokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${chipTokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${chipTokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                ${chipTokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${chipTokens.lineHeight}: var(--plasma-typo-body-m-line-height);

                ${chipTokens.clearContentMarginLeft}: 0.5rem;
                ${chipTokens.clearContentMarginRight}: -0.25rem;

                ${chipTokens.closeIconSize}: 1rem;
            `,
            s: css`
                ${chipTokens.borderRadius}: 2.5rem;
                ${chipTokens.width}: auto;
                ${chipTokens.height}: 1.75rem;
                ${chipTokens.paddingRight}: 0.75rem;
                ${chipTokens.paddingLeft}: 0.75rem;

                ${chipTokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${chipTokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${chipTokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${chipTokens.fontWeight}: var(--plasma-typo-body-s-font-weight);
                ${chipTokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${chipTokens.lineHeight}: var(--plasma-typo-body-s-line-height);

                ${chipTokens.clearContentMarginLeft}: 0.5rem;
                ${chipTokens.clearContentMarginRight}: -0.25rem;

                ${chipTokens.closeIconSize}: 1rem;
            `,
            xs: css`
                ${chipTokens.borderRadius}: 2.5rem;
                ${chipTokens.width}: auto;
                ${chipTokens.height}: 1.25rem;
                ${chipTokens.paddingRight}: 0.625rem;
                ${chipTokens.paddingLeft}: 0.625rem;

                ${chipTokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                ${chipTokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                ${chipTokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                ${chipTokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${chipTokens.letterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${chipTokens.lineHeight}: var(--plasma-typo-body-xs-line-height);

                ${chipTokens.clearContentMarginLeft}: 0.25rem;
                ${chipTokens.clearContentMarginRight}: -0.125rem;

                ${chipTokens.closeIconSize}: 1rem;
            `,
            xxs: css`
                ${chipTokens.borderRadius}: 0.375rem;
                ${chipTokens.width}: auto;
                ${chipTokens.height}: 0.875rem;
                ${chipTokens.paddingRight}: 0.5rem;
                ${chipTokens.paddingLeft}: 0.5rem;

                ${chipTokens.fontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${chipTokens.fontSize}: var(--plasma-typo-body-xxs-font-size);
                ${chipTokens.fontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${chipTokens.fontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${chipTokens.letterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${chipTokens.lineHeight}: var(--plasma-typo-body-xxs-line-height);

                ${chipTokens.clearContentMarginLeft}: 0.25rem;
                ${chipTokens.clearContentMarginRight}: -0.125rem;

                ${chipTokens.closeIconSize}: 1rem;
            `,
        },
        readOnly: {
            true: css`
                ${chipTokens.color}: var(--text-accent);
                ${chipTokens.background}: var(--surface-transparent-secondary);
                ${chipTokens.colorHover}: var(--text-accent);
                ${chipTokens.backgroundHover}: rgba(12, 143, 230, 0.11);
                ${chipTokens.backgroundReadOnly}: var(--surface-transparent-secondary);
                ${chipTokens.colorReadOnly}: var(--text-accent);
                ${chipTokens.backgroundReadOnlyHover}: rgba(12, 143, 230, 0.11);
                ${chipTokens.colorReadOnlyHover}: var(--text-accent);
            `,
        },
    },
};
