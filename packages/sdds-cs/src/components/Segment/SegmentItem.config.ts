import {
    bodyS,
    bodySBold,
    surfaceAccent,
    surfaceSolidCard,
    textAccent,
    textAccentMinor,
    textPrimary,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, segmentTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'xs',
    },
    variations: {
        view: {
            default: css`
                ${segmentTokens.itemColor}: ${textAccent};
                ${segmentTokens.itemBackgroundColor}: transparent;
                ${segmentTokens.itemColorHover}: ${textAccentMinor};
                ${segmentTokens.itemBackgroundColorHover}: transparent;
                ${segmentTokens.itemAdditionalColor}: ${textAccentMinor};
                ${segmentTokens.itemAdditionalColorHover}: ${textAccentMinor};
                ${segmentTokens.itemSelectedColor}: ${textPrimary};
                ${segmentTokens.itemSelectedBackgroundColor}: ${surfaceSolidCard};
                ${segmentTokens.itemSelectedColorHover}: ${textPrimary};
                ${segmentTokens.itemSelectedBackgroundColorHover}: ${surfaceSolidCard};
                ${segmentTokens.itemSelectedAdditionalColor}: ${textSecondary};
                ${segmentTokens.itemSelectedAdditionalColorHover}: ${textSecondary};

                ${segmentTokens.outlineFocusColor}: ${surfaceAccent};
            `,
            secondary: css`
                ${segmentTokens.itemColor}: ${textAccent};
                ${segmentTokens.itemBackgroundColor}: transparent;
                ${segmentTokens.itemColorHover}: ${textAccentMinor};
                ${segmentTokens.itemBackgroundColorHover}: transparent;
                ${segmentTokens.itemAdditionalColor}: ${textAccentMinor};
                ${segmentTokens.itemAdditionalColorHover}: ${textAccentMinor};
                ${segmentTokens.itemSelectedColor}: ${textAccent};
                ${segmentTokens.itemSelectedBackgroundColor}: ${surfaceSolidCard};
                ${segmentTokens.itemSelectedColorHover}: ${textAccentMinor};
                ${segmentTokens.itemSelectedBackgroundColorHover}: ${surfaceSolidCard};
                ${segmentTokens.itemSelectedAdditionalColor}: ${textAccentMinor};
                ${segmentTokens.itemSelectedAdditionalColorHover}: ${textAccentMinor};

                ${segmentTokens.outlineFocusColor}: ${surfaceAccent};
            `,
        },
        size: {
            xs: css`
                ${segmentTokens.itemBorderRadius}: 0.625rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 2.25rem;
                ${segmentTokens.itemPadding}: 0.5rem 1rem;
                ${segmentTokens.itemPilledPadding}: 0.5rem 0.5rem;
                ${segmentTokens.itemContentPadding}: 0rem 0rem;
                ${segmentTokens.itemIconMargin}: 0.25rem;
                ${segmentTokens.itemMarginLeft}: 0rem;

                ${segmentTokens.fontFamily}: ${bodyS.fontFamily};
                ${segmentTokens.fontSize}: ${bodyS.fontSize};
                ${segmentTokens.fontStyle}: ${bodyS.fontStyle};
                ${segmentTokens.fontWeight}: ${bodySBold.fontWeight};
                ${segmentTokens.letterSpacing}: ${bodyS.letterSpacing};
                ${segmentTokens.lineHeight}: ${bodyS.lineHeight};
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
