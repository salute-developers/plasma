import { DoubleSliderProps } from '../index';
import { FormTypeString } from '../../../../types/FormType';

type DoubleSliderPropsUnion =
    | {
          /**
           * Вызывается при перемещении ползунка
           */
          onChange?: (event: FormTypeString) => void;
          /**
           * Название для формы
           */
          name?: string;
          /**
           * Текущее знaчение
           */
          value?: never;
          /**
           * Изначальное знaчение
           */
          defaultValue?: number[];
      }
    | {
          /**
           * Вызывается при перемещении ползунка
           */
          onChange?: (values: number[]) => void;
          /**
           * Название для формы
           */
          name?: never;
          /**
           * Текущее знaчение
           */
          value?: number[];
          /**
           * Изначальное знaчение
           */
          defaultValue?: never;
      };

export type DoubleUncontrolledProps = Omit<DoubleSliderProps, 'value' | 'onChange'> & DoubleSliderPropsUnion;
