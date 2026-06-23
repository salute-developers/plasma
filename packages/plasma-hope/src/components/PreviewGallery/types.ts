import type { DraggableAttributes, DraggableSyntheticListeners } from '@dnd-kit/core';

import type { Placement } from '../Tooltip';

import { PreviewGalleryProps } from './PreviewGallery';
import type { PreviewGallerySortableItemProps } from './sortableCompat';

export type StatusType = 'success' | 'error';

export type InteractionType = 'selectable' | 'draggable';

export type AddionalItemProps = Omit<PreviewGalleryProps, 'items' | 'onItemsSortEnd'> & {
    useDragHandle?: boolean;
    dragHandleListeners?: DraggableSyntheticListeners;
    dragHandleAttributes?: DraggableAttributes;
    disabled?: PreviewGallerySortableItemProps['disabled'];
};

export interface TooltipItem {
    /**
     * Текст tooltip.
     */
    text: string;
    /**
     * Направление раскрытия tooltip.
     */
    placement?: Placement;
    /**
     * Видимость стрелки (хвоста).
     */
    arrow?: boolean;
    /**
     * Анимированное появление/сокрытие.
     */
    animated?: boolean;
}
