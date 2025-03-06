import React, { CSSProperties } from 'react';
import List from 'rc-virtual-list';

import type { MergedDropdownNodeTransformed } from '../Inner/ui/Item/Item.types';
import { Item } from '../Inner/ui';

const getHeight = (listHeight?: CSSProperties['height']) => {
    if (!listHeight) return 300;

    if (typeof listHeight === 'number') return listHeight;

    return parseInt(listHeight, 10);
};

interface Props {
    items: MergedDropdownNodeTransformed[];
    listHeight?: CSSProperties['height'];
}

export const VirtualList: React.FC<Props> = ({ items, listHeight }) => {
    return (
        <List data={items} height={getHeight(listHeight)} itemHeight={100} itemKey="id">
            {(item, index, props) => (
                <div {...props}>
                    <Item item={item} path={['root']} currentLevel={0} index={index} ariaLevel={1} />
                </div>
            )}
        </List>
    );
};
