import {
    outlineSolidPrimary,
    surfaceAccent,
    textAccent,
    textAccentActive,
    textAccentMinor,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, tabsTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'divider',
        size: 's',
    },
    variations: {
        view: {
            divider: css`
                ${tabsTokens.arrowColor}: ${textAccent};
                ${tabsTokens.arrowColorHover}: ${textAccentMinor};
                ${tabsTokens.arrowColorActive}: ${textAccentActive};
                ${tabsTokens.tabsBackgroundColor}: transparent;
                ${tabsTokens.outlineFocusColor}: ${surfaceAccent};

                ${tabsTokens.tabsDividerWidth}: 0.0625rem;
                ${tabsTokens.tabsDividerHeight}: 0.0625rem;
                ${tabsTokens.tabsDividerColor}: ${outlineSolidPrimary};
                ${tabsTokens.tabsDividerBorderRadius}: 0.0625rem;
            `,
        },
        size: {
            s: css`
                ${tabsTokens.tabsBorderRadius}: 0.625rem;
                ${tabsTokens.tabsWidth}: fit-content;
                ${tabsTokens.tabsHeight}: auto;
                ${tabsTokens.arrowInnerPadding}: 0rem;
                ${tabsTokens.arrowOuterPadding}: 0.25rem;
            `,
        },
        stretch: {
            true: css`
                ${tabsTokens.containerHeight}: 100%;
            `,
        },
        disabled: {
            true: css`
                ${tabsTokens.arrowColor}: ${textSecondary};
                ${tabsTokens.itemColor}: ${textSecondary};
                ${tabsTokens.itemValueColor}: ${textSecondary};
                ${tabsTokens.itemColorHover}: ${textSecondary};
                ${tabsTokens.itemValueColorHover}: ${textSecondary};
                ${tabsTokens.itemColorActive}: ${textSecondary};
                ${tabsTokens.itemValueColorActive}: ${textSecondary};
                ${tabsTokens.itemSelectedColor}: ${textSecondary};
                ${tabsTokens.itemSelectedDividerColor}: none;
                ${tabsTokens.itemSelectedDividerColorHover}: none;
                ${tabsTokens.tabsDividerColor}: transparent;
            `,
        },
    },
};
