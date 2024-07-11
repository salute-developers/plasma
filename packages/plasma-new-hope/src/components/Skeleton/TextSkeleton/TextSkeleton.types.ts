import type { LineSkeletonProps } from '../LineSkeleton';

export type TextSkeletonBaseProps = {
    /**
     * Количество линий скелета
     */
    lines: number;
    /**
     * Заданная ширина линий в процентах; по умолчанию подбирается случайная для заданного кол-ва линий
     */
    width?: string | number;
};

export type TextSkeletonProps = TextSkeletonBaseProps & LineSkeletonProps;
