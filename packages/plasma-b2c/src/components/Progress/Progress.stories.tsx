import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator, getConfigVariations, disableProps } from '@salutejs/plasma-sb-utils';

import { config } from './Progress.config';

import { Progress } from '.';
import type { ProgressProps } from '.';

const { views } = getConfigVariations(config);

const meta: Meta<typeof Progress> = {
    title: 'Overlay/Progress',
    component: Progress,
    decorators: [InSpacingDecorator],
    argTypes: {
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        ...disableProps(['status']),
    },
};

export default meta;

export const Default: StoryObj<ProgressProps> = {
    args: {
        value: 25,
        view: 'default',
        displayValue: true,
    },
};
