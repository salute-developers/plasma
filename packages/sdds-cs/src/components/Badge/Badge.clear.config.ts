import { textAccent, textNegative, textPositive, textPrimary } from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, badgeTokens } from '@salutejs/plasma-new-hope/emotion';

import { pilled, sizeS } from './Badge.config.common';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
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
            negative: css`
                ${badgeTokens.color}: ${textNegative};
            `,
        },
        size: {
            s: css`
                ${sizeS}
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
