import React, { memo, useMemo } from 'react';
import { SortableContainer, SortableElement, SortableElementProps } from 'react-sortable-hoc';
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
    items?: Array<PreviewGalleryItemProps & Omit<SortableElementProps, 'index'>>;
    /**
     * Перетаскивается ли элемент.
     */
    isGrabbing: boolean;
    /**
     * Опциональная высота для внутреннего скролла.
     */
    maxHeight?: number;
}

const PreviewGalleryItem = memo(
    SortableElement<PreviewGalleryItemProps & AddionalItemProps>(
        ({ status, ...itemRest }: PreviewGalleryItemProps & AddionalItemProps) => {
            return status === 'error' ? (
                <PreviewGalleryItemError {...itemRest} />
            ) : (
                <PreviewGalleryItemBase {...itemRest} />
            );
        },
    ),
);

/**
 * Компонент со списком превью изображений.
 */
export const PreviewGalleryListItems = SortableContainer<PreviewGalleryListItemsProps & AddionalItemProps>(
    ({
        items = [],
        interactionType,
        actionIcon,
        itemSize,
        isGrabbing,
        maxHeight,
        onItemAction,
        onItemClick,
        ...rest
    }: PreviewGalleryListItemsProps & AddionalItemProps) => {
        const isDragDisabled = interactionType === 'selectable';

        // deleteIcon не указан в зависимости, т.к. предполагается,
        // что данный пропс не будет меняться динамически
        const iconMemo = useMemo(() => actionIcon, []);

        return (
            <StyledRoot isGrabbing={isGrabbing} maxHeight={maxHeight} {...rest}>
                {items.map((item, index) => (
                    <PreviewGalleryItemWithTooltip tooltip={item.tooltip}>
                        <PreviewGalleryItem
                            disabled={isDragDisabled}
                            key={item.id}
                            actionIcon={iconMemo}
                            index={index}
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
    },
);
