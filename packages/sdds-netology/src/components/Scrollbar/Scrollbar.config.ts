import {
    surfaceTransparentPrimary,
    surfaceTransparentTertiary,
    surfaceTransparentTertiaryActive,
    surfaceTransparentTertiaryHover,
} from '@salutejs/plasma-themes/tokens/plasma_b2c';

export const config = {
    view: {
        default: {
            trackColor: `${surfaceTransparentPrimary}`,
            thumbColor: `${surfaceTransparentTertiary}`,
            thumbHoverColor: `${surfaceTransparentTertiaryHover}`,
            thumbActiveColor: `${surfaceTransparentTertiaryActive}`,
        },
    },
    size: {
        s: {
            scrollWidth: '0.125rem',
        },
        m: {
            scrollWidth: '0.25rem',
        },
    },
};
