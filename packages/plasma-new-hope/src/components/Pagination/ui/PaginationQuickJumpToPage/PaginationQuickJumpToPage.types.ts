import type { HTMLAttributes, FocusEvent } from 'react';

export type PaginationQuickJumpToPageRoot = {
    /*
     * Предыдущее значение страниц
     */
    prevPageValue?: number;
    /*
     * Placeholder TextField'a для быстрого прыжка на страницу
     */
    placeholderQuickJump?: string;

    /*
     * Текст для быстрого прыжка на страницу
     */
    textQuickJump?: string;

    /*
     * Функция которая исполнятеся при изменении
     */
    onChangeValue?: (page?: number) => void;
    /**
     * Функция которая исполняeтся при фокусе на поле ввода перехода по страницам
     */
    onFocusQuickJump?: (e: FocusEvent<HTMLInputElement>) => void;
    /**
     * Функция которая исполняeтся при потере фокусе на поле ввода перехода по страницам
     */
    onBlurQuickJump?: (e: FocusEvent<HTMLInputElement>) => void;
};

export type PaginationQuickJumpToPageProps = HTMLAttributes<HTMLDivElement> & PaginationQuickJumpToPageRoot;
