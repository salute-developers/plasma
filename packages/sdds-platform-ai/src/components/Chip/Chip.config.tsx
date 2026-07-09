import { css, chipTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyM,
    bodyXXS,
    inverseTextPrimary,
    inverseTextSecondary,
    inverseTextSecondaryHover,
    onDarkTextPrimary,
    onDarkTextSecondary,
    onDarkTextSecondaryHover,
    surfaceAccent,
    surfaceAccentActive,
    surfaceAccentHover,
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
} from '@salutejs/sdds-themes/tokens/sdds_platform_ai';

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
                ${chipTokens.background}: ${surfaceAccent};
                ${chipTokens.colorHover}: ${onDarkTextPrimary};
                ${chipTokens.backgroundHover}: ${surfaceAccentHover};
                ${chipTokens.colorActive}: ${onDarkTextPrimary};
                ${chipTokens.backgroundActive}: ${surfaceAccentActive};
                ${chipTokens.backgroundReadOnly}: ${surfaceAccent};
                ${chipTokens.colorReadOnly}: ${onDarkTextPrimary};
                ${chipTokens.backgroundReadOnlyHover}: ${surfaceAccent};
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
            m: css`
                ${chipTokens.borderRadius}: 0.625rem;
                ${chipTokens.pilledBorderRadius}: 1.25rem;
                ${chipTokens.width}: auto;
                ${chipTokens.height}: 2.5rem;
                ${chipTokens.padding}: 0 0.875rem;

                ${chipTokens.fontFamily}: ${bodyM.fontFamily};
                ${chipTokens.fontSize}: ${bodyM.fontSize};
                ${chipTokens.fontStyle}: ${bodyM.fontStyle};
                ${chipTokens.fontWeight}: ${bodyM.fontWeight};
                ${chipTokens.letterSpacing}: ${bodyM.letterSpacing};
                ${chipTokens.lineHeight}: ${bodyM.lineHeight};

                ${chipTokens.leftContentMarginLeft}: -0.125rem;
                ${chipTokens.leftContentMarginRight}: 0.375rem;
                ${chipTokens.rightContentMarginLeft}: 0.375rem;
                ${chipTokens.rightContentMarginRight}: -0.125rem;
                ${chipTokens.clearContentMarginLeft}: 0.5rem;
                ${chipTokens.clearContentMarginRight}: -0.25rem;
                ${chipTokens.closeIconSize}: 1.25rem;
            `,
            xxs: css`
                ${chipTokens.borderRadius}: 0.375rem;
                ${chipTokens.pilledBorderRadius}: 0.625rem;
                ${chipTokens.width}: auto;
                ${chipTokens.height}: 1.25rem;
                ${chipTokens.padding}: 0 0.5rem;

                ${chipTokens.fontFamily}: ${bodyXXS.fontFamily};
                ${chipTokens.fontSize}: ${bodyXXS.fontSize};
                ${chipTokens.fontStyle}: ${bodyXXS.fontStyle};
                ${chipTokens.fontWeight}: ${bodyXXS.fontWeight};
                ${chipTokens.letterSpacing}: ${bodyXXS.letterSpacing};
                ${chipTokens.lineHeight}: ${bodyXXS.lineHeight};

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
