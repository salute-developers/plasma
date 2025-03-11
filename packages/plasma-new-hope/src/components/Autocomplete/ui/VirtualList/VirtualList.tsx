import React from 'react';
import List from 'rc-virtual-list';

import type { SuggestionItemType } from '../../Autocomplete.types';
import { SuggestionItem } from '../SuggestionItem/SuggestionItem';
import { getHeightAsNumber } from '../../../../utils';

interface Props {
    items: SuggestionItemType[];
    onClick: (e: SuggestionItemType) => void;
    listId: string;
    listMaxHeight?: string;
    onScroll?: (e: React.UIEvent<HTMLUListElement>) => void;
}

export const VirtualList: React.FC<Props> = ({ items, onClick, listId, listMaxHeight, onScroll }) => (
    <List data={items} height={getHeightAsNumber(listMaxHeight)} itemHeight={100} itemKey="id" onScroll={onScroll}>
        {(item, index, props) => (
            <div {...props}>
                <SuggestionItem item={item} onClick={onClick} id={`${listId}/${index}`} focused={false} />
            </div>
        )}
    </List>
);
