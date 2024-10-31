import React, { ComponentProps } from 'react';
import {
    horizontalTabsConfig,
    verticalTabsConfig,
    component,
    mergeConfig,
    BaseTabsProps,
} from '@salutejs/plasma-new-hope/styled-components';

import { config as horizontalConfig } from './horizontal/HorizontalTabs.config';
import { config as verticalConfig } from './vertical/VerticalTabs.config';

const mergedHorizontalTabsConfig = mergeConfig(horizontalTabsConfig, horizontalConfig);
const mergedVerticalTabsConfig = mergeConfig(verticalTabsConfig, verticalConfig);

const HorizontalTabs = component(mergedHorizontalTabsConfig);
const VerticalTabs = component(mergedVerticalTabsConfig);

type Sizes = keyof typeof horizontalConfig['variations']['size'];
type Views = keyof typeof horizontalConfig['variations']['view'];

// TODO: удалить после отказа от deprecated props
type CustomHorizontalTabsProps = {
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
    view?: Views;
    /**
     * Размер табов
     */
    size?: Sizes;
    /**
     * Уберет скругление с выбранной стороны и подвинет контейнер
     * @deprecated
     */
    outsideScroll?: boolean | { left?: string; right?: string };
};

type TabsProps = (BaseTabsProps & CustomHorizontalTabsProps) | ComponentProps<typeof VerticalTabs>;

/**
 * Контейнер вкладок, основной компонент для пользовательской сборки вкладок.
 */
export const Tabs = (props: TabsProps) => {
    if (props.orientation === 'vertical') {
        return <VerticalTabs {...props} />;
    }

    return <HorizontalTabs {...(props as any)} />;
};
