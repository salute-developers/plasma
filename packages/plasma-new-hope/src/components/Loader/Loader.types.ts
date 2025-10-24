import type { HTMLAttributes } from 'react';
import { Blur } from 'src/mixins';

export type CustomLoaderProps = {
    /**
     * Тип loader
     */
    type?: 'spinner' | 'progress';
    /**
     * Наличие блюра на фоне
     */
    hasBlur?: boolean;
    /**
     * Степень блюра "small | medium | large"
     */
    blur?: Blur;
    /**
     * Наличие overlay на фоне
     */
    hasOverlay?: boolean;
    /**
     * Кастомное значение фона
     */
    overlayColor?: string;
    /**
     * Текущее значение прогресса (от 0 до maxValue)
     */
    value?: number;
    /**
     * Максимальное значение прогресса
     * @default
     * 100
     */
    maxValue?: number;
    /**
     * Размер ProgressBar
     * @default
     * m
     */
    size?: string;
    /**
     * Вид ProgressBar
     * @default
     * default
     */
    view?: string;
    /**
     * Толщина обводки ProgressBarCircular
     */
    strokeWidth?: number;
    /**
     * Контент в центре прогресс-бара
     */
    children?: React.ReactNode;
};

export type LoaderProps = HTMLAttributes<HTMLDivElement> & CustomLoaderProps;
