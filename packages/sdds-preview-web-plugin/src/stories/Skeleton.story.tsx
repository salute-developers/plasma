import {
    component,
    lineSkeletonConfig,
    mergeConfig,
    textSkeleton,
    RectSkeleton,
} from '@salutejs/plasma-new-hope/styled-components';

const LineSkeleton = component(mergeConfig(lineSkeletonConfig as any, {}));

export const TextSkeleton = textSkeleton(LineSkeleton as any);

const LineSkeletonDefault = {
    name: 'Default',
    args: [
        {
            name: 'roundness',
            value: '16',
        },
        {
            name: 'lighter',
            value: false,
        },
        // {
        //     name: 'customGradientColor',
        //     value: '',
        // },
        // {
        //     name: 'customFadeInColor',
        //     value: '',
        // },
        // {
        //     name: 'customFadeOutColor',
        //     value: '',
        // },
        {
            name: 'animationType',
            value: 'shimmer',
            items: [
                {
                    value: 'shimmer',
                    label: 'shimmer',
                },
                {
                    value: 'pulse',
                    label: 'pulse',
                },
            ],
        },
    ],
    render: function Story(args: any) {
        return (
            <div style={{ width: '20rem' }}>
                <LineSkeleton {...args} />
            </div>
        );
    },
};

const TextSkeletonDefault = {
    name: 'Text',
    args: [
        {
            name: 'roundness',
            value: '16',
        },
        {
            name: 'lighter',
            value: false,
        },
        {
            name: 'width',
            value: '',
        },
        {
            name: 'lines',
            value: 5,
        },
        {
            name: 'animationType',
            value: 'shimmer',
            items: [
                {
                    value: 'shimmer',
                    label: 'shimmer',
                },
                {
                    value: 'pulse',
                    label: 'pulse',
                },
            ],
        },
    ],
    render: function Story(args: any) {
        return (
            <div style={{ width: '20rem' }}>
                <TextSkeleton {...args} />
            </div>
        );
    },
};

const RectSkeletonDefault = {
    name: 'Rect',
    args: [
        {
            name: 'roundness',
            value: '16',
        },
        {
            name: 'lighter',
            value: false,
        },
        {
            name: 'width',
            value: '100px',
        },
        {
            name: 'height',
            value: '100px',
        },
        {
            name: 'animationType',
            value: 'shimmer',
            items: [
                {
                    value: 'shimmer',
                    label: 'shimmer',
                },
                {
                    value: 'pulse',
                    label: 'pulse',
                },
            ],
        },
    ],
    render: function Story(args: any) {
        const { size: _, ...rest } = args;

        return <RectSkeleton {...rest} />;
    },
};

export const SkeletonStories = [LineSkeletonDefault, TextSkeletonDefault, RectSkeletonDefault];
