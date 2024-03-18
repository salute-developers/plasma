import React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme } from '../../../_helpers';

import { Progress } from './Progress';

const views = ['default', 'secondary', 'primary', 'accent', 'success', 'warning', 'error'];

const meta: Meta<typeof Progress> = {
    title: 'sds_engineer/Progress',
    component: Progress,
    decorators: [WithTheme],
    argTypes: {
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

export const Default: StoryObj<ComponentProps<typeof Progress>> = {
    args: {
        value: 25,
        view: 'default',
        displayValue: true,
    },
};
