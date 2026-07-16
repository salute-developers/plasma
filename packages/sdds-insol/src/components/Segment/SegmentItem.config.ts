import { css, segmentTokens } from '@salutejs/plasma-new-hope/styled-components';
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
    surfaceSolidCard,
    surfaceSolidDefault,
    surfaceTransparentAccent,
    surfaceTransparentAccentHover,
    textAccent,
    textAccentHover,
    textPrimary,
    textPrimaryHover,
    textSecondary,
    textTertiary,
} from '@salutejs/sdds-themes/tokens/sdds_insol_next';

export const config = {
    defaults: {
        view: 'clear',
        size: 'xl',
    },
    variations: {
        view: {
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
            secondary: css`
                ${segmentTokens.itemColor}: ${textPrimary};
                ${segmentTokens.itemColorHover}: ${textPrimaryHover};
                ${segmentTokens.itemSelectedColor}: ${textAccent};
                ${segmentTokens.itemSelectedColorHover}: ${textAccentHover};

                ${segmentTokens.itemBackgroundColor}: transparent;
                ${segmentTokens.itemBackgroundColorHover}: transparent;
                ${segmentTokens.itemSelectedBackgroundColor}: ${surfaceSolidCard};
                ${segmentTokens.itemSelectedBackgroundColorHover}: ${surfaceSolidCard};

                ${segmentTokens.itemAdditionalColor}: ${textSecondary};
                ${segmentTokens.itemAdditionalColorHover}: ${textSecondary};
                ${segmentTokens.itemSelectedAdditionalColor}: ${textSecondary};
                ${segmentTokens.itemSelectedAdditionalColorHover}: ${textSecondary};

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
            accentTransparent: css`
                ${segmentTokens.itemColor}: ${textPrimary};
                ${segmentTokens.itemColorHover}: ${textPrimaryHover};

                ${segmentTokens.itemSelectedColor}: ${textAccent};
                ${segmentTokens.itemSelectedColorHover}: ${textAccentHover};

                ${segmentTokens.itemBackgroundColor}: transparent;
                ${segmentTokens.itemBackgroundColorHover}: transparent;

                ${segmentTokens.itemSelectedBackgroundColor}: ${surfaceTransparentAccent};
                ${segmentTokens.itemSelectedBackgroundColorHover}: ${surfaceTransparentAccentHover};

                ${segmentTokens.itemAdditionalColor}: ${textSecondary};
                ${segmentTokens.itemAdditionalColorHover}: ${textSecondary};

                ${segmentTokens.itemSelectedAdditionalColor}: ${textSecondary};
                ${segmentTokens.itemSelectedAdditionalColorHover}: ${textSecondary};

                ${segmentTokens.groupFilledBackgroundColor}: ${textAccent};
            `,
        },
        size: {
            xs: css`
                ${segmentTokens.itemBorderRadius}: 0.5rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 2rem;
                ${segmentTokens.itemPadding}: 0.5rem 0.75rem;
                ${segmentTokens.itemPilledPadding}: 0.5rem 0.625rem;
                ${segmentTokens.itemContentPadding}: 0.0625rem 0.125rem;
                ${segmentTokens.itemIconMargin}: 0.125rem;
                ${segmentTokens.itemMarginLeft}: 0;

                ${segmentTokens.fontFamily}: ${bodyXS.fontFamily};
                ${segmentTokens.fontSize}: ${bodyXS.fontSize};
                ${segmentTokens.fontStyle}: ${bodyXS.fontStyle};
                ${segmentTokens.fontWeight}: ${bodyXS.fontWeight};
                ${segmentTokens.fontWeightSelectedItem}: ${bodyXSBold.fontWeight};
                ${segmentTokens.letterSpacing}: ${bodyXS.letterSpacing};
                ${segmentTokens.lineHeight}: ${bodyXS.lineHeight};
            `,
            s: css`
                ${segmentTokens.itemBorderRadius}: 0.625rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 2.5rem;
                ${segmentTokens.itemPadding}: 0.75rem 1rem;
                ${segmentTokens.itemPilledPadding}: 0.75rem 0.75rem;
                ${segmentTokens.itemContentPadding}: 0.1875rem 0.125rem;
                ${segmentTokens.itemIconMargin}: 0.125rem;
                ${segmentTokens.itemMarginLeft}: 0rem;

                ${segmentTokens.fontFamily}: ${bodyS.fontFamily};
                ${segmentTokens.fontSize}: ${bodyS.fontSize};
                ${segmentTokens.fontStyle}: ${bodyS.fontStyle};
                ${segmentTokens.fontWeight}: ${bodyS.fontWeight};
                ${segmentTokens.fontWeightSelectedItem}: ${bodySBold.fontWeight};
                ${segmentTokens.letterSpacing}: ${bodyS.letterSpacing};
                ${segmentTokens.lineHeight}: ${bodyS.lineHeight};
            `,
            m: css`
                ${segmentTokens.itemBorderRadius}: 0.75rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 3rem;
                ${segmentTokens.itemPadding}: 0.875rem 1.25rem;
                ${segmentTokens.itemPilledPadding}: 0.875rem 1rem;
                ${segmentTokens.itemContentPadding}: 0.125rem;
                ${segmentTokens.itemIconMargin}: 0.25rem;
                ${segmentTokens.itemMarginLeft}: 0rem;

                ${segmentTokens.fontFamily}: ${bodyM.fontFamily};
                ${segmentTokens.fontSize}: ${bodyM.fontSize};
                ${segmentTokens.fontStyle}: ${bodyM.fontStyle};
                ${segmentTokens.fontWeight}: ${bodyM.fontWeight};
                ${segmentTokens.fontWeightSelectedItem}: ${bodyMBold.fontWeight};
                ${segmentTokens.letterSpacing}: ${bodyM.letterSpacing};
                ${segmentTokens.lineHeight}: ${bodyM.lineHeight};
            `,
            l: css`
                ${segmentTokens.itemBorderRadius}: 0.875rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 3.5rem;
                ${segmentTokens.itemPadding}: 1rem 1.5rem;
                ${segmentTokens.itemPilledPadding}: 1rem 1.25rem;
                ${segmentTokens.itemContentPadding}: 0.0625rem 0.125rem;
                ${segmentTokens.itemIconMargin}: 0.375rem;
                ${segmentTokens.itemMarginLeft}: 0;

                ${segmentTokens.fontFamily}: ${bodyL.fontFamily};
                ${segmentTokens.fontSize}: ${bodyL.fontSize};
                ${segmentTokens.fontStyle}: ${bodyL.fontStyle};
                ${segmentTokens.fontWeight}: ${bodyL.fontWeight};
                ${segmentTokens.fontWeightSelectedItem}: ${bodyLBold.fontWeight};
                ${segmentTokens.letterSpacing}: ${bodyL.letterSpacing};
                ${segmentTokens.lineHeight}: ${bodyL.lineHeight};
            `,
            xl: css`
                ${segmentTokens.itemBorderRadius}: 1rem;
                ${segmentTokens.itemWidth}: auto;
                ${segmentTokens.itemHeight}: 4rem;
                ${segmentTokens.itemPadding}: 1.25rem 1.75rem;
                ${segmentTokens.itemPilledPadding}: 1.25rem 1.5rem;
                ${segmentTokens.itemContentPadding}: 0.0625rem 0.125rem;
                ${segmentTokens.itemIconMargin}: 0.375rem;
                ${segmentTokens.itemMarginLeft}: 0;

                ${segmentTokens.fontFamily}: ${bodyL.fontFamily};
                ${segmentTokens.fontSize}: ${bodyL.fontSize};
                ${segmentTokens.fontStyle}: ${bodyL.fontStyle};
                ${segmentTokens.fontWeight}: ${bodyL.fontWeight};
                ${segmentTokens.fontWeightSelectedItem}: ${bodyLBold.fontWeight};
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
