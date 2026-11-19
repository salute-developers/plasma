import type { HTMLAttributes } from 'react';

export type Gap = 'none' | 'dense' | 'wide';
export type Orientation = 'vertical' | 'horizontal';
export type Shape = 'default' | 'segmented';

type Stretching = 'filled' | 'auto';

type CustomGroupProps = {
    /**
     * Отступы между элементами внутри группы
     */
    gap?: Gap;
    /**
     * Направление группы.
     * Можно воспринимать как свойство flex-direction.
     */
    orientation?: Orientation;
    /**
     * Скругления внутренних углов элементов внутри группы.
     * Внешние углы остаются у самих элементов.
     * При gap="none" внутренний радиус равен 0.
     */
    shape?: Shape;
    /**
     * Ширина группы и распределение её между элементами
     */
    stretching?: Stretching;
};

/**
 * Группа для Button, IconButton и Chip. Стили группы применяются только к этим компонентам.
 */
export interface GroupProps extends HTMLAttributes<HTMLDivElement>, CustomGroupProps {}
