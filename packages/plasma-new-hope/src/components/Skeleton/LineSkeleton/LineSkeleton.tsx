import React, { forwardRef } from 'react';

import type { RootProps } from '../../../engines';
import { getRoundness, getSkeletonColor } from '../../../mixins';
import { classes } from '../tokens';

import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { StyledVisibleLine, base } from './LineSkeleton.styles';
import type { LineSkeletonProps } from './LineSkeleton.types';

/**
 * Копонент-составляющая Скелетона
 */
export const lineSkeletonRoot = (Root: RootProps<HTMLDivElement, LineSkeletonProps>) =>
    forwardRef<HTMLDivElement, LineSkeletonProps>(
        (
            {
                size,
                lighter,
                customGradientColor,
                roundness = '16',
                animationType = 'shimmer',
                customFadeInColor,
                customFadeOutColor,
                view,
                ...rest
            },
            outerRootRef,
        ) => {
            const animationClass = classes[`${animationType}Animation` as keyof typeof classes];

            const roundnessValue = getRoundness({ roundness });
            const skeletonGradientColor = getSkeletonColor({ lighter, customGradientColor });

            return (
                <Root ref={outerRootRef} size={size} view={view} {...rest}>
                    <StyledVisibleLine
                        className={animationClass}
                        roundness={roundnessValue}
                        gradientColor={skeletonGradientColor}
                        customFadeInColor={customFadeInColor}
                        customFadeOutColor={customFadeOutColor}
                    />
                </Root>
            );
        },
    );

export const lineSkeletonConfig = {
    name: 'LineSkeleton',
    tag: 'div',
    layout: lineSkeletonRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
        view: {
            css: viewCSS,
        },
    },
    defaults: {},
};
