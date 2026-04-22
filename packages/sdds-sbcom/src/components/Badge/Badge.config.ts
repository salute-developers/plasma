import { css, badgeTokens } from '@salutejs/plasma-new-hope/styled-components';
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
    surfaceTransparentAccent,
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
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyXs, bodyXxs, surfaceTransparentNegative
 * surfaceTransparentPositive, surfaceTransparentWarning
 */
export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${badgeTokens.color}: ${inverseTextPrimary};
                ${badgeTokens.background}: ${surfaceSolidDefault};

                ${badgeTokens.colorTransparent}: ${textPrimary};
                ${badgeTokens.backgroundTransparent}: ${surfaceTransparentSecondary};

                ${badgeTokens.colorClear}: ${textPrimary};
            `,
            accent: css`
                ${badgeTokens.color}: ${onDarkTextPrimary};
                ${badgeTokens.background}: ${surfaceAccent};

                ${badgeTokens.colorTransparent}: ${textAccent};
                ${badgeTokens.backgroundTransparent}: ${surfaceTransparentAccent};

                ${badgeTokens.colorClear}: ${textAccent};
            `,
            positive: css`
                ${badgeTokens.color}: ${onDarkTextPrimary};
                ${badgeTokens.background}: ${surfacePositive};

                ${badgeTokens.colorTransparent}: ${textPositive};
                ${badgeTokens.backgroundTransparent}: var(--surface-transparent-positive);

                ${badgeTokens.colorClear}: ${textPositive};
            `,
            warning: css`
                ${badgeTokens.color}: ${onDarkTextPrimary};
                ${badgeTokens.background}: ${surfaceWarning};

                ${badgeTokens.colorTransparent}: ${textWarning};
                ${badgeTokens.backgroundTransparent}: var(--surface-transparent-warning);

                ${badgeTokens.colorClear}: ${textWarning};
            `,
            negative: css`
                ${badgeTokens.color}: ${onDarkTextPrimary};
                ${badgeTokens.background}: ${surfaceNegative};

                ${badgeTokens.colorTransparent}: ${textNegative};
                ${badgeTokens.backgroundTransparent}: var(--surface-transparent-negative);

                ${badgeTokens.colorClear}: ${textNegative};
            `,
            dark: css`
                ${badgeTokens.color}: ${onDarkTextPrimary};
                ${badgeTokens.background}: ${onLightSurfaceSolidDefault};

                ${badgeTokens.colorTransparent}: ${onDarkTextPrimary};
                ${badgeTokens.backgroundTransparent}: ${onLightSurfaceTransparentDeep};

                ${badgeTokens.colorClear}: ${onLightTextPrimary};
            `,
            light: css`
                ${badgeTokens.color}: ${onLightTextPrimary};
                ${badgeTokens.background}: ${onDarkSurfaceSolidDefault};

                ${badgeTokens.colorTransparent}: ${onDarkTextPrimary};
                ${badgeTokens.backgroundTransparent}: ${onDarkSurfaceTransparentCard};

                ${badgeTokens.colorClear}: ${onDarkTextPrimary};
            `,
        },
        size: {
            l: css`
                ${badgeTokens.borderRadius}: 0.5rem;
                ${badgeTokens.height}: 1.75rem;
                ${badgeTokens.padding}: 0 0.6875rem;
                ${badgeTokens.paddingIconOnly}: 0 0.375rem;

                ${badgeTokens.fontFamily}: ${bodyS.fontFamily};
                ${badgeTokens.fontSize}: ${bodyS.fontSize};
                ${badgeTokens.fontStyle}: ${bodyS.fontStyle};
                ${badgeTokens.fontWeight}: ${bodyS.fontWeight};
                ${badgeTokens.letterSpacing}: ${bodyS.letterSpacing};
                ${badgeTokens.lineHeight}: ${bodyS.lineHeight};

                ${badgeTokens.leftContentMarginLeft}: -0.0625rem;
                ${badgeTokens.leftContentMarginRight}: 0.25rem;

                ${badgeTokens.rightContentMarginLeft}: 0.25rem;
                ${badgeTokens.rightContentMarginRight}: -0.0625rem;
            `,
            m: css`
                ${badgeTokens.borderRadius}: 0.375rem;
                ${badgeTokens.height}: 1.5rem;
                ${badgeTokens.padding}: 0 0.5625rem;
                ${badgeTokens.paddingIconOnly}: 0 0.375rem;

                ${badgeTokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                ${badgeTokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                ${badgeTokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                ${badgeTokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${badgeTokens.letterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${badgeTokens.lineHeight}: var(--plasma-typo-body-xs-line-height);

                ${badgeTokens.leftContentMarginLeft}: -0.0625rem;
                ${badgeTokens.leftContentMarginRight}: 0.1875rem;

                ${badgeTokens.rightContentMarginLeft}: 0.1875rem;
                ${badgeTokens.rightContentMarginRight}: -0.0625rem;
            `,
            s: css`
                ${badgeTokens.borderRadius}: 0.375rem;
                ${badgeTokens.height}: 1.25rem;
                ${badgeTokens.padding}: 0 0.4375rem;
                ${badgeTokens.paddingIconOnly}: 0 0.25rem;

                ${badgeTokens.fontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${badgeTokens.fontSize}: var(--plasma-typo-body-xxs-font-size);
                ${badgeTokens.fontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${badgeTokens.fontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${badgeTokens.letterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${badgeTokens.lineHeight}: var(--plasma-typo-body-xxs-line-height);

                ${badgeTokens.leftContentMarginLeft}: -0.0625rem;
                ${badgeTokens.leftContentMarginRight}: 0.125rem;

                ${badgeTokens.rightContentMarginLeft}: 0.125rem;
                ${badgeTokens.rightContentMarginRight}: -0.0625rem;
            `,
            xs: css`
                ${badgeTokens.borderRadius}: 0.25rem;
                ${badgeTokens.height}: 1rem;
                ${badgeTokens.padding}: 0 0.25rem;
                ${badgeTokens.paddingIconOnly}: 0 0.188rem;

                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${badgeTokens.fontFamily}: var(--plasma-typo-body-xxs-font-family);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${badgeTokens.fontSize}: var(--plasma-typo-body-xxs-font-size);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${badgeTokens.fontStyle}: var(--plasma-typo-body-xxs-font-style);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${badgeTokens.fontWeight}: var(--plasma-typo-body-xxs-font-weight);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${badgeTokens.letterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${badgeTokens.lineHeight}: var(--plasma-typo-body-xxs-line-height);

                ${badgeTokens.leftContentMarginLeft}: -0.0625rem;
                ${badgeTokens.leftContentMarginRight}: 0.125rem;

                ${badgeTokens.rightContentMarginLeft}: 0.125rem;
                ${badgeTokens.rightContentMarginRight}: -0.0625rem;
            `,
        },
        pilled: {
            true: css`
                ${badgeTokens.pilledBorderRadius}: 1.25rem;
            `,
        },
        transparent: {
            true: css``,
        },
        clear: {
            true: css`
                ${badgeTokens.backgroundClear}: ${surfaceClear};
            `,
        },
    },
};
