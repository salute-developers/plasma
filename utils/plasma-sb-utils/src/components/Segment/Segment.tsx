import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory } from './stories';

type CreateSegmentStoriesProps = {
    SegmentGroup: any;
    SegmentItem: any;
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

    const Default = {
        render: (args: any) => <DefaultStoryComponent {...args} />,
    };

    return {
        meta,
        Default,
    };
};
