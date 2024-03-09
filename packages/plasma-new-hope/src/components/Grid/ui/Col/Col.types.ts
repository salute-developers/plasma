import type { HTMLAttributes } from 'react';

import type { ScreenVariant } from '../../utils/types';

export interface ScreenConfig {
    /**
     * Размер ячейки.
     */
    size?: number;
    /**
     * Отступ ячейки.
     */
    offset?: number;
}

export type ScreenMap = {
    [key in ScreenVariant]?: ScreenConfig;
};

// TODO удалить после отказа от старой сетки
type IntCount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
type FltCount = 1.5 | 2.5 | 3.5 | 4.5 | 5.5 | 6.5 | 7.5 | 8.5 | 9.5 | 10.5 | 11.5 | 12.5 | 13.5 | 14.5 | 15.5;
export type ColCount = IntCount | FltCount;

// TODO удалить после отказа от старой сетки
export interface ColSizeProps {
    /**
     * Размер ячейки при разрешении S
     * @deprecated
     */
    sizeS?: ColCount;
    /**
     * Размер ячейки при разрешении M
     * @deprecated
     */
    sizeM?: ColCount;
    /**
     * Размер ячейки при разрешении L
     * @deprecated
     */
    sizeL?: ColCount;
    /**
     * Размер ячейки при разрешении XL
     * @deprecated
     */
    sizeXL?: ColCount;
    /**
     * Размер ячейки при разрешении XXL
     * @deprecated
     */
    sizeXXL?: ColCount;
}

// TODO удалить после отказа от старой сетки
export interface ColOffsetProps {
    /**
     * Отступ ячейки при разрешении S
     * @deprecated
     */
    offsetS?: ColCount;
    /**
     * Отступ ячейки при разрешении M
     * @deprecated
     */
    offsetM?: ColCount;
    /**
     * Отступ ячейки при разрешении L
     * @deprecated
     */
    offsetL?: ColCount;
    /**
     * Отступ ячейки при разрешении XL
     * @deprecated
     */
    offsetXL?: ColCount;
    /**
     * Отступ ячейки при разрешении XXL
     * @deprecated
     */
    offsetXXL?: ColCount;
}

interface CustomColProps {
    /**
     * Размер ячейки, который будет применен на всех вьюпортах, если не задать адаптивные размеры.
     * Например через smallM={{size: 2}} или sizeS={2}
     */
    size?: number;
    /**
     * Отступ ячейки, сдвинет ее на n ячеек вправо.
     * Будет применен на всех вьюпортах, если не задать адаптивные отступы.
     * Например через smallM={{offset: 2}} или offsetS={2}
     */
    offset?: number;
}

export interface ColProps
    extends HTMLAttributes<HTMLDivElement>,
        CustomColProps,
        ScreenMap,
        ColOffsetProps,
        ColSizeProps {}
