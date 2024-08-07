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
                ${chipTokens.color}: var(--inverse-text-primary);
                ${chipTokens.background}: var(--surface-solid-default);
                ${chipTokens.colorHover}: var(--inverse-text-primary);
                ${chipTokens.backgroundHover}: var(--surface-solid-default);
                ${chipTokens.colorActive}: var(--inverse-text-primary);
                ${chipTokens.backgroundActive}: var(--surface-solid-default);
                ${chipTokens.backgroundReadOnly}: var(--surface-solid-default);
                ${chipTokens.colorReadOnly}: var(--inverse-text-primary);
                ${chipTokens.backgroundReadOnlyHover}: var(--surface-solid-default);
                ${chipTokens.colorReadOnlyHover}: var(--inverse-text-primary);
            `,
            secondary: css`
                ${chipTokens.color}: var(--text-primary);
                ${chipTokens.background}: var(--surface-solid-primary);
                ${chipTokens.colorHover}: var(--text-primary);
                ${chipTokens.backgroundHover}: var(--surface-solid-primary);
                ${chipTokens.colorActive}: var(--text-primary);
                ${chipTokens.backgroundActive}: var(--surface-solid-primary);
                ${chipTokens.backgroundReadOnly}: var(--surface-solid-primary);
                ${chipTokens.colorReadOnly}: var(--text-primary);
                ${chipTokens.backgroundReadOnlyHover}: var(--surface-solid-primary);
                ${chipTokens.colorReadOnlyHover}: var(--text-primary);
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
            `,
        },
        size: {
            s: css`
                ${chipTokens.borderRadius}: 0.5rem;
                ${chipTokens.pilledBorderRadius}: 1rem;
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

                ${chipTokens.leftContentMarginLeft}: -0.25rem;
                ${chipTokens.leftContentMarginRight}: 0.25rem;
                ${chipTokens.clearContentMarginLeft}: 0.5rem;
                ${chipTokens.clearContentMarginRight}: -0.5rem;

                ${chipTokens.scaleHover}: 1.02;
                ${chipTokens.scaleActive}: 0.98;

                ${chipTokens.closeIconSize}: 1.5rem;
            `,
        },
        disabled: {
            true: css`
                ${chipTokens.disabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${chipTokens.focusColor}: var(--text-accent);
            `,
        },
        pilled: {
            true: css``,
        },
    },
};
