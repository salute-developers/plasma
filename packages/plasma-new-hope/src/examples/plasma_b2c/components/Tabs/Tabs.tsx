import React, { ComponentProps } from 'react';

import { horizontalTabsConfig, verticalTabsConfig, headerTabsConfig } from '../../../../components/Tabs';
import { component, mergeConfig } from '../../../../engines';

import { config as horizontalConfig } from './horizontal/HorizontalTabs.config';
import { config as verticalConfig } from './vertical/VerticalTabs.config';
import { config as headerConfig } from './header/HeaderTabs.config';

const mergedHorizontalTabsConfig = mergeConfig(horizontalTabsConfig, horizontalConfig);
const HorizontalTabs = component(mergedHorizontalTabsConfig);

const mergedVerticalTabsConfig = mergeConfig(verticalTabsConfig, verticalConfig);
const VerticalTabs = component(mergedVerticalTabsConfig);

const mergedHeaderTabsConfig = mergeConfig(headerTabsConfig, headerConfig);
const HeaderTabs = component(mergedHeaderTabsConfig);

type TabsProps =
    | (ComponentProps<typeof HorizontalTabs> & { header?: false })
    | (ComponentProps<typeof HeaderTabs> & { header: true })
    | ComponentProps<typeof VerticalTabs>;

export const Tabs = (props: TabsProps) => {
    if (props.orientation === 'vertical') {
        return <VerticalTabs {...props} />;
    }

    if (props.header) {
        return <HeaderTabs {...props} />;
    }

    return <HorizontalTabs {...props} />;
};
