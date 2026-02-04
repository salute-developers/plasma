import React from 'react';
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getSegmentStories } from '@salutejs/plasma-sb-utils';
import styled from 'styled-components';
import { IconPlasma } from '@salutejs/plasma-icons';

import { Counter } from '../Counter/Counter';

import { config } from './SegmentGroup.config';
import { SegmentProvider, SegmentItem, SegmentGroup, useSegment } from './Segment';

type SegmentGroupProps = ComponentProps<typeof SegmentGroup>;

const segmentItemViews = ['default', 'secondary'];

const getContentRight = (contentRightOption: string, size: string, _?: string, isSelected?: boolean) => {
    switch (contentRightOption) {
        case 'icon':
            return <IconPlasma size="xs" color="inherit" />;
        case 'counter':
            return <Counter size="s" count={1} view={isSelected ? 'accent' : 'positive'} />;
        case 'text':
            return 'Text';
        default:
            return undefined;
    }
};

const { meta: META, Default } = getSegmentStories({
    SegmentGroup,
    SegmentItem,
    SegmentProvider,
    useSegment,
    componentConfig: config,
    CounterComponent: Counter,
    customGetContentRight: getContentRight,
    disablePropsList: ['filledBackground'],
    additionalArgTypes: {
        segmentItemView: {
            options: segmentItemViews,
            control: {
                type: 'select',
            },
        },
    },
    defaultArgs: {
        size: 'xs',
    },
});

const meta: Meta<SegmentGroupProps> = {
    ...META,
    title: 'Data Entry/Segment',
};

export default meta;

export { Default };
