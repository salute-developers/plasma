import type { InputProps } from '../Input';

export type MaskSelection = { start: number; end: number };

export type MaskVisibility = 'focus' | 'always' | 'never';

export type MaskDefinitions = Readonly<Record<string, RegExp>>;

export type MaskFormatInput = {
    /**
     * Текущее значение без незаполненного окончания.
     */
    value: string;
    selection: MaskSelection;
    /**
     * Вставляемый текст; пустая строка при удалении, undefined при внешнем обновлении.
     */
    input?: string;
};

export type MaskFormatResult = {
    /**
     * Форматированное значение без незаполненного окончания.
     */
    value: string;
    selection: MaskSelection;
    /**
     * Полное представление с направляющей; по умолчанию совпадает с value.
     */
    maskedValue?: string;
};

export type MaskFormatter = (input: MaskFormatInput) => MaskFormatResult;

type MaskDisplayOptions = {
    /**
     * Когда показывать направляющую.
     * @default focus
     */
    visibility?: MaskVisibility;
};

export type MaskPatternOptions = MaskDisplayOptions & {
    /**
     * Шаблон: 0 — цифра, a — латиница, я — кириллица, * — любой символ; \\ экранирует следующий символ.
     */
    pattern: string;
    /**
     * Один повторяемый символ или строка длиной с видимый шаблон.
     * @default _
     */
    guide?: string;
    /**
     * Дополняет или переопределяет стандартные обозначения шаблона. Ключ — один символ.
     */
    definitions?: MaskDefinitions;
    /**
     * Показывать константы перед первой позицией ввода в пустом поле.
     * @default false
     */
    showPrefix?: boolean;
    format?: never;
};

export type MaskFormatterOptions = MaskDisplayOptions & {
    /**
     * Собственные правила форматирования и позиционирования каретки.
     */
    format: MaskFormatter;
    pattern?: never;
    guide?: never;
    definitions?: never;
    showPrefix?: never;
};

export type MaskOptions = MaskPatternOptions | MaskFormatterOptions;

export type MaskValueChange = {
    /**
     * Полная строка с разделителями и незаполненной частью маски.
     */
    maskedValue: string;
    /**
     * Форматированное значение без незаполненного окончания маски.
     */
    value: string;
};

export type MaskProps = Omit<InputProps, 'value' | 'defaultValue' | 'renderInput' | 'type'> & {
    /**
     * Шаблон строкой или объект с настройками шаблона либо форматтером. Без mask поле принимает обычный текст.
     */
    mask?: string | MaskOptions;
    /**
     * Управляемое значение: исходная или форматированная строка.
     */
    value?: string;
    /**
     * Начальное значение неуправляемого поля.
     */
    defaultValue?: string;
    /**
     * Изменение форматированного значения.
     */
    onValueChange?: (params: MaskValueChange) => void;
    /**
     * Типы текстовых полей, поддерживающие выделение и управление кареткой. @default text
     */
    type?: 'text' | 'tel' | 'search' | 'url';
};
