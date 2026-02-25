import type { Meta } from '@storybook/react-vite';
import { getSkeletonStories } from '@salutejs/plasma-sb-utils';
import { radiuses } from '@salutejs/plasma-core';
import { lineSkeletonConfig, mergeConfig, withSkeleton } from '@salutejs/plasma-new-hope/styled-components';

import { Button as BasicButton } from '../Button/Button';

import { config as lineSkeletonCustomConfig } from './LineSkeleton.config';
import { LineSkeleton, TextSkeleton, RectSkeleton } from './Skeleton';

const mergedLineSkeletonConfig = mergeConfig(lineSkeletonConfig, lineSkeletonCustomConfig);

const { meta: META, Line, Text, Rect, Button } = getSkeletonStories({
    components: {
        LineSkeleton,
        TextSkeleton,
        RectSkeleton,
        withSkeleton,
        Button: BasicButton,
    },
    lineSkeletonConfig: mergedLineSkeletonConfig,
    radiuses,
});

const meta: Meta = {
    ...META,
    title: 'Data Display/Skeleton',
};

export default meta;

export { Line, Text, Rect, Button };
