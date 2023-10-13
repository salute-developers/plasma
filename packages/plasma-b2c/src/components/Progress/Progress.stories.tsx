import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { Progress } from '.';
import type { ProgressProps } from '.';

const meta: Meta<ProgressProps> = {
    title: 'Controls/Progress',
    component: Progress,
    decorators: [InSpacingDecorator],
    args: {
        value: 25,
        status: 'error',
        displayValue: true,
    },
};

export default meta;

export const Default: StoryObj<ProgressProps> = {
    render: (args) => <Progress {...args} />,
};
