import { css, dividerTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    inverseSurfaceTransparentTertiary,
    onDarkSurfaceTransparentTertiary,
    onLightSurfaceTransparentTertiary,
    surfaceTransparentTertiary,
} from '@salutejs/plasma-themes/tokens/plasma_homeds';

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
            inverse: css`
                ${dividerTokens.background}: ${inverseSurfaceTransparentTertiary};
            `,
        },
        size: {
            m: css`
                ${dividerTokens.borderRadius}: 0.0625rem;
                ${dividerTokens.lineThickness}: 0.03125rem;
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
