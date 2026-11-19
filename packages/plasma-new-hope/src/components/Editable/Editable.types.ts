import type { ComponentPropsWithRef, FC, InputHTMLAttributes, ReactNode } from 'react';

export interface EditableProps<T> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /**
     * Компонент, для которого будет добавлена возможность редактирования
     */
    textComponent: T[keyof T];
    /**
     * Значение текста
     */
    value?: string;
    /**
     * Проверка правописания
     */
    spellCheck?: 'true' | 'false';
    /**
     * Максимальная длина текста в символах
     */
    maxLength?: number;
    /**
     * Иконка справа от текста, для корректной работы hover на иконке нужно добавить свойство color="inherit"
     */
    icon?: ReactNode;
    /**
     * Текст для placeholder и aria-label
     */
    placeholder?: string;
    /**
     * Размер контрола.
     */
    size?: string;
    /**
     * Вид контрола.
     */
    view?: string;
    /**
     * Перенос текста на новую строку при переполнении
     */
    multiline?: boolean;
}

export type TypographyVariants = {
    [key: string]: FC<ComponentPropsWithRef<'div'>>;
};
