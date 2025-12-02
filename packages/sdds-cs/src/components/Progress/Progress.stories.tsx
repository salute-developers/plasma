import type { StoryObj, Meta } from '@storybook/react-vite';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import { Progress } from '.';
import type { ProgressProps } from '.';

const views = ['default', 'accent', 'positive', 'negative'];

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
        ...disableProps(['status', 'size']),
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
