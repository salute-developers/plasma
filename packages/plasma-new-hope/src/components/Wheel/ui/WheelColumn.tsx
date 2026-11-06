import React, { useRef } from 'react';
import cls from 'classnames';

import { safeUseId } from '../../../utils';
import { IconChevronDown } from '../../_Icon';
import type { WheelColumn as WheelColumnProps, WheelItemValue } from '../Wheel.types';
import { classes, tokens } from '../Wheel.tokens';
import { Column, ColumnContent, Control, Items } from '../Wheel.styles';
import { normalizeIndex } from '../utils';
import { useWheelAnimation } from '../hooks/useWheelAnimation';
import { useWheelInteraction } from '../hooks/useWheelInteraction';

import { WheelItem } from './WheelItem';
import { WheelColumnWidth } from './WheelColumnWidth';

type Props = WheelColumnProps & {
    value: WheelItemValue;
    hasControls: boolean;
    visibleItemsCount: 3 | 5;
    animated: boolean;
    reserveDescription: boolean;
    onChange: (value: WheelItemValue) => void;
};

const offsets = [-3, -2, -1, 0, 1, 2, 3] as const;

export const WheelColumn = ({
    label,
    items,
    width,
    value,
    disabled,
    loop = false,
    hasControls,
    visibleItemsCount,
    animated,
    reserveDescription,
    description,
    textAfter,
    renderItem,
    onChange,
}: Props) => {
    const id = safeUseId();
    const viewportRef = useRef<HTMLDivElement>(null);
    const {
        selectedIndex,
        previousIndex,
        nextIndex,
        unavailable,
        intentRef,
        select,
        onItemClick,
        viewportHandlers,
    } = useWheelInteraction({ viewportRef, items, value, loop, disabled, visibleItemsCount, onChange });

    const { virtualIndex, registerItem } = useWheelAnimation({
        viewportRef,
        intentRef,
        items,
        value,
        index: selectedIndex,
        loop,
        animated: animated && !unavailable,
        visibleItemsCount,
    });

    const visibleRadius = (visibleItemsCount - 1) / 2;
    const renderedOffsets = offsets.filter((offset) => Math.abs(offset) <= visibleRadius + 1);

    return (
        <Column
            className={cls(classes.column, disabled && classes.disabled)}
            style={{ width }}
            $fixedWidth={width != null && width !== 'auto'}
        >
            {hasControls && (
                <Control
                    type="button"
                    tabIndex={-1}
                    className={classes.previousControl}
                    aria-label={`${label}: предыдущее значение`}
                    disabled={unavailable || previousIndex === selectedIndex}
                    onClick={() => select(previousIndex, -1)}
                >
                    <IconChevronDown color="inherit" sizeCustomProperty={tokens.controlSize} />
                </Control>
            )}
            <ColumnContent>
                <Items
                    ref={viewportRef}
                    role="listbox"
                    tabIndex={unavailable ? -1 : 0}
                    aria-label={label}
                    aria-disabled={unavailable || undefined}
                    aria-activedescendant={selectedIndex < 0 ? undefined : `${id}-0`}
                    aria-describedby={description ? `${id}-description` : undefined}
                    {...viewportHandlers}
                >
                    {renderedOffsets.map((offset) => {
                        const index = selectedIndex + offset;
                        const hasItem = selectedIndex >= 0 && (loop || (index >= 0 && index < items.length));
                        const itemIndex = hasItem ? normalizeIndex(index, items.length) : -1;
                        const rowKey = virtualIndex + offset;

                        return (
                            <WheelItem
                                key={rowKey}
                                rowKey={rowKey}
                                id={id}
                                item={items[itemIndex]}
                                itemIndex={itemIndex}
                                itemCount={items.length}
                                offset={offset}
                                buffer={Math.abs(offset) > visibleRadius}
                                unavailable={unavailable}
                                reserveDescription={reserveDescription}
                                description={description}
                                textAfter={textAfter}
                                renderItem={renderItem}
                                registerItem={registerItem}
                                onSelect={onItemClick}
                            />
                        );
                    })}
                </Items>
                <WheelColumnWidth
                    items={items}
                    renderItem={renderItem}
                    textAfter={textAfter}
                    description={description}
                />
            </ColumnContent>
            {hasControls && (
                <Control
                    type="button"
                    tabIndex={-1}
                    aria-label={`${label}: следующее значение`}
                    disabled={unavailable || nextIndex === selectedIndex}
                    onClick={() => select(nextIndex, 1)}
                >
                    <IconChevronDown color="inherit" sizeCustomProperty={tokens.controlSize} />
                </Control>
            )}
        </Column>
    );
};
