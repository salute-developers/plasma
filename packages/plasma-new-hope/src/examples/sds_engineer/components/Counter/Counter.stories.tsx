import React from 'react';
import { disableProps } from '@salutejs/plasma-sb-utils';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme } from '../../../_helpers';

import { Counter } from './Counter';

const meta: Meta<typeof Counter> = {
    title: 'sds_engineer/Counter',
    component: Counter,
    decorators: [WithTheme],
    argTypes: {
        size: {
            options: ['xs', 'xxs'],
            control: {
                type: 'select',
            },
        },
        view: {
            options: ['primary', 'accent', 'positive', 'warning', 'negative', 'dark', 'light'],
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
        view: 'primary',
        size: 'xs',
    },
};
