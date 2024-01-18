import type { LineSkeletonProps } from '../LineSkeleton';

export type TextSkeletonProps = {
    /**
     * Количество линий скелета
     */
    lines: number;
    /**
     * Заданная ширина линий в процентах; по умолчанию подбирается случайная для заданного кол-ва линий
     */
    width?: string | number;
} & LineSkeletonProps;
