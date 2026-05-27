import type { HTMLAttributes } from 'react';

type ShimmerConfig = {
    type: 'shimmer';
    /** @default true */
    lighter?: boolean;
    customGradientColor?: string;
};

type PulseConfig = {
    type: 'pulse';
    customFadeInColor?: string;
    customFadeOutColor?: string;
};

export type AnimationConfig = ShimmerConfig | PulseConfig;

export type WithSkeletonProps = {
    /**
     * Применить скелетон
     */
    skeleton?: boolean;
    /**
     * Конфигурация анимации скелетона
     */
    animationConfig?: AnimationConfig;
    /**
     * @deprecated Используйте animationConfig
     * @default 'shimmer'
     */
    animationType?: 'shimmer' | 'pulse';
} & HTMLAttributes<HTMLElement>;
