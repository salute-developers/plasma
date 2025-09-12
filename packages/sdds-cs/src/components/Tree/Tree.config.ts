import { css, treeTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${tokens.iconFolderColor}: var(--text-primary);
                ${tokens.arrowColor}: var(--text-accent);
                ${tokens.arrowColorHover}: var(--text-accent-hover);
                ${tokens.arrowColorActive}: var(--text-accent-active);
                ${tokens.color}: var(--text-primary);
                ${tokens.colorSelected}: var(--text-primary);
                ${tokens.itemBackgroundColorSelected}: var(--surface-solid-primary);
                ${tokens.itemBackgroundColorPrimary}: transparent;
                ${tokens.itemBackgroundColorHover}: var(--surface-transparent-accent);
                ${tokens.itemBackgroundColorActive}: var(--surface-solid-primary-active);
                ${tokens.checkboxBorderColor}: var(--text-accent);
                ${tokens.checkboxBackgroundColor}: var(--text-accent);
                ${tokens.itemDisabledOpacity}: 1;
                ${tokens.itemDisabledBorderColor}: var(--text-secondary);
                ${tokens.itemDisabledColor}: var(--text-secondary);
                ${tokens.itemDraggableBorderColor}: var(--surface-positive);
                ${tokens.itemDraggableLineColor}: var(--surface-solid-default);
            `,
        },
        size: {
            s: css`
                ${tokens.itemHeight}: 2.5rem;
                ${tokens.itemPadding}: 0.75rem;
                ${tokens.itemPaddingTight}: 0.25rem;
                ${tokens.itemIndent}: 1.875rem;
                ${tokens.itemBorderRadius}: 0.5rem;
                ${tokens.itemTop}: 0rem;
                ${tokens.itemBottom}: 0rem;
                ${tokens.iconFolderMargin}: 0 0.375rem 0 0.5rem;
                ${tokens.switcherMargin}: 0 0 0 0;
                ${tokens.switcherMarginInverted}: 0 0 0 0;
                ${tokens.switcherSize}: 1.5rem;
                ${tokens.checkboxMargin}: 0 0 0 0.5rem;
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
        },
    },
};
