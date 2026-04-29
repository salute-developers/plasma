import { disableProps, InSpacingDecorator, getConfigVariations } from '@salutejs/plasma-sb-utils';
import type { StoryObj, Meta } from '@storybook/react-vite';

import { Counter } from './Counter';
import { config } from './Counter.config';

const { views } = getConfigVariations(config);

const meta: Meta<typeof Counter> = {
    title: 'Data Display/Counter',
    component: Counter,
    decorators: [InSpacingDecorator],
    argTypes: {
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        ...disableProps(['size', 'contentLeft', 'contentRight']),
    },
};

export default meta;

type Story = StoryObj<typeof Counter>;

export const Default: Story = {
    args: {
        count: 123,
        maxCount: 200,
        view: 'default',
        size: 's',
    },
};
