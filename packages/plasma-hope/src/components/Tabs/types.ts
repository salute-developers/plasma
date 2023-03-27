import {
    TabItemProps as TabItemCoreProps,
    TabsControllerProps as BaseProps,
    TabsProps as BaseTabsProps,
} from '@salutejs/plasma-core';

export interface TabsControllerProps extends BaseProps {}

export interface TabItemProps extends TabItemCoreProps {
    animated?: boolean;
}

export interface TabsProps extends BaseTabsProps {
    /**
     * Вид компонента.
     */
    view?: 'secondary' | 'clear';
    /**
     * Кнопки tabs и контейнер примут вид скругленных "капсул".
     */
    pilled?: boolean;
    /**
     * Размер компонента.
     * @default l
     */
    size?: 'l' | 's';
    /**
     * Уберет скругление с выбранной стороны и подвинет контейнер
     */
    outsideScroll?: boolean | { left?: string; right?: string };
}

export type Design = {
    design: 'b2c' | 'web';
};
