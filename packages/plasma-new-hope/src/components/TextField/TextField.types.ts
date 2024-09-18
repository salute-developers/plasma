import type { MutableRefObject, KeyboardEvent, ChangeEvent } from 'react';

import type { InputHTMLAttributes } from '../../types';

export type TextFieldPrimitiveValue = string | number | boolean;

export type ChipValues = {
    id: string;
    text: TextFieldPrimitiveValue;
};

export type EnumerationType = 'plain' | 'chip';

type TextFieldChipProps =
    | {
          /**
           * Выбранные значения.
           */
          chips?: never;
          /**
           * Обработчик изменения выбранных значений.
           */
          onChangeChips?: never;
          /**
           * Тип перечисления значений.
           * Варианты: plain, chip
           */
          enumerationType?: 'plain';
          /**
           * Callback по нажатию Enter
           */
          onSearch?: (value: string, event?: KeyboardEvent<HTMLInputElement>) => void;
      }
    | {
          /**
           * Тип перечисления значений.
           * Варианты: plain, chip
           */
          enumerationType: 'chip';
          /**
           * Callback по нажатию Enter
           */
          onSearch?: never;
          /**
           * Выбранные значения.
           */
          chips?: Array<TextFieldPrimitiveValue>;
          /**
           * Обработчик изменения выбранных значений.
           */
          onChangeChips?: (value: Array<TextFieldPrimitiveValue>) => void;
      };

type RequiredProps = {
    /**
     * Задает выравнивание индикатора обязательности поля
     * @default right
     */
    requiredPlacement?: 'left' | 'right';
} & (
    | {
          /**
           * Флаг обязательности поля
           */
          required: true;
          /**
           * Флаг необязательности поля
           */
          optional?: never | false;
      }
    | {
          /**
           * Флаг необязательности поля
           */
          optional?: true;
          /**
           * Флаг обязательности поля
           */
          required?: never | false;
      }
);

export type TextFieldPropsBase = {
    /**
     * Метка-подпись к элементу
     */
    label?: string;
    /**
     * Расположение лейбла.
     */
    labelPlacement?: 'inner' | 'outer';
    /**
     * Вспомогательный текст снизу слева для поля ввода.
     */
    leftHelper?: string;
    /**
     * Слот для контента слева.
     */
    contentLeft?: React.ReactElement;
    /**
     * Слот для контента справа.
     */
    contentRight?: React.ReactElement;
    /**
     * Слот для вспомогательного текста справа.
     */
    textBefore?: string;
    /**
     * Слот для вспомогательного текста слева.
     */
    textAfter?: string;
    /**
     * Callback по нажатию Enter
     */
    onSearch?: (value: string, event?: KeyboardEvent<HTMLInputElement>) => void;
} & RequiredProps &
    TextFieldChipProps;

export type TextFieldProps = {
    /**
     * Размер контрола.
     */
    size?: string;
    /**
     * Вид контрола.
     */
    view?: string;
    /**
     * Компонент доступен только для чтения.
     */
    readOnly?: boolean;
    /**
     * Компонент неактивен.
     */
    disabled?: boolean;
} & TextFieldPropsBase &
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'required'>;

export interface ControlledRefs {
    chipsRefs: MutableRefObject<Array<HTMLButtonElement>>;
    inputRef?: MutableRefObject<HTMLInputElement | null>;
    contentRef?: MutableRefObject<HTMLDivElement | null>;
}

export interface UseKeyNavigationProps {
    controlledRefs: ControlledRefs;
    disabled: boolean;
    readOnly: boolean;
    chips: Array<ChipValues>;
    enumerationType: EnumerationType;
    updateChips: (newChips: Array<ChipValues>, newValues: Array<TextFieldPrimitiveValue>) => void;
    onSearch?: (value: string, event?: KeyboardEvent<HTMLInputElement>) => void;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
