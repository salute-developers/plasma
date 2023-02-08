import type { Breakpoint } from '../../utils';

type IntCount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
type FltCount = 1.5 | 2.5 | 3.5 | 4.5 | 5.5 | 6.5 | 7.5 | 8.5 | 9.5 | 10.5 | 11.5 | 12.5 | 13.5 | 14.5 | 15.5;
export type ColCount = IntCount | FltCount;

export interface ColSizeProps {
    /**
     * Размер ячейки при разрешении S
     */
    sizeS?: ColCount;
    /**
     * Размер ячейки при разрешении M
     */
    sizeM?: ColCount;
    /**
     * Размер ячейки при разрешении L
     */
    sizeL?: ColCount;
    /**
     * Размер ячейки при разрешении XL
     */
    sizeXL?: ColCount;
    /**
     * Размер ячейки при разрешении XXL
     */
    sizeXXL?: ColCount;
}

export interface ColOffsetProps {
    /**
     * Отступ ячейки при разрешении S
     */
    offsetS?: ColCount;
    /**
     * Отступ ячейки при разрешении M
     */
    offsetM?: ColCount;
    /**
     * Отступ ячейки при разрешении L
     */
    offsetL?: ColCount;
    /**
     * Отступ ячейки при разрешении XL
     */
    offsetXL?: ColCount;
    /**
     * Отступ ячейки при разрешении XXL
     */
    offsetXXL?: ColCount;
}

export const sizes: Record<Breakpoint, keyof ColSizeProps> = {
    S: 'sizeS',
    M: 'sizeM',
    L: 'sizeL',
    XL: 'sizeXL',
    XXL: 'sizeXXL',
};

export const offsets: Record<Breakpoint, keyof ColOffsetProps> = {
    S: 'offsetS',
    M: 'offsetM',
    L: 'offsetL',
    XL: 'offsetXL',
    XXL: 'offsetXXL',
};
