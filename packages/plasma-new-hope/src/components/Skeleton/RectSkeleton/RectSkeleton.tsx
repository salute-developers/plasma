import React, { forwardRef } from 'react';

import { getRoundness, getSkeletonColor } from '../../../mixins';

import { StyledRectSkeleton } from './RectSkeleton.styles';
import type { RectSkeletonProps } from './RectSkeleton.types';

/**
 * Компонент для создания прямоугольного плейсхолдера.
 */
export const RectSkeleton = forwardRef<HTMLDivElement, RectSkeletonProps>(
    ({ width, height, lighter, customGradientColor, roundness = '16', ...rest }, outerRootRef) => {
        const roundnessValue = getRoundness({ roundness });
        const skeletonGradientColor = getSkeletonColor({ lighter, customGradientColor });

        return (
            <StyledRectSkeleton
                ref={outerRootRef}
                roundness={roundnessValue}
                gradientColor={skeletonGradientColor}
                width={Number.isNaN(Number(width)) ? String(width) : `${width}px`}
                height={Number.isNaN(Number(height)) ? String(height) : `${height}px`}
                {...rest}
            />
        );
    },
);
