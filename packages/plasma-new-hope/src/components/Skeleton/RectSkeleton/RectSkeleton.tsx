import React, { forwardRef } from 'react';

import { getRoundness, getSkeletonColor } from '../../../mixins';
import { classes } from '../tokens';

import { StyledRectSkeleton } from './RectSkeleton.styles';
import type { RectSkeletonProps } from './RectSkeleton.types';

/**
 * Компонент для создания прямоугольного плейсхолдера.
 */
export const RectSkeleton = forwardRef<HTMLDivElement, RectSkeletonProps>(
    (
        {
            width,
            height,
            lighter,
            customGradientColor,
            roundness = '16',
            animationType = 'shimmer',
            customFadeInColor,
            customFadeOutColor,
            ...rest
        },
        outerRootRef,
    ) => {
        const animationClass = classes[`${animationType}Animation` as keyof typeof classes];

        const roundnessValue = getRoundness({ roundness });
        const skeletonGradientColor = getSkeletonColor({ lighter, customGradientColor });

        return (
            <StyledRectSkeleton
                ref={outerRootRef}
                className={animationClass}
                roundness={roundnessValue}
                gradientColor={skeletonGradientColor}
                customFadeInColor={customFadeInColor}
                customFadeOutColor={customFadeOutColor}
                width={Number.isNaN(Number(width)) ? String(width) : `${width}px`}
                height={Number.isNaN(Number(height)) ? String(height) : `${height}px`}
                {...rest}
            />
        );
    },
);
