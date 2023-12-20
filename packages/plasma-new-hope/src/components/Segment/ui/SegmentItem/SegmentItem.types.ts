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
     * Вид выбранного сегмента c фоном
     */
    selectedView?: string;
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
     */
    view?: string;
};

export type SegmentItemProps = ButtonHTMLAttributes<HTMLButtonElement> & CustomSegmentItemProps;
