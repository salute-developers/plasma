import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getSegmentStories } from '@salutejs/plasma-sb-utils';

import { Counter } from '../Counter/Counter';

import { config } from './SegmentGroup.config';
import { SegmentProvider, SegmentItem, SegmentGroup, useSegment } from './Segment';

type SegmentGroupProps = ComponentProps<typeof SegmentGroup>;

const { meta: META, Default } = getSegmentStories({
    SegmentGroup,
    SegmentItem,
    SegmentProvider,
    componentConfig: config,
    CounterComponent: Counter,
    useSegment,
});

const meta: Meta<SegmentGroupProps> = {
    ...META,
    title: 'Data Entry/Segment',
};

export default meta;

export { Default };
