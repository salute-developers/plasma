import { css, tabsTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    surfaceAccent,
    surfaceSolidSecondary,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
} from '@salutejs/sdds-themes/tokens/sdds_insol_next';

const roundedRadius = '1000px';

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

                ${tabsTokens.tabsDividerHeight}: 0rem;
                ${tabsTokens.tabsDividerColor}: transparent;
                ${tabsTokens.tabsDividerBorderRadius}: 0rem;
            `,
        },
        size: {
            xs: css`
                ${tabsTokens.tabsBorderRadius}: 0.625rem;
                ${tabsTokens.tabsWidth}: fit-content;
                ${tabsTokens.tabsHeight}: auto;
                ${tabsTokens.arrowInnerPadding}: 0.125rem;
                ${tabsTokens.arrowOuterPadding}: 0.125rem;
                ${tabsTokens.arrowSize}: 1rem;
            `,
            s: css`
                ${tabsTokens.tabsBorderRadius}: 0.75rem;
                ${tabsTokens.tabsWidth}: fit-content;
                ${tabsTokens.tabsHeight}: auto;
                ${tabsTokens.arrowInnerPadding}: 0.125rem;
                ${tabsTokens.arrowOuterPadding}: 0.25rem;
            `,
            m: css`
                ${tabsTokens.tabsBorderRadius}: 0.875rem;
                ${tabsTokens.tabsWidth}: fit-content;
                ${tabsTokens.tabsHeight}: auto;
                ${tabsTokens.arrowInnerPadding}: 0.125rem;
                ${tabsTokens.arrowOuterPadding}: 0.375rem;
            `,
            l: css`
                ${tabsTokens.tabsBorderRadius}: 1rem;
                ${tabsTokens.tabsWidth}: fit-content;
                ${tabsTokens.tabsHeight}: auto;
                ${tabsTokens.arrowInnerPadding}: 0.125rem;
                ${tabsTokens.arrowOuterPadding}: 0.375rem;
            `,
            xl: css`
                ${tabsTokens.tabsBorderRadius}: 1.125rem;
                ${tabsTokens.tabsWidth}: fit-content;
                ${tabsTokens.tabsHeight}: auto;
                ${tabsTokens.arrowInnerPadding}: 0;
                ${tabsTokens.arrowOuterPadding}: 0.375rem;
            `,
        },
        stretch: {
            true: css`
                ${tabsTokens.containerWidth}: 100%;
            `,
        },
        disabled: {
            true: css`
                ${tabsTokens.disabledOpacity}: 0.4;
            `,
        },
        pilled: {
            true: css`
                ${tabsTokens.tabsPilledBorderRadius}: ${roundedRadius};
            `,
        },
    },
    intersections: [
        {
            size: 'xs',
            pilled: false,
            style: css`
                ${tabsTokens.arrowOuterPadding}: 0;
                ${tabsTokens.arrowBorderRadius}: 0.5rem;
            `,
        },
        {
            size: 's',
            pilled: false,
            style: css`
                ${tabsTokens.arrowOuterPadding}: 0.125rem;
                ${tabsTokens.arrowBorderRadius}: 0.625rem;
            `,
        },
        {
            size: 'm',
            pilled: false,
            style: css`
                ${tabsTokens.arrowOuterPadding}: 0.25rem;
                ${tabsTokens.arrowBorderRadius}: 0.75rem;
            `,
        },
        {
            size: 'l',
            pilled: false,
            style: css`
                ${tabsTokens.arrowOuterPadding}: 0.25rem;
                ${tabsTokens.arrowBorderRadius}: 0.875rem;
            `,
        },
        {
            size: 'xl',
            pilled: false,
            style: css`
                ${tabsTokens.arrowOuterPadding}: 0.25rem;
                ${tabsTokens.arrowBorderRadius}: 0.875rem;
            `,
        },
    ],
};
