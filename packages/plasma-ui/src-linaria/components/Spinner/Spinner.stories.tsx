import type { StoryObj, Meta } from '@storybook/react';

import { disableProps, InSpacingDecorator } from '../../../src/helpers';

import { Spinner } from './Spinner';

const meta: Meta<any> = {
    title: 'Linaria/Spinner',
    decorators: [InSpacingDecorator],
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

export const Default: StoryObj<any> = {
    args: {
        size: 32,
    },
};
