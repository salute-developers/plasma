import {
    bodyM,
    bodyS,
    onDarkTextPrimary,
    onDarkTextPrimaryHover,
    surfaceAccent,
    surfaceAccentActive,
    surfaceAccentHover,
    surfaceSolidCard,
    surfaceSolidPrimary,
    surfaceSolidSecondary,
    textAccent,
    textAccentMinor,
    textPrimary,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, chipTokens } from '@salutejs/plasma-new-hope/emotion';

export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${chipTokens.color}: ${textPrimary};
                ${chipTokens.background}: ${surfaceSolidCard};
                ${chipTokens.colorHover}: ${textPrimary};
                ${chipTokens.backgroundHover}: ${surfaceSolidCard};
                ${chipTokens.colorActive}: ${textPrimary};
                ${chipTokens.backgroundActive}: ${surfaceSolidCard};
                ${chipTokens.backgroundReadOnly}: ${surfaceSolidCard};
                ${chipTokens.colorReadOnly}: ${textPrimary};
                ${chipTokens.backgroundReadOnlyHover}: ${surfaceSolidCard};
                ${chipTokens.colorReadOnlyHover}: ${textPrimary};
                ${chipTokens.closeIconColor}: ${textAccent};
                ${chipTokens.closeIconColorHover}: ${textAccentMinor};
                ${chipTokens.leftContentColor}: ${textAccent};
            `,
            secondary: css`
                ${chipTokens.color}: ${textPrimary};
                ${chipTokens.background}: ${surfaceSolidSecondary};
                ${chipTokens.colorHover}: ${textPrimary};
                ${chipTokens.backgroundHover}: ${surfaceSolidSecondary};
                ${chipTokens.colorActive}: ${textPrimary};
                ${chipTokens.backgroundActive}: ${surfaceSolidSecondary};
                ${chipTokens.backgroundReadOnly}: ${surfaceSolidPrimary};
                ${chipTokens.colorReadOnly}: ${textPrimary};
                ${chipTokens.backgroundReadOnlyHover}: ${surfaceSolidPrimary};
                ${chipTokens.colorReadOnlyHover}: ${textPrimary};
                ${chipTokens.closeIconColor}: ${textAccent};
                ${chipTokens.closeIconColorHover}: ${textAccentMinor};
                ${chipTokens.leftContentColor}: ${textAccent};
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

                ${chipTokens.closeIconColor}: ${onDarkTextPrimary};
                ${chipTokens.closeIconColorHover}: ${onDarkTextPrimaryHover};
                ${chipTokens.leftContentColor}: ${onDarkTextPrimary};
            `,
        },
        size: {
            s: css`
                ${chipTokens.borderRadius}: 0.625rem;
                ${chipTokens.pilledBorderRadius}: 1rem;
                ${chipTokens.width}: auto;
                ${chipTokens.height}: 2.5rem;
                ${chipTokens.padding}: 0 1rem;

                ${chipTokens.fontFamily}: ${bodyM.fontFamily};
                ${chipTokens.fontSize}: ${bodyM.fontSize};
                ${chipTokens.fontStyle}: ${bodyM.fontStyle};
                ${chipTokens.fontWeight}: ${bodyM.fontWeight};
                ${chipTokens.letterSpacing}: ${bodyM.letterSpacing};
                ${chipTokens.lineHeight}: ${bodyM.lineHeight};

                ${chipTokens.leftContentMarginLeft}: -0.25rem;
                ${chipTokens.leftContentMarginRight}: 0.25rem;
                ${chipTokens.rightContentMarginLeft}: 0.25rem;
                ${chipTokens.rightContentMarginRight}: -0.25rem;
                ${chipTokens.clearContentMarginLeft}: 0.5rem;
                ${chipTokens.clearContentMarginRight}: -0.5rem;
                ${chipTokens.closeIconSize}: 1.5rem;
            `,
            xs: css`
                ${chipTokens.borderRadius}: 0.38rem;
                ${chipTokens.pilledBorderRadius}: 0.75rem;
                ${chipTokens.width}: auto;
                ${chipTokens.height}: 1.5rem;
                ${chipTokens.padding}: 0.125rem 0.5rem;

                ${chipTokens.fontFamily}: ${bodyS.fontFamily};
                ${chipTokens.fontSize}: ${bodyS.fontSize};
                ${chipTokens.fontStyle}: ${bodyS.fontStyle};
                ${chipTokens.fontWeight}: ${bodyS.fontWeight};
                ${chipTokens.letterSpacing}: ${bodyS.letterSpacing};
                ${chipTokens.lineHeight}: ${bodyS.lineHeight};

                ${chipTokens.leftContentMarginLeft}: 0;
                ${chipTokens.leftContentMarginRight}: 0.25rem;
                ${chipTokens.rightContentMarginLeft}: 0.25rem;
                ${chipTokens.rightContentMarginRight}: 0;
                ${chipTokens.clearContentMarginLeft}: 0.25rem;
                ${chipTokens.clearContentMarginRight}: -0.25rem;
                ${chipTokens.closeIconSize}: 1rem;
            `,
        },
        focused: {
            true: css`
                ${chipTokens.focusColor}: ${textAccent};
            `,
        },
    },
};
