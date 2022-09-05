import React, { useState, useCallback, useRef } from 'react';
import { Story, Meta } from '@storybook/react';
import { IconMic } from '@salutejs/plasma-icons';

import { actionWithPersistedEvent, disableProps, InSpacingDecorator } from '../../helpers';

import { Button, ButtonProps, ActionButtonProps, ActionButton } from '.';

const sizes = ['l', 'm', 's'];
const views = ['primary', 'secondary', 'warning', 'critical', 'checked', 'overlay', 'clear'];
const pins = [
    'square-square',
    'square-clear',
    'clear-square',
    'clear-clear',
    'clear-circle',
    'circle-clear',
    'circle-circle',
];

const onClick = actionWithPersistedEvent('onClick');
const onFocus = actionWithPersistedEvent('onFocus');
const onBlur = actionWithPersistedEvent('onBlur');

const propsToDisable = [
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
];

export default {
    title: 'Controls/Button',
    decorators: [InSpacingDecorator],
    argTypes: {
        text: {
            control: {
                type: 'text',
            },
        },
        size: {
            control: {
                type: 'inline-radio',
                options: sizes,
            },
        },
        view: {
            control: {
                type: 'select',
                options: views,
            },
        },
        pin: {
            control: {
                type: 'select',
                options: pins,
            },
        },
        ...disableProps(propsToDisable),
    },
} as Meta;

type ButtonStoryProps = Omit<ButtonProps, 'children' | 'contentLeft' | 'contentRight'> & {
    enableIcon: boolean;
    isLoading: boolean;
};

export const Default: Story<ButtonStoryProps> = ({ enableIcon, text, ...rest }) => (
    <Button text={text} contentLeft={enableIcon ? <IconMic size="s" color="inherit" /> : undefined} {...rest} />
);

Default.args = {
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
};

// eslint-disable-next-line @typescript-eslint/camelcase
export const Action_Button: Story<ActionButtonProps> = (args) => (
    <ActionButton {...args}>
        <IconMic size="xs" color="inherit" />
    </ActionButton>
);

// eslint-disable-next-line @typescript-eslint/camelcase
Action_Button.args = {
    size: 'm',
    view: 'primary',
    pin: 'square-square',
    scaleOnInteraction: true,
    disabled: false,
    tabIndex: 0,
    onClick,
    onFocus,
    onBlur,
};

const ActionButtonPropsToDisable = ['text', 'tabIndex', 'square', 'focused', 'outlined', 'stretch'];

// eslint-disable-next-line @typescript-eslint/camelcase
Action_Button.argTypes = {
    ...disableProps(ActionButtonPropsToDisable),
};

// eslint-disable-next-line @typescript-eslint/camelcase
export const Loading_Button: Story<ButtonStoryProps> = ({ enableIcon, text, ...rest }) => {
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

// eslint-disable-next-line @typescript-eslint/camelcase
Loading_Button.args = {
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
};
