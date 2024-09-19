import type { HTMLAttributes } from 'react';

export type Gap = 'dense' | 'wide';

type CustomChipGroupProps = {
    /**
     * Отступы между элементами внутри группы
     * @default
     * dense
     * @description
     * Доступные значения: 'dense' | 'wide'.
     */
    gap?: Gap;
    /**
     * Вид группы
     * @description
     * Применяется если isCommonChipStyles передан как true.
     */
    view?: string;
    /**
     * Размер группы
     * @description
     * Применяется если isCommonChipStyles передан как true.
     */
    size?: string;
    /**
     * Группа будет переопределять view и size для всех элементов внутри
     * @default
     * true
     * @description
     * Если значение передано как true, для каждого элемента внутри группы
     * view и size берутся из значений группы.
     * Если значение не задано, каждый элемент может иметь свое значение view и size.
     */
    isCommonChipStyles?: boolean;
    /**
     * Переносить ли элементы на новый ряд, при нехватке ширины.
     */
    isWrapped?: boolean;
};

export interface ChipGroupProps extends HTMLAttributes<HTMLDivElement>, CustomChipGroupProps {}
