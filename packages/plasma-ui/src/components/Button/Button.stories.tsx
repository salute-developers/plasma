import React, { useState, useCallback, useRef } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { IconMic } from '@salutejs/plasma-icons';

import { actionWithPersistedEvent, disableProps, InSpacingDecorator } from '../../helpers';

import { Button, ActionButton } from '.';
import type { ButtonProps, ActionButtonProps } from '.';

const onClick = actionWithPersistedEvent('onClick');
const onFocus = actionWithPersistedEvent('onFocus');
const onBlur = actionWithPersistedEvent('onBlur');

const meta: Meta<ButtonProps> = {
    title: 'Controls/Button',
    decorators: [InSpacingDecorator],
    argTypes: {
        text: {
            control: {
                type: 'text',
            },
        },
        size: {
            options: ['l', 'm', 's'],
            control: {
                type: 'inline-radio',
            },
        },
        view: {
            options: ['primary', 'secondary', 'warning', 'critical', 'checked', 'overlay', 'clear'],
            control: {
                type: 'select',
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

// eslint-disable-next-line @typescript-eslint/naming-convention, camelcase
export const Action_Button: StoryObj<ActionButtonProps> = {
    argTypes: {
        ...disableProps(['text', 'tabIndex', 'square', 'focused', 'outlined', 'stretch']),
    },
    args: {
        size: 'm',
        view: 'primary',
        pin: 'square-square',
        scaleOnInteraction: true,
        disabled: false,
        tabIndex: 0,
        onClick,
        onFocus,
        onBlur,
    },
    render: (args) => (
        <ActionButton {...args}>
            <IconMic size="xs" color="inherit" />
        </ActionButton>
    ),
};

const StoryLoadingButton = ({ enableIcon, text, ...rest }: StoryButtonProps) => {
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);
    const intervalId = useRef<number | undefined>();

    const onClickHandle = useCallback((event) => {
        event.persist();

        setLoading(true);

        intervalId.current = window.setInterval(() => {
            setCount((prev) => {
                return prev + 1;
            });
        }, 1_000);
    }, []);

    if (count === 6) {
        setLoading(false);
        setCount(0);
        window.clearInterval(intervalId.current);
    }

    return (
        <Button
            text={text}
            contentLeft={enableIcon ? <IconMic size="s" color="inherit" /> : undefined}
            onClick={onClickHandle}
            isLoading={loading}
            loader={<div>Loading - {count}</div>}
            {...rest}
        />
    );
};

// eslint-disable-next-line @typescript-eslint/naming-convention, camelcase
export const Loading_Button: StoryObj<StoryButtonProps> = {
    args: {
        text: 'Start loading',
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
        onFocus,
        onBlur,
    },
    render: (args) => <StoryLoadingButton {...args} />,
};
