import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createLineStory, createTextStory, createRectStory, createButtonStory } from './stories';

type GetSkeletonStoriesProps = {
    components: {
        LineSkeleton: any;
        TextSkeleton: any;
        RectSkeleton: any;
        withSkeleton: any;
        Button: any;
    };
    lineSkeletonConfig: any;
    radiuses: Record<string | number, any>;
    title?: string;
};

export const getSkeletonStories = ({ components, lineSkeletonConfig, radiuses, title }: GetSkeletonStoriesProps) => {
    const { LineSkeleton, TextSkeleton, RectSkeleton, withSkeleton, Button } = components;

    const roundnessKeys = Object.keys(radiuses).map((r) => String(r));
    const { views, sizes } = getConfigVariations(lineSkeletonConfig);
    const config = { views, sizes, defaults: lineSkeletonConfig.defaults };

    const meta = createMeta({ title });

    const Line = createLineStory(LineSkeleton, config, roundnessKeys);
    const Text = createTextStory(TextSkeleton, config, roundnessKeys);
    const Rect = createRectStory(RectSkeleton, roundnessKeys);
    const ButtonStory = createButtonStory(withSkeleton, Button);

    return {
        meta,
        Line,
        Text,
        Rect,
        Button: ButtonStory,
    };
};
