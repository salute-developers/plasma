import {
    surfaceTransparentPrimary,
    surfaceTransparentTertiary,
    surfaceTransparentTertiaryActive,
    surfaceTransparentTertiaryHover,
} from '@salutejs/sdds-themes/tokens/sdds_scan';

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
