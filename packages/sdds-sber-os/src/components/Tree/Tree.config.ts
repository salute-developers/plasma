import { css, treeTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.iconFolderColor}: var(--text-primary);
                ${tokens.arrowColor}: var(--text-secondary);
                ${tokens.arrowColorHover}: var(--text-secondary-hover);
                ${tokens.arrowColorActive}: var(--text-secondary-active);
                ${tokens.color}: var(--text-primary);
                ${tokens.colorSelected}: var(--text-primary);
                ${tokens.itemBackgroundColorSelected}: var(--surface-transparent-secondary);
                ${tokens.itemBackgroundColorPrimary}: transparent;

                ${tokens.itemBackgroundColorHover}: var(--surface-transparent-secondary-hover);
                ${tokens.itemBackgroundColorActive}: var(--surface-transparent-secondary-active);
                ${tokens.checkboxBorderColor}: var(--text-secondary);
                ${tokens.checkboxBackgroundColor}: var(--text-accent);
                ${tokens.itemDisabledOpacity}: 0.4;
                ${tokens.itemDisabledBorderColor}: var(--text-secondary);
                ${tokens.itemDisabledColor}: var(--text-secondary);
                ${tokens.itemDraggableBorderColor}: var(--surface-positive);
                ${tokens.itemDraggableLineColor}: var(--surface-solid-default);
            `,
        },
        size: {
            m: css`
                ${tokens.itemHeight}: 3rem;
                ${tokens.itemBackgroundExtraOffset}: 0.875rem;
                ${tokens.itemPaddingTop}: 0.75rem;
                ${tokens.itemPaddingRight}: 0.875rem;
                ${tokens.itemPaddingBottom}: 0.75rem;
                ${tokens.itemPaddingLeft}: 0.875rem;
                ${tokens.itemPaddingTightTop}: 0.5rem;
                ${tokens.itemPaddingTightRight}: 0.875rem;
                ${tokens.itemPaddingTightBottom}: 0.5rem;
                ${tokens.itemPaddingTightLeft}: 0.875rem;
                ${tokens.itemIndent}: 2rem;
                ${tokens.itemBorderRadius}: 0.625rem;
                ${tokens.itemTop}: 0.25rem;
                ${tokens.itemBottom}: 0.25rem;
                ${tokens.iconFolderMargin}: 0 0.5rem 0 0;
                ${tokens.switcherMargin}: 0 0.5rem 0 0;
                ${tokens.switcherMarginInverted}: 0 0 0 0.5rem;
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
                ${tokens.itemBackgroundExtraOffset}: 0.75rem;
                ${tokens.itemPaddingTop}: 0.5rem;
                ${tokens.itemPaddingRight}: 0.75rem;
                ${tokens.itemPaddingBottom}: 0.5rem;
                ${tokens.itemPaddingLeft}: 0.75rem;
                ${tokens.itemPaddingTightTop}: 0.4375rem;
                ${tokens.itemPaddingTightRight}: 0.5rem;
                ${tokens.itemPaddingTightBottom}: 0.4375rem;
                ${tokens.itemPaddingTightLeft}: 0.5rem;
                ${tokens.itemIndent}: 1.875rem;
                ${tokens.itemBorderRadius}: 0.5rem;
                ${tokens.itemTop}: 0.25rem;
                ${tokens.itemBottom}: 0.25rem;
                ${tokens.iconFolderMargin}: 0 0.375rem 0 0;
                ${tokens.switcherMargin}: 0 0.375rem 0 0;
                ${tokens.switcherMarginInverted}: 0 0 0 0.375rem;
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
        },
    },
};
