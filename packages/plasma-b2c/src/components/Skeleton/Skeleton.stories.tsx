import React from 'react';
import { boolean, select, number } from '@storybook/addon-knobs';
import { typography } from '@salutejs/plasma-tokens-web';
import { radiuses, Roundness, TypographyTypes } from '@salutejs/plasma-core';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import { Meta } from '@storybook/react';

import { withSkeleton, WithSkeletonProps } from '../../hocs';
import { Button as BasicButton, ButtonProps } from '../Button';

import { LineSkeleton, TextSkeleton, RectSkeleton } from '.';

export default {
    title: 'Content/Skeleton',
    decorators: [InSpacingDecorator],
} as Meta;

const textSizes = Object.keys(typography) as TypographyTypes;

const roundnessKeys = Object.keys(radiuses).map((r) => String(r));
const useRoundnessKnob = () => Number(select('roundness', roundnessKeys, '16')) as Roundness;

const ButtonSkeleton = withSkeleton<ButtonProps & WithSkeletonProps>(BasicButton);

export const Line = () => <LineSkeleton size={select('size', textSizes, 'body1')} roundness={useRoundnessKnob()} />;

export const Text = () => (
    <TextSkeleton
        lines={number('lines', 4)}
        size={select('size', textSizes, 'body1')}
        roundness={useRoundnessKnob()}
        width={!boolean('Variable width', false) && 100}
    />
);

export const Rect = () => (
    <RectSkeleton
        width={`${number('width (rem)', 4)}rem`}
        height={`${number('height (rem)', 4)}rem`}
        roundness={useRoundnessKnob()}
    />
);

export const Button = () => <ButtonSkeleton text="test" skeleton />;
