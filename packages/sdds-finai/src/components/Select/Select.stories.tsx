import type { ComponentProps } from 'react';
import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { getSelectStories } from '@salutejs/plasma-sb-utils';
import { IconLockOutline } from '@salutejs/plasma-icons';

import { Select } from './Select';
import { config } from './Select.config';

type SelectProps = ComponentProps<typeof Select>;

const { meta: META, Single, Multiselect, Predefined, Common, SelectAll } = getSelectStories({
    component: Select,
    componentConfig: config,
    defaultArgs: {
        ...config.defaults,
    },
    customGetContentRight: (size, disabled) => {
        const iconSize = size === 'xs' ? 'xs' : 's';
        if (disabled) {
            return <IconLockOutline size={iconSize} />;
        }
        return undefined;
    },
});

const meta: Meta<SelectProps> = {
    ...META,
    title: 'Data Entry/Select',
};

export default meta;

export { Single, Multiselect, Predefined, Common, SelectAll };
