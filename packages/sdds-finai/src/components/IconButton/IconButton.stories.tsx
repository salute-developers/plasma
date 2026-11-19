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

    if (size === 'xs' || size === 's' || size === 'm') {
        return <IconClose color="inherit" size={size} />;
    }

    return <IconClose color="inherit" size="s" />;
};

const { meta: META, Default } = getIconButtonStories({
    component: IconButton,
    componentConfig: config,
    defaultArgs: {
        size: 's',
        pin: 'square-square',
    },
    additionalArgTypes: {
        pin: {
            options: ['square-square', 'circle-circle'],
            control: { type: 'select' },
            table: { defaultValue: { summary: 'bottom' } },
        },
    },
    Icon,
});

const meta: Meta<IconButtonProps> = {
    ...META,
    title: 'Data Entry/IconButton',
    argTypes: {
        ...META.argTypes,
        focused: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;

export { Default };
