import React, { useCallback, useState, useRef } from 'react';
import type { ComponentProps } from 'react';
import { action } from '@storybook/addon-actions';
import type { StoryObj, Meta } from '@storybook/react';
import { IconMic } from '@salutejs/plasma-icons';
import { disableProps, getConfigVariations, FixturesButton } from '@salutejs/plasma-sb-utils';
import type { ButtonStoryDefaultProps } from '@salutejs/plasma-sb-utils';

import { config } from './Button.config';

import { Button } from '.';

type ButtonProps = ComponentProps<typeof Button>;

const { views, sizes } = getConfigVariations(config);

const onClick = action('onClick');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const meta: Meta<ButtonProps> = {
    ...FixturesButton.meta,
    component: Button,
    argTypes: {
        ...FixturesButton.meta.argTypes,
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
    },
};

export default meta;

type StoryPropsDefault = ButtonStoryDefaultProps<typeof Button>;

const StoryDefault = ({ enableContentLeft, enableContentRight, size, ...rest }: StoryPropsDefault) => {
    const iconSize = size === 'xs' || size === 'xxs' ? 'xs' : 's';

    return (
        <Button
            contentLeft={enableContentLeft && size !== 'xxs' ? <IconMic size={iconSize} color="inherit" /> : undefined}
            contentRight={
                enableContentRight && size !== 'xxs' ? <IconMic size={iconSize} color="inherit" /> : undefined
            }
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
    argTypes: {
        ...disableProps(['enableContentRight']),
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
            contentLeft={enableContentLeft && size !== 'xxs' ? <IconMic size={iconSize} color="inherit" /> : undefined}
            contentRight={
                enableContentRight && size !== 'xxs' ? <IconMic size={iconSize} color="inherit" /> : undefined
            }
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
