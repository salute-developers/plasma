import React from 'react';

import { getConfigVariations } from '../../helpers';

import { createMeta } from './meta';
import { createDefaultStory } from './stories';

type CreateDateTimePickerStoriesProps = {
    component: any;
    componentConfig: any;
    title?: string;
    disablePropsList?: string[];
    defaultArgs?: {};
    additionalArgTypes?: {};
};

export const getDateTimePickerStories = (config: CreateDateTimePickerStoriesProps) => {
    const { component, componentConfig, ...rest } = config;

    const dateTimePickerConfig = getConfigVariations(componentConfig);

    const meta = createMeta({
        component,
        componentConfig: dateTimePickerConfig,
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
