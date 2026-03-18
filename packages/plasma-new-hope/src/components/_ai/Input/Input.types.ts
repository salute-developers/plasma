import type { HTMLAttributes, Key, ReactNode } from 'react';

export type InputMode = 'condensed' | 'extended';

export type InputAttachment = {
    /**
     * Уникальный идентификатор вложения.
     */
    id: Key;
    /**
     * Тип вложения.
     * @default file
     */
    type?: 'file' | 'image';
    /**
     * Название вложения.
     */
    label?: string;
    /**
     * Размер вложения.
     */
    size?: string;
    /**
     * URL превью вложения.
     */
    thumbUrl?: string;
};

export type InputProps = {
    /**
     * Значение текста в control-режиме.
     */
    value?: string;
    /**
     * Обработчик изменения значения в поле ввода.
     */
    onChange?: (value: string) => void;
    /**
     * Режим отображения компонента.
     * @default condensed
     */
    mode?: InputMode;
    /**
     * Плейсхолдер поля ввода.
     */
    placeholder?: string;
    /**
     * Автофокус на поле ввода.
     * @default false
     */
    autoFocus?: boolean;
    /**
     * Минимальное количество строк textarea.
     * @default 1
     */
    minRows?: number;
    /**
     * Максимальное количество строк textarea.
     * @default 4
     */
    maxRows?: number;
    /**
     * Отправлять сообщение по Enter (Shift+Enter — новая строка).
     * @default true
     */
    submitOnEnter?: boolean;
    /**
     * Очищать текст после отправки.
     * @default true
     */
    clearOnSubmit?: boolean;
    /**
     * Список вложений.
     */
    attachments?: InputAttachment[];
    /**
     * Список вложений.
     */
    onAttachmentRemove?: (attachment: InputAttachment) => void;
    /**
     * Обработчик отправки сообщения.
     */
    onSend?: (value: string) => void;
    /**
     * Слот перед полем ввода в футере.
     */
    actionBefore?: ReactNode;
    /**
     * Слот после поля ввода в футере.
     */
    actionAfter?: ReactNode;
    /**
     * Кастомная кнопка отправки сообщения.
     */
    sendNode?: ReactNode;
    /**
     * Состояние загрузки кнопки отправки.
     * @default false
     */
    loading?: boolean;

    /**
     * Вид компонента.
     */
    view?: string;
    /**
     * Размер компонента.
     */
    size?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;
