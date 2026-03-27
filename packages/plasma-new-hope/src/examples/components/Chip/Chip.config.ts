import {
    bodyL,
    bodyM,
    bodyS,
    bodyXS,
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
    textPrimary,
    textSecondary,
    textSecondaryHover,
} from '@salutejs/plasma-themes/tokens/plasma_b2c';
import { css } from '@linaria/core';

import { chipTokens } from '../../../components/Chip';

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
                ${chipTokens.closeIconSize}: 1rem;
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

                ${chipTokens.fontFamily}: ${bodyXS.fontFamily};
                ${chipTokens.fontSize}: ${bodyXS.fontSize};
                ${chipTokens.fontStyle}: ${bodyXS.fontStyle};
                ${chipTokens.fontWeight}: ${bodyXS.fontWeight};
                ${chipTokens.letterSpacing}: ${bodyXS.letterSpacing};
                ${chipTokens.lineHeight}: ${bodyXS.lineHeight};

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
                ${chipTokens.focusColor}: ${surfaceAccent};
            `,
        },
        pilled: {
            true: css``,
        },
    },
};
