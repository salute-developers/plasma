import type { HTMLAttributes } from 'react';
import { Blur } from 'src/mixins';

export type CustomLoaderProps = {
    /**
     * Текущее значение прогресса (от 0 до maxValue)
     */
    type?: 'spinner' | 'progress';
    /**
     * Текущее значение прогресса (от 0 до maxValue)
     */
    hasBlur?: boolean;
    /**
     * Текущее значение прогресса (от 0 до maxValue)
     */
    blur?: Blur;
    /**
     * Текущее значение прогресса (от 0 до maxValue)
     */
    hasOverlay?: boolean;
    /**
     * Текущее значение прогресса (от 0 до maxValue)
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
     * Толщина обводки ProgressBar
     */
    strokeWidth?: number;
    /**
     * Контент в центре прогресс-бара
     */
    children?: React.ReactNode;
};

export type LoaderProps = HTMLAttributes<HTMLDivElement> & CustomLoaderProps;
