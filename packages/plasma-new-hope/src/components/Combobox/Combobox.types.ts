import { MouseEvent, MutableRefObject, SyntheticEvent } from 'react';
import { InputHTMLAttributes } from '@salutejs/plasma-core';

import { DropdownPlacement, DropdownPlacementBasic } from '../Dropdown/Dropdown.types';

export type ComboboxPrimitiveValue = string | number | boolean;

export type ComboboxValue = ComboboxPrimitiveValue | Array<ComboboxPrimitiveValue>;

export type ValueType = 'single' | 'multiple';

export type EnumerationType = 'comma' | 'chip';

export interface CustomComboboxProps {
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
     * Отображаемый контент в случае пустого результата поиска
     */
    negativeResultContent?: string;
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
     * Функция, которая фильтрует значения списка
     */
    filterFunction?: (childText: string, filterValue?: string) => boolean;
    /**
     * Событие сворачивания/разворачивания дропдауна.
     */
    onToggle?: (opened: boolean, event: SyntheticEvent | Event) => void;
}

export type ComboboxTypeSeparation =
    | {
          /**
           * Тип комбобокса.
           * Варианты: single, multiple
           */
          valueType?: 'single';
          value?: ComboboxPrimitiveValue;
          /**
           * Обработчик изменения выбранного значения.
           */
          onChangeValue?: (value?: ComboboxPrimitiveValue) => void;
      }
    | {
          /**
           * Тип комбобокса.
           * Варианты: single, multiple
           */
          valueType: 'multiple';
          value?: Array<ComboboxPrimitiveValue>;
          /**
           * Обработчик изменения выбранного значения.
           */
          onChangeValue?: (value?: Array<ComboboxPrimitiveValue>) => void;
      };

export type ComboboxProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'size' | 'target' | 'checked' | 'type' | 'maxLength' | 'minLength' | 'onChange'
> &
    CustomComboboxProps &
    ComboboxTypeSeparation;

export interface ControlledRefs {
    contentRef: MutableRefObject<HTMLDivElement | null>;
    inputRef: MutableRefObject<HTMLInputElement | null>;
    inputHelperRef: MutableRefObject<HTMLDivElement | null>;
}

export interface UseFocusControllerProps {
    controlledRefs: ControlledRefs;
    opened?: boolean;
    hasValue?: boolean;
    textContent?: string;
    search?: string;
    values?: Array<Array<ComboboxPrimitiveValue>>;
    valueType?: ValueType;
    closedWithoutChanges?: MutableRefObject<boolean>;
    readOnly?: boolean;
    updateSearch?: (value?: string, opened?: boolean) => void;
    updateFocused: (value: boolean) => void;
    onChipClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
