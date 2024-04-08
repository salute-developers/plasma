import { HTMLAttributes } from 'react';

type CustomIndicatorProps = {
    /**
     * Размер индикатора
     * @default
     * m
     */
    size: string;
    /**
     * Вид индикатора
     * @default
     * default
     */
    view: string;
};

export type IndicatorProps = HTMLAttributes<HTMLDivElement> & CustomIndicatorProps;
