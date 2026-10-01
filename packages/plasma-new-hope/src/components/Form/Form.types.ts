import type { FormHTMLAttributes, ReactNode } from 'react';

export type FormSize = 'xs' | 's' | 'm' | 'l';
export type FormOrientation = 'vertical' | 'horizontal';

export type FormProps = {
    /**
     * Размер контролов внутри формы.
     * Передаётся прямым потомкам-компонентам и заменяет их собственный `size`.
     * @default m
     */
    size?: FormSize;
    /**
     * Направление элементов формы.
     * @default vertical
     * @description
     * vertical — колонка, каждый элемент на всю ширину.
     * horizontal — ряд, элементы делят ширину поровну.
     */
    orientation?: FormOrientation;
    /**
     * Элементы формы
     */
    children?: ReactNode;
} & Omit<FormHTMLAttributes<HTMLFormElement>, 'children'>;
