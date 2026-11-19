import React, { useRef } from 'react';
import cls from 'classnames';

import { safeUseId } from '../../../utils';
import { IconChevronDown } from '../../_Icon';
import type { WheelColumn as WheelColumnProps, WheelItemValue, WheelProps } from '../Wheel.types';
import { classes, tokens } from '../Wheel.tokens';
import {
    Column,
    ColumnContent,
    Control,
    Description,
    DescriptionWrapper,
    Items,
    StaticTextAfterWrapper,
    TextAfter,
} from '../Wheel.styles';
import { normalizeIndex } from '../utils';
import { useWheelAnimation } from '../hooks/useWheelAnimation';
import { useWheelInteraction } from '../hooks/useWheelInteraction';
import { useStaticTextAfter } from '../hooks/useStaticTextAfter';

import { WheelItem } from './WheelItem';
import { WheelColumnWidth } from './WheelColumnWidth';

type Props = WheelColumnProps & {
    value: WheelItemValue;
    hasControls: boolean;
    visibleItemsCount: 3 | 5;
    animated: boolean;
    textAfterMode: NonNullable<WheelProps['textAfterMode']>;
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
    textAfterMode,
    reserveDescription,
    description,
    textAfter,
    renderItem,
    onChange,
}: Props) => {
    const id = safeUseId();
    const viewportRef = useRef<HTMLDivElement>(null);
    const hasStaticTextAfter = textAfterMode === 'static' && textAfter != null;
    const { valueRef, textAfterRef, style: textAfterStyle } = useStaticTextAfter(hasStaticTextAfter);
    const dynamicTextAfter = hasStaticTextAfter ? undefined : textAfter;
    const describedBy =
        [description ? `${id}-description` : undefined, hasStaticTextAfter ? `${id}-text-after` : undefined]
            .filter(Boolean)
            .join(' ') || undefined;
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
            className={cls(classes.column, disabled && classes.disabled, hasStaticTextAfter && classes.staticTextAfter)}
            style={{ width, ...textAfterStyle }}
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
                    aria-describedby={describedBy}
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
                                row={Math.abs(offset) > visibleRadius ? undefined : offset + visibleRadius + 1}
                                id={id}
                                item={items[itemIndex]}
                                itemIndex={itemIndex}
                                itemCount={items.length}
                                offset={offset}
                                buffer={Math.abs(offset) > visibleRadius}
                                unavailable={unavailable}
                                textAfter={dynamicTextAfter}
                                renderItem={renderItem}
                                registerItem={registerItem}
                                onSelect={onItemClick}
                            />
                        );
                    })}
                    {hasStaticTextAfter && (
                        <StaticTextAfterWrapper $row={visibleRadius + 1}>
                            <TextAfter ref={textAfterRef} id={`${id}-text-after`} className={classes.textAfter}>
                                {textAfter}
                            </TextAfter>
                        </StaticTextAfterWrapper>
                    )}
                    {reserveDescription && (
                        <DescriptionWrapper $row={visibleRadius + 1}>
                            <Description
                                className={classes.description}
                                id={`${id}-description`}
                                aria-hidden={description == null || undefined}
                            >
                                {description ?? <span aria-hidden>&nbsp;</span>}
                            </Description>
                        </DescriptionWrapper>
                    )}
                </Items>
                <WheelColumnWidth
                    items={items}
                    renderItem={renderItem}
                    textAfter={dynamicTextAfter}
                    description={description}
                    valueRef={valueRef}
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
