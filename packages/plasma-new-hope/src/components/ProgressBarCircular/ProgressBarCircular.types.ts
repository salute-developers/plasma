import type { HTMLAttributes } from 'react';

export type CustomProgressBarCircularProps = {
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
    strokeSize?: number;
    /**
     * Наличие трека
     */
    hasTrack?: boolean;
    /**
     * Контент в центре прогресс-бара
     */
    children?: React.ReactNode;
};

export type ProgressBarCircularProps = HTMLAttributes<HTMLDivElement> & CustomProgressBarCircularProps;
