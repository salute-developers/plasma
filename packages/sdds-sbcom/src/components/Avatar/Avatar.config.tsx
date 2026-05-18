import { css, avatarTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyS,
    inverseTextPrimary,
    onDarkSurfaceSolidDefault,
    onDarkSurfaceTransparentCard,
    onDarkTextPrimary,
    onLightSurfaceSolidDefault,
    onLightSurfaceTransparentDeep,
    onLightTextPrimary,
    surfaceAccent,
    surfaceClear,
    surfaceNegative,
    surfacePositive,
    surfaceSolidDefault,
    surfaceSolidTertiary,
    surfaceTransparentAccent,
    surfaceTransparentNegative,
    surfaceTransparentSecondary,
    surfaceWarning,
    textAccent,
    textNegative,
    textPositive,
    textPrimary,
    textWarning,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyXxs, surfaceTransparentPositive, surfaceTransparentWarning
 * text, textAccentGradient
 */
export const config = {
    defaults: {
        view: 'default',
        size: 'xxl',
        shape: 'circled',
    },
    variations: {
        view: {
            default: css`
                ${tokens.color}: var(--text-accent-gradient);
                ${tokens.backgroundColor}: linear-gradient(94deg, rgba(62, 121, 240, 0.2) 6.49%, rgba(39, 198, 229, 0.2) 93.51%);
                ${tokens.statusOnlineColor}: ${surfacePositive};
                ${tokens.statusOfflineColor}: ${surfaceSolidTertiary};
                ${tokens.scaleHover}: 1.02;
                ${tokens.fontFamily}: ${bodyS.fontFamily};
            `,
        },
        size: {
            // TODO: #1044 токены типографики в Avatar
            xxl: css`
                ${tokens.avatarSize}: 6.25rem;
                ${tokens.fontSize}: 2rem;
                ${tokens.fontWeight}: 600;
                ${tokens.lineHeight}: 2rem;
                ${tokens.statusIconSize}: 0.75rem;
                ${tokens.borderRadius}: 1.125rem;

                ${tokens.badgeBorderRadius}: 0.5rem;
                ${tokens.badgeHeight}: 1.75rem;
                ${tokens.badgePadding}: 0 0.688rem;
                ${tokens.badgePaddingIconOnly}: 0 0.375rem;

                ${tokens.badgeFontFamily}: ${bodyS.fontFamily};
                ${tokens.badgeFontSize}: ${bodyS.fontSize};
                ${tokens.badgeFontStyle}: ${bodyS.fontStyle};
                ${tokens.badgeFontWeight}: ${bodyS.fontWeight};
                ${tokens.badgeLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.badgeLineHeight}: ${bodyS.lineHeight};

                ${tokens.badgeLeftContentMarginLeft}: -0.063rem;
                ${tokens.badgeLeftContentMarginRight}: 0.25rem;

                ${tokens.badgeRightContentMarginLeft}: 0.25rem;
                ${tokens.badgeRightContentMarginRight}: -0.063rem;
                ${tokens.badgePilledBorderRadius}: 1.25rem;

                ${tokens.counterBorderRadius}: 1rem;
                ${tokens.counterHeight}: 1.75rem;
                ${tokens.counterPadding}: 0 0.625rem;
                ${tokens.counterFontFamily}: ${bodyS.fontFamily};
                ${tokens.counterFontSize}: ${bodyS.fontSize};
                ${tokens.counterFontStyle}: ${bodyS.fontStyle};
                ${tokens.counterFontWeight}: ${bodyS.fontWeight};
                ${tokens.counterLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.counterLineHeight}: ${bodyS.lineHeight};
            `,
            l: css`
                ${tokens.avatarSize}: 3rem;
                ${tokens.fontSize}: 1.25rem;
                ${tokens.fontWeight}: 600;
                ${tokens.lineHeight}: 1.25rem;
                ${tokens.statusIconSize}: 0.5rem;
                ${tokens.borderRadius}: 0.75rem;

                ${tokens.extraPlacementFactor}: 2;

                ${tokens.badgeBorderRadius}: 0.375rem;
                ${tokens.badgeHeight}: 1.25rem;
                ${tokens.badgePadding}: 0 0.438rem;
                ${tokens.badgePaddingIconOnly}: 0 0.25rem;

                ${tokens.badgeFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${tokens.badgeFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${tokens.badgeFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${tokens.badgeFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${tokens.badgeLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${tokens.badgeLineHeight}: var(--plasma-typo-body-xxs-line-height);

                ${tokens.badgeLeftContentMarginLeft}: -0.063rem;
                ${tokens.badgeLeftContentMarginRight}: 0.125rem;

                ${tokens.badgeRightContentMarginLeft}: 0.125rem;
                ${tokens.badgeRightContentMarginRight}: -0.063rem;
                ${tokens.badgePilledBorderRadius}: 1.25rem;

                ${tokens.counterBorderRadius}: 1rem;
                ${tokens.counterHeight}: 1.25rem;
                ${tokens.counterPadding}: 0 0.375rem;
                ${tokens.counterFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${tokens.counterFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${tokens.counterFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${tokens.counterFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${tokens.counterLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${tokens.counterLineHeight}: var(--plasma-typo-body-xxs-line-height);
            `,
            m: css`
                ${tokens.avatarSize}: 2.25rem;
                ${tokens.fontSize}: 0.875rem;
                ${tokens.fontWeight}: 600;
                ${tokens.lineHeight}: 0.875rem;
                ${tokens.statusIconSize}: 0.5rem;
                ${tokens.borderRadius}: 0.625rem;

                ${tokens.extraPlacementFactor}: 2;

                ${tokens.badgeBorderRadius}: 0.25rem;
                ${tokens.badgeHeight}: 1rem;
                ${tokens.badgePadding}: 0 0.25rem;
                ${tokens.badgePaddingIconOnly}: 0 0.188rem;

                ${tokens.badgeFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${tokens.badgeFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${tokens.badgeFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${tokens.badgeFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${tokens.badgeLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${tokens.badgeLineHeight}: var(--plasma-typo-body-xxs-line-height);

                ${tokens.badgeLeftContentMarginLeft}: -0.063rem;
                ${tokens.badgeLeftContentMarginRight}: 0.125rem;

                ${tokens.badgeRightContentMarginLeft}: 0.125rem;
                ${tokens.badgeRightContentMarginRight}: -0.063rem;
                ${tokens.badgePilledBorderRadius}: 1.25rem;

                ${tokens.counterBorderRadius}: 1rem;
                ${tokens.counterHeight}: 1rem;
                ${tokens.counterPadding}: 0 0.25rem;
                ${tokens.counterFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${tokens.counterFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${tokens.counterFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${tokens.counterFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${tokens.counterLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${tokens.counterLineHeight}: var(--plasma-typo-body-xxs-line-height);
            `,
            s: css`
                ${tokens.avatarSize}: 1.5rem;
                ${tokens.fontSize}: 0.5rem;
                ${tokens.fontWeight}: 600;
                ${tokens.lineHeight}: 0.5rem;
                ${tokens.statusIconSize}: 0.375rem;
                ${tokens.borderRadius}: 0.5rem;

                ${tokens.extraPlacementFactor}: 1;

                ${tokens.counterBorderRadius}: 1rem;
                ${tokens.counterHeight}: 0.75rem;
                ${tokens.counterPadding}: 0 0.125rem;
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${tokens.counterFontFamily}: var(--plasma-typo-body-xxs-font-family);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${tokens.counterFontSize}: var(--plasma-typo-body-xxs-font-size);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${tokens.counterFontStyle}: var(--plasma-typo-body-xxs-font-style);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${tokens.counterFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${tokens.counterLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${tokens.counterLineHeight}: var(--plasma-typo-body-xxs-line-height);
            `,
            fit: css`
                ${tokens.avatarSize}: 100%;
                ${tokens.fontSize}: 0;
                ${tokens.fontWeight}: 0;
                ${tokens.lineHeight}: 0;
                ${tokens.statusIconSize}: 0;
            `,
        },
        shape: {
            circled: css`
                ${tokens.borderRadius}: 50%;
                ${tokens.statusLeft}: calc(0.867 * var(${tokens.avatarSize}) - var(${tokens.statusIconSize}) / 2);
                ${tokens.statusTop}: calc(0.867 * var(${tokens.avatarSize}) - var(${tokens.statusIconSize}) / 2);
            `,
            rounded: css`
                ${tokens.statusLeft}: calc(var(${tokens.avatarSize}) - var(${tokens.statusIconSize}));
                ${tokens.statusTop}: calc(var(${tokens.avatarSize}) - var(${tokens.statusIconSize}));
            `,
        },
        badgeView: {
            default: css`
                ${tokens.badgeColor}: ${inverseTextPrimary};
                ${tokens.badgeBackground}: ${surfaceSolidDefault};

                ${tokens.badgeColorTransparent}: ${textPrimary};
                ${tokens.badgeBackgroundTransparent}: ${surfaceTransparentSecondary};

                ${tokens.badgeColorClear}: ${textPrimary};
                ${tokens.badgeBackgroundClear}: ${surfaceClear};
            `,
            accent: css`
                ${tokens.badgeColor}: ${onDarkTextPrimary};
                ${tokens.badgeBackground}: ${surfaceAccent};

                ${tokens.badgeColorTransparent}: ${textAccent};
                ${tokens.badgeBackgroundTransparent}: ${surfaceTransparentAccent};

                ${tokens.badgeColorClear}: ${textAccent};
                ${tokens.badgeBackgroundClear}: ${surfaceClear};
            `,
            positive: css`
                ${tokens.badgeColor}: ${onDarkTextPrimary};
                ${tokens.badgeBackground}: ${surfacePositive};

                ${tokens.badgeColorTransparent}: ${textPositive};
                /* NOTE: no token surfaceTransparentPositive in @salutejs/sdds-themes/tokens */
                ${tokens.badgeBackgroundTransparent}: var(--surface-transparent-positive);

                ${tokens.badgeColorClear}: ${textPositive};
                ${tokens.badgeBackgroundClear}: ${surfaceClear};
            `,
            warning: css`
                ${tokens.badgeColor}: ${onDarkTextPrimary};
                ${tokens.badgeBackground}: ${surfaceWarning};

                ${tokens.badgeColorTransparent}: ${textWarning};
                /* NOTE: no token surfaceTransparentWarning in @salutejs/sdds-themes/tokens */
                ${tokens.badgeBackgroundTransparent}: var(--surface-transparent-warning);

                ${tokens.badgeColorClear}: ${textWarning};
                ${tokens.badgeBackgroundClear}: ${surfaceClear};
            `,
            negative: css`
                ${tokens.badgeColor}: ${onDarkTextPrimary};
                ${tokens.badgeBackground}: ${surfaceNegative};

                ${tokens.badgeColorTransparent}: ${textNegative};
                ${tokens.badgeBackgroundTransparent}: ${surfaceTransparentNegative};

                ${tokens.badgeColorClear}: ${textNegative};
                ${tokens.badgeBackgroundClear}: ${surfaceClear};
            `,
            dark: css`
                ${tokens.badgeColor}: ${onDarkTextPrimary};
                ${tokens.badgeBackground}: ${onLightSurfaceSolidDefault};

                ${tokens.badgeColorTransparent}: ${onDarkTextPrimary};
                ${tokens.badgeBackgroundTransparent}: ${onLightSurfaceTransparentDeep};

                ${tokens.badgeColorClear}: ${onLightTextPrimary};
                ${tokens.badgeBackgroundClear}: ${surfaceClear};
            `,
            light: css`
                ${tokens.badgeColor}: ${onLightTextPrimary};
                ${tokens.badgeBackground}: ${onDarkSurfaceSolidDefault};

                ${tokens.badgeColorTransparent}: ${onDarkTextPrimary};
                ${tokens.badgeBackgroundTransparent}: ${onDarkSurfaceTransparentCard};

                ${tokens.badgeColorClear}: ${onDarkTextPrimary};
                ${tokens.badgeBackgroundClear}: ${surfaceClear};
            `,
        },
        counterView: {
            default: css`
                ${tokens.counterColor}: ${inverseTextPrimary};
                ${tokens.counterBackground}: ${surfaceSolidDefault};
            `,
            accent: css`
                ${tokens.counterColor}: ${onDarkTextPrimary};
                ${tokens.counterBackground}: ${surfaceAccent};
            `,
            positive: css`
                ${tokens.counterColor}: ${onDarkTextPrimary};
                ${tokens.counterBackground}: ${surfacePositive};
            `,
            warning: css`
                ${tokens.counterColor}: ${onDarkTextPrimary};
                ${tokens.counterBackground}: ${surfaceWarning};
            `,
            negative: css`
                ${tokens.counterColor}: ${onDarkTextPrimary};
                ${tokens.counterBackground}: ${surfaceNegative};
            `,
            dark: css`
                ${tokens.counterColor}: ${onDarkTextPrimary};
                ${tokens.counterBackground}: ${onLightSurfaceSolidDefault};
            `,
            light: css`
                ${tokens.counterColor}: ${onLightTextPrimary};
                ${tokens.counterBackground}: ${onDarkSurfaceSolidDefault};
            `,
        },
    },
};
