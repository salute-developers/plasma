import React, { ComponentProps } from 'react';
import {
    horizontalTabsConfig,
    verticalTabsConfig,
    component,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';

import { config as horizontalConfig } from './horizontal/HorizontalTabs.config';
import { config as verticalConfig } from './vertical/VerticalTabs.config';

const mergedHorizontalTabsConfig = mergeConfig(horizontalTabsConfig, horizontalConfig);
const mergedVerticalTabsConfig = mergeConfig(verticalTabsConfig, verticalConfig);

const HorizontalTabs = component(mergedHorizontalTabsConfig);
const VerticalTabs = component(mergedVerticalTabsConfig);

type TabsProps = ComponentProps<typeof HorizontalTabs> | ComponentProps<typeof VerticalTabs>;

/**
 * Контейнер вкладок, основной компонент для пользовательской сборки вкладок.
 */
export const Tabs = (props: TabsProps) => {
    if (props.orientation === 'vertical') {
        return <VerticalTabs {...props} />;
    }

    return <HorizontalTabs {...props} />;
};
