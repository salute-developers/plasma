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
     * Являются ли табы header
     */
    header?: false;
    /**
     * Контент слева
     */
    contentLeft?: ReactNode;
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

export type CustomHeaderTabItemProps = {
    /**
     * Расположение табов
     */
    orientation?: 'horizontal';
    /**
     * Являются ли табы header
     */
    header: true;
    /**
     * Контент слева
     */
    contentLeft?: never;
    /**
     * TabItem c округлым border-radius
     * @default false
     */
    pilled?: never;
    /**
     * Фон TabItem меняется с анимацией
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
    size?: string;
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
