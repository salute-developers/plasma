import type { HTMLAttributes } from 'react';

import type { SliderBaseProps, SliderInternalProps } from '../SliderBase/SliderBase.types';
import { FormTypeNumber } from '../../../../types/FormType';

type SingleSliderPropsUnion =
    | {
          /**
           * Вызывается при перемещении ползунка
           */
          onChange?: (event: FormTypeNumber) => void;
          /**
           * Название для формы
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
           * Название для формы
           */
          name?: never;
          /**
           * Изначальное знaчение
           */
          defaultValue?: never;
      };

export type SingleSliderProps = SliderBaseProps &
    SliderInternalProps &
    SingleSliderPropsUnion &
    Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & {
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
         */
        showRangeValues?: boolean;
        /**
         * Разница между текущим значением и минимальным, при котором минимальное будет скрыто.
         */
        hideMinValueDiff?: number;
        /**
         * Разница между текущим значением и максимальным, при котором максимальное будет скрыто.
         */
        hideMaxValueDiff?: number;
        /**
         * Расположение значений минимума и максимума интервала.
         * @default `outer`
         */
        rangeValuesPlacement?: 'inner' | 'outer';
        /**
         * Расположение подписи.
         * @default `outer`
         */
        labelPlacement?: 'inner' | 'outer';
        /**
         * Размера увеличенного шага (для клавиш PageUp, PageDown).
         * Указывает процентное отношение от максимально возможного значения.
         * Указав значение 20 при максимуме в 100, получим 20%.
         */
        multipleStepSize?: number;

        view?: string;
        size?: 's' | 'm' | 'l';
        type?: 'single';
    };
