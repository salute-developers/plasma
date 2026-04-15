import {
    component,
    mergeConfig,
    lineSkeletonConfig,
    textSkeleton,
    RectSkeleton,
    withSkeleton,
} from '@salutejs/plasma-new-hope/emotion';

import { config as lineSkeletonCustomConfig } from './LineSkeleton.config';

const mergedLineSkeletonConfig = mergeConfig(lineSkeletonConfig, lineSkeletonCustomConfig);

export const LineSkeleton = component(mergedLineSkeletonConfig);

export const TextSkeleton = textSkeleton(LineSkeleton);

export { RectSkeleton, withSkeleton };
