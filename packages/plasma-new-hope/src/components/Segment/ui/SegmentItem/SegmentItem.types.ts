import type { MouseEvent, ButtonHTMLAttributes } from 'react';

type CustomSegmentItemProps = {
    /**
     * Значение сегмента
     */
    value: string;
    /**
     * Уникальный идентификатор контрола
     */
    id?: string;
    /**
     * Метка-подпись к элементу
     */
    label?: React.ReactNode;
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
    /**
     * Слот для контента слева.
     */
    contentLeft?: React.ReactNode;
    /**
     * Слот для контента справа.
     */
    contentRight?: React.ReactNode | string;
};

export type SegmentItemProps = ButtonHTMLAttributes<HTMLButtonElement> & CustomSegmentItemProps;
