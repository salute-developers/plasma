import { css } from '@linaria/core';

import { navigationDrawerTokens } from '../../../components/NavigationDrawer';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${navigationDrawerTokens.boxShadow}: var(--shadow-down-soft-s);
                ${navigationDrawerTokens.sectionColor}: #08080856;
                ${navigationDrawerTokens.dividerColor}: #08080812;
                ${navigationDrawerTokens.selectedColor}: #08080806;
                ${navigationDrawerTokens.hoverColor}: #08080803;
                ${navigationDrawerTokens.borderRadius}: 4px;
            `,
        },
        size: {
            s: css`
                ${navigationDrawerTokens.size}: 3rem;
                ${navigationDrawerTokens.iconSize}: 1rem;
            `,
            m: css`
                ${navigationDrawerTokens.size}: 3.75rem;
                ${navigationDrawerTokens.iconSize}: 1.5rem;
            `,
        },
    },
};
