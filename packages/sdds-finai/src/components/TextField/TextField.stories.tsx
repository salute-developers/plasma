import React from 'react';
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getTextFieldStories } from '@salutejs/plasma-sb-utils';
import { IconLockOutline, IconBellFill } from '@salutejs/plasma-icons';

import { TextField } from './TextField';
import { config } from './TextField.config';

type TextFieldProps = ComponentProps<typeof TextField>;

const { meta: META, Default, Chips } = getTextFieldStories({
    component: TextField,
    componentConfig: config,
    customIcon: (size: string, type: 'left' | 'right', disabled?: boolean, readOnly?: boolean) => {
        const iconSize = size === 'xs' ? 'xs' : 's';
        if (type === 'left') {
            return <IconBellFill size={iconSize} />;
        }
        if (disabled) {
            return <IconLockOutline size={iconSize} />;
        }
        if (readOnly) {
            return <IconLockOutline size={iconSize} />;
        }
        return <IconBellFill size={iconSize} />;
    },
});

const meta: Meta<TextFieldProps> = {
    ...META,
    title: 'Data Entry/TextField',
};

export default meta;

export { Default, Chips };
