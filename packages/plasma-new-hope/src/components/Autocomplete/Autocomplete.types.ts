import type { InputHTMLAttributes, ReactNode } from 'react';

import { TextFieldPropsBase } from '../TextField/TextField.types';

export type SuggestionItemType = {
    /**
     * Метка-подпись к подсказке
     */
    label: string;
    /**
     * Слот для контента слева
     */
    contentLeft?: ReactNode;
    /**
     * Слот для контента справа
     */
    contentRight?: ReactNode;
};

export type BaseProps = {
    /**
     * Размер контрола.
     * @default l
     */
    size?: string;
    /**
     * Вид контрола.
     * @default default
     */
    view?: string;
    /**
     * Расположение лейбла.
     * @default outer
     */
    labelPlacement?: string;
    /**
     * Компонент доступен только для чтения.
     */
    readOnly?: boolean;
    /**
     * Компонент неактивен.
     */
    disabled?: boolean;
    /**
     * Портал для выпадающего списка. Принимает id контейнера или ref.
     */
    portal?: string | React.RefObject<HTMLElement>;
    /**
     * Значение инпута.
     */
    value?: string;
    /**
     * Массив подсказок.
     */
    suggestions?: SuggestionItemType[];
    /**
     * Минимальное число введенных символов, при котором открывается дропдаун.
     * @default 2
     */
    threshold?: number;
    /**
     * Коллбэк фильтра подсказок.
     */
    filter?: (data: SuggestionItemType) => boolean;
    /**
     * Коллбэк, который срабатывает при выборе подсказки.
     */
    onSuggestionSelect?: (data: SuggestionItemType) => void;
    /**
     * Коллбэк, срабатывающий при скролле.
     */
    onScroll?: (e: React.UIEvent<HTMLUListElement>) => void;
    /**
     * Максимальная высота выпадающего списка подсказок.
     */
    listMaxHeight?: string;
    /**
     * Ширина выпадающего списка подсказок.
     */
    listWidth?: string;
    /**
     * Коллбэк для рендера кастомного списка подсказок.
     */
    renderList?: (data?: SuggestionItemType[]) => ReactNode;
    /**
     * Коллбэк для рендера элемента в конце выпадающего списка.
     */
    renderListEnd?: () => ReactNode;
};

export type AutocompleteProps = BaseProps &
    Omit<
        TextFieldPropsBase,
        'chips' | 'onChangeChips' | 'enumerationType' | 'required' | 'optional' | 'requiredPlacement'
    > &
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'required'>;
