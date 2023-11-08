import { css } from '@linaria/core';

import { dropdownTokens } from '../../../../components/Dropdown';

export const config = {
    defaults: {
        view: 'primary',
        size: 'm',
    },
    variations: {
        size: {
            m: css`
                ${dropdownTokens.groupWidth}: auto;
                ${dropdownTokens.groupPaddingTop}: 0.25rem;
                ${dropdownTokens.groupPaddingRight}: 0.25rem;
                ${dropdownTokens.groupPaddingBottom}: 0.25rem;
                ${dropdownTokens.groupPaddingLeft}: 0.25rem;
                ${dropdownTokens.groupMarginTop}: 0.25rem;
                ${dropdownTokens.groupMarginRight}: 0.25rem;
                ${dropdownTokens.groupMarginBottom}: 0.25rem;
                ${dropdownTokens.groupMarginLeft}: 1.25rem;
                ${dropdownTokens.groupLabelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${dropdownTokens.groupLabelFontSize}: var(--plasma-typo-body-s-font-size);
                ${dropdownTokens.groupLabelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${dropdownTokens.groupLabelFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${dropdownTokens.groupLabelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${dropdownTokens.groupLabelLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
        },
        view: {
            primary: css`
                ${dropdownTokens.groupBackground}: crimson;
            `,
        },
        disabled: {
            true: css`
                ${dropdownTokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
