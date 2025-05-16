import React, { CSSProperties } from 'react';
import List from 'rc-virtual-list';
import { getHeightAsNumber } from 'src/utils';

import type { MergedDropdownNodeTransformed } from '../Inner/ui/Item/Item.types';
import { Item } from '../Inner/ui';

interface Props {
    items: MergedDropdownNodeTransformed[];
    listMaxHeight?: CSSProperties['height'];
    onScroll?: (e: React.UIEvent<HTMLUListElement>) => void;
}

export const VirtualList: React.FC<Props> = ({ items, listMaxHeight, onScroll }) => (
    <List
        data={items}
        height={getHeightAsNumber(listMaxHeight)}
        fullHeight={false}
        itemHeight={100}
        itemKey="id"
        onScroll={onScroll}
    >
        {(item, index, props) => (
            <div {...props}>
                <Item item={item} path={['root']} currentLevel={0} index={index} ariaLevel={1} />
            </div>
        )}
    </List>
);
