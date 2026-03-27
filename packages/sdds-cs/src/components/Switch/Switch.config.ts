import {
    bodyM,
    bodyS,
    bodyXS,
    outlineAccent,
    outlineAccentHover,
    outlineSolidPrimary,
    outlineSolidPrimaryHover,
    surfaceAccent,
    surfaceAccentHover,
    surfaceSolidCard,
    surfaceSolidCardHover,
    textPrimary,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, switchTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
        toggleSize: 'l',
        labelPosition: 'before',
        focused: 'true',
    },
    variations: {
        size: {
            s: css`
                ${switchTokens.fontFamily}: ${bodyM.fontFamily};
                ${switchTokens.fontStyle}: ${bodyM.fontStyle};
                ${switchTokens.fontWeight}: ${bodyM.fontWeight};
                ${switchTokens.lineHeight}: ${bodyM.lineHeight};
                ${switchTokens.fontSize}: ${bodyM.fontSize};
                ${switchTokens.letterSpacing}: ${bodyM.letterSpacing};
                ${switchTokens.descriptionFontFamily}: ${bodyS.fontFamily};
                ${switchTokens.descriptionFontStyle}: ${bodyS.fontStyle};
                ${switchTokens.descriptionFontWeight}: ${bodyS.fontWeight};
                ${switchTokens.descriptionLineHeight}: ${bodyS.lineHeight};
                ${switchTokens.descriptionFontSize}: ${bodyS.fontSize};
                ${switchTokens.descriptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${switchTokens.verticalGap}: 0.25rem;
                ${switchTokens.labelOffset}: 0.75rem;
            `,
        },
        toggleSize: {
            l: css`
                ${switchTokens.trackWidth}: 3rem;
                ${switchTokens.trackHeight}: 1.75rem;
                ${switchTokens.trackBorderRadius}: calc(var(${switchTokens.trackHeight}) / 2);
                ${switchTokens.thumbSize}: 1.25rem;
                ${switchTokens.thumbBorderRadius}: calc(var(${switchTokens.thumbSize}) / 2);
                ${switchTokens.thumbOffsetOn}: 0.25rem;
                ${switchTokens.thumbOffsetOff}: 0.125rem;
                ${switchTokens.thumbPressScale}: 1.25;
            `,
            s: css`
                ${switchTokens.trackWidth}: 2rem;
                ${switchTokens.trackHeight}: 1.25rem;
                ${switchTokens.trackBorderRadius}: calc(var(${switchTokens.trackHeight}) / 2);
                ${switchTokens.thumbSize}: 0.75rem;
                ${switchTokens.thumbBorderRadius}: calc(var(${switchTokens.thumbSize}) / 2);
                ${switchTokens.thumbOffsetOn}: 0.25rem;
                ${switchTokens.thumbOffsetOff}: 0.125rem;
                ${switchTokens.thumbPressScale}: 1.25;
            `,
        },
        view: {
            default: css`
                ${switchTokens.labelColor}: ${textPrimary};
                ${switchTokens.descriptionColor}: ${textSecondary};
                ${switchTokens.descriptionMaxLines}: 2;
                ${switchTokens.trackBackgroundColorOn}: ${surfaceAccent};
                ${switchTokens.trackBackgroundColorOnHover}: ${surfaceAccentHover};
                ${switchTokens.trackBackgroundColorOff}: ${surfaceSolidCard};
                ${switchTokens.trackBackgroundColorOffHover}: ${surfaceSolidCardHover};
                ${switchTokens.trackBorderWidthOn}: 0;
                ${switchTokens.trackBorderWidthOff}: 0.125rem;
                ${switchTokens.trackBorderColorOn}: ${outlineAccent};
                ${switchTokens.trackBorderColorOnHover}: ${outlineAccentHover};
                ${switchTokens.trackBorderColorOff}: ${outlineSolidPrimary};
                ${switchTokens.trackBorderColorOffHover}: ${outlineSolidPrimaryHover};
                ${switchTokens.thumbBackgroundColorOn}: ${surfaceSolidCard};
                ${switchTokens.thumbBackgroundColorOff}: ${surfaceAccent};
                ${switchTokens.thumbBoxShadow}: 0 1px 1px rgba(0, 0, 0, 0.11);
            `,
        },
        disabled: {
            true: css`
                ${switchTokens.disabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${switchTokens.trackFocusColor}: ${surfaceAccent};
            `,
        },
    },
};
