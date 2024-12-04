import type { ReactNode, HTMLAttributes } from 'react';

export type ToastRole = 'alert' | 'log' | 'status';
export type ToastPosition = 'top' | 'bottom';

export type ToastControllerProps = {
    /**
     * Текстовая надпись
     */
    text?: string;
    /**
     * Слот для контента слева, например `Icon`
     */
    contentLeft?: ReactNode;
    /**
     * Место отображения подсказки
     * @default
     * bottom
     */
    position?: ToastPosition;
    /**
     * WAI-ARIA роль
     * @default
     * status
     */
    role?: ToastRole;
    /**
     * Отображать ли подложку блока подсказки
     * @default
     * true
     */
    fade?: boolean;
    /**
     * Значение для дополнительно отступа блока подсказки, считается в rem.
     */
    offset?: number;
    /**
     * Блок подсказки c округлым border-radius
     */
    pilled?: boolean;
    /**
     * Фиксированная ширина блока подсказки (если указана без единицы измерения - рассчитывается в процентах)
     */
    width?: string | number;
    /**
     * Отображать ли иконку закрытия
     */
    hasClose?: boolean;
    /**
     * Размер блока подсказки
     */
    size?: string;
    /**
     * Вид блока подсказки
     */
    view?: string;
};

export type CustomToastProps = {
    /**
     * Текстовая надпись
     */
    text?: string;
    /**
     * Слот для контента слева, например `Icon`
     */
    contentLeft?: ReactNode;
    /**
     * WAI-ARIA роль
     * @default
     * status
     */
    role?: ToastRole;
    /**
     * Блок подсказки c округлым border-radius
     */
    pilled?: boolean;
    /**
     * Фиксированная ширина блока подсказки (если указана без единицы измерения - рассчитывается в процентах)
     */
    width?: string | number;
    /**
     * Отображать ли иконку закрытия
     */
    hasClose?: boolean;
    /**
     * Размер блока подсказки
     */
    size?: string;
    /**
     * Вид блока подсказки
     */
    view?: string;
    /**
     * Колбек при нажатии на кнопку закрытия.
     */
    onCloseButtonClick?: () => void;
};

export type ToastProps = HTMLAttributes<HTMLButtonElement> & CustomToastProps;
