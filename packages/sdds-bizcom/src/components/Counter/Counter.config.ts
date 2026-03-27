import {
    bodyS,
    bodyXS,
    bodyXXS,
    inverseTextPrimary,
    onDarkSurfaceSolidDefault,
    onDarkTextPrimary,
    onLightSurfaceSolidDefault,
    onLightTextPrimary,
    surfaceAccent,
    surfaceNegative,
    surfacePositive,
    surfaceSolidDefault,
    surfaceWarning,
} from '@salutejs/sdds-themes/tokens/sdds_bizcom';
import { css, counterTokens } from '@salutejs/plasma-new-hope/styled-components';

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
                ${counterTokens.background}: ${surfaceAccent};
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
                ${counterTokens.fontFamily}: ${bodyXS.fontFamily};
                ${counterTokens.fontSize}: ${bodyXS.fontSize};
                ${counterTokens.fontStyle}: ${bodyXS.fontStyle};
                ${counterTokens.fontWeight}: ${bodyXS.fontWeight};
                ${counterTokens.letterSpacing}: ${bodyXS.letterSpacing};
                ${counterTokens.lineHeight}: ${bodyXS.lineHeight};
            `,
            s: css`
                ${counterTokens.borderRadius}: 1rem;
                ${counterTokens.height}: 1.25rem;
                ${counterTokens.padding}: 0 0.375rem;
                ${counterTokens.fontFamily}: ${bodyXXS.fontFamily};
                ${counterTokens.fontSize}: ${bodyXXS.fontSize};
                ${counterTokens.fontStyle}: ${bodyXXS.fontStyle};
                ${counterTokens.fontWeight}: ${bodyXXS.fontWeight};
                ${counterTokens.letterSpacing}: ${bodyXXS.letterSpacing};
                ${counterTokens.lineHeight}: ${bodyXXS.lineHeight};
            `,
            xs: css`
                ${counterTokens.borderRadius}: 1rem;
                ${counterTokens.height}: 1rem;
                ${counterTokens.padding}: 0 0.25rem;
                ${counterTokens.fontFamily}: ${bodyXXS.fontFamily};
                ${counterTokens.fontSize}: ${bodyXXS.fontSize};
                ${counterTokens.fontStyle}: ${bodyXXS.fontStyle};
                ${counterTokens.fontWeight}: ${bodyXXS.fontWeight};
                ${counterTokens.letterSpacing}: ${bodyXXS.letterSpacing};
                ${counterTokens.lineHeight}: ${bodyXXS.lineHeight};
            `,
            xxs: css`
                ${counterTokens.borderRadius}: 1rem;
                ${counterTokens.height}: 0.75rem;
                ${counterTokens.padding}: 0 0.125rem;
                ${counterTokens.fontFamily}: ${bodyXXS.fontFamily};
                ${counterTokens.fontSize}: ${bodyXXS.fontSize};
                ${counterTokens.fontStyle}: ${bodyXXS.fontStyle};
                ${counterTokens.fontWeight}: ${bodyXXS.fontWeight};
                ${counterTokens.letterSpacing}: ${bodyXXS.letterSpacing};
                ${counterTokens.lineHeight}: ${bodyXXS.lineHeight};
            `,
        },
    },
};
