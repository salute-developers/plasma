import React, { useCallback, useState, useRef } from 'react';
import type { ComponentProps } from 'react';
import { action } from '@storybook/addon-actions';
import type { StoryObj, Meta } from '@storybook/react';

import { IconPlaceholder, disableProps, InSpacingDecorator } from '../../helpers';

import { Button } from '.';

type ButtonProps = ComponentProps<typeof Button>;

const views = ['accent', 'default', 'secondary', 'success', 'warning', 'critical', 'clear', 'dark', 'black', 'white'];
const sizes = ['l', 'm', 's', 'xs', 'xxs'];
const stretchingValues = ['auto', 'filled', 'fixed'];
const pinValues = [
    '',
    'square-square',
    'square-clear',
    'clear-square',
    'clear-clear',
    'clear-circle',
    'circle-clear',
    'circle-circle',
];
const contentPlacinValues = ['default', 'relaxed'];

const onClick = action('onClick');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const meta: Meta<ButtonProps> = {
    title: 'Controls/Button',
    decorators: [InSpacingDecorator],
    component: Button,
    args: {
        view: 'default',
        size: 'm',
        contentPlacing: 'default',
        stretching: 'auto',
        text: 'Hello',
        value: 'Value',
        disabled: false,
        focused: true,
        square: false,
        isLoading: false,
    },
    argTypes: {
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        size: {
            options: sizes,
            control: {
                type: 'select',
            },
        },
        value: {
            control: {
                type: 'text',
            },
        },
        contentPlacing: {
            options: contentPlacinValues,
            control: {
                type: 'select',
            },
        },
        stretching: {
            options: stretchingValues,
            control: {
                type: 'select',
            },
        },
        pin: {
            options: pinValues,
            control: {
                type: 'select',
            },
            table: { defaultValue: { summary: 'bottom' } },
        },
        ...disableProps([
            'theme',
            'loader',
            'onClick',
            'onFocus',
            'onBlur',
            'outlined',
            'contentLeft',
            'contentRight',
            'shiftLeft',
            'shiftRight',
            'stretch',
            'as',
            'forwardedAs',
        ]),
    },
};

export default meta;

type StoryPropsDefault = ComponentProps<typeof Button> & {
    enableContentLeft: boolean;
    enableContentRight: boolean;
};

const StoryDefault = ({ enableContentLeft, enableContentRight, size, ...rest }: StoryPropsDefault) => {
    const iconSize = size === 'xs' || size === 'xxs' ? 'xs' : 's';

    return (
        <Button
            contentLeft={enableContentLeft ? <IconPlaceholder size={iconSize} /> : undefined}
            contentRight={enableContentRight ? <IconPlaceholder size={iconSize} /> : undefined}
            size={size}
            onClick={onClick}
            onFocus={onFocus}
            onBlur={onBlur}
            {...rest}
        />
    );
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        enableContentLeft: false,
        enableContentRight: false,
        value: '',
    },
    argTypes: {
        ...disableProps(['value']),
    },
    render: (args) => <StoryDefault {...args} />,
};

export const WithValue: StoryObj<StoryPropsDefault> = {
    args: {
        enableContentLeft: false,
    },
    render: (args) => <StoryDefault {...args} />,
};

export const Anchor: StoryObj<StoryPropsDefault> = {
    args: {
        as: 'a',
        enableContentLeft: false,
        enableContentRight: false,
        value: '',
    },
    argTypes: {
        ...disableProps(['value']),
    },
    render: (args) => <StoryDefault {...args} />,
};

const StoryLoading = ({
    enableContentLeft,
    enableContentRight,
    size,
    isLoading,
    onClick: _onClick,
    ...rest
}: StoryPropsDefault) => {
    const [loading, setLoading] = useState(isLoading);
    const [count, setCount] = useState(0);
    const intervalId = useRef<number | undefined>();

    const iconSize = size === 'xs' || size === 'xxs' ? 'xs' : 's';

    const onClickHandle = useCallback(
        (event) => {
            event.persist();

            _onClick?.(event);

            setLoading(true);

            intervalId.current = window.setInterval(() => {
                setCount((prev) => {
                    return prev + 1;
                });
            }, 1_000);
        },
        [_onClick],
    );

    if (count === 6) {
        setLoading(false);
        setCount(0);
        window.clearInterval(intervalId.current);
    }

    return (
        <Button
            autoFocus
            onClick={onClickHandle}
            contentLeft={enableContentLeft ? <IconPlaceholder size={iconSize} /> : undefined}
            contentRight={enableContentRight ? <IconPlaceholder size={iconSize} /> : undefined}
            isLoading={loading}
            size={size}
            loader={<div>Loading - {count}</div>}
            {...rest}
        />
    );
};

export const Loading: StoryObj<StoryPropsDefault> = {
    args: {
        ...Default.args,
        text: 'Start loading',
        value: '',
    },
    argTypes: {
        ...disableProps(['text', 'value']),
    },
    render: (args) => <StoryLoading {...args} />,
};
