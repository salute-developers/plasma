import type { HTMLAttributes } from 'react';

import type { Roundness, SkeletonGradientProps } from '../../../mixins';

type CustomSkeletonRectProps = {
    /**
     * Ширина скелетона
     */
    width: string | number;
    /**
     * Высота скелетона
     */
    height: string | number;
    /**
     * Значение градиента скелетона
     */
    customGradientColor?: string;
    /**
     * Скругленность
     */
    roundness?: Roundness;
};

export type StyledRectProps = {
    roundness: string;
    gradientColor: string;
    width: string;
    height: string;
};

export type RectSkeletonProps = HTMLAttributes<HTMLDivElement> & CustomSkeletonRectProps & SkeletonGradientProps;
