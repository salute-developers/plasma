import type { HTMLAttributes, ChangeEvent, KeyboardEvent, FocusEvent } from 'react';

import type { FormTypeString } from '../../../../types/FormType';
import type { SliderBaseProps, SliderInternalProps } from '../SliderBase/SliderBase.types';

type DoubleValuePropsUnion =
    | {
          /**
           * Вызывается при перемещении ползунка.
           * В режиме формы (при наличии name) получает событие с полем target.value в формате "min - max"
           */
          onChange?: (event: FormTypeString) => void;
          /**
           * Свойство для названия поля при работе с формой
           */
          name?: string;
          /**
           * Текущее значение (контролируемый режим).
           * Не передавайте одновременно с defaultValue
           */
          value?: never;
          /**
           * Начальное значение (неконтролируемый режим)
           */
          defaultValue?: number[];
      }
    | {
          /**
           * Вызывается при перемещении ползунка
           */
          onChange?: (value: number[]) => void;
          /**
           * Свойство для названия поля при работе с формой
           */
          name?: never;
          /**
           * Текущее значение (контролируемый режим)
           */
          value?: number[];
          /**
           * Начальное значение (неконтролируемый режим).
           * Не передавайте одновременно с value
           */
          defaultValue?: never;
      };

export type DoubleSliderProps = SliderBaseProps &
    SliderInternalProps &
    Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> &
    DoubleValuePropsUnion & {
        /**
         * Вызывается при отпускании ползунка
         */
        onChangeCommitted?: (value: number[]) => void;
        /**
         * Вызывается при изменении TextField
         */
        onChangeTextField?: (value: number[], event: ChangeEvent<HTMLInputElement>) => void;
        /**
         * Вызывается при потере фокуса TextField
         */
        onBlurTextField?: (value: number[], event: FocusEvent<HTMLInputElement>) => void;
        /**
         * Вызывается при нажатии на клавишу в TextField
         */
        onKeyDownTextField?: (value: number[], event: KeyboardEvent<HTMLInputElement>) => void;
        /**
         * @deprecated
         */
        rangeValuesPlacement?: never;
        /**
         * @deprecated
         */
        showCurrentValue?: never;
        /**
         * @deprecated
         */
        showRangeValues?: never;
        /**
         * @deprecated
         */
        labelPlacement?: never;
        /**
         * Ярлык, определяющий назначение ползунков (a11y).
         * Первый элемент — левый ползунок, второй — правый
         */
        ariaLabel?: string[];
        type?: 'double';

        /**
         * Размер ползунка
         * @default small
         */
        pointerSize?: 'small' | 'large';
    };
