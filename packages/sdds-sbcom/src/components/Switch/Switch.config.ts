import { css, switchTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    /*
     * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
     * Missing tokens in @salutejs/sdds-themes/tokens: bodyM, bodyXs, surfaceAccent, surfaceAccentHover
     */
    bodyL,
    bodyS,
    onDarkSurfaceSolidDefault,
    surfaceTransparentTertiary,
    surfaceTransparentTertiaryHover,
    textPrimary,
    textSecondary,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

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
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${switchTokens.descriptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${switchTokens.descriptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${switchTokens.descriptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${switchTokens.descriptionLineHeight}: var(--plasma-typo-body-xs-line-height);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${switchTokens.descriptionFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${switchTokens.descriptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${switchTokens.verticalGap}: 0.25rem;
                ${switchTokens.labelOffset}: 0.75rem;
            `,
            m: css`
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${switchTokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${switchTokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${switchTokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${switchTokens.lineHeight}: var(--plasma-typo-body-m-line-height);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${switchTokens.fontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${switchTokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${switchTokens.descriptionFontFamily}: ${bodyS.fontFamily};
                ${switchTokens.descriptionFontStyle}: ${bodyS.fontStyle};
                ${switchTokens.descriptionFontWeight}: ${bodyS.fontWeight};
                ${switchTokens.descriptionLineHeight}: ${bodyS.lineHeight};
                ${switchTokens.descriptionFontSize}: ${bodyS.fontSize};
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${switchTokens.descriptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
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
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${switchTokens.descriptionFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${switchTokens.descriptionFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${switchTokens.descriptionFontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${switchTokens.descriptionLineHeight}: var(--plasma-typo-body-m-line-height);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${switchTokens.descriptionFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${switchTokens.descriptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
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
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${switchTokens.trackBackgroundColorOn}: var(--surface-accent);
                /* NOTE: no token surfaceAccentHover in @salutejs/sdds-themes/tokens */
                ${switchTokens.trackBackgroundColorOnHover}: var(--surface-accent-hover);
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
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${switchTokens.trackFocusColor}: var(--surface-accent);
            `,
        },
    },
};
