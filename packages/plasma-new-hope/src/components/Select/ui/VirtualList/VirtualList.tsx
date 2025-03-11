import React, { CSSProperties } from 'react';
import List from 'rc-virtual-list';

import { getHeightAsNumber } from '../../../../utils';
import type { MergedDropdownNodeTransformed } from '../Inner/ui/Item/Item.types';
import { Item } from '../Inner/ui';

interface Props {
    items: MergedDropdownNodeTransformed[];
    listMaxHeight?: CSSProperties['height'];
}

export const VirtualList: React.FC<Props> = ({ items, listMaxHeight }) => (
    <List data={items} height={getHeightAsNumber(listMaxHeight)} itemHeight={100} itemKey="id">
        {(item, index, props) => (
            <div {...props}>
                <Item item={item} path={['root']} currentLevel={0} index={index} ariaLevel={1} />
            </div>
        )}
    </List>
);
