import type { ButtonHTMLAttributes } from 'react';

export type TabItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * Активен ли TabItem
     */
    active?: boolean;
    /**
     * Скрыт ли TabItem
     */
    disabled?: boolean;
    /**
     * TabItem c округлым border-radius
     */
    pilled?: boolean;
    /**
     * Уникальный идентификатор
     */
    id?: string;
    /**
     * Контент слева
     */
    leftContent?: React.ReactNode;
    /**
     * Контент справа
     */
    rightContent?: React.ReactNode;
    /**
     * Размер TabItem
     */
    size?: string;
    /**
     * Вид TabItem
     */
    view?: string;
};
