import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { radiuses, Roundness } from '@salutejs/plasma-core';

import { InSpacingDecorator } from '../../../src/helpers';

import { RectSkeleton } from '.';

const meta: Meta = {
    title: 'Linaria/Skeleton',
    decorators: [InSpacingDecorator],
};

export default meta;

const roundnessKeys = Object.keys(radiuses).map((r) => Number(r));

export const Rect: StoryObj<any> = {
    argTypes: {
        width: {
            control: {
                type: 'number',
            },
        },
        height: {
            control: {
                type: 'number',
            },
        },
        roundness: {
            options: roundnessKeys,
            control: {
                type: 'select',
            },
        },
    },
    args: {
        width: 4,
        height: 4,
        roundness: 16 as Roundness,
    },
    render: ({ width, height, ...rest }: any) => (
        <RectSkeleton width={`${width}rem`} height={`${height}rem`} {...rest} />
    ),
};
