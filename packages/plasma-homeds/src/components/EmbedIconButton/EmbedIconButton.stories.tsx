import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { IconPlayCircleFill } from '@salutejs/plasma-icons';
import { disableProps, getConfigVariations, InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { EmbedIconButton } from './EmbedIconButton';
import { config } from './EmbedIconButton.config';

type StoryButtonProps = ComponentProps<typeof EmbedIconButton> & { contentType: string; isLoading: boolean };

const { views, sizes } = getConfigVariations(config);

const meta: Meta<StoryButtonProps> = {
    title: 'Data Entry/EmbedIconButton',
    decorators: [InSpacingDecorator],
    argTypes: {
        size: {
            options: sizes,
            control: {
                type: 'inline-radio',
            },
        },
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        ...disableProps([
            'focused',
            'children',
            'theme',
            'loader',
            'onClick',
            'onFocus',
            'onBlur',
            'contentLeft',
            'contentRight',
        ]),
    },
};

export default meta;

const getSizeForIcon = (size) => {
    const map = {
        s: 'xs',
        m: 's',
        l: 'm',
    };
    if (map[size]) {
        return map[size];
    }

    return size;
};

export const Default: StoryObj<ComponentProps<typeof EmbedIconButton>> = {
    args: {
        children: <IconPlayCircleFill />,
        view: 'default',
        size: 'm',
        disabled: false,
        focused: true,
        isLoading: false,
    },
    argTypes: { ...disableProps(['children']) },
    render: (args) => (
        <EmbedIconButton {...args}>
            <IconPlayCircleFill color="inherit" size={getSizeForIcon(args.size)} />
        </EmbedIconButton>
    ),
};
