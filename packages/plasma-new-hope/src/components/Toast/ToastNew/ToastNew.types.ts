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
    /** Расстояние между тостами в пикселях.
     * @default 8
     */
    gap?: number;
    /** CSS-анимация появления и скрытия тостов. */
    animation?: {
        enter?: CSSProperties['animation'];
        exit?: CSSProperties['animation'];
    };
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

export type ShowToastProps = (text: string, options?: ShowToastPlasmaOptions) => string;

export interface ShowToastPlasmaOptions {
    /**
     * Позволяет показывать несколько тостов одновременно.
     * @default false
     */
    stacking?: boolean;
    /** Идентификатор тоста для последующего закрытия или обновления. */
    id?: string;
    hasClose?: boolean;
    contentLeft?: ReactNode;
    width?: CSSProperties['width'];
    textColor?: CSSProperties['color'];
    position?: ToastPosition;
    duration?: number;
    /** CSS-анимация появления и скрытия тоста. Переопределяет значение ToastContainer. */
    animation?: {
        enter?: CSSProperties['animation'];
        exit?: CSSProperties['animation'];
    };

    view?: string;
    size?: string;
    pilled?: boolean;
    renderToast?: (options?: Omit<ShowToastPlasmaOptions, 'renderToast'>) => ReactNode;
}
