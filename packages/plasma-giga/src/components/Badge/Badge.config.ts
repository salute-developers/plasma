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
    surfaceTransparentPositive,
    surfaceTransparentSecondary,
    surfaceTransparentWarning,
    surfaceWarning,
    textAccent,
    textNegative,
    textPositive,
    textPrimary,
    textWarning,
} from '@salutejs/plasma-themes/tokens/plasma_giga';

import { pilled, sizeL, sizeM, sizeS, sizeXS } from './Badge.config.common';

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
                ${badgeTokens.color}: ${inverseTextPrimary};
                ${badgeTokens.background}: ${surfaceAccent};

                ${badgeTokens.colorTransparent}: ${textAccent};
                ${badgeTokens.backgroundTransparent}: ${surfaceTransparentAccent};

                ${badgeTokens.colorClear}: ${textAccent};
            `,
            positive: css`
                ${badgeTokens.color}: ${onDarkTextPrimary};
                ${badgeTokens.background}: ${surfacePositive};

                ${badgeTokens.colorTransparent}: ${textPositive};
                ${badgeTokens.backgroundTransparent}: ${surfaceTransparentPositive};

                ${badgeTokens.colorClear}: ${textPositive};
            `,
            warning: css`
                ${badgeTokens.color}: ${onDarkTextPrimary};
                ${badgeTokens.background}: ${surfaceWarning};

                ${badgeTokens.colorTransparent}: ${textWarning};
                ${badgeTokens.backgroundTransparent}: ${surfaceTransparentWarning};

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
