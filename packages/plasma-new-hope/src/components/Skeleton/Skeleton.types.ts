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
     * Значение цвета фона в кл=онце анимации `pulse`
     */
    customFadeOutColor?: string;
    /**
     * Скругленность
     */
    roundness?: Roundness;
    /**
     * Скругленность
     */
    animationType?: 'shimmer' | 'pulse';
};

export type SkeletonSizeProps = {
    size?: string;
    view?: string;
};
