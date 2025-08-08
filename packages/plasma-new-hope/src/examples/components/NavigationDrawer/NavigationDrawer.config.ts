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
                ${navigationDrawerTokens.sidebarBackground}: var(--surface-solid-card);

                ${navigationDrawerTokens.sectionColor}: var(--text-tertiary-active);
                ${navigationDrawerTokens.sectionFontSize}: 12px;
                ${navigationDrawerTokens.sectionHeaderGap}: 12px;

                ${navigationDrawerTokens.menuItemGap}: 12px;
                ${navigationDrawerTokens.menuItemPadding}: 12px;
                ${navigationDrawerTokens.menuItemBorderRadius}: 10px;
                ${navigationDrawerTokens.menuItemSelectedColor}: var(--surface-transparent-secondary);
                ${navigationDrawerTokens.menuItemHoverColor}: var(--surface-transparent-secondary-hover);
                ${navigationDrawerTokens.menuItemDisabledOpacity}: 0.4;
                ${navigationDrawerTokens.menuItemIndicatorSize}: 8px;
                ${navigationDrawerTokens.menuItemIndicatorColor}: var(--surface-solid-default);

                ${navigationDrawerTokens.dividerColor}: var(--surface-transparent-tertiary);
                ${navigationDrawerTokens.dividerHeight}: 1px;

                ${navigationDrawerTokens.overlayBackground}: var(--surface-transparent-secondary);

                ${navigationDrawerTokens.counterBorderRadius}: 1rem;
                ${navigationDrawerTokens.counterHeight}: 1rem;
                ${navigationDrawerTokens.counterPadding}: 0 0.125rem;
                ${navigationDrawerTokens.counterBackground}: var(--surface-solid-default);
                ${navigationDrawerTokens.counterColor}: var(--surface-solid-card);
                ${navigationDrawerTokens.counterFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${navigationDrawerTokens.counterFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${navigationDrawerTokens.counterFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${navigationDrawerTokens.counterFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${navigationDrawerTokens.counterLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${navigationDrawerTokens.counterLineHeight}: var(--plasma-typo-body-xxs-line-height);
            `,
        },
        size: {
            s: css`
                /* ${navigationDrawerTokens.menuItemIconSize}: 16px; */
                ${navigationDrawerTokens.menuItemIconContainerSize}: 16px;
                ${navigationDrawerTokens.menuItemFontSize}: 14px;
                ${navigationDrawerTokens.sidebarWidthClosed}: 40px;
                ${navigationDrawerTokens.sectionPadding}: 10px 12px;
            `,
            m: css`
                /* ${navigationDrawerTokens.menuItemIconSize}: 20px; */
                ${navigationDrawerTokens.menuItemIconContainerSize}: 20px;
                ${navigationDrawerTokens.menuItemFontSize}: 16px;
                ${navigationDrawerTokens.sidebarWidthClosed}: 48px;
                ${navigationDrawerTokens.sectionPadding}: 12px;
            `,
        },
    },
};
