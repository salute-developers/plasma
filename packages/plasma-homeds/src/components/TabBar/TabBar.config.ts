import { css, tabBarTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyXXS,
    bodyXXSBold,
    onDarkTextPrimary,
    shadowDownSoftM,
    shadowUpSoftM,
    surfaceAccent,
    surfaceNegative,
    surfaceSolidCard,
    surfaceTransparentTertiary,
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
                ${tokens.background}: ${surfaceSolidCard};
                ${tokens.boxShadow}: ${shadowUpSoftM};
                ${tokens.islandBoxShadow}: ${shadowDownSoftM};
                ${tokens.dividerColor}: ${surfaceTransparentTertiary};

                ${tokens.itemColor}: ${textSecondary};
                ${tokens.itemColorSelected}: ${textPrimary};
                ${tokens.itemFocusColor}: ${surfaceAccent};

                ${tokens.counterBackground}: ${surfaceNegative};
                ${tokens.counterColor}: ${onDarkTextPrimary};
            `,
        },
        size: {
            m: css`
                ${tokens.padding}: 0.125rem;
                ${tokens.gap}: 0.125rem;
                ${tokens.borderRadius}: 1rem;
                ${tokens.dividerWidth}: 0.0625rem;

                ${tokens.itemPadding}: 0.625rem 0 0.5rem;
                ${tokens.itemGap}: 0.125rem;
                ${tokens.itemBorderRadius}: 0.875rem;
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
            `,
        },
    },
};
