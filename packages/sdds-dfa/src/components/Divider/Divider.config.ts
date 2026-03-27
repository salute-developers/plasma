import {
    inverseTextTertiary,
    onDarkSurfaceTransparentTertiary,
    onLightSurfaceTransparentTertiary,
    surfaceTransparentTertiary,
} from '@salutejs/sdds-themes/tokens/sdds_dfa';
import { css, dividerTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        orientation: 'horizontal',
    },
    variations: {
        view: {
            default: css`
                ${dividerTokens.background}: ${surfaceTransparentTertiary};
            `,
            dark: css`
                ${dividerTokens.background}: ${onDarkSurfaceTransparentTertiary};
            `,
            light: css`
                ${dividerTokens.background}: ${onLightSurfaceTransparentTertiary};
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
                ${dividerTokens.baseSideSize}: 0.0625rem;
            `,
            vertical: css`
                ${dividerTokens.baseSideSize}: 0.0625rem;
            `,
        },
    },
};
