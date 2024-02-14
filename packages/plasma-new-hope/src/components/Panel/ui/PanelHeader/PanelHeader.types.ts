import type { HTMLAttributes, ReactNode } from 'react';

export const placements = {
    right: 'right',
    left: 'left',
};

export type ClosePlacementType = keyof typeof placements;

export type PanelHeaderProps = {
    /**
     * Отображать ли кнопку закрытия.
     */
    hasClose?: boolean;
    /**
     * Расположение кнопки закрытия.
     */
    closePlacement?: ClosePlacementType;
    /**
     * Слот для отображения кнопок-обработчиков каких-либо действий.
     */
    actions?: ReactNode;
    /**
     * Обработчик клика по кнопке закрытия.
     */
    onClose?: () => void;
    /**
     * Вид верхней части Panel.
     */
    view?: string;
} & HTMLAttributes<HTMLDivElement>;
