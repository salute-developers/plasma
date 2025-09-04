import type { ChangeEvent, InputHTMLAttributes } from 'react';
import type { NumberFormatValues, NumericFormatProps } from 'react-number-format';

export type InputComponentOmittedProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'size' | 'defaultValue' | 'onChange' | 'onFocus' | 'onBlur' | 'type'
>;

export type CustomNumericFormatProps = Omit<
    NumericFormatProps,
    | 'size'
    | 'getInputRef'
    | 'onValueChange'
    | 'thousandSeparator'
    | 'decimalSeparator'
    | 'thousandsGroupStyle'
    | 'decimalScale'
    | 'fixedDecimalScale'
    | 'allowNegative'
    | 'allowLeadingZeros'
    | 'displayType'
    | 'renderText'
    | 'valueIsNumericString'
    | 'isAllowed'
    | 'suffix'
    | 'prefix'
>;

export type CustomNumberFormatProps = {
    /**
     * Разделитель тысяч.
     * Может быть строкой (например, ",") или булевым значением.
     * @default ' ' (пробел)
     * @example 123 456 789
     */
    thousandSeparator?: boolean | string;
    /**
     * Разделитель десятичных знаков (например, ".").
     * @default .
     * @example 123.456
     */
    decimalSeparator?: string;
    /**
     * Стиль группировки тысяч:
     * - 'thousand' (123 456 789),
     * - 'lakh' (индийский стиль, 12 34 56 789),
     * - 'wan' (китайский стиль, 1 2345 6789),
     * - 'none' (без группировки).
     */
    thousandsGroupStyle?: 'thousand' | 'lakh' | 'wan' | 'none';
    /**
     * Количество знаков после запятой.
     * @default 3
     */
    decimalScale?: number;
    /**
     * Фиксирует количество знаков после запятой, даже если число их не содержит (добавляет нули).
     */
    fixedDecimalScale?: boolean;
    /**
     * Разрешает ввод отрицательных чисел.
     */
    allowNegative?: boolean;
    /**
     * Разрешает ведущие нули (например, "0123").
     */
    allowLeadingZeros?: boolean;
    /**
     * Функция для валидации входного значения.
     * Если эта функция возвращает false, метод onChange не будет вызван, и значение ввода не изменится.
     */
    isAllowed?: (values: NumberFormatValues) => boolean;
    /**
     * Callback, вызываемый при изменении значения в поле ввода.
     * Принимает событие изменения (ChangeEvent) и объект NumberFormatValues:
     * ```
     * floatValue: number | undefined;
     * formattedValue: string;
     * value: string;
     * ```
     */
    onChange?: (event?: ChangeEvent<HTMLInputElement>, values?: NumberFormatValues) => void;
} & InputComponentOmittedProps;
