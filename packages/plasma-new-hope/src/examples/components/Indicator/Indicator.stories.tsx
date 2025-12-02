import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';

import { argTypesFromConfig, WithTheme } from '../../_helpers';

import { Indicator, mergedConfig } from './Indicator';

const meta: Meta<typeof Indicator> = {
    title: 'Data Display/Indicator',
    decorators: [WithTheme],
    component: Indicator,
    argTypes: {
        ...argTypesFromConfig(mergedConfig),
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
