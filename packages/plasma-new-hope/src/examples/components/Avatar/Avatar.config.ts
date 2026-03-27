import {
    bodyS,
    bodyXXS,
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
    surfaceTransparentPositive,
    surfaceTransparentSecondary,
    surfaceTransparentWarning,
    surfaceWarning,
    textAccent,
    textAccentGradient,
    textNegative,
    textPositive,
    textPrimary,
    textWarning,
} from '@salutejs/plasma-themes/tokens/plasma_b2c';
import { css } from '@linaria/core';

import { tokens } from '../../../components/Avatar/Avatar.tokens';

export const config = {
    defaults: {
        view: 'default',
        size: 'xxl',
        shape: 'circled',
    },
    variations: {
        view: {
            default: css`
                ${tokens.color}: ${textAccentGradient};
                // TODO: #1005 заменить на токен
                ${tokens.backgroundColor}: linear-gradient(94deg, rgba(62, 121, 240, 0.2) 6.49%, rgba(39, 198, 229, 0.2) 93.51%);
                ${tokens.statusOnlineColor}: ${surfacePositive};
                ${tokens.statusOfflineColor}: ${surfaceSolidTertiary};
                ${tokens.scaleHover}: 1.02;
            `,
        },
        size: {
            xxl: css`
                ${tokens.avatarSize}: 6.25rem;
                ${tokens.fontSize}: 2rem;
                ${tokens.fontWeight}: 600;
                ${tokens.lineHeight}: 2rem;
                ${tokens.statusIconSize}: 0.75rem;
                ${tokens.borderRadius}: 1.125rem;

                ${tokens.badgeBorderRadius}: 0.5rem;
                ${tokens.badgeHeight}: 1.75rem;
                ${tokens.badgePadding}: 0 0.6875rem;
                ${tokens.badgePaddingIconOnly}: 0 0.375rem;

                ${tokens.badgeFontFamily}: ${bodyS.fontFamily};
                ${tokens.badgeFontSize}: ${bodyS.fontSize};
                ${tokens.badgeFontStyle}: ${bodyS.fontStyle};
                ${tokens.badgeFontWeight}: ${bodyS.fontWeight};
                ${tokens.badgeLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.badgeLineHeight}: ${bodyS.lineHeight};

                ${tokens.badgeLeftContentMarginLeft}: -0.0625rem;
                ${tokens.badgeLeftContentMarginRight}: 0.25rem;

                ${tokens.badgeRightContentMarginLeft}: 0.25rem;
                ${tokens.badgeRightContentMarginRight}: -0.0625rem;
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
                ${tokens.badgePadding}: 0 0.4375rem;
                ${tokens.badgePaddingIconOnly}: 0 0.25rem;

                ${tokens.badgeFontFamily}: ${bodyXXS.fontFamily};
                ${tokens.badgeFontSize}: ${bodyXXS.fontSize};
                ${tokens.badgeFontStyle}: ${bodyXXS.fontStyle};
                ${tokens.badgeFontWeight}: ${bodyXXS.fontWeight};
                ${tokens.badgeLetterSpacing}: ${bodyXXS.letterSpacing};
                ${tokens.badgeLineHeight}: ${bodyXXS.lineHeight};

                ${tokens.badgeLeftContentMarginLeft}: -0.0625rem;
                ${tokens.badgeLeftContentMarginRight}: 0.125rem;

                ${tokens.badgeRightContentMarginLeft}: 0.125rem;
                ${tokens.badgeRightContentMarginRight}: -0.0625rem;
                ${tokens.badgePilledBorderRadius}: 1.25rem;

                ${tokens.counterBorderRadius}: 1rem;
                ${tokens.counterHeight}: 1.25rem;
                ${tokens.counterPadding}: 0 0.375rem;
                ${tokens.counterFontFamily}: ${bodyXXS.fontFamily};
                ${tokens.counterFontSize}: ${bodyXXS.fontSize};
                ${tokens.counterFontStyle}: ${bodyXXS.fontStyle};
                ${tokens.counterFontWeight}: ${bodyXXS.fontWeight};
                ${tokens.counterLetterSpacing}: ${bodyXXS.letterSpacing};
                ${tokens.counterLineHeight}: ${bodyXXS.lineHeight};
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

                ${tokens.badgeFontFamily}: ${bodyXXS.fontFamily};
                ${tokens.badgeFontSize}: ${bodyXXS.fontSize};
                ${tokens.badgeFontStyle}: ${bodyXXS.fontStyle};
                ${tokens.badgeFontWeight}: ${bodyXXS.fontWeight};
                ${tokens.badgeLetterSpacing}: ${bodyXXS.letterSpacing};
                ${tokens.badgeLineHeight}: ${bodyXXS.lineHeight};

                ${tokens.badgeLeftContentMarginLeft}: -0.0625rem;
                ${tokens.badgeLeftContentMarginRight}: 0.125rem;

                ${tokens.badgeRightContentMarginLeft}: 0.125rem;
                ${tokens.badgeRightContentMarginRight}: -0.0625rem;
                ${tokens.badgePilledBorderRadius}: 1.25rem;

                ${tokens.counterBorderRadius}: 1rem;
                ${tokens.counterHeight}: 1rem;
                ${tokens.counterPadding}: 0 0.25rem;
                ${tokens.counterFontFamily}: ${bodyXXS.fontFamily};
                ${tokens.counterFontSize}: ${bodyXXS.fontSize};
                ${tokens.counterFontStyle}: ${bodyXXS.fontStyle};
                ${tokens.counterFontWeight}: ${bodyXXS.fontWeight};
                ${tokens.counterLetterSpacing}: ${bodyXXS.letterSpacing};
                ${tokens.counterLineHeight}: ${bodyXXS.lineHeight};
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
                ${tokens.counterFontFamily}: ${bodyXXS.fontFamily};
                ${tokens.counterFontSize}: ${bodyXXS.fontSize};
                ${tokens.counterFontStyle}: ${bodyXXS.fontStyle};
                ${tokens.counterFontWeight}: ${bodyXXS.fontWeight};
                ${tokens.counterLetterSpacing}: ${bodyXXS.letterSpacing};
                ${tokens.counterLineHeight}: ${bodyXXS.lineHeight};
            `,
            fit: css`
                ${tokens.avatarSize}: 100%;
                ${tokens.fontSize}: 0;
                ${tokens.fontWeight}: 0;
                ${tokens.lineHeight}: 0;
                ${tokens.statusIconSize}: 0;
                ${tokens.borderRadius}: 50%;
            `,
        },
        focused: {
            true: css`
                ${tokens.outlineSize}: 0.1rem;
                ${tokens.outlineOffset}: -0.2rem;
                ${tokens.outlineColor}: ${surfaceAccent};
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
                ${tokens.badgeBackgroundClear}: ${surfaceClear}
            `,
            positive: css`
                ${tokens.badgeColor}: ${onDarkTextPrimary};
                ${tokens.badgeBackground}: ${surfacePositive};

                ${tokens.badgeColorTransparent}: ${textPositive};
                ${tokens.badgeBackgroundTransparent}: ${surfaceTransparentPositive};

                ${tokens.badgeColorClear}: ${textPositive};
                ${tokens.badgeBackgroundClear}: ${surfaceClear}
            `,
            warning: css`
                ${tokens.badgeColor}: ${onDarkTextPrimary};
                ${tokens.badgeBackground}: ${surfaceWarning};

                ${tokens.badgeColorTransparent}: ${textWarning};
                ${tokens.badgeBackgroundTransparent}: ${surfaceTransparentWarning};

                ${tokens.badgeColorClear}: ${textWarning};
                ${tokens.badgeBackgroundClear}: ${surfaceClear}
            `,
            negative: css`
                ${tokens.badgeColor}: ${onDarkTextPrimary};
                ${tokens.badgeBackground}: ${surfaceNegative};

                ${tokens.badgeColorTransparent}: ${textNegative};
                ${tokens.badgeBackgroundTransparent}: ${surfaceTransparentNegative};

                ${tokens.badgeColorClear}: ${textNegative};
                ${tokens.badgeBackgroundClear}: ${surfaceClear}
            `,
            dark: css`
                ${tokens.badgeColor}: ${onDarkTextPrimary};
                ${tokens.badgeBackground}: ${onLightSurfaceSolidDefault};

                ${tokens.badgeColorTransparent}: ${onDarkTextPrimary};
                ${tokens.badgeBackgroundTransparent}: ${onLightSurfaceTransparentDeep};

                ${tokens.badgeColorClear}: var(--on-light-text-pri
                ${tokens.badgeBackgroundClear}: ${surfaceClear}mary);
            `,
            light: css`
                ${tokens.badgeColor}: ${onLightTextPrimary};
                ${tokens.badgeBackground}: ${onDarkSurfaceSolidDefault};

                ${tokens.badgeColorTransparent}: ${onDarkTextPrimary};
                ${tokens.badgeBackgroundTransparent}: ${onDarkSurfaceTransparentCard};

                ${tokens.badgeColorClear}: var(--on-dark-text-prima
                ${tokens.badgeBackgroundClear}: ${surfaceClear}ry);
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
