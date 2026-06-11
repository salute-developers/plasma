import { css, badgeTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    onDarkSurfaceTransparentCard,
    onDarkTextPrimary,
    onLightSurfaceTransparentDeep,
    surfaceTransparentAccent,
    surfaceTransparentNegative,
    surfaceTransparentSecondary,
    textAccent,
    textNegative,
    textPositive,
    textPrimary,
    textWarning,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

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
                ${badgeTokens.background}: var(--surface-transparent-positive);
            `,
            warning: css`
                ${badgeTokens.color}: ${textWarning};
                ${badgeTokens.background}: var(--surface-transparent-warning);
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
