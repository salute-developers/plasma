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
                ${dropdownTokens.dividerWidth}: auto;
                ${dropdownTokens.dividerHeight}: 0.063rem;
                ${dropdownTokens.dividerMarginTop}: 0.5rem;
                ${dropdownTokens.dividerMarginRight}: 0rem;
                ${dropdownTokens.dividerMarginBottom}: 0.5rem;
                ${dropdownTokens.dividerMarginLeft}: 0rem;
            `,
        },
        view: {
            primary: css`
                ${dropdownTokens.dividerColor}: blue;
            `,
        },
        disabled: {
            true: css`
                ${dropdownTokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
