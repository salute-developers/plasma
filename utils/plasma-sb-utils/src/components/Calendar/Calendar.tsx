import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory, createRangeStory } from './stories';

type CreateStoriesProps = {
    component: any;
    componentConfig: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
    additionalComponents: {
        Tabs: any;
        TabItem: any;
        Heading: any;
        CalendarBase: any;
        CalendarDouble: any;
        CalendarBaseRange: any;
        CalendarDoubleRange: any;
    };
};

export const getCalendarStories = (config: CreateStoriesProps) => {
    const { component, componentConfig, additionalComponents, ...rest } = config;

    const calendarConfig = getConfigVariations(componentConfig);

    const meta = createMeta({
        component,
        componentConfig: calendarConfig,
        ...rest,
    });

    const DefaultStoryComponent = createDefaultStory(component, additionalComponents);
    const RangeStoryComponent = createRangeStory(component, additionalComponents);

    const Default = {
        render: (args: any) => <DefaultStoryComponent {...args} />,
    };

    const Range = {
        render: (args: any) => <RangeStoryComponent {...args} />,
    };

    return {
        meta,
        Default,
        Range,
    };
};
