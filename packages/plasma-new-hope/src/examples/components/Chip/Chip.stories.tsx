import React, { ComponentProps } from 'react';
import { action } from 'storybook/actions';
import { disableProps, getConfigVariations } from '@salutejs/plasma-sb-utils';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { IconMic } from '../../../components/_Icon';
import { WithTheme } from '../../_helpers';

import { Chip } from './Chip';
import { config } from './Chip.config';

const onClear = action('onClear');

const { views, sizes } = getConfigVariations(config);

const iconSizeMapper = {
    l: '1.5rem',
    m: '1.5rem',
    s: '1rem',
    xs: '0.75rem',
    xxs: '0.75rem',
};

const meta: Meta<typeof Chip> = {
    title: 'Data Display/Chip',
    decorators: [WithTheme],
    component: Chip,
    args: {
        text: 'Hello',
        view: 'default',
        size: 'm',
        appearance: 'default',
        hasClear: true,
        disabled: false,
        focused: true,
        pilled: false,
        onClear,
    },
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
        appearance: {
            options: ['default', 'transparent'],
            control: {
                type: 'select',
            },
        },
        ...disableProps(['readOnly', 'onClear', 'contentLeft']),
    },
};

export default meta;

type StoryPropsDefault = ComponentProps<typeof Chip> & {
    enableContentRight: boolean;
    enableContentLeft: boolean;
};

const StoryDefault = ({ enableContentLeft, enableContentRight, size, ...rest }: StoryPropsDefault) => {
    return (
        <Chip
            contentLeft={
                enableContentLeft ? (
                    <IconMic sizeCustomValue={iconSizeMapper[size as keyof typeof iconSizeMapper]} color="inherit" />
                ) : undefined
            }
            contentRight={
                enableContentRight ? (
                    <IconMic sizeCustomValue={iconSizeMapper[size as keyof typeof iconSizeMapper]} color="inherit" />
                ) : undefined
            }
            size={size}
            {...rest}
        />
    );
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        enableContentLeft: false,
        enableContentRight: false,
    },
    render: (args) => <StoryDefault {...args} />,
};

export const LongText: StoryObj<StoryPropsDefault> = {
    args: {
        ...Default.args,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    render: (args) => <StoryDefault style={{ width: '10rem' }} {...args} />,
};
