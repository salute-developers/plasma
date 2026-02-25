export interface SkeletonGradientProps {
    lighter?: boolean;
    customGradientColor?: string;
}

/**
 * Функция для получения значения градиента скелетона
 * Необходимо вызвать функцию в самом компоненте и прокинуть полученное значение в пропс gradientColor
 * Пример в компоненте Skeleton/LineSkeleton
 */
export const getSkeletonColor = ({ lighter, customGradientColor }: SkeletonGradientProps) => {
    if (customGradientColor) {
        return customGradientColor.trim();
    }

    if (lighter) {
        return 'var(--plasma-colors-skeleton-gradient-lighter, var(--surface-skeleton-deep-gradient))';
    }

    return 'var(--plasma-colors-skeleton-gradient, var(--surface-skeleton-gradient))';
};

/**
 * Миксин применения градиента скелетона.
 * gradientColor должно передаваться как css-переменная
 * applySkeletonShimmerGradient('var(--gradient-token)', '--duration-token')
 */
export const applySkeletonShimmerGradient = (gradientColor: string, shimmerDuration?: string) => `
    position: relative;
    overflow: hidden;
    z-index: 1; /* for safari */

    --plasma_private-skeleton-shimmer-duration: var(${shimmerDuration}, 4s);

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100vw;
        width: 200vw;
        height: 100%;
        animation: loading var(--plasma_private-skeleton-shimmer-duration, 4s) linear infinite;
        background-image: ${gradientColor};
    }

    @keyframes loading {
        from {
            transform: translateX(0);
        }

        to {
            transform: translateX(100vw);
        }
    }
`;

/**
 * Миксин применения анимации пульсации скелетона.
 * fadeInColor и fadeOutColor должны передаваться как css-переменные
 * applySkeletonPulseGradient('--fade-in-token', '--fade-out-token')
 */
export const applySkeletonPulseGradient = (fadeInColor: string, fadeOutColor: string, pulseDuration?: string) => `
    position: relative;
    overflow: hidden;
    z-index: 1; /* for safari */

    --plasma_private-skeleton-pulse-duration: var(${pulseDuration}, 0.6s);

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background-color: var(${fadeInColor}, var(--surface-transparent-secondary));

        animation: pulsating var(--plasma_private-skeleton-pulse-duration, 0.6s) linear infinite alternate;
    }

    @keyframes pulsating {
        0% {
            background-color: var(${fadeInColor}, var(--surface-transparent-secondary));
        }

        100% {
            background-color: var(${fadeOutColor}, var(--surface-transparent-tertiary));
        }
    }
`;
