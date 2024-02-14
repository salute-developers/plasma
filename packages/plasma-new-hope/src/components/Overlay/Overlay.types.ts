import type { HTMLAttributes } from 'react';

export type OverlayProps = {
    /**
     * Значение z-index для подложки.
     */
    zIndex: string;
    /**
     * Значение цвета подложки.
     */
    backgroundColorProperty: string;
    /**
     * Нужно ли применять blur для подложки.
     */
    withBlur?: boolean;
    /**
     * Нужно ли сделать подложку прозрачной (при открытии нескольких всплывающих компонент).
     */
    transparent?: boolean;
    /**
     * Является ли подложка кликабельной.
     * @default
     * true
     */
    isClickable?: boolean;
    /**
     * Обработчик клика при нажатии на подложку.
     */
    onOverlayClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
} & HTMLAttributes<HTMLDivElement>;
