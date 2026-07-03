import { css, badgeTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    onDarkTextPrimary,
    onLightTextPrimary,
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
            `,
            accent: css`
                ${badgeTokens.color}: ${textAccent};
            `,
            positive: css`
                ${badgeTokens.color}: ${textPositive};
            `,
            warning: css`
                ${badgeTokens.color}: ${textWarning};
            `,
            negative: css`
                ${badgeTokens.color}: ${textNegative};
            `,
            dark: css`
                ${badgeTokens.color}: ${onLightTextPrimary};
            `,
            light: css`
                ${badgeTokens.color}: ${onDarkTextPrimary};
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
        truncate: {
            true: css``,
        },
    },
};
