import {
    textAccent,
    textNegative,
    textParagraph,
    textPositive,
    textPrimary,
    textSecondary,
    textTertiary,
    textWarning,
} from '@salutejs/plasma-themes/tokens/plasma_b2c';
import { css } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'accent',
        size: 'm',
    },
    variations: {
        size: {
            s: css`
                --plasma-spinner-size: 16px;
            `,
            m: css`
                --plasma-spinner-size: 24px;
            `,
            l: css`
                --plasma-spinner-size: 36px;
            `,
        },
        view: {
            default: css`
                --plasma-spinner-color: ${textPrimary};
            `,
            /**
             * @deprecated
             * использовать `default`
             */
            primary: css`
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
