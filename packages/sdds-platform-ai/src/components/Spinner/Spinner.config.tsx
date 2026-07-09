import { css } from '@salutejs/plasma-new-hope/styled-components';
import {
    textAccent,
    textNegative,
    textPositive,
    textPrimary,
    textSecondary,
    textWarning,
} from '@salutejs/sdds-themes/tokens/sdds_platform_ai';

// TODO: Добавить view info
export const config = {
    defaults: {
        view: 'accent',
        size: 'xxs',
    },
    variations: {
        view: {
            default: css`
                --plasma-spinner-color: ${textPrimary};
            `,
            secondary: css`
                --plasma-spinner-color: ${textSecondary};
            `,
            accent: css`
                --plasma-spinner-color: ${textAccent};
            `,
            positive: css`
                --plasma-spinner-color: ${textPositive};
            `,
            warning: css`
                --plasma-spinner-color: ${textWarning};
            `,
            negative: css`
                --plasma-spinner-color: ${textNegative};
            `,
        },
    },
};
