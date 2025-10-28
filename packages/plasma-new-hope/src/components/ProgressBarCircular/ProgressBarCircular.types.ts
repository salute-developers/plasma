import type { HTMLAttributes, ReactNode } from 'react';

export type CustomProgressBarCircularProps = {
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
     * Размер компонента
     * @default m
     */
    size?: string;
    /**
     * Вид компонента
     * @default default
     */
    view?: string;
    /**
     * Толщина обводки компонента
     */
    strokeSize?: number;
    /**
     * Наличие трека
     */
    hasTrack?: boolean;
    /**
     * Контент в центре компонента
     */
    children?: ReactNode;
};

export type ProgressBarCircularProps = HTMLAttributes<HTMLDivElement> & CustomProgressBarCircularProps;
