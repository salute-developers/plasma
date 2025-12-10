import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { getConfigVariations } from '@salutejs/plasma-sb-utils';

import { Indicator } from './Indicator';
import { config } from './Indicator.config';

const { views, sizes } = getConfigVariations(config);

const meta: Meta<typeof Indicator> = {
    title: 'Data Display/Indicator',
    component: Indicator,
    argTypes: {
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        size: {
            options: sizes,
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
