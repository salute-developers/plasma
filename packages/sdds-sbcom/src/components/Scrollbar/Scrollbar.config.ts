import {
    surfaceTransparentPrimary,
    surfaceTransparentTertiary,
    surfaceTransparentTertiaryHover,
    surfaceTransparentTertiaryActive,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

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
