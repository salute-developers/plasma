import { action } from '@storybook/addon-actions';
import { disableProps } from '@salutejs/plasma-sb-utils';
import type { StoryObj, Meta } from '@storybook/react';
import React from 'react';

import { chipConfig } from '../../../../components/Chip';
import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';

import { config } from './Chip.config';
import { Chip, ChipReadOnly } from './Chip';

const onClear = action('onClear');

const meta: Meta<typeof Chip> = {
    title: 'sds_engineer/Chip',
    decorators: [WithTheme],
    argTypes: {
        ...argTypesFromConfig(mergeConfig(chipConfig, config)),
        ...disableProps(['readOnly', 'hasClear', 'onClear']),
    },
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
    args: {
        children: 'Hello',
        view: 'default',
        size: 'm',
        hasClear: true,
        onClear,
    },
    render: (args) => <Chip {...args} />,
};

export const ReadOnly: Story = {
    args: {
        children: 'Hello',
        view: 'default',
        size: 'm',
        hasClear: false,
        readOnly: true,
    },
    render: (args) => <ChipReadOnly {...args} />,
};
