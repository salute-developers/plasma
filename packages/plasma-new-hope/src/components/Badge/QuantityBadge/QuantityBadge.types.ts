import type { HTMLAttributes, PropsWithChildren } from 'react';

type QuantityBadgeSize = 'xss' | 'xs';

type CustomQuantityBadgeProps = {
    /**
     * Текстовая надпись
     */
    text?: string;
    /**
     * Размер QuantityBadge
     * @default
     * m
     */
    size?: QuantityBadgeSize;
    /**
     * Вид QuantityBadge
     * @default
     * default
     */
    view?: string;
} & PropsWithChildren;

export type QuantityBadgeProps = HTMLAttributes<HTMLDivElement> & CustomQuantityBadgeProps;
