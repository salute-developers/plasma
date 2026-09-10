import type React from 'react';

import type { ModalProps } from '../../Modal';

export interface DialogModalProps extends Omit<ModalProps, 'hasBody' | 'hasClose' | 'title'> {
    /**
     * Размер визуальной части диалога.
     * @default m
     */
    size?: string;
    /**
     * Заголовок диалога.
     */
    title?: React.ReactNode;
    /**
     * URL изображения в верхней части диалога.
     */
    imageUrl?: string;
    /**
     * Alt-текст для изображения.
     */
    imageAlt?: string;
    /**
     * Слот действий.
     */
    actions?: React.ReactNode;
    /**
     * Отображает кнопку закрытия.
     * @default true
     */
    hasClose?: boolean;
}
