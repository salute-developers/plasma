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
import { SortableContext, rectSortingStrategy, useSortable } from '@dnd-kit/sortable';
import styled, { css } from 'styled-components';

import { AddionalItemProps } from './types';
import { PreviewGalleryItemError } from './PreviewGalleryItemError';
import { PreviewGalleryItemBase, PreviewGalleryItemProps } from './PreviewGalleryItemBase';
import { PreviewGalleryItemWithTooltip } from './PreviewGalleryItemWithTooltip';

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
    items?: Array<PreviewGalleryItemProps>;
    /**
     * Перетаскивается ли элемент.
     */
    isGrabbing: boolean;
    /**
     * Опциональная высота для внутреннего scroll.
     */
    maxHeight?: number;
    /**
     * Callback when sorting ends
     */
    onSortEnd?: (event: DragEndEvent) => void;
    /**
     * Callback when sorting starts
     */
    onSortStart?: () => void;
}

const SortableItem = memo(({ id, status, ...itemRest }: PreviewGalleryItemProps & AddionalItemProps) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        transition,
        zIndex: isDragging ? 1 : undefined,
        position: 'relative' as const,
    };

    const Component = status === 'error' ? PreviewGalleryItemError : PreviewGalleryItemBase;

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Component {...itemRest} id={id} status={status} />
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
    onSortEnd,
    onSortStart,
    ...rest
}: PreviewGalleryListItemsProps & AddionalItemProps) => {
    const isDragDisabled = interactionType === 'selectable';

    // Setup sensors for drag detection
    const sensors = useSensors(
        useSensor(MouseSensor, {
            activationConstraint: {
                distance: 1,
            },
        }),
        useSensor(TouchSensor, {
            activationConstraint: {
                delay: 250,
                tolerance: 5,
            },
        }),
    );

    // deleteIcon не указан в зависимости, т.к. предполагается,
    // что данный пропс не будет меняться динамически
    const iconMemo = useMemo(() => actionIcon, []);

    if (isDragDisabled) {
        return (
            <StyledRoot isGrabbing={isGrabbing} maxHeight={maxHeight} {...rest}>
                {items.map((item) => (
                    <PreviewGalleryItemWithTooltip key={item.id} tooltip={item.tooltip}>
                        <SortableItem
                            actionIcon={iconMemo}
                            interactionType={interactionType}
                            itemSize={itemSize}
                            onItemAction={onItemAction}
                            onItemClick={onItemClick}
                            {...item}
                        />
                    </PreviewGalleryItemWithTooltip>
                ))}
            </StyledRoot>
        );
    }

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={onSortStart}
            onDragEnd={onSortEnd}
        >
            <StyledRoot isGrabbing={isGrabbing} maxHeight={maxHeight} {...rest}>
                <SortableContext items={items.map((item) => item.id)} strategy={rectSortingStrategy}>
                    {items.map((item) => (
                        <PreviewGalleryItemWithTooltip key={item.id} tooltip={item.tooltip}>
                            <SortableItem
                                actionIcon={iconMemo}
                                interactionType={interactionType}
                                itemSize={itemSize}
                                onItemAction={onItemAction}
                                onItemClick={onItemClick}
                                {...item}
                            />
                        </PreviewGalleryItemWithTooltip>
                    ))}
                </SortableContext>
            </StyledRoot>
        </DndContext>
    );
};
