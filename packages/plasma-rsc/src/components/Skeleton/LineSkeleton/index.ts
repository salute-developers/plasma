import { component, mergeConfig } from '../../../engines';

import { config } from './LineSkeleton.config';
import { lineSkeletonConfig } from './LineSkeleton';

export type { LineSkeletonProps } from './LineSkeleton.types';

const mergedConfig = mergeConfig(lineSkeletonConfig, config);
const LineSkeletonComponent = component(mergedConfig);

export const LineSkeleton = LineSkeletonComponent;
