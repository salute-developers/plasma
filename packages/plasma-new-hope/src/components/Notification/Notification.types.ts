import type { AsProps } from '@salutejs/plasma-core';
import { HTMLAttributes, ReactNode } from 'react';
import type { CSSProperties } from 'react';

import { ComponentConfig, PropsType, Variants } from '../../engines/types';
import type { PopupPlacement } from '../Popup';

export const layouts = {
    horizontal: 'horizontal',
    vertical: 'vertical',
};

export type NotificationLayout = keyof typeof layouts;

export const placements = {
    top: 'top',
    left: 'left',
};

export type NotificationIconPlacement = keyof typeof placements;
export type NotificationPlacement = PopupPlacement;

export type LayoutType = {
    layout?: NotificationLayout;
};

export type IconPlacementType = {
    iconPlacement?: NotificationIconPlacement;
};

export type CloseIconType = {
    showCloseIcon?: boolean;
};

export interface NotificationProps extends AsProps, Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    /**
     * Заголовок.
     */
    title?: ReactNode;
    /**
     * Контент под заголовком.
     */
    children?: ReactNode;
    /**
     *  Кнопки снизу/справа для необходимых действий.
     */
    actions?: ReactNode;
    /**
     * Схема расположение блоков Notification.
     */
    layout?: NotificationLayout;
    /**
     * Иконка слева.
     */
    icon?: ReactNode;
    /**
     * Расположение иконки слева внутри Textbox.
     */
    iconPlacement?: NotificationIconPlacement;
    /**
     * Показывать ли иконку закрытия справа.
     * @default
     * true
     */
    showCloseIcon?: boolean;
    /**
     * Вид закрывающей иконки в Notification.
     */
    closeIconType?: 'default' | 'thin';
    /**
     * Пользовательская иконка закрытия.
     */
    customCloseIcon?: ReactNode;
    /**
     * Вид Notification.
     */
    view?: string;
    /**
     * Размер Notification (необходимо связать с размером используемых Button).
     */
    size?: string;
    /**
     * @description Только для применения в рамках SSR.
     */
    UNSAFE_SSR_ENABLED?: boolean;
    /**
     * Цвет текста (по умолчанию берётся цвет из view)
     */
    textColor?: string;
    /**
     * Цвет заголовка (по умолчанию берётся цвет из view)
     */
    titleColor?: string;
    /**
     * Цвет заголовка (по умолчанию берётся цвет из view)
     */
    backgroundColor?: string;
    /**
     * Свойства для управления шириной уведомления
     */
    width?: CSSProperties['width'];
    /**
     * Свойства для ограничения ширины уведомления
     */
    maxWidth?: CSSProperties['maxWidth'];
    /**
     * Callback при нажатии на кнопку закрытия.
     */
    onCloseButtonClick?: () => void;
    /**
     * Callback, вызываемый при автоматическом закрытии по timeout.
     */
    onTimeoutClose?: () => void;
    /**
     * @deprecated
     * Не влияет на отображение компонента.
     * Статус компонента Notification.
     */
    status?: string;
}

export interface NotificationPortalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    /**
     * Конфигурация компонента Notification.
     */
    config: ComponentConfig<string, Variants, PropsType<Variants>, NotificationProps & HTMLAttributes<HTMLDivElement>>;
    /**
     * В каком контейнере позиционируется(по умолчанию document), можно также указать id элемента или ref для него.
     */
    frame?: string;
    /**
     * Расположение компонента Notification во frame
     * @default bottom-right
     */
    placement?: NotificationPlacement;
    /**
     * @description Только для применения в рамках SSR.
     */
    UNSAFE_SSR_ENABLED?: boolean;
}
