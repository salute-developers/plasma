import React from 'react';

import { horizontalTabsConfig, verticalTabsConfig, VerticalTabsContext, TabsProps } from '../../../../components/Tabs';
import { component, mergeConfig } from '../../../../engines';

import { config as horizontalConfig } from './horizontal/HorizontalTabs.config';
import { config as verticalConfig } from './vertical/VerticalTabs.config';

const mergedHorizontalTabsConfig = mergeConfig(horizontalTabsConfig, horizontalConfig);
const mergedVerticalTabsConfig = mergeConfig(verticalTabsConfig, verticalConfig);

const HorizontalTabs = component(mergedHorizontalTabsConfig);
const VerticalTabs = component(mergedVerticalTabsConfig);

export const Tabs = (props: TabsProps) => {
    if (props.orientation === 'vertical') {
        return (
            <VerticalTabsContext.Provider value={props.contentLeft}>
                <VerticalTabs {...props} />
            </VerticalTabsContext.Provider>
        );
    }

    return <HorizontalTabs {...props} />;
};
