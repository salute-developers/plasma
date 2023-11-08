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
                ${dropdownTokens.headerWidth}: auto;
                ${dropdownTokens.headerHeight}: auto;
                ${dropdownTokens.headerPaddingTop}: 0.25rem;
                ${dropdownTokens.headerPaddingRight}: 0.25rem;
                ${dropdownTokens.headerPaddingBottom}: 0.25rem;
                ${dropdownTokens.headerPaddingLeft}: 0.25rem;
                ${dropdownTokens.headerMarginTop}: 0.25rem;
                ${dropdownTokens.headerMarginRight}: 0.25rem;
                ${dropdownTokens.headerMarginBottom}: 0.25rem;
                ${dropdownTokens.headerMarginLeft}: 0.25rem;
            `,
        },
        view: {
            primary: css`
                ${dropdownTokens.headerBackground}: red;
            `,
        },
        disabled: {
            true: css`
                ${dropdownTokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
