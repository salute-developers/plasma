import type { FormHTMLAttributes, ReactNode } from 'react';

export type FormOrientation = 'vertical' | 'horizontal';

export type FormProps = {
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
