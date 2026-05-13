import React, { useRef, CSSProperties } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { getHeightAsNumber } from 'src/utils';

import type { ItemOptionTransformed } from '../Inner/ui/Item/Item.types';
import { Item } from '../Inner/ui';

interface Props {
    items: ItemOptionTransformed[];
    listMaxHeight?: CSSProperties['height'];
    onScroll?: (e: React.UIEvent<HTMLElement>) => void;
}

export const VirtualList: React.FC<Props> = ({ items, listMaxHeight, onScroll }) => {
    const parentRef = useRef<HTMLDivElement>(null);

    const virtualizer = useVirtualizer({
        count: items.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 48,
    });

    const virtualItems = virtualizer.getVirtualItems();

    return (
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
                            <Item
                                item={items[virtualRow.index]}
                                path={['root']}
                                currentLevel={0}
                                index={virtualRow.index}
                                ariaLevel={1}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
