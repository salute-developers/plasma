import type { HTMLAttributes, ReactNode } from 'react';

export interface HeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
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
}
