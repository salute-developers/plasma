import React, { ComponentProps } from 'react';

import { horizontalTabsConfig, verticalTabsConfig } from '../../../components/Tabs';
import { component, mergeConfig } from '../../../engines';

import { config as horizontalConfig } from './horizontal/HorizontalTabs.config';
import { config as verticalConfig } from './vertical/VerticalTabs.config';

const mergedHorizontalTabsConfig = mergeConfig(horizontalTabsConfig, horizontalConfig);
const mergedVerticalTabsConfig = mergeConfig(verticalTabsConfig, verticalConfig);

const HorizontalTabs = component(mergedHorizontalTabsConfig);
const VerticalTabs = component(mergedVerticalTabsConfig);

type TabsProps = ComponentProps<typeof HorizontalTabs> | ComponentProps<typeof VerticalTabs>;

export const Tabs = (props: TabsProps) => {
    if (props.orientation === 'vertical') {
        return <VerticalTabs {...props} />;
    }

    return <HorizontalTabs {...props} />;
};
