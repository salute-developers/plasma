import React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import { radiuses } from '@salutejs/plasma-new-hope/styled-components';

import { Button as BasicButton } from '../Button/Button';

import { LineSkeleton, TextSkeleton, RectSkeleton, withSkeleton } from './Skeleton';

type StoryLineSkeletonProps = ComponentProps<typeof LineSkeleton>;
type StoryTextSkeletonProps = ComponentProps<typeof TextSkeleton>;
type StoryRectSkeletonProps = ComponentProps<typeof RectSkeleton>;
type BasicButtonProps = ComponentProps<typeof BasicButton>;

const meta: Meta = {
    title: 'Content/Skeleton',
    decorators: [InSpacingDecorator],
};

export default meta;

const roundnessKeys = Object.keys(radiuses).map((r) => String(r));

const textSizes = [
    'bodyL',
    'bodyM',
    'bodyS',
    'bodyXS',
    'bodyXXS',
    'dsplL',
    'dsplM',
    'dsplS',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'textL',
    'textM',
    'textS',
    'textXS',
];

const Default: StoryObj = {
    argTypes: {
        roundness: {
            options: roundnessKeys,
            control: {
                type: 'select',
            },
        },
    },
    args: {
        roundness: '16',
        customGradientColor: '',
        lighter: false,
    },
};

export const Line: StoryObj<StoryLineSkeletonProps> = {
    argTypes: {
        size: {
            options: textSizes,
            control: {
                type: 'select',
            },
        },
        ...Default.argTypes,
    },
    args: {
        size: 'bodyM',
        ...Default.args,
    },
    render: (args) => <LineSkeleton {...args} />,
};

export const Text: StoryObj<StoryTextSkeletonProps> = {
    argTypes: {
        size: {
            options: textSizes,
            control: {
                type: 'select',
            },
        },
        ...Default.argTypes,
    },
    args: {
        size: 'textM',
        lines: 5,
        width: '',
        ...Default.args,
    },
    render: (args) => <TextSkeleton {...args} />,
};

export const Rect: StoryObj<StoryRectSkeletonProps> = {
    argTypes: {
        ...Default.argTypes,
    },
    args: {
        width: '4rem',
        height: '4rem',
        ...Default.args,
    },
    render: (args) => <RectSkeleton {...args} />,
};

const ButtonSkeleton = withSkeleton<BasicButtonProps>(BasicButton);

export const Button: StoryObj = {
    args: {
        skeleton: true,
    },
    render: (args) => <ButtonSkeleton view="default" text="test" {...args} />,
};
