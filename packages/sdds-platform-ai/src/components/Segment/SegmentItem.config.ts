import {
    bodyM,
    bodyMBold,
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
} from '@salutejs/sdds-themes/tokens/sdds_platform_ai';
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
