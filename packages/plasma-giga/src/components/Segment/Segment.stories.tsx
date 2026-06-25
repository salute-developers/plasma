import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getSegmentStories } from '@salutejs/plasma-sb-utils';

import { Counter } from '../Counter/Counter';

import { config as groupConfig } from './SegmentGroup.config';
import { config as itemConfig } from './SegmentItem.config';
import { SegmentProvider, SegmentItem, SegmentGroup, useSegment } from './Segment';

type SegmentGroupProps = ComponentProps<typeof SegmentGroup>;

const { meta: META, Default } = getSegmentStories({
    SegmentGroup,
    SegmentItem,
    SegmentProvider,
    componentConfig: { group: groupConfig, item: itemConfig },
    CounterComponent: Counter,
    useSegment,
    additionalArgTypes: {
        hasDivider: { type: 'boolean' },
    },
});

const meta: Meta<SegmentGroupProps> = {
    ...META,
    title: 'Data Entry/Segment',
};

export default meta;

export { Default };
