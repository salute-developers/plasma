import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { AsProps } from '../../../../types';

export type CustomTabItemProps = {
    /**
     * Активен ли TabItem
     * @deprecated Используйте свойство `selected`
     */
    isActive?: boolean;
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
     * TabItem c округлым border-radius
     * @default false
     */
    pilled?: boolean;
    /**
     * Фон TabItem меняется с анимацией
     * @default true
     */
    animated?: boolean;
    /**
     * Контент слева
     */
    contentLeft?: ReactNode;
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
    /**
     * Размер TabItem
     */
    size?: string;
    /**
     * Вид TabItem
     */
    view?: string;
};

export type TabItemProps = ButtonHTMLAttributes<HTMLButtonElement> & AsProps & CustomTabItemProps;
