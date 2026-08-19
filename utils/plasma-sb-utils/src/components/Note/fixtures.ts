export const contentBeforeSizes = ['fixed', 'scalable'];
export const orientations = ['vertical', 'horizontal'];

export type NoteIconSize = 'xs' | 's' | 'm';

export const getIconSize = (size?: string, isScalable?: boolean): NoteIconSize => {
    if (isScalable) {
        return 'm';
    }

    if (size === 'l' || size === 'm') {
        return 's';
    }

    return 'xs';
};
