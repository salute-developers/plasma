import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { disableProps } from '@salutejs/plasma-sb-utils';

import { iconButtonConfig } from '../../../components/IconButton';
import { mergeConfig } from '../../../engines';
import { WithTheme, argTypesFromConfig } from '../../_helpers';
import { IconChevronLeft } from '../../../components/_Icon';

import { config } from './EmbedIconButton.config';
import { EmbedIconButton } from './EmbedIconButton';

const meta: Meta<typeof EmbedIconButton> = {
    title: 'Data Entry/EmbedIconButton',
    decorators: [WithTheme],
    component: EmbedIconButton,
    argTypes: {
        ...argTypesFromConfig(mergeConfig(iconButtonConfig, config)),
        ...disableProps(['focused']),
    },
};

export default meta;

const getSizeForIcon = (size) => {
    const map = {
        mr: 's',
        lr: 's',
        xlr: 's',
        m: 's',
        l: 's',
        xl: 's',
        sr: 's',
        xsr: 'xs',
    };
    if (map[size]) {
        return map[size];
    }

    return size;
};

export const Default: StoryObj<ComponentProps<typeof EmbedIconButton>> = {
    args: {
        children: <IconChevronLeft />,
        view: 'default',
        size: 'm',
        disabled: false,
        focused: true,
        isLoading: false,
    },
    argTypes: { ...disableProps(['children']) },
    render: (args) => (
        <EmbedIconButton {...args} style={{ padding: '1rem' }}>
            <IconChevronLeft color="inherit" size={getSizeForIcon(args.size)} />
        </EmbedIconButton>
    ),
};
