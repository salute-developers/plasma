import type { Roundness } from 'src/mixins';

export type SkeletonBaseProps = {
    /**
     * Значение градиента скелетона для анимации `shimmer`
     */
    customGradientColor?: string;
    /**
     * Значение цвета фона начала анимации `pulse`
     */
    customFadeInColor?: string;
    /**
     * Значение цвета фона в конце анимации `pulse`
     */
    customFadeOutColor?: string;
    /**
     * Скругленность
     */
    roundness?: Roundness;
    /**
     * Тип анимации
     * @default 'shimmer'
     */
    animationType?: 'shimmer' | 'pulse';
    /**
     * Длительность одного цикла анимации в миллисекундах
     */
    animationDuration?: number;
};

export type SkeletonSizeProps = {
    size?: string;
    view?: string;
};
