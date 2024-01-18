import type { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';

type CustomBadgeProps = {
    /**
     * Текстовая надпись
     */
    text?: string;
    /**
     * Слот для контента слева, например `Icon`
     */
    contentLeft?: ReactNode;
    /**
     * Слот для контента справа, например `Icon`
     */
    contentRight?: ReactNode;
    /**
     * Компонент c округлым border-radius
     * @default
     * false
     */
    pilled?: boolean;
    /**
     * view применяется с учетом прозрачности
     * @default
     * false
     */
    transparent?: boolean;
    /**
     * Размер Badge
     * @default
     * m
     */
    size?: string;
    /**
     * Вид Badge
     * @default
     * primary
     */
    view?: string;
} & PropsWithChildren;

export type BadgeProps = HTMLAttributes<HTMLDivElement> & CustomBadgeProps;
