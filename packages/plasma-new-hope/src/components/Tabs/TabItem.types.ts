import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';

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

export interface BaseTabItemProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value'>, AsProps {
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
     * Слот для интерактивных элементов (крестик)
     */
    actionContent?: ReactNode;

    /**
     * Callback, необходимый для клавиатурной навигации
     */
    onIndexChange?: (index: number) => void;
    /**
     * Индекс TabItem внутри Tabs - необходим для клавиатурной навигации
     */
    itemIndex?: number;
    /**
     * Обрезает контент по максимальной ширине и добавляет ...
     * @default 'auto'
     */
    maxItemWidth?: CSSProperties['width'];
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

export type CustomHorizontalIconTabItemProps = {
    /**
     * Расположение табов
     */
    orientation?: 'horizontal';
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
    size?: 'xs' | 's' | 'm' | 'l' | 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
    /**
     * Активен ли TabItem
     * @deprecated Используйте свойство `selected`
     */
    isActive?: boolean;
};

export type CustomVerticalIconTabItemProps = {
    /**
     * Расположение табов
     */
    orientation?: 'vertical';
    /**
     * Вид TabItem
     */
    view?: string;
    /**
     * Размер TabItem
     */
    size?: string;
};

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
    size: 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
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
export type HorizontalIconTabItemProps = Omit<BaseTabItemProps, 'contentRight' | 'maxItemWidth' | 'value'> &
    CustomHorizontalIconTabItemProps;

export type VerticalTabItemProps = BaseTabItemProps & CustomVerticalTabItemProps;
export type VerticalIconTabItemProps = Omit<BaseTabItemProps, 'contentRight' | 'maxItemWidth' | 'value'> &
    CustomVerticalIconTabItemProps;

export type TabItemProps = HorizontalTabItemProps | VerticalTabItemProps;
