import React, { ComponentProps } from 'react';
import {
    horizontalTabItemConfig,
    horizontalIconTabItemConfig,
    verticalTabItemConfig,
    verticalIconTabItemConfig,
    component,
    mergeConfig,
    fixedForwardRef,
} from '@salutejs/plasma-new-hope/styled-components';

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

export type HorizontalTabItemProps = ComponentProps<typeof HorizontalTabItem>;
export type VerticalTabItemProps = ComponentProps<typeof VerticalTabItem>;

export type TabItemProps = HorizontalTabItemProps | VerticalTabItemProps;

/**
 * Элемент списка, недопустимо использовать вне компонента Tabs.
 */
export const TabItem = fixedForwardRef<HTMLButtonElement, TabItemProps>((props: TabItemProps, ref) => {
    if (props.orientation === 'vertical') {
        return <VerticalTabItem ref={ref} {...(props as VerticalTabItemProps)} />;
    }

    return <HorizontalTabItem ref={ref} {...(props as HorizontalTabItemProps)} />;
});

export type HorizontalIconTabItemProps = ComponentProps<typeof HorizontalIconTabItem>;
export type VerticalIconTabItemProps = ComponentProps<typeof VerticalIconTabItem>;

export type IconTabItemProps = HorizontalIconTabItemProps | VerticalIconTabItemProps;

export const IconTabItem = fixedForwardRef<HTMLButtonElement, IconTabItemProps>((props: IconTabItemProps, ref) => {
    if (props.orientation === 'vertical') {
        return <VerticalIconTabItem ref={ref} {...(props as VerticalIconTabItemProps)} />;
    }

    return <HorizontalIconTabItem ref={ref} {...(props as HorizontalIconTabItemProps)} />;
});
