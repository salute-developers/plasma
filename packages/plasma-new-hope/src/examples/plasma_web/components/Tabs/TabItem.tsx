import React from 'react';

import { horizontalTabItemConfig, verticalTabItemConfig } from '../../../../components/Tabs';
import { TabItemProps } from '../../../../components/Tabs/TabItem.types';
import { component, mergeConfig } from '../../../../engines';

import { config as horizontalConfig } from './horizontal/HorizontalTabItem.config';
import { config as verticalConfig } from './vertical/VerticalTabItem.config';

const mergedHorizontalTabItemConfig = mergeConfig(horizontalTabItemConfig, horizontalConfig);
const HorizontalTabItem = component(mergedHorizontalTabItemConfig);

const mergedVerticalTabItemConfig = mergeConfig(verticalTabItemConfig, verticalConfig);
const VerticalTabItem = component(mergedVerticalTabItemConfig);

export const TabItem = (props: TabItemProps) => {
    if (props.orientation === 'vertical') {
        return <VerticalTabItem {...props} />;
    }

    return <HorizontalTabItem {...props} />;
};
