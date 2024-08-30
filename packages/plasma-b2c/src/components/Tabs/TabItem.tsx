import React from 'react';
import {
    horizontalTabItemConfig,
    component,
    mergeConfig,
    TabItemProps,
} from '@salutejs/plasma-new-hope/styled-components';

import { config } from './horizontal/HorizontalTabItem.config';

const mergedHorizontalTabItemConfig = mergeConfig(horizontalTabItemConfig, config);
const HorizontalTabItem = component(mergedHorizontalTabItemConfig);

/**
 * Элемент списка, недопустимо использовать вне компонента Tabs.
 */
export const TabItem = ({ orientation = 'horizontal', ...rest }: TabItemProps) => {
    if (orientation === 'vertical') {
        return <div>to be implemented</div>;
    }

    return <HorizontalTabItem orientation={orientation} {...rest} />;
};
