import type { HTMLAttributes, ReactNode } from 'react';

export type AnswerProps = {
    /**
     * Заголовок ответа
     */
    title?: ReactNode;
    /**
     * Контент ответа
     */
    content?: ReactNode;
    /**
     * Нижняя часть ответа
     */
    footer?: ReactNode;
    /**
     * Загрузка
     */
    isLoading?: boolean;
    /**
     * Заголовок при загрузке
     */
    loaderTitle?: string;
    /**
     * Кастомный лоадер
     */
    customLoader?: ReactNode;
    /**
     * Ошибка
     */
    isError?: boolean;
    /**
     * Заголовок при ошибке
     */
    errorTitle?: string;
    /**
     * Подпись при ошибке
     */
    errorDescription?: string;
    /**
     * Кастомная ошибка
     */
    customError?: ReactNode;
    /**
     * Вид компонента
     */
    view?: string;
    /**
     * Размер компонента
     */
    size?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'size'>;

export type AnswerRootProps = Pick<AnswerProps, 'view' | 'size'> & Omit<HTMLAttributes<HTMLDivElement>, 'size'>;
