import type { AsProps } from '@salutejs/plasma-core';
import { HTMLAttributes, ReactNode, RefAttributes } from 'react';

import { ComponentConfig, PropsType, Variants } from '../../engines/types';

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

export type LayoutType = {
    layout?: NotificationLayout;
};

export type IconPlacementType = {
    iconPlacement?: NotificationIconPlacement;
};

export type CloseIconType = {
    showCloseIcon?: boolean;
};

export interface NotificationProps extends AsProps, HTMLAttributes<HTMLDivElement> {
    /**
     * Заголовок.
     */
    title?: string;
    /**
     * Контент под заголовком.
     */
    children?: ReactNode;
    /**
     *  Кнопки снизу/справа для необходимых действий.
     */
    actions?: ReactNode;
    /**
     * Cхема расположение блоков Notification.
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
     * Колбек при нажатии на кнопку закрытия.
     */
    onCloseButtonClick?: () => void;
    /**
     * @deprecated
     * Не влияет на отображение компонента.
     * Статус компонента Notification.
     */
    status?: string;

    /**
     * Вид Notification.
     */
    view?: string;
    /**
     * Размер Notification (необходимо связать с размером используемых Button).
     */
    size?: string;
}

export interface NotificationPortalProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Конфиг компонента Notification.
     */
    config: ComponentConfig<string, Variants, PropsType<Variants>, NotificationProps & RefAttributes<HTMLDivElement>>;
    /**
     * В каком контейнере позиционируется(по умолчанию document), можно также указать id элемента или ref для него.
     */
    frame?: string;
}
