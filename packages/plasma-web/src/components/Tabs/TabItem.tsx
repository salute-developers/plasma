import React, { ComponentProps, ReactNode } from 'react';
import {
    horizontalTabItemConfig,
    verticalTabItemConfig,
    component,
    mergeConfig,
    RightContent,
    BaseTabItemProps,
} from '@salutejs/plasma-new-hope/styled-components';

import { config as horizontalConfig } from './horizontal/HorizontalTabItem.config';
import { config as verticalConfig } from './vertical/VerticalTabItem.config';

const mergedHorizontalTabItemConfig = mergeConfig(horizontalTabItemConfig, horizontalConfig);
const HorizontalTabItem = component(mergedHorizontalTabItemConfig);

const mergedVerticalTabItemConfig = mergeConfig(verticalTabItemConfig, verticalConfig);
const VerticalTabItem = component(mergedVerticalTabItemConfig);

type Sizes = keyof typeof horizontalConfig['variations']['size'];
type Views = keyof typeof horizontalConfig['variations']['view'];

// TODO: удалить после отказа от deprecated props
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
    view?: Views;
    /**
     * Размер TabItem
     */
    size?: Sizes;
    /**
     * Активен ли TabItem
     * @deprecated Используйте свойство `selected`
     */
    isActive?: boolean;
} & RightContent;

type TabItemProps = (BaseTabItemProps & CustomHorizontalTabItemProps) | ComponentProps<typeof VerticalTabItem>;

/**
 * Элемент списка, недопустимо использовать вне компонента Tabs.
 */
export const TabItem = (props: TabItemProps) => {
    if (props.orientation === 'vertical') {
        return <VerticalTabItem {...props} />;
    }

    return <HorizontalTabItem {...(props as any)} />;
};
