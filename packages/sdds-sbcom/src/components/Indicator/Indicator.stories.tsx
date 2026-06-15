import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';

import { Indicator } from './Indicator';

const meta: Meta<typeof Indicator> = {
    title: 'Data Display/Indicator',
    component: Indicator,
    argTypes: {
        view: {
            options: ['accent', 'global', 'mute', 'danger', 'warning'],
            control: {
                type: 'select',
            },
        },
        size: {
            options: ['14', '12', '10', '8', '6'],
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
        size: '8',
        view: 'global',
    },
};
