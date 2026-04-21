import {
    bodyM,
    bodyS,
    bodyXXS,
    shadowDownSoftS,
    surfaceSolidCard,
    surfaceSolidDefault,
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryHover,
    surfaceTransparentTertiary,
    textTertiaryActive,
} from '@salutejs/plasma-themes/tokens/plasma_web';
import { css, navigationDrawerTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${navigationDrawerTokens.sidebarBoxShadow}: ${shadowDownSoftS};
                ${navigationDrawerTokens.sidebarPadding}: 1.25rem 0.75rem 0.75rem 0.75rem;
                ${navigationDrawerTokens.sidebarGap}: 0.625rem;
                ${navigationDrawerTokens.sidebarWidth}: 250px;
                ${navigationDrawerTokens.sidebarBackground}: ${surfaceSolidCard};

                ${navigationDrawerTokens.sectionColor}: ${textTertiaryActive};
                ${navigationDrawerTokens.sectionFontSize}: 0.75rem;
                ${navigationDrawerTokens.sectionHeaderGap}: 0.75rem;

                ${navigationDrawerTokens.menuItemGap}: 0.75rem;
                ${navigationDrawerTokens.menuItemPadding}: 0.75rem;
                ${navigationDrawerTokens.menuItemBorderRadius}: 0.625rem;
                ${navigationDrawerTokens.menuItemSelectedColor}: ${surfaceTransparentSecondary};
                ${navigationDrawerTokens.menuItemHoverColor}: ${surfaceTransparentSecondaryHover};
                ${navigationDrawerTokens.menuItemDisabledOpacity}: 0.4;
                ${navigationDrawerTokens.menuItemIndicatorSize}: 0.5rem;
                ${navigationDrawerTokens.menuItemIndicatorColor}: ${surfaceSolidDefault};

                ${navigationDrawerTokens.dividerColor}: ${surfaceTransparentTertiary};
                ${navigationDrawerTokens.dividerHeight}: 1px;

                ${navigationDrawerTokens.overlayBackground}: ${surfaceTransparentSecondary};

                ${navigationDrawerTokens.counterBorderRadius}: 1rem;
                ${navigationDrawerTokens.counterHeight}: 1rem;
                ${navigationDrawerTokens.counterPadding}: 0 0.125rem;
                ${navigationDrawerTokens.counterBackground}: ${surfaceSolidDefault};
                ${navigationDrawerTokens.counterColor}: ${surfaceSolidCard};
                ${navigationDrawerTokens.counterFontFamily}: ${bodyXXS.fontFamily};
                ${navigationDrawerTokens.counterFontSize}: ${bodyXXS.fontSize};
                ${navigationDrawerTokens.counterFontStyle}: ${bodyXXS.fontStyle};
                ${navigationDrawerTokens.counterFontWeight}: ${bodyXXS.fontWeight};
                ${navigationDrawerTokens.counterLetterSpacing}: ${bodyXXS.letterSpacing};
                ${navigationDrawerTokens.counterLineHeight}: ${bodyXXS.lineHeight};
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
                ${navigationDrawerTokens.iconMargin}: 1px 0 0 1px;
                ${navigationDrawerTokens.menuItemFontFamily}: ${bodyS.fontFamily};
                ${navigationDrawerTokens.menuItemFontStyle}: ${bodyS.fontStyle};
                ${navigationDrawerTokens.menuItemFontWeight}: ${bodyS.fontWeight};
                ${navigationDrawerTokens.menuItemFontLetterSpacing}: ${bodyS.letterSpacing};
                ${navigationDrawerTokens.menuItemFontLineHeight}: ${bodyS.lineHeight};
                ${navigationDrawerTokens.menuItemContentLeftSize}: 1.5rem;
                ${navigationDrawerTokens.menuItemContentLeftMargin}: 0.5rem;
            `,
            m: css`
                ${navigationDrawerTokens.iconSize}: 1.25rem;
                ${navigationDrawerTokens.iconContainerSize}: 1.5rem;
                ${navigationDrawerTokens.menuItemFontSize}: 1rem;
                ${navigationDrawerTokens.sidebarWidthClosed}: 3rem;
                ${navigationDrawerTokens.sectionPadding}: 0.75rem;
                ${navigationDrawerTokens.sectionBorderRadius}: 0.75rem;
                ${navigationDrawerTokens.iconMargin}: 2px 0 0 2px;
                ${navigationDrawerTokens.menuItemFontFamily}: ${bodyM.fontFamily};
                ${navigationDrawerTokens.menuItemFontStyle}: ${bodyM.fontStyle};
                ${navigationDrawerTokens.menuItemFontWeight}: ${bodyM.fontWeight};
                ${navigationDrawerTokens.menuItemFontLetterSpacing}: ${bodyM.letterSpacing};
                ${navigationDrawerTokens.menuItemFontLineHeight}: ${bodyM.lineHeight};
                ${navigationDrawerTokens.menuItemContentLeftSize}: 2.25rem;
                ${navigationDrawerTokens.menuItemContentLeftMargin}: 0.375rem;
            `,
        },
    },
};
