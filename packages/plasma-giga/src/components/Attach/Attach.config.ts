import {
    bodyL,
    bodyLBold,
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    bodyXS,
    bodyXSBold,
    inverseTextPrimary,
    inverseTextSecondary,
    onDarkSurfaceSolidDefault,
    onDarkSurfaceSolidDefaultActive,
    onDarkSurfaceSolidDefaultHover,
    onDarkTextPrimary,
    onDarkTextSecondary,
    onLightSurfaceSolidDefault,
    onLightSurfaceSolidDefaultActive,
    onLightSurfaceSolidDefaultHover,
    onLightSurfaceTransparentDeep,
    onLightSurfaceTransparentDeepActive,
    onLightSurfaceTransparentDeepHover,
    onLightTextPrimary,
    onLightTextSecondary,
    surfaceAccent,
    surfaceAccentActive,
    surfaceAccentHover,
    surfaceClear,
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
    textNegative,
    textPrimary,
    textPrimaryActive,
    textPrimaryHover,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
} from '@salutejs/plasma-themes/tokens/plasma_giga';
import { css, attachTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        helperTextView: 'default',
        focused: 'true',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${attachTokens.buttonColor}: ${inverseTextPrimary};
                ${attachTokens.buttonValueColor}: ${inverseTextSecondary};
                ${attachTokens.buttonBackgroundColor}: ${surfaceSolidDefault};
                ${attachTokens.buttonLoadingBackgroundColor}: var(${attachTokens.buttonBackgroundColor});
                ${attachTokens.buttonColorHover}: ${inverseTextPrimary};
                ${attachTokens.buttonBackgroundColorHover}: ${surfaceSolidDefaultHover};
                ${attachTokens.buttonColorActive}: ${inverseTextPrimary};
                ${attachTokens.buttonBackgroundColorActive}: ${surfaceSolidDefaultActive};

                ${attachTokens.buttonDisabledOpacity}: 0.4;
                ${attachTokens.buttonFocusColor}: ${surfaceAccent};

                ${attachTokens.cellColor}: ${textPrimary};
                ${attachTokens.cellLabelColor}: ${textSecondary};
                ${attachTokens.cellTitleColor}: ${textPrimary};
                ${attachTokens.cellSubtitleColor}: ${textSecondary};
                ${attachTokens.cellBackgroundColor}: transparent;

                ${attachTokens.iconButtonColor}: ${inverseTextPrimary};
                ${attachTokens.iconButtonBackgroundColor}: ${surfaceSolidDefault};
                ${attachTokens.iconButtonLoadingBackgroundColor}: var(${attachTokens.iconButtonBackgroundColor});
                ${attachTokens.iconButtonColorHover}: ${inverseTextPrimary};
                ${attachTokens.iconButtonBackgroundColorHover}: ${surfaceSolidDefaultHover};
                ${attachTokens.iconButtonColorActive}: ${inverseTextPrimary};
                ${attachTokens.iconButtonBackgroundColorActive}: ${surfaceSolidDefaultActive};

                ${attachTokens.iconButtonDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonFocusColor}: ${surfaceAccent};

                ${attachTokens.iconButtonCancelColor}: ${textSecondary};
                ${attachTokens.iconButtonCancelBackgroundColor}: ${surfaceClear};
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: ${textSecondaryHover};
                ${attachTokens.iconButtonCancelBackgroundColorHover}: ${surfaceClear};
                ${attachTokens.iconButtonCancelColorActive}: ${textSecondaryActive};
                ${attachTokens.iconButtonCancelBackgroundColorActive}: ${surfaceClear};

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonCancelFocusColor}: ${surfaceAccent};

                ${attachTokens.moreIconColor}: ${textPrimary};
            `,
            accent: css`
                ${attachTokens.buttonColor}: ${onDarkTextPrimary};
                ${attachTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${attachTokens.buttonBackgroundColor}: ${surfaceAccent};
                ${attachTokens.buttonLoadingBackgroundColor}: var(${attachTokens.buttonBackgroundColor});
                ${attachTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${attachTokens.buttonBackgroundColorHover}: ${surfaceAccentHover};
                ${attachTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${attachTokens.buttonBackgroundColorActive}: ${surfaceAccentActive};

                ${attachTokens.buttonDisabledOpacity}: 0.4;
                ${attachTokens.buttonFocusColor}: ${surfaceAccent};

                ${attachTokens.cellColor}: ${textPrimary};
                ${attachTokens.cellLabelColor}: ${textSecondary};
                ${attachTokens.cellTitleColor}: ${textPrimary};
                ${attachTokens.cellSubtitleColor}: ${textSecondary};
                ${attachTokens.cellBackgroundColor}: transparent;

                ${attachTokens.iconButtonColor}: ${onDarkTextPrimary};
                ${attachTokens.iconButtonBackgroundColor}: ${surfaceAccent};
                ${attachTokens.iconButtonLoadingBackgroundColor}: var(${attachTokens.iconButtonBackgroundColor});
                ${attachTokens.iconButtonColorHover}: ${onDarkTextPrimary};
                ${attachTokens.iconButtonBackgroundColorHover}: ${surfaceAccentHover};
                ${attachTokens.iconButtonColorActive}: ${onDarkTextPrimary};
                ${attachTokens.iconButtonBackgroundColorActive}: ${surfaceAccentActive};

                ${attachTokens.iconButtonDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonFocusColor}: ${surfaceAccent};

                ${attachTokens.iconButtonCancelColor}: ${textSecondary};
                ${attachTokens.iconButtonCancelBackgroundColor}: ${surfaceClear};
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: ${textSecondaryHover};
                ${attachTokens.iconButtonCancelBackgroundColorHover}: ${surfaceClear};
                ${attachTokens.iconButtonCancelColorActive}: ${textSecondaryActive};
                ${attachTokens.iconButtonCancelBackgroundColorActive}: ${surfaceClear};

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonCancelFocusColor}: ${surfaceAccent};

                ${attachTokens.moreIconColor}: ${textPrimary};
            `,
            secondary: css`
                ${attachTokens.buttonColor}: ${textPrimary};
                ${attachTokens.buttonValueColor}: ${textSecondary};
                ${attachTokens.buttonBackgroundColor}: ${surfaceTransparentSecondary};
                ${attachTokens.buttonLoadingBackgroundColor}: var(${attachTokens.buttonBackgroundColor});
                ${attachTokens.buttonColorHover}: ${textPrimary};
                ${attachTokens.buttonBackgroundColorHover}: ${surfaceTransparentSecondaryHover};
                ${attachTokens.buttonColorActive}: ${textPrimary};
                ${attachTokens.buttonBackgroundColorActive}: ${surfaceTransparentSecondaryActive};

                ${attachTokens.buttonDisabledOpacity}: 0.4;
                ${attachTokens.buttonFocusColor}: ${surfaceAccent};

                ${attachTokens.cellColor}: ${textPrimary};
                ${attachTokens.cellLabelColor}: ${textSecondary};
                ${attachTokens.cellTitleColor}: ${textPrimary};
                ${attachTokens.cellSubtitleColor}: ${textSecondary};
                ${attachTokens.cellBackgroundColor}: transparent;

                ${attachTokens.iconButtonColor}: ${textPrimary};
                ${attachTokens.iconButtonBackgroundColor}: ${surfaceTransparentSecondary};
                ${attachTokens.iconButtonLoadingBackgroundColor}: var(${attachTokens.iconButtonBackgroundColor});
                ${attachTokens.iconButtonColorHover}: ${textPrimary};
                ${attachTokens.iconButtonBackgroundColorHover}: ${surfaceTransparentSecondaryHover};
                ${attachTokens.iconButtonColorActive}: ${textPrimary};
                ${attachTokens.iconButtonBackgroundColorActive}: ${surfaceTransparentSecondaryActive};

                ${attachTokens.iconButtonDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonFocusColor}: ${surfaceAccent};

                ${attachTokens.iconButtonCancelColor}: ${textSecondary};
                ${attachTokens.iconButtonCancelBackgroundColor}: ${surfaceClear};
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: ${textSecondaryHover};
                ${attachTokens.iconButtonCancelBackgroundColorHover}: ${surfaceClear};
                ${attachTokens.iconButtonCancelColorActive}: ${textSecondaryActive};
                ${attachTokens.iconButtonCancelBackgroundColorActive}: ${surfaceClear};

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonCancelFocusColor}: ${surfaceAccent};

                ${attachTokens.moreIconColor}: ${textPrimary};
            `,
            clear: css`
                ${attachTokens.buttonColor}: ${textPrimary};
                ${attachTokens.buttonValueColor}: ${textSecondary};
                ${attachTokens.buttonBackgroundColor}: ${surfaceClear};
                ${attachTokens.buttonLoadingBackgroundColor}: var(${attachTokens.buttonBackgroundColor});
                ${attachTokens.buttonColorHover}: ${textPrimaryHover};
                ${attachTokens.buttonBackgroundColorHover}: ${surfaceClear};
                ${attachTokens.buttonColorActive}: ${textPrimaryActive};
                ${attachTokens.buttonBackgroundColorActive}: ${surfaceClear};

                ${attachTokens.buttonDisabledOpacity}: 0.4;
                ${attachTokens.buttonFocusColor}: ${surfaceAccent};

                ${attachTokens.cellColor}: ${textPrimary};
                ${attachTokens.cellLabelColor}: ${textSecondary};
                ${attachTokens.cellTitleColor}: ${textPrimary};
                ${attachTokens.cellSubtitleColor}: ${textSecondary};
                ${attachTokens.cellBackgroundColor}: transparent;

                ${attachTokens.iconButtonColor}: ${textPrimary};
                ${attachTokens.iconButtonBackgroundColor}: ${surfaceClear};
                ${attachTokens.iconButtonLoadingBackgroundColor}: var(${attachTokens.iconButtonBackgroundColor});
                ${attachTokens.iconButtonColorHover}: ${textPrimaryHover};
                ${attachTokens.iconButtonBackgroundColorHover}: ${surfaceClear};
                ${attachTokens.iconButtonColorActive}: ${textPrimaryActive};
                ${attachTokens.iconButtonBackgroundColorActive}: ${surfaceClear};

                ${attachTokens.iconButtonDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonFocusColor}: ${surfaceAccent};

                ${attachTokens.iconButtonCancelColor}: ${textSecondary};
                ${attachTokens.iconButtonCancelBackgroundColor}: ${surfaceClear};
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: ${textSecondaryHover};
                ${attachTokens.iconButtonCancelBackgroundColorHover}: ${surfaceClear};
                ${attachTokens.iconButtonCancelColorActive}: ${textSecondaryActive};
                ${attachTokens.iconButtonCancelBackgroundColorActive}: ${surfaceClear};

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonCancelFocusColor}: ${surfaceAccent};

                ${attachTokens.moreIconColor}: ${textPrimary};
            `,
            success: css`
                ${attachTokens.buttonColor}: ${onDarkTextPrimary};
                ${attachTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${attachTokens.buttonBackgroundColor}: ${surfacePositive};
                ${attachTokens.buttonLoadingBackgroundColor}: var(${attachTokens.buttonBackgroundColor});
                ${attachTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${attachTokens.buttonBackgroundColorHover}: ${surfacePositiveHover};
                ${attachTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${attachTokens.buttonBackgroundColorActive}: ${surfacePositiveActive};

                ${attachTokens.buttonDisabledOpacity}: 0.4;
                ${attachTokens.buttonFocusColor}: ${surfaceAccent};

                ${attachTokens.cellColor}: ${textPrimary};
                ${attachTokens.cellLabelColor}: ${textSecondary};
                ${attachTokens.cellTitleColor}: ${textPrimary};
                ${attachTokens.cellSubtitleColor}: ${textSecondary};
                ${attachTokens.cellBackgroundColor}: transparent;

                ${attachTokens.iconButtonColor}: ${onDarkTextPrimary};
                ${attachTokens.iconButtonBackgroundColor}: ${surfacePositive};
                ${attachTokens.iconButtonLoadingBackgroundColor}: var(${attachTokens.iconButtonBackgroundColor});
                ${attachTokens.iconButtonColorHover}: ${onDarkTextPrimary};
                ${attachTokens.iconButtonBackgroundColorHover}: ${surfacePositiveHover};
                ${attachTokens.iconButtonColorActive}: ${onDarkTextPrimary};
                ${attachTokens.iconButtonBackgroundColorActive}: ${surfacePositiveActive};

                ${attachTokens.iconButtonDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonFocusColor}: ${surfaceAccent};

                ${attachTokens.iconButtonCancelColor}: ${textSecondary};
                ${attachTokens.iconButtonCancelBackgroundColor}: ${surfaceClear};
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: ${textSecondaryHover};
                ${attachTokens.iconButtonCancelBackgroundColorHover}: ${surfaceClear};
                ${attachTokens.iconButtonCancelColorActive}: ${textSecondaryActive};
                ${attachTokens.iconButtonCancelBackgroundColorActive}: ${surfaceClear};

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonCancelFocusColor}: ${surfaceAccent};

                ${attachTokens.moreIconColor}: ${textPrimary};
            `,
            warning: css`
                ${attachTokens.buttonColor}: ${onDarkTextPrimary};
                ${attachTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${attachTokens.buttonBackgroundColor}: ${surfaceWarning};
                ${attachTokens.buttonLoadingBackgroundColor}: var(${attachTokens.buttonBackgroundColor});
                ${attachTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${attachTokens.buttonBackgroundColorHover}: ${surfaceWarningHover};
                ${attachTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${attachTokens.buttonBackgroundColorActive}: ${surfaceWarningActive};

                ${attachTokens.buttonDisabledOpacity}: 0.4;
                ${attachTokens.buttonFocusColor}: ${surfaceAccent};

                ${attachTokens.cellColor}: ${textPrimary};
                ${attachTokens.cellLabelColor}: ${textSecondary};
                ${attachTokens.cellTitleColor}: ${textPrimary};
                ${attachTokens.cellSubtitleColor}: ${textSecondary};
                ${attachTokens.cellBackgroundColor}: transparent;

                ${attachTokens.iconButtonColor}: ${onDarkTextPrimary};
                ${attachTokens.iconButtonBackgroundColor}: ${surfaceWarning};
                ${attachTokens.iconButtonLoadingBackgroundColor}: var(${attachTokens.iconButtonBackgroundColor});
                ${attachTokens.iconButtonColorHover}: ${onDarkTextPrimary};
                ${attachTokens.iconButtonBackgroundColorHover}: ${surfaceWarningHover};
                ${attachTokens.iconButtonColorActive}: ${onDarkTextPrimary};
                ${attachTokens.iconButtonBackgroundColorActive}: ${surfaceWarningActive};

                ${attachTokens.iconButtonDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonFocusColor}: ${surfaceAccent};

                ${attachTokens.iconButtonCancelColor}: ${textSecondary};
                ${attachTokens.iconButtonCancelBackgroundColor}: ${surfaceClear};
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: ${textSecondaryHover};
                ${attachTokens.iconButtonCancelBackgroundColorHover}: ${surfaceClear};
                ${attachTokens.iconButtonCancelColorActive}: ${textSecondaryActive};
                ${attachTokens.iconButtonCancelBackgroundColorActive}: ${surfaceClear};

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonCancelFocusColor}: ${surfaceAccent};

                ${attachTokens.moreIconColor}: ${textPrimary};
            `,
            critical: css`
                ${attachTokens.buttonColor}: ${onDarkTextPrimary};
                ${attachTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${attachTokens.buttonBackgroundColor}: ${surfaceNegative};
                ${attachTokens.buttonLoadingBackgroundColor}: var(${attachTokens.buttonBackgroundColor});
                ${attachTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${attachTokens.buttonBackgroundColorHover}: ${surfaceNegativeHover};
                ${attachTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${attachTokens.buttonBackgroundColorActive}: ${surfaceNegativeActive};

                ${attachTokens.cellColor}: ${textPrimary};
                ${attachTokens.cellLabelColor}: ${textSecondary};
                ${attachTokens.cellTitleColor}: ${textPrimary};
                ${attachTokens.cellSubtitleColor}: ${textSecondary};
                ${attachTokens.cellBackgroundColor}: transparent;

                ${attachTokens.iconButtonColor}: ${onDarkTextPrimary};
                ${attachTokens.iconButtonBackgroundColor}: ${surfaceNegative};
                ${attachTokens.iconButtonLoadingBackgroundColor}: var(${attachTokens.iconButtonBackgroundColor});
                ${attachTokens.iconButtonColorHover}: ${onDarkTextPrimary};
                ${attachTokens.iconButtonBackgroundColorHover}: ${surfaceNegativeHover};
                ${attachTokens.iconButtonColorActive}: ${onDarkTextPrimary};
                ${attachTokens.iconButtonBackgroundColorActive}: ${surfaceNegativeActive};

                ${attachTokens.iconButtonDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonFocusColor}: ${surfaceAccent};

                ${attachTokens.iconButtonCancelColor}: ${textSecondary};
                ${attachTokens.iconButtonCancelBackgroundColor}: ${surfaceClear};
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: ${textSecondaryHover};
                ${attachTokens.iconButtonCancelBackgroundColorHover}: ${surfaceClear};
                ${attachTokens.iconButtonCancelColorActive}: ${textSecondaryActive};
                ${attachTokens.iconButtonCancelBackgroundColorActive}: ${surfaceClear};

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonCancelFocusColor}: ${surfaceAccent};

                ${attachTokens.moreIconColor}: ${textPrimary};
            `,
            dark: css`
                ${attachTokens.buttonColor}: ${onDarkTextPrimary};
                ${attachTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${attachTokens.buttonBackgroundColor}: ${onLightSurfaceTransparentDeep};
                ${attachTokens.buttonLoadingBackgroundColor}: var(${attachTokens.buttonBackgroundColor});
                ${attachTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${attachTokens.buttonBackgroundColorHover}: ${onLightSurfaceTransparentDeepHover};
                ${attachTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${attachTokens.buttonBackgroundColorActive}: ${onLightSurfaceTransparentDeepActive};

                ${attachTokens.buttonDisabledOpacity}: 0.4;
                ${attachTokens.buttonFocusColor}: ${surfaceAccent};

                ${attachTokens.cellColor}: ${textPrimary};
                ${attachTokens.cellLabelColor}: ${textSecondary};
                ${attachTokens.cellTitleColor}: ${textPrimary};
                ${attachTokens.cellSubtitleColor}: ${textSecondary};
                ${attachTokens.cellBackgroundColor}: transparent;

                ${attachTokens.iconButtonColor}: ${onDarkTextPrimary};
                ${attachTokens.iconButtonBackgroundColor}: ${onLightSurfaceTransparentDeep};
                ${attachTokens.iconButtonLoadingBackgroundColor}: var(${attachTokens.iconButtonBackgroundColor});
                ${attachTokens.iconButtonColorHover}: ${onDarkTextPrimary};
                ${attachTokens.iconButtonBackgroundColorHover}: ${onLightSurfaceTransparentDeepHover};
                ${attachTokens.iconButtonColorActive}: ${onDarkTextPrimary};
                ${attachTokens.iconButtonBackgroundColorActive}: ${onLightSurfaceTransparentDeepActive};

                ${attachTokens.iconButtonDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonFocusColor}: ${surfaceAccent};

                ${attachTokens.iconButtonCancelColor}: ${textSecondary};
                ${attachTokens.iconButtonCancelBackgroundColor}: ${surfaceClear};
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: ${textSecondaryHover};
                ${attachTokens.iconButtonCancelBackgroundColorHover}: ${surfaceClear};
                ${attachTokens.iconButtonCancelColorActive}: ${textSecondaryActive};
                ${attachTokens.iconButtonCancelBackgroundColorActive}: ${surfaceClear};

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonCancelFocusColor}: ${surfaceAccent};

                ${attachTokens.moreIconColor}: ${textPrimary};
            `,
            black: css`
                ${attachTokens.buttonColor}: ${onDarkTextPrimary};
                ${attachTokens.buttonValueColor}: ${onDarkTextSecondary};
                ${attachTokens.buttonBackgroundColor}: ${onLightSurfaceSolidDefault};
                ${attachTokens.buttonLoadingBackgroundColor}: var(${attachTokens.buttonBackgroundColor});
                ${attachTokens.buttonColorHover}: ${onDarkTextPrimary};
                ${attachTokens.buttonBackgroundColorHover}: ${onLightSurfaceSolidDefaultHover};
                ${attachTokens.buttonColorActive}: ${onDarkTextPrimary};
                ${attachTokens.buttonBackgroundColorActive}: ${onLightSurfaceSolidDefaultActive};

                ${attachTokens.buttonDisabledOpacity}: 0.4;
                ${attachTokens.buttonFocusColor}: ${surfaceAccent};

                ${attachTokens.cellColor}: ${textPrimary};
                ${attachTokens.cellLabelColor}: ${textSecondary};
                ${attachTokens.cellTitleColor}: ${textPrimary};
                ${attachTokens.cellSubtitleColor}: ${textSecondary};
                ${attachTokens.cellBackgroundColor}: transparent;

                ${attachTokens.iconButtonColor}: ${onDarkTextPrimary};
                ${attachTokens.iconButtonBackgroundColor}: ${onLightSurfaceSolidDefault};
                ${attachTokens.iconButtonLoadingBackgroundColor}: var(${attachTokens.iconButtonBackgroundColor});
                ${attachTokens.iconButtonColorHover}: ${onDarkTextPrimary};
                ${attachTokens.iconButtonBackgroundColorHover}: ${onLightSurfaceSolidDefaultHover};
                ${attachTokens.iconButtonColorActive}: ${onDarkTextPrimary};
                ${attachTokens.iconButtonBackgroundColorActive}: ${onLightSurfaceSolidDefaultActive};

                ${attachTokens.iconButtonDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonFocusColor}: ${surfaceAccent};

                ${attachTokens.iconButtonCancelColor}: ${textSecondary};
                ${attachTokens.iconButtonCancelBackgroundColor}: ${surfaceClear};
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: ${textSecondaryHover};
                ${attachTokens.iconButtonCancelBackgroundColorHover}: ${surfaceClear};
                ${attachTokens.iconButtonCancelColorActive}: ${textSecondaryActive};
                ${attachTokens.iconButtonCancelBackgroundColorActive}: ${surfaceClear};

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonCancelFocusColor}: ${surfaceAccent};

                ${attachTokens.moreIconColor}: ${textPrimary};
            `,
            white: css`
                ${attachTokens.buttonColor}: ${onLightTextPrimary};
                ${attachTokens.buttonValueColor}: ${onLightTextSecondary};
                ${attachTokens.buttonBackgroundColor}: ${onDarkSurfaceSolidDefault};
                ${attachTokens.buttonLoadingBackgroundColor}: var(${attachTokens.buttonBackgroundColor});
                ${attachTokens.buttonColorHover}: ${onLightTextPrimary};
                ${attachTokens.buttonBackgroundColorHover}: ${onDarkSurfaceSolidDefaultHover};
                ${attachTokens.buttonColorActive}: ${onLightTextPrimary};
                ${attachTokens.buttonBackgroundColorActive}: ${onDarkSurfaceSolidDefaultActive};

                ${attachTokens.buttonDisabledOpacity}: 0.4;
                ${attachTokens.buttonFocusColor}: ${surfaceAccent};

                ${attachTokens.cellColor}: ${textPrimary};
                ${attachTokens.cellLabelColor}: ${textSecondary};
                ${attachTokens.cellTitleColor}: ${textPrimary};
                ${attachTokens.cellSubtitleColor}: ${textSecondary};
                ${attachTokens.cellBackgroundColor}: transparent;

                ${attachTokens.iconButtonColor}: ${onLightTextPrimary};
                ${attachTokens.iconButtonBackgroundColor}: ${onDarkSurfaceSolidDefault};
                ${attachTokens.iconButtonLoadingBackgroundColor}: var(${attachTokens.iconButtonBackgroundColor});
                ${attachTokens.iconButtonColorHover}: ${onLightTextPrimary};
                ${attachTokens.iconButtonBackgroundColorHover}: ${onDarkSurfaceSolidDefaultHover};
                ${attachTokens.iconButtonColorActive}: ${onLightTextPrimary};
                ${attachTokens.iconButtonBackgroundColorActive}: ${onDarkSurfaceSolidDefaultActive};

                ${attachTokens.iconButtonDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonFocusColor}: ${surfaceAccent};

                ${attachTokens.iconButtonCancelColor}: ${textSecondary};
                ${attachTokens.iconButtonCancelBackgroundColor}: ${surfaceClear};
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: ${textSecondaryHover};
                ${attachTokens.iconButtonCancelBackgroundColorHover}: ${surfaceClear};
                ${attachTokens.iconButtonCancelColorActive}: ${textSecondaryActive};
                ${attachTokens.iconButtonCancelBackgroundColorActive}: ${surfaceClear};

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonCancelFocusColor}: ${surfaceAccent};

                ${attachTokens.moreIconColor}: ${textPrimary};
            `,
        },
        helperTextView: {
            default: css`
                ${attachTokens.helperTextColor}: ${textSecondary};
            `,
            negative: css`
                ${attachTokens.helperTextColor}: ${textNegative};
            `,
        },
        size: {
            l: css`
                ${attachTokens.horizontalGap}: 1.5rem;
                ${attachTokens.verticalGap}: 0.5rem;
                ${attachTokens.verticalGapWithHelperText}: 1.625rem;

                ${attachTokens.filenameWrapperHeight}: 3.5rem;
                ${attachTokens.filenameDropdownWrapperHeight}: 2.125rem;
                ${attachTokens.buttonHeight}: 3.5rem;
                ${attachTokens.buttonWidth}: 12.5rem;
                ${attachTokens.buttonPadding}: 1.5rem;
                ${attachTokens.buttonRadius}: 0.875rem;
                ${attachTokens.buttonFontFamily}: ${bodyL.fontFamily};
                ${attachTokens.buttonFontSize}: ${bodyL.fontSize};
                ${attachTokens.buttonFontStyle}: ${bodyL.fontStyle};
                ${attachTokens.buttonFontWeight}: ${bodyLBold.fontWeight};
                ${attachTokens.buttonLetterSpacing}: ${bodyL.letterSpacing};
                ${attachTokens.buttonLineHeight}: ${bodyL.lineHeight};

                ${attachTokens.buttonSpinnerSize}: 1.375rem;
                ${attachTokens.buttonSpinnerColor}: inherit;

                ${attachTokens.buttonLeftContentMargin}: 0 0.5rem 0 -0.125rem;
                ${attachTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.5rem;
                ${attachTokens.buttonValueMargin}: 0 0 0 0.25rem;

                ${attachTokens.cellWidth}: fit-content;

                ${attachTokens.cellPadding}: 0rem;
                ${attachTokens.cellPaddingLeftContent}: 0rem;
                ${attachTokens.cellPaddingContent}: 0rem;
                ${attachTokens.cellPaddingRightContent}: 0rem;

                ${attachTokens.cellTextboxGap}: 0.125rem;
                ${attachTokens.cellGap}: 0.375rem;

                ${attachTokens.cellLabelFontFamily}: ${bodyM.fontFamily};
                ${attachTokens.cellLabelFontSize}: ${bodyM.fontSize};
                ${attachTokens.cellLabelFontStyle}: ${bodyM.fontStyle};
                ${attachTokens.cellLabelFontWeight}: ${bodyM.fontWeight};
                ${attachTokens.cellLabelLetterSpacing}: ${bodyM.letterSpacing};
                ${attachTokens.cellLabelLineHeight}: ${bodyM.lineHeight};

                ${attachTokens.cellTitleFontFamily}: ${bodyL.fontFamily};
                ${attachTokens.cellTitleFontSize}: ${bodyL.fontSize};
                ${attachTokens.cellTitleFontStyle}: ${bodyL.fontStyle};
                ${attachTokens.cellTitleFontWeight}: ${bodyL.fontWeight};
                ${attachTokens.cellTitleLetterSpacing}: ${bodyL.letterSpacing};
                ${attachTokens.cellTitleLineHeight}: ${bodyL.lineHeight};

                ${attachTokens.cellSubtitleFontFamily}: ${bodyM.fontFamily};
                ${attachTokens.cellSubtitleFontSize}: ${bodyM.fontSize};
                ${attachTokens.cellSubtitleFontStyle}: ${bodyM.fontStyle};
                ${attachTokens.cellSubtitleFontWeight}: ${bodyM.fontWeight};
                ${attachTokens.cellSubtitleLetterSpacing}: ${bodyM.letterSpacing};
                ${attachTokens.cellSubtitleLineHeight}: ${bodyM.lineHeight};

                ${attachTokens.iconButtonHeight}: 3.5rem;
                ${attachTokens.iconButtonWidth}: 3.5rem;
                ${attachTokens.iconButtonPadding}: 1.5rem;
                ${attachTokens.iconButtonRadius}: 0.875rem;
                ${attachTokens.iconButtonFontFamily}: ${bodyL.fontFamily};
                ${attachTokens.iconButtonFontSize}: ${bodyL.fontSize};
                ${attachTokens.iconButtonFontStyle}: ${bodyL.fontStyle};
                ${attachTokens.iconButtonFontWeight}: ${bodyLBold.fontWeight};
                ${attachTokens.iconButtonLetterSpacing}: ${bodyL.letterSpacing};
                ${attachTokens.iconButtonLineHeight}: ${bodyL.lineHeight};

                ${attachTokens.iconButtonSpinnerSize}: 1.375rem;
                ${attachTokens.iconButtonSpinnerColor}: inherit;

                ${attachTokens.iconButtonCancelHeight}: 2rem;
                ${attachTokens.iconButtonCancelWidth}: 2rem;
                ${attachTokens.iconButtonCancelPadding}: 0.75rem;
                ${attachTokens.iconButtonCancelRadius}: 0.5rem;
                ${attachTokens.iconButtonCancelFontFamily}: ${bodyXS.fontFamily};
                ${attachTokens.iconButtonCancelFontSize}: ${bodyXS.fontSize};
                ${attachTokens.iconButtonCancelFontStyle}: ${bodyXS.fontStyle};
                ${attachTokens.iconButtonCancelFontWeight}: ${bodyXSBold.fontWeight};
                ${attachTokens.iconButtonCancelLetterSpacing}: ${bodyXS.letterSpacing};
                ${attachTokens.iconButtonCancelLineHeight}: ${bodyXS.lineHeight};

                ${attachTokens.iconButtonCancelSpinnerSize}: 1rem;
                ${attachTokens.iconButtonCancelSpinnerColor}: inherit;

                ${attachTokens.moreIconPadding}: 0.75rem;

                ${attachTokens.dropdownBorderRadius}: 0.875rem;
                ${attachTokens.dropdownPadding}: 0.125rem;
                ${attachTokens.dropdownItemPadding}: 1rem;
            `,
            m: css`
                ${attachTokens.horizontalGap}: 1.25rem;
                ${attachTokens.verticalGap}: 0.5rem;
                ${attachTokens.verticalGapWithHelperText}: 1.625rem;

                ${attachTokens.filenameWrapperHeight}: 3rem;
                ${attachTokens.filenameDropdownWrapperHeight}: 2rem;
                ${attachTokens.buttonHeight}: 3rem;
                ${attachTokens.buttonWidth}: 11.25rem;
                ${attachTokens.buttonPadding}: 1.25rem;
                ${attachTokens.buttonRadius}: 0.75rem;
                ${attachTokens.buttonFontFamily}: ${bodyM.fontFamily};
                ${attachTokens.buttonFontSize}: ${bodyM.fontSize};
                ${attachTokens.buttonFontStyle}: ${bodyM.fontStyle};
                ${attachTokens.buttonFontWeight}: ${bodyMBold.fontWeight};
                ${attachTokens.buttonLetterSpacing}: ${bodyM.letterSpacing};
                ${attachTokens.buttonLineHeight}: ${bodyM.lineHeight};

                ${attachTokens.buttonSpinnerSize}: 1.375rem;
                ${attachTokens.buttonSpinnerColor}: inherit;

                ${attachTokens.buttonLeftContentMargin}: 0 0.375rem 0 -0.125rem;
                ${attachTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.375rem;
                ${attachTokens.buttonValueMargin}: 0 0 0 0.25rem;

                ${attachTokens.cellWidth}: fit-content;

                ${attachTokens.cellPadding}: 0rem;
                ${attachTokens.cellPaddingLeftContent}: 0rem;
                ${attachTokens.cellPaddingContent}: 0rem;
                ${attachTokens.cellPaddingRightContent}: 0rem;

                ${attachTokens.cellTextboxGap}: 0.125rem;
                ${attachTokens.cellGap}: 0.375rem;

                ${attachTokens.cellLabelFontFamily}: ${bodyS.fontFamily};
                ${attachTokens.cellLabelFontSize}: ${bodyS.fontSize};
                ${attachTokens.cellLabelFontStyle}: ${bodyS.fontStyle};
                ${attachTokens.cellLabelFontWeight}: ${bodyS.fontWeight};
                ${attachTokens.cellLabelLetterSpacing}: ${bodyS.letterSpacing};
                ${attachTokens.cellLabelLineHeight}: ${bodyS.lineHeight};

                ${attachTokens.cellTitleFontFamily}: ${bodyM.fontFamily};
                ${attachTokens.cellTitleFontSize}: ${bodyM.fontSize};
                ${attachTokens.cellTitleFontStyle}: ${bodyM.fontStyle};
                ${attachTokens.cellTitleFontWeight}: ${bodyM.fontWeight};
                ${attachTokens.cellTitleLetterSpacing}: ${bodyM.letterSpacing};
                ${attachTokens.cellTitleLineHeight}: ${bodyM.lineHeight};

                ${attachTokens.cellSubtitleFontFamily}: ${bodyS.fontFamily};
                ${attachTokens.cellSubtitleFontSize}: ${bodyS.fontSize};
                ${attachTokens.cellSubtitleFontStyle}: ${bodyS.fontStyle};
                ${attachTokens.cellSubtitleFontWeight}: ${bodyS.fontWeight};
                ${attachTokens.cellSubtitleLetterSpacing}: ${bodyS.letterSpacing};
                ${attachTokens.cellSubtitleLineHeight}: ${bodyS.lineHeight};

                ${attachTokens.iconButtonHeight}: 3rem;
                ${attachTokens.iconButtonWidth}: 3rem;
                ${attachTokens.iconButtonPadding}: 1.25rem;
                ${attachTokens.iconButtonRadius}: 0.75rem;
                ${attachTokens.iconButtonFontFamily}: ${bodyM.fontFamily};
                ${attachTokens.iconButtonFontSize}: ${bodyM.fontSize};
                ${attachTokens.iconButtonFontStyle}: ${bodyM.fontStyle};
                ${attachTokens.iconButtonFontWeight}: ${bodyMBold.fontWeight};
                ${attachTokens.iconButtonLetterSpacing}: ${bodyM.letterSpacing};
                ${attachTokens.iconButtonLineHeight}: ${bodyM.lineHeight};

                ${attachTokens.iconButtonSpinnerSize}: 1.375rem;
                ${attachTokens.iconButtonSpinnerColor}: inherit;

                ${attachTokens.iconButtonCancelHeight}: 2rem;
                ${attachTokens.iconButtonCancelWidth}: 2rem;
                ${attachTokens.iconButtonCancelPadding}: 0.75rem;
                ${attachTokens.iconButtonCancelRadius}: 0.5rem;
                ${attachTokens.iconButtonCancelFontFamily}: ${bodyXS.fontFamily};
                ${attachTokens.iconButtonCancelFontSize}: ${bodyXS.fontSize};
                ${attachTokens.iconButtonCancelFontStyle}: ${bodyXS.fontStyle};
                ${attachTokens.iconButtonCancelFontWeight}: ${bodyXSBold.fontWeight};
                ${attachTokens.iconButtonCancelLetterSpacing}: ${bodyXS.letterSpacing};
                ${attachTokens.iconButtonCancelLineHeight}: ${bodyXS.lineHeight};

                ${attachTokens.iconButtonCancelSpinnerSize}: 1rem;
                ${attachTokens.iconButtonCancelSpinnerColor}: inherit;

                ${attachTokens.moreIconPadding}: 0.5rem;

                ${attachTokens.dropdownBorderRadius}: 0.75rem;
                ${attachTokens.dropdownPadding}: 0.125rem;
                ${attachTokens.dropdownItemPadding}: 0.5rem 0.875rem;
            `,
            s: css`
                ${attachTokens.horizontalGap}: 1rem;
                ${attachTokens.verticalGap}: 0.375rem;
                ${attachTokens.verticalGapWithHelperText}: 1.5rem;

                ${attachTokens.filenameWrapperHeight}: 2.5rem;
                ${attachTokens.filenameDropdownWrapperHeight}: 2rem;
                ${attachTokens.buttonHeight}: 2.5rem;
                ${attachTokens.buttonWidth}: 11.25rem;
                ${attachTokens.buttonPadding}: 1rem;
                ${attachTokens.buttonRadius}: 0.625rem;
                ${attachTokens.buttonFontFamily}: ${bodyS.fontFamily};
                ${attachTokens.buttonFontSize}: ${bodyS.fontSize};
                ${attachTokens.buttonFontStyle}: ${bodyS.fontStyle};
                ${attachTokens.buttonFontWeight}: ${bodySBold.fontWeight};
                ${attachTokens.buttonLetterSpacing}: ${bodyS.letterSpacing};
                ${attachTokens.buttonLineHeight}: ${bodyS.lineHeight};

                ${attachTokens.buttonSpinnerSize}: 1.375rem;
                ${attachTokens.buttonSpinnerColor}: inherit;

                ${attachTokens.buttonLeftContentMargin}: 0 0.25rem 0 -0.125rem;
                ${attachTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.25rem;
                ${attachTokens.buttonValueMargin}: 0 0 0 0.25rem;

                ${attachTokens.cellWidth}: fit-content;

                ${attachTokens.cellPadding}: 0rem;
                ${attachTokens.cellPaddingLeftContent}: 0rem;
                ${attachTokens.cellPaddingContent}: 0rem;
                ${attachTokens.cellPaddingRightContent}: 0rem;

                ${attachTokens.cellTextboxGap}: 0.125rem;
                ${attachTokens.cellGap}: 0.375rem;

                ${attachTokens.cellLabelFontFamily}: ${bodyXS.fontFamily};
                ${attachTokens.cellLabelFontSize}: ${bodyXS.fontSize};
                ${attachTokens.cellLabelFontStyle}: ${bodyXS.fontStyle};
                ${attachTokens.cellLabelFontWeight}: ${bodyXS.fontWeight};
                ${attachTokens.cellLabelLetterSpacing}: ${bodyXS.letterSpacing};
                ${attachTokens.cellLabelLineHeight}: ${bodyXS.lineHeight};

                ${attachTokens.cellTitleFontFamily}: ${bodyS.fontFamily};
                ${attachTokens.cellTitleFontSize}: ${bodyS.fontSize};
                ${attachTokens.cellTitleFontStyle}: ${bodyS.fontStyle};
                ${attachTokens.cellTitleFontWeight}: ${bodyS.fontWeight};
                ${attachTokens.cellTitleLetterSpacing}: ${bodyS.letterSpacing};
                ${attachTokens.cellTitleLineHeight}: ${bodyS.lineHeight};

                ${attachTokens.cellSubtitleFontFamily}: ${bodyXS.fontFamily};
                ${attachTokens.cellSubtitleFontSize}: ${bodyXS.fontSize};
                ${attachTokens.cellSubtitleFontStyle}: ${bodyXS.fontStyle};
                ${attachTokens.cellSubtitleFontWeight}: ${bodyXS.fontWeight};
                ${attachTokens.cellSubtitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${attachTokens.cellSubtitleLineHeight}: ${bodyXS.lineHeight};

                ${attachTokens.iconButtonHeight}: 2.5rem;
                ${attachTokens.iconButtonWidth}: 2.5rem;
                ${attachTokens.iconButtonPadding}: 1rem;
                ${attachTokens.iconButtonRadius}: 0.625rem;
                ${attachTokens.iconButtonFontFamily}: ${bodyS.fontFamily};
                ${attachTokens.iconButtonFontSize}: ${bodyS.fontSize};
                ${attachTokens.iconButtonFontStyle}: ${bodyS.fontStyle};
                ${attachTokens.iconButtonFontWeight}: ${bodySBold.fontWeight};
                ${attachTokens.iconButtonLetterSpacing}: ${bodyS.letterSpacing};
                ${attachTokens.iconButtonLineHeight}: ${bodyS.lineHeight};

                ${attachTokens.iconButtonSpinnerSize}: 1.375rem;
                ${attachTokens.iconButtonSpinnerColor}: inherit;

                ${attachTokens.iconButtonCancelHeight}: 2rem;
                ${attachTokens.iconButtonCancelWidth}: 2rem;
                ${attachTokens.iconButtonCancelPadding}: 0.75rem;
                ${attachTokens.iconButtonCancelRadius}: 0.5rem;
                ${attachTokens.iconButtonCancelFontFamily}: ${bodyXS.fontFamily};
                ${attachTokens.iconButtonCancelFontSize}: ${bodyXS.fontSize};
                ${attachTokens.iconButtonCancelFontStyle}: ${bodyXS.fontStyle};
                ${attachTokens.iconButtonCancelFontWeight}: ${bodyXSBold.fontWeight};
                ${attachTokens.iconButtonCancelLetterSpacing}: ${bodyXS.letterSpacing};
                ${attachTokens.iconButtonCancelLineHeight}: ${bodyXS.lineHeight};

                ${attachTokens.iconButtonCancelSpinnerSize}: 1rem;
                ${attachTokens.iconButtonCancelSpinnerColor}: inherit;

                ${attachTokens.moreIconPadding}: 0.25rem;

                ${attachTokens.dropdownBorderRadius}: 0.625rem;
                ${attachTokens.dropdownPadding}: 0.125rem;
                ${attachTokens.dropdownItemPadding}: 0.25rem 0.75rem;
            `,
            xs: css`
                ${attachTokens.horizontalGap}: 0.75rem;
                ${attachTokens.verticalGap}: 0.25rem;
                ${attachTokens.verticalGapWithHelperText}: 1.375rem;

                ${attachTokens.filenameWrapperHeight}: 2rem;
                ${attachTokens.filenameDropdownWrapperHeight}: 2rem;
                ${attachTokens.buttonHeight}: 2rem;
                ${attachTokens.buttonWidth}: 10rem;
                ${attachTokens.buttonPadding}: 0.75rem;
                ${attachTokens.buttonRadius}: 0.5rem;
                ${attachTokens.buttonFontFamily}: ${bodyXS.fontFamily};
                ${attachTokens.buttonFontSize}: ${bodyXS.fontSize};
                ${attachTokens.buttonFontStyle}: ${bodyXS.fontStyle};
                ${attachTokens.buttonFontWeight}: ${bodyXSBold.fontWeight};
                ${attachTokens.buttonLetterSpacing}: ${bodyXS.letterSpacing};
                ${attachTokens.buttonLineHeight}: ${bodyXS.lineHeight};

                ${attachTokens.buttonSpinnerSize}: 1rem;
                ${attachTokens.buttonSpinnerColor}: inherit;

                ${attachTokens.buttonLeftContentMargin}: 0 0.25rem 0 -0.125rem;
                ${attachTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.25rem;
                ${attachTokens.buttonValueMargin}: 0 0 0 0.25rem;

                ${attachTokens.cellWidth}: fit-content;

                ${attachTokens.cellPadding}: 0rem;
                ${attachTokens.cellPaddingLeftContent}: 0rem;
                ${attachTokens.cellPaddingContent}: 0rem;
                ${attachTokens.cellPaddingRightContent}: 0rem;

                ${attachTokens.cellTextboxGap}: 0.125rem;
                ${attachTokens.cellGap}: 0.25rem;

                ${attachTokens.cellLabelFontFamily}: ${bodyXS.fontFamily};
                ${attachTokens.cellLabelFontSize}: ${bodyXS.fontSize};
                ${attachTokens.cellLabelFontStyle}: ${bodyXS.fontStyle};
                ${attachTokens.cellLabelFontWeight}: ${bodyXS.fontWeight};
                ${attachTokens.cellLabelLetterSpacing}: ${bodyXS.letterSpacing};
                ${attachTokens.cellLabelLineHeight}: ${bodyXS.lineHeight};

                ${attachTokens.cellTitleFontFamily}: ${bodyXS.fontFamily};
                ${attachTokens.cellTitleFontSize}: ${bodyXS.fontSize};
                ${attachTokens.cellTitleFontStyle}: ${bodyXS.fontStyle};
                ${attachTokens.cellTitleFontWeight}: ${bodyXS.fontWeight};
                ${attachTokens.cellTitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${attachTokens.cellTitleLineHeight}: ${bodyXS.lineHeight};

                ${attachTokens.cellSubtitleFontFamily}: ${bodyXS.fontFamily};
                ${attachTokens.cellSubtitleFontSize}: ${bodyXS.fontSize};
                ${attachTokens.cellSubtitleFontStyle}: ${bodyXS.fontStyle};
                ${attachTokens.cellSubtitleFontWeight}: ${bodyXS.fontWeight};
                ${attachTokens.cellSubtitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${attachTokens.cellSubtitleLineHeight}: ${bodyXS.lineHeight};

                ${attachTokens.iconButtonHeight}: 2rem;
                ${attachTokens.iconButtonWidth}: 2rem;
                ${attachTokens.iconButtonPadding}: 0.75rem;
                ${attachTokens.iconButtonRadius}: 0.5rem;
                ${attachTokens.iconButtonFontFamily}: ${bodyXS.fontFamily};
                ${attachTokens.iconButtonFontSize}: ${bodyXS.fontSize};
                ${attachTokens.iconButtonFontStyle}: ${bodyXS.fontStyle};
                ${attachTokens.iconButtonFontWeight}: ${bodyXSBold.fontWeight};
                ${attachTokens.iconButtonLetterSpacing}: ${bodyXS.letterSpacing};
                ${attachTokens.iconButtonLineHeight}: ${bodyXS.lineHeight};

                ${attachTokens.iconButtonSpinnerSize}: 1rem;
                ${attachTokens.iconButtonSpinnerColor}: inherit;

                ${attachTokens.iconButtonCancelHeight}: 2rem;
                ${attachTokens.iconButtonCancelWidth}: 2rem;
                ${attachTokens.iconButtonCancelPadding}: 0.75rem;
                ${attachTokens.iconButtonCancelRadius}: 0.5rem;
                ${attachTokens.iconButtonCancelFontFamily}: ${bodyXS.fontFamily};
                ${attachTokens.iconButtonCancelFontSize}: ${bodyXS.fontSize};
                ${attachTokens.iconButtonCancelFontStyle}: ${bodyXS.fontStyle};
                ${attachTokens.iconButtonCancelFontWeight}: ${bodyXSBold.fontWeight};
                ${attachTokens.iconButtonCancelLetterSpacing}: ${bodyXS.letterSpacing};
                ${attachTokens.iconButtonCancelLineHeight}: ${bodyXS.lineHeight};

                ${attachTokens.iconButtonCancelSpinnerSize}: 1rem;
                ${attachTokens.iconButtonCancelSpinnerColor}: inherit;

                ${attachTokens.moreIconPadding}: 0.25rem;

                ${attachTokens.dropdownBorderRadius}: 0.5rem;
                ${attachTokens.dropdownPadding}: 0.125rem;
                ${attachTokens.dropdownItemPadding}: 0.125rem 0.5rem;
            `,
        },
    },
};
