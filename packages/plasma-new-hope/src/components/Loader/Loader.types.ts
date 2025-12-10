import type { HTMLAttributes, ReactNode } from 'react';

export type CustomLoaderProps = {
    /**
     * Тип loader
     * @default spinner
     */
    type?: 'spinner' | 'progress';
    /**
     * Наличие overlay на фоне
     */
    hasOverlay?: boolean;
    /**
     * Применить blur эффект к overlay (работает только при hasOverlay=true)
     */
    withBlur?: boolean;
    /**
     * Собственное значение для фона overlay
     */
    overlayColor?: string;
    /**
     * Z-index для loader и overlay (работает только при hasOverlay=true)
     * @default 9000
     */
    zIndex?: string;
    /**
     * Обработчик клика по overlay (работает только при hasOverlay=true)
     */
    onOverlayClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
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
     * Толщина обводки
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
    /**
     * Текст, отображаемый рядом с loader
     */
    text?: ReactNode;
    /**
     * Положение текста относительно loader
     * @default bottom
     */
    textPosition?: 'right' | 'bottom';
};

export type LoaderProps = HTMLAttributes<HTMLDivElement> & CustomLoaderProps;
