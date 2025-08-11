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
                ${navigationDrawerTokens.sidebarHeight}: calc(100% - 2rem);
                ${navigationDrawerTokens.sidebarPadding}: 1.25rem 0.75rem 0.75rem 0.75rem;
                ${navigationDrawerTokens.sidebarGap}: 0.625rem;
                ${navigationDrawerTokens.sidebarWidth}: 250px;
                ${navigationDrawerTokens.sidebarBackground}: var(--surface-solid-card);

                ${navigationDrawerTokens.sectionColor}: var(--text-tertiary-active);
                ${navigationDrawerTokens.sectionFontSize}: 0.75rem;
                ${navigationDrawerTokens.sectionHeaderGap}: 0.75rem;

                ${navigationDrawerTokens.menuItemGap}: 0.75rem;
                ${navigationDrawerTokens.menuItemPadding}: 0.75rem;
                ${navigationDrawerTokens.menuItemBorderRadius}: 0.625rem;
                ${navigationDrawerTokens.menuItemSelectedColor}: var(--surface-transparent-secondary);
                ${navigationDrawerTokens.menuItemHoverColor}: var(--surface-transparent-secondary-hover);
                ${navigationDrawerTokens.menuItemDisabledOpacity}: 0.4;
                ${navigationDrawerTokens.menuItemIndicatorSize}: 0.5rem;
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
                ${navigationDrawerTokens.iconSize}: 0.875rem;
                ${navigationDrawerTokens.iconContainerSize}: 1rem;
                ${navigationDrawerTokens.menuItemFontSize}: 0.875rem;
                ${navigationDrawerTokens.sidebarWidthClosed}: 2.5rem;
                ${navigationDrawerTokens.sectionPadding}: 0.625rem 0.75rem;
                ${navigationDrawerTokens.sectionBorderRadius}: 0.625rem;
                ${navigationDrawerTokens.sectionHeight}: 1.25rem;
            `,
            m: css`
                ${navigationDrawerTokens.iconSize}: 1.25rem;
                ${navigationDrawerTokens.iconContainerSize}: 1.5rem;
                ${navigationDrawerTokens.menuItemFontSize}: 1rem;
                ${navigationDrawerTokens.sidebarWidthClosed}: 3rem;
                ${navigationDrawerTokens.sectionPadding}: 0.75rem;
                ${navigationDrawerTokens.sectionBorderRadius}: 0.75rem;
                ${navigationDrawerTokens.sectionHeight}: 1.5rem;
            `,
        },
    },
};
