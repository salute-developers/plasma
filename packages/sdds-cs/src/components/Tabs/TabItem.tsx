import React from 'react';
import {
    horizontalTabItemConfig,
    verticalTabItemConfig,
    component,
    mergeConfig,
    TabItemProps,
} from '@salutejs/plasma-new-hope/styled-components';

import { config as horizontalConfig } from './horizontal/HorizontalTabItem.config';
import { config as verticalConfig } from './vertical/VerticalTabItem.config';

const mergedHorizontalTabItemConfig = mergeConfig(horizontalTabItemConfig, horizontalConfig);
const HorizontalTabItem = component(mergedHorizontalTabItemConfig);

const mergedVerticalTabItemConfig = mergeConfig(verticalTabItemConfig, verticalConfig);
const VerticalTabItem = component(mergedVerticalTabItemConfig);

const sizes = ['s'] as const;
type CustomTabItemProps = TabItemProps & {
    size?: typeof sizes[number];
};

/**
 * Элемент списка, недопустимо использовать вне компонента Tabs.
 */
export const TabItem = (props: CustomTabItemProps) => {
    if (props.orientation === 'vertical') {
        return <VerticalTabItem {...props} />;
    }

    return <HorizontalTabItem {...props} />;
};
