import React, { ComponentProps, forwardRef } from 'react';
import {
    horizontalTabsConfig,
    verticalTabsConfig,
    component,
    mergeConfig,
    createConditionalComponent,
} from '@salutejs/plasma-new-hope/styled-components';

import { config as horizontalConfig } from './horizontal/HorizontalTabs.config';
import { config as verticalConfig } from './vertical/VerticalTabs.config';
import { config as horizontalSegmentConfig } from './horizontal/HorizontalTabs.segment.config';
import { config as verticalSegmentConfig } from './vertical/VerticalTabs.segment.config';

const mergedHorizontalTabsConfig = mergeConfig(horizontalTabsConfig, horizontalConfig);
const mergedVerticalTabsConfig = mergeConfig(verticalTabsConfig, verticalConfig);
const mergedHorizontalTabsSegmentConfig = mergeConfig(horizontalTabsConfig, horizontalSegmentConfig);
const mergedVerticalTabsSegmentConfig = mergeConfig(verticalTabsConfig, verticalSegmentConfig);

const HorizontalTabs = component(mergedHorizontalTabsConfig);
const VerticalTabs = component(mergedVerticalTabsConfig);
const HorizontalTabsSegment = component(mergedHorizontalTabsSegmentConfig);
const VerticalTabsSegment = component(mergedVerticalTabsSegmentConfig);

type TabsDefaultProps = ComponentProps<typeof HorizontalTabs> | ComponentProps<typeof VerticalTabs>;
type TabsSegmentProps = ComponentProps<typeof HorizontalTabsSegment> | ComponentProps<typeof VerticalTabsSegment>;

const TabsDefault = forwardRef<HTMLDivElement, TabsDefaultProps>((props, ref) => {
    if (props.orientation === 'vertical') {
        return <VerticalTabs ref={ref} {...props} />;
    }

    return <HorizontalTabs ref={ref} {...props} />;
});

const TabsSegment = forwardRef<HTMLDivElement, TabsSegmentProps>((props, ref) => {
    if (props.orientation === 'vertical') {
        return <VerticalTabsSegment ref={ref} {...props} />;
    }

    return <HorizontalTabsSegment ref={ref} {...props} />;
});

/**
 * Контейнер вкладок, основной компонент для пользовательской сборки вкладок.
 */
export const Tabs = createConditionalComponent({
    default: TabsDefault,
    segment: TabsSegment,
});
