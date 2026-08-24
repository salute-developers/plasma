import { css, tabsTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    surfaceAccent,
    surfaceSolidSecondary,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
} from '@salutejs/sdds-themes/tokens/sdds_insol_next';

export const config = {
    defaults: {
        view: 'filled',
        size: 'l',
    },
    variations: {
        view: {
            filled: css`
                ${tabsTokens.arrowColor}: ${textSecondary};
                ${tabsTokens.arrowColorHover}: ${textSecondaryHover};
                ${tabsTokens.arrowColorActive}: ${textSecondaryActive};
                ${tabsTokens.tabsBackgroundColor}: ${surfaceSolidSecondary};
                ${tabsTokens.outlineFocusColor}: ${surfaceAccent};
                ${tabsTokens.tabsPadding}: 0.125rem;

                ${tabsTokens.tabsDividerWidth}: 0rem;
                ${tabsTokens.tabsDividerHeight}: 0rem;
                ${tabsTokens.tabsDividerColor}: transparent;
                ${tabsTokens.tabsDividerBorderRadius}: 0rem;
            `,
        },
        size: {
            xs: css`
                ${tabsTokens.tabsBorderRadius}: 0.625rem;
                ${tabsTokens.tabsPilledBorderRadius}: 1.125rem;
                ${tabsTokens.tabsWidth}: fit-content;
                ${tabsTokens.tabsHeight}: auto;
                ${tabsTokens.arrowInnerPadding}: 0.125rem;
                ${tabsTokens.arrowOuterPadding}: 0.125rem;
                ${tabsTokens.arrowSize}: 1rem;
            `,
            s: css`
                ${tabsTokens.tabsBorderRadius}: 0.75rem;
                ${tabsTokens.tabsPilledBorderRadius}: 1.375rem;
                ${tabsTokens.tabsWidth}: fit-content;
                ${tabsTokens.tabsHeight}: auto;
                ${tabsTokens.arrowInnerPadding}: 0.125rem;
                ${tabsTokens.arrowOuterPadding}: 0.375rem;
            `,
            m: css`
                ${tabsTokens.tabsBorderRadius}: 0.875rem;
                ${tabsTokens.tabsPilledBorderRadius}: 1.625rem;
                ${tabsTokens.tabsWidth}: fit-content;
                ${tabsTokens.tabsHeight}: auto;
                ${tabsTokens.arrowInnerPadding}: 0.125rem;
                ${tabsTokens.arrowOuterPadding}: 0.75rem;
            `,
            l: css`
                ${tabsTokens.tabsBorderRadius}: 1rem;
                ${tabsTokens.tabsPilledBorderRadius}: 1.875rem;
                ${tabsTokens.tabsWidth}: fit-content;
                ${tabsTokens.tabsHeight}: auto;
                ${tabsTokens.arrowInnerPadding}: 0.125rem;
                ${tabsTokens.arrowOuterPadding}: 0.875rem;
            `,
            xl: css`
                ${tabsTokens.tabsBorderRadius}: 1.125rem;
                ${tabsTokens.tabsPilledBorderRadius}: 1.875rem;
                ${tabsTokens.tabsWidth}: fit-content;
                ${tabsTokens.tabsHeight}: auto;
                ${tabsTokens.arrowInnerPadding}: 0.125rem;
                ${tabsTokens.arrowOuterPadding}: 0.875rem;
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
        pilled: {
            true: css``,
        },
    },
    intersections: [
        {
            size: 'xs',
            pilled: false,
            style: css`
                ${tabsTokens.arrowBorderRadius}: 0.5rem;
            `,
        },
        {
            size: 's',
            pilled: false,
            style: css`
                ${tabsTokens.arrowBorderRadius}: 0.625rem;
            `,
        },
        {
            size: 'm',
            pilled: false,
            style: css`
                ${tabsTokens.arrowBorderRadius}: 0.75rem;
            `,
        },
        {
            size: 'l',
            pilled: false,
            style: css`
                ${tabsTokens.arrowBorderRadius}: 0.75rem;
            `,
        },
        {
            size: 'xl',
            pilled: false,
            style: css`
                ${tabsTokens.arrowBorderRadius}: 0.75rem;
            `,
        },
    ],
};
