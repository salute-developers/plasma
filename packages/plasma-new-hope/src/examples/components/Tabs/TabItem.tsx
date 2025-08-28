import React, { ComponentProps } from 'react';
import {
    horizontalTabItemConfig,
    verticalTabItemConfig,
    horizontalIconTabItemConfig,
    verticalIconTabItemConfig,
} from 'src/components/Tabs';
import { component, mergeConfig } from 'src/engines';
import { fixedForwardRef } from 'src/utils';

import { config as horizontalConfig } from './horizontal/HorizontalTabItem.config';
import { config as horizontalIconConfig } from './horizontal/HorizontalIconTabItem.config';
import { config as verticalConfig } from './vertical/VerticalTabItem.config';
import { config as verticalIconConfig } from './vertical/VerticalIconTabItem.config';

const mergedHorizontalTabItemConfig = mergeConfig(horizontalTabItemConfig, horizontalConfig);
const HorizontalTabItem = component(mergedHorizontalTabItemConfig);

const mergedHorizontalIconTabItemConfig = mergeConfig(horizontalIconTabItemConfig, horizontalIconConfig);
const HorizontalIconTabItem = component(mergedHorizontalIconTabItemConfig);

const mergedVerticalTabItemConfig = mergeConfig(verticalTabItemConfig, verticalConfig);
const VerticalTabItem = component(mergedVerticalTabItemConfig);

const mergedVerticalIconTabItemConfig = mergeConfig(verticalIconTabItemConfig, verticalIconConfig);
const VerticalIconTabItem = component(mergedVerticalIconTabItemConfig);

type TabItemProps = ComponentProps<typeof HorizontalTabItem> | ComponentProps<typeof VerticalTabItem>;
type IconTabItemProps = ComponentProps<typeof HorizontalIconTabItem> | ComponentProps<typeof VerticalIconTabItem>;

export const TabItem = (props: TabItemProps) => {
    if (props.orientation === 'vertical') {
        return <VerticalTabItem {...props} />;
    }

    return <HorizontalTabItem {...props} />;
};

export const IconTabItem = fixedForwardRef<HTMLButtonElement, IconTabItemProps>((props: IconTabItemProps, ref) => {
    if (props.orientation === 'vertical') {
        return <VerticalIconTabItem ref={ref} {...props} />;
    }

    return <HorizontalIconTabItem ref={ref} {...(props as ComponentProps<typeof HorizontalIconTabItem>)} />;
});
