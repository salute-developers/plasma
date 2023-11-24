import React from 'react';
import { action } from '@storybook/addon-actions';
import { disableProps } from '@salutejs/plasma-sb-utils';
import type { StoryObj, Meta } from '@storybook/react';

import { chipConfig } from '../../../../components/Chip';
import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';

import { config } from './Chip.config';
import { Chip } from './Chip';

const onClear = action('onClear');

const meta: Meta<typeof Chip> = {
    title: 'plasma_web/Chip',
    decorators: [WithTheme],
    component: Chip,
    argTypes: {
        ...argTypesFromConfig(mergeConfig(chipConfig, config)),
        ...disableProps(['readOnly', 'onClear', 'contentLeft']),
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
        text: 'Hello',
        view: 'primary',
        size: 'm',
        disabled: false,
        focused: true,
        onClear,
    },
};

export const WithIcon: Story = {
    args: { ...Default.args },
    render: (args) => <Chip contentLeft={<TrashIcon width="1.25rem" height="1.25rem" />} {...args} />,
};

export const LongText: Story = {
    args: {
        ...Default.args,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    render: (args) => <Chip style={{ width: '10rem' }} {...args} />,
};
