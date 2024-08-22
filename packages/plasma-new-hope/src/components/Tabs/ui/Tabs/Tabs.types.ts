import type { HTMLAttributes } from 'react';

import type { AsProps } from '../../../../types';

export type CustomTabsProps = {
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
     * Размер табов
     */
    size?: string;
    /**
     * Вид табов
     */
    view?: string;
    /**
     * Индекс активного элемента, необходим для клавиатурной навигации
     */
    index?: number;
    /**
     * Уберет скругление с выбранной стороны и подвинет контейнер
     * @deprecated
     */
    outsideScroll?: boolean | { left?: string; right?: string };
};

export type TabsProps = HTMLAttributes<HTMLDivElement> & AsProps & CustomTabsProps;
