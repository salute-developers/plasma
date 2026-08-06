import type { HTMLAttributes } from 'react';

import type { SkeletonGradientProps } from '../../../mixins';
import type { SkeletonBaseProps, SkeletonSizeProps } from '../Skeleton.types';

type CustomSkeletonLineProps = SkeletonBaseProps;

export type StyledVisibleLineProps = {
    roundness: string;
    gradientColor?: string;
    customFadeInColor?: string;
    customFadeOutColor?: string;
    animationDuration?: number;
};

export type LineSkeletonProps = HTMLAttributes<HTMLDivElement> &
    SkeletonSizeProps &
    CustomSkeletonLineProps &
    SkeletonGradientProps;
