import { MutableRefObject, SyntheticEvent } from 'react';
import { InputHTMLAttributes } from '@salutejs/plasma-core';

import { CustomDropdownProps } from '../Dropdown/Dropdown.types';

export type SelectPrimitiveValue = string | number | boolean;

export type SelectValue = SelectPrimitiveValue | Array<SelectPrimitiveValue>;

export type SelectType = 'single' | 'multiple' | 'native';

export type EnumerationType = 'comma' | 'chip';

export type TargetType = 'button-like' | 'textField-like';

export interface CustomSelectProps extends CustomDropdownProps {
    /**
     * Вид элемента, рядом с которым появляется список.
     */
    target?: TargetType;
    /**
     * Текст лейбла.
     */
    label?: string;
    /**
     * Тип перечисления выбранных значений.
     * Варианты: comma, chips
     */
    enumerationType?: EnumerationType;
}

export type SelectTypeSeparation =
    | {
          /**
           * Тип селекта.
           * Варианты: single, multiple, native
           */
          selectType?: 'single' | 'native';
          value?: SelectPrimitiveValue;
          /**
           * Обработчик изменения выбранного значения.
           */
          onChangeValue?: (value?: SelectPrimitiveValue) => void;
      }
    | {
          /**
           * Тип селекта.
           * Варианты: single, multiple, native
           */
          selectType: 'multiple';
          value?: Array<SelectPrimitiveValue>;
          /**
           * Обработчик изменения выбранного значения.
           */
          onChangeValue?: (value?: Array<SelectPrimitiveValue>) => void;
      };

export type SelectProps = Omit<InputHTMLAttributes<HTMLSelectElement>, 'value' | 'size' | 'onChange'> &
    CustomSelectProps &
    SelectTypeSeparation;

export interface ControlledRefs {
    targetRef: MutableRefObject<HTMLButtonElement | null>;
    chipsRefs: MutableRefObject<Array<HTMLButtonElement>>;
    selectRef: MutableRefObject<HTMLDivElement | null>;
    itemsRefs: MutableRefObject<Array<HTMLDivElement>>;
}

export interface UseKeyNavigationProps {
    controlledRefs: ControlledRefs;
    isOpen: boolean;
    selectType?: SelectType;
    value?: SelectPrimitiveValue | SelectPrimitiveValue[];
    enumerationType?: EnumerationType;
    updateValue: (item: HTMLElement, event: SyntheticEvent | Event) => void;
    updateIsOpen: (value: boolean, event: SyntheticEvent | Event) => void;
}
