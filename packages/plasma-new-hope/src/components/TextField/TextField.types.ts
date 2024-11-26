import type { MutableRefObject, KeyboardEvent, ChangeEvent, ReactNode } from 'react';

import type { InputHTMLAttributes } from '../../types';
import type { PopoverPlacement, PopoverPlacementBasic } from '../Popover';

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
          /**
           * Внешний вид chip.
           */
          chipType?: never;
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
          /**
           * Внешний вид chip.
           */
          chipType?: 'default' | 'text';
      };

export type RequiredProps = {
    /**
     * Флаг обязательности поля
     */
    required?: boolean;
    /**
     * Задает выравнивание индикатора обязательности поля
     * @default right
     */
    requiredPlacement?: 'left' | 'right';
    /**
     * Флаг необязательности поля
     */
    optional?: boolean;
};

type ClearProps =
    | {
          /**
           * view применяется с clear-токенами
           */
          clear?: boolean;
          /**
           * отобразить ли divider
           */
          hasDivider?: boolean;
      }
    | {
          /**
           * view применяется с clear-токенами
           */
          clear?: false;
          /**
           * отобразить ли divider
           */
          hasDivider?: never;
      };

export type LabelProps = {
    /**
     * Метка-подпись к элементу
     */
    label?: string;
    /**
     * Расположение лейбла.
     */
    labelPlacement?: string;
    /**
     * Одновременно отображает label и placeholder (при пустом вводе)
     */
    keepPlaceholder?: boolean;
};

type HintProps =
    | {
          /**
           * Текст тултипа
           */
          hintText: string;
          /**
           * Способ открытия тултипа - наведение или клик мышью
           */
          hintTrigger?: 'hover' | 'click';
          /**
           * Вид тултипа
           */
          hintView?: string;
          /**
           * Размер тултипа
           */
          hintSize?: string;
          /**
           * Иконка, рядом с которым произойдет вызов всплывающего окна.
           * Если свойство не задано, применится иконка по умолчанию.
           */
          hintTargetIcon?: ReactNode;
          /**
           * Направление раскрытия тултипа.
           */
          hintPlacement?: PopoverPlacement | Array<PopoverPlacementBasic>;
          /**
           * Видимость стрелки (хвоста).
           */
          hintHasArrow?: boolean;
          /**
           * Отступ окна относительно элемента, у которого оно вызвано.
           * @default
           * [0, 8]
           */
          hintOffset?: [number, number];
          /**
           * Ширина окна (в rem).
           */
          hintWidth?: string;
          /**
           * Слот для контента слева, например `Icon`.
           */
          hintContentLeft?: ReactNode;
      }
    | {
          hintTrigger?: never;
          hintText?: never;
          hintView?: never;
          hintSize?: never;
          hintTargetIcon?: never;
          hintPlacement?: never;
          hintHasArrow?: never;
          hintOffset?: never;
          hintWidth?: never;
          hintContentLeft?: never;
      };

export type TextFieldPropsBase = {
    /**
     * Метка-подпись к элементу справа.
     */
    titleCaption?: ReactNode;
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
} & LabelProps &
    RequiredProps &
    ClearProps &
    HintProps &
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

export type TextFieldRootProps = {
    size?: string;
    view?: string;
    hintView?: string;
    hintSize?: string;
    clear?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    labelPlacement?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'required'>;

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
