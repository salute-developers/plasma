import { HTMLAttributes } from 'react';

type CustomIndicatorProps = {
    // Размер индикатора
    size: 'l' | 'm' | 's';
    // Цвет индикатора
    view: 'default' | 'accent' | 'inactive' | 'positive' | 'warning' | 'negative' | 'black' | 'white';
};

export type IndicatorProps = HTMLAttributes<HTMLDivElement> & CustomIndicatorProps;
