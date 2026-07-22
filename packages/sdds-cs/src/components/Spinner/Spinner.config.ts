import {
    textAccent,
    textNegative,
    textPositive,
    textPrimary,
    textSecondary,
    textTertiary,
    textWarning,
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css } from '@salutejs/plasma-new-hope/emotion';

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
                --plasma-spinner-color: var(--text-paragraph);
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
