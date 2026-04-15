import type { MouseEvent, ButtonHTMLAttributes } from 'react';

type CustomSegmentIconItemProps = {
    /**
     * Значение сегмента
     */
    value: string;
    /**
     * Уникальный идентификатор контрола
     */
    id?: string;
    /**
     * Иконка
     */
    icon?: React.ReactNode;
    /**
     * Сегмент c округлым border-radius
     */
    pilled?: boolean;
    /**
     * Коллбек для обработки выбора сегмента
     */
    customHandleSelect?: (e: MouseEvent<HTMLButtonElement>) => void;
    /**
     * Размер сегмента
     */
    size?: string;
    /**
     * Вид сегмента
     * @default 'default'
     */
    view?: string;
};

export type SegmentIconItemProps = ButtonHTMLAttributes<HTMLButtonElement> & CustomSegmentIconItemProps;
