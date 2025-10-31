import React, { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { getHeightAsNumber } from 'src/utils';

import { Props } from './TreeList.types';
import { Item } from './ui/Item/Item';
import { ListWrapper, ScrollContainer } from './TreeList.styles';

export const TreeList: React.FC<Props> = ({ items, listMaxHeight, onScroll, virtual, beforeList, afterList }) => {
    if (virtual) {
        return (
            <VirtualTreeList
                items={items}
                listMaxHeight={listMaxHeight}
                onScroll={onScroll}
                beforeList={beforeList}
                afterList={afterList}
            />
        );
    }

    return (
        <ListWrapper>
            <ScrollContainer listMaxHeight={listMaxHeight} onScroll={onScroll}>
                {beforeList}

                {items?.map((item, index) => {
                    return <Item key={index} item={item} pathToItem={[index]} />;
                })}

                {afterList}
            </ScrollContainer>
        </ListWrapper>
    );
};

const VirtualTreeList: React.FC<Props> = ({ items = [], listMaxHeight, onScroll, beforeList, afterList }) => {
    const parentRef = useRef<HTMLDivElement>(null);

    const virtualizer = useVirtualizer({
        count: items.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 48,
    });

    const virtualItems = virtualizer.getVirtualItems();

    return (
        <ListWrapper>
            {beforeList}

            <div
                ref={parentRef}
                style={{
                    height: 'auto',
                    maxHeight: getHeightAsNumber(listMaxHeight),
                    overflowY: 'auto',
                }}
                onScroll={onScroll}
            >
                <div
                    style={{
                        height: virtualizer.getTotalSize(),
                        width: '100%',
                        position: 'relative',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            transform: `translateY(${virtualItems[0]?.start ?? 0}px)`,
                        }}
                    >
                        {virtualItems.map((virtualRow) => (
                            <div
                                key={virtualRow.key as React.Key}
                                data-index={virtualRow.index}
                                ref={virtualizer.measureElement}
                            >
                                <Item item={items[virtualRow.index]} pathToItem={[virtualRow.index]} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {afterList}
        </ListWrapper>
    );
};
