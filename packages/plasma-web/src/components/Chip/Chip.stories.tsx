import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import { Chip } from '.';

const views = ['primary', 'secondary', 'positive'];
const sizes = ['l', 'm', 's', 'xs'];

const onClear = action('onClear');

const meta: Meta<typeof Chip> = {
    title: 'Controls/Chip',
    component: Chip,
    decorators: [InSpacingDecorator],
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
        ...disableProps(['readOnly', 'onClear', 'contentLeft', 'contentRight', 'contentClearButton', 'text']),
    },
};

export default meta;

type Story = StoryObj<typeof Chip>;

const TrashIcon = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 5.5A2.5 2.5 0 0110.5 3h3A2.5 2.5 0 0116 5.5V6h-2v-.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V6H8v-.5zM4 8a1 1 0 011-1h14a1 1 0 110 2h-1v9.5a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 016 18.5V9H5a1 1 0 01-1-1z"
            fill="currentColor"
        />
    </svg>
);

export const Default: Story = {
    args: {
        text: 'This is chip',
        view: 'primary',
        size: 'm',
        hasClear: true,
        disabled: false,
        focused: true,
        onClear,
    },
};

export const WithIcon: Story = {
    args: { ...Default.args },
    render: (args) => <Chip contentLeft={<TrashIcon width="1.25rem" height="1.25rem" />} {...args} />,
};
