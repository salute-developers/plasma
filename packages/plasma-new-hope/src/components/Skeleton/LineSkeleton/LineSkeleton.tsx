import React, { forwardRef } from 'react';

import type { RootProps } from '../../../engines';
import { getRoundness, getSkeletonColor } from '../../../mixins';

import { base as sizeCSS } from './variations/_size/base';
import { StyledVisibleLine, base } from './LineSkeleton.styles';
import type { LineSkeletonProps } from './LineSkeleton.types';

/**
 * Копонент-составляющая Скелетона
 */
export const lineSkeletonRoot = (Root: RootProps<HTMLDivElement, LineSkeletonProps>) =>
    forwardRef<HTMLDivElement, LineSkeletonProps>(
        ({ size, lighter, customGradientColor, roundness = '16', ...rest }, outerRootRef) => {
            const roundnessValue = getRoundness({ roundness });
            const skeletonGradientColor = { lighter, customGradientColor };

            return (
                <Root ref={outerRootRef} size={size} {...rest}>
                    <StyledVisibleLine roundness={roundnessValue} gradientColor={skeletonGradientColor} />
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
    },
    defaults: {},
};
