import type { ButtonHTMLAttributes, ReactNode } from 'react';

import type { AsProps } from '../../types';

export interface BaseTabItemProps extends ButtonHTMLAttributes<HTMLButtonElement>, AsProps {
    /**
     * Выбран ли TabItem
     */
    selected?: boolean;
    /**
     * Скрыт ли TabItem
     * @default false
     */
    disabled?: boolean;
    /**
     * Контент справа
     */
    contentRight?: ReactNode;
    /**
     * Callback, необходимый для клавиатурной навигации
     */
    onIndexChange?: (index: number) => void;
    /**
     * Индекс TabItem внутри Tabs - необходим для клавиатурной навигации
     */
    itemIndex?: number;
}

export type CustomHorizontalTabItemProps = {
    /**
     * Расположение табов
     */
    orientation?: 'horizontal';
    /**
     * TabItem c округлым border-radius
     * @default false
     */
    pilled?: boolean;
    /**
     * Контент слева
     */
    contentLeft?: ReactNode;
    /**
     * Фон TabItem меняется с анимацией
     * @default true
     */
    animated?: boolean;
    /**
     * Вид TabItem
     */
    view?: 'clear' | 'secondary' | 'divider' | 'default';
    /**
     * Размер TabItem
     */
    size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'xs' | 's' | 'm' | 'l';
    /**
     * Активен ли TabItem
     * @deprecated Используйте свойство `selected`
     */
    isActive?: boolean;
};

export type CustomVerticalTabItemProps = {
    /**
     * Расположение табов
     */
    orientation: 'vertical';
    /**
     * Вид TabItem
     */
    view?: 'divider';
    /**
     * Размер TabItem
     */
    size?: 'xs' | 's' | 'm' | 'l';
};

export type HorizontalTabItemProps = BaseTabItemProps & CustomHorizontalTabItemProps;

export type VerticalTabItemProps = BaseTabItemProps & CustomVerticalTabItemProps;

export type TabItemProps = HorizontalTabItemProps | VerticalTabItemProps;
