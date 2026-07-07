import { css, segmentTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    inverseTextPrimary,
    inverseTextPrimaryHover,
    onDarkTextPrimary,
    onDarkTextPrimaryHover,
    surfaceAccent,
    surfaceSolidDefault,
    surfaceTransparentCard,
    textAccent,
    textPrimary,
    textPrimaryHover,
} from '@salutejs/sdds-themes/tokens/sdds_finai';

export const config = {
    defaults: {
        view: 'none',
        size: 'xs',
    },
    variations: {
        view: {
            none: css`
                ${segmentTokens.itemColor}: ${textPrimary};
                ${segmentTokens.itemBackgroundColor}: transparent;
                ${segmentTokens.itemColorHover}: ${textPrimaryHover};
                ${segmentTokens.itemBackgroundColorHover}: transparent;
                ${segmentTokens.itemSelectedColor}: ${textPrimaryHover};
                ${segmentTokens.itemSelectedBackgroundColor}: transparent;
                ${segmentTokens.itemSelectedColorHover}: ${textPrimary};
                ${segmentTokens.itemSelectedBackgroundColorHover}: transparent;

                ${segmentTokens.outlineFocusColor}: ${textAccent};
            `,
            secondary: css`
                ${segmentTokens.itemColor}: ${textPrimary};
                ${segmentTokens.itemBackgroundColor}: transparent;
                ${segmentTokens.itemColorHover}: ${textPrimaryHover};
                ${segmentTokens.itemBackgroundColorHover}: transparent;
                ${segmentTokens.itemSelectedColor}: ${textPrimary};
                ${segmentTokens.itemSelectedBackgroundColor}: ${surfaceTransparentCard};
                ${segmentTokens.itemSelectedColorHover}: ${textPrimaryHover};
                ${segmentTokens.itemSelectedBackgroundColorHover}: ${surfaceTransparentCard};

                ${segmentTokens.outlineFocusColor}: ${textAccent};
            `,
            default: css`
                ${segmentTokens.itemColor}: ${textPrimary};
                ${segmentTokens.itemBackgroundColor}: transparent;
                ${segmentTokens.itemColorHover}: ${textPrimaryHover};
                ${segmentTokens.itemBackgroundColorHover}: transparent;
                ${segmentTokens.itemSelectedColor}: ${inverseTextPrimary};
                ${segmentTokens.itemSelectedBackgroundColor}: ${surfaceSolidDefault};
                ${segmentTokens.itemSelectedColorHover}: ${inverseTextPrimaryHover};
                ${segmentTokens.itemSelectedBackgroundColorHover}: ${surfaceSolidDefault};

                ${segmentTokens.outlineFocusColor}: ${textAccent};
            `,
            accent: css`
                ${segmentTokens.itemColor}: ${textPrimary};
                ${segmentTokens.itemBackgroundColor}: transparent;
                ${segmentTokens.itemColorHover}: ${textPrimaryHover};
                ${segmentTokens.itemBackgroundColorHover}: transparent;
                ${segmentTokens.itemSelectedColor}: ${onDarkTextPrimary};
                ${segmentTokens.itemSelectedBackgroundColor}: ${surfaceAccent};
                ${segmentTokens.itemSelectedColorHover}: ${onDarkTextPrimaryHover};
                ${segmentTokens.itemSelectedBackgroundColorHover}: ${surfaceAccent};

                ${segmentTokens.outlineFocusColor}: ${textAccent};
            `,
        },
        size: {
            xs: css`
                ${segmentTokens.itemBorderRadius}: 0.5rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 2rem;
                ${segmentTokens.itemPadding}: 0.5rem;
                ${segmentTokens.itemPilledPadding}: 0.5rem;
                ${segmentTokens.itemMarginLeft}: 0;
            `,
            s: css`
                ${segmentTokens.itemBorderRadius}: 0.625rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 2.5rem;
                ${segmentTokens.itemPadding}: 0.5rem;
                ${segmentTokens.itemPilledPadding}: 0.5rem;
                ${segmentTokens.itemMarginLeft}: 0rem;
            `,
            m: css`
                ${segmentTokens.itemBorderRadius}: 0.75rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 3rem;
                ${segmentTokens.itemPadding}: 0.75rem;
                ${segmentTokens.itemPilledPadding}: 0.75rem;
                ${segmentTokens.itemMarginLeft}: 0rem;
            `,
            l: css`
                ${segmentTokens.itemBorderRadius}: 0.875rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 3.5rem;
                ${segmentTokens.itemPadding}: 1rem;
                ${segmentTokens.itemPilledPadding}: 1rem;
                ${segmentTokens.itemMarginLeft}: 0;
            `,
            xl: css`
                ${segmentTokens.itemBorderRadius}: 1rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 4rem;
                ${segmentTokens.itemPadding}: 1.25rem;
                ${segmentTokens.itemPilledPadding}: 1.25rem;
                ${segmentTokens.itemMarginLeft}: 0;
            `,
        },
        disabled: {
            true: css`
                ${segmentTokens.disabledOpacity}: 0.4;
            `,
        },
        pilled: {
            true: css`
                // NOTE: change on token when added
                ${segmentTokens.itemPilledBorderRadius}: 1000px;
            `,
        },
    },
};
