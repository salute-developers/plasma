export const itemViews = ['default', 'negative', 'warning', 'positive'];
export const completedItemViews = ['default', 'negative', 'warning', 'positive'];
export const orientations = ['horizontal', 'vertical'];
export const contentAligns = ['left', 'center'];
export const indicatorSizePresets = {
    'simple-bullet': ['8', '16', '24', '36'],
    'simple-marker': ['24', '36', '48', '56'],
    bullet: ['8', '16'],
    marker: ['24', '36'],
} as const;

export type IndicatorSizePreset = keyof typeof indicatorSizePresets;

export const getIndicatorSizePreset = (simple?: boolean, indicatorType?: string): IndicatorSizePreset => {
    if (simple && indicatorType === 'bullet') {
        return 'simple-bullet';
    }

    if (simple) {
        return 'simple-marker';
    }

    if (indicatorType === 'bullet') {
        return 'bullet';
    }

    return 'marker';
};
export const indicatorTypes = ['numbered', 'bullet', 'icon'];
export const hasContentOptions = ['all', 'active', 'none'];
