import type { InputHTMLAttributes } from 'react';
import type { IMaskItem, IInputValue, ISelectRange, IInputState } from '@salutejs/input-core';

export type MaskProps = {
    /**
     * Маска.
     * Поддерживаются следующие символы:
     * * 0 — любая цифра 0-9
     * * \* — любой символ
     * * a — A-Z, a-z
     * * я — А-Я, а-я, ё, Ё
     * * q — буква "q"
     * * 2 — цифра "2"
     * * \a — "\\" - символ экранирования; "a" - буква
     */
    mask?: string;
    /**
     * Символ маскирования.
     */
    maskChar?: string;
    /**
     * Строка, которая будет отображена в незаполненную часть маски.
     * Если передать maskString, то maskChar игнорируется.
     */
    maskString?: string;
    /**
     * Набор соответствий маски и маскируемого значения.
     */
    maskFormat?: Array<IMaskItem>;
    /**
     * Отображать ли маску во время ввода.
     */
    showMask?: boolean;
    /**
     * Отображать ли маску всегда.
     */
    alwaysShowMask?: boolean;
    /**
     * Отображать ли префикс маски. Например у маски телефона "+7"
     */
    showStartChars?: boolean;
    /**
     * Значение по умолчанию.
     */
    defaultValue?: string;
    /**
     * Функция форматирования, которая позволяет задать собственные правила форматирования.
     */
    reformat?: (params: { value: Array<IInputValue> | string; selection: ISelectRange; input?: string }) => IInputState;
    /**
     * Callback при изменении значения маски с дополнительной информацией.
     */
    onValueChange?: (params: { maskedValue: string; value: string }) => void;
};

export type CustomInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'size' | 'defaultValue' | 'onChange' | 'onFocus' | 'onBlur'
>;
