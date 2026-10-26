import { css, tabBarTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyXXS,
    bodyXXSBold,
    inverseTextPrimary,
    onDarkTextPrimary,
    shadowDownSoftM,
    shadowUpSoftM,
    surfaceAccent,
    surfaceNegative,
    surfaceSolidDefault,
    surfaceTransparentAccent,
    surfaceTransparentSecondary,
    surfaceTransparentTertiary,
    textAccent,
    textPrimary,
    textSecondary,
} from '@salutejs/plasma-themes/tokens/plasma_homeds';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.background}: ${surfaceTransparentSecondary};
                ${tokens.blur}: 3.125rem;
                ${tokens.boxShadow}: ${shadowUpSoftM};
                ${tokens.islandBoxShadow}: ${shadowDownSoftM};
                ${tokens.dividerColor}: ${surfaceTransparentTertiary};

                ${tokens.itemColor}: ${textSecondary};
                ${tokens.itemColorSelected}: ${textPrimary};
                ${tokens.itemColorSelectedBackground}: ${inverseTextPrimary};
                ${tokens.itemBackground}: transparent;
                ${tokens.itemBackgroundSelected}: ${surfaceSolidDefault};
                ${tokens.itemFocusColor}: ${surfaceAccent};

                ${tokens.counterBackground}: ${surfaceNegative};
                ${tokens.counterColor}: ${onDarkTextPrimary};

                ${tokens.homeIndicatorColor}: ${textPrimary};
            `,
            accent: css`
                ${tokens.background}: ${surfaceTransparentSecondary};
                ${tokens.blur}: 3.125rem;
                ${tokens.boxShadow}: ${shadowUpSoftM};
                ${tokens.islandBoxShadow}: ${shadowDownSoftM};
                ${tokens.dividerColor}: ${surfaceTransparentTertiary};

                ${tokens.itemColor}: ${textSecondary};
                ${tokens.itemColorSelected}: ${textAccent};
                ${tokens.itemColorSelectedBackground}: ${textAccent};
                ${tokens.itemBackground}: transparent;
                ${tokens.itemBackgroundSelected}: ${surfaceTransparentAccent};
                ${tokens.itemFocusColor}: ${surfaceAccent};

                ${tokens.counterBackground}: ${surfaceNegative};
                ${tokens.counterColor}: ${onDarkTextPrimary};

                ${tokens.homeIndicatorColor}: ${textPrimary};
            `,
            secondary: css`
                ${tokens.background}: ${surfaceTransparentSecondary};
                ${tokens.blur}: 3.125rem;
                ${tokens.boxShadow}: ${shadowUpSoftM};
                ${tokens.islandBoxShadow}: ${shadowDownSoftM};
                ${tokens.dividerColor}: ${surfaceTransparentTertiary};

                ${tokens.itemColor}: ${textSecondary};
                ${tokens.itemColorSelected}: ${textSecondary};
                ${tokens.itemColorSelectedBackground}: ${textPrimary};
                ${tokens.itemBackground}: transparent;
                ${tokens.itemBackgroundSelected}: ${surfaceTransparentSecondary};
                ${tokens.itemFocusColor}: ${surfaceAccent};

                ${tokens.counterBackground}: ${surfaceNegative};
                ${tokens.counterColor}: ${onDarkTextPrimary};

                ${tokens.homeIndicatorColor}: ${textPrimary};
            `,
        },
        size: {
            m: css`
                ${tokens.padding}: 0.125rem 0.5rem;
                ${tokens.paddingBottom}: 0.125rem;
                ${tokens.gap}: 0.5rem;
                ${tokens.borderRadius}: 2rem;
                ${tokens.dividerWidth}: 0.0625rem;

                ${tokens.itemPadding}: 0.6875rem 0;
                ${tokens.itemGap}: 0.125rem;
                ${tokens.itemBorderRadius}: 1.875rem;
                ${tokens.itemIconSize}: 1.5rem;

                ${tokens.itemLabelFontFamily}: ${bodyXXSBold.fontFamily};
                ${tokens.itemLabelFontSize}: ${bodyXXSBold.fontSize};
                ${tokens.itemLabelFontStyle}: ${bodyXXSBold.fontStyle};
                ${tokens.itemLabelFontWeight}: ${bodyXXSBold.fontWeight};
                ${tokens.itemLabelLetterSpacing}: ${bodyXXSBold.letterSpacing};
                ${tokens.itemLabelLineHeight}: ${bodyXXSBold.lineHeight};

                ${tokens.counterHeight}: 1rem;
                ${tokens.counterPadding}: 0 0.25rem;
                ${tokens.counterBorderRadius}: 1rem;
                ${tokens.counterFontFamily}: ${bodyXXS.fontFamily};
                ${tokens.counterFontSize}: ${bodyXXS.fontSize};
                ${tokens.counterFontStyle}: ${bodyXXS.fontStyle};
                ${tokens.counterFontWeight}: ${bodyXXS.fontWeight};
                ${tokens.counterLetterSpacing}: ${bodyXXS.letterSpacing};
                ${tokens.counterLineHeight}: ${bodyXXS.lineHeight};

                ${tokens.homeIndicatorWidth}: 8.8125rem;
                ${tokens.homeIndicatorHeight}: 0.25rem;
                ${tokens.homeIndicatorRadius}: 6.25rem;
                ${tokens.homeIndicatorPadding}: 1rem 0 0.375rem;
            `,
            l: css`
                ${tokens.padding}: 0.125rem;
                ${tokens.paddingBottom}: 0.125rem;
                ${tokens.gap}: 0.125rem;
                ${tokens.borderRadius}: 1.125rem;
                ${tokens.dividerWidth}: 0.0625rem;

                ${tokens.itemPadding}: 0.75rem 0;
                ${tokens.itemGap}: 0;
                ${tokens.itemBorderRadius}: 1rem;
                ${tokens.itemIconSize}: 2.25rem;

                ${tokens.itemLabelFontFamily}: ${bodyXXSBold.fontFamily};
                ${tokens.itemLabelFontSize}: ${bodyXXSBold.fontSize};
                ${tokens.itemLabelFontStyle}: ${bodyXXSBold.fontStyle};
                ${tokens.itemLabelFontWeight}: ${bodyXXSBold.fontWeight};
                ${tokens.itemLabelLetterSpacing}: ${bodyXXSBold.letterSpacing};
                ${tokens.itemLabelLineHeight}: ${bodyXXSBold.lineHeight};

                ${tokens.counterHeight}: 1.25rem;
                ${tokens.counterPadding}: 0 0.375rem;
                ${tokens.counterBorderRadius}: 1rem;
                ${tokens.counterFontFamily}: ${bodyXXS.fontFamily};
                ${tokens.counterFontSize}: ${bodyXXS.fontSize};
                ${tokens.counterFontStyle}: ${bodyXXS.fontStyle};
                ${tokens.counterFontWeight}: ${bodyXXS.fontWeight};
                ${tokens.counterLetterSpacing}: ${bodyXXS.letterSpacing};
                ${tokens.counterLineHeight}: ${bodyXXS.lineHeight};

                ${tokens.homeIndicatorWidth}: 8.8125rem;
                ${tokens.homeIndicatorHeight}: 0.25rem;
                ${tokens.homeIndicatorRadius}: 6.25rem;
                ${tokens.homeIndicatorPadding}: 1rem 0 0.5rem;
            `,
        },
    },
};
