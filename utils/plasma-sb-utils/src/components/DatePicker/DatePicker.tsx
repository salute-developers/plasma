import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta, createRangeMeta } from './meta';
import { createDefaultStory, createRangeStory } from './stories';

type CreateDatePickerStoriesProps = {
    component: any;
    componentConfig: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
    additionalComponents?: {};
    customIcon?: (size: string, type?: 'left' | 'right', disabled?: boolean, readOnly?: boolean) => JSX.Element;
};

export const getDatePickerStories = (config: CreateDatePickerStoriesProps) => {
    const { component, componentConfig, customIcon, ...rest } = config;

    const datePickerConfig = getConfigVariations(componentConfig);

    const meta = createMeta({
        component,
        componentConfig: datePickerConfig,
        ...rest,
    });

    const DefaultStoryComponent = createDefaultStory(component, customIcon);

    const Default = {
        render: (args: any) => <DefaultStoryComponent {...args} />,
    };

    return {
        meta,
        Default,
    };
};

export const getDatePickerRangeStories = (config: CreateDatePickerStoriesProps) => {
    const { component, componentConfig, customIcon, ...rest } = config;

    const datePickerRangeConfig = getConfigVariations(componentConfig);

    const meta = createRangeMeta({
        component,
        componentConfig: datePickerRangeConfig,
        ...rest,
    });

    const RangeStoryComponent = createRangeStory(component, customIcon);

    const Range = {
        render: (args: any) => <RangeStoryComponent {...args} />,
    };

    return {
        meta,
        Range,
    };
};
