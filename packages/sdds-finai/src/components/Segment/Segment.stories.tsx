import React from 'react';
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getSegmentStories } from '@salutejs/plasma-sb-utils';
import { IconPlasma } from '@salutejs/plasma-icons';

import { Counter } from '../Counter/Counter';

import { config as groupConfig } from './SegmentGroup.config';
import { config as itemConfig } from './SegmentItem.config';
import { config as iconItemConfig } from './SegmentIconItem.config';
import { SegmentProvider, SegmentItem, SegmentIconItem, SegmentGroup, useSegment } from './Segment';

type SegmentGroupProps = ComponentProps<typeof SegmentGroup>;

const getContentRight = (contentRightOption: string, size: string, segmentItemView?: string, isSelected?: boolean) => {
    const contentSize = size === 'xs' ? 'xs' : 's';
    switch (contentRightOption) {
        case 'icon':
            return <IconPlasma size={contentSize} color="inherit" />;
        case 'counter':
            return <Counter size={contentSize} count={1} view="accent" />;
        case 'text':
            return 'Text';
        default:
            return undefined;
    }
};

const { meta: META, Default, IconItem } = getSegmentStories({
    SegmentGroup,
    SegmentItem,
    SegmentIconItem,
    SegmentProvider,
    componentConfig: { group: groupConfig, item: itemConfig, iconItem: iconItemConfig },
    CounterComponent: Counter,
    useSegment,
    customGetContentRight: getContentRight,
});

const meta: Meta<SegmentGroupProps> = {
    ...META,
    title: 'Data Entry/Segment',
};

export default meta;

export { Default, IconItem };
