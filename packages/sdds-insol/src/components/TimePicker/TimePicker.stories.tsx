import React, { ComponentProps, useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { disableProps, getConfigVariations, IconPlaceholder, InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { TimePicker } from './TimePicker';
import { config } from './TimePicker.config';

const onToggle = action('onToggle');

const { sizes, views } = getConfigVariations(config);
const labelPlacements = ['outer', 'inner'];

const meta: Meta = {
    title: 'Data Entry/TimePicker',
    decorators: [InSpacingDecorator],
    argTypes: {
        view: {
            options: views,
            control: {
                type: 'inline-radio',
            },
        },
        size: {
            options: sizes,
            control: {
                type: 'inline-radio',
            },
        },
        labelPlacement: {
            options: labelPlacements,
            control: {
                type: 'inline-radio',
            },
        },
        columnsQuantity: {
            options: [2, 3],
            control: {
                type: 'inline-radio',
            },
        },
        dropdownAlign: {
            options: ['left', 'right'],
            control: {
                type: 'inline-radio',
            },
        },
        dropdownWidth: {
            options: ['fixed', 'fullWidth'],
            control: {
                type: 'inline-radio',
            },
        },
        ...disableProps(['view']),
    },
};

export default meta;

type StoryPropsDefault = ComponentProps<typeof TimePicker> & {
    enableContentLeft: boolean;
    enableContentRight: boolean;
};

const IconPlaceholderWithBackground = ({ size }: { size: 'xs' | 's' }) => (
    <IconPlaceholder size={size} style={{ background: 'var(--text-secondary)' }} />
);

const StoryDefault = ({ enableContentLeft, enableContentRight, size, dropdownWidth, ...rest }: StoryPropsDefault) => {
    const [isOpen, setIsOpen] = useState(false);

    const iconSize = size === 'xs' ? 'xs' : 's';

    return (
        <TimePicker
            opened={isOpen}
            size={size}
            contentLeft={enableContentLeft ? <IconPlaceholderWithBackground size={iconSize} /> : undefined}
            contentRight={enableContentRight ? <IconPlaceholderWithBackground size={iconSize} /> : undefined}
            onToggle={(is) => {
                setIsOpen(is);
                onToggle(is);
            }}
            dropdownWidth={dropdownWidth === 'fullWidth' ? 'fullWidth' : undefined}
            {...rest}
        />
    );
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        dropdownAlign: 'left',
        columnsQuantity: 3,
        label: 'Лейбл',
        placeholder: '00:00:00',
        size: 'l',
        view: 'default',
        labelPlacement: 'outer',
        required: false,
        disabled: false,
        readonly: false,
        textBefore: '',
        textAfter: '',
        enableContentLeft: true,
        enableContentRight: true,
        dropdownWidth: 'fixed',
    },
    render: (args) => <StoryDefault {...args} />,
};
