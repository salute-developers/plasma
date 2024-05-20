import * as React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { disableProps } from '@salutejs/plasma-sb-utils';

import { IconMic } from '../../../../components/_Icon';
import { WithTheme } from '../../../_helpers';

import { Button } from './Button';

const views = ['default', 'accent', 'positive', 'warning', 'negative', 'dark', 'light'];
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

const meta: Meta<typeof Button> = {
    title: 'sds_engineer/Button',
    decorators: [WithTheme],
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
    },
};

export default meta;

type StoryPropsDefault = ComponentProps<typeof Button> & {
    enableContentLeft: boolean;
    enableContentRight: boolean;
};

const StoryDefault = ({ enableContentLeft, enableContentRight, size, ...rest }: StoryPropsDefault) => {
    const iconSize = size === 'xs' ? 'xs' : 's';

    return (
        <Button
            contentLeft={enableContentLeft ? <IconMic size={iconSize} color="inherit" /> : undefined}
            contentRight={enableContentRight ? <IconMic size={iconSize} color="inherit" /> : undefined}
            size={size}
            {...rest}
        />
    );
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        enableContentLeft: false,
        enableContentRight: false,
    },
    render: (args) => <StoryDefault {...args} />,
};

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
