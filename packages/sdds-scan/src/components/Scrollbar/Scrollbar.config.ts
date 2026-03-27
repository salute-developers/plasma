import { surfaceTransparentPrimary, surfaceTransparentTertiary } from '@salutejs/sdds-themes/tokens/sdds_scan';

export const config = {
    view: {
        default: {
            trackColor: surfaceTransparentPrimary,
            thumbColor: surfaceTransparentTertiary,
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
