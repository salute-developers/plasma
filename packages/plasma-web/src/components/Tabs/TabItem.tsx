import React, { ComponentProps } from 'react';
import {
    horizontalTabItemConfig,
    verticalTabItemConfig,
    component,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';

import { config as horizontalConfig } from './horizontal/HorizontalTabItem.config';
import { config as verticalConfig } from './vertical/VerticalTabItem.config';

const mergedHorizontalTabItemConfig = mergeConfig(horizontalTabItemConfig, horizontalConfig);
const HorizontalTabItem = component(mergedHorizontalTabItemConfig);

const mergedVerticalTabItemConfig = mergeConfig(verticalTabItemConfig, verticalConfig);
const VerticalTabItem = component(mergedVerticalTabItemConfig);

type TabItemProps = ComponentProps<typeof HorizontalTabItem> | ComponentProps<typeof VerticalTabItem>;

/**
 * Элемент списка, недопустимо использовать вне компонента Tabs.
 */
export const TabItem = (props: TabItemProps) => {
    if (props.orientation === 'vertical') {
        return <VerticalTabItem {...props} />;
    }

    return <HorizontalTabItem {...props} />;
};
