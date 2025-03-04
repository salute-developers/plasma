import React, { InputHTMLAttributes, ReactNode } from 'react';

import { DistributiveOmit } from '../../types';
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
    /**
     * Изначальное значение.
     */
    defaultValue?: string;
    /**
     * Ячейка для контента в начале выпадающего списка.
     */
    beforeList?: ReactNode;
    /**
     * Ячейка для контента в конце выпадающего списка.
     */
    afterList?: ReactNode;
    /**
     * Виртуализация в выпадающем списке.
     * @default false
     */
    virtual?: boolean;
};

export type AutocompleteProps = BaseProps &
    DistributiveOmit<
        TextFieldPropsBase,
        'chips' | 'onChangeChips' | 'enumerationType' | 'labelPlacement' | 'chipView' | 'chipValidator' | 'chipType'
    > &
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'required'>;

export type FloatingPopoverProps = {
    target: React.ReactNode | ((ref: React.MutableRefObject<HTMLElement | null>) => React.ReactNode);
    children: React.ReactNode;
    opened: boolean;
    portal?: BaseProps['portal'];
    listWidth?: BaseProps['listWidth'];
    offset?: number;
};
