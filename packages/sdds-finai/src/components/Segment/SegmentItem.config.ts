import {
    bodyL,
    bodyLBold,
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    bodyXS,
    bodyXSBold,
    inverseTextPrimary,
    inverseTextPrimaryHover,
    inverseTextSecondary,
    onDarkTextPrimary,
    onDarkTextPrimaryHover,
    onDarkTextSecondary,
    surfaceAccent,
    surfaceSolidDefault,
    surfaceTransparentCard,
    textAccent,
    textPrimary,
    textPrimaryHover,
    textSecondary,
    textTertiary,
} from '@salutejs/sdds-themes/tokens/sdds_finai';
import { css, segmentTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'clear',
        size: 'xs',
    },
    variations: {
        view: {
            clear: css`
                ${segmentTokens.itemColor}: ${textSecondary};
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

                ${segmentTokens.groupFilledBackgroundColor}: ${textAccent};
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

                ${segmentTokens.groupFilledBackgroundColor}: ${textAccent};
            `,
            default: css`
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

                ${segmentTokens.groupFilledBackgroundColor}: ${textAccent};
            `,
            accent: css`
                ${segmentTokens.itemColor}: ${textPrimary};
                ${segmentTokens.itemBackgroundColor}: transparent;
                ${segmentTokens.itemColorHover}: ${textPrimaryHover};
                ${segmentTokens.itemBackgroundColorHover}: transparent;
                ${segmentTokens.itemAdditionalColor}: ${textSecondary};
                ${segmentTokens.itemAdditionalColorHover}: ${textSecondary};
                ${segmentTokens.itemSelectedColor}: ${onDarkTextPrimary};
                ${segmentTokens.itemSelectedBackgroundColor}: ${surfaceAccent};
                ${segmentTokens.itemSelectedColorHover}: ${onDarkTextPrimaryHover};
                ${segmentTokens.itemSelectedBackgroundColorHover}: ${surfaceAccent};
                ${segmentTokens.itemSelectedAdditionalColor}: ${onDarkTextSecondary};
                ${segmentTokens.itemSelectedAdditionalColorHover}: ${onDarkTextSecondary};

                ${segmentTokens.groupFilledBackgroundColor}: ${textAccent};
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
            m: css`
                ${segmentTokens.itemBorderRadius}: 0.75rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 3rem;
                ${segmentTokens.itemPadding}: 0.75rem 1.25rem;
                ${segmentTokens.itemPilledPadding}: 0.75rem 0.75rem;
                ${segmentTokens.itemContentPadding}: 0.125rem;
                ${segmentTokens.itemIconMargin}: 0.25rem;
                ${segmentTokens.itemMarginLeft}: 0rem;

                ${segmentTokens.fontFamily}: ${bodyM.fontFamily};
                ${segmentTokens.fontSize}: ${bodyM.fontSize};
                ${segmentTokens.fontStyle}: ${bodyM.fontStyle};
                ${segmentTokens.fontWeight}: ${bodyMBold.fontWeight};
                ${segmentTokens.letterSpacing}: ${bodyM.letterSpacing};
                ${segmentTokens.lineHeight}: ${bodyM.lineHeight};
            `,
            l: css`
                ${segmentTokens.itemBorderRadius}: 0.875rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 3.5rem;
                ${segmentTokens.itemPadding}: 1rem 1.5rem; /* 1.625 */
                ${segmentTokens.itemPilledPadding}: 1rem 1rem;
                ${segmentTokens.itemContentPadding}: 0.0625rem 0.125rem;
                ${segmentTokens.itemIconMargin}: 0.375rem;
                ${segmentTokens.itemMarginLeft}: 0;

                ${segmentTokens.fontFamily}: ${bodyL.fontFamily};
                ${segmentTokens.fontSize}: ${bodyL.fontSize};
                ${segmentTokens.fontStyle}: ${bodyL.fontStyle};
                ${segmentTokens.fontWeight}: ${bodyLBold.fontWeight};
                ${segmentTokens.letterSpacing}: ${bodyL.letterSpacing};
                ${segmentTokens.lineHeight}: ${bodyL.lineHeight};
            `,
            xl: css`
                ${segmentTokens.itemBorderRadius}: 1rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 4rem;
                ${segmentTokens.itemPadding}: 1.25rem 1.75rem;
                ${segmentTokens.itemPilledPadding}: 1.25rem;
                ${segmentTokens.itemContentPadding}: 0.0625rem 0.125rem;
                ${segmentTokens.itemIconMargin}: 0.375rem;
                ${segmentTokens.itemMarginLeft}: 0;

                ${segmentTokens.fontFamily}: ${bodyL.fontFamily};
                ${segmentTokens.fontSize}: ${bodyL.fontSize};
                ${segmentTokens.fontStyle}: ${bodyL.fontStyle};
                ${segmentTokens.fontWeight}: ${bodyLBold.fontWeight};
                ${segmentTokens.letterSpacing}: ${bodyL.letterSpacing};
                ${segmentTokens.lineHeight}: ${bodyL.lineHeight};
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
