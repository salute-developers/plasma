import { css, badgeTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    onDarkSurfaceTransparentCard,
    onDarkTextPrimary,
    onLightDataPink,
    onLightSurfaceTransparentDeep,
    surfaceTransparentAccent,
    surfaceTransparentNegative,
    surfaceTransparentPositive,
    surfaceTransparentSecondary,
    surfaceTransparentWarning,
    textAccent,
    textNegative,
    textPositive,
    textPrimary,
    textWarning,
} from '@salutejs/sdds-themes/tokens/sdds_insol_next';

import { pilled, sizeL, sizeM, sizeS, sizeXS } from './Badge.config.common';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${badgeTokens.color}: ${textPrimary};
                ${badgeTokens.background}: ${surfaceTransparentSecondary};
            `,
            accent: css`
                ${badgeTokens.color}: ${textAccent};
                ${badgeTokens.background}: ${surfaceTransparentAccent};
            `,
            positive: css`
                ${badgeTokens.color}: ${textPositive};
                ${badgeTokens.background}: ${surfaceTransparentPositive};
            `,
            warning: css`
                ${badgeTokens.color}: ${textWarning};
                ${badgeTokens.background}: ${surfaceTransparentWarning};
            `,
            negative: css`
                ${badgeTokens.color}: ${textNegative};
                ${badgeTokens.background}: ${surfaceTransparentNegative};
            `,
            dark: css`
                ${badgeTokens.color}: ${onDarkTextPrimary};
                ${badgeTokens.background}: ${onLightSurfaceTransparentDeep};
            `,
            light: css`
                ${badgeTokens.color}: ${onDarkTextPrimary};
                ${badgeTokens.background}: ${onDarkSurfaceTransparentCard};
            `,
            /* TODO: change with token data-pink-transparent-minor, when it will be added to theme */
            pink: css`
                ${badgeTokens.color}: ${onLightDataPink};
                ${badgeTokens.background}: #FF369A1F;
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
        truncate: {
            true: css``,
        },
    },
};
