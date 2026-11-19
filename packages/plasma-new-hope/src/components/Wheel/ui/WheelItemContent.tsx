import React, { forwardRef } from 'react';

import type { WheelColumn, WheelItem, WheelItemState } from '../Wheel.types';
import { classes } from '../Wheel.tokens';
import { ItemContent, ItemLabel, TextAfter } from '../Wheel.styles';

type Props = Pick<WheelColumn, 'renderItem' | 'textAfter'> & {
    item?: WheelItem;
    state: WheelItemState;
};

export const WheelItemContent = forwardRef<HTMLDivElement, Props>(({ item, state, renderItem, textAfter }, ref) => (
    <ItemContent ref={ref} className={classes.itemContent}>
        <ItemLabel>{item && (renderItem ? renderItem(item, state) : item.label)}</ItemLabel>
        {item && textAfter != null && <TextAfter className={classes.textAfter}>{textAfter}</TextAfter>}
    </ItemContent>
));
