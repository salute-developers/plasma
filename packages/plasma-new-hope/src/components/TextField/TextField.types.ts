import type { MutableRefObject, KeyboardEvent, ChangeEvent, ReactNode } from 'react';

import type { InputHTMLAttributes } from '../../types';
import type { PopoverPlacement, PopoverPlacementBasic } from '../Popover';

export type TextFieldPrimitiveValue = string | number | boolean;

export type ChipValues = {
    id: string;
    text: TextFieldPrimitiveValue;
};

export type EnumerationType = 'plain' | 'chip';

type ChipValidatorReturn = {
    view?: string;
};

type TextFieldChipProps =
    | {
          /**
           * Выбранные значения.
           * @deprecated
           */
          chips?: never;
          /**
           * Обработчик изменения выбранных значений.
           * @deprecated
           */
          onChangeChips?: never;
          /**
           * Тип перечисления значений.
           * Варианты: plain, chip
           * @deprecated
           */
          enumerationType?: 'plain';
          /**
           * Callback по нажатию Enter
           * @deprecated
           */
          onSearch?: (value: string, event?: KeyboardEvent<HTMLInputElement>) => void;
          /**
           * Внешний вид chip.
           * @deprecated
           */
          chipType?: never;
          /*
           * Внешний вид чипа в варианте `enumerationType="chip"`.
           * @deprecated
           */
          chipView?: never;
          /**
           * Функция для валидации значений chip
           * @deprecated
           */
          chipValidator?: never;
      }
    | {
          /**
           * Тип перечисления значений.
           * Варианты: plain, chip
           * @deprecated
           */
          enumerationType: 'chip';
          /**
           * Callback по нажатию Enter
           * @deprecated
           */
          onSearch?: never;
          /**
           * Выбранные значения.
           * @deprecated
           */
          chips?: Array<TextFieldPrimitiveValue>;
          /**
           * Обработчик изменения выбранных значений.
           * @deprecated
           */
          onChangeChips?: (value: Array<TextFieldPrimitiveValue>) => void;
          /**
           * Внешний вид chip.
           * @deprecated
           */
          chipType?: 'default' | 'text';
          /*
           * Внешний вид чипа в варианте `enumerationType="chip"`.
           * @deprecated
           */
          chipView?: string;
          /**
           * Функция для валидации значений chip
           * @deprecated
           */
          chipValidator?: (value: string) => ChipValidatorReturn;
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
    /**
     * Подпись для указания необязательности поля
     */
    optionalText?: string;
    /**
     * Флаг наличия индикатора обязательности поля
     * @default true
     */
    hasRequiredIndicator?: boolean;
};

type ClearProps =
    | {
          /**
           * view применяется с clear-токенами
           * @deprecated
           * use `appearance="clear"` instead
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

export type HintProps =
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
           * Расположение иконки подсказки, когда отсутствует label
           * или же он имеет labelPlacement='inner'.
           * @default `outer`
           */
          hintTargetPlacement?: 'inner' | 'outer';
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
          hintTargetPlacement?: never;
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
    leftHelper?: ReactNode;
    /**
     * Слот для контента слева.
     */
    contentLeft?: React.ReactElement;
    /**
     * Слот для контента справа.
     */
    contentRight?: React.ReactElement;
    /**
     * Слот для вспомогательного текста слева.
     */
    textBefore?: string;
    /**
     * Слот для вспомогательного текста справа.
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
     * Стиль для UI конфигурации
     * Влияет на выбор предустановленного набора токенов
     * @default default
     */
    appearance?: 'default' | 'clear';
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
    chipView?: string;
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
