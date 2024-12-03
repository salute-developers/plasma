import { css } from '@linaria/core';

import { treeTokens as tokens } from '../../../../components/Tree/Tree.tokens';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.arrowColor}: var(--text-secondary);
                ${tokens.arrowColorHover}: var(--text-secondary-hover);
                ${tokens.arrowColorActive}: var(--text-secondary-active);
                ${tokens.color}: var(--text-secondary);
            `,
        },
        size: {
            l: css`
                ${tokens.itemHeight}: 3.5rem;
                ${tokens.iconFolderMargin}: 0 0.375rem 0 0.5rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            m: css`
                ${tokens.itemHeight}: 3rem;
                ${tokens.iconFolderMargin}: 0 0.375rem 0 0.5rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            s: css`
                ${tokens.itemHeight}: 2.5rem;
                ${tokens.iconFolderMargin}: 0 0.25rem 0 0.375rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            xs: css`
                ${tokens.itemHeight}: 2rem;
                ${tokens.iconFolderMargin}: 0 0.125rem 0 0.25rem;

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
