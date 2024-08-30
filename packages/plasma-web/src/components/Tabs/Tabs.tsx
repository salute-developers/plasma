import React from 'react';
import { horizontalTabsConfig, component, mergeConfig, TabsProps } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './horizontal/HorizontalTabs.config';

const mergedHorizontalTabsConfig = mergeConfig(horizontalTabsConfig, config);

const HorizontalTabs = component(mergedHorizontalTabsConfig);

/**
 * Контейнер вкладок, основной компонент для пользовательской сборки вкладок.
 */
export const Tabs = ({ orientation, ...rest }: TabsProps) => {
    if (orientation === 'vertical') {
        return <div>to be implemented</div>;
    }

    return <HorizontalTabs orientation={orientation} {...rest} />;
};
