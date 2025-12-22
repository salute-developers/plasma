import type { HTMLAttributes } from 'react';

import type { AsProps } from '../../types';

export interface BaseTabsProps extends HTMLAttributes<HTMLDivElement>, AsProps {
    /**
     * Как ведет себя компонент при ограничении ширины
     * @default 'scroll'
     * @description
     * scroll - появляется горизонтальная прокрутка
     * showAll - становится виден контент, выходящий за пределы компонента
     */
    clip?: 'scroll' | 'showAll';
    /**
     * Табы неактивны
     * @default false
     */
    disabled?: boolean;
    /**
     * Индекс активного элемента, необходим для клавиатурной навигации
     */
    index?: number;
}

export type CustomHorizontalTabsProps = {
    /**
     * Расположение табов
     */
    orientation?: 'horizontal';
    /**
     * Наличие divider
     * @default true
     */
    hasDivider?: boolean;
    /**
     * Табы растянуты на доступную область
     * @default false
     */
    stretch?: boolean;
    /**
     * Табы c округлым border-radius
     * @deprecated
     * @default false
     */
    pilled?: boolean;
    /**
     * Вид табов
     */
    view?: string;
    /**
     * Размер табов
     */
    size?: 'xs' | 's' | 'm' | 'l';
    /**
     * Уберет скругление с выбранной стороны и подвинет контейнер
     * @deprecated
     */
    outsideScroll?: boolean | { left?: string; right?: string };
};

export type CustomHeaderTabsProps = {
    /**
     * Расположение табов
     */
    orientation?: 'horizontal';
    /**
     * Наличие divider
     * @default true
     */
    hasDivider?: never;
    /**
     * Табы растянуты на доступную область
     * @default false
     */
    stretch?: never;
    /**
     * Табы c округлым border-radius
     * @deprecated
     * @default false
     */
    pilled?: never;
    /**
     * Вид табов
     */
    view?: string;
    /**
     * Размер табов
     */
    size: 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
    /**
     * Уберет скругление с выбранной стороны и подвинет контейнер
     * @deprecated
     */
    outsideScroll?: never;
};

export type CustomVerticalTabsProps = {
    /**
     * Расположение табов
     */
    orientation: 'vertical';
    /**
     * Наличие divider
     * @default true
     */
    hasDivider?: boolean;
    /**
     * Вид табов
     */
    view?: string;
    /**
     * Размер табов
     */
    size?: string;
};

export type HorizontalTabsProps = BaseTabsProps & (CustomHorizontalTabsProps | CustomHeaderTabsProps);

export type HorizontalCommonTabsProps = BaseTabsProps & CustomHorizontalTabsProps;

export type VerticalTabsProps = BaseTabsProps & CustomVerticalTabsProps;

export type TabsProps = HorizontalTabsProps | VerticalTabsProps;
