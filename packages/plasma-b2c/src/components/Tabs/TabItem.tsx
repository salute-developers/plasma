import React, { ComponentProps } from 'react';
import {
    horizontalTabItemConfig,
    verticalTabItemConfig,
    headerTabItemConfig,
    component,
    mergeConfig,
} from '@salutejs/plasma-new-hope/styled-components';

import { config as horizontalConfig } from './horizontal/HorizontalTabItem.config';
import { config as verticalConfig } from './vertical/VerticalTabItem.config';
import { config as headerConfig } from './header/HeaderTabItem.config';

const mergedHorizontalTabItemConfig = mergeConfig(horizontalTabItemConfig, horizontalConfig);
const HorizontalTabItem = component(mergedHorizontalTabItemConfig);

const mergedVerticalTabItemConfig = mergeConfig(verticalTabItemConfig, verticalConfig);
const VerticalTabItem = component(mergedVerticalTabItemConfig);

const mergedHeaderTabItemConfig = mergeConfig(headerTabItemConfig, headerConfig);
const HeaderTabItem = component(mergedHeaderTabItemConfig);

type TabItemProps =
    | (ComponentProps<typeof HorizontalTabItem> & { header?: false })
    | (ComponentProps<typeof HeaderTabItem> & { header: true })
    | ComponentProps<typeof VerticalTabItem>;

/**
 * Элемент списка, недопустимо использовать вне компонента Tabs.
 */
export const TabItem = (props: TabItemProps) => {
    if (props.orientation === 'vertical') {
        return <VerticalTabItem {...props} />;
    }

    if (props.header) {
        return <HeaderTabItem {...props} />;
    }

    return <HorizontalTabItem {...props} />;
};
