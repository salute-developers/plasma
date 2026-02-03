import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory } from './stories';

type CreateTimePickerStoriesProps = {
    component: any;
    componentConfig: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
};

export const getTimePickerStories = (config: CreateTimePickerStoriesProps) => {
    const { component, componentConfig, ...rest } = config;

    const timePickerConfig = getConfigVariations(componentConfig);

    const meta = createMeta({
        component,
        componentConfig: timePickerConfig,
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
