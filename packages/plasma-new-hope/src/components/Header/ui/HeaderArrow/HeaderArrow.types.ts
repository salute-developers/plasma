import type { ButtonHTMLAttributes } from 'react';

import type { IconSize } from '../../../_Icon/IconRoot';

export type HeaderArrowProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * Тип стрелки.
     */
    arrow?: 'back' | 'minimize';
    iconSize?: IconSize;
};
