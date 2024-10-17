import type { ButtonHTMLAttributes, ReactNode } from 'react';

import type { AsProps } from '../../types';

type RightContent =
    | {
          /**
           * Значение таба
           */
          value?: string | number;
          /**
           * Слот для контента справа, например `Icon`
           */
          contentRight?: never;
      }
    | {
          /**
           * Значение таба
           */
          value?: never;
          /**
           * Слот для контента справа, например `Icon`
           */
          contentRight?: ReactNode;
      };

export interface BaseTabItemProps extends ButtonHTMLAttributes<HTMLButtonElement>, AsProps {
    /**
     * Выбран ли TabItem
     */
    selected?: boolean;
    /**
     * TabItem неактивен
     * @default false
     */
    disabled?: boolean;
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
     * Фон TabItem меняется с анимацией
     * @default true
     */
    animated?: boolean;
    /**
     * Вид TabItem
     */
    view?: string;
    /**
     * Размер TabItem
     */
    size?: string;
    /**
     * Активен ли TabItem
     * @deprecated Используйте свойство `selected`
     */
    isActive?: boolean;
} & RightContent;

export type CustomVerticalTabItemProps = {
    /**
     * Расположение табов
     */
    orientation: 'vertical';
    /**
     * Вид TabItem
     */
    view?: string;
    /**
     * Размер TabItem
     */
    size?: string;
} & RightContent;

export type HorizontalTabItemProps = BaseTabItemProps & CustomHorizontalTabItemProps;

export type VerticalTabItemProps = BaseTabItemProps & CustomVerticalTabItemProps;

export type TabItemProps = HorizontalTabItemProps | VerticalTabItemProps;
