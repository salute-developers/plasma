import React, { useCallback, useState, useRef } from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { IconPlaceholder, disableProps, InSpacingDecorator } from '../../helpers';

import { Button, ButtonProps } from '.';

const views = ['primary', 'secondary', 'success', 'warning', 'critical', 'clear'];
const sizes = ['l', 'm', 's', 'xs', 'xxs'];

const contentTypes = ['Text', 'Text+Left', 'Text+Right', 'Left'];

const onClick = action('onClick');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const propsToDisable = [
    'theme',
    'as',
    'forwardedAs',
    'contentLeft',
    'contentRight',
    'shiftLeft',
    'shiftRight',
    'blur',
    'stretch',
    'square',
];

export default {
    title: 'Controls/Button',
    decorators: [InSpacingDecorator],
    argTypes: {
        contentType: {
            options: contentTypes,
            control: {
                type: 'select',
            },
        },
        text: {
            control: {
                type: 'text',
            },
        },
        size: {
            options: sizes,
            control: {
                type: 'inline-radio',
            },
        },
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        ...disableProps(propsToDisable),
    },
} as Meta;

type ButtonStoryProps = ButtonProps & { contentType: string; isLoading?: boolean };

const args: ButtonStoryProps = {
    view: 'primary',
    size: 'l',
    disabled: false,
    outlined: true,
    text: 'Label',
    contentType: 'Text',
    isLoading: false,
    onClick,
    onFocus,
    onBlur,
};

const iconSize = {
    l: 's',
    m: 's',
    s: 's',
    xs: 'xs',
    xxs: 'xs',
};

export const Default: Story<ButtonStoryProps> = ({ contentType, text, ...rest }) => (
    <Button
        autoFocus
        text={contentType !== 'Left' && text}
        contentLeft={
            (contentType === 'Left' || contentType === 'Text+Left') && <IconPlaceholder size={iconSize[rest.size]} />
        }
        contentRight={contentType === 'Text+Right' && <IconPlaceholder size={iconSize[rest.size]} />}
        {...rest}
    />
);

Default.args = args;

const argsLoading: ButtonStoryProps = {
    ...args,
    text: 'Start loading',
};

export const Loading: Story<ButtonStoryProps> = ({ contentType, text, isLoading, onClick: _onClick, ...rest }) => {
    const [loading, setLoading] = useState(isLoading);
    const [count, setCount] = useState(0);
    const intervalId = useRef<number | undefined>();

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
            text={contentType !== 'Left' && text}
            contentLeft={
                (contentType === 'Left' || contentType === 'Text+Left') && (
                    <IconPlaceholder size={iconSize[rest.size]} />
                )
            }
            contentRight={contentType === 'Text+Right' && <IconPlaceholder size={iconSize[rest.size]} />}
            isLoading={loading}
            loader={<div>Loading - {count}</div>}
            {...rest}
        />
    );
};

Loading.args = argsLoading;
