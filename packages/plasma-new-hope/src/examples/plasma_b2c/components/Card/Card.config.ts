import { css } from '@linaria/core';

import { cardTokens as tokens } from '../../../../components/Card';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.solidBackground}: var(--surface-solid-card);
                ${tokens.colorBackground}: var(--surface-accent);
                ${tokens.titleColor}: #9747FF;
            `,
        },
        size: {
            l: css`
                ${tokens.outlineWidth}: 0.75rem;
                ${tokens.borderWidth}: 1px;
                ${tokens.borderRadius}: 1rem;

                ${tokens.titleFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${tokens.titleFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${tokens.titleFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${tokens.titleFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${tokens.titleLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${tokens.titleLineHeight}: var(--plasma-typo-body-xxs-line-height);
            `,
            m: css`
                ${tokens.outlineWidth}: 0.625rem;
                ${tokens.borderWidth}: 1px;
                ${tokens.borderRadius}: 0.875rem;

                ${tokens.titleFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${tokens.titleFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${tokens.titleFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${tokens.titleFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${tokens.titleLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${tokens.titleLineHeight}: var(--plasma-typo-body-xxs-line-height);
            `,
            s: css`
                ${tokens.outlineWidth}: 0.5rem;
                ${tokens.borderWidth}: 1px;
                ${tokens.borderRadius}: 0.75rem;

                ${tokens.titleFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${tokens.titleFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${tokens.titleFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${tokens.titleFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${tokens.titleLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${tokens.titleLineHeight}: var(--plasma-typo-body-xxs-line-height);
            `,
        },
        disabled: {
            true: css``,
        },
    },
};
