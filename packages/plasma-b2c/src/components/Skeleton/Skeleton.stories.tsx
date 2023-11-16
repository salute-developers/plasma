import React from 'react';
import { boolean, select, number } from '@storybook/addon-knobs';
import { typography } from '@salutejs/plasma-tokens-web';
import { radiuses, Roundness, TypographyTypes } from '@salutejs/plasma-core';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import type { Meta, StoryObj } from '@storybook/react';

import { withSkeleton, WithSkeletonProps } from '../../hocs';
import { Button as BasicButton, ButtonProps } from '../Button';

import { LineSkeleton, TextSkeleton, RectSkeleton } from '.';

const meta: Meta = {
    title: 'Content/Skeleton',
    decorators: [InSpacingDecorator],
};

export default meta;

const textSizes = Object.keys(typography) as TypographyTypes;

const roundnessKeys = Object.keys(radiuses).map((r) => String(r));

const useRoundnessKnob = () => Number(select('roundness', roundnessKeys, '16')) as Roundness;

const ButtonSkeleton = withSkeleton<ButtonProps & WithSkeletonProps>(BasicButton);

const StoryLineSkeleton = () => {
    return <LineSkeleton size={select('size', textSizes, 'body1')} roundness={useRoundnessKnob()} />;
};

export const Line: StoryObj = {
    render: () => <StoryLineSkeleton />,
};

const StoryTextSkeleton = () => (
    <TextSkeleton
        lines={number('lines', 4)}
        size={select('size', textSizes, 'body1')}
        roundness={useRoundnessKnob()}
        width={!boolean('Variable width', false) && 100}
    />
);

export const Text: StoryObj = {
    render: () => <StoryTextSkeleton />,
};

const StoryRectSkeleton = () => (
    <RectSkeleton
        width={`${number('width (rem)', 4)}rem`}
        height={`${number('height (rem)', 4)}rem`}
        roundness={useRoundnessKnob()}
    />
);

export const Rect: StoryObj = {
    render: () => <StoryRectSkeleton />,
};

export const Button: StoryObj = {
    render: () => <ButtonSkeleton text="test" skeleton />,
};
