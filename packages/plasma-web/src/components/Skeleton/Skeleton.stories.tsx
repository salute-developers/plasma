import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import { typography } from '@salutejs/plasma-tokens-b2b';
import { radiuses, TypographyTypes } from '@salutejs/plasma-core';
import type { StoryObj, Meta } from '@storybook/react';

import { InSpacingDecorator } from '../../helpers';
import { withSkeleton, WithSkeletonProps } from '../../hocs';
import { Button as BasicButton, ButtonProps } from '../Button';

import { LineSkeleton, TextSkeleton, RectSkeleton, LineSkeletonProps, TextSkeletonProps, RectSkeletonProps } from '.';

const textSizes = (Object.keys(typography) as unknown) as TypographyTypes;

const roundnessKeys = Object.keys(radiuses).map((r) => String(r));

const ButtonSkeleton = withSkeleton<ButtonProps & WithSkeletonProps>(BasicButton);

const meta: Meta = {
    title: 'Content/Skeleton',
    decorators: [InSpacingDecorator],
    argTypes: {
        size: {
            options: textSizes,
            control: {
                type: 'select',
            },
        },
        roundness: {
            options: roundnessKeys,
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

export const Line: StoryObj<LineSkeletonProps> = {
    args: {
        size: 'body1',
        roundness: 16,
    },
    render: (props) => <LineSkeleton {...props} />,
};

export const Text: StoryObj<TextSkeletonProps> = {
    args: {
        lines: 4,
        size: 'body1',
        roundness: 16,
        width: 100,
    },
    render: (props) => <TextSkeleton {...props} />,
};

export const Rect: StoryObj<RectSkeletonProps> = {
    args: {
        roundness: 16,
        width: 4,
        height: 4,
    },
    render: ({ width, height, ...props }) => <RectSkeleton width={`${width}rem`} height={`${height}rem`} {...props} />,
};

const StoryButton = () => {
    const [skeleton, setSkeleton] = useState(false);

    return (
        <ButtonSkeleton
            type="button"
            text={skeleton ? 'Загрузка' : 'Нажмите'}
            skeleton={skeleton}
            aria-busy={skeleton}
            onClick={() => setSkeleton((prevValue) => !prevValue)}
        />
    );
};

export const Button: StoryObj<ComponentProps<typeof ButtonSkeleton>> = {
    render: (args) => <StoryButton {...args} />,
};
