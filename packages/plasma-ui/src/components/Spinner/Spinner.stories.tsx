import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { disableProps } from '../../helpers';
import { InSpacing } from '../../helpers/StoryDecorators';

import { Spinner } from './Spinner';

import type { SpinnerProps } from '.';

const meta: Meta<SpinnerProps> = {
    title: 'Content/Spinner',
    decorators: [InSpacing],
    component: Spinner,
    argTypes: {
        size: {
            options: [8, 16, 32, 64, 96, 128],
            control: {
                type: 'select',
            },
        },
        ...disableProps(['color', 'theme', 'as', 'forwardedAs']),
    },
};

export default meta;

export const Default: StoryObj<SpinnerProps> = {
    args: {
        size: 32,
    },
};
