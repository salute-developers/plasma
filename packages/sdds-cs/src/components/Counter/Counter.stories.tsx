import React from 'react';
import { disableProps, InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import type { StoryObj, Meta } from '@storybook/react';

import { Counter } from './Counter';

const meta: Meta<typeof Counter> = {
    title: 'Content/Counter',
    component: Counter,
    decorators: [InSpacingDecorator],
    argTypes: {
        size: {
            options: ['s'],
            control: {
                type: 'select',
            },
        },
        view: {
            options: ['default', 'accent', 'positive', 'negative'],
            control: {
                type: 'select',
            },
        },
        ...disableProps(['contentLeft', 'contentRight']),
    },
};

export default meta;

type Story = StoryObj<typeof Counter>;

export const Default: Story = {
    args: {
        count: 25,
        maxCount: 100,
        view: 'default',
        size: 's',
    },
};
