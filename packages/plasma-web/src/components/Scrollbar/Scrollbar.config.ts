import { surfaceTransparentPrimary, surfaceTransparentTertiary } from '@salutejs/plasma-themes/tokens/plasma_web';

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
