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
        return 'var(--plasma-colors-skeleton-gradiengetSkeletonColort-lighter)';
    }

    return 'var(--plasma-colors-skeleton-gradient)';
};

/**
 * Миксин применения градиента скелетона.
 * gradientColor должно передаваться как css-переменная applySkeletonGradient('var(--gradient-token)')
 */
export const applySkeletonGradient = (gradientColor: string) => `
    position: relative;
    overflow: hidden;
    z-index: 1; /* for safari */

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100vw;
        width: 200vw;
        height: 100%;
        animation: loading 4s linear infinite;
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
