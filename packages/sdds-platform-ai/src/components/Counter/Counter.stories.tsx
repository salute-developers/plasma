import { disableProps, getConfigVariations, InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import type { StoryObj, Meta } from '@storybook/react';

import { Counter } from './Counter';
import { config } from './Counter.config';

const { views, sizes } = getConfigVariations(config);

const meta: Meta<typeof Counter> = {
    title: 'Data Display/Counter',
    component: Counter,
    decorators: [InSpacingDecorator],
    argTypes: {
        size: {
            options: sizes,
            control: {
                type: 'select',
            },
        },
        view: {
            options: views,
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
        count: 123,
        maxCount: 200,
        view: 'default',
        size: 'xs',
    },
};
