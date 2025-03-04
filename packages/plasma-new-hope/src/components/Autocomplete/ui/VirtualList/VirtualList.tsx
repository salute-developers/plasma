import React from 'react';
import List from 'rc-virtual-list';

import type { SuggestionItemType } from '../../Autocomplete.types';
import { SuggestionItem } from '../SuggestionItem/SuggestionItem';

const getHeight = (listMaxHeight?: string) => {
    if (!listMaxHeight) return 300;

    return parseInt(listMaxHeight, 10);
};

interface Props {
    items: SuggestionItemType[];
    onClick: (e: SuggestionItemType) => void;
    listId: string;
    listMaxHeight?: string;
    onScroll?: (e: React.UIEvent<HTMLUListElement>) => void;
}

export const VirtualList: React.FC<Props> = ({ items, onClick, listId, listMaxHeight, onScroll }) => {
    return (
        <List data={items} height={getHeight(listMaxHeight)} itemHeight={100} itemKey="id" onScroll={onScroll}>
            {(item, index, props) => (
                <div {...props}>
                    <SuggestionItem item={item} onClick={onClick} id={`${listId}/${index}`} focused={false} />
                </div>
            )}
        </List>
    );
};
