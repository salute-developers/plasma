import type { HTMLAttributes, ReactNode, CSSProperties } from 'react';
import type { ToastPosition } from 'react-hot-toast';

export interface ToastContainerProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Место отображения подсказки
     * @default bottom-center
     */
    position?: ToastPosition;
    /**
     * Длительность отображения тоста.
     * Если не передать значение, подсказка будет отображаться пока ее не закроют.
     */
    duration?: number;
    /**
     * Отображать ли иконку закрытия
     * @default true
     */
    hasClose?: boolean;
    /**
     * Слот для контента слева, например `Icon`
     */
    contentLeft?: ReactNode;
    /**
     * Ширина тоста
     */
    width?: CSSProperties['width'];
    /**
     * Цвет текста
     */
    textColor?: CSSProperties['color'];
    /**
     * Расстояние между тостами
     */
    gap?: number;

    /**
     * Вид блока подсказки
     */
    view?: string;
    /**
     * Размер блока подсказки
     */
    size?: string;
    /**
     * Блок подсказки c округлым border-radius
     */
    pilled?: boolean;

    /**
     * @deprecated
     * Колбек при нажатии на кнопку закрытия
     */
    onCloseButtonClick?: () => void;
}

export type ShowToastProps = (text: string, options?: {} & ShowToastPlasmaOptions) => void;

export type ShowToastPlasmaOptions = {
    hasClose?: boolean;
    contentLeft?: ReactNode;
    width?: CSSProperties['width'];
    textColor?: CSSProperties['color'];
    position?: ToastPosition;
    duration?: number;

    view?: string;
    size?: string;
    pilled?: boolean;
};
