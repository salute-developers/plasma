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
                ${navigationDrawerTokens.sidebarBoxShadow}: var(--shadow-down-soft-s);
                ${navigationDrawerTokens.sidebarHeight}: calc(100% - 32px);
                ${navigationDrawerTokens.sidebarPadding}: 20px 12px 12px 12px;
                ${navigationDrawerTokens.sidebarGap}: 10px;
                ${navigationDrawerTokens.sidebarWidth}: 250px;
                ${navigationDrawerTokens.sidebarWidthClosed}: 40px;
                ${navigationDrawerTokens.sidebarBackground}: #fff;

                ${navigationDrawerTokens.sectionColor}: #08080856;
                ${navigationDrawerTokens.sectionFontSize}: 14px;
                ${navigationDrawerTokens.sectionHeaderGap}: 12px;
                ${navigationDrawerTokens.sectionPadding}: 12px;

                ${navigationDrawerTokens.menuItemIconSize}: 1rem;
                ${navigationDrawerTokens.menuItemGap}: 12px;
                ${navigationDrawerTokens.menuItemPadding}: 12px;
                ${navigationDrawerTokens.menuItemBorderRadius}: 10px;
                ${navigationDrawerTokens.menuItemSelectedColor}: #08080806;
                ${navigationDrawerTokens.menuItemHoverColor}: #08080803;
                ${navigationDrawerTokens.menuItemDisabledOpacity}: 0.4;

                ${navigationDrawerTokens.dividerColor}: #08080812;
                ${navigationDrawerTokens.dividerHeight}: 1px;

                ${navigationDrawerTokens.overlayBackground}: #08080806;
            `,
        },
        size: {
            s: css`
                ${navigationDrawerTokens.menuItemIconSize}: 1rem;
            `,
            m: css`
                ${navigationDrawerTokens.menuItemIconSize}: 1.5rem;
            `,
        },
    },
};
