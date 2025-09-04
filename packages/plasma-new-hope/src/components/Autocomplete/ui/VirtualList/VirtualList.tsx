import React, { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { getHeightAsNumber } from 'src/utils';

import { SuggestionItem } from '../SuggestionItem/SuggestionItem';
import type { SuggestionItemType } from '../../Autocomplete.types';

interface Props {
    items: SuggestionItemType[];
    onClick: (e: SuggestionItemType) => void;
    listId: string;
    listMaxHeight?: string;
    onScroll?: (e: React.UIEvent<HTMLElement>) => void;
    renderItem?: (item: SuggestionItemType) => React.ReactNode;
}

export const VirtualList: React.FC<Props> = ({ items, onClick, listId, listMaxHeight, onScroll, renderItem }) => {
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
                            <SuggestionItem
                                item={items[virtualRow.index]}
                                onClick={onClick}
                                id={`${listId}/${virtualRow.index}`}
                                focused={false}
                                renderItem={renderItem}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
