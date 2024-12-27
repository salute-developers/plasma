import type { HTMLAttributes, ReactNode } from 'react';

export type NoteProps = {
    /**
     * Заголовок к Note.
     */
    title?: string;
    /**
     * Текст к Note.
     */
    text?: string;
    /**
     * Слот под иконку слева от контента.
     */
    contentBefore?: ReactNode;
    /**
     * Размерность слота под иконку.
     * @default 'fixed'
     */
    contentBeforeSizing?: 'fixed' | 'scalable';
    /**
     * Компонент растягивается на всю доступную ширину и высоту.
     */
    stretch?: boolean;
    /**
     * Ширина компонента.
     */
    width?: string | number;
    /**
     * Высота компонента.
     */
    height?: string | number;
    /**
     * Вид компонента.
     */
    view?: string;
    /**
     * Размер компонента.
     */
    size?: string;
} & HTMLAttributes<HTMLDivElement>;
