import React, { useCallback, useState } from 'react';
import type { FC, HTMLAttributes } from 'react';
import type { DragEndEvent } from '@dnd-kit/core';

import { noop } from './utils';
import { PreviewGalleryListItems } from './PreviewGalleryItems';
import { PreviewGalleryItemProps } from './PreviewGalleryItemBase';
import { InteractionType } from './types';

export interface SortableIndexProps {
    oldIndex: number;
    newIndex: number;
}

export interface PreviewGalleryProps {
    /**
     * Массив элементов.
     */
    items?: Array<PreviewGalleryItemProps>;
    /**
     * Тип взаимодействия с галереей - выбор или перетаскивание элементов.
     */
    interactionType?: InteractionType;
    /**
     * Опциональная высота для внутреннего scroll.
     */
    maxHeight?: number;
    /**
     * Компонент иконки в правом верхнем углу.
     */
    actionIcon: JSX.Element;
    /**
     * CSS размер превью элемента.
     */
    itemSize?: string;
    /**
     * Callback на завершение перетаскивания элемента.
     */
    onItemsSortEnd?: ({ oldIndex, newIndex }: SortableIndexProps) => void;
    /**
     * Callback на клик элемента в правом верхнем углу.
     */
    onItemAction?: (id: string | number) => void;
    /**
     * Callback на выделение элемента.
     */
    onItemClick?: (id: string | number) => void;
}

/**
 * Компонент для создания галереи превью изображений.
 */
export const PreviewGallery: FC<PreviewGalleryProps & HTMLAttributes<HTMLDivElement>> = ({
    interactionType = 'selectable',
    items = [],
    maxHeight = 0,
    onItemClick = noop,
    onItemAction = noop,
    onItemsSortEnd = noop,
    ...rest
}) => {
    const [isGrabbing, setGrabbing] = useState<boolean>(false);

    const onSortStart = useCallback(() => setGrabbing(true), []);

    const onSortEnd = useCallback(
        (event: DragEndEvent) => {
            setGrabbing(false);

            const { active, over } = event;
            if (!over || active.id === over.id) {
                return;
            }

            const oldIndex = items.findIndex((item) => item.id === active.id);
            const newIndex = items.findIndex((item) => item.id === over.id);

            onItemsSortEnd({ oldIndex, newIndex });
        },
        [items, onItemsSortEnd],
    );

    return (
        <PreviewGalleryListItems
            items={items}
            onItemAction={onItemAction}
            onItemClick={onItemClick}
            onSortStart={onSortStart}
            onSortEnd={onSortEnd}
            interactionType={interactionType}
            isGrabbing={isGrabbing}
            maxHeight={maxHeight}
            {...rest}
        />
    );
};
