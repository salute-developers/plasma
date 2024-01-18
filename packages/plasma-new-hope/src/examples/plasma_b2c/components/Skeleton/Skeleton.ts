import { lineSkeletonConfig, textSkeleton } from '../../../../components/Skeleton';
import { component, mergeConfig } from '../../../../engines';

import { config as lineSkeletonCustomConfig } from './LineSkeleton.config';

export { RectSkeleton, withSkeleton } from '../../../../components/Skeleton';

const mergedLineSkeletonConfig = mergeConfig(lineSkeletonConfig, lineSkeletonCustomConfig);

export const LineSkeleton = component(mergedLineSkeletonConfig);

export const TextSkeleton = textSkeleton(LineSkeleton);
