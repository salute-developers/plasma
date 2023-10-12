import React, { useState, useCallback, useRef } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IconPlaceholder, disableProps, InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { Button } from '.';
import type { ButtonProps } from '.';

type StoryButtonProps = ButtonProps & { contentType: string; isLoading: boolean };

const views = ['primary', 'secondary', 'success', 'critical'];

const sizes = ['l', 'm', 's', 'xs', 'xxs'];

const pins = [
    'square-square',
    'circle-circle',
    'circle-clear',
    'clear-circle',
    'clear-clear',
    'square-clear',
    'clear-square',
];

const contentTypes = ['Text', 'Text+Left', 'Text+Right', 'Left'];

const onClick = action('onClick');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const iconSize = {
    l: 's',
    m: 's',
    s: 's',
    xs: 'xs',
    xxs: 'xs',
};

const meta: Meta<StoryButtonProps> = {
    title: 'Controls/Button',
    decorators: [InSpacingDecorator],
    argTypes: {
        contentType: {
            options: contentTypes,
            control: {
                type: 'select',
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
        pin: {
            options: pins,
            control: {
                type: 'select',
            },
        },
        ...disableProps([
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
            'onClick',
            'onFocus',
            'onBlur',
        ]),
    },
};

export default meta;

type Story = StoryObj<StoryButtonProps>;

const StoryBaseButton: Story = {
    args: {
        view: 'primary',
        size: 'l',
        pin: 'square-square',
        disabled: false,
        outlined: true,
        focused: false,
        text: 'Label',
        contentType: 'Text',
        isLoading: false,
        onClick,
        onFocus,
        onBlur,
    },
};

export const Default: Story = {
    ...StoryBaseButton,
    render: ({ contentType, text, ...rest }) => {
        return (
            <Button
                text={contentType !== 'Left' && text}
                contentLeft={
                    (contentType === 'Left' || contentType === 'Text+Left') && (
                        <IconPlaceholder size={iconSize[rest.size]} />
                    )
                }
                contentRight={contentType === 'Text+Right' && <IconPlaceholder size={iconSize[rest.size]} />}
                {...rest}
            />
        );
    },
};

export const Anchor: Story = {
    ...StoryBaseButton,
    render: ({ contentType, text, ...rest }) => (
        <Button
            as="a"
            text={contentType !== 'Left' && text}
            contentLeft={
                (contentType === 'Left' || contentType === 'Text+Left') && (
                    <IconPlaceholder size={iconSize[rest.size]} />
                )
            }
            contentRight={contentType === 'Text+Right' && <IconPlaceholder size={iconSize[rest.size]} />}
            {...rest}
        />
    ),
};

const StoryButtonLoading = ({ contentType, isLoading, text, onClick: _onClick, ...rest }: StoryButtonProps) => {
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

export const Loading: Story = {
    args: {
        view: 'primary',
        size: 'l',
        pin: 'square-square',
        disabled: false,
        outlined: true,
        focused: false,
        contentType: 'Text',
        text: 'Start loading',
        isLoading: false,
        onClick,
        onFocus,
        onBlur,
    },
    render: (args) => <StoryButtonLoading {...args} />,
};
