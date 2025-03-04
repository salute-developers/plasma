import { StepStatus, StepItemProps } from './ui';

export type StepsContent = 'all' | 'active' | 'none';
export type StepsContentAlign = 'left' | 'center';
export type StepsOrientation = 'horizontal' | 'vertical';

export interface StepsProps {
    /**
     * Массив шагов
     * @default []
     */
    items?: StepItemProps[];
    /**
     * Размер шага
     */
    size?: string;
    /**
     * Отображение шага
     */
    view?: string;
    /**
     * Отображение элемента шага
     */
    itemView?: string;
    /**
     * Ориентация компонента
     * @default 'horizontal'
     */
    orientation?: StepsOrientation;
    /**
     * Выравнивание контента в шагах
     * @default 'left'
     * @description
     * left - выравнивание по левому краю
     * center - выравнивание по центру
     */
    contentAlign?: StepsContentAlign;
    /**
     * Включает разделительную линию
     * @default true
     */
    hasLine?: boolean;
    /**
     * Режим отображения контента
     * @default 'all'
     * @description
     * all - контент у всех элементов
     * active - только у активного
     * none - контент скрыт
     */
    hasContent?: StepsContent;
    /**
     * Отображает loader вместо индикатора активного шага.
     */
    hasLoader?: boolean;
    /**
     * Индекс текущего шага, для uncontrolled компонента
     */
    current?: number;
    /**
     * Статус текущего шага, имеет приоритет над item.status
     */
    status?: StepStatus;
    /**
     * Обработчик изменения шага, делает индикаторы и заголовки шагов кликабельными
     */
    onChange?: (item: StepItemProps, index: number, prevIndex?: number) => void;
}
