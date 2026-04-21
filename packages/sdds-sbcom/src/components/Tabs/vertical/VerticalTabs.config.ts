import { css, tabsTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    /*
     * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
     * Missing tokens in @salutejs/sdds-themes/tokens: surfaceAccent
     */
    surfaceTransparentTertiary,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

export const config = {
    defaults: {
        view: 'divider',
        size: 'l',
    },
    variations: {
        view: {
            divider: css`
                ${tabsTokens.arrowColor}: ${textSecondary};
                ${tabsTokens.arrowColorHover}: ${textSecondaryHover};
                ${tabsTokens.arrowColorActive}: ${textSecondaryActive};
                ${tabsTokens.tabsBackgroundColor}: transparent;
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${tabsTokens.outlineFocusColor}: var(--surface-accent);

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
        stretch: {
            true: css`
                ${tabsTokens.containerHeight}: 100%;
            `,
        },
        disabled: {
            true: css`
                ${tabsTokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
