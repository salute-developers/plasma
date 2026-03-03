import type { ChangeEvent, KeyboardEvent, HTMLAttributes, Key, ReactNode, FocusEventHandler, RefObject } from 'react';

export type Attachment = {
    /**
     * Уникальный идентификатор вложения
     */
    id: Key;
    /**
     * Тип вложения.
     * @default file
     */
    type?: 'file' | 'image';
    /**
     * Название вложения
     */
    label?: string;
    /**
     * Размер вложения
     */
    size?: string;
    /**
     * URL превью вложения
     */
    thumbUrl?: string;
};

export type UserMessageProps = {
    /**
     * Текст сообщения
     */
    value?: string;
    /**
     * Флаг редактирования
     */
    isEditing?: boolean;
    /**
     * Максимальное количество строк при редактировании.
     * @default 4
     */
    maxRows?: number;
    /**
     * Набор действий с текущим сообщением.
     * При `isEditing = false` рекомендуется передавать набор `EmbedIconButton` с заданными действиями.
     * При `isEditing = true` - набор обычных `Button`
     */
    actions?: ReactNode;
    /**
     * Список вложений
     */
    attachments?: Attachment[];
    /**
     * Размер компонента
     */
    size?: string;
    /**
     * Вид компонента
     */
    view?: string;
    /**
     * Вид прикрепленных фейлов
     */
    attachmentsView?: string;
    /**
     * Ссылка на поле редактировании сообщения
     */
    textAreaRef?: RefObject<HTMLTextAreaElement>;
    /**
     * ID поля редактировании сообщения
     */
    id?: HTMLTextAreaElement['id'];
    /**
     * Имя поля редактировании сообщения
     */
    name?: HTMLTextAreaElement['name'];
    /**
     * Вызывается при редактировании сообщения
     */
    onEdit?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    /**
     * Вызывается при нажатии клавиши во время редактировании сообщения
     */
    onEditKeyDown?: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
    /**
     * Вызывается при фокусе на поле редактировании сообщения
     */
    onFocus?: FocusEventHandler<HTMLTextAreaElement>;
    /**
     * Вызывается при потере фокуса на поле редактировании сообщения
     */
    onBlur?: FocusEventHandler<HTMLTextAreaElement>;
} & Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'onFocus' | 'onBlur'>;

export type UserMessageRootProps = Pick<UserMessageProps, 'view' | 'size' | 'attachmentsView'> &
    Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;
