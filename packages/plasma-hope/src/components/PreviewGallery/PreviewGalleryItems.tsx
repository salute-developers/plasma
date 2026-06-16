import React, { memo, useMemo } from 'react';
import {
    DndContext,
    closestCenter,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors,
    DragEndEvent,
} from '@dnd-kit/core';
import type { Modifiers } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy, useSortable } from '@dnd-kit/sortable';
import styled, { css } from 'styled-components';

import { AddionalItemProps } from './types';
import { PreviewGalleryItemError } from './PreviewGalleryItemError';
import { PreviewGalleryItemBase, PreviewGalleryItemProps } from './PreviewGalleryItemBase';
import { PreviewGalleryItemWithTooltip } from './PreviewGalleryItemWithTooltip';
import { PreviewGallerySortableItemProps, splitSortableItemProps, getSortableSensorOptions } from './sortableCompat';

export const StyledRoot = styled.div<{ isGrabbing: boolean; maxHeight?: number }>`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;

    cursor: pointer;

    ${({ isGrabbing }) =>
        isGrabbing &&
        css`
            cursor: grabbing;
        `}

    ${({ maxHeight }) =>
        maxHeight &&
        css`
            max-height: ${maxHeight}px;
            overflow: auto;
        `}
`;

export interface PreviewGalleryListItemsProps {
    items?: Array<PreviewGalleryItemProps & PreviewGallerySortableItemProps>;
    /**
     * Перетаскивается ли элемент.
     */
    isGrabbing: boolean;
    /**
     * Опциональная высота для внутреннего scroll.
     */
    maxHeight?: number;
    /**
     * Callback when sorting ends.
     */
    onSortEnd?: (event: DragEndEvent) => void;
    /**
     * Callback when sorting starts.
     */
    onSortStart?: () => void;
    modifiers?: Modifiers;
    sensorOptions?: ReturnType<typeof getSortableSensorOptions>;
    useDragHandle?: boolean;
}

const PreviewGalleryItem = memo(({ status, ...itemRest }: PreviewGalleryItemProps & AddionalItemProps) => {
    return status === 'error' ? (
        <PreviewGalleryItemError {...itemRest} status={status} />
    ) : (
        <PreviewGalleryItemBase {...itemRest} status={status} />
    );
});

const SortableGalleryItem = memo((props: PreviewGalleryItemProps & AddionalItemProps) => {
    const { id, disabled, useDragHandle, ...itemRest } = props;
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id,
        disabled,
    });

    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        transition,
        zIndex: isDragging ? 1 : undefined,
        position: 'relative' as const,
    };

    const dragHandleProps = useDragHandle
        ? {
              dragHandleListeners: listeners,
              dragHandleAttributes: attributes,
          }
        : {};

    return (
        <div ref={setNodeRef} style={style} {...(useDragHandle ? {} : { ...attributes, ...listeners })}>
            <PreviewGalleryItem
                {...itemRest}
                id={id}
                disabled={disabled}
                useDragHandle={useDragHandle}
                {...dragHandleProps}
            />
        </div>
    );
});

/**
 * Компонент со списком превью изображений.
 */
export const PreviewGalleryListItems = ({
    items = [],
    interactionType,
    actionIcon,
    itemSize,
    isGrabbing,
    maxHeight,
    onItemAction,
    onItemClick,
    onSortStart,
    onSortEnd,
    modifiers,
    sensorOptions,
    useDragHandle = false,
    ...rest
}: PreviewGalleryListItemsProps & AddionalItemProps) => {
    const isDragDisabled = interactionType === 'selectable';

    const sensors = useSensors(
        useSensor(MouseSensor, sensorOptions?.mouse),
        useSensor(TouchSensor, sensorOptions?.touch),
    );

    // deleteIcon не указан в зависимости, т.к. предполагается,
    // что данный пропс не будет меняться динамически
    const iconMemo = useMemo(() => actionIcon, []);

    const itemProps = {
        actionIcon: iconMemo,
        interactionType,
        itemSize,
        onItemAction,
        onItemClick,
        useDragHandle,
    };

    if (isDragDisabled) {
        return (
            <StyledRoot isGrabbing={isGrabbing} maxHeight={maxHeight} {...rest}>
                {items.map((item) => {
                    const { itemRest } = splitSortableItemProps(item);

                    return (
                        <PreviewGalleryItemWithTooltip key={item.id} tooltip={item.tooltip}>
                            <PreviewGalleryItem {...itemProps} {...itemRest} />
                        </PreviewGalleryItemWithTooltip>
                    );
                })}
            </StyledRoot>
        );
    }

    return (
        <DndContext
            sensors={sensors}
            modifiers={modifiers}
            collisionDetection={closestCenter}
            onDragStart={onSortStart}
            onDragEnd={onSortEnd}
        >
            <StyledRoot isGrabbing={isGrabbing} maxHeight={maxHeight} {...rest}>
                <SortableContext items={items.map((item) => item.id)} strategy={rectSortingStrategy}>
                    {items.map((item) => {
                        const { disabled, itemRest } = splitSortableItemProps(item);

                        return (
                            <PreviewGalleryItemWithTooltip key={item.id} tooltip={item.tooltip}>
                                <SortableGalleryItem {...itemProps} {...itemRest} disabled={disabled} />
                            </PreviewGalleryItemWithTooltip>
                        );
                    })}
                </SortableContext>
            </StyledRoot>
        </DndContext>
    );
};
