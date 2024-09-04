import type { HTMLAttributes } from 'react';

export type Gap = 'none' | 'dense' | 'wide';
export type Orientation = 'vertical' | 'horizontal';
export type Shape = 'default' | 'segmented';

type Stretching = 'filled' | 'auto';

type GapShapeVariants =
    | {
          /**
           * Отступы между controls внутри группы
           * @default
           * dense
           * @description
           * Доступные значения: 'none' | 'dense'.
           */
          gap?: 'none' | 'dense';
          /**
           * Скругления для controls внутри группы
           * @default
           * default
           * @description
           * Доступные значения: 'segmented'.
           */
          shape?: 'segmented';
      }
    | {
          /**
           * Отступы между controls внутри группы
           * @default
           * dense
           * @description
           * Доступные значения: 'dense' | 'wide'.
           */
          gap?: 'dense' | 'wide';
          /**
           * Скругления для controls внутри группы
           * @default
           * default
           * @description
           * Доступные значения: 'default'.
           */
          shape?: 'default';
      };

type TextFieldGroupPropsCommon = {
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
     * Ширина группы controls
     * @default
     * auto
     * @description
     * Может принимать три значения:
     * filled - группа controls занимает всю доступную ширину
     * auto - группа controls растягивается в зависимости от контента
     */
    stretching?: Stretching;
    /**
     * Размер группы input
     * @description
     * Применяется если isCommonTextFieldStyles передан как true.
     */
    size?: string;
    /**
     * Группа будет переопределять size для всех input
     * @default
     * true
     * @description
     * Если значение передано как true, для каждго input внутри группы
     * size берется из значений группы.
     * Если значение не задано, каждый input может иметь свое значение size.
     */
    isCommonTextFieldStyles?: boolean;
};

export type TextFieldGroupProps = HTMLAttributes<HTMLDivElement> & TextFieldGroupPropsCommon & GapShapeVariants;
export type TextFieldGroupRootProps = HTMLAttributes<HTMLDivElement> &
    TextFieldGroupPropsCommon & {
        gap?: Gap;
        shape?: Shape;
    };
