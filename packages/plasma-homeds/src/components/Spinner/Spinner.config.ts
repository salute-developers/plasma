import {
    textAccent,
    textNegative,
    textParagraph,
    textPositive,
    textPrimary,
    textSecondary,
    textTertiary,
    textWarning,
} from '@salutejs/plasma-themes/tokens/plasma_homeds';
import { css } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'accent',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                --plasma-spinner-color: ${textPrimary};
            `,
            secondary: css`
                --plasma-spinner-color: ${textSecondary};
            `,
            tertiary: css`
                --plasma-spinner-color: ${textTertiary};
            `,
            paragraph: css`
                --plasma-spinner-color: ${textParagraph};
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
