import type { AnchorHTMLAttributes, ReactNode } from 'react';

type LinkButtonCustomProps = {
    /**
     * Текстовая надпись
     */
    text?: string;
    /**
     * Слот для контента справа, например `Icon`
     */
    contentRight?: ReactNode;
    /**
     * Слот для контента слева, например `Icon`
     */
    contentLeft?: ReactNode;
    /**
     * У кнопки состояние загрузки
     */
    isLoading?: boolean;
    /**
     * Слот для контента загрузки
     */
    loader?: ReactNode;
    /**
     * Кнопка неактивна
     */
    disabled?: boolean;
    /**
     * Вид кнопки
     */
    view?: string;
    /**
     * Размер кнопки
     */
    size?: string;
};

export type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & LinkButtonCustomProps;
