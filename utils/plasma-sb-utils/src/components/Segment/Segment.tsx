import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory, createIconItemStory } from './stories';

type CreateSegmentStoriesProps = {
    SegmentGroup: any;
    SegmentItem: any;
    SegmentIconItem?: any;
    SegmentProvider: any;
    componentConfig: { group: any; item: any; iconItem?: any };
    CounterComponent?: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
    decorators?: any[];

    useSegment: () => {
        selectedSegmentItems: string[];
    };
    customGetContentLeft?: (contentLeftOption: string, size: string) => JSX.Element | undefined;
    customGetContentRight?: (
        contentRightOption: string,
        size: string,
        segmentItemView?: string | undefined,
        isSelected?: boolean | undefined,
    ) => JSX.Element | 'Text' | undefined;
};

export const getSegmentStories = (config: CreateSegmentStoriesProps) => {
    const {
        SegmentGroup,
        SegmentItem,
        SegmentIconItem,
        SegmentProvider,
        componentConfig,
        CounterComponent,
        decorators,
        useSegment,
        customGetContentLeft,
        customGetContentRight,
        ...rest
    } = config;

    const segmentGroupConfig = getConfigVariations(componentConfig.group);
    const segmentItemConfig = getConfigVariations(componentConfig.item);
    const segmentIconItemConfig = componentConfig.iconItem ? getConfigVariations(componentConfig.iconItem) : null;

    const { defaults } = componentConfig.item;

    const meta = createMeta({
        component: SegmentGroup,
        componentConfig: { group: segmentGroupConfig, item: segmentItemConfig },
        decorators,
        useSegment,
        defaultArgs: {
            size: defaults.size,
            segmentItemView: defaults.view,
        },
        ...rest,
    });

    const DefaultStoryComponent = createDefaultStory({
        SegmentGroup,
        SegmentItem,
        SegmentProvider,
        CounterComponent,
        useSegment,
        customGetContentLeft,
        customGetContentRight,
    });
    const IconItemStoryComponent = createIconItemStory({
        SegmentGroup,
        SegmentIconItem,
        SegmentProvider,
    });

    const Default = {
        render: (args: any) => <DefaultStoryComponent {...args} />,
    };

    const IconItem = {
        render: (args: any) => <IconItemStoryComponent {...args} />,
        args: {
            segmentItemView: componentConfig.iconItem?.defaults?.view,
        },
        argTypes: {
            segmentItemView: {
                options: segmentIconItemConfig?.views,
                control: { type: 'select' },
            },
        },
    };

    return {
        meta,
        Default,
        IconItem,
    };
};
