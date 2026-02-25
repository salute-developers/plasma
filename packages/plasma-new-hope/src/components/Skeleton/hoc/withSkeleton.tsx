import React from 'react';
import type { FC, HTMLAttributes } from 'react';
import { styled } from '@linaria/react';
import cls from 'classnames';
import { applySkeletonPulseGradient, applySkeletonShimmerGradient, getSkeletonColor } from 'src/mixins';

import { classes, tokens } from '../tokens';

export interface WithSkeletonProps extends HTMLAttributes<HTMLElement> {
    /**
     * Применить скелетон
     */
    skeleton?: boolean;
    /**
     * Тип анимации
     * @default 'shimmer'
     */
    animationType?: 'shimmer' | 'pulse';
}

/**
 * Делает компонент скелетоном - у него заменяется фоновый цвет,
 * добавляется градиент и текст становится на 100% прозрачным.
 */

export const withSkeleton = <P extends WithSkeletonProps>(Component: FC<P>) => ({
    skeleton,
    animationType = 'shimmer',
    className,
    ...props
}: P & WithSkeletonProps) => {
    const animationClass = classes[`${animationType}Animation` as keyof typeof classes];
    const skeletonClass = skeleton ? 'apply-skeleton-gradient' : undefined;
    const skeletonGradientColor = getSkeletonColor({ lighter: true });

    const Wrapper = styled.div`
        display: contents;

        .apply-skeleton-gradient {
            &.${classes.shimmerAnimation} {
                ${applySkeletonShimmerGradient(skeletonGradientColor)};
            }

            &.${classes.pulseAnimation} {
                ${applySkeletonPulseGradient(tokens.fadeInColor, tokens.fadeOutColor)};
            }
        }
    `;

    const componentProps = {
        ...props,
        className: cls(skeletonClass, animationClass, className),
    } as P;

    return (
        <>
            <Wrapper>
                <Component {...componentProps} />
            </Wrapper>
        </>
    );
};
