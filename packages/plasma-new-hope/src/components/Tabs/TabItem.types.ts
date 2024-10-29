import type { ButtonHTMLAttributes, ReactNode } from 'react';

import type { AsProps } from '../../types';

export type RightContent =
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
     * Контент слева
     */
    contentLeft?: ReactNode;
    /**
     * TabItem c округлым border-radius
     * @deprecated
     * @default false
     */
    pilled?: boolean;
    /**
     * Фон TabItem меняется с анимацией
     * @deprecated
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
    size?: 'xs' | 's' | 'm' | 'l';
    /**
     * Активен ли TabItem
     * @deprecated Используйте свойство `selected`
     */
    isActive?: boolean;
} & RightContent;

export type CustomHeaderTabItemProps = {
    /**
     * Расположение табов
     */
    orientation?: 'horizontal';
    /**
     * Контент слева
     */
    contentLeft?: never;
    /**
     * TabItem c округлым border-radius
     * @deprecated
     * @default false
     */
    pilled?: never;
    /**
     * Фон TabItem меняется с анимацией
     * @deprecated
     * @default true
     */
    animated?: never;
    /**
     * Вид TabItem
     */
    view?: string;
    /**
     * Размер TabItem
     */
    size: 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
    /**
     * Активен ли TabItem
     * @deprecated Используйте свойство `selected`
     */
    isActive?: never;
} & Extract<RightContent, { contentRight?: never }>;

export type CustomVerticalTabItemProps = {
    /**
     * Расположение табов
     */
    orientation: 'vertical';
    /**
     * Контент слева
     */
    contentLeft?: ReactNode;
    /**
     * Вид TabItem
     */
    view?: string;
    /**
     * Размер TabItem
     */
    size?: string;
} & RightContent;

export type HorizontalTabItemProps = BaseTabItemProps & (CustomHorizontalTabItemProps | CustomHeaderTabItemProps);

export type VerticalTabItemProps = BaseTabItemProps & CustomVerticalTabItemProps;

export type TabItemProps = HorizontalTabItemProps | VerticalTabItemProps;
