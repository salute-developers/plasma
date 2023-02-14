import React from 'react';
import { Story, Meta } from '@storybook/react';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import { Spinner, SpinnerProps } from '.';

const propsToDisable = ['color', 'theme', 'as', 'forwardedAs'];

const sizes = [8, 16, 32, 64, 96, 128];

export default {
    title: 'Content/Spinner',
    decorators: [InSpacingDecorator],
    argTypes: {
        size: {
            options: sizes,
            control: {
                type: 'select',
            },
        },
        ...disableProps(propsToDisable),
    },
} as Meta;

export const Default: Story<SpinnerProps> = (args) => <Spinner {...args} />;

Default.args = {
    size: 32,
};
