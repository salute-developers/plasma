import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getSegmentStories } from '@salutejs/plasma-sb-utils';

import { SegmentProvider, useSegment } from '../../../components/Segment/SegmentProvider';
import { Counter } from '../Counter/Counter';
import { WithTheme } from '../../_helpers';

import { config as groupConfig } from './SegmentGroup.config';
import { config as itemConfig } from './SegmentItem.config';
import { SegmentItem, SegmentGroup, SegmentIconItem } from './Segment';

type SegmentGroupProps = ComponentProps<typeof SegmentGroup>;

const { meta: META, Default, IconItem } = getSegmentStories({
    SegmentGroup,
    SegmentItem,
    SegmentIconItem,
    SegmentProvider,
    componentConfig: { group: groupConfig, item: itemConfig },
    CounterComponent: Counter,
    useSegment,
    decorators: [WithTheme],
});

const meta: Meta<SegmentGroupProps> = {
    ...META,
    title: 'Data Entry/Segment',
};

export default meta;

export { Default, IconItem };
