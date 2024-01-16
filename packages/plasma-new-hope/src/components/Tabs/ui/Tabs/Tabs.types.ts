import type { HTMLAttributes } from 'react';

export type TabsProps = HTMLAttributes<HTMLDivElement> & {
    /**
     * Табы неактивны
     */
    disabled?: boolean;
    /**
     * Табы растянуты на доступную область
     */
    stretch?: boolean;
    /**
     * Табы c округлым border-radius
     */
    pilled?: boolean;
    /**
     * Табы c фоном
     */
    filledBackground?: boolean;
    /**
     * Размер табов
     */
    size?: string;
    /**
     * Вид табов
     */
    view?: string;
    /**
     * Использовать ли разделить снизу
     */
    showDivider?: boolean;
};
