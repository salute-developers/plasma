import React, { useCallback, useMemo, useState } from 'react';
import type { FC, HTMLAttributes } from 'react';
import type { DragEndEvent } from '@dnd-kit/core';

import { noop } from './utils';
import { PreviewGalleryListItems } from './PreviewGalleryItems';
import { PreviewGalleryItemProps } from './PreviewGalleryItemBase';
import {
    PreviewGallerySortableContainerProps,
    PreviewGallerySortableItemProps,
    createAxisModifier,
    getSortableSensorOptions,
    previewGallerySortableContainerPropKeys,
    resolveSortableAxis,
} from './sortableCompat';
import { InteractionType } from './types';

export interface SortableIndexProps {
    oldIndex: number;
    newIndex: number;
}

export interface PreviewGalleryProps {
    /**
     * Массив элементов.
     */
    items?: Array<PreviewGalleryItemProps & PreviewGallerySortableItemProps>;
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

const omitSortableContainerProps = <T extends Record<string, unknown>>(props: T) => {
    const rest = { ...props };

    previewGallerySortableContainerPropKeys.forEach((key) => {
        delete rest[key];
    });

    return rest;
};

/**
 * Компонент для создания галереи превью изображений.
 */
export const PreviewGallery: FC<
    PreviewGalleryProps & HTMLAttributes<HTMLDivElement> & PreviewGallerySortableContainerProps
> = ({
    interactionType = 'selectable',
    items = [],
    maxHeight = 0,
    onItemClick = noop,
    onItemAction = noop,
    onItemsSortEnd = noop,
    axis = 'xy',
    distance = 1,
    pressDelay,
    lockAxis,
    useDragHandle = false,
    ...rest
}) => {
    const [isGrabbing, setGrabbing] = useState<boolean>(false);

    const resolvedAxis = useMemo(() => resolveSortableAxis(axis, lockAxis), [axis, lockAxis]);
    const modifiers = useMemo(() => [createAxisModifier(resolvedAxis)], [resolvedAxis]);
    const sensorOptions = useMemo(() => getSortableSensorOptions(distance, pressDelay), [distance, pressDelay]);
    const htmlProps = useMemo(() => omitSortableContainerProps(rest), [rest]);

    const onSortStart = useCallback(() => setGrabbing(true), []);

    const onSortCancel = useCallback(() => setGrabbing(false), []);

    const onSortEnd = useCallback(
        (event: DragEndEvent) => {
            setGrabbing(false);

            const { active, over } = event;

            if (!over || active.id === over.id) {
                return;
            }

            const oldIndex = items.findIndex((item) => item.id === active.id);
            const newIndex = items.findIndex((item) => item.id === over.id);

            if (oldIndex === -1 || newIndex === -1) {
                return;
            }

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
            onSortCancel={onSortCancel}
            onSortEnd={onSortEnd}
            interactionType={interactionType}
            isGrabbing={isGrabbing}
            maxHeight={maxHeight}
            modifiers={modifiers}
            sensorOptions={sensorOptions}
            useDragHandle={useDragHandle}
            {...htmlProps}
        />
    );
};
