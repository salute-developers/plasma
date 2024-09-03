import type { ChangeEvent } from 'react';

import { charType } from './utils/constants';

export type SelectRange = {
    start: number;
    end: number;
};

export type MaskInfo = {
    str?: string;
    regexp?: RegExp;
    char?: string;
};

export type MaskItemsMap = {
    [key: string]: MaskInfo;
};

export type InputValueInfo = {
    char: string;
    type: typeof charType[keyof typeof charType];
};

export type InputState = {
    value: Array<InputValueInfo> | string;
    visibleValue: string;
    maskedValue: string;
    selection: SelectRange;
};

export type ReformatFn = (params: {
    value: Array<InputValueInfo> | string;
    selection: SelectRange;
    input?: string;
}) => InputState;

export type CreateInputArgs = {
    value: string;
    mask?: string;
    maskChar?: string;
    maskString?: string;
    showPrefix?: boolean;
    reformat?: ReformatFn;
};

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
    showPrefix?: boolean;
    /**
     * Функция форматирования, которая позволяет задать собственные правила форматирования.
     */
    reformat?: ReformatFn;
    /**
     * Callback при изменении значения маски
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>, params: { maskedValue: string; value: string }) => void;
};
