import { css, chipTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    /*
     * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
     * Missing tokens in @salutejs/sdds-themes/tokens: bodyM, bodyXs, bodyXxs, surfaceAccent, surfaceAccentActive
     * surfaceAccentHover
     */
    bodyL,
    bodyS,
    inverseTextPrimary,
    inverseTextSecondary,
    inverseTextSecondaryHover,
    onDarkTextPrimary,
    onDarkTextSecondary,
    onDarkTextSecondaryHover,
    surfaceNegative,
    surfaceNegativeActive,
    surfaceNegativeHover,
    surfacePositive,
    surfacePositiveActive,
    surfacePositiveHover,
    surfaceSolidDefault,
    surfaceSolidDefaultActive,
    surfaceSolidDefaultHover,
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryActive,
    surfaceTransparentSecondaryHover,
    surfaceWarning,
    surfaceWarningActive,
    surfaceWarningHover,
    textAccent,
    textPrimary,
    textSecondary,
    textSecondaryHover,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${chipTokens.color}: ${inverseTextPrimary};
                ${chipTokens.background}: ${surfaceSolidDefault};
                ${chipTokens.colorHover}: ${inverseTextPrimary};
                ${chipTokens.backgroundHover}: ${surfaceSolidDefaultHover};
                ${chipTokens.colorActive}: ${inverseTextPrimary};
                ${chipTokens.backgroundActive}: ${surfaceSolidDefaultActive};
                ${chipTokens.backgroundReadOnly}: ${surfaceSolidDefault};
                ${chipTokens.colorReadOnly}: ${inverseTextPrimary};
                ${chipTokens.backgroundReadOnlyHover}: ${surfaceSolidDefault};
                ${chipTokens.colorReadOnlyHover}: ${inverseTextPrimary};
                ${chipTokens.closeIconColor}: ${inverseTextSecondary};
                ${chipTokens.closeIconColorHover}: ${inverseTextSecondaryHover};
                ${chipTokens.leftContentColor}: ${inverseTextPrimary};
            `,
            secondary: css`
                ${chipTokens.color}: ${textPrimary};
                ${chipTokens.background}: ${surfaceTransparentSecondary};
                ${chipTokens.colorHover}: ${textPrimary};
                ${chipTokens.backgroundHover}: ${surfaceTransparentSecondaryHover};
                ${chipTokens.colorActive}: ${textPrimary};
                ${chipTokens.backgroundActive}: ${surfaceTransparentSecondaryActive};
                ${chipTokens.backgroundReadOnly}: ${surfaceTransparentSecondary};
                ${chipTokens.colorReadOnly}: ${textPrimary};
                ${chipTokens.backgroundReadOnlyHover}: ${surfaceTransparentSecondary};
                ${chipTokens.colorReadOnlyHover}: ${textPrimary};
                ${chipTokens.closeIconColor}: ${textSecondary};
                ${chipTokens.closeIconColorHover}: ${textSecondaryHover};
                ${chipTokens.leftContentColor}: ${textPrimary};
            `,
            accent: css`
                ${chipTokens.color}: ${onDarkTextPrimary};
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${chipTokens.background}: var(--surface-accent);
                ${chipTokens.colorHover}: ${onDarkTextPrimary};
                /* NOTE: no token surfaceAccentHover in @salutejs/sdds-themes/tokens */
                ${chipTokens.backgroundHover}: var(--surface-accent-hover);
                ${chipTokens.colorActive}: ${onDarkTextPrimary};
                /* NOTE: no token surfaceAccentActive in @salutejs/sdds-themes/tokens */
                ${chipTokens.backgroundActive}: var(--surface-accent-active);
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${chipTokens.backgroundReadOnly}: var(--surface-accent);
                ${chipTokens.colorReadOnly}: ${onDarkTextPrimary};
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${chipTokens.backgroundReadOnlyHover}: var(--surface-accent);
                ${chipTokens.colorReadOnlyHover}: ${onDarkTextPrimary};
                ${chipTokens.closeIconColor}: ${onDarkTextSecondary};
                ${chipTokens.closeIconColorHover}: ${onDarkTextSecondaryHover};
                ${chipTokens.leftContentColor}: ${onDarkTextPrimary};
            `,
            positive: css`
                ${chipTokens.color}: ${onDarkTextPrimary};
                ${chipTokens.background}: ${surfacePositive};
                ${chipTokens.colorHover}: ${onDarkTextPrimary};
                ${chipTokens.backgroundHover}: ${surfacePositiveHover};
                ${chipTokens.colorActive}: ${onDarkTextPrimary};
                ${chipTokens.backgroundActive}: ${surfacePositiveActive};
                ${chipTokens.backgroundReadOnly}: ${surfacePositive};
                ${chipTokens.colorReadOnly}: ${onDarkTextPrimary};
                ${chipTokens.backgroundReadOnlyHover}: ${surfacePositive};
                ${chipTokens.colorReadOnlyHover}: ${onDarkTextPrimary};
                ${chipTokens.closeIconColor}: ${onDarkTextSecondary};
                ${chipTokens.closeIconColorHover}: ${onDarkTextSecondaryHover};
                ${chipTokens.leftContentColor}: ${onDarkTextPrimary};
            `,
            warning: css`
                ${chipTokens.color}: ${onDarkTextPrimary};
                ${chipTokens.background}: ${surfaceWarning};
                ${chipTokens.colorHover}: ${onDarkTextPrimary};
                ${chipTokens.backgroundHover}: ${surfaceWarningHover};
                ${chipTokens.colorActive}: ${onDarkTextPrimary};
                ${chipTokens.backgroundActive}: ${surfaceWarningActive};
                ${chipTokens.backgroundReadOnly}: ${surfaceWarning};
                ${chipTokens.colorReadOnly}: ${onDarkTextPrimary};
                ${chipTokens.backgroundReadOnlyHover}: ${surfaceWarning};
                ${chipTokens.colorReadOnlyHover}: ${onDarkTextPrimary};
                ${chipTokens.closeIconColor}: ${onDarkTextSecondary};
                ${chipTokens.closeIconColorHover}: ${onDarkTextSecondaryHover};
                ${chipTokens.leftContentColor}: ${onDarkTextPrimary};
            `,
            negative: css`
                ${chipTokens.color}: ${onDarkTextPrimary};
                ${chipTokens.background}: ${surfaceNegative};
                ${chipTokens.colorHover}: ${onDarkTextPrimary};
                ${chipTokens.backgroundHover}: ${surfaceNegativeHover};
                ${chipTokens.colorActive}: ${onDarkTextPrimary};
                ${chipTokens.backgroundActive}: ${surfaceNegativeActive};
                ${chipTokens.backgroundReadOnly}: ${surfaceNegative};
                ${chipTokens.colorReadOnly}: ${onDarkTextPrimary};
                ${chipTokens.backgroundReadOnlyHover}: ${surfaceNegative};
                ${chipTokens.colorReadOnlyHover}: ${onDarkTextPrimary};
                ${chipTokens.closeIconColor}: ${onDarkTextSecondary};
                ${chipTokens.closeIconColorHover}: ${onDarkTextSecondaryHover};
                ${chipTokens.leftContentColor}: ${onDarkTextPrimary};
            `,
        },
        size: {
            l: css`
                ${chipTokens.borderRadius}: 0.75rem;
                ${chipTokens.pilledBorderRadius}: 1.5rem;
                ${chipTokens.width}: auto;
                ${chipTokens.height}: 3rem;
                ${chipTokens.padding}: 0 1rem;

                ${chipTokens.fontFamily}: ${bodyL.fontFamily};
                ${chipTokens.fontSize}: ${bodyL.fontSize};
                ${chipTokens.fontStyle}: ${bodyL.fontStyle};
                ${chipTokens.fontWeight}: ${bodyL.fontWeight};
                ${chipTokens.letterSpacing}: ${bodyL.letterSpacing};
                ${chipTokens.lineHeight}: ${bodyL.lineHeight};

                ${chipTokens.leftContentMarginLeft}: -0.125rem;
                ${chipTokens.leftContentMarginRight}: 0.5rem;
                ${chipTokens.rightContentMarginLeft}: 0.5rem;
                ${chipTokens.rightContentMarginRight}: -0.125rem;
                ${chipTokens.clearContentMarginLeft}: 0.625rem;
                ${chipTokens.clearContentMarginRight}: -0.25rem;
                ${chipTokens.closeIconSize}: 1.5rem;
            `,
            m: css`
                ${chipTokens.borderRadius}: 0.625rem;
                ${chipTokens.pilledBorderRadius}: 1.25rem;
                ${chipTokens.width}: auto;
                ${chipTokens.height}: 2.5rem;
                ${chipTokens.padding}: 0 0.875rem;

                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${chipTokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${chipTokens.fontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${chipTokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${chipTokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${chipTokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${chipTokens.lineHeight}: var(--plasma-typo-body-m-line-height);

                ${chipTokens.leftContentMarginLeft}: -0.125rem;
                ${chipTokens.leftContentMarginRight}: 0.375rem;
                ${chipTokens.rightContentMarginLeft}: 0.375rem;
                ${chipTokens.rightContentMarginRight}: -0.125rem;
                ${chipTokens.clearContentMarginLeft}: 0.5rem;
                ${chipTokens.clearContentMarginRight}: -0.25rem;
                ${chipTokens.closeIconSize}: 1.25rem;
            `,
            s: css`
                ${chipTokens.borderRadius}: 0.5rem;
                ${chipTokens.pilledBorderRadius}: 1rem;
                ${chipTokens.width}: auto;
                ${chipTokens.height}: 2rem;
                ${chipTokens.padding}: 0 0.875rem;

                ${chipTokens.fontFamily}: ${bodyS.fontFamily};
                ${chipTokens.fontSize}: ${bodyS.fontSize};
                ${chipTokens.fontStyle}: ${bodyS.fontStyle};
                ${chipTokens.fontWeight}: ${bodyS.fontWeight};
                ${chipTokens.letterSpacing}: ${bodyS.letterSpacing};
                ${chipTokens.lineHeight}: ${bodyS.lineHeight};

                ${chipTokens.leftContentMarginLeft}: -0.125rem;
                ${chipTokens.leftContentMarginRight}: 0.25rem;
                ${chipTokens.rightContentMarginLeft}: 0.25rem;
                ${chipTokens.rightContentMarginRight}: -0.125rem;
                ${chipTokens.clearContentMarginLeft}: 0.375rem;
                ${chipTokens.clearContentMarginRight}: -0.25rem;
                ${chipTokens.closeIconSize}: 1rem;
            `,
            xs: css`
                ${chipTokens.borderRadius}: 0.375rem;
                ${chipTokens.pilledBorderRadius}: 0.75rem;
                ${chipTokens.width}: auto;
                ${chipTokens.height}: 1.5rem;
                ${chipTokens.padding}: 0 0.625rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${chipTokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${chipTokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${chipTokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${chipTokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${chipTokens.letterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${chipTokens.lineHeight}: var(--plasma-typo-body-xs-line-height);

                ${chipTokens.leftContentMarginLeft}: -0.125rem;
                ${chipTokens.leftContentMarginRight}: 0.25rem;
                ${chipTokens.rightContentMarginLeft}: 0.25rem;
                ${chipTokens.rightContentMarginRight}: -0.125rem;
                ${chipTokens.clearContentMarginLeft}: 0.25rem;
                ${chipTokens.clearContentMarginRight}: -0.25rem;
                ${chipTokens.closeIconSize}: 0.75rem;
            `,
            xxs: css`
                ${chipTokens.borderRadius}: 0.375rem;
                ${chipTokens.pilledBorderRadius}: 0.625rem;
                ${chipTokens.width}: auto;
                ${chipTokens.height}: 1.25rem;
                ${chipTokens.padding}: 0 0.5rem;

                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${chipTokens.fontFamily}: var(--plasma-typo-body-xxs-font-family);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${chipTokens.fontSize}: var(--plasma-typo-body-xxs-font-size);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${chipTokens.fontStyle}: var(--plasma-typo-body-xxs-font-style);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${chipTokens.fontWeight}: var(--plasma-typo-body-xxs-font-weight);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${chipTokens.letterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${chipTokens.lineHeight}: var(--plasma-typo-body-xxs-line-height);

                ${chipTokens.leftContentMarginLeft}: -0.125rem;
                ${chipTokens.leftContentMarginRight}: 0.125rem;
                ${chipTokens.rightContentMarginLeft}: 0.125rem;
                ${chipTokens.rightContentMarginRight}: -0.125rem;
                ${chipTokens.clearContentMarginLeft}: 0.25rem;
                ${chipTokens.clearContentMarginRight}: -0.25rem;
                ${chipTokens.closeIconSize}: 0.75rem;
            `,
        },
        disabled: {
            true: css`
                ${chipTokens.disabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${chipTokens.focusColor}: ${textAccent};
            `,
        },
        pilled: {
            true: css``,
        },
    },
};
