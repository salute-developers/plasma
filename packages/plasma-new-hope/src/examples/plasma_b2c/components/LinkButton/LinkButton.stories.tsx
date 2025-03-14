import React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { getConfigVariations } from '@salutejs/plasma-sb-utils';

import { IconMic } from '../../../../components/_Icon';
import { WithTheme } from '../../../_helpers';

import { LinkButton } from './LinkButton';
import { config } from './LinkButton.config';

const { views, sizes } = getConfigVariations(config);

const sizeMap = {
    xxs: '0.75rem', // 12px
    xs: '1rem', // 16px
    s: '1.5rem', // 24px
    m: '1.5rem', // 36px
    l: '1.5rem', // 44px
    xl: '1.5rem', // 56px
};

const meta: Meta<typeof LinkButton> = {
    title: 'b2c/Data Entry/LinkButton',
    decorators: [WithTheme],
    component: LinkButton,
    args: {
        view: 'default',
        size: 'm',
        text: 'Hello',
        disabled: false,
        isLoading: false,
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
    },
};

export default meta;

type StoryPropsDefault = ComponentProps<typeof LinkButton> & {
    enableContentLeft: boolean;
    enableContentRight: boolean;
};

const StoryDefault = ({ enableContentLeft, enableContentRight, size, ...rest }: StoryPropsDefault) => {
    const iconSize = size as keyof typeof sizeMap;

    return (
        <LinkButton
            contentLeft={
                enableContentLeft ? <IconMic sizeCustomValue={sizeMap[iconSize]} color="inherit" /> : undefined
            }
            contentRight={
                enableContentRight ? <IconMic sizeCustomValue={sizeMap[iconSize]} color="inherit" /> : undefined
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
