import React, { ComponentProps } from 'react';
import {
    horizontalTabItemConfig,
    horizontalIconTabItemConfig,
    verticalTabItemConfig,
    verticalIconTabItemConfig,
    component,
    mergeConfig,
    fixedForwardRef,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';

import { config as horizontalConfig } from './horizontal/HorizontalTabItem.config';
import { config as horizontalIconConfig } from './horizontal/HorizontalIconTabItem.config';
import { config as verticalConfig } from './vertical/VerticalTabItem.config';
import { config as verticalIconConfig } from './vertical/VerticalIconTabItem.config';
import { config as horizontalSegmentConfig } from './horizontal/HorizontalTabItem.segment.config';
import { config as verticalSegmentConfig } from './vertical/VerticalTabItem.segment.config';

const mergedHorizontalTabItemConfig = mergeConfig(horizontalTabItemConfig, horizontalConfig);
const HorizontalTabItem = component(mergedHorizontalTabItemConfig);

const mergedHorizontalTabItemSegmentConfig = mergeConfig(horizontalTabItemConfig, horizontalSegmentConfig);
const HorizontalTabItemSegment = component(mergedHorizontalTabItemSegmentConfig);

const mergedHorizontalIconTabItemConfig = mergeConfig(horizontalIconTabItemConfig, horizontalIconConfig);
const HorizontalIconTabItem = component(mergedHorizontalIconTabItemConfig);

const mergedVerticalTabItemConfig = mergeConfig(verticalTabItemConfig, verticalConfig);
const VerticalTabItem = component(mergedVerticalTabItemConfig);

const mergedVerticalTabItemSegmentConfig = mergeConfig(verticalTabItemConfig, verticalSegmentConfig);
const VerticalTabItemSegment = component(mergedVerticalTabItemSegmentConfig);

const mergedVerticalIconTabItemConfig = mergeConfig(verticalIconTabItemConfig, verticalIconConfig);
const VerticalIconTabItem = component(mergedVerticalIconTabItemConfig);

export type HorizontalTabItemProps = ComponentProps<typeof HorizontalTabItem>;
export type VerticalTabItemProps = ComponentProps<typeof VerticalTabItem>;

export type TabItemProps = HorizontalTabItemProps | VerticalTabItemProps;

type HorizontalTabItemSegmentProps = ComponentProps<typeof HorizontalTabItemSegment>;
type VerticalTabItemSegmentProps = ComponentProps<typeof VerticalTabItemSegment>;
type TabItemSegmentProps = HorizontalTabItemSegmentProps | VerticalTabItemSegmentProps;

const TabItemDefault = fixedForwardRef<HTMLButtonElement, TabItemProps>((props: TabItemProps, ref) => {
    if (props.orientation === 'vertical') {
        return <VerticalTabItem ref={ref} {...(props as VerticalTabItemProps)} />;
    }

    return <HorizontalTabItem ref={ref} {...(props as HorizontalTabItemProps)} />;
});

const TabItemSegment = fixedForwardRef<HTMLButtonElement, TabItemSegmentProps>((props: TabItemSegmentProps, ref) => {
    if (props.orientation === 'vertical') {
        return <VerticalTabItemSegment ref={ref} {...(props as VerticalTabItemSegmentProps)} />;
    }

    return <HorizontalTabItemSegment ref={ref} {...(props as HorizontalTabItemSegmentProps)} />;
});

/**
 * Элемент списка, недопустимо использовать вне компонента Tabs.
 */
export const TabItem = createConditionalComponent({
    default: TabItemDefault,
    segment: TabItemSegment,
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
