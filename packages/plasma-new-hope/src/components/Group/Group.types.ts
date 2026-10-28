import type { HTMLAttributes } from 'react';

export type Gap = 'none' | 'dense' | 'wide';
export type Orientation = 'vertical' | 'horizontal';
export type Shape = 'default' | 'segmented';

type Stretching = 'filled' | 'auto';

type CustomGroupProps = {
    /**
     * Отступы между элементами внутри группы
     * @default
     * dense
     * @description
     * Доступные значения: 'none' | 'dense' | 'wide'.
     */
    gap?: Gap;
    /**
     * Направление группы
     * @default
     * horizontal
     * @description
     * Можно воспринимать как свойство flex-direction.
     * vertical — вертикально, horizontal — горизонтально.
     */
    orientation?: Orientation;
    /**
     * Скругления внутренних углов элементов внутри группы
     * @default
     * default
     * @description
     * Доступные значения: 'default' | 'segmented'.
     * default не меняет радиусы элементов.
     * segmented скругляет только внутренние углы, внешние остаются у самих элементов.
     * При gap="none" внутренний радиус равен 0.
     */
    shape?: Shape;
    /**
     * Ширина группы
     * @default
     * auto
     * @description
     * filled — группа занимает всю доступную ширину, элементы делят её поровну.
     * auto — группа растягивается в зависимости от контента.
     */
    stretching?: Stretching;
};

/**
 * Группа для Button, IconButton и Chip. Стили группы применяются только к этим компонентам.
 */
export interface GroupProps extends HTMLAttributes<HTMLDivElement>, CustomGroupProps {}
