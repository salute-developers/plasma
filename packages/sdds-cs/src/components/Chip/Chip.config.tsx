import { css, chipTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${chipTokens.color}: var(--text-primary);
                ${chipTokens.background}: var(--surface-solid-card);
                ${chipTokens.colorHover}: var(--text-primary);
                ${chipTokens.backgroundHover}: var(--surface-solid-card);
                ${chipTokens.colorActive}: var(--text-primary);
                ${chipTokens.backgroundActive}: var(--surface-solid-card);
                ${chipTokens.backgroundReadOnly}: var(--surface-solid-card);
                ${chipTokens.colorReadOnly}: var(--text-primary);
                ${chipTokens.backgroundReadOnlyHover}: var(--surface-solid-card);
                ${chipTokens.colorReadOnlyHover}: var(--text-primary);
                ${chipTokens.closeIconColor}: var(--text-accent);
                ${chipTokens.leftContentColor}: var(--text-accent);
            `,
            secondary: css`
                ${chipTokens.color}: var(--text-primary);
                ${chipTokens.background}: var(--surface-solid-secondary);
                ${chipTokens.colorHover}: var(--text-primary);
                ${chipTokens.backgroundHover}: var(--surface-solid-secondary);
                ${chipTokens.colorActive}: var(--text-primary);
                ${chipTokens.backgroundActive}: var(--surface-solid-secondary);
                ${chipTokens.backgroundReadOnly}: var(--surface-solid-primary);
                ${chipTokens.colorReadOnly}: var(--text-primary);
                ${chipTokens.backgroundReadOnlyHover}: var(--surface-solid-primary);
                ${chipTokens.colorReadOnlyHover}: var(--text-primary);
                ${chipTokens.closeIconColor}: var(--text-accent);
                ${chipTokens.leftContentColor}: var(--text-accent);
            `,
            accent: css`
                ${chipTokens.color}: var(--on-dark-text-primary);
                ${chipTokens.background}: var(--surface-accent);
                ${chipTokens.colorHover}: var(--on-dark-text-primary);
                ${chipTokens.backgroundHover}: var(--surface-accent);
                ${chipTokens.colorActive}: var(--on-dark-text-primary);
                ${chipTokens.backgroundActive}: var(--surface-accent);
                ${chipTokens.backgroundReadOnly}: var(--surface-accent);
                ${chipTokens.colorReadOnly}: var(--on-dark-text-primary);
                ${chipTokens.backgroundReadOnlyHover}: var(--surface-accent);
                ${chipTokens.colorReadOnlyHover}: var(--on-dark-text-primary);

                ${chipTokens.closeIconColor}: var(--on-dark-text-primary);
                ${chipTokens.leftContentColor}: var(--on-dark-text-primary);
            `,
        },
        size: {
            s: css`
                ${chipTokens.borderRadius}: 0.625rem;
                ${chipTokens.pilledBorderRadius}: 1rem;
                ${chipTokens.width}: auto;
                ${chipTokens.height}: 2.5rem;
                ${chipTokens.padding}: 0 1rem;

                ${chipTokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${chipTokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${chipTokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${chipTokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                ${chipTokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${chipTokens.lineHeight}: var(--plasma-typo-body-m-line-height);

                ${chipTokens.leftContentMarginLeft}: -0.25rem;
                ${chipTokens.leftContentMarginRight}: 0.25rem;
                ${chipTokens.clearContentMarginLeft}: 0.5rem;
                ${chipTokens.clearContentMarginRight}: -0.5rem;

                ${chipTokens.scaleHover}: 1.02;
                ${chipTokens.scaleActive}: 0.98;

                ${chipTokens.closeIconSize}: 1.5rem;
            `,
            xs: css`
                ${chipTokens.borderRadius}: 0.38rem;
                ${chipTokens.pilledBorderRadius}: 0.75rem;
                ${chipTokens.width}: auto;
                ${chipTokens.height}: 1.5rem;
                ${chipTokens.padding}: 0.125rem 0.5rem;

                ${chipTokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${chipTokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${chipTokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${chipTokens.fontWeight}: var(--plasma-typo-body-s-font-weight);
                ${chipTokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${chipTokens.lineHeight}: var(--plasma-typo-body-s-line-height);

                ${chipTokens.leftContentMarginLeft}: 0;
                ${chipTokens.leftContentMarginRight}: 0.25rem;
                ${chipTokens.clearContentMarginLeft}: 0.25rem;
                ${chipTokens.clearContentMarginRight}: -0.25rem;

                ${chipTokens.scaleHover}: 1.02;
                ${chipTokens.scaleActive}: 0.98;

                ${chipTokens.closeIconSize}: 1rem;
            `,
        },
        focused: {
            true: css`
                ${chipTokens.focusColor}: var(--text-accent);
            `,
        },
    },
};
