import { css, iconButtonTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    h4Medium,
    onDarkTextPrimary,
    onLightSurfaceAccent,
    onLightSurfaceSolidPrimary,
    onLightSurfaceSolidPrimaryActive,
    onLightSurfaceSolidPrimaryHover,
    onLightTextAccent,
    onLightTextAccentActive,
    onLightTextAccentHover,
    onLightTextPrimary,
    onLightTextPrimaryActive,
    onLightTextPrimaryHover,
    surfaceAccent,
    surfaceAccentActive,
    surfaceAccentHover,
    surfaceClear,
    surfaceTransparentNegative,
    surfaceTransparentNegativeActive,
    surfaceTransparentNegativeHover,
    surfaceTransparentSecondary,
    surfaceTransparentSecondaryActive,
    surfaceTransparentSecondaryHover,
    textAccent,
    textAccentActive,
    textAccentHover,
    textNegative,
    textNegativeActive,
    textNegativeHover,
    textPrimary,
    textPrimaryActive,
    textPrimaryHover,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 */
export const config = {
    defaults: {
        view: 'accentFiled',
        focused: 'true',
        size: '40',
    },
    variations: {
        view: {
            accentFiled: css`
                ${iconButtonTokens.iconButtonColor}: ${onDarkTextPrimary};
                ${iconButtonTokens.iconButtonSpinnerColor}: ${onDarkTextPrimary};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${onLightSurfaceAccent};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceAccentHover};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfaceAccentActive};
            `,
            accentWhite: css`
                ${iconButtonTokens.iconButtonColor}: ${onLightTextAccent};
                ${iconButtonTokens.iconButtonColorHover}: ${onLightTextAccentHover};
                ${iconButtonTokens.iconButtonColorActive}: ${onLightTextAccentActive};
                ${iconButtonTokens.iconButtonSpinnerColor}: ${onLightTextAccent};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${onLightSurfaceSolidPrimary};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${onLightSurfaceSolidPrimaryHover};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${onLightSurfaceSolidPrimaryActive};
            `,
            primaryWhite: css`
                ${iconButtonTokens.iconButtonColor}: ${onLightTextPrimary};
                ${iconButtonTokens.iconButtonColorHover}: ${onLightTextPrimaryHover};
                ${iconButtonTokens.iconButtonColorActive}: ${onLightTextPrimaryActive};
                ${iconButtonTokens.iconButtonSpinnerColor}: ${onLightTextPrimary};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${onLightSurfaceSolidPrimary};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${onLightSurfaceSolidPrimaryHover};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${onLightSurfaceSolidPrimaryActive};
            `,
            accentGrey: css`
                ${iconButtonTokens.iconButtonColor}: ${textAccent};
                ${iconButtonTokens.iconButtonSpinnerColor}: ${textAccent};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceTransparentSecondary};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceTransparentSecondaryHover};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfaceTransparentSecondaryActive};
            `,
            accentGreyClear: css`
                ${iconButtonTokens.iconButtonColor}: ${textAccent};
                ${iconButtonTokens.iconButtonColorHover}: ${textAccentHover};
                ${iconButtonTokens.iconButtonColorActive}: ${textAccentActive};
                ${iconButtonTokens.iconButtonSpinnerColor}: ${textAccent};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceClear};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceClear};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfaceClear};
            `,
            dangerTint: css`
                ${iconButtonTokens.iconButtonColor}: ${textNegative};
                ${iconButtonTokens.iconButtonColorHover}: ${textNegative};
                ${iconButtonTokens.iconButtonSpinnerColor}: ${textNegative};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceTransparentNegative};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceTransparentNegativeHover};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfaceTransparentNegativeActive};
            `,
            dangerTintClear: css`
                ${iconButtonTokens.iconButtonColor}: ${textNegative};
                ${iconButtonTokens.iconButtonColorHover}: ${textNegativeHover};
                ${iconButtonTokens.iconButtonColorActive}: ${textNegativeActive};
                ${iconButtonTokens.iconButtonSpinnerColor}: ${textNegative};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceClear};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceClear};
                ${iconButtonTokens.iconButtonBackgroundColorActive}: ${surfaceClear};
            `,
            primaryGrey: css`
                ${iconButtonTokens.iconButtonColor}: ${textPrimary};
                ${iconButtonTokens.iconButtonColorHover}: ${textPrimary};
                ${iconButtonTokens.iconButtonColorActive}: ${textPrimary};
                ${iconButtonTokens.iconButtonSpinnerColor}: ${textPrimary};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceTransparentSecondary};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceTransparentSecondaryHover};
            `,
            primaryGreyClear: css`
                ${iconButtonTokens.iconButtonColor}: ${textPrimary};
                ${iconButtonTokens.iconButtonColorHover}: ${textPrimaryHover};
                ${iconButtonTokens.iconButtonColorActive}: ${textPrimaryActive};
                ${iconButtonTokens.iconButtonSpinnerColor}: ${textPrimary};
                ${iconButtonTokens.iconButtonBackgroundColor}: ${surfaceClear};
                ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
                ${iconButtonTokens.iconButtonBackgroundColorHover}: ${surfaceClear};
            `,
        },
        size: {
            '48': css`
                ${iconButtonTokens.iconButtonHeight}: 3rem;
                ${iconButtonTokens.iconButtonWidth}: 3rem;
                ${iconButtonTokens.iconButtonFontFamily}: ${h4Medium.fontFamily};
                ${iconButtonTokens.iconButtonFontSize}: ${h4Medium.fontSize};
                ${iconButtonTokens.iconButtonFontStyle}: ${h4Medium.fontStyle};
                ${iconButtonTokens.iconButtonFontWeight}: ${h4Medium.fontWeight};
                ${iconButtonTokens.iconButtonLetterSpacing}: ${h4Medium.letterSpacing};
                ${iconButtonTokens.iconButtonLineHeight}: ${h4Medium.lineHeight};

                ${iconButtonTokens.iconButtonSpinnerSize}: 1.5rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
            '40': css`
                ${iconButtonTokens.iconButtonHeight}: 2.5rem;
                ${iconButtonTokens.iconButtonWidth}: 2.5rem;
                ${iconButtonTokens.iconButtonFontFamily}: ${h4Medium.fontFamily};
                ${iconButtonTokens.iconButtonFontSize}: ${h4Medium.fontSize};
                ${iconButtonTokens.iconButtonFontStyle}: ${h4Medium.fontStyle};
                ${iconButtonTokens.iconButtonFontWeight}: ${h4Medium.fontWeight};
                ${iconButtonTokens.iconButtonLetterSpacing}: ${h4Medium.letterSpacing};
                ${iconButtonTokens.iconButtonLineHeight}: ${h4Medium.lineHeight};

                ${iconButtonTokens.iconButtonSpinnerSize}: 1.5rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
            '32': css`
                ${iconButtonTokens.iconButtonHeight}: 2rem;
                ${iconButtonTokens.iconButtonWidth}: 2rem;
                ${iconButtonTokens.iconButtonFontFamily}: ${h4Medium.fontFamily};
                ${iconButtonTokens.iconButtonFontSize}: ${h4Medium.fontSize};
                ${iconButtonTokens.iconButtonFontStyle}: ${h4Medium.fontStyle};
                ${iconButtonTokens.iconButtonFontWeight}: ${h4Medium.fontWeight};
                ${iconButtonTokens.iconButtonLetterSpacing}: ${h4Medium.letterSpacing};
                ${iconButtonTokens.iconButtonLineHeight}: ${h4Medium.lineHeight};

                ${iconButtonTokens.iconButtonSpinnerSize}: 1rem;
                ${iconButtonTokens.iconButtonSpinnerColor}: inherit;
            `,
        },
        disabled: {
            true: css`
                ${iconButtonTokens.iconButtonDisabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${iconButtonTokens.iconButtonFocusColor}: ${surfaceAccent};
            `,
        },
    },
};
