import type { MouseEvent, LabelHTMLAttributes } from 'react';

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
     * Сегмент c фоном
     */
    filledBackground?: boolean;
    /**
     * Коллбек для обработки выбора сегмента
     */
    customHandleSelect?: (e: MouseEvent<HTMLLabelElement>) => void;

    size?: string;
    view?: string;
    focused?: boolean;
};

export type SegmentItemProps = LabelHTMLAttributes<HTMLLabelElement> & CustomSegmentItemProps;
