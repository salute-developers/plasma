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
     * Табы растянуты на доступную область
     * @default false
     */
    stretch?: boolean;
    /**
     * Табы c округлым border-radius
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
    size?: string;
    /**
     * Уберет скругление с выбранной стороны и подвинет контейнер
     * @deprecated
     */
    outsideScroll?: boolean | { left?: string; right?: string };
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

export type HorizontalTabsProps = BaseTabsProps & CustomHorizontalTabsProps;

export type VerticalTabsProps = BaseTabsProps & CustomVerticalTabsProps;

export type TabsProps = HorizontalTabsProps | VerticalTabsProps;
