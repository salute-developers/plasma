import { css, indicatorTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    onLightSurfaceSolidPrimary,
    surfaceSolidDeep,
    textAccent,
    textNegative,
    textWarning,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

export const config = {
    defaults: {
        size: '8',
        view: 'global',
    },
    variations: {
        view: {
            accent: css`
                ${tokens.color}: ${textAccent};
            `,
            global: css`
                ${tokens.color}: ${onLightSurfaceSolidPrimary};
            `,
            mute: css`
                ${tokens.color}: ${surfaceSolidDeep};
            `,
            danger: css`
                ${tokens.color}: ${textNegative};
            `,
            warning: css`
                ${tokens.color}: ${textWarning};
            `,
        },
        size: {
            '14': css`
                ${tokens.size}: 14px;
            `,
            '12': css`
                ${tokens.size}: 12px;
            `,
            '10': css`
                ${tokens.size}: 10px;
            `,
            '8': css`
                ${tokens.size}: 8px;
            `,
            '6': css`
                ${tokens.size}: 6px;
            `,
        },
    },
};
