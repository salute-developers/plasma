import type { HTMLAttributes } from 'react';

import type { Roundness, SkeletonGradientProps } from '../../../mixins';
import type { SkeletonSizeProps } from '../Skeleton.types';

type CustomSkeletonLineProps = {
    /**
     * Значение градиента скелетона
     */
    customGradientColor?: string;
    /**
     * Скругленность
     */
    roundness?: Roundness;
};

export type StyledVisibleLineProps = {
    roundness: string;
    gradientColor: string;
};

export type LineSkeletonProps = HTMLAttributes<HTMLDivElement> &
    SkeletonSizeProps &
    CustomSkeletonLineProps &
    SkeletonGradientProps;
