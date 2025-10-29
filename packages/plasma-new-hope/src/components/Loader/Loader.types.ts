import type { HTMLAttributes, ReactNode } from 'react';
import { Blur } from 'src/mixins';

export type CustomLoaderProps = {
    /**
     * Тип loader
     * @default spinner
     */
    type?: 'spinner' | 'progress';
    /**
     * Наличие blur на фоне
     */
    hasBlur?: boolean;
    /**
     * Тип эффекта blur "small | medium | large"
     */
    blur?: Blur;
    /**
     * Наличие overlay на фоне
     */
    hasOverlay?: boolean;
    /**
     * Собственное значение для фона
     */
    overlayColor?: string;
    /**
     * Текущее значение прогресса (от 0 до maxValue)
     */
    value?: number;
    /**
     * Максимальное значение прогресса
     * @default 100
     */
    maxValue?: number;
    /**
     * Размер ProgressBar
     * @default m
     */
    size?: string;
    /**
     * Вид ProgressBar
     * @default default
     */
    view?: string;
    /**
     * Толщина обводки ProgressBarCircular
     */
    strokeSize?: number;
    /**
     * Наличие track у progress bar
     */
    hasTrack?: boolean;
    /**
     * Контент в центре progress bar
     */
    children?: ReactNode;
};

export type LoaderProps = HTMLAttributes<HTMLDivElement> & CustomLoaderProps;
