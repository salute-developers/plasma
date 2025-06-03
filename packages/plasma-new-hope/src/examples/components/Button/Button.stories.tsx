import * as React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { disableProps, getConfigVariations } from '@salutejs/plasma-sb-utils';

import { IconMic } from '../../../components/_Icon';
import { WithTheme } from '../../_helpers';

import { Button } from './Button';
import { config } from './Button.config';

const { views, sizes } = getConfigVariations(config);

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
const contentPlacingValues = ['default', 'relaxed'];
const sizeMap = {
    xxs: '0.75rem', // 12px
    xs: '1rem', // 16px
    s: '1.5rem', // 24px
    m: '1.5rem', // 36px
    l: '1.5rem', // 44px
    xl: '1.5rem', // 56px
    xxl: '1.5rem', // 100px
};

const meta: Meta<typeof Button> = {
    title: 'Data Entry/Button',
    decorators: [WithTheme],
    component: Button,
    args: {
        view: 'default',
        size: 'm',
        contentPlacing: 'default',
        stretching: 'auto',
        text: 'Hello',
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
        ...disableProps(['focused', 'pin']),
    },
};

export default meta;

type StoryPropsDefault = ComponentProps<typeof Button> & {
    enableContentLeft: boolean;
    enableContentRight: boolean;
};

const StoryDefault = ({ enableContentLeft, enableContentRight, size, ...rest }: StoryPropsDefault) => {
    return (
        <Button
            contentLeft={enableContentLeft ? <IconMic sizeCustomValue={sizeMap[size]} color="inherit" /> : undefined}
            contentRight={enableContentRight ? <IconMic sizeCustomValue={sizeMap[size]} color="inherit" /> : undefined}
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

export const WithValue: StoryObj<StoryPropsDefault> = {
    args: {
        value: 'Value',
        enableContentLeft: false,
    },
    argTypes: {
        ...disableProps(['enableContentRight']),
    },
    render: (args) => <StoryDefault {...args} />,
};

export const AccessibilityWithChildren: StoryObj<ComponentProps<typeof Button>> = {
    argTypes: { ...disableProps(['text']) },
    render: (props: ComponentProps<typeof Button>) => {
        const args = { ...props, text: undefined };

        return (
            <Button {...args}>
                <IconMic color="inherit" sizeCustomValue={sizeMap[args.size]} />
                <span>Включить микрофон</span>
            </Button>
        );
    },
};
