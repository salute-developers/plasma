import type { HTMLAttributes, ReactNode } from 'react';

import type { SliderBaseProps, SliderInternalProps } from '../SliderBase/SliderBase.types';
import { FormTypeNumber } from '../../../../types/FormType';

type SingleSliderPropsUnion =
    | {
          /**
           * Вызывается при перемещении ползунка
           */
          onChange?: (event: FormTypeNumber) => void;
          /**
           * Свойство для названия поля при работе с формой
           */
          name: string;
          /**
           * Текущее знaчение
           */
          value?: never;
          /**
           * Изначальное знaчение
           */
          defaultValue?: number;
      }
    | {
          /**
           * Вызывается при перемещении ползунка
           */
          onChange?: (value: number) => void;
          /**
           * Текущее знaчение
           */
          value: number;
          /**
           * Свойство для названия поля при работе с формой
           */
          name?: never;
          /**
           * Изначальное знaчение
           */
          defaultValue?: never;
      };

type SingleSliderOrientationPropsUnion =
    | {
          /**
           * Ориентация Slider.
           * @default `horizontal`
           */
          orientation?: 'horizontal';
          /**
           * Расположение подписи.
           * @default top
           * @description
           * Может принимать три значения:
           * top - отображение справа
           * left - отображение слева
           * none - скрывает подпись
           */
          labelPlacement?: 'top' | 'left' | 'none';
          /**
           * Расположение значений минимума и максимума интервала.
           * @default bottom
           * @description
           * Может принимать три значения:
           * - top - отображение сверху
           * - bottom - отображение снизу
           * - side - отображение по сторонам (не применяется при задании `scaleTicks`)
           * - none - скрывает значения (не применяется при задании `scaleTicks`)
           */
          scaleAlign?: 'top' | 'side' | 'bottom' | 'none';
          /**
           * Выравнивание элементов в Slider.
           */
          sliderAlign?: never | 'none';
          /**
           * Изменяет направление слайдера
           */
          reversed?: never;
          /**
           * Меняет местами иконку и подпись
           */
          labelReversed?: never;
          /**
           * Расположение текущего значения относительно ползунка.
           * @default 'bottom'
           */
          valuePlacement?: 'top' | 'bottom' | 'none';
      }
    | {
          /**
           * Ориентация Slider.
           * @default `horizontal`
           */
          orientation?: 'vertical';
          /**
           * Выравнивание элементов в Slider.
           * @default 'left'
           */
          sliderAlign?: 'center' | 'left' | 'right' | 'none';
          /**
           * Выравнивание элементов в Slider.
           */
          scaleAlign?: never;
          /**
           * Изменяет направление слайдера
           */
          reversed?: boolean;
          /**
           * Меняет местами иконку и подпись
           */
          labelReversed?: boolean;
          /**
           * Расположение текущего значения относительно ползунка.
           * @default 'right'
           */
          valuePlacement?: 'left' | 'right' | 'none';
      };

export type SingleSliderProps = SliderBaseProps &
    SliderInternalProps &
    SingleSliderPropsUnion &
    SingleSliderOrientationPropsUnion &
    Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> & {
        /**
         * Вызывается при отпускании ползунка
         */
        onChangeCommitted?: (value: number) => void;
        /**
         * Ярлык, определяющий назначение ползунка, например «Минимальная цена» [a11y].
         */
        ariaLabel?: string;
        /**
         * Отображать ли текущее значение.
         */
        showCurrentValue?: boolean;
        /**
         * Отображать ли значения минимума и максимума интервала.
         * @deprecated
         */
        showRangeValues?: boolean;
        /**
         * Расположение значений минимума и максимума интервала.
         * @deprecated
         */
        rangeValuesPlacement?: string;
        /**
         * Отображать ли значения минимума и максимума интервала.
         */
        showScale?: boolean;
        /**
         * Разница между текущим значением и минимальным, при котором минимальное будет скрыто.
         */
        hideMinValueDiff?: number;
        /**
         * Разница между текущим значением и максимальным, при котором максимальное будет скрыто.
         */
        hideMaxValueDiff?: number;
        /**
         * Расположение подписи.
         * @deprecated
         * @default `outer`
         */
        labelPlacement?: 'inner' | 'outer';

        /**
         * Слот под контент слева от подписи (например, иконку)
         * @deprecated
         */
        labelContentLeft?: ReactNode;

        /**
         * Слот под контент рядом с подписью (например, иконку)
         */
        labelContent?: ReactNode;

        type?: 'single';

        /**
         * Размер ползунка
         * @default small
         * @description
         * Может принимать три значения:
         * small - размер s;
         * large - размер l;
         * none - скрыть ползунок
         */
        pointerSize?: 'small' | 'large' | 'none';

        /**
         * Условия отображения ползунка
         * @default always
         * @description
         * always - всегда отображать
         * hover - при наведении на Slider
         */

        pointerVisibility?: 'always' | 'hover';

        /**
         * Условия появления ползунка, при pointerVisibility: true
         * @default always
         * @description
         * always - всегда отображать
         * hover - при наведении на Slider
         */
        currentValueVisibility?: 'always' | 'hover';

        /**
         * Массив значений для отображения шкалы делений под ползунком.
         * При клике на деление ползунок перемещается к соответствующему значению.
         * @example scaleTicks={[0, 25, 50, 75, 100]}
         */
        scaleTicks?: number[];
    };
