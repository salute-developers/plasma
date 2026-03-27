import {
    bodyL,
    bodyM,
    bodyS,
    bodyXS,
    surfaceAccent,
    surfaceTransparentPrimary,
    surfaceTransparentSecondary,
    surfaceTransparentTertiary,
} from '@salutejs/plasma-themes/tokens/plasma_b2c';
import { css } from '@linaria/core';

import { timePickerGridTokens as tokens } from '../../../components/TimePickerGrid';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.itemBackgroundHover}: ${surfaceTransparentSecondary};
                ${tokens.itemBackgroundActive}: ${surfaceTransparentSecondary};
                ${tokens.itemFocusColor}: ${surfaceAccent};

                ${tokens.scrollbarColor}: ${surfaceTransparentTertiary};
                ${tokens.scrollbarTrackColor}: ${surfaceTransparentPrimary};

                ${tokens.disabledOpacity}: 0.4;
            `,
        },
        size: {
            l: css`
                ${tokens.timePickerGridWidth}: 15rem;
                ${tokens.columnHeight}: 36.25rem;

                ${tokens.itemFontFamily}: ${bodyL.fontFamily};
                ${tokens.itemFontSize}: ${bodyL.fontSize};
                ${tokens.itemFontStyle}: ${bodyL.fontStyle};
                ${tokens.itemFontWeight}: ${bodyL.fontWeight};
                ${tokens.itemLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.itemLineHeight}: ${bodyL.lineHeight};

                ${tokens.itemHeight}: 3.5rem;
                ${tokens.itemBorderRadius}: 0.75rem;
                ${tokens.itemPadding}: 0rem;

                ${tokens.scrollbarWidth}: 0.125rem;
                ${tokens.scrollbarMargin}: 0.5rem;
            `,
            m: css`
                ${tokens.timePickerGridWidth}: 15rem;
                ${tokens.columnHeight}: 31.25rem;

                ${tokens.itemFontFamily}: ${bodyM.fontFamily};
                ${tokens.itemFontSize}: ${bodyM.fontSize};
                ${tokens.itemFontStyle}: ${bodyM.fontStyle};
                ${tokens.itemFontWeight}: ${bodyM.fontWeight};
                ${tokens.itemLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.itemLineHeight}: ${bodyM.lineHeight};

                ${tokens.itemHeight}: 3rem;
                ${tokens.itemBorderRadius}: 0.625rem;
                ${tokens.itemPadding}: 0rem;

                ${tokens.scrollbarWidth}: 0.125rem;
                ${tokens.scrollbarMargin}: 0.375rem;
            `,
            s: css`
                ${tokens.timePickerGridWidth}: 15rem;
                ${tokens.columnHeight}: 26.25rem;

                ${tokens.itemFontFamily}: ${bodyS.fontFamily};
                ${tokens.itemFontSize}: ${bodyS.fontSize};
                ${tokens.itemFontStyle}: ${bodyS.fontStyle};
                ${tokens.itemFontWeight}: ${bodyS.fontWeight};
                ${tokens.itemLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.itemLineHeight}: ${bodyS.lineHeight};

                ${tokens.itemHeight}: 2.5rem;
                ${tokens.itemBorderRadius}: 0.5rem;
                ${tokens.itemPadding}: 0rem;

                ${tokens.scrollbarWidth}: 0.125rem;
                ${tokens.scrollbarMargin}: 0.25rem;
            `,
            xs: css`
                ${tokens.timePickerGridWidth}: 15rem;
                ${tokens.columnHeight}: 21.25rem;

                ${tokens.itemFontFamily}: ${bodyXS.fontFamily};
                ${tokens.itemFontSize}: ${bodyXS.fontSize};
                ${tokens.itemFontStyle}: ${bodyXS.fontStyle};
                ${tokens.itemFontWeight}: ${bodyXS.fontWeight};
                ${tokens.itemLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.itemLineHeight}: ${bodyXS.lineHeight};

                ${tokens.itemHeight}: 2rem;
                ${tokens.itemBorderRadius}: 0.375rem;
                ${tokens.itemPadding}: 0rem;

                ${tokens.scrollbarWidth}: 0.125rem;
                ${tokens.scrollbarMargin}: 0.25rem;

                ${tokens.disabledOpacity}: 0.4;
            `,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
