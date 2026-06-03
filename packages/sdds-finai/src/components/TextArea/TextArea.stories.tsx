import React from 'react';
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getTextAreaStories } from '@salutejs/plasma-sb-utils';
import { IconLockOutline, IconBellFill } from '@salutejs/plasma-icons';

import { TextArea } from './TextArea';
import { config } from './TextArea.config';

type TextAreaProps = ComponentProps<typeof TextArea>;

const { meta: META, Default } = getTextAreaStories({
    component: TextArea,
    componentConfig: config,
    disablePropsList: ['appearance', 'hasDivider', 'enableHeader'],
    customIcon: (size: string, _type?: 'left' | 'right', disabled?: boolean) => {
        const iconSize = size === 'xs' ? 'xs' : 's';
        if (disabled) {
            return <IconLockOutline size={iconSize} color="inherit" />;
        }
        return <IconBellFill size={iconSize} color="inherit" />;
    },
});

const meta: Meta<TextAreaProps> = {
    ...META,
    title: 'Data Entry/TextArea',
};

export default meta;

export { Default };
