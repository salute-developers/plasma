import React from 'react';

type CardPropsBase = {
    /**
     * Размер контрола.
     */
    size?: string;

    /**
     * Вид контрола.
     */
    view?: string;

    /**
     * Расположение outer контента
     */
    orientation?: 'horizontal' | 'vertical';

    /** Добавляет рамку для выбранной карточки */
    selected?: boolean;

    /** Добавляет цветной отступ с фоном */
    backgroundType?: 'none' | 'solid';
};

export type CardProps = CardPropsBase & React.HTMLAttributes<HTMLDivElement>;
