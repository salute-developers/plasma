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
                ${dropdownTokens.width}: 15rem;
                ${dropdownTokens.height}: auto;
                ${dropdownTokens.borderRadius}: 0.5rem;
                ${dropdownTokens.paddingTop}: 0.5rem;
                ${dropdownTokens.paddingRight}: 0.5rem;
                ${dropdownTokens.paddingBottom}: 0.5rem;
                ${dropdownTokens.paddingLeft}: 0.5rem;
            `,
        },
        view: {
            primary: css`
                ${dropdownTokens.background}: lightblue;
            `,
        },
        disabled: {
            true: css`
                ${dropdownTokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
