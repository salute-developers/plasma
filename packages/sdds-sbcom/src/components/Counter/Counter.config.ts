import { css, counterTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    /*
     * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
     * Missing tokens in @salutejs/sdds-themes/tokens: bodyXs, bodyXxs, surfaceAccent
     */
    bodyS,
    inverseTextPrimary,
    onDarkSurfaceSolidDefault,
    onDarkTextPrimary,
    onLightSurfaceSolidDefault,
    onLightTextPrimary,
    surfaceNegative,
    surfacePositive,
    surfaceSolidDefault,
    surfaceWarning,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

export const config = {
    defaults: {
        view: 'default',
        size: 'xs',
    },
    variations: {
        view: {
            default: css`
                ${counterTokens.color}: ${inverseTextPrimary};
                ${counterTokens.background}: ${surfaceSolidDefault};
            `,
            accent: css`
                ${counterTokens.color}: ${onDarkTextPrimary};
                /* NOTE: no token surfaceAccent in @salutejs/sdds-themes/tokens */
                ${counterTokens.background}: var(--surface-accent);
            `,
            positive: css`
                ${counterTokens.color}: ${onDarkTextPrimary};
                ${counterTokens.background}: ${surfacePositive};
            `,
            warning: css`
                ${counterTokens.color}: ${onDarkTextPrimary};
                ${counterTokens.background}: ${surfaceWarning};
            `,
            negative: css`
                ${counterTokens.color}: ${onDarkTextPrimary};
                ${counterTokens.background}: ${surfaceNegative};
            `,
            dark: css`
                ${counterTokens.color}: ${onDarkTextPrimary};
                ${counterTokens.background}: ${onLightSurfaceSolidDefault};
            `,
            light: css`
                ${counterTokens.color}: ${onLightTextPrimary};
                ${counterTokens.background}: ${onDarkSurfaceSolidDefault};
            `,
        },
        size: {
            l: css`
                ${counterTokens.borderRadius}: 1rem;
                ${counterTokens.height}: 1.75rem;
                ${counterTokens.padding}: 0 0.625rem;
                ${counterTokens.fontFamily}: ${bodyS.fontFamily};
                ${counterTokens.fontSize}: ${bodyS.fontSize};
                ${counterTokens.fontStyle}: ${bodyS.fontStyle};
                ${counterTokens.fontWeight}: ${bodyS.fontWeight};
                ${counterTokens.letterSpacing}: ${bodyS.letterSpacing};
                ${counterTokens.lineHeight}: ${bodyS.lineHeight};
            `,
            m: css`
                ${counterTokens.borderRadius}: 1rem;
                ${counterTokens.height}: 1.5rem;
                ${counterTokens.padding}: 0 0.5rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${counterTokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${counterTokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${counterTokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${counterTokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${counterTokens.letterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${counterTokens.lineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            s: css`
                ${counterTokens.borderRadius}: 1rem;
                ${counterTokens.height}: 1.25rem;
                ${counterTokens.padding}: 0 0.375rem;
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${counterTokens.fontFamily}: var(--plasma-typo-body-xxs-font-family);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${counterTokens.fontSize}: var(--plasma-typo-body-xxs-font-size);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${counterTokens.fontStyle}: var(--plasma-typo-body-xxs-font-style);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${counterTokens.fontWeight}: var(--plasma-typo-body-xxs-font-weight);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${counterTokens.letterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${counterTokens.lineHeight}: var(--plasma-typo-body-xxs-line-height);
            `,
            xs: css`
                ${counterTokens.borderRadius}: 1rem;
                ${counterTokens.height}: 1rem;
                ${counterTokens.padding}: 0 0.25rem;
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${counterTokens.fontFamily}: var(--plasma-typo-body-xxs-font-family);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${counterTokens.fontSize}: var(--plasma-typo-body-xxs-font-size);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${counterTokens.fontStyle}: var(--plasma-typo-body-xxs-font-style);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${counterTokens.fontWeight}: var(--plasma-typo-body-xxs-font-weight);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${counterTokens.letterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${counterTokens.lineHeight}: var(--plasma-typo-body-xxs-line-height);
            `,
            xxs: css`
                ${counterTokens.borderRadius}: 1rem;
                ${counterTokens.height}: 0.75rem;
                ${counterTokens.padding}: 0 0.125rem;
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${counterTokens.fontFamily}: var(--plasma-typo-body-xxs-font-family);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${counterTokens.fontSize}: var(--plasma-typo-body-xxs-font-size);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${counterTokens.fontStyle}: var(--plasma-typo-body-xxs-font-style);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${counterTokens.fontWeight}: var(--plasma-typo-body-xxs-font-weight);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${counterTokens.letterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                /* NOTE: no token bodyXxs in @salutejs/sdds-themes/tokens */
                ${counterTokens.lineHeight}: var(--plasma-typo-body-xxs-line-height);
            `,
        },
    },
};
