import type { HTMLAttributes } from 'react';

type CustomSegmentGroupProps = {
    /**
     * Сегмент множественного или одиночного выбора
     */
    selectionMode?: 'multiple' | 'single';
    /**
     * Группа сегментов неактивен
     */
    disabled?: boolean;
    /**
     * Группа сегментов c округлым border-radius
     */
    pilled?: boolean;
    /**
     * Группа сегментов c фоном
     */
    filledBackground?: boolean;

    size?: string;
    view?: string;
};

export type SegmentGroupProps = HTMLAttributes<HTMLDivElement> & CustomSegmentGroupProps;
