import type { HTMLAttributes, ReactNode } from 'react';

export interface AnswerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'size' | 'title'> {
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
}

export interface AnswerRootProps
    extends Pick<AnswerProps, 'view' | 'size'>,
        Omit<HTMLAttributes<HTMLDivElement>, 'size' | 'title'> {}
