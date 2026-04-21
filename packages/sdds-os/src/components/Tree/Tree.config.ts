import {
    bodyM,
    bodyS,
    surfacePositive,
    surfaceSolidDefault,
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryActive,
    surfaceTransparentSecondaryHover,
    textAccent,
    textPrimary,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
} from '@salutejs/sdds-themes/tokens/sdds_os';
import { css, treeTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.iconFolderColor}: ${textPrimary};
                ${tokens.arrowColor}: ${textSecondary};
                ${tokens.arrowColorHover}: ${textSecondaryHover};
                ${tokens.arrowColorActive}: ${textSecondaryActive};
                ${tokens.color}: ${textPrimary};
                ${tokens.colorSelected}: ${textPrimary};
                ${tokens.itemBackgroundColorSelected}: ${surfaceTransparentSecondary};
                ${tokens.itemBackgroundColorPrimary}: transparent;

                ${tokens.itemBackgroundColorHover}: ${surfaceTransparentSecondaryHover};
                ${tokens.itemBackgroundColorActive}: ${surfaceTransparentSecondaryActive};
                ${tokens.checkboxBorderColor}: ${textSecondary};
                ${tokens.checkboxBackgroundColor}: ${textAccent};
                ${tokens.itemDisabledOpacity}: 0.4;
                ${tokens.itemDisabledBorderColor}: ${textSecondary};
                ${tokens.itemDisabledColor}: ${textSecondary};
                ${tokens.itemDraggableBorderColor}: ${surfacePositive};
                ${tokens.itemDraggableLineColor}: ${surfaceSolidDefault};
            `,
        },
        size: {
            m: css`
                ${tokens.itemHeight}: 3rem;
                ${tokens.itemBackgroundExtraOffset}: 0.875rem;
                ${tokens.itemPaddingTop}: 0.75rem;
                ${tokens.itemPaddingRight}: 0.875rem;
                ${tokens.itemPaddingBottom}: 0.75rem;
                ${tokens.itemPaddingLeft}: 0.875rem;
                ${tokens.itemPaddingTightTop}: 0.5rem;
                ${tokens.itemPaddingTightRight}: 0.875rem;
                ${tokens.itemPaddingTightBottom}: 0.5rem;
                ${tokens.itemPaddingTightLeft}: 0.875rem;
                ${tokens.itemIndent}: 2rem;
                ${tokens.itemBorderRadius}: 0.625rem;
                ${tokens.itemTop}: 0.25rem;
                ${tokens.itemBottom}: 0.25rem;
                ${tokens.iconFolderMargin}: 0 0.5rem 0 0;
                ${tokens.switcherMargin}: 0 0.5rem 0 0;
                ${tokens.switcherMarginInverted}: 0 0 0 0.5rem;
                ${tokens.switcherSize}: 1.5rem;
                ${tokens.checkboxMargin}: 0 0.5rem 0 0;
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
                ${tokens.itemTop}: 0.25rem;
                ${tokens.itemBottom}: 0.25rem;
                ${tokens.iconFolderMargin}: 0 0.375rem 0 0;
                ${tokens.switcherMargin}: 0 0.375rem 0 0;
                ${tokens.switcherMarginInverted}: 0 0 0 0.375rem;
                ${tokens.switcherSize}: 1.5rem;
                ${tokens.checkboxMargin}: 0 0.25rem 0 0;
                ${tokens.checkboxSize}: 1.5rem;
                ${tokens.checkboxInnerSize}: 1.25rem;
                ${tokens.checkboxBorderRadius}: 0.375rem;

                ${tokens.fontFamily}: ${bodyS.fontFamily};
                ${tokens.fontSize}: ${bodyS.fontSize};
                ${tokens.fontStyle}: ${bodyS.fontStyle};
                ${tokens.fontWeight}: ${bodyS.fontWeight};
                ${tokens.letterSpacing}: ${bodyS.letterSpacing};
                ${tokens.lineHeight}: ${bodyS.lineHeight};
            `,
        },
    },
};
