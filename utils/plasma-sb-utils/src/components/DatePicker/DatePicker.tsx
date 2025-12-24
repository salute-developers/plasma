import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta, createRangeMeta } from './meta';
import { createDefaultStory, createRangeStory } from './stories';

type CreateDatePickerStoriesProps = {
    component: any;
    componentConfig: any;
    iconButton?: any;
    embedIconButton?: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
    additionalComponents?: {};
};

export const getDatePickerStories = (config: CreateDatePickerStoriesProps) => {
    const { component, componentConfig, ...rest } = config;

    const datePickerConfig = getConfigVariations(componentConfig);

    const meta = createMeta({
        component,
        componentConfig: datePickerConfig,
        ...rest,
    });

    const DefaultStoryComponent = createDefaultStory(component);

    const Default = {
        render: (args: any) => <DefaultStoryComponent {...args} />,
    };

    return {
        meta,
        Default,
    };
};

export const getDatePickerRangeStories = (config: CreateDatePickerStoriesProps) => {
    const { component, componentConfig, iconButton, embedIconButton, ...rest } = config;

    const datePickerRangeConfig = getConfigVariations(componentConfig);

    const meta = createRangeMeta({
        component,
        componentConfig: datePickerRangeConfig,
        ...rest,
    });

    const RangeStoryComponent = createRangeStory(component, iconButton, embedIconButton);

    const Range = {
        render: (args: any) => <RangeStoryComponent {...args} />,
    };

    return {
        meta,
        Range,
    };
};
