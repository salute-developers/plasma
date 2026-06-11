import { css, badgeTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    inverseTextPrimary,
    onDarkSurfaceSolidDefault,
    onDarkSurfaceTransparentCard,
    onDarkTextPrimary,
    onLightSurfaceSolidDefault,
    onLightSurfaceTransparentDeep,
    onLightTextPrimary,
    surfaceAccent,
    surfaceClear,
    surfaceNegative,
    surfacePositive,
    surfaceSolidDefault,
    surfaceTransparentAccent,
    surfaceTransparentNegative,
    surfaceTransparentSecondary,
    surfaceWarning,
    textAccent,
    textNegative,
    textPositive,
    textPrimary,
    textWarning,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

import { pilled, sizeL, sizeM, sizeS, sizeXS } from './Badge.config.common';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyXs, bodyXxs, surfaceTransparentPositive
 * surfaceTransparentWarning
 */
export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${badgeTokens.color}: ${inverseTextPrimary};
                ${badgeTokens.background}: ${surfaceSolidDefault};

                ${badgeTokens.colorTransparent}: ${textPrimary};
                ${badgeTokens.backgroundTransparent}: ${surfaceTransparentSecondary};

                ${badgeTokens.colorClear}: ${textPrimary};
            `,
            accent: css`
                ${badgeTokens.color}: ${onDarkTextPrimary};
                ${badgeTokens.background}: ${surfaceAccent};

                ${badgeTokens.colorTransparent}: ${textAccent};
                ${badgeTokens.backgroundTransparent}: ${surfaceTransparentAccent};

                ${badgeTokens.colorClear}: ${textAccent};
            `,
            positive: css`
                ${badgeTokens.color}: ${onDarkTextPrimary};
                ${badgeTokens.background}: ${surfacePositive};

                ${badgeTokens.colorTransparent}: ${textPositive};
                ${badgeTokens.backgroundTransparent}: var(--surface-transparent-positive);

                ${badgeTokens.colorClear}: ${textPositive};
            `,
            warning: css`
                ${badgeTokens.color}: ${onDarkTextPrimary};
                ${badgeTokens.background}: ${surfaceWarning};

                ${badgeTokens.colorTransparent}: ${textWarning};
                ${badgeTokens.backgroundTransparent}: var(--surface-transparent-warning);

                ${badgeTokens.colorClear}: ${textWarning};
            `,
            negative: css`
                ${badgeTokens.color}: ${onDarkTextPrimary};
                ${badgeTokens.background}: ${surfaceNegative};

                ${badgeTokens.colorTransparent}: ${textNegative};
                ${badgeTokens.backgroundTransparent}: ${surfaceTransparentNegative};

                ${badgeTokens.colorClear}: ${textNegative};
            `,
            dark: css`
                ${badgeTokens.color}: ${onDarkTextPrimary};
                ${badgeTokens.background}: ${onLightSurfaceSolidDefault};

                ${badgeTokens.colorTransparent}: ${onDarkTextPrimary};
                ${badgeTokens.backgroundTransparent}: ${onLightSurfaceTransparentDeep};

                ${badgeTokens.colorClear}: ${onLightTextPrimary};
            `,
            light: css`
                ${badgeTokens.color}: ${onLightTextPrimary};
                ${badgeTokens.background}: ${onDarkSurfaceSolidDefault};

                ${badgeTokens.colorTransparent}: ${onDarkTextPrimary};
                ${badgeTokens.backgroundTransparent}: ${onDarkSurfaceTransparentCard};

                ${badgeTokens.colorClear}: ${onDarkTextPrimary};
            `,
        },
        size: {
            l: css`
                ${sizeL}
            `,
            m: css`
                ${sizeM}
            `,
            s: css`
                ${sizeS}
            `,
            xs: css`
                ${sizeXS}
            `,
        },
        pilled: {
            true: css`
                ${pilled}
            `,
        },
        transparent: {
            true: css``,
        },
        clear: {
            true: css`
                ${badgeTokens.backgroundClear}: ${surfaceClear};
            `,
        },
    },
};
