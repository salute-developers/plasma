import type { HTMLAttributes } from 'react';

export type Gap = 'none' | 'dense' | 'wide';
export type Orientation = 'vertical' | 'horizontal';
export type Shape = 'default' | 'segmented';

type Stretching = 'filled' | 'auto';

type CustomButtonGroupProps = {
    /**
     * Отступы между кнопками внутри группы
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
     * vertical - вертикально, horizontal - горизонтальное.
     */
    orientation?: Orientation;
    /**
     * Скругления для кнопок внутри группы
     * @default
     * default
     * @description
     * Доступные значения: 'default' | 'segmented'.
     */
    shape?: Shape;
    /**
     * Ширина группы кнопок
     * @default
     * auto
     * @description
     * Может принимать три значения:
     * filled - группа кнопок занимает всю доступную ширину
     * auto - группа кнопок растягивается в зависимости от контента
     */
    stretching?: Stretching;

    /**
     * Вид группы кнопок
     * @description
     * Применяется если isCommonButtonStyles передан как true.
     */
    view?: string;
    /**
     * Размер группы кнопок
     * @description
     * Применяется если isCommonButtonStyles передан как true.
     */
    size?: string;
    /**
     * Группа кнопок будет переопределять view и size для всех кнопок
     * @default
     * true
     * @description
     * Если значение передано как true, для каждой кнопки внутри группы кнопок
     * view и size берутся из значений группы кнопок.
     * Если значение не задано, каждая кнопка может иметь свое значение view и size.
     */
    isCommonButtonStyles?: boolean;
};

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement>, CustomButtonGroupProps {}
