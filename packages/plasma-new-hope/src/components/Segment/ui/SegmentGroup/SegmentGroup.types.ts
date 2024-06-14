import type { HTMLAttributes } from 'react';

type CustomSegmentGroupProps = {
    /**
     * Сегмент множественного или одиночного выбора
     */
    selectionMode?: 'multiple' | 'single';
    /**
     * Выбранные по умолчанию сегменты.
     * Передается массив value сегментов, выбранных по умолчанию
     */
    defaultSelected?: Array<string>;
    /**
     * Группа сегментов неактивна
     */
    disabled?: boolean;
    /**
     * Группа сегментов группа сегментов растянута на доступную область
     */
    stretch?: boolean;
    /**
     * Группа сегментов c округлым border-radius
     */
    pilled?: boolean;
    /**
     * Группа сегментов c фоном
     */
    filledBackground?: boolean;
    /**
     * Размер группы сегментов
     */
    size?: string;
    /**
     * Вид группы сегментов
     */
    view?: string;
};

export type SegmentGroupProps = HTMLAttributes<HTMLDivElement> & CustomSegmentGroupProps;
