import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory, createIconItemStory } from './stories';

type CreateSegmentStoriesProps = {
    SegmentGroup: any;
    SegmentItem: any;
    SegmentIconItem?: any;
    SegmentProvider: any;
    componentConfig: any;
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

    const segmentConfig = getConfigVariations(componentConfig);

    const meta = createMeta({
        component: SegmentGroup,
        componentConfig: segmentConfig,
        decorators,
        useSegment,
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
    };

    return {
        meta,
        Default,
        IconItem,
    };
};
