import React from 'react';
import type { ComponentProps } from 'react';
import { radiuses } from '@salutejs/plasma-core';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import type { Meta, StoryObj } from '@storybook/react';

import { Button as BasicButton } from '../Button/Button';
import { withSkeleton } from '../../hocs';
import type { WithSkeletonProps } from '../../hocs';

import { LineSkeleton, TextSkeleton, RectSkeleton } from '.';

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
    'display1',
    'display2',
    'display3',
    'headline1',
    'headline2',
    'headline3',
    'headline4',
    'body1',
    'body2',
    'body3',
    'paragraph1',
    'paragraph2',
    'footnote1',
    'footnote2',
    'button1',
    'button2',
    'caption',
    'underline',
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
        size: 'body1',
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
        size: 'body1',
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

const ButtonSkeleton = withSkeleton<BasicButtonProps & WithSkeletonProps>(BasicButton);

export const Button: StoryObj = {
    args: {
        skeleton: true,
    },
    render: (args) => <ButtonSkeleton text="test" {...args} />,
};
