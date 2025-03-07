import { css, treeTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.iconFolderColor}: var(--text-secondary);
                ${tokens.arrowColor}: var(--text-secondary);
                ${tokens.arrowColorHover}: var(--text-secondary-hover);
                ${tokens.arrowColorActive}: var(--text-secondary-active);
                ${tokens.color}: var(--text-secondary);
                ${tokens.colorSelected}: var(--text-primary);
                ${tokens.itemBackgroundColor}: var(--surface-transparent-secondary);
                ${tokens.itemBackgroundColorHover}: var(--surface-transparent-secondary-hover);
                ${tokens.itemBackgroundColorActive}: var(--surface-transparent-secondary-active);
                ${tokens.checkboxBorderColor}: var(--text-secondary);
                ${tokens.checkboxBackgroundColor}: var(--text-accent);
                ${tokens.itemDisabledOpacity}: 0.4;
            `,
        },
        size: {
            l: css`
                ${tokens.itemHeight}: 3.5rem;
                ${tokens.itemPadding}: 1rem;
                ${tokens.itemPaddingTight}: 0.375rem;
                ${tokens.itemIndent}: 2rem;
                ${tokens.itemBorderRadius}: 0.75rem;
                ${tokens.itemTop}: 0.25rem;
                ${tokens.itemBottom}: 0.25rem;
                ${tokens.iconFolderMargin}: 0 0.5rem 0 0;
                ${tokens.switcherMargin}: 0 0.5rem 0 0;
                ${tokens.switcherSize}: 1.5rem;
                ${tokens.checkboxMargin}: 0 0.5rem 0 0;
                ${tokens.checkboxSize}: 1.5rem;
                ${tokens.checkboxInnerSize}: 1.25rem;
                ${tokens.checkboxBorderRadius}: 0.375rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            m: css`
                ${tokens.itemHeight}: 3rem;
                ${tokens.itemPadding}: 0.875rem;
                ${tokens.itemPaddingTight}: 0.375rem;
                ${tokens.itemIndent}: 2rem;
                ${tokens.itemBorderRadius}: 0.625rem;
                ${tokens.itemTop}: 0.25rem;
                ${tokens.itemBottom}: 0.25rem;
                ${tokens.iconFolderMargin}: 0 0.5rem 0 0;
                ${tokens.switcherMargin}: 0 0.5rem 0 0;
                ${tokens.switcherSize}: 1.5rem;
                ${tokens.checkboxMargin}: 0 0.5rem 0 0;
                ${tokens.checkboxSize}: 1.5rem;
                ${tokens.checkboxInnerSize}: 1.25rem;
                ${tokens.checkboxBorderRadius}: 0.375rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            s: css`
                ${tokens.itemHeight}: 2.5rem;
                ${tokens.itemPadding}: 0.75rem;
                ${tokens.itemPaddingTight}: 0.25rem;
                ${tokens.itemIndent}: 1.875rem;
                ${tokens.itemBorderRadius}: 0.5rem;
                ${tokens.itemTop}: 0.25rem;
                ${tokens.itemBottom}: 0.25rem;
                ${tokens.iconFolderMargin}: 0 0.375rem 0 0;
                ${tokens.switcherMargin}: 0 0.375rem 0 0;
                ${tokens.switcherSize}: 1.5rem;
                ${tokens.checkboxMargin}: 0 0.25rem 0 0;
                ${tokens.checkboxSize}: 1.5rem;
                ${tokens.checkboxInnerSize}: 1.25rem;
                ${tokens.checkboxBorderRadius}: 0.375rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            xs: css`
                ${tokens.itemHeight}: 2rem;
                ${tokens.itemPadding}: 0.5rem;
                ${tokens.itemPaddingTight}: 0.125rem;
                ${tokens.itemIndent}: 1.25rem;
                ${tokens.itemBorderRadius}: 0.375rem;
                ${tokens.itemTop}: 0.25rem;
                ${tokens.itemBottom}: 0.25rem;
                ${tokens.iconFolderMargin}: 0 0.25rem 0 0;
                ${tokens.switcherMargin}: 0 0.25rem 0 0;
                ${tokens.switcherSize}: 1rem;
                ${tokens.checkboxMargin}: 0 0.25rem 0 0;
                ${tokens.checkboxSize}: 1rem;
                ${tokens.checkboxInnerSize}: 0.875rem;
                ${tokens.checkboxBorderRadius}: 0.25rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
    },
};
