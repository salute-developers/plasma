import type { HTMLAttributes, ReactNode } from 'react';

export type HeaderProps = {
    /**
     * Заголовок
     */
    title: ReactNode;
    /**
     * Подзаголовок / описание
     */
    description?: ReactNode;
    /**
     * Контент перед заголовком (иконка, аватар и т.п.)
     */
    actionBefore?: ReactNode;
    /**
     * Контент после заголовка (кнопка закрытия и т.п.)
     */
    actionAfter?: ReactNode;
    /**
     * Вид компонента
     */
    view?: string;
    /**
     * Размер компонента
     */
    size?: string;
    /**
     * Выравнивание текстового контента
     * @default start
     */
    textAlign?: 'start' | 'center';
    /**
     * Показывать разделитель
     */
    hasDivider?: boolean;
} & HTMLAttributes<HTMLDivElement>;
