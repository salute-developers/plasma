import React from 'react';
import { action } from '@storybook/addon-actions';
import { disableProps } from '@salutejs/plasma-sb-utils';
import type { StoryObj, Meta } from '@storybook/react';

import { segmentItemConfig } from '../../../../components/Segment';
import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';

import { config } from './Segment.config';
import { SegmentItem } from './Segment';

const onClear = action('onClear');

const meta: Meta<typeof SegmentItem> = {
    title: 'plasma_b2c/Segment',
    decorators: [WithTheme],
    component: SegmentItem,
    argTypes: {
        ...argTypesFromConfig(mergeConfig(segmentItemConfig, config)),
        ...disableProps([]),
    },
};

export default meta;

type Story = StoryObj<typeof SegmentItem>;

export const Default: Story = {
    args: {
        label: 'Label',
        value: 'label',
        view: 'clear',
        size: 'xs',
        disabled: false,
    },
};

export const DefaultStory: Story = {
    args: { ...Default.args },
    render: (args) => <SegmentItem {...args} />,
};
