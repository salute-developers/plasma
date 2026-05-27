import React, { useRef, CSSProperties } from 'react';
import type { ReactNode, UIEvent } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { getHeightAsNumber } from 'src/utils';

interface Props<T> {
    items: T[];
    renderItem: (item: T, index: number) => ReactNode;
    listMaxHeight?: CSSProperties['height'];
    onScroll?: (e: UIEvent<HTMLElement>) => void;
    estimateSize?: number;
}

export function VirtualList<T>({ items, listMaxHeight, onScroll, estimateSize = 48, renderItem }: Props<T>) {
    const parentRef = useRef<HTMLDivElement>(null);

    const virtualizer = useVirtualizer({
        count: items.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => estimateSize,
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
                            {renderItem(items[virtualRow.index], virtualRow.index)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
