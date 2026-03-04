import React from 'react';

const animationTypeOptions = ['shimmer', 'pulse'];

const baseSkeletonArgTypes = {
    animationType: {
        options: animationTypeOptions,
        control: { type: 'select' },
    },
    customGradientColor: {
        if: { arg: 'animationType', eq: 'shimmer' },
    },
    customFadeInColor: {
        if: { arg: 'animationType', eq: 'pulse' },
    },
    customFadeOutColor: {
        if: { arg: 'animationType', eq: 'pulse' },
    },
};

const baseSkeletonArgs = {
    roundness: '16',
    customGradientColor: '',
    customFadeInColor: '',
    customFadeOutColor: '',
    animationType: 'shimmer',
};

type SkeletonConfig = {
    views: string[];
    sizes: string[];
    defaults?: { size?: string; view?: string };
};

export const createLineStory = (LineSkeleton: any, config: SkeletonConfig, roundnessKeys: string[]) => ({
    argTypes: {
        size: { options: config.sizes, control: { type: 'select' } },
        view: { options: config.views, control: { type: 'select' } },
        roundness: { options: roundnessKeys, control: { type: 'select' } },
        ...baseSkeletonArgTypes,
    },
    args: {
        size: config.defaults?.size || 'bodyM',
        view: config.defaults?.view || 'default',
        ...baseSkeletonArgs,
    },
    render: (args: any) => <LineSkeleton {...args} />,
});

export const createTextStory = (TextSkeleton: any, config: SkeletonConfig, roundnessKeys: string[]) => ({
    argTypes: {
        size: { options: config.sizes, control: { type: 'select' } },
        view: { options: config.views, control: { type: 'select' } },
        roundness: { options: roundnessKeys, control: { type: 'select' } },
        ...baseSkeletonArgTypes,
    },
    args: {
        size: config.defaults?.size || 'bodyM',
        lines: 5,
        width: '',
        ...baseSkeletonArgs,
    },
    render: (args: any) => <TextSkeleton {...args} />,
});

export const createRectStory = (RectSkeleton: any, roundnessKeys: string[]) => ({
    argTypes: {
        roundness: { options: roundnessKeys, control: { type: 'select' } },
        ...baseSkeletonArgTypes,
    },
    args: {
        width: '4rem',
        height: '4rem',
        lighter: false,
        ...baseSkeletonArgs,
    },
    render: (args: any) => <RectSkeleton {...args} />,
});

export const createButtonStory = (withSkeleton: any, Button: any) => {
    const ButtonSkeleton = withSkeleton(Button);

    return {
        args: {
            skeleton: true,
            animationType: 'shimmer',
        },
        argTypes: {
            animationType: {
                options: animationTypeOptions,
                control: { type: 'select' },
            },
        },
        render: (args: any) => <ButtonSkeleton view="default" text="test" {...args} />,
    };
};
