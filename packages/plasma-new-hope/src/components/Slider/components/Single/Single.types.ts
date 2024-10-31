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
           * @default top
           * @description
           * Может принимать три значения:
           * side - отображение по сторонам
           * bottom - отображение снизу
           * none - скрывает значения
           */
          scaleAlign?: 'side' | 'bottom' | 'none';
          /**
           * Выравнивание элементов в Slider.
           */
          sliderAlign?: never | 'none';

          reversed?: never;
          labelReversed?: never;
      }
    | {
          /**
           * Ориентация Slider.
           * @default `horizontal`
           */
          orientation: 'vertical';
          /**
           * Выравнивание элементов в Slider.
           * @default 'left'
           */
          sliderAlign?: 'center' | 'left' | 'right' | 'none';
          scaleAlign?: never;

          reversed?: boolean;
          labelReversed?: boolean;
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

        /**
         * Размера увеличенного шага (для клавиш PageUp, PageDown).
         * Указывает процентное отношение от максимально возможного значения.
         * Указав значение 20 при максимуме в 100, получим 20%.
         */
        multipleStepSize?: number;

        view?: string;
        size?: 's' | 'm' | 'l';
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
    };
