import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import { Chip } from '.';

const views = ['default', 'secondary', 'accent'];
const sizes = ['s', 'xs'];

const onClear = action('onClear');

const meta: Meta<typeof Chip> = {
    title: 'Data Display/Chip',
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
        ...disableProps([
            'readOnly',
            'onClear',
            'contentLeft',
            'contentRight',
            'contentClearButton',
            'text',
            'disabled',
            'pilled',
        ]),
    },
};

export default meta;

type Story = StoryObj<typeof Chip>;

const TrashIcon = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" color="inherit" {...props}>
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
        view: 'default',
        size: 's',
        hasClear: true,
        focused: true,
        onClear,
    },
};

export const WithIcon: Story = {
    args: { ...Default.args },
    render: (args) => {
        const iconSizeMapper = {
            s: '1.5rem',
            xs: '1rem',
        };
        const iconSize = args.size || 's';

        return (
            <Chip
                contentLeft={<TrashIcon width={iconSizeMapper[iconSize]} height={iconSizeMapper[iconSize]} />}
                {...args}
            />
        );
    },
};

export const LongText: Story = {
    args: {
        ...Default.args,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    render: (args) => <Chip style={{ width: '10rem' }} {...args} />,
};
