import type {
    KeyboardEvent,
    FocusEvent,
    ChangeEvent,
    ReactNode,
    ReactElement,
    MutableRefObject,
    HTMLAttributes,
} from 'react';

import type { PopoverPlacement, PopoverPlacementBasic } from '../Popover';

export type TextfieldPrimitiveValue = string | number;

export type RangeDividerVariants =
    | {
          firstTextfieldTextBefore: string;
          secondTextfieldTextBefore: string;
          dividerVariant?: 'none';
          dividerIcon?: never;
      }
    | {
          dividerVariant?: 'dash';
          dividerIcon?: never;
          firstTextfieldTextBefore?: string;
          secondTextfieldTextBefore?: string;
      }
    | {
          dividerIcon?: ReactNode;
          dividerVariant?: 'icon';
          firstTextfieldTextBefore?: string;
          secondTextfieldTextBefore?: string;
      };

export type BaseCallbackChangeInstance = (
    event: ChangeEvent<HTMLInputElement>,
    value?: TextfieldPrimitiveValue,
) => void;
export type BaseCallbackKeyboardInstance = (
    event: KeyboardEvent<HTMLInputElement>,
    value?: TextfieldPrimitiveValue,
) => void;

export type RangeInputRefs = {
    firstTextField: () => MutableRefObject<HTMLInputElement | null>;
    secondTextField: () => MutableRefObject<HTMLInputElement | null>;
};

type ClearProps =
    | {
          /**
           * Стиль для UI конфигурации
           * Влияет на выбор предустановленого набора токенов
           * @default default
           */
          appearance?: 'default';
          /**
           * Отображение разделителя для `appearance='clear'`
           */
          hasClearDivider?: never;
      }
    | {
          appearance?: 'clear';
          hasClearDivider?: boolean;
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

export type RangeInnerProps = {
    /**
     * Метка-подпись к элементу
     */
    label?: string;
    /**
     * Вспомогательный текст снизу слева для поля ввода.
     */
    leftHelper?: string;
    /**
     * Метка-подпись к элементу справа
     */
    titleCaption?: ReactNode;
    /**
     * Слот для контента слева
     */
    contentLeft?: ReactNode;
    /**
     * Слот для контента справа
     */
    contentRight?: ReactNode;
    /**
     * Значение первого поля ввода
     */
    firstValue?: TextfieldPrimitiveValue;
    /**
     * Значение второго поля ввода
     */
    secondValue?: TextfieldPrimitiveValue;
    /**
     * Некорректное значение первого поля ввода
     */
    firstValueError?: boolean;
    /**
     * Некорректное значение второго поля ввода
     */
    secondValueError?: boolean;
    /**
     * Корректное значение первого поля ввода
     */
    firstValueSuccess?: boolean;
    /**
     * Корректное значение второго поля ввода
     */
    secondValueSuccess?: boolean;
    /**
     * Значение первого поля ввода
     */
    firstPlaceholder?: string;
    /**
     * Значение второго поля ввода
     */
    secondPlaceholder?: string;
    /**
     * Слот для контента слева для первого поля ввода
     */
    firstTextfieldContentLeft?: ReactElement;
    /**
     * Слот для контента справа для второго поля ввода
     */
    firstTextfieldContentRight?: ReactElement;
    /**
     * Слот для контента слева для первого поля ввода
     */
    secondTextfieldContentLeft?: ReactElement;
    /**
     * Слот для контента справа для второго поля ввода
     */
    secondTextfieldContentRight?: ReactElement;
    /**
     * Слот для вспомогательного текста справа для первого поля ввода
     */
    firstTextfieldTextAfter?: string;
    /**
     * Слот для вспомогательного текста справа для второго поля ввода
     */
    secondTextfieldTextAfter?: string;
    /**
     * Автозаполнение полей.
     */
    autoComplete?: string;
    /**
     * Вариант отображения
     */
    view?: string;
    /**
     * Размер компонента
     */
    size?: string;
    /**
     * Компонент доступен только для чтения
     */
    readOnly?: boolean;
    /**
     * Компонент неактивен
     */
    disabled?: boolean;
    /**
     * Задает выравнивание индикатора обязательности поля
     * @default right
     */
    requiredIndicatorPlacement?: 'left' | 'right';
    /**
     * Флаг обязательности поля
     */
    required?: boolean;
    /**
     * Флаг наличия индикатора обязательности поля
     * @default true
     */
    hasRequiredIndicator?: boolean;
    /**
     * Коллбэк, вызываемый при изменении первого поля ввода
     */
    onChangeFirstValue?: BaseCallbackChangeInstance;
    /**
     * Коллбэк, вызываемый при изменении второго поля ввода
     */
    onChangeSecondValue?: BaseCallbackChangeInstance;
    /**
     * Коллбэк, вызываемый при нажатии `Enter` в первом поле ввода
     */
    onSearchFirstValue?: BaseCallbackKeyboardInstance;
    /**
     * Коллбэк, вызываемый при нажатии `Enter` во втором поле ввода
     */
    onSearchSecondValue?: BaseCallbackKeyboardInstance;

    /**
     * Коллбэк, вызываемый при фокусе на первое поле ввода
     */
    onFocusFirstTextfield?: (event: FocusEvent<HTMLInputElement>) => void;
    /**
     * Коллбэк, вызываемый при фокусе на второе поле ввода
     */
    onFocusSecondTextfield?: (event: FocusEvent<HTMLInputElement>) => void;
    /**
     * Коллбэк, вызываемый при потере фокуса первым полем ввода
     */
    onBlurFirstTextfield?: (event: FocusEvent<HTMLInputElement>) => void;
    /**
     * Коллбэк, вызываемый при потере фокуса вторым полем ввода
     */
    onBlurSecondTextfield?: (event: FocusEvent<HTMLInputElement>) => void;
} & RangeDividerVariants &
    HintProps &
    ClearProps;

export type RangeProps = RangeInnerProps & HTMLAttributes<HTMLDivElement>;

export type RangeRootProps = {
    size?: string;
    view?: string;
    hintView?: string;
    hintSize?: string;
    readOnly?: boolean;
    disabled?: boolean;
} & Omit<HTMLAttributes<HTMLDivElement>, 'size'>;
