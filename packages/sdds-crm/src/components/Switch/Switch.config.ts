import {
    bodyL,
    bodyM,
    bodyS,
    bodyXS,
    onDarkSurfaceSolidDefault,
    surfaceAccent,
    surfaceAccentHover,
    surfaceTransparentTertiary,
    surfaceTransparentTertiaryHover,
    textPrimary,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_serv';
import { css, switchTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        toggleSize: 'l',
        labelPosition: 'before',
        focused: 'true',
    },
    variations: {
        size: {
            s: css`
                ${switchTokens.fontFamily}: ${bodyS.fontFamily};
                ${switchTokens.fontStyle}: ${bodyS.fontStyle};
                ${switchTokens.fontWeight}: ${bodyS.fontWeight};
                ${switchTokens.lineHeight}: ${bodyS.lineHeight};
                ${switchTokens.fontSize}: ${bodyS.fontSize};
                ${switchTokens.letterSpacing}: ${bodyS.letterSpacing};
                ${switchTokens.descriptionFontFamily}: ${bodyXS.fontFamily};
                ${switchTokens.descriptionFontStyle}: ${bodyXS.fontStyle};
                ${switchTokens.descriptionFontWeight}: ${bodyXS.fontWeight};
                ${switchTokens.descriptionLineHeight}: ${bodyXS.lineHeight};
                ${switchTokens.descriptionFontSize}: ${bodyXS.fontSize};
                ${switchTokens.descriptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${switchTokens.verticalGap}: 0.25rem;
                ${switchTokens.labelOffset}: 0.75rem;
            `,
            m: css`
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
            l: css`
                ${switchTokens.fontFamily}: ${bodyL.fontFamily};
                ${switchTokens.fontStyle}: ${bodyL.fontStyle};
                ${switchTokens.fontWeight}: ${bodyL.fontWeight};
                ${switchTokens.lineHeight}: ${bodyL.lineHeight};
                ${switchTokens.fontSize}: ${bodyL.fontSize};
                ${switchTokens.letterSpacing}: ${bodyL.letterSpacing};
                ${switchTokens.descriptionFontFamily}: ${bodyM.fontFamily};
                ${switchTokens.descriptionFontStyle}: ${bodyM.fontStyle};
                ${switchTokens.descriptionFontWeight}: ${bodyM.fontWeight};
                ${switchTokens.descriptionLineHeight}: ${bodyM.lineHeight};
                ${switchTokens.descriptionFontSize}: ${bodyM.fontSize};
                ${switchTokens.descriptionLetterSpacing}: ${bodyXS.letterSpacing};
                ${switchTokens.verticalGap}: 0.25rem;
                ${switchTokens.labelOffset}: 0.75rem;
            `,
        },
        toggleSize: {
            l: css`
                ${switchTokens.trackWidth}: 2.75rem;
                ${switchTokens.trackHeight}: 1.75rem;
                ${switchTokens.trackBorderRadius}: calc(var(${switchTokens.trackHeight}) / 2);
                ${switchTokens.thumbSize}: 1.5rem;
                ${switchTokens.thumbBorderRadius}: calc(var(${switchTokens.thumbSize}) / 2);
                ${switchTokens.thumbOffsetOn}: 0.125rem;
                ${switchTokens.thumbOffsetOff}: 0.125rem;
                ${switchTokens.thumbPressScale}: 1.25;
            `,
            s: css`
                ${switchTokens.trackWidth}: 2rem;
                ${switchTokens.trackHeight}: 1.25rem;
                ${switchTokens.trackBorderRadius}: calc(var(${switchTokens.trackHeight}) / 2);
                ${switchTokens.thumbSize}: 1rem;
                ${switchTokens.thumbBorderRadius}: calc(var(${switchTokens.thumbSize}) / 2);
                ${switchTokens.thumbOffsetOn}: 0.125rem;
                ${switchTokens.thumbOffsetOff}: 0.125rem;
                ${switchTokens.thumbPressScale}: 1.25;
            `,
        },
        view: {
            default: css`
                ${switchTokens.labelColor}: ${textPrimary};
                ${switchTokens.descriptionColor}: ${textSecondary};
                ${switchTokens.descriptionMaxLines}: initial;
                ${switchTokens.trackBackgroundColorOn}: ${surfaceAccent};
                ${switchTokens.trackBackgroundColorOnHover}: ${surfaceAccentHover};
                ${switchTokens.trackBackgroundColorOff}: ${surfaceTransparentTertiary};
                ${switchTokens.trackBackgroundColorOffHover}: ${surfaceTransparentTertiaryHover};
                ${switchTokens.trackBorderWidthOn}: 0;
                ${switchTokens.trackBorderWidthOff}: 0;
                ${switchTokens.thumbBackgroundColorOn}: ${onDarkSurfaceSolidDefault};
                ${switchTokens.thumbBackgroundColorOff}: ${onDarkSurfaceSolidDefault};
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
