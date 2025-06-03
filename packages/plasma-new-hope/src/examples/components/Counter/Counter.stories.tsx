import { disableProps } from '@salutejs/plasma-sb-utils';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme } from '../../_helpers';

import { Counter } from './Counter';

const sizes = ['l', 'm', 's', 'xs', 'xxs'];
const views = ['default', 'accent', 'positive', 'warning', 'negative', 'dark', 'light'];

const meta: Meta<typeof Counter> = {
    title: 'Data Display/Counter',
    component: Counter,
    decorators: [WithTheme],
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
