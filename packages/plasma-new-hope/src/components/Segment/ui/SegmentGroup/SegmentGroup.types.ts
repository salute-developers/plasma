import type { HTMLAttributes } from 'react';

type CustomSegmentGroupProps = {
    /**
     * Сегмент множественного или одиночного выбора
     * @deprecated
     */
    selectionMode?: 'multiple' | 'single';
    /**
     * Группа сегментов неактивна
     */
    disabled?: boolean;
    /**
     * Группа сегментов растянута на доступную область, только в горизонтальном режиме
     */
    stretch?: boolean;
    /**
     * При ограничении ширины разрешает скролл и отображает дополнительные элементы со стрелками
     * @deprecated
     * @default true
     */
    clip?: boolean;
    /**
     * Ориентация группы сегментов
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * Группа сегментов c округлым border-radius
     */
    pilled?: boolean;
    /**
     * Группа сегментов c фоном, используйте свойство hasBackground
     * @deprecated
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
    /**
     * Группа сегментов c фоном
     */
    hasBackground?: boolean;
};

export interface SegmentGroupProps extends HTMLAttributes<HTMLDivElement>, CustomSegmentGroupProps {}
