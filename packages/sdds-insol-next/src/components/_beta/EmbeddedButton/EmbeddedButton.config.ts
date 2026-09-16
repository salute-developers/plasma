import { css, _beta_embeddedButtonTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    surfaceAccent,
    textAccent,
    textAccentActive,
    textAccentHover,
    textInfo,
    textInfoActive,
    textInfoHover,
    textNegative,
    textNegativeActive,
    textNegativeHover,
    textPositive,
    textPositiveActive,
    textPositiveHover,
    textPrimary,
    textPrimaryActive,
    textPrimaryHover,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
    textWarning,
    textWarningActive,
    textWarningHover,
} from '@salutejs/sdds-themes/tokens/sdds_insol_next';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.color}: ${textPrimary};
                ${tokens.colorHover}: ${textPrimaryHover};
                ${tokens.colorActive}: ${textPrimaryActive};
                ${tokens.backgroundColor}: transparent;
                ${tokens.spinnerColor}: ${textPrimary};
                ${tokens.focusColor}: ${surfaceAccent};
                ${tokens.loadingIconOpacity}: 0.06;
            `,
            secondary: css`
                ${tokens.color}: ${textSecondary};
                ${tokens.colorHover}: ${textSecondaryHover};
                ${tokens.colorActive}: ${textSecondaryActive};
                ${tokens.backgroundColor}: transparent;
                ${tokens.spinnerColor}: ${textSecondary};
                ${tokens.focusColor}: ${surfaceAccent};
                ${tokens.loadingIconOpacity}: 0.06;
            `,
            accent: css`
                ${tokens.color}: ${textAccent};
                ${tokens.colorHover}: ${textAccentHover};
                ${tokens.colorActive}: ${textAccentActive};
                ${tokens.backgroundColor}: transparent;
                ${tokens.spinnerColor}: ${textAccent};
                ${tokens.focusColor}: ${surfaceAccent};
                ${tokens.loadingIconOpacity}: 0.06;
            `,
            positive: css`
                ${tokens.color}: ${textPositive};
                ${tokens.colorHover}: ${textPositiveHover};
                ${tokens.colorActive}: ${textPositiveActive};
                ${tokens.backgroundColor}: transparent;
                ${tokens.spinnerColor}: ${textPositive};
                ${tokens.focusColor}: ${surfaceAccent};
                ${tokens.loadingIconOpacity}: 0.06;
            `,
            warning: css`
                ${tokens.color}: ${textWarning};
                ${tokens.colorHover}: ${textWarningHover};
                ${tokens.colorActive}: ${textWarningActive};
                ${tokens.backgroundColor}: transparent;
                ${tokens.spinnerColor}: ${textWarning};
                ${tokens.focusColor}: ${surfaceAccent};
                ${tokens.loadingIconOpacity}: 0.06;
            `,
            negative: css`
                ${tokens.color}: ${textNegative};
                ${tokens.colorHover}: ${textNegativeHover};
                ${tokens.colorActive}: ${textNegativeActive};
                ${tokens.backgroundColor}: transparent;
                ${tokens.spinnerColor}: ${textNegative};
                ${tokens.focusColor}: ${surfaceAccent};
                ${tokens.loadingIconOpacity}: 0.06;
            `,
            info: css`
                ${tokens.color}: ${textInfo};
                ${tokens.colorHover}: ${textInfoHover};
                ${tokens.colorActive}: ${textInfoActive};
                ${tokens.backgroundColor}: transparent;
                ${tokens.spinnerColor}: ${textInfo};
                ${tokens.focusColor}: ${surfaceAccent};
                ${tokens.loadingIconOpacity}: 0.06;
            `,
        },
        size: {
            l: css`
                ${tokens.borderRadius}: 0.75rem;
                ${tokens.spinnerSize}: 2.25rem;
            `,
            m: css`
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.spinnerSize}: 1.5rem;
            `,
            s: css`
                ${tokens.borderRadius}: 0.5rem;
                ${tokens.spinnerSize}: 1rem;
            `,
            xs: css`
                ${tokens.borderRadius}: 0.375rem;
                ${tokens.spinnerSize}: 0.75rem;
            `,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
