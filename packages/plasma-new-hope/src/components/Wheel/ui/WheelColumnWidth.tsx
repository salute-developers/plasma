import React, { memo } from 'react';

import type { WheelColumn } from '../Wheel.types';
import { Description, Item, WidthMeasure } from '../Wheel.styles';

import { WheelItemContent } from './WheelItemContent';

type Props = Pick<WheelColumn, 'items' | 'renderItem' | 'textAfter' | 'description'>;

export const WheelColumnWidth = memo(({ items, renderItem, textAfter, description }: Props) => (
    <WidthMeasure aria-hidden {...{ inert: '' }}>
        {items.map((item) => (
            <Item key={`${typeof item.value}-${item.value}`}>
                <WheelItemContent
                    item={item}
                    state={{ selected: true, offset: 0 }}
                    renderItem={renderItem}
                    textAfter={textAfter}
                />
            </Item>
        ))}
        {description != null && (
            <Item>
                <Description>{description}</Description>
            </Item>
        )}
    </WidthMeasure>
));
