import {
    bodyL,
    bodyM,
    bodyS,
    bodyXS,
    bodyXXS,
    surfaceAccent,
    surfaceTransparentAccent,
    surfaceTransparentAccentActive,
    surfaceTransparentAccentHover,
    surfaceTransparentNegative,
    surfaceTransparentNegativeActive,
    surfaceTransparentNegativeHover,
    surfaceTransparentPositive,
    surfaceTransparentPositiveActive,
    surfaceTransparentPositiveHover,
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryActive,
    surfaceTransparentSecondaryHover,
    surfaceTransparentWarning,
    surfaceTransparentWarningActive,
    surfaceTransparentWarningHover,
    textAccent,
    textNegative,
    textPositive,
    textPrimary,
    textPrimaryActive,
    textPrimaryHover,
    textTertiary,
    textWarning,
} from '@salutejs/sdds-themes/tokens/sdds_finai';
import { css, chipTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${chipTokens.color}: ${textPrimary};
                ${chipTokens.background}: ${surfaceTransparentSecondary};
                ${chipTokens.colorHover}: ${textPrimaryHover};
                ${chipTokens.backgroundHover}: ${surfaceTransparentSecondaryHover};
                ${chipTokens.colorActive}: ${textPrimaryActive};
                ${chipTokens.backgroundActive}: ${surfaceTransparentSecondaryActive};
                ${chipTokens.backgroundReadOnly}: ${surfaceTransparentSecondary};
                ${chipTokens.colorReadOnly}: ${textPrimary};
                ${chipTokens.backgroundReadOnlyHover}: ${surfaceTransparentSecondary};
                ${chipTokens.colorReadOnlyHover}: ${textPrimary};
                ${chipTokens.closeIconColor}: ${textTertiary};
            `,
            secondary: css`
                ${chipTokens.color}: ${textPrimary};
                ${chipTokens.background}: ${surfaceTransparentSecondary};
                ${chipTokens.colorHover}: ${textPrimaryHover};
                ${chipTokens.backgroundHover}: ${surfaceTransparentSecondaryHover};
                ${chipTokens.colorActive}: ${textPrimaryActive};
                ${chipTokens.backgroundActive}: ${surfaceTransparentSecondaryActive};
                ${chipTokens.backgroundReadOnly}: ${surfaceTransparentSecondary};
                ${chipTokens.colorReadOnly}: ${textPrimary};
                ${chipTokens.backgroundReadOnlyHover}: ${surfaceTransparentSecondary};
                ${chipTokens.colorReadOnlyHover}: ${textPrimary};
                ${chipTokens.closeIconColor}: ${textTertiary};
            `,
            accent: css`
                ${chipTokens.color}: ${textAccent};
                ${chipTokens.background}: ${surfaceTransparentAccent};
                ${chipTokens.colorHover}: ${textAccent};
                ${chipTokens.backgroundHover}: ${surfaceTransparentAccentHover};
                ${chipTokens.colorActive}: ${textAccent};
                ${chipTokens.backgroundActive}: ${surfaceTransparentAccentActive};
                ${chipTokens.backgroundReadOnly}: ${surfaceTransparentAccent};
                ${chipTokens.colorReadOnly}: ${textAccent};
                ${chipTokens.backgroundReadOnlyHover}: ${surfaceTransparentAccent};
                ${chipTokens.colorReadOnlyHover}: ${textAccent};
            `,
            positive: css`
                ${chipTokens.color}: ${textPositive};
                ${chipTokens.background}: ${surfaceTransparentPositive};
                ${chipTokens.colorHover}: ${textPositive};
                ${chipTokens.backgroundHover}: ${surfaceTransparentPositiveHover};
                ${chipTokens.colorActive}: ${textPositive};
                ${chipTokens.backgroundActive}: ${surfaceTransparentPositiveActive};
                ${chipTokens.backgroundReadOnly}: ${surfaceTransparentPositive};
                ${chipTokens.colorReadOnly}: ${textPositive};
                ${chipTokens.backgroundReadOnlyHover}: ${surfaceTransparentPositive};
                ${chipTokens.colorReadOnlyHover}: ${textPositive};
            `,
            warning: css`
                ${chipTokens.color}: ${textWarning};
                ${chipTokens.background}: ${surfaceTransparentWarning};
                ${chipTokens.colorHover}: ${textWarning};
                ${chipTokens.backgroundHover}: ${surfaceTransparentWarningHover};
                ${chipTokens.colorActive}: ${textWarning};
                ${chipTokens.backgroundActive}: ${surfaceTransparentWarningActive};
                ${chipTokens.backgroundReadOnly}: ${surfaceTransparentWarning};
                ${chipTokens.colorReadOnly}: ${textWarning};
                ${chipTokens.backgroundReadOnlyHover}: ${surfaceTransparentWarning};
                ${chipTokens.colorReadOnlyHover}: ${textWarning};
            `,
            negative: css`
                ${chipTokens.color}: ${textNegative};
                ${chipTokens.background}: ${surfaceTransparentNegative};
                ${chipTokens.colorHover}: ${textNegative};
                ${chipTokens.backgroundHover}: ${surfaceTransparentNegativeHover};
                ${chipTokens.colorActive}: ${textNegative};
                ${chipTokens.backgroundActive}: ${surfaceTransparentNegativeActive};
                ${chipTokens.backgroundReadOnly}: ${surfaceTransparentNegative};
                ${chipTokens.colorReadOnly}: ${textNegative};
                ${chipTokens.backgroundReadOnlyHover}: ${surfaceTransparentNegative};
                ${chipTokens.colorReadOnlyHover}: ${textNegative};
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
