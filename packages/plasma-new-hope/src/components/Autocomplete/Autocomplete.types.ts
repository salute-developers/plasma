import React, { InputHTMLAttributes, ReactNode, CSSProperties } from 'react';
import { DistributiveOmit } from 'src/types';

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

export type AutocompleteProps<T extends SuggestionItemType = SuggestionItemType> = {
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
     * CSS-свойство z-index для выпадающего списка.
     */
    zIndex?: CSSProperties['zIndex'];
    /**
     * Значение поля ввода.
     */
    value?: string;
    /**
     * Значение поля ввода по-умолчанию.
     */
    defaultValue?: string;
    /**
     * Массив подсказок.
     */
    suggestions?: T[];
    /**
     * Минимальное число введенных символов, при котором открывается дропдаун.
     * @default 2
     */
    threshold?: number;
    /**
     * Коллбэк фильтра подсказок.
     */
    filter?: (data: T) => boolean;
    /**
     * Коллбэк, который срабатывает при выборе подсказки.
     */
    onSuggestionSelect?: (data: T) => void;
    /**
     * Коллбэк, срабатывающий при скролле.
     */
    onScroll?: (e: React.UIEvent<HTMLElement>) => void;
    /**
     * Максимальная высота выпадающего списка подсказок.
     * @default 25rem
     */
    listMaxHeight?: string;
    /**
     * Ширина выпадающего списка подсказок.
     */
    listWidth?: string;
    /**
     * Коллбэк для рендера кастомного списка подсказок.
     */
    renderList?: (data?: T[]) => ReactNode;
    /**
     * Коллбэк для рендера элемента в конце выпадающего списка.
     */
    renderListEnd?: () => ReactNode;
    /**
     * Callback для кастомной настройки элемента в выпадающем списке.
     */
    renderItem?: (item: T) => React.ReactNode;

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
    /**
     * Отображение выпадающего списка сверху, если снизу недостаточно места.
     * @default false
     */
    flip?: boolean;

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
} & DistributiveOmit<
    TextFieldPropsBase,
    'chips' | 'onChangeChips' | 'enumerationType' | 'labelPlacement' | 'chipView' | 'chipValidator' | 'chipType'
> &
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'required' | 'value' | 'defaultValue' | 'onScroll'>;

export type FloatingPopoverProps = {
    target: React.ReactNode | ((ref: React.MutableRefObject<HTMLElement | null>) => React.ReactNode);
    children: React.ReactNode;
    opened: boolean;
    portal?: AutocompleteProps['portal'];
    zIndex?: AutocompleteProps['zIndex'];
    listWidth?: AutocompleteProps['listWidth'];
    offset?: [number, number];
    flip?: boolean;
};
