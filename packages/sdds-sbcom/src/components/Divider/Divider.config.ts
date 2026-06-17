import { css, dividerTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    inverseTextTertiary,
    outlineTransparentPrimary,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        orientation: 'horizontal',
    },
    variations: {
        view: {
            default: css`
                ${dividerTokens.background}: ${outlineTransparentPrimary};
            `,
            dark: css`
                ${dividerTokens.background}: ${outlineTransparentPrimary};
            `,
            light: css`
                ${dividerTokens.background}: ${outlineTransparentPrimary};
            `,
            // TODO поменять на корректный токен --inverse-surface-transparent-tertiary когда он появится
            inverse: css`
                ${dividerTokens.background}: ${inverseTextTertiary};
            `,
        },
        size: {
            m: css`
                ${dividerTokens.borderRadius}: 0.0625rem;
            `,
        },
        orientation: {
            horizontal: css`
                ${dividerTokens.baseSideSize}: 0.021rem;
            `,
            vertical: css`
                ${dividerTokens.baseSideSize}: 0.021rem;
            `,
        },
    },
};
