import React from 'react';
import List from 'rc-virtual-list';
import { getHeightAsNumber } from 'src/utils';

import { SuggestionItem } from '../SuggestionItem/SuggestionItem';
import type { SuggestionItemType } from '../../Autocomplete.types';

interface Props {
    items: SuggestionItemType[];
    onClick: (e: SuggestionItemType) => void;
    listId: string;
    listMaxHeight?: string;
    onScroll?: (e: React.UIEvent<HTMLUListElement>) => void;
    renderItem?: (item: SuggestionItemType) => React.ReactNode;
}

export const VirtualList: React.FC<Props> = ({ items, onClick, listId, listMaxHeight, onScroll, renderItem }) => (
    <List data={items} height={getHeightAsNumber(listMaxHeight)} itemHeight={100} itemKey="id" onScroll={onScroll}>
        {(item, index, props) => (
            <div {...props}>
                <SuggestionItem
                    item={item}
                    onClick={onClick}
                    id={`${listId}/${index}`}
                    focused={false}
                    renderItem={renderItem}
                />
            </div>
        )}
    </List>
);
