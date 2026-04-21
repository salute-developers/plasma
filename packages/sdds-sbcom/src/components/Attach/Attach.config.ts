import { css, attachTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    /*
     * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
     * Missing tokens in @salutejs/sdds-themes/tokens: bodyM, bodyMBold, bodyXs, bodyXsBold, surfaceAccent
     * surfaceAccentActive, surfaceAccentHover
     */
    bodyL,
    bodyLBold,
    bodyS,
    bodySBold,
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
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

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
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.buttonFocusColor}: var(--surface-accent);

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
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonFocusColor}: var(--surface-accent);

                ${attachTokens.iconButtonCancelColor}: ${textSecondary};
                ${attachTokens.iconButtonCancelBackgroundColor}: ${surfaceClear};
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: ${textSecondaryHover};
                ${attachTokens.iconButtonCancelBackgroundColorHover}: ${surfaceClear};
                ${attachTokens.iconButtonCancelColorActive}: ${textSecondaryActive};
                ${attachTokens.iconButtonCancelBackgroundColorActive}: ${surfaceClear};

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelFocusColor}: var(--surface-accent);

                ${attachTokens.moreIconColor}: ${textPrimary};
            `,
            accent: css`
                ${attachTokens.buttonColor}: ${onDarkTextPrimary};
                ${attachTokens.buttonValueColor}: ${onDarkTextSecondary};
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.buttonBackgroundColor}: var(--surface-accent);
                ${attachTokens.buttonLoadingBackgroundColor}: var(${attachTokens.buttonBackgroundColor});
                ${attachTokens.buttonColorHover}: ${onDarkTextPrimary};
                /* NOTE: no token surfaceAccentHover in @salutejs/sdds-themes/tokens */
                ${attachTokens.buttonBackgroundColorHover}: var(--surface-accent-hover);
                ${attachTokens.buttonColorActive}: ${onDarkTextPrimary};
                /* NOTE: no token surfaceAccentActive in @salutejs/sdds-themes/tokens */
                ${attachTokens.buttonBackgroundColorActive}: var(--surface-accent-active);

                ${attachTokens.buttonDisabledOpacity}: 0.4;
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.buttonFocusColor}: var(--surface-accent);

                ${attachTokens.cellColor}: ${textPrimary};
                ${attachTokens.cellLabelColor}: ${textSecondary};
                ${attachTokens.cellTitleColor}: ${textPrimary};
                ${attachTokens.cellSubtitleColor}: ${textSecondary};
                ${attachTokens.cellBackgroundColor}: transparent;

                ${attachTokens.iconButtonColor}: ${onDarkTextPrimary};
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonBackgroundColor}: var(--surface-accent);
                ${attachTokens.iconButtonLoadingBackgroundColor}: var(${attachTokens.iconButtonBackgroundColor});
                ${attachTokens.iconButtonColorHover}: ${onDarkTextPrimary};
                /* NOTE: no token surfaceAccentHover in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonBackgroundColorHover}: var(--surface-accent-hover);
                ${attachTokens.iconButtonColorActive}: ${onDarkTextPrimary};
                /* NOTE: no token surfaceAccentActive in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonBackgroundColorActive}: var(--surface-accent-active);

                ${attachTokens.iconButtonDisabledOpacity}: 0.4;
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonFocusColor}: var(--surface-accent);

                ${attachTokens.iconButtonCancelColor}: ${textSecondary};
                ${attachTokens.iconButtonCancelBackgroundColor}: ${surfaceClear};
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: ${textSecondaryHover};
                ${attachTokens.iconButtonCancelBackgroundColorHover}: ${surfaceClear};
                ${attachTokens.iconButtonCancelColorActive}: ${textSecondaryActive};
                ${attachTokens.iconButtonCancelBackgroundColorActive}: ${surfaceClear};

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelFocusColor}: var(--surface-accent);

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
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.buttonFocusColor}: var(--surface-accent);

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
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonFocusColor}: var(--surface-accent);

                ${attachTokens.iconButtonCancelColor}: ${textSecondary};
                ${attachTokens.iconButtonCancelBackgroundColor}: ${surfaceClear};
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: ${textSecondaryHover};
                ${attachTokens.iconButtonCancelBackgroundColorHover}: ${surfaceClear};
                ${attachTokens.iconButtonCancelColorActive}: ${textSecondaryActive};
                ${attachTokens.iconButtonCancelBackgroundColorActive}: ${surfaceClear};

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelFocusColor}: var(--surface-accent);

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
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.buttonFocusColor}: var(--surface-accent);

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
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonFocusColor}: var(--surface-accent);

                ${attachTokens.iconButtonCancelColor}: ${textSecondary};
                ${attachTokens.iconButtonCancelBackgroundColor}: ${surfaceClear};
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: ${textSecondaryHover};
                ${attachTokens.iconButtonCancelBackgroundColorHover}: ${surfaceClear};
                ${attachTokens.iconButtonCancelColorActive}: ${textSecondaryActive};
                ${attachTokens.iconButtonCancelBackgroundColorActive}: ${surfaceClear};

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelFocusColor}: var(--surface-accent);

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
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.buttonFocusColor}: var(--surface-accent);

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
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonFocusColor}: var(--surface-accent);

                ${attachTokens.iconButtonCancelColor}: ${textSecondary};
                ${attachTokens.iconButtonCancelBackgroundColor}: ${surfaceClear};
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: ${textSecondaryHover};
                ${attachTokens.iconButtonCancelBackgroundColorHover}: ${surfaceClear};
                ${attachTokens.iconButtonCancelColorActive}: ${textSecondaryActive};
                ${attachTokens.iconButtonCancelBackgroundColorActive}: ${surfaceClear};

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelFocusColor}: var(--surface-accent);

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
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.buttonFocusColor}: var(--surface-accent);

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
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonFocusColor}: var(--surface-accent);

                ${attachTokens.iconButtonCancelColor}: ${textSecondary};
                ${attachTokens.iconButtonCancelBackgroundColor}: ${surfaceClear};
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: ${textSecondaryHover};
                ${attachTokens.iconButtonCancelBackgroundColorHover}: ${surfaceClear};
                ${attachTokens.iconButtonCancelColorActive}: ${textSecondaryActive};
                ${attachTokens.iconButtonCancelBackgroundColorActive}: ${surfaceClear};

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelFocusColor}: var(--surface-accent);

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
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonFocusColor}: var(--surface-accent);

                ${attachTokens.iconButtonCancelColor}: ${textSecondary};
                ${attachTokens.iconButtonCancelBackgroundColor}: ${surfaceClear};
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: ${textSecondaryHover};
                ${attachTokens.iconButtonCancelBackgroundColorHover}: ${surfaceClear};
                ${attachTokens.iconButtonCancelColorActive}: ${textSecondaryActive};
                ${attachTokens.iconButtonCancelBackgroundColorActive}: ${surfaceClear};

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelFocusColor}: var(--surface-accent);

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
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.buttonFocusColor}: var(--surface-accent);

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
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonFocusColor}: var(--surface-accent);

                ${attachTokens.iconButtonCancelColor}: ${textSecondary};
                ${attachTokens.iconButtonCancelBackgroundColor}: ${surfaceClear};
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: ${textSecondaryHover};
                ${attachTokens.iconButtonCancelBackgroundColorHover}: ${surfaceClear};
                ${attachTokens.iconButtonCancelColorActive}: ${textSecondaryActive};
                ${attachTokens.iconButtonCancelBackgroundColorActive}: ${surfaceClear};

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelFocusColor}: var(--surface-accent);

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
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.buttonFocusColor}: var(--surface-accent);

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
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonFocusColor}: var(--surface-accent);

                ${attachTokens.iconButtonCancelColor}: ${textSecondary};
                ${attachTokens.iconButtonCancelBackgroundColor}: ${surfaceClear};
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: ${textSecondaryHover};
                ${attachTokens.iconButtonCancelBackgroundColorHover}: ${surfaceClear};
                ${attachTokens.iconButtonCancelColorActive}: ${textSecondaryActive};
                ${attachTokens.iconButtonCancelBackgroundColorActive}: ${surfaceClear};

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelFocusColor}: var(--surface-accent);

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
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.buttonFocusColor}: var(--surface-accent);

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
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonFocusColor}: var(--surface-accent);

                ${attachTokens.iconButtonCancelColor}: ${textSecondary};
                ${attachTokens.iconButtonCancelBackgroundColor}: ${surfaceClear};
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: ${textSecondaryHover};
                ${attachTokens.iconButtonCancelBackgroundColorHover}: ${surfaceClear};
                ${attachTokens.iconButtonCancelColorActive}: ${textSecondaryActive};
                ${attachTokens.iconButtonCancelBackgroundColorActive}: ${surfaceClear};

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelFocusColor}: var(--surface-accent);

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

                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellLabelFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellLabelFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellLabelFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellLabelFontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellLabelLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellLabelLineHeight}: var(--plasma-typo-body-m-line-height);

                ${attachTokens.cellTitleFontFamily}: ${bodyL.fontFamily};
                ${attachTokens.cellTitleFontSize}: ${bodyL.fontSize};
                ${attachTokens.cellTitleFontStyle}: ${bodyL.fontStyle};
                ${attachTokens.cellTitleFontWeight}: ${bodyL.fontWeight};
                ${attachTokens.cellTitleLetterSpacing}: ${bodyL.letterSpacing};
                ${attachTokens.cellTitleLineHeight}: ${bodyL.lineHeight};

                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellSubtitleFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellSubtitleFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellSubtitleFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellSubtitleFontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellSubtitleLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellSubtitleLineHeight}: var(--plasma-typo-body-m-line-height);

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
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXsBold in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelLineHeight}: var(--plasma-typo-body-xs-line-height);

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
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${attachTokens.buttonFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${attachTokens.buttonFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${attachTokens.buttonFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyMBold in @salutejs/sdds-themes/tokens */
                ${attachTokens.buttonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${attachTokens.buttonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${attachTokens.buttonLineHeight}: var(--plasma-typo-body-m-line-height);

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

                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellTitleFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellTitleFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellTitleFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellTitleFontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellTitleLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellTitleLineHeight}: var(--plasma-typo-body-m-line-height);

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
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyMBold in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonLineHeight}: var(--plasma-typo-body-m-line-height);

                ${attachTokens.iconButtonSpinnerSize}: 1.375rem;
                ${attachTokens.iconButtonSpinnerColor}: inherit;

                ${attachTokens.iconButtonCancelHeight}: 2rem;
                ${attachTokens.iconButtonCancelWidth}: 2rem;
                ${attachTokens.iconButtonCancelPadding}: 0.75rem;
                ${attachTokens.iconButtonCancelRadius}: 0.5rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXsBold in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelLineHeight}: var(--plasma-typo-body-xs-line-height);

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

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellLabelFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellLabelFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellLabelFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellLabelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellLabelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellLabelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${attachTokens.cellTitleFontFamily}: ${bodyS.fontFamily};
                ${attachTokens.cellTitleFontSize}: ${bodyS.fontSize};
                ${attachTokens.cellTitleFontStyle}: ${bodyS.fontStyle};
                ${attachTokens.cellTitleFontWeight}: ${bodyS.fontWeight};
                ${attachTokens.cellTitleLetterSpacing}: ${bodyS.letterSpacing};
                ${attachTokens.cellTitleLineHeight}: ${bodyS.lineHeight};

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellSubtitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellSubtitleFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellSubtitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellSubtitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellSubtitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellSubtitleLineHeight}: var(--plasma-typo-body-xs-line-height);

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
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXsBold in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelLineHeight}: var(--plasma-typo-body-xs-line-height);

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
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.buttonFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.buttonFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.buttonFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXsBold in @salutejs/sdds-themes/tokens */
                ${attachTokens.buttonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.buttonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.buttonLineHeight}: var(--plasma-typo-body-xs-line-height);

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

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellLabelFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellLabelFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellLabelFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellLabelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellLabelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellLabelLineHeight}: var(--plasma-typo-body-xs-line-height);

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellTitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellTitleFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellTitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellTitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellTitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellTitleLineHeight}: var(--plasma-typo-body-xs-line-height);

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellSubtitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellSubtitleFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellSubtitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellSubtitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellSubtitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.cellSubtitleLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${attachTokens.iconButtonHeight}: 2rem;
                ${attachTokens.iconButtonWidth}: 2rem;
                ${attachTokens.iconButtonPadding}: 0.75rem;
                ${attachTokens.iconButtonRadius}: 0.5rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXsBold in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${attachTokens.iconButtonSpinnerSize}: 1rem;
                ${attachTokens.iconButtonSpinnerColor}: inherit;

                ${attachTokens.iconButtonCancelHeight}: 2rem;
                ${attachTokens.iconButtonCancelWidth}: 2rem;
                ${attachTokens.iconButtonCancelPadding}: 0.75rem;
                ${attachTokens.iconButtonCancelRadius}: 0.5rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXsBold in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${attachTokens.iconButtonCancelLineHeight}: var(--plasma-typo-body-xs-line-height);

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
