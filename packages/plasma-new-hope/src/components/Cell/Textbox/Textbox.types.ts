import type { HTMLAttributes, ReactNode } from 'react';

export type AlignLeftProp = 'center' | 'top' | 'bottom';
export type AlignRightProp = 'center' | 'top';

type CustomTextboxProps = {
    /**
     * Слот для Title
     */
    title?: ReactNode;

    /**
     * Слот для Subtitle
     */
    subtitle?: ReactNode;

    /**
     * Слот для Label
     */
    label?: ReactNode;
};

export type TextboxProps = HTMLAttributes<HTMLDivElement> & CustomTextboxProps;
