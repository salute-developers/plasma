import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { Indicator } from './Indicator';

const meta: Meta<typeof Indicator> = {
    title: 'Data Display/Indicator',
    component: Indicator,
    argTypes: {
        view: {
            options: ['default', 'accent', 'inactive', 'positive', 'negative', 'warning', 'black'],
            control: {
                type: 'select',
            },
        },
        size: {
            options: ['l', 'm', 's'],
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

type Story = StoryObj<ComponentProps<typeof Indicator>>;

export const Default: Story = {
    args: {
        size: 's',
        view: 'default',
    },
};
