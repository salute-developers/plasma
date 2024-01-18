import React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme, argTypesFromConfig } from '../../../_helpers';
import { mergeConfig } from '../../../../engines';
import { lineSkeletonConfig } from '../../../../components/Skeleton';
import type { WithSkeletonProps } from '../../../../components/Skeleton';
import { radiuses } from '../../../../mixins';
import { Button as BasicButton } from '../Button/Button';

import { config as lineSkeletonCustomConfig } from './LineSkeleton.config';
import { LineSkeleton, TextSkeleton, RectSkeleton, withSkeleton } from './Skeleton';

type StoryLineSkeletonProps = ComponentProps<typeof LineSkeleton>;
type StoryTextSkeletonProps = ComponentProps<typeof TextSkeleton>;
type StoryRectSkeletonProps = ComponentProps<typeof RectSkeleton>;
type BasicButtonProps = ComponentProps<typeof BasicButton>;

const meta: Meta = {
    title: 'sds_engineer/Skeleton',
    decorators: [WithTheme],
};

export default meta;

const roundnessKeys = Object.keys(radiuses).map((r) => String(r));

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
        ...argTypesFromConfig(mergeConfig(lineSkeletonConfig, lineSkeletonCustomConfig)),
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
        ...argTypesFromConfig(mergeConfig(lineSkeletonConfig, lineSkeletonCustomConfig)),
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
    render: (args) => <ButtonSkeleton view="primary" text="test" {...args} />,
};
