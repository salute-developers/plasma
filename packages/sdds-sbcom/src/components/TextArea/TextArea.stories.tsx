import React from 'react';
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getTextAreaStories } from '@salutejs/plasma-sb-utils';
import { IconChatOutline } from '@salutejs/plasma-icons';

import { IconButton } from '../IconButton';

import { TextArea } from './TextArea';
import { config } from './TextArea.config';

type TextAreaProps = ComponentProps<typeof TextArea>;

const buttonSizeMap: Record<string, 'm' | 's' | 'xs'> = {
    xl: 'm',
    l: 's',
    m: 's',
    s: 'xs',
    xs: 'xs',
};

const { meta: META, Default } = getTextAreaStories({
    component: TextArea,
    componentConfig: config,
    defaultArgs: {
        ...config.defaults,
        titleCaption: '',
        hasHint: false,
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
});

const meta: Meta<TextAreaProps> = {
    ...META,
    title: 'Data Entry/⚠️ TextArea',
};

export default meta;

export { Default };
