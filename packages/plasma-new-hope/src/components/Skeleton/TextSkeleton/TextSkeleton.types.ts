import type { LineSkeletonProps } from '../LineSkeleton';
import type { SkeletonBaseProps } from '../Skeleton.types';

export type TextSkeletonBaseProps = {
    /**
     * Количество линий скелета
     */
    lines: number;
    /**
     * Заданная ширина линий в процентах; по умолчанию подбирается случайная для заданного кол-ва линий
     */
    width?: string | number;
} & SkeletonBaseProps;

export type TextSkeletonProps = TextSkeletonBaseProps & LineSkeletonProps;
