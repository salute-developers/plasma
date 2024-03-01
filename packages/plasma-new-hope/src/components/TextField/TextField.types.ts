import type { InputHTMLAttributes, KeyboardEvent } from 'react';

import type { Filter } from '../../engines/types';

export interface TextFieldPropsBase {
    /**
     * Метка-подпись к элементу
     */
    label?: string;
    /**
     * Расположение лейбла.
     */
    labelPlacement?: 'inner' | 'outer';
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
     * Callback по нажатию Enter
     */
    onSearch?: (value: string, event?: KeyboardEvent<HTMLInputElement>) => void;
}

export interface TextFieldPropsVariations extends TextFieldPropsBase {
    /**
     * Размер контрола.
     */
    size?: string;
    /**
     * Вид контрола.
     */
    view?: string;
}

export type TextFieldProps = Filter<InputHTMLAttributes<HTMLInputElement>, 'size'> & TextFieldPropsVariations;
