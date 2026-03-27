import {
    bodyM,
    surfacePositive,
    surfaceSolidDefault,
    surfaceSolidPrimary,
    surfaceSolidPrimaryActive,
    surfaceTransparentAccent,
    textAccent,
    textAccentActive,
    textAccentMinor,
    textPrimary,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, treeTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${tokens.iconFolderColor}: ${textPrimary};
                ${tokens.arrowColor}: ${textAccent};
                ${tokens.arrowColorHover}: ${textAccentMinor};
                ${tokens.arrowColorActive}: ${textAccentActive};
                ${tokens.color}: ${textPrimary};
                ${tokens.colorSelected}: ${textPrimary};
                ${tokens.itemBackgroundColorSelected}: ${surfaceSolidPrimary};
                ${tokens.itemBackgroundColorPrimary}: transparent;
                ${tokens.itemBackgroundColorHover}: ${surfaceTransparentAccent};
                ${tokens.itemBackgroundColorActive}: ${surfaceSolidPrimaryActive};
                ${tokens.checkboxBorderColor}: ${textAccent};
                ${tokens.checkboxBackgroundColor}: ${textAccent};
                ${tokens.itemDisabledOpacity}: 1;
                ${tokens.itemDisabledBorderColor}: ${textSecondary};
                ${tokens.itemDisabledColor}: ${textSecondary};
                ${tokens.itemDraggableBorderColor}: ${surfacePositive};
                ${tokens.itemDraggableLineColor}: ${surfaceSolidDefault};
            `,
        },
        size: {
            s: css`
                ${tokens.itemHeight}: 2.5rem;
                ${tokens.itemBackgroundExtraOffset}: 0.75rem;
                ${tokens.itemPaddingTop}: 0.5rem;
                ${tokens.itemPaddingRight}: 0.75rem;
                ${tokens.itemPaddingBottom}: 0.5rem;
                ${tokens.itemPaddingLeft}: 0.75rem;
                ${tokens.itemPaddingTightTop}: 0.4375rem;
                ${tokens.itemPaddingTightRight}: 0.5rem;
                ${tokens.itemPaddingTightBottom}: 0.4375rem;
                ${tokens.itemPaddingTightLeft}: 0.5rem;
                ${tokens.itemIndent}: 1.875rem;
                ${tokens.itemBorderRadius}: 0.5rem;
                ${tokens.itemTop}: 0rem;
                ${tokens.itemBottom}: 0rem;
                ${tokens.iconFolderMargin}: 0 0.375rem 0 0.5rem;
                ${tokens.switcherMargin}: 0 0 0 0;
                ${tokens.switcherMarginInverted}: 0 0 0 0;
                ${tokens.switcherSize}: 1.5rem;
                ${tokens.checkboxMargin}: 0 0 0 0.5rem;
                ${tokens.checkboxSize}: 1.5rem;
                ${tokens.checkboxInnerSize}: 1.25rem;
                ${tokens.checkboxBorderRadius}: 0.375rem;

                ${tokens.fontFamily}: ${bodyM.fontFamily};
                ${tokens.fontSize}: ${bodyM.fontSize};
                ${tokens.fontStyle}: ${bodyM.fontStyle};
                ${tokens.fontWeight}: ${bodyM.fontWeight};
                ${tokens.letterSpacing}: ${bodyM.letterSpacing};
                ${tokens.lineHeight}: ${bodyM.lineHeight};
            `,
        },
    },
};
