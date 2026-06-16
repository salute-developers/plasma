import type { Modifier } from '@dnd-kit/core';

export type PreviewGallerySortableAxis = 'x' | 'y' | 'xy';

/**
 * Subset of `react-sortable-hoc` SortableElement props kept for backward compatibility.
 */
export interface PreviewGallerySortableItemProps {
    /**
     * Группа элементов для сортировки.
     * @deprecated Сохранено для совместимости типов. В `@dnd-kit` не используется.
     */
    collection?: number | string;
    /**
     * Отключает перетаскивание конкретного элемента.
     */
    disabled?: boolean;
}

/**
 * Subset of `react-sortable-hoc` SortableContainer props mapped to `@dnd-kit`.
 */
export interface PreviewGallerySortableContainerProps {
    axis?: PreviewGallerySortableAxis;
    distance?: number;
    pressDelay?: number;
    lockAxis?: PreviewGallerySortableAxis | boolean;
    useDragHandle?: boolean;
    /**
     * @deprecated Игнорируется после миграции на `@dnd-kit`.
     */
    helperClass?: string;
    /**
     * @deprecated Игнорируется после миграции на `@dnd-kit`.
     */
    helperContainer?: HTMLElement | (() => HTMLElement);
    /**
     * @deprecated Игнорируется после миграции на `@dnd-kit`.
     */
    hideSortableGhost?: boolean;
    /**
     * @deprecated Игнорируется после миграции на `@dnd-kit`.
     */
    transitionDuration?: number;
    /**
     * @deprecated Игнорируется после миграции на `@dnd-kit`.
     */
    useWindowAsScrollContainer?: boolean;
}

export const previewGallerySortableContainerPropKeys = [
    'axis',
    'distance',
    'pressDelay',
    'lockAxis',
    'useDragHandle',
    'helperClass',
    'helperContainer',
    'hideSortableGhost',
    'transitionDuration',
    'useWindowAsScrollContainer',
] as const;

export const resolveSortableAxis = (
    axis: PreviewGallerySortableAxis = 'xy',
    lockAxis?: PreviewGallerySortableAxis | boolean,
): PreviewGallerySortableAxis => {
    if (typeof lockAxis === 'string') {
        return lockAxis;
    }

    return axis;
};

export const createAxisModifier = (axis: PreviewGallerySortableAxis): Modifier => {
    return ({ transform }) => {
        if (axis === 'x') {
            return { ...transform, y: 0 };
        }

        if (axis === 'y') {
            return { ...transform, x: 0 };
        }

        return transform;
    };
};

export const getSortableSensorOptions = (distance = 1, pressDelay?: number) => {
    const mouseActivation = pressDelay !== undefined ? { delay: pressDelay, tolerance: 5 } : { distance };

    const touchActivation =
        pressDelay !== undefined ? { delay: pressDelay, tolerance: 5 } : { delay: 250, tolerance: 5 };

    return {
        mouse: {
            activationConstraint: mouseActivation,
        },
        touch: {
            activationConstraint: touchActivation,
        },
    };
};

export const splitSortableItemProps = <T extends PreviewGallerySortableItemProps>(item: T) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { collection, disabled, ...itemRest } = item;

    return {
        disabled,
        itemRest,
    };
};
