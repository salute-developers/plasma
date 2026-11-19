import React, { memo } from 'react';
import type { Ref } from 'react';

import type { WheelColumn } from '../Wheel.types';
import { Description, Item, LabelWidthMeasure, ValueWidthMeasure, WidthMeasure } from '../Wheel.styles';

import { WheelItemContent } from './WheelItemContent';

type Props = Pick<WheelColumn, 'items' | 'renderItem' | 'textAfter' | 'description'> & {
    valueRef?: Ref<HTMLDivElement>;
};

export const WheelColumnWidth = memo(({ items, renderItem, textAfter, description, valueRef }: Props) => (
    <WidthMeasure aria-hidden {...{ inert: '' }}>
        <ValueWidthMeasure>
            <LabelWidthMeasure ref={valueRef}>
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
            </LabelWidthMeasure>
        </ValueWidthMeasure>
        {description != null && (
            <Item>
                <Description>{description}</Description>
            </Item>
        )}
    </WidthMeasure>
));
