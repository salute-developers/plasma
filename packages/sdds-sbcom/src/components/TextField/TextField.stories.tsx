import React, { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getTextFieldStories } from '@salutejs/plasma-sb-utils';
import { IconChatOutline } from '@salutejs/plasma-icons';

import { IconButton } from '../IconButton';

import { TextField } from './TextField';
import { config } from './TextField.config';

type TextFieldProps = ComponentProps<typeof TextField>;

const buttonSizeMap: Record<string, 'm' | 's' | 'xs'> = {
    xl: 'm',
    l: 's',
    m: 's',
    s: 'xs',
    xs: 'xs',
};

const { meta: META, Default, Chips } = getTextFieldStories({
    component: TextField,
    componentConfig: config,
    defaultArgs: {
        ...config.defaults,
        titleCaption: '',
        hasHint: false,
        enableContentLeft: false,
        enableContentRight: true,
    },
    customIcon: (size: string) => {
        const iconSize = size === 'xs' ? 'xs' : 's';
        return (
            <IconButton size={buttonSizeMap[size]} view="clear">
                <IconChatOutline size={iconSize} color="inherit" />
            </IconButton>
        );
    },
    disablePropsList: ['appearance'],
});

const meta: Meta<TextFieldProps> = {
    ...META,
    title: 'Data Entry/⚠️ TextField',
};

export default meta;

export { Default, Chips };
