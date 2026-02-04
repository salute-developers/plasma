import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getSegmentStories } from '@salutejs/plasma-sb-utils';

import { SegmentProvider, useSegment } from '../../../components/Segment/SegmentProvider';
import { Counter } from '../Counter/Counter';
import { WithTheme } from '../../_helpers';

import { config } from './SegmentGroup.config';
import { SegmentItem, SegmentGroup } from './Segment';

type SegmentGroupProps = ComponentProps<typeof SegmentGroup>;

const { meta: META, Default } = getSegmentStories({
    SegmentGroup,
    SegmentItem,
    SegmentProvider,
    componentConfig: config,
    CounterComponent: Counter,
    useSegment,
    decorators: [WithTheme],
});

const meta: Meta<SegmentGroupProps> = {
    ...META,
    title: 'Data Entry/Segment',
};

export default meta;

export { Default };
