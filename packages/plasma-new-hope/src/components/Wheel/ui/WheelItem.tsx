import React, { useCallback } from 'react';
import type { ReactNode } from 'react';

import type { WheelColumn, WheelItem as WheelItemData, WheelItemState } from '../Wheel.types';
import { classes } from '../Wheel.tokens';
import { Description, DescriptionWrapper, Item } from '../Wheel.styles';
import { getItemText } from '../utils';

import { WheelItemContent } from './WheelItemContent';

type Props = Pick<WheelColumn, 'renderItem' | 'textAfter'> & {
    id: string;
    rowKey: number;
    item?: WheelItemData;
    itemIndex: number;
    itemCount: number;
    offset: WheelItemState['offset'];
    buffer: boolean;
    unavailable: boolean;
    reserveDescription: boolean;
    description?: ReactNode;
    registerItem: (key: string, element: HTMLDivElement | null) => void;
    onSelect: (index: number, direction: number) => void;
};

export const WheelItem = ({
    id,
    rowKey,
    item,
    itemIndex,
    itemCount,
    offset,
    buffer,
    unavailable,
    reserveDescription,
    description,
    textAfter,
    renderItem,
    registerItem,
    onSelect,
}: Props) => {
    const contentRef = useCallback((element: HTMLDivElement | null) => registerItem(`${rowKey}-content`, element), [
        rowKey,
        registerItem,
    ]);
    const descriptionRef = useCallback(
        (element: HTMLDivElement | null) => registerItem(`${rowKey}-description`, element),
        [rowKey, registerItem],
    );

    const selected = offset === 0;
    const visible = Boolean(item && !buffer);
    const bufferPosition = offset < 0 ? 'before' : 'after';

    return (
        <Item
            id={`${id}-${offset}`}
            role={visible ? 'option' : undefined}
            aria-hidden={!visible || undefined}
            aria-selected={visible ? selected : undefined}
            aria-disabled={item ? unavailable || item.disabled || undefined : undefined}
            aria-label={item ? getItemText(item) : undefined}
            aria-posinset={item ? itemIndex + 1 : undefined}
            aria-setsize={item ? itemCount : undefined}
            data-distance={Math.abs(offset)}
            data-offset={offset}
            data-buffer={buffer ? bufferPosition : undefined}
            onClick={() => visible && onSelect(itemIndex, Math.sign(offset))}
        >
            <WheelItemContent
                ref={contentRef}
                item={item}
                state={{ selected, offset }}
                renderItem={renderItem}
                textAfter={textAfter}
            />
            {reserveDescription && (
                <DescriptionWrapper>
                    <Description
                        ref={descriptionRef}
                        className={classes.description}
                        id={selected ? `${id}-description` : undefined}
                        aria-hidden={!selected || description == null || undefined}
                    >
                        {description ?? <span aria-hidden>&nbsp;</span>}
                    </Description>
                </DescriptionWrapper>
            )}
        </Item>
    );
};
