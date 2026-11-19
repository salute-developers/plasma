import React from 'react';
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { IconClose } from '@salutejs/plasma-icons';
import { getIconButtonStories } from '@salutejs/plasma-sb-utils';

import { IconButton } from './IconButton';
import { config } from './IconButton.config';

type IconButtonProps = ComponentProps<typeof IconButton>;

const Icon = (size: string) => {
    if (size === 'xxs') {
        return <IconClose color="inherit" style={{ width: '0.75rem', height: '0.75rem' }} />;
    }

    return <IconClose color="inherit" size={size === 'xs' ? 'xs' : 's'} />;
};

const { meta: META, Default } = getIconButtonStories({
    component: IconButton,
    componentConfig: config,
    Icon,
});

const meta: Meta<IconButtonProps> = {
    ...META,
    title: 'Data Entry/IconButton',
};

export default meta;

export { Default };
