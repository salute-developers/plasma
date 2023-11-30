import type { AsProps } from '@salutejs/plasma-core';
import { HTMLAttributes, ReactNode, RefAttributes } from 'react';

import { ComponentConfig, PropsType, Variants } from '../../engines/types';

export type NotificationStatusType = 'success' | 'warning' | 'error';

export interface NotificationProps extends AsProps, HTMLAttributes<HTMLDivElement> {
    /**
     * Заголовок.
     */
    title?: string;
    /**
     * Контент.
     */
    children?: ReactNode;
    /**
     * Статус - цветовая индикация сообщения.
     */
    status?: NotificationStatusType;
    view?: string;
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
