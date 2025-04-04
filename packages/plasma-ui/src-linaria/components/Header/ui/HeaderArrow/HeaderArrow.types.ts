import type { ButtonHTMLAttributes } from 'react';

const sizeMap = {
    xxs: 1, // 16px
    xs: 1, // 16px
    s: 1.5, // 24px
    m: 2.25, // 36px
    l: 2.75, // 44px
    xl: 3.5, // 56px
    xxl: 6.25, // 100px
};

export type IconSize = keyof typeof sizeMap;

export type HeaderArrowProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * Тип стрелки.
     */
    arrow?: 'back' | 'minimize';
    iconSize?: IconSize;
};
