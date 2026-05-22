import React from 'react';
import type { ComponentType, CSSProperties, RefAttributes } from 'react';
import cls from 'classnames';
import { getSkeletonColor } from 'src/mixins';

import { classes, privateTokens, tokens } from '../tokens';

import { WithSkeletonProps } from './withSkeleton.types';
import { Wrapper } from './withSkeleton.styles';

/**
 * Делает компонент скелетоном - у него заменяется фоновый цвет,
 * добавляется градиент и текст становится на 100% прозрачным.
 */

export const withSkeleton = <P extends WithSkeletonProps, E extends Element = Element>(
    Component: ComponentType<P & RefAttributes<E>>,
) =>
    React.forwardRef<E, P & WithSkeletonProps>(
        ({ skeleton, animationConfig, animationType, className, ...props }, ref) => {
            const effectiveType = animationConfig?.type ?? animationType ?? 'shimmer';

            const effectiveLighter = animationConfig?.type === 'shimmer' ? animationConfig.lighter ?? true : true;
            const effectiveGradientColor =
                animationConfig?.type === 'shimmer' ? animationConfig.customGradientColor : undefined;
            const effectiveFadeInColor =
                animationConfig?.type === 'pulse' ? animationConfig.customFadeInColor : undefined;
            const effectiveFadeOutColor =
                animationConfig?.type === 'pulse' ? animationConfig.customFadeOutColor : undefined;

            const animationClass = classes[`${effectiveType}Animation` as keyof typeof classes];
            const skeletonClass = skeleton ? 'apply-skeleton-gradient' : undefined;
            const skeletonGradientColor = getSkeletonColor({
                lighter: effectiveLighter,
                customGradientColor: effectiveGradientColor,
            });

            const wrapperStyle = {
                [privateTokens.lineSkeletonGradient]: skeletonGradientColor,
                [privateTokens.skeletonFadeInColor]: effectiveFadeInColor || `var(${tokens.fadeInColor})`,
                [privateTokens.skeletonFadeOutColor]: effectiveFadeOutColor || `var(${tokens.fadeOutColor})`,
            } as CSSProperties;

            const componentProps = {
                ...props,
                ref,
                className: cls(skeletonClass, animationClass, className),
            } as P & RefAttributes<E>;

            return (
                <Wrapper style={wrapperStyle}>
                    <Component {...componentProps} />
                </Wrapper>
            );
        },
    );
