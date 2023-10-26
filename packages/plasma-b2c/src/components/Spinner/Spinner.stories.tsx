import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import { Spinner, SpinnerProps } from '.';

const meta: Meta<SpinnerProps> = {
    title: 'Content/Spinner',
    component: Spinner,
    decorators: [InSpacingDecorator],
    argTypes: {
        size: {
            options: [8, 16, 32, 64, 96, 128],
            control: {
                type: 'select',
            },
        },
        ...disableProps(['color', 'theme', 'as', 'forwardedAs']),
    },
};

export default meta;

export const Default: StoryObj<SpinnerProps> = {
    args: {
        size: 32,
    },
    render: (args) => <Spinner {...args} />,
};
