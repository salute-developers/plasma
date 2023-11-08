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
                ${dropdownTokens.itemWidth}: auto;
                ${dropdownTokens.itemHeight}: 1.5rem;
                ${dropdownTokens.itemPaddingTop}: 0.25rem;
                ${dropdownTokens.itemPaddingRight}: 0.25rem;
                ${dropdownTokens.itemPaddingBottom}: 0.25rem;
                ${dropdownTokens.itemPaddingLeft}: 0.25rem;
                ${dropdownTokens.itemMarginTop}: 0.25rem;
                ${dropdownTokens.itemMarginRight}: 0.25rem;
                ${dropdownTokens.itemMarginBottom}: 0.25rem;
                ${dropdownTokens.itemMarginLeft}: 0.25rem;
            `,
        },
        view: {
            primary: css`
                ${dropdownTokens.itemBackground}: coral;
                ${dropdownTokens.itemBackgroundHover}: lightCoral;
            `,
        },
        disabled: {
            true: css`
                ${dropdownTokens.disabledOpacity}: 0.4;
            `,
        },
        selected: {
            true: css`
                ${dropdownTokens.itemBackgroundSelected}: darkRed;
                ${dropdownTokens.itemColorSelected}: white;
            `,
        },
    },
};
