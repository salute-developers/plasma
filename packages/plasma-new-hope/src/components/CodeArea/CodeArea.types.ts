import type { ReactNode, HTMLAttributes } from 'react';

export type CodeAreaProps = {
    /**
     * Код
     */
    children?: string;
    /**
     * Язык программирования
     * @default text
     */
    language?: string;
    /**
     * Показывать ли номера строк
     * @default false
     */
    showLineNumbers?: boolean;
    /**
     * Слот для Outer
     */
    contentOuter?: ReactNode;
    /**
     * Слот для Header
     */
    contentHeader?: ReactNode;
    /**
     * Слот для Action
     */
    contentAction?: ReactNode;
    /**
     * Показывать ли разделитель снизу Header
     * @default false
     */
    hasDivider?: boolean;

    /**
     * Размер компонента
     */
    size?: string;
    /**
     * Вид компонента
     */
    view?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>;
