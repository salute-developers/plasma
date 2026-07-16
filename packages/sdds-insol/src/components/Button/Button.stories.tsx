import React, { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { disableProps, getButtonStories } from '@salutejs/plasma-sb-utils';
import { IconMic } from '@salutejs/plasma-icons';

import { Counter } from '../Counter';

import { Button } from './Button';
import { config } from './Button.config';

type ButtonProps = ComponentProps<typeof Button>;

const Icon = (size: string) => {
    const iconSizeMap = {
        xxs: 's',
        xs: 's',
        s: 's',
        m: '1.25rem',
        l: 'm',
        xl: 'm',
    };

    const getIconSize = (size: string) => iconSizeMap?.[size] ?? 's';

    return <IconMic size={getIconSize(size)} color="inherit" />;
};

const { meta: META, Default, WithValue } = getButtonStories({
    component: Button,
    componentConfig: config,
    additionalArgTypes: {
        appearance: {
            options: ['default', 'outline'],
            control: {
                type: 'select',
            },
        },
    },
    additionalComponents: {
        Counter,
        Icon,
    },
});

const meta: Meta<ButtonProps> = {
    ...META,
    title: 'Data Entry/Button',
};

const Outline: StoryObj<ButtonProps> = {
    args: {
        appearance: 'outline',
        view: 'secondary',
        size: 'xl',
    },
    argTypes: { ...disableProps(['children', 'appearance', 'size', 'view']) },
    render: (props: ButtonProps) => <Button {...props} />,
};

export default meta;

export { Default, WithValue, Outline };
