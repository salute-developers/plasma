import React, { useState, useRef, useCallback } from 'react';
import { action } from '@storybook/addon-actions';
import type { StoryObj, Meta } from '@storybook/react';
import { IconMic } from '@salutejs/plasma-icons';

import { disableProps, getConfigVariations, InSpacingDecorator } from '../../index';

import { stretchingValues, pinValues, contentPlacingValues } from './fixtures';

export const getButtonStories = ({
    component: Button,
    config,
    disablePropsList = [],
}: {
    component: any;
    config: any;
    disablePropsList?: string[];
}) => {
    const { views, sizes } = getConfigVariations(config);

    const onClick = action('onClick');
    const onFocus = action('onFocus');
    const onBlur = action('onBlur');

    // INFO: На уровне конечной библиотеки все равно нужно указать свойство title
    const meta: Meta<any> = {
        title: 'Data Entry/Button',
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
                options: contentPlacingValues,
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
                'pin',
                'focused',
                ...disablePropsList,
            ]),
        },
    };

    const StoryDefault = ({ enableContentLeft, enableContentRight, size, ...rest }: any) => {
        const iconSize = size === 'xs' || size === 'xxs' ? 'xs' : 's';

        return (
            <Button
                contentLeft={
                    enableContentLeft && size !== 'xxs' ? <IconMic size={iconSize} color="inherit" /> : undefined
                }
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

    const ButtonStoryDefault: StoryObj<any> = {
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

    const WithValue: StoryObj<any> = {
        args: {
            enableContentLeft: false,
        },
        argTypes: {
            ...disableProps(['enableContentRight']),
        },
        render: (args) => <StoryDefault {...args} />,
    };

    const Anchor: StoryObj<any> = {
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
    }: any) => {
        const [loading, setLoading] = useState(isLoading);

        const [count, setCount] = useState(0);

        const intervalId = useRef<number | undefined>();

        const iconSize = size === 'xs' || size === 'xxs' ? 'xs' : 's';

        const onClickHandle = useCallback(
            (event: any) => {
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
                contentLeft={
                    enableContentLeft && size !== 'xxs' ? <IconMic size={iconSize} color="inherit" /> : undefined
                }
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

    const Loading: StoryObj<any> = {
        args: {
            ...ButtonStoryDefault.args,
            text: 'Start loading',
            value: '',
        },
        argTypes: {
            ...disableProps(['text', 'value']),
        },
        render: (args) => <StoryLoading {...args} />,
    };

    return {
        meta,
        ButtonStoryDefault,
        WithValue,
        Anchor,
        Loading,
    };
};
