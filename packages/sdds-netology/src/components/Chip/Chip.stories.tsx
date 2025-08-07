import React, { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { InSpacingDecorator, disableProps, getConfigVariations } from '@salutejs/plasma-sb-utils';

import { config } from './Chip.config';

import { Chip } from '.';

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
    decorators: [InSpacingDecorator],
    component: Chip,
    args: {
        text: 'Hello',
        view: 'default',
        size: 'm',
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
        ...disableProps(['readOnly', 'onClear', 'contentLeft', 'contentRight', 'contentClearButton', 'text']),
    },
};

export default meta;

type StoryPropsDefault = ComponentProps<typeof Chip> & {
    enableContentRight: boolean;
    enableContentLeft: boolean;
};

const BellIcon = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" {...props}>
        <path
            d="M11.501 21.28c1.088 0 1.978-.889 1.978-1.977H9.524c0 1.088.88 1.978 1.977 1.978zm5.933-5.932v-4.944c0-3.035-1.622-5.576-4.45-6.248v-.673c0-.82-.662-1.483-1.483-1.483-.82 0-1.483.662-1.483 1.483v.672c-2.838.673-4.45 3.204-4.45 6.25v4.943l-1.275 1.276c-.623.623-.188 1.69.692 1.69h13.022c.88 0 1.325-1.067.702-1.69l-1.275-1.276z"
            fill="currentColor"
        />
    </svg>
);

const StoryDefault = ({ enableContentLeft, enableContentRight, size, ...rest }: StoryPropsDefault) => {
    return (
        <Chip
            contentLeft={
                enableContentLeft ? (
                    <BellIcon
                        width={iconSizeMapper[size as keyof typeof iconSizeMapper]}
                        height={iconSizeMapper[size as keyof typeof iconSizeMapper]}
                    />
                ) : undefined
            }
            contentRight={
                enableContentRight ? (
                    <BellIcon
                        width={iconSizeMapper[size as keyof typeof iconSizeMapper]}
                        height={iconSizeMapper[size as keyof typeof iconSizeMapper]}
                    />
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
