import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import { Progress } from '.';
import type { ProgressProps } from '.';

const views = ['default', 'secondary', 'primary', 'accent', 'success', 'warning', 'error'];

const meta: Meta<typeof Progress> = {
    title: 'Controls/Progress',
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
