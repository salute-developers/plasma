import React, { useCallback, useState, useRef } from 'react';
import type { ComponentProps } from 'react';
import { action } from '@storybook/addon-actions';
import type { StoryObj, Meta } from '@storybook/react';
import { IconMic } from '@salutejs/plasma-icons';

import { actionWithPersistedEvent, disableProps, InSpacingDecorator } from '../../../src/helpers';
import type { ActionButtonProps } from '../../../src';
import { ActionButton } from '../../../src';

import { Button } from '.';

const onClick = actionWithPersistedEvent('onClick');
const onFocus = actionWithPersistedEvent('onFocus');
const onBlur = actionWithPersistedEvent('onBlur');

type ButtonProps = ComponentProps<typeof Button>;

const meta: Meta<ButtonProps> = {
    title: 'Linaria/Button',
    decorators: [InSpacingDecorator],
    component: Button,
    argTypes: {
        view: {
            options: ['primary', 'secondary', 'warning', 'critical', 'checked', 'overlay', 'clear'],
            control: {
                type: 'select',
            },
        },
        size: {
            options: ['l', 'm', 's'],
            control: {
                type: 'inline-radio',
            },
        },
        text: {
            control: {
                type: 'text',
            },
        },
        pin: {
            options: [
                'square-square',
                'square-clear',
                'clear-square',
                'clear-clear',
                'clear-circle',
                'circle-clear',
                'circle-circle',
            ],
            control: {
                type: 'select',
            },
        },
        ...disableProps([
            'theme',
            'as',
            'forwardedAs',
            'scaleOnHover',
            'scaleOnPress',
            'contentLeft',
            'contentRight',
            'shiftLeft',
            'shiftRight',
            'onClick',
            'onFocus',
            'onBlur',
            'blur',
        ]),
    },
};

export default meta;

type StoryButtonProps = Omit<ButtonProps, 'children' | 'contentLeft' | 'contentRight'> & {
    enableIcon: boolean;
    isLoading: boolean;
};

export const Default: StoryObj<StoryButtonProps> = {
    args: {
        text: 'Hello Plasma',
        size: 'm',
        view: 'primary',
        pin: 'square-square',
        enableIcon: true,
        scaleOnInteraction: true,
        outlined: true,
        focused: false,
        disabled: false,
        square: false,
        stretch: false,
        isLoading: false,
        onClick,
        onFocus,
        onBlur,
    },
    render: ({ enableIcon, text, ...rest }) => (
        <Button text={text} contentLeft={enableIcon ? <IconMic size="s" color="inherit" /> : undefined} {...rest} />
    ),
};
