import { MutableRefObject, SyntheticEvent } from 'react';
import { InputHTMLAttributes } from '@salutejs/plasma-core';

import { DropdownPlacement, DropdownPlacementBasic } from '../Dropdown/Dropdown.types';

export type SelectPrimitiveValue = string | number | boolean;

export type SelectValue = SelectPrimitiveValue | Array<SelectPrimitiveValue>;

export type ValueType = 'single' | 'multiple' | 'native';

export type EnumerationType = 'comma' | 'chip';

export type TargetType = 'button-like' | 'textField-like';

export type ComponentType = 'select' | 'combobox';

export interface CustomSelectProps {
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
    /**
     * Находится ли в портале.
     */
    usePortal?: boolean;
    /**
     * Дропдаун открыт или нет.
     * @default
     *  false
     */
    opened?: boolean;
    /**
     * Сторона открытия дропдауна относительно target элемента.
     * @default
     *  auto
     */
    placement?: DropdownPlacement | Array<DropdownPlacementBasic>;
    /**
     * В каком контейнере позиционируется(по умолчанию document), можно также указать id элемента или ref для него.
     */
    frame?: 'document' | string | React.RefObject<HTMLElement>;
    /**
     * Размер компонента.
     */
    size?: string;
    /**
     * Вид компонента.
     */
    view?: string;
    /**
     * Событие сворачивания/разворачивания дропдауна.
     */
    onToggle?: (isOpen: boolean, event: SyntheticEvent | Event) => void;
}

export type valueTypeSeparation =
    | {
          /**
           * Тип селекта.
           * Варианты: single, multiple, native
           */
          valueType?: 'single' | 'native';
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
          valueType: 'multiple';
          value?: Array<SelectPrimitiveValue>;
          /**
           * Обработчик изменения выбранного значения.
           */
          onChangeValue?: (value?: Array<SelectPrimitiveValue>) => void;
      };

export type SelectProps = Omit<InputHTMLAttributes<HTMLSelectElement>, 'value' | 'size' | 'onChange'> &
    CustomSelectProps &
    valueTypeSeparation;

export interface ControlledRefs {
    targetRef: MutableRefObject<HTMLButtonElement | HTMLInputElement | null>;
    chipsRefs: MutableRefObject<Array<HTMLButtonElement>>;
    selectRef: MutableRefObject<HTMLDivElement | null>;
    itemsRefs: MutableRefObject<Array<HTMLDivElement>>;
    inputRef?: MutableRefObject<HTMLInputElement | null>;
}

export interface UseKeyNavigationProps {
    controlledRefs: ControlledRefs;
    opened: boolean;
    valueType?: ValueType;
    componentType?: ComponentType;
    value?: SelectPrimitiveValue | SelectPrimitiveValue[];
    search?: string;
    enumerationType?: EnumerationType;
    updateValue: (item: HTMLElement, event: SyntheticEvent | Event) => void;
    updateOpened: (value: boolean, event: SyntheticEvent | Event) => void;
}
