import type { MutableRefObject, KeyboardEvent, ChangeEvent, ReactNode } from 'react';

import type { InputHTMLAttributes } from '../../types';
import type { PopoverPlacement, PopoverPlacementBasic } from '../Popover';

export type TextFieldPrimitiveValue = string | number | boolean;

export type ChipValues = {
    id: string;
    text: TextFieldPrimitiveValue;
};

export type EnumerationType = 'plain' | 'chip';

type ValidationOption<T> = {
    value?: T;
    errorMessage?: string;
};

export type PasswordValidationOptions = {
    minLength?: ValidationOption<number>;
    maxLength?: ValidationOption<number>;
    includeUppercase?: ValidationOption<boolean>;
    includeLowercase?: ValidationOption<boolean>;
    includeDigits?: ValidationOption<boolean>;
    includeSpecialSymbols?: ValidationOption<boolean>;
};

export type EmailValidationOptions = {
    customEmailRegex?: ValidationOption<RegExp>;
    minLength?: ValidationOption<number>;
    maxLength?: ValidationOption<number>;
    minHostLength?: ValidationOption<number>;
    maxHostLength?: ValidationOption<number>;
    minDomainLength?: ValidationOption<number>;
    maxDomainLength?: ValidationOption<number>;
    minZoneLength?: ValidationOption<number>;
    maxZoneLength?: ValidationOption<number>;
    whitelistDomains?: ValidationOption<string[]>;
    blacklistDomains?: ValidationOption<string[]>;
};

type OnValidateArgs = {
    isValid: boolean;
    errorMessage?: string;
};

export type ValidationProps =
    | {
          /*
           * Тип валидации
           */
          validationType?: never;
          /*
           * Опции валидации
           * @description
           * Содержит объект опций валидации с сообщением ошибки
           */
          options?: never;
          /*
           * Состояние сокрытия оригинального пароля
           */
          passwordHidden?: never;
          /*
           * Функция, вызываемая при валидации значения.
           * @description
           * Вызывается при событии onBlur и по нажатию Enter, когда фокус на поле ввода
           */
          onValidate?: never;
      }
    | {
          validationType: 'password';
          options?: PasswordValidationOptions;
          passwordHidden?: boolean;
          onValidate?: (args: OnValidateArgs) => void;
      }
    | {
          validationType: 'email';
          options?: EmailValidationOptions;
          passwordHidden?: never;
          onValidate?: (args: OnValidateArgs) => void;
      };

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

export type RequiredProps = {
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
     * Метка-подпись к элементу
     */
    label?: string;
    /**
     * Расположение лейбла.
     */
    labelPlacement?: 'inner' | 'outer';
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
} & RequiredProps &
    ClearProps &
    HintProps &
    TextFieldChipProps &
    ValidationProps;

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
    labelPlacement?: 'inner' | 'outer';
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

export type UseValidationArgs = {
    validationType?: 'password' | 'email';
    options?: PasswordValidationOptions | EmailValidationOptions;
    onValidate?: (args: OnValidateArgs) => void;
};
