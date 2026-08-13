import type { SyntheticEvent, InputHTMLAttributes, ReactNode, HTMLAttributes } from 'react';
import type { NumberFormatValues } from 'react-number-format';

type SegmentationProps =
    | {
          /**
           * Форма границ компонента.
           */
          segmentation?: 'clear';
          /**
           * Фон поля ввода.
           */
          inputBackgroundType?: never;
      }
    | {
          segmentation?: string;
          inputBackgroundType?: string;
      };

export type NumberInputProps = {
    /**
     * Числовое значение.
     */
    value?: string | number;
    /**
     * Числовое значение по умолчанию.
     */
    defaultValue?: string | number;
    /**
     * Минимальное значение.
     */
    min?: number;
    /**
     * Максимальное значение.
     */
    max?: number;
    /**
     * Шаг изменения значения.
     * @default 1
     */
    step?: number;
    /**
     * Количество знаков после запятой при вычислениях.
     * @default 2
     */
    precision?: number;
    /**
     * Разделитель тысяч.
     * Может быть строкой (например, " ") или булевым значением.
     *
     * @example 123 456 789
     */
    thousandSeparator?: boolean | string;
    /**
     * Разделитель десятичных знаков.
     *
     * @default '.'
     * @example 123.456
     */
    decimalSeparator?: string;
    /**
     * Стиль группировки тысяч:
     * - 'thousand' (123 456 789),
     * - 'lakh' (индийский стиль, 12 34 56 789),
     * - 'wan' (китайский стиль, 1 2345 6789),
     * - 'none' (без группировки).
     *
     * @default 'thousand'
     */
    thousandsGroupStyle?: 'thousand' | 'lakh' | 'wan' | 'none';
    /**
     * Максимальное количество знаков после десятичного разделителя при вводе и отображении.
     * @default 2
     */
    decimalScale?: number;
    /**
     * Фиксирует количество знаков после десятичного разделителя, добавляя нули.
     */
    fixedDecimalScale?: boolean;
    /**
     * Разрешает ввод отрицательных чисел.
     *
     * @default true
     */
    allowNegative?: boolean;
    /**
     * Разрешает ведущие нули.
     *
     * @default false
     */
    allowLeadingZeros?: boolean;
    /**
     * Функция для дополнительной валидации значения при ручном вводе и изменении кнопками.
     * Если функция возвращает false, значение компонента не изменяется.
     */
    isAllowed?: (values: NumberFormatValues) => boolean;
    /**
     * Контрол в состоянии загрузки.
     */
    isLoading?: boolean;
    /**
     * Слот для контента загрузки.
     */
    loader?: ReactNode;
    /**
     * Размер контрола.
     */
    size?: string;
    /**
     * Вид компонента.
     */
    view?: string;
    /**
     * view применяется с clear-токенами
     */
    clear?: boolean;
    /**
     * Форма контрола.
     */
    shape?: string;
    /**
     * Компонент неактивен.
     */
    disabled?: boolean;
    /**
     * Слот для вспомогательного текста слева.
     */
    textBefore?: string;
    /**
     * Слот для вспомогательного текста справа.
     */
    textAfter?: string;
    /**
     * Пользовательская кнопка увеличения.
     */
    customIncrementButton?: ReactNode;
    /**
     * Иконка кнопки увеличения.
     */
    incrementIcon?: ReactNode;
    /**
     * Пользовательская кнопка уменьшения.
     */
    customDecrementButton?: ReactNode;
    /**
     * Иконка кнопки уменьшения.
     */
    decrementIcon?: ReactNode;
    /**
     * Доступность ввода значения вручную.
     */
    isManualInput?: boolean;
    /**
     * Отображение компонента при отсутствии значения.
     * @default 'input'
     */
    displayWithoutValue?: 'input' | 'increment' | 'decrement';
    /**
     * Поведение кнопок при достижении крайних значений (min/max).
     * 'disabled' — кнопка становится неактивной.
     * 'hidden' — deprecated
     * @default 'disabled'
     */
    limitBehavior?: 'disabled' | 'hidden';
    /**
     * Вызывается при изменении значения.
     */
    onChange?: (event: SyntheticEvent<HTMLInputElement> | null, value: number | string | undefined) => void;
    /**
     * Вызывается при нажатии на кнопку увеличения значения.
     */
    onIncrement?: (value: number) => void;
    /**
     * Вызывается при нажатии на кнопку уменьшения значения.
     */
    onDecrement?: (value: number) => void;
} & SegmentationProps &
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'value' | 'defaultValue' | 'type'>;

export type NumberInputRootProps = {
    size?: string;
    view?: string;
    shape?: string;
    segmentation?: string;
    clear?: boolean;
    disabled?: boolean;
    isLoading?: boolean;
} & HTMLAttributes<HTMLDivElement>;
