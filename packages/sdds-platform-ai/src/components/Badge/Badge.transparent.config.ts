import { css, badgeTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    dataPurpleExtra,
    dataTransparentPurpleExtra,
    onDarkSurfaceTransparentCard,
    onDarkTextPrimary,
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
} from '@salutejs/sdds-themes/tokens/sdds_platform_ai';

import { pilled, sizeL, sizeM, sizeXS } from './Badge.config.common';

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
            purple: css`
                ${badgeTokens.color}: ${dataPurpleExtra};
                ${badgeTokens.background}: ${dataTransparentPurpleExtra};
            `,
        },
        size: {
            l: css`
                ${sizeL}
            `,
            m: css`
                ${sizeM}
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
