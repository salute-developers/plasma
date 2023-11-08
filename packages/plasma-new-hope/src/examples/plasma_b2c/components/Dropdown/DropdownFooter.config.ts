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
                ${dropdownTokens.footerWidth}: auto;
                ${dropdownTokens.footerHeight}: 1rem;
                ${dropdownTokens.footerPaddingTop}: 0.25rem;
                ${dropdownTokens.footerPaddingRight}: 0.25rem;
                ${dropdownTokens.footerPaddingBottom}: 0.25rem;
                ${dropdownTokens.footerPaddingLeft}: 0.25rem;
                ${dropdownTokens.footerMarginTop}: 0.25rem;
                ${dropdownTokens.footerMarginRight}: 0.25rem;
                ${dropdownTokens.footerMarginBottom}: 0.25rem;
                ${dropdownTokens.footerMarginLeft}: 0.25rem;
            `,
        },
        view: {
            primary: css`
                ${dropdownTokens.footerBackground}: red;
            `,
        },
        disabled: {
            true: css`
                ${dropdownTokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
