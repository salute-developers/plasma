import * as React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { disableProps } from '@salutejs/plasma-sb-utils';

import { IconMic } from '../../../../components/_Icon';
import { buttonConfig } from '../../../../components/Button';
import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';

import { config } from './Button.config';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'plasma_b2c/Button',
    decorators: [WithTheme],
    component: Button,
    args: {
        text: 'Hello',
        view: 'default',
        size: 'm',
        disabled: false,
        focused: true,
        square: false,
        stretching: 'auto',
        isLoading: false,
    },
    argTypes: {
        ...argTypesFromConfig(mergeConfig(buttonConfig, config)),
        pin: {
            options: [
                'square-square',
                'square-clear',
                'clear-square',
                'clear-clear',
                'clear-circle',
                'circle-clear',
                'circle-circle',
                '',
            ],
            control: {
                type: 'select',
            },
            table: { defaultValue: { summary: 'bottom' } },
        },
        stretching: {
            options: ['auto', 'filled', 'fixed'],
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

export const Default: StoryObj<ComponentProps<typeof Button>> = {};

export const AccessibilityWithChildren: StoryObj<ComponentProps<typeof Button>> = {
    argTypes: { ...disableProps(['text']) },
    render: (props: ComponentProps<typeof Button>) => {
        const args = { ...props, text: undefined };

        return (
            <Button {...args}>
                <IconMic color="inherit" />
                <span>Включить микрофон</span>
            </Button>
        );
    },
};
