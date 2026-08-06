import type { HTMLAttributes } from 'react';
import type { SkeletonGradientProps } from 'src/mixins';

import type { SkeletonBaseProps } from '../Skeleton.types';

type CustomSkeletonRectProps = {
    /**
     * Ширина скелетона
     */
    width: string | number;
    /**
     * Высота скелетона
     */
    height: string | number;
} & SkeletonBaseProps;

export type StyledRectProps = {
    roundness: string;
    gradientColor: string;
    width: string;
    height: string;
    customFadeInColor?: string;
    customFadeOutColor?: string;
    animationDuration?: number;
};

export type RectSkeletonProps = HTMLAttributes<HTMLDivElement> & CustomSkeletonRectProps & SkeletonGradientProps;
