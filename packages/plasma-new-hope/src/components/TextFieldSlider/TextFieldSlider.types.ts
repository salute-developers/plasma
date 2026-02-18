import type { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';

import type { HintProps, RequiredProps, LabelProps } from '../TextField/TextField.types';

export type LayoutOptions = {
    /**
     * Отображать ли значения минимума и максимума интервала.
     */
    hasScale?: boolean;
    /**
     * Метка-подпись к элементу справа.
     */
    titleCaption?: ReactNode;
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
} & LabelProps;

export type RequiredOptions = RequiredProps;
export type HintOptions = HintProps;

type Values = {
    raw: string | number | undefined;
    formatted: string | number | undefined;
};

export type SliderProps = {
    /**
     * Минимальное значение
     */
    min: number;
    /**
     * Максимальное значение
     */
    max: number;
    /**
     * Шаг изменения значения
     */
    step?: number;
    /**
     * Отображение ручки слайдера
     * @default true
     */
    hasPointer?: boolean;
    /**
     * Вызывается при перемещении ползунка
     */
    onChangeSlider?: (values?: Values) => void;
};

type TextFieldProps = {
    /**
     * Вызывается при изменении значения в поле ввода
     */
    onChangeTextField?: (values?: Values) => void;
};

export type TextFieldSliderProps = {
    /**
     * Значение (контролируемый вариант компонента)
     */
    value?: number | string;
    /**
     * Значение по умолчанию (неконтролируемый вариант компонента)
     */
    defaultValue?: number;
    /**
     * Количество знаков после запятой
     * @default 2
     */
    decimalScale?: number;
    /**
     * Стиль группировки тысяч:
     * - 'thousand' (123 456 789),
     * - 'lakh' (индийский стиль, 12 34 56 789),
     * - 'wan' (китайский стиль, 1 2345 6789),
     * - 'none' (без группировки).
     */
    thousandsGroupStyle?: 'thousand' | 'lakh' | 'wan' | 'none';
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
     * Фиксирует количество знаков после запятой, даже если число их не содержит (добавляет нули).
     */
    fixedDecimalScale?: boolean;
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
     * Вид слайдера.
     */
    sliderView?: string;
    /**
     * Компонент доступен только для чтения.
     */
    readOnly?: boolean;
    /**
     * Компонент неактивен.
     */
    disabled?: boolean;
    /**
     * Вызывается при изменении значения компонента
     */
    onChange?: (event?: ChangeEvent<HTMLInputElement>, values?: Values) => void;
} & HintOptions &
    RequiredOptions &
    LayoutOptions &
    TextFieldProps &
    SliderProps &
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'required' | 'value' | 'onChange'>;

export type TextFiledSliderRootProps = Pick<
    TextFieldSliderProps,
    'view' | 'size' | 'className' | 'style' | 'disabled' | 'readOnly' | 'sliderView'
>;
