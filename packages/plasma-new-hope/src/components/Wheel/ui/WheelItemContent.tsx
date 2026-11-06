import React, { forwardRef } from 'react';

import type { WheelColumn, WheelItem, WheelItemState } from '../Wheel.types';
import { classes } from '../Wheel.tokens';
import { ItemContent, TextAfter } from '../Wheel.styles';

type Props = Pick<WheelColumn, 'renderItem' | 'textAfter'> & {
    item?: WheelItem;
    state: WheelItemState;
};

export const WheelItemContent = forwardRef<HTMLDivElement, Props>(({ item, state, renderItem, textAfter }, ref) => (
    <ItemContent ref={ref} className={classes.itemContent}>
        {item && (renderItem ? renderItem(item, state) : item.label)}
        {item && textAfter != null && <TextAfter>{textAfter}</TextAfter>}
    </ItemContent>
));
