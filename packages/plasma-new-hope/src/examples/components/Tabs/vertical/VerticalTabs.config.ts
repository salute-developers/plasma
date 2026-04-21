import {
    surfaceAccent,
    surfaceTransparentTertiary,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
} from '@salutejs/plasma-themes/tokens/plasma_b2c';
import { css } from '@linaria/core';

import { tabsTokens } from '../../../../components/Tabs';

export const config = {
    defaults: {
        view: 'divider',
        size: 'xs',
    },
    variations: {
        view: {
            divider: css`
                ${tabsTokens.arrowColor}: ${textSecondary};
                ${tabsTokens.arrowColorHover}: ${textSecondaryHover};
                ${tabsTokens.arrowColorActive}: ${textSecondaryActive};
                ${tabsTokens.tabsBackgroundColor}: transparent;
                ${tabsTokens.outlineFocusColor}: ${surfaceAccent};

                ${tabsTokens.tabsDividerWidth}: 0.0625rem;
                ${tabsTokens.tabsDividerHeight}: 0.0625rem;
                ${tabsTokens.tabsDividerColor}: ${surfaceTransparentTertiary};
                ${tabsTokens.tabsDividerBorderRadius}: 0.0625rem;
            `,
        },
        size: {
            xs: css`
                ${tabsTokens.tabsBorderRadius}: 0.5rem;
                ${tabsTokens.tabsWidth}: fit-content;
                ${tabsTokens.tabsHeight}: auto;
                ${tabsTokens.arrowInnerPadding}: 0rem;
                ${tabsTokens.arrowOuterPadding}: 0.125rem;
            `,
            s: css`
                ${tabsTokens.tabsBorderRadius}: 0.625rem;
                ${tabsTokens.tabsWidth}: fit-content;
                ${tabsTokens.tabsHeight}: auto;
                ${tabsTokens.arrowInnerPadding}: 0rem;
                ${tabsTokens.arrowOuterPadding}: 0.25rem;
            `,
            m: css`
                ${tabsTokens.tabsBorderRadius}: 0.75rem;
                ${tabsTokens.tabsWidth}: fit-content;
                ${tabsTokens.tabsHeight}: auto;
                ${tabsTokens.arrowInnerPadding}: 0rem;
                ${tabsTokens.arrowOuterPadding}: 0.625rem;
            `,
            l: css`
                ${tabsTokens.tabsBorderRadius}: 0.75rem;
                ${tabsTokens.tabsWidth}: fit-content;
                ${tabsTokens.tabsHeight}: auto;
                ${tabsTokens.arrowInnerPadding}: 0rem;
                ${tabsTokens.arrowOuterPadding}: 0.75rem;
            `,
        },
        disabled: {
            true: css`
                ${tabsTokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
