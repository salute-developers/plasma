import { css, segmentTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyS,
    bodySBold,
    bodyXS,
    bodyXSBold,
    inverseTextPrimary,
    inverseTextPrimaryHover,
    inverseTextSecondary,
    surfaceSolidDefault,
    surfaceTransparentCard,
    textAccent,
    textPrimary,
    textPrimaryHover,
    textSecondary,
    textTertiary,
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
                ${segmentTokens.itemAdditionalColor}: ${textTertiary};
                ${segmentTokens.itemAdditionalColorHover}: ${textSecondary};
                ${segmentTokens.itemSelectedColor}: ${textPrimaryHover};
                ${segmentTokens.itemSelectedBackgroundColor}: transparent;
                ${segmentTokens.itemSelectedColorHover}: ${textPrimary};
                ${segmentTokens.itemSelectedBackgroundColorHover}: transparent;
                ${segmentTokens.itemSelectedAdditionalColor}: ${textSecondary};
                ${segmentTokens.itemSelectedAdditionalColorHover}: ${textSecondary};

                ${segmentTokens.outlineFocusColor}: ${textAccent};
            `,
            secondary: css`
                ${segmentTokens.itemColor}: ${textPrimary};
                ${segmentTokens.itemBackgroundColor}: transparent;
                ${segmentTokens.itemColorHover}: ${textPrimaryHover};
                ${segmentTokens.itemBackgroundColorHover}: transparent;
                ${segmentTokens.itemAdditionalColor}: ${textSecondary};
                ${segmentTokens.itemAdditionalColorHover}: ${textSecondary};
                ${segmentTokens.itemSelectedColor}: ${textPrimary};
                ${segmentTokens.itemSelectedBackgroundColor}: ${surfaceTransparentCard};
                ${segmentTokens.itemSelectedColorHover}: ${textPrimaryHover};
                ${segmentTokens.itemSelectedBackgroundColorHover}: ${surfaceTransparentCard};
                ${segmentTokens.itemSelectedAdditionalColor}: ${textSecondary};
                ${segmentTokens.itemSelectedAdditionalColorHover}: ${textSecondary};

                ${segmentTokens.outlineFocusColor}: ${textAccent};
            `,
            primary: css`
                ${segmentTokens.itemColor}: ${textPrimary};
                ${segmentTokens.itemBackgroundColor}: transparent;
                ${segmentTokens.itemColorHover}: ${textPrimaryHover};
                ${segmentTokens.itemBackgroundColorHover}: transparent;
                ${segmentTokens.itemAdditionalColor}: ${textSecondary};
                ${segmentTokens.itemAdditionalColorHover}: ${textSecondary};
                ${segmentTokens.itemSelectedColor}: ${inverseTextPrimary};
                ${segmentTokens.itemSelectedBackgroundColor}: ${surfaceSolidDefault};
                ${segmentTokens.itemSelectedColorHover}: ${inverseTextPrimaryHover};
                ${segmentTokens.itemSelectedBackgroundColorHover}: ${surfaceSolidDefault};
                ${segmentTokens.itemSelectedAdditionalColor}: ${inverseTextSecondary};
                ${segmentTokens.itemSelectedAdditionalColorHover}: ${inverseTextSecondary};

                ${segmentTokens.outlineFocusColor}: ${textAccent};
            `,
        },
        size: {
            xs: css`
                ${segmentTokens.itemBorderRadius}: 0.5rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 2rem;
                ${segmentTokens.itemPadding}: 0.5rem 0.75rem;
                ${segmentTokens.itemPilledPadding}: 0.5rem 0.5rem;
                ${segmentTokens.itemContentPadding}: 0.0625rem 0.125rem;
                ${segmentTokens.itemIconMargin}: 0.125rem;
                ${segmentTokens.itemMarginLeft}: 0;

                ${segmentTokens.fontFamily}: ${bodyXS.fontFamily};
                ${segmentTokens.fontSize}: ${bodyXS.fontSize};
                ${segmentTokens.fontStyle}: ${bodyXS.fontStyle};
                ${segmentTokens.fontWeight}: ${bodyXSBold.fontWeight};
                ${segmentTokens.letterSpacing}: ${bodyXS.letterSpacing};
                ${segmentTokens.lineHeight}: ${bodyXS.lineHeight};
            `,
            s: css`
                ${segmentTokens.itemBorderRadius}: 0.625rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 2.5rem;
                ${segmentTokens.itemPadding}: 0.5rem 1rem;
                ${segmentTokens.itemPilledPadding}: 0.5rem 0.5rem;
                ${segmentTokens.itemContentPadding}: 0.1875rem 0.125rem;
                ${segmentTokens.itemIconMargin}: 0.125rem;
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
